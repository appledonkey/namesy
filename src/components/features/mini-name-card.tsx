"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, X, TrendingUp, TrendingDown, Minus, MoreHorizontal } from "lucide-react";
import type { SwipedName } from "@/lib/swipe-preferences";
import { haptics } from "@/lib/haptics";

interface MiniNameCardProps {
  item: SwipedName;
  onSelect: () => void;
  onRemove: () => void;
  onUpgrade?: () => void;
  onDowngrade?: () => void;
}

/**
 * MiniNameCard - Compact card for the favorites catalogue grid
 */
export function MiniNameCard({
  item,
  onSelect,
  onRemove,
  onUpgrade,
  onDowngrade,
}: MiniNameCardProps) {
  const [showActions, setShowActions] = useState(false);

  const isSuperLiked = item.action === "superlike";

  // Determine trend icon
  const getTrendIcon = () => {
    // We don't have trend data in SwipedName, so we'll skip this for now
    // Could be enhanced later by looking up the name in namesData
    return null;
  };

  const handleCardClick = () => {
    haptics.select();
    onSelect();
  };

  const handleActionClick = (e: React.MouseEvent, action: () => void) => {
    e.stopPropagation();
    haptics.tap();
    action();
    setShowActions(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCardClick}
      className={`relative rounded-2xl p-4 cursor-pointer transition-shadow ${
        isSuperLiked
          ? "bg-gradient-to-br from-amber-50 to-amber-100/50 border-2 border-amber-300 shadow-lg shadow-amber-100"
          : "bg-card border border-border hover:shadow-md"
      }`}
    >
      {/* Super-liked badge */}
      {isSuperLiked && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center shadow-md">
          <Star className="w-3.5 h-3.5 text-white fill-current" />
        </div>
      )}

      {/* Action menu button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          haptics.tap();
          setShowActions(!showActions);
        }}
        className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-black/5 transition-colors"
      >
        <MoreHorizontal className="w-4 h-4 text-muted" />
      </button>

      {/* Action menu dropdown */}
      {showActions && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={(e) => {
              e.stopPropagation();
              setShowActions(false);
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="absolute top-8 right-2 bg-card border border-border rounded-xl shadow-xl z-20 overflow-hidden min-w-[140px]"
          >
            {isSuperLiked ? (
              onDowngrade && (
                <button
                  onClick={(e) => handleActionClick(e, onDowngrade)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-secondary flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 text-success" />
                  Move to Liked
                </button>
              )
            ) : (
              onUpgrade && (
                <button
                  onClick={(e) => handleActionClick(e, onUpgrade)}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-secondary flex items-center gap-2"
                >
                  <Star className="w-4 h-4 text-amber-500" />
                  Super Like
                </button>
              )
            )}
            <button
              onClick={(e) => handleActionClick(e, onRemove)}
              className="w-full px-3 py-2 text-left text-sm hover:bg-error/10 text-error flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Remove
            </button>
          </motion.div>
        </>
      )}

      {/* Card content */}
      <div className="text-center pt-1">
        {/* Name */}
        <h3 className={`font-heading text-xl font-semibold mb-1 ${
          isSuperLiked ? "text-amber-900" : "text-foreground"
        }`}>
          {item.name}
        </h3>

        {/* Meaning */}
        {item.meanings && item.meanings.length > 0 && (
          <p className="text-xs text-muted italic mb-1 line-clamp-1">
            &ldquo;{item.meanings[0]}&rdquo;
          </p>
        )}

        {/* Origins */}
        {item.origins && item.origins.length > 0 && (
          <p className="text-xs text-muted/70">
            {item.origins.slice(0, 2).join(", ")}
          </p>
        )}

        {/* Note if exists */}
        {item.note && (
          <p className="text-xs text-primary mt-2 line-clamp-1">
            📝 {item.note}
          </p>
        )}
      </div>
    </motion.div>
  );
}
