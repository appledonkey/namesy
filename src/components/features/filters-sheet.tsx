"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X, RotateCcw } from "lucide-react";
import { haptics } from "@/lib/haptics";
import type { NameData } from "@/lib/names-data";

type GenderOption = "all" | "M" | "F";

export interface NameFilters {
  gender: GenderOption;
  origins: string[];
  lengthRange: "any" | "short" | "medium" | "long";
  startingLetter: string | null;
  popularity: "any" | "top100" | "top500" | "rare";
}

export const defaultFilters: NameFilters = {
  gender: "all",
  origins: [],
  lengthRange: "any",
  startingLetter: null,
  popularity: "any",
};

// Common origins
const ORIGIN_OPTIONS = [
  "English", "Hebrew", "Greek", "Latin", "Germanic",
  "Celtic", "Arabic", "Spanish", "French", "Italian",
  "Scandinavian", "Slavic", "African", "Asian", "Native American"
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

interface FiltersSheetProps {
  filters: NameFilters;
  onChange: (filters: NameFilters) => void;
}

/**
 * Count active filters
 */
export function countActiveFilters(filters: NameFilters): number {
  let count = 0;
  if (filters.gender !== "all") count++;
  if (filters.origins.length > 0) count++;
  if (filters.lengthRange !== "any") count++;
  if (filters.startingLetter) count++;
  if (filters.popularity !== "any") count++;
  return count;
}

/**
 * Apply filters to name list
 */
export function applyNameFilters<T extends { name: string; origins: string[]; currentRank: number }>(
  names: T[],
  filters: NameFilters
): T[] {
  return names.filter((name) => {
    // Origin filter
    if (filters.origins.length > 0) {
      const hasMatchingOrigin = name.origins.some((origin) =>
        filters.origins.some((f) => origin.toLowerCase().includes(f.toLowerCase()))
      );
      if (!hasMatchingOrigin) return false;
    }

    // Length filter
    if (filters.lengthRange !== "any") {
      const len = name.name.length;
      if (filters.lengthRange === "short" && len > 4) return false;
      if (filters.lengthRange === "medium" && (len < 5 || len > 7)) return false;
      if (filters.lengthRange === "long" && len < 8) return false;
    }

    // Starting letter
    if (filters.startingLetter) {
      if (!name.name.toUpperCase().startsWith(filters.startingLetter)) return false;
    }

    // Popularity
    if (filters.popularity !== "any") {
      const rank = name.currentRank;
      if (filters.popularity === "top100" && (rank <= 0 || rank > 100)) return false;
      if (filters.popularity === "top500" && (rank <= 0 || rank > 500)) return false;
      if (filters.popularity === "rare" && rank > 0 && rank <= 500) return false;
    }

    return true;
  });
}

export function FiltersSheet({ filters, onChange }: FiltersSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState<NameFilters>(filters);

  const activeCount = countActiveFilters(filters);

  const handleOpen = () => {
    haptics.tap();
    setLocalFilters(filters);
    setIsOpen(true);
  };

  const handleApply = () => {
    haptics.save();
    onChange(localFilters);
    setIsOpen(false);
  };

  const handleReset = () => {
    haptics.tap();
    setLocalFilters(defaultFilters);
  };

  const updateFilter = <K extends keyof NameFilters>(key: K, value: NameFilters[K]) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleOrigin = (origin: string) => {
    setLocalFilters((prev) => ({
      ...prev,
      origins: prev.origins.includes(origin)
        ? prev.origins.filter((o) => o !== origin)
        : [...prev.origins, origin],
    }));
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 px-4 py-2.5 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-shadow"
      >
        <SlidersHorizontal className="w-4 h-4" />
        <span className="text-sm font-medium">Filters</span>
        {activeCount > 0 && (
          <span className="flex items-center justify-center w-5 h-5 bg-primary text-white text-xs rounded-full">
            {activeCount}
          </span>
        )}
      </button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40"
            />

            {/* Sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-card rounded-t-3xl shadow-2xl z-50 max-h-[85vh] overflow-hidden"
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 bg-border rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 pb-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  {countActiveFilters(localFilters) > 0 && (
                    <button
                      onClick={handleReset}
                      className="text-xs text-muted hover:text-foreground flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  )}
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="overflow-y-auto max-h-[65vh] px-5 py-4 space-y-6">
                {/* Gender */}
                <section>
                  <h3 className="text-sm font-medium mb-3">Gender</h3>
                  <div className="flex gap-2">
                    {[
                      { value: "all", label: "All" },
                      { value: "M", label: "Boys" },
                      { value: "F", label: "Girls" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => updateFilter("gender", opt.value as GenderOption)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                          localFilters.gender === opt.value
                            ? "bg-primary text-white"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Origins */}
                <section>
                  <h3 className="text-sm font-medium mb-3">Origins</h3>
                  <div className="flex flex-wrap gap-2">
                    {ORIGIN_OPTIONS.map((origin) => (
                      <button
                        key={origin}
                        onClick={() => toggleOrigin(origin)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          localFilters.origins.includes(origin)
                            ? "bg-primary text-white"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {origin}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Length */}
                <section>
                  <h3 className="text-sm font-medium mb-3">Name Length</h3>
                  <div className="flex gap-2">
                    {[
                      { value: "any", label: "Any" },
                      { value: "short", label: "Short (1-4)" },
                      { value: "medium", label: "Medium (5-7)" },
                      { value: "long", label: "Long (8+)" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => updateFilter("lengthRange", opt.value as NameFilters["lengthRange"])}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          localFilters.lengthRange === opt.value
                            ? "bg-primary text-white"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Starting Letter */}
                <section>
                  <h3 className="text-sm font-medium mb-3">Starts With</h3>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      onClick={() => updateFilter("startingLetter", null)}
                      className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                        localFilters.startingLetter === null
                          ? "bg-primary text-white"
                          : "bg-secondary text-foreground hover:bg-secondary/80"
                      }`}
                    >
                      Any
                    </button>
                    {ALPHABET.map((letter) => (
                      <button
                        key={letter}
                        onClick={() => updateFilter("startingLetter", letter)}
                        className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                          localFilters.startingLetter === letter
                            ? "bg-primary text-white"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {letter}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Popularity */}
                <section>
                  <h3 className="text-sm font-medium mb-3">Popularity</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: "any", label: "Any" },
                      { value: "top100", label: "Top 100" },
                      { value: "top500", label: "Top 500" },
                      { value: "rare", label: "Rare/Unique" },
                    ].map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => updateFilter("popularity", opt.value as NameFilters["popularity"])}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          localFilters.popularity === opt.value
                            ? "bg-primary text-white"
                            : "bg-secondary text-foreground hover:bg-secondary/80"
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              {/* Apply button */}
              <div className="px-5 py-4 border-t border-border">
                <button
                  onClick={handleApply}
                  className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
