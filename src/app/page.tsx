"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimationControls, PanInfo } from "framer-motion";
import { Heart, X, Layers, TrendingUp, TrendingDown, Minus, Settings } from "lucide-react";
import { namesData, type NameData } from "@/lib/names";
import { haptics } from "@/lib/haptics";
import {
  getAppState,
  addLike,
  advanceIndex,
  shuffleWithSeed,
  type AppState,
} from "@/lib/partner-storage";
import { Onboarding } from "@/components/features/onboarding";
import { SettingsSheet } from "@/components/features/settings-sheet";

type Screen = "swipe" | "matches";
type Partner = 1 | 2;

// Name Preview Component
interface NamePreviewProps {
  firstName: string;
  middleName?: string;
  surname?: string;
}

function NamePreview({ firstName, middleName, surname }: NamePreviewProps) {
  // Build full name parts
  const nameParts = [firstName, middleName, surname].filter(Boolean);
  const fullName = nameParts.join(" ");

  // Build initials
  const initials = nameParts.map((part) => part!.charAt(0).toUpperCase()).join(" ");

  return (
    <motion.div
      key={firstName}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="text-center mb-4"
    >
      <p className="text-lg text-foreground/70 font-heading">{fullName}</p>
      <p className="text-sm text-muted tracking-widest">{initials}</p>
    </motion.div>
  );
}

