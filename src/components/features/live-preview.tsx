"use client";

import { useMemo } from "react";
import { Text } from "@/components/ui/typography";

interface LivePreviewProps {
  firstName: string;
  middleName: string;
  lastName: string;
  onFirstNameChange: (value: string) => void;
  onMiddleNameChange: (value: string) => void;
}

export function LivePreview({
  firstName,
  middleName,
  lastName,
  onFirstNameChange,
  onMiddleNameChange,
}: LivePreviewProps) {
  const displayName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(" ");

  // Calculate initials
  const initials = useMemo(() => {
    const parts = [firstName, middleName, lastName].filter(Boolean);
    return parts.map((p) => p.charAt(0).toUpperCase()).join("");
  }, [firstName, middleName, lastName]);

  // Calculate font size based on name length to fit on one row
  const nameLength = displayName.length;
  const textSizeClass = useMemo(() => {
    if (nameLength <= 15) return "text-5xl sm:text-6xl md:text-7xl";
    if (nameLength <= 20) return "text-4xl sm:text-5xl md:text-6xl";
    if (nameLength <= 25) return "text-3xl sm:text-4xl md:text-5xl";
    if (nameLength <= 30) return "text-2xl sm:text-3xl md:text-4xl";
    return "text-xl sm:text-2xl md:text-3xl";
  }, [nameLength]);

  return (
    <div className="text-center py-6 sm:py-10">
      {/* Large name preview - fits on one row */}
      <h1
        className={`font-heading font-semibold italic leading-tight text-foreground whitespace-nowrap ${textSizeClass} mb-2`}
      >
        {displayName || "Enter a name"}
      </h1>

      {/* Initials */}
      {initials && (
        <Text size="lg" muted className="mb-6">
          {initials}
        </Text>
      )}

      {/* Name inputs */}
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* First name input */}
        <label className="block">
          <Text size="sm" muted className="mb-1">
            First name
          </Text>
          <input
            type="text"
            value={firstName}
            onChange={(e) => onFirstNameChange(e.target.value)}
            placeholder="First"
            autoCapitalize="words"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            className="w-full text-center text-lg py-3 px-4 bg-card border border-border rounded-xl
              placeholder:text-muted/50 text-foreground
              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
              transition-all duration-200"
          />
        </label>

        {/* Middle name input */}
        <label className="block">
          <Text size="sm" muted className="mb-1">
            Middle (optional)
          </Text>
          <input
            type="text"
            value={middleName}
            onChange={(e) => onMiddleNameChange(e.target.value)}
            placeholder="Middle"
            autoCapitalize="words"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            className="w-full text-center text-lg py-3 px-4 bg-card border border-border rounded-xl
              placeholder:text-muted/50 text-foreground
              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
              transition-all duration-200"
          />
        </label>
      </div>
    </div>
  );
}
