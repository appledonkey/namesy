"use client";

import { motion } from "framer-motion";

interface NamePreviewProps {
  cardFirstName: string;
  customFirstName?: string;
  middleName?: string;
  surname?: string;
  onFirstNameChange: (name: string | undefined) => void;
  onMiddleNameChange: (name: string | undefined) => void;
  onSurnameChange: (name: string | undefined) => void;
}

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

  return (
    <motion.div
      key={cardFirstName}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className="text-center mb-3 sm:mb-6"
    >
      {/* Full name with inline editable names */}
      <div className="flex items-center justify-center gap-1.5 text-lg sm:text-xl md:text-2xl font-heading text-foreground tracking-wide mb-2 sm:mb-3 whitespace-nowrap">
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
        <span className="relative inline-block flex-shrink-0">
          {/* Hidden sizer */}
          <span className="invisible whitespace-pre px-0.5" aria-hidden="true">
            {middleName || "middle"}
          </span>
          {/* Actual input overlaid */}
          <input
            type="text"
            value={middleName || ""}
            onChange={(e) => onMiddleNameChange(e.target.value || undefined)}
            placeholder="middle"
            maxLength={50}
            className="absolute inset-0 w-full bg-transparent border-b border-dashed border-muted/50 text-center outline-none focus:border-accent placeholder:text-muted/40"
          />
        </span>
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

      {/* Initials pill */}
      <div className="inline-flex items-center gap-2 px-3 sm:px-5 py-1.5 sm:py-2 bg-secondary/50 rounded-full">
        <span className="text-sm sm:text-base md:text-lg font-medium tracking-[0.25em] sm:tracking-[0.3em] text-foreground/80 uppercase">
          {initials}
        </span>
      </div>
    </motion.div>
  );
}
