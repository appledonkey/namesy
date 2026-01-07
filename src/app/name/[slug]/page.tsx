"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Heart,
  Volume2,
  Plus,
  MapPin,
  TrendingUp,
  Users,
  AlertTriangle,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Text, Italic, Label } from "@/components/ui/typography";
import { NavBar } from "@/components/ui/navbar";
import { NameRadarChart, createRadarData } from "@/components/features/radar-chart";
import { PopularityChart } from "@/components/features/popularity-chart";

// Sample data for demonstration
const sampleNameData = {
  name: "Charlotte",
  gender: "F" as const,
  origins: ["French", "Germanic"],
  meanings: ["Free woman", "Petite"],
  syllables: 2,
  phonetic: "/ˈʃɑːrlət/",
  nicknames: ["Charlie", "Lottie", "Char", "Lola"],
  alternateSpellings: ["Charlot", "Sharlotte", "Carlotta"],
  famousNamesakes: [
    { name: "Charlotte Brontë", type: "Author" },
    { name: "Princess Charlotte", type: "Royalty" },
    { name: "Charlotte Gainsbourg", type: "Actress" },
  ],
  popularityData: [
    { year: 1990, rank: 289 },
    { year: 1995, rank: 202 },
    { year: 2000, rank: 289 },
    { year: 2005, rank: 87 },
    { year: 2010, rank: 46 },
    { year: 2015, rank: 9 },
    { year: 2020, rank: 6 },
    { year: 2023, rank: 3 },
  ],
  scores: {
    Uniqueness: 35,
    Timelessness: 92,
    Pronunciation: 78,
    Spelling: 85,
    Nicknames: 88,
    Professional: 95,
    "Teasing Resistance": 90,
    Flow: 82,
  },
  teasingRisk: "LOW",
  rhymingProblems: [],
  soundAlikeIssues: [],
};

export default function NameDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [isFavorite, setIsFavorite] = useState(false);

  // In production, fetch name data based on slug
  const nameData = { ...sampleNameData, name: slug.charAt(0).toUpperCase() + slug.slice(1) };
  const radarData = createRadarData(nameData.scores);

  return (
    <div className="min-h-screen pb-16">
      <NavBar />

      {/* Breadcrumb */}
      <div className="pt-4 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-muted">
            <Link href="/browse" className="hover:text-foreground transition-colors">
              Browse
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{nameData.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            {/* Name & Basic Info */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 rounded-full text-sm bg-pink-100 text-pink-700">
                  Girl
                </span>
                <span className="text-muted">{nameData.syllables} syllables</span>
              </div>

              <Heading as="h1" size="4xl" className="mb-4">
                <Italic>{nameData.name}</Italic>
              </Heading>

              <div className="flex items-center gap-4 mb-6">
                <Text size="lg" muted>
                  {nameData.phonetic}
                </Text>
                <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                  <Volume2 className="w-5 h-5 text-muted" />
                </button>
              </div>

              {/* Origin & Meaning */}
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted" />
                  <Text>{nameData.origins.join(", ")} origin</Text>
                </div>
                <Text muted className="max-w-md">
                  Meaning: {nameData.meanings.join(", ")}
                </Text>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setIsFavorite(!isFavorite)}
                  variant={isFavorite ? "primary" : "secondary"}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                  {isFavorite ? "Saved" : "Save"}
                </Button>
                <Button variant="secondary">
                  <Plus className="w-4 h-4 mr-2" />
                  Add to List
                </Button>
              </div>
            </div>

            {/* Rank Card */}
            <Card className="w-full md:w-auto md:min-w-[200px]" hover={false}>
              <CardContent className="p-6 text-center">
                <Label>Current Rank</Label>
                <div className="font-heading text-5xl font-semibold my-2">
                  #{nameData.popularityData[nameData.popularityData.length - 1]?.rank}
                </div>
                <div className="flex items-center justify-center gap-1 text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  <Text size="sm">Rising</Text>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Popularity Chart */}
            <Card hover={false}>
              <CardHeader>
                <CardTitle>Popularity Over Time</CardTitle>
              </CardHeader>
              <CardContent>
                <PopularityChart data={nameData.popularityData} type="rank" />
              </CardContent>
            </Card>

            {/* Radar Chart */}
            <Card hover={false}>
              <CardHeader>
                <CardTitle>Name Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <NameRadarChart data={radarData} name={nameData.name} />
              </CardContent>
            </Card>

            {/* Nicknames */}
            <Card hover={false}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <CardTitle>Nicknames</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {nameData.nicknames.map((nickname) => (
                    <span
                      key={nickname}
                      className="px-4 py-2 bg-secondary/50 rounded-full text-sm"
                    >
                      {nickname}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Famous Namesakes */}
            <Card hover={false}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  <CardTitle>Famous Namesakes</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {nameData.famousNamesakes.map((person) => (
                    <div key={person.name} className="flex items-center justify-between">
                      <Text>{person.name}</Text>
                      <Label>{person.type}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Teasing Analysis */}
            <Card hover={false}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                  <CardTitle>Playground Audit</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      nameData.teasingRisk === "LOW"
                        ? "bg-green-100 text-green-700"
                        : nameData.teasingRisk === "MEDIUM"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {nameData.teasingRisk} Risk
                  </span>
                </div>
                {nameData.rhymingProblems.length === 0 &&
                nameData.soundAlikeIssues.length === 0 ? (
                  <Text muted>
                    No significant rhyming or sound-alike issues detected. This name
                    has strong teasing resistance.
                  </Text>
                ) : (
                  <div className="space-y-2">
                    {nameData.rhymingProblems.map((problem) => (
                      <Text key={problem} size="sm" muted>
                        • {problem}
                      </Text>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Alternate Spellings */}
            <Card hover={false}>
              <CardHeader>
                <CardTitle>Spelling Variants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {nameData.alternateSpellings.map((spelling) => (
                    <Link
                      key={spelling}
                      href={`/name/${spelling.toLowerCase()}`}
                      className="px-4 py-2 bg-secondary/50 rounded-full text-sm hover:bg-secondary transition-colors duration-300"
                    >
                      {spelling}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Similar Names */}
      <section className="mt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Heading as="h2" size="xl" className="mb-8">
            Similar <Italic>Names</Italic>
          </Heading>
          <div className="flex flex-wrap gap-3">
            {["Caroline", "Scarlett", "Penelope", "Eleanor", "Violet", "Evelyn"].map(
              (name) => (
                <Link
                  key={name}
                  href={`/name/${name.toLowerCase()}`}
                  className="px-5 py-3 bg-card rounded-full border border-border hover:border-primary hover:shadow-[var(--shadow-md)] transition-all duration-300"
                >
                  {name}
                </Link>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
