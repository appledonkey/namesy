"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, X, ChevronUp, MessageSquare, Check, Trash2 } from "lucide-react";
import {
  getSwipedNames,
  removeSwipedName,
  updateSwipeAction,
  updateSwipeNote,
  SwipedName,
} from "@/lib/swipe-preferences";
import { haptics } from "@/lib/haptics";

interface FavoritesDrawerProps {
  onSelectName: (name: string) => void;
  refreshKey?: number;
}

/**
 * FavoritesDrawer - Bottom sheet showing all favorited names
 * Collapsed: Shows count badge
 * Expanded: Full list with actions
 */
export function FavoritesDrawer({ onSelectName, refreshKey = 0 }: FavoritesDrawerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [names, setNames] = useState<SwipedName[]>(() => {
    if (typeof window !== "undefined") {
      return getSwipedNames();
    }
    return [];
  });

  // Reload function
  const reloadNames = useCallback(() => {
    setNames(getSwipedNames());
  }, []);

  // Refresh when key changes
  useEffect(() => {
    if (refreshKey > 0) {
      reloadNames();
    }
  }, [refreshKey, reloadNames]);

  // Refresh on expand
  useEffect(() => {
    if (isExpanded) {
      reloadNames();
    }
  }, [isExpanded, reloadNames]);

  const favorites = names.filter((n) => n.action === "like" || n.action === "superlike");
  const superlikedCount = names.filter((n) => n.action === "superlike").length;
  const likedCount = names.filter((n) => n.action === "like").length;

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

  const handleUpdateNote = (id: string, note: string) => {
    updateSwipeNote(id, note);
    setNames(getSwipedNames());
  };

  if (favorites.length === 0) {
    return null;
  }

  return (
    <>
      {/* Collapsed trigger button */}
      <motion.button
        onClick={() => {
          haptics.tap();
          setIsExpanded(true);
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow"
      >
        <Heart className="w-4 h-4 text-success" />
        <span className="text-sm font-medium">{favorites.length} Favorites</span>
        {superlikedCount > 0 && (
          <span className="flex items-center gap-0.5 text-amber-500 text-xs">
            <Star className="w-3 h-3 fill-current" />
            {superlikedCount}
          </span>
        )}
        <ChevronUp className="w-4 h-4 text-muted ml-1" />
      </motion.button>

      {/* Expanded drawer */}
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsExpanded(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-card rounded-t-3xl shadow-2xl z-50 max-h-[80vh] overflow-hidden"
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 bg-border rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 pb-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold">Your Favorites</h2>
                  <div className="flex items-center gap-2 text-xs">
                    {superlikedCount > 0 && (
                      <span className="flex items-center gap-1 text-amber-500">
                        <Star className="w-3 h-3 fill-current" />
                        {superlikedCount}
                      </span>
                    )}
                    {likedCount > 0 && (
                      <span className="flex items-center gap-1 text-success">
                        <Heart className="w-3 h-3" />
                        {likedCount}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* List */}
              <div className="overflow-y-auto max-h-[60vh] px-4 py-3">
                <div className="space-y-2">
                  {favorites
                    .sort((a, b) => {
                      // Super-liked first
                      if (a.action === "superlike" && b.action !== "superlike") return -1;
                      if (b.action === "superlike" && a.action !== "superlike") return 1;
                      return b.swipedAt - a.swipedAt;
                    })
                    .map((item) => (
                      <FavoriteItem
                        key={item.id}
                        item={item}
                        onSelect={() => {
                          onSelectName(item.name);
                          setIsExpanded(false);
                        }}
                        onRemove={() => handleRemove(item.id)}
                        onUpgrade={() => handleUpgrade(item.id)}
                        onDowngrade={() => handleDowngrade(item.id)}
                        onUpdateNote={(note) => handleUpdateNote(item.id, note)}
                      />
                    ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

interface FavoriteItemProps {
  item: SwipedName;
  onSelect: () => void;
  onRemove: () => void;
  onUpgrade: () => void;
  onDowngrade: () => void;
  onUpdateNote: (note: string) => void;
}

function FavoriteItem({ item, onSelect, onRemove, onUpgrade, onDowngrade, onUpdateNote }: FavoriteItemProps) {
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteText, setNoteText] = useState(item.note || "");

  const isSuperLiked = item.action === "superlike";

  const handleSaveNote = () => {
    onUpdateNote(noteText);
    setIsEditingNote(false);
  };

  return (
    <div
      className={`rounded-xl p-3 transition-colors ${
        isSuperLiked
          ? "bg-amber-50 border border-amber-200"
          : "bg-secondary/30 border border-transparent"
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className={isSuperLiked ? "text-amber-500" : "text-success"}>
          {isSuperLiked ? (
            <Star className="w-4 h-4 fill-current" />
          ) : (
            <Heart className="w-4 h-4" />
          )}
        </div>

        {/* Name */}
        <button
          onClick={onSelect}
          className="flex-1 text-left hover:text-primary transition-colors"
        >
          <span className="font-medium">{item.name}</span>
          {item.meanings && item.meanings.length > 0 && (
            <span className="text-muted text-sm ml-2">
              {item.meanings[0]}
            </span>
          )}
        </button>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Note */}
          <button
            onClick={() => setIsEditingNote(!isEditingNote)}
            className={`p-1.5 rounded-full transition-colors ${
              item.note
                ? "text-primary hover:bg-primary/10"
                : "text-muted/50 hover:text-muted hover:bg-secondary"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </button>

          {/* Upgrade/Downgrade */}
          {isSuperLiked ? (
            <button
              onClick={onDowngrade}
              className="p-1.5 rounded-full hover:bg-secondary text-muted"
              title="Move to Liked"
            >
              <Heart className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onUpgrade}
              className="p-1.5 rounded-full hover:bg-amber-100 text-amber-500"
              title="Super Like"
            >
              <Star className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Remove */}
          <button
            onClick={onRemove}
            className="p-1.5 rounded-full hover:bg-error/10 text-error/60 hover:text-error"
            title="Remove"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Note editor */}
      {(item.note || isEditingNote) && (
        <div className="mt-2 ml-7">
          {isEditingNote ? (
            <div className="flex gap-1.5">
              <input
                type="text"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a note..."
                className="flex-1 text-xs px-2 py-1.5 rounded-md bg-white border border-border focus:outline-none focus:border-primary"
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSaveNote();
                  if (e.key === "Escape") setIsEditingNote(false);
                }}
              />
              <button
                onClick={handleSaveNote}
                className="p-1.5 rounded-md bg-primary text-white hover:bg-primary/90"
              >
                <Check className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsEditingNote(true)}
              className="text-xs text-muted/70 hover:text-muted flex items-center gap-1"
            >
              <MessageSquare className="w-3 h-3" />
              {item.note}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
