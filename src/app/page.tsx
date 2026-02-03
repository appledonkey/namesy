"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimationControls, PanInfo } from "framer-motion";
import { Heart, X, Layers, TrendingUp, TrendingDown, Minus, Settings } from "lucide-react";
import { namesData, type NameData } from "@/lib/names";
import { haptics } from "@/lib/haptics";
import {
  getAppState,
  processSwipe,
  shuffleWithSeed,
  updateOnboardingSettings,
  advanceIndex,
  type AppState,
} from "@/lib/partner-storage";
import { Onboarding } from "@/components/features/onboarding";
import { SettingsSheet } from "@/components/features/settings-sheet";

type Screen = "swipe" | "matches";
type Partner = 1 | 2;

// Name Preview Component with inline editable names
interface NamePreviewProps {
  cardFirstName: string;
  customFirstName?: string;
  middleName?: string;
  surname?: string;
  onFirstNameChange: (name: string | undefined) => void;
  onMiddleNameChange: (name: string | undefined) => void;
}

function NamePreview({ cardFirstName, customFirstName, middleName, surname, onFirstNameChange, onMiddleNameChange }: NamePreviewProps) {
  // Use custom first name if set, otherwise use card's name
  const displayFirstName = customFirstName || cardFirstName;

  // Build initials
  const initials = [displayFirstName, middleName, surname]
    .filter(Boolean)
    .map((part) => part!.charAt(0).toUpperCase())
    .join(" · ");

  return (
    <motion.div
      key={cardFirstName}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="text-center mb-3 sm:mb-6"
    >
      {/* Full name with inline editable names */}
      <div className="flex items-center justify-center gap-1.5 text-lg sm:text-xl md:text-2xl font-heading text-foreground tracking-wide mb-2 sm:mb-3 whitespace-nowrap">
        <span className="relative inline-block flex-shrink-0">
          {/* Hidden sizer */}
          <span className="invisible whitespace-pre px-0.5" aria-hidden="true">
            {displayFirstName}
          </span>
          {/* Actual input overlaid */}
          <input
            type="text"
            value={customFirstName ?? ""}
            onChange={(e) => onFirstNameChange(e.target.value || undefined)}
            placeholder={cardFirstName}
            className="absolute inset-0 w-full bg-transparent border-b border-dashed border-muted/50 text-center outline-none focus:border-accent placeholder:text-foreground"
          />
        </span>
        <span className="relative inline-block flex-shrink-0">
          {/* Hidden sizer */}
          <span className="invisible whitespace-pre px-0.5" aria-hidden="true">
            {middleName || "middle"}
          </span>
          {/* Actual input overlaid */}
          <input
            type="text"
            value={middleName || ""}
            onChange={(e) => onMiddleNameChange(e.target.value || undefined)}
            placeholder="middle"
            className="absolute inset-0 w-full bg-transparent border-b border-dashed border-muted/50 text-center outline-none focus:border-accent placeholder:text-muted/40"
          />
        </span>
        {surname && <span className="truncate max-w-[100px] sm:max-w-none">{surname}</span>}
      </div>

      {/* Initials pill */}
      <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-secondary/50 rounded-full">
        <span className="text-sm sm:text-base md:text-lg font-medium tracking-[0.25em] sm:tracking-[0.3em] text-foreground/80 uppercase">
          {initials}
        </span>
      </div>
    </motion.div>
  );
}

// Spring physics configurations
const SPRING_CONFIG = {
  drag: { damping: 25, stiffness: 200 },      // Responsive during drag
  snapBack: { damping: 30, stiffness: 300 },  // Quick snap back
  exit: { damping: 30, stiffness: 300 },      // Fast exit for snappy feel
};

// Swipe thresholds
const SWIPE_THRESHOLD = 100;
const VELOCITY_THRESHOLD = 500;

