"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import { Heart, X, ChevronUp, ChevronLeft, TrendingUp, TrendingDown, Minus, Settings, Sun, Moon, HelpCircle } from "lucide-react";
import { namesData, type NameData } from "@/lib/names";
import { haptics } from "@/lib/haptics";
import {
  getAppState,
  processSwipe,
  shuffleWithSeed,
  updateOnboardingSettings,
  advanceIndex,
  updateSettings,
  updateLockedNames,
  applyTheme,
  type AppState,
  type ThemePreference,
} from "@/lib/partner-storage";
import { Onboarding } from "@/components/features/onboarding";
import { SettingsSheet } from "@/components/features/settings-sheet";
import { NamePreview } from "@/components/features/name-preview";
import { SwipeTutorial } from "@/components/features/swipe-tutorial";
import { FlipCard } from "@/components/features/flip-card";

type Screen = "swipe" | "matches";
type Partner = 1 | 2;
type LikesView = "all" | "matches";

// Helper functions moved outside component to avoid recreation on each render
const getTrendIcon = (trend: string) => {
  if (trend === "rising") return <TrendingUp className="w-4 h-4" />;
  if (trend === "falling") return <TrendingDown className="w-4 h-4" />;
  return <Minus className="w-4 h-4" />;
};

const getTrendColor = (trend: string) => {
  if (trend === "rising") return "text-partner2-dark";
  if (trend === "falling") return "text-partner1-dark";
  return "text-muted";
};

