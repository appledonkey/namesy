/**
 * Swipe Preferences System - localStorage utilities for tracking liked/disliked names
 */

export type SwipeAction = "like" | "superlike" | "dislike";

export interface SwipedName {
  id: string;
  name: string;
  action: SwipeAction;
  origins?: string[];
  meanings?: string[];
  swipedAt: number;
}

const STORAGE_KEY = "babyname-swipes";

/**
 * Get all swiped names from localStorage
 */
export function getSwipedNames(): SwipedName[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as SwipedName[];
  } catch {
    return [];
  }
}

/**
 * Get names by action type
 */
export function getNamesByAction(action: SwipeAction): SwipedName[] {
  return getSwipedNames().filter((n) => n.action === action);
}

/**
 * Get liked names (both like and superlike)
 */
export function getLikedNames(): SwipedName[] {
  return getSwipedNames().filter((n) => n.action === "like" || n.action === "superlike");
}

/**
 * Get super liked names only
 */
export function getSuperLikedNames(): SwipedName[] {
  return getSwipedNames().filter((n) => n.action === "superlike");
}

/**
 * Get disliked names
 */
export function getDislikedNames(): SwipedName[] {
  return getSwipedNames().filter((n) => n.action === "dislike");
}

/**
 * Record a swipe action for a name
 */
export function recordSwipe(
  name: string,
  action: SwipeAction,
  origins?: string[],
  meanings?: string[]
): SwipedName {
  const names = getSwipedNames();

  // Check if name already exists
  const existingIndex = names.findIndex((n) => n.name.toLowerCase() === name.toLowerCase());

  const swipedName: SwipedName = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    name,
    action,
    origins,
    meanings,
    swipedAt: Date.now(),
  };

  let updated: SwipedName[];
  if (existingIndex >= 0) {
    // Update existing entry
    updated = [...names];
    updated[existingIndex] = { ...swipedName, id: names[existingIndex].id };
  } else {
    // Add new entry at the beginning
    updated = [swipedName, ...names];
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return swipedName;
}

/**
 * Remove a swiped name by ID
 */
export function removeSwipedName(id: string): void {
  const names = getSwipedNames();
  const updated = names.filter((n) => n.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/**
 * Change the action for a swiped name (e.g., upgrade like to superlike)
 */
export function updateSwipeAction(id: string, newAction: SwipeAction): void {
  const names = getSwipedNames();
  const updated = names.map((n) =>
    n.id === id ? { ...n, action: newAction, swipedAt: Date.now() } : n
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/**
 * Check if a name has been swiped
 */
export function getSwipeStatus(name: string): SwipeAction | null {
  const names = getSwipedNames();
  const found = names.find((n) => n.name.toLowerCase() === name.toLowerCase());
  return found?.action || null;
}

/**
 * Clear all swiped names
 */
export function clearSwipedNames(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Clear names by action type
 */
export function clearByAction(action: SwipeAction): void {
  const names = getSwipedNames();
  const updated = names.filter((n) => n.action !== action);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/**
 * Get counts by action
 */
export function getSwipeCounts(): { liked: number; superliked: number; disliked: number } {
  const names = getSwipedNames();
  return {
    liked: names.filter((n) => n.action === "like").length,
    superliked: names.filter((n) => n.action === "superlike").length,
    disliked: names.filter((n) => n.action === "dislike").length,
  };
}

/**
 * Reorder a liked name (for organizing the list)
 */
export function reorderSwipedName(id: string, newIndex: number): void {
  const names = getSwipedNames();
  const currentIndex = names.findIndex((n) => n.id === id);

  if (currentIndex === -1 || newIndex < 0 || newIndex >= names.length) return;

  const [removed] = names.splice(currentIndex, 1);
  names.splice(newIndex, 0, removed);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(names));
}
