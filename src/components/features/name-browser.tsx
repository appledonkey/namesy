"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Sparkles, LayoutGrid, Layers, X } from "lucide-react";
import { Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { SkeletonNameList } from "@/components/ui/skeleton";
import { NameCardStack } from "./name-card-stack";
import { NameDetailSheet } from "./name-detail-sheet";
import { haptics } from "@/lib/haptics";

type Gender = "F" | "M" | "all";
type ViewMode = "list" | "cards";

interface NameData {
  id: string;
  name: string;
  origins: string[];
  meanings: string[];
}

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const INITIAL_LIMIT = 12;

interface NameBrowserProps {
  onSelectName: (name: string) => void;
  selectedGender: Gender;
}

/**
 * NameBrowser - Visual alphabetical browser for discovering names
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

  // Mobile card view state
  const [viewMode, setViewMode] = useState<ViewMode>("list");
  const [cardNames, setCardNames] = useState<NameData[]>([]);
  const [detailSheet, setDetailSheet] = useState<{ isOpen: boolean; name: NameData | null }>({
    isOpen: false,
    name: null,
  });

  // Fetch popular names when gender changes
  useEffect(() => {
    const abortController = new AbortController();

    const fetchPopularNames = async () => {
      try {
        const params = new URLSearchParams({
          popular: "true",
          limit: "8",
        });
        if (selectedGender !== "all") {
          params.set("gender", selectedGender);
        }

        const response = await fetch(`/api/names?${params}`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setPopularNames(data.names || []);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Failed to fetch popular names:", error);
          setPopularNames([]);
        }
      }
    };

    fetchPopularNames();

    return () => abortController.abort();
  }, [selectedGender]);

  // Fetch names for selected letter
  const fetchLetterNames = useCallback(async (letter: string, all: boolean) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        letter,
        limit: all ? "100" : String(INITIAL_LIMIT),
      });
      if (selectedGender !== "all") {
        params.set("gender", selectedGender);
      }

      const response = await fetch(`/api/names?${params}`);
      const data = await response.json();
      setLetterNames(data.names || []);
      setTotalForLetter(data.total || 0);
    } catch (error) {
      console.error("Failed to fetch names by letter:", error);
      setLetterNames([]);
      setTotalForLetter(0);
    } finally {
      setLoading(false);
    }
  }, [selectedGender]);

  // Fetch when letter or showAll changes
  useEffect(() => {
    if (selectedLetter) {
      fetchLetterNames(selectedLetter, showAll);
    } else {
      setLetterNames([]);
      setTotalForLetter(0);
    }
  }, [selectedLetter, showAll, fetchLetterNames]);

  const handleLetterSelect = (letter: string) => {
    if (selectedLetter === letter) {
      setSelectedLetter(null);
    } else {
      setSelectedLetter(letter);
      setShowAll(false);
    }
  };

  // Fetch names for card stack view
  useEffect(() => {
    if (viewMode !== "cards") return;

    const abortController = new AbortController();

    const fetchCardNames = async () => {
      try {
        const params = new URLSearchParams({
          limit: "50",
          random: "true",
        });
        if (selectedGender !== "all") {
          params.set("gender", selectedGender);
        }

        const response = await fetch(`/api/names?${params}`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setCardNames(data.names || []);
      } catch (error) {
        if ((error as Error).name !== "AbortError") {
          console.error("Failed to fetch card names:", error);
          // Fallback to popular names if fetch fails
          setCardNames(popularNames);
        }
      }
    };

    fetchCardNames();

    return () => abortController.abort();
  }, [viewMode, selectedGender, popularNames]);

  // Card stack handlers
  const handleCardLike = (name: NameData) => {
    haptics.save();
    onSelectName(name.name);
  };

  const handleCardSkip = () => {
    // Just move to next card - no action needed
  };

  const handleCardDetails = (name: NameData) => {
    setDetailSheet({ isOpen: true, name });
  };

  const handleCardSelect = (name: string) => {
    haptics.select();
    onSelectName(name);
  };

  return (
    <div className="w-full space-y-4">
      {/* Mobile View Toggle */}
      <div className="sm:hidden flex items-center justify-center gap-2 mb-2">
        <button
          onClick={() => {
            haptics.tap();
            setViewMode("list");
          }}
          className={`
            flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${viewMode === "list"
              ? "bg-primary text-white"
              : "bg-secondary/50 text-muted"
            }
          `}
        >
          <LayoutGrid className="w-4 h-4" />
          Browse
        </button>
        <button
          onClick={() => {
            haptics.tap();
            setViewMode("cards");
          }}
          className={`
            flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all
            ${viewMode === "cards"
              ? "bg-primary text-white"
              : "bg-secondary/50 text-muted"
            }
          `}
        >
          <Layers className="w-4 h-4" />
          Swipe
        </button>
      </div>

      {/* Mobile Card Stack View */}
      {viewMode === "cards" && (
        <div className="sm:hidden">
          <NameCardStack
            names={cardNames}
            onLike={handleCardLike}
            onSkip={handleCardSkip}
            onDetails={handleCardDetails}
            onSelect={handleCardSelect}
          />
        </div>
      )}

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

      {/* List View (always on desktop, toggle on mobile) */}
      <div className={viewMode === "cards" ? "hidden sm:block" : ""}>
        {/* Popular Names - Always visible (no collapse = no layout shift) */}
        <div className="sm:bg-transparent sm:border-0">
          <Text size="sm" muted className="text-xs sm:text-sm text-center mb-2 sm:mb-3">
            Popular names
          </Text>

          {/* Names grid - always visible */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {popularNames.length === 0 ? (
              <SkeletonNameList count={8} />
            ) : (
              popularNames.map((name) => (
                <button
                  key={name.id}
                  onClick={() => onSelectName(name.name)}
                  className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-full bg-card text-foreground text-xs sm:text-sm border border-border
                    hover:bg-secondary hover:border-primary transition-all duration-200
                    touch-target tap-highlight touch-feedback active:bg-secondary/70"
                >
                  {name.name}
                </button>
              ))
            )}
          </div>
        </div>

      {/* Alphabet Selector */}
      <div className="bg-card rounded-xl border border-border p-3 sm:bg-transparent sm:border-0 sm:p-0">
        <Text size="sm" muted className="mb-2 text-xs sm:text-sm text-center">
          Browse by letter
        </Text>

        {/* Mobile: Horizontal scroll - full width edge to edge */}
        <div className="sm:hidden overflow-hidden">
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

        {/* Desktop: Grid layout */}
        <div className="hidden sm:grid grid-cols-7 md:grid-cols-9 lg:grid-cols-13 gap-2 justify-items-center max-w-full">
          {ALPHABET.map((letter) => {
            const isSelected = selectedLetter === letter;
            return (
              <button
                key={letter}
                onClick={() => handleLetterSelect(letter)}
                className={`
                  w-10 h-10 md:w-9 md:h-9 lg:w-8 lg:h-8
                  rounded-lg text-sm font-medium transition-all duration-200
                  touch-target tap-highlight touch-feedback
                  ${isSelected
                    ? "bg-primary text-white scale-105 shadow-[var(--shadow-sm)]"
                    : "bg-card text-foreground border border-border hover:border-primary hover:bg-secondary/30 active:bg-secondary/50"
                  }
                `}
              >
                {letter}
              </button>
            );
          })}
        </div>
      </div>

      {/* Name Grid for Selected Letter - Fixed height container to avoid layout shift */}
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

              {/* Names Grid - fixed max height with scroll */}
              <div className="max-h-48 overflow-y-auto">
                {loading ? (
                  <SkeletonNameList count={8} />
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {letterNames.map((name) => (
                      <button
                        key={name.id}
                        onClick={() => onSelectName(name.name)}
                        className="px-4 py-2.5 rounded-full bg-secondary/30 text-sm hover:bg-secondary transition-colors
                          touch-target tap-highlight touch-feedback active:bg-secondary/70"
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
