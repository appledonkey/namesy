/**
 * Partner Storage - localStorage persistence for the partner matching app
 */

export interface FilterState {
  gender: "all" | "M" | "F" | "N";
  origins: string[];
  startingLetter: string | null;
  popularity: "all" | "top100" | "top500" | "rare";
  length: "all" | "short" | "medium" | "long";
}

export const defaultFilters: FilterState = {
  gender: "all",
  origins: [],
  startingLetter: null,
  popularity: "all",
  length: "all",
};

export interface PartnerData {
  name: string;
  likes: string[]; // Name IDs
  currentIndex: number;
  filters: FilterState;
}

export interface Settings {
  soundEnabled: boolean;
  hapticEnabled: boolean;
}

export interface AppState {
  partner1: PartnerData;
  partner2: PartnerData;
  matches: string[]; // Name IDs
  settings: Settings;
  onboardingComplete: boolean;
  shuffleSeed: number; // For consistent shuffle across sessions
  // Onboarding data
  surname?: string;
  middleName?: string;
  genderFilter: "all" | "M" | "F";
  sessionCode?: string;
  partnerMode: "solo" | "partner";
}

const STORAGE_KEY = "namesy-partner-app";

const defaultPartner: PartnerData = {
  name: "",
  likes: [],
  currentIndex: 0,
  filters: defaultFilters,
};

const defaultSettings: Settings = {
  soundEnabled: true,
  hapticEnabled: true,
};

const defaultState: AppState = {
  partner1: { ...defaultPartner, name: "Partner 1" },
  partner2: { ...defaultPartner, name: "Partner 2" },
  matches: [],
  settings: defaultSettings,
  onboardingComplete: false,
  shuffleSeed: Math.floor(Math.random() * 10000),
  surname: undefined,
  middleName: undefined,
  genderFilter: "all",
  sessionCode: undefined,
  partnerMode: "solo",
};

/**
 * Get the full app state from localStorage
 */
export function getAppState(): AppState {
  if (typeof window === "undefined") return defaultState;

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { ...defaultState, shuffleSeed: Math.floor(Math.random() * 10000) };

    const parsed = JSON.parse(stored) as Partial<AppState>;

    // Merge with defaults to handle missing fields from older versions
    return {
      partner1: { ...defaultPartner, ...parsed.partner1 },
      partner2: { ...defaultPartner, ...parsed.partner2 },
      matches: parsed.matches || [],
      settings: { ...defaultSettings, ...parsed.settings },
      onboardingComplete: parsed.onboardingComplete || false,
      shuffleSeed: parsed.shuffleSeed || Math.floor(Math.random() * 10000),
      surname: parsed.surname,
      middleName: parsed.middleName,
      genderFilter: parsed.genderFilter || "all",
      sessionCode: parsed.sessionCode,
      partnerMode: parsed.partnerMode || "solo",
    };
  } catch {
    return { ...defaultState, shuffleSeed: Math.floor(Math.random() * 10000) };
  }
}

/**
 * Save the full app state to localStorage
 */
export function saveAppState(state: AppState): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

/**
 * Update partner data
 */
export function updatePartner(partner: 1 | 2, data: Partial<PartnerData>): AppState {
  const state = getAppState();
  const key = partner === 1 ? "partner1" : "partner2";
  state[key] = { ...state[key], ...data };
  saveAppState(state);
  return state;
}

/**
 * Add a like for a partner
 */
export function addLike(partner: 1 | 2, nameId: string): { state: AppState; isMatch: boolean } {
  const state = getAppState();
  const currentKey = partner === 1 ? "partner1" : "partner2";
  const otherKey = partner === 1 ? "partner2" : "partner1";

  // Add to likes if not already there
  if (!state[currentKey].likes.includes(nameId)) {
    state[currentKey].likes = [...state[currentKey].likes, nameId];
  }

  // Check for match
  const isMatch = state[otherKey].likes.includes(nameId) && !state.matches.includes(nameId);
  if (isMatch) {
    state.matches = [...state.matches, nameId];
  }

  saveAppState(state);
  return { state, isMatch };
}

/**
 * Advance to next name for a partner
 */
export function advanceIndex(partner: 1 | 2): AppState {
  const state = getAppState();
  const key = partner === 1 ? "partner1" : "partner2";
  state[key].currentIndex += 1;
  saveAppState(state);
  return state;
}

