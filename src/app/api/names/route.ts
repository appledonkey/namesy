import { NextRequest, NextResponse } from "next/server";
import { namesData, type NameData } from "@/lib/names-data";

export const dynamic = "force-static";

interface FilterParams {
  q?: string;
  gender?: "M" | "F" | "N" | "all";
  page?: number;
  limit?: number;
  origins?: string[];
  syllables?: number[];
  minRank?: number;
  maxRank?: number;
  startsWith?: string;
  preset?: string;
}

// Filter presets for quick discovery
const PRESETS: Record<string, (name: NameData) => boolean> = {
  classic: (n) => n.currentRank > 0 && n.currentRank <= 100 && n.trend === "stable",
  modern: (n) => n.trend === "rising" || (n.currentRank > 200 && n.currentRank <= 500),
  rare: (n) => n.currentRank > 500 || n.currentRank === 0,
  short: (n) => n.syllables <= 2,
  unique: (n) => n.currentRank > 300 || n.currentRank === 0,
  nature: (n) => {
    const natureKeywords = ["flower", "tree", "sky", "star", "moon", "sun", "river", "meadow", "rose", "lily", "ivy", "willow", "sage", "brook", "rain", "stone"];
    const nameLower = n.name.toLowerCase();
    const meaningLower = n.meanings.join(" ").toLowerCase();
    return natureKeywords.some(k => nameLower.includes(k) || meaningLower.includes(k));
  },
  biblical: (n) => n.origins.some(o => o.toLowerCase() === "hebrew" || o.toLowerCase() === "biblical"),
  literary: (n) => {
    const literaryNames = ["atticus", "juliet", "romeo", "ophelia", "darcy", "gatsby", "scout", "holden", "scarlett", "rhett", "hermione", "arwen", "eowyn", "samwise", "frodo"];
    return literaryNames.includes(n.name.toLowerCase());
  },
};

function filterNames(params: FilterParams): { names: NameData[]; total: number } {
  let filtered = [...namesData];

  // Search query
  if (params.q && params.q.trim()) {
    const query = params.q.toLowerCase().trim();
    filtered = filtered.filter(
      (n) =>
        n.name.toLowerCase().includes(query) ||
        n.normalizedName.includes(query) ||
        n.meanings.some((m) => m.toLowerCase().includes(query)) ||
        n.origins.some((o) => o.toLowerCase().includes(query))
    );
  }

  // Gender filter
  if (params.gender && params.gender !== "all") {
    filtered = filtered.filter((n) => n.gender === params.gender);
  }

  // Preset filter
  if (params.preset && PRESETS[params.preset]) {
    filtered = filtered.filter(PRESETS[params.preset]);
  }

  // Origins filter
  if (params.origins && params.origins.length > 0) {
    filtered = filtered.filter((n) =>
      n.origins.some((o) => params.origins!.includes(o.toLowerCase()))
    );
  }

  // Syllables filter
  if (params.syllables && params.syllables.length > 0) {
    filtered = filtered.filter((n) => params.syllables!.includes(n.syllables));
  }

  // Rank range
  if (params.minRank !== undefined) {
    filtered = filtered.filter((n) => n.currentRank >= params.minRank!);
  }
  if (params.maxRank !== undefined) {
    filtered = filtered.filter((n) => n.currentRank > 0 && n.currentRank <= params.maxRank!);
  }

  // Starts with letter
  if (params.startsWith) {
    filtered = filtered.filter((n) =>
      n.name.toLowerCase().startsWith(params.startsWith!.toLowerCase())
    );
  }

  const total = filtered.length;

  // Sort by rank (lower rank = more popular)
  filtered.sort((a, b) => {
    // Put ranked names first
    if (a.currentRank === 0 && b.currentRank > 0) return 1;
    if (b.currentRank === 0 && a.currentRank > 0) return -1;
    if (a.currentRank === 0 && b.currentRank === 0) return a.name.localeCompare(b.name);
    return a.currentRank - b.currentRank;
  });

  // Pagination
  const page = params.page || 1;
  const limit = Math.min(params.limit || 50, 200);
  const start = (page - 1) * limit;
  filtered = filtered.slice(start, start + limit);

  return { names: filtered, total };
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const params: FilterParams = {
    q: searchParams.get("q") || undefined,
    gender: (searchParams.get("gender") as FilterParams["gender"]) || undefined,
    page: searchParams.get("page") ? parseInt(searchParams.get("page")!, 10) : 1,
    limit: searchParams.get("limit") ? parseInt(searchParams.get("limit")!, 10) : 50,
    preset: searchParams.get("preset") || undefined,
    startsWith: searchParams.get("startsWith") || undefined,
    origins: searchParams.get("origins")?.split(",").filter(Boolean) || undefined,
    syllables: searchParams.get("syllables")
      ?.split(",")
      .map((s) => parseInt(s, 10))
      .filter((n) => !isNaN(n)) || undefined,
    minRank: searchParams.get("minRank") ? parseInt(searchParams.get("minRank")!, 10) : undefined,
    maxRank: searchParams.get("maxRank") ? parseInt(searchParams.get("maxRank")!, 10) : undefined,
  };

  const { names, total } = filterNames(params);

  return NextResponse.json({
    names,
    total,
    page: params.page,
    limit: params.limit,
    hasMore: (params.page! - 1) * params.limit! + names.length < total,
  });
}
