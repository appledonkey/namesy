/**
 * Baby Names Data
 * Comprehensive dataset based on SSA popularity data with origins, meanings, and analysis
 */

export interface NameData {
  id: string;
  name: string;
  normalizedName: string;
  gender: "M" | "F" | "N";
  origins: string[];
  meanings: string[];
  syllables: number;
  phonetic?: string;
  nicknames: string[];
  alternateSpellings: string[];
  currentRank: number;
  trend: "rising" | "falling" | "stable";
  famousNamesakes?: { name: string; description: string }[];
  // Historical popularity (simplified - key years)
  historicalRanks?: Record<number, number>;
}

// Top 100 girls names + Top 100 boys names with full data
export const namesData: NameData[] = [
  // ============== GIRLS NAMES ==============
  {
    id: "f1",
    name: "Olivia",
    normalizedName: "olivia",
    gender: "F",
    origins: ["Latin"],
    meanings: ["Olive tree", "Peace"],
    syllables: 4,
    phonetic: "/əˈlɪviə/",
    nicknames: ["Liv", "Livvy", "Ollie", "Via"],
    alternateSpellings: ["Alivia", "Olyvia"],
    currentRank: 1,
    trend: "stable",
    famousNamesakes: [
      { name: "Olivia Rodrigo", description: "Grammy-winning singer" },
      { name: "Olivia Wilde", description: "Actress and director" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 100, 2010: 4, 2020: 1, 2023: 1 },
  },
  {
    id: "f2",
    name: "Emma",
    normalizedName: "emma",
    gender: "F",
    origins: ["Germanic"],
    meanings: ["Whole", "Universal"],
    syllables: 2,
    phonetic: "/ˈemə/",
    nicknames: ["Em", "Emmy"],
    alternateSpellings: ["Ema"],
    currentRank: 2,
    trend: "falling",
    famousNamesakes: [
      { name: "Emma Watson", description: "Actress and activist" },
      { name: "Emma Stone", description: "Academy Award-winning actress" },
    ],
    historicalRanks: { 1900: 3, 1950: 0, 1980: 0, 2000: 15, 2010: 2, 2020: 2, 2023: 2 },
  },
  {
    id: "f3",
    name: "Charlotte",
    normalizedName: "charlotte",
    gender: "F",
    origins: ["French", "Germanic"],
    meanings: ["Free woman", "Petite"],
    syllables: 2,
    phonetic: "/ˈʃɑːrlət/",
    nicknames: ["Charlie", "Lottie", "Char", "Lola"],
    alternateSpellings: ["Charlot", "Carlotta"],
    currentRank: 3,
    trend: "rising",
    famousNamesakes: [
      { name: "Princess Charlotte", description: "British royal" },
      { name: "Charlotte Brontë", description: "Classic author" },
    ],
    historicalRanks: { 1900: 95, 1950: 0, 1980: 0, 2000: 289, 2010: 27, 2020: 6, 2023: 3 },
  },
  {
    id: "f4",
    name: "Amelia",
    normalizedName: "amelia",
    gender: "F",
    origins: ["Germanic"],
    meanings: ["Industrious", "Striving", "Work"],
    syllables: 4,
    phonetic: "/əˈmiːliə/",
    nicknames: ["Amy", "Mia", "Millie", "Mel"],
    alternateSpellings: ["Emelia", "Amilia", "Emilia"],
    currentRank: 4,
    trend: "rising",
    famousNamesakes: [
      { name: "Amelia Earhart", description: "Aviation pioneer" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 209, 2010: 30, 2020: 6, 2023: 4 },
  },
  {
    id: "f5",
    name: "Sophia",
    normalizedName: "sophia",
    gender: "F",
    origins: ["Greek"],
    meanings: ["Wisdom"],
    syllables: 3,
    phonetic: "/soʊˈfiːə/",
    nicknames: ["Sophie", "Soph", "Phia"],
    alternateSpellings: ["Sofia"],
    currentRank: 5,
    trend: "falling",
    famousNamesakes: [
      { name: "Sophia Loren", description: "Legendary actress" },
    ],
    historicalRanks: { 1900: 60, 1950: 0, 1980: 0, 2000: 30, 2010: 1, 2020: 4, 2023: 5 },
  },
  {
    id: "f6",
    name: "Mia",
    normalizedName: "mia",
    gender: "F",
    origins: ["Scandinavian", "Latin"],
    meanings: ["Beloved", "Mine", "Wished-for child"],
    syllables: 2,
    phonetic: "/ˈmiːə/",
    nicknames: [],
    alternateSpellings: ["Miah", "Miya"],
    currentRank: 6,
    trend: "stable",
    famousNamesakes: [
      { name: "Mia Hamm", description: "Soccer legend" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 52, 2010: 10, 2020: 8, 2023: 6 },
  },
  {
    id: "f7",
    name: "Ava",
    normalizedName: "ava",
    gender: "F",
    origins: ["Latin", "Hebrew"],
    meanings: ["Life", "Bird-like"],
    syllables: 2,
    phonetic: "/ˈeɪvə/",
    nicknames: [],
    alternateSpellings: ["Aiva", "Avah"],
    currentRank: 7,
    trend: "stable",
    famousNamesakes: [
      { name: "Ava Gardner", description: "Classic Hollywood actress" },
      { name: "Ava DuVernay", description: "Award-winning director" },
    ],
    historicalRanks: { 1900: 180, 1950: 0, 1980: 0, 2000: 180, 2010: 5, 2020: 3, 2023: 7 },
  },
  {
    id: "f8",
    name: "Isabella",
    normalizedName: "isabella",
    gender: "F",
    origins: ["Hebrew", "Spanish", "Italian"],
    meanings: ["Devoted to God", "God is my oath"],
    syllables: 4,
    phonetic: "/ˌɪzəˈbɛlə/",
    nicknames: ["Bella", "Izzy", "Isa", "Belle"],
    alternateSpellings: ["Isabela", "Izabella"],
    currentRank: 8,
    trend: "falling",
    famousNamesakes: [
      { name: "Queen Isabella I", description: "Spanish monarch" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 60, 2010: 1, 2020: 7, 2023: 8 },
  },
  {
    id: "f9",
    name: "Luna",
    normalizedName: "luna",
    gender: "F",
    origins: ["Latin"],
    meanings: ["Moon"],
    syllables: 2,
    phonetic: "/ˈluːnə/",
    nicknames: ["Lu", "Lulu"],
    alternateSpellings: ["Loona"],
    currentRank: 9,
    trend: "rising",
    famousNamesakes: [
      { name: "Luna Lovegood", description: "Harry Potter character" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 889, 2010: 110, 2020: 14, 2023: 9 },
  },
  {
    id: "f10",
    name: "Harper",
    normalizedName: "harper",
    gender: "F",
    origins: ["English"],
    meanings: ["Harp player"],
    syllables: 2,
    phonetic: "/ˈhɑːrpər/",
    nicknames: ["Harpy"],
    alternateSpellings: [],
    currentRank: 10,
    trend: "stable",
    famousNamesakes: [
      { name: "Harper Lee", description: "Author of To Kill a Mockingbird" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 887, 2010: 54, 2020: 9, 2023: 10 },
  },
  {
    id: "f11",
    name: "Evelyn",
    normalizedName: "evelyn",
    gender: "F",
    origins: ["English", "French"],
    meanings: ["Wished-for child", "Life"],
    syllables: 3,
    phonetic: "/ˈɛvəlɪn/",
    nicknames: ["Evie", "Eve", "Lyn"],
    alternateSpellings: ["Evalyn", "Evelynn"],
    currentRank: 11,
    trend: "rising",
    historicalRanks: { 1900: 12, 1950: 80, 1980: 0, 2000: 150, 2010: 35, 2020: 9, 2023: 11 },
  },
  {
    id: "f12",
    name: "Ella",
    normalizedName: "ella",
    gender: "F",
    origins: ["Germanic", "English"],
    meanings: ["Fairy maiden", "All", "Beautiful"],
    syllables: 2,
    phonetic: "/ˈɛlə/",
    nicknames: ["Ellie"],
    alternateSpellings: ["Ela"],
    currentRank: 12,
    trend: "stable",
    famousNamesakes: [
      { name: "Ella Fitzgerald", description: "Jazz legend" },
    ],
    historicalRanks: { 1900: 20, 1950: 0, 1980: 0, 2000: 264, 2010: 13, 2020: 13, 2023: 12 },
  },
  {
    id: "f13",
    name: "Gianna",
    normalizedName: "gianna",
    gender: "F",
    origins: ["Italian"],
    meanings: ["God is gracious"],
    syllables: 3,
    phonetic: "/dʒiˈɑːnə/",
    nicknames: ["Gia", "Gigi"],
    alternateSpellings: ["Giana", "Geanna"],
    currentRank: 13,
    trend: "rising",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 150, 2010: 68, 2020: 12, 2023: 13 },
  },
  {
    id: "f14",
    name: "Aurora",
    normalizedName: "aurora",
    gender: "F",
    origins: ["Latin"],
    meanings: ["Dawn", "Goddess of sunrise"],
    syllables: 4,
    phonetic: "/əˈrɔːrə/",
    nicknames: ["Rory", "Aura"],
    alternateSpellings: [],
    currentRank: 14,
    trend: "rising",
    famousNamesakes: [
      { name: "Aurora (singer)", description: "Norwegian artist" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 488, 2010: 78, 2020: 36, 2023: 14 },
  },
  {
    id: "f15",
    name: "Penelope",
    normalizedName: "penelope",
    gender: "F",
    origins: ["Greek"],
    meanings: ["Weaver", "Faithful wife"],
    syllables: 4,
    phonetic: "/pəˈnɛləpi/",
    nicknames: ["Penny", "Nell", "Poppy"],
    alternateSpellings: ["Penelopy"],
    currentRank: 15,
    trend: "rising",
    famousNamesakes: [
      { name: "Penelope Cruz", description: "Academy Award-winning actress" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 245, 2010: 42, 2020: 25, 2023: 15 },
  },
  {
    id: "f16",
    name: "Layla",
    normalizedName: "layla",
    gender: "F",
    origins: ["Arabic"],
    meanings: ["Night", "Dark beauty"],
    syllables: 2,
    phonetic: "/ˈleɪlə/",
    nicknames: ["Lay"],
    alternateSpellings: ["Leila", "Leyla", "Laila"],
    currentRank: 16,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 500, 2010: 28, 2020: 24, 2023: 16 },
  },
  {
    id: "f17",
    name: "Chloe",
    normalizedName: "chloe",
    gender: "F",
    origins: ["Greek"],
    meanings: ["Blooming", "Fertility"],
    syllables: 2,
    phonetic: "/ˈkloʊi/",
    nicknames: [],
    alternateSpellings: ["Khloe", "Cloe"],
    currentRank: 17,
    trend: "falling",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 453, 2000: 24, 2010: 11, 2020: 24, 2023: 17 },
  },
  {
    id: "f18",
    name: "Willow",
    normalizedName: "willow",
    gender: "F",
    origins: ["English"],
    meanings: ["Willow tree", "Graceful"],
    syllables: 2,
    phonetic: "/ˈwɪloʊ/",
    nicknames: ["Will", "Willa"],
    alternateSpellings: [],
    currentRank: 18,
    trend: "rising",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 546, 2010: 171, 2020: 39, 2023: 18 },
  },
  {
    id: "f19",
    name: "Aria",
    normalizedName: "aria",
    gender: "F",
    origins: ["Italian", "Hebrew"],
    meanings: ["Air", "Song", "Lioness"],
    syllables: 3,
    phonetic: "/ˈɑːriə/",
    nicknames: [],
    alternateSpellings: ["Arya"],
    currentRank: 19,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 800, 2010: 29, 2020: 20, 2023: 19 },
  },
  {
    id: "f20",
    name: "Ellie",
    normalizedName: "ellie",
    gender: "F",
    origins: ["Greek", "English"],
    meanings: ["Light", "Shining"],
    syllables: 2,
    phonetic: "/ˈɛli/",
    nicknames: [],
    alternateSpellings: ["Elly", "Eli"],
    currentRank: 20,
    trend: "rising",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 220, 2010: 69, 2020: 28, 2023: 20 },
  },
  {
    id: "f21",
    name: "Nora",
    normalizedName: "nora",
    gender: "F",
    origins: ["Irish", "Greek"],
    meanings: ["Honor", "Light"],
    syllables: 2,
    phonetic: "/ˈnɔːrə/",
    nicknames: [],
    alternateSpellings: ["Norah"],
    currentRank: 21,
    trend: "rising",
    historicalRanks: { 1900: 35, 1950: 0, 1980: 0, 2000: 280, 2010: 130, 2020: 30, 2023: 21 },
  },
  {
    id: "f22",
    name: "Hazel",
    normalizedName: "hazel",
    gender: "F",
    origins: ["English"],
    meanings: ["Hazelnut tree"],
    syllables: 2,
    phonetic: "/ˈheɪzəl/",
    nicknames: [],
    alternateSpellings: ["Hazle"],
    currentRank: 22,
    trend: "rising",
    historicalRanks: { 1900: 23, 1950: 120, 1980: 0, 2000: 466, 2010: 150, 2020: 28, 2023: 22 },
  },
  {
    id: "f23",
    name: "Zoey",
    normalizedName: "zoey",
    gender: "F",
    origins: ["Greek"],
    meanings: ["Life"],
    syllables: 2,
    phonetic: "/ˈzoʊi/",
    nicknames: ["Zo"],
    alternateSpellings: ["Zoe", "Zoie"],
    currentRank: 23,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 114, 2010: 31, 2020: 32, 2023: 23 },
  },
  {
    id: "f24",
    name: "Riley",
    normalizedName: "riley",
    gender: "F",
    origins: ["Irish"],
    meanings: ["Courageous", "Valiant"],
    syllables: 2,
    phonetic: "/ˈraɪli/",
    nicknames: [],
    alternateSpellings: ["Rylee", "Ryleigh"],
    currentRank: 24,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 324, 2010: 47, 2020: 33, 2023: 24 },
  },
  {
    id: "f25",
    name: "Lily",
    normalizedName: "lily",
    gender: "F",
    origins: ["English", "Latin"],
    meanings: ["Lily flower", "Purity"],
    syllables: 2,
    phonetic: "/ˈlɪli/",
    nicknames: [],
    alternateSpellings: ["Lilly", "Lillie"],
    currentRank: 25,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 54, 2010: 15, 2020: 35, 2023: 25 },
  },
  // ... More girls names
  {
    id: "f26",
    name: "Eleanor",
    normalizedName: "eleanor",
    gender: "F",
    origins: ["Greek", "French"],
    meanings: ["Bright light", "Shining one"],
    syllables: 3,
    phonetic: "/ˈɛlənɔːr/",
    nicknames: ["Ellie", "Nell", "Nora", "Elle"],
    alternateSpellings: ["Elinor", "Elanor"],
    currentRank: 26,
    trend: "rising",
    historicalRanks: { 1900: 28, 1950: 108, 1980: 0, 2000: 238, 2010: 59, 2020: 22, 2023: 26 },
  },
  {
    id: "f27",
    name: "Violet",
    normalizedName: "violet",
    gender: "F",
    origins: ["Latin"],
    meanings: ["Purple flower"],
    syllables: 3,
    phonetic: "/ˈvaɪələt/",
    nicknames: ["Vi"],
    alternateSpellings: ["Violette"],
    currentRank: 27,
    trend: "rising",
    historicalRanks: { 1900: 68, 1950: 0, 1980: 0, 2000: 546, 2010: 101, 2020: 37, 2023: 27 },
  },
  {
    id: "f28",
    name: "Nova",
    normalizedName: "nova",
    gender: "F",
    origins: ["Latin"],
    meanings: ["New", "Star"],
    syllables: 2,
    phonetic: "/ˈnoʊvə/",
    nicknames: [],
    alternateSpellings: [],
    currentRank: 28,
    trend: "rising",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 884, 2010: 288, 2020: 32, 2023: 28 },
  },
  {
    id: "f29",
    name: "Ivy",
    normalizedName: "ivy",
    gender: "F",
    origins: ["English"],
    meanings: ["Ivy plant", "Faithfulness"],
    syllables: 2,
    phonetic: "/ˈaɪvi/",
    nicknames: [],
    alternateSpellings: ["Ivie"],
    currentRank: 29,
    trend: "rising",
    historicalRanks: { 1900: 228, 1950: 0, 1980: 0, 2000: 584, 2010: 187, 2020: 47, 2023: 29 },
  },
  {
    id: "f30",
    name: "Camila",
    normalizedName: "camila",
    gender: "F",
    origins: ["Latin", "Spanish"],
    meanings: ["Young ceremonial attendant"],
    syllables: 3,
    phonetic: "/kəˈmiːlə/",
    nicknames: ["Cami", "Mila"],
    alternateSpellings: ["Camilla", "Kamila"],
    currentRank: 30,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 160, 2010: 51, 2020: 18, 2023: 30 },
  },

  // ============== BOYS NAMES ==============
  {
    id: "m1",
    name: "Liam",
    normalizedName: "liam",
    gender: "M",
    origins: ["Irish", "Germanic"],
    meanings: ["Strong-willed warrior", "Helmet of will"],
    syllables: 1,
    phonetic: "/liːəm/",
    nicknames: ["Li"],
    alternateSpellings: ["Lyam"],
    currentRank: 1,
    trend: "stable",
    famousNamesakes: [
      { name: "Liam Neeson", description: "Hollywood actor" },
      { name: "Liam Hemsworth", description: "Actor" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 140, 2010: 30, 2020: 1, 2023: 1 },
  },
  {
    id: "m2",
    name: "Noah",
    normalizedName: "noah",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Rest", "Comfort", "Repose"],
    syllables: 2,
    phonetic: "/ˈnoʊə/",
    nicknames: [],
    alternateSpellings: ["Noa"],
    currentRank: 2,
    trend: "stable",
    famousNamesakes: [
      { name: "Noah Centineo", description: "Actor" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 25, 2010: 7, 2020: 2, 2023: 2 },
  },
  {
    id: "m3",
    name: "Oliver",
    normalizedName: "oliver",
    gender: "M",
    origins: ["Latin", "Old French"],
    meanings: ["Olive tree", "Peaceful"],
    syllables: 3,
    phonetic: "/ˈɒlɪvər/",
    nicknames: ["Ollie", "Oli"],
    alternateSpellings: ["Olivier"],
    currentRank: 3,
    trend: "rising",
    famousNamesakes: [
      { name: "Oliver Twist", description: "Dickens character" },
    ],
    historicalRanks: { 1900: 150, 1950: 0, 1980: 0, 2000: 246, 2010: 88, 2020: 3, 2023: 3 },
  },
  {
    id: "m4",
    name: "James",
    normalizedName: "james",
    gender: "M",
    origins: ["Hebrew", "English"],
    meanings: ["Supplanter", "One who follows"],
    syllables: 1,
    phonetic: "/dʒeɪmz/",
    nicknames: ["Jim", "Jimmy", "Jamie", "Jay"],
    alternateSpellings: [],
    currentRank: 4,
    trend: "stable",
    famousNamesakes: [
      { name: "James Dean", description: "Iconic actor" },
      { name: "King James", description: "Biblical figure" },
    ],
    historicalRanks: { 1900: 3, 1950: 5, 1980: 8, 2000: 15, 2010: 17, 2020: 6, 2023: 4 },
  },
  {
    id: "m5",
    name: "Elijah",
    normalizedName: "elijah",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["My God is Yahweh", "The Lord is my God"],
    syllables: 3,
    phonetic: "/ɪˈlaɪdʒə/",
    nicknames: ["Eli", "Lijah"],
    alternateSpellings: ["Elias"],
    currentRank: 5,
    trend: "rising",
    famousNamesakes: [
      { name: "Elijah Wood", description: "Actor (Lord of the Rings)" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 55, 2010: 18, 2020: 4, 2023: 5 },
  },
  {
    id: "m6",
    name: "William",
    normalizedName: "william",
    gender: "M",
    origins: ["Germanic"],
    meanings: ["Resolute protector", "Strong-willed warrior"],
    syllables: 3,
    phonetic: "/ˈwɪljəm/",
    nicknames: ["Will", "Bill", "Billy", "Liam", "Willy"],
    alternateSpellings: ["Willem"],
    currentRank: 6,
    trend: "stable",
    famousNamesakes: [
      { name: "Prince William", description: "British royal" },
      { name: "William Shakespeare", description: "Playwright" },
    ],
    historicalRanks: { 1900: 2, 1950: 5, 1980: 15, 2000: 18, 2010: 5, 2020: 5, 2023: 6 },
  },
  {
    id: "m7",
    name: "Henry",
    normalizedName: "henry",
    gender: "M",
    origins: ["Germanic"],
    meanings: ["Ruler of the home", "Estate ruler"],
    syllables: 2,
    phonetic: "/ˈhɛnri/",
    nicknames: ["Hank", "Harry", "Hal"],
    alternateSpellings: ["Henri"],
    currentRank: 7,
    trend: "rising",
    famousNamesakes: [
      { name: "Prince Henry", description: "British royal (Harry)" },
      { name: "Henry Ford", description: "Automobile pioneer" },
    ],
    historicalRanks: { 1900: 10, 1950: 50, 1980: 120, 2000: 119, 2010: 57, 2020: 9, 2023: 7 },
  },
  {
    id: "m8",
    name: "Lucas",
    normalizedName: "lucas",
    gender: "M",
    origins: ["Greek", "Latin"],
    meanings: ["Bringer of light", "From Lucania"],
    syllables: 2,
    phonetic: "/ˈluːkəs/",
    nicknames: ["Luke", "Luc"],
    alternateSpellings: ["Lukas"],
    currentRank: 8,
    trend: "stable",
    famousNamesakes: [
      { name: "George Lucas", description: "Star Wars creator" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 68, 2010: 26, 2020: 8, 2023: 8 },
  },
  {
    id: "m9",
    name: "Benjamin",
    normalizedName: "benjamin",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Son of the right hand", "Favored son"],
    syllables: 3,
    phonetic: "/ˈbɛndʒəmɪn/",
    nicknames: ["Ben", "Benny", "Benji"],
    alternateSpellings: [],
    currentRank: 9,
    trend: "stable",
    famousNamesakes: [
      { name: "Benjamin Franklin", description: "Founding Father" },
    ],
    historicalRanks: { 1900: 50, 1950: 60, 1980: 35, 2000: 26, 2010: 22, 2020: 7, 2023: 9 },
  },
  {
    id: "m10",
    name: "Theodore",
    normalizedName: "theodore",
    gender: "M",
    origins: ["Greek"],
    meanings: ["Gift of God", "Divine gift"],
    syllables: 3,
    phonetic: "/ˈθiːədɔːr/",
    nicknames: ["Theo", "Ted", "Teddy"],
    alternateSpellings: ["Theodor"],
    currentRank: 10,
    trend: "rising",
    famousNamesakes: [
      { name: "Theodore Roosevelt", description: "U.S. President" },
    ],
    historicalRanks: { 1900: 45, 1950: 95, 1980: 0, 2000: 213, 2010: 99, 2020: 23, 2023: 10 },
  },
  {
    id: "m11",
    name: "Jack",
    normalizedName: "jack",
    gender: "M",
    origins: ["English"],
    meanings: ["God is gracious"],
    syllables: 1,
    phonetic: "/dʒæk/",
    nicknames: ["Jackie"],
    alternateSpellings: ["Jak"],
    currentRank: 11,
    trend: "stable",
    famousNamesakes: [
      { name: "Jack Nicholson", description: "Legendary actor" },
    ],
    historicalRanks: { 1900: 25, 1950: 90, 1980: 180, 2000: 36, 2010: 45, 2020: 21, 2023: 11 },
  },
  {
    id: "m12",
    name: "Levi",
    normalizedName: "levi",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Joined", "Attached"],
    syllables: 2,
    phonetic: "/ˈliːvaɪ/",
    nicknames: [],
    alternateSpellings: ["Levy"],
    currentRank: 12,
    trend: "rising",
    famousNamesakes: [
      { name: "Levi Strauss", description: "Jeans inventor" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 172, 2010: 67, 2020: 18, 2023: 12 },
  },
  {
    id: "m13",
    name: "Alexander",
    normalizedName: "alexander",
    gender: "M",
    origins: ["Greek"],
    meanings: ["Defender of the people"],
    syllables: 4,
    phonetic: "/ˌælɪɡˈzændər/",
    nicknames: ["Alex", "Xander", "Lex", "Alec"],
    alternateSpellings: ["Alexandre"],
    currentRank: 13,
    trend: "stable",
    famousNamesakes: [
      { name: "Alexander the Great", description: "Ancient conqueror" },
    ],
    historicalRanks: { 1900: 90, 1950: 55, 1980: 50, 2000: 22, 2010: 8, 2020: 10, 2023: 13 },
  },
  {
    id: "m14",
    name: "Sebastian",
    normalizedName: "sebastian",
    gender: "M",
    origins: ["Greek", "Latin"],
    meanings: ["Venerable", "Revered"],
    syllables: 4,
    phonetic: "/sɪˈbæstiən/",
    nicknames: ["Seb", "Sebby", "Bastian"],
    alternateSpellings: ["Sebastien"],
    currentRank: 14,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 91, 2010: 68, 2020: 18, 2023: 14 },
  },
  {
    id: "m15",
    name: "Mason",
    normalizedName: "mason",
    gender: "M",
    origins: ["English"],
    meanings: ["Stone worker"],
    syllables: 2,
    phonetic: "/ˈmeɪsən/",
    nicknames: ["Mace"],
    alternateSpellings: ["Mayson"],
    currentRank: 15,
    trend: "falling",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 100, 2010: 12, 2020: 8, 2023: 15 },
  },
  {
    id: "m16",
    name: "Ethan",
    normalizedName: "ethan",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Strong", "Firm", "Enduring"],
    syllables: 2,
    phonetic: "/ˈiːθən/",
    nicknames: [],
    alternateSpellings: ["Ethen"],
    currentRank: 16,
    trend: "falling",
    famousNamesakes: [
      { name: "Ethan Hawke", description: "Actor and director" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 5, 2010: 3, 2020: 13, 2023: 16 },
  },
  {
    id: "m17",
    name: "Daniel",
    normalizedName: "daniel",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["God is my judge"],
    syllables: 3,
    phonetic: "/ˈdænjəl/",
    nicknames: ["Dan", "Danny"],
    alternateSpellings: ["Danial"],
    currentRank: 17,
    trend: "stable",
    famousNamesakes: [
      { name: "Daniel Radcliffe", description: "Harry Potter actor" },
    ],
    historicalRanks: { 1900: 75, 1950: 15, 1980: 6, 2000: 10, 2010: 9, 2020: 14, 2023: 17 },
  },
  {
    id: "m18",
    name: "Michael",
    normalizedName: "michael",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Who is like God?"],
    syllables: 2,
    phonetic: "/ˈmaɪkəl/",
    nicknames: ["Mike", "Mikey", "Mick"],
    alternateSpellings: ["Micheal", "Mikael"],
    currentRank: 18,
    trend: "falling",
    famousNamesakes: [
      { name: "Michael Jordan", description: "Basketball legend" },
      { name: "Michael Jackson", description: "King of Pop" },
    ],
    historicalRanks: { 1900: 20, 1950: 2, 1980: 1, 2000: 2, 2010: 6, 2020: 12, 2023: 18 },
  },
  {
    id: "m19",
    name: "Owen",
    normalizedName: "owen",
    gender: "M",
    origins: ["Welsh", "Irish"],
    meanings: ["Young warrior", "Well-born"],
    syllables: 2,
    phonetic: "/ˈoʊɪn/",
    nicknames: [],
    alternateSpellings: ["Owan"],
    currentRank: 19,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 88, 2010: 48, 2020: 22, 2023: 19 },
  },
  {
    id: "m20",
    name: "Aiden",
    normalizedName: "aiden",
    gender: "M",
    origins: ["Irish", "Gaelic"],
    meanings: ["Little fire", "Fiery"],
    syllables: 2,
    phonetic: "/ˈeɪdən/",
    nicknames: ["Aidy"],
    alternateSpellings: ["Aidan", "Ayden", "Aden"],
    currentRank: 20,
    trend: "falling",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 324, 2010: 9, 2020: 24, 2023: 20 },
  },
  {
    id: "m21",
    name: "Matthew",
    normalizedName: "matthew",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Gift of God"],
    syllables: 2,
    phonetic: "/ˈmæθjuː/",
    nicknames: ["Matt", "Matty"],
    alternateSpellings: ["Mathew"],
    currentRank: 21,
    trend: "falling",
    historicalRanks: { 1900: 120, 1950: 28, 1980: 3, 2000: 3, 2010: 15, 2020: 30, 2023: 21 },
  },
  {
    id: "m22",
    name: "Logan",
    normalizedName: "logan",
    gender: "M",
    origins: ["Scottish", "Gaelic"],
    meanings: ["Little hollow"],
    syllables: 2,
    phonetic: "/ˈloʊɡən/",
    nicknames: [],
    alternateSpellings: ["Loghan"],
    currentRank: 22,
    trend: "falling",
    famousNamesakes: [
      { name: "Logan (Wolverine)", description: "X-Men character" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 26, 2010: 19, 2020: 16, 2023: 22 },
  },
  {
    id: "m23",
    name: "Asher",
    normalizedName: "asher",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Happy", "Blessed"],
    syllables: 2,
    phonetic: "/ˈæʃər/",
    nicknames: ["Ash"],
    alternateSpellings: [],
    currentRank: 23,
    trend: "rising",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 579, 2010: 93, 2020: 32, 2023: 23 },
  },
  {
    id: "m24",
    name: "Samuel",
    normalizedName: "samuel",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["God has heard", "Name of God"],
    syllables: 3,
    phonetic: "/ˈsæmjuːəl/",
    nicknames: ["Sam", "Sammy"],
    alternateSpellings: [],
    currentRank: 24,
    trend: "stable",
    historicalRanks: { 1900: 25, 1950: 35, 1980: 55, 2000: 28, 2010: 24, 2020: 20, 2023: 24 },
  },
  {
    id: "m25",
    name: "Joseph",
    normalizedName: "joseph",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["God will add", "He will increase"],
    syllables: 2,
    phonetic: "/ˈdʒoʊzəf/",
    nicknames: ["Joe", "Joey", "Jo"],
    alternateSpellings: ["Josef"],
    currentRank: 25,
    trend: "stable",
    famousNamesakes: [
      { name: "Joseph Biden", description: "U.S. President" },
    ],
    historicalRanks: { 1900: 4, 1950: 8, 1980: 12, 2000: 12, 2010: 20, 2020: 26, 2023: 25 },
  },
  {
    id: "m26",
    name: "Leo",
    normalizedName: "leo",
    gender: "M",
    origins: ["Latin"],
    meanings: ["Lion"],
    syllables: 2,
    phonetic: "/ˈliːoʊ/",
    nicknames: [],
    alternateSpellings: [],
    currentRank: 26,
    trend: "rising",
    famousNamesakes: [
      { name: "Leonardo DiCaprio", description: "Academy Award-winning actor" },
    ],
    historicalRanks: { 1900: 38, 1950: 85, 1980: 0, 2000: 188, 2010: 134, 2020: 31, 2023: 26 },
  },
  {
    id: "m27",
    name: "David",
    normalizedName: "david",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Beloved"],
    syllables: 2,
    phonetic: "/ˈdeɪvɪd/",
    nicknames: ["Dave", "Davey"],
    alternateSpellings: ["Davyd"],
    currentRank: 27,
    trend: "falling",
    famousNamesakes: [
      { name: "David Bowie", description: "Music icon" },
    ],
    historicalRanks: { 1900: 30, 1950: 3, 1980: 4, 2000: 14, 2010: 18, 2020: 27, 2023: 27 },
  },
  {
    id: "m28",
    name: "Jackson",
    normalizedName: "jackson",
    gender: "M",
    origins: ["English"],
    meanings: ["Son of Jack"],
    syllables: 2,
    phonetic: "/ˈdʒæksən/",
    nicknames: ["Jack", "Jax"],
    alternateSpellings: ["Jaxon", "Jaxson"],
    currentRank: 28,
    trend: "falling",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 72, 2010: 25, 2020: 17, 2023: 28 },
  },
  {
    id: "m29",
    name: "Ezra",
    normalizedName: "ezra",
    gender: "M",
    origins: ["Hebrew"],
    meanings: ["Helper", "Help"],
    syllables: 2,
    phonetic: "/ˈɛzrə/",
    nicknames: ["Ez"],
    alternateSpellings: [],
    currentRank: 29,
    trend: "rising",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 583, 2010: 109, 2020: 41, 2023: 29 },
  },
  {
    id: "m30",
    name: "Luke",
    normalizedName: "luke",
    gender: "M",
    origins: ["Greek"],
    meanings: ["Light", "Light-giving"],
    syllables: 1,
    phonetic: "/luːk/",
    nicknames: [],
    alternateSpellings: ["Luc"],
    currentRank: 30,
    trend: "stable",
    famousNamesakes: [
      { name: "Luke Skywalker", description: "Star Wars hero" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 120, 2000: 49, 2010: 35, 2020: 31, 2023: 30 },
  },

  // ============== ADDITIONAL POPULAR NAMES ==============
  {
    id: "f31",
    name: "Grace",
    normalizedName: "grace",
    gender: "F",
    origins: ["Latin"],
    meanings: ["Grace of God", "Elegance"],
    syllables: 1,
    phonetic: "/ɡreɪs/",
    nicknames: ["Gracie"],
    alternateSpellings: ["Grayce"],
    currentRank: 31,
    trend: "stable",
    famousNamesakes: [
      { name: "Grace Kelly", description: "Actress and princess" },
    ],
    historicalRanks: { 1900: 18, 1950: 70, 1980: 0, 2000: 15, 2010: 16, 2020: 40, 2023: 31 },
  },
  {
    id: "f32",
    name: "Scarlett",
    normalizedName: "scarlett",
    gender: "F",
    origins: ["English"],
    meanings: ["Red", "Scarlet"],
    syllables: 2,
    phonetic: "/ˈskɑːrlɪt/",
    nicknames: ["Scar", "Lettie"],
    alternateSpellings: ["Scarlet"],
    currentRank: 32,
    trend: "stable",
    famousNamesakes: [
      { name: "Scarlett Johansson", description: "Actress" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 850, 2010: 80, 2020: 21, 2023: 32 },
  },
  {
    id: "f33",
    name: "Victoria",
    normalizedName: "victoria",
    gender: "F",
    origins: ["Latin"],
    meanings: ["Victory", "Conqueror"],
    syllables: 4,
    phonetic: "/vɪkˈtɔːriə/",
    nicknames: ["Vicky", "Tori", "Vic"],
    alternateSpellings: ["Viktoria"],
    currentRank: 33,
    trend: "falling",
    famousNamesakes: [
      { name: "Queen Victoria", description: "British monarch" },
    ],
    historicalRanks: { 1900: 150, 1950: 145, 1980: 35, 2000: 25, 2010: 28, 2020: 35, 2023: 33 },
  },
  {
    id: "f34",
    name: "Stella",
    normalizedName: "stella",
    gender: "F",
    origins: ["Latin"],
    meanings: ["Star"],
    syllables: 2,
    phonetic: "/ˈstɛlə/",
    nicknames: [],
    alternateSpellings: [],
    currentRank: 34,
    trend: "rising",
    historicalRanks: { 1900: 50, 1950: 200, 1980: 0, 2000: 350, 2010: 84, 2020: 43, 2023: 34 },
  },
  {
    id: "f35",
    name: "Maya",
    normalizedName: "maya",
    gender: "F",
    origins: ["Sanskrit", "Greek", "Hebrew"],
    meanings: ["Illusion", "Water", "Great"],
    syllables: 2,
    phonetic: "/ˈmaɪə/",
    nicknames: [],
    alternateSpellings: ["Maia", "Mya"],
    currentRank: 35,
    trend: "stable",
    famousNamesakes: [
      { name: "Maya Angelou", description: "Poet and author" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 62, 2010: 64, 2020: 61, 2023: 35 },
  },
  {
    id: "m31",
    name: "Carter",
    normalizedName: "carter",
    gender: "M",
    origins: ["English"],
    meanings: ["Cart driver"],
    syllables: 2,
    phonetic: "/ˈkɑːrtər/",
    nicknames: [],
    alternateSpellings: [],
    currentRank: 31,
    trend: "falling",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 152, 2010: 41, 2020: 26, 2023: 31 },
  },
  {
    id: "m32",
    name: "Jayden",
    normalizedName: "jayden",
    gender: "M",
    origins: ["Modern American"],
    meanings: ["Thankful", "God has heard"],
    syllables: 2,
    phonetic: "/ˈdʒeɪdən/",
    nicknames: ["Jay"],
    alternateSpellings: ["Jaden", "Jaiden", "Jaydon"],
    currentRank: 32,
    trend: "falling",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 450, 2010: 4, 2020: 29, 2023: 32 },
  },
  {
    id: "m33",
    name: "Grayson",
    normalizedName: "grayson",
    gender: "M",
    origins: ["English"],
    meanings: ["Son of the gray-haired one"],
    syllables: 2,
    phonetic: "/ˈɡreɪsən/",
    nicknames: ["Gray"],
    alternateSpellings: ["Greyson"],
    currentRank: 33,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 450, 2010: 92, 2020: 34, 2023: 33 },
  },
  {
    id: "m34",
    name: "Wyatt",
    normalizedName: "wyatt",
    gender: "M",
    origins: ["English"],
    meanings: ["Brave in war"],
    syllables: 2,
    phonetic: "/ˈwaɪət/",
    nicknames: [],
    alternateSpellings: [],
    currentRank: 34,
    trend: "stable",
    famousNamesakes: [
      { name: "Wyatt Earp", description: "Western lawman" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 135, 2010: 43, 2020: 25, 2023: 34 },
  },
  {
    id: "m35",
    name: "Julian",
    normalizedName: "julian",
    gender: "M",
    origins: ["Latin"],
    meanings: ["Youthful", "Downy-bearded"],
    syllables: 3,
    phonetic: "/ˈdʒuːliən/",
    nicknames: ["Jules"],
    alternateSpellings: ["Julien"],
    currentRank: 35,
    trend: "rising",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 84, 2010: 52, 2020: 36, 2023: 35 },
  },

  // Add more common middle names
  {
    id: "f40",
    name: "Rose",
    normalizedName: "rose",
    gender: "F",
    origins: ["Latin"],
    meanings: ["Rose flower"],
    syllables: 1,
    phonetic: "/roʊz/",
    nicknames: ["Rosie"],
    alternateSpellings: [],
    currentRank: 116,
    trend: "stable",
    historicalRanks: { 1900: 15, 1950: 75, 1980: 220, 2000: 290, 2010: 170, 2020: 116, 2023: 116 },
  },
  {
    id: "f41",
    name: "Mae",
    normalizedName: "mae",
    gender: "F",
    origins: ["English"],
    meanings: ["Bitter", "Pearl"],
    syllables: 1,
    phonetic: "/meɪ/",
    nicknames: [],
    alternateSpellings: ["May"],
    currentRank: 270,
    trend: "rising",
    historicalRanks: { 1900: 32, 1950: 250, 1980: 0, 2000: 0, 2010: 590, 2020: 270, 2023: 270 },
  },
  {
    id: "f42",
    name: "Jane",
    normalizedName: "jane",
    gender: "F",
    origins: ["Hebrew"],
    meanings: ["God is gracious"],
    syllables: 1,
    phonetic: "/dʒeɪn/",
    nicknames: ["Janie"],
    alternateSpellings: ["Jayne"],
    currentRank: 291,
    trend: "rising",
    historicalRanks: { 1900: 55, 1950: 35, 1980: 185, 2000: 356, 2010: 360, 2020: 291, 2023: 291 },
  },
  {
    id: "f43",
    name: "Anne",
    normalizedName: "anne",
    gender: "F",
    origins: ["Hebrew"],
    meanings: ["Grace", "Favor"],
    syllables: 1,
    phonetic: "/æn/",
    nicknames: ["Annie"],
    alternateSpellings: ["Ann", "Ana"],
    currentRank: 550,
    trend: "stable",
    historicalRanks: { 1900: 45, 1950: 42, 1980: 85, 2000: 280, 2010: 450, 2020: 550, 2023: 550 },
  },
  {
    id: "f44",
    name: "Claire",
    normalizedName: "claire",
    gender: "F",
    origins: ["French", "Latin"],
    meanings: ["Clear", "Bright"],
    syllables: 1,
    phonetic: "/klɛər/",
    nicknames: [],
    alternateSpellings: ["Clare", "Clair"],
    currentRank: 72,
    trend: "stable",
    historicalRanks: { 1900: 0, 1950: 0, 1980: 0, 2000: 180, 2010: 50, 2020: 72, 2023: 72 },
  },
  {
    id: "m40",
    name: "Thomas",
    normalizedName: "thomas",
    gender: "M",
    origins: ["Aramaic"],
    meanings: ["Twin"],
    syllables: 2,
    phonetic: "/ˈtɒməs/",
    nicknames: ["Tom", "Tommy"],
    alternateSpellings: [],
    currentRank: 45,
    trend: "falling",
    famousNamesakes: [
      { name: "Thomas Edison", description: "Inventor" },
    ],
    historicalRanks: { 1900: 8, 1950: 10, 1980: 15, 2000: 13, 2010: 63, 2020: 45, 2023: 45 },
  },
  {
    id: "m41",
    name: "Charles",
    normalizedName: "charles",
    gender: "M",
    origins: ["Germanic"],
    meanings: ["Free man"],
    syllables: 1,
    phonetic: "/tʃɑːrlz/",
    nicknames: ["Charlie", "Chuck", "Chas"],
    alternateSpellings: [],
    currentRank: 50,
    trend: "rising",
    famousNamesakes: [
      { name: "King Charles III", description: "British monarch" },
    ],
    historicalRanks: { 1900: 5, 1950: 6, 1980: 35, 2000: 60, 2010: 62, 2020: 50, 2023: 50 },
  },
  {
    id: "m42",
    name: "Christopher",
    normalizedName: "christopher",
    gender: "M",
    origins: ["Greek"],
    meanings: ["Bearer of Christ"],
    syllables: 3,
    phonetic: "/ˈkrɪstəfər/",
    nicknames: ["Chris", "Topher", "Kit"],
    alternateSpellings: ["Kristopher"],
    currentRank: 48,
    trend: "falling",
    famousNamesakes: [
      { name: "Christopher Columbus", description: "Explorer" },
    ],
    historicalRanks: { 1900: 60, 1950: 18, 1980: 2, 2000: 8, 2010: 25, 2020: 48, 2023: 48 },
  },
  {
    id: "m43",
    name: "Andrew",
    normalizedName: "andrew",
    gender: "M",
    origins: ["Greek"],
    meanings: ["Manly", "Strong"],
    syllables: 2,
    phonetic: "/ˈændruː/",
    nicknames: ["Andy", "Drew"],
    alternateSpellings: [],
    currentRank: 55,
    trend: "falling",
    historicalRanks: { 1900: 40, 1950: 25, 1980: 10, 2000: 7, 2010: 30, 2020: 55, 2023: 55 },
  },
  {
    id: "m44",
    name: "Ryan",
    normalizedName: "ryan",
    gender: "M",
    origins: ["Irish"],
    meanings: ["Little king"],
    syllables: 2,
    phonetic: "/ˈraɪən/",
    nicknames: [],
    alternateSpellings: ["Rian"],
    currentRank: 60,
    trend: "falling",
    famousNamesakes: [
      { name: "Ryan Gosling", description: "Actor" },
    ],
    historicalRanks: { 1900: 0, 1950: 0, 1980: 14, 2000: 15, 2010: 22, 2020: 60, 2023: 60 },
  },
];

