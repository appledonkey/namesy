"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Filter, Heart, RotateCcw } from "lucide-react";
import { CardStack } from "./card-stack";
import { SwipeActionBar, KeyboardHints } from "./swipe-action-bar";
import { SwipeProgress } from "./swipe-progress";
import { BottomSheet } from "./bottom-sheet";
import { NameDetailSheet } from "./name-detail-sheet";
import { Button } from "@/components/ui/button";
import { haptics } from "@/lib/haptics";
import {
  getLikedNames,
  getSwipedNames,
  removeSwipedName,
  type SwipeAction,
} from "@/lib/swipe-preferences";
import type { NameData } from "@/lib/names-data";

// Filter presets
const PRESETS = [
  { id: "all", label: "All Names", description: "Browse the full collection" },
  { id: "classic", label: "Classic", description: "Timeless, top 100 favorites" },
  { id: "modern", label: "Modern", description: "Rising stars and fresh picks" },
  { id: "rare", label: "Rare", description: "Unique gems outside top 500" },
  { id: "short", label: "Short & Sweet", description: "1-2 syllable names" },
] as const;

type PresetId = (typeof PRESETS)[number]["id"];

interface DiscoveryViewProps {
  initialNames: NameData[];
}

/**
 * DiscoveryView - Main swipe discovery interface
 * Manages the card stack, filters, and swipe state
 */
