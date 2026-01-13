"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Edit2, X, Check, AlertTriangle } from "lucide-react";
import { getLikedNames, type SwipedName } from "@/lib/swipe-preferences";
import { analyzeNameFlow, type FlowAnalysis } from "@/lib/name-flow";

interface NamePreviewProps {
  firstName: string;
  middleName: string;
  lastName: string;
  onFirstNameSelect: (name: string) => void;
  onMiddleNameChange: (name: string) => void;
  onChangeLastName: () => void;
}

/**
 * NamePreview - Card displaying the full name combination
 */
export function NamePreview({
  firstName,
  middleName,
  lastName,
  onFirstNameSelect,
  onMiddleNameChange,
  onChangeLastName,
}: NamePreviewProps) {
  const [showFirstDropdown, setShowFirstDropdown] = useState(false);
  const [showMiddleInput, setShowMiddleInput] = useState(false);
  const [middleInputValue, setMiddleInputValue] = useState(middleName);

  const favorites = getLikedNames();

  // Analyze name flow
  const flowAnalysis = useMemo<FlowAnalysis | null>(() => {
    if (!firstName || !lastName) return null;
    return analyzeNameFlow(firstName, lastName, middleName || undefined);
  }, [firstName, middleName, lastName]);

  const handleFirstNameSelect = (name: string) => {
    onFirstNameSelect(name);
    setShowFirstDropdown(false);
  };

  const handleMiddleSave = () => {
    onMiddleNameChange(middleInputValue);
    setShowMiddleInput(false);
  };

  // Build the display name
  const displayParts = [];
  if (firstName) displayParts.push(firstName);
  if (middleName) displayParts.push(middleName);
  displayParts.push(lastName);
  const displayName = displayParts.join(" ");

  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      {/* Full name display */}
      <div className="text-center mb-4">
        <p className="text-2xl sm:text-3xl font-heading font-semibold text-foreground tracking-tight">
          {displayName}
        </p>

        {/* Flow analysis feedback */}
        {flowAnalysis && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex items-center justify-center gap-1.5"
          >
            {flowAnalysis.rating === "excellent" || flowAnalysis.rating === "good" ? (
              <>
                <Check className="w-4 h-4 text-green-500" />
                <span className="text-sm text-green-600 font-heading">
                  {flowAnalysis.rating === "excellent" ? "Flows beautifully" : "Flows well"}
                </span>
              </>
            ) : flowAnalysis.rating === "fair" ? (
              <>
                <Check className="w-4 h-4 text-amber-500" />
                <span className="text-sm text-amber-600 font-heading">Flows okay</span>
              </>
            ) : (
              <>
                <AlertTriangle className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-orange-600 font-heading">Consider alternatives</span>
              </>
            )}
          </motion.div>
        )}
      </div>

      {/* Edit controls */}
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {/* First Name dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowFirstDropdown(!showFirstDropdown)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm transition-colors ${
              firstName
                ? "bg-primary/10 text-primary font-medium"
                : "bg-secondary text-muted hover:bg-secondary/80"
            }`}
          >
            <span>{firstName || "Select first"}</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showFirstDropdown ? "rotate-180" : ""}`} />
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {showFirstDropdown && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setShowFirstDropdown(false)}
                />
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-card border border-border rounded-xl shadow-xl z-50 overflow-hidden"
                >
                  <div className="max-h-48 overflow-y-auto py-1">
                    {favorites.length === 0 ? (
                      <div className="px-3 py-3 text-xs text-muted text-center">
                        Like names to see them here
                      </div>
                    ) : (
                      favorites.map((item: SwipedName) => (
                        <button
                          key={item.id}
                          onClick={() => handleFirstNameSelect(item.name)}
                          className={`w-full px-3 py-2 text-left text-sm hover:bg-secondary transition-colors ${
                            item.name === firstName ? "bg-primary/10 text-primary" : ""
                          }`}
                        >
                          {item.name}
                          {item.action === "superlike" && (
                            <span className="ml-1 text-amber-500">★</span>
                          )}
                        </button>
                      ))
                    )}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Middle Name */}
        {showMiddleInput ? (
          <div className="flex items-center gap-1">
            <input
              type="text"
              value={middleInputValue}
              onChange={(e) => setMiddleInputValue(e.target.value)}
              placeholder="Middle name"
              autoFocus
              autoCapitalize="words"
              className="w-28 px-2.5 py-1.5 text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleMiddleSave();
                if (e.key === "Escape") setShowMiddleInput(false);
              }}
              onBlur={handleMiddleSave}
            />
            <button
              onClick={() => setShowMiddleInput(false)}
              className="p-1 rounded hover:bg-secondary"
            >
              <X className="w-3.5 h-3.5 text-muted" />
            </button>
          </div>
        ) : middleName ? (
          <button
            onClick={() => {
              setMiddleInputValue(middleName);
              setShowMiddleInput(true);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm bg-secondary/50 text-foreground/80 hover:bg-secondary transition-colors"
          >
            <span>{middleName}</span>
            <Edit2 className="w-3 h-3 text-muted" />
          </button>
        ) : (
          <button
            onClick={() => setShowMiddleInput(true)}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-secondary transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Middle</span>
          </button>
        )}

        {/* Last Name */}
        <button
          onClick={onChangeLastName}
          className="px-3 py-1.5 rounded-lg text-sm text-muted hover:text-foreground hover:bg-secondary transition-colors"
        >
          Change last name
        </button>
      </div>
    </div>
  );
}
