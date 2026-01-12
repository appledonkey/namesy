"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import { getAllNames, type NameData } from "@/lib/names-data";
import { getSwipedNames } from "@/lib/swipe-preferences";
import { applyNameFilters, type NameFilters, defaultFilters } from "@/components/features/filters-sheet";

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

interface UseNamePoolOptions {
  filters?: NameFilters;
  batchSize?: number;
}

interface UseNamePoolReturn {
  /** Current names to show */
  names: NameData[];
  /** Current index in the pool */
  currentIndex: number;
  /** Total names available (after filtering) */
  totalAvailable: number;
  /** Number of seen names */
  seenCount: number;
  /** Advance to next name */
  advance: () => void;
  /** Reset and reshuffle */
  reset: () => void;
  /** Whether all names have been seen */
  isExhausted: boolean;
  /** Reshuffle keeping same filters */
  reshuffle: () => void;
}

/**
 * useNamePool - Manages an infinite pool of names for swiping
 *
 * Features:
 * - Shuffles all names randomly
 * - Filters based on gender, origin, length, etc.
 * - Excludes already-swiped names (optional)
 * - Tracks seen names in session
 * - Auto-reshuffles when exhausted (with previously skipped names)
 */
export function useNamePool(options: UseNamePoolOptions = {}): UseNamePoolReturn {
  const { filters = defaultFilters, batchSize = 500 } = options;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [seenIds, setSeenIds] = useState<Set<string>>(new Set());
  const [pool, setPool] = useState<NameData[]>([]);
  const [initialized, setInitialized] = useState(false);

  // Get all names, filter, and shuffle
  const buildPool = useCallback(() => {
    // Get all names
    let allNames = getAllNames();

    // Filter by gender if specified
    if (filters.gender !== "all") {
      allNames = allNames.filter((n) => n.gender === filters.gender);
    }

    // Apply other filters
    allNames = applyNameFilters(allNames, filters);

    // Get already swiped names to exclude them initially
    const swipedNames = getSwipedNames();
    const swipedIds = new Set(swipedNames.map((n) => n.name.toLowerCase()));

    // Separate into unseen and previously swiped
    const unseen = allNames.filter((n) => !swipedIds.has(n.name.toLowerCase()));
    const previouslySwiped = allNames.filter((n) => swipedIds.has(n.name.toLowerCase()));

    // Shuffle both and combine (unseen first)
    const shuffledUnseen = shuffleArray(unseen);
    const shuffledSwiped = shuffleArray(previouslySwiped);

    return [...shuffledUnseen, ...shuffledSwiped].slice(0, batchSize);
  }, [filters, batchSize]);

  // Initialize pool
  useEffect(() => {
    const newPool = buildPool();
    setPool(newPool);
    setCurrentIndex(0);
    setSeenIds(new Set());
    setInitialized(true);
  }, [buildPool]);

  // Advance to next name
  const advance = useCallback(() => {
    setCurrentIndex((prev) => {
      const current = pool[prev];
      if (current) {
        setSeenIds((s) => new Set([...s, current.id]));
      }
      return prev + 1;
    });
  }, [pool]);

  // Reset everything
  const reset = useCallback(() => {
    const newPool = buildPool();
    setPool(newPool);
    setCurrentIndex(0);
    setSeenIds(new Set());
  }, [buildPool]);

  // Reshuffle (keep filters, new random order)
  const reshuffle = useCallback(() => {
    const newPool = buildPool();
    setPool(newPool);
    setCurrentIndex(0);
    // Keep seenIds to track total progress
  }, [buildPool]);

  const isExhausted = initialized && currentIndex >= pool.length;

  return {
    names: pool,
    currentIndex,
    totalAvailable: pool.length,
    seenCount: seenIds.size,
    advance,
    reset,
    isExhausted,
    reshuffle,
  };
}
