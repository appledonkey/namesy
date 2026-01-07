import { describe, it, expect } from 'vitest';
import {
  countSyllables,
  hasAlliteration,
  hasRhyme,
  calculateFlowScore,
  getInitials,
  isBadAcronym,
  analyzeFullName,
  BAD_ACRONYMS,
} from '@/lib/analysis';

describe('countSyllables', () => {
  it('counts syllables correctly for common first names', () => {
    // From database lookup
    expect(countSyllables('Emma')).toBe(2);
    expect(countSyllables('Charlotte')).toBe(2);
    expect(countSyllables('Olivia')).toBe(4);
    expect(countSyllables('Sophia')).toBe(3);
    expect(countSyllables('Elizabeth')).toBe(4);
    expect(countSyllables('William')).toBe(3); // Will-i-am
    expect(countSyllables('Benjamin')).toBe(3);
    expect(countSyllables('Theodore')).toBe(3);
  });

  it('counts syllables for last names (algorithmic)', () => {
    expect(countSyllables('Smith')).toBe(1);
    expect(countSyllables('Johnson')).toBe(2);
    expect(countSyllables('Williams')).toBe(2);
    expect(countSyllables('Anderson')).toBe(3);
    expect(countSyllables('Rodriguez')).toBe(3);
  });

  it('handles edge cases', () => {
    expect(countSyllables('')).toBe(0);
    expect(countSyllables('   ')).toBe(0);
    expect(countSyllables('A')).toBe(1);
    expect(countSyllables('Ae')).toBe(1);
  });

  it('is case-insensitive', () => {
    expect(countSyllables('EMMA')).toBe(2);
    expect(countSyllables('emma')).toBe(2);
    expect(countSyllables('EmMa')).toBe(2);
  });
});

describe('hasAlliteration', () => {
  it('detects alliteration', () => {
    expect(hasAlliteration(['Peter', 'Parker'])).toBe(true);
    expect(hasAlliteration(['Mary', 'Margaret'])).toBe(true);
    expect(hasAlliteration(['Bruce', 'Banner'])).toBe(true);
  });

  it('returns false when no alliteration', () => {
    expect(hasAlliteration(['John', 'Smith'])).toBe(false);
    expect(hasAlliteration(['Emma', 'Grace'])).toBe(false);
  });

  it('handles single names', () => {
    expect(hasAlliteration(['John'])).toBe(false);
    expect(hasAlliteration([])).toBe(false);
  });

  it('is case-insensitive', () => {
    expect(hasAlliteration(['peter', 'PARKER'])).toBe(true);
  });
});

describe('hasRhyme', () => {
  it('detects rhyming endings', () => {
    expect(hasRhyme(['Mary', 'Barry'])).toBe(true);
    expect(hasRhyme(['Jane', 'Shane'])).toBe(true);
  });

  it('returns false when no rhyme', () => {
    expect(hasRhyme(['John', 'Smith'])).toBe(false);
    expect(hasRhyme(['Emma', 'Grace'])).toBe(false);
  });
});

describe('getInitials', () => {
  it('extracts initials correctly', () => {
    expect(getInitials(['John', 'William', 'Smith'])).toBe('JWS');
    expect(getInitials(['Emma', 'Grace', 'Lee'])).toBe('EGL');
    expect(getInitials(['Mary'])).toBe('M');
  });

  it('handles empty input', () => {
    expect(getInitials([])).toBe('');
    expect(getInitials(['', '', ''])).toBe('');
  });
});

describe('isBadAcronym', () => {
  it('detects bad acronyms', () => {
    expect(isBadAcronym('ASS')).toBe(true);
    expect(isBadAcronym('FUK')).toBe(true);
    expect(isBadAcronym('KKK')).toBe(true);
    expect(isBadAcronym('WTF')).toBe(true);
  });

  it('returns false for safe acronyms', () => {
    expect(isBadAcronym('ABC')).toBe(false);
    expect(isBadAcronym('JWS')).toBe(false);
    expect(isBadAcronym('EGL')).toBe(false);
  });

  it('is case-insensitive', () => {
    expect(isBadAcronym('ass')).toBe(true);
    expect(isBadAcronym('Ass')).toBe(true);
  });
});

describe('calculateFlowScore', () => {
  it('returns 0 for empty input', () => {
    expect(calculateFlowScore([])).toBe(0);
  });

  it('returns score between 0 and 100', () => {
    const score = calculateFlowScore(['Charlotte', 'Grace', 'Williams']);
    expect(score).toBeGreaterThanOrEqual(0);
    expect(score).toBeLessThanOrEqual(100);
  });

  it('penalizes rhyming names', () => {
    const rhymingScore = calculateFlowScore(['Mary', 'Barry']);
    const nonRhymingScore = calculateFlowScore(['Mary', 'John']);
    expect(rhymingScore).toBeLessThan(nonRhymingScore);
  });

  it('rewards syllable variety', () => {
    // Names with variety (2-1-2) should score better than monotonous (2-2-2)
    const variedScore = calculateFlowScore(['Emma', 'Rose', 'Williams']); // 2-1-2
    expect(variedScore).toBeGreaterThan(60);
  });
});

describe('analyzeFullName', () => {
  it('returns complete analysis', () => {
    const analysis = analyzeFullName('Charlotte', 'Grace', 'Williams');

    expect(analysis.fullName).toBe('Charlotte Grace Williams');
    expect(analysis.initials).toBe('CGW');
    expect(analysis.isBadAcronym).toBe(false);
    expect(analysis.totalSyllables).toBe(5); // 2 + 1 + 2
    expect(analysis.hasName).toBe(true);
    expect(analysis.flowScore).toBeGreaterThan(0);
  });

  it('handles empty names', () => {
    const analysis = analyzeFullName('', '', '');
    expect(analysis.hasName).toBe(false);
    expect(analysis.initials).toBe('');
    expect(analysis.totalSyllables).toBe(0);
  });

  it('detects bad acronyms in full name', () => {
    const analysis = analyzeFullName('Adam', 'Samuel', 'Smith');
    expect(analysis.initials).toBe('ASS');
    expect(analysis.isBadAcronym).toBe(true);
  });
});

describe('BAD_ACRONYMS', () => {
  it('contains expected offensive terms', () => {
    expect(BAD_ACRONYMS).toContain('ASS');
    expect(BAD_ACRONYMS).toContain('FUK');
    expect(BAD_ACRONYMS).toContain('SEX');
    expect(BAD_ACRONYMS).toContain('KKK');
  });

  it('contains internet slang', () => {
    expect(BAD_ACRONYMS).toContain('WTF');
    expect(BAD_ACRONYMS).toContain('FML');
  });
});
