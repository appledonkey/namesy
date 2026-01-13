"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, TrendingUp, TrendingDown, Minus, User, Music, Film, Tv, BookOpen, Trophy, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { recordSwipe, getSwipeStatus } from "@/lib/swipe-preferences";

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

// Get gender display info
function getGenderInfo(gender: "M" | "F" | "N") {
  switch (gender) {
    case "M":
      return { label: "Boy", color: "text-blue-500", bg: "bg-blue-100" };
    case "F":
      return { label: "Girl", color: "text-pink-500", bg: "bg-pink-100" };
    default:
      return { label: "Unisex", color: "text-purple-500", bg: "bg-purple-100" };
  }
}

// Get trend info
function getTrendInfo(data: { year: number; rank: number }[]) {
  if (data.length < 2) return { trend: "stable", label: "Stable", icon: Minus, color: "text-muted" };

  const recent = data.slice(-5);
  const first = recent[0]?.rank || 0;
  const last = recent[recent.length - 1]?.rank || 0;

  // Lower rank = more popular
  if (last < first - 20) {
    return { trend: "rising", label: "Rising", icon: TrendingUp, color: "text-green-500" };
  } else if (last > first + 20) {
    return { trend: "falling", label: "Falling", icon: TrendingDown, color: "text-red-400" };
  }
  return { trend: "stable", label: "Stable", icon: Minus, color: "text-muted" };
}

// Get icon for namesake type
function getNamesakeIcon(type: string) {
  const lower = type.toLowerCase();
  if (lower.includes("actor") || lower.includes("actress")) return Film;
  if (lower.includes("singer") || lower.includes("musician") || lower.includes("music")) return Music;
  if (lower.includes("tv") || lower.includes("television")) return Tv;
  if (lower.includes("author") || lower.includes("writer")) return BookOpen;
  if (lower.includes("athlete") || lower.includes("sport") || lower.includes("player")) return Trophy;
  return User;
}

