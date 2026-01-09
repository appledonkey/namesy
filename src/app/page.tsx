"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LivePreview } from "@/components/features/live-preview";
import { GenderFilter } from "@/components/features/gender-filter";
import { NameCardStack } from "@/components/features/name-card-stack";
import { NameDetails } from "@/components/features/name-details";
import { SwipeListPanel } from "@/components/features/swipe-list-panel";
import { getPopularNames, type NameData } from "@/lib/names-data";
import type { SwipeAction } from "@/lib/swipe-preferences";

type Step = "lastname" | "main";
type GenderOption = "all" | "M" | "F";

export default function Home() {
  const [step, setStep] = useState<Step>("lastname");
  const [lastName, setLastName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Main step state
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [firstNameLocked, setFirstNameLocked] = useState(false);
  const [middleNameLocked, setMiddleNameLocked] = useState(false);
  const [gender, setGender] = useState<GenderOption>("all");
  const [savedNames, setSavedNames] = useState<Set<string>>(new Set());
  const [currentSwipeName, setCurrentSwipeName] = useState<NameData | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [swipeRefreshKey, setSwipeRefreshKey] = useState(0);

  // Get filtered names for swiper
  const swiperNames = useMemo(() => {
    const genderFilter = gender === "all" ? undefined : gender;
    return getPopularNames(500, genderFilter);
  }, [gender]);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedLastName = localStorage.getItem("namesy-lastname");
    if (savedLastName) {
      setLastName(savedLastName);
      setStep("main");
    }
    // Load saved names
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

  // Handle swipe actions
  const handleSwipeAction = (name: NameData, action: SwipeAction) => {
    if (action === "like" || action === "superlike") {
      // Fill first name if not locked
      if (!firstNameLocked) {
        setFirstName(name.name);
      }
      // Save to favorites
      const newSaved = new Set(savedNames);
      newSaved.add(name.id);
      setSavedNames(newSaved);
      localStorage.setItem("namesy-saved-names", JSON.stringify([...newSaved]));
    }
    setCurrentSwipeName(null);
    setShowDetails(false);
    // Trigger refresh of swipe list panel
    setSwipeRefreshKey((k) => k + 1);
  };

  // Handle showing details
  const handleShowDetails = (name: NameData) => {
    setCurrentSwipeName(name);
    setShowDetails(true);
  };

  // Handle selecting a name (tap on card)
  const handleSelectName = (name: string) => {
    if (!firstNameLocked) {
      setFirstName(name);
    }
  };

  // Handle saving current name from details
  const handleSaveFromDetails = () => {
    if (!currentSwipeName) return;
    const newSaved = new Set(savedNames);
    if (newSaved.has(currentSwipeName.id)) {
      newSaved.delete(currentSwipeName.id);
    } else {
      newSaved.add(currentSwipeName.id);
    }
    setSavedNames(newSaved);
    localStorage.setItem("namesy-saved-names", JSON.stringify([...newSaved]));
  };

  // Handle changing last name
  const handleChangeLastName = () => {
    setStep("lastname");
  };

  // Toggle lock states
  const toggleFirstNameLock = () => setFirstNameLocked(!firstNameLocked);
  const toggleMiddleNameLock = () => setMiddleNameLocked(!middleNameLocked);

  // Random name handlers
  const handleRandomFirstName = () => {
    if (swiperNames.length > 0) {
      const randomIndex = Math.floor(Math.random() * swiperNames.length);
      setFirstName(swiperNames[randomIndex].name);
    }
  };

  const handleRandomMiddleName = () => {
    if (swiperNames.length > 0) {
      const randomIndex = Math.floor(Math.random() * swiperNames.length);
      setMiddleName(swiperNames[randomIndex].name);
    }
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
                What's your last name?
              </h1>
              <p className="text-muted text-base sm:text-lg">
                We'll find first names that sound great with it.
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
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          {/* Live Preview */}
          <LivePreview
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
            firstNameLocked={firstNameLocked}
            middleNameLocked={middleNameLocked}
            onFirstNameChange={setFirstName}
            onMiddleNameChange={setMiddleName}
            onFirstNameLockToggle={toggleFirstNameLock}
            onMiddleNameLockToggle={toggleMiddleNameLock}
            onRandomFirstName={handleRandomFirstName}
            onRandomMiddleName={handleRandomMiddleName}
          />

          {/* Gender Filter */}
          <div className="mb-4">
            <GenderFilter value={gender} onChange={setGender} />
          </div>

          {/* Swiper */}
          <div className="mb-4">
            <NameCardStack
              names={swiperNames}
              onSwipeAction={handleSwipeAction}
              onDetails={handleShowDetails}
              onSelect={handleSelectName}
            />
          </div>

          {/* Swipe History Panel */}
          <div className="mb-4">
            <SwipeListPanel
              onSelectName={handleSelectName}
              refreshKey={swipeRefreshKey}
            />
          </div>

          {/* Details panel (shown when info is tapped) */}
          {showDetails && currentSwipeName && (
            <div className="mb-4">
              <NameDetails
                name={currentSwipeName}
                isSaved={savedNames.has(currentSwipeName.id)}
                onSave={handleSaveFromDetails}
              />
            </div>
          )}

          {/* Change last name link */}
          <div className="text-center mt-4">
            <button
              onClick={handleChangeLastName}
              className="text-muted hover:text-foreground text-sm underline underline-offset-4 transition-colors"
            >
              Change last name ({lastName})
            </button>
          </div>
        </main>
      )}
    </div>
  );
}
