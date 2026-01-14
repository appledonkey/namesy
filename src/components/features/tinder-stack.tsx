"use client";

import { useState, useCallback, useMemo, useEffect, forwardRef, useImperativeHandle } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TinderCard } from "./tinder-card";
import { X, Heart, Shuffle, CheckCircle, Undo2 } from "lucide-react";
import {
  getAllNames,
  filterByVibes,
  filterByLength,
  filterByPopularity,
  filterByStartingLetter,
  filterByOrigins,
  type NameData,
} from "@/lib/names-data";
import { recordSwipe } from "@/lib/swipe-preferences";
import { type NameFiltersState } from "./name-filters";

type GenderFilter = "boy" | "girl" | "all";

interface TinderStackProps {
  genderFilter: GenderFilter;
  filters: NameFiltersState;
  onNameSelect: (name: string) => void;
  onCurrentNameChange: (name: string | null) => void;
  onFilteredCountChange?: (count: number) => void;
}

export interface TinderStackRef {
  jumpToRandom: () => void;
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

// Track last action for undo
interface LastAction {
  name: NameData;
  direction: "left" | "right";
  index: number;
}

export const TinderStack = forwardRef<TinderStackRef, TinderStackProps>(function TinderStack(
  { genderFilter, filters, onNameSelect, onCurrentNameChange, onFilteredCountChange },
  ref
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [names, setNames] = useState<NameData[]>([]);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);
  const [lastAction, setLastAction] = useState<LastAction | null>(null);
  const [isUndoing, setIsUndoing] = useState(false);

  // Jump to random card
  const jumpToRandom = useCallback(() => {
    if (names.length > 0) {
      const randomIndex = Math.floor(Math.random() * names.length);
      setCurrentIndex(randomIndex);
      setLastAction(null); // Clear undo after jump
    }
  }, [names]);

  // Expose jumpToRandom via ref
  useImperativeHandle(ref, () => ({
    jumpToRandom,
  }), [jumpToRandom]);

  // Load and filter names
  useEffect(() => {
    let filteredNames = getAllNames();

    // Filter by gender
    if (genderFilter === "boy") {
      filteredNames = filteredNames.filter((n) => n.gender === "M" || n.gender === "N");
    } else if (genderFilter === "girl") {
      filteredNames = filteredNames.filter((n) => n.gender === "F" || n.gender === "N");
    }

    // Apply all filters
    if (filters.vibes.length > 0) {
      filteredNames = filterByVibes(filteredNames, filters.vibes);
    }
    filteredNames = filterByLength(filteredNames, filters.length);
    filteredNames = filterByPopularity(filteredNames, filters.popularity);
    filteredNames = filterByStartingLetter(filteredNames, filters.startingLetter);
    filteredNames = filterByOrigins(filteredNames, filters.origins);

    // Report filtered count
    onFilteredCountChange?.(filteredNames.length);

    // Shuffle
    setNames(shuffleArray(filteredNames));
    setCurrentIndex(0);
    setLastAction(null);
  }, [genderFilter, filters, onFilteredCountChange]);

  // Get visible cards (current + 2 behind)
  const visibleCards = useMemo(() => {
    return names.slice(currentIndex, currentIndex + 3);
  }, [names, currentIndex]);

  // Notify parent of current card name
  useEffect(() => {
    const currentName = names[currentIndex];
    onCurrentNameChange(currentName?.name ?? null);
  }, [names, currentIndex, onCurrentNameChange]);

  const handleSwipe = useCallback((direction: "left" | "right") => {
    const currentName = names[currentIndex];
    if (!currentName) return;

    // Save for undo
    setLastAction({
      name: currentName,
      direction,
      index: currentIndex,
    });

    setExitDirection(direction);

    if (direction === "right") {
      // Like - record and select
      recordSwipe(currentName.name, "like", currentName.origins, currentName.meanings);
      onNameSelect(currentName.name);
    } else {
      // Skip - record
      recordSwipe(currentName.name, "dislike", currentName.origins, currentName.meanings);
    }

    // Move to next card after animation
    setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setExitDirection(null);
    }, 300);
  }, [names, currentIndex, onNameSelect]);

  // Undo last swipe
  const handleUndo = useCallback(() => {
    if (!lastAction || isUndoing) return;

    setIsUndoing(true);

    // Reverse the swipe action in storage
    // Re-record with opposite action or just go back
    recordSwipe(
      lastAction.name.name,
      lastAction.direction === "right" ? "dislike" : "like",
      lastAction.name.origins,
      lastAction.name.meanings
    );

    // Go back to previous index
    setCurrentIndex(lastAction.index);
    setLastAction(null);

    // Reset undo state after animation
    setTimeout(() => {
      setIsUndoing(false);
    }, 300);
  }, [lastAction, isUndoing]);

  // Button handlers
  const handleSkip = () => handleSwipe("left");
  const handleLike = () => handleSwipe("right");

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleSkip();
      if (e.key === "ArrowRight") handleLike();
      if ((e.key === "z" || e.key === "Z") && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        handleUndo();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip, handleLike, handleUndo]);

  if (names.length === 0) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <p className="text-muted">Loading names...</p>
      </div>
    );
  }

  if (currentIndex >= names.length) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-6"
        >
          <CheckCircle className="w-16 h-16 text-green-500" />
        </motion.div>
        <h3 className="text-2xl font-heading font-semibold mb-2">You&apos;ve seen them all!</h3>
        <p className="text-muted mb-6">Check your favorites or refresh to start over</p>
        <button
          onClick={() => {
            setNames(shuffleArray(names));
            setCurrentIndex(0);
            setLastAction(null);
          }}
          className="px-6 py-3 bg-primary text-white rounded-xl font-heading font-medium hover:bg-primary/90 transition-colors"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {/* Card Stack */}
      <div className="relative h-[500px] w-[340px] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          {visibleCards.map((name, index) => {
            const isTop = index === 0;
            const stackIndex = index;

            return (
              <TinderCard
                key={name.id}
                name={name}
                onSwipe={handleSwipe}
                isTop={isTop}
                forceExit={isTop ? exitDirection : null}
                style={{
                  scale: 1 - stackIndex * 0.05,
                  y: stackIndex * 12,
                  opacity: 1,
                  zIndex: 3 - stackIndex,
                }}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8">
        {/* Skip Button */}
        <motion.button
          onClick={handleSkip}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-white border-2 border-red-200 flex items-center justify-center
            shadow-lg hover:shadow-xl hover:border-red-400 transition-all duration-200 group"
        >
          <X className="w-7 h-7 text-red-400 group-hover:text-red-500 transition-colors" />
        </motion.button>

        {/* Undo Button */}
        <motion.button
          onClick={handleUndo}
          disabled={!lastAction || isUndoing}
          whileHover={lastAction ? { scale: 1.1 } : undefined}
          whileTap={lastAction ? { scale: 0.9 } : undefined}
          className={`w-11 h-11 rounded-full bg-white border-2 flex items-center justify-center
            shadow-lg transition-all duration-200 group ${
              lastAction
                ? "border-amber-200 hover:shadow-xl hover:border-amber-400"
                : "border-gray-100 opacity-40 cursor-not-allowed"
            }`}
        >
          <Undo2 className={`w-5 h-5 transition-colors ${
            lastAction ? "text-amber-400 group-hover:text-amber-500" : "text-gray-300"
          }`} />
        </motion.button>

        {/* Random Button */}
        <motion.button
          onClick={jumpToRandom}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-11 h-11 rounded-full bg-white border-2 border-purple-200 flex items-center justify-center
            shadow-lg hover:shadow-xl hover:border-purple-400 transition-all duration-200 group"
        >
          <Shuffle className="w-5 h-5 text-purple-400 group-hover:text-purple-500 transition-colors" />
        </motion.button>

        {/* Like Button */}
        <motion.button
          onClick={handleLike}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 rounded-full bg-white border-2 border-green-200 flex items-center justify-center
            shadow-lg hover:shadow-xl hover:border-green-400 transition-all duration-200 group"
        >
          <Heart className="w-7 h-7 text-green-400 group-hover:text-green-500 group-hover:fill-green-500 transition-colors" />
        </motion.button>
      </div>

      {/* Progress Counter */}
      <p className="text-sm text-muted mt-4 font-heading">
        {currentIndex + 1} / {names.length} names
      </p>

      {/* Keyboard hint */}
      <p className="text-xs text-muted/60 mt-2">
        <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">←</kbd> skip
        {" · "}
        <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">→</kbd> like
        {lastAction && (
          <>
            {" · "}
            <kbd className="px-1.5 py-0.5 bg-secondary rounded text-xs">⌘Z</kbd> undo
          </>
        )}
      </p>
    </div>
  );
});
