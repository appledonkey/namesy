# Namesy: Baby Naming App Plan

A high-quality, mobile-first baby naming application that helps parents discover, evaluate, and decide on the perfect name for their child.

---

## Vision

**Namesy** is the thoughtful parent's companion for baby naming — combining rich data, playful discovery, and practical analysis in a beautiful, tactile interface that feels like browsing a curated catalog rather than scrolling a database.

---

## Core User Experience

### The Problem
Parents face decision paralysis when naming their baby:
- Thousands of options with no way to narrow down
- Difficulty evaluating names objectively (will it age well? easy to spell?)
- Partner disagreement with no shared workspace
- Fear of missing "the one" buried in lists

### The Solution
A three-mode experience that matches different mindsets:

```
┌─────────────────────────────────────────────────────────────┐
│                         NAMESY                               │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐             │
│   │  SWIPE   │    │  BROWSE  │    │  BUILD   │             │
│   │          │    │          │    │          │             │
│   │ Discover │    │  Search  │    │ Compose  │             │
│   │ & React  │    │ & Filter │    │ & Test   │             │
│   └──────────┘    └──────────┘    └──────────┘             │
│        │               │               │                    │
│        └───────────────┼───────────────┘                    │
│                        ▼                                    │
│               ┌──────────────┐                              │
│               │  FAVORITES   │                              │
│               │   Shortlist  │                              │
│               └──────────────┘                              │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Feature Specifications

### 1. Homepage (Swipe Discovery)

**Purpose**: Quick, fun way to discover names and build a shortlist through gut reactions.

**Mobile Layout** (Primary):
```
┌─────────────────────────┐
│ ≡  namesy      ♥ 12     │  ← Navbar with favorites count
├─────────────────────────┤
│                         │
│    ┌─────────────────┐  │
│    │                 │  │
│    │    Charlotte    │  │  ← Swipeable card stack
│    │    ─────────    │  │
│    │  "Free woman"   │  │
│    │   ⭑⭑⭑⭑⭒ #24    │  │
│    │                 │  │
│    │  ♀ 3 syllables  │  │
│    └─────────────────┘  │
│                         │
│  ┌─────┐  ┌─────┐  ┌───┐│
│  │  ✗  │  │  ?  │  │ ♥ ││  ← Action buttons
│  │Skip │  │Info │  │Yes││
│  └─────┘  └─────┘  └───┘│
│                         │
│  ━━━━━━━━━░░░░░░░░░░░░  │  ← Progress bar
│  47 of 200 in "Classic" │
│                         │
├─────────────────────────┤
│  🏠    📋    🔨    👤   │  ← Tab bar
│ Home  Browse Build  Me  │
└─────────────────────────┘
```

**Desktop Layout**:
```
┌──────────────────────────────────────────────────────────────────┐
│  namesy                              Browse  Build  Sign In  ♥ 12│
├──────────────────────────────────────────────────────────────────┤
│                                                                   │
│   ┌─────────────────┐    ┌────────────────────────────────────┐  │
│   │ Filters         │    │                                    │  │
│   │                 │    │        ┌─────────────────┐         │  │
│   │ ○ All Names     │    │        │                 │         │  │
│   │ ○ Girls         │    │        │   Charlotte     │         │  │
│   │ ○ Boys          │    │        │   ──────────    │         │  │
│   │ ○ Neutral       │    │        │  "Free woman"   │         │  │
│   │                 │    │        │  ⭑⭑⭑⭑⭒ #24     │         │  │
│   │ Vibes           │    │        │                 │         │  │
│   │ ┌─────┐┌──────┐ │    │        │  ♀ 3 syllables  │         │  │
│   │ │Classic││Modern││    │        └─────────────────┘         │  │
│   │ └─────┘└──────┘ │    │                                    │  │
│   │ ┌─────┐┌──────┐ │    │     ←  Skip    Info    Like  →     │  │
│   │ │Short││Unique│ │    │        [J]     [K]     [L]         │  │
│   │ └─────┘└──────┘ │    │                                    │  │
│   │                 │    │     ━━━━━━━━━░░░░░░░░░░░░          │  │
│   │ Starting Letter │    │     47 of 200 in "Classic"         │  │
│   │ [A-Z selector]  │    │                                    │  │
│   └─────────────────┘    └────────────────────────────────────┘  │
│                                                                   │
└──────────────────────────────────────────────────────────────────┘
```

**Interactions**:
- **Swipe Right / Tap ♥**: Add to favorites
- **Swipe Left / Tap ✗**: Skip (can undo)
- **Swipe Up / Tap ?**: View full details (bottom sheet on mobile, side panel on desktop)
- **Keyboard shortcuts** (desktop): J=Skip, K=Info, L=Like, Z=Undo

**Features**:
- Card shows: Name, meaning, gender indicator, syllable count, popularity rank
- Subtle animation when card leaves stack
- Undo last action (single level)
- Filter presets: "Classic", "Modern", "Nature", "Short & Sweet", "Unique"
- Progress indicator showing position in current filter set
- Haptic feedback on mobile

---

### 2. Browse Page

**Purpose**: Methodical exploration with search and filters for parents who know what they're looking for.

**Mobile Layout**:
```
┌─────────────────────────┐
│ ←  Browse Names         │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │ 🔍 Search names...  │ │
│ └─────────────────────┘ │
│                         │
│ ┌─────┐┌─────┐┌───────┐ │
│ │ All ││Girls││ Boys  │ │  ← Gender tabs
│ └─────┘└─────┘└───────┘ │
│                         │
│ [Filters ▼] 2,847 names │  ← Expandable filters
│                         │
│ ┌─────────────────────┐ │
│ │ Olivia          ♥ ○ │ │
│ │ ♀ Latin · #3        │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Liam            ♥ ○ │ │
│ │ ♂ Irish · #1        │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Emma            ♥ ● │ │
│ │ ♀ Germanic · #2     │ │
│ └─────────────────────┘ │
│         ...             │
│                         │
│    [ Load More ]        │
│                         │
├─────────────────────────┤
│  🏠    📋    🔨    👤   │
└─────────────────────────┘
```

**Desktop Layout**: 3-column masonry grid with staggered cards, sidebar filters always visible.

**Filter Options**:
- Gender: All / Girls / Boys / Neutral
- Origin: Multi-select (Latin, Greek, Hebrew, Celtic, Germanic, etc.)
- Syllables: 1 / 2 / 3 / 4+
- Popularity: Top 100 / Top 500 / Rising / Unique
- Starting letter: A-Z
- Ending sound: -a, -n, -y, -ie, etc.
- Vibes: Classic, Modern, Nature, Biblical, Literary, etc.

---

### 3. Name Detail Page

**Purpose**: Deep dive into a single name with all the data needed to make a decision.

**Mobile Layout**:
```
┌─────────────────────────┐
│ ←  Charlotte        ♥ ○ │
├─────────────────────────┤
│                         │
│      Charlotte          │  ← Large, beautiful typography
│      ───────────        │
│   SHAR-luht · 3 syllables│
│                         │
│ ┌───────────────────────┤
│ │ Origin & Meaning      │
│ │                       │
│ │ French feminine form  │
│ │ of Charles, meaning   │
│ │ "free woman" or       │
│ │ "petite"              │
│ └───────────────────────┤
│                         │
│ ┌───────────────────────┤
│ │ Name Scores           │
│ │      [Radar Chart]    │  ← 8-axis visualization
│ │  Unique ──────── Pro  │
│ │                       │
│ │  Timeless    Spelling │
│ └───────────────────────┤
│                         │
│ ┌───────────────────────┤
│ │ Popularity Trend      │
│ │    [Sparkline Chart]  │  ← 20-year trend
│ │ Currently #12, ↑ from │
│ │ #18 five years ago    │
│ └───────────────────────┤
│                         │
│ ┌───────────────────────┤
│ │ Nicknames             │
│ │ Charlie · Lottie ·    │
│ │ Char · Lotte          │
│ └───────────────────────┤
│                         │
│ ┌───────────────────────┤
│ │ Famous Charlottes     │
│ │ 👑 Princess Charlotte │
│ │ ✍️ Charlotte Brontë   │
│ │ 🎬 Charlotte Gainsbourg│
│ └───────────────────────┤
│                         │
│ ┌───────────────────────┤
│ │ Sibling Suggestions   │
│ │ William · Eleanor ·   │
│ │ Henry · Josephine     │
│ └───────────────────────┤
│                         │
│ [ Try in Name Builder ] │
│                         │
├─────────────────────────┤
│  🏠    📋    🔨    👤   │
└─────────────────────────┘
```

**Score Dimensions** (Radar Chart):
1. **Uniqueness** (1-10): How common is this name?
2. **Timelessness** (1-10): Will it age well?
3. **Pronunciation** (1-10): Easy to say correctly?
4. **Spelling** (1-10): Easy to spell?
5. **Nickname Potential** (1-10): Good natural nicknames?
6. **Professional** (1-10): Sounds good on a resume?
7. **Teasing Resistance** (1-10): Avoids obvious teasing?
8. **Flow** (1-10): Works well in full names?

---

### 4. Name Builder Page

**Purpose**: Compose and test full names with real-time analysis.

**Mobile Layout**:
```
┌─────────────────────────┐
│ ←  Name Builder         │
├─────────────────────────┤
│                         │
│ First Name              │
│ ┌─────────────────────┐ │
│ │ Charlotte           │ │  ← Autocomplete from favorites
│ └─────────────────────┘ │
│                         │
│ Middle Name             │
│ ┌─────────────────────┐ │
│ │ Rose                │ │
│ └─────────────────────┘ │
│ [ + Add Middle Name ]   │
│                         │
│ Last Name               │
│ ┌─────────────────────┐ │
│ │ Anderson            │ │
│ └─────────────────────┘ │
│                         │
│ ════════════════════════│
│                         │
│  Charlotte Rose Anderson│  ← Live preview
│                         │
│ ┌───────────────────────┤
│ │ Initials: CRA     ✓   │  ← Good/bad check
│ └───────────────────────┤
│                         │
│ ┌───────────────────────┤
│ │ Flow Score: 92/100    │
│ │ ████████████████░░░░  │
│ │                       │
│ │ ✓ Syllable variety    │
│ │ ✓ No awkward sounds   │
│ │ ✓ Natural rhythm      │
│ └───────────────────────┤
│                         │
│ ┌───────────────────────┤
│ │ Syllables: 3-1-3 (7)  │
│ │ CHAR-lotte ROSE AN-   │
│ │ der-son               │
│ └───────────────────────┤
│                         │
│ ┌───────────────────────┤
│ │ Typography Preview    │
│ │                       │
│ │ Charlotte R. Anderson │  ← Serif
│ │ Charlotte R. Anderson │  ← Sans
│ │ Charlotte R. Anderson │  ← Italic
│ └───────────────────────┤
│                         │
│ [ Save to Favorites ]   │
│                         │
├─────────────────────────┤
│  🏠    📋    🔨    👤   │
└─────────────────────────┘
```

**Analysis Features**:
- **Initials Check**: Flags bad acronyms (ASS, DIE, FAT, etc.)
- **Flow Score**: Algorithm based on syllable patterns, sound transitions, alliteration
- **Syllable Breakdown**: Visual representation of rhythm
- **Typography Preview**: How name looks in different fonts
- **Warnings**: Alerts for potential issues (rhyming, hard consonant clusters)

---

### 5. Favorites / Shortlist

**Purpose**: Manage and compare saved names, share with partner.

**Mobile Layout**:
```
┌─────────────────────────┐
│ ←  Favorites        ✎   │
├─────────────────────────┤
│                         │
│ Your Shortlist (8)      │
│                         │
│ ┌─────────────────────┐ │
│ │ Charlotte       ♥ ● │ │
│ │ ♀ French · #12      │ │
│ │ ─────────────────── │ │
│ │ Notes: Partner loves │ │
│ │ the nickname Lottie  │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Theodore        ♥ ● │ │
│ │ ♂ Greek · #10       │ │
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ Violet          ♥ ● │ │
│ │ ♀ Latin · #37       │ │
│ └─────────────────────┘ │
│         ...             │
│                         │
├─────────────────────────┤
│ ┌─────────────────────┐ │
│ │   [ Compare (2) ]   │ │  ← Compare selected
│ └─────────────────────┘ │
│ ┌─────────────────────┐ │
│ │ [ Share Shortlist ] │ │
│ └─────────────────────┘ │
├─────────────────────────┤
│  🏠    📋    🔨    👤   │
└─────────────────────────┘
```

**Features**:
- Add personal notes to each name
- Reorder by drag-and-drop
- Compare mode: Side-by-side radar charts
- Share list via link (no account required)
- Export to clipboard/text

---

## Responsive Design System

### Breakpoints
```css
/* Mobile first */
sm: 640px   /* Large phones */
md: 768px   /* Tablets */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Mobile Optimizations
- **Touch targets**: Minimum 44x44px for all interactive elements
- **Bottom navigation**: Tab bar always accessible with thumb
- **Safe areas**: Respect notch and home indicator on iOS
- **Haptics**: Subtle feedback on swipe actions and favorites
- **Gestures**: Swipe to navigate, pull to refresh
- **Bottom sheets**: For filters and details (not modals)
- **Sticky headers**: Keep context visible while scrolling

