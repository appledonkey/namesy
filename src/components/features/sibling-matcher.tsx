"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, X, ChevronDown, ChevronUp } from "lucide-react";

interface SiblingMatcherProps {
  siblingName: string;
  onSiblingChange: (name: string) => void;
}

const STORAGE_KEY = "namesy-sibling";

/**
 * SiblingMatcher - Collapsible input for existing child's name
 */
export function SiblingMatcher({ siblingName, onSiblingChange }: SiblingMatcherProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [inputValue, setInputValue] = useState(siblingName);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setInputValue(saved);
      onSiblingChange(saved);
      setIsExpanded(true);
    }
  }, []);

  const handleSave = () => {
    const trimmed = inputValue.trim();
    onSiblingChange(trimmed);
    if (trimmed) {
      localStorage.setItem(STORAGE_KEY, trimmed);
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleClear = () => {
    setInputValue("");
    onSiblingChange("");
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <div className="w-full">
      {/* Toggle button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-colors ${
          siblingName
            ? "bg-purple-50 text-purple-700 border border-purple-200"
            : "bg-secondary hover:bg-secondary/80 text-muted"
        }`}
      >
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span className="text-sm font-heading">
            {siblingName ? `Matching with ${siblingName}` : "Have another child?"}
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {/* Expanded input */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pt-3 px-1">
              <label className="text-xs text-muted font-heading block mb-1.5">
                Enter your other child&apos;s name to find complementary names
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onBlur={handleSave}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSave();
                      (e.target as HTMLInputElement).blur();
                    }
                  }}
                  placeholder="e.g., Oliver"
                  autoCapitalize="words"
                  className="flex-1 px-3 py-2 text-sm bg-card border border-border rounded-lg focus:outline-none focus:border-primary font-heading"
                />
                {siblingName && (
                  <button
                    onClick={handleClear}
                    className="p-2 rounded-lg hover:bg-secondary transition-colors"
                    aria-label="Clear sibling"
                  >
                    <X className="w-4 h-4 text-muted" />
                  </button>
                )}
              </div>
              {siblingName && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-purple-600 font-heading mt-2"
                >
                  Showing names that pair well with {siblingName}
                </motion.p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
