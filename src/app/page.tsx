"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import type { NameData } from "@/lib/names-data";
import { getLikedNames, removeSwipedName, recordSwipe } from "@/lib/swipe-preferences";
import { isOnboardingComplete, getOnboarding, getSession } from "@/lib/swipe-session";
import type { AchievementId } from "@/lib/swipe-session";
import { SwipeOnboarding } from "@/components/features/swipe-onboarding";
import { SwipeStackManager, type FilterState, defaultFilters } from "@/components/features/swipe-stack-manager";
import { SwipeActionBar, KeyboardHints } from "@/components/features/swipe-action-bar";
import { SwipeHeader } from "@/components/features/swipe-header";
import { SwipeDetailsDrawer } from "@/components/features/swipe-details-drawer";
import { SwipeFavoritesTray } from "@/components/features/swipe-favorites-tray";
import { StreakToast, MilestoneModal, useCelebrations } from "@/components/features/swipe-celebrations";

export default function Home() {
  // Hydration-safe state
  const [isLoaded, setIsLoaded] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);

  // User preferences from onboarding
  const [gender, setGender] = useState<"M" | "F" | "all">("all");
  const [lastName, setLastName] = useState<string | null>(null);
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  // Current state
  const [currentName, setCurrentName] = useState<NameData | null>(null);
  const [likedNames, setLikedNames] = useState<ReturnType<typeof getLikedNames>>([]);
  const [totalNames, setTotalNames] = useState(0);
  const [remainingNames, setRemainingNames] = useState(0);

  // Session stats
  const [sessionLikes, setSessionLikes] = useState(0);
  const [sessionSuperLikes, setSessionSuperLikes] = useState(0);
  const [sessionSkips, setSessionSkips] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);

  // UI state
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [favoritesExpanded, setFavoritesExpanded] = useState(false);

  // Celebrations
  const {
    streakToast,
    milestoneModal,
    showStreakToast,
    showMilestone,
    dismissStreakToast,
    dismissMilestone,
  } = useCelebrations();

  // Load initial state
  useEffect(() => {
    const onboarded = isOnboardingComplete();
    setShowOnboarding(!onboarded);

    if (onboarded) {
      const onboarding = getOnboarding();
      if (onboarding) {
        setGender(onboarding.gender);
        setLastName(onboarding.lastName);
        if (onboarding.vibes.length > 0) {
          setFilters((prev) => ({ ...prev, vibes: onboarding.vibes as FilterState["vibes"] }));
        }
      }

      const session = getSession();
      setSessionLikes(session.likes);
      setSessionSuperLikes(session.superLikes);
      setSessionSkips(session.skips);
      setCurrentStreak(session.currentStreak);
    }

    setLikedNames(getLikedNames());
    setIsLoaded(true);
  }, []);

  // Refresh liked names list
  const refreshLikedNames = useCallback(() => {
    setLikedNames(getLikedNames());
  }, []);

  // Handle onboarding complete
  const handleOnboardingComplete = useCallback(() => {
    setShowOnboarding(false);
    const onboarding = getOnboarding();
    if (onboarding) {
      setGender(onboarding.gender);
      setLastName(onboarding.lastName);
      if (onboarding.vibes.length > 0) {
        setFilters((prev) => ({ ...prev, vibes: onboarding.vibes as FilterState["vibes"] }));
      }
    }
  }, []);

  // Handle swipe from stack
  const handleSwipe = useCallback(
    (name: NameData, action: "like" | "superlike" | "skip") => {
      if (action === "like") {
        setSessionLikes((prev) => prev + 1);
      } else if (action === "superlike") {
        setSessionSuperLikes((prev) => prev + 1);
      } else {
        setSessionSkips((prev) => prev + 1);
      }
      refreshLikedNames();
    },
    [refreshLikedNames]
  );

  // Handle streak updates
  const handleStreakUpdate = useCallback(
    (streak: number) => {
      setCurrentStreak(streak);
      showStreakToast(streak);
    },
    [showStreakToast]
  );

  // Handle achievements
  const handleAchievement = useCallback(
    (achievement: AchievementId) => {
      showMilestone(achievement);
    },
    [showMilestone]
  );

  // Handle count updates from stack
  const handleCountUpdate = useCallback((total: number, remaining: number) => {
    setTotalNames(total);
    setRemainingNames(remaining);
  }, []);

  // Handle tap on card (show details)
  const handleTapCard = useCallback((name: NameData) => {
    setDetailsOpen(true);
  }, []);

  // Handle like/superlike from details drawer
  const handleDetailsLike = useCallback(() => {
    if (currentName) {
      recordSwipe(currentName.name, "like", currentName.origins, currentName.meanings);
      setSessionLikes((prev) => prev + 1);
      refreshLikedNames();
      setDetailsOpen(false);
      // Trigger next card - click hidden button
      const btn = document.querySelector<HTMLButtonElement>("[data-swipe-right]");
      if (btn) btn.click();
    }
  }, [currentName, refreshLikedNames]);

  const handleDetailsSuperLike = useCallback(() => {
    if (currentName) {
      recordSwipe(currentName.name, "superlike", currentName.origins, currentName.meanings);
      setSessionSuperLikes((prev) => prev + 1);
      refreshLikedNames();
      setDetailsOpen(false);
      // Trigger next card
      const btn = document.querySelector<HTMLButtonElement>("[data-swipe-up]");
      if (btn) btn.click();
    }
  }, [currentName, refreshLikedNames]);

  // Handle remove from favorites
  const handleRemoveFavorite = useCallback(
    (id: string) => {
      removeSwipedName(id);
      refreshLikedNames();
    },
    [refreshLikedNames]
  );

  // Action bar handlers (trigger swipe via hidden buttons)
  const handleSkip = useCallback(() => {
    const btn = document.querySelector<HTMLButtonElement>("[data-swipe-left]");
    if (btn) btn.click();
  }, []);

  const handleLike = useCallback(() => {
    const btn = document.querySelector<HTMLButtonElement>("[data-swipe-right]");
    if (btn) btn.click();
  }, []);

  const handleSuperLike = useCallback(() => {
    const btn = document.querySelector<HTMLButtonElement>("[data-swipe-up]");
    if (btn) btn.click();
  }, []);

  const handleInfo = useCallback(() => {
    setDetailsOpen(true);
  }, []);

  // Don't render until hydrated
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background">
        <nav className="bg-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
            <Image src="/icon.png" alt="Namesy" width={28} height={28} className="rounded-lg" />
            <span className="font-heading text-xl font-semibold">namesy</span>
          </div>
        </nav>
      </div>
    );
  }

  // Show onboarding for first-time users
  if (showOnboarding) {
    return <SwipeOnboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
          <Image src="/icon.png" alt="Namesy" width={28} height={28} className="rounded-lg" />
          <span className="font-heading text-xl font-semibold">namesy</span>
        </div>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col max-w-lg mx-auto w-full pb-24">
        {/* Progress header */}
        <SwipeHeader
          totalNames={totalNames}
          remainingNames={remainingNames}
          likedCount={sessionLikes}
          superLikedCount={sessionSuperLikes}
          skippedCount={sessionSkips}
          currentStreak={currentStreak}
          onFiltersClick={() => {
            // TODO: Open filters sheet
          }}
          onFavoritesClick={() => setFavoritesExpanded(!favoritesExpanded)}
        />

        {/* Card stack */}
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          <SwipeStackManager
            gender={gender}
            filters={filters}
            lastName={lastName}
            onSwipe={handleSwipe}
            onCurrentNameChange={setCurrentName}
            onAchievement={handleAchievement}
            onStreakUpdate={handleStreakUpdate}
            onTapCard={handleTapCard}
            onCountUpdate={handleCountUpdate}
          />
        </div>

        {/* Action buttons */}
        <div className="px-4">
          <SwipeActionBar
            onSkip={handleSkip}
            onLike={handleLike}
            onSuperLike={handleSuperLike}
            onInfo={handleInfo}
            disabled={!currentName}
          />
          <KeyboardHints />
        </div>
      </main>

      {/* Details drawer */}
      <SwipeDetailsDrawer
        name={currentName}
        isOpen={detailsOpen}
        onClose={() => setDetailsOpen(false)}
        onLike={handleDetailsLike}
        onSuperLike={handleDetailsSuperLike}
        lastName={lastName}
      />

      {/* Favorites tray */}
      <SwipeFavoritesTray
        likedNames={likedNames}
        isExpanded={favoritesExpanded}
        onToggle={() => setFavoritesExpanded(!favoritesExpanded)}
        onRemove={handleRemoveFavorite}
      />

      {/* Celebrations */}
      <StreakToast
        streak={streakToast || 0}
        isVisible={streakToast !== null}
        onDismiss={dismissStreakToast}
      />
      <MilestoneModal achievement={milestoneModal} onDismiss={dismissMilestone} />
    </div>
  );
}
