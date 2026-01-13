"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { NameData } from "@/lib/names-data";

// Gender symbols and colors
const genderInfo = {
  M: { symbol: "♂", label: "Boy", border: "border-blue-300", accent: "#3b82f6", bg: "bg-blue-50" },
  F: { symbol: "♀", label: "Girl", border: "border-pink-300", accent: "#ec4899", bg: "bg-pink-50" },
  N: { symbol: "⚥", label: "Unisex", border: "border-purple-300", accent: "#8b5cf6", bg: "bg-purple-50" },
};

// Gender-based shadows
const genderShadows = {
  M: {
    shadow: "0 4px 20px -4px rgba(59, 130, 246, 0.15), 0 8px 32px -8px rgba(59, 130, 246, 0.1)",
    shadowHover: "0 8px 30px -4px rgba(59, 130, 246, 0.2), 0 16px 48px -8px rgba(59, 130, 246, 0.15)",
  },
  F: {
    shadow: "0 4px 20px -4px rgba(236, 72, 153, 0.15), 0 8px 32px -8px rgba(236, 72, 153, 0.1)",
    shadowHover: "0 8px 30px -4px rgba(236, 72, 153, 0.2), 0 16px 48px -8px rgba(236, 72, 153, 0.15)",
  },
  N: {
    shadow: "0 4px 20px -4px rgba(139, 92, 246, 0.12), 0 8px 32px -8px rgba(139, 92, 246, 0.08)",
    shadowHover: "0 8px 30px -4px rgba(139, 92, 246, 0.18), 0 16px 48px -8px rgba(139, 92, 246, 0.12)",
  },
};

// Calculate uniqueness percentile (assuming ~2500 total names)
function getUniquenessPercentile(rank: number): number {
  if (rank <= 0) return 99; // Unranked = very unique
  const totalNames = 2500;
  return Math.round((1 - rank / totalNames) * 100);
}

// Get trend icon
function TrendIcon({ trend }: { trend: "rising" | "falling" | "stable" }) {
  if (trend === "rising") return <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />;
  if (trend === "falling") return <TrendingDown className="w-3.5 h-3.5 text-orange-500" />;
  return <Minus className="w-3.5 h-3.5 text-gray-400" />;
}

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

  const gender = genderInfo[name.gender];
  const shadows = genderShadows[name.gender];
  const uniquenessPercentile = getUniquenessPercentile(name.currentRank);

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
        boxShadow: shadows.shadow,
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
        boxShadow: shadows.shadow,
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
        boxShadow: shadows.shadowHover,
        transition: { duration: 0.3, ease: "easeOut" }
      } : undefined}
      className={`absolute w-[340px] aspect-[3/4] rounded-3xl border ${gender.border} bg-white
        cursor-grab active:cursor-grabbing overflow-hidden transition-shadow duration-300`}
    >
      {/* Like overlay tint */}
      <motion.div
        style={{ opacity: likeTint }}
        className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-green-200/30 pointer-events-none"
      />

      {/* Nope overlay tint */}
      <motion.div
        style={{ opacity: nopeTint }}
        className="absolute inset-0 bg-gradient-to-bl from-red-100/40 to-red-200/30 pointer-events-none"
      />

      {/* LIKE stamp */}
      <motion.div
        style={{ opacity: likeOpacity }}
        className="absolute top-14 left-4 px-4 py-1 border-2 border-green-500/70 rounded-lg
          text-green-600 font-heading font-semibold text-lg tracking-wide rotate-[-12deg] z-20
          bg-white/90 backdrop-blur-sm shadow-sm"
      >
        LIKE
      </motion.div>

      {/* NOPE stamp */}
      <motion.div
        style={{ opacity: nopeOpacity }}
        className="absolute top-14 right-4 px-4 py-1 border-2 border-red-400/70 rounded-lg
          text-red-500 font-heading font-semibold text-lg tracking-wide rotate-[12deg] z-20
          bg-white/90 backdrop-blur-sm shadow-sm"
      >
        NOPE
      </motion.div>

      {/* Top bar - Gender + Trend */}
      <div className="absolute top-0 left-0 right-0 px-4 py-3 flex items-center justify-between">
        <div
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${gender.bg}`}
          style={{ color: gender.accent }}
        >
          <span className="text-lg leading-none">{gender.symbol}</span>
          <span className="text-xs font-heading font-medium">{gender.label}</span>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/50">
          <TrendIcon trend={name.trend} />
          <span className="text-xs font-heading text-muted capitalize">{name.trend}</span>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col h-full px-6 pt-14 pb-4 text-center overflow-y-auto">
        {/* Name */}
        <h2 className="font-heading text-4xl font-semibold text-foreground mb-1 tracking-tight">
          {name.name}
        </h2>

        {/* Pronunciation + Syllables */}
        <div className="flex items-center justify-center gap-2 mb-3 text-sm text-muted">
          {name.phonetic && (
            <span className="font-heading italic">/{name.phonetic}/</span>
          )}
          {name.phonetic && <span>·</span>}
          <span className="font-heading">{name.syllables} syllable{name.syllables !== 1 ? "s" : ""}</span>
        </div>

        {/* Meaning */}
        {name.meanings.length > 0 && (
          <p className="text-base font-heading text-foreground/70 mb-2 italic leading-snug">
            &ldquo;{name.meanings[0]}&rdquo;
          </p>
        )}

        {/* Origin */}
        {name.origins.length > 0 && (
          <p className="text-sm font-heading text-muted mb-3">
            {name.origins.slice(0, 2).join(" · ")} origin
          </p>
        )}

        {/* Divider */}
        <div className="w-12 h-px bg-border mx-auto my-2" />

        {/* Nicknames */}
        {name.nicknames.length > 0 && (
          <div className="mb-2">
            <p className="text-xs font-heading text-muted/70 uppercase tracking-wider mb-1">Nicknames</p>
            <p className="text-sm font-heading text-foreground/80">
              {name.nicknames.slice(0, 3).join(", ")}
            </p>
          </div>
        )}

        {/* Spelling Variations */}
        {name.alternateSpellings.length > 0 && (
          <div className="mb-2">
            <p className="text-xs font-heading text-muted/70 uppercase tracking-wider mb-1">Also spelled</p>
            <p className="text-sm font-heading text-foreground/80">
              {name.alternateSpellings.slice(0, 3).join(", ")}
            </p>
          </div>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Uniqueness percentile */}
        <div
          className="mt-2 px-4 py-2 rounded-xl mx-auto"
          style={{ backgroundColor: `${gender.accent}08` }}
        >
          <p className="text-xs font-heading text-muted/70 mb-0.5">Uniqueness</p>
          <p className="text-lg font-heading font-semibold" style={{ color: gender.accent }}>
            More unique than {uniquenessPercentile}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}
