"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

interface NameWarningsProps {
  initials: string;
  isBadAcronym: boolean;
  hasRhyme: boolean;
  flowScore: number;
  firstName: string;
  lastName: string;
  hasName: boolean;
}

/**
 * NameWarnings - Fixed overlay warning for name issues
 * Appears below nav bar, doesn't affect page layout
 */
export function NameWarnings({
  initials,
  isBadAcronym,
  hasRhyme,
  flowScore,
  firstName,
  lastName,
  hasName,
}: NameWarningsProps) {
  const [dismissed, setDismissed] = useState<string | null>(null);

  // Build warning message based on most severe issue
  let warningKey = "";
  let warningMessage = "";

  if (isBadAcronym && initials) {
    warningKey = `acronym-${initials}`;
    warningMessage = `Initials "${initials}" may cause teasing`;
  } else if (hasRhyme && firstName && lastName) {
    warningKey = `rhyme-${firstName}-${lastName}`;
    warningMessage = `"${firstName}" and "${lastName}" rhyme together`;
  } else if (flowScore < 40 && hasName) {
    warningKey = "flow-low";
    warningMessage = "This name may be tricky to say";
  }

  // Reset dismissed state when warning changes
  useEffect(() => {
    if (warningKey && dismissed !== warningKey) {
      setDismissed(null);
    }
  }, [warningKey, dismissed]);

  const shouldShow = hasName && warningMessage && dismissed !== warningKey;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          key={warningKey}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed top-[60px] left-1/2 -translate-x-1/2 z-[35] max-w-sm w-[calc(100%-24px)]"
        >
          <div className="bg-error/95 backdrop-blur-sm text-white rounded-full px-4 py-2.5 shadow-lg flex items-center gap-3">
            <AlertTriangle className="w-4 h-4 flex-shrink-0" />
            <span className="text-sm flex-1 font-medium">{warningMessage}</span>
            <button
              onClick={() => setDismissed(warningKey)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss warning"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
