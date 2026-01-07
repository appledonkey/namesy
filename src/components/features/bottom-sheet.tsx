"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { haptics } from "@/lib/haptics";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  /** Height when half-open (default: 50vh) */
  halfHeight?: string;
  /** Height when fully open (default: 85vh) */
  fullHeight?: string;
}

/**
 * BottomSheet - iOS-style slide-up panel for mobile
 * - Drag handle at top
 * - Snap points: closed, half, full
 * - Close on swipe down or backdrop tap
 * - Glass-morphism styling
 */
export function BottomSheet({
  isOpen,
  onClose,
  children,
  halfHeight = "50vh",
  fullHeight = "85vh",
}: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const backdropOpacity = useTransform(y, [0, 300], [1, 0]);

  // Close sheet when dragged down enough
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    const velocity = info.velocity.y;

    if (info.offset.y > threshold || velocity > 500) {
      haptics.tap();
      onClose();
    }
  };

  // Prevent body scroll when sheet is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ opacity: backdropOpacity }}
            onClick={() => {
              haptics.tap();
              onClose();
            }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 sm:hidden"
          />

          {/* Sheet */}
          <motion.div
            ref={sheetRef}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.05, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
            style={{ y }}
            className={`
              fixed bottom-0 left-0 right-0 z-50 sm:hidden
              rounded-t-3xl overflow-hidden
              glass-sheet
              max-h-[${fullHeight}]
            `}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-muted/30" />
            </div>

            {/* Content */}
            <div
              className="px-4 pb-8 overflow-y-auto safe-bottom"
              style={{ maxHeight: `calc(${fullHeight} - 40px)` }}
            >
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
