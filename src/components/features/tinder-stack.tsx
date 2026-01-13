"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TinderCard } from "./tinder-card";
import { X, Heart } from "lucide-react";
import { getAllNames, type NameData } from "@/lib/names-data";
import { recordSwipe } from "@/lib/swipe-preferences";

type GenderFilter = "boy" | "girl" | "all";

interface TinderStackProps {
  genderFilter: GenderFilter;
  onNameSelect: (name: string) => void;
  onCurrentNameChange: (name: string | null) => void;
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

export function TinderStack({ genderFilter, onNameSelect, onCurrentNameChange }: TinderStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [names, setNames] = useState<NameData[]>([]);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | null>(null);

  // Load and filter names
  useEffect(() => {
    let allNames = getAllNames();

    // Filter by gender
    if (genderFilter === "boy") {
      allNames = allNames.filter((n) => n.gender === "M" || n.gender === "N");
    } else if (genderFilter === "girl") {
      allNames = allNames.filter((n) => n.gender === "F" || n.gender === "N");
    }

    // Shuffle
    setNames(shuffleArray(allNames));
    setCurrentIndex(0);
  }, [genderFilter]);

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
    }, 200);
  }, [names, currentIndex, onNameSelect]);

  // Button handlers
  const handleSkip = () => handleSwipe("left");
  const handleLike = () => handleSwipe("right");

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleSkip();
      if (e.key === "ArrowRight") handleLike();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleSkip, handleLike]);

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
          className="text-6xl mb-6"
        >
          🎉
        </motion.div>
        <h3 className="text-2xl font-heading font-semibold mb-2">You&apos;ve seen them all!</h3>
        <p className="text-muted mb-6">Check your favorites or refresh to start over</p>
        <button
          onClick={() => {
            setNames(shuffleArray(names));
            setCurrentIndex(0);
          }}
          className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
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
                style={{
                  scale: 1 - stackIndex * 0.05,
                  y: stackIndex * 12,
                  opacity: 1 - stackIndex * 0.2,
                  zIndex: 3 - stackIndex,
                }}
              />
            );
          })}
        </AnimatePresence>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-8 mt-8">
        {/* Skip Button */}
        <motion.button
          onClick={handleSkip}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-white border-2 border-red-200 flex items-center justify-center
            shadow-lg hover:shadow-xl hover:border-red-400 transition-all duration-200 group"
        >
          <X className="w-8 h-8 text-red-400 group-hover:text-red-500 transition-colors" />
        </motion.button>

        {/* Like Button */}
        <motion.button
          onClick={handleLike}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-16 h-16 rounded-full bg-white border-2 border-green-200 flex items-center justify-center
            shadow-lg hover:shadow-xl hover:border-green-400 transition-all duration-200 group"
        >
          <Heart className="w-8 h-8 text-green-400 group-hover:text-green-500 group-hover:fill-green-500 transition-colors" />
        </motion.button>
      </div>

      {/* Keyboard hint */}
      <p className="text-sm text-muted mt-6">
        Use <kbd className="px-2 py-1 bg-secondary rounded text-xs">←</kbd> to skip,{" "}
        <kbd className="px-2 py-1 bg-secondary rounded text-xs">→</kbd> to like
      </p>
    </div>
  );
}
