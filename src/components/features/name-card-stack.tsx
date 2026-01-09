"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, PanInfo, AnimatePresence } from "framer-motion";
import { Heart, X, Info, Star, TrendingUp, TrendingDown, Sparkles, Gem } from "lucide-react";
import { haptics } from "@/lib/haptics";
import { recordSwipe, SwipeAction } from "@/lib/swipe-preferences";
import type { NameData } from "@/lib/names-data";

// Get trend badge info based on name data
function getTrendBadge(name: NameData): { label: string; icon: React.ReactNode; className: string } | null {
  const { currentRank, trend } = name;

  // Rare names (rank > 500 or unranked)
  if (currentRank > 500 || currentRank <= 0) {
    return {
      label: "Rare",
      icon: <Gem className="w-3 h-3" />,
      className: "bg-purple-100 text-purple-700 border-purple-200",
    };
  }

  // Rising trend
  if (trend === "rising") {
    return {
      label: "Rising",
      icon: <TrendingUp className="w-3 h-3" />,
      className: "bg-emerald-100 text-emerald-700 border-emerald-200",
    };
  }

  // Falling trend
  if (trend === "falling") {
    return {
      label: "Falling",
      icon: <TrendingDown className="w-3 h-3" />,
      className: "bg-orange-100 text-orange-700 border-orange-200",
    };
  }

  // Classic/Stable and popular (top 100)
  if (trend === "stable" && currentRank <= 100) {
    return {
      label: "Classic",
      icon: <Sparkles className="w-3 h-3" />,
      className: "bg-amber-100 text-amber-700 border-amber-200",
    };
  }

  return null;
}

interface NameCardStackProps {
  names: NameData[];
  onSwipeAction: (name: NameData, action: SwipeAction) => void;
  onDetails: (name: NameData) => void;
  onSelect: (name: string) => void;
  onProgressChange?: (current: number, total: number) => void;
}

/**
 * NameCardStack - Tinder-style swipeable card stack for mobile
 * - Swipe right = Like (add to liked list)
 * - Swipe left = Dislike (skip and record)
 * - Heart button = Super Like (add to super liked list)
 * - Swipe up = View details
 * - Tap = Select name for the form
 */
