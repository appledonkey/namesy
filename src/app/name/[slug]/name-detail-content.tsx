"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Heart,
  Volume2,
  Copy,
  Share2,
  MapPin,
  TrendingUp,
  Users,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heading, Text, Italic, Label } from "@/components/ui/typography";
import { NavBar } from "@/components/ui/navbar";
import { NameRadarChart, createRadarData } from "@/components/features/radar-chart";
import { PopularityChart } from "@/components/features/popularity-chart";

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
  const [isFavorite, setIsFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const radarData = createRadarData(nameData.scores);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(nameData.name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = async () => {
    const shareData = {
      title: `${nameData.name} - Baby Name`,
      text: `Check out the baby name ${nameData.name}!`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled or share failed - fall back to copy
        if ((err as Error).name !== "AbortError") {
          await navigator.clipboard.writeText(shareData.url);
          setLinkCopied(true);
          setTimeout(() => setLinkCopied(false), 2000);
        }
      }
    } else {
      // No native share - copy URL
      await navigator.clipboard.writeText(shareData.url);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    }
  };

  const genderLabel = nameData.gender === "M" ? "Boy" : nameData.gender === "F" ? "Girl" : "Neutral";
  const genderClass = nameData.gender === "M"
    ? "bg-blue-100 text-blue-700"
    : nameData.gender === "F"
    ? "bg-pink-100 text-pink-700"
    : "bg-purple-100 text-purple-700";

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
                <span className={`px-3 py-1 rounded-full text-sm ${genderClass}`}>
                  {genderLabel}
                </span>
                <span className="text-muted">{nameData.syllables} syllables</span>
              </div>

              <Heading as="h1" size="4xl" className="mb-4">
                <Italic>{nameData.name}</Italic>
              </Heading>

              <div className="flex items-center gap-4 mb-6">
                {nameData.phonetic && (
                  <Text size="lg" muted>
                    {nameData.phonetic}
                  </Text>
                )}
                <button className="p-2 rounded-full hover:bg-secondary/50 transition-colors">
                  <Volume2 className="w-5 h-5 text-muted" />
                </button>
              </div>

              {/* Origin & Meaning */}
              <div className="space-y-2 mb-8">
                {nameData.origins.length > 0 && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-muted" />
                    <Text>{nameData.origins.join(", ")} origin</Text>
                  </div>
                )}
                {nameData.meanings.length > 0 && (
                  <Text muted className="max-w-md">
                    Meaning: {nameData.meanings.join(", ")}
                  </Text>
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  onClick={() => setIsFavorite(!isFavorite)}
                  variant={isFavorite ? "primary" : "secondary"}
                  size="sm"
                >
                  <Heart className={`w-4 h-4 mr-1.5 ${isFavorite ? "fill-current" : ""}`} />
                  {isFavorite ? "Saved" : "Save"}
                </Button>
                <Button variant="secondary" size="sm" onClick={handleCopy}>
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-1.5 text-green-600" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-1.5" />
                      Copy
                    </>
                  )}
                </Button>
                <Button variant="secondary" size="sm" onClick={handleShare}>
                  {linkCopied ? (
                    <>
                      <Check className="w-4 h-4 mr-1.5 text-green-600" />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <Share2 className="w-4 h-4 mr-1.5" />
                      Share
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Rank Card */}
            {nameData.popularityData.length > 0 && (
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
            )}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Popularity Chart */}
            {nameData.popularityData.length > 0 && (
              <Card hover={false}>
                <CardHeader>
                  <CardTitle>Popularity Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <PopularityChart data={nameData.popularityData} type="rank" />
                </CardContent>
              </Card>
            )}

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
            {nameData.nicknames.length > 0 && (
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
            )}

            {/* Famous Namesakes */}
            {nameData.famousNamesakes.length > 0 && (
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
            )}

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
                        {problem}
                      </Text>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Alternate Spellings */}
            {nameData.alternateSpellings.length > 0 && (
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
            )}
          </div>
        </div>
      </section>

      {/* Love this name? CTA */}
      <section className="mt-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 text-center">
            <Heading as="h3" size="xl" className="mb-3">
              Love <Italic>{nameData.name}</Italic>?
            </Heading>
            <Text muted className="mb-6 max-w-md mx-auto">
              Save it to your favorites or share it with your partner to see what they think.
            </Text>
            <div className="flex justify-center gap-3 flex-wrap">
              <Button
                onClick={() => setIsFavorite(!isFavorite)}
                variant={isFavorite ? "primary" : "secondary"}
              >
                <Heart className={`w-4 h-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                {isFavorite ? "Saved!" : "Save to Favorites"}
              </Button>
              <Button variant="secondary" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" />
                Share with Partner
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Names */}
      {nameData.similarNames.length > 0 && (
        <section className="mt-12 px-6">
          <div className="max-w-7xl mx-auto">
            <Heading as="h2" size="xl" className="mb-8">
              Similar <Italic>Names</Italic>
            </Heading>
            <div className="flex flex-wrap gap-3">
              {nameData.similarNames.map((name) => (
                <Link
                  key={name}
                  href={`/name/${name.toLowerCase()}`}
                  className="px-5 py-3 bg-card rounded-full border border-border hover:border-primary hover:shadow-[var(--shadow-md)] transition-all duration-300"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mobile Floating Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-3 flex justify-around sm:hidden z-50">
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
            isFavorite ? "text-primary" : "text-muted hover:text-foreground"
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          <span className="text-xs font-medium">{isFavorite ? "Saved" : "Save"}</span>
        </button>
        <button
          onClick={handleCopy}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg text-muted hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-xs font-medium text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span className="text-xs font-medium">Copy</span>
            </>
          )}
        </button>
        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg text-muted hover:text-foreground transition-colors"
        >
          {linkCopied ? (
            <>
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-xs font-medium text-green-600">Copied!</span>
            </>
          ) : (
            <>
              <Share2 className="w-5 h-5" />
              <span className="text-xs font-medium">Share</span>
            </>
          )}
        </button>
      </div>

      {/* Spacer for mobile floating bar */}
      <div className="h-20 sm:hidden" />
    </div>
  );
}