export default function Home() {
  const [screen, setScreen] = useState<Screen>("swipe");
  const [activePartner, setActivePartner] = useState<Partner>(1);
  const [appState, setAppState] = useState<AppState | null>(null);
  const [showMatch, setShowMatch] = useState<NameData | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [buttonSwipe, setButtonSwipe] = useState<"left" | "right" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Load state from localStorage on mount
  useEffect(() => {
    const state = getAppState();
    setAppState(state);
    setIsLoaded(true);
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
  }, [appState?.shuffleSeed, appState?.genderFilter]);

  // Get matches as NameData objects
  const matchedNames = useMemo(() => {
    if (!appState) return [];
    return appState.matches
      .map((id) => namesData.find((n) => n.id === id))
      .filter((n): n is NameData => n !== undefined);
  }, [appState?.matches]);

  const currentState = appState
    ? activePartner === 1
      ? appState.partner1
      : appState.partner2
    : null;
  const otherState = appState
    ? activePartner === 1
      ? appState.partner2
      : appState.partner1
    : null;
  const currentName = currentState ? namePool[currentState.currentIndex] : null;
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

  // Handle swipe up to use current name as middle name
  const handleSwipeUp = useCallback(() => {
    if (!currentName || !appState) return;
    haptics.save();

    // Set current name as middle name
    const updatedState = updateOnboardingSettings({ middleName: currentName.name });

    // Advance to next card (don't add to likes)
    const finalState = advanceIndex(activePartner);
    setAppState(finalState);

    setIsFlipped(false);
    setIsAnimating(false);
    setButtonSwipe(null);
  }, [currentName, appState, activePartner]);

  // Handle button-triggered swipes
  const handleButtonSwipe = useCallback(
    (direction: "left" | "right") => {
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
    <div className="h-dvh bg-background flex flex-col overflow-x-hidden safe-top">
      {/* Header */}
      <header className="flex-shrink-0 px-4 pt-3 pb-2 sm:pt-5 sm:pb-3">
        {/* Logo + Settings */}
        <div className="flex items-center justify-between mb-2 sm:mb-4">
          <div className="w-10" /> {/* Spacer for centering */}
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="Namesy" width={24} height={24} className="rounded-lg sm:w-7 sm:h-7" />
            <span className="font-heading text-lg sm:text-xl font-semibold">namesy</span>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-colors touch-target"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Partner Toggle */}
        <div className="flex justify-center">
          <div className="flex gap-1 p-1 bg-secondary rounded-full">
            <button
              onClick={() => setActivePartner(1)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all touch-target ${
                activePartner === 1
                  ? "bg-partner1 text-white shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {appState.partner1.name || "Partner 1"}
            </button>
            <button
              onClick={() => setActivePartner(2)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all touch-target ${
                activePartner === 2
                  ? "bg-partner2 text-white shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {appState.partner2.name || "Partner 2"}
            </button>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="flex-shrink-0 flex justify-center gap-8 py-2 sm:py-3 border-b border-border">
        <button
          onClick={() => setScreen("swipe")}
          className={`p-2 transition-colors touch-target ${screen === "swipe" ? "text-foreground" : "text-muted"}`}
        >
          <Layers className="w-5 h-5" />
        </button>
        <button
          onClick={() => setScreen("matches")}
          className={`relative p-2 transition-colors touch-target ${screen === "matches" ? "text-foreground" : "text-muted"}`}
        >
          <Heart className="w-5 h-5" />
          {matchedNames.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-medium">
              {matchedNames.length}
            </span>
          )}
        </button>
      </nav>

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
                  <AnimatePresence mode="wait">
                    <NamePreview
                      key={currentName.id}
                      cardFirstName={currentName.name}
                      customFirstName={appState.firstName}
                      middleName={appState.middleName}
                      surname={appState.surname}
                      onFirstNameChange={handleFirstNameChange}
                      onMiddleNameChange={handleMiddleNameChange}
                    />
                  </AnimatePresence>
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
                          onSwipeComplete={() => processSwipeResult(buttonSwipe!)}
                        />
                      );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="flex-shrink-0 flex gap-4 sm:gap-6 mt-4 sm:mt-8 safe-bottom pb-4">
                  <motion.button
                    onClick={() => handleButtonSwipe("left")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped || isAnimating}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-partner1/30 text-partner1 flex items-center justify-center shadow-md hover:border-partner1 transition-colors disabled:opacity-40 touch-target"
                  >
                    <X className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
                  </motion.button>
                  <motion.button
                    onClick={() => handleButtonSwipe("right")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped || isAnimating}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-card border-2 border-partner2/30 text-partner2 flex items-center justify-center shadow-md hover:border-partner2 transition-colors disabled:opacity-40 touch-target"
                  >
                    <Heart className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.button>
                </div>
              </>
            )}
          </div>
        )}

        {screen === "matches" && (
          <div className="w-full max-w-md flex-1 overflow-y-auto scrollbar-hide safe-bottom">
            <h2 className="font-heading text-xl sm:text-2xl text-center mb-4 sm:mb-6">Matches</h2>
            {matchedNames.length === 0 ? (
              <p className="text-center text-muted">No matches yet. Keep swiping!</p>
            ) : (
              <ul className="space-y-2 sm:space-y-3 pb-4">
                {matchedNames.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-card rounded-2xl shadow-sm"
                  >
                    <div
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full flex-shrink-0 ${
                        m.gender === "F" ? "bg-partner1" : m.gender === "M" ? "bg-partner2" : "bg-muted"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-lg sm:text-xl">{m.name}</p>
                      <p className="text-xs sm:text-sm text-muted truncate">
                        {m.origin} · {m.meaning}
                      </p>
                    </div>
                    <div className={`flex items-center gap-1 text-xs sm:text-sm flex-shrink-0 ${getTrendColor(m.trend)}`}>
                      {getTrendIcon(m.trend)}
                      <span>{m.popularity}</span>
                    </div>
                  </li>
                ))}
              </ul>
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
                background: "linear-gradient(135deg, #FDDCD6 0%, #C5E8DA 100%)",
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

      {/* Settings Sheet */}
      <SettingsSheet
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        appState={appState}
        onStateChange={setAppState}
      />
    </div>
  );
}

// Flip Card Component
interface FlipCardProps {
  name: NameData;
  isFlipped: boolean;
  onTap: () => void;
  onSwipe: (direction: "left" | "right" | "up") => void;
  getTrendIcon: (trend: string) => React.ReactNode;
  getTrendColor: (trend: string) => string;
  isTop?: boolean;
  stackIndex?: number;
  triggerSwipe?: "left" | "right" | null;
  onSwipeComplete?: () => void;
}

function FlipCard({
  name,
  isFlipped,
  onTap,
  onSwipe,
  getTrendIcon,
  getTrendColor,
  isTop = true,
  stackIndex = 0,
  triggerSwipe = null,
  onSwipeComplete
}: FlipCardProps) {
  const controls = useAnimationControls();
  const [isExiting, setIsExiting] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
  const middleOpacity = useTransform(y, [-100, 0], [1, 0]);
  // Scale up slightly when dragging for "lifted" feel
  const scale = useTransform(x, [-200, 0, 200], [1.02, 1, 1.02]);

  // Handle programmatic swipe from buttons
  useEffect(() => {
    if (triggerSwipe && isTop && !isExiting) {
      performSwipe(triggerSwipe);
    }
  }, [triggerSwipe]);

  // Handle flip animation
  useEffect(() => {
    if (isTop && !isExiting) {
      controls.start({
        rotateY: isFlipped ? 180 : 0,
        transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      });
    }
  }, [isFlipped, isTop, isExiting, controls]);

  const performSwipe = async (direction: "left" | "right" | "up") => {
    if (isExiting) return;
    setIsExiting(true);

    // Process state immediately for snappy feel
    onSwipe(direction);
    onSwipeComplete?.();

    // Animation runs in parallel with state update
    if (direction === "up") {
      controls.start({
        x: 0,
        y: -window.innerHeight,
        rotate: 0,
        transition: {
          type: "spring",
          ...SPRING_CONFIG.exit,
        }
      });
    } else {
      const exitX = direction === "right"
        ? window.innerWidth * 1.5
        : -window.innerWidth * 1.5;
      const exitRotate = direction === "right" ? 30 : -30;

      controls.start({
        x: exitX,
        y: 50,
        rotate: exitRotate,
        transition: {
          type: "spring",
          ...SPRING_CONFIG.exit,
        }
      });
    }
  };

  const handleDragEnd = async (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isFlipped || isExiting || !isTop) return;

    const swipeRight = info.offset.x > SWIPE_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD;
    const swipeLeft = info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -VELOCITY_THRESHOLD;
    const swipeUp = info.offset.y < -SWIPE_THRESHOLD || info.velocity.y < -VELOCITY_THRESHOLD;

    if (swipeUp && Math.abs(info.offset.y) > Math.abs(info.offset.x)) {
      // Prioritize vertical swipe if it's more dominant
      await performSwipe("up");
    } else if (swipeRight) {
      await performSwipe("right");
    } else if (swipeLeft) {
      await performSwipe("left");
    } else {
      // Snap back with spring physics
      controls.start({
        x: 0,
        y: 0,
        rotate: 0,
        transition: {
          type: "spring",
          ...SPRING_CONFIG.snapBack
        }
      });
    }
  };

  const genderDotColor =
    name.gender === "F" ? "bg-partner1" : name.gender === "M" ? "bg-partner2" : "bg-muted";

  // Stack positioning - cards behind are slightly smaller and offset
  const stackScale = 1 - stackIndex * 0.05;
  const stackY = stackIndex * 8;

  return (
    <div
      className="absolute inset-0 swipe-card overflow-visible"
      style={{
        perspective: 1000,
        zIndex: 10 - stackIndex,
      }}
    >
      <motion.div
        drag={isTop && !isFlipped && !isExiting}
        dragElastic={0.9}
        onDragEnd={handleDragEnd}
        onClick={isTop ? onTap : undefined}
        className={`relative w-full h-full ${isTop ? "cursor-pointer" : ""}`}
        animate={controls}
        initial={{
          rotateY: 0,
          scale: stackScale,
          y: stackY,
        }}
        style={{
          transformStyle: "preserve-3d",
          x: isTop ? x : 0,
          y: isTop ? y : stackY,
          rotate: isTop ? rotate : 0,
          scale: isTop ? scale : stackScale,
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-card rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 sm:p-8 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Like/Nope/Middle indicators */}
          <motion.div
            style={{ opacity: nopeOpacity }}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-partner1 text-partner1 rounded-lg font-bold text-xs sm:text-sm rotate-12"
          >
            NOPE
          </motion.div>
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-4 sm:top-6 left-4 sm:left-6 px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-partner2 text-partner2 rounded-lg font-bold text-xs sm:text-sm -rotate-12"
          >
            LIKE
          </motion.div>
          <motion.div
            style={{ opacity: middleOpacity }}
            className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1.5 sm:py-2 border-2 border-accent text-accent rounded-lg font-bold text-xs sm:text-sm whitespace-nowrap"
          >
            MIDDLE NAME
          </motion.div>

          {/* Gender dot */}
          <div className={`w-2 h-2 rounded-full ${genderDotColor} mb-3 sm:mb-4`} />

          {/* Name */}
          <h1 className="font-heading text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-1 sm:mb-2">
            {name.name}
          </h1>

          {/* Origin */}
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted mb-2 sm:mb-3">
            {name.origin}
          </p>

          {/* Meaning */}
          <p className="text-sm sm:text-base italic text-foreground/70 font-heading text-center px-2">
            &ldquo;{name.meaning}&rdquo;
          </p>

          {/* Tap hint */}
          <p className="absolute bottom-4 sm:bottom-6 text-[10px] sm:text-xs text-muted/50 tracking-wide">
            tap for more
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-card rounded-2xl shadow-lg p-4 sm:p-6 backface-hidden overflow-y-auto scrollbar-hide overscroll-contain"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Header */}
          <div className="text-center border-b border-border pb-3 sm:pb-4 mb-3 sm:mb-4">
            <h2 className="font-heading text-2xl sm:text-3xl font-light text-foreground">{name.name}</h2>
            <p className="text-xs sm:text-sm text-muted mt-1">{name.origin}</p>
          </div>

          {/* Stats */}
          <div className="flex justify-around mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-border">
            <div className="text-center">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">Popularity</p>
              <p className="text-base sm:text-lg font-medium">{name.popularity}</p>
            </div>
            <div className="text-center">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">Trend</p>
              <p className={`text-base sm:text-lg font-medium flex items-center justify-center gap-1 ${getTrendColor(name.trend)}`}>
                {getTrendIcon(name.trend)} {name.trend}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">Syllables</p>
              <p className="text-base sm:text-lg font-medium">{name.syllables}</p>
            </div>
          </div>

          {/* Nicknames */}
          {name.nicknames.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted mb-1.5 sm:mb-2">Nicknames</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {name.nicknames.map((n) => (
                  <span key={n} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-secondary rounded-full text-xs sm:text-sm">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Famous people */}
          {name.famousPeople.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted mb-1.5 sm:mb-2">Famous People</p>
              <ul className="space-y-0.5 sm:space-y-1">
                {name.famousPeople.slice(0, 3).map((person, i) => (
                  <li key={i} className="text-xs sm:text-sm text-foreground/80">
                    {person}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Vibe tags */}
          {name.vibe.length > 0 && (
            <div className="mb-3 sm:mb-4">
              <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted mb-1.5 sm:mb-2">Vibe</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {name.vibe.map((v) => (
                  <span key={v} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tap hint */}
          <p className="text-center text-[10px] sm:text-xs text-muted/50 tracking-wide mt-auto pt-3 sm:pt-4">
            tap to flip back
          </p>
        </div>
      </motion.div>
    </div>
  );
}
