/**
 * Haptic feedback utility for mobile devices
 * Uses the Vibration API where available
 */

type HapticType = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'selection';

const patterns: Record<HapticType, number[]> = {
  light: [10],
  medium: [20],
  heavy: [30],
  success: [10, 30, 10],
  warning: [20, 20, 20],
  error: [40, 30, 40],
  selection: [5],
};

// Cached haptic enabled state — avoids parsing localStorage JSON on every haptic call
let cachedEnabled: boolean | null = null;

/**
 * Update the cached haptic enabled state.
 * Call this when settings change.
 */
export function setHapticEnabled(enabled: boolean): void {
  cachedEnabled = enabled;
}

/**
 * Check if haptics are enabled (reads cache, falls back to localStorage once)
 */
function isHapticEnabled(): boolean {
  if (cachedEnabled !== null) return cachedEnabled;
  if (typeof window === 'undefined') return true;
  try {
    const raw = localStorage.getItem("namesy-partner-app");
    if (raw) {
      const state = JSON.parse(raw);
      cachedEnabled = state?.settings?.hapticEnabled ?? true;
    } else {
      cachedEnabled = true;
    }
  } catch {
    cachedEnabled = true;
  }
  return cachedEnabled!;
}

/**
 * Trigger haptic feedback on supported devices
 */
export function haptic(type: HapticType = 'light'): void {
  if (typeof window === 'undefined') return;
  if (!isHapticEnabled()) return;

  if ('vibrate' in navigator) {
    try {
      navigator.vibrate(patterns[type]);
    } catch {
      // Silently fail if vibration not permitted
    }
  }
}

/**
 * Check if haptic feedback is supported
 */
export function isHapticSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'vibrate' in navigator;
}

/**
 * Haptic feedback for common actions
 */
export const haptics = {
  tap: () => haptic('light'),
  select: () => haptic('selection'),
  save: () => haptic('success'),
  delete: () => haptic('warning'),
  error: () => haptic('error'),
  random: () => haptic('medium'),
  swipe: () => haptic('light'),
  drag: () => haptic('selection'),
};
