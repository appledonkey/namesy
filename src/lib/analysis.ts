/**
 * Name Analysis Utilities
 * Shared functions for analyzing baby names - syllables, flow, teasing potential, etc.
 */

// Bad acronym patterns to check - comprehensive list
export const BAD_ACRONYMS = [
  // Offensive/vulgar
  "ASS", "FUK", "FUC", "SEX", "FAG", "TIT", "NUT", "CUM", "COK", "DIK",
  "PEE", "POO", "BRA", "VAG", "HOR", "HOE", "STD", "HIV", "AIDS",
  // Hate symbols
  "KKK", "NAZ", "NZI",
  // Death/negative
  "DIE", "DED", "RIP", "SAD", "MAD", "BAD", "FAT", "PIG", "DOG", "RAT",
  "DUM", "SOB", "CRY", "WAR", "GUN", "SIN",
  // Internet/slang that could be embarrassing
  "WTF", "OMG", "LOL", "WTH", "FML", "SMH",
  // Other potentially problematic
  "POX", "FOB", "GAG", "GAY", "LSD", "POT", "BUM", "GIT", "COW",
  "EWW", "ICK", "MEH", "NAH", "UGH", "DUH",
];

/**
 * Count syllables in a word using vowel-based heuristics
 */
export function countSyllables(word: string): number {
  if (!word || word.length === 0) return 0;

  const lower = word.toLowerCase().trim();
  if (lower.length === 0) return 0;

  const matches = lower.match(/[aeiouy]+/g);
  let count = matches ? matches.length : 1;

  // Adjust for silent e at end
  if (lower.endsWith("e") && count > 1) count--;

  // Adjust for -le endings (like "bottle", "apple")
  if (lower.endsWith("le") && lower.length > 2) {
    const beforeLe = lower[lower.length - 3];
    if (!/[aeiouy]/.test(beforeLe)) count++;
  }

  // Adjust for common suffixes
  if (lower.endsWith("ed") && count > 1) {
    const beforeEd = lower[lower.length - 3];
    if (!/[dt]/.test(beforeEd)) count--;
  }

  return Math.max(1, count);
}

/**
 * Check if names have alliteration (same starting letter)
 */
export function hasAlliteration(names: string[]): boolean {
  const filtered = names.filter((n) => n.trim().length > 0);
  if (filtered.length < 2) return false;

  const firstLetters = filtered.map((n) => n.trim()[0].toLowerCase());
  return firstLetters.some((letter, i) =>
    firstLetters.slice(i + 1).includes(letter)
  );
}

/**
 * Check if names have rhyming endings
 */
export function hasRhyme(names: string[]): boolean {
  const filtered = names.filter((n) => n.trim().length > 0);
  if (filtered.length < 2) return false;

  const endings = filtered.map((n) => {
    const trimmed = n.trim().toLowerCase();
    return trimmed.length >= 2 ? trimmed.slice(-2) : trimmed;
  });

  return endings.some((ending, i) =>
    endings.slice(i + 1).includes(ending)
  );
}

/**
 * Calculate flow score (0-100) based on rhythm and sound patterns
 */
export function calculateFlowScore(names: string[]): number {
  const filtered = names.map(n => n.trim()).filter((n) => n.length > 0);
  if (filtered.length === 0) return 0;

  let score = 70; // Base score

  const syllableCounts = filtered.map(countSyllables);
  const totalSyllables = syllableCounts.reduce((a, b) => a + b, 0);

  // Syllable variety is good (2-1-2 pattern is pleasing)
  const hasVariety = new Set(syllableCounts).size > 1;
  if (hasVariety) score += 10;

  // Total syllables between 4-8 is ideal for full names
  if (totalSyllables >= 4 && totalSyllables <= 8) score += 10;
  if (totalSyllables < 3) score -= 10;
  if (totalSyllables > 10) score -= 10;

  // Alliteration can be pleasing
  if (hasAlliteration(filtered)) score += 5;

  // Rhyming is usually awkward
  if (hasRhyme(filtered)) score -= 15;

  // Penalize if all names are same length (monotonous)
  const lengths = filtered.map(n => n.length);
  if (new Set(lengths).size === 1 && filtered.length > 1) score -= 5;

  return Math.max(0, Math.min(100, score));
}

/**
 * Parse a name string that may contain multiple names (e.g., "Harold Hill" -> ["Harold", "Hill"])
 */
export function parseNameParts(name: string): string[] {
  return name
    .trim()
    .split(/\s+/)
    .filter((part) => part.length > 0);
}

/**
 * Get all individual name parts from first, middle, and last name inputs
 * Handles multiple middle names (e.g., "Harold Hill" becomes ["Harold", "Hill"])
 */
