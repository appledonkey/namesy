"use client";

import { Button } from "@/components/ui/button";

type GenderOption = "all" | "M" | "F";

interface GenderFilterProps {
  value: GenderOption;
  onChange: (value: GenderOption) => void;
}

export function GenderFilter({ value, onChange }: GenderFilterProps) {
  const options: { key: GenderOption; label: string }[] = [
    { key: "all", label: "All" },
    { key: "F", label: "Girl" },
    { key: "M", label: "Boy" },
  ];

  return (
    <div className="flex items-center justify-center gap-2">
      {options.map((option) => (
        <Button
          key={option.key}
          variant={value === option.key ? "primary" : "secondary"}
          size="sm"
          onClick={() => onChange(option.key)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
