"use client";

import { NavBar } from "@/components/ui/navbar";
import { Heading, Italic } from "@/components/ui/typography";

export interface NameDetailData {
  name: string;
  gender: "M" | "F" | "N";
  origins: string[];
  meanings: string[];
  syllables: number;
  phonetic: string | null;
  nicknames: string[];
  alternateSpellings: string[];
  famousNamesakes: { name: string; type: string }[];
  popularityData: { year: number; rank: number }[];
  scores: Record<string, number>;
  teasingRisk: "LOW" | "MEDIUM" | "HIGH";
  rhymingProblems: string[];
  soundAlikeIssues: string[];
  similarNames: string[];
}

interface NameDetailContentProps {
  nameData: NameDetailData;
}

export function NameDetailContent({ nameData }: NameDetailContentProps) {
  return (
    <div className="min-h-screen">
      <NavBar />

      {/* Name Display */}
      <section className="pt-16 pb-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Heading as="h1" size="4xl">
            <Italic>{nameData.name}</Italic>
          </Heading>
        </div>
      </section>
    </div>
  );
}
