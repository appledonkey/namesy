"use client";

import { X } from "lucide-react";
import { Label } from "@/components/ui/typography";
import { haptics } from "@/lib/haptics";

export type InputField = "first" | "middle" | "last" | null;

interface NameInputsProps {
  firstName: string;
  middleName: string;
  lastName: string;
  onFirstNameChange: (value: string) => void;
  onMiddleNameChange: (value: string) => void;
  onLastNameChange: (value: string) => void;
  focusedField?: InputField;
  onFocusChange?: (field: InputField) => void;
}

/**
 * NameInputs - Clean inline input fields for First, Middle, and Last name
 */
export function NameInputs({
  firstName,
  middleName,
  lastName,
  onFirstNameChange,
  onMiddleNameChange,
  onLastNameChange,
  onFocusChange,
}: NameInputsProps) {
  const handleClear = (field: 'first' | 'middle' | 'last') => {
    haptics.tap();
    switch (field) {
      case 'first':
        onFirstNameChange('');
        break;
      case 'middle':
        onMiddleNameChange('');
        break;
      case 'last':
        onLastNameChange('');
        break;
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
        {/* First Name */}
        <div>
          <Label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm text-center text-muted">First Name</Label>
          <div className="relative">
            <input
              type="text"
              inputMode="text"
              value={firstName}
              onChange={(e) => onFirstNameChange(e.target.value)}
              onFocus={() => onFocusChange?.("first")}
              onBlur={() => onFocusChange?.(null)}
              placeholder="Charlotte"
              autoComplete="given-name"
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck="false"
              className="w-full text-center text-base sm:text-lg py-3 px-8 sm:px-4 bg-card border border-border rounded-xl
                placeholder:text-muted/40 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                hover:border-border-strong transition-all duration-200
                touch-target tap-highlight"
            />
            {/* Mobile clear button */}
            {firstName && (
              <button
                type="button"
                onClick={() => handleClear('first')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-muted/20 text-muted sm:hidden tap-highlight touch-feedback"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Middle Name */}
        <div>
          <Label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm text-center text-muted">Middle Name</Label>
          <div className="relative">
            <input
              type="text"
              inputMode="text"
              value={middleName}
              onChange={(e) => onMiddleNameChange(e.target.value)}
              onFocus={() => onFocusChange?.("middle")}
              onBlur={() => onFocusChange?.(null)}
              placeholder="Grace"
              autoComplete="additional-name"
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck="false"
              className="w-full text-center text-base sm:text-lg py-3 px-8 sm:px-4 bg-card border border-border rounded-xl
                placeholder:text-muted/40 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                hover:border-border-strong transition-all duration-200
                touch-target tap-highlight"
            />
            {/* Mobile clear button */}
            {middleName && (
              <button
                type="button"
                onClick={() => handleClear('middle')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-muted/20 text-muted sm:hidden tap-highlight touch-feedback"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Last Name */}
        <div>
          <Label className="mb-1.5 sm:mb-2 block text-xs sm:text-sm text-center text-muted">Last Name</Label>
          <div className="relative">
            <input
              type="text"
              inputMode="text"
              value={lastName}
              onChange={(e) => onLastNameChange(e.target.value)}
              onFocus={() => onFocusChange?.("last")}
              onBlur={() => onFocusChange?.(null)}
              placeholder="Williams"
              autoComplete="family-name"
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck="false"
              className="w-full text-center text-base sm:text-lg py-3 px-8 sm:px-4 bg-card border border-border rounded-xl
                placeholder:text-muted/40 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                hover:border-border-strong transition-all duration-200
                touch-target tap-highlight"
            />
            {/* Mobile clear button */}
            {lastName && (
              <button
                type="button"
                onClick={() => handleClear('last')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-muted/20 text-muted sm:hidden tap-highlight touch-feedback"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
