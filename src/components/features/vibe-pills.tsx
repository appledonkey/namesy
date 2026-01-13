"use client";

import { motion } from "framer-motion";
import { type NameVibe } from "@/lib/names-data";

interface VibePillsProps {
  selectedVibes: NameVibe[];
  onChange: (vibes: NameVibe[]) => void;
}

const VIBES: { id: NameVibe; label: string; emoji: string }[] = [
  { id: "classic", label: "Classic", emoji: "🏛️" },
  { id: "modern", label: "Modern", emoji: "✨" },
  { id: "nature", label: "Nature", emoji: "🌿" },
  { id: "strong", label: "Strong", emoji: "💪" },
  { id: "gentle", label: "Gentle", emoji: "🕊️" },
  { id: "unique", label: "Unique", emoji: "💎" },
];

/**
 * VibePills - Horizontal scrolling filter bar for name vibes
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

  return (
    <div className="w-full overflow-hidden">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide px-1">
        {/* All pill */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={clearAll}
          className={`flex-shrink-0 px-4 py-2 rounded-full font-heading text-sm transition-all ${
            selectedVibes.length === 0
              ? "bg-primary text-white shadow-md"
              : "bg-secondary text-muted hover:bg-secondary/80"
          }`}
        >
          All
        </motion.button>

        {/* Vibe pills */}
        {VIBES.map((vibe) => {
          const isSelected = selectedVibes.includes(vibe.id);
          return (
            <motion.button
              key={vibe.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleVibe(vibe.id)}
              className={`flex-shrink-0 px-4 py-2 rounded-full font-heading text-sm transition-all flex items-center gap-1.5 ${
                isSelected
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              <span className="text-base">{vibe.emoji}</span>
              <span>{vibe.label}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Active filter indicator */}
      {selectedVibes.length > 0 && (
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-muted font-heading mt-1 px-1"
        >
          Showing {selectedVibes.map((v) => VIBES.find((x) => x.id === v)?.label).join(", ")} names
        </motion.p>
      )}
    </div>
  );
}