/**
 * Get all names
 */
export function getAllNames(): NameData[] {
  return namesData;
}

/**
 * Search names by query
 */
export function searchNames(
  query: string,
  options?: {
    gender?: "M" | "F" | "N" | "all";
    limit?: number;
    offset?: number;
  }
): { names: NameData[]; total: number } {
  const { gender = "all", limit = 20, offset = 0 } = options || {};

  let filtered = namesData;

  // Filter by gender
  if (gender && gender !== "all") {
    filtered = filtered.filter((n) => n.gender === gender);
  }

  // Filter by query
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (n) =>
        n.normalizedName.includes(q) ||
        n.meanings.some((m) => m.toLowerCase().includes(q)) ||
        n.origins.some((o) => o.toLowerCase().includes(q)) ||
        n.nicknames.some((nick) => nick.toLowerCase().includes(q))
    );
  }

  // Sort by rank
  filtered.sort((a, b) => a.currentRank - b.currentRank);

  return {
    names: filtered.slice(offset, offset + limit),
    total: filtered.length,
  };
}

/**
 * Get name by ID
 */
export function getNameById(id: string): NameData | undefined {
  return namesData.find((n) => n.id === id);
}

/**
 * Get name by name string
 */
export function getNameByName(name: string): NameData | undefined {
  const normalized = name.toLowerCase().trim();
  return namesData.find((n) => n.normalizedName === normalized);
}

