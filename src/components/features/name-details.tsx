"use client";

import { Heart, ExternalLink, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text, Label } from "@/components/ui/typography";
import type { NameData } from "@/lib/names-data";
import Link from "next/link";

interface NameDetailsProps {
  name: NameData | null;
  isSaved: boolean;
  onSave: () => void;
}

export function NameDetails({ name, isSaved, onSave }: NameDetailsProps) {
  if (!name) {
    return (
      <Card className="p-6 text-center">
        <Text muted>Select a name to see details</Text>
      </Card>
    );
  }

  const TrendIcon = name.trend === "rising"
    ? TrendingUp
    : name.trend === "falling"
      ? TrendingDown
      : Minus;

  const trendColor = name.trend === "rising"
    ? "text-green-500"
    : name.trend === "falling"
      ? "text-red-500"
      : "text-muted";

  return (
    <Card className="p-6">
      <div className="space-y-4">
        {/* Origin & Meaning */}
        <div className="grid grid-cols-2 gap-4 text-center sm:text-left">
          <div>
            <Label>Origin</Label>
            <Text className="mt-1">{name.origins.join(", ") || "Unknown"}</Text>
          </div>
          <div>
            <Label>Meaning</Label>
            <Text className="mt-1">{name.meanings[0] || "Unknown"}</Text>
          </div>
        </div>

        {/* Popularity & Trend */}
        <div className="grid grid-cols-2 gap-4 text-center sm:text-left">
          <div>
            <Label>Popularity</Label>
            <Text className="mt-1">#{name.currentRank} in 2024</Text>
          </div>
          <div>
            <Label>Trend</Label>
            <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
              <TrendIcon className={`w-4 h-4 ${trendColor}`} />
              <Text className={trendColor}>
                {name.trend === "rising" ? "Rising" : name.trend === "falling" ? "Falling" : "Stable"}
              </Text>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button
            variant={isSaved ? "primary" : "secondary"}
            size="sm"
            onClick={onSave}
          >
            <Heart className={`w-4 h-4 mr-2 ${isSaved ? "fill-current" : ""}`} />
            {isSaved ? "Saved" : "Save"}
          </Button>
          <Link href={`/name/${name.normalizedName}`}>
            <Button variant="ghost" size="sm">
              View Details
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
