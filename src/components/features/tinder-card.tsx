"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import type { NameData } from "@/lib/names-data";

// Gender-based color schemes - white background with colored borders
const genderColors = {
  M: {
    border: "border-blue-300",
    accent: "#3b82f6",
    shadow: "0 4px 20px -4px rgba(59, 130, 246, 0.15), 0 8px 32px -8px rgba(59, 130, 246, 0.1)",
    shadowHover: "0 8px 30px -4px rgba(59, 130, 246, 0.2), 0 16px 48px -8px rgba(59, 130, 246, 0.15)",
  },
  F: {
    border: "border-pink-300",
    accent: "#ec4899",
    shadow: "0 4px 20px -4px rgba(236, 72, 153, 0.15), 0 8px 32px -8px rgba(236, 72, 153, 0.1)",
    shadowHover: "0 8px 30px -4px rgba(236, 72, 153, 0.2), 0 16px 48px -8px rgba(236, 72, 153, 0.15)",
  },
  N: {
    border: "border-gray-300",
    accent: "#6b7280",
    shadow: "0 4px 20px -4px rgba(107, 114, 128, 0.12), 0 8px 32px -8px rgba(107, 114, 128, 0.08)",
    shadowHover: "0 8px 30px -4px rgba(107, 114, 128, 0.18), 0 16px 48px -8px rgba(107, 114, 128, 0.12)",
  },
};

// Spring config for natural feel
const springConfig = {
  type: "spring" as const,
  stiffness: 260,
  damping: 26,
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

  // Rotation based on drag (-10° to +10° for subtlety)
  const rotate = useTransform(x, [-300, 300], [-10, 10]);

  // Opacity for stamps
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  // Background tint intensity (softer)
  const likeTint = useTransform(x, [0, 150], [0, 0.8]);
  const nopeTint = useTransform(x, [-150, 0], [0.8, 0]);

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
        boxShadow: colors.shadow,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.85}
      onDragEnd={isTop ? handleDragEnd : undefined}
      initial={{ scale: 0.96, opacity: 0, y: 16 }}
      animate={{
        scale: style?.scale ?? 1,
        opacity: style?.opacity ?? 1,
        y: style?.y ?? 0,
        boxShadow: colors.shadow,
      }}
      exit={{
        x: x.get() > 0 ? 350 : -350,
        opacity: 0,
        rotate: x.get() > 0 ? 15 : -15,
        transition: { duration: 0.35, ease: "easeOut" }
      }}
      transition={springConfig}
      whileHover={isTop ? {
        scale: 1.015,
        y: -6,
        boxShadow: colors.shadowHover,
        transition: { duration: 0.3, ease: "easeOut" }
      } : undefined}
      className={`absolute w-[340px] aspect-[3/4] rounded-3xl border ${colors.border} bg-white
        cursor-grab active:cursor-grabbing overflow-hidden transition-shadow duration-300`}
    >
      {/* Like overlay tint - subtle gradient */}
      <motion.div
        style={{ opacity: likeTint }}
        className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-green-200/30 pointer-events-none"
      />

      {/* Nope overlay tint - subtle gradient */}
      <motion.div
        style={{ opacity: nopeTint }}
        className="absolute inset-0 bg-gradient-to-bl from-red-100/40 to-red-200/30 pointer-events-none"
      />

      {/* LIKE stamp - refined */}
      <motion.div
        style={{ opacity: likeOpacity }}
        className="absolute top-6 left-6 px-5 py-1.5 border-2 border-green-500/70 rounded-lg
          text-green-600 font-heading font-semibold text-xl tracking-wide rotate-[-12deg] z-20
          bg-white/90 backdrop-blur-sm shadow-sm"
      >
        LIKE
      </motion.div>

      {/* NOPE stamp - refined */}
      <motion.div
        style={{ opacity: nopeOpacity }}
        className="absolute top-6 right-6 px-5 py-1.5 border-2 border-red-400/70 rounded-lg
          text-red-500 font-heading font-semibold text-xl tracking-wide rotate-[12deg] z-20
          bg-white/90 backdrop-blur-sm shadow-sm"
      >
        NOPE
      </motion.div>

      {/* Card content */}
      <div className="flex flex-col items-center justify-center h-full px-10 py-12 text-center">
        {/* Name */}
        <h2 className="font-heading text-5xl font-semibold text-foreground mb-5 tracking-tight leading-tight">
          {name.name}
        </h2>

        {/* Meaning */}
        {name.meanings.length > 0 && (
          <p className="text-lg font-heading text-foreground/65 mb-3 italic leading-relaxed max-w-[280px]">
            &ldquo;{name.meanings[0]}&rdquo;
          </p>
        )}

        {/* Origin */}
        {name.origins.length > 0 && (
          <p className="text-sm font-heading text-muted/80 tracking-wide">
            {name.origins.slice(0, 2).join(" · ")} origin
          </p>
        )}

        {/* Rank - positioned at bottom */}
        {name.currentRank > 0 && name.currentRank <= 1000 && (
          <div className="mt-auto pt-6">
            <span
              className="text-xs font-heading font-medium tracking-wider uppercase px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: `${colors.accent}10`,
                color: colors.accent
              }}
            >
              #{name.currentRank} popular
            </span>
          </div>
        )}
      </div>

      {/* Decorative top accent line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-b-full"
        style={{ backgroundColor: colors.accent, opacity: 0.3 }}
      />
    </motion.div>
  );
}
