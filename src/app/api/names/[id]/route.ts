import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { calculateRadarScores } from "@/lib/analysis";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  // Try to find by ID first, then by name
  let nameData = await prisma.name.findUnique({
    where: { id },
    include: {
      origins: { include: { origin: true } },
      meanings: true,
      nicknames: true,
      alternateSpellings: true,
      popularityHistory: { orderBy: { year: "asc" } },
      namesakes: true,
    },
  });

  // Try by name if not found by ID (search both genders)
  if (!nameData) {
    nameData = await prisma.name.findFirst({
      where: { name: id.charAt(0).toUpperCase() + id.slice(1).toLowerCase() },
      include: {
        origins: { include: { origin: true } },
        meanings: true,
        nicknames: true,
        alternateSpellings: true,
        popularityHistory: { orderBy: { year: "asc" } },
        namesakes: true,
      },
    });
  }

  // Try by normalized name
  if (!nameData) {
    nameData = await prisma.name.findFirst({
      where: { normalizedName: id.toLowerCase() },
      include: {
        origins: { include: { origin: true } },
        meanings: true,
        nicknames: true,
        alternateSpellings: true,
        popularityHistory: { orderBy: { year: "asc" } },
        namesakes: true,
      },
    });
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
  const similarNames = await findSimilarNames(nameData);

  // Determine teasing risk level
  const teasingRiskLevel = getTeasingRiskLevel(nameData.name);

  // Build detailed response
  const detailedName = {
    id: nameData.id,
    name: nameData.name,
    normalizedName: nameData.normalizedName,
    gender: nameData.gender,
    origins: nameData.origins.map((o) => o.origin.name),
    meanings: nameData.meanings.map((m) => m.meaning),
    syllables: nameData.syllables,
    phonetic: nameData.phonetic,
    nicknames: nameData.nicknames.map((n) => n.nickname),
    alternateSpellings: nameData.alternateSpellings.map((a) => a.spelling),
    famousNamesakes: nameData.namesakes.map((n) => ({
      name: n.personName,
      description: n.description,
    })),
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
    popularityData: nameData.popularityHistory.map((h) => ({
      year: h.year,
      rank: h.rank,
    })),
    similarNames,
  };

  return NextResponse.json(detailedName);
}

/**
 * Find similar names based on gender and characteristics
 */
async function findSimilarNames(nameData: {
  id: string;
  gender: string;
  origins: { origin: { name: string } }[];
  syllables: number;
  name: string;
}): Promise<string[]> {
  const originNames = nameData.origins.map((o) => o.origin.name);

  // Find names with similar characteristics
  const similar = await prisma.name.findMany({
    where: {
      AND: [
        { id: { not: nameData.id } },
        { gender: nameData.gender },
        {
          OR: [
            // Similar syllables
            { syllables: { gte: nameData.syllables - 1, lte: nameData.syllables + 1 } },
            // Same origin
            { origins: { some: { origin: { name: { in: originNames } } } } },
          ],
        },
      ],
    },
    take: 6,
    orderBy: { currentRank: "asc" },
  });

  return similar.map((n) => n.name);
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
