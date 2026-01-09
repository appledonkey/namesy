"use client";

import { Heading, Italic, Text } from "@/components/ui/typography";

interface LivePreviewProps {
  firstName: string;
  middleName: string;
  lastName: string;
  onMiddleNameChange: (value: string) => void;
}

export function LivePreview({
  firstName,
  middleName,
  lastName,
  onMiddleNameChange,
}: LivePreviewProps) {
  const displayName = [firstName, middleName, lastName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="text-center py-8 sm:py-12">
      {/* Large name preview */}
      <Heading as="h1" size="3xl" className="mb-6">
        <Italic>{displayName || "Select a name"}</Italic>
      </Heading>

      {/* Middle name input */}
      <div className="max-w-xs mx-auto">
        <label className="block">
          <Text size="sm" muted className="mb-2">
            Middle name (optional)
          </Text>
          <input
            type="text"
            value={middleName}
            onChange={(e) => onMiddleNameChange(e.target.value)}
            placeholder="Add a middle name"
            autoCapitalize="words"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            className="w-full text-center text-lg py-3 px-4 bg-card border border-border rounded-xl
              placeholder:text-muted/50 text-foreground
              focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
              transition-all duration-200"
          />
        </label>
      </div>
    </div>
  );
}
