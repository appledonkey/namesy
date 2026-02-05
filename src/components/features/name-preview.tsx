"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Pin, PinOff } from "lucide-react";
import { isBadAcronym, getInitials, hasRhyme } from "@/lib/analysis";
import { calcTeasingResistance } from "@/lib/name-analysis";

interface NamePreviewProps {
  cardFirstName: string;
  customFirstName?: string;
  middleName?: string;
  surname?: string;
  onFirstNameChange: (name: string | undefined) => void;
  onMiddleNameChange: (name: string | undefined) => void;
  onSurnameChange: (name: string | undefined) => void;
  lockedNames: { firstName: boolean; middleName: boolean; surname: boolean };
  onToggleLock: (field: "firstName" | "middleName") => void;
}

const partTransition = { duration: 0.15 };

export function NamePreview({
  cardFirstName,
  customFirstName,
  middleName,
  surname,
  onFirstNameChange,
  onMiddleNameChange,
  onSurnameChange,
  lockedNames,
  onToggleLock,
}: NamePreviewProps) {
  // Use custom first name if set, otherwise use card's name
  const displayFirstName = customFirstName || cardFirstName;

  // Build initials
  const initials = [displayFirstName, middleName, surname]
    .filter(Boolean)
    .map((part) => part!.charAt(0).toUpperCase())
    .join(" · ");

  // Compute warnings
  const warnings = useMemo(() => {
    const parts = [displayFirstName, middleName, surname].filter(Boolean) as string[];
    const rawInitials = getInitials(parts);
    const result: string[] = [];

    if (rawInitials.length >= 2 && isBadAcronym(rawInitials)) {
      result.push(`Initials spell "${rawInitials}"`);
    }
    if (parts.length >= 2 && hasRhyme(parts)) {
      result.push("Names rhyme with each other");
    }
    if (displayFirstName && calcTeasingResistance(displayFirstName) < 50) {
      result.push("Name may attract teasing");
    }

    return result;
  }, [displayFirstName, middleName, surname]);

  return (
    <div className="text-center mb-3 sm:mb-6">
      {/* Full name with inline editable names */}
      <div className="flex items-center justify-center gap-1.5 text-lg sm:text-xl md:text-2xl font-heading text-foreground tracking-wide mb-2 sm:mb-3 whitespace-nowrap">
        {/* First name — pin button stays static, input area crossfades */}
        <span className="relative inline-flex items-center flex-shrink-0">
          <button
            onClick={() => onToggleLock("firstName")}
            className={`transition-colors mr-0.5 flex-shrink-0 ${
              lockedNames.firstName ? "text-accent" : "text-muted/30 hover:text-muted/60"
            }`}
            aria-label={lockedNames.firstName ? "Unpin first name" : "Pin first name"}
          >
            {lockedNames.firstName
              ? <Pin className="w-3.5 h-3.5" />
              : <PinOff className="w-3.5 h-3.5" />}
          </button>
          <AnimatePresence mode="popLayout">
            <motion.span
              key={displayFirstName}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={partTransition}
              className="relative inline-block"
            >
              {/* Hidden sizer */}
              <span className="invisible whitespace-pre px-0.5" aria-hidden="true">
                {displayFirstName}
              </span>
              {/* Actual input overlaid */}
              <input
                type="text"
                value={customFirstName ?? ""}
                onChange={(e) => onFirstNameChange(e.target.value || undefined)}
                placeholder={cardFirstName}
                readOnly={lockedNames.firstName}
                maxLength={50}
                className={`absolute inset-0 w-full bg-transparent border-b text-center outline-none focus:border-accent placeholder:text-foreground ${
                  lockedNames.firstName ? "border-solid border-accent/40" : "border-dashed border-muted/50"
                }`}
              />
            </motion.span>
          </AnimatePresence>
        </span>

        {/* Middle name — crossfades on value change */}
        {middleName && (
          <span className="inline-flex items-center flex-shrink-0">
            <button
              onClick={() => onToggleLock("middleName")}
              className={`transition-colors mr-0.5 flex-shrink-0 ${
                lockedNames.middleName ? "text-accent" : "text-muted/30 hover:text-muted/60"
              }`}
              aria-label={lockedNames.middleName ? "Unpin middle name" : "Pin middle name"}
            >
              {lockedNames.middleName
                ? <Pin className="w-3.5 h-3.5" />
                : <PinOff className="w-3.5 h-3.5" />}
            </button>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={middleName}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={partTransition}
                className="relative inline-block"
              >
                <span className="invisible whitespace-pre px-0.5" aria-hidden="true">
                  {middleName}
                </span>
                <input
                  type="text"
                  value={middleName}
                  onChange={(e) => onMiddleNameChange(e.target.value || undefined)}
                  readOnly={lockedNames.middleName}
                  maxLength={50}
                  className={`absolute inset-0 w-full bg-transparent border-b text-center outline-none focus:border-accent ${
                    lockedNames.middleName ? "border-solid border-accent/40" : "border-dashed border-accent/50"
                  }`}
                />
              </motion.span>
            </AnimatePresence>
          </span>
        )}

        {/* Surname — static, no animation wrapper */}
        <span className="relative inline-block flex-shrink-0">
          {/* Hidden sizer */}
          <span className="invisible whitespace-pre px-0.5" aria-hidden="true">
            {surname || "last"}
          </span>
          {/* Actual input overlaid */}
          <input
            type="text"
            value={surname || ""}
            onChange={(e) => onSurnameChange(e.target.value || undefined)}
            placeholder="last"
            maxLength={50}
            className="absolute inset-0 w-full bg-transparent border-b border-dashed border-muted/50 text-center outline-none focus:border-accent placeholder:text-muted/40"
          />
        </span>
      </div>

      {/* Initials pill — container stays, text inside crossfades */}
      <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-secondary/50 rounded-full">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={initials}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={partTransition}
            className="text-sm sm:text-base md:text-lg font-medium tracking-[0.25em] sm:tracking-[0.3em] text-foreground/80 uppercase"
          >
            {initials}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Warning pills — render statically, recalculate via useMemo */}
      {warnings.length > 0 && (
        <div className="flex flex-col items-center gap-1.5 mt-2">
          {warnings.map((w) => (
            <span
              key={w}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-warning/15 text-warning border border-warning/30 rounded-full text-xs sm:text-sm"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              {w}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
