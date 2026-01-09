"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Text, Label } from "@/components/ui/typography";
import type { NameData } from "@/lib/names-data";

interface NameCardRowProps {
  names: NameData[];
  selectedIndex: number;
  onSelect: (index: number) => void;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function NameCardRow({
  names,
  selectedIndex,
  onSelect,
  page,
  totalPages,
  onPageChange,
}: NameCardRowProps) {
  return (
    <div className="space-y-4">
      {/* Name cards - horizontal scroll on mobile, grid on desktop */}
      <div className="flex gap-3 overflow-x-auto pb-2 sm:overflow-visible sm:justify-center snap-x snap-mandatory">
        {names.map((name, index) => (
          <button
            key={name.id}
            onClick={() => onSelect(index)}
            className="snap-center flex-shrink-0"
          >
            <Card
              hover
              className={`
                w-28 sm:w-32 p-4 text-center cursor-pointer transition-all duration-200
                ${selectedIndex === index
                  ? "ring-2 ring-primary bg-primary/5"
                  : "hover:bg-secondary/30"
                }
              `}
            >
              <Text className="font-heading text-xl font-semibold mb-1">
                {name.name}
              </Text>
              <Label className={name.gender === "F" ? "text-pink-500" : name.gender === "M" ? "text-blue-500" : "text-purple-500"}>
                {name.gender === "F" ? "Girl" : name.gender === "M" ? "Boy" : "Neutral"}
              </Label>
              <Text size="sm" muted className="mt-1">
                #{name.currentRank}
              </Text>
            </Card>
          </button>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(page - 1)}
          disabled={page === 0}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Prev
        </Button>
        <Text size="sm" muted>
          {page + 1} of {totalPages}
        </Text>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onPageChange(page + 1)}
          disabled={page >= totalPages - 1}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
}
