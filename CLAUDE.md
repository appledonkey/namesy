# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint

# Database (when Prisma is configured with a database)
npx prisma generate    # Generate Prisma client
npx prisma migrate dev # Run migrations
npx prisma studio      # Open database GUI

# Data import
npx tsx scripts/import-ssa.ts  # Import SSA baby name data
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # NextAuth endpoints
│   │   └── names/         # Name data endpoints
│   ├── browse/            # Name browsing page
│   ├── builder/           # Full name builder
│   └── name/[slug]/       # Name detail page
├── components/
│   ├── ui/                # Design system primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── paper-texture.tsx
│   │   └── typography.tsx
│   └── features/          # Feature-specific components
│       ├── name-card.tsx
│       ├── popularity-chart.tsx
│       └── radar-chart.tsx
├── lib/                   # Utilities and config
│   ├── auth.ts           # NextAuth configuration
│   └── prisma.ts         # Prisma client singleton
└── types/                 # TypeScript types

prisma/
└── schema.prisma          # Database schema

scripts/
└── import-ssa.ts          # SSA data import script
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (using `@theme inline` in globals.css)
- **Charts**: Recharts
- **Icons**: Lucide React
- **Auth**: NextAuth.js (JWT strategy)
- **Database**: PostgreSQL via Prisma (schema ready, needs DB connection)
- **Deployment**: Vercel

## Design System

The app uses a **Botanical / Organic Serif** aesthetic:

### Colors (CSS variables in globals.css)
- `--background`: #F9F8F4 (Warm Alabaster)
- `--foreground`: #2D3A31 (Deep Forest Green)
- `--primary`: #8C9A84 (Sage Green)
- `--secondary`: #DCCFC2 (Soft Clay)
- `--accent`: #C27B66 (Terracotta)

### Typography
- Headings: Playfair Display (serif, use `font-heading`)
- Body: Source Sans 3 (sans, use `font-body`)
- Italic emphasis for key words in headings

### Key Patterns
- Paper texture overlay (`<PaperTexture />`) for tactile feel
- Pill-shaped buttons with uppercase tracking
- Cards with `rounded-3xl` and hover lift animations
- Staggered grid layouts on desktop (`translate-y-12` on alternating items)
- Slow, graceful animations (`duration-500` to `duration-700`)

## API Routes

### GET /api/names
Query params: `q` (search), `gender` (M/F/N/all), `page`, `limit`

### GET /api/names/[id]
Returns detailed name data including popularity history, scores, and similar names.

## Key Features

1. **Browse Page** (`/browse`): Staggered grid of name cards with search and gender filters
2. **Name Detail** (`/name/[slug]`): Full analysis with radar chart, popularity graph, teasing audit
3. **Name Builder** (`/builder`): Compose full names with real-time flow analysis, initials check
4. **Radar Chart**: 8-axis visualization (Uniqueness, Timelessness, Pronunciation, Spelling, Nicknames, Professional, Teasing Resistance, Flow)
