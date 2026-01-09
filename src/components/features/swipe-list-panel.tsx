"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, X, ChevronDown, Trash2, ArrowUpDown, Clock, SortAsc, MessageSquare, Check } from "lucide-react";
import { Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  getSwipedNames,
  removeSwipedName,
  updateSwipeAction,
  updateSwipeNote,
  clearByAction,
  SwipedName,
} from "@/lib/swipe-preferences";
import { haptics } from "@/lib/haptics";

type SortOption = "rating" | "name" | "recent";

interface SwipeListPanelProps {
  onSelectName: (name: string) => void;
  refreshKey?: number;
}

/**
 * SwipeListPanel - View and manage all swiped names
 * Shows all names in one list with sort and filter options
 */
export function SwipeListPanel({ onSelectName, refreshKey = 0 }: SwipeListPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [names, setNames] = useState<SwipedName[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("rating");
  const [showSkipped, setShowSkipped] = useState(false);

  // Load names from storage
  useEffect(() => {
    const loadNames = () => {
      setNames(getSwipedNames());
    };

    loadNames();
    window.addEventListener("storage", loadNames);
    return () => window.removeEventListener("storage", loadNames);
  }, []);

  // Refresh when expanded
  useEffect(() => {
    if (isExpanded) {
      setNames(getSwipedNames());
    }
  }, [isExpanded]);

  // Refresh when refreshKey changes
  useEffect(() => {
    if (refreshKey > 0) {
      setNames(getSwipedNames());
    }
  }, [refreshKey]);

  // Filter and sort names
  const displayNames = useMemo(() => {
    let filtered = names.filter((n) => {
      if (n.action === "dislike") return showSkipped;
      return true; // Always show liked and super-liked
    });

    // Sort
    switch (sortBy) {
      case "rating":
        // Super-liked first, then liked, then skipped
        filtered.sort((a, b) => {
          const order = { superlike: 0, like: 1, dislike: 2 };
          return order[a.action] - order[b.action];
        });
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "recent":
        filtered.sort((a, b) => b.swipedAt - a.swipedAt);
        break;
    }

    return filtered;
  }, [names, sortBy, showSkipped]);

  const superlikedCount = names.filter((n) => n.action === "superlike").length;
  const likedCount = names.filter((n) => n.action === "like").length;
  const skippedCount = names.filter((n) => n.action === "dislike").length;
  const totalFavorites = superlikedCount + likedCount;

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

  const handleRescue = (id: string) => {
    haptics.save();
    updateSwipeAction(id, "like");
    setNames(getSwipedNames());
  };

  const handleUpdateNote = (id: string, note: string) => {
    updateSwipeNote(id, note);
    setNames(getSwipedNames());
  };

  const handleClearAll = () => {
    if (confirm("Clear all saved names?")) {
      clearByAction("like");
      clearByAction("superlike");
      clearByAction("dislike");
      setNames(getSwipedNames());
    }
  };

  const cycleSortOption = () => {
    const options: SortOption[] = ["rating", "name", "recent"];
    const currentIndex = options.indexOf(sortBy);
    setSortBy(options[(currentIndex + 1) % options.length]);
  };

  // Don't show if no names at all
  if (totalFavorites === 0 && skippedCount === 0) {
    return null;
  }

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Header */}
      <button
        onClick={() => {
          haptics.tap();
          setIsExpanded(!isExpanded);
        }}
        className="w-full p-4 flex items-center justify-between touch-target tap-highlight"
      >
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">Your Favorites</span>
          <div className="flex items-center gap-2 text-xs">
            {superlikedCount > 0 && (
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="w-3 h-3 fill-current" />
                <span>{superlikedCount}</span>
              </div>
            )}
            {likedCount > 0 && (
              <div className="flex items-center gap-1 text-success">
                <Heart className="w-3 h-3" />
                <span>{likedCount}</span>
              </div>
            )}
            {skippedCount > 0 && (
              <div className="flex items-center gap-1 text-muted">
                <X className="w-3 h-3" />
                <span>{skippedCount}</span>
              </div>
            )}
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expanded content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 space-y-3">
              {/* Sort and filter controls */}
              <div className="flex items-center justify-between gap-2">
                {/* Sort button */}
                <button
                  onClick={cycleSortOption}
                  title="Click to change sort order"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-medium text-muted hover:bg-secondary transition-colors"
                >
                  {sortBy === "rating" && <ArrowUpDown className="w-3.5 h-3.5" />}
                  {sortBy === "name" && <SortAsc className="w-3.5 h-3.5" />}
                  {sortBy === "recent" && <Clock className="w-3.5 h-3.5" />}
                  {sortBy === "rating" && "By Rating"}
                  {sortBy === "name" && "A-Z"}
                  {sortBy === "recent" && "Recent"}
                </button>

                {/* Show skipped toggle */}
                {skippedCount > 0 && (
                  <button
                    onClick={() => setShowSkipped(!showSkipped)}
                    title={showSkipped ? "Hide skipped names" : "Show names you passed on"}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                      ${showSkipped
                        ? "bg-muted/20 text-foreground"
                        : "bg-secondary/50 text-muted hover:bg-secondary"
                      }
                    `}
                  >
                    <X className="w-3.5 h-3.5" />
                    Skipped ({skippedCount})
                  </button>
                )}
              </div>

              {/* Names list */}
              <div className="space-y-1.5 max-h-80 overflow-y-auto">
                {displayNames.length === 0 ? (
                  <Text muted className="text-center py-6 text-sm">
                    No names saved yet. Swipe right to save!
                  </Text>
                ) : (
                  <AnimatePresence mode="popLayout">
                    {displayNames.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.15 }}
                      >
                        <SwipeListItem
                          item={item}
                          onSelect={() => onSelectName(item.name)}
                          onRemove={() => handleRemove(item.id)}
                          onUpgrade={() => handleUpgrade(item.id)}
                          onDowngrade={() => handleDowngrade(item.id)}
                          onRescue={() => handleRescue(item.id)}
                          onUpdateNote={(note) => handleUpdateNote(item.id, note)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Clear all button */}
              {displayNames.length > 0 && (
                <div className="pt-2 border-t border-border">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearAll}
                    className="w-full text-muted hover:text-error"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Clear All
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface SwipeListItemProps {
  item: SwipedName;
  onSelect: () => void;
  onRemove: () => void;
  onUpgrade: () => void;
  onDowngrade: () => void;
  onRescue: () => void;
  onUpdateNote: (note: string) => void;
}

function SwipeListItem({ item, onSelect, onRemove, onUpgrade, onDowngrade, onRescue, onUpdateNote }: SwipeListItemProps) {
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteText, setNoteText] = useState(item.note || "");

  const isSuperLiked = item.action === "superlike";
  const isLiked = item.action === "like";
  const isSkipped = item.action === "dislike";

  const handleSaveNote = () => {
    onUpdateNote(noteText);
    setIsEditingNote(false);
  };

  return (
    <div className={`rounded-xl transition-colors
      ${isSuperLiked ? "bg-amber-50 border border-amber-200" : ""}
      ${isLiked ? "bg-success/5 border border-success/20" : ""}
      ${isSkipped ? "bg-secondary/30 border border-transparent" : ""}
    `}>
      <div className="flex items-center gap-2 p-2.5">
        {/* Status indicator */}
        <div className={`flex-shrink-0 ${
          isSuperLiked ? "text-amber-500" : isSkipped ? "text-muted" : "text-success"
        }`}>
          {isSuperLiked ? (
            <Star className="w-4 h-4 fill-current" />
          ) : isSkipped ? (
            <X className="w-4 h-4" />
          ) : (
            <Heart className="w-4 h-4" />
          )}
        </div>

        {/* Name and meaning */}
        <button
          onClick={onSelect}
          className={`flex-1 text-left transition-colors ${
            isSkipped ? "text-muted" : "hover:text-primary"
          }`}
        >
          <span className="font-medium text-sm">{item.name}</span>
          {item.meanings && item.meanings.length > 0 && (
            <span className="text-muted font-normal ml-2 text-xs">
              {item.meanings[0]}
            </span>
          )}
        </button>

        {/* Actions */}
        <div className="flex items-center gap-0.5">
          {/* Note button */}
          {!isSkipped && (
            <button
              onClick={() => setIsEditingNote(!isEditingNote)}
              className={`p-1.5 rounded-full transition-colors ${
                item.note
                  ? "text-primary hover:bg-primary/10"
                  : "text-muted/50 hover:text-muted hover:bg-secondary"
              }`}
              title={item.note ? "Edit note" : "Add note"}
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </button>
          )}

          {isSkipped ? (
            <button
              onClick={onRescue}
              className="p-1.5 rounded-full hover:bg-success/20 text-success"
              title="Rescue - Changed your mind? Add to favorites"
            >
              <Heart className="w-3.5 h-3.5" />
            </button>
          ) : isSuperLiked ? (
            <button
              onClick={onDowngrade}
              className="p-1.5 rounded-full hover:bg-secondary text-muted"
              title="Move to Liked - Remove from top favorites"
            >
              <Heart className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onUpgrade}
              className="p-1.5 rounded-full hover:bg-amber-100 text-amber-500"
              title="Super Like - Add to top favorites!"
            >
              <Star className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            onClick={onRemove}
            className="p-1.5 rounded-full hover:bg-error/10 text-error/60 hover:text-error"
            title="Remove - Delete from list"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Note display/edit */}
      {(item.note || isEditingNote) && !isSkipped && (
        <div className="px-2.5 pb-2.5 -mt-1">
          {isEditingNote ? (
            <div className="flex gap-1.5">
              <input
                type="text"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add a note (e.g., grandma's name)"
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
                title="Save note"
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
