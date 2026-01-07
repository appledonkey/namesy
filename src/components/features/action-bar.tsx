"use client";

import { useState } from "react";
import { Heart, Copy, Share2, RotateCcw, Check } from "lucide-react";
import { copyToClipboard, shareName } from "@/lib/share";

interface ActionBarProps {
  fullName: string;
  hasName: boolean;
  isFavorited: boolean;
  onToggleFavorite: () => void;
  onClear: () => void;
  favoritesCount: number;
}

/**
 * ActionBar - Clear action buttons for save, copy, share, clear
 */
export function ActionBar({
  fullName,
  hasName,
  isFavorited,
  onToggleFavorite,
  onClear,
  favoritesCount,
}: ActionBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(fullName);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => shareName(fullName);

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-3">
      {/* Save/Favorite - always show label */}
      <button
        onClick={onToggleFavorite}
        disabled={!hasName}
        className={`
          flex items-center justify-center gap-1.5 px-4 py-3 rounded-full text-sm font-medium transition-all duration-200
          touch-target tap-highlight touch-feedback
          ${!hasName ? "opacity-40 cursor-not-allowed" : ""}
          ${isFavorited
            ? "bg-rose-50 text-rose-600 border border-rose-200"
            : "bg-card text-foreground border border-border hover:border-primary active:bg-secondary/50"
          }
        `}
      >
        <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
        <span className="hidden xs:inline">{isFavorited ? "Saved" : "Save"}</span>
        {favoritesCount > 0 && !isFavorited && (
          <span className="px-1.5 py-0.5 bg-secondary rounded-full text-xs">
            {favoritesCount}
          </span>
        )}
      </button>

      {/* Copy - icon only on mobile */}
      <button
        onClick={handleCopy}
        disabled={!hasName}
        title="Copy name"
        className={`
          flex items-center justify-center gap-1.5 p-3 sm:px-4 sm:py-3 rounded-full text-sm font-medium transition-all duration-200
          bg-card text-foreground border border-border hover:border-primary
          touch-target tap-highlight touch-feedback active:bg-secondary/50
          ${!hasName ? "opacity-40 cursor-not-allowed" : ""}
        `}
      >
        {copied ? (
          <Check className="w-5 h-5 text-success" />
        ) : (
          <Copy className="w-5 h-5" />
        )}
        <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
      </button>

      {/* Share - icon only on mobile */}
      <button
        onClick={handleShare}
        disabled={!hasName}
        title="Share name"
        className={`
          flex items-center justify-center gap-1.5 p-3 sm:px-4 sm:py-3 rounded-full text-sm font-medium transition-all duration-200
          bg-card text-foreground border border-border hover:border-primary
          touch-target tap-highlight touch-feedback active:bg-secondary/50
          ${!hasName ? "opacity-40 cursor-not-allowed" : ""}
        `}
      >
        <Share2 className="w-5 h-5" />
        <span className="hidden sm:inline">Share</span>
      </button>

      {/* Clear - icon only on mobile */}
      {hasName && (
        <button
          onClick={onClear}
          title="Clear inputs"
          className="flex items-center justify-center gap-1.5 p-3 sm:px-4 sm:py-3 rounded-full text-sm font-medium transition-all duration-200
            bg-card text-muted border border-border hover:text-foreground hover:border-border-strong
            touch-target tap-highlight touch-feedback active:bg-secondary/50"
        >
          <RotateCcw className="w-5 h-5" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      )}
    </div>
  );
}
