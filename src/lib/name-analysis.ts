/**
 * Name Analysis Functions
 * Calculate meaningful scores for the radar chart based on name properties
 */

export interface NameScores {
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

/**
 * Uniqueness (0-100)
 * How rare is this name? Based on popularity rank.
 */
export function calcUniqueness(currentRank: number): number {
  // Handle unranked names (very unique)
  if (currentRank <= 0 || currentRank > 5000) return 95;

  // Rank 1-10 = very common (score 10-20)
  if (currentRank <= 10) return 10 + currentRank;

  // Rank 11-50 = common (score 20-40)
  if (currentRank <= 50) return 20 + (currentRank - 10) * 0.5;

  // Rank 51-200 = moderate (score 40-60)
  if (currentRank <= 200) return 40 + (currentRank - 50) * 0.13;

  // Rank 201-500 = uncommon (score 60-80)
  if (currentRank <= 500) return 60 + (currentRank - 200) * 0.067;

  // Rank 500+ = rare (score 80-95)
  return Math.min(95, 80 + (currentRank - 500) * 0.005);
}

/**
 * Timelessness (0-100)
 * Has this name been consistently popular across decades?
 */
export function calcTimelessness(
  historicalRanks: Record<number, number> | undefined,
  trend: "rising" | "falling" | "stable"
): number {
  // No historical data - assume moderately timeless
  if (!historicalRanks || Object.keys(historicalRanks).length === 0) {
    return trend === "stable" ? 60 : trend === "rising" ? 45 : 55;
  }

  const years = Object.keys(historicalRanks).map(Number).sort();
  const ranks = years.map((y) => historicalRanks[y]).filter((r) => r > 0);

  if (ranks.length < 2) return 50;

  // Calculate how many decades the name has been ranked
  const decadesCovered = new Set(years.map((y) => Math.floor(y / 10))).size;
  const coverageScore = Math.min(40, decadesCovered * 6);

  // Calculate variance - low variance = more timeless
  const avg = ranks.reduce((a, b) => a + b, 0) / ranks.length;
  const variance = ranks.reduce((sum, r) => sum + Math.pow(r - avg, 2), 0) / ranks.length;
  const stdDev = Math.sqrt(variance);

  // stdDev of 0 = perfect stability (score 60)
  // stdDev of 100 = moderate variance (score 45)
  // stdDev of 300+ = high variance (score 20)
  const stabilityScore = Math.max(20, 60 - stdDev * 0.13);

  // Bonus for names ranked in both old and recent years
  const hasOldData = years.some((y) => y < 1960);
  const hasRecentData = years.some((y) => y > 2010);
  const spanBonus = hasOldData && hasRecentData ? 10 : 0;

  return Math.min(100, coverageScore + stabilityScore + spanBonus);
}

/**
 * Pronunciation (0-100)
 * How easy is this name to say correctly on first try?
 */
export function calcPronunciation(name: string, syllables: number): number {
  let score = 85;
  const lower = name.toLowerCase();

  // Difficult consonant clusters
  if (/(?:sch|thr|shr|chr|phl|gn|kn|wr|ps|pt)/i.test(lower)) score -= 15;

  // Unusual letter combinations
  if (/(?:ae|oe|uy|yi|yw|iou|eaux)/i.test(lower)) score -= 12;

  // Too many syllables
  if (syllables > 3) score -= (syllables - 3) * 8;
  if (syllables > 5) score -= 10;

  // Ambiguous pronunciations
  if (/(?:gh|ough|eau|eigh)/i.test(lower)) score -= 10;

  // Names starting with unusual sounds
  if (/^(?:x|pn|gn|kn|ps|wr|rh)/i.test(lower)) score -= 10;

  // Foreign-looking combinations that English speakers struggle with
  if (/(?:szc|cz|zh|dj|nj|lj)/i.test(lower)) score -= 15;

  // Bonus for simple, phonetic structure
  if (/^[bcdfghjklmnprstvw]?[aeiou][bcdfgklmnprst]?[aeiouy]?[bcdfgklmnrst]?$/i.test(lower)) {
    score += 10;
  }

  // Bonus for common, easily pronounced patterns
  if (/^(?:ma|da|ja|sa|ka|la|na|ra|ta|jo|to|an|en|in|al|el)/i.test(lower)) {
    score += 5;
  }

  return Math.max(25, Math.min(100, score));
}

/**
 * Spelling (0-100)
 * Can someone spell this name after hearing it?
 */
export function calcSpelling(name: string, alternateSpellings: string[]): number {
  let score = 85;
  const lower = name.toLowerCase();

  // Silent letters
  if (/(?:gh(?![aeiou])|kn|wr|mb$|gn|ps|pt|bt|mn)/i.test(lower)) score -= 12;

  // Letters that could be spelled differently
  if (/(?:ph|ck|que|ght|ould|tion|sion)/i.test(lower)) score -= 8;

  // C or K ambiguity
  if (/c(?=[aou])/i.test(lower) || /k(?=[ei])/i.test(lower)) score -= 5;

  // Many alternate spellings = confusion
  score -= Math.min(25, alternateSpellings.length * 8);

  // Unusual/trendy endings
  if (/(?:leigh|eigh|ynn|elle|ette|aine|ayne|yn)$/i.test(lower)) score -= 12;

  // Double letters that could be single
  if (/(?:ll|nn|tt|ff|rr|ss)/i.test(lower)) score -= 4;

  // Y where I could work
  if (/y(?=[aeiou])/i.test(lower) || /[aeiou]y[aeiou]/i.test(lower)) score -= 6;

  // Bonus for short, simple names
  if (name.length <= 4 && /^[a-z]+$/i.test(name)) score += 10;

  // Bonus for perfectly phonetic names
  if (/^[bcdfghjklmnprstvwz]?[aeiou][bcdfghjklmnprstvwz]?[aeiou]?[nrls]?$/i.test(lower)) {
    score += 8;
  }

  return Math.max(20, Math.min(100, score));
}

/**
 * Nicknames (0-100)
 * Does this name have good nickname potential?
 */
export function calcNicknames(
  name: string,
  nicknames: string[],
  syllables: number
): number {
  // Short names (1-2 syllables) don't really need nicknames
  if (syllables <= 2) {
    if (nicknames.length === 0) return 65; // Acceptable
    if (nicknames.length >= 1) return 80; // Bonus that they exist
  }

  // Longer names should have nickname options
  if (syllables >= 3 && nicknames.length === 0) return 35;

  // Score based on number of nickname options
  let score = 40 + Math.min(40, nicknames.length * 15);

  // Bonus if name naturally shortens (first 2-3 letters work)
  const shortForm = name.slice(0, 3).toLowerCase();
  const naturalShorten = /^[a-z]{2,3}[aeiou]?$/i.test(shortForm);
  if (naturalShorten && name.length > 4) score += 10;

  // Bonus for having both formal and casual options
  if (nicknames.length >= 2) score += 10;

  // Bonus for versatile nicknames (can go by full name OR nickname)
  if (nicknames.length >= 3) score += 5;

  return Math.max(30, Math.min(100, score));
}

/**
 * Professional (0-100)
 * Will this name work well in a professional setting?
 */
export function calcProfessional(
  name: string,
  syllables: number,
  gender: "M" | "F" | "N"
): number {
  let score = 70;
  const lower = name.toLowerCase();

  // Longer names often sound more formal
  if (name.length >= 6 && syllables >= 2) score += 10;
  if (name.length >= 8 && syllables >= 3) score += 5;

  // Very short names less professional sounding
  if (name.length <= 3) score -= 15;

  // Names ending in -y/-ie/-i often sound youthful/informal
  if (/(?:y|ie|i|ee)$/i.test(lower)) score -= 12;

  // Classical/traditional endings sound professional
  if (/(?:ander|iam|iel|than|olas|rew|ard|ert)$/i.test(lower)) score += 12;
  if (/(?:ine|line|beth|anne|leen|dra|ra)$/i.test(lower)) score += 10;

  // Trendy modern patterns less professional
  if (/(?:aiden|ayden|aden|lyn|lynn|leigh)/i.test(lower)) score -= 10;

  // Unusual letters (x, z) can seem less traditional
  if (/[xz]/i.test(lower) && name.length < 6) score -= 8;

  // Names that are primarily nicknames
  const nicknameNames = ["billy", "bobby", "jimmy", "johnny", "tommy", "danny", "sammy", "teddy", "jerry", "jenny", "sally", "molly", "polly"];
  if (nicknameNames.includes(lower)) score -= 15;

  // Gender-neutral names often perceived well professionally
  if (gender === "N") score += 5;

  // Classic names get a bonus
  const classicNames = ["james", "william", "elizabeth", "catherine", "michael", "david", "sarah", "margaret", "richard", "robert", "mary", "anne"];
  if (classicNames.includes(lower)) score += 15;

  return Math.max(25, Math.min(100, score));
}

/**
 * Teasing Resistance (0-100)
 * How resistant is this name to playground teasing?
 */
export function calcTeasingResistance(name: string): number {
  let score = 88;
  const lower = name.toLowerCase();

  // Rhymes with or contains problematic sounds
  const badPatterns = [
    { pattern: /art$/, penalty: 20 },
    { pattern: /ick$/, penalty: 20 },
    { pattern: /utt/, penalty: 25 },
    { pattern: /ass/, penalty: 30 },
    { pattern: /uck/, penalty: 25 },
    { pattern: /ork$/, penalty: 15 },
    { pattern: /erd$/, penalty: 15 },
    { pattern: /ussy/, penalty: 30 },
    { pattern: /enis/, penalty: 30 },
    { pattern: /oop/, penalty: 15 },
    { pattern: /eek$/, penalty: 10 },
    { pattern: /pee/, penalty: 15 },
    { pattern: /poo/, penalty: 15 },
  ];

  for (const { pattern, penalty } of badPatterns) {
    if (pattern.test(lower)) {
      score -= penalty;
      break; // Only apply worst one
    }
  }

  // Names that sound like embarrassing words
  const problematicNames = ["dick", "peter", "willy", "fanny", "gaylord", "randy", "woody"];
  if (problematicNames.includes(lower)) score -= 30;

  // Very unusual/long names get teased more
  if (name.length > 10) score -= 8;
  if (name.length > 12) score -= 7;

  // Very unusual spellings
  if (/(?:xxy|yyy|iii|eee)/i.test(lower)) score -= 10;

  // Names that easily become negative with prefixes
  // (e.g., "Smelly" + name starting with vowel)
  if (/^[aeiou]/i.test(lower)) score -= 3;

  return Math.max(15, Math.min(100, score));
}

/**
 * Flow (0-100)
 * How well does this name "flow" when spoken?
 */
export function calcFlow(name: string, syllables: number): number {
  let score = 65;
  const lower = name.toLowerCase();

  // Ideal syllable count is 2-3
  if (syllables === 2) score += 15;
  else if (syllables === 3) score += 12;
  else if (syllables === 1) score += 5;
  else if (syllables === 4) score += 0;
  else if (syllables > 4) score -= 10;

  // Good consonant-vowel alternation creates flow
  const cvPattern = lower.replace(/[aeiou]/g, "V").replace(/[^V]/g, "C");
  const goodAlternations = (cvPattern.match(/CV|VC/g) || []).length;
  score += Math.min(12, goodAlternations * 2);

  // Consonant clusters break flow
  const clusters = lower.match(/[bcdfghjklmnpqrstvwxyz]{3,}/g) || [];
  score -= clusters.length * 8;

  // Ends on a vowel = softer, more flowing
  if (/[aeiou]$/i.test(lower)) score += 8;
  if (/[aie]$/i.test(lower)) score += 3; // Particularly soft endings

  // Harsh consonant endings
  if (/[kptx]$/i.test(lower)) score -= 6;
  if (/ck$/i.test(lower)) score -= 4;

  // Pleasant, melodic starting sounds
  if (/^[aejmls]/i.test(lower)) score += 5;

  // Repetitive sounds can be pleasing
  if (/(.)\1/i.test(lower) && !/(.)\1\1/i.test(lower)) score += 3;

  // Alliteration within name
  if (/^([bcdfghjklmnprstvw])[aeiou]+\1/i.test(lower)) score += 5;

  return Math.max(30, Math.min(100, score));
}

/**
 * Calculate all scores for a name
 */
export function analyzeNameScores(
  name: string,
  gender: "M" | "F" | "N",
  syllables: number,
  nicknames: string[],
  alternateSpellings: string[],
  currentRank: number,
  trend: "rising" | "falling" | "stable",
  historicalRanks?: Record<number, number>
): NameScores {
  return {
    Uniqueness: Math.round(calcUniqueness(currentRank)),
    Timelessness: Math.round(calcTimelessness(historicalRanks, trend)),
    Pronunciation: Math.round(calcPronunciation(name, syllables)),
    Spelling: Math.round(calcSpelling(name, alternateSpellings)),
    Nicknames: Math.round(calcNicknames(name, nicknames, syllables)),
    Professional: Math.round(calcProfessional(name, syllables, gender)),
    "Teasing Resistance": Math.round(calcTeasingResistance(name)),
    Flow: Math.round(calcFlow(name, syllables)),
  };
}