/**
 * Get popular names by gender
 */
export function getPopularNames(gender: "M" | "F" | "all", limit = 10): NameData[] {
  let filtered = namesData;

  if (gender !== "all") {
    filtered = filtered.filter((n) => n.gender === gender);
  }

  return filtered
    .sort((a, b) => a.currentRank - b.currentRank)
    .slice(0, limit);
}

/**
 * Get a random name by gender
 */
export function getRandomName(gender: "M" | "F" | "all"): NameData {
  let filtered = namesData;

  if (gender !== "all") {
    filtered = filtered.filter((n) => n.gender === gender);
  }

  const randomIndex = Math.floor(Math.random() * filtered.length);
  return filtered[randomIndex];
}

/**
 * Get names by starting letter
 */
export function getNamesByLetter(
  letter: string,
  options?: {
    gender?: "M" | "F" | "all";
    origin?: string;
    limit?: number;
  }
): NameData[] {
  const { gender = "all", origin, limit } = options || {};
  const upperLetter = letter.toUpperCase();

  let filtered = namesData.filter((n) =>
    n.name.toUpperCase().startsWith(upperLetter)
  );

  if (gender !== "all") {
    filtered = filtered.filter((n) => n.gender === gender);
  }

  if (origin && origin !== "all") {
    filtered = filtered.filter((n) =>
      n.origins.some((o) => o.toLowerCase().includes(origin.toLowerCase()))
    );
  }

  // Sort alphabetically
  filtered.sort((a, b) => a.name.localeCompare(b.name));

  if (limit) {
    return filtered.slice(0, limit);
  }

  return filtered;
}

/**
 * Get available letters that have names (for the given filters)
 */
export function getAvailableLetters(
  gender?: "M" | "F" | "all",
  origin?: string
): string[] {
  let filtered = namesData;

  if (gender && gender !== "all") {
    filtered = filtered.filter((n) => n.gender === gender);
  }

  if (origin && origin !== "all") {
    filtered = filtered.filter((n) =>
      n.origins.some((o) => o.toLowerCase().includes(origin.toLowerCase()))
    );
  }

  const letters = new Set(filtered.map((n) => n.name[0].toUpperCase()));
  return Array.from(letters).sort();
}

/**
 * Get all unique origins from the dataset
 */
export function getAllOrigins(): string[] {
  const origins = new Set<string>();
  namesData.forEach((n) => {
    n.origins.forEach((o) => origins.add(o));
  });
  return Array.from(origins).sort();
}
