"use client";

import { forwardRef, useImperativeHandle, useMemo } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import type { NameData, NameVibe } from "@/lib/names-data";
import { generateVibes } from "@/lib/names-data";

const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
  mass: 0.8,
};

// Gender-based styling
const genderStyles = {
  M: {
    accent: "from-blue-400 to-blue-500",
    badge: "bg-blue-100 text-blue-600",
    glow: "shadow-blue-200/50",
  },
  F: {
    accent: "from-pink-400 to-pink-500",
    badge: "bg-pink-100 text-pink-600",
    glow: "shadow-pink-200/50",
  },
  N: {
    accent: "from-purple-400 to-purple-500",
    badge: "bg-purple-100 text-purple-600",
    glow: "shadow-purple-200/50",
  },
};

// Vibe pill colors
const vibeColors: Record<NameVibe, string> = {
  classic: "bg-amber-100 text-amber-700 border-amber-200",
  modern: "bg-sky-100 text-sky-700 border-sky-200",
  nature: "bg-emerald-100 text-emerald-700 border-emerald-200",
  strong: "bg-red-100 text-red-700 border-red-200",
  gentle: "bg-pink-100 text-pink-700 border-pink-200",
  unique: "bg-purple-100 text-purple-700 border-purple-200",
};

export interface SwipeCardEnhancedRef {
  swipeLeft: () => void;
  swipeRight: () => void;
  swipeUp: () => void;
}

interface SwipeCardEnhancedProps {
  name: NameData;
  onSwipe: (direction: "left" | "right" | "up") => void;
  onTap: () => void;
  isTop?: boolean;
  lastName?: string | null;
  showSocialProof?: boolean;
}

export const SwipeCardEnhanced = forwardRef<SwipeCardEnhancedRef, SwipeCardEnhancedProps>(
  function SwipeCardEnhanced({ name, onSwipe, onTap, isTop = true, lastName, showSocialProof = false }, ref) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Computed vibes
    const vibes = useMemo(() => generateVibes(name).slice(0, 2), [name]);

    // Gender styling
    const style = genderStyles[name.gender];

    // Rotation based on horizontal drag
    const rotate = useTransform(x, [-200, 200], [-15, 15]);

    // Scale down slightly when dragging
    const scale = useTransform(x, [-200, 0, 200], [0.95, 1, 0.95]);

    // Opacity for like/nope stamps
    const likeOpacity = useTransform(x, [0, 80], [0, 1]);
    const nopeOpacity = useTransform(x, [-80, 0], [1, 0]);

    // Background tint based on drag direction
    const bgTint = useTransform(
      x,
      [-100, 0, 100],
      ["rgba(239, 68, 68, 0.06)", "transparent", "rgba(34, 197, 94, 0.06)"]
    );

    // Imperative methods for button triggers
    useImperativeHandle(ref, () => ({
      swipeLeft: () => onSwipe("left"),
      swipeRight: () => onSwipe("right"),
      swipeUp: () => onSwipe("up"),
    }));

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const swipeThreshold = 100;
      const velocityThreshold = 500;

      const { offset, velocity } = info;

      if (offset.x > swipeThreshold || velocity.x > velocityThreshold) {
        onSwipe("right");
        return;
      }

      if (offset.x < -swipeThreshold || velocity.x < -velocityThreshold) {
        onSwipe("left");
        return;
      }

      if (offset.y < -swipeThreshold || velocity.y < -velocityThreshold) {
        onSwipe("up");
        return;
      }
    };

    // Fake social proof percentage
    const socialProofPercent = useMemo(() => {
      const hash = name.name.split("").reduce((a, b) => a + b.charCodeAt(0), 0);
      return 60 + (hash % 35); // 60-94%
    }, [name.name]);

    return (
      <motion.div
        style={{
          x,
          y,
          rotate,
          scale,
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
          transition: { duration: 0.15 },
        }}
        transition={springConfig}
        className={`absolute w-[88%] max-w-[340px] aspect-[3/4] rounded-3xl ${
          isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"
        }`}
      >
        {/* Card container */}
        <motion.div
          style={{ backgroundColor: bgTint }}
          className={`relative w-full h-full bg-card rounded-3xl border border-border/40 shadow-xl overflow-hidden ${style.glow}`}
        >
          {/* Top accent bar */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.accent}`} />

          {/* Gender badge */}
          <div className={`absolute top-4 right-4 w-8 h-8 rounded-full ${style.badge} flex items-center justify-center text-sm font-medium`}>
            {name.gender === "M" ? "B" : name.gender === "F" ? "G" : "U"}
          </div>

          {/* LIKE stamp */}
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-8 left-4 px-4 py-2 bg-success text-white rounded-xl font-heading font-bold text-xl uppercase tracking-wider rotate-[-12deg] border-4 border-success shadow-lg z-20"
          >
            Like
          </motion.div>

          {/* NOPE stamp */}
          <motion.div
            style={{ opacity: nopeOpacity }}
            className="absolute top-8 right-4 px-4 py-2 bg-error text-white rounded-xl font-heading font-bold text-xl uppercase tracking-wider rotate-[12deg] border-4 border-error shadow-lg z-20"
          >
            Nope
          </motion.div>

          {/* Main content */}
          <div className="flex flex-col items-center justify-center h-full px-6 pt-12 pb-8">
            {/* Name */}
            <h2 className="font-heading text-5xl sm:text-6xl font-semibold text-foreground tracking-tight text-center">
              {name.name}
            </h2>

            {/* Pronunciation if available */}
            {name.phonetic && (
              <p className="text-sm text-muted/70 mt-1 font-body">
                /{name.phonetic}/
              </p>
            )}

            {/* Meaning */}
            {name.meanings.length > 0 && (
              <p className="text-lg text-foreground/75 mt-4 text-center italic font-heading">
                &ldquo;{name.meanings[0]}&rdquo;
              </p>
            )}

            {/* Origin */}
            {name.origins.length > 0 && (
              <p className="text-sm text-muted mt-1.5">
                {name.origins.slice(0, 2).join(" & ")} origin
              </p>
            )}

            {/* Vibe pills */}
            {vibes.length > 0 && (
              <div className="flex gap-2 mt-5">
                {vibes.map((vibe) => (
                  <span
                    key={vibe}
                    className={`px-3 py-1 rounded-full text-xs font-heading font-medium border ${vibeColors[vibe]}`}
                  >
                    {vibe.charAt(0).toUpperCase() + vibe.slice(1)}
                  </span>
                ))}
              </div>
            )}

            {/* Name preview with last name */}
            {lastName && (
              <div className="mt-5 px-4 py-2 bg-secondary/50 rounded-xl">
                <p className="text-sm text-muted">
                  <span className="font-heading font-medium text-foreground">{name.name}</span>
                  {" "}
                  <span className="text-foreground">{lastName}</span>
                </p>
              </div>
            )}

            {/* Social proof */}
            {showSocialProof && (
              <p className="text-xs text-muted/60 mt-4">
                {socialProofPercent}% of parents liked this name
              </p>
            )}

            {/* Bottom hint */}
            <div className="absolute bottom-5 flex flex-col items-center gap-1">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-muted/40"
              >
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="rotate-180">
                  <path d="M2 10L10 2L18 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
              <p className="text-xs text-muted/40 font-medium">
                Tap for details
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  }
);
