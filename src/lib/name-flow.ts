/**
 * Name Flow Analysis
 * Utilities for analyzing how well names flow together
 */

export interface FlowAnalysis {
  score: number; // 0-100
  rating: "excellent" | "good" | "fair" | "poor";
  issues: string[];
  strengths: string[];
}

// Vowel and consonant patterns
const VOWELS = /[aeiou]/gi;
const HARD_ENDINGS = /[ktpbdg]$/i;
const SOFT_ENDINGS = /[aeiounlrsy]$/i;

/**
 * Count syllables in a word (approximation)
 */
function countSyllables(word: string): number {
  const vowelGroups = word.toLowerCase().match(/[aeiouy]+/g);
  if (!vowelGroups) return 1;

  let count = vowelGroups.length;

  // Adjust for silent e
  if (/e$/i.test(word) && count > 1) {
    count--;
  }

  return Math.max(1, count);
}

/**
 * Get the ending sound of a name
 */
function getEndingSound(name: string): string {
  return name.slice(-2).toLowerCase();
}

/**
 * Get the starting sound of a name
 */
function getStartingSound(name: string): string {
  return name.slice(0, 2).toLowerCase();
}

/**
 * Check for alliteration (same starting letter)
 */
function hasAlliteration(names: string[]): boolean {
  const firstLetters = names.map(n => n[0]?.toLowerCase());
  return new Set(firstLetters).size < firstLetters.length;
}

/**
 * Check for rhyming endings
 */
function hasRhymingEndings(names: string[]): boolean {
  const endings = names.map(n => getEndingSound(n));
  return new Set(endings).size < endings.length;
}

/**
 * Analyze syllable rhythm pattern
 */
function analyzeRhythm(names: string[]): { pattern: number[]; isBalanced: boolean } {
  const pattern = names.map(countSyllables);
  const total = pattern.reduce((a, b) => a + b, 0);

  // Good rhythm: varied syllables, not all the same
  const uniqueCounts = new Set(pattern).size;
  const isBalanced = uniqueCounts > 1 || pattern.length === 1;

  return { pattern, isBalanced };
}

/**
 * Check if adjacent names flow smoothly (no awkward sound combinations)
 */
function checkSoundFlow(name1: string, name2: string): boolean {
  const ending = getEndingSound(name1);
  const starting = getStartingSound(name2);

  // Avoid same sounds running together
  if (ending === starting) return false;

  // Avoid hard ending + hard start
  if (HARD_ENDINGS.test(name1) && /^[ktpbdg]/i.test(name2)) return false;

  return true;
}

/**
 * Analyze full name flow (first, middle?, last)
 */
export function analyzeNameFlow(
  firstName: string,
  lastName: string,
  middleName?: string
): FlowAnalysis {
  const names = middleName
    ? [firstName, middleName, lastName]
    : [firstName, lastName];

  let score = 100;
  const issues: string[] = [];
  const strengths: string[] = [];

  // Check alliteration
  if (hasAlliteration(names)) {
    // Mild alliteration can be nice
    if (names.every(n => n[0]?.toLowerCase() === names[0][0]?.toLowerCase())) {
      score -= 15;
      issues.push("All names start with same letter");
    } else {
      strengths.push("Pleasant alliteration");
    }
  }

  // Check rhyming endings
  if (hasRhymingEndings(names)) {
    score -= 20;
    issues.push("Names have similar endings");
  }

  // Check rhythm
  const rhythm = analyzeRhythm(names);
  if (rhythm.isBalanced) {
    strengths.push(`Nice rhythm (${rhythm.pattern.join("-")} syllables)`);
  } else {
    score -= 10;
    issues.push("Syllable pattern is repetitive");
  }

  // Check sound flow between adjacent names
  for (let i = 0; i < names.length - 1; i++) {
    if (!checkSoundFlow(names[i], names[i + 1])) {
      score -= 15;
      issues.push(`"${names[i]} ${names[i + 1]}" may be hard to say`);
    }
  }

  // Check total length
  const totalSyllables = rhythm.pattern.reduce((a, b) => a + b, 0);
  if (totalSyllables > 8) {
    score -= 10;
    issues.push("Full name is quite long");
  } else if (totalSyllables >= 4 && totalSyllables <= 6) {
    strengths.push("Good overall length");
  }

  // Determine rating
  let rating: FlowAnalysis["rating"];
  if (score >= 85) rating = "excellent";
  else if (score >= 70) rating = "good";
  else if (score >= 50) rating = "fair";
  else rating = "poor";

  // Ensure at least one strength
  if (strengths.length === 0 && score >= 50) {
    strengths.push("Name flows reasonably well");
  }

  return {
    score: Math.max(0, Math.min(100, score)),
    rating,
    issues,
    strengths,
  };
}

/**
 * Quick check if a name combination flows well
 */
export function flowsWell(
  firstName: string,
  lastName: string,
  middleName?: string
): boolean {
  const analysis = analyzeNameFlow(firstName, lastName, middleName);
  return analysis.rating === "excellent" || analysis.rating === "good";
}

/**
 * Get a simple flow description
 */
export function getFlowDescription(
  firstName: string,
  lastName: string,
  middleName?: string
): string {
  const analysis = analyzeNameFlow(firstName, lastName, middleName);

  switch (analysis.rating) {
    case "excellent":
      return "Flows beautifully";
    case "good":
      return "Flows well";
    case "fair":
      return "Flows okay";
    case "poor":
      return "Consider alternatives";
  }
}
