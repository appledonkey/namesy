"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Used for font selector
import { Type, ChevronDown } from "lucide-react";
import { Text } from "@/components/ui/typography";

type FontStyle = "playfair" | "inter" | "script";

const fontStyles: { id: FontStyle; label: string; fontVar: string; className: string }[] = [
  { id: "playfair", label: "Serif", fontVar: "var(--font-playfair)", className: "font-semibold" },
  { id: "inter", label: "Sans", fontVar: "var(--font-inter)", className: "font-medium" },
  { id: "script", label: "Script", fontVar: "var(--font-meow-script)", className: "" },
];

interface LiveNamePreviewProps {
  firstName: string;
  middleName: string;
  lastName: string;
}

/**
 * LiveNamePreview - Two-line name display with first+middle on top, last name below
 */
export function LiveNamePreview({
  firstName,
  middleName,
  lastName,
}: LiveNamePreviewProps) {
  const [selectedFont, setSelectedFont] = useState<FontStyle>("playfair");
  const [fontExpanded, setFontExpanded] = useState(false);

  // Split into first+middle vs last name
  const firstMiddle = [firstName, middleName].filter((p) => p.trim()).join(" ");
  const lastNameTrimmed = lastName.trim();
  const hasFirstMiddle = firstMiddle.length > 0;
  const hasLastName = lastNameTrimmed.length > 0;
  const hasAnyName = hasFirstMiddle || hasLastName;

  const currentStyle = fontStyles.find((f) => f.id === selectedFont) || fontStyles[0];

  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Name Display - Split into two lines */}
      <div className="min-h-24 sm:min-h-28 md:min-h-32 flex items-center justify-center py-3 sm:py-2">
        {hasAnyName ? (
          <div className="text-center">
            {/* First + Middle Name */}
            {hasFirstMiddle && (
              <h1
                style={{ fontFamily: currentStyle.fontVar }}
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground leading-tight ${currentStyle.className}`}
              >
                {firstMiddle}
              </h1>
            )}
            {/* Last Name - slightly smaller, muted */}
            {hasLastName && (
              <p
                style={{ fontFamily: currentStyle.fontVar }}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground/70 leading-tight mt-1 ${currentStyle.className}`}
              >
                {lastNameTrimmed}
              </p>
            )}
          </div>
        ) : (
          <p
            style={{ fontFamily: currentStyle.fontVar }}
            className={`text-2xl sm:text-3xl md:text-4xl text-muted/40 ${currentStyle.className}`}
          >
            Your name here...
          </p>
        )}
      </div>

      {/* Font Selector - Collapsible on mobile */}
      <div>
        {/* Mobile: Collapsible with selected font indicator */}
        <div className="sm:hidden">
          <button
            onClick={() => setFontExpanded(!fontExpanded)}
            className="w-full flex items-center justify-center gap-2 py-2 text-muted touch-target tap-highlight"
          >
            <Type className="w-4 h-4" />
            <Text size="sm" muted>
              {currentStyle.label} font
            </Text>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${fontExpanded ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence initial={false}>
            {fontExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-4 gap-2 px-2 pb-2">
                  {fontStyles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => {
                        setSelectedFont(style.id);
                        setFontExpanded(false);
                      }}
                      style={{ fontFamily: style.fontVar }}
                      className={`px-3 py-2 text-xs rounded-full transition-all duration-200
                        touch-target tap-highlight touch-feedback ${style.className} ${
                        selectedFont === style.id
                          ? "bg-primary text-foreground font-semibold"
                          : "bg-card text-muted border border-border active:bg-secondary/50"
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop: Always visible */}
        <div className="hidden sm:flex flex-wrap justify-center gap-2">
          {fontStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setSelectedFont(style.id)}
              style={{ fontFamily: style.fontVar }}
              className={`px-4 py-2.5 text-sm rounded-full transition-all duration-200
                touch-target tap-highlight touch-feedback ${style.className} ${
                selectedFont === style.id
                  ? "bg-primary text-foreground font-semibold"
                  : "bg-card text-muted border border-border hover:border-primary hover:text-foreground active:bg-secondary/50"
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
