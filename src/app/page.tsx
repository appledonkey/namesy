"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, AlertTriangle, Lock, Unlock, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getLikedNames } from "@/lib/swipe-preferences";
import { type NameVibe } from "@/lib/names-data";
import { Button } from "@/components/ui/button";
import { TinderStack } from "@/components/features/tinder-stack";
import { DailyDiscovery } from "@/components/features/daily-discovery";
import { VibePills } from "@/components/features/vibe-pills";
import { SiblingMatcher } from "@/components/features/sibling-matcher";

type Step = "lastname" | "gender" | "main";
type GenderFilter = "boy" | "girl" | "all";

// Bad initials to warn about
const BAD_INITIALS = new Set([
  "ASS", "FAT", "PIG", "DIE", "DUM", "FUK", "FUC", "SEX", "STD", "HIV",
  "KKK", "WTF", "SOB", "PMS", "BRA", "TIT", "VAG", "GAY", "FAG", "HO",
  "POO", "PEE", "BUM", "COW", "HAG", "HOE", "SUK", "SUC", "CUM", "NUT",
]);

// Get initials from names
function getInitials(first: string, middle: string, last: string): string {
  const parts = [first, middle, last].filter(Boolean);
  return parts.map(p => p.charAt(0).toUpperCase()).join(".");
}

// Check if initials are problematic
function isBadInitials(first: string, middle: string, last: string): boolean {
  const initials = [first, middle, last]
    .filter(Boolean)
    .map(p => p.charAt(0).toUpperCase())
    .join("");
  return BAD_INITIALS.has(initials);
}

