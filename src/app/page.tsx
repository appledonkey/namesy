"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type OnboardingStep = "lastname" | "gender" | "discovery";
type Gender = "M" | "F" | "all";

export default function Home() {
  const [step, setStep] = useState<OnboardingStep>("lastname");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState<Gender | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedLastName = localStorage.getItem("namesy-lastname");
    const savedGender = localStorage.getItem("namesy-gender") as Gender | null;

    if (savedLastName) {
      setLastName(savedLastName);
      if (savedGender) {
        setGender(savedGender);
        setStep("discovery");
      } else {
        setStep("gender");
      }
    }
    setIsLoaded(true);
  }, []);

  // Save last name to localStorage
  const handleContinue = () => {
    if (lastName.trim()) {
      localStorage.setItem("namesy-lastname", lastName.trim());
      setStep("gender");
    }
  };

  // Handle Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && lastName.trim()) {
      handleContinue();
    }
  };

  // Save gender and continue to discovery
  const handleGenderSelect = (selectedGender: Gender) => {
    setGender(selectedGender);
    localStorage.setItem("namesy-gender", selectedGender);
    setStep("discovery");
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

      {/* Step 2: Gender Selection */}
      {step === "gender" && (
        <main className="max-w-md mx-auto px-6 py-16 sm:py-24">
          <div className="text-center space-y-8">
            <div className="space-y-3">
              <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground">
                Looking for...
              </h1>
              <p className="text-muted text-base sm:text-lg">
                Names for the {lastName} family
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => handleGenderSelect("M")}
                className="w-full py-5 px-6 bg-card border-2 border-border rounded-xl
                  text-xl font-medium text-foreground
                  hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30
                  focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20
                  transition-all duration-200"
              >
                Boy names
              </button>

              <button
                onClick={() => handleGenderSelect("F")}
                className="w-full py-5 px-6 bg-card border-2 border-border rounded-xl
                  text-xl font-medium text-foreground
                  hover:border-pink-400 hover:bg-pink-50 dark:hover:bg-pink-950/30
                  focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/20
                  transition-all duration-200"
              >
                Girl names
              </button>

              <button
                onClick={() => handleGenderSelect("all")}
                className="w-full py-5 px-6 bg-card border-2 border-border rounded-xl
                  text-xl font-medium text-foreground
                  hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30
                  focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20
                  transition-all duration-200"
              >
                Either
              </button>
            </div>
          </div>
        </main>
      )}

      {/* Step 3: Discovery (placeholder for now) */}
      {step === "discovery" && (
        <main className="max-w-md mx-auto px-6 py-16 sm:py-24">
          <div className="text-center">
            <p className="text-muted">Step 3: Discovery mode coming next...</p>
          </div>
        </main>
      )}
    </div>
  );
}
