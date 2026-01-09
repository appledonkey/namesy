"use client";

import { useMemo } from "react";
import { Lock, Unlock, Shuffle } from "lucide-react";
import { Text } from "@/components/ui/typography";

interface LivePreviewProps {
  firstName: string;
  middleName: string;
  lastName: string;
  firstNameLocked: boolean;
  middleNameLocked: boolean;
  onFirstNameChange: (value: string) => void;
  onMiddleNameChange: (value: string) => void;
  onFirstNameLockToggle: () => void;
  onMiddleNameLockToggle: () => void;
  onRandomFirstName: () => void;
  onRandomMiddleName: () => void;
}

export function LivePreview({
  firstName,
  middleName,
  lastName,
  firstNameLocked,
  middleNameLocked,
  onFirstNameChange,
  onMiddleNameChange,
  onFirstNameLockToggle,
  onMiddleNameLockToggle,
  onRandomFirstName,
  onRandomMiddleName,
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
    <div className="text-center py-6 sm:py-8">
      {/* Large name preview - fits on one row */}
      <h1
        className={`font-heading font-semibold italic leading-tight text-foreground whitespace-nowrap ${textSizeClass} mb-1`}
      >
        {displayName || "Enter a name"}
      </h1>

      {/* Initials */}
      {initials && (
        <Text size="lg" muted className="mb-6">
          {initials}
        </Text>
      )}

      {/* Name inputs with lock toggles */}
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {/* First name input */}
        <div className="space-y-1">
          <Text size="sm" muted>
            First name
          </Text>
          <div className="relative">
            <input
              type="text"
              value={firstName}
              onChange={(e) => onFirstNameChange(e.target.value)}
              placeholder="First"
              disabled={firstNameLocked}
              autoCapitalize="words"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              className={`w-full text-center text-lg py-3 px-10 bg-card border rounded-xl
                placeholder:text-muted/50 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200
                ${firstNameLocked ? "border-primary bg-primary/5" : "border-border"}
                ${firstNameLocked ? "cursor-not-allowed" : ""}
              `}
            />
            <button
              onClick={onRandomFirstName}
              disabled={firstNameLocked}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors
                ${firstNameLocked
                  ? "text-muted/30 cursor-not-allowed"
                  : "text-muted hover:text-primary"
                }
              `}
              title="Surprise me! Pick a random first name"
            >
              <Shuffle className="w-5 h-5" />
            </button>
            <button
              onClick={onFirstNameLockToggle}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors
                ${firstNameLocked
                  ? "text-primary hover:text-primary/80"
                  : "text-muted hover:text-foreground"
                }
              `}
              title={firstNameLocked ? "Unlock - Allow swiping to change this name" : "Lock - Keep this name while swiping"}
            >
              {firstNameLocked ? (
                <Lock className="w-5 h-5" />
              ) : (
                <Unlock className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Middle name input */}
        <div className="space-y-1">
          <Text size="sm" muted>
            Middle (optional)
          </Text>
          <div className="relative">
            <input
              type="text"
              value={middleName}
              onChange={(e) => onMiddleNameChange(e.target.value)}
              placeholder="Middle"
              disabled={middleNameLocked}
              autoCapitalize="words"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              className={`w-full text-center text-lg py-3 px-10 bg-card border rounded-xl
                placeholder:text-muted/50 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200
                ${middleNameLocked ? "border-primary bg-primary/5" : "border-border"}
                ${middleNameLocked ? "cursor-not-allowed" : ""}
              `}
            />
            <button
              onClick={onRandomMiddleName}
              disabled={middleNameLocked}
              className={`absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors
                ${middleNameLocked
                  ? "text-muted/30 cursor-not-allowed"
                  : "text-muted hover:text-primary"
                }
              `}
              title="Surprise me! Pick a random middle name"
            >
              <Shuffle className="w-5 h-5" />
            </button>
            <button
              onClick={onMiddleNameLockToggle}
              className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md transition-colors
                ${middleNameLocked
                  ? "text-primary hover:text-primary/80"
                  : "text-muted hover:text-foreground"
                }
              `}
              title={middleNameLocked ? "Unlock - Allow changes to middle name" : "Lock - Keep this middle name"}
            >
              {middleNameLocked ? (
                <Lock className="w-5 h-5" />
              ) : (
                <Unlock className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
