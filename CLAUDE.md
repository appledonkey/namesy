# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
npm test         # Run tests
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Main swipe app (entry point)
│   ├── layout.tsx         # Root layout with fonts
│   ├── globals.css        # Tailwind + design tokens
│   └── privacy/           # Privacy policy page
├── components/
│   ├── ui/                # Design system primitives
│   │   ├── button.tsx     # Pill-shaped buttons
│   │   ├── card.tsx       # Card components
│   │   ├── input.tsx      # Text inputs (underlined/pill variants)
│   │   ├── skeleton.tsx   # Loading states
│   │   └── typography.tsx # Heading, Text, Label
│   └── features/
│       ├── onboarding.tsx      # 3-step first-time user flow
│       └── settings-sheet.tsx  # Bottom sheet for preferences
├── lib/
│   ├── partner-storage.ts # Core state management (localStorage)
│   ├── names-data.ts      # 2700+ baby names database
│   ├── haptics.ts         # Mobile vibration feedback
│   ├── analysis.ts        # Name scoring/analysis
│   ├── name-analysis.ts   # Detailed name analysis
│   ├── name-flow.ts       # Name flow/rhythm analysis
│   └── utils.ts           # Utilities
└── __tests__/             # Test files
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (`@theme inline` in globals.css)
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **State**: localStorage via partner-storage.ts
- **Deployment**: Vercel

## App Architecture

### Main Flow
1. **Onboarding** (first-time users):
   - Step 1: Surname (optional)
   - Step 2: Gender preference (Boy/Girl/Both)
   - Step 3: Partner setup (solo or generate share code)

2. **Swipe Interface**:
   - Flip cards showing name, origin, meaning
   - Swipe right to like, left to pass
   - Partner 1 / Partner 2 toggle for shared device use
   - Matches shown when both partners like same name

3. **Settings** (gear icon):
   - Edit surname, gender filter
   - Generate/view partner code
   - Reset progress

### State Management
All state persisted in localStorage via `partner-storage.ts`:
- `surname`, `genderFilter`, `sessionCode`, `partnerMode`
- Partner likes and current index
- Matches (names both partners liked)

## Design System

### Colors (Coral/Mint theme)
- `--background`: #FFFBF7 (warm cream)
- `--foreground`: #4A4340 (warm brown)
- `--primary`: #E8A0A0 (soft coral)
- `--partner1`: #F5A89A (coral) - Partner 1 color
- `--partner2`: #9DD5C0 (mint) - Partner 2 color
- `--accent`: #C9A962 (gold)

### Typography
- Headings: Playfair Display (`font-heading`)
- Body: Inter (`font-body`)

### Patterns
- Pill-shaped buttons with uppercase tracking
- Bottom sheets for modals (mobile-friendly)
- Rounded cards with subtle shadows
- Haptic feedback on interactions
