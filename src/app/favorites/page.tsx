"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Heart, Star, Trash2, Share2, ChevronRight } from "lucide-react";
import { NavBar } from "@/components/ui/navbar";
import { TabBar } from "@/components/ui/tab-bar";
import { Button } from "@/components/ui/button";
import { BottomSheet } from "@/components/features/bottom-sheet";
import { haptics } from "@/lib/haptics";
import { shareName } from "@/lib/share";
import {
  getLikedNames,
  removeSwipedName,
  updateSwipeAction,
  clearByAction,
  type SwipedName,
} from "@/lib/swipe-preferences";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<SwipedName[]>(() => {
    // Initialize from localStorage on client
    if (typeof window !== "undefined") {
      return getLikedNames();
    }
    return [];
  });
  const [filter, setFilter] = useState<"all" | "superlike">("all");
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Reload favorites from localStorage
  const reloadFavorites = useCallback(() => {
    setFavorites(getLikedNames());
  }, []);

  // Filter favorites based on selection
  const filteredFavorites =
    filter === "all" ? favorites : favorites.filter((f) => f.action === "superlike");

  // Remove a favorite
  const handleRemove = useCallback((id: string) => {
    haptics.tap();
    removeSwipedName(id);
    reloadFavorites();
  }, [reloadFavorites]);

  // Upgrade to super like
  const handleSuperLike = useCallback((id: string) => {
    haptics.save();
    updateSwipeAction(id, "superlike");
    reloadFavorites();
  }, [reloadFavorites]);

  // Share the list
  const handleShare = useCallback(() => {
    const names = filteredFavorites.map((f) => f.name).join(", ");
    shareName(`My favorite baby names: ${names}`);
  }, [filteredFavorites]);

  // Clear all favorites
  const handleClearAll = useCallback(() => {
    haptics.tap();
    clearByAction("like");
    clearByAction("superlike");
    setShowClearConfirm(false);
    reloadFavorites();
  }, [reloadFavorites]);

  const superLikeCount = favorites.filter((f) => f.action === "superlike").length;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Desktop navbar */}
      <div className="hidden md:block">
        <NavBar />
      </div>

      {/* Mobile header */}
      <header className="md:hidden bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-30 safe-top">
        <div className="px-4 py-3 flex items-center justify-between">
          <Link href="/" className="p-2 -ml-2 text-muted hover:text-foreground">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="font-heading text-lg font-semibold">Favorites</h1>
          <button
            onClick={handleShare}
            disabled={favorites.length === 0}
            className="p-2 -mr-2 text-muted hover:text-foreground disabled:opacity-50"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6">
        {/* Header stats */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-heading text-2xl font-semibold hidden md:block">
              Your Favorites
            </h2>
            <p className="text-sm text-muted mt-1">
              {favorites.length} {favorites.length === 1 ? "name" : "names"} saved
              {superLikeCount > 0 && ` · ${superLikeCount} starred`}
            </p>
          </div>

          {favorites.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowClearConfirm(true)}
              className="text-muted hover:text-error"
            >
              <Trash2 className="w-4 h-4 mr-1" />
              Clear
            </Button>
          )}
        </div>

        {/* Filter tabs */}
        {favorites.length > 0 && superLikeCount > 0 && (
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "bg-secondary/50 text-foreground hover:bg-secondary"
              }`}
            >
              All ({favorites.length})
            </button>
            <button
              onClick={() => setFilter("superlike")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-1 ${
                filter === "superlike"
                  ? "bg-amber-500 text-white"
                  : "bg-secondary/50 text-foreground hover:bg-secondary"
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              Starred ({superLikeCount})
            </button>
          </div>
        )}

        {/* Favorites list */}
        {filteredFavorites.length > 0 ? (
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredFavorites.map((fav, index) => (
                <motion.div
                  key={fav.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <FavoriteCard
                    favorite={fav}
                    onRemove={() => handleRemove(fav.id)}
                    onSuperLike={() => handleSuperLike(fav.id)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : favorites.length > 0 ? (
          /* Filtered empty state */
          <div className="text-center py-12">
            <Star className="w-12 h-12 text-amber-500/30 mx-auto mb-4" />
            <p className="text-muted">No starred names yet</p>
            <p className="text-sm text-muted/70 mt-1">
              Star your top favorites to see them here
            </p>
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold mb-2">
              No favorites yet
            </h3>
            <p className="text-muted mb-6 max-w-xs mx-auto">
              Start swiping to discover names you love. They&apos;ll appear here.
            </p>
            <Link href="/">
              <Button>Start Discovering</Button>
            </Link>
          </div>
        )}

        {/* Try in builder CTA */}
        {favorites.length > 0 && (
          <div className="mt-8 p-4 bg-secondary/30 rounded-2xl">
            <p className="text-sm text-muted mb-3">
              Ready to build a full name?
            </p>
            <Link href="/builder">
              <Button variant="secondary" className="w-full">
                Open Name Builder
              </Button>
            </Link>
          </div>
        )}
      </main>

      {/* Clear confirmation sheet */}
      <BottomSheet isOpen={showClearConfirm} onClose={() => setShowClearConfirm(false)}>
        <div className="text-center py-4">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-error/10 flex items-center justify-center">
            <Trash2 className="w-8 h-8 text-error" />
          </div>
          <h3 className="font-heading text-xl font-semibold mb-2">
            Clear all favorites?
          </h3>
          <p className="text-muted mb-6">
            This will remove all {favorites.length} saved names. This action cannot be undone.
          </p>
          <div className="flex gap-3">
            <Button
              variant="secondary"
              onClick={() => setShowClearConfirm(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <button
              onClick={handleClearAll}
              className="flex-1 py-3 px-4 rounded-full bg-error text-white font-medium hover:bg-error/90 transition-colors"
            >
              Clear All
            </button>
          </div>
        </div>
      </BottomSheet>

      {/* Mobile tab bar */}
      <TabBar favoritesCount={favorites.length} />
    </div>
  );
}

interface FavoriteCardProps {
  favorite: SwipedName;
  onRemove: () => void;
  onSuperLike: () => void;
}

function FavoriteCard({ favorite, onRemove, onSuperLike }: FavoriteCardProps) {
  const isSuperLiked = favorite.action === "superlike";

  return (
    <Link
      href={`/name/${favorite.name.toLowerCase()}`}
      className="block bg-card rounded-2xl border border-border/50 p-4 hover:border-primary/30 transition-colors group"
    >
      <div className="flex items-center gap-4">
        {/* Name info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-heading text-lg font-semibold truncate">
              {favorite.name}
            </h3>
            {isSuperLiked && (
              <Star className="w-4 h-4 text-amber-500 fill-amber-500 flex-shrink-0" />
            )}
          </div>
          {(favorite.origins?.length || favorite.meanings?.length) && (
            <p className="text-sm text-muted truncate">
              {favorite.meanings?.[0] || favorite.origins?.[0]}
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {!isSuperLiked && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onSuperLike();
              }}
              className="p-2 text-muted hover:text-amber-500 transition-colors"
              title="Star this name"
            >
              <Star className="w-5 h-5" />
            </button>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onRemove();
            }}
            className="p-2 text-muted hover:text-error transition-colors"
            title="Remove from favorites"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <ChevronRight className="w-5 h-5 text-muted/50 group-hover:text-primary transition-colors" />
        </div>
      </div>
    </Link>
  );
}
