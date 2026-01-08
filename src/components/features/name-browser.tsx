"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, X, AlertCircle, RefreshCw } from "lucide-react";
import { Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { SkeletonNameList } from "@/components/ui/skeleton";
import { NameCardStack } from "./name-card-stack";
import { NameDetailSheet } from "./name-detail-sheet";
import { SwipeListPanel } from "./swipe-list-panel";
import { haptics } from "@/lib/haptics";
import { getPopularNames, getNamesByLetter } from "@/lib/names-data";

type Gender = "F" | "M" | "all";

interface NameData {
  id: string;
  name: string;
  origins: string[];
  meanings: string[];
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const INITIAL_LIMIT = 12;

// Simple in-memory cache for API responses
const apiCache = new Map<string, { data: NameData[]; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

function getCachedData(key: string): NameData[] | null {
  const cached = apiCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  return null;
}

function setCachedData(key: string, data: NameData[]): void {
  apiCache.set(key, { data, timestamp: Date.now() });
}

interface NameBrowserProps {
  onSelectName: (name: string) => void;
  selectedGender: Gender;
}

/**
 * NameBrowser - Visual alphabetical browser for discovering names
 * Mobile: Swipe card mode with letter filter
 * Desktop: List/grid view
 */
export function NameBrowser({
  onSelectName,
  selectedGender,
}: NameBrowserProps) {
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [popularNames, setPopularNames] = useState<NameData[]>([]);
  const [letterNames, setLetterNames] = useState<NameData[]>([]);
  const [totalForLetter, setTotalForLetter] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mobile card stack state
  const [cardNames, setCardNames] = useState<NameData[]>([]);
  const [detailSheet, setDetailSheet] = useState<{ isOpen: boolean; name: NameData | null }>({
    isOpen: false,
    name: null,
  });

  // Retry function ref
  const retryRef = useRef<(() => void) | null>(null);

  // Load popular names when gender changes (no API call - direct data access)
  useEffect(() => {
    const loadPopularNames = () => {
      const cacheKey = `popular-${selectedGender}`;
      const cached = getCachedData(cacheKey);

      if (cached) {
        setPopularNames(cached);
        if (!selectedLetter) {
          setCardNames(cached);
        }
        return;
      }

      try {
        setError(null);
        // Direct data access - works offline
        const names = getPopularNames(50, selectedGender === "all" ? undefined : selectedGender).map(n => ({
          id: n.id,
          name: n.name,
          origins: n.origins,
          meanings: n.meanings,
        }));

        setCachedData(cacheKey, names);
        setPopularNames(names);
        // Initialize card names with popular names
        if (!selectedLetter) {
          setCardNames(names);
        }
      } catch (err) {
        console.error("Failed to load popular names:", err);
        setError("Failed to load names. Tap to retry.");
        setPopularNames([]);
        retryRef.current = loadPopularNames;
      }
    };

    loadPopularNames();
  }, [selectedGender, selectedLetter]);

  // Load names for selected letter (no API call - direct data access)
  const loadLetterNames = useCallback((letter: string, all: boolean) => {
    const cacheKey = `letter-${letter}-${selectedGender}-${all ? 'all' : 'initial'}`;
    const cached = getCachedData(cacheKey);

    if (cached) {
      setLetterNames(cached);
      setTotalForLetter(cached.length);
      setCardNames(cached);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Direct data access - works offline
      const limit = all ? 100 : INITIAL_LIMIT;
      const allLetterNames = getNamesByLetter(letter, {
        gender: selectedGender === "all" ? "all" : selectedGender,
      });

      const names = allLetterNames.slice(0, limit).map(n => ({
        id: n.id,
        name: n.name,
        origins: n.origins,
        meanings: n.meanings,
      }));

      setCachedData(cacheKey, names);
      setLetterNames(names);
      setTotalForLetter(allLetterNames.length);
      // Update card names for mobile swipe view
      setCardNames(names);
    } catch (err) {
      console.error("Failed to load names by letter:", err);
      setError("Failed to load names. Tap to retry.");
      setLetterNames([]);
      setTotalForLetter(0);
      setCardNames([]);
      retryRef.current = () => loadLetterNames(letter, all);
    } finally {
      setLoading(false);
    }
  }, [selectedGender]);

  // Load when letter or showAll changes
  useEffect(() => {
    if (selectedLetter) {
      loadLetterNames(selectedLetter, showAll);
    } else {
      setLetterNames([]);
      setTotalForLetter(0);
      // Reset to popular names when no letter selected
      setCardNames(popularNames);
    }
  }, [selectedLetter, showAll, loadLetterNames, popularNames]);

  const handleLetterSelect = (letter: string) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
      setShowAll(false);
    }
  };

  // Card stack handlers
  const handleCardDetails = (name: NameData) => {
    setDetailSheet({ isOpen: true, name });
  };

  // Handle retry
  const handleRetry = () => {
    setError(null);
    if (retryRef.current) {
      retryRef.current();
    }
  };

  return (
    <div className="w-full space-y-4">
      {/* Error UI */}
      {error && (
        <div className="bg-error/10 border border-error/20 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-error">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <Text size="sm" className="text-error">{error}</Text>
          </div>
          <button
            onClick={handleRetry}
            className="flex items-center gap-1 text-sm text-primary font-medium hover:underline"
          >
            <RefreshCw className="w-4 h-4" />
            Retry
          </button>
        </div>
      )}

      {/* Mobile: Card Stack View (always visible) */}
      <div className="sm:hidden space-y-4">
        {/* Card Stack */}
        <NameCardStack
          names={cardNames}
          onSwipeAction={() => {
            // Swipe actions are recorded in the component itself
            // Could add callback here if parent needs to know
          }}
          onDetails={handleCardDetails}
          onSelect={(name) => {
            haptics.select();
            onSelectName(name);
          }}
        />

        {/* Mobile Alphabet Selector */}
        <div className="bg-card rounded-xl border border-border p-3">
          <div className="flex items-center justify-between mb-2">
            <Text size="sm" muted className="text-xs">
              {selectedLetter ? `Showing "${selectedLetter}" names` : "Filter by letter"}
            </Text>
            {selectedLetter && (
              <button
                onClick={() => setSelectedLetter(null)}
                className="text-xs text-primary font-medium"
              >
                Show all
              </button>
            )}
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {ALPHABET.map((letter) => {
              const isSelected = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => handleLetterSelect(letter)}
                  className={`
                    flex-shrink-0 w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200
                    tap-highlight touch-feedback
                    ${isSelected
                      ? "bg-primary text-white shadow-sm"
                      : "bg-secondary/50 text-foreground active:bg-secondary"
                    }
                  `}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Liked Names Panel */}
        <SwipeListPanel onSelectName={onSelectName} />
      </div>

      {/* Detail Sheet for card view */}
      <NameDetailSheet
        isOpen={detailSheet.isOpen}
        onClose={() => setDetailSheet({ isOpen: false, name: null })}
        name={detailSheet.name?.name || ""}
        meaning={detailSheet.name?.meanings.join("; ")}
        origin={detailSheet.name?.origins.join(", ")}
        onSelect={() => {
          if (detailSheet.name) {
            onSelectName(detailSheet.name.name);
          }
        }}
      />

      {/* Desktop: List View */}
      <div className="hidden sm:block space-y-4">
        {/* Popular Names */}
        <div>
          <Text size="sm" muted className="text-sm text-center mb-3">
            Popular names
          </Text>
          <div className="flex flex-wrap justify-center gap-2">
            {popularNames.length === 0 ? (
              <SkeletonNameList count={8} />
            ) : (
              popularNames.slice(0, 8).map((name) => (
                <button
                  key={name.id}
                  onClick={() => onSelectName(name.name)}
                  className="px-4 py-2.5 rounded-full bg-card text-foreground text-sm border border-border
                    hover:bg-secondary hover:border-primary transition-all duration-200"
                >
                  {name.name}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Desktop Alphabet Selector */}
        <div>
          <Text size="sm" muted className="mb-2 text-sm text-center">
            Browse by letter
          </Text>
          <div className="grid grid-cols-7 md:grid-cols-9 lg:grid-cols-13 gap-2 justify-items-center max-w-full">
            {ALPHABET.map((letter) => {
              const isSelected = selectedLetter === letter;
              return (
                <button
                  key={letter}
                  onClick={() => handleLetterSelect(letter)}
                  className={`
                    w-10 h-10 md:w-9 md:h-9 lg:w-8 lg:h-8
                    rounded-lg text-sm font-medium transition-all duration-200
                    ${isSelected
                      ? "bg-primary text-white scale-105 shadow-[var(--shadow-sm)]"
                      : "bg-card text-foreground border border-border hover:border-primary hover:bg-secondary/30"
                    }
                  `}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop: Name Grid for Selected Letter */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {selectedLetter && (letterNames.length > 0 || loading) && (
              <motion.div
                key={selectedLetter}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="bg-card rounded-xl p-4 border border-border shadow-[var(--shadow-md)]"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-heading text-lg font-semibold">
                      {selectedLetter}
                    </span>
                    <Text size="sm" muted>
                      {loading ? "Loading..." : `${totalForLetter} names`}
                    </Text>
                  </div>
                  <button
                    onClick={() => setSelectedLetter(null)}
                    className="p-2 text-muted hover:text-foreground hover:bg-secondary/50 rounded-full transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Names Grid */}
                <div className="max-h-48 overflow-y-auto">
                  {loading ? (
                    <SkeletonNameList count={8} />
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {letterNames.map((name) => (
                        <button
                          key={name.id}
                          onClick={() => onSelectName(name.name)}
                          className="px-4 py-2.5 rounded-full bg-secondary/30 text-sm hover:bg-secondary transition-colors"
                        >
                          {name.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Show More */}
                {!loading && totalForLetter > INITIAL_LIMIT && (
                  <div className="mt-3 text-center border-t border-border pt-3">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowAll(!showAll)}
                      className="gap-1"
                    >
                      {showAll ? (
                        <>
                          <ChevronUp className="w-4 h-4" />
                          Show less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4" />
                          Show all {totalForLetter}
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
