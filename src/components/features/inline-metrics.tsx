"use client";

import { memo } from "react";
import { CheckCircle, AlertTriangle } from "lucide-react";

interface InlineMetricsProps {
  initials: string;
  isBadAcronym: boolean;
  totalSyllables: number;
  flowScore: number;
  hasName: boolean;
}

/**
 * InlineMetrics - Compact single-line display of key name metrics
 * Memoized since it re-renders frequently as users type.
 */
export const InlineMetrics = memo(function InlineMetrics({
  initials,
  isBadAcronym,
  totalSyllables,
  flowScore,
  hasName,
}: InlineMetricsProps) {
  if (!hasName) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
      {/* Initials */}
      <div className="flex items-center gap-1">
        <span className="font-medium text-foreground">{initials}</span>
        {isBadAcronym ? (
          <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-error" />
        ) : (
          <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-success" />
        )}
      </div>

      <span className="text-border-strong">·</span>

      {/* Syllables */}
      <span className="text-muted">{totalSyllables} syl</span>

      <span className="text-border-strong">·</span>

      {/* Flow Score */}
      <div className="flex items-center gap-1">
        <span className={`font-medium ${
          flowScore >= 70 ? "text-success" :
          flowScore >= 50 ? "text-warning" : "text-error"
        }`}>
          {flowScore}%
        </span>
        <span className="text-muted">flow</span>
      </div>
    </div>
  );
});
