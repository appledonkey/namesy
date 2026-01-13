/**
 * Sibling Name Compatibility
 * Utilities for finding names that pair well with existing children's names
 */

import {
  type NameData,
  getNameByName,
  generateVibes,
  type NameVibe,
} from "./names-data";

export interface SiblingProfile {
  name: string;
  syllables: number;
  firstLetter: string;
  origins: string[];
  vibes: NameVibe[];
  endingSound: string;
}

export interface CompatibilityScore {
  score: number; // 0-100
  reasons: string[];
}

/**
 * Create a profile from a name string
 */
export function createSiblingProfile(nameStr: string): SiblingProfile | null {
  const nameData = getNameByName(nameStr);

  if (nameData) {
    return {
      name: nameData.name,
      syllables: nameData.syllables,
      firstLetter: nameData.name[0].toLowerCase(),
      origins: nameData.origins,
      vibes: generateVibes(nameData),
      endingSound: nameData.name.slice(-2).toLowerCase(),
    };
  }

  // If name not in database, create basic profile
  if (nameStr.length > 0) {
    const syllables = (nameStr.toLowerCase().match(/[aeiouy]+/g) || []).length || 1;
    return {
      name: nameStr,
      syllables,
      firstLetter: nameStr[0].toLowerCase(),
      origins: [],
      vibes: [],
      endingSound: nameStr.slice(-2).toLowerCase(),
    };
  }

  return null;
}

/**
 * Calculate compatibility score between a sibling and a candidate name
 */
export function calculateCompatibility(
  sibling: SiblingProfile,
  candidate: NameData
): CompatibilityScore {
  let score = 50; // Start neutral
  const reasons: string[] = [];
  const candidateVibes = generateVibes(candidate);

  // Shared vibes (good - siblings match in style)
  const sharedVibes = sibling.vibes.filter(v => candidateVibes.includes(v));
  if (sharedVibes.length > 0) {
    score += sharedVibes.length * 10;
    reasons.push(`Similar style: ${sharedVibes.join(", ")}`);
  }

  // Shared origins (good - cultural consistency)
  const sharedOrigins = sibling.origins.filter(o =>
    candidate.origins.some(co => co.toLowerCase() === o.toLowerCase())
  );
  if (sharedOrigins.length > 0) {
    score += 15;
    reasons.push(`Same origin: ${sharedOrigins[0]}`);
  }

  // Similar syllable count (good - balanced rhythm)
  const syllableDiff = Math.abs(sibling.syllables - candidate.syllables);
  if (syllableDiff === 0) {
    score += 5;
    reasons.push("Matching syllables");
  } else if (syllableDiff === 1) {
    score += 10;
    reasons.push("Complementary rhythm");
  }

  // Same first letter (can be good or bad)
  if (sibling.firstLetter === candidate.name[0].toLowerCase()) {
    // Slight bonus for matching initials (cute for siblings)
    score += 5;
    reasons.push("Matching initials");
  }

  // Same ending sound (avoid - too rhyme-y)
  if (sibling.endingSound === candidate.name.slice(-2).toLowerCase()) {
    score -= 20;
    reasons.push("Similar endings (may rhyme)");
  }

  // Same name (definitely avoid!)
  if (sibling.name.toLowerCase() === candidate.name.toLowerCase()) {
    score = 0;
    reasons.push("Same name as sibling");
  }

  // Ensure score is within bounds
  score = Math.max(0, Math.min(100, score));

  return { score, reasons };
}

/**
 * Filter names by compatibility with sibling
 */
export function filterCompatibleNames(
  names: NameData[],
  siblingName: string,
  minScore: number = 50
): NameData[] {
  const siblingProfile = createSiblingProfile(siblingName);
  if (!siblingProfile) return names;

  return names
    .filter(name => {
      const { score } = calculateCompatibility(siblingProfile, name);
      return score >= minScore;
    })
    .sort((a, b) => {
      const scoreA = calculateCompatibility(siblingProfile, a).score;
      const scoreB = calculateCompatibility(siblingProfile, b).score;
      return scoreB - scoreA; // Higher scores first
    });
}

/**
 * Get compatibility rating for display
 */
export function getCompatibilityRating(
  siblingName: string,
  candidateName: NameData
): { rating: string; score: number } {
  const siblingProfile = createSiblingProfile(siblingName);
  if (!siblingProfile) return { rating: "Unknown", score: 50 };

  const { score } = calculateCompatibility(siblingProfile, candidateName);

  let rating: string;
  if (score >= 80) rating = "Great match";
  else if (score >= 65) rating = "Good match";
  else if (score >= 50) rating = "Okay match";
  else rating = "Consider other options";

  return { rating, score };
}

/**
 * Check if a name pairs well with sibling
 */
export function pairsWellWithSibling(
  siblingName: string,
  candidateName: NameData
): boolean {
  const siblingProfile = createSiblingProfile(siblingName);
  if (!siblingProfile) return true; // No sibling = all names okay

  const { score } = calculateCompatibility(siblingProfile, candidateName);
  return score >= 50;
}