### Desktop Enhancements
- **Keyboard navigation**: Full keyboard support with visible focus states
- **Hover states**: Preview on hover, lift animations
- **Multi-column layouts**: Utilize screen width with masonry/grid
- **Sidebar filters**: Always visible, not in a modal
- **Split views**: List + detail side-by-side

---

## Technical Architecture

### Data Flow
```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Client    │────▶│  API Routes │────▶│   Prisma    │
│   (React)   │◀────│  (Next.js)  │◀────│  (SQLite)   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                                       │
       │            ┌─────────────┐            │
       └───────────▶│ localStorage│◀───────────┘
                    │ (Favorites) │
                    └─────────────┘
```

### State Management
- **Server State**: React Server Components + API routes
- **Client State**: React useState/useReducer for UI state
- **Persistent State**: localStorage for favorites (offline-first)
- **URL State**: Search params for shareable filter states

### API Endpoints (To Implement)
```
GET  /api/names              # List names with filters
GET  /api/names/[id]         # Single name details
GET  /api/names/random       # Random name for discovery
GET  /api/names/suggestions  # Similar/sibling names
POST /api/favorites/share    # Generate shareable link
GET  /api/favorites/[id]     # Retrieve shared list
```

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Core Web Vitals**: All green

### Offline Support
- Service worker for static assets
- Cached name data (subset) for offline browsing
- Queue favorite actions when offline, sync when online

