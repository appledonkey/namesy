"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Step = "lastname" | "main";

export default function Home() {
  const [step, setStep] = useState<Step>("lastname");
  const [lastName, setLastName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Name preview state
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedLastName = localStorage.getItem("namesy-lastname");
    if (savedLastName) {
      setLastName(savedLastName);
      setStep("main");
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

      {/* Main */}
      {step === "main" && (
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Name Preview */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <p className="text-sm text-muted mb-4 text-center">Your baby's name</p>
            <div className="flex items-center justify-center gap-3">
              {/* First Name */}
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First"
                className="text-4xl font-heading font-semibold text-foreground tracking-tight bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary focus:outline-none transition-colors text-center w-48 placeholder:text-muted/40"
              />
              {/* Middle Name */}
              <input
                type="text"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
                placeholder="Middle"
                className="text-4xl font-heading font-semibold text-foreground tracking-tight bg-transparent border-b-2 border-transparent hover:border-border focus:border-primary focus:outline-none transition-colors text-center w-48 placeholder:text-muted/40"
              />
              {/* Last Name (static) */}
              <span className="text-4xl font-heading font-semibold text-foreground tracking-tight">
                {lastName}
              </span>
            </div>
            <div className="text-center mt-6">
              <button
                onClick={() => setStep("lastname")}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                Change last name
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}
