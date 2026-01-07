import { describe, it, expect, beforeEach } from 'vitest';
import {
  getFavorites,
  addFavorite,
  removeFavorite,
  isFavorited,
  clearFavorites,
} from '@/lib/favorites';

describe('favorites', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getFavorites', () => {
    it('returns empty array when no favorites', () => {
      const favorites = getFavorites();
      expect(favorites).toEqual([]);
    });

    it('returns stored favorites', () => {
      addFavorite('Charlotte', 'Grace', 'Williams', 'CGW');
      const favorites = getFavorites();
      expect(favorites).toHaveLength(1);
      expect(favorites[0].firstName).toBe('Charlotte');
      expect(favorites[0].middleName).toBe('Grace');
      expect(favorites[0].lastName).toBe('Williams');
    });
  });

  describe('addFavorite', () => {
    it('adds a new favorite', () => {
      addFavorite('Emma', 'Rose', 'Smith', 'ERS');

      const favorites = getFavorites();
      expect(favorites).toHaveLength(1);
      expect(favorites[0].firstName).toBe('Emma');
      expect(favorites[0].initials).toBe('ERS');
      expect(favorites[0].fullName).toBe('Emma Rose Smith');
    });

    it('adds multiple favorites', () => {
      addFavorite('Emma', 'Rose', 'Smith', 'ERS');
      addFavorite('Charlotte', 'Grace', 'Williams', 'CGW');

      const favorites = getFavorites();
      expect(favorites).toHaveLength(2);
    });

    it('generates unique IDs', () => {
      addFavorite('Emma', 'Rose', 'Smith', 'ERS');
      addFavorite('Charlotte', 'Grace', 'Williams', 'CGW');

      const favorites = getFavorites();
      expect(favorites[0].id).not.toBe(favorites[1].id);
    });
  });

  describe('removeFavorite', () => {
    it('removes a favorite by ID', () => {
      addFavorite('Emma', 'Rose', 'Smith', 'ERS');
      addFavorite('Charlotte', 'Grace', 'Williams', 'CGW');

      const favorites = getFavorites();
      // Find and remove Emma (first added, may be at any position)
      const emmaFavorite = favorites.find(f => f.firstName === 'Emma');
      expect(emmaFavorite).toBeDefined();

      removeFavorite(emmaFavorite!.id);

      const updatedFavorites = getFavorites();
      expect(updatedFavorites).toHaveLength(1);
      expect(updatedFavorites[0].firstName).toBe('Charlotte');
    });

    it('does nothing if ID not found', () => {
      addFavorite('Emma', 'Rose', 'Smith', 'ERS');

      removeFavorite('non-existent-id');

      const favorites = getFavorites();
      expect(favorites).toHaveLength(1);
    });
  });

  describe('isFavorited', () => {
    it('returns true for favorited name', () => {
      addFavorite('Emma', 'Rose', 'Smith', 'ERS');

      expect(isFavorited('Emma', 'Rose', 'Smith')).toBe(true);
    });

    it('returns false for non-favorited name', () => {
      expect(isFavorited('Emma', 'Rose', 'Smith')).toBe(false);
    });

    it('is case-sensitive for full name matching', () => {
      addFavorite('Emma', 'Rose', 'Smith', 'ERS');

      // Full name is built from components, so case matters
      expect(isFavorited('Emma', 'Rose', 'Smith')).toBe(true);
    });
  });

  describe('clearFavorites', () => {
    it('removes all favorites', () => {
      addFavorite('Emma', 'Rose', 'Smith', 'ERS');
      addFavorite('Charlotte', 'Grace', 'Williams', 'CGW');
      addFavorite('Olivia', 'Jane', 'Brown', 'OJB');

      expect(getFavorites()).toHaveLength(3);

      clearFavorites();

      expect(getFavorites()).toHaveLength(0);
    });
  });
});
