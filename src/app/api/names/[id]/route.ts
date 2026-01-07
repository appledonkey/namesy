import { NextRequest, NextResponse } from "next/server";
import { getNameById, getNameByName, namesData, NameData } from "@/lib/names-data";
import { calculateRadarScores } from "@/lib/analysis";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Try to find by ID first, then by name
  let nameData = getNameById(id);

  // Try by name if not found by ID
  if (!nameData) {
    nameData = getNameByName(id);
  }

  if (!nameData) {
    return NextResponse.json(
      { error: "Name not found" },
      { status: 404 }
    );
  }

  // Calculate radar scores
  const radarScores = calculateRadarScores(nameData.name, "", "");

  // Find similar names
  const similarNames = findSimilarNames(nameData);

  // Determine teasing risk level
  const teasingRiskLevel = getTeasingRiskLevel(nameData.name);

  // Build detailed response
  const detailedName = {
    id: nameData.id,
    name: nameData.name,
    normalizedName: nameData.normalizedName,
    gender: nameData.gender,
    origins: nameData.origins,
    meanings: nameData.meanings,
    syllables: nameData.syllables,
    phonetic: nameData.phonetic,
    nicknames: nameData.nicknames,
    alternateSpellings: nameData.alternateSpellings,
    famousNamesakes: nameData.famousNamesakes || [],
    currentRank: nameData.currentRank,
    trend: nameData.trend,
    scores: {
      uniqueness: radarScores.Uniqueness,
      timelessness: radarScores.Timelessness,
      pronunciation: radarScores.Pronunciation,
      spelling: radarScores.Spelling,
      nicknames: radarScores.Nicknames,
      professional: radarScores.Professional,
      teasingResistance: radarScores["Teasing Resistance"],
      flow: radarScores.Flow,
    },
    teasingRiskLevel,
    rhymingProblems: [],
    soundAlikeIssues: [],
    slangConflicts: [],
    popularityData: nameData.historicalRanks
      ? Object.entries(nameData.historicalRanks).map(([year, rank]) => ({
          year: parseInt(year),
          rank: rank,
        }))
      : [],
    similarNames,
  };

  return NextResponse.json(detailedName);
}

/**
 * Find similar names based on gender and characteristics
 */
function findSimilarNames(nameData: NameData): string[] {
  return namesData
    .filter((n) => {
      if (n.id === nameData.id) return false;
      if (n.gender !== nameData.gender) return false;

      // Similar syllables
      const syllableDiff = Math.abs(n.syllables - nameData.syllables);
      if (syllableDiff <= 1) return true;

      // Same origin
      const hasCommonOrigin = n.origins.some((o) => nameData.origins.includes(o));
      if (hasCommonOrigin) return true;

      return false;
    })
    .sort((a, b) => a.currentRank - b.currentRank)
    .slice(0, 6)
    .map((n) => n.name);
}

/**
 * Determine teasing risk level
 */
function getTeasingRiskLevel(name: string): "LOW" | "MEDIUM" | "HIGH" {
  const lowerName = name.toLowerCase();

  // Check for rhyming problems
  const commonRhymes = ["art", "ay", "ee", "oo", "ick", "uck"];
  const hasRhyme = commonRhymes.some((r) => lowerName.endsWith(r));

  // Check for sound-alike issues
  const soundAlikes = ["dick", "butt", "fart", "poo", "pee"];
  const hasSoundAlike = soundAlikes.some((s) => lowerName.includes(s));

  if (hasSoundAlike) return "HIGH";
  if (hasRhyme) return "MEDIUM";
  return "LOW";
}
