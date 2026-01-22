"use client";

import { motion } from "framer-motion";
import { SlidersHorizontal, Heart } from "lucide-react";

interface SwipeHeaderProps {
  totalNames: number;
  remainingNames: number;
  likedCount: number;
  superLikedCount: number;
  skippedCount: number;
  currentStreak: number;
  onFiltersClick?: () => void;
  onFavoritesClick?: () => void;
}

export function SwipeHeader({
  totalNames,
  remainingNames,
  likedCount,
  superLikedCount,
  skippedCount,
  currentStreak,
  onFiltersClick,
  onFavoritesClick,
}: SwipeHeaderProps) {
  const reviewed = totalNames - remainingNames;
  const progressPercent = totalNames > 0 ? (reviewed / totalNames) * 100 : 0;
  const totalLiked = likedCount + superLikedCount;

  return (
    <div className="w-full px-4 py-3">
      {/* Top row: Filters + Favorites */}
      <div className="flex items-center justify-between mb-3">
        {/* Filters button */}
        <button
          onClick={onFiltersClick}
          className="flex items-center gap-2 px-3 py-2 rounded-xl bg-secondary hover:bg-secondary-dark text-muted hover:text-foreground transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm font-heading">Filters</span>
        </button>

        {/* Streak badge (if active) */}
        {currentStreak >= 3 && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white text-sm font-heading font-medium shadow-lg"
          >
            <span className="text-base">🔥</span>
            <span>{currentStreak}</span>
          </motion.div>
        )}

        {/* Favorites button */}
        <button
          onClick={onFavoritesClick}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secondary hover:bg-secondary-dark text-muted hover:text-foreground transition-colors"
        >
          <Heart className="w-4 h-4 text-success" />
          <span className="text-sm font-heading">{totalLiked}</span>
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full">
        <div className="flex items-center justify-between text-xs text-muted mb-1.5">
          <span>
            {reviewed} of {totalNames} reviewed
          </span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
          />
        </div>
      </div>

      {/* Stats row */}
      <div className="flex items-center justify-center gap-6 mt-2 text-xs">
        <span className="text-success font-medium">{likedCount} liked</span>
        {superLikedCount > 0 && (
          <span className="text-amber-500 font-medium">{superLikedCount} super</span>
        )}
        <span className="text-muted">{skippedCount} skipped</span>
      </div>
    </div>
  );
}
