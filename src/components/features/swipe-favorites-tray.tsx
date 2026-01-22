"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, X } from "lucide-react";
import type { SwipedName } from "@/lib/swipe-preferences";
import { haptics } from "@/lib/haptics";

interface SwipeFavoritesTrayProps {
  likedNames: SwipedName[];
  isExpanded: boolean;
  onToggle: () => void;
  onNameClick?: (name: SwipedName) => void;
  onRemove?: (id: string) => void;
}

export function SwipeFavoritesTray({
  likedNames,
  isExpanded,
  onToggle,
  onNameClick,
  onRemove,
}: SwipeFavoritesTrayProps) {
  const recentNames = likedNames.slice(0, 10);
  const count = likedNames.length;

  if (count === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-card border-t border-border shadow-lg overflow-hidden"
          >
            <div className="px-4 py-4 max-h-[280px] overflow-y-auto">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-heading font-medium text-foreground">
                  Saved Names ({count})
                </h3>
                <button
                  onClick={() => {
                    haptics.tap();
                    // Could link to full favorites page
                  }}
                  className="text-sm text-primary hover:text-primary-light transition-colors"
                >
                  View All
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {recentNames.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="group relative"
                  >
                    <button
                      onClick={() => {
                        haptics.tap();
                        onNameClick?.(item);
                      }}
                      className={`px-3 py-1.5 rounded-full text-sm font-heading transition-colors ${
                        item.action === "superlike"
                          ? "bg-amber-100 text-amber-700 hover:bg-amber-200"
                          : "bg-success/10 text-success hover:bg-success/20"
                      }`}
                    >
                      {item.action === "superlike" && "⭐ "}
                      {item.name}
                    </button>
                    {onRemove && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          haptics.tap();
                          onRemove(item.id);
                        }}
                        className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {count > 10 && (
                <p className="text-xs text-muted mt-3 text-center">
                  +{count - 10} more saved
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collapsed toggle bar */}
      <motion.button
        onClick={() => {
          haptics.tap();
          onToggle();
        }}
        className="w-full py-3 px-4 bg-card border-t border-border flex items-center justify-between shadow-lg"
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-2">
          {/* Recent name dots */}
          <div className="flex -space-x-1">
            {recentNames.slice(0, 3).map((item, i) => (
              <div
                key={item.id}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                  item.action === "superlike" ? "bg-amber-400" : "bg-success"
                }`}
                style={{ zIndex: 3 - i }}
              >
                {item.name.charAt(0)}
              </div>
            ))}
          </div>
          <span className="text-sm font-heading text-foreground">
            {count} name{count !== 1 ? "s" : ""} saved
          </span>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronUp className="w-5 h-5 text-muted" />
        </motion.div>
      </motion.button>
    </div>
  );
}
