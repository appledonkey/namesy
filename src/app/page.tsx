"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardStack } from "@/components/features/card-stack";
import { SwipeActionBar, KeyboardHints } from "@/components/features/swipe-action-bar";
import { NamePreview } from "@/components/features/name-preview";
import { CardCatalogue, CardCatalogueTrigger } from "@/components/features/card-catalogue";
import { getSwipedNames } from "@/lib/swipe-preferences";
import { FiltersSheet, defaultFilters, type NameFilters } from "@/components/features/filters-sheet";
import { NameDetails } from "@/components/features/name-details";
import { useNamePool } from "@/hooks/use-name-pool";
import type { NameData } from "@/lib/names-data";
import type { SwipeAction } from "@/lib/swipe-preferences";
import { haptics } from "@/lib/haptics";

type Step = "lastname" | "main";

export default function Home() {
  const [step, setStep] = useState<Step>("lastname");
  const [lastName, setLastName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Main step state
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [savedNames, setSavedNames] = useState<Set<string>>(new Set());
  const [currentDetailName, setCurrentDetailName] = useState<NameData | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showCatalogue, setShowCatalogue] = useState(false);
  const [swipeRefreshKey, setSwipeRefreshKey] = useState(0);
  const [filters, setFilters] = useState<NameFilters>(defaultFilters);

  // Get favorites count for the trigger button (reactive to swipe changes)
  const { favoritesCount, superLikedCount } = useMemo(() => {
    const allNames = getSwipedNames();
    const favs = allNames.filter((n) => n.action === "like" || n.action === "superlike");
    return {
      favoritesCount: favs.length,
      superLikedCount: favs.filter((n) => n.action === "superlike").length,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swipeRefreshKey]);

  // Use the infinite name pool
  const {
    names,
    currentIndex,
    advance,
    reset: resetPool,
    isExhausted,
    reshuffle,
  } = useNamePool({ filters });

  const currentName = names[currentIndex];

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedLastName = localStorage.getItem("namesy-lastname");
    if (savedLastName) {
      setLastName(savedLastName);
      setStep("main");
    }
    const saved = localStorage.getItem("namesy-saved-names");
    if (saved) {
      setSavedNames(new Set(JSON.parse(saved)));
    }
    setIsLoaded(true);
  }, []);

  // Save last name to localStorage
  const handleContinue = () => {
    if (lastName.trim()) {
      localStorage.setItem("namesy-lastname", lastName.trim());
      setStep("main");
    }
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && lastName.trim()) {
      handleContinue();
    }
  };

  // Handle swipe actions from card stack
  const handleSwipeComplete = useCallback((name: NameData, action: SwipeAction) => {
    if (action === "like" || action === "superlike") {
      setFirstName(name.name);
      const newSaved = new Set(savedNames);
      newSaved.add(name.id);
      setSavedNames(newSaved);
      localStorage.setItem("namesy-saved-names", JSON.stringify([...newSaved]));
    }
    setCurrentDetailName(null);
    setShowDetails(false);
    setSwipeRefreshKey((k) => k + 1);
    advance();
  }, [savedNames, advance]);

  // Handle showing details
  const handleShowDetails = useCallback((name: NameData) => {
    setCurrentDetailName(name);
    setShowDetails(true);
  }, []);

  // Handle selecting a name (tap on card)
  const handleSelectName = useCallback((name: string) => {
    setFirstName(name);
  }, []);

  // Handle saving current name from details
  const handleSaveFromDetails = () => {
    if (!currentDetailName) return;
    const newSaved = new Set(savedNames);
    if (newSaved.has(currentDetailName.id)) {
      newSaved.delete(currentDetailName.id);
    } else {
      newSaved.add(currentDetailName.id);
    }
    setSavedNames(newSaved);
    localStorage.setItem("namesy-saved-names", JSON.stringify([...newSaved]));
  };

  // Handle changing last name
  const handleChangeLastName = () => {
    setStep("lastname");
  };

  // Action bar handlers
  const handleSkip = useCallback(() => {
    if (!currentName) return;
    haptics.swipe();
    // recordSwipe handled in CardStack
    handleSwipeComplete(currentName, "dislike");
  }, [currentName, handleSwipeComplete]);

  const handleLike = useCallback(() => {
    if (!currentName) return;
    haptics.save();
    handleSwipeComplete(currentName, "like");
  }, [currentName, handleSwipeComplete]);

  const handleSuperLike = useCallback(() => {
    if (!currentName) return;
    haptics.save();
    handleSwipeComplete(currentName, "superlike");
  }, [currentName, handleSwipeComplete]);

  const handleInfo = useCallback(() => {
    if (!currentName) return;
    haptics.tap();
    handleShowDetails(currentName);
  }, [currentName, handleShowDetails]);

  // Don't render until we've checked localStorage
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
            <Image
              src="/icon.png"
              alt="Namesy"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-heading text-xl font-semibold">namesy</span>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="Namesy"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="font-heading text-xl font-semibold">namesy</span>
        </div>
      </nav>

      {/* Step 1: Last Name */}
      {step === "lastname" && (
        <main className="max-w-md mx-auto px-6 py-16 sm:py-24">
          <div className="text-center space-y-8">
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                What&apos;s your last name?
              </h1>
              <p className="text-muted text-base sm:text-lg">
                We&apos;ll find first names that sound great with it.
              </p>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Enter your last name"
                autoFocus
                autoCapitalize="words"
                autoComplete="family-name"
                autoCorrect="off"
                spellCheck="false"
                className="w-full text-center text-xl sm:text-2xl py-4 px-6 bg-card border-2 border-border rounded-xl
                  placeholder:text-muted/50 text-foreground
                  focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                  transition-all duration-200"
              />

              <Button
                onClick={handleContinue}
                disabled={!lastName.trim()}
                size="lg"
                className="w-full py-6 text-lg"
              >
                Continue
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </main>
      )}

      {/* Main: Name discovery area */}
      {step === "main" && (
        <main className="max-w-lg mx-auto px-4 py-4 flex flex-col min-h-[calc(100vh-60px)]">
          {/* Card Stack */}
          <div className="flex-1 flex flex-col">
            <CardStack
              names={names}
              currentIndex={currentIndex}
              onSwipeComplete={handleSwipeComplete}
              onShowDetails={handleShowDetails}
              onSelectName={handleSelectName}
            />

            {/* Action Bar */}
            <SwipeActionBar
              onSkip={handleSkip}
              onInfo={handleInfo}
              onSuperLike={handleSuperLike}
              onLike={handleLike}
              disabled={isExhausted}
            />

            {/* Keyboard hints (desktop only) */}
            <KeyboardHints />
          </div>

          {/* Divider */}
          <div className="my-4 border-t border-border" />

          {/* Name Preview */}
          <NamePreview
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
            onFirstNameSelect={setFirstName}
            onMiddleNameChange={setMiddleName}
            onChangeLastName={handleChangeLastName}
          />

          {/* Divider */}
          <div className="my-4 border-t border-border" />

          {/* Bottom row: Favorites + Filters */}
          <div className="flex items-center justify-center gap-3 pb-4">
            <CardCatalogueTrigger
              onClick={() => setShowCatalogue(true)}
              count={favoritesCount}
              superLikedCount={superLikedCount}
            />
            <FiltersSheet
              filters={filters}
              onChange={setFilters}
            />
          </div>

          {/* Card Catalogue */}
          <AnimatePresence>
            {showCatalogue && (
              <CardCatalogue
                onSelectName={handleSelectName}
                onClose={() => setShowCatalogue(false)}
                refreshKey={swipeRefreshKey}
              />
            )}
          </AnimatePresence>

          {/* Details panel (modal-like) */}
          {showDetails && currentDetailName && (
            <div className="fixed inset-0 bg-black/50 z-30 flex items-end sm:items-center justify-center p-4">
              <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
                <div className="p-4 border-b border-border flex justify-between items-center">
                  <h3 className="font-semibold">Name Details</h3>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="p-2 hover:bg-secondary rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
                <div className="p-4">
                  <NameDetails
                    name={currentDetailName}
                    isSaved={savedNames.has(currentDetailName.id)}
                    onSave={handleSaveFromDetails}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Exhausted state handler */}
          {isExhausted && (
            <div className="fixed inset-0 bg-black/50 z-30 flex items-center justify-center p-4">
              <div className="bg-card rounded-2xl shadow-2xl max-w-sm w-full p-6 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold mb-2">You&apos;ve seen them all!</h3>
                <p className="text-muted text-sm mb-6">
                  You&apos;ve reviewed all available names. Want to see them again or try different filters?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={reshuffle}
                    className="flex-1 py-3 bg-secondary text-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors"
                  >
                    Start Over
                  </button>
                  <button
                    onClick={() => setFilters(defaultFilters)}
                    className="flex-1 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      )}
    </div>
  );
}