export default function Home() {
  const [step, setStep] = useState<Step>("lastname");
  const [lastName, setLastName] = useState("");
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("all");
  const [isLoaded, setIsLoaded] = useState(false);

  // Name preview state
  const [currentPreviewName, setCurrentPreviewName] = useState<string | null>(null);
  const [savedFirstName, setSavedFirstName] = useState<string | null>(null);
  const [middleName, setMiddleName] = useState("");
  const [justSaved, setJustSaved] = useState(false);
  const [showMiddleDropdown, setShowMiddleDropdown] = useState(false);
  const [likedNamesKey, setLikedNamesKey] = useState(0);

  // Lock states
  const [firstNameLocked, setFirstNameLocked] = useState(false);
  const [lockedFirstName, setLockedFirstName] = useState<string | null>(null);
  const [middleNameLocked, setMiddleNameLocked] = useState(false);

  // Filter states
  const [selectedVibes, setSelectedVibes] = useState<NameVibe[]>([]);
  const [siblingName, setSiblingName] = useState("");

  // Get liked names for middle name dropdown
  const likedNames = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = likedNamesKey; // Trigger re-compute when key changes
    return getLikedNames();
  }, [likedNamesKey]);

  // Get the displayed first name (locked or current)
  const displayedFirstName = firstNameLocked ? lockedFirstName : currentPreviewName;

  // Compute initials
  const previewInitials = useMemo(() => {
    return getInitials(displayedFirstName || "", middleName, lastName);
  }, [displayedFirstName, middleName, lastName]);

  const savedInitials = useMemo(() => {
    return getInitials(savedFirstName || "", middleName, lastName);
  }, [savedFirstName, middleName, lastName]);

  // Check for bad initials
  const hasBadPreviewInitials = useMemo(() => {
    return isBadInitials(displayedFirstName || "", middleName, lastName);
  }, [displayedFirstName, middleName, lastName]);

  const hasBadSavedInitials = useMemo(() => {
    return isBadInitials(savedFirstName || "", middleName, lastName);
  }, [savedFirstName, middleName, lastName]);

  // Lock/unlock first name
  const toggleFirstNameLock = () => {
    if (firstNameLocked) {
      // Unlock
      setFirstNameLocked(false);
      setLockedFirstName(null);
    } else {
      // Lock current name
      if (currentPreviewName) {
        setFirstNameLocked(true);
        setLockedFirstName(currentPreviewName);
      }
    }
  };

  // Lock/unlock middle name
  const toggleMiddleNameLock = () => {
    setMiddleNameLocked(!middleNameLocked);
  };

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedLastName = localStorage.getItem("namesy-lastname");
    const savedGender = localStorage.getItem("namesy-gender") as GenderFilter | null;
    if (savedLastName) {
      setLastName(savedLastName);
      if (savedGender) {
        setGenderFilter(savedGender);
        setStep("main");
      } else {
        setStep("gender");
      }
    }
    setIsLoaded(true);
  }, []);

  // Save last name and go to gender step
  const handleLastNameContinue = () => {
    if (lastName.trim()) {
      localStorage.setItem("namesy-lastname", lastName.trim());
      setStep("gender");
    }
  };

  // Save gender and go to main
  const handleGenderSelect = (gender: GenderFilter) => {
    setGenderFilter(gender);
    localStorage.setItem("namesy-gender", gender);
    setStep("main");
  };

  // Handle Enter key for last name
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && lastName.trim()) {
      handleLastNameContinue();
    }
  };

  // Handle name selection from swipe (like)
  const handleNameSelect = (name: string) => {
    setSavedFirstName(name);
    setJustSaved(true);
    setLikedNamesKey(k => k + 1); // Refresh liked names dropdown
    setTimeout(() => setJustSaved(false), 600);
  };

  // Handle current card change
  const handleCurrentNameChange = (name: string | null) => {
    setCurrentPreviewName(name);
  };

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
                  placeholder:text-muted/50 text-foreground font-heading
                  focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                  transition-all duration-200"
              />

              <Button
                onClick={handleLastNameContinue}
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

      {/* Step 2: Gender Selection */}
      {step === "gender" && (
        <main className="max-w-lg mx-auto px-6 py-16 sm:py-24">
          <div className="text-center space-y-8">
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                Are you having a...
              </h1>
              <p className="text-muted text-base sm:text-lg">
                This helps us show you the right names.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Boy */}
              <button
                onClick={() => handleGenderSelect("boy")}
                className="group flex flex-col items-center gap-3 p-6 bg-card border-2 border-border rounded-2xl
                  hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center
                  group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-200">
                  <span className="text-3xl text-blue-500 font-heading">B</span>
                </div>
                <span className="font-heading font-medium text-foreground">Boy</span>
              </button>

              {/* Girl */}
              <button
                onClick={() => handleGenderSelect("girl")}
                className="group flex flex-col items-center gap-3 p-6 bg-card border-2 border-border rounded-2xl
                  hover:border-pink-400 hover:bg-pink-50 transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center
                  group-hover:bg-pink-200 group-hover:scale-110 transition-all duration-200">
                  <span className="text-3xl text-pink-500 font-heading">G</span>
                </div>
                <span className="font-heading font-medium text-foreground">Girl</span>
              </button>

              {/* Don't Know */}
              <button
                onClick={() => handleGenderSelect("all")}
                className="group flex flex-col items-center gap-3 p-6 bg-card border-2 border-border rounded-2xl
                  hover:border-purple-400 hover:bg-purple-50 transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center
                  group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-200">
                  <span className="text-3xl text-purple-500 font-heading">?</span>
                </div>
                <span className="font-heading font-medium text-foreground text-sm">Don&apos;t know yet</span>
              </button>
            </div>

            <button
              onClick={() => setStep("lastname")}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              ← Back to last name
            </button>
          </div>
        </main>
      )}

      {/* Main: Swipe Interface */}
      {step === "main" && (
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          {/* Daily Discovery */}
          <DailyDiscovery
            onAddToFavorites={() => setLikedNamesKey((k) => k + 1)}
          />

          {/* Vibe Pills */}
          <div className="mb-6">
            <VibePills
              selectedVibes={selectedVibes}
              onChange={setSelectedVibes}
            />
          </div>

          {/* Name Preview */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6 mb-8"
          >
            <p className="text-sm text-muted mb-3 text-center">Previewing</p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {/* First Name with Lock */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleFirstNameLock}
                  disabled={!displayedFirstName}
                  className={`p-1.5 rounded-lg transition-all duration-200 ${
                    firstNameLocked
                      ? "text-primary bg-primary/10 hover:bg-primary/20"
                      : "text-muted hover:text-foreground hover:bg-secondary/50"
                  } disabled:opacity-30 disabled:cursor-not-allowed`}
                  title={firstNameLocked ? "Unlock first name" : "Lock first name"}
                >
                  {firstNameLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                </button>
                <motion.span
                  key={displayedFirstName}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-3xl font-heading font-semibold tracking-tight text-center min-w-28
                    ${displayedFirstName ? "text-foreground" : "text-muted/40"}
                    ${firstNameLocked ? "text-primary" : ""}`}
                >
                  {displayedFirstName || "First"}
                </motion.span>
              </div>

              {/* Middle Name - Dual Mode Input with Lock */}
              <div className="relative flex items-center gap-2">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={middleName}
                    onChange={(e) => !middleNameLocked && setMiddleName(e.target.value)}
                    onFocus={() => !middleNameLocked && setShowMiddleDropdown(true)}
                    placeholder="Middle"
                    autoCapitalize="words"
                    autoComplete="off"
                    disabled={middleNameLocked}
                    className={`text-3xl font-heading font-semibold tracking-tight text-center
                      bg-transparent border-b-2 transition-all duration-200 w-32 py-1
                      placeholder:text-muted/40 focus:outline-none
                      ${middleNameLocked
                        ? "text-primary border-transparent cursor-not-allowed"
                        : middleName
                          ? "text-foreground border-transparent hover:border-border focus:border-primary"
                          : "text-foreground border-transparent hover:border-border focus:border-primary"}`}
                  />
                  {likedNames.length > 0 && !middleNameLocked && (
                    <button
                      onClick={() => setShowMiddleDropdown(!showMiddleDropdown)}
                      className="absolute right-0 p-1 text-muted hover:text-foreground transition-colors"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${showMiddleDropdown ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                <button
                  onClick={toggleMiddleNameLock}
                  disabled={!middleName}
                  className={`p-1.5 rounded-lg transition-all duration-200 ${
                    middleNameLocked
                      ? "text-primary bg-primary/10 hover:bg-primary/20"
                      : "text-muted hover:text-foreground hover:bg-secondary/50"
                  } disabled:opacity-30 disabled:cursor-not-allowed`}
                  title={middleNameLocked ? "Unlock middle name" : "Lock middle name"}
                >
                  {middleNameLocked ? <Lock className="w-4 h-4" /> : <Unlock className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {showMiddleDropdown && likedNames.length > 0 && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowMiddleDropdown(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 4, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white border border-border rounded-2xl shadow-lg z-50 overflow-hidden"
                      >
                        {/* Header */}
                        <div className="px-4 py-2.5 border-b border-border bg-secondary/30">
                          <p className="text-xs font-heading font-medium text-muted uppercase tracking-wider">
                            Pick from favorites
                          </p>
                        </div>

                        <div className="max-h-48 overflow-y-auto py-1">
                          {likedNames.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                setMiddleName(item.name);
                                setShowMiddleDropdown(false);
                              }}
                              className={`w-full px-4 py-2.5 text-left font-heading transition-colors flex items-center justify-between
                                ${item.name === middleName
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground hover:bg-secondary/50"}`}
                            >
                              <span className="font-medium">{item.name}</span>
                              {item.name === middleName && (
                                <span className="text-xs text-primary">Selected</span>
                              )}
                            </button>
                          ))}
                        </div>

                        {/* Clear option */}
                        {middleName && (
                          <div className="border-t border-border">
                            <button
                              onClick={() => {
                                setMiddleName("");
                                setShowMiddleDropdown(false);
                              }}
                              className="w-full px-4 py-2.5 text-left text-sm font-heading text-muted hover:text-foreground hover:bg-secondary/50 transition-colors"
                            >
                              Clear middle name
                            </button>
                          </div>
                        )}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Last Name (static) */}
              <span className="text-3xl font-heading font-semibold text-foreground tracking-tight">
                {lastName}
              </span>
            </div>

            {/* Initials Display */}
            {(currentPreviewName || middleName) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center gap-2 mt-3"
              >
                <span className={`text-lg font-heading font-medium tracking-widest ${hasBadPreviewInitials ? "text-amber-600" : "text-muted"}`}>
                  {previewInitials}
                </span>
                {hasBadPreviewInitials && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-1 text-amber-600"
                  >
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs font-medium">Careful with these initials!</span>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Saved name indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4"
            >
              {savedFirstName ? (
                <div>
                  <motion.p
                    key={savedFirstName}
                    initial={{ scale: 1.2, color: "#22c55e" }}
                    animate={{ scale: 1, color: "#6b7280" }}
                    transition={{ duration: 0.5 }}
                    className={`text-sm ${justSaved ? "text-green-500 font-medium" : "text-muted"}`}
                  >
                    {justSaved ? "Saved! " : "Saved: "}
                    <span className="font-medium text-foreground">
                      {savedFirstName} {middleName ? `${middleName} ` : ""}{lastName}
                    </span>
                    <span className="ml-1 text-muted">({savedInitials})</span>
                    {justSaved && " ✓"}
                  </motion.p>
                  {hasBadSavedInitials && (
                    <p className="text-xs text-amber-600 mt-1 flex items-center justify-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      These initials might be problematic
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-sm text-muted">Swipe right to save a name</p>
              )}
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-3">
              <button
                onClick={() => {
                  localStorage.removeItem("namesy-gender");
                  setStep("gender");
                }}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                Change gender
              </button>
              <span className="text-muted">·</span>
              <button
                onClick={() => setStep("lastname")}
                className="text-xs text-muted hover:text-foreground transition-colors"
              >
                Change last name
              </button>
            </div>
          </motion.div>

          {/* Tinder Stack */}
          <TinderStack
            genderFilter={genderFilter}
            vibes={selectedVibes}
            siblingName={siblingName}
            onNameSelect={handleNameSelect}
            onCurrentNameChange={handleCurrentNameChange}
          />

          {/* Sibling Matcher */}
          <div className="mt-8 max-w-md mx-auto">
            <SiblingMatcher
              siblingName={siblingName}
              onSiblingChange={setSiblingName}
            />
          </div>

          {/* Stats */}
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-muted">
            <div className="flex items-center gap-1.5">
              <Heart className="w-4 h-4 text-green-500" />
              <span>{likedNames.length} liked</span>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
