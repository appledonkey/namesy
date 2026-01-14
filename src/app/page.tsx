"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, AlertTriangle, Heart, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getLikedNames } from "@/lib/swipe-preferences";
import { getAllOrigins } from "@/lib/names-data";
import { Button } from "@/components/ui/button";
import { TinderStack } from "@/components/features/tinder-stack";
import { DailyDiscovery } from "@/components/features/daily-discovery";
import { NameFilters, defaultFilters, type NameFiltersState } from "@/components/features/name-filters";
import { NamesManager } from "@/components/features/names-manager";

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
  const [middleName, setMiddleName] = useState("");
  const [showMiddleDropdown, setShowMiddleDropdown] = useState(false);
  const [likedNamesKey, setLikedNamesKey] = useState(0);

  // Filter states
  const [filters, setFilters] = useState<NameFiltersState>(defaultFilters);
  const [filteredCount, setFilteredCount] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showNamesManager, setShowNamesManager] = useState(false);

  // Get available origins for filter
  const availableOrigins = useMemo(() => getAllOrigins(), []);

  // Get liked names for middle name dropdown
  const likedNames = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = likedNamesKey; // Trigger re-compute when key changes
    return getLikedNames();
  }, [likedNamesKey]);

  // Compute initials for bad initials check
  const previewInitials = useMemo(() => {
    return getInitials(currentPreviewName || "", middleName, lastName);
  }, [currentPreviewName, middleName, lastName]);

  const hasBadPreviewInitials = useMemo(() => {
    return isBadInitials(currentPreviewName || "", middleName, lastName);
  }, [currentPreviewName, middleName, lastName]);

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
  const handleNameSelect = () => {
    setLikedNamesKey(k => k + 1); // Refresh liked names dropdown
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
        <main className="px-4 py-6">
          {/* Centered content column */}
          <div className="max-w-sm mx-auto">
            {/* Daily Discovery */}
            <DailyDiscovery
              onAddToFavorites={() => setLikedNamesKey((k) => k + 1)}
            />

            {/* Top bar: Filters + Liked count */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl transition-colors ${
                  showFilters || filters !== defaultFilters
                    ? "bg-primary/10 text-primary border border-primary/20"
                    : "bg-secondary hover:bg-secondary/80 text-muted"
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-sm font-heading">Filters</span>
                {filteredCount !== null && (
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                    {filteredCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setShowNamesManager(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secondary hover:bg-secondary/80 text-muted transition-colors"
              >
                <Heart className="w-4 h-4 text-green-500" />
                <span className="text-sm font-heading">{likedNames.length} liked</span>
              </button>
            </div>

            {/* Filters panel */}
            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden mb-6"
                >
                  <NameFilters
                    filters={filters}
                    onChange={setFilters}
                    availableOrigins={availableOrigins}
                  />
                </motion.div>
              )}
            </AnimatePresence>

          {/* Name Preview - Compact */}
          <div className="mb-6">
            {/* Full Name Display */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {/* First Name (from current card) */}
              <motion.span
                key={currentPreviewName}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-2xl sm:text-3xl font-heading font-semibold tracking-tight ${
                  currentPreviewName ? "text-foreground" : "text-muted/40"
                }`}
              >
                {currentPreviewName || "First"}
              </motion.span>

              {/* Middle Name Input */}
              <div className="relative">
                <input
                  type="text"
                  value={middleName}
                  onChange={(e) => setMiddleName(e.target.value)}
                  onFocus={() => setShowMiddleDropdown(true)}
                  placeholder="Middle"
                  autoCapitalize="words"
                  autoComplete="off"
                  className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight text-center
                    bg-transparent border-b-2 border-dashed border-border/50 transition-all w-28 sm:w-32
                    placeholder:text-muted/40 focus:outline-none focus:border-primary
                    hover:border-border text-foreground"
                />
                {likedNames.length > 0 && (
                  <button
                    onClick={() => setShowMiddleDropdown(!showMiddleDropdown)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-muted hover:text-foreground transition-colors"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${showMiddleDropdown ? "rotate-180" : ""}`} />
                  </button>
                )}

                {/* Dropdown */}
                <AnimatePresence>
                  {showMiddleDropdown && likedNames.length > 0 && (
                    <>
                      <div
                        className="fixed inset-0 z-40"
                        onClick={() => setShowMiddleDropdown(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-card border border-border rounded-xl shadow-lg z-50 overflow-hidden"
                      >
                        <div className="max-h-40 overflow-y-auto py-1">
                          {likedNames.map((item) => (
                            <button
                              key={item.id}
                              onClick={() => {
                                setMiddleName(item.name);
                                setShowMiddleDropdown(false);
                              }}
                              className={`w-full px-3 py-2 text-left font-heading text-sm transition-colors ${
                                item.name === middleName
                                  ? "bg-primary/10 text-primary"
                                  : "text-foreground hover:bg-secondary/50"
                              }`}
                            >
                              {item.name}
                            </button>
                          ))}
                        </div>
                        {middleName && (
                          <button
                            onClick={() => {
                              setMiddleName("");
                              setShowMiddleDropdown(false);
                            }}
                            className="w-full px-3 py-2 text-left text-xs font-heading text-muted hover:text-foreground border-t border-border transition-colors"
                          >
                            Clear
                          </button>
                        )}
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>

              {/* Last Name */}
              <span className="text-2xl sm:text-3xl font-heading font-semibold text-foreground tracking-tight">
                {lastName}
              </span>
            </div>

            {/* Initials - only show if problematic */}
            {hasBadPreviewInitials && currentPreviewName && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="flex items-center justify-center gap-1.5 mt-2 text-amber-600"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">
                  Initials {previewInitials} might be awkward
                </span>
              </motion.div>
            )}
          </div>

          {/* Tinder Stack */}
          <TinderStack
            genderFilter={genderFilter}
            filters={filters}
            onNameSelect={handleNameSelect}
            onCurrentNameChange={handleCurrentNameChange}
            onFilteredCountChange={setFilteredCount}
          />
          </div>{/* End centered content column */}

          {/* Names Manager Panel */}
          <NamesManager
            isOpen={showNamesManager}
            onClose={() => setShowNamesManager(false)}
            onListChange={() => setLikedNamesKey((k) => k + 1)}
          />
        </main>
      )}
    </div>
  );
}
