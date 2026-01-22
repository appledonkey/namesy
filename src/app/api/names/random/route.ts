import { NextRequest, NextResponse } from "next/server";
import { namesData } from "@/lib/names-data";

// Fisher-Yates shuffle
function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const gender = searchParams.get("gender") as "M" | "F" | "N" | "all" | null;
  const preset = searchParams.get("preset");
  const limit = Math.min(parseInt(searchParams.get("limit") || "100", 10), 500);
  const excludeIds = searchParams.get("exclude")?.split(",").filter(Boolean) || [];

  let filtered = [...namesData];

  // Gender filter
  if (gender && gender !== "all") {
    filtered = filtered.filter((n) => n.gender === gender);
  }

  // Preset filters
  if (preset === "classic") {
    filtered = filtered.filter((n) => n.currentRank > 0 && n.currentRank <= 100);
  } else if (preset === "modern") {
    filtered = filtered.filter((n) => n.trend === "rising" || (n.currentRank > 200 && n.currentRank <= 500));
  } else if (preset === "rare") {
    filtered = filtered.filter((n) => n.currentRank > 500 || n.currentRank === 0);
  } else if (preset === "short") {
    filtered = filtered.filter((n) => n.syllables <= 2);
  } else if (preset === "unique") {
    filtered = filtered.filter((n) => n.currentRank > 300 || n.currentRank === 0);
  }

  // Exclude already seen names
  if (excludeIds.length > 0) {
    const excludeSet = new Set(excludeIds);
    filtered = filtered.filter((n) => !excludeSet.has(n.id));
  }

  // Shuffle and limit
  const shuffled = shuffle(filtered).slice(0, limit);

  return NextResponse.json({
    names: shuffled,
    total: filtered.length,
    remaining: Math.max(0, filtered.length - excludeIds.length),
  });
}
