"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Heart, X } from "lucide-react";
import { haptics } from "@/lib/haptics";
import { markTutorialSeen } from "@/lib/partner-storage";

interface SwipeTutorialProps {
  onComplete: () => void;
}

export function SwipeTutorial({ onComplete }: SwipeTutorialProps) {
  const [phase, setPhase] = useState(0);
  const demoX = useMotionValue(0);
  const demoY = useMotionValue(0);
  const demoRotate = useTransform(demoX, [-100, 100], [-10, 10]);

  // Run the animation sequence
  useEffect(() => {
    const sequence = async () => {
      // Phase 0: Initial pause
      await new Promise(r => setTimeout(r, 500));

      // Phase 1: Swipe left (nope)
      setPhase(1);
      await animateValue(demoX, 0, -120, 400);
      await new Promise(r => setTimeout(r, 300));
      await animateValue(demoX, -120, 0, 300);
      await new Promise(r => setTimeout(r, 400));

      // Phase 2: Swipe right (like)
      setPhase(2);
      await animateValue(demoX, 0, 120, 400);
      await new Promise(r => setTimeout(r, 300));
      await animateValue(demoX, 120, 0, 300);
      await new Promise(r => setTimeout(r, 400));

      // Phase 3: Swipe up (middle name)
      setPhase(3);
      await animateValue(demoY, 0, -80, 400);
      await new Promise(r => setTimeout(r, 300));
      await animateValue(demoY, -80, 0, 300);
      await new Promise(r => setTimeout(r, 600));

      // Loop the animation
      setPhase(0);
    };

    const animateValue = (motionValue: { set: (v: number) => void }, from: number, to: number, duration: number) => {
      return new Promise<void>(resolve => {
        const startTime = Date.now();
        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          motionValue.set(from + (to - from) * eased);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            resolve();
          }
        };
        animate();
      });
    };

    let cancelled = false;
    const runLoop = async () => {
      while (!cancelled) {
        await sequence();
      }
    };
    runLoop();

    return () => { cancelled = true; };
  }, [demoX, demoY]);

  const handleComplete = () => {
    haptics.tap();
    markTutorialSeen();
    onComplete();
  };

  const likeOpacity = useTransform(demoX, [0, 80], [0, 1]);
  const nopeOpacity = useTransform(demoX, [-80, 0], [1, 0]);
  const middleOpacity = useTransform(demoY, [-60, 0], [1, 0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 safe-y px-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-card rounded-3xl p-6 sm:p-8 max-w-[320px] w-full text-center shadow-xl"
      >
        <h2 className="font-heading text-2xl mb-2">How to swipe</h2>
        <p className="text-muted text-sm mb-6">Swipe to rate names</p>

        {/* Demo card area */}
        <div className="relative h-48 mb-6">
          {/* Floating labels */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-center px-2 pointer-events-none">
            <motion.div
              style={{ opacity: likeOpacity }}
              className="px-3 py-1.5 bg-partner2/20 border-2 border-partner2 text-partner2 rounded-full font-bold text-xs"
            >
              LIKE
            </motion.div>
            <motion.div
              style={{ opacity: middleOpacity }}
              className="px-3 py-1.5 bg-accent/20 border-2 border-accent text-accent rounded-full font-bold text-xs"
            >
              MIDDLE
            </motion.div>
            <motion.div
              style={{ opacity: nopeOpacity }}
              className="px-3 py-1.5 bg-partner1/20 border-2 border-partner1 text-partner1 rounded-full font-bold text-xs"
            >
              NOPE
            </motion.div>
          </div>

          {/* Demo card */}
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-secondary rounded-2xl shadow-lg flex items-center justify-center"
            style={{ x: demoX, y: demoY, rotate: demoRotate }}
          >
            <span className="font-heading text-2xl text-foreground">Emma</span>
          </motion.div>
        </div>

        {/* Instructions */}
        <div className="space-y-3 mb-6 text-sm">
          <div className={`flex items-center gap-3 transition-all duration-300 ${phase === 1 ? "opacity-100 scale-105" : "opacity-60"}`}>
            <div className="w-8 h-8 rounded-full bg-partner1/20 flex items-center justify-center flex-shrink-0">
              <X className="w-4 h-4 text-partner1" />
            </div>
            <span>Swipe left to pass</span>
          </div>
          <div className={`flex items-center gap-3 transition-all duration-300 ${phase === 2 ? "opacity-100 scale-105" : "opacity-60"}`}>
            <div className="w-8 h-8 rounded-full bg-partner2/20 flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-partner2" />
            </div>
            <span>Swipe right to like</span>
          </div>
          <div className={`flex items-center gap-3 transition-all duration-300 ${phase === 3 ? "opacity-100 scale-105" : "opacity-60"}`}>
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <span className="text-accent text-xs font-bold">↑</span>
            </div>
            <span>Swipe up for middle name</span>
          </div>
        </div>

        <button
          onClick={handleComplete}
          className="w-full py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-full transition-colors touch-target"
        >
          Got it!
        </button>
      </motion.div>
    </motion.div>
  );
}
