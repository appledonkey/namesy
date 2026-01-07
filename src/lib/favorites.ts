/**
 * Favorites System - localStorage utilities for saving favorite name combinations
 */

export interface FavoriteName {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  initials: string;
  savedAt: number;
}

const STORAGE_KEY = "babyname-favorites";

/**
 * Get all favorites from localStorage
 */
export function getFavorites(): FavoriteName[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as FavoriteName[];
  } catch {
    return [];
  }
}

/**
 * Save a name combination to favorites
 */
export function addFavorite(
  firstName: string,
  middleName: string,
  lastName: string,
  initials: string
): FavoriteName {
  const favorites = getFavorites();

  const fullName = [firstName, middleName, lastName]
    .filter((p) => p.trim())
    .join(" ");

  const newFavorite: FavoriteName = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    firstName,
    middleName,
    lastName,
    fullName,
    initials,
    savedAt: Date.now(),
  };

  // Check if already exists (same full name)
  const exists = favorites.some((f) => f.fullName === fullName);
  if (exists) {
    return favorites.find((f) => f.fullName === fullName)!;
  }

  const updated = [newFavorite, ...favorites];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  return newFavorite;
}

/**
 * Remove a favorite by ID
 */
export function removeFavorite(id: string): void {
  const favorites = getFavorites();
  const updated = favorites.filter((f) => f.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
}

/**
 * Check if a name combination is favorited
 */
export function isFavorited(firstName: string, middleName: string, lastName: string): boolean {
  const favorites = getFavorites();
  const fullName = [firstName, middleName, lastName]
    .filter((p) => p.trim())
    .join(" ");

  return favorites.some((f) => f.fullName === fullName);
}

/**
 * Clear all favorites
 */
export function clearFavorites(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Get the count of favorites
 */
export function getFavoritesCount(): number {
  return getFavorites().length;
}
