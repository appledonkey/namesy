"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, X } from "lucide-react";

interface NameWarningsProps {
  initials: string;
  isBadAcronym: boolean;
  hasName: boolean;
}

/**
 * NameWarnings - Fixed overlay warning for bad initials
 * Appears below nav bar, doesn't affect page layout
 */
export function NameWarnings({
  initials,
  isBadAcronym,
  hasName,
}: NameWarningsProps) {
  const [dismissed, setDismissed] = useState<string | null>(null);

  const warningKey = isBadAcronym ? `acronym-${initials}` : "";

  // Reset dismissed state when initials change
  useEffect(() => {
    if (warningKey && dismissed !== warningKey) {
      setDismissed(null);
    }
  }, [warningKey, dismissed]);

  const shouldShow = hasName && isBadAcronym && dismissed !== warningKey;

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
            <span className="text-sm flex-1 font-medium">
              Initials &quot;{initials}&quot; may cause teasing
            </span>
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
