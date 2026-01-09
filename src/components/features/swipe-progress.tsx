"use client";

import { motion } from "framer-motion";

interface SwipeProgressProps {
  current: number;
  total: number;
  likedCount: number;
}

export function SwipeProgress({ current, total, likedCount }: SwipeProgressProps) {
  const progress = total > 0 ? (current / total) * 100 : 0;
  const remaining = total - current;

  if (total === 0) return null;

  return (
    <div className="bg-card rounded-xl border border-border p-3">
      <div className="flex items-center justify-between text-xs text-muted mb-2">
        <span>{current} of {total} reviewed</span>
        <span>{remaining} remaining</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Stats */}
      <div className="flex items-center justify-center gap-4 mt-2 text-xs">
        <span className="text-success">
          {likedCount} liked
        </span>
        <span className="text-muted">
          {Math.round(progress)}% complete
        </span>
      </div>
    </div>
  );
}