// Spring physics configurations
const SPRING_CONFIG = {
  drag: { damping: 25, stiffness: 200 },      // Responsive during drag
  snapBack: { damping: 30, stiffness: 300 },  // Quick snap back
  exit: { damping: 20, stiffness: 100 },      // Smooth fly off
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

  // Process the swipe result after animation completes
  const processSwipeResult = useCallback(
    (direction: "left" | "right") => {
      if (!currentName || !appState) return;

      haptics.swipe();

      if (direction === "right") {
        // Add like and check for match
        const { state: newState, isMatch } = addLike(activePartner, currentName.id);
        setAppState(newState);

        if (isMatch) {
          setShowMatch(currentName);
          haptics.save();
          setTimeout(() => setShowMatch(null), 1800);
        }

        // Advance index
        const advancedState = advanceIndex(activePartner);
        setAppState(advancedState);
      } else {
        // Just advance index for left swipe
        const newState = advanceIndex(activePartner);
        setAppState(newState);
      }

      setIsFlipped(false);
      setIsAnimating(false);
      setButtonSwipe(null);
    },
    [currentName, appState, activePartner]
  );

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
    (direction: "left" | "right") => {
      processSwipeResult(direction);
    },
    [processSwipeResult]
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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="px-4 pt-5 pb-3">
        {/* Logo + Settings */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10" /> {/* Spacer for centering */}
          <div className="flex items-center gap-2">
            <Image src="/icon.png" alt="Namesy" width={28} height={28} className="rounded-lg" />
            <span className="font-heading text-xl font-semibold">namesy</span>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="w-10 h-10 flex items-center justify-center text-muted hover:text-foreground transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>

        {/* Partner Toggle */}
        <div className="flex justify-center">
          <div className="flex gap-1 p-1 bg-secondary rounded-full">
            <button
              onClick={() => setActivePartner(1)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activePartner === 1
                  ? "bg-partner1 text-white shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {appState.partner1.name || "Partner 1"}
              <span className="ml-2 text-xs opacity-75">
                {appState.partner1.currentIndex}/{namePool.length}
              </span>
            </button>
            <button
              onClick={() => setActivePartner(2)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activePartner === 2
                  ? "bg-partner2 text-white shadow-md"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {appState.partner2.name || "Partner 2"}
              <span className="ml-2 text-xs opacity-75">
                {appState.partner2.currentIndex}/{namePool.length}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Nav */}
      <nav className="flex justify-center gap-8 py-3 border-b border-border">
        <button
          onClick={() => setScreen("swipe")}
          className={`p-2 transition-colors ${screen === "swipe" ? "text-foreground" : "text-muted"}`}
        >
          <Layers className="w-5 h-5" />
        </button>
        <button
          onClick={() => setScreen("matches")}
          className={`relative p-2 transition-colors ${screen === "matches" ? "text-foreground" : "text-muted"}`}
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
      <main className="flex-1 flex flex-col items-center px-4 py-6">
        {screen === "swipe" && (
          <div className="w-full max-w-sm flex flex-col items-center">
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
                {/* Name Preview */}
                <AnimatePresence mode="wait">
                  <NamePreview
                    key={currentName.id}
                    firstName={currentName.name}
                    middleName={appState.middleName}
                    surname={appState.surname}
                  />
                </AnimatePresence>

                {/* Card Stack */}
                <div className="relative w-full max-w-xs aspect-[3/4]">
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
                <div className="flex gap-6 mt-8">
                  <motion.button
                    onClick={() => handleButtonSwipe("left")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped || isAnimating}
                    className="w-16 h-16 rounded-full bg-card border-2 border-partner1/30 text-partner1 flex items-center justify-center shadow-md hover:border-partner1 transition-colors disabled:opacity-40"
                  >
                    <X className="w-7 h-7" strokeWidth={2.5} />
                  </motion.button>
                  <motion.button
                    onClick={() => handleButtonSwipe("right")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped || isAnimating}
                    className="w-16 h-16 rounded-full bg-card border-2 border-partner2/30 text-partner2 flex items-center justify-center shadow-md hover:border-partner2 transition-colors disabled:opacity-40"
                  >
                    <Heart className="w-7 h-7" />
                  </motion.button>
                </div>

                {/* Progress */}
                <p className="mt-6 text-sm text-muted">
                  {currentState ? currentState.currentIndex + 1 : 0} / {namePool.length}
                </p>
              </>
            )}
          </div>
        )}

        {screen === "matches" && (
          <div className="w-full max-w-md">
            <h2 className="font-heading text-2xl text-center mb-6">Matches</h2>
            {matchedNames.length === 0 ? (
              <p className="text-center text-muted">No matches yet. Keep swiping!</p>
            ) : (
              <ul className="space-y-3">
                {matchedNames.map((m) => (
                  <li
                    key={m.id}
                    className="flex items-center gap-4 p-4 bg-card rounded-2xl shadow-sm"
                  >
                    <div
                      className={`w-3 h-3 rounded-full ${
                        m.gender === "F" ? "bg-partner1" : m.gender === "M" ? "bg-partner2" : "bg-muted"
                      }`}
                    />
                    <div className="flex-1">
                      <p className="font-heading text-xl">{m.name}</p>
                      <p className="text-sm text-muted">
                        {m.origin} · {m.meaning}
                      </p>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${getTrendColor(m.trend)}`}>
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
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-card p-10 rounded-3xl text-center shadow-xl"
              style={{
                background: "linear-gradient(135deg, #FDDCD6 0%, #C5E8DA 100%)",
              }}
            >
              <p className="text-sm uppercase tracking-widest text-foreground/70 mb-2">
                It&apos;s a match!
              </p>
              <p className="font-heading text-4xl text-foreground">{showMatch.name}</p>
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
  onSwipe: (direction: "left" | "right") => void;
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
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
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

  const performSwipe = async (direction: "left" | "right") => {
    if (isExiting) return;
    setIsExiting(true);

    const exitX = direction === "right"
      ? window.innerWidth * 1.5
      : -window.innerWidth * 1.5;
    const exitRotate = direction === "right" ? 30 : -30;

    await controls.start({
      x: exitX,
      y: 50,
      rotate: exitRotate,
      transition: {
        type: "spring",
        ...SPRING_CONFIG.exit,
      }
    });

    onSwipe(direction);
    onSwipeComplete?.();
  };

  const handleDragEnd = async (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isFlipped || isExiting || !isTop) return;

    const swipeRight = info.offset.x > SWIPE_THRESHOLD || info.velocity.x > VELOCITY_THRESHOLD;
    const swipeLeft = info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -VELOCITY_THRESHOLD;

    if (swipeRight) {
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
      className="w-full aspect-[3/4] max-w-xs swipe-card"
      style={{
        perspective: 1000,
        position: stackIndex > 0 ? "absolute" : "relative",
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
          rotate: isTop ? rotate : 0,
          scale: isTop ? scale : stackScale,
          y: isTop ? 0 : stackY,
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-card rounded-2xl shadow-lg flex flex-col items-center justify-center p-8 backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Like/Nope indicators */}
          <motion.div
            style={{ opacity: nopeOpacity }}
            className="absolute top-6 right-6 px-4 py-2 border-2 border-partner1 text-partner1 rounded-lg font-bold text-sm rotate-12"
          >
            NOPE
          </motion.div>
          <motion.div
            style={{ opacity: likeOpacity }}
            className="absolute top-6 left-6 px-4 py-2 border-2 border-partner2 text-partner2 rounded-lg font-bold text-sm -rotate-12"
          >
            LIKE
          </motion.div>

          {/* Gender dot */}
          <div className={`w-2 h-2 rounded-full ${genderDotColor} mb-4`} />

          {/* Name */}
          <h1 className="font-heading text-5xl font-light tracking-tight text-foreground mb-2">
            {name.name}
          </h1>

          {/* Origin */}
          <p className="text-xs uppercase tracking-widest text-muted mb-3">
            {name.origin}
          </p>

          {/* Meaning */}
          <p className="text-base italic text-foreground/70 font-heading">
            &ldquo;{name.meaning}&rdquo;
          </p>

          {/* Tap hint */}
          <p className="absolute bottom-6 text-xs text-muted/50 tracking-wide">
            tap for more
          </p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-card rounded-2xl shadow-lg p-6 backface-hidden overflow-y-auto"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Header */}
          <div className="text-center border-b border-border pb-4 mb-4">
            <h2 className="font-heading text-3xl font-light text-foreground">{name.name}</h2>
            <p className="text-sm text-muted mt-1">{name.origin}</p>
          </div>

          {/* Stats */}
          <div className="flex justify-around mb-4 pb-4 border-b border-border">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted">Popularity</p>
              <p className="text-lg font-medium">{name.popularity}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted">Trend</p>
              <p className={`text-lg font-medium flex items-center gap-1 ${getTrendColor(name.trend)}`}>
                {getTrendIcon(name.trend)} {name.trend}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted">Syllables</p>
              <p className="text-lg font-medium">{name.syllables}</p>
            </div>
          </div>

          {/* Nicknames */}
          {name.nicknames.length > 0 && (
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-2">Nicknames</p>
              <div className="flex flex-wrap gap-2">
                {name.nicknames.map((n) => (
                  <span key={n} className="px-3 py-1 bg-secondary rounded-full text-sm">
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Famous people */}
          {name.famousPeople.length > 0 && (
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-2">Famous People</p>
              <ul className="space-y-1">
                {name.famousPeople.slice(0, 3).map((person, i) => (
                  <li key={i} className="text-sm text-foreground/80">
                    {person}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Vibe tags */}
          {name.vibe.length > 0 && (
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-2">Vibe</p>
              <div className="flex flex-wrap gap-2">
                {name.vibe.map((v) => (
                  <span key={v} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {v}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Tap hint */}
          <p className="text-center text-xs text-muted/50 tracking-wide mt-auto pt-4">
            tap to flip back
          </p>
        </div>
      </motion.div>
    </div>
  );
}