---

## Implementation Phases

### Phase 1: Core Experience (Foundation)
**Goal**: Working MVP with swipe discovery and browse

- [ ] Implement homepage with swipe card interface
- [ ] Build responsive card stack component
- [ ] Add swipe gestures (Framer Motion)
- [ ] Implement favorites with localStorage
- [ ] Create API routes for names data
- [ ] Add basic filter presets
- [ ] Mobile tab navigation
- [ ] Desktop navigation header

### Phase 2: Deep Analysis
**Goal**: Rich name detail pages and builder

- [ ] Enhance name detail page with all sections
- [ ] Implement radar chart visualization
- [ ] Add popularity trend sparkline
- [ ] Complete name builder with live analysis
- [ ] Initials checker with bad acronym database
- [ ] Flow score algorithm refinement
- [ ] Syllable breakdown visualization

### Phase 3: Discovery Enhancements
**Goal**: Better ways to find the perfect name

- [ ] Advanced filters (origin, ending sound, vibes)
- [ ] "Similar names" suggestions
- [ ] "Sibling names" that pair well
- [ ] Daily discovery feature
- [ ] Name of the day notification

### Phase 4: Social & Sharing
**Goal**: Partner collaboration

- [ ] Shareable favorites lists
- [ ] Compare mode for shortlisted names
- [ ] Notes on favorites
- [ ] Optional account system (NextAuth)
- [ ] Cross-device sync

