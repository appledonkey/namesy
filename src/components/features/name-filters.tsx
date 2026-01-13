"use client";

import { type NameVibe } from "@/lib/names-data";

// Filter types
export type LengthFilter = "any" | "short" | "medium" | "long";
export type PopularityFilter = "any" | "popular" | "uncommon" | "rare";

export interface NameFiltersState {
  vibes: NameVibe[];
  length: LengthFilter;
  popularity: PopularityFilter;
  startingLetter: string | null;
  origins: string[];
}

export const defaultFilters: NameFiltersState = {
  vibes: [],
  length: "any",
  popularity: "any",
  startingLetter: null,
  origins: [],
};

interface NameFiltersProps {
  filters: NameFiltersState;
  onChange: (filters: NameFiltersState) => void;
  availableOrigins: string[];
}

const VIBES: { id: NameVibe; label: string }[] = [
  { id: "classic", label: "Classic" },
  { id: "modern", label: "Modern" },
  { id: "nature", label: "Nature" },
  { id: "strong", label: "Strong" },
  { id: "gentle", label: "Gentle" },
  { id: "unique", label: "Unique" },
];

const LENGTHS: { id: LengthFilter; label: string }[] = [
  { id: "any", label: "Any" },
  { id: "short", label: "Short" },
  { id: "medium", label: "Medium" },
  { id: "long", label: "Long" },
];

const POPULARITY: { id: PopularityFilter; label: string }[] = [
  { id: "any", label: "Any" },
  { id: "popular", label: "Popular" },
  { id: "uncommon", label: "Uncommon" },
  { id: "rare", label: "Rare" },
];

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Common origins to show first
const PRIORITY_ORIGINS = ["Latin", "Greek", "Hebrew", "English", "Germanic", "French", "Celtic", "Spanish", "Italian", "Arabic"];

/**
 * Toggle button component
 */
function ToggleButton({
  selected,
  onClick,
  children,
  small = false,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  small?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`${small ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"} rounded-lg font-heading border transition-all duration-200 ${
        selected
          ? "bg-foreground text-background border-foreground"
          : "bg-transparent text-muted border-border hover:border-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}

/**
 * Filter section header
 */
function FilterLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs text-muted font-heading uppercase tracking-wider mb-2">
      {children}
    </p>
  );
}

/**
 * NameFilters - Comprehensive filter controls for baby names
 */
export function NameFilters({ filters, onChange, availableOrigins }: NameFiltersProps) {
  const updateFilter = <K extends keyof NameFiltersState>(
    key: K,
    value: NameFiltersState[K]
  ) => {
    onChange({ ...filters, [key]: value });
  };

  const toggleVibe = (vibe: NameVibe) => {
    const newVibes = filters.vibes.includes(vibe)
      ? filters.vibes.filter((v) => v !== vibe)
      : [...filters.vibes, vibe];
    updateFilter("vibes", newVibes);
  };

  const toggleOrigin = (origin: string) => {
    const newOrigins = filters.origins.includes(origin)
      ? filters.origins.filter((o) => o !== origin)
      : [...filters.origins, origin];
    updateFilter("origins", newOrigins);
  };

  const clearAllVibes = () => updateFilter("vibes", []);
  const clearAllOrigins = () => updateFilter("origins", []);

  // Sort origins: priority first, then alphabetical
  const sortedOrigins = [...availableOrigins].sort((a, b) => {
    const aIndex = PRIORITY_ORIGINS.indexOf(a);
    const bIndex = PRIORITY_ORIGINS.indexOf(b);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return a.localeCompare(b);
  });

  const hasActiveFilters =
    filters.vibes.length > 0 ||
    filters.length !== "any" ||
    filters.popularity !== "any" ||
    filters.startingLetter !== null ||
    filters.origins.length > 0;

  return (
    <div className="space-y-5">
      {/* Style/Vibes */}
      <div>
        <FilterLabel>Style</FilterLabel>
        <div className="flex flex-wrap gap-2">
          <ToggleButton
            selected={filters.vibes.length === 0}
            onClick={clearAllVibes}
          >
            All
          </ToggleButton>
          {VIBES.map((vibe) => (
            <ToggleButton
              key={vibe.id}
              selected={filters.vibes.includes(vibe.id)}
              onClick={() => toggleVibe(vibe.id)}
            >
              {vibe.label}
            </ToggleButton>
          ))}
        </div>
      </div>

      {/* Length and Popularity row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <FilterLabel>Length</FilterLabel>
          <div className="flex flex-wrap gap-2">
            {LENGTHS.map((len) => (
              <ToggleButton
                key={len.id}
                selected={filters.length === len.id}
                onClick={() => updateFilter("length", len.id)}
                small
              >
                {len.label}
              </ToggleButton>
            ))}
          </div>
        </div>
        <div>
          <FilterLabel>Popularity</FilterLabel>
          <div className="flex flex-wrap gap-2">
            {POPULARITY.map((pop) => (
              <ToggleButton
                key={pop.id}
                selected={filters.popularity === pop.id}
                onClick={() => updateFilter("popularity", pop.id)}
                small
              >
                {pop.label}
              </ToggleButton>
            ))}
          </div>
        </div>
      </div>

      {/* Starting Letter */}
      <div>
        <FilterLabel>Starting Letter</FilterLabel>
        <div className="flex flex-wrap gap-1.5">
          <ToggleButton
            selected={filters.startingLetter === null}
            onClick={() => updateFilter("startingLetter", null)}
            small
          >
            Any
          </ToggleButton>
          {LETTERS.map((letter) => (
            <button
              key={letter}
              onClick={() =>
                updateFilter(
                  "startingLetter",
                  filters.startingLetter === letter ? null : letter
                )
              }
              className={`w-8 h-8 rounded-lg font-heading text-sm border transition-all duration-200 ${
                filters.startingLetter === letter
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Origin */}
      <div>
        <FilterLabel>Origin</FilterLabel>
        <div className="flex flex-wrap gap-2">
          <ToggleButton
            selected={filters.origins.length === 0}
            onClick={clearAllOrigins}
            small
          >
            Any
          </ToggleButton>
          {sortedOrigins.slice(0, 12).map((origin) => (
            <ToggleButton
              key={origin}
              selected={filters.origins.includes(origin)}
              onClick={() => toggleOrigin(origin)}
              small
            >
              {origin}
            </ToggleButton>
          ))}
        </div>
      </div>

      {/* Clear all */}
      {hasActiveFilters && (
        <button
          onClick={() => onChange(defaultFilters)}
          className="text-sm text-muted hover:text-foreground font-heading transition-colors"
        >
          Clear all filters
        </button>
      )}
    </div>
  );
}
