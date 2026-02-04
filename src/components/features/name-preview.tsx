"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
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
}

const nameVariants = {
  initial: { opacity: 0, y: 16, scale: 0.96, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, scale: 0.97, filter: "blur(4px)" },
};

const initialsVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
};

export function NamePreview({
  cardFirstName,
  customFirstName,
  middleName,
  surname,
  onFirstNameChange,
  onMiddleNameChange,
  onSurnameChange,
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
    <motion.div
      key={cardFirstName}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-center mb-3 sm:mb-6"
    >
      {/* Full name with inline editable names */}
      <motion.div
        variants={nameVariants}
        transition={{ type: "spring", stiffness: 380, damping: 28, mass: 0.8 }}
        className="flex items-center justify-center gap-1.5 text-lg sm:text-xl md:text-2xl font-heading text-foreground tracking-wide mb-2 sm:mb-3 whitespace-nowrap"
      >
        <span className="relative inline-block flex-shrink-0">
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
            maxLength={50}
            className="absolute inset-0 w-full bg-transparent border-b border-dashed border-muted/50 text-center outline-none focus:border-accent placeholder:text-foreground"
          />
        </span>
        {middleName && (
          <span className="relative inline-flex items-center flex-shrink-0">
            <span className="invisible whitespace-pre px-0.5" aria-hidden="true">
              {middleName}__
            </span>
            <input
              type="text"
              value={middleName}
              onChange={(e) => onMiddleNameChange(e.target.value || undefined)}
              maxLength={50}
              className="absolute inset-y-0 left-0 right-5 bg-transparent border-b border-dashed border-accent/50 text-center outline-none focus:border-accent"
            />
            <button
              onClick={() => onMiddleNameChange(undefined)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-muted/60 hover:text-foreground transition-colors"
              aria-label="Clear middle name"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </span>
        )}
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
      </motion.div>

      {/* Initials pill */}
      <motion.div
        variants={initialsVariants}
        transition={{ type: "spring", stiffness: 300, damping: 24, delay: 0.06 }}
        className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-secondary/50 rounded-full"
      >
        <span className="text-sm sm:text-base md:text-lg font-medium tracking-[0.25em] sm:tracking-[0.3em] text-foreground/80 uppercase">
          {initials}
        </span>
      </motion.div>

      {/* Warning pills */}
      {warnings.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-1.5 mt-2"
        >
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
        </motion.div>
      )}
    </motion.div>
  );
}
