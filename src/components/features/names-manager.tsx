"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Trash2, RotateCcw, ArrowLeftRight } from "lucide-react";
import {
  getLikedNames,
  getDislikedNames,
  updateSwipeAction,
  clearByAction,
  type SwipedName,
} from "@/lib/swipe-preferences";

interface NamesManagerProps {
  isOpen: boolean;
  onClose: () => void;
  onListChange?: () => void;
}

type Tab = "liked" | "skipped";

/**
 * NamesManager - Slide-up panel to view and manage liked/skipped names
 */
export function NamesManager({ isOpen, onClose, onListChange }: NamesManagerProps) {
  const [activeTab, setActiveTab] = useState<Tab>("liked");
  const [likedNames, setLikedNames] = useState<SwipedName[]>([]);
  const [skippedNames, setSkippedNames] = useState<SwipedName[]>([]);

  // Load names when panel opens
  useEffect(() => {
    if (isOpen) {
      setLikedNames(getLikedNames());
      setSkippedNames(getDislikedNames());
    }
  }, [isOpen]);

  // Refresh lists
  const refreshLists = useCallback(() => {
    setLikedNames(getLikedNames());
    setSkippedNames(getDislikedNames());
    onListChange?.();
  }, [onListChange]);

  // Move name to opposite list
  const handleMove = (name: SwipedName) => {
    const newAction = name.action === "dislike" ? "like" : "dislike";
    updateSwipeAction(name.id, newAction);
    refreshLists();
  };

  // Clear all skipped
  const handleClearSkipped = () => {
    clearByAction("dislike");
    refreshLists();
  };

  const currentList = activeTab === "liked" ? likedNames : skippedNames;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 max-h-[85vh] flex flex-col"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-border rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 pb-3 border-b border-border">
              <h2 className="text-lg font-heading font-semibold">Your Names</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
              >
                <X className="w-5 h-5 text-muted" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-border">
              <button
                onClick={() => setActiveTab("liked")}
                className={`flex-1 py-3 text-sm font-heading font-medium transition-colors relative ${
                  activeTab === "liked"
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Heart className={`w-4 h-4 ${activeTab === "liked" ? "text-green-500" : ""}`} />
                  Liked ({likedNames.length})
                </span>
                {activeTab === "liked" && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("skipped")}
                className={`flex-1 py-3 text-sm font-heading font-medium transition-colors relative ${
                  activeTab === "skipped"
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <X className={`w-4 h-4 ${activeTab === "skipped" ? "text-red-400" : ""}`} />
                  Skipped ({skippedNames.length})
                </span>
                {activeTab === "skipped" && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto">
              {currentList.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-muted">
                  {activeTab === "liked" ? (
                    <>
                      <Heart className="w-12 h-12 mb-3 opacity-30" />
                      <p className="font-heading">No liked names yet</p>
                      <p className="text-sm mt-1">Swipe right on names you love</p>
                    </>
                  ) : (
                    <>
                      <X className="w-12 h-12 mb-3 opacity-30" />
                      <p className="font-heading">No skipped names</p>
                      <p className="text-sm mt-1">Names you pass on appear here</p>
                    </>
                  )}
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {currentList.map((name) => (
                    <div
                      key={name.id}
                      className="flex items-center justify-between px-4 py-3 hover:bg-secondary/30 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-heading font-medium text-foreground">
                          {name.name}
                        </p>
                        <p className="text-sm text-muted truncate">
                          {name.origins?.slice(0, 2).join(", ")}
                          {name.meanings?.[0] && (
                            <span className="italic"> · {name.meanings[0]}</span>
                          )}
                        </p>
                      </div>
                      <button
                        onClick={() => handleMove(name)}
                        className={`p-2 rounded-full transition-colors ${
                          activeTab === "liked"
                            ? "hover:bg-red-50 text-muted hover:text-red-500"
                            : "hover:bg-green-50 text-muted hover:text-green-500"
                        }`}
                        title={activeTab === "liked" ? "Move to skipped" : "Move to liked"}
                      >
                        <ArrowLeftRight className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer actions */}
            {activeTab === "skipped" && skippedNames.length > 0 && (
              <div className="border-t border-border p-4">
                <button
                  onClick={handleClearSkipped}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-heading text-muted hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Clear skipped (see them again)
                </button>
              </div>
            )}

            {/* Safe area padding for mobile */}
            <div className="h-safe-area-inset-bottom" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
