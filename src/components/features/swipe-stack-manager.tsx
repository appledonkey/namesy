"use client";

import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import type { NameData, NameVibe } from "@/lib/names-data";
import {
  getAllNames,
  filterByVibes,
  filterByLength,
  filterByPopularity,
  filterByStartingLetter,
  filterByOrigins,
} from "@/lib/names-data";
import { getSwipeStatus, recordSwipe } from "@/lib/swipe-preferences";
import { updateSession, type AchievementId } from "@/lib/swipe-session";
import { haptics } from "@/lib/haptics";
import { SwipeCardEnhanced, type SwipeCardEnhancedRef } from "./swipe-card-enhanced";

export interface FilterState {
  vibes: NameVibe[];
  length: "any" | "short" | "medium" | "long";
  popularity: "any" | "popular" | "uncommon" | "rare";
  startingLetter: string | null;
  origins: string[];
}

export const defaultFilters: FilterState = {
  vibes: [],
  length: "any",
  popularity: "any",
  startingLetter: null,
  origins: [],
};

interface SwipeStackManagerProps {
  gender: "M" | "F" | "all";
  filters?: FilterState;
  lastName?: string | null;
  onSwipe?: (name: NameData, action: "like" | "superlike" | "skip") => void;
  onCurrentNameChange?: (name: NameData | null) => void;
  onAchievement?: (achievement: AchievementId) => void;
  onStreakUpdate?: (streak: number) => void;
  onTapCard?: (name: NameData) => void;
  onCountUpdate?: (total: number, remaining: number) => void;
}

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function SwipeStackManager({
  gender,
  filters = defaultFilters,
  lastName,
  onSwipe,
  onCurrentNameChange,
  onAchievement,
  onStreakUpdate,
  onTapCard,
  onCountUpdate,
}: SwipeStackManagerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef<SwipeCardEnhancedRef>(null);

  // Build filtered and shuffled name pool
  const namePool = useMemo(() => {
    let names = getAllNames();

    // Filter by gender
    if (gender !== "all") {
      names = names.filter((n) => n.gender === gender || n.gender === "N");
    }

    // Apply filters
    if (filters.vibes.length > 0) {
      names = filterByVibes(names, filters.vibes);
    }
    if (filters.length !== "any") {
      names = filterByLength(names, filters.length);
    }
    if (filters.popularity !== "any") {
      names = filterByPopularity(names, filters.popularity);
    }
    if (filters.startingLetter) {
      names = filterByStartingLetter(names, filters.startingLetter);
    }
    if (filters.origins.length > 0) {
      names = filterByOrigins(names, filters.origins);
    }

    // Filter out already-swiped names
    names = names.filter((n) => getSwipeStatus(n.name) === null);

    // Shuffle
    return shuffleArray(names);
  }, [gender, filters]);

  // Update count when pool changes
  useEffect(() => {
    onCountUpdate?.(namePool.length, namePool.length - currentIndex);
  }, [namePool.length, currentIndex, onCountUpdate]);

  // Get visible cards (current + next 2)
  const visibleCards = useMemo(() => {
    return namePool.slice(currentIndex, currentIndex + 3);
  }, [namePool, currentIndex]);

  // Notify parent of current name
  useEffect(() => {
    const currentName = visibleCards[0] || null;
    onCurrentNameChange?.(currentName);
  }, [visibleCards, onCurrentNameChange]);

  // Handle swipe action
  const handleSwipe = useCallback(
    (direction: "left" | "right" | "up") => {
      const currentName = visibleCards[0];
      if (!currentName) return;

      let action: "like" | "superlike" | "skip";
      if (direction === "right") {
        action = "like";
        haptics.save();
      } else if (direction === "up") {
        action = "superlike";
        haptics.save();
      } else {
        action = "skip";
        haptics.swipe();
      }

      // Record to localStorage
      recordSwipe(currentName.name, action === "skip" ? "dislike" : action, currentName.origins, currentName.meanings);

      // Update session and check achievements
      const { session, newAchievements } = updateSession(action === "skip" ? "skip" : action);

      // Notify parent
      onSwipe?.(currentName, action);
      onStreakUpdate?.(session.currentStreak);

      // Fire achievements
      newAchievements.forEach((achievement) => {
        onAchievement?.(achievement);
      });

      // Advance to next card
      setCurrentIndex((prev) => prev + 1);
    },
    [visibleCards, onSwipe, onAchievement, onStreakUpdate]
  );

  // Handle tap for details
  const handleTap = useCallback(() => {
    const currentName = visibleCards[0];
    if (currentName) {
      haptics.tap();
      onTapCard?.(currentName);
    }
  }, [visibleCards, onTapCard]);

  // Expose swipe methods for external buttons
  const swipeLeft = useCallback(() => {
    handleSwipe("left");
  }, [handleSwipe]);

  const swipeRight = useCallback(() => {
    handleSwipe("right");
  }, [handleSwipe]);

  const swipeUp = useCallback(() => {
    handleSwipe("up");
  }, [handleSwipe]);

  // Empty state
  if (visibleCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] text-center px-8">
        <div className="text-6xl mb-4">
          {currentIndex > 0 ? "🎉" : "😅"}
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          {currentIndex > 0 ? "You've seen them all!" : "No names match your filters"}
        </h3>
        <p className="text-muted text-sm">
          {currentIndex > 0
            ? "Check your favorites or adjust filters to see more names."
            : "Try removing some filters to see more names."}
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: 420 }}>
      <AnimatePresence mode="popLayout">
        {visibleCards.map((name, stackIndex) => (
          <SwipeCardEnhanced
            key={name.id}
            ref={stackIndex === 0 ? cardRef : undefined}
            name={name}
            isTop={stackIndex === 0}
            lastName={lastName}
            showSocialProof={stackIndex === 0 && Math.random() > 0.7}
            onSwipe={handleSwipe}
            onTap={handleTap}
          />
        ))}
      </AnimatePresence>

      {/* Hidden buttons for external control */}
      <button
        onClick={swipeLeft}
        className="sr-only"
        aria-label="Skip"
        data-swipe-left
      />
      <button
        onClick={swipeRight}
        className="sr-only"
        aria-label="Like"
        data-swipe-right
      />
      <button
        onClick={swipeUp}
        className="sr-only"
        aria-label="Super Like"
        data-swipe-up
      />
    </div>
  );
}

// Export swipe function type for external use
export type SwipeFunction = (direction: "left" | "right" | "up") => void;
