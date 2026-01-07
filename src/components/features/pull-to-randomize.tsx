"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Dices, ChevronDown } from "lucide-react";
import { haptics } from "@/lib/haptics";

interface PullToRandomizeProps {
  onRandomize: () => void;
}

/**
 * PullToRandomize - Swipe-down gesture area for randomizing names
 * Mobile only - Shows a subtle indicator that can be pulled down
 */
export function PullToRandomize({ onRandomize }: PullToRandomizeProps) {
  const [isTriggered, setIsTriggered] = useState(false);

  const y = useMotionValue(0);
  const pullProgress = useTransform(y, [0, 80], [0, 1]);
  const indicatorScale = useTransform(y, [0, 80], [1, 1.2]);
  const indicatorRotation = useTransform(y, [0, 80], [0, 360]);
  const bgOpacity = useTransform(y, [0, 40, 80], [0, 0.3, 0.6]);
  const chevronOpacity = useTransform(pullProgress, [0, 0.2], [0.4, 0]);

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const pullDistance = Math.max(0, Math.min(info.offset.y, 100));
    y.set(pullDistance);

    // Trigger haptic at threshold
    if (pullDistance >= 60 && !isTriggered) {
      haptics.select();
      setIsTriggered(true);
    } else if (pullDistance < 60 && isTriggered) {
      setIsTriggered(false);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y >= 60) {
      haptics.random();
      onRandomize();
    }

    // Animate back
    y.set(0);
    setIsTriggered(false);
  };

  return (
    <div className="sm:hidden relative">
      {/* Background glow */}
      <motion.div
        style={{ opacity: bgOpacity }}
        className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none"
      />

      {/* Pull handle area */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0, bottom: 0.5 }}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ y }}
        className="flex flex-col items-center py-2 cursor-grab active:cursor-grabbing touch-none"
      >
        {/* Indicator */}
        <motion.div
          style={{
            scale: indicatorScale,
            rotate: indicatorRotation,
          }}
          className={`
            w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-colors duration-200
            ${isTriggered
              ? "bg-primary text-white"
              : "bg-secondary/50 text-muted"
            }
          `}
        >
          <Dices className="w-4 h-4" />
        </motion.div>

        {/* Hint text */}
        <motion.div
          style={{ opacity: pullProgress }}
          className="text-xs text-center text-muted"
        >
          {isTriggered ? "Release!" : "Pull for random"}
        </motion.div>

        {/* Chevron hint (when not pulling) */}
        <motion.div
          style={{ opacity: chevronOpacity }}
          className="flex flex-col items-center"
        >
          <ChevronDown className="w-4 h-4 text-muted/50 animate-bounce" />
        </motion.div>
      </motion.div>
    </div>
  );
}
