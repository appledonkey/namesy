"use client";

import { Dices } from "lucide-react";
import { Button } from "@/components/ui/button";

type Gender = "F" | "M" | "all";

interface ControlBarProps {
  selectedGender: Gender;
  onGenderChange: (gender: Gender) => void;
  onRandomize: () => void;
}

/**
 * ControlBar - Gender toggle and random button in a compact row
 */
export function ControlBar({
  selectedGender,
  onGenderChange,
  onRandomize,
}: ControlBarProps) {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {/* Gender Toggle */}
      <div className="flex items-center gap-0.5 sm:gap-1 bg-card border border-border rounded-full p-0.5 sm:p-1">
        {(["F", "M", "all"] as const).map((g) => (
          <button
            key={g}
            onClick={() => onGenderChange(g)}
            className={`
              px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200
              tap-highlight touch-feedback
              ${selectedGender === g
                ? "bg-primary text-white"
                : "text-muted hover:text-foreground active:bg-secondary/70"
              }
            `}
          >
            {g === "F" ? "Girls" : g === "M" ? "Boys" : "All"}
          </button>
        ))}
      </div>

      {/* Random Button */}
      <Button
        variant="primary"
        size="sm"
        onClick={onRandomize}
        className="gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm tap-highlight touch-feedback"
      >
        <Dices className="w-4 h-4" />
        Random
      </Button>
    </div>
  );
}
