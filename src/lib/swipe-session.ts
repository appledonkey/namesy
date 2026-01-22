/**
 * Session tracking for swipe interface
 * Tracks progress, streaks, and achievements
 */

// Onboarding data stored after first-time setup
export interface OnboardingData {
  lastName: string | null;
  gender: "M" | "F" | "all";
  vibes: string[];
  completedAt: number;
}

// Session data for current swiping session
export interface SwipeSession {
  startedAt: number;
  namesViewed: number;
  likes: number;
  superLikes: number;
  skips: number;
  currentStreak: number;
  longestStreak: number;
}

// Achievement definitions
export type AchievementId =
  | "first_like"
  | "ten_likes"
  | "twenty_five_likes"
  | "fifty_likes"
  | "hundred_likes"
  | "streak_5"
  | "streak_10"
  | "streak_25";

export interface Achievement {
  id: AchievementId;
  title: string;
  description: string;
  icon: string;
}

export const ACHIEVEMENTS: Record<AchievementId, Achievement> = {
  first_like: {
    id: "first_like",
    title: "First Love",
    description: "You found a name you love!",
    icon: "heart",
  },
  ten_likes: {
    id: "ten_likes",
    title: "Getting Started",
    description: "10 names saved to your list",
    icon: "star",
  },
  twenty_five_likes: {
    id: "twenty_five_likes",
    title: "Name Collector",
    description: "25 names saved",
    icon: "trophy",
  },
  fifty_likes: {
    id: "fifty_likes",
    title: "Name Enthusiast",
    description: "50 names saved",
    icon: "crown",
  },
  hundred_likes: {
    id: "hundred_likes",
    title: "Name Expert",
    description: "100 names saved",
    icon: "gem",
  },
  streak_5: {
    id: "streak_5",
    title: "On a Roll",
    description: "5 likes in a row!",
    icon: "fire",
  },
  streak_10: {
    id: "streak_10",
    title: "Hot Streak",
    description: "10 likes in a row!",
    icon: "fire",
  },
  streak_25: {
    id: "streak_25",
    title: "Unstoppable",
    description: "25 likes in a row!",
    icon: "fire",
  },
};

const ONBOARDING_KEY = "namesy-onboarding";
const SESSION_KEY = "namesy-session";
const ACHIEVEMENTS_KEY = "namesy-achievements";

// === Onboarding ===

export function getOnboarding(): OnboardingData | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(ONBOARDING_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

export function saveOnboarding(data: OnboardingData): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ONBOARDING_KEY, JSON.stringify(data));
}

export function isOnboardingComplete(): boolean {
  return getOnboarding() !== null;
}

export function clearOnboarding(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(ONBOARDING_KEY);
}

// === Session ===

export function getSession(): SwipeSession {
  if (typeof window === "undefined") {
    return createNewSession();
  }
  try {
    const stored = localStorage.getItem(SESSION_KEY);
    if (!stored) return createNewSession();
    return JSON.parse(stored);
  } catch {
    return createNewSession();
  }
}

function createNewSession(): SwipeSession {
  return {
    startedAt: Date.now(),
    namesViewed: 0,
    likes: 0,
    superLikes: 0,
    skips: 0,
    currentStreak: 0,
    longestStreak: 0,
  };
}

export function saveSession(session: SwipeSession): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function updateSession(
  action: "like" | "superlike" | "skip"
): { session: SwipeSession; newAchievements: AchievementId[] } {
  const session = getSession();
  const newAchievements: AchievementId[] = [];

  session.namesViewed++;

  if (action === "like" || action === "superlike") {
    if (action === "like") session.likes++;
    if (action === "superlike") session.superLikes++;

    session.currentStreak++;
    if (session.currentStreak > session.longestStreak) {
      session.longestStreak = session.currentStreak;
    }

    // Check streak achievements
    if (session.currentStreak === 5) newAchievements.push("streak_5");
    if (session.currentStreak === 10) newAchievements.push("streak_10");
    if (session.currentStreak === 25) newAchievements.push("streak_25");

    // Check total likes achievements
    const totalLikes = session.likes + session.superLikes;
    if (totalLikes === 1) newAchievements.push("first_like");
    if (totalLikes === 10) newAchievements.push("ten_likes");
    if (totalLikes === 25) newAchievements.push("twenty_five_likes");
    if (totalLikes === 50) newAchievements.push("fifty_likes");
    if (totalLikes === 100) newAchievements.push("hundred_likes");
  } else {
    session.skips++;
    session.currentStreak = 0;
  }

  saveSession(session);

  // Record new achievements
  const earnedAchievements = getEarnedAchievements();
  const trulyNew = newAchievements.filter((a) => !earnedAchievements.includes(a));
  if (trulyNew.length > 0) {
    saveEarnedAchievements([...earnedAchievements, ...trulyNew]);
  }

  return { session, newAchievements: trulyNew };
}

export function resetSession(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(SESSION_KEY);
}

// === Achievements ===

export function getEarnedAchievements(): AchievementId[] {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem(ACHIEVEMENTS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

export function saveEarnedAchievements(achievements: AchievementId[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(achievements));
}

export function hasAchievement(id: AchievementId): boolean {
  return getEarnedAchievements().includes(id);
}
