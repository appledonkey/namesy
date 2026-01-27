/**
 * Baby Names Database - 10K names with rich details
 * Split into chunks for manageable file sizes
 */

import { girlNames } from "./girls";
import { boyNames } from "./boys";

export interface NameData {
  id: string;
  name: string;
  gender: "M" | "F" | "N";
  origin: string;
  meaning: string;
  syllables: number;
  nicknames: string[];
  alternates: string[];
  popularity: "top100" | "top500" | "top1000" | "uncommon" | "rare";
  trend: "rising" | "falling" | "stable";
  vibe: string[]; // e.g., ["classic", "elegant", "strong"]
  famousPeople: string[];
  similarNames: string[];
}

export const namesData: NameData[] = [...girlNames, ...boyNames];

export function getNamesByGender(gender: "M" | "F" | "all"): NameData[] {
  if (gender === "all") return namesData;
  return namesData.filter((n) => n.gender === gender);
}

export function getNameById(id: string): NameData | undefined {
  return namesData.find((n) => n.id === id);
}
