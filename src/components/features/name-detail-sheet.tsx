"use client";

import { Heart, Copy, Share2, Check } from "lucide-react";
import { useState } from "react";
import { BottomSheet } from "./bottom-sheet";
import { Text } from "@/components/ui/typography";
import { haptics } from "@/lib/haptics";
import { copyToClipboard, shareName } from "@/lib/share";

interface NameDetailSheetProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  meaning?: string;
  origin?: string;
  isFavorited?: boolean;
  onToggleFavorite?: () => void;
  onSelect?: () => void;
}

/**
 * NameDetailSheet - Bottom sheet showing name details on mobile
 * Shows meaning, origin, and quick actions
 */
export function NameDetailSheet({
  isOpen,
  onClose,
  name,
  meaning,
  origin,
  isFavorited = false,
  onToggleFavorite,
  onSelect,
}: NameDetailSheetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(name);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = () => shareName(name);

  const handleSelect = () => {
    haptics.select();
    onSelect?.();
    onClose();
  };

  const handleFavorite = () => {
    haptics.save();
    onToggleFavorite?.();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        {/* Name display */}
        <div className="text-center pt-2">
          <h2 className="font-heading text-3xl font-semibold text-foreground">
            {name}
          </h2>
          {origin && (
            <Text muted className="mt-1">
              {origin} origin
            </Text>
          )}
        </div>

        {/* Meaning */}
        {meaning && (
          <div className="bg-secondary/30 rounded-2xl p-4">
            <Text size="sm" muted className="mb-1">Meaning</Text>
            <Text>{meaning}</Text>
          </div>
        )}

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={handleFavorite}
            className={`
              flex flex-col items-center gap-2 p-4 rounded-2xl transition-colors
              ${isFavorited
                ? "bg-rose-500/10 text-rose-500"
                : "bg-secondary/30 text-foreground"
              }
            `}
          >
            <Heart className={`w-6 h-6 ${isFavorited ? "fill-current" : ""}`} />
            <span className="text-xs font-medium">
              {isFavorited ? "Saved" : "Save"}
            </span>
          </button>

          <button
            onClick={handleCopy}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-secondary/30 text-foreground transition-colors"
          >
            {copied ? (
              <Check className="w-6 h-6 text-success" />
            ) : (
              <Copy className="w-6 h-6" />
            )}
            <span className="text-xs font-medium">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>

          <button
            onClick={handleShare}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-secondary/30 text-foreground transition-colors"
          >
            <Share2 className="w-6 h-6" />
            <span className="text-xs font-medium">Share</span>
          </button>
        </div>

        {/* Use this name button */}
        {onSelect && (
          <button
            onClick={handleSelect}
            className="w-full py-4 rounded-2xl bg-primary text-white font-medium text-center tap-highlight touch-feedback"
          >
            Use This Name
          </button>
        )}
      </div>
    </BottomSheet>
  );
}
