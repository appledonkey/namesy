import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Constants for validation
const MAX_LIMIT = 100;
const MAX_QUERY_LENGTH = 50;
const VALID_GENDERS = ["M", "F", "all"] as const;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    // Parse and validate query parameters
    const rawQuery = searchParams.get("q") || "";
    const rawGender = searchParams.get("gender");
    const rawPage = searchParams.get("page");
    const rawLimit = searchParams.get("limit");
    const popular = searchParams.get("popular") === "true";
    const rawLetter = searchParams.get("letter");

    // Sanitize and validate query string
    const query = rawQuery.slice(0, MAX_QUERY_LENGTH).replace(/[^\w\s-]/g, "");

    // Validate gender
    const gender = VALID_GENDERS.includes(rawGender as typeof VALID_GENDERS[number])
      ? (rawGender as "M" | "F" | "all")
      : null;

    // Validate page (must be positive integer)
    const page = Math.max(1, Math.floor(Number(rawPage) || 1));

    // Validate limit (must be 1-100)
    const limit = Math.min(MAX_LIMIT, Math.max(1, Math.floor(Number(rawLimit) || 20)));

    // Validate letter (single A-Z character)
    const letter = rawLetter && /^[A-Za-z]$/.test(rawLetter) ? rawLetter.toUpperCase() : null;

    // Build where clause
    const where: {
      gender?: string;
      OR?: { normalizedName?: { contains: string } }[];
      name?: { startsWith: string };
    } = {};

    if (gender && gender !== "all") {
      where.gender = gender;
    }

    if (query) {
      where.OR = [
        { normalizedName: { contains: query.toLowerCase() } },
      ];
    }

    if (letter) {
      where.name = { startsWith: letter };
    }

    // If requesting popular names
    if (popular) {
      const names = await prisma.name.findMany({
        where,
        orderBy: { currentRank: "asc" },
        take: limit,
        include: {
          origins: { include: { origin: true } },
          meanings: true,
          nicknames: true,
          alternateSpellings: true,
        },
      });

      const formattedNames = names.map(formatName);

      return NextResponse.json({
        names: formattedNames,
        total: formattedNames.length,
        page: 1,
        limit,
        totalPages: 1,
      });
    }

    // Get total count
    const total = await prisma.name.count({ where });

    // Get paginated results
    const offset = (page - 1) * limit;
    const names = await prisma.name.findMany({
      where,
      orderBy: letter ? { name: "asc" } : { currentRank: "asc" },
      skip: offset,
      take: limit,
      include: {
        origins: { include: { origin: true } },
        meanings: true,
        nicknames: true,
        alternateSpellings: true,
      },
    });

    const formattedNames = names.map(formatName);

    return NextResponse.json({
      names: formattedNames,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch names" },
      { status: 500 }
    );
  }
}

// Helper to format database name to API response format
function formatName(dbName: {
  id: string;
  name: string;
  normalizedName: string;
  gender: string;
  syllables: number;
  phonetic: string | null;
  currentRank: number;
  trend: string;
  origins: { origin: { name: string } }[];
  meanings: { meaning: string }[];
  nicknames: { nickname: string }[];
  alternateSpellings: { spelling: string }[];
}) {
  return {
    id: dbName.id,
    name: dbName.name,
    normalizedName: dbName.normalizedName,
    gender: dbName.gender,
    origins: dbName.origins.map((o) => o.origin.name),
    meanings: dbName.meanings.map((m) => m.meaning),
    syllables: dbName.syllables,
    phonetic: dbName.phonetic,
    nicknames: dbName.nicknames.map((n) => n.nickname),
    alternateSpellings: dbName.alternateSpellings.map((a) => a.spelling),
    currentRank: dbName.currentRank,
    trend: dbName.trend,
  };
}
