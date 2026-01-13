"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import type { NameData } from "@/lib/names-data";

// Gender config
const genderConfig = {
  M: { symbol: "♂", label: "Boy", border: "border-blue-300", accent: "#3b82f6", bg: "bg-blue-50" },
  F: { symbol: "♀", label: "Girl", border: "border-pink-300", accent: "#ec4899", bg: "bg-pink-50" },
  N: { symbol: "⚥", label: "Unisex", border: "border-purple-300", accent: "#8b5cf6", bg: "bg-purple-50" },
};

// Shadows by gender
const shadowConfig = {
  M: {
    base: "0 4px 20px -4px rgba(59, 130, 246, 0.15), 0 8px 32px -8px rgba(59, 130, 246, 0.1)",
    hover: "0 8px 30px -4px rgba(59, 130, 246, 0.2), 0 16px 48px -8px rgba(59, 130, 246, 0.15)",
  },
  F: {
    base: "0 4px 20px -4px rgba(236, 72, 153, 0.15), 0 8px 32px -8px rgba(236, 72, 153, 0.1)",
    hover: "0 8px 30px -4px rgba(236, 72, 153, 0.2), 0 16px 48px -8px rgba(236, 72, 153, 0.15)",
  },
  N: {
    base: "0 4px 20px -4px rgba(139, 92, 246, 0.12), 0 8px 32px -8px rgba(139, 92, 246, 0.08)",
    hover: "0 8px 30px -4px rgba(139, 92, 246, 0.18), 0 16px 48px -8px rgba(139, 92, 246, 0.12)",
  },
};

// Calculate uniqueness percentile
function getUniquenessPercentile(rank: number): number {
  if (rank <= 0) return 99;
  return Math.round((1 - rank / 2500) * 100);
}

const springConfig = { type: "spring" as const, stiffness: 260, damping: 26 };

interface TinderCardProps {
  name: NameData;
  onSwipe: (direction: "left" | "right") => void;
  isTop?: boolean;
  style?: { scale?: number; y?: number; opacity?: number; zIndex?: number };
}

export function TinderCard({ name, onSwipe, isTop = true, style }: TinderCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-300, 300], [-10, 10]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
  const likeTint = useTransform(x, [0, 150], [0, 0.8]);
  const nopeTint = useTransform(x, [-150, 0], [0.8, 0]);

  const gender = genderConfig[name.gender];
  const shadow = shadowConfig[name.gender];
  const uniqueness = getUniquenessPercentile(name.currentRank);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 120;
    if (info.offset.x > threshold || info.velocity.x > 500) {
      onSwipe("right");
    } else if (info.offset.x < -threshold || info.velocity.x < -500) {
      onSwipe("left");
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
        boxShadow: shadow.base,
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
        boxShadow: shadow.base,
      }}
      exit={{
        x: x.get() > 0 ? 350 : -350,
        opacity: 0,
        rotate: x.get() > 0 ? 15 : -15,
        transition: { duration: 0.35, ease: "easeOut" },
      }}
      transition={springConfig}
      whileHover={
        isTop
          ? { scale: 1.015, y: -6, boxShadow: shadow.hover, transition: { duration: 0.3 } }
          : undefined
      }
      className={`absolute w-[340px] aspect-[3/4] rounded-3xl border ${gender.border} bg-white
        cursor-grab active:cursor-grabbing overflow-hidden`}
    >
      {/* Swipe overlays */}
      <motion.div
        style={{ opacity: likeTint }}
        className="absolute inset-0 bg-gradient-to-br from-green-100/40 to-green-200/30 pointer-events-none"
      />
      <motion.div
        style={{ opacity: nopeTint }}
        className="absolute inset-0 bg-gradient-to-bl from-red-100/40 to-red-200/30 pointer-events-none"
      />

      {/* LIKE stamp */}
      <motion.div
        style={{ opacity: likeOpacity }}
        className="absolute top-16 left-4 px-4 py-1 border-2 border-green-500/70 rounded-lg
          text-green-600 font-heading font-semibold text-lg rotate-[-12deg] z-20 bg-white/90"
      >
        LIKE
      </motion.div>

      {/* NOPE stamp */}
      <motion.div
        style={{ opacity: nopeOpacity }}
        className="absolute top-16 right-4 px-4 py-1 border-2 border-red-400/70 rounded-lg
          text-red-500 font-heading font-semibold text-lg rotate-[12deg] z-20 bg-white/90"
      >
        NOPE
      </motion.div>

      {/* Gender badge - top right */}
      <div className="absolute top-4 right-4">
        <div
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${gender.bg}`}
          style={{ color: gender.accent }}
        >
          <span className="text-base">{gender.symbol}</span>
          <span className="text-xs font-heading font-medium">{gender.label}</span>
        </div>
      </div>

      {/* Card content */}
      <div className="flex flex-col h-full px-6 pt-16 pb-5">
        {/* NAME - Large and prominent */}
        <h2 className="font-heading text-5xl font-semibold text-foreground text-center tracking-tight mb-2">
          {name.name}
        </h2>

        {/* Pronunciation & Syllables */}
        <p className="text-sm text-muted text-center font-heading mb-6">
          {name.phonetic && <span className="italic">/{name.phonetic}/</span>}
          {name.phonetic && " · "}
          {name.syllables} syllable{name.syllables !== 1 ? "s" : ""}
        </p>

        {/* Meaning */}
        {name.meanings.length > 0 && (
          <p className="text-base text-foreground/70 text-center font-heading italic mb-2">
            &ldquo;{name.meanings[0]}&rdquo;
          </p>
        )}

        {/* Origin */}
        {name.origins.length > 0 && (
          <p className="text-sm text-muted text-center font-heading mb-4">
            {name.origins.slice(0, 2).join(" · ")} origin
          </p>
        )}

        {/* Divider */}
        <div className="w-16 h-px bg-border mx-auto my-3" />

        {/* Info rows */}
        <div className="space-y-3 text-center">
          {/* Nicknames */}
          {name.nicknames.length > 0 && (
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-heading mb-1">Nicknames</p>
              <p className="text-sm text-foreground font-heading">{name.nicknames.slice(0, 3).join(", ")}</p>
            </div>
          )}

          {/* Spelling Variations */}
          {name.alternateSpellings.length > 0 && (
            <div>
              <p className="text-xs text-muted uppercase tracking-wider font-heading mb-1">Also spelled</p>
              <p className="text-sm text-foreground font-heading">{name.alternateSpellings.slice(0, 4).join(", ")}</p>
            </div>
          )}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Uniqueness - bottom */}
        <div
          className="mt-4 py-3 px-4 rounded-xl text-center mx-auto"
          style={{ backgroundColor: `${gender.accent}08` }}
        >
          <p className="text-xs text-muted font-heading mb-1">Uniqueness</p>
          <p className="text-lg font-heading font-semibold" style={{ color: gender.accent }}>
            More unique than {uniqueness}%
          </p>
        </div>
      </div>
    </motion.div>
  );
}
