"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { haptics } from "@/lib/haptics";
import {
  updateOnboardingSettings,
  resetProgress,
  generateSessionCode,
  type AppState,
} from "@/lib/partner-storage";

type GenderFilter = "M" | "F" | "all";

interface SettingsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  appState: AppState;
  onStateChange: (state: AppState) => void;
}

export function SettingsSheet({ isOpen, onClose, appState, onStateChange }: SettingsSheetProps) {
  const [surname, setSurname] = useState(appState.surname || "");
  const [genderFilter, setGenderFilter] = useState<GenderFilter>(appState.genderFilter);
  const [sessionCode, setSessionCode] = useState(appState.sessionCode || "");
  const [copied, setCopied] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Sync state when appState changes
  useEffect(() => {
    setSurname(appState.surname || "");
    setGenderFilter(appState.genderFilter);
    setSessionCode(appState.sessionCode || "");
  }, [appState]);

  const handleSurnameBlur = () => {
    if (surname !== (appState.surname || "")) {
      const newState = updateOnboardingSettings({ surname: surname.trim() || undefined });
      onStateChange(newState);
      haptics.save();
    }
  };

  const handleGenderChange = (gender: GenderFilter) => {
    setGenderFilter(gender);
    const newState = updateOnboardingSettings({ genderFilter: gender });
    onStateChange(newState);
    haptics.select();
  };

  const handleGenerateCode = () => {
    const code = generateSessionCode();
    setSessionCode(code);
    const newState = updateOnboardingSettings({ sessionCode: code, partnerMode: "partner" });
    onStateChange(newState);
    haptics.save();
  };

  const handleCopyCode = async () => {
    if (!sessionCode) return;
    try {
      await navigator.clipboard.writeText(sessionCode);
      setCopied(true);
      haptics.save();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      haptics.error();
    }
  };

  const handleReset = () => {
    const newState = resetProgress();
    onStateChange(newState);
    haptics.delete();
    setShowResetConfirm(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 max-h-[85vh] overflow-y-auto safe-bottom"
          >
            {/* Handle */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 bg-border rounded-full" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 pb-4 border-b border-border">
              <h2 className="font-heading text-xl">Settings</h2>
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-8">
              {/* Surname */}
              <div>
                <label className="block text-sm font-medium text-muted mb-2">
                  Surname
                </label>
                <Input
                  variant="pill"
                  placeholder="e.g., Smith"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  onBlur={handleSurnameBlur}
                />
                <p className="text-xs text-muted mt-2">
                  Helps check how names flow together
                </p>
              </div>

              {/* Gender Filter */}
              <div>
                <label className="block text-sm font-medium text-muted mb-3">
                  Looking for
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleGenderChange("M")}
                    className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all ${
                      genderFilter === "M"
                        ? "bg-partner2 text-white"
                        : "bg-card border border-border text-foreground hover:border-partner2/50"
                    }`}
                  >
                    👦 Boy
                  </button>
                  <button
                    onClick={() => handleGenderChange("F")}
                    className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all ${
                      genderFilter === "F"
                        ? "bg-partner1 text-white"
                        : "bg-card border border-border text-foreground hover:border-partner1/50"
                    }`}
                  >
                    👧 Girl
                  </button>
                  <button
                    onClick={() => handleGenderChange("all")}
                    className={`flex-1 py-3 px-4 rounded-full text-sm font-medium transition-all ${
                      genderFilter === "all"
                        ? "bg-accent text-white"
                        : "bg-card border border-border text-foreground hover:border-accent/50"
                    }`}
                  >
                    ✨ Both
                  </button>
                </div>
                <p className="text-xs text-muted mt-2">
                  Changing this will update your name pool
                </p>
              </div>

              {/* Partner Code */}
              <div>
                <label className="block text-sm font-medium text-muted mb-3">
                  Partner sync
                </label>
                {sessionCode ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-4 bg-card border border-border rounded-2xl">
                      <div className="flex-1">
                        <p className="text-xs text-muted mb-1">Your code</p>
                        <p className="font-mono text-lg font-bold tracking-wider">
                          {sessionCode}
                        </p>
                      </div>
                      <button
                        onClick={handleCopyCode}
                        className="p-3 bg-secondary rounded-full hover:bg-secondary-dark transition-colors"
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-success" />
                        ) : (
                          <Copy className="w-5 h-5 text-muted" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-muted">
                      Share this code with your partner to sync your likes
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm text-foreground/80">
                      Generate a code to sync likes with your partner on their device.
                    </p>
                    <Button
                      onClick={handleGenerateCode}
                      variant="secondary"
                      className="w-full"
                    >
                      Generate partner code
                    </Button>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-border" />

              {/* Reset */}
              <div>
                {!showResetConfirm ? (
                  <button
                    onClick={() => setShowResetConfirm(true)}
                    className="text-sm text-error hover:underline"
                  >
                    Reset all progress
                  </button>
                ) : (
                  <div className="p-4 bg-error/10 border border-error/20 rounded-2xl space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Are you sure?</p>
                        <p className="text-sm text-muted">
                          This will clear all your likes, matches, and preferences.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        onClick={() => setShowResetConfirm(false)}
                        variant="secondary"
                        size="sm"
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={handleReset}
                        size="sm"
                        className="flex-1 bg-error hover:bg-error/90"
                      >
                        Reset
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
