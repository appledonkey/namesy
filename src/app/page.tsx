"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import { Text } from "@/components/ui/typography";
import { LiveNamePreview } from "@/components/features/live-name-preview";
import { NameWarnings } from "@/components/features/name-warnings";
import { InlineMetrics } from "@/components/features/inline-metrics";
import { NameInputs, InputField } from "@/components/features/name-inputs";
import { ControlBar } from "@/components/features/control-bar";
import { NameBrowser } from "@/components/features/name-browser";
import { NicknamePreview } from "@/components/features/nickname-preview";
import { ActionBar } from "@/components/features/action-bar";
import { FloatingActionButton } from "@/components/features/floating-action-button";
import { FavoritesPanel } from "@/components/features/favorites-panel";
import { ComparePanel } from "@/components/features/compare-panel";
import { NameRadarChart, createRadarData } from "@/components/features/radar-chart";
import { PullToRandomize } from "@/components/features/pull-to-randomize";
import { ChevronDown } from "lucide-react";
import { analyzeFullName, calculateRadarScores } from "@/lib/analysis";
import { getRandomName } from "@/lib/names-data";
import { useDebounce } from "@/hooks/use-debounce";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
  isFavorited,
  clearFavorites,
  FavoriteName,
} from "@/lib/favorites";

// Common last names for randomization
const COMMON_LAST_NAMES = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis",
  "Rodriguez", "Martinez", "Wilson", "Anderson", "Taylor", "Thomas", "Moore",
  "Jackson", "Martin", "Lee", "Thompson", "White", "Harris", "Clark", "Lewis",
];

