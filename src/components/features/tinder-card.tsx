"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import type { NameData } from "@/lib/names-data";

// Gender-based color schemes
const genderColors = {
  M: {
    border: "border-blue-300",
    bg: "bg-gradient-to-br from-blue-50 to-blue-100/50",
    tint: "rgba(59, 130, 246, 0.08)",
    accent: "#3b82f6",
  },
  F: {
    border: "border-pink-300",
    bg: "bg-gradient-to-br from-pink-50 to-pink-100/50",
    tint: "rgba(236, 72, 153, 0.08)",
    accent: "#ec4899",
  },
  N: {
    border: "border-gray-300",
    bg: "bg-gradient-to-br from-gray-50 to-gray-100/50",
    tint: "rgba(107, 114, 128, 0.05)",
    accent: "#6b7280",
  },
};

// Spring config for natural feel
const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
};

interface TinderCardProps {
  name: NameData;
  onSwipe: (direction: "left" | "right") => void;
  isTop?: boolean;
  style?: {
    scale?: number;
    y?: number;
    opacity?: number;
    zIndex?: number;
  };
}

export function TinderCard({ name, onSwipe, isTop = true, style }: TinderCardProps) {
  const x = useMotionValue(0);

  // Rotation based on drag (-12° to +12°)
  const rotate = useTransform(x, [-300, 300], [-12, 12]);

  // Opacity for stamps
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  // Background tint intensity
  const likeTint = useTransform(x, [0, 150], [0, 1]);
  const nopeTint = useTransform(x, [-150, 0], [1, 0]);

  const colors = genderColors[name.gender];

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 120;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    // Swipe right (like)
    if (offset > threshold || velocity > 500) {
      onSwipe("right");
      return;
    }

    // Swipe left (skip)
    if (offset < -threshold || velocity < -500) {
      onSwipe("left");
      return;
    }
  };

  return (
    <motion.div
      style={{
        x,
        rotate,
        scale: style?.scale ?? 1,
        y: style?.y ?? 0,
        opacity: style?.opacity ?? 1,
        zIndex: style?.zIndex ?? 1,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.9}
      onDragEnd={isTop ? handleDragEnd : undefined}
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={{
        scale: style?.scale ?? 1,
        opacity: style?.opacity ?? 1,
        y: style?.y ?? 0
      }}
      exit={{
        x: x.get() > 0 ? 400 : -400,
        opacity: 0,
        rotate: x.get() > 0 ? 20 : -20,
        transition: { duration: 0.3 }
      }}
      transition={springConfig}
      whileHover={isTop ? { scale: 1.02, y: -4 } : undefined}
      className={`absolute w-[340px] aspect-[3/4] rounded-3xl border-2 ${colors.border} ${colors.bg}
        shadow-xl cursor-grab active:cursor-grabbing overflow-hidden`}
    >
      {/* Like overlay tint */}
      <motion.div
        style={{ opacity: likeTint }}
        className="absolute inset-0 bg-green-400/20 pointer-events-none"
      />

      {/* Nope overlay tint */}
      <motion.div
        style={{ opacity: nopeTint }}
        className="absolute inset-0 bg-red-400/20 pointer-events-none"
      />

      {/* LIKE stamp */}
      <motion.div
        style={{ opacity: likeOpacity }}
        className="absolute top-8 left-8 px-6 py-2 border-4 border-green-500 rounded-xl
          text-green-500 font-bold text-2xl rotate-[-12deg] z-20"
      >
        LIKE
      </motion.div>

      {/* NOPE stamp */}
      <motion.div
        style={{ opacity: nopeOpacity }}
        className="absolute top-8 right-8 px-6 py-2 border-4 border-red-500 rounded-xl
          text-red-500 font-bold text-2xl rotate-[12deg] z-20"
      >
        NOPE
      </motion.div>

      {/* Card content */}
      <div className="flex flex-col items-center justify-center h-full p-8 text-center">
        {/* Name */}
        <h2 className="font-heading text-5xl font-semibold text-foreground mb-6 tracking-tight">
          {name.name}
        </h2>

        {/* Meaning */}
        {name.meanings.length > 0 && (
          <p className="text-lg text-foreground/70 mb-2 italic">
            &ldquo;{name.meanings[0]}&rdquo;
          </p>
        )}

        {/* Origin */}
        {name.origins.length > 0 && (
          <p className="text-sm text-muted mb-6">
            {name.origins.slice(0, 2).join(" & ")} origin
          </p>
        )}

        {/* Rank */}
        {name.currentRank > 0 && name.currentRank <= 1000 && (
          <div className="mt-auto">
            <span className="text-sm text-muted">
              #{name.currentRank} most popular
            </span>
          </div>
        )}
      </div>

      {/* Decorative corner dots */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: colors.accent, opacity: 0.4 }} />
        <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: colors.accent, opacity: 0.6 }} />
        <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: colors.accent, opacity: 0.4 }} />
      </div>
    </motion.div>
  );
}
