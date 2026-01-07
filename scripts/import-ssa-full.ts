/**
 * Full SSA Baby Names Import Script
 *
 * Imports the SSA baby names dataset (top 1000 names per year, 1880-2008)
 * This dataset contains ~258,000 records with unique names and yearly popularity.
 *
 * Data source: https://github.com/hadley/data-baby-names
 *
 * Usage: npx tsx scripts/import-ssa-full.ts
 */

import path from "node:path";
import fs from "node:fs";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client";

// Initialize Prisma
const dbPath = path.join(process.cwd(), "prisma", "names.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

// Path to CSV
const CSV_PATH = path.join(process.cwd(), "data", "baby-names.csv");

// Types
interface CsvRow {
  year: number;
  name: string;
  percent: number;
  sex: "boy" | "girl";
}

interface AggregatedName {
  name: string;
  gender: "M" | "F";
  totalPercent: number;
  yearData: Map<number, number>; // year -> percent
  firstYear: number;
  lastYear: number;
  peakYear: number;
  peakPercent: number;
}

/**
 * Parse CSV file
 */
function parseCsv(filePath: string): CsvRow[] {
  const content = fs.readFileSync(filePath, "utf-8");
  const lines = content.split("\n");
  const rows: CsvRow[] = [];

  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Parse CSV with quoted values
    const match = line.match(/^(\d+),"([^"]+)",([0-9.]+),"(boy|girl)"$/);
    if (match) {
      rows.push({
        year: parseInt(match[1], 10),
        name: match[2],
        percent: parseFloat(match[3]),
        sex: match[4] as "boy" | "girl",
      });
    }
  }

  return rows;
}

/**
 * Count syllables in a name
 */
function countSyllables(name: string): number {
  const word = name.toLowerCase();
  if (word.length <= 3) return 1;

  const vowels = "aeiouy";
  let count = 0;
  let prevWasVowel = false;

  for (const char of word) {
    const isVowel = vowels.includes(char);
    if (isVowel && !prevWasVowel) count++;
    prevWasVowel = isVowel;
  }

  if (word.endsWith("e") && count > 1) count--;
  if (word.endsWith("le") && word.length > 2 && !vowels.includes(word[word.length - 3])) {
    count++;
  }

  return Math.max(1, count);
}

/**
 * Determine trend based on recent popularity
 */
function determineTrend(yearData: Map<number, number>): "rising" | "falling" | "stable" {
  const years = Array.from(yearData.keys()).sort((a, b) => b - a);
  if (years.length < 10) return "stable";

  const recent = years.slice(0, 5);
  const older = years.slice(5, 10);

  const recentAvg = recent.reduce((sum, y) => sum + (yearData.get(y) || 0), 0) / recent.length;
  const olderAvg = older.reduce((sum, y) => sum + (yearData.get(y) || 0), 0) / older.length;

  if (olderAvg === 0) return "stable";

  const change = (recentAvg - olderAvg) / olderAvg;

  if (change > 0.2) return "rising";
  if (change < -0.2) return "falling";
  return "stable";
}

/**
 * Main import function
 */