export default function Home() {
  const [screen, setScreen] = useState<Screen>("swipe");
  const [activePartner, setActivePartner] = useState<Partner>(1);
  const [appState, setAppState] = useState<AppState | null>(null);
  const [showMatch, setShowMatch] = useState<NameData | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [buttonSwipe, setButtonSwipe] = useState<"left" | "right" | "up" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [likesView, setLikesView] = useState<LikesView>("all");

  // Load state from localStorage on mount
  useEffect(() => {
    const state = getAppState();
    setAppState(state);
    setIsLoaded(true);
  }, []);

  // Show tutorial for first-time users (after onboarding)
  useEffect(() => {
    if (appState?.onboardingComplete && !appState?.hasSeenTutorial) {
      setShowTutorial(true);
    }
  }, [appState?.onboardingComplete, appState?.hasSeenTutorial]);

  // Prevent iOS pull-to-refresh on swipe cards
  // CSS overscroll-behavior: none on html/body handles general overscroll
  useEffect(() => {
    const preventPullToRefresh = (e: TouchEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.swipe-card')) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', preventPullToRefresh, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventPullToRefresh);
    };
  }, []);

  // Handle onboarding completion
  const handleOnboardingComplete = useCallback((newState: AppState) => {
    setAppState(newState);
  }, []);

  // Shuffled name pool (same order for both partners, using persistent seed)
  // Filtered by user's gender preference from onboarding
  const namePool = useMemo(() => {
    if (!appState) return [];

    // Filter by gender preference
    let filtered = namesData;
    if (appState.genderFilter && appState.genderFilter !== "all") {
      filtered = namesData.filter((n) => n.gender === appState.genderFilter);
    }

    return shuffleWithSeed(filtered, appState.shuffleSeed);
  }, [appState, namesData]);

  // Get matches as NameData objects
  const matchedNames = useMemo(() => {
    if (!appState) return [];
    return appState.matches
      .map((id) => namesData.find((n) => n.id === id))
      .filter((n): n is NameData => n !== undefined);
  }, [appState, namesData]);

  // Get Partner 1 likes as NameData objects
  const partner1Likes = useMemo(() => {
    if (!appState) return [];
    return appState.partner1.likes
      .map((id) => namesData.find((n) => n.id === id))
      .filter((n): n is NameData => n !== undefined);
  }, [appState, namesData]);

  // Get Partner 2 likes as NameData objects
  const partner2Likes = useMemo(() => {
    if (!appState) return [];
    return appState.partner2.likes
      .map((id) => namesData.find((n) => n.id === id))
      .filter((n): n is NameData => n !== undefined);
  }, [appState, namesData]);

  // Set of match IDs for quick lookup
  const matchSet = useMemo(() => {
    if (!appState) return new Set<string>();
    return new Set(appState.matches);
  }, [appState]);

  const currentState = appState
    ? activePartner === 1
      ? appState.partner1
      : appState.partner2
    : null;

  // Memoize currentName to prevent unnecessary recalculations
  const currentName = useMemo(() => {
    if (!currentState) return null;
    return namePool[currentState.currentIndex];
  }, [currentState, namePool]);

  const isFinished = currentState ? currentState.currentIndex >= namePool.length : false;

  // Process the swipe result - now batched for better performance
  const processSwipeResult = useCallback(
    (direction: "left" | "right") => {
      if (!currentName || !appState) return;

      haptics.swipe();

      const { state: newState, isMatch } = processSwipe(
        activePartner,
        currentName.id,
        direction === "right"
      );
      setAppState(newState);

      if (isMatch) {
        setShowMatch(currentName);
        haptics.save();
        setTimeout(() => setShowMatch(null), 1800);
      }

      setIsFlipped(false);
      setIsAnimating(false);
      setButtonSwipe(null);
    },
    [currentName, appState, activePartner]
  );

  // Handle first name changes
  const handleFirstNameChange = useCallback((name: string | undefined) => {
    if (!appState) return;
    haptics.tap();
    const newState = updateOnboardingSettings({ firstName: name });
    setAppState(newState);
  }, [appState]);

  // Handle middle name changes
  const handleMiddleNameChange = useCallback((name: string | undefined) => {
    if (!appState) return;
    haptics.tap();
    const newState = updateOnboardingSettings({ middleName: name });
    setAppState(newState);
  }, [appState]);

  // Handle surname changes
  const handleSurnameChange = useCallback((name: string | undefined) => {
    if (!appState) return;
    haptics.tap();
    const newState = updateOnboardingSettings({ surname: name });
    setAppState(newState);
  }, [appState]);

  // Handle lock toggle for name parts
  const handleToggleLock = useCallback((field: "firstName" | "middleName") => {
    if (!appState) return;
    haptics.tap();
    const isLocked = appState.lockedNames[field];
    if (field === "firstName" && !isLocked) {
      // Pinning: capture whatever is currently displayed (custom or card name)
      const displayed = appState.firstName || currentName?.name;
      if (displayed) {
        updateOnboardingSettings({ firstName: displayed });
      }
    } else if (field === "firstName" && isLocked) {
      // Unpinning: clear custom first name so card name shows through
      // Pass "" (not undefined) because updateOnboardingSettings skips undefined values
      updateOnboardingSettings({ firstName: "" });
    }
    const newState = updateLockedNames({ [field]: !isLocked });
    setAppState(newState);
  }, [appState, currentName]);

  // Handle swipe up to use current name as middle name
  const handleSwipeUp = useCallback(() => {
    if (!currentName || !appState) return;

    // If middle name is pinned, just advance (don't overwrite)
    if (appState.lockedNames.middleName) {
      haptics.error();
      const finalState = advanceIndex(activePartner);
      setAppState(finalState);
      setIsFlipped(false);
      setIsAnimating(false);
      setButtonSwipe(null);
      return;
    }

    haptics.save();

    // Set current name as middle name
    updateOnboardingSettings({ middleName: currentName.name });

    // Advance to next card (don't add to likes)
    const finalState = advanceIndex(activePartner);
    setAppState(finalState);

    setIsFlipped(false);
    setIsAnimating(false);
    setButtonSwipe(null);
  }, [currentName, appState, activePartner]);

  // Handle button-triggered swipes
  const handleButtonSwipe = useCallback(
    (direction: "left" | "right" | "up") => {
      if (isFinished || isFlipped || !currentName || !appState || isAnimating) return;
      setIsAnimating(true);
      setButtonSwipe(direction);
    },
    [isFinished, isFlipped, currentName, appState, isAnimating]
  );

  // Handle drag-triggered swipes (directly from card)
  const handleSwipe = useCallback(
    (direction: "left" | "right" | "up") => {
      if (direction === "up") {
        handleSwipeUp();
      } else {
        processSwipeResult(direction);
      }
    },
    [processSwipeResult, handleSwipeUp]
  );

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          handleButtonSwipe("left");
          break;
        case "ArrowRight":
          e.preventDefault();
          handleButtonSwipe("right");
          break;
        case " ": // Space bar
          e.preventDefault();
          if (!isFinished && currentName) {
            haptics.tap();
            setIsFlipped(!isFlipped);
          }
          break;
        case "1":
          setActivePartner(1);
          break;
        case "2":
          setActivePartner(2);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleButtonSwipe, isFinished, currentName, isFlipped]);

  const handleCardTap = () => {
    if (!isFinished) {
      haptics.tap();
      setIsFlipped(!isFlipped);
    }
  };

  // Show loading state
  if (!isLoaded || !appState) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Image src="/icon.png" alt="Namesy" width={48} height={48} className="rounded-xl mx-auto mb-4 animate-pulse" />
          <p className="text-muted">Loading...</p>
        </div>
      </div>
    );
  }

  // Show onboarding for first-time users
  if (!appState.onboardingComplete) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <MotionConfig reducedMotion="user">
    <div className="h-dvh bg-background flex flex-col overflow-x-hidden safe-top">
      {/* Header */}
      <header className="flex-shrink-0 px-4 pt-3 pb-2 sm:pt-5 sm:pb-3">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          {screen === "matches" ? (
            <button
              onClick={() => setScreen("swipe")}
              className="flex items-center gap-1 text-muted hover:text-foreground transition-colors touch-target"
              aria-label="Go back to swipe screen"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Back</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <Image src="/icon.png" alt="Namesy" width={24} height={24} className="rounded-lg sm:w-7 sm:h-7" />
              <span className="font-heading text-lg sm:text-xl font-semibold">namesy</span>
              {screen === "swipe" && appState.partnerMode === "partner" && (
                <div
                  className="ml-2 flex rounded-full bg-secondary p-0.5"
                  role="tablist"
                  aria-label="Switch swiping partner"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePartner === 1}
                    onClick={() => { haptics.tap(); setActivePartner(1); }}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors touch-target ${
                      activePartner === 1 ? "bg-partner1 text-white shadow-sm" : "text-muted hover:text-foreground"
                    }`}
                  >
                    P1
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activePartner === 2}
                    onClick={() => { haptics.tap(); setActivePartner(2); }}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors touch-target ${
                      activePartner === 2 ? "bg-partner2 text-white shadow-sm" : "text-muted hover:text-foreground"
                    }`}
                  >
                    P2
                  </button>
                </div>
              )}
            </div>
          )}
          <div className="flex items-center gap-2">
            {screen === "swipe" && (
              <button
                onClick={() => setScreen("matches")}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-secondary hover:bg-secondary-dark rounded-full transition-colors touch-target"
                aria-label="View likes and matches"
              >
                <Heart className="w-4 h-4 text-partner1" fill="currentColor" />
                <span className="text-sm font-medium">Likes & matches</span>
              </button>
            )}
            <button
              onClick={() => setShowTutorial(true)}
              className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-colors touch-target"
              aria-label="How to use"
            >
              <HelpCircle className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const current = appState.settings.theme;
                let next: ThemePreference;
                if (current === "system") {
                  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  next = isDark ? "light" : "dark";
                } else {
                  next = current === "dark" ? "light" : "dark";
                }
                applyTheme(next);
                const newState = updateSettings({ theme: next });
                setAppState(newState);
              }}
              className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-colors touch-target"
              aria-label="Toggle theme"
            >
              {(appState.settings.theme === "dark" ||
                (appState.settings.theme === "system" &&
                  typeof window !== "undefined" &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches))
                ? <Moon className="w-4 h-4" />
                : <Sun className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setShowSettings(true)}
              className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-colors touch-target"
              aria-label="Open settings"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-6 py-3 sm:py-6">
        {screen === "swipe" && (
          <div className="w-full max-w-sm flex flex-col items-center flex-1 min-h-0">
            {isFinished || !currentName ? (
              <div className="text-center py-20">
                <p className="font-heading text-3xl text-foreground mb-2">All done!</p>
                <p className="text-muted">
                  {matchedNames.length > 0
                    ? `You have ${matchedNames.length} match${matchedNames.length === 1 ? "" : "es"}!`
                    : "Switch partners or check matches"}
                </p>
              </div>
            ) : (
              <>
                {/* Name Preview with inline editable names */}
                <div className="flex-shrink-0">
                  <NamePreview
                    cardFirstName={currentName.name}
                    customFirstName={appState.firstName}
                    middleName={appState.middleName}
                    surname={appState.surname}
                    onFirstNameChange={handleFirstNameChange}
                    onMiddleNameChange={handleMiddleNameChange}
                    onSurnameChange={handleSurnameChange}
                    lockedNames={appState.lockedNames}
                    onToggleLock={handleToggleLock}
                  />
                </div>

                {/* Card Stack - tarot card proportions */}
                <div
                  className="relative flex-1 w-full max-w-[260px] sm:max-w-[280px]"
                  style={{ maxHeight: "min(65vh, 500px)", aspectRatio: "9/16" }}
                >
                  {/* Render up to 3 cards in reverse order so top card is last (on top) */}
                  {namePool
                    .slice(currentState!.currentIndex, currentState!.currentIndex + 3)
                    .reverse()
                    .map((name, reverseIndex, arr) => {
                      const stackIndex = arr.length - 1 - reverseIndex;
                      const isTop = stackIndex === 0;
                      return (
                        <FlipCard
                          key={name.id}
                          name={name}
                          isFlipped={isTop ? isFlipped : false}
                          onTap={isTop ? handleCardTap : () => {}}
                          onSwipe={handleSwipe}
                          getTrendIcon={getTrendIcon}
                          getTrendColor={getTrendColor}
                          isTop={isTop}
                          stackIndex={stackIndex}
                          triggerSwipe={isTop ? buttonSwipe : null}
                          onSwipeComplete={() => {
                            if (buttonSwipe && buttonSwipe !== "up") {
                              processSwipeResult(buttonSwipe);
                            }
                          }}
                        />
                      );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="flex-shrink-0 flex items-center gap-4 sm:gap-6 mt-4 sm:mt-8 safe-bottom pb-4">
                  <motion.button
                    onClick={() => handleButtonSwipe("left")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped || isAnimating}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-partner1/30 text-partner1 flex items-center justify-center shadow-md hover:border-partner1 transition-colors disabled:opacity-40 touch-target"
                    aria-label="Pass on this name"
                  >
                    <X className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                  </motion.button>
                  {/* Middle name button */}
                  <motion.button
                    onClick={() => handleButtonSwipe("up")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped || isAnimating}
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-card border-2 border-accent/30 text-accent flex items-center justify-center shadow-md hover:border-accent transition-colors disabled:opacity-40 touch-target"
                    aria-label="Use as middle name"
                  >
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.button>
                  <motion.button
                    onClick={() => handleButtonSwipe("right")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped || isAnimating}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-partner2/30 text-partner2 flex items-center justify-center shadow-md hover:border-partner2 transition-colors disabled:opacity-40 touch-target"
                    aria-label="Like this name"
                  >
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.button>
                </div>
              </>
            )}
          </div>
        )}

        {screen === "matches" && (
          <div className="w-full max-w-lg flex-1 flex flex-col min-h-0 safe-bottom pt-2">
            {/* Filter: All likes vs Matches only (when partner mode and has matches) */}
            {appState.partnerMode === "partner" && matchedNames.length > 0 && (
              <div className="flex-shrink-0 flex rounded-full bg-secondary p-0.5 mb-3" role="tablist" aria-label="Filter likes view">
                <button
                  type="button"
                  role="tab"
                  aria-selected={likesView === "all"}
                  onClick={() => { haptics.tap(); setLikesView("all"); }}
                  className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors touch-target ${
                    likesView === "all" ? "bg-card text-foreground shadow-sm" : "text-muted hover:text-foreground"
                  }`}
                >
                  All likes
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={likesView === "matches"}
                  onClick={() => { haptics.tap(); setLikesView("matches"); }}
                  className={`flex-1 rounded-full py-2 text-sm font-medium transition-colors touch-target flex items-center justify-center gap-1.5 ${
                    likesView === "matches" ? "bg-card text-foreground shadow-sm" : "text-muted hover:text-foreground"
                  }`}
                >
                  <Heart className="w-4 h-4 text-partner1" fill="currentColor" />
                  Matches ({matchedNames.length})
                </button>
              </div>
            )}

            {likesView === "matches" && appState.partnerMode === "partner" ? (
              /* Single list: matches only */
              <div className="flex-1 overflow-y-auto scrollbar-hide">
                <ul className="space-y-2 pb-4">
                  {matchedNames.map((name) => (
                    <li
                      key={name.id}
                      className="flex items-center gap-2 p-2.5 bg-card rounded-xl shadow-sm ring-1 ring-partner1/30"
                    >
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          name.gender === "F" ? "bg-gender-girl" :
                          name.gender === "M" ? "bg-gender-boy" : "bg-muted"
                        }`}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-heading text-base truncate">{name.name}</p>
                      </div>
                      <Heart className="w-4 h-4 text-partner1 flex-shrink-0" fill="currentColor" />
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              /* Two-column layout: Partner 1 | Partner 2 */
              <>
                <div className="flex-shrink-0 flex gap-2 mb-3">
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-muted">Partner 1</span>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-muted">Partner 2</span>
                  </div>
                </div>
                <div className="flex-1 flex gap-2 min-h-0">
                  <div className="flex-1 overflow-y-auto scrollbar-hide">
                    {partner1Likes.length === 0 ? (
                      <p className="text-center text-muted text-sm py-4">No likes yet</p>
                    ) : (
                      <ul className="space-y-2 pb-4">
                        {partner1Likes.map((name) => (
                          <li
                            key={name.id}
                            className={`flex items-center gap-2 p-2.5 bg-card rounded-xl shadow-sm ${
                              matchSet.has(name.id) ? "ring-1 ring-partner1/30" : ""
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                name.gender === "F" ? "bg-gender-girl" :
                                name.gender === "M" ? "bg-gender-boy" : "bg-muted"
                              }`}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-heading text-base truncate">{name.name}</p>
                            </div>
                            {matchSet.has(name.id) && (
                              <Heart className="w-4 h-4 text-partner1 flex-shrink-0" fill="currentColor" />
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="flex-1 overflow-y-auto scrollbar-hide">
                    {partner2Likes.length === 0 ? (
                      <p className="text-center text-muted text-sm py-4">No likes yet</p>
                    ) : (
                      <ul className="space-y-2 pb-4">
                        {partner2Likes.map((name) => (
                          <li
                            key={name.id}
                            className={`flex items-center gap-2 p-2.5 bg-card rounded-xl shadow-sm ${
                              matchSet.has(name.id) ? "ring-1 ring-partner1/30" : ""
                            }`}
                          >
                            <div
                              className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                name.gender === "F" ? "bg-gender-girl" :
                                name.gender === "M" ? "bg-gender-boy" : "bg-muted"
                              }`}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="font-heading text-base truncate">{name.name}</p>
                            </div>
                            {matchSet.has(name.id) && (
                              <Heart className="w-4 h-4 text-partner1 flex-shrink-0" fill="currentColor" />
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </main>

      {/* Match Popup */}
      <AnimatePresence>
        {showMatch && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 safe-y px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card p-8 sm:p-10 rounded-3xl text-center shadow-xl mx-4 max-w-[280px] sm:max-w-none"
              style={{
                background: "var(--match-gradient)",
              }}
            >
              <p className="text-xs sm:text-sm uppercase tracking-widest text-foreground/70 mb-2">
                It&apos;s a match!
              </p>
              <p className="font-heading text-3xl sm:text-4xl text-foreground">{showMatch.name}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Swipe Tutorial */}
      <AnimatePresence>
        {showTutorial && (
          <SwipeTutorial
            onComplete={() => {
              setShowTutorial(false);
              setAppState(getAppState());
            }}
          />
        )}
      </AnimatePresence>

      {/* Settings Sheet */}
      <SettingsSheet
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        appState={appState}
        onStateChange={setAppState}
      />
    </div>
    </MotionConfig>
  );
}
