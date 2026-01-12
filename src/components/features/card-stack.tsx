"use client";

import { useRef, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SwipeCard, SwipeCardRef } from "./swipe-card";
import { haptics } from "@/lib/haptics";
import { recordSwipe, SwipeAction } from "@/lib/swipe-preferences";
import type { NameData } from "@/lib/names-data";

interface CardStackProps {
  names: NameData[];
  currentIndex: number;
  onSwipeComplete: (name: NameData, action: SwipeAction) => void;
  onShowDetails: (name: NameData) => void;
  onSelectName: (name: string) => void;
}

/**
 * CardStack - Manages the visual stack of swipe cards
 * Shows current card on top with a peek of the next card behind
 */
export function CardStack({
  names,
  currentIndex,
  onSwipeComplete,
  onShowDetails,
  onSelectName,
}: CardStackProps) {
  const cardRef = useRef<SwipeCardRef>(null);

  const currentName = names[currentIndex];
  const nextName = names[currentIndex + 1];
  const hasMore = currentIndex < names.length;

  const handleSwipe = useCallback(
    (direction: "left" | "right" | "up") => {
      if (!currentName) return;

      if (direction === "right") {
        // Like
        haptics.save();
        recordSwipe(currentName.name, "like", currentName.origins, currentName.meanings);
        onSwipeComplete(currentName, "like");
      } else if (direction === "left") {
        // Dislike
        haptics.swipe();
        recordSwipe(currentName.name, "dislike", currentName.origins, currentName.meanings);
        onSwipeComplete(currentName, "dislike");
      } else if (direction === "up") {
        // Show details / Super like
        haptics.save();
        recordSwipe(currentName.name, "superlike", currentName.origins, currentName.meanings);
        onSwipeComplete(currentName, "superlike");
      }
    },
    [currentName, onSwipeComplete]
  );

  const handleTap = useCallback(() => {
    if (!currentName) return;
    haptics.select();
    onSelectName(currentName.name);
  }, [currentName, onSelectName]);

  // Expose swipe methods for action bar
  const triggerSwipe = useCallback((direction: "left" | "right" | "up") => {
    handleSwipe(direction);
  }, [handleSwipe]);

  // Show details without swiping
  const handleShowInfo = useCallback(() => {
    if (!currentName) return;
    haptics.tap();
    onShowDetails(currentName);
  }, [currentName, onShowDetails]);

  if (!hasMore) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px] text-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>
        <h3 className="text-xl font-semibold mb-2">You&apos;ve seen them all!</h3>
        <p className="text-muted text-sm mb-6 max-w-xs">
          Check your favorites or adjust filters to discover more names
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-[400px] sm:h-[450px] w-full flex items-center justify-center">
      {/* Stack container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Next card (behind) - subtle peek */}
        {nextName && (
          <motion.div
            key={`next-${nextName.id}`}
            className="absolute w-[85%] max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] aspect-[3/4] bg-card rounded-3xl border border-border/30 shadow-md"
            initial={{ scale: 0.92, y: 10, opacity: 0.4 }}
            animate={{ scale: 0.92, y: 10, opacity: 0.4 }}
            style={{ zIndex: 1 }}
          />
        )}

        {/* Current card */}
        <AnimatePresence mode="popLayout">
          {currentName && (
            <SwipeCard
              key={currentName.id}
              ref={cardRef}
              name={currentName}
              onSwipe={triggerSwipe}
              onTap={handleTap}
              isTop={true}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Hidden action triggers for external control */}
      <div className="hidden">
        <button data-action="left" onClick={() => triggerSwipe("left")} />
        <button data-action="right" onClick={() => triggerSwipe("right")} />
        <button data-action="up" onClick={() => triggerSwipe("up")} />
        <button data-action="info" onClick={handleShowInfo} />
      </div>
    </div>
  );
}

// Export a hook to control the card stack from outside
export function useCardStackActions() {
  const triggerAction = useCallback((action: "left" | "right" | "up" | "info") => {
    const button = document.querySelector(`[data-action="${action}"]`) as HTMLButtonElement;
    if (button) {
      button.click();
    }
  }, []);

  return {
    swipeLeft: () => triggerAction("left"),
    swipeRight: () => triggerAction("right"),
    superLike: () => triggerAction("up"),
    showInfo: () => triggerAction("info"),
  };
}
