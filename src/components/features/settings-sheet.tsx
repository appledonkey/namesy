"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check, AlertTriangle, Sun, Monitor, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/toast";
import { haptics } from "@/lib/haptics";
import {
  updateOnboardingSettings,
  updateSettings,
  resetProgress,
  generateSessionCode,
  applyTheme,
  type AppState,
  type ThemePreference,
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
  const [middleName, setMiddleName] = useState(appState.middleName || "");
  const [genderFilter, setGenderFilter] = useState<GenderFilter>(appState.genderFilter);
  const [sessionCode, setSessionCode] = useState(appState.sessionCode || "");
  const [copied, setCopied] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [joinCode, setJoinCode] = useState("");
  const [hapticEnabled, setHapticEnabled] = useState(appState.settings.hapticEnabled);
  const [theme, setTheme] = useState<ThemePreference>(appState.settings.theme || "system");
  const { showToast, ToastComponent } = useToast();

  // Sync state when appState changes
  useEffect(() => {
    setSurname(appState.surname || "");
    setMiddleName(appState.middleName || "");
    setGenderFilter(appState.genderFilter);
    setSessionCode(appState.sessionCode || "");
    setHapticEnabled(appState.settings.hapticEnabled);
    setTheme(appState.settings.theme || "system");
  }, [appState]);

  const handleSurnameBlur = () => {
    if (surname !== (appState.surname || "")) {
      const newState = updateOnboardingSettings({ surname: surname.trim() || undefined });
      onStateChange(newState);
      haptics.save();
    }
  };

  const handleMiddleNameBlur = () => {
    if (middleName !== (appState.middleName || "")) {
      const newState = updateOnboardingSettings({ middleName: middleName.trim() || undefined });
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

  const handleHapticToggle = () => {
    const newEnabled = !hapticEnabled;
    setHapticEnabled(newEnabled);
    const newState = updateSettings({ hapticEnabled: newEnabled });
    onStateChange(newState);
    if (newEnabled) {
      haptics.select();
    }
  };

  const handleThemeChange = (newTheme: ThemePreference) => {
    setTheme(newTheme);
    applyTheme(newTheme);
    const newState = updateSettings({ theme: newTheme });
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
      showToast("Couldn't copy code. Try selecting manually.", "error");
    }
  };

  const handleJoinCode = () => {
    if (!joinCode.trim()) return;
    setSessionCode(joinCode.trim());
    const newState = updateOnboardingSettings({
      sessionCode: joinCode.trim(),
      partnerMode: "partner",
    });
    onStateChange(newState);
    setJoinCode("");
    haptics.save();
  };

  const handleReset = () => {
    const newState = resetProgress();
    onStateChange(newState);
    haptics.delete();
    setShowResetConfirm(false);
    onClose();
  };

  return (
    <>
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
              className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 max-h-[85vh] overflow-y-auto scrollbar-hide safe-bottom overscroll-contain"
            >
              {/* Handle */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-12 h-1.5 bg-border rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 sm:px-6 pb-4 border-b border-border">
                <h2 className="font-heading text-xl">Settings</h2>
                <button
                  onClick={onClose}
                  className="p-2.5 -mr-2 text-muted hover:text-foreground transition-colors touch-target"
                  aria-label="Close settings"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="px-5 sm:px-6 py-5 sm:py-6 space-y-6 sm:space-y-8 pb-8">
                {/* Preferences Section */}
                <div>
                  <label className="block text-sm font-medium text-muted mb-3">
                    Preferences
                  </label>
                  <div className="flex items-center justify-between p-4 bg-card border border-border rounded-2xl">
                    <div>
                      <p className="font-medium text-foreground">Haptic feedback</p>
                      <p className="text-xs text-muted mt-0.5">Vibration on interactions</p>
                    </div>
                    <button
                      onClick={handleHapticToggle}
                      className={`relative w-12 h-7 rounded-full transition-colors ${
                        hapticEnabled ? "bg-primary" : "bg-border"
                      }`}
                      role="switch"
                      aria-checked={hapticEnabled}
                      aria-label="Toggle haptic feedback"
                    >
                      <motion.div
                        className="absolute top-1 left-1 w-5 h-5 bg-background rounded-full shadow-sm"
                        animate={{ x: hapticEnabled ? 20 : 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </button>
                  </div>
                </div>

                {/* Theme */}
                <div>
                  <label className="block text-sm font-medium text-muted mb-3">
                    Theme
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleThemeChange("light")}
                      className={`flex-1 py-3.5 px-3 rounded-full text-sm font-medium transition-all touch-target flex items-center justify-center gap-1.5 ${
                        theme === "light"
                          ? "bg-accent text-white"
                          : "bg-card border border-border text-foreground hover:border-accent/50"
                      }`}
                    >
                      <Sun className="w-4 h-4" />
                      Light
                    </button>
                    <button
                      onClick={() => handleThemeChange("system")}
                      className={`flex-1 py-3.5 px-3 rounded-full text-sm font-medium transition-all touch-target flex items-center justify-center gap-1.5 ${
                        theme === "system"
                          ? "bg-accent text-white"
                          : "bg-card border border-border text-foreground hover:border-accent/50"
                      }`}
                    >
                      <Monitor className="w-4 h-4" />
                      System
                    </button>
                    <button
                      onClick={() => handleThemeChange("dark")}
                      className={`flex-1 py-3.5 px-3 rounded-full text-sm font-medium transition-all touch-target flex items-center justify-center gap-1.5 ${
                        theme === "dark"
                          ? "bg-accent text-white"
                          : "bg-card border border-border text-foreground hover:border-accent/50"
                      }`}
                    >
                      <Moon className="w-4 h-4" />
                      Dark
                    </button>
                  </div>
                </div>

                {/* Middle Name */}
                <div>
                  <label className="block text-sm font-medium text-muted mb-2">
                    Middle name
                  </label>
                  <Input
                    variant="pill"
                    placeholder="e.g., Rose"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    onBlur={handleMiddleNameBlur}
                    maxLength={50}
                  />
                  <p className="text-xs text-muted mt-2">
                    Shows in the full name preview
                  </p>
                </div>

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
                    maxLength={50}
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
                      className={`flex-1 py-3.5 px-3 rounded-full text-sm font-medium transition-all touch-target ${
                        genderFilter === "M"
                          ? "bg-partner2 text-white"
                          : "bg-card border border-border text-foreground hover:border-partner2/50"
                      }`}
                    >
                      {"\uD83D\uDC66"} Boy
                    </button>
                    <button
                      onClick={() => handleGenderChange("F")}
                      className={`flex-1 py-3.5 px-3 rounded-full text-sm font-medium transition-all touch-target ${
                        genderFilter === "F"
                          ? "bg-partner1 text-white"
                          : "bg-card border border-border text-foreground hover:border-partner1/50"
                      }`}
                    >
                      {"\uD83D\uDC67"} Girl
                    </button>
                    <button
                      onClick={() => handleGenderChange("all")}
                      className={`flex-1 py-3.5 px-3 rounded-full text-sm font-medium transition-all touch-target ${
                        genderFilter === "all"
                          ? "bg-accent text-white"
                          : "bg-card border border-border text-foreground hover:border-accent/50"
                      }`}
                    >
                      {"\u2728"} Both
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
                          aria-label={copied ? "Code copied" : "Copy partner code"}
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
                      <details className="text-sm">
                        <summary className="text-muted cursor-pointer hover:text-foreground transition-colors">
                          Join a different code
                        </summary>
                        <div className="mt-3 space-y-2">
                          <Input
                            variant="pill"
                            placeholder="Enter partner's code"
                            value={joinCode}
                            onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                            maxLength={12}
                          />
                          <Button onClick={handleJoinCode} variant="secondary" className="w-full" disabled={!joinCode.trim()}>
                            Join partner
                          </Button>
                        </div>
                      </details>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-sm text-foreground/80">
                        Generate a code to sync likes, or join your partner&apos;s code.
                      </p>
                      <Button
                        onClick={handleGenerateCode}
                        variant="secondary"
                        className="w-full"
                      >
                        Generate partner code
                      </Button>
                      <div className="relative flex items-center gap-1 text-xs text-muted">
                        <div className="flex-1 border-t border-border" />
                        <span>or</span>
                        <div className="flex-1 border-t border-border" />
                      </div>
                      <Input
                        variant="pill"
                        placeholder="Enter partner's code"
                        value={joinCode}
                        onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                        maxLength={12}
                      />
                      <Button onClick={handleJoinCode} variant="secondary" className="w-full" disabled={!joinCode.trim()}>
                        Join partner
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
      {ToastComponent}
    </>
  );
}