async function main() {
  console.log("=== SSA Baby Names Full Import ===\n");

  // Check if CSV exists
  if (!fs.existsSync(CSV_PATH)) {
    console.error(`CSV file not found at ${CSV_PATH}`);
    console.error("Please download the data first.");
    process.exit(1);
  }

  // Step 1: Parse CSV
  console.log("Parsing CSV file...");
  const rows = parseCsv(CSV_PATH);
  console.log(`  Parsed ${rows.length.toLocaleString()} records`);

  // Step 2: Aggregate by name+gender
  console.log("\nAggregating names...");
  const nameMap = new Map<string, AggregatedName>();

  for (const row of rows) {
    const gender = row.sex === "boy" ? "M" : "F";
    const key = `${row.name}|${gender}`;

    if (!nameMap.has(key)) {
      nameMap.set(key, {
        name: row.name,
        gender,
        totalPercent: 0,
        yearData: new Map(),
        firstYear: row.year,
        lastYear: row.year,
        peakYear: row.year,
        peakPercent: 0,
      });
    }

    const agg = nameMap.get(key)!;
    agg.totalPercent += row.percent;
    agg.yearData.set(row.year, row.percent);
    agg.firstYear = Math.min(agg.firstYear, row.year);
    agg.lastYear = Math.max(agg.lastYear, row.year);

    if (row.percent > agg.peakPercent) {
      agg.peakPercent = row.percent;
      agg.peakYear = row.year;
    }
  }

  console.log(`  Found ${nameMap.size.toLocaleString()} unique name-gender combinations`);

  // Step 3: Calculate rankings for most recent year
  const allYears = new Set<number>();
  for (const row of rows) allYears.add(row.year);
  const maxYear = Math.max(...allYears);

  console.log(`\nCalculating rankings for ${maxYear}...`);

  const maleNames = Array.from(nameMap.values())
    .filter((n) => n.gender === "M" && n.yearData.has(maxYear))
    .sort((a, b) => (b.yearData.get(maxYear) || 0) - (a.yearData.get(maxYear) || 0));

  const femaleNames = Array.from(nameMap.values())
    .filter((n) => n.gender === "F" && n.yearData.has(maxYear))
    .sort((a, b) => (b.yearData.get(maxYear) || 0) - (a.yearData.get(maxYear) || 0));

  // Assign ranks
  const rankMap = new Map<string, number>();
  maleNames.forEach((n, i) => rankMap.set(`${n.name}|M`, i + 1));
  femaleNames.forEach((n, i) => rankMap.set(`${n.name}|F`, i + 1));

  // Names not in most recent year get a high rank based on total popularity
  const allNames = Array.from(nameMap.values());
  const unrankedMale = allNames
    .filter((n) => n.gender === "M" && !rankMap.has(`${n.name}|M`))
    .sort((a, b) => b.totalPercent - a.totalPercent);
  const unrankedFemale = allNames
    .filter((n) => n.gender === "F" && !rankMap.has(`${n.name}|F`))
    .sort((a, b) => b.totalPercent - a.totalPercent);

  unrankedMale.forEach((n, i) => rankMap.set(`${n.name}|M`, maleNames.length + i + 1));
  unrankedFemale.forEach((n, i) => rankMap.set(`${n.name}|F`, femaleNames.length + i + 1));

  // Step 4: Clear existing data
  console.log("\nClearing existing database...");
  await prisma.popularityHistory.deleteMany();
  await prisma.nickname.deleteMany();
  await prisma.meaning.deleteMany();
  await prisma.nameOrigin.deleteMany();
  await prisma.alternateSpelling.deleteMany();
  await prisma.namesake.deleteMany();
  await prisma.name.deleteMany();
  await prisma.origin.deleteMany();

  // Step 5: Import names in batches
  console.log("\nImporting names to database...");
  const BATCH_SIZE = 100;
  let imported = 0;

  const namesList = Array.from(nameMap.values());

  for (let i = 0; i < namesList.length; i += BATCH_SIZE) {
    const batch = namesList.slice(i, i + BATCH_SIZE);

    for (const nameData of batch) {
      const key = `${nameData.name}|${nameData.gender}`;
      const rank = rankMap.get(key) || 99999;
      const trend = determineTrend(nameData.yearData);

      // Create the name
      const created = await prisma.name.create({
        data: {
          name: nameData.name,
          normalizedName: nameData.name.toLowerCase(),
          gender: nameData.gender,
          syllables: countSyllables(nameData.name),
          currentRank: rank,
          trend,
        },
      });

      // Add popularity history (sample key years)
      const sampleYears = [1880, 1900, 1920, 1940, 1960, 1980, 1990, 2000, 2005, maxYear];
      const historyData = sampleYears
        .filter((y) => nameData.yearData.has(y))
        .map((y) => ({
          nameId: created.id,
          year: y,
          rank: null as number | null,
          count: Math.round((nameData.yearData.get(y) || 0) * 100000), // Convert percent to approximate count
        }));

      if (historyData.length > 0) {
        await prisma.popularityHistory.createMany({
          data: historyData,
        });
      }
    }

    imported += batch.length;
    const percent = Math.round((imported / namesList.length) * 100);
    process.stdout.write(`  Imported ${imported.toLocaleString()} / ${namesList.length.toLocaleString()} (${percent}%)\r`);
  }

  console.log(`\n\n=== Import Complete ===`);

  // Print summary
  const totalNames = await prisma.name.count();
  const maleCount = await prisma.name.count({ where: { gender: "M" } });
  const femaleCount = await prisma.name.count({ where: { gender: "F" } });
  const historyCount = await prisma.popularityHistory.count();

  console.log(`\nDatabase Summary:`);
  console.log(`  Total names: ${totalNames.toLocaleString()}`);
  console.log(`  Male names: ${maleCount.toLocaleString()}`);
  console.log(`  Female names: ${femaleCount.toLocaleString()}`);
  console.log(`  Popularity records: ${historyCount.toLocaleString()}`);

  console.log(`\nTop 10 male names (${maxYear}):`);
  const top10Male = await prisma.name.findMany({
    where: { gender: "M" },
    orderBy: { currentRank: "asc" },
    take: 10,
  });
  top10Male.forEach((n, i) => console.log(`  ${i + 1}. ${n.name}`));

  console.log(`\nTop 10 female names (${maxYear}):`);
  const top10Female = await prisma.name.findMany({
    where: { gender: "F" },
    orderBy: { currentRank: "asc" },
    take: 10,
  });
  top10Female.forEach((n, i) => console.log(`  ${i + 1}. ${n.name}`));
}

main()
  .catch((e) => {
    console.error("\nError:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
