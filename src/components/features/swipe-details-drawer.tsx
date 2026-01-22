"use client";

import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { X, Heart, Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { NameData, NameVibe } from "@/lib/names-data";
import { generateVibes } from "@/lib/names-data";
import { haptics } from "@/lib/haptics";

interface SwipeDetailsDrawerProps {
  name: NameData | null;
  isOpen: boolean;
  onClose: () => void;
  onLike: () => void;
  onSuperLike: () => void;
  lastName?: string | null;
}

const vibeColors: Record<NameVibe, string> = {
  classic: "bg-amber-100 text-amber-700",
  modern: "bg-sky-100 text-sky-700",
  nature: "bg-emerald-100 text-emerald-700",
  strong: "bg-red-100 text-red-700",
  gentle: "bg-pink-100 text-pink-700",
  unique: "bg-purple-100 text-purple-700",
};

export function SwipeDetailsDrawer({
  name,
  isOpen,
  onClose,
  onLike,
  onSuperLike,
  lastName,
}: SwipeDetailsDrawerProps) {
  const y = useMotionValue(0);
  const backdropOpacity = useTransform(y, [0, 300], [1, 0]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      haptics.tap();
      onClose();
    }
  };

  if (!name) return null;

  const vibes = generateVibes(name);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ opacity: backdropOpacity }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0.05, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
            style={{ y }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-xl max-h-[85vh] overflow-hidden"
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-border" />
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary-dark transition-colors"
            >
              <X className="w-5 h-5 text-muted" />
            </button>

            {/* Content */}
            <div className="px-6 pb-8 overflow-y-auto max-h-[calc(85vh-60px)]">
              {/* Name */}
              <div className="text-center mb-6">
                <h2 className="font-heading text-4xl sm:text-5xl font-semibold text-foreground">
                  {name.name}
                </h2>
                {name.phonetic && (
                  <p className="text-muted mt-1">/{name.phonetic}/</p>
                )}
              </div>

              {/* Full name preview */}
              {lastName && (
                <div className="text-center mb-6 py-3 px-4 bg-secondary/50 rounded-xl">
                  <p className="text-sm text-muted mb-1">Full name preview</p>
                  <p className="font-heading text-xl text-foreground">
                    {name.name} {lastName}
                  </p>
                </div>
              )}

              {/* Vibes */}
              {vibes.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {vibes.map((vibe) => (
                    <span
                      key={vibe}
                      className={`px-3 py-1.5 rounded-full text-sm font-heading font-medium ${vibeColors[vibe]}`}
                    >
                      {vibe.charAt(0).toUpperCase() + vibe.slice(1)}
                    </span>
                  ))}
                </div>
              )}

              {/* Meanings */}
              {name.meanings.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-heading uppercase tracking-wider text-muted mb-2">
                    Meaning
                  </h3>
                  <p className="text-foreground text-lg italic">
                    {name.meanings.join(", ")}
                  </p>
                </div>
              )}

              {/* Origins */}
              {name.origins.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-heading uppercase tracking-wider text-muted mb-2">
                    Origin
                  </h3>
                  <p className="text-foreground">{name.origins.join(", ")}</p>
                </div>
              )}

              {/* Nicknames */}
              {name.nicknames.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-heading uppercase tracking-wider text-muted mb-2">
                    Nicknames
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {name.nicknames.map((nick) => (
                      <span
                        key={nick}
                        className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground font-heading"
                      >
                        {nick}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Alternate spellings */}
              {name.alternateSpellings.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-heading uppercase tracking-wider text-muted mb-2">
                    Alternate Spellings
                  </h3>
                  <p className="text-foreground">{name.alternateSpellings.join(", ")}</p>
                </div>
              )}

              {/* Stats row */}
              <div className="flex items-center justify-center gap-6 mb-8 py-4 border-y border-border">
                <div className="text-center">
                  <p className="text-2xl font-heading font-semibold text-foreground">
                    {name.currentRank > 0 ? `#${name.currentRank}` : "Rare"}
                  </p>
                  <p className="text-xs text-muted">Popularity</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-heading font-semibold text-foreground">
                    {name.syllables}
                  </p>
                  <p className="text-xs text-muted">Syllables</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-heading font-semibold text-foreground capitalize">
                    {name.trend}
                  </p>
                  <p className="text-xs text-muted">Trend</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mb-4">
                <button
                  onClick={() => {
                    haptics.save();
                    onLike();
                  }}
                  className="flex-1 py-4 bg-success text-white rounded-xl font-heading font-medium flex items-center justify-center gap-2 hover:bg-success/90 transition-colors"
                >
                  <Heart className="w-5 h-5" />
                  Save
                </button>
                <button
                  onClick={() => {
                    haptics.save();
                    onSuperLike();
                  }}
                  className="py-4 px-6 bg-gradient-to-r from-amber-400 to-amber-500 text-white rounded-xl font-heading font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  <Star className="w-5 h-5 fill-current" />
                </button>
              </div>

              {/* Link to full page */}
              <Link
                href={`/name/${name.normalizedName}`}
                className="flex items-center justify-center gap-2 py-3 text-muted hover:text-foreground transition-colors"
              >
                <span className="text-sm">View full details</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