export function NameCardStack({
  names,
  onSwipeAction,
  onDetails,
  onSelect,
  onProgressChange,
}: NameCardStackProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<"left" | "right" | "up" | null>(null);

  // Report progress changes
  useEffect(() => {
    onProgressChange?.(currentIndex, names.length);
  }, [currentIndex, names.length, onProgressChange]);

  const currentName = names[currentIndex];
  const nextName = names[currentIndex + 1];
  const hasMore = currentIndex < names.length;

  const handleSwipe = (direction: "left" | "right" | "up") => {
    if (!currentName) return;

    setExitDirection(direction);

    if (direction === "right") {
      // Like
      haptics.save();
      recordSwipe(currentName.name, "like", currentName.origins, currentName.meanings);
      onSwipeAction(currentName, "like");
    } else if (direction === "left") {
      // Dislike
      haptics.swipe();
      recordSwipe(currentName.name, "dislike", currentName.origins, currentName.meanings);
      onSwipeAction(currentName, "dislike");
    } else if (direction === "up") {
      // View details (don't record as swipe)
      haptics.tap();
      onDetails(currentName);
      setExitDirection(null);
      return; // Don't advance to next card
    }

    // Move to next card after animation
    setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setExitDirection(null);
    }, 200);
  };

  const handleSuperLike = () => {
    if (!currentName) return;

    haptics.save();
    recordSwipe(currentName.name, "superlike", currentName.origins, currentName.meanings);
    onSwipeAction(currentName, "superlike");

    setExitDirection("right");
    setTimeout(() => {
      setCurrentIndex((i) => i + 1);
      setExitDirection(null);
    }, 200);
  };

  if (!hasMore) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="text-4xl mb-4">🎉</div>
        <p className="text-muted">You&apos;ve seen all the names!</p>
        <button
          onClick={() => setCurrentIndex(0)}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-full text-sm font-medium"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="relative h-80 w-full">
      {/* Card stack */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Next card (behind) */}
        {nextName && (
          <div className="absolute w-[90%] h-64 bg-card rounded-3xl border border-border shadow-sm scale-95 opacity-60" />
        )}

        {/* Current card */}
        <AnimatePresence mode="wait">
          {currentName && !exitDirection && (
            <SwipeCard
              key={currentName.id}
              name={currentName}
              onSwipe={handleSwipe}
              onTap={() => {
                haptics.select();
                onSelect(currentName.name);
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* Action buttons */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end gap-4 pb-4">
        {/* Dislike button */}
        <button
          onClick={() => handleSwipe("left")}
          aria-label="Skip this name"
          title="Skip - Not for me"
          className="w-14 h-14 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-error hover:scale-110 transition-transform"
        >
          <X className="w-6 h-6" aria-hidden="true" />
        </button>

        {/* Info button */}
        <button
          onClick={() => handleSwipe("up")}
          aria-label="View name details"
          title="Details - Learn more about this name"
          className="w-11 h-11 rounded-full bg-card border border-border shadow-md flex items-center justify-center text-muted hover:scale-110 transition-transform"
        >
          <Info className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Super Like button */}
        <button
          onClick={handleSuperLike}
          aria-label="Super like this name"
          title="Super Like - Add to top favorites!"
          className="w-12 h-12 rounded-full bg-amber-400 shadow-md flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <Star className="w-5 h-5 fill-current" aria-hidden="true" />
        </button>

        {/* Like button */}
        <button
          onClick={() => handleSwipe("right")}
          aria-label="Like this name"
          title="Like - Save to favorites"
          className="w-14 h-14 rounded-full bg-success shadow-md flex items-center justify-center text-white hover:scale-110 transition-transform"
        >
          <Heart className="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

interface SwipeCardProps {
  name: NameData;
  onSwipe: (direction: "left" | "right" | "up") => void;
  onTap: () => void;
}

function SwipeCard({ name, onSwipe, onTap }: SwipeCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Rotation based on horizontal drag
  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  // Opacity for like/dislike indicators
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const dislikeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 100;
    const velocityThreshold = 500;

    const { offset, velocity } = info;

    // Swipe right (like)
    if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
      onSwipe("right");
      return;
    }

    // Swipe left (dislike)
    if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
      onSwipe("left");
      return;
    }

    // Swipe up (details)
    if (offset.y < -swipeThreshold || velocity.y < -velocityThreshold) {
      onSwipe("up");
      return;
    }
  };

  return (
    <motion.div
      style={{ x, y, rotate }}
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      onDragEnd={handleDragEnd}
      onClick={onTap}
      whileTap={{ scale: 0.98 }}
      className="absolute w-[90%] h-64 cursor-grab active:cursor-grabbing"
    >
      <div className="relative w-full h-full bg-card rounded-3xl border border-border shadow-lg glass-card overflow-hidden">
        {/* Like indicator */}
        <motion.div
          style={{ opacity: likeOpacity }}
          className="absolute top-4 left-4 px-3 py-1 bg-success text-white rounded-lg font-bold text-sm rotate-[-15deg]"
        >
          LIKE
        </motion.div>

        {/* Dislike indicator */}
        <motion.div
          style={{ opacity: dislikeOpacity }}
          className="absolute top-4 right-4 px-3 py-1 bg-error text-white rounded-lg font-bold text-sm rotate-[15deg]"
        >
          NOPE
        </motion.div>

        {/* Card content */}
        <div className="flex flex-col items-center justify-center h-full p-6">
          <h3 className="font-heading text-4xl font-semibold text-foreground mb-2">
            {name.name}
          </h3>
          {name.meanings.length > 0 && (
            <p className="text-base text-foreground/80 mb-1 text-center">
              &ldquo;{name.meanings[0]}&rdquo;
            </p>
          )}
          {name.origins.length > 0 && (
            <p className="text-sm text-muted mb-2">
              {name.origins.slice(0, 2).join(", ")} origin
            </p>
          )}

          {/* Trend badge and rank */}
          <div className="flex items-center gap-2 mt-1">
            {(() => {
              const badge = getTrendBadge(name);
              if (badge) {
                return (
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${badge.className}`}
                    title={`This name is ${badge.label.toLowerCase()}`}
                  >
                    {badge.icon}
                    {badge.label}
                  </span>
                );
              }
              return null;
            })()}
            {name.currentRank > 0 && name.currentRank <= 1000 && (
              <span className="text-xs text-muted" title="Current popularity rank">
                #{name.currentRank}
              </span>
            )}
          </div>

          <p className="text-xs text-muted/60 mt-3">
            Tap to select · Swipe to rate
          </p>
        </div>
      </div>
    </motion.div>
  );
}
