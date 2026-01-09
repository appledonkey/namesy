"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LivePreview } from "@/components/features/live-preview";
import { GenderFilter } from "@/components/features/gender-filter";
import { NameCardRow } from "@/components/features/name-card-row";
import { NameDetails } from "@/components/features/name-details";
import { getPopularNames, type NameData } from "@/lib/names-data";

type Step = "lastname" | "main";
type GenderOption = "all" | "M" | "F";
const NAMES_PER_PAGE = 5;

export default function Home() {
  const [step, setStep] = useState<Step>("lastname");
  const [lastName, setLastName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Main step state
  const [middleName, setMiddleName] = useState("");
  const [gender, setGender] = useState<GenderOption>("all");
  const [page, setPage] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [savedNames, setSavedNames] = useState<Set<string>>(new Set());

  // Get filtered names
  const filteredNames = useMemo(() => {
    const genderFilter = gender === "all" ? undefined : gender;
    return getPopularNames(500, genderFilter);
  }, [gender]);

  // Get current page of names
  const pageNames = useMemo(() => {
    const start = page * NAMES_PER_PAGE;
    return filteredNames.slice(start, start + NAMES_PER_PAGE);
  }, [filteredNames, page]);

  const totalPages = Math.ceil(filteredNames.length / NAMES_PER_PAGE);
  const selectedName = pageNames[selectedIndex] || null;

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

  // Reset selection when page or gender changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [page, gender]);

  // Reset page when gender changes
  useEffect(() => {
    setPage(0);
  }, [gender]);

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

  // Handle saving a name
  const handleSaveName = () => {
    if (!selectedName) return;
    const newSaved = new Set(savedNames);
    if (newSaved.has(selectedName.id)) {
      newSaved.delete(selectedName.id);
    } else {
      newSaved.add(selectedName.id);
    }
    setSavedNames(newSaved);
    localStorage.setItem("namesy-saved-names", JSON.stringify([...newSaved]));
  };

  // Handle changing last name
  const handleChangeLastName = () => {
    setStep("lastname");
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
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          {/* Live Preview */}
          <LivePreview
            firstName={selectedName?.name || ""}
            middleName={middleName}
            lastName={lastName}
            onMiddleNameChange={setMiddleName}
          />

          {/* Gender Filter */}
          <div className="mb-6">
            <GenderFilter value={gender} onChange={setGender} />
          </div>

          {/* Name Cards */}
          <div className="mb-6">
            <NameCardRow
              names={pageNames}
              selectedIndex={selectedIndex}
              onSelect={setSelectedIndex}
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </div>

          {/* Selected Name Details */}
          <NameDetails
            name={selectedName}
            isSaved={selectedName ? savedNames.has(selectedName.id) : false}
            onSave={handleSaveName}
          />

          {/* Change last name link */}
          <div className="text-center mt-8">
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
