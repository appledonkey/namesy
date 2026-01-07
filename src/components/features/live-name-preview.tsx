"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Type, ChevronDown } from "lucide-react";
import { Text } from "@/components/ui/typography";

type FontStyle = "playfair" | "inter" | "script" | "lora";

const fontStyles: { id: FontStyle; label: string; fontVar: string; className: string }[] = [
  { id: "playfair", label: "Serif", fontVar: "var(--font-playfair)", className: "font-semibold" },
  { id: "inter", label: "Sans", fontVar: "var(--font-inter)", className: "font-medium" },
  { id: "script", label: "Script", fontVar: "var(--font-dancing-script)", className: "" },
  { id: "lora", label: "Classic", fontVar: "var(--font-lora)", className: "font-medium italic" },
];

interface LiveNamePreviewProps {
  firstName: string;
  middleName: string;
  lastName: string;
}

/**
 * LiveNamePreview - Compact, centered display of the full name with font options
 */
export function LiveNamePreview({
  firstName,
  middleName,
  lastName,
}: LiveNamePreviewProps) {
  const [selectedFont, setSelectedFont] = useState<FontStyle>("playfair");
  const [fontExpanded, setFontExpanded] = useState(false);

  const parts = [firstName, middleName, lastName].filter((p) => p.trim());
  const fullName = parts.join(" ");
  const hasName = fullName.length > 0;

  const currentStyle = fontStyles.find((f) => f.id === selectedFont) || fontStyles[0];

  return (
    <div className="space-y-2 sm:space-y-3">
      {/* Name Display */}
      <div className="min-h-12 sm:min-h-16 md:min-h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {hasName ? (
            <motion.h1
              key={`${fullName}-${selectedFont}`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              style={{ fontFamily: currentStyle.fontVar }}
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground text-center px-1 sm:px-4 break-words max-w-full leading-tight ${currentStyle.className}`}
            >
              {fullName}
            </motion.h1>
          ) : (
            <motion.p
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ fontFamily: currentStyle.fontVar }}
              className={`text-lg sm:text-xl md:text-2xl text-muted/40 ${currentStyle.className}`}
            >
              Your name here...
            </motion.p>
          )}
        </AnimatePresence>
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
                          ? "bg-primary text-white"
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
                  ? "bg-primary text-white"
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
