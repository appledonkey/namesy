"use client";

import { forwardRef, useImperativeHandle } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { TrendingUp, TrendingDown, Sparkles, Gem } from "lucide-react";
import type { NameData } from "@/lib/names-data";

// Spring config for natural feel
const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 1,
};

// Get trend badge info
function getTrendBadge(name: NameData): { label: string; icon: React.ReactNode; className: string } | null {
  const { currentRank, trend } = name;

  if (currentRank > 500 || currentRank <= 0) {
    return {
      label: "Rare",
      icon: <Gem className="w-3 h-3" />,
      className: "bg-purple-100 text-purple-700 border-purple-200",
    };
  }

  if (trend === "rising") {
    return {
      label: "Rising",
      icon: <TrendingUp className="w-3 h-3" />,
      className: "bg-emerald-100 text-emerald-700 border-emerald-200",
    };
  }

  if (trend === "falling") {
    return {
      label: "Falling",
      icon: <TrendingDown className="w-3 h-3" />,
      className: "bg-orange-100 text-orange-700 border-orange-200",
    };
  }

  if (trend === "stable" && currentRank <= 100) {
    return {
      label: "Classic",
      icon: <Sparkles className="w-3 h-3" />,
      className: "bg-amber-100 text-amber-700 border-amber-200",
    };
  }

  return null;
}

export interface SwipeCardRef {
  swipeLeft: () => void;
  swipeRight: () => void;
  swipeUp: () => void;
}

interface SwipeCardProps {
  name: NameData;
  onSwipe: (direction: "left" | "right" | "up") => void;
  onTap: () => void;
  isTop?: boolean;
}

export const SwipeCard = forwardRef<SwipeCardRef, SwipeCardProps>(
  function SwipeCard({ name, onSwipe, onTap, isTop = true }, ref) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Rotation based on horizontal drag (max ±12°)
    const rotate = useTransform(x, [-200, 200], [-12, 12]);

    // Scale down slightly when dragging
    const scale = useTransform(
      x,
      [-200, 0, 200],
      [0.95, 1, 0.95]
    );

    // Opacity for like/dislike stamps
    const likeOpacity = useTransform(x, [0, 100], [0, 1]);
    const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

    // Background color hints
    const backgroundColor = useTransform(
      x,
      [-100, 0, 100],
      ["rgba(239, 68, 68, 0.05)", "rgba(255, 255, 255, 0)", "rgba(34, 197, 94, 0.05)"]
    );

    // Imperative swipe methods for button triggers
    useImperativeHandle(ref, () => ({
      swipeLeft: () => {
        onSwipe("left");
      },
      swipeRight: () => {
        onSwipe("right");
      },
      swipeUp: () => {
        onSwipe("up");
      },
    }));

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

      // Swipe up (info/super)
      if (offset.y < -swipeThreshold || velocity.y < -velocityThreshold) {
        onSwipe("up");
        return;
      }
    };

    const badge = getTrendBadge(name);

    return (
      <motion.div
        style={{
          x,
          y,
          rotate,
          scale,
          backgroundColor,
          zIndex: isTop ? 10 : 0,
        }}
        drag={isTop}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.9}
        onDragEnd={handleDragEnd}
        onClick={isTop ? onTap : undefined}
        whileTap={isTop ? { scale: 0.98 } : undefined}
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.2 },
        }}
        transition={springConfig}
        className={`absolute w-[85%] max-w-[320px] sm:max-w-[360px] lg:max-w-[380px] aspect-[3/4] rounded-3xl ${
          isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
        }`}
      >
        <div className="relative w-full h-full bg-card rounded-3xl border border-border/50 shadow-xl overflow-hidden">
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />

          {/* LIKE stamp */}
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-6 left-6 px-4 py-2 bg-success text-white rounded-xl font-bold text-lg rotate-[-15deg] border-4 border-success shadow-lg z-20"
          >
            LIKE
          </motion.div>

          {/* NOPE stamp */}
          <motion.div
            style={{ opacity: nopeOpacity }}
            className="absolute top-6 right-6 px-4 py-2 bg-error text-white rounded-xl font-bold text-lg rotate-[15deg] border-4 border-error shadow-lg z-20"
          >
            NOPE
          </motion.div>

          {/* Card content */}
          <div className="flex flex-col items-center justify-center h-full p-8">
            {/* Name */}
            <h2 className="font-heading text-5xl sm:text-6xl font-semibold text-foreground mb-4 tracking-tight">
              {name.name}
            </h2>

            {/* Meaning */}
            {name.meanings.length > 0 && (
              <p className="text-lg text-foreground/80 mb-2 text-center italic">
                &ldquo;{name.meanings[0]}&rdquo;
              </p>
            )}

            {/* Origin */}
            {name.origins.length > 0 && (
              <p className="text-sm text-muted mb-4">
                {name.origins.slice(0, 2).join(", ")} origin
              </p>
            )}

            {/* Badge and rank row */}
            <div className="flex items-center gap-3 mt-2">
              {badge && (
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${badge.className}`}
                >
                  {badge.icon}
                  {badge.label}
                </span>
              )}
              {name.currentRank > 0 && name.currentRank <= 1000 && (
                <span className="text-sm text-muted font-medium">
                  #{name.currentRank}
                </span>
              )}
            </div>

            {/* Hint */}
            <p className="absolute bottom-6 text-xs text-muted/50 font-medium">
              Swipe to decide
            </p>
          </div>
        </div>
      </motion.div>
    );
  }
);