### Phase 5: Polish & Performance
**Goal**: Production-ready quality

- [ ] Keyboard navigation throughout
- [ ] Screen reader accessibility audit
- [ ] Performance optimization
- [ ] Offline support (PWA)
- [ ] Capacitor mobile app builds
- [ ] Analytics (privacy-respecting)

---

## Component Inventory

### Existing (Ready to Use)
```
UI Components:
✅ Button, Card, Input, Navbar
✅ Paper Texture, Typography, Skeleton

Feature Components:
✅ NameCard, CardStack, SwipeCard
✅ RadarChart, PopularityChart
✅ BottomSheet, FiltersSheet
✅ FavoritesDrawer, FavoritesPanel
✅ ActionBar, FloatingActionButton
✅ VibePills, GenderFilter
✅ NamePreview, NicknamePreview
✅ NameWarnings, InlineMetrics
```

### To Build
```
- TabBar (mobile bottom navigation)
- SwipeProgress (visual progress indicator)
- ShareSheet (native share dialog)
- CompareView (side-by-side radar charts)
- FilterChips (active filter display)
- KeyboardShortcuts (desktop helper)
```

---

## Data Model

### Name Entity (Existing Schema)
```prisma
model Name {
  id              Int       @id @default(autoincrement())
  name            String
  normalizedName  String    # Lowercase, no accents
  gender          String    # M, F, N
  syllables       Int
  phonetic        String?   # IPA pronunciation
  currentRank     Int?
  trend           String?   # rising, falling, stable

  origins         NameOrigin[]
  meanings        Meaning[]
  nicknames       Nickname[]
  spellings       AlternateSpelling[]
  popularity      PopularityHistory[]
  namesakes       Namesake[]
}
```

