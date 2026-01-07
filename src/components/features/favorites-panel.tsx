"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Heart, X, Trash2, ChevronDown, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/typography";
import { FavoriteName } from "@/lib/favorites";
import { haptics } from "@/lib/haptics";

interface SwipeableFavoriteProps {
  favorite: FavoriteName;
  onSelect: () => void;
  onRemove: () => void;
}

/**
 * SwipeableFavoriteItem - Mobile swipe-to-delete favorite item
 */
function SwipeableFavoriteItem({ favorite, onSelect, onRemove }: SwipeableFavoriteProps) {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0],
    ["rgba(184, 84, 80, 1)", "rgba(184, 84, 80, 0)"]
  );
  const deleteOpacity = useTransform(x, [-100, -50, 0], [1, 0.5, 0]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -80) {
      haptics.delete();
      onRemove();
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Delete background */}
      <motion.div
        style={{ backgroundColor: background }}
        className="absolute inset-0 flex items-center justify-end px-4"
      >
        <motion.div style={{ opacity: deleteOpacity }}>
          <Trash2 className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>

      {/* Swipeable content */}
      <motion.div
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -100, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        className="relative bg-card-alt rounded-lg px-4 py-3 border border-border"
      >
        <button
          onClick={() => {
            haptics.select();
            onSelect();
          }}
          className="w-full text-left touch-target tap-highlight"
        >
          <span className="font-medium block truncate">{favorite.fullName}</span>
          <span className="text-xs text-muted">{favorite.initials}</span>
        </button>
      </motion.div>
    </div>
  );
}

interface FavoritesPanelProps {
  favorites: FavoriteName[];
  onSelectFavorite: (favorite: FavoriteName) => void;
  onRemoveFavorite: (id: string) => void;
  onClearAll: () => void;
  onCompare?: () => void;
}

/**
 * FavoritesPanel - Overlay dropdown showing all saved favorites
 * Uses fixed positioning to avoid layout shift
 */
export function FavoritesPanel({
  favorites,
  onSelectFavorite,
  onRemoveFavorite,
  onClearAll,
  onCompare,
}: FavoritesPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    if (!isExpanded) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isExpanded]);

  // Close on escape
  useEffect(() => {
    if (!isExpanded) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsExpanded(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isExpanded]);

  if (favorites.length === 0) {
    return null;
  }

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto relative">
      {/* Toggle Button - always in document flow */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-center gap-2 py-3 transition-colors ${
          isExpanded ? "text-foreground" : "text-muted hover:text-foreground"
        }`}
      >
        <Heart className={`w-4 h-4 ${isExpanded ? "text-primary" : ""}`} />
        <span className="text-sm font-medium">
          {favorites.length} Saved Name{favorites.length === 1 ? "" : "s"}
        </span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      {/* Overlay Panel - positioned absolutely to avoid layout shift */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-0 right-0 top-full z-30 mt-1"
          >
            <div className="bg-card rounded-xl p-4 border border-border shadow-[var(--shadow-lg)]">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <Text size="sm" className="font-medium">
                  Your Favorites
                </Text>
                <div className="flex items-center gap-2">
                  {favorites.length >= 2 && onCompare && (
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => {
                        onCompare();
                        setIsExpanded(false);
                      }}
                      className="text-xs"
                    >
                      <Scale className="w-3 h-3 mr-1" />
                      Compare
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onClearAll}
                    className="text-xs text-muted hover:text-rose-500"
                  >
                    <Trash2 className="w-3 h-3 mr-1" />
                    Clear All
                  </Button>
                </div>
              </div>

              {/* Favorites List */}
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {favorites.map((favorite) => (
                  <div key={favorite.id}>
                    {/* Mobile: Swipeable item */}
                    <div className="sm:hidden">
                      <SwipeableFavoriteItem
                        favorite={favorite}
                        onSelect={() => {
                          onSelectFavorite(favorite);
                          setIsExpanded(false);
                        }}
                        onRemove={() => onRemoveFavorite(favorite.id)}
                      />
                    </div>

                    {/* Desktop: Standard item with hover delete */}
                    <div className="hidden sm:flex items-center justify-between bg-card-alt rounded-lg px-4 py-3 border border-border group hover:border-primary transition-colors">
                      <button
                        onClick={() => {
                          onSelectFavorite(favorite);
                          setIsExpanded(false);
                        }}
                        className="flex-1 text-left hover:text-foreground transition-colors touch-target tap-highlight touch-feedback py-1 min-w-0"
                      >
                        <span className="font-medium block truncate">{favorite.fullName}</span>
                        <span className="text-xs text-muted">
                          {favorite.initials}
                        </span>
                      </button>
                      <button
                        onClick={() => onRemoveFavorite(favorite.id)}
                        className="p-2 text-muted hover:text-rose-500
                          opacity-0 group-hover:opacity-100
                          transition-all touch-target tap-highlight touch-feedback"
                        aria-label="Remove from favorites"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
