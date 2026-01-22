"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import type { NameVibe } from "@/lib/names-data";
import { saveOnboarding } from "@/lib/swipe-session";
import { haptics } from "@/lib/haptics";

type Step = "gender" | "lastname" | "vibes" | "tutorial";

interface SwipeOnboardingProps {
  onComplete: () => void;
}

const VIBES: { id: NameVibe; label: string; emoji: string }[] = [
  { id: "classic", label: "Classic", emoji: "📜" },
  { id: "modern", label: "Modern", emoji: "✨" },
  { id: "nature", label: "Nature", emoji: "🌿" },
  { id: "strong", label: "Strong", emoji: "💪" },
  { id: "gentle", label: "Gentle", emoji: "🕊️" },
  { id: "unique", label: "Unique", emoji: "💎" },
];

export function SwipeOnboarding({ onComplete }: SwipeOnboardingProps) {
  const [step, setStep] = useState<Step>("gender");
  const [gender, setGender] = useState<"M" | "F" | "all" | null>(null);
  const [lastName, setLastName] = useState("");
  const [selectedVibes, setSelectedVibes] = useState<NameVibe[]>([]);

  const handleGenderSelect = (g: "M" | "F" | "all") => {
    haptics.select();
    setGender(g);
    setTimeout(() => setStep("lastname"), 200);
  };

  const handleLastNameContinue = () => {
    haptics.tap();
    setStep("vibes");
  };

  const handleLastNameSkip = () => {
    haptics.tap();
    setStep("vibes");
  };

  const toggleVibe = (vibe: NameVibe) => {
    haptics.select();
    if (selectedVibes.includes(vibe)) {
      setSelectedVibes(selectedVibes.filter((v) => v !== vibe));
    } else {
      setSelectedVibes([...selectedVibes, vibe]);
    }
  };

  const handleVibesContinue = () => {
    haptics.tap();
    setStep("tutorial");
  };

  const handleComplete = () => {
    haptics.save();
    saveOnboarding({
      lastName: lastName.trim() || null,
      gender: gender || "all",
      vibes: selectedVibes,
      completedAt: Date.now(),
    });
    onComplete();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress dots */}
      <div className="flex items-center justify-center gap-2 py-6">
        {(["gender", "lastname", "vibes", "tutorial"] as Step[]).map((s, i) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full transition-colors ${
              step === s ? "bg-primary" : i < ["gender", "lastname", "vibes", "tutorial"].indexOf(step) ? "bg-primary/50" : "bg-border"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* Step 1: Gender */}
        {step === "gender" && (
          <motion.div
            key="gender"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col items-center justify-center px-6"
          >
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground text-center mb-3">
              Who are we naming?
            </h1>
            <p className="text-muted text-center mb-10 max-w-xs">
              This helps us show you the right names
            </p>

            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {/* Boy */}
              <button
                onClick={() => handleGenderSelect("M")}
                className="group flex flex-col items-center gap-3 p-5 bg-card border-2 border-border rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👦</span>
                </div>
                <span className="font-heading font-medium text-foreground">Boy</span>
              </button>

              {/* Girl */}
              <button
                onClick={() => handleGenderSelect("F")}
                className="group flex flex-col items-center gap-3 p-5 bg-card border-2 border-border rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">👧</span>
                </div>
                <span className="font-heading font-medium text-foreground">Girl</span>
              </button>

              {/* Either */}
              <button
                onClick={() => handleGenderSelect("all")}
                className="group flex flex-col items-center gap-3 p-5 bg-card border-2 border-border rounded-2xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-2xl">✨</span>
                </div>
                <span className="font-heading font-medium text-foreground text-sm">Either</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Last Name */}
        {step === "lastname" && (
          <motion.div
            key="lastname"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col items-center justify-center px-6"
          >
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground text-center mb-3">
              What&apos;s your last name?
            </h1>
            <p className="text-muted text-center mb-10 max-w-xs">
              We&apos;ll show you how names sound together
            </p>

            <div className="w-full max-w-sm space-y-4">
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLastNameContinue()}
                placeholder="Enter last name"
                autoFocus
                autoCapitalize="words"
                className="w-full text-center text-xl py-4 px-6 bg-card border-2 border-border rounded-xl placeholder:text-muted/50 text-foreground font-heading focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />

              <button
                onClick={handleLastNameContinue}
                className="w-full py-4 bg-primary text-white rounded-xl font-heading font-medium text-lg flex items-center justify-center gap-2 hover:bg-primary-light transition-colors"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={handleLastNameSkip}
                className="w-full py-2 text-muted hover:text-foreground text-sm transition-colors"
              >
                Skip for now
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Vibes */}
        {step === "vibes" && (
          <motion.div
            key="vibes"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col items-center justify-center px-6"
          >
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground text-center mb-3">
              What styles appeal to you?
            </h1>
            <p className="text-muted text-center mb-8 max-w-xs">
              Select any that resonate (or skip)
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-8">
              {VIBES.map((vibe) => {
                const isSelected = selectedVibes.includes(vibe.id);
                return (
                  <button
                    key={vibe.id}
                    onClick={() => toggleVibe(vibe.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-card text-muted hover:border-foreground/30 hover:text-foreground"
                    }`}
                  >
                    <span className="text-xl">{vibe.emoji}</span>
                    <span className="font-heading font-medium">{vibe.label}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={handleVibesContinue}
              className="w-full max-w-sm py-4 bg-primary text-white rounded-xl font-heading font-medium text-lg flex items-center justify-center gap-2 hover:bg-primary-light transition-colors"
            >
              {selectedVibes.length > 0 ? "Continue" : "Show me all names"}
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* Step 4: Tutorial */}
        {step === "tutorial" && (
          <motion.div
            key="tutorial"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1 flex flex-col items-center justify-center px-6"
          >
            <h1 className="font-heading text-3xl sm:text-4xl font-semibold text-foreground text-center mb-3">
              Ready to find names!
            </h1>
            <p className="text-muted text-center mb-10 max-w-xs">
              Swipe through names and save your favorites
            </p>

            {/* Swipe tutorial illustration */}
            <div className="relative w-48 h-48 mb-10">
              {/* Card */}
              <motion.div
                animate={{ x: [0, 30, -30, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-card rounded-2xl border-2 border-border shadow-lg flex items-center justify-center"
              >
                <span className="font-heading text-3xl text-foreground">Emma</span>
              </motion.div>

              {/* Swipe indicators */}
              <motion.div
                animate={{ opacity: [0, 1, 0], x: [0, 40, 40] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12"
              >
                <Heart className="w-8 h-8 text-success" />
              </motion.div>
            </div>

            <div className="space-y-3 text-center mb-10">
              <p className="text-foreground">
                <span className="text-success font-medium">Swipe right</span> to save
              </p>
              <p className="text-foreground">
                <span className="text-error font-medium">Swipe left</span> to skip
              </p>
              <p className="text-foreground">
                <span className="text-amber-500 font-medium">Swipe up</span> for super like
              </p>
            </div>

            <button
              onClick={handleComplete}
              className="w-full max-w-sm py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-xl font-heading font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Let&apos;s Go!
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