// Mini sparkline chart
function MiniChart({ data }: { data: { year: number; rank: number }[] }) {
  if (data.length < 2) return null;

  const recent = data.slice(-10);
  const maxRank = Math.max(...recent.map(d => d.rank));
  const minRank = Math.min(...recent.map(d => d.rank));
  const range = maxRank - minRank || 1;

  const points = recent.map((d, i) => {
    const x = (i / (recent.length - 1)) * 100;
    // Invert Y because lower rank = better = higher on chart
    const y = 100 - ((d.rank - minRank) / range) * 80 - 10;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg viewBox="0 0 100 100" className="w-24 h-12" preserveAspectRatio="none">
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />
    </svg>
  );
}

// Section component
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-6 border-b border-border">
      <h2 className="text-xs font-heading font-medium text-muted uppercase tracking-wider mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

// Pill component
function Pill({ children, href }: { children: React.ReactNode; href?: string }) {
  const className = "px-3 py-1.5 bg-secondary rounded-full text-sm font-heading text-foreground hover:bg-secondary/80 transition-colors";

  if (href) {
    return <Link href={href} className={className}>{children}</Link>;
  }
  return <span className={className}>{children}</span>;
}

export function NameDetailContent({ nameData }: NameDetailContentProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if already favorited
  useEffect(() => {
    const status = getSwipeStatus(nameData.name);
    setIsFavorite(status === "like" || status === "superlike");
  }, [nameData.name]);

  const handleFavorite = () => {
    if (isFavorite) {
      recordSwipe(nameData.name, "dislike", nameData.origins, nameData.meanings);
      setIsFavorite(false);
    } else {
      recordSwipe(nameData.name, "like", nameData.origins, nameData.meanings);
      setIsFavorite(true);
    }
  };

  const genderInfo = getGenderInfo(nameData.gender);
  const trendInfo = getTrendInfo(nameData.popularityData);
  const currentRank = nameData.popularityData.length > 0
    ? nameData.popularityData[nameData.popularityData.length - 1].rank
    : null;

  const TrendIcon = trendInfo.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="p-2 -ml-2 rounded-full hover:bg-secondary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="font-heading font-semibold">{nameData.name}</span>
          <button
            onClick={handleFavorite}
            className={`p-2 -mr-2 rounded-full transition-colors ${
              isFavorite
                ? "text-green-500 bg-green-50 hover:bg-green-100"
                : "hover:bg-secondary text-muted hover:text-foreground"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
      </header>

      <main className="max-w-lg mx-auto px-4 pb-24">
        {/* Hero Section */}
        <section className="py-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-heading font-bold text-foreground mb-2"
          >
            {nameData.name}
          </motion.h1>

          {nameData.phonetic && (
            <p className="text-lg text-muted font-heading italic mb-4">
              /{nameData.phonetic}/
            </p>
          )}

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className={`px-3 py-1 rounded-full text-sm font-heading ${genderInfo.bg} ${genderInfo.color}`}>
              {genderInfo.label}
            </span>
            <span className="text-sm text-muted font-heading">
              {nameData.name.length} letters
            </span>
            <span className="text-sm text-muted font-heading">
              {nameData.syllables} syllable{nameData.syllables !== 1 ? "s" : ""}
            </span>
          </div>
        </section>

        {/* Popularity Section */}
        {currentRank && (
          <section className="py-6 border-y border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-heading font-bold text-foreground">
                  #{currentRank}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <TrendIcon className={`w-4 h-4 ${trendInfo.color}`} />
                  <span className={`text-sm font-heading ${trendInfo.color}`}>
                    {trendInfo.label}
                  </span>
                  <span className="text-sm text-muted font-heading">
                    in 2024
                  </span>
                </div>
              </div>
              <MiniChart data={nameData.popularityData} />
            </div>
          </section>
        )}

        {/* Meaning */}
        {nameData.meanings.length > 0 && (
          <Section title="Meaning">
            <p className="text-lg font-heading text-foreground leading-relaxed">
              {nameData.meanings.map((meaning, i) => (
                <span key={i}>
                  {i > 0 && <span className="text-muted"> · </span>}
                  &ldquo;{meaning}&rdquo;
                </span>
              ))}
            </p>
          </Section>
        )}

        {/* Origin */}
        {nameData.origins.length > 0 && (
          <Section title="Origin">
            <div className="flex flex-wrap gap-2">
              {nameData.origins.map((origin) => (
                <Pill key={origin}>{origin}</Pill>
              ))}
            </div>
          </Section>
        )}

        {/* Nicknames & Spellings */}
        {(nameData.nicknames.length > 0 || nameData.alternateSpellings.length > 0) && (
          <section className="py-6 border-b border-border">
            <div className="grid grid-cols-2 gap-6">
              {nameData.nicknames.length > 0 && (
                <div>
                  <h2 className="text-xs font-heading font-medium text-muted uppercase tracking-wider mb-3">
                    Nicknames
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {nameData.nicknames.map((nick) => (
                      <Pill key={nick}>{nick}</Pill>
                    ))}
                  </div>
                </div>
              )}
              {nameData.alternateSpellings.length > 0 && (
                <div>
                  <h2 className="text-xs font-heading font-medium text-muted uppercase tracking-wider mb-3">
                    Spellings
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {nameData.alternateSpellings.map((spelling) => (
                      <Pill key={spelling}>{spelling}</Pill>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Famous Namesakes */}
        {nameData.famousNamesakes.length > 0 && (
          <Section title={`Famous ${nameData.name}s`}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {nameData.famousNamesakes.slice(0, 6).map((person, i) => {
                const Icon = getNamesakeIcon(person.type);
                return (
                  <div
                    key={i}
                    className="p-3 bg-secondary/50 rounded-xl text-center"
                  >
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-background flex items-center justify-center">
                      <Icon className="w-5 h-5 text-muted" />
                    </div>
                    <p className="font-heading font-medium text-sm text-foreground truncate">
                      {person.name}
                    </p>
                    <p className="text-xs text-muted truncate">
                      {person.type}
                    </p>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {/* Similar Names */}
        {nameData.similarNames.length > 0 && (
          <Section title="Similar Names">
            <div className="flex flex-wrap gap-2">
              {nameData.similarNames.map((name) => (
                <Pill key={name} href={`/name/${name.toLowerCase()}`}>
                  {name}
                </Pill>
              ))}
            </div>
          </Section>
        )}
      </main>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border">
        <div className="max-w-lg mx-auto">
          <button
            onClick={handleFavorite}
            className={`w-full py-3.5 rounded-xl font-heading font-medium text-lg transition-colors flex items-center justify-center gap-2 ${
              isFavorite
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
            {isFavorite ? "Added to Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
}