export default function Home() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [selectedGender, setSelectedGender] = useState<"F" | "M" | "all">("all");
  const [focusedField, setFocusedField] = useState<InputField>(null);
  const [favorites, setFavorites] = useState<FavoriteName[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [radarExpanded, setRadarExpanded] = useState(false);

  // Load favorites from localStorage on mount
  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  // Derived state: check if current name is favorited (computed, not stored)
  const isFav = useMemo(() => {
    return isFavorited(firstName, middleName, lastName);
  }, [firstName, middleName, lastName, favorites]);

  // Debounce name values for expensive computations (radar chart)
  const debouncedFirst = useDebounce(firstName, 150);
  const debouncedMiddle = useDebounce(middleName, 150);
  const debouncedLast = useDebounce(lastName, 150);

  // Compute analysis - basic analysis is instant, radar scores use debounced values
  const analysis = useMemo(() => {
    const nameAnalysis = analyzeFullName(firstName, middleName, lastName);
    const radarScores = calculateRadarScores(debouncedFirst, debouncedMiddle, debouncedLast);
    return { ...nameAnalysis, radarScores };
  }, [firstName, middleName, lastName, debouncedFirst, debouncedMiddle, debouncedLast]);

  const radarData = createRadarData(analysis.radarScores);

  // Smart name filling based on focused field
  const handleSelectName = (name: string) => {
    switch (focusedField) {
      case "middle":
        setMiddleName(name);
        break;
      case "last":
        setLastName(name);
        break;
      case "first":
      default:
        setFirstName(name);
        break;
    }
  };

  const handleClear = useCallback(() => {
    setFirstName("");
    setMiddleName("");
    setLastName("");
  }, []);

  const handleRandomize = useCallback(() => {
    const gender = selectedGender === "all" ? (Math.random() > 0.5 ? "M" : "F") : selectedGender;
    const first = getRandomName(gender);
    const middle = getRandomName(gender);

    setFirstName(first.name);
    setMiddleName(middle.name);

    // Only set last name if empty - preserve user's entered last name
    if (!lastName) {
      const lastIndex = Math.floor(Math.random() * COMMON_LAST_NAMES.length);
      setLastName(COMMON_LAST_NAMES[lastIndex]);
    }
  }, [selectedGender, lastName]);

  // Favorites handlers
  const handleToggleFavorite = useCallback(() => {
    if (!analysis.hasName) return;

    if (isFav) {
      const currentFavorites = getFavorites();
      const toRemove = currentFavorites.find(
        (f) => f.fullName === analysis.fullName
      );
      if (toRemove) {
        removeFavorite(toRemove.id);
      }
    } else {
      addFavorite(firstName, middleName, lastName, analysis.initials);
    }

    // Refresh favorites list - isFav will be recomputed automatically
    setFavorites(getFavorites());
  }, [firstName, middleName, lastName, analysis.initials, analysis.fullName, analysis.hasName, isFav]);

  // Keyboard shortcuts - must be after handler definitions
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;

      switch (e.key.toLowerCase()) {
        case "r":
          handleRandomize();
          break;
        case "s":
          if (analysis.hasName) handleToggleFavorite();
          break;
        case "c":
          if (e.shiftKey && favorites.length >= 2) setShowCompare(true);
          break;
        case "escape":
          setShowCompare(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleRandomize, handleToggleFavorite, analysis.hasName, favorites.length]);

  const handleSelectFavorite = useCallback((favorite: FavoriteName) => {
    setFirstName(favorite.firstName);
    setMiddleName(favorite.middleName);
    setLastName(favorite.lastName);
  }, []);

  const handleRemoveFavorite = useCallback((id: string) => {
    removeFavorite(id);
    setFavorites(getFavorites());
  }, []);

  const handleClearAllFavorites = useCallback(() => {
    clearFavorites();
    setFavorites([]);
  }, []);

  return (
    <div className="min-h-screen bg-background safe-x">
      {/* Compact Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-40 safe-top">
        <div className="max-w-4xl mx-auto px-3 sm:px-4 py-3 flex items-center justify-between">
          <div className="font-heading text-xl font-semibold">
            namesy
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-muted">
            <span><kbd className="px-1.5 py-0.5 bg-secondary/50 rounded">R</kbd> random</span>
            <span><kbd className="px-1.5 py-0.5 bg-secondary/50 rounded">S</kbd> save</span>
          </div>
        </div>
      </nav>

      {/* Mobile Pull-to-Randomize */}
      <PullToRandomize onRandomize={handleRandomize} />

      {/* Fixed Warning Overlay - doesn't affect layout */}
      <NameWarnings
        initials={analysis.initials}
        isBadAcronym={analysis.isBadAcronym}
        hasRhyme={analysis.hasRhyme}
        flowScore={analysis.flowScore}
        firstName={firstName}
        lastName={lastName}
        hasName={analysis.hasName}
      />

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-3 sm:px-4 pt-4 pb-24 sm:pb-6 sm:pt-6 space-y-3 sm:space-y-5 md:space-y-6">
        {/* Hero: Name Preview + Metrics */}
        <section className="text-center space-y-1 sm:space-y-2">
          <LiveNamePreview
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
          />
          <InlineMetrics
            initials={analysis.initials}
            isBadAcronym={analysis.isBadAcronym}
            totalSyllables={analysis.totalSyllables}
            flowScore={analysis.flowScore}
            hasName={analysis.hasName}
          />
          <NicknamePreview firstName={firstName} />
        </section>

        {/* Name Inputs */}
        <section>
          <NameInputs
            firstName={firstName}
            middleName={middleName}
            lastName={lastName}
            onFirstNameChange={setFirstName}
            onMiddleNameChange={setMiddleName}
            onLastNameChange={setLastName}
            focusedField={focusedField}
            onFocusChange={setFocusedField}
          />
        </section>

        {/* Controls: Gender + Random */}
        <section>
          <ControlBar
            selectedGender={selectedGender}
            onGenderChange={setSelectedGender}
            onRandomize={handleRandomize}
          />
        </section>

        {/* Name Suggestions */}
        <section>
          <NameBrowser
            onSelectName={handleSelectName}
            selectedGender={selectedGender}
          />
        </section>

        {/* Action Buttons - Hidden on mobile (FAB replaces it) */}
        <section className="hidden sm:block">
          <ActionBar
            fullName={analysis.fullName}
            hasName={analysis.hasName}
            isFavorited={isFav}
            onToggleFavorite={handleToggleFavorite}
            onClear={handleClear}
            favoritesCount={favorites.length}
          />
        </section>

        {/* Favorites (only shown if there are favorites) */}
        {favorites.length > 0 && (
          <section>
            <FavoritesPanel
              favorites={favorites}
              onSelectFavorite={handleSelectFavorite}
              onRemoveFavorite={handleRemoveFavorite}
              onClearAll={handleClearAllFavorites}
              onCompare={() => setShowCompare(true)}
            />
          </section>
        )}

        {/* Name Analysis Radar Chart - Collapsible on mobile */}
        <section>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {/* Clickable header on mobile, static on desktop */}
            <button
              onClick={() => setRadarExpanded(!radarExpanded)}
              aria-expanded={radarExpanded}
              aria-label={radarExpanded ? "Collapse name analysis" : "Expand name analysis"}
              className="w-full p-4 sm:p-6 sm:pb-3 flex items-center justify-between sm:justify-center touch-target tap-highlight"
            >
              <Text muted className="text-sm">
                {analysis.hasName ? "8-Axis Name Analysis" : "Enter a name to see analysis"}
              </Text>
              <ChevronDown
                className={`w-5 h-5 text-muted sm:hidden transition-transform duration-200 ${radarExpanded ? "rotate-180" : ""}`}
              />
            </button>

            {/* Mobile: Collapsible chart using CSS grid for smooth animation */}
            <div
              className="sm:hidden grid transition-[grid-template-rows] duration-200 ease-out"
              style={{ gridTemplateRows: radarExpanded ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className={`px-4 pb-4 transition-opacity duration-300 ${analysis.hasName ? "opacity-100" : "opacity-40"}`}>
                  <NameRadarChart
                    data={radarData}
                    name={firstName || "Name"}
                  />
                </div>
              </div>
            </div>

            {/* Desktop: Always visible chart */}
            <div className={`hidden sm:block px-6 pb-6 transition-opacity duration-300 ${analysis.hasName ? "opacity-100" : "opacity-40"}`}>
              <NameRadarChart
                data={radarData}
                name={firstName || "Name"}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Compare Panel Modal */}
      <ComparePanel
        favorites={favorites}
        isOpen={showCompare}
        onClose={() => setShowCompare(false)}
        onSelectWinner={handleSelectFavorite}
      />

      {/* Mobile Floating Action Button */}
      <FloatingActionButton
        fullName={analysis.fullName}
        hasName={analysis.hasName}
        isFavorited={isFav}
        onToggleFavorite={handleToggleFavorite}
        onClear={handleClear}
        onRandomize={handleRandomize}
        favoritesCount={favorites.length}
      />
    </div>
  );
}
