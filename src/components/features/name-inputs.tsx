"use client";

import { X, Lock, Unlock } from "lucide-react";
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
  firstNameLocked?: boolean;
  middleNameLocked?: boolean;
  onFirstNameLockToggle?: () => void;
  onMiddleNameLockToggle?: () => void;
}

/**
 * NameInputs - Clean inline input fields for First, Middle, and Last name
 * Mobile: Last name shown first with emphasis
 * Desktop: Traditional first, middle, last order
 */
export function NameInputs({
  firstName,
  middleName,
  lastName,
  onFirstNameChange,
  onMiddleNameChange,
  onLastNameChange,
  onFocusChange,
  firstNameLocked = false,
  middleNameLocked = false,
  onFirstNameLockToggle,
  onMiddleNameLockToggle,
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

  const handleLockToggle = (field: 'first' | 'middle') => {
    haptics.tap();
    if (field === 'first') {
      onFirstNameLockToggle?.();
    } else {
      onMiddleNameLockToggle?.();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3 sm:space-y-0">
      {/* Mobile: Last name first with emphasis */}
      <div className="sm:hidden">
        {/* Last name - prominent on mobile */}
        <div className="mb-3">
          <Label className="mb-1.5 block text-xs text-center text-primary font-medium">
            Your Last Name
          </Label>
          <div className="relative">
            <input
              type="text"
              inputMode="text"
              value={lastName}
              onChange={(e) => onLastNameChange(e.target.value)}
              onFocus={() => onFocusChange?.("last")}
              onBlur={() => onFocusChange?.(null)}
              placeholder="Enter your last name first"
              autoComplete="family-name"
              autoCapitalize="words"
              autoCorrect="off"
              spellCheck="false"
              className={`w-full text-center text-lg py-3.5 px-10 bg-card border-2 rounded-xl
                placeholder:text-muted/50 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                transition-all duration-200
                touch-target tap-highlight
                ${lastName ? "border-primary/50" : "border-primary/30"}`}
            />
            {lastName && (
              <button
                type="button"
                onClick={() => handleClear('last')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-muted/20 text-muted tap-highlight touch-feedback"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          {!lastName && (
            <p className="text-xs text-muted text-center mt-1.5">
              We&apos;ll help you find names that sound great with it
            </p>
          )}
        </div>

        {/* First and Middle - side by side on mobile */}
        <div className="grid grid-cols-2 gap-2">
          {/* First Name */}
          <div>
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <Label className="text-xs text-muted">First Name</Label>
              <button
                type="button"
                onClick={() => handleLockToggle('first')}
                className={`p-0.5 rounded transition-colors ${firstNameLocked ? 'text-primary' : 'text-muted/40 hover:text-muted'}`}
                title={firstNameLocked ? 'Unlock first name' : 'Lock first name'}
              >
                {firstNameLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                inputMode="text"
                value={firstName}
                onChange={(e) => onFirstNameChange(e.target.value)}
                onFocus={() => onFocusChange?.("first")}
                onBlur={() => onFocusChange?.(null)}
                placeholder="First"
                autoComplete="given-name"
                autoCapitalize="words"
                autoCorrect="off"
                spellCheck="false"
                className={`w-full text-center text-base py-3 px-2 bg-card border rounded-xl
                  placeholder:text-muted/40 text-foreground
                  focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                  hover:border-border-strong transition-all duration-200
                  touch-target tap-highlight
                  ${firstNameLocked ? 'border-primary/50 bg-primary/5' : 'border-border'}`}
              />
              {firstName && (
                <button
                  type="button"
                  onClick={() => handleClear('first')}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-muted/20 text-muted tap-highlight touch-feedback"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Middle Name */}
          <div>
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <Label className="text-xs text-muted">Middle Name</Label>
              <button
                type="button"
                onClick={() => handleLockToggle('middle')}
                className={`p-0.5 rounded transition-colors ${middleNameLocked ? 'text-primary' : 'text-muted/40 hover:text-muted'}`}
                title={middleNameLocked ? 'Unlock middle name' : 'Lock middle name'}
              >
                {middleNameLocked ? <Lock className="w-3 h-3" /> : <Unlock className="w-3 h-3" />}
              </button>
            </div>
            <div className="relative">
              <input
                type="text"
                inputMode="text"
                value={middleName}
                onChange={(e) => onMiddleNameChange(e.target.value)}
                onFocus={() => onFocusChange?.("middle")}
                onBlur={() => onFocusChange?.(null)}
                placeholder="Middle"
                autoComplete="additional-name"
                autoCapitalize="words"
                autoCorrect="off"
                spellCheck="false"
                className={`w-full text-center text-base py-3 px-2 bg-card border rounded-xl
                  placeholder:text-muted/40 text-foreground
                  focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                  hover:border-border-strong transition-all duration-200
                  touch-target tap-highlight
                  ${middleNameLocked ? 'border-primary/50 bg-primary/5' : 'border-border'}`}
              />
              {middleName && (
                <button
                  type="button"
                  onClick={() => handleClear('middle')}
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-muted/20 text-muted tap-highlight touch-feedback"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: Traditional order */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-3">
        {/* First Name */}
        <div>
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <Label className="text-sm text-muted">First Name</Label>
            <button
              type="button"
              onClick={() => handleLockToggle('first')}
              className={`p-0.5 rounded transition-colors ${firstNameLocked ? 'text-primary' : 'text-muted/40 hover:text-muted'}`}
              title={firstNameLocked ? 'Unlock first name' : 'Lock first name'}
            >
              {firstNameLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
            </button>
          </div>
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
              className={`w-full text-center text-lg py-3 px-4 bg-card border rounded-xl
                placeholder:text-muted/40 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                hover:border-border-strong transition-all duration-200
                ${firstNameLocked ? 'border-primary/50 bg-primary/5' : 'border-border'}`}
            />
          </div>
        </div>

        {/* Middle Name */}
        <div>
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <Label className="text-sm text-muted">Middle Name</Label>
            <button
              type="button"
              onClick={() => handleLockToggle('middle')}
              className={`p-0.5 rounded transition-colors ${middleNameLocked ? 'text-primary' : 'text-muted/40 hover:text-muted'}`}
              title={middleNameLocked ? 'Unlock middle name' : 'Lock middle name'}
            >
              {middleNameLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
            </button>
          </div>
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
              className={`w-full text-center text-lg py-3 px-4 bg-card border rounded-xl
                placeholder:text-muted/40 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                hover:border-border-strong transition-all duration-200
                ${middleNameLocked ? 'border-primary/50 bg-primary/5' : 'border-border'}`}
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <Label className="mb-2 block text-sm text-center text-muted">Last Name</Label>
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
              className="w-full text-center text-lg py-3 px-4 bg-card border border-border rounded-xl
                placeholder:text-muted/40 text-foreground
                focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                hover:border-border-strong transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
