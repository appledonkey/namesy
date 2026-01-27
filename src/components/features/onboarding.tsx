"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Users, User, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { haptics } from "@/lib/haptics";
import {
  generateSessionCode,
  completeOnboarding,
  type OnboardingData,
  type AppState,
} from "@/lib/partner-storage";

type Step = "surname" | "gender" | "partner";
type GenderFilter = "M" | "F" | "all";

interface OnboardingProps {
  onComplete: (state: AppState) => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState<Step>("surname");
  const [surname, setSurname] = useState("");
  const [genderFilter, setGenderFilter] = useState<GenderFilter | null>(null);
  const [partnerMode, setPartnerMode] = useState<"solo" | "partner" | null>(null);
  const [sessionCode, setSessionCode] = useState<string>("");
  const [joinCode, setJoinCode] = useState("");
  const [showJoinInput, setShowJoinInput] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSurnameNext = () => {
    haptics.tap();
    setStep("gender");
  };

  const handleGenderSelect = (gender: GenderFilter) => {
    haptics.select();
    setGenderFilter(gender);
    setTimeout(() => setStep("partner"), 300);
  };

  const handlePartnerChoice = (mode: "solo" | "partner") => {
    haptics.select();
    setPartnerMode(mode);

    if (mode === "solo") {
      // Complete onboarding immediately
      finishOnboarding(mode, undefined);
    } else {
      // Generate session code for partner mode
      const code = generateSessionCode();
      setSessionCode(code);
    }
  };

  const handleCopyCode = async () => {
    if (!sessionCode) return;
    try {
      await navigator.clipboard.writeText(sessionCode);
      setCopied(true);
      haptics.save();
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      haptics.error();
    }
  };

  const handleJoinSession = () => {
    if (!joinCode.trim()) return;
    haptics.save();
    finishOnboarding("partner", joinCode.trim().toUpperCase());
  };

  const finishOnboarding = useCallback(
    (mode: "solo" | "partner", code?: string) => {
      const data: OnboardingData = {
        surname: surname.trim() || undefined,
        genderFilter: genderFilter || "all",
        partnerMode: mode,
        sessionCode: code || sessionCode || undefined,
      };
      const newState = completeOnboarding(data);
      haptics.save();
      onComplete(newState);
    },
    [surname, genderFilter, sessionCode, onComplete]
  );

  const handleStartSwiping = () => {
    finishOnboarding("partner", sessionCode);
  };

  // Step progress dots
  const steps: Step[] = ["surname", "gender", "partner"];
  const currentStepIndex = steps.indexOf(step);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Progress dots */}
      <div className="flex justify-center gap-2 pt-8 pb-4">
        {steps.map((s, i) => (
          <div
            key={s}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i <= currentStepIndex ? "bg-primary w-6" : "bg-border"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {step === "surname" && (
            <motion.div
              key="surname"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm text-center"
            >
              <h1 className="font-heading text-3xl mb-2">What&apos;s your surname?</h1>
              <p className="text-muted text-sm mb-8">
                Helps check how names flow together
              </p>

              <Input
                variant="underlined"
                placeholder="e.g., Smith"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                className="text-center text-xl mb-8"
                autoFocus
              />

              <div className="flex flex-col gap-3">
                <Button onClick={handleSurnameNext} size="lg" className="w-full">
                  {surname.trim() ? "Continue" : "Skip"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}

          {step === "gender" && (
            <motion.div
              key="gender"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm text-center"
            >
              <h1 className="font-heading text-3xl mb-2">What are you looking for?</h1>
              <p className="text-muted text-sm mb-8">You can change this anytime</p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleGenderSelect("M")}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                    genderFilter === "M"
                      ? "border-partner2 bg-partner2-light"
                      : "border-border bg-card hover:border-partner2/50"
                  }`}
                >
                  <span className="text-2xl mb-1 block">👦</span>
                  <span className="font-heading text-lg">Boy names</span>
                </button>

                <button
                  onClick={() => handleGenderSelect("F")}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                    genderFilter === "F"
                      ? "border-partner1 bg-partner1-light"
                      : "border-border bg-card hover:border-partner1/50"
                  }`}
                >
                  <span className="text-2xl mb-1 block">👧</span>
                  <span className="font-heading text-lg">Girl names</span>
                </button>

                <button
                  onClick={() => handleGenderSelect("all")}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                    genderFilter === "all"
                      ? "border-accent bg-secondary"
                      : "border-border bg-card hover:border-accent/50"
                  }`}
                >
                  <span className="text-2xl mb-1 block">✨</span>
                  <span className="font-heading text-lg">Both / We don&apos;t know yet</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === "partner" && (
            <motion.div
              key="partner"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-sm text-center"
            >
              {!partnerMode && (
                <>
                  <h1 className="font-heading text-3xl mb-2">Swiping with a partner?</h1>
                  <p className="text-muted text-sm mb-8">
                    Match names together and see what you both love
                  </p>

                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => handlePartnerChoice("partner")}
                      className="p-5 rounded-2xl border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-partner1-light to-partner2-light flex items-center justify-center">
                        <Users className="w-6 h-6 text-foreground" />
                      </div>
                      <div className="text-left flex-1">
                        <span className="font-heading text-lg block">Yes, set it up</span>
                        <span className="text-sm text-muted">Share a code with your partner</span>
                      </div>
                    </button>

                    <button
                      onClick={() => handlePartnerChoice("solo")}
                      className="p-5 rounded-2xl border-2 border-border bg-card hover:border-primary/50 transition-all duration-300 flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                        <User className="w-6 h-6 text-muted" />
                      </div>
                      <div className="text-left flex-1">
                        <span className="font-heading text-lg block">Just me</span>
                        <span className="text-sm text-muted">I&apos;ll invite them later</span>
                      </div>
                    </button>
                  </div>
                </>
              )}

              {partnerMode === "partner" && !showJoinInput && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-heading text-2xl mb-2">Share your code</h2>
                    <p className="text-muted text-sm">
                      Your partner enters this to join your session
                    </p>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6">
                    <p className="font-mono text-2xl font-bold tracking-wider text-foreground">
                      {sessionCode}
                    </p>
                  </div>

                  <Button
                    onClick={handleCopyCode}
                    variant="secondary"
                    className="w-full"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy code
                      </>
                    )}
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-background px-4 text-sm text-muted">or</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowJoinInput(true)}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    I have my partner&apos;s code
                  </button>

                  <Button onClick={handleStartSwiping} size="lg" className="w-full">
                    Start swiping
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              )}

              {partnerMode === "partner" && showJoinInput && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h2 className="font-heading text-2xl mb-2">Enter their code</h2>
                    <p className="text-muted text-sm">
                      Join your partner&apos;s session
                    </p>
                  </div>

                  <Input
                    variant="underlined"
                    placeholder="e.g., MAPLE-7X3K"
                    value={joinCode}
                    onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                    className="text-center text-xl font-mono tracking-wider"
                    autoFocus
                  />

                  <Button
                    onClick={handleJoinSession}
                    size="lg"
                    className="w-full"
                    disabled={!joinCode.trim()}
                  >
                    Join session
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>

                  <button
                    onClick={() => setShowJoinInput(false)}
                    className="text-sm text-muted hover:text-foreground transition-colors"
                  >
                    Back to my code
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
