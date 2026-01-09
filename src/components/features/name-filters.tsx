"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface NameFilters {
  origins: string[];
  lengthRange: "any" | "short" | "medium" | "long";
  startingLetter: string | null;
  popularity: "any" | "top100" | "top500" | "rare";
}

export const defaultFilters: NameFilters = {
  origins: [],
  lengthRange: "any",
  startingLetter: null,
  popularity: "any",
};

const ORIGINS = [
  "African",
  "Arabic",
  "Celtic",
  "English",
  "French",
  "Germanic",
  "Greek",
  "Hebrew",
  "Indian",
  "Italian",
  "Japanese",
  "Latin",
  "Scandinavian",
  "Spanish",
  "Welsh",
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface NameFiltersProps {
  filters: NameFilters;
  onChange: (filters: NameFilters) => void;
  activeFilterCount: number;
}

export function NameFiltersPanel({ filters, onChange, activeFilterCount }: NameFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOriginToggle = (origin: string) => {
    const newOrigins = filters.origins.includes(origin)
      ? filters.origins.filter((o) => o !== origin)
      : [...filters.origins, origin];
    onChange({ ...filters, origins: newOrigins });
  };

  const handleReset = () => {
    onChange(defaultFilters);
  };

  const hasActiveFilters = activeFilterCount > 0;

  return (
    <div className="relative">
      {/* Filter toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
          ${hasActiveFilters
            ? "bg-primary text-white"
            : "bg-secondary/50 text-muted hover:bg-secondary"
          }
        `}
        title="Filter names"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
        {hasActiveFilters && (
          <span className="bg-white/20 text-white px-1.5 py-0.5 rounded-full text-xs">
            {activeFilterCount}
          </span>
        )}
      </button>

      {/* Filter panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-50 p-4 min-w-[300px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-medium text-sm">Filter Names</span>
              <div className="flex items-center gap-2">
                {hasActiveFilters && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1 text-xs text-muted hover:text-foreground"
                    title="Reset all filters"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-secondary rounded"
                >
                  <X className="w-4 h-4 text-muted" />
                </button>
              </div>
            </div>

            {/* Origin filter */}
            <div className="mb-4">
              <label className="text-xs font-medium text-muted mb-2 block">Origin</label>
              <div className="flex flex-wrap gap-1.5">
                {ORIGINS.map((origin) => {
                  const isSelected = filters.origins.includes(origin);
                  return (
                    <button
                      key={origin}
                      onClick={() => handleOriginToggle(origin)}
                      className={`px-2 py-1 rounded-md text-xs transition-colors
                        ${isSelected
                          ? "bg-primary text-white"
                          : "bg-secondary/50 text-muted hover:bg-secondary"
                        }
                      `}
                    >
                      {origin}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Length filter */}
            <div className="mb-4">
              <label className="text-xs font-medium text-muted mb-2 block">Name Length</label>
              <div className="flex gap-2">
                {[
                  { value: "any", label: "Any" },
                  { value: "short", label: "Short (1-4)" },
                  { value: "medium", label: "Medium (5-6)" },
                  { value: "long", label: "Long (7+)" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onChange({ ...filters, lengthRange: option.value as NameFilters["lengthRange"] })}
                    className={`px-2 py-1 rounded-md text-xs transition-colors
                      ${filters.lengthRange === option.value
                        ? "bg-primary text-white"
                        : "bg-secondary/50 text-muted hover:bg-secondary"
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Starting letter */}
            <div className="mb-4">
              <label className="text-xs font-medium text-muted mb-2 block">Starting Letter</label>
              <div className="flex flex-wrap gap-1">
                <button
                  onClick={() => onChange({ ...filters, startingLetter: null })}
                  className={`w-7 h-7 rounded text-xs font-medium transition-colors
                    ${filters.startingLetter === null
                      ? "bg-primary text-white"
                      : "bg-secondary/50 text-muted hover:bg-secondary"
                    }
                  `}
                >
                  All
                </button>
                {ALPHABET.map((letter) => (
                  <button
                    key={letter}
                    onClick={() => onChange({ ...filters, startingLetter: letter })}
                    className={`w-7 h-7 rounded text-xs font-medium transition-colors
                      ${filters.startingLetter === letter
                        ? "bg-primary text-white"
                        : "bg-secondary/50 text-muted hover:bg-secondary"
                      }
                    `}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>

            {/* Popularity filter */}
            <div>
              <label className="text-xs font-medium text-muted mb-2 block">Popularity</label>
              <div className="flex gap-2">
                {[
                  { value: "any", label: "Any" },
                  { value: "top100", label: "Top 100" },
                  { value: "top500", label: "Top 500" },
                  { value: "rare", label: "Rare (500+)" },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => onChange({ ...filters, popularity: option.value as NameFilters["popularity"] })}
                    className={`px-2 py-1 rounded-md text-xs transition-colors
                      ${filters.popularity === option.value
                        ? "bg-primary text-white"
                        : "bg-secondary/50 text-muted hover:bg-secondary"
                      }
                    `}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Apply button */}
            <div className="mt-4 pt-3 border-t border-border">
              <Button
                onClick={() => setIsOpen(false)}
                size="sm"
                className="w-full"
              >
                Done
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Helper to count active filters
export function countActiveFilters(filters: NameFilters): number {
  let count = 0;
  if (filters.origins.length > 0) count++;
  if (filters.lengthRange !== "any") count++;
  if (filters.startingLetter !== null) count++;
  if (filters.popularity !== "any") count++;
  return count;
}

// Helper to filter names based on filters
export function applyNameFilters<T extends { name: string; origins: string[]; currentRank: number }>(
  names: T[],
  filters: NameFilters
): T[] {
  return names.filter((name) => {
    // Origin filter
    if (filters.origins.length > 0) {
      const hasMatchingOrigin = name.origins.some((o) => filters.origins.includes(o));
      if (!hasMatchingOrigin) return false;
    }

    // Length filter
    const len = name.name.length;
    if (filters.lengthRange === "short" && len > 4) return false;
    if (filters.lengthRange === "medium" && (len < 5 || len > 6)) return false;
    if (filters.lengthRange === "long" && len < 7) return false;

    // Starting letter filter
    if (filters.startingLetter && !name.name.toUpperCase().startsWith(filters.startingLetter)) {
      return false;
    }

    // Popularity filter
    const rank = name.currentRank;
    if (filters.popularity === "top100" && (rank <= 0 || rank > 100)) return false;
    if (filters.popularity === "top500" && (rank <= 0 || rank > 500)) return false;
    if (filters.popularity === "rare" && rank > 0 && rank <= 500) return false;

    return true;
  });
}
