"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Copy, Share2, RotateCcw, Check, X, Dices } from "lucide-react";
import { haptics } from "@/lib/haptics";
import { copyToClipboard, shareName } from "@/lib/share";

interface FloatingActionButtonProps {
  fullName: string;
  hasName: boolean;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  onClear: () => void;
  onRandomize: () => void;
  favoritesCount: number;
}

/**
 * FloatingActionButton - Contextual mobile FAB
 * - No name: Dice icon → randomize
 * - Name entered, not saved: Heart outline → opens menu
 * - Name saved: Heart filled → opens menu
 */
export function FloatingActionButton({
  fullName,
  hasName,
  isFavorited,
  onToggleFavorite,
  onClear,
  onRandomize,
  favoritesCount,
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(fullName);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    setIsOpen(false);
  };

  const handleShare = async () => {
    await shareName(fullName);
    setIsOpen(false);
  };

  const handleSave = () => {
    haptics.save();
    onToggleFavorite();
    setIsOpen(false);
  };

  const handleClear = () => {
    haptics.tap();
    onClear();
    setIsOpen(false);
  };

  const handleRandomize = () => {
    haptics.random();
    onRandomize();
  };

  const handlePrimaryTap = () => {
    if (!hasName) {
      // No name - randomize
      handleRandomize();
    } else {
      // Has name - toggle menu
      haptics.tap();
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="sm:hidden">
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Secondary FAB buttons */}
      <AnimatePresence>
        {isOpen && hasName && (
          <div className="fixed bottom-24 right-3 flex flex-col-reverse gap-3 z-50">
            {/* Clear */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0 }}
              onClick={handleClear}
              className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-muted hover:text-foreground"
            >
              <RotateCcw className="w-5 h-5" />
            </motion.button>

            {/* Share */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.05 }}
              onClick={handleShare}
              className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground"
            >
              <Share2 className="w-5 h-5" />
            </motion.button>

            {/* Copy */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={handleCopy}
              className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground"
            >
              {copied ? (
                <Check className="w-5 h-5 text-success" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </motion.button>

            {/* Save - only if not already favorited */}
            {!isFavorited && (
              <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.15 }}
                onClick={handleSave}
                className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center text-foreground"
              >
                <Heart className="w-5 h-5" />
              </motion.button>
            )}
          </div>
        )}
      </AnimatePresence>

      {/* Primary FAB */}
      <motion.button
        onClick={handlePrimaryTap}
        className={`
          fixed bottom-5 right-3 w-14 h-14 rounded-full z-50
          flex items-center justify-center transition-all duration-200
          glass-fab
          ${!hasName ? "bg-primary/90" : ""}
          ${isFavorited ? "!bg-rose-500/90" : ""}
        `}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="text-white"
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : !hasName ? (
            <motion.div
              key="dice"
              initial={{ scale: 0.8, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 180 }}
              className="text-white"
            >
              <Dices className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="heart"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative text-white"
            >
              <Heart className={`w-6 h-6 ${isFavorited ? "fill-current" : ""}`} />
              {favoritesCount > 0 && !isFavorited && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {favoritesCount}
                </span>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
