"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ArrowRight, Search, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NameCard, NameCardSkeleton } from "@/components/features/name-card";
import { FiltersSheet, defaultFilters, applyNameFilters, countActiveFilters, type NameFilters } from "@/components/features/filters-sheet";
import { FavoritesDrawer } from "@/components/features/favorites-drawer";
import { getAllNames, searchNames, type NameData } from "@/lib/names-data";
import { getLikedNames, recordSwipe, getSwipeStatus, removeSwipedName } from "@/lib/swipe-preferences";

type Step = "lastname" | "main";

const PAGE_SIZE = 24;

export default function Home() {
  const [step, setStep] = useState<Step>("lastname");
  const [lastName, setLastName] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  // Search & filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<NameFilters>(defaultFilters);
  const [page, setPage] = useState(1);

  // Name preview state
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [favoritesKey, setFavoritesKey] = useState(0);

  // Load saved data from localStorage on mount
  useEffect(() => {
    const savedLastName = localStorage.getItem("namesy-lastname");
    if (savedLastName) {
      setLastName(savedLastName);
      setStep("main");
    }
    const savedFirstName = localStorage.getItem("namesy-firstname");
    if (savedFirstName) {
      setFirstName(savedFirstName);
    }
    const savedMiddleName = localStorage.getItem("namesy-middlename");
    if (savedMiddleName) {
      setMiddleName(savedMiddleName);
    }
    setIsLoaded(true);
  }, []);

  // Save first name when it changes
  useEffect(() => {
    if (firstName) {
      localStorage.setItem("namesy-firstname", firstName);
    }
  }, [firstName]);

  // Filter and paginate names
  const { displayedNames, totalCount } = useMemo(() => {
    let results: NameData[];

    if (searchQuery.trim()) {
      results = searchNames(searchQuery, {
        gender: filters.gender === "all" ? undefined : filters.gender,
      });
    } else {
      results = getAllNames();
      if (filters.gender !== "all") {
        results = results.filter((n) => n.gender === filters.gender);
      }
    }

    results = applyNameFilters(results, filters);

    return {
      totalCount: results.length,
      displayedNames: results.slice(0, page * PAGE_SIZE),
    };
  }, [searchQuery, filters, page]);

  // Reset page when filters change
  useEffect(() => {
    setPage(1);
  }, [searchQuery, filters]);

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

  // Handle favorite toggle
  const handleFavoriteToggle = (name: NameData) => {
    const status = getSwipeStatus(name.name);
    if (status === "like" || status === "superlike") {
      const liked = getLikedNames();
      const found = liked.find((n) => n.name.toLowerCase() === name.name.toLowerCase());
      if (found) removeSwipedName(found.id);
    } else {
      recordSwipe(name.name, "like", name.origins, name.meanings);
    }
    setFavoritesKey((k) => k + 1);
  };

  // Check if a name is favorited
  const isFavorite = (name: string) => {
    const status = getSwipeStatus(name);
    return status === "like" || status === "superlike";
  };

  // Handle selecting a name from favorites
  const handleSelectName = (name: string) => {
    setFirstName(name);
  };

  // Get favorites count
  const favoritesCount = useMemo(() => {
    return getLikedNames().length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoritesKey]);

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

      {/* Main: Name discovery */}
      {step === "main" && (
        <>
          {/* Search & Filters - Sticky */}
          <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border">
            <div className="max-w-4xl mx-auto px-4 py-4">
              {/* Search Row */}
              <div className="flex gap-3 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                  <input
                    type="text"
                    placeholder="Search names, meanings, origins..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-10 py-3 bg-card border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-secondary"
                    >
                      <X className="w-4 h-4 text-muted" />
                    </button>
                  )}
                </div>
                <FiltersSheet filters={filters} onChange={setFilters} />
              </div>

              {/* Gender Quick Filters */}
              <div className="flex gap-2 mt-3">
                {[
                  { value: "all", label: "All" },
                  { value: "F", label: "Girls" },
                  { value: "M", label: "Boys" },
                ].map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setFilters((f) => ({ ...f, gender: opt.value as "all" | "M" | "F" }))}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      filters.gender === opt.value
                        ? "bg-foreground text-background"
                        : "bg-secondary/50 text-foreground hover:bg-secondary"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Names Grid */}
          <main className="max-w-4xl mx-auto px-4 py-6 pb-32">
            {/* Results count */}
            <p className="text-sm text-muted mb-4">
              Showing <span className="font-medium text-foreground">{displayedNames.length}</span> of{" "}
              <span className="font-medium text-foreground">{totalCount}</span> names
              {countActiveFilters(filters) > 0 && (
                <span className="ml-1">
                  with {countActiveFilters(filters)} filter{countActiveFilters(filters) > 1 ? "s" : ""}
                </span>
              )}
            </p>

            {/* Grid */}
            {displayedNames.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedNames.map((name) => (
                  <NameCard
                    key={name.id}
                    name={name.name}
                    gender={name.gender}
                    origin={name.origins[0]}
                    meaning={name.meanings[0]}
                    rank={name.currentRank > 0 ? name.currentRank : undefined}
                    trend={name.trend}
                    syllables={name.syllables}
                    href={`/name/${name.name.toLowerCase()}`}
                    isFavorite={isFavorite(name.name)}
                    onFavoriteToggle={() => handleFavoriteToggle(name)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search className="w-12 h-12 text-muted/30 mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">No names found</h3>
                <p className="text-sm text-muted">Try adjusting your search or filters</p>
              </div>
            )}

            {/* Load More */}
            {displayedNames.length < totalCount && (
              <div className="text-center mt-8">
                <Button variant="secondary" onClick={() => setPage((p) => p + 1)}>
                  Load More Names
                </Button>
              </div>
            )}
          </main>

          {/* Sticky Bottom Bar */}
          <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 z-30">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
              {/* Favorites */}
              {favoritesCount > 0 ? (
                <FavoritesDrawer onSelectName={handleSelectName} refreshKey={favoritesKey} />
              ) : (
                <div className="flex items-center gap-2 px-4 py-2.5 text-muted">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">No favorites yet</span>
                </div>
              )}

              {/* Name Preview */}
              <div className="flex-1 text-right">
                <p className="text-lg font-heading font-medium text-foreground truncate">
                  {firstName || "___"} {middleName ? `${middleName} ` : ""}{lastName}
                </p>
                <button
                  onClick={() => setStep("lastname")}
                  className="text-xs text-muted hover:text-foreground transition-colors"
                >
                  Change last name
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
