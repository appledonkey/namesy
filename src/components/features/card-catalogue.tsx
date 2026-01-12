"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, X, ArrowUpDown, SortAsc, Clock } from "lucide-react";
import {
  getSwipedNames,
  removeSwipedName,
  updateSwipeAction,
  SwipedName,
} from "@/lib/swipe-preferences";
import { MiniNameCard } from "./mini-name-card";
import { haptics } from "@/lib/haptics";

type SortOption = "rating" | "name" | "recent";

interface CardCatalogueProps {
  onSelectName: (name: string) => void;
  onClose: () => void;
  refreshKey?: number;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

/**
 * CardCatalogue - Visual grid of favorited names
 */
export function CardCatalogue({ onSelectName, onClose, refreshKey = 0 }: CardCatalogueProps) {
  const [names, setNames] = useState<SwipedName[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("rating");

  // Load names
  useEffect(() => {
    setNames(getSwipedNames());
  }, []);

  // Refresh when key changes
  useEffect(() => {
    if (refreshKey > 0) {
      setNames(getSwipedNames());
    }
  }, [refreshKey]);

  // Get favorites only
  const favorites = useMemo(() => {
    return names.filter((n) => n.action === "like" || n.action === "superlike");
  }, [names]);

  // Sort and group
  const { superLiked, liked } = useMemo(() => {
    let sorted = [...favorites];

    // Sort within groups
    switch (sortBy) {
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "recent":
        sorted.sort((a, b) => b.swipedAt - a.swipedAt);
        break;
      case "rating":
      default:
        // Super-liked first, then by recency
        sorted.sort((a, b) => {
          if (a.action === "superlike" && b.action !== "superlike") return -1;
          if (b.action === "superlike" && a.action !== "superlike") return 1;
          return b.swipedAt - a.swipedAt;
        });
        break;
    }

    return {
      superLiked: sorted.filter((n) => n.action === "superlike"),
      liked: sorted.filter((n) => n.action === "like"),
    };
  }, [favorites, sortBy]);

  const handleRemove = (id: string) => {
    haptics.tap();
    removeSwipedName(id);
    setNames(getSwipedNames());
  };

  const handleUpgrade = (id: string) => {
    haptics.save();
    updateSwipeAction(id, "superlike");
    setNames(getSwipedNames());
  };

  const handleDowngrade = (id: string) => {
    haptics.tap();
    updateSwipeAction(id, "like");
    setNames(getSwipedNames());
  };

  const handleSelect = (name: string) => {
    onSelectName(name);
    onClose();
  };

  const cycleSortOption = () => {
    haptics.tap();
    const options: SortOption[] = ["rating", "name", "recent"];
    const currentIndex = options.indexOf(sortBy);
    setSortBy(options[(currentIndex + 1) % options.length]);
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40"
      />

      {/* Catalogue panel */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl shadow-2xl z-50 max-h-[85vh] overflow-hidden flex flex-col"
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2 flex-shrink-0">
          <div className="w-10 h-1 bg-border rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 pb-4 border-b border-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold">Your Favorites</h2>
            <span className="text-sm text-muted">
              {favorites.length} {favorites.length === 1 ? "name" : "names"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {/* Sort button */}
            <button
              onClick={cycleSortOption}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-medium text-muted hover:bg-secondary transition-colors"
            >
              {sortBy === "rating" && <ArrowUpDown className="w-3.5 h-3.5" />}
              {sortBy === "name" && <SortAsc className="w-3.5 h-3.5" />}
              {sortBy === "recent" && <Clock className="w-3.5 h-3.5" />}
              {sortBy === "rating" && "By Rating"}
              {sortBy === "name" && "A-Z"}
              {sortBy === "recent" && "Recent"}
            </button>
            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {favorites.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Heart className="w-12 h-12 text-muted/30 mb-4" />
              <h3 className="text-lg font-medium mb-2">No favorites yet</h3>
              <p className="text-sm text-muted max-w-xs">
                Swipe right on names you like to add them to your collection
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Super Liked Section */}
              {superLiked.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-amber-500 fill-current" />
                    <h3 className="text-sm font-medium text-amber-700">
                      Super Liked ({superLiked.length})
                    </h3>
                  </div>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                  >
                    <AnimatePresence mode="popLayout">
                      {superLiked.map((item) => (
                        <motion.div key={item.id} variants={cardVariants} layout>
                          <MiniNameCard
                            item={item}
                            onSelect={() => handleSelect(item.name)}
                            onRemove={() => handleRemove(item.id)}
                            onDowngrade={() => handleDowngrade(item.id)}
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </section>
              )}

              {/* Liked Section */}
              {liked.length > 0 && (
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <Heart className="w-4 h-4 text-success" />
                    <h3 className="text-sm font-medium text-foreground/70">
                      Liked ({liked.length})
                    </h3>
                  </div>
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
                  >
                    <AnimatePresence mode="popLayout">
                      {liked.map((item) => (
                        <motion.div key={item.id} variants={cardVariants} layout>
                          <MiniNameCard
                            item={item}
                            onSelect={() => handleSelect(item.name)}
                            onRemove={() => handleRemove(item.id)}
                            onUpgrade={() => handleUpgrade(item.id)}
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </motion.div>
                </section>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}

/**
 * CardCatalogueTrigger - Button to open the catalogue
 */
interface CardCatalogueTriggerProps {
  onClick: () => void;
  count: number;
  superLikedCount: number;
}

export function CardCatalogueTrigger({ onClick, count, superLikedCount }: CardCatalogueTriggerProps) {
  if (count === 0) return null;

  return (
    <motion.button
      onClick={() => {
        haptics.tap();
        onClick();
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow"
    >
      <Heart className="w-4 h-4 text-success" />
      <span className="text-sm font-medium">{count} Favorites</span>
      {superLikedCount > 0 && (
        <span className="flex items-center gap-0.5 text-amber-500 text-xs">
          <Star className="w-3 h-3 fill-current" />
          {superLikedCount}
        </span>
      )}
    </motion.button>
  );
}
