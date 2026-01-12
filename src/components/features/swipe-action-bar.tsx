"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Info, Star, Heart } from "lucide-react";
import { haptics } from "@/lib/haptics";

interface SwipeActionBarProps {
  onSkip: () => void;
  onInfo: () => void;
  onSuperLike: () => void;
  onLike: () => void;
  disabled?: boolean;
}

/**
 * SwipeActionBar - Floating action buttons for swipe actions
 * Includes keyboard shortcuts for desktop users
 */
export function SwipeActionBar({ onSkip, onInfo, onSuperLike, onLike, disabled = false }: SwipeActionBarProps) {
  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (disabled) return;

      // Ignore if typing in input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          haptics.swipe();
          onSkip();
          break;
        case "ArrowRight":
          e.preventDefault();
          haptics.save();
          onLike();
          break;
        case "ArrowUp":
          e.preventDefault();
          haptics.save();
          onSuperLike();
          break;
        case " ": // Space
          e.preventDefault();
          haptics.tap();
          onInfo();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onSkip, onLike, onSuperLike, onInfo, disabled]);

  const buttonBase =
    "flex items-center justify-center rounded-full shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2";

  return (
    <div className="flex items-center justify-center gap-4 py-4">
      {/* Skip button */}
      <motion.button
        onClick={() => {
          haptics.swipe();
          onSkip();
        }}
        disabled={disabled}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${buttonBase} w-14 h-14 bg-card border-2 border-error/30 text-error hover:border-error hover:bg-error/5 focus:ring-error/50`}
        aria-label="Skip this name (Left arrow)"
        title="Skip (←)"
      >
        <X className="w-6 h-6" strokeWidth={2.5} />
      </motion.button>

      {/* Info button */}
      <motion.button
        onClick={() => {
          haptics.tap();
          onInfo();
        }}
        disabled={disabled}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${buttonBase} w-11 h-11 bg-card border border-border text-muted hover:text-foreground hover:border-foreground/30 focus:ring-muted`}
        aria-label="View details (Space)"
        title="Details (Space)"
      >
        <Info className="w-5 h-5" />
      </motion.button>

      {/* Super Like button */}
      <motion.button
        onClick={() => {
          haptics.save();
          onSuperLike();
        }}
        disabled={disabled}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        className={`${buttonBase} w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-amber-300/50 hover:shadow-xl hover:shadow-amber-300/30 focus:ring-amber-400`}
        aria-label="Super like this name (Up arrow)"
        title="Super Like (↑)"
      >
        <Star className="w-5 h-5 fill-current" />
      </motion.button>

      {/* Like button */}
      <motion.button
        onClick={() => {
          haptics.save();
          onLike();
        }}
        disabled={disabled}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`${buttonBase} w-14 h-14 bg-gradient-to-br from-success to-emerald-600 text-white shadow-success/30 hover:shadow-xl hover:shadow-success/30 focus:ring-success`}
        aria-label="Like this name (Right arrow)"
        title="Like (→)"
      >
        <Heart className="w-6 h-6" />
      </motion.button>
    </div>
  );
}

/**
 * Compact keyboard hints for desktop
 */
export function KeyboardHints() {
  return (
    <div className="hidden lg:flex items-center justify-center gap-6 text-xs text-muted/60 mt-2">
      <span>
        <kbd className="px-1.5 py-0.5 bg-secondary rounded text-[10px] font-mono">←</kbd> Skip
      </span>
      <span>
        <kbd className="px-1.5 py-0.5 bg-secondary rounded text-[10px] font-mono">→</kbd> Like
      </span>
      <span>
        <kbd className="px-1.5 py-0.5 bg-secondary rounded text-[10px] font-mono">↑</kbd> Super
      </span>
      <span>
        <kbd className="px-1.5 py-0.5 bg-secondary rounded text-[10px] font-mono">Space</kbd> Info
      </span>
    </div>
  );
}
