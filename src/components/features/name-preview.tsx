"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Edit2 } from "lucide-react";
import { getLikedNames, type SwipedName } from "@/lib/swipe-preferences";

interface NamePreviewProps {
  firstName: string;
  middleName: string;
  lastName: string;
  onFirstNameSelect: (name: string) => void;
  onMiddleNameChange: (name: string) => void;
  onChangeLastName: () => void;
}

/**
 * NamePreview - Compact name combination display
 * Shows: [First ▾] [+ Middle] LastName
 */
export function NamePreview({
  firstName,
  middleName,
  lastName,
  onFirstNameSelect,
  onMiddleNameChange,
  onChangeLastName,
}: NamePreviewProps) {
  const [showFirstDropdown, setShowFirstDropdown] = useState(false);
  const [showMiddleInput, setShowMiddleInput] = useState(false);
  const [middleInputValue, setMiddleInputValue] = useState(middleName);

  const favorites = getLikedNames();

  const handleFirstNameSelect = (name: string) => {
    onFirstNameSelect(name);
    setShowFirstDropdown(false);
  };

  const handleMiddleSave = () => {
    onMiddleNameChange(middleInputValue);
    setShowMiddleInput(false);
  };

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl px-4 py-3">
      <div className="flex items-center justify-center gap-1 flex-wrap">
        <span className="text-xs text-muted mr-1">Your Name:</span>

        {/* First Name (dropdown from favorites) */}
        <div className="relative">
          <button
            onClick={() => setShowFirstDropdown(!showFirstDropdown)}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
              firstName
                ? "bg-primary/10 text-primary font-medium"
                : "bg-secondary text-muted"
            }`}
          >
            <span className="text-sm">{firstName || "First"}</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${showFirstDropdown ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {showFirstDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                className="absolute top-full left-0 mt-1 w-48 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden"
              >
                <div className="max-h-48 overflow-y-auto py-1">
                  {favorites.length === 0 ? (
                    <div className="px-3 py-2 text-xs text-muted text-center">
                      Like names to see them here
                    </div>
                  ) : (
                    favorites.map((item: SwipedName) => (
                      <button
                        key={item.id}
                        onClick={() => handleFirstNameSelect(item.name)}
                        className={`w-full px-3 py-2 text-left text-sm hover:bg-secondary transition-colors ${
                          item.name === firstName ? "bg-primary/10 text-primary" : ""
                        }`}
                      >
                        {item.name}
                        {item.action === "superlike" && (
                          <span className="ml-1 text-amber-500">★</span>
                        )}
                      </button>
                    ))
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Middle Name */}
        {showMiddleInput ? (
          <div className="flex items-center gap-1">
            <input
              type="text"
              value={middleInputValue}
              onChange={(e) => setMiddleInputValue(e.target.value)}
              placeholder="Middle"
              autoFocus
              className="w-24 px-2 py-1.5 text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleMiddleSave();
                if (e.key === "Escape") setShowMiddleInput(false);
              }}
              onBlur={handleMiddleSave}
            />
          </div>
        ) : middleName ? (
          <button
            onClick={() => {
              setMiddleInputValue(middleName);
              setShowMiddleInput(true);
            }}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-secondary/50 text-foreground/80 hover:bg-secondary transition-colors"
          >
            <span className="text-sm">{middleName}</span>
            <Edit2 className="w-3 h-3 text-muted" />
          </button>
        ) : (
          <button
            onClick={() => setShowMiddleInput(true)}
            className="inline-flex items-center gap-1 px-2 py-1.5 rounded-lg text-muted hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Plus className="w-3 h-3" />
            <span className="text-sm">Middle</span>
          </button>
        )}

        {/* Last Name */}
        <button
          onClick={onChangeLastName}
          className="px-3 py-1.5 rounded-lg text-sm font-medium text-foreground hover:bg-secondary transition-colors"
        >
          {lastName}
        </button>
      </div>

      {/* Click outside to close dropdown */}
      {showFirstDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowFirstDropdown(false)}
        />
      )}
    </div>
  );
}