export function DiscoveryView({ initialNames }: DiscoveryViewProps) {
  // Names state
  const [names, setNames] = useState<NameData[]>(initialNames);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedCount, setLikedCount] = useState(() => {
    // Initialize from localStorage on client
    if (typeof window !== "undefined") {
      return getLikedNames().length;
    }
    return 0;
  });

  // Filter state
  const [preset, setPreset] = useState<PresetId>("all");
  const [gender, setGender] = useState<"all" | "M" | "F">("all");
  const [showFilters, setShowFilters] = useState(false);

  // Detail sheet state
  const [detailName, setDetailName] = useState<NameData | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  // Undo stack
  const [lastAction, setLastAction] = useState<{
    name: NameData;
    action: SwipeAction;
    index: number;
  } | null>(null);

  // Fetch names when filters change
  useEffect(() => {
    const fetchNames = async () => {
      const params = new URLSearchParams();
      if (preset !== "all") params.set("preset", preset);
      if (gender !== "all") params.set("gender", gender);
      params.set("limit", "200");

      // Get already swiped names to exclude
      const swiped = getSwipedNames();
      if (swiped.length > 0) {
        // We'll filter client-side for now since API uses IDs
      }

      try {
        const res = await fetch(`/api/names/random?${params.toString()}`);
        const data = await res.json();

        // Filter out already swiped names
        const swipedNames = new Set(swiped.map((s) => s.name.toLowerCase()));
        const filtered = data.names.filter(
          (n: NameData) => !swipedNames.has(n.name.toLowerCase())
        );

        setNames(filtered);
        setCurrentIndex(0);
      } catch (error) {
        console.error("Failed to fetch names:", error);
      }
    };

    fetchNames();
  }, [preset, gender]);

  // Handle swipe completion
  const handleSwipeComplete = useCallback(
    (name: NameData, action: SwipeAction) => {
      // Save for undo
      setLastAction({ name, action, index: currentIndex });

      // Update liked count
      if (action === "like" || action === "superlike") {
        setLikedCount((prev) => prev + 1);
      }

      // Move to next card
      setCurrentIndex((prev) => prev + 1);
    },
    [currentIndex]
  );

  // Handle undo
  const handleUndo = useCallback(() => {
    if (!lastAction) return;

    haptics.tap();

    // Find and remove the swiped name from preferences
    const swipedNames = getSwipedNames();
    const found = swipedNames.find(
      (s) => s.name.toLowerCase() === lastAction.name.name.toLowerCase()
    );
    if (found) {
      removeSwipedName(found.id);
    }

    // Update liked count if was a like
    if (lastAction.action === "like" || lastAction.action === "superlike") {
      setLikedCount((prev) => Math.max(0, prev - 1));
    }

    // Go back to previous card
    setCurrentIndex(lastAction.index);
    setLastAction(null);
  }, [lastAction]);

  // Show name details
  const handleShowDetails = useCallback((name: NameData) => {
    setDetailName(name);
    setShowDetails(true);
  }, []);

  // Select name (from detail sheet)
  const handleSelectName = useCallback((name: string) => {
    // Navigate to name detail page
    window.location.href = `/name/${name.toLowerCase()}`;
  }, []);

  // Card stack actions
  const handleSkip = useCallback(() => {
    const button = document.querySelector('[data-action="left"]') as HTMLButtonElement;
    if (button) button.click();
  }, []);

  const handleLike = useCallback(() => {
    const button = document.querySelector('[data-action="right"]') as HTMLButtonElement;
    if (button) button.click();
  }, []);

  const handleSuperLike = useCallback(() => {
    const button = document.querySelector('[data-action="up"]') as HTMLButtonElement;
    if (button) button.click();
  }, []);

  const handleInfo = useCallback(() => {
    const button = document.querySelector('[data-action="info"]') as HTMLButtonElement;
    if (button) button.click();
  }, []);

  // Reset filters and start fresh
  const handleReset = useCallback(() => {
    haptics.tap();
    setPreset("all");
    setGender("all");
    setCurrentIndex(0);
  }, []);

  const isFinished = currentIndex >= names.length;

  return (
    <div className="flex flex-col min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)]">
      {/* Header with filters */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between gap-4">
          {/* Filter button */}
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium hover:border-primary transition-colors"
          >
            <Filter className="w-4 h-4" />
            <span>{PRESETS.find((p) => p.id === preset)?.label || "All Names"}</span>
            {gender !== "all" && (
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-xs">
                {gender === "F" ? "Girls" : "Boys"}
              </span>
            )}
          </button>

          {/* Liked count */}
          <div className="flex items-center gap-2 text-sm text-muted">
            <Heart className="w-4 h-4 text-primary" />
            <span>{likedCount} saved</span>
          </div>
        </div>
      </div>

      {/* Card stack area */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {!isFinished ? (
          <>
            <CardStack
              names={names}
              currentIndex={currentIndex}
              onSwipeComplete={handleSwipeComplete}
              onShowDetails={handleShowDetails}
              onSelectName={handleSelectName}
            />

            {/* Action bar */}
            <div className="mt-4">
              <SwipeActionBar
                onSkip={handleSkip}
                onInfo={handleInfo}
                onSuperLike={handleSuperLike}
                onLike={handleLike}
                disabled={isFinished}
              />
              <KeyboardHints />
            </div>

            {/* Undo button */}
            <AnimatePresence>
              {lastAction && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  onClick={handleUndo}
                  className="mt-3 flex items-center gap-2 px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Undo
                </motion.button>
              )}
            </AnimatePresence>
          </>
        ) : (
          /* Finished state */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-6"
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="font-heading text-2xl font-semibold mb-2">
              You&apos;ve seen them all!
            </h2>
            <p className="text-muted mb-6 max-w-xs mx-auto">
              {likedCount > 0
                ? `You liked ${likedCount} names. Check your favorites or try different filters.`
                : "Try adjusting your filters to discover more names."}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={handleReset} variant="secondary">
                Try Different Filters
              </Button>
              {likedCount > 0 && (
                <Button onClick={() => (window.location.href = "/favorites")}>
                  View Favorites
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* Progress bar */}
      {!isFinished && names.length > 0 && (
        <div className="px-4 pb-4 md:pb-6">
          <SwipeProgress
            current={currentIndex}
            total={names.length}
            likedCount={likedCount}
          />
        </div>
      )}

      {/* Filter sheet */}
      <BottomSheet isOpen={showFilters} onClose={() => setShowFilters(false)}>
        <div className="space-y-6">
          <h3 className="font-heading text-xl font-semibold">Filter Names</h3>

          {/* Gender filter */}
          <div>
            <p className="text-sm text-muted mb-3">Gender</p>
            <div className="flex gap-2">
              {(["all", "F", "M"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setGender(g)}
                  className={`flex-1 py-3 rounded-xl text-sm font-medium transition-colors ${
                    gender === g
                      ? "bg-primary text-white"
                      : "bg-secondary/50 text-foreground hover:bg-secondary"
                  }`}
                >
                  {g === "all" ? "All" : g === "F" ? "Girls" : "Boys"}
                </button>
              ))}
            </div>
          </div>

          {/* Preset filter */}
          <div>
            <p className="text-sm text-muted mb-3">Style</p>
            <div className="space-y-2">
              {PRESETS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setPreset(p.id);
                    setShowFilters(false);
                  }}
                  className={`w-full flex items-center justify-between p-4 rounded-xl transition-colors ${
                    preset === p.id
                      ? "bg-primary/10 border-2 border-primary"
                      : "bg-secondary/30 border-2 border-transparent hover:bg-secondary/50"
                  }`}
                >
                  <div className="text-left">
                    <p className="font-medium">{p.label}</p>
                    <p className="text-sm text-muted">{p.description}</p>
                  </div>
                  {preset === p.id && (
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </BottomSheet>

      {/* Name detail sheet */}
      {detailName && (
        <NameDetailSheet
          isOpen={showDetails}
          onClose={() => setShowDetails(false)}
          name={detailName.name}
          meaning={detailName.meanings[0]}
          origin={detailName.origins[0]}
          onSelect={() => handleSelectName(detailName.name)}
        />
      )}
    </div>
  );
}
