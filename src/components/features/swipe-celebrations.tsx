"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ACHIEVEMENTS, type AchievementId } from "@/lib/swipe-session";

interface StreakToastProps {
  streak: number;
  isVisible: boolean;
  onDismiss: () => void;
}

export function StreakToast({ streak, isVisible, onDismiss }: StreakToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onDismiss, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onDismiss]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50"
        >
          <div className="px-5 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-xl flex items-center gap-2">
            <span className="text-xl">🔥</span>
            <span className="font-heading font-semibold">
              {streak} in a row!
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface MilestoneModalProps {
  achievement: AchievementId | null;
  onDismiss: () => void;
}

export function MilestoneModal({ achievement, onDismiss }: MilestoneModalProps) {
  const [confetti, setConfetti] = useState<{ x: number; delay: number }[]>([]);

  useEffect(() => {
    if (achievement) {
      // Generate confetti
      setConfetti(
        Array.from({ length: 30 }, () => ({
          x: Math.random() * 100,
          delay: Math.random() * 0.5,
        }))
      );
    }
  }, [achievement]);

  if (!achievement) return null;

  const info = ACHIEVEMENTS[achievement];
  if (!info) return null;

  const getIcon = () => {
    switch (info.icon) {
      case "heart":
        return "❤️";
      case "star":
        return "⭐";
      case "trophy":
        return "🏆";
      case "crown":
        return "👑";
      case "gem":
        return "💎";
      case "fire":
        return "🔥";
      default:
        return "🎉";
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onDismiss}
          className="absolute inset-0 bg-black/60"
        />

        {/* Confetti */}
        {confetti.map((piece, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, x: `${piece.x}vw`, opacity: 1 }}
            animate={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 2, delay: piece.delay, ease: "linear" }}
            className="absolute top-0 text-2xl pointer-events-none"
            style={{ left: 0 }}
          >
            {["🎉", "✨", "⭐", "💫", "🌟"][i % 5]}
          </motion.div>
        ))}

        {/* Modal */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="relative bg-card rounded-3xl p-8 shadow-2xl text-center max-w-sm w-full"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", damping: 10 }}
            className="text-6xl mb-4"
          >
            {getIcon()}
          </motion.div>

          {/* Title */}
          <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
            {info.title}
          </h2>

          {/* Description */}
          <p className="text-muted mb-6">{info.description}</p>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              onClick={onDismiss}
              className="flex-1 py-3 bg-primary text-white rounded-xl font-heading font-medium hover:bg-primary-light transition-colors"
            >
              Keep Going!
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Hook to manage celebration state
export function useCelebrations() {
  const [streakToast, setStreakToast] = useState<number | null>(null);
  const [milestoneModal, setMilestoneModal] = useState<AchievementId | null>(null);

  const showStreakToast = (streak: number) => {
    if (streak >= 5 && streak % 5 === 0) {
      setStreakToast(streak);
    }
  };

  const showMilestone = (achievement: AchievementId) => {
    setMilestoneModal(achievement);
  };

  const dismissStreakToast = () => setStreakToast(null);
  const dismissMilestone = () => setMilestoneModal(null);

  return {
    streakToast,
    milestoneModal,
    showStreakToast,
    showMilestone,
    dismissStreakToast,
    dismissMilestone,
  };
}
