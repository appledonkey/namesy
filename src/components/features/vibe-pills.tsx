"use client";

import { type NameVibe } from "@/lib/names-data";

interface VibePillsProps {
  selectedVibes: NameVibe[];
  onChange: (vibes: NameVibe[]) => void;
}

const VIBES: { id: NameVibe; label: string }[] = [
  { id: "classic", label: "Classic" },
  { id: "modern", label: "Modern" },
  { id: "nature", label: "Nature" },
  { id: "strong", label: "Strong" },
  { id: "gentle", label: "Gentle" },
  { id: "unique", label: "Unique" },
];

/**
 * VibePills - Clean toggle button filters for name vibes
 */
export function VibePills({ selectedVibes, onChange }: VibePillsProps) {
  const toggleVibe = (vibe: NameVibe) => {
    if (selectedVibes.includes(vibe)) {
      onChange(selectedVibes.filter((v) => v !== vibe));
    } else {
      onChange([...selectedVibes, vibe]);
    }
  };

  const clearAll = () => {
    onChange([]);
  };

  const allSelected = selectedVibes.length === 0;

  return (
    <div className="w-full">
      <p className="text-xs text-muted font-heading uppercase tracking-wider mb-3">
        Filter by style
      </p>
      <div className="flex flex-wrap gap-2">
        {/* All button */}
        <button
          onClick={clearAll}
          className={`px-4 py-2 rounded-lg font-heading text-sm border transition-all duration-200 ${
            allSelected
              ? "bg-foreground text-background border-foreground"
              : "bg-transparent text-muted border-border hover:border-foreground hover:text-foreground"
          }`}
        >
          All
        </button>

        {/* Vibe toggles */}
        {VIBES.map((vibe) => {
          const isSelected = selectedVibes.includes(vibe.id);
          return (
            <button
              key={vibe.id}
              onClick={() => toggleVibe(vibe.id)}
              className={`px-4 py-2 rounded-lg font-heading text-sm border transition-all duration-200 ${
                isSelected
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {vibe.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
