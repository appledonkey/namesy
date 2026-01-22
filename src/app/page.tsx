"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { Heart, X, Layers, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { namesData, type NameData } from "@/lib/names-data";
import { haptics } from "@/lib/haptics";

type Screen = "swipe" | "matches";
type Partner = 1 | 2;

interface PartnerState {
  likes: string[];
  currentIndex: number;
}

// Shuffle array deterministically
function shuffleArray<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let m = shuffled.length;
  while (m) {
    const i = Math.floor(seededRandom(seed + m) * m--);
    [shuffled[m], shuffled[i]] = [shuffled[i], shuffled[m]];
  }
  return shuffled;
}

function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function Home() {
  const [screen, setScreen] = useState<Screen>("swipe");
  const [activePartner, setActivePartner] = useState<Partner>(1);
  const [partner1, setPartner1] = useState<PartnerState>({ likes: [], currentIndex: 0 });
  const [partner2, setPartner2] = useState<PartnerState>({ likes: [], currentIndex: 0 });
  const [matches, setMatches] = useState<NameData[]>([]);
  const [showMatch, setShowMatch] = useState<NameData | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Shuffled name pool (same order for both partners)
  const namePool = useMemo(() => shuffleArray(namesData.slice(0, 100), 42), []);

  const currentState = activePartner === 1 ? partner1 : partner2;
  const setCurrentState = activePartner === 1 ? setPartner1 : setPartner2;
  const otherState = activePartner === 1 ? partner2 : partner1;
  const currentName = namePool[currentState.currentIndex];
  const isFinished = currentState.currentIndex >= namePool.length;

  const handleSwipe = (direction: "left" | "right") => {
    if (isFinished || isFlipped) return;

    haptics.swipe();

    if (direction === "right") {
      const newLikes = [...currentState.likes, currentName.name];
      setCurrentState({ ...currentState, likes: newLikes, currentIndex: currentState.currentIndex + 1 });

      // Check for match
      if (otherState.likes.includes(currentName.name)) {
        setMatches((prev) => [...prev, currentName]);
        setShowMatch(currentName);
        haptics.save();
        setTimeout(() => setShowMatch(null), 1800);
      }
    } else {
      setCurrentState({ ...currentState, currentIndex: currentState.currentIndex + 1 });
    }

    setIsFlipped(false);
  };

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

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="px-4 pt-5 pb-3">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <Image src="/icon.png" alt="Namesy" width={28} height={28} className="rounded-lg" />
          <span className="font-heading text-xl font-semibold">namesy</span>
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
              Partner 1
              <span className="ml-2 text-xs opacity-75">
                {partner1.currentIndex}/{namePool.length}
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
              Partner 2
              <span className="ml-2 text-xs opacity-75">
                {partner2.currentIndex}/{namePool.length}
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
          {matches.length > 0 && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center font-medium">
              {matches.length}
            </span>
          )}
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center px-4 py-6">
        {screen === "swipe" && (
          <div className="w-full max-w-sm flex flex-col items-center">
            {isFinished ? (
              <div className="text-center py-20">
                <p className="font-heading text-3xl text-foreground mb-2">All done!</p>
                <p className="text-muted">Switch partners or check matches</p>
              </div>
            ) : (
              <>
                {/* Flip Card */}
                <FlipCard
                  name={currentName}
                  isFlipped={isFlipped}
                  onTap={handleCardTap}
                  onSwipe={handleSwipe}
                  getTrendIcon={getTrendIcon}
                  getTrendColor={getTrendColor}
                />

                {/* Action Buttons */}
                <div className="flex gap-6 mt-8">
                  <motion.button
                    onClick={() => handleSwipe("left")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped}
                    className="w-16 h-16 rounded-full bg-card border-2 border-partner1/30 text-partner1 flex items-center justify-center shadow-md hover:border-partner1 transition-colors disabled:opacity-40"
                  >
                    <X className="w-7 h-7" strokeWidth={2.5} />
                  </motion.button>
                  <motion.button
                    onClick={() => handleSwipe("right")}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    disabled={isFlipped}
                    className="w-16 h-16 rounded-full bg-card border-2 border-partner2/30 text-partner2 flex items-center justify-center shadow-md hover:border-partner2 transition-colors disabled:opacity-40"
                  >
                    <Heart className="w-7 h-7" />
                  </motion.button>
                </div>

                {/* Progress */}
                <p className="mt-6 text-sm text-muted">
                  {currentState.currentIndex + 1} / {namePool.length}
                </p>
              </>
            )}
          </div>
        )}

        {screen === "matches" && (
          <div className="w-full max-w-md">
            <h2 className="font-heading text-2xl text-center mb-6">Matches</h2>
            {matches.length === 0 ? (
              <p className="text-center text-muted">No matches yet. Keep swiping!</p>
            ) : (
              <ul className="space-y-3">
                {matches.map((m) => (
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
                        {m.origins[0]} · {m.meanings[0]}
                      </p>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${getTrendColor(m.trend)}`}>
                      {getTrendIcon(m.trend)}
                      <span>#{m.currentRank || "?"}</span>
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
}

function FlipCard({ name, isFlipped, onTap, onSwipe, getTrendIcon, getTrendColor }: FlipCardProps) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-12, 12]);
  const likeOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isFlipped) return;
    if (info.offset.x > 100 || info.velocity.x > 500) {
      onSwipe("right");
    } else if (info.offset.x < -100 || info.velocity.x < -500) {
      onSwipe("left");
    }
  };

  const genderDotColor =
    name.gender === "F" ? "bg-partner1" : name.gender === "M" ? "bg-partner2" : "bg-muted";

  return (
    <div className="w-full aspect-[3/4] max-w-xs" style={{ perspective: 1000 }}>
      <motion.div
        drag={!isFlipped}
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.9}
        onDragEnd={handleDragEnd}
        onClick={onTap}
        className="relative w-full h-full cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d", x, rotate }}
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
            {name.origins[0] || "Unknown"}
          </p>

          {/* Meaning */}
          <p className="text-base italic text-foreground/70 font-heading">
            &ldquo;{name.meanings[0] || "Beautiful name"}&rdquo;
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
            {name.phonetic && (
              <p className="text-sm text-muted mt-1">{name.phonetic}</p>
            )}
          </div>

          {/* Stats */}
          <div className="flex justify-around mb-4 pb-4 border-b border-border">
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted">Rank</p>
              <p className="text-lg font-medium">#{name.currentRank || "?"}</p>
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

          {/* Famous namesakes */}
          {name.famousNamesakes && name.famousNamesakes.length > 0 && (
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-widest text-muted mb-2">Famous Namesakes</p>
              <ul className="space-y-1">
                {name.famousNamesakes.slice(0, 3).map((n, i) => (
                  <li key={i} className="text-sm text-foreground/80">
                    {n.name}
                  </li>
                ))}
              </ul>
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