### Local Storage Schema
```typescript
interface LocalFavorites {
  names: Array<{
    id: number
    name: string
    addedAt: string
    notes?: string
    sortOrder: number
  }>
  lastSynced?: string
}

interface SwipeHistory {
  liked: number[]      # Name IDs
  skipped: number[]    # Name IDs
  lastPosition: number
  activeFilter: string
}
```

---

## Design Principles

1. **Mobile-First**: Design for thumb, enhance for mouse
2. **Progressive Disclosure**: Show essentials, reveal depth on demand
3. **Immediate Feedback**: Every action has a visible response
4. **Forgiveness**: Easy undo, hard to make mistakes
5. **Delight**: Subtle animations, haptics, personality
6. **Privacy-First**: Local storage default, no tracking
7. **Accessibility**: WCAG 2.1 AA compliance

---

## Success Metrics

- **Engagement**: Names swiped per session (target: 20+)
- **Conversion**: % of users who add a favorite (target: 60%)
- **Retention**: % returning within 7 days (target: 40%)
- **Completion**: % who use name builder (target: 25%)
- **Sharing**: % who share their list (target: 10%)

---

## Open Questions

1. Should we require accounts or stay fully anonymous?
2. Partner collaboration: Real-time sync or async sharing?
3. Monetization: Premium features or keep free?
4. Data source: SSA only or add international names?
5. AI features: Name generation or meaning analysis?

---

*This plan is a living document. Update as decisions are made and requirements evolve.*
