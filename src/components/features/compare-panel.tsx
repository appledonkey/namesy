"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Scale, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Text, Heading } from "@/components/ui/typography";
import { FavoriteName } from "@/lib/favorites";
import { analyzeFullName, calculateRadarScores } from "@/lib/analysis";

interface ComparePanelProps {
  favorites: FavoriteName[];
  isOpen: boolean;
  onClose: () => void;
  onSelectWinner: (favorite: FavoriteName) => void;
}

/**
 * ComparePanel - Side-by-side comparison of favorite name combinations
 */
export function ComparePanel({
  favorites,
  isOpen,
  onClose,
  onSelectWinner,
}: ComparePanelProps) {
  const [selected, setSelected] = useState<string[]>([]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSelection = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) {
        return prev.filter((s) => s !== id);
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const selectedFavorites = favorites.filter((f) => selected.includes(f.id));

  const getAnalysis = (fav: FavoriteName) => {
    const analysis = analyzeFullName(fav.firstName, fav.middleName, fav.lastName);
    const scores = calculateRadarScores(fav.firstName, fav.middleName, fav.lastName);
    const avgScore = Math.round(
      Object.values(scores).reduce((a, b) => a + b, 0) / Object.keys(scores).length
    );
    return { ...analysis, avgScore, scores };
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute inset-0 sm:inset-4 md:inset-8 bg-card sm:rounded-3xl shadow-[var(--shadow-lg)] overflow-hidden safe-y"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border sticky top-0 bg-card z-10">
            <div className="flex items-center gap-2">
              <Scale className="w-5 h-5 text-primary" />
              <Heading as="h2" size="md">Compare Names</Heading>
            </div>
            <button
              onClick={onClose}
              className="p-3 text-muted hover:text-foreground transition-colors touch-target tap-highlight touch-feedback"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6 overflow-auto max-h-[calc(100dvh-5rem)] sm:max-h-[calc(100vh-12rem)]">
            {/* Selection List */}
            {selected.length < 2 && (
              <div className="mb-6">
                <Text muted className="mb-3">
                  Select {2 - selected.length} more name{2 - selected.length > 1 ? "s" : ""} to compare (up to 3)
                </Text>
                <div className="flex flex-wrap gap-2">
                  {favorites.map((fav) => (
                    <button
                      key={fav.id}
                      onClick={() => toggleSelection(fav.id)}
                      className={`
                        px-4 py-3 rounded-full text-sm font-medium transition-all duration-200
                        touch-target tap-highlight touch-feedback
                        ${selected.includes(fav.id)
                          ? "bg-primary text-background"
                          : "bg-secondary/50 text-foreground hover:bg-secondary active:bg-secondary/70"
                        }
                      `}
                    >
                      {fav.fullName}
                      {selected.includes(fav.id) && (
                        <Check className="w-4 h-4 ml-1.5 inline" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Comparison Grid */}
            {selected.length >= 2 && (
              <>
                <div className="mb-4 flex flex-wrap gap-2">
                  {favorites.map((fav) => (
                    <button
                      key={fav.id}
                      onClick={() => toggleSelection(fav.id)}
                      className={`
                        px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200
                        touch-target tap-highlight touch-feedback
                        ${selected.includes(fav.id)
                          ? "bg-primary text-background"
                          : "bg-secondary/30 text-muted hover:bg-secondary/50 active:bg-secondary/70"
                        }
                      `}
                    >
                      {fav.fullName}
                    </button>
                  ))}
                </div>

                <div className={`grid gap-4 grid-cols-1 ${selectedFavorites.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                  {selectedFavorites.map((fav) => {
                    const analysis = getAnalysis(fav);
                    return (
                      <motion.div
                        key={fav.id}
                        layout
                        className="bg-secondary/20 rounded-2xl p-5"
                      >
                        {/* Name */}
                        <div className="text-center mb-4">
                          <Heading as="h3" size="lg" className="mb-1">
                            {fav.fullName}
                          </Heading>
                          <Text size="sm" muted>
                            {fav.initials}
                          </Text>
                        </div>

                        {/* Stats */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <Text size="sm" muted>Overall Score</Text>
                            <span className={`font-semibold ${
                              analysis.avgScore >= 75 ? "text-green-600" :
                              analysis.avgScore >= 50 ? "text-amber-600" : "text-rose-600"
                            }`}>
                              {analysis.avgScore}%
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <Text size="sm" muted>Syllables</Text>
                            <span className="font-medium">{analysis.totalSyllables}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <Text size="sm" muted>Flow Score</Text>
                            <span className="font-medium">{analysis.flowScore}%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <Text size="sm" muted>Initials Safe</Text>
                            <span className={analysis.isBadAcronym ? "text-rose-500" : "text-green-500"}>
                              {analysis.isBadAcronym ? "No" : "Yes"}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <Text size="sm" muted>Alliteration</Text>
                            <span className="font-medium">
                              {analysis.hasAlliteration ? "Yes" : "No"}
                            </span>
                          </div>
                        </div>

                        {/* Select Button */}
                        <Button
                          variant="primary"
                          size="sm"
                          className="w-full mt-4"
                          onClick={() => {
                            onSelectWinner(fav);
                            onClose();
                          }}
                        >
                          Choose This Name
                        </Button>
                      </motion.div>
                    );
                  })}
                </div>
              </>
            )}

            {/* Empty State */}
            {favorites.length < 2 && (
              <div className="text-center py-12">
                <Text muted>
                  Save at least 2 names to your favorites to compare them.
                </Text>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