/**
 * Process a swipe in a single batched operation
 * Combines like + index advance + match check for better performance
 */
export function processSwipe(
  partner: 1 | 2,
  nameId: string,
  liked: boolean
): { state: AppState; isMatch: boolean } {
  const state = getAppState();
  const currentKey = partner === 1 ? "partner1" : "partner2";
  const otherKey = partner === 1 ? "partner2" : "partner1";

  let isMatch = false;

  if (liked) {
    if (!state[currentKey].likes.includes(nameId)) {
      state[currentKey].likes = [...state[currentKey].likes, nameId];
    }
    isMatch = state[otherKey].likes.includes(nameId) && !state.matches.includes(nameId);
    if (isMatch) {
      state.matches = [...state.matches, nameId];
    }
  }

  state[currentKey].currentIndex += 1;
  saveAppState(state);
  return { state, isMatch };
}

/**
 * Remove a match
 */
export function removeMatch(nameId: string): AppState {
  const state = getAppState();
  state.matches = state.matches.filter((id) => id !== nameId);
  // Also remove from both partners' likes
  state.partner1.likes = state.partner1.likes.filter((id) => id !== nameId);
  state.partner2.likes = state.partner2.likes.filter((id) => id !== nameId);
  saveAppState(state);
  return state;
}

/**
 * Update settings
 */
export function updateSettings(settings: Partial<Settings>): AppState {
  const state = getAppState();
  state.settings = { ...state.settings, ...settings };
  saveAppState(state);
  return state;
}

// Middle name presets by gender
export const MIDDLE_NAME_PRESETS = {
  F: ["Rose", "Marie", "Grace", "Mae", "Anne", "Jane"],
  M: ["James", "Lee", "Michael", "Alexander", "John", "William"],
  N: ["Taylor", "Jordan", "Morgan", "Riley", "Quinn", "Avery"],
};

/**
 * Generate a random session code (e.g., "MAPLE-7X3K")
 */
export function generateSessionCode(): string {
  const words = ["MAPLE", "OLIVE", "WILLOW", "ASPEN", "CEDAR", "HAZEL", "BIRCH", "FERN", "FLORA", "BROOK"];
  const word = words[Math.floor(Math.random() * words.length)];
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Avoid ambiguous chars
  let code = "";
  for (let i = 0; i < 4; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return `${word}-${code}`;
}

export interface OnboardingData {
  surname?: string;
  middleName?: string;
  genderFilter: "all" | "M" | "F";
  partnerMode: "solo" | "partner";
  sessionCode?: string;
}

/**
 * Complete onboarding with data
 */
export function completeOnboarding(data: OnboardingData): AppState {
  const state = getAppState();
  state.onboardingComplete = true;
  state.surname = data.surname;
  state.middleName = data.middleName;
  state.genderFilter = data.genderFilter;
  state.partnerMode = data.partnerMode;
  state.sessionCode = data.sessionCode;
  saveAppState(state);
  return state;
}

/**
 * Update onboarding settings (for later changes via settings menu)
 */
export function updateOnboardingSettings(data: Partial<OnboardingData>): AppState {
  const state = getAppState();
  if (data.surname !== undefined) state.surname = data.surname;
  if (data.middleName !== undefined) state.middleName = data.middleName;
  if (data.genderFilter !== undefined) state.genderFilter = data.genderFilter;
  if (data.partnerMode !== undefined) state.partnerMode = data.partnerMode;
  if (data.sessionCode !== undefined) state.sessionCode = data.sessionCode;
  saveAppState(state);
  return state;
}

/**
 * Reset all progress
 */
export function resetProgress(): AppState {
  const newState: AppState = {
    ...defaultState,
    shuffleSeed: Math.floor(Math.random() * 10000),
  };
  saveAppState(newState);
  return newState;
}

/**
 * Check if onboarding is complete
 */
export function isOnboardingComplete(): boolean {
  return getAppState().onboardingComplete;
}

/**
 * Seeded random for consistent shuffling
 */
export function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/**
 * Shuffle array with seed for consistency
 */
export function shuffleWithSeed<T>(array: T[], seed: number): T[] {
  const shuffled = [...array];
  let m = shuffled.length;
  let s = seed;
  while (m) {
    const i = Math.floor(seededRandom(s++) * m--);
    [shuffled[m], shuffled[i]] = [shuffled[i], shuffled[m]];
  }
  return shuffled;
}
