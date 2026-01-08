"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, X, ChevronDown, Trash2 } from "lucide-react";
import { Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import {
  getSwipedNames,
  getLikedNames,
  getSuperLikedNames,
  removeSwipedName,
  updateSwipeAction,
  clearByAction,
  SwipedName,
  SwipeAction,
} from "@/lib/swipe-preferences";
import { haptics } from "@/lib/haptics";

type FilterTab = "all" | "superliked" | "liked";

interface SwipeListPanelProps {
  onSelectName: (name: string) => void;
  refreshKey?: number;
}

/**
 * SwipeListPanel - View and manage liked/super-liked names
 * Collapsible panel showing swiped names organized by preference
 */
export function SwipeListPanel({ onSelectName, refreshKey = 0 }: SwipeListPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [names, setNames] = useState<SwipedName[]>([]);

  // Load names from storage
  useEffect(() => {
    const loadNames = () => {
      setNames(getLikedNames()); // Only show liked and super-liked
    };

    loadNames();

    // Listen for storage changes (in case another tab updates)
    window.addEventListener("storage", loadNames);
    return () => window.removeEventListener("storage", loadNames);
  }, []);

  // Refresh when expanded
  useEffect(() => {
    if (isExpanded) {
      setNames(getLikedNames());
    }
  }, [isExpanded]);

  // Refresh when refreshKey changes (triggered by swipe actions)
  useEffect(() => {
    if (refreshKey > 0) {
      setNames(getLikedNames());
    }
  }, [refreshKey]);

  const filteredNames = names.filter((n) => {
    if (activeTab === "all") return true;
    if (activeTab === "superliked") return n.action === "superlike";
    if (activeTab === "liked") return n.action === "like";
    return true;
  });

  const superlikedCount = names.filter((n) => n.action === "superlike").length;
  const likedCount = names.filter((n) => n.action === "like").length;
  const totalCount = names.length;

  const handleRemove = (id: string) => {
    haptics.tap();
    removeSwipedName(id);
    setNames(getLikedNames());
  };

  const handleUpgrade = (id: string) => {
    haptics.save();
    updateSwipeAction(id, "superlike");
    setNames(getLikedNames());
  };

  const handleDowngrade = (id: string) => {
    haptics.tap();
    updateSwipeAction(id, "like");
    setNames(getLikedNames());
  };

  const handleClearAll = () => {
    if (confirm("Clear all liked names?")) {
      clearByAction("like");
      clearByAction("superlike");
      setNames([]);
    }
  };

  if (totalCount === 0) {
    return null;
  }

  return (
    <div className="bg-card rounded-2xl border border-border overflow-hidden">
      {/* Header - Always visible */}
      <button
        onClick={() => {
          haptics.tap();
          setIsExpanded(!isExpanded);
        }}
        className="w-full p-4 flex items-center justify-between touch-target tap-highlight"
      >
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Heart className="w-4 h-4 text-success" />
            <span className="text-sm font-medium">{totalCount} Liked</span>
          </div>
          {superlikedCount > 0 && (
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm">{superlikedCount}</span>
            </div>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Expandable content */}
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
              {/* Filter tabs */}
              <div className="flex gap-2">
                <TabButton
                  active={activeTab === "all"}
                  onClick={() => setActiveTab("all")}
                  count={totalCount}
                >
                  All
                </TabButton>
                <TabButton
                  active={activeTab === "superliked"}
                  onClick={() => setActiveTab("superliked")}
                  count={superlikedCount}
                  icon={<Star className="w-3 h-3 fill-current" />}
                >
                  Super
                </TabButton>
                <TabButton
                  active={activeTab === "liked"}
                  onClick={() => setActiveTab("liked")}
                  count={likedCount}
                  icon={<Heart className="w-3 h-3" />}
                >
                  Liked
                </TabButton>
              </div>

              {/* Names list */}
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {filteredNames.length === 0 ? (
                  <Text muted className="text-center py-4 text-sm">
                    No names in this category
                  </Text>
                ) : (
                  filteredNames.map((item) => (
                    <SwipeListItem
                      key={item.id}
                      item={item}
                      onSelect={() => onSelectName(item.name)}
                      onRemove={() => handleRemove(item.id)}
                      onUpgrade={() => handleUpgrade(item.id)}
                      onDowngrade={() => handleDowngrade(item.id)}
                    />
                  ))
                )}
              </div>

              {/* Clear all button */}
              {totalCount > 0 && (
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

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  count: number;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function TabButton({ active, onClick, count, icon, children }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all
        ${active
          ? "bg-primary text-white"
          : "bg-secondary/50 text-muted hover:bg-secondary"
        }
      `}
    >
      {icon}
      {children}
      <span className={active ? "text-white/80" : "text-muted/60"}>({count})</span>
    </button>
  );
}

interface SwipeListItemProps {
  item: SwipedName;
  onSelect: () => void;
  onRemove: () => void;
  onUpgrade: () => void;
  onDowngrade: () => void;
}

function SwipeListItem({ item, onSelect, onRemove, onUpgrade, onDowngrade }: SwipeListItemProps) {
  const isSuperLiked = item.action === "superlike";

  return (
    <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/30 group">
      {/* Star/Heart indicator */}
      <div className={`flex-shrink-0 ${isSuperLiked ? "text-amber-500" : "text-success"}`}>
        {isSuperLiked ? (
          <Star className="w-4 h-4 fill-current" />
        ) : (
          <Heart className="w-4 h-4" />
        )}
      </div>

      {/* Name - clickable to select */}
      <button
        onClick={onSelect}
        className="flex-1 text-left font-medium text-sm hover:text-primary transition-colors"
      >
        {item.name}
        {item.meanings && item.meanings.length > 0 && (
          <span className="text-muted font-normal ml-2 text-xs">
            {item.meanings[0]}
          </span>
        )}
      </button>

      {/* Actions */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Upgrade/Downgrade button */}
        {isSuperLiked ? (
          <button
            onClick={onDowngrade}
            className="p-1.5 rounded-full hover:bg-secondary text-muted"
            title="Downgrade to liked"
          >
            <Heart className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={onUpgrade}
            className="p-1.5 rounded-full hover:bg-amber-100 text-amber-500"
            title="Upgrade to super like"
          >
            <Star className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Remove button */}
        <button
          onClick={onRemove}
          className="p-1.5 rounded-full hover:bg-error/10 text-error"
          title="Remove"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
