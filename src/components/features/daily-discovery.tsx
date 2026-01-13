"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ChevronRight, Sparkles } from "lucide-react";
import { getDailyName, type NameData, generateVibes } from "@/lib/names-data";
import { recordSwipe, getSwipeStatus } from "@/lib/swipe-preferences";

interface DailyDiscoveryProps {
  onAddToFavorites?: (name: string) => void;
}

const DISMISSED_KEY = "namesy-daily-dismissed";

/**
 * Get today's date string for localStorage key
 */
function getTodayKey(): string {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

/**
 * DailyDiscovery - Dismissible banner showing today's featured name
 */
export function DailyDiscovery({ onAddToFavorites }: DailyDiscoveryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [dailyName, setDailyName] = useState<NameData | null>(null);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Check if already dismissed today
    const dismissedDate = localStorage.getItem(DISMISSED_KEY);
    const todayKey = getTodayKey();

    if (dismissedDate !== todayKey) {
      const name = getDailyName();
      setDailyName(name);
      setIsLiked(getSwipeStatus(name.name) === "like" || getSwipeStatus(name.name) === "superlike");
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(DISMISSED_KEY, getTodayKey());
    setIsVisible(false);
  };

  const handleLike = () => {
    if (!dailyName) return;

    if (!isLiked) {
      recordSwipe(dailyName.name, "like", dailyName.origins, dailyName.meanings);
      setIsLiked(true);
      onAddToFavorites?.(dailyName.name);
    }
  };

  if (!dailyName) return null;

  const vibes = generateVibes(dailyName);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginBottom: 0 }}
          animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
          exit={{ opacity: 0, height: 0, marginBottom: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-4">
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-amber-100 transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4 text-amber-600" />
            </button>

            {/* Content */}
            <div className="flex items-start gap-3 pr-8">
              {/* Sparkle icon */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-amber-600" />
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs text-amber-700 font-heading uppercase tracking-wider mb-1">
                  Today&apos;s Discovery
                </p>
                <h3 className="text-xl font-heading font-semibold text-amber-900 mb-1">
                  {dailyName.name}
                </h3>
                {dailyName.meanings.length > 0 && (
                  <p className="text-sm text-amber-700 font-heading italic line-clamp-1">
                    &ldquo;{dailyName.meanings[0]}&rdquo;
                  </p>
                )}
                {vibes.length > 0 && (
                  <div className="flex gap-1 mt-2 flex-wrap">
                    {vibes.slice(0, 3).map((vibe) => (
                      <span
                        key={vibe}
                        className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-heading capitalize"
                      >
                        {vibe}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex-shrink-0 flex items-center gap-2">
                <button
                  onClick={handleLike}
                  className={`p-2 rounded-full transition-all ${
                    isLiked
                      ? "bg-green-100 text-green-600"
                      : "bg-white hover:bg-green-50 text-amber-600 hover:text-green-600 border border-amber-200"
                  }`}
                  aria-label={isLiked ? "Added to favorites" : "Add to favorites"}
                >
                  <Heart
                    className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`}
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