export function getAllNameParts(firstName: string, middleName: string, lastName: string): string[] {
  const firstParts = parseNameParts(firstName);
  const middleParts = parseNameParts(middleName);
  const lastParts = parseNameParts(lastName);
  return [...firstParts, ...middleParts, ...lastParts];
}

/**
 * Get initials from an array of names
 */
export function getInitials(names: string[]): string {
  return names
    .map((n) => n.trim())
    .filter((n) => n.length > 0)
    .map((n) => n[0].toUpperCase())
    .join("");
}

/**
 * Check if initials form a bad acronym
 */
export function isBadAcronym(initials: string): boolean {
  return BAD_ACRONYMS.includes(initials.toUpperCase());
}

/**
 * Calculate comprehensive analysis for a full name
 */
export interface NameAnalysis {
  fullName: string;
  initials: string;
  isBadAcronym: boolean;
  totalSyllables: number;
  syllableBreakdown: number[];
  flowScore: number;
  hasAlliteration: boolean;
  hasRhyme: boolean;
  hasName: boolean;
}

export function analyzeFullName(
  firstName: string,
  middleName: string,
  lastName: string
): NameAnalysis {
  // Parse all name parts, handling multiple middle names
  const allParts = getAllNameParts(firstName, middleName, lastName);
  const initials = getInitials(allParts);
  const syllableBreakdown = allParts.map(countSyllables);

  return {
    fullName: allParts.join(" "),
    initials,
    isBadAcronym: isBadAcronym(initials),
    totalSyllables: syllableBreakdown.reduce((a, b) => a + b, 0),
    syllableBreakdown,
    flowScore: calculateFlowScore(allParts),
    hasAlliteration: hasAlliteration(allParts),
    hasRhyme: hasRhyme(allParts),
    hasName: allParts.length > 0,
  };
}

/**
 * Calculate radar chart scores based on full name
 * Returns scores for 8 axes: Uniqueness, Timelessness, Pronunciation, Spelling,
 * Nicknames, Professional, Teasing Resistance, Flow
 */
export interface RadarScores {
  [key: string]: number;
  Uniqueness: number;
  Timelessness: number;
  Pronunciation: number;
  Spelling: number;
  Nicknames: number;
  Professional: number;
  "Teasing Resistance": number;
  Flow: number;
}

export function calculateRadarScores(
  firstName: string,
  middleName: string,
  lastName: string
): RadarScores {
  // Parse all name parts, handling multiple middle names
  const allParts = getAllNameParts(firstName, middleName, lastName);

  // Default scores when no name entered
  if (allParts.length === 0) {
    return {
      Uniqueness: 50,
      Timelessness: 50,
      Pronunciation: 50,
      Spelling: 50,
      Nicknames: 50,
      Professional: 50,
      "Teasing Resistance": 50,
      Flow: 50,
    };
  }

  const first = parseNameParts(firstName)[0] || "";
  const fullName = allParts.join(" ");
  const syllables = allParts.reduce((sum, n) => sum + countSyllables(n), 0);
  const flowScore = calculateFlowScore(allParts);

  // Heuristics (in production, pull from database)
  // Uniqueness: longer/unusual names tend to be more unique
  const uniqueness = Math.min(95, 40 + first.length * 5 + (first.match(/[^aeiou]{3}/i) ? 15 : 0));

  // Timelessness: classic names are usually 4-7 letters
  const timelessness = first.length >= 4 && first.length <= 7 ? 80 : 60;

  // Pronunciation: penalize unusual letter combos
  const unusualCombos = (fullName.match(/[^aeiou]{4,}|[aeiou]{3,}/gi) || []).length;
  const pronunciation = Math.max(40, 95 - unusualCombos * 15);

  // Spelling: shorter names are easier to spell
  const spelling = Math.max(50, 100 - fullName.replace(/\s/g, "").length * 2);

  // Nicknames: longer first names have more nickname potential
  const nicknames = first.length > 5 ? 85 : first.length > 3 ? 60 : 35;

  // Professional: multi-syllable names sound more professional
  const professional = syllables >= 4 ? 90 : syllables >= 3 ? 75 : 60;

  // Teasing resistance: check for rhymes and sounds
  const teasingResistance = hasRhyme(allParts) ? 45 : isBadAcronym(getInitials(allParts)) ? 30 : 85;

  return {
    Uniqueness: Math.max(10, Math.min(100, uniqueness)),
    Timelessness: Math.max(10, Math.min(100, timelessness)),
    Pronunciation: Math.max(10, Math.min(100, pronunciation)),
    Spelling: Math.max(10, Math.min(100, spelling)),
    Nicknames: Math.max(10, Math.min(100, nicknames)),
    Professional: Math.max(10, Math.min(100, professional)),
    "Teasing Resistance": Math.max(10, Math.min(100, teasingResistance)),
    Flow: Math.max(10, Math.min(100, flowScore)),
  };
}
