"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TinderStack } from "@/components/features/tinder-stack";

type Step = "lastname" | "gender" | "main";
type GenderFilter = "boy" | "girl" | "all";

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
                  placeholder:text-muted/50 text-foreground
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
                  <span className="text-3xl">👦</span>
                </div>
                <span className="font-medium text-foreground">Boy</span>
              </button>

              {/* Girl */}
              <button
                onClick={() => handleGenderSelect("girl")}
                className="group flex flex-col items-center gap-3 p-6 bg-card border-2 border-border rounded-2xl
                  hover:border-pink-400 hover:bg-pink-50 transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center
                  group-hover:bg-pink-200 group-hover:scale-110 transition-all duration-200">
                  <span className="text-3xl">👧</span>
                </div>
                <span className="font-medium text-foreground">Girl</span>
              </button>

              {/* Don't Know */}
              <button
                onClick={() => handleGenderSelect("all")}
                className="group flex flex-col items-center gap-3 p-6 bg-card border-2 border-border rounded-2xl
                  hover:border-purple-400 hover:bg-purple-50 transition-all duration-200"
              >
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center
                  group-hover:bg-purple-100 group-hover:scale-110 transition-all duration-200">
                  <span className="text-3xl">✨</span>
                </div>
                <span className="font-medium text-foreground text-sm">Don&apos;t know yet</span>
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
        <main className="max-w-4xl mx-auto px-6 py-8">
          {/* Name Preview */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border p-6 mb-8"
          >
            <p className="text-sm text-muted mb-3 text-center">Previewing</p>
            <div className="flex items-center justify-center gap-4">
              {/* First Name - Shows current card name */}
              <motion.span
                key={currentPreviewName}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-3xl font-heading font-semibold tracking-tight text-center min-w-40
                  ${currentPreviewName ? "text-foreground" : "text-muted/40"}`}
              >
                {currentPreviewName || "First"}
              </motion.span>
              {/* Middle Name */}
              <input
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Middle"
                className="text-3xl font-heading font-semibold text-foreground tracking-tight bg-transparent
                  border-b-2 border-transparent hover:border-border focus:border-primary focus:outline-none
                  transition-colors text-center w-40 placeholder:text-muted/40"
              />
              {/* Last Name (static) */}
              <span className="text-3xl font-heading font-semibold text-foreground tracking-tight">
                {lastName}
              </span>
            </div>

            {/* Saved name indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4"
            >
              {savedFirstName ? (
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
                  {justSaved && " ✓"}
                </motion.p>
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
            onNameSelect={handleNameSelect}
            onCurrentNameChange={handleCurrentNameChange}
          />
        </main>
      )}
    </div>
  );
}
