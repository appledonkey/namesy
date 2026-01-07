"use client";

import { Heart, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Text, Label } from "@/components/ui/typography";
import Link from "next/link";

export interface NameCardProps {
  name: string;
  gender: "M" | "F" | "N";
  origin?: string;
  meaning?: string;
  rank?: number;
  trend?: "rising" | "falling" | "stable";
  syllables?: number;
  isFavorite?: boolean;
  onFavoriteToggle?: () => void;
  href?: string;
}

const genderColors = {
  M: "bg-blue-100 text-blue-700",
  F: "bg-pink-100 text-pink-700",
  N: "bg-purple-100 text-purple-700",
};

const genderLabels = {
  M: "Boy",
  F: "Girl",
  N: "Neutral",
};

const TrendIcon = ({ trend }: { trend?: "rising" | "falling" | "stable" }) => {
  if (trend === "rising") {
    return <TrendingUp className="w-3 h-3 text-green-600" />;
  }
  if (trend === "falling") {
    return <TrendingDown className="w-3 h-3 text-red-500" />;
  }
  return <Minus className="w-3 h-3 text-muted" />;
};

/**
 * NameCard - Displays a baby name with quick info in a card format.
 * Used in browse grids and search results.
 */
export function NameCard({
  name,
  gender,
  origin,
  meaning,
  rank,
  trend,
  syllables,
  isFavorite = false,
  onFavoriteToggle,
  href,
}: NameCardProps) {
  const content = (
    <Card className="group relative bg-card">
      <CardContent className="p-6">
        {/* Favorite Button */}
        {onFavoriteToggle && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onFavoriteToggle();
            }}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary/50 transition-colors duration-300"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart
              className={`w-5 h-5 transition-colors duration-300 ${
                isFavorite ? "fill-accent text-accent" : "text-muted group-hover:text-foreground"
              }`}
            />
          </button>
        )}

        {/* Name */}
        <h3 className="font-heading text-2xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
          {name}
        </h3>

        {/* Gender & Origin */}
        <div className="flex items-center gap-2 mb-3">
          <span className={`text-xs px-2 py-0.5 rounded-full ${genderColors[gender]}`}>
            {genderLabels[gender]}
          </span>
          {origin && (
            <Text size="sm" muted>
              {origin}
            </Text>
          )}
        </div>

        {/* Meaning */}
        {meaning && (
          <Text size="sm" muted className="mb-4 line-clamp-2">
            {meaning}
          </Text>
        )}

        {/* Stats Row */}
        <div className="flex items-center gap-4 pt-3 border-t border-border">
          {rank && (
            <div className="flex items-center gap-1">
              <Label>Rank</Label>
              <span className="text-sm font-medium">#{rank}</span>
              <TrendIcon trend={trend} />
            </div>
          )}
          {syllables && (
            <div className="flex items-center gap-1">
              <Label>Syllables</Label>
              <span className="text-sm font-medium">{syllables}</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

/**
 * NameCardSkeleton - Loading placeholder for NameCard
 */
export function NameCardSkeleton() {
  return (
    <Card hover={false} className="bg-card">
      <CardContent className="p-6">
        <div className="animate-pulse">
          <div className="h-7 bg-secondary/50 rounded w-24 mb-3" />
          <div className="flex gap-2 mb-3">
            <div className="h-5 bg-secondary/50 rounded-full w-12" />
            <div className="h-5 bg-secondary/50 rounded w-16" />
          </div>
          <div className="h-4 bg-secondary/50 rounded w-full mb-2" />
          <div className="h-4 bg-secondary/50 rounded w-3/4 mb-4" />
          <div className="pt-3 border-t border-border flex gap-4">
            <div className="h-4 bg-secondary/50 rounded w-16" />
            <div className="h-4 bg-secondary/50 rounded w-16" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
