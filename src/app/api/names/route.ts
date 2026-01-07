import { NextRequest, NextResponse } from "next/server";
import {
  getPopularNames,
  getNamesByLetter,
  searchNames,
  NameData,
} from "@/lib/names-data";

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

    // Sanitize and validate query string (allow apostrophes and hyphens for names like O'Brien, Mary-Anne)
    const query = rawQuery.slice(0, MAX_QUERY_LENGTH).replace(/[^\w\s'-]/g, "");

    // Validate gender
    const gender = VALID_GENDERS.includes(rawGender as typeof VALID_GENDERS[number])
      ? (rawGender as "M" | "F" | "all")
      : "all";

    // Validate page (must be positive integer)
    const page = Math.max(1, Math.floor(Number(rawPage) || 1));

    // Validate limit (must be 1-100)
    const limit = Math.min(MAX_LIMIT, Math.max(1, Math.floor(Number(rawLimit) || 20)));

    // Validate letter (single A-Z character)
    const letter = rawLetter && /^[A-Za-z]$/.test(rawLetter) ? rawLetter.toUpperCase() : null;

    // If requesting popular names
    if (popular) {
      const names = getPopularNames(gender, limit);
      const formattedNames = names.map(formatName);

      return NextResponse.json({
        names: formattedNames,
        total: formattedNames.length,
        page: 1,
        limit,
        totalPages: 1,
      });
    }

    // If requesting by letter
    if (letter) {
      const names = getNamesByLetter(letter, { gender, limit });
      const formattedNames = names.map(formatName);

      return NextResponse.json({
        names: formattedNames,
        total: formattedNames.length,
        page: 1,
        limit,
        totalPages: 1,
      });
    }

    // Search by query
    const offset = (page - 1) * limit;
    const result = searchNames(query, { gender, limit, offset });
    const formattedNames = result.names.map(formatName);

    return NextResponse.json({
      names: formattedNames,
      total: result.total,
      page,
      limit,
      totalPages: Math.ceil(result.total / limit),
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch names" },
      { status: 500 }
    );
  }
}

// Helper to format name to API response format
function formatName(name: NameData) {
  return {
    id: name.id,
    name: name.name,
    normalizedName: name.normalizedName,
    gender: name.gender,
    origins: name.origins,
    meanings: name.meanings,
    syllables: name.syllables,
    phonetic: name.phonetic,
    nicknames: name.nicknames,
    alternateSpellings: name.alternateSpellings,
    currentRank: name.currentRank,
    trend: name.trend,
  };
}
