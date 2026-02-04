"use client";

import { memo, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, useAnimationControls, PanInfo } from "framer-motion";
import { type NameData } from "@/lib/names";
import { SPRING_CONFIG, SWIPE_THRESHOLD, VELOCITY_THRESHOLD } from "@/lib/swipe-config";

interface FlipCardProps {
  name: NameData;
  isFlipped: boolean;
  onTap: () => void;
  onSwipe: (direction: "left" | "right" | "up") => void;
  getTrendIcon: (trend: string) => React.ReactNode;
  getTrendColor: (trend: string) => string;
  isTop?: boolean;
  stackIndex?: number;
  triggerSwipe?: "left" | "right" | "up" | null;
  onSwipeComplete?: () => void;
}

export const FlipCard = memo(function FlipCard({
  name,
  isFlipped,
  onTap,
  onSwipe,
  getTrendIcon,
  getTrendColor,
  isTop = true,
  stackIndex = 0,
  triggerSwipe = null,
  onSwipeComplete
}: FlipCardProps) {
  const controls = useAnimationControls();
  const [isExiting, setIsExiting] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
  const middleOpacity = useTransform(y, [-100, 0], [1, 0]);
  // Scale up slightly when dragging for "lifted" feel
  const scale = useTransform(x, [-200, 0, 200], [1.02, 1, 1.02]);

  const performSwipe = useCallback(async (direction: "left" | "right" | "up") => {
    if (isExiting) return;
    setIsExiting(true);

    // Process state immediately for snappy feel
    onSwipe(direction);
    onSwipeComplete?.();

    // Animation runs in parallel with state update
    if (direction === "up") {
      controls.start({
        x: 0,
        y: -window.innerHeight,
        rotate: 0,
        transition: {
          type: "spring",
          ...SPRING_CONFIG.exit,
        }
      });
    } else {
      const exitX = direction === "right"
        ? window.innerWidth * 1.5
        : -window.innerWidth * 1.5;
      const exitRotate = direction === "right" ? 30 : -30;

      controls.start({
        x: exitX,
        y: 50,
        rotate: exitRotate,
        transition: {
          type: "spring",
          ...SPRING_CONFIG.exit,
        }
      });
    }
  }, [isExiting, onSwipe, onSwipeComplete, controls]);

  // Handle programmatic swipe from buttons
  useEffect(() => {
    if (triggerSwipe && isTop && !isExiting) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Responding to prop change to trigger exit animation
      performSwipe(triggerSwipe);
    }
  }, [triggerSwipe, isTop, isExiting, performSwipe]);

  // Handle flip animation
  useEffect(() => {
    if (isTop && !isExiting) {
      controls.start({
        rotateY: isFlipped ? 180 : 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      });
    }
  }, [isFlipped, isTop, isExiting, controls]);

  const handleDragEnd = async (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isExiting || !isTop) return;

    const swipeRight = info.offset.x > SWIPE_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD;
    const swipeLeft = info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -VELOCITY_THRESHOLD;
    const swipeUp = info.offset.y < -SWIPE_THRESHOLD || info.velocity.y < -VELOCITY_THRESHOLD;

    if (swipeUp && Math.abs(info.offset.y) > Math.abs(info.offset.x)) {
      // Prioritize vertical swipe if it's more dominant
      await performSwipe("up");
    } else if (swipeRight) {
      await performSwipe("right");
    } else if (swipeLeft) {
      await performSwipe("left");
    } else {
      // Snap back with spring physics
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
          type: "spring",
          ...SPRING_CONFIG.snapBack
        }
      });
    }
  };

  const genderGlowClass =
    name.gender === "F" ? "card-glow-girl" : name.gender === "M" ? "card-glow-boy" : "card-glow-unisex";

  // Stack positioning - cards behind are slightly smaller and offset
  const stackScale = 1 - stackIndex * 0.05;
  const stackY = stackIndex * 8;

  return (
    <div
      className="absolute inset-0 swipe-card overflow-visible"
      style={{
        perspective: 1000,
        zIndex: 10 - stackIndex,
      }}
    >
      {/* Floating indicators — overlaid on card face */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: isTop ? x : 0,
          y: isTop ? y : stackY,
          rotate: isTop ? rotate : 0,
          scale: isTop ? scale : stackScale,
        }}
      >
        {/* LIKE stamp - upper left */}
        <motion.div
          style={{ opacity: likeOpacity }}
          className="absolute top-6 left-4 sm:top-8 sm:left-5 px-3 sm:px-4 py-1.5 sm:py-2 border-[3px] border-partner2 text-partner2 rounded-lg font-bold text-lg sm:text-xl -rotate-12 uppercase tracking-wider"
        >
          LIKE
        </motion.div>
        {/* NOPE stamp - upper right */}
        <motion.div
          style={{ opacity: nopeOpacity }}
          className="absolute top-6 right-4 sm:top-8 sm:right-5 px-3 sm:px-4 py-1.5 sm:py-2 border-[3px] border-partner1 text-partner1 rounded-lg font-bold text-lg sm:text-xl rotate-12 uppercase tracking-wider"
        >
          NOPE
        </motion.div>
        {/* MIDDLE stamp - top center */}
        <motion.div
          style={{ opacity: middleOpacity }}
          className="absolute top-6 sm:top-8 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 border-[3px] border-accent text-accent rounded-lg font-bold text-lg sm:text-xl uppercase tracking-wider"
        >
          MIDDLE
        </motion.div>
      </motion.div>

      <motion.div
        drag={isTop && !isExiting}
        dragElastic={0.9}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        onDragStart={(e) => {
          e.stopPropagation();
        }}
        onDragEnd={handleDragEnd}
        onTap={isTop ? onTap : undefined}
        className={`relative w-full h-full ${isTop ? "cursor-pointer" : ""}`}
        animate={controls}
        initial={{
          rotateY: 0,
          scale: stackScale,
          y: stackY,
        }}
        style={{
          transformStyle: "preserve-3d",
          x: isTop ? x : 0,
          y: isTop ? y : stackY,
          rotate: isTop ? rotate : 0,
          scale: isTop ? scale : stackScale,
          touchAction: "none",
        }}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 bg-card rounded-2xl flex flex-col items-center justify-center p-4 sm:p-8 backface-hidden ${genderGlowClass}`}
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Name */}
          <h1 className="font-heading text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-1 sm:mb-2">
            {name.name}
          </h1>

          {/* Origin */}
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted mb-2 sm:mb-3">
            {name.origin}
          </p>

          {/* Meaning */}
          <p className="text-sm sm:text-base italic text-foreground/70 font-heading text-center px-2">
            &ldquo;{name.meaning}&rdquo;
          </p>

          {/* Tap hint */}
          <p className="absolute bottom-4 sm:bottom-6 text-[10px] sm:text-xs text-muted/50 tracking-wide">
            tap for more
          </p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 bg-card rounded-2xl p-4 sm:p-6 backface-hidden overflow-y-auto scrollbar-hide overscroll-contain ${genderGlowClass}`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Header */}
          <div className="text-center border-b border-border pb-2 sm:pb-3 mb-2 sm:mb-3">
            <h2 className="font-heading text-2xl sm:text-3xl font-light text-foreground">{name.name}</h2>
            <p className="text-xs sm:text-sm text-muted mt-1">{name.origin}</p>
          </div>

          {/* Stats */}
          <div className="flex justify-around mb-2 sm:mb-3 pb-2 sm:pb-3 border-b border-border">
            <div className="text-center">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">Popularity</p>
              <p className="text-base sm:text-lg font-medium">{name.popularity}</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">Trend</p>
              <p className={`text-base sm:text-lg font-medium flex items-center justify-center gap-1 ${getTrendColor(name.trend)}`}>
                {getTrendIcon(name.trend)} {name.trend}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">Syllables</p>
              <p className="text-base sm:text-lg font-medium">{name.syllables}</p>
            </div>
          </div>

          {/* Nicknames */}
          {name.nicknames.length > 0 && (
            <div className="mb-2 sm:mb-3">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted mb-1.5 sm:mb-2">Nicknames</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {name.nicknames.map((n) => (
                  <span key={n} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary rounded-full text-xs sm:text-sm">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Also Spelled */}
          {name.alternates.length > 0 && (
            <div className="mb-2 sm:mb-3">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted mb-1.5 sm:mb-2">Also Spelled</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {name.alternates.map((a) => (
                  <span key={a} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary rounded-full text-xs sm:text-sm">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Famous people */}
          {name.famousPeople.length > 0 && (
            <div className="mb-2 sm:mb-3">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted mb-1.5 sm:mb-2">Famous People</p>
              <ul className="space-y-0.5 sm:space-y-1">
                {name.famousPeople.slice(0, 3).map((person, i) => (
                  <li key={i} className="text-xs sm:text-sm text-foreground/80">
                    {person}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Vibe tags */}
          {name.vibe.length > 0 && (
            <div className="mb-2 sm:mb-3">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted mb-1.5 sm:mb-2">Vibe</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {name.vibe.map((v) => (
                  <span key={v} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Similar Names */}
          {name.similarNames.length > 0 && (
            <div className="mb-2 sm:mb-3">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted mb-1.5 sm:mb-2">Similar Names</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {name.similarNames.map((s) => (
                  <span key={s} className="px-2 sm:px-3 py-0.5 sm:py-1 border border-border text-foreground/60 rounded-full text-xs sm:text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tap hint */}
          <p className="text-center text-[10px] sm:text-xs text-muted/50 tracking-wide mt-auto pt-2 sm:pt-3">
            tap to flip back
          </p>
        </div>
      </motion.div>
    </div>
  );
});
