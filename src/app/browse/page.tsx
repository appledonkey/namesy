"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heading, Text, Label, Italic } from "@/components/ui/typography";
import { NavBar } from "@/components/ui/navbar";
import { TabBar } from "@/components/ui/tab-bar";
import { NameCard, NameCardSkeleton } from "@/components/features/name-card";

type Gender = "all" | "M" | "F" | "N";

interface NameResult {
  id: string;
  name: string;
  gender: "M" | "F" | "N";
  origins: string[];
  meanings: string[];
  currentRank: number;
  trend: "rising" | "falling" | "stable";
  syllables: number;
}

export default function BrowsePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState<Gender>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [names, setNames] = useState<NameResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  // Track previous filter values to detect changes and reset page
  const prevFiltersRef = useRef({ searchQuery, selectedGender });
  const pageRef = useRef(page);
  pageRef.current = page;

  // Fetch names function
  const fetchNames = useCallback(async (pageNum: number, append: boolean) => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams({
        limit: "24",
        page: pageNum.toString(),
        ...(searchQuery && { q: searchQuery }),
        ...(selectedGender !== "all" && { gender: selectedGender }),
      });

      const res = await fetch(`/api/names?${params}`);
      const data = await res.json();

      if (append) {
        setNames((prev) => [...prev, ...(data.names || [])]);
      } else {
        setNames(data.names || []);
      }
      setTotal(data.total || 0);
    } catch (error) {
      console.error("Failed to fetch names:", error);
    }
    setIsLoading(false);
  }, [searchQuery, selectedGender]);

  // Fetch when filters change (always reset to page 1)
  useEffect(() => {
    const filtersChanged =
      prevFiltersRef.current.searchQuery !== searchQuery ||
      prevFiltersRef.current.selectedGender !== selectedGender;

    prevFiltersRef.current = { searchQuery, selectedGender };

    // Debounce search
    const timer = setTimeout(() => {
      if (filtersChanged) {
        setPage(1);
      }
      fetchNames(filtersChanged ? 1 : pageRef.current, false);
    }, searchQuery ? 300 : 0);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, selectedGender]);

  // Fetch when page changes (for "load more")
  useEffect(() => {
    if (page > 1) {
      fetchNames(page, true);
    }
  }, [page, fetchNames]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(name)) {
        next.delete(name);
      } else {
        next.add(name);
      }
      return next;
    });
  };

  const handleLoadMore = () => {
    setPage((p) => p + 1);
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <NavBar />
      <TabBar />

      {/* Header */}
      <div className="pt-8 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Label>Explore</Label>
          <Heading as="h1" size="3xl" className="mt-2 mb-4">
            Browse <Italic>Names</Italic>
          </Heading>
          <Text size="lg" muted className="max-w-2xl">
            Discover names with detailed origins, meanings, and popularity trends.
            Find the perfect name for your little one.
          </Text>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="sticky top-[57px] sm:top-[65px] z-30 bg-background/80 backdrop-blur-sm border-b border-border py-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
              <Input
                placeholder="Search names, meanings, origins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Filter Toggle (Mobile) */}
            <Button
              variant="secondary"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>

            {/* Gender Filter (Desktop) */}
            <div className="hidden md:flex items-center gap-2">
              {(["all", "F", "M"] as const).map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGender(g)}
                  className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedGender === g
                      ? "bg-foreground text-background"
                      : "bg-secondary/50 text-foreground hover:bg-secondary"
                    }
                  `}
                >
                  {g === "all" ? "All" : g === "F" ? "Girls" : "Boys"}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-border md:hidden">
              <Text size="sm" muted className="mb-2">Gender</Text>
              <div className="flex flex-wrap gap-2">
                {(["all", "F", "M"] as const).map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                      ${selectedGender === g
                        ? "bg-foreground text-background"
                        : "bg-secondary/50 text-foreground hover:bg-secondary"
                      }
                    `}
                  >
                    {g === "all" ? "All" : g === "F" ? "Girls" : "Boys"}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-8">
            <Text muted>
              Showing <span className="text-foreground font-medium">{names.length}</span> of{" "}
              <span className="text-foreground font-medium">{total}</span> names
              {searchQuery && (
                <> matching &quot;<span className="text-foreground font-medium">{searchQuery}</span>&quot;</>
              )}
            </Text>
          </div>

          {/* Loading State */}
          {isLoading && names.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className={i % 3 === 1 ? "md:translate-y-8" : ""}>
                  <NameCardSkeleton />
                </div>
              ))}
            </div>
          )}

          {/* Name Grid - Staggered Layout */}
          {!isLoading || names.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {names.map((nameData, index) => (
                <div
                  key={nameData.id}
                  className={index % 3 === 1 ? "md:translate-y-8" : ""}
                >
                  <NameCard
                    name={nameData.name}
                    gender={nameData.gender}
                    origin={nameData.origins[0] || "Unknown"}
                    meaning={nameData.meanings[0] || ""}
                    rank={nameData.currentRank}
                    trend={nameData.trend}
                    syllables={nameData.syllables}
                    href={`/name/${nameData.name.toLowerCase()}`}
                    isFavorite={favorites.has(nameData.name)}
                    onFavoriteToggle={() => toggleFavorite(nameData.name)}
                  />
                </div>
              ))}
            </div>
          ) : null}

          {/* Empty State */}
          {!isLoading && names.length === 0 && (
            <div className="text-center py-16">
              <Heading as="h3" size="md" className="mb-2">
                No names found
              </Heading>
              <Text muted>
                Try adjusting your search or filters to find more names.
              </Text>
            </div>
          )}

          {/* Load More */}
          {names.length > 0 && names.length < total && (
            <div className="mt-12 text-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleLoadMore}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Load More Names"}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
