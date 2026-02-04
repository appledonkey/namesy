/**
 * Haptic feedback utility for mobile devices
 * Uses the Vibration API where available
 */

import { getAppState } from "./partner-storage";

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

/**
 * Check if haptics are enabled in settings
 */
function isHapticEnabled(): boolean {
  if (typeof window === 'undefined') return true;
  try {
    const state = getAppState();
    return state.settings.hapticEnabled;
  } catch {
    return true; // Default to enabled if settings can't be read
  }
}

/**
 * Trigger haptic feedback on supported devices
 */
export function haptic(type: HapticType = 'light'): void {
  // Only run on client side
  if (typeof window === 'undefined') return;

  // Check if haptics are enabled in settings
  if (!isHapticEnabled()) return;

  // Check if vibration API is available
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
