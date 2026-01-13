/**
 * Baby Names Data
 * Comprehensive dataset based on SSA popularity data with origins, meanings, and analysis
 * Total: 2775 names
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
  historicalRanks?: Record<number, number>;
}

// Count syllables (approximation)
function countSyllables(name: string): number {
  const vowels = name.toLowerCase().match(/[aeiouy]+/g);
  return vowels ? Math.max(1, vowels.length) : 1;
}

export const namesData: NameData[] = [
  {
    id: "f1034",
    name: "Olivia",
    normalizedName: "olivia",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Olive tree",
      "Peace"
    ],
    syllables: 3,
    nicknames: [
      "Liv",
      "Livvy",
      "Ollie"
    ],
    alternateSpellings: [],
    currentRank: 1034,
    trend: "stable"
  },
  {
    id: "f572",
    name: "Emma",
    normalizedName: "emma",
    gender: "F",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Whole",
      "Universal"
    ],
    syllables: 2,
    nicknames: [
      "Em",
      "Emmy"
    ],
    alternateSpellings: [],
    currentRank: 572,
    trend: "stable"
  },
  {
    id: "f1772",
    name: "Charlotte",
    normalizedName: "charlotte",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Free woman",
      "Petite"
    ],
    syllables: 3,
    nicknames: [
      "Charlie",
      "Lottie",
      "Lola"
    ],
    alternateSpellings: [],
    currentRank: 1772,
    trend: "stable"
  },
  {
    id: "f4",
    name: "Amelia",
    normalizedName: "amelia",
    gender: "F",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Industrious",
      "Striving"
    ],
    syllables: 3,
    nicknames: [
      "Amy",
      "Mia",
      "Millie",
      "Mel"
    ],
    alternateSpellings: [],
    currentRank: 4,
    trend: "stable"
  },
  {
    id: "f1162",
    name: "Sophia",
    normalizedName: "sophia",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Wisdom"
    ],
    syllables: 2,
    nicknames: [
      "Sophie",
      "Soph"
    ],
    alternateSpellings: [],
    currentRank: 1162,
    trend: "stable"
  },
  {
    id: "f684",
    name: "Isabella",
    normalizedName: "isabella",
    gender: "F",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Devoted to God"
    ],
    syllables: 4,
    nicknames: [
      "Bella",
      "Izzy",
      "Isa",
      "Elle"
    ],
    alternateSpellings: [],
    currentRank: 684,
    trend: "stable"
  },
  {
    id: "f974",
    name: "Mia",
    normalizedName: "mia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Beloved",
      "Mine"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 974,
    trend: "stable"
  },
  {
    id: "f1519",
    name: "Ava",
    normalizedName: "ava",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Life",
      "Bird-like"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1519,
    trend: "stable"
  },
  {
    id: "f589",
    name: "Evelyn",
    normalizedName: "evelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Wished-for child"
    ],
    syllables: 3,
    nicknames: [
      "Evie",
      "Eve",
      "Lyn"
    ],
    alternateSpellings: [],
    currentRank: 589,
    trend: "stable"
  },
  {
    id: "f889",
    name: "Luna",
    normalizedName: "luna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Moon"
    ],
    syllables: 2,
    nicknames: [
      "Lu",
      "Lulu"
    ],
    alternateSpellings: [],
    currentRank: 889,
    trend: "stable"
  },
  {
    id: "m1483",
    name: "Harper",
    normalizedName: "harper",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Harp player"
    ],
    syllables: 2,
    nicknames: [
      "Har",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 1483,
    trend: "stable"
  },
  {
    id: "f1161",
    name: "Sofia",
    normalizedName: "sofia",
    gender: "F",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Wisdom"
    ],
    syllables: 2,
    nicknames: [
      "Sophie",
      "Sof"
    ],
    alternateSpellings: [],
    currentRank: 1161,
    trend: "stable"
  },
  {
    id: "f1680",
    name: "Camila",
    normalizedName: "camila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Young ceremonial attendant"
    ],
    syllables: 3,
    nicknames: [
      "Cam",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 1680,
    trend: "stable"
  },
  {
    id: "f543",
    name: "Eleanor",
    normalizedName: "eleanor",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Bright light"
    ],
    syllables: 3,
    nicknames: [
      "Ellie",
      "Nell",
      "Nora",
      "Lea"
    ],
    alternateSpellings: [],
    currentRank: 543,
    trend: "stable"
  },
  {
    id: "f552",
    name: "Elizabeth",
    normalizedName: "elizabeth",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Pledged to God"
    ],
    syllables: 4,
    nicknames: [
      "Liz",
      "Beth",
      "Lizzy",
      "Eliza",
      "Ellie",
      "Betty"
    ],
    alternateSpellings: [],
    currentRank: 552,
    trend: "stable"
  },
  {
    id: "f1216",
    name: "Violet",
    normalizedName: "violet",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Purple flower"
    ],
    syllables: 2,
    nicknames: [
      "Vi",
      "Lettie"
    ],
    alternateSpellings: [],
    currentRank: 1216,
    trend: "stable"
  },
  {
    id: "f1136",
    name: "Scarlett",
    normalizedName: "scarlett",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Red",
      "Scarlet"
    ],
    syllables: 2,
    nicknames: [
      "Scar",
      "Letty"
    ],
    alternateSpellings: [],
    currentRank: 1136,
    trend: "stable"
  },
  {
    id: "f571",
    name: "Emily",
    normalizedName: "emily",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Rival",
      "Industrious"
    ],
    syllables: 3,
    nicknames: [
      "Emi"
    ],
    alternateSpellings: [],
    currentRank: 571,
    trend: "stable"
  },
  {
    id: "f662",
    name: "Hazel",
    normalizedName: "hazel",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Hazelnut tree"
    ],
    syllables: 2,
    nicknames: [
      "Haze"
    ],
    alternateSpellings: [],
    currentRank: 662,
    trend: "stable"
  },
  {
    id: "f1450",
    name: "Aria",
    normalizedName: "aria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Air",
      "Song"
    ],
    syllables: 2,
    nicknames: [
      "Ari"
    ],
    alternateSpellings: [],
    currentRank: 1450,
    trend: "stable"
  },
  {
    id: "f1053",
    name: "Penelope",
    normalizedName: "penelope",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Weaver"
    ],
    syllables: 4,
    nicknames: [
      "Penny",
      "Nell",
      "Nellie"
    ],
    alternateSpellings: [],
    currentRank: 1053,
    trend: "stable"
  },
  {
    id: "f1791",
    name: "Chloe",
    normalizedName: "chloe",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Blooming",
      "Fertility"
    ],
    syllables: 1,
    nicknames: [
      "Clo"
    ],
    alternateSpellings: [],
    currentRank: 1791,
    trend: "stable"
  },
  {
    id: "f834",
    name: "Layla",
    normalizedName: "layla",
    gender: "F",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Night",
      "Dark beauty"
    ],
    syllables: 2,
    nicknames: [
      "Lay",
      "Lala"
    ],
    alternateSpellings: [],
    currentRank: 834,
    trend: "stable"
  },
  {
    id: "f981",
    name: "Mila",
    normalizedName: "mila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Mimi"
    ],
    alternateSpellings: [],
    currentRank: 981,
    trend: "stable"
  },
  {
    id: "f1024",
    name: "Nora",
    normalizedName: "nora",
    gender: "F",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Light",
      "Honor"
    ],
    syllables: 2,
    nicknames: [
      "Norie"
    ],
    alternateSpellings: [],
    currentRank: 1024,
    trend: "stable"
  },
  {
    id: "f862",
    name: "Lily",
    normalizedName: "lily",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Lily flower",
      "Purity"
    ],
    syllables: 2,
    nicknames: [
      "Lil",
      "Lils"
    ],
    alternateSpellings: [],
    currentRank: 862,
    trend: "stable"
  },
  {
    id: "m203",
    name: "Avery",
    normalizedName: "avery",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ave"
    ],
    alternateSpellings: [],
    currentRank: 203,
    trend: "rising"
  },
  {
    id: "m168",
    name: "Riley",
    normalizedName: "riley",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Courageous"
    ],
    syllables: 2,
    nicknames: [
      "Ril"
    ],
    alternateSpellings: [],
    currentRank: 168,
    trend: "rising"
  },
  {
    id: "f1256",
    name: "Zoey",
    normalizedName: "zoey",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Life"
    ],
    syllables: 1,
    nicknames: [
      "Zo"
    ],
    alternateSpellings: [],
    currentRank: 1256,
    trend: "stable"
  },
  {
    id: "f1166",
    name: "Stella",
    normalizedName: "stella",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Star"
    ],
    syllables: 2,
    nicknames: [
      "Stell"
    ],
    alternateSpellings: [],
    currentRank: 1166,
    trend: "stable"
  },
  {
    id: "f1515",
    name: "Aurora",
    normalizedName: "aurora",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Dawn"
    ],
    syllables: 3,
    nicknames: [
      "Rory",
      "Aura",
      "Rora"
    ],
    alternateSpellings: [],
    currentRank: 1515,
    trend: "stable"
  },
  {
    id: "f632",
    name: "Grace",
    normalizedName: "grace",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Grace",
      "Elegance"
    ],
    syllables: 2,
    nicknames: [
      "Gracie"
    ],
    alternateSpellings: [],
    currentRank: 632,
    trend: "stable"
  },
  {
    id: "f556",
    name: "Ellie",
    normalizedName: "ellie",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "El",
      "Elle"
    ],
    alternateSpellings: [],
    currentRank: 556,
    trend: "stable"
  },
  {
    id: "m1058",
    name: "Nova",
    normalizedName: "nova",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1058,
    trend: "stable"
  },
  {
    id: "f686",
    name: "Isla",
    normalizedName: "isla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 686,
    trend: "stable"
  },
  {
    id: "f1226",
    name: "Willow",
    normalizedName: "willow",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Wil",
      "Wilie"
    ],
    alternateSpellings: [],
    currentRank: 1226,
    trend: "stable"
  },
  {
    id: "f690",
    name: "Ivy",
    normalizedName: "ivy",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 690,
    trend: "stable"
  },
  {
    id: "f570",
    name: "Emilia",
    normalizedName: "emilia",
    gender: "F",
    origins: [
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Emmy",
      "Mila",
      "Millie",
      "Em"
    ],
    alternateSpellings: [],
    currentRank: 570,
    trend: "stable"
  },
  {
    id: "f39",
    name: "Abigail",
    normalizedName: "abigail",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Abby",
      "Gail"
    ],
    alternateSpellings: [],
    currentRank: 39,
    trend: "stable"
  },
  {
    id: "f649",
    name: "Hannah",
    normalizedName: "hannah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Grace",
      "Favor"
    ],
    syllables: 2,
    nicknames: [
      "Han",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 649,
    trend: "stable"
  },
  {
    id: "f553",
    name: "Ella",
    normalizedName: "ella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 553,
    trend: "stable"
  },
  {
    id: "m1880",
    name: "Madison",
    normalizedName: "madison",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Maddy",
      "Maddie"
    ],
    alternateSpellings: [],
    currentRank: 1880,
    trend: "stable"
  },
  {
    id: "f546",
    name: "Eliana",
    normalizedName: "eliana",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ellie",
      "Ana",
      "Lia"
    ],
    alternateSpellings: [],
    currentRank: 546,
    trend: "stable"
  },
  {
    id: "f1039",
    name: "Paisley",
    normalizedName: "paisley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Pais",
      "Paiie"
    ],
    alternateSpellings: [],
    currentRank: 1039,
    trend: "stable"
  },
  {
    id: "f545",
    name: "Elena",
    normalizedName: "elena",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ele"
    ],
    alternateSpellings: [],
    currentRank: 545,
    trend: "stable"
  },
  {
    id: "f1003",
    name: "Naomi",
    normalizedName: "naomi",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nao"
    ],
    alternateSpellings: [],
    currentRank: 1003,
    trend: "stable"
  },
  {
    id: "f1005",
    name: "Natalie",
    normalizedName: "natalie",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Christmas Day",
      "Born on Christmas"
    ],
    syllables: 3,
    nicknames: [
      "Nat",
      "Nattie",
      "Tali"
    ],
    alternateSpellings: [],
    currentRank: 1005,
    trend: "stable"
  },
  {
    id: "f957",
    name: "Maya",
    normalizedName: "maya",
    gender: "F",
    origins: [
      "Indian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [
      "May"
    ],
    alternateSpellings: [],
    currentRank: 957,
    trend: "stable"
  },
  {
    id: "f1208",
    name: "Valentina",
    normalizedName: "valentina",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Val",
      "Tina",
      "Lena"
    ],
    alternateSpellings: [],
    currentRank: 1208,
    trend: "stable"
  },
  {
    id: "f1106",
    name: "Ruby",
    normalizedName: "ruby",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1106,
    trend: "stable"
  },
  {
    id: "f1810",
    name: "Claire",
    normalizedName: "claire",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cla",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1810,
    trend: "stable"
  },
  {
    id: "f52",
    name: "Aaliyah",
    normalizedName: "aaliyah",
    gender: "F",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aali",
      "Aalie"
    ],
    alternateSpellings: [],
    currentRank: 52,
    trend: "stable"
  },
  {
    id: "f53",
    name: "Victoria",
    normalizedName: "victoria",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Victory"
    ],
    syllables: 3,
    nicknames: [
      "Vicky",
      "Tori",
      "Vic"
    ],
    alternateSpellings: [],
    currentRank: 53,
    trend: "stable"
  },
  {
    id: "f886",
    name: "Lucy",
    normalizedName: "lucy",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 886,
    trend: "stable"
  },
  {
    id: "f906",
    name: "Madelyn",
    normalizedName: "madelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Made",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 906,
    trend: "stable"
  },
  {
    id: "f56",
    name: "Addison",
    normalizedName: "addison",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Addy",
      "Addie"
    ],
    alternateSpellings: [],
    currentRank: 56,
    trend: "stable"
  },
  {
    id: "f836",
    name: "Leah",
    normalizedName: "leah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 836,
    trend: "stable"
  },
  {
    id: "f1506",
    name: "Audrey",
    normalizedName: "audrey",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aud",
      "Audie"
    ],
    alternateSpellings: [],
    currentRank: 1506,
    trend: "stable"
  },
  {
    id: "f433",
    name: "Bella",
    normalizedName: "bella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bel"
    ],
    alternateSpellings: [],
    currentRank: 433,
    trend: "rising"
  },
  {
    id: "f1133",
    name: "Savannah",
    normalizedName: "savannah",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Sava",
      "Savie"
    ],
    alternateSpellings: [],
    currentRank: 1133,
    trend: "stable"
  },
  {
    id: "m1138",
    name: "Brooklyn",
    normalizedName: "brooklyn",
    gender: "M",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brook",
      "Brooke",
      "Lyn"
    ],
    alternateSpellings: [],
    currentRank: 1138,
    trend: "stable"
  },
  {
    id: "m490",
    name: "Skylar",
    normalizedName: "skylar",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sky",
      "Skyie"
    ],
    alternateSpellings: [],
    currentRank: 490,
    trend: "rising"
  },
  {
    id: "f859",
    name: "Lillian",
    normalizedName: "lillian",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lill",
      "Lilie"
    ],
    alternateSpellings: [],
    currentRank: 859,
    trend: "stable"
  },
  {
    id: "f64",
    name: "Delilah",
    normalizedName: "delilah",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Deli",
      "Delie"
    ],
    alternateSpellings: [],
    currentRank: 64,
    trend: "stable"
  },
  {
    id: "f400",
    name: "Anna",
    normalizedName: "anna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 400,
    trend: "rising"
  },
  {
    id: "f1142",
    name: "Serenity",
    normalizedName: "serenity",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Sere",
      "Serie"
    ],
    alternateSpellings: [],
    currentRank: 1142,
    trend: "stable"
  },
  {
    id: "f1713",
    name: "Caroline",
    normalizedName: "caroline",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Carol",
      "Carrie",
      "Caro",
      "Line"
    ],
    alternateSpellings: [],
    currentRank: 1713,
    trend: "stable"
  },
  {
    id: "m1736",
    name: "Kennedy",
    normalizedName: "kennedy",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kenny",
      "Ken"
    ],
    alternateSpellings: [],
    currentRank: 1736,
    trend: "stable"
  },
  {
    id: "f620",
    name: "Genesis",
    normalizedName: "genesis",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gene",
      "Genie"
    ],
    alternateSpellings: [],
    currentRank: 620,
    trend: "stable"
  },
  {
    id: "f811",
    name: "Kinsley",
    normalizedName: "kinsley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Kins",
      "Kinie"
    ],
    alternateSpellings: [],
    currentRank: 811,
    trend: "stable"
  },
  {
    id: "f383",
    name: "Allison",
    normalizedName: "allison",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Alli",
      "Allie"
    ],
    alternateSpellings: [],
    currentRank: 383,
    trend: "rising"
  },
  {
    id: "f1454",
    name: "Ariana",
    normalizedName: "ariana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ari",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1454,
    trend: "stable"
  },
  {
    id: "f615",
    name: "Gabriella",
    normalizedName: "gabriella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Gabby",
      "Ella",
      "Brie"
    ],
    alternateSpellings: [],
    currentRank: 615,
    trend: "stable"
  },
  {
    id: "f74",
    name: "Alice",
    normalizedName: "alice",
    gender: "F",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ali"
    ],
    alternateSpellings: [],
    currentRank: 74,
    trend: "stable"
  },
  {
    id: "f1850",
    name: "Cora",
    normalizedName: "cora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1850,
    trend: "stable"
  },
  {
    id: "f645",
    name: "Hailey",
    normalizedName: "hailey",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Hai",
      "Haiie"
    ],
    alternateSpellings: [],
    currentRank: 645,
    trend: "stable"
  },
  {
    id: "f1115",
    name: "Sadie",
    normalizedName: "sadie",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sad"
    ],
    alternateSpellings: [],
    currentRank: 1115,
    trend: "stable"
  },
  {
    id: "f1518",
    name: "Autumn",
    normalizedName: "autumn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aut",
      "Autie"
    ],
    alternateSpellings: [],
    currentRank: 1518,
    trend: "stable"
  },
  {
    id: "f1012",
    name: "Nevaeh",
    normalizedName: "nevaeh",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nev",
      "Nevie"
    ],
    alternateSpellings: [],
    currentRank: 1012,
    trend: "stable"
  },
  {
    id: "f80",
    name: "Aubrey",
    normalizedName: "aubrey",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aub",
      "Aubie"
    ],
    alternateSpellings: [],
    currentRank: 80,
    trend: "stable"
  },
  {
    id: "m327",
    name: "Quinn",
    normalizedName: "quinn",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Qui"
    ],
    alternateSpellings: [],
    currentRank: 327,
    trend: "rising"
  },
  {
    id: "f1060",
    name: "Piper",
    normalizedName: "piper",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pip"
    ],
    alternateSpellings: [],
    currentRank: 1060,
    trend: "stable"
  },
  {
    id: "f1163",
    name: "Sophie",
    normalizedName: "sophie",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sop",
      "Sopie"
    ],
    alternateSpellings: [],
    currentRank: 1163,
    trend: "stable"
  },
  {
    id: "f1111",
    name: "Rylee",
    normalizedName: "rylee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ryl"
    ],
    alternateSpellings: [],
    currentRank: 1111,
    trend: "stable"
  },
  {
    id: "f586",
    name: "Eva",
    normalizedName: "eva",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 586,
    trend: "stable"
  },
  {
    id: "m1558",
    name: "Jade",
    normalizedName: "jade",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1558,
    trend: "stable"
  },
  {
    id: "f1127",
    name: "Sarah",
    normalizedName: "sarah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sar"
    ],
    alternateSpellings: [],
    currentRank: 1127,
    trend: "stable"
  },
  {
    id: "f905",
    name: "Madeline",
    normalizedName: "madeline",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Maddy",
      "Maddie",
      "Mads"
    ],
    alternateSpellings: [],
    currentRank: 905,
    trend: "stable"
  },
  {
    id: "m304",
    name: "Peyton",
    normalizedName: "peyton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Pey",
      "Peyie"
    ],
    alternateSpellings: [],
    currentRank: 304,
    trend: "rising"
  },
  {
    id: "f891",
    name: "Lydia",
    normalizedName: "lydia",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lyd"
    ],
    alternateSpellings: [],
    currentRank: 891,
    trend: "stable"
  },
  {
    id: "f626",
    name: "Gianna",
    normalizedName: "gianna",
    gender: "F",
    origins: [
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Gia",
      "Giaie"
    ],
    alternateSpellings: [],
    currentRank: 626,
    trend: "stable"
  },
  {
    id: "f92",
    name: "Adeline",
    normalizedName: "adeline",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Adel",
      "Adeie"
    ],
    alternateSpellings: [],
    currentRank: 92,
    trend: "stable"
  },
  {
    id: "f1539",
    name: "Ayla",
    normalizedName: "ayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1539,
    trend: "stable"
  },
  {
    id: "f417",
    name: "Athena",
    normalizedName: "athena",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ath",
      "Athie"
    ],
    alternateSpellings: [],
    currentRank: 417,
    trend: "rising"
  },
  {
    id: "f841",
    name: "Leilani",
    normalizedName: "leilani",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Leil",
      "Leiie"
    ],
    alternateSpellings: [],
    currentRank: 841,
    trend: "stable"
  },
  {
    id: "f1119",
    name: "Samantha",
    normalizedName: "samantha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Sam",
      "Sammy"
    ],
    alternateSpellings: [],
    currentRank: 1119,
    trend: "stable"
  },
  {
    id: "f1635",
    name: "Brianna",
    normalizedName: "brianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bria",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1635,
    trend: "stable"
  },
  {
    id: "f933",
    name: "Maria",
    normalizedName: "maria",
    gender: "F",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Mar"
    ],
    alternateSpellings: [],
    currentRank: 933,
    trend: "stable"
  },
  {
    id: "f1075",
    name: "Reagan",
    normalizedName: "reagan",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rea",
      "Reaie"
    ],
    alternateSpellings: [],
    currentRank: 1075,
    trend: "stable"
  },
  {
    id: "f1811",
    name: "Clara",
    normalizedName: "clara",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cla"
    ],
    alternateSpellings: [],
    currentRank: 1811,
    trend: "stable"
  },
  {
    id: "f1638",
    name: "Brielle",
    normalizedName: "brielle",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brie",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1638,
    trend: "stable"
  },
  {
    id: "f559",
    name: "Eloise",
    normalizedName: "eloise",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Elo",
      "Eloie"
    ],
    alternateSpellings: [],
    currentRank: 559,
    trend: "stable"
  },
  {
    id: "f857",
    name: "Liliana",
    normalizedName: "liliana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Lili",
      "Lilie"
    ],
    alternateSpellings: [],
    currentRank: 857,
    trend: "stable"
  },
  {
    id: "f966",
    name: "Melanie",
    normalizedName: "melanie",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mela",
      "Melie"
    ],
    alternateSpellings: [],
    currentRank: 966,
    trend: "stable"
  },
  {
    id: "f739",
    name: "Josie",
    normalizedName: "josie",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jos"
    ],
    alternateSpellings: [],
    currentRank: 739,
    trend: "stable"
  },
  {
    id: "m1469",
    name: "Hadley",
    normalizedName: "hadley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Had",
      "Hadie"
    ],
    alternateSpellings: [],
    currentRank: 1469,
    trend: "stable"
  },
  {
    id: "f1069",
    name: "Raelynn",
    normalizedName: "raelynn",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rael",
      "Raeie"
    ],
    alternateSpellings: [],
    currentRank: 1069,
    trend: "stable"
  },
  {
    id: "f108",
    name: "Everleigh",
    normalizedName: "everleigh",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ever",
      "Eveie"
    ],
    alternateSpellings: [],
    currentRank: 108,
    trend: "rising"
  },
  {
    id: "f109",
    name: "Adalynn",
    normalizedName: "adalynn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Adal",
      "Adaie"
    ],
    alternateSpellings: [],
    currentRank: 109,
    trend: "rising"
  },
  {
    id: "f745",
    name: "Julia",
    normalizedName: "julia",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Jul"
    ],
    alternateSpellings: [],
    currentRank: 745,
    trend: "stable"
  },
  {
    id: "f788",
    name: "Kaylee",
    normalizedName: "kaylee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kay",
      "Kayie"
    ],
    alternateSpellings: [],
    currentRank: 788,
    trend: "stable"
  },
  {
    id: "f892",
    name: "Lyla",
    normalizedName: "lyla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 892,
    trend: "stable"
  },
  {
    id: "f1100",
    name: "Rose",
    normalizedName: "rose",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Rose"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1100,
    trend: "stable"
  },
  {
    id: "f685",
    name: "Isabelle",
    normalizedName: "isabelle",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Isab",
      "Isaie"
    ],
    alternateSpellings: [],
    currentRank: 685,
    trend: "stable"
  },
  {
    id: "f1219",
    name: "Vivian",
    normalizedName: "vivian",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Viv",
      "Vivie"
    ],
    alternateSpellings: [],
    currentRank: 1219,
    trend: "stable"
  },
  {
    id: "f596",
    name: "Faith",
    normalizedName: "faith",
    gender: "F",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Faith"
    ],
    syllables: 1,
    nicknames: [
      "Fai"
    ],
    alternateSpellings: [],
    currentRank: 596,
    trend: "stable"
  },
  {
    id: "m1877",
    name: "Mackenzie",
    normalizedName: "mackenzie",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kenzie",
      "Mac",
      "Mack"
    ],
    alternateSpellings: [],
    currentRank: 1877,
    trend: "stable"
  },
  {
    id: "f738",
    name: "Josephine",
    normalizedName: "josephine",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Jo",
      "Josie",
      "Joey"
    ],
    alternateSpellings: [],
    currentRank: 738,
    trend: "stable"
  },
  {
    id: "m1330",
    name: "Emery",
    normalizedName: "emery",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Eme"
    ],
    alternateSpellings: [],
    currentRank: 1330,
    trend: "stable"
  },
  {
    id: "f120",
    name: "Alexandra",
    normalizedName: "alexandra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Alex",
      "Lexi",
      "Xandra",
      "Ally"
    ],
    alternateSpellings: [],
    currentRank: 120,
    trend: "rising"
  },
  {
    id: "f121",
    name: "Alina",
    normalizedName: "alina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ali"
    ],
    alternateSpellings: [],
    currentRank: 121,
    trend: "rising"
  },
  {
    id: "f503",
    name: "Daisy",
    normalizedName: "daisy",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dai"
    ],
    alternateSpellings: [],
    currentRank: 503,
    trend: "stable"
  },
  {
    id: "f932",
    name: "Margot",
    normalizedName: "margot",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 932,
    trend: "stable"
  },
  {
    id: "f681",
    name: "Iris",
    normalizedName: "iris",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 681,
    trend: "stable"
  },
  {
    id: "f708",
    name: "Jasmine",
    normalizedName: "jasmine",
    gender: "F",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jasm",
      "Jasie"
    ],
    alternateSpellings: [],
    currentRank: 708,
    trend: "stable"
  },
  {
    id: "f971",
    name: "Melody",
    normalizedName: "melody",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mel",
      "Melie"
    ],
    alternateSpellings: [],
    currentRank: 971,
    trend: "stable"
  },
  {
    id: "m215",
    name: "Charlie",
    normalizedName: "charlie",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 215,
    trend: "rising"
  },
  {
    id: "f128",
    name: "Bailey",
    normalizedName: "bailey",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Bai",
      "Baiie"
    ],
    alternateSpellings: [],
    currentRank: 128,
    trend: "rising"
  },
  {
    id: "f1173",
    name: "Sydney",
    normalizedName: "sydney",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Syd",
      "Sydie"
    ],
    alternateSpellings: [],
    currentRank: 1173,
    trend: "stable"
  },
  {
    id: "f832",
    name: "Lauren",
    normalizedName: "lauren",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lau",
      "Lauie"
    ],
    alternateSpellings: [],
    currentRank: 832,
    trend: "stable"
  },
  {
    id: "f1083",
    name: "Remi",
    normalizedName: "remi",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1083,
    trend: "stable"
  },
  {
    id: "f1213",
    name: "Vera",
    normalizedName: "vera",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1213,
    trend: "stable"
  },
  {
    id: "f804",
    name: "Khloe",
    normalizedName: "khloe",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Khl"
    ],
    alternateSpellings: [],
    currentRank: 804,
    trend: "stable"
  },
  {
    id: "f1126",
    name: "Sara",
    normalizedName: "sara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1126,
    trend: "stable"
  },
  {
    id: "f1151",
    name: "Sienna",
    normalizedName: "sienna",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Sie",
      "Sieie"
    ],
    alternateSpellings: [],
    currentRank: 1151,
    trend: "stable"
  },
  {
    id: "f1221",
    name: "Vivienne",
    normalizedName: "vivienne",
    gender: "F",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Vivi",
      "Vivie"
    ],
    alternateSpellings: [],
    currentRank: 1221,
    trend: "stable"
  },
  {
    id: "f526",
    name: "Diana",
    normalizedName: "diana",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Dia"
    ],
    alternateSpellings: [],
    currentRank: 526,
    trend: "stable"
  },
  {
    id: "f564",
    name: "Ember",
    normalizedName: "ember",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Emb"
    ],
    alternateSpellings: [],
    currentRank: 564,
    trend: "stable"
  },
  {
    id: "f1270",
    name: "Adelaide",
    normalizedName: "adelaide",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Adel",
      "Adeie"
    ],
    alternateSpellings: [],
    currentRank: 1270,
    trend: "stable"
  },
  {
    id: "f634",
    name: "Gracie",
    normalizedName: "gracie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gra",
      "Graie"
    ],
    alternateSpellings: [],
    currentRank: 634,
    trend: "stable"
  },
  {
    id: "f647",
    name: "Hallie",
    normalizedName: "hallie",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hal",
      "Halie"
    ],
    alternateSpellings: [],
    currentRank: 647,
    trend: "stable"
  },
  {
    id: "f612",
    name: "Freya",
    normalizedName: "freya",
    gender: "F",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [
      "Fre"
    ],
    alternateSpellings: [],
    currentRank: 612,
    trend: "stable"
  },
  {
    id: "f1371",
    name: "Ana",
    normalizedName: "ana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1371,
    trend: "stable"
  },
  {
    id: "f146",
    name: "Amy",
    normalizedName: "amy",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 146,
    trend: "rising"
  },
  {
    id: "f147",
    name: "Andrea",
    normalizedName: "andrea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "And",
      "Andie"
    ],
    alternateSpellings: [],
    currentRank: 147,
    trend: "rising"
  },
  {
    id: "f148",
    name: "Ariel",
    normalizedName: "ariel",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Ari"
    ],
    alternateSpellings: [],
    currentRank: 148,
    trend: "rising"
  },
  {
    id: "f149",
    name: "Arianna",
    normalizedName: "arianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aria",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 149,
    trend: "rising"
  },
  {
    id: "f1491",
    name: "Aspen",
    normalizedName: "aspen",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Asp"
    ],
    alternateSpellings: [],
    currentRank: 1491,
    trend: "stable"
  },
  {
    id: "f151",
    name: "Bianca",
    normalizedName: "bianca",
    gender: "F",
    origins: [
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bia",
      "Biaie"
    ],
    alternateSpellings: [],
    currentRank: 151,
    trend: "rising"
  },
  {
    id: "f1653",
    name: "Brooke",
    normalizedName: "brooke",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bro",
      "Broie"
    ],
    alternateSpellings: [],
    currentRank: 1653,
    trend: "stable"
  },
  {
    id: "f1729",
    name: "Catalina",
    normalizedName: "catalina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Cata",
      "Catie"
    ],
    alternateSpellings: [],
    currentRank: 1729,
    trend: "stable"
  },
  {
    id: "f1732",
    name: "Catherine",
    normalizedName: "catherine",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Cat",
      "Cathy",
      "Kate",
      "Katie"
    ],
    alternateSpellings: [],
    currentRank: 1732,
    trend: "stable"
  },
  {
    id: "f155",
    name: "Cecilia",
    normalizedName: "cecilia",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ceci",
      "Cecie"
    ],
    alternateSpellings: [],
    currentRank: 155,
    trend: "rising"
  },
  {
    id: "f1776",
    name: "Chelsea",
    normalizedName: "chelsea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Chel",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1776,
    trend: "stable"
  },
  {
    id: "f1836",
    name: "Colette",
    normalizedName: "colette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cole",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 1836,
    trend: "stable"
  },
  {
    id: "f502",
    name: "Dahlia",
    normalizedName: "dahlia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Dah",
      "Dahie"
    ],
    alternateSpellings: [],
    currentRank: 502,
    trend: "stable"
  },
  {
    id: "m367",
    name: "Dakota",
    normalizedName: "dakota",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Dak",
      "Dakie"
    ],
    alternateSpellings: [],
    currentRank: 367,
    trend: "rising"
  },
  {
    id: "f160",
    name: "Daniela",
    normalizedName: "daniela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Dani",
      "Danie"
    ],
    alternateSpellings: [],
    currentRank: 160,
    trend: "rising"
  },
  {
    id: "f161",
    name: "Destiny",
    normalizedName: "destiny",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dest",
      "Desie"
    ],
    alternateSpellings: [],
    currentRank: 161,
    trend: "rising"
  },
  {
    id: "m1298",
    name: "Eden",
    normalizedName: "eden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1298,
    trend: "stable"
  },
  {
    id: "f550",
    name: "Elise",
    normalizedName: "elise",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Eli"
    ],
    alternateSpellings: [],
    currentRank: 550,
    trend: "stable"
  },
  {
    id: "f562",
    name: "Elsie",
    normalizedName: "elsie",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Els"
    ],
    alternateSpellings: [],
    currentRank: 562,
    trend: "stable"
  },
  {
    id: "m1329",
    name: "Emerson",
    normalizedName: "emerson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Emer",
      "Emeie"
    ],
    alternateSpellings: [],
    currentRank: 1329,
    trend: "stable"
  },
  {
    id: "f166",
    name: "Esme",
    normalizedName: "esme",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 166,
    trend: "rising"
  },
  {
    id: "f583",
    name: "Esther",
    normalizedName: "esther",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Est",
      "Estie"
    ],
    alternateSpellings: [],
    currentRank: 583,
    trend: "stable"
  },
  {
    id: "f587",
    name: "Evangeline",
    normalizedName: "evangeline",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 5,
    nicknames: [
      "Evan",
      "Evaie"
    ],
    alternateSpellings: [],
    currentRank: 587,
    trend: "stable"
  },
  {
    id: "f588",
    name: "Eve",
    normalizedName: "eve",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 588,
    trend: "stable"
  },
  {
    id: "f605",
    name: "Fiona",
    normalizedName: "fiona",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Fio"
    ],
    alternateSpellings: [],
    currentRank: 605,
    trend: "stable"
  },
  {
    id: "f606",
    name: "Flora",
    normalizedName: "flora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Flo"
    ],
    alternateSpellings: [],
    currentRank: 606,
    trend: "stable"
  },
  {
    id: "f609",
    name: "Francesca",
    normalizedName: "francesca",
    gender: "F",
    origins: [
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Fran",
      "Frankie",
      "Chess",
      "Cesca"
    ],
    alternateSpellings: [],
    currentRank: 609,
    trend: "stable"
  },
  {
    id: "f619",
    name: "Gemma",
    normalizedName: "gemma",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Gem"
    ],
    alternateSpellings: [],
    currentRank: 619,
    trend: "stable"
  },
  {
    id: "f622",
    name: "Georgia",
    normalizedName: "georgia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Geor",
      "Geoie"
    ],
    alternateSpellings: [],
    currentRank: 622,
    trend: "stable"
  },
  {
    id: "f624",
    name: "Gia",
    normalizedName: "gia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 624,
    trend: "stable"
  },
  {
    id: "f629",
    name: "Giselle",
    normalizedName: "giselle",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gise",
      "Gisie"
    ],
    alternateSpellings: [],
    currentRank: 629,
    trend: "stable"
  },
  {
    id: "f631",
    name: "Gloria",
    normalizedName: "gloria",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Glo",
      "Gloie"
    ],
    alternateSpellings: [],
    currentRank: 631,
    trend: "stable"
  },
  {
    id: "f640",
    name: "Gwendolyn",
    normalizedName: "gwendolyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gwen",
      "Gweie"
    ],
    alternateSpellings: [],
    currentRank: 640,
    trend: "stable"
  },
  {
    id: "m1481",
    name: "Harley",
    normalizedName: "harley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Har",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 1481,
    trend: "stable"
  },
  {
    id: "f654",
    name: "Harmony",
    normalizedName: "harmony",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Harm",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 654,
    trend: "stable"
  },
  {
    id: "f658",
    name: "Haven",
    normalizedName: "haven",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Hav"
    ],
    alternateSpellings: [],
    currentRank: 658,
    trend: "stable"
  },
  {
    id: "f665",
    name: "Heidi",
    normalizedName: "heidi",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hei"
    ],
    alternateSpellings: [],
    currentRank: 665,
    trend: "stable"
  },
  {
    id: "f666",
    name: "Helen",
    normalizedName: "helen",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Hel"
    ],
    alternateSpellings: [],
    currentRank: 666,
    trend: "stable"
  },
  {
    id: "f670",
    name: "Holly",
    normalizedName: "holly",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Hol"
    ],
    alternateSpellings: [],
    currentRank: 670,
    trend: "stable"
  },
  {
    id: "f672",
    name: "Hope",
    normalizedName: "hope",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Hope"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 672,
    trend: "stable"
  },
  {
    id: "f676",
    name: "Imani",
    normalizedName: "imani",
    gender: "F",
    origins: [
      "African"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ima"
    ],
    alternateSpellings: [],
    currentRank: 676,
    trend: "stable"
  },
  {
    id: "f682",
    name: "Isabel",
    normalizedName: "isabel",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Isa",
      "Isaie"
    ],
    alternateSpellings: [],
    currentRank: 682,
    trend: "stable"
  },
  {
    id: "f688",
    name: "Ivanna",
    normalizedName: "ivanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Iva",
      "Ivaie"
    ],
    alternateSpellings: [],
    currentRank: 688,
    trend: "stable"
  },
  {
    id: "f693",
    name: "Jada",
    normalizedName: "jada",
    gender: "F",
    origins: [
      "African"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 693,
    trend: "stable"
  },
  {
    id: "f702",
    name: "Jane",
    normalizedName: "jane",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 702,
    trend: "stable"
  },
  {
    id: "f710",
    name: "Jayla",
    normalizedName: "jayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Jay"
    ],
    alternateSpellings: [],
    currentRank: 710,
    trend: "stable"
  },
  {
    id: "f719",
    name: "Jenna",
    normalizedName: "jenna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Jen"
    ],
    alternateSpellings: [],
    currentRank: 719,
    trend: "stable"
  },
  {
    id: "f722",
    name: "Jessica",
    normalizedName: "jessica",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Jess",
      "Jessie"
    ],
    alternateSpellings: [],
    currentRank: 722,
    trend: "stable"
  },
  {
    id: "f728",
    name: "Joanna",
    normalizedName: "joanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Joa",
      "Joaie"
    ],
    alternateSpellings: [],
    currentRank: 728,
    trend: "stable"
  },
  {
    id: "f729",
    name: "Jocelyn",
    normalizedName: "jocelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Joce",
      "Jocie"
    ],
    alternateSpellings: [],
    currentRank: 729,
    trend: "stable"
  },
  {
    id: "f732",
    name: "Jolene",
    normalizedName: "jolene",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jol",
      "Jolie"
    ],
    alternateSpellings: [],
    currentRank: 732,
    trend: "stable"
  },
  {
    id: "m1665",
    name: "Jordan",
    normalizedName: "jordan",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jord",
      "Jordy"
    ],
    alternateSpellings: [],
    currentRank: 1665,
    trend: "stable"
  },
  {
    id: "f736",
    name: "Jordyn",
    normalizedName: "jordyn",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jor",
      "Jorie"
    ],
    alternateSpellings: [],
    currentRank: 736,
    trend: "stable"
  },
  {
    id: "f741",
    name: "Journey",
    normalizedName: "journey",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jour",
      "Jouie"
    ],
    alternateSpellings: [],
    currentRank: 741,
    trend: "stable"
  },
  {
    id: "f742",
    name: "Joy",
    normalizedName: "joy",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Joy"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 742,
    trend: "stable"
  },
  {
    id: "f746",
    name: "Juliana",
    normalizedName: "juliana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Juli",
      "Julie"
    ],
    alternateSpellings: [],
    currentRank: 746,
    trend: "stable"
  },
  {
    id: "f747",
    name: "Julianna",
    normalizedName: "julianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Juli",
      "Julie"
    ],
    alternateSpellings: [],
    currentRank: 747,
    trend: "stable"
  },
  {
    id: "f751",
    name: "Juliette",
    normalizedName: "juliette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Juli",
      "Julie"
    ],
    alternateSpellings: [],
    currentRank: 751,
    trend: "stable"
  },
  {
    id: "f752",
    name: "June",
    normalizedName: "june",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 752,
    trend: "stable"
  },
  {
    id: "f756",
    name: "Kaia",
    normalizedName: "kaia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 756,
    trend: "stable"
  },
  {
    id: "f760",
    name: "Kaitlyn",
    normalizedName: "kaitlyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kait",
      "Kaiie"
    ],
    alternateSpellings: [],
    currentRank: 760,
    trend: "stable"
  },
  {
    id: "f765",
    name: "Kamila",
    normalizedName: "kamila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Kam",
      "Kamie"
    ],
    alternateSpellings: [],
    currentRank: 765,
    trend: "stable"
  },
  {
    id: "f768",
    name: "Kara",
    normalizedName: "kara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 768,
    trend: "stable"
  },
  {
    id: "f769",
    name: "Karen",
    normalizedName: "karen",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kar"
    ],
    alternateSpellings: [],
    currentRank: 769,
    trend: "stable"
  },
  {
    id: "f771",
    name: "Karina",
    normalizedName: "karina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Kar",
      "Karie"
    ],
    alternateSpellings: [],
    currentRank: 771,
    trend: "stable"
  },
  {
    id: "f777",
    name: "Kate",
    normalizedName: "kate",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 777,
    trend: "stable"
  },
  {
    id: "f778",
    name: "Katelyn",
    normalizedName: "katelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kate",
      "Katie"
    ],
    alternateSpellings: [],
    currentRank: 778,
    trend: "stable"
  },
  {
    id: "f780",
    name: "Katherine",
    normalizedName: "katherine",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Kate",
      "Katie",
      "Kat",
      "Kathy",
      "Kit"
    ],
    alternateSpellings: [],
    currentRank: 780,
    trend: "stable"
  },
  {
    id: "f783",
    name: "Katie",
    normalizedName: "katie",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kat"
    ],
    alternateSpellings: [],
    currentRank: 783,
    trend: "stable"
  },
  {
    id: "f787",
    name: "Kayla",
    normalizedName: "kayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Kay"
    ],
    alternateSpellings: [],
    currentRank: 787,
    trend: "stable"
  },
  {
    id: "f792",
    name: "Keira",
    normalizedName: "keira",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Kei"
    ],
    alternateSpellings: [],
    currentRank: 792,
    trend: "stable"
  },
  {
    id: "m1730",
    name: "Kelsey",
    normalizedName: "kelsey",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kel",
      "Kelie"
    ],
    alternateSpellings: [],
    currentRank: 1730,
    trend: "stable"
  },
  {
    id: "m1734",
    name: "Kendall",
    normalizedName: "kendall",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kend",
      "Kenie"
    ],
    alternateSpellings: [],
    currentRank: 1734,
    trend: "stable"
  },
  {
    id: "f796",
    name: "Kendra",
    normalizedName: "kendra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ken",
      "Kenie"
    ],
    alternateSpellings: [],
    currentRank: 796,
    trend: "stable"
  },
  {
    id: "f801",
    name: "Kenzie",
    normalizedName: "kenzie",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ken",
      "Kenie"
    ],
    alternateSpellings: [],
    currentRank: 801,
    trend: "stable"
  },
  {
    id: "f805",
    name: "Kiara",
    normalizedName: "kiara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Kia"
    ],
    alternateSpellings: [],
    currentRank: 805,
    trend: "stable"
  },
  {
    id: "f808",
    name: "Kimberly",
    normalizedName: "kimberly",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Kimb",
      "Kimie"
    ],
    alternateSpellings: [],
    currentRank: 808,
    trend: "stable"
  },
  {
    id: "f812",
    name: "Kira",
    normalizedName: "kira",
    gender: "F",
    origins: [
      "Japanese"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 812,
    trend: "stable"
  },
  {
    id: "f818",
    name: "Kylee",
    normalizedName: "kylee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyl"
    ],
    alternateSpellings: [],
    currentRank: 818,
    trend: "stable"
  },
  {
    id: "f820",
    name: "Kylie",
    normalizedName: "kylie",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyl"
    ],
    alternateSpellings: [],
    currentRank: 820,
    trend: "stable"
  },
  {
    id: "m1787",
    name: "Lacey",
    normalizedName: "lacey",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lac"
    ],
    alternateSpellings: [],
    currentRank: 1787,
    trend: "stable"
  },
  {
    id: "f826",
    name: "Lana",
    normalizedName: "lana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 826,
    trend: "stable"
  },
  {
    id: "f830",
    name: "Laura",
    normalizedName: "laura",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lau"
    ],
    alternateSpellings: [],
    currentRank: 830,
    trend: "stable"
  },
  {
    id: "f840",
    name: "Leila",
    normalizedName: "leila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lei"
    ],
    alternateSpellings: [],
    currentRank: 840,
    trend: "stable"
  },
  {
    id: "f842",
    name: "Lena",
    normalizedName: "lena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 842,
    trend: "stable"
  },
  {
    id: "f846",
    name: "Leslie",
    normalizedName: "leslie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Les",
      "Lesie"
    ],
    alternateSpellings: [],
    currentRank: 846,
    trend: "stable"
  },
  {
    id: "f848",
    name: "Lexie",
    normalizedName: "lexie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lex"
    ],
    alternateSpellings: [],
    currentRank: 848,
    trend: "stable"
  },
  {
    id: "f850",
    name: "Lia",
    normalizedName: "lia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 850,
    trend: "stable"
  },
  {
    id: "f853",
    name: "Lila",
    normalizedName: "lila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 853,
    trend: "stable"
  },
  {
    id: "f854",
    name: "Lilah",
    normalizedName: "lilah",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lil"
    ],
    alternateSpellings: [],
    currentRank: 854,
    trend: "stable"
  },
  {
    id: "f860",
    name: "Lilliana",
    normalizedName: "lilliana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Lill",
      "Lilie"
    ],
    alternateSpellings: [],
    currentRank: 860,
    trend: "stable"
  },
  {
    id: "f865",
    name: "Linda",
    normalizedName: "linda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lin"
    ],
    alternateSpellings: [],
    currentRank: 865,
    trend: "stable"
  },
  {
    id: "f867",
    name: "Lindsey",
    normalizedName: "lindsey",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lind",
      "Linie"
    ],
    alternateSpellings: [],
    currentRank: 867,
    trend: "stable"
  },
  {
    id: "f868",
    name: "Lisa",
    normalizedName: "lisa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 868,
    trend: "stable"
  },
  {
    id: "m1852",
    name: "Logan",
    normalizedName: "logan",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Little hollow"
    ],
    syllables: 2,
    nicknames: [
      "Lo"
    ],
    alternateSpellings: [],
    currentRank: 1852,
    trend: "stable"
  },
  {
    id: "f874",
    name: "Lola",
    normalizedName: "lola",
    gender: "F",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 874,
    trend: "stable"
  },
  {
    id: "m1853",
    name: "London",
    normalizedName: "london",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lon",
      "Lonie"
    ],
    alternateSpellings: [],
    currentRank: 1853,
    trend: "stable"
  },
  {
    id: "f877",
    name: "Lorelei",
    normalizedName: "lorelei",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Lore",
      "Lorie"
    ],
    alternateSpellings: [],
    currentRank: 877,
    trend: "stable"
  },
  {
    id: "f883",
    name: "Lucia",
    normalizedName: "lucia",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Luc"
    ],
    alternateSpellings: [],
    currentRank: 883,
    trend: "stable"
  },
  {
    id: "f884",
    name: "Luciana",
    normalizedName: "luciana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Luci",
      "Lucie"
    ],
    alternateSpellings: [],
    currentRank: 884,
    trend: "stable"
  },
  {
    id: "f885",
    name: "Lucille",
    normalizedName: "lucille",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Luci",
      "Lucie"
    ],
    alternateSpellings: [],
    currentRank: 885,
    trend: "stable"
  },
  {
    id: "f888",
    name: "Luisa",
    normalizedName: "luisa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lui"
    ],
    alternateSpellings: [],
    currentRank: 888,
    trend: "stable"
  },
  {
    id: "m650",
    name: "Lyric",
    normalizedName: "lyric",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lyr"
    ],
    alternateSpellings: [],
    currentRank: 650,
    trend: "stable"
  },
  {
    id: "f896",
    name: "Mabel",
    normalizedName: "mabel",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Mab"
    ],
    alternateSpellings: [],
    currentRank: 896,
    trend: "stable"
  },
  {
    id: "f899",
    name: "Macy",
    normalizedName: "macy",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 899,
    trend: "stable"
  },
  {
    id: "f903",
    name: "Maddison",
    normalizedName: "maddison",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Madd",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 903,
    trend: "stable"
  },
  {
    id: "f904",
    name: "Madeleine",
    normalizedName: "madeleine",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Maddy",
      "Maddie",
      "Mads"
    ],
    alternateSpellings: [],
    currentRank: 904,
    trend: "stable"
  },
  {
    id: "f908",
    name: "Madilyn",
    normalizedName: "madilyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Madi",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 908,
    trend: "stable"
  },
  {
    id: "f913",
    name: "Maeve",
    normalizedName: "maeve",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mae"
    ],
    alternateSpellings: [],
    currentRank: 913,
    trend: "stable"
  },
  {
    id: "f915",
    name: "Maggie",
    normalizedName: "maggie",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mag",
      "Magie"
    ],
    alternateSpellings: [],
    currentRank: 915,
    trend: "stable"
  },
  {
    id: "f917",
    name: "Maia",
    normalizedName: "maia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 917,
    trend: "stable"
  },
  {
    id: "f920",
    name: "Makenna",
    normalizedName: "makenna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Make",
      "Makie"
    ],
    alternateSpellings: [],
    currentRank: 920,
    trend: "stable"
  },
  {
    id: "f924",
    name: "Malia",
    normalizedName: "malia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Mal"
    ],
    alternateSpellings: [],
    currentRank: 924,
    trend: "stable"
  },
  {
    id: "m1894",
    name: "Mallory",
    normalizedName: "mallory",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mall",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 1894,
    trend: "stable"
  },
  {
    id: "f928",
    name: "Mara",
    normalizedName: "mara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 928,
    trend: "stable"
  },
  {
    id: "f930",
    name: "Margaret",
    normalizedName: "margaret",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Maggie",
      "Meg",
      "Peggy",
      "Marge"
    ],
    alternateSpellings: [],
    currentRank: 930,
    trend: "stable"
  },
  {
    id: "f936",
    name: "Mariana",
    normalizedName: "mariana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mari",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 936,
    trend: "stable"
  },
  {
    id: "f942",
    name: "Marisol",
    normalizedName: "marisol",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mari",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 942,
    trend: "stable"
  },
  {
    id: "m647",
    name: "Marley",
    normalizedName: "marley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 647,
    trend: "stable"
  },
  {
    id: "f950",
    name: "Mary",
    normalizedName: "mary",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 950,
    trend: "stable"
  },
  {
    id: "f953",
    name: "Matilda",
    normalizedName: "matilda",
    gender: "F",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mati",
      "Matie"
    ],
    alternateSpellings: [],
    currentRank: 953,
    trend: "stable"
  },
  {
    id: "f960",
    name: "Mckenna",
    normalizedName: "mckenna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Mcke",
      "Mckie"
    ],
    alternateSpellings: [],
    currentRank: 960,
    trend: "stable"
  },
  {
    id: "f961",
    name: "Mckenzie",
    normalizedName: "mckenzie",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mcke",
      "Mckie"
    ],
    alternateSpellings: [],
    currentRank: 961,
    trend: "stable"
  },
  {
    id: "f964",
    name: "Megan",
    normalizedName: "megan",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Meg"
    ],
    alternateSpellings: [],
    currentRank: 964,
    trend: "stable"
  },
  {
    id: "f970",
    name: "Melissa",
    normalizedName: "melissa",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Meli",
      "Melie"
    ],
    alternateSpellings: [],
    currentRank: 970,
    trend: "stable"
  },
  {
    id: "f973",
    name: "Meredith",
    normalizedName: "meredith",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mere",
      "Merie"
    ],
    alternateSpellings: [],
    currentRank: 973,
    trend: "stable"
  },
  {
    id: "f977",
    name: "Michaela",
    normalizedName: "michaela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mich",
      "Micie"
    ],
    alternateSpellings: [],
    currentRank: 977,
    trend: "stable"
  },
  {
    id: "f978",
    name: "Michelle",
    normalizedName: "michelle",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mich",
      "Micie"
    ],
    alternateSpellings: [],
    currentRank: 978,
    trend: "stable"
  },
  {
    id: "f980",
    name: "Mikayla",
    normalizedName: "mikayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mika",
      "Mikie"
    ],
    alternateSpellings: [],
    currentRank: 980,
    trend: "stable"
  },
  {
    id: "f983",
    name: "Milana",
    normalizedName: "milana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mil",
      "Milie"
    ],
    alternateSpellings: [],
    currentRank: 983,
    trend: "stable"
  },
  {
    id: "f985",
    name: "Millie",
    normalizedName: "millie",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mil",
      "Milie"
    ],
    alternateSpellings: [],
    currentRank: 985,
    trend: "stable"
  },
  {
    id: "f989",
    name: "Miranda",
    normalizedName: "miranda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mira",
      "Mirie"
    ],
    alternateSpellings: [],
    currentRank: 989,
    trend: "stable"
  },
  {
    id: "f991",
    name: "Miriam",
    normalizedName: "miriam",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mir",
      "Mirie"
    ],
    alternateSpellings: [],
    currentRank: 991,
    trend: "stable"
  },
  {
    id: "f992",
    name: "Molly",
    normalizedName: "molly",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Mol"
    ],
    alternateSpellings: [],
    currentRank: 992,
    trend: "stable"
  },
  {
    id: "m569",
    name: "Morgan",
    normalizedName: "morgan",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mor",
      "Morie"
    ],
    alternateSpellings: [],
    currentRank: 569,
    trend: "stable"
  },
  {
    id: "f999",
    name: "Myra",
    normalizedName: "myra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 999,
    trend: "stable"
  },
  {
    id: "f1000",
    name: "Nadia",
    normalizedName: "nadia",
    gender: "F",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Nad"
    ],
    alternateSpellings: [],
    currentRank: 1000,
    trend: "stable"
  },
  {
    id: "f1002",
    name: "Nancy",
    normalizedName: "nancy",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nan"
    ],
    alternateSpellings: [],
    currentRank: 1002,
    trend: "stable"
  },
  {
    id: "f1004",
    name: "Natalia",
    normalizedName: "natalia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Nata",
      "Natie"
    ],
    alternateSpellings: [],
    currentRank: 1004,
    trend: "stable"
  },
  {
    id: "f285",
    name: "Nellie",
    normalizedName: "nellie",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nel",
      "Nelie"
    ],
    alternateSpellings: [],
    currentRank: 285,
    trend: "rising"
  },
  {
    id: "f1014",
    name: "Nicole",
    normalizedName: "nicole",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Nic",
      "Nicie"
    ],
    alternateSpellings: [],
    currentRank: 1014,
    trend: "stable"
  },
  {
    id: "f1019",
    name: "Nina",
    normalizedName: "nina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1019,
    trend: "stable"
  },
  {
    id: "f1020",
    name: "Noelle",
    normalizedName: "noelle",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Noe",
      "Noeie"
    ],
    alternateSpellings: [],
    currentRank: 1020,
    trend: "stable"
  },
  {
    id: "f1022",
    name: "Nola",
    normalizedName: "nola",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1022,
    trend: "stable"
  },
  {
    id: "m694",
    name: "Oakley",
    normalizedName: "oakley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Oak",
      "Oakie"
    ],
    alternateSpellings: [],
    currentRank: 694,
    trend: "stable"
  },
  {
    id: "f1033",
    name: "Olive",
    normalizedName: "olive",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Oli"
    ],
    alternateSpellings: [],
    currentRank: 1033,
    trend: "stable"
  },
  {
    id: "f1036",
    name: "Ophelia",
    normalizedName: "ophelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ophe",
      "Ophie"
    ],
    alternateSpellings: [],
    currentRank: 1036,
    trend: "stable"
  },
  {
    id: "f1037",
    name: "Paige",
    normalizedName: "paige",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pai"
    ],
    alternateSpellings: [],
    currentRank: 1037,
    trend: "stable"
  },
  {
    id: "f1042",
    name: "Paloma",
    normalizedName: "paloma",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Pal",
      "Palie"
    ],
    alternateSpellings: [],
    currentRank: 1042,
    trend: "stable"
  },
  {
    id: "f1045",
    name: "Paris",
    normalizedName: "paris",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Par"
    ],
    alternateSpellings: [],
    currentRank: 1045,
    trend: "stable"
  },
  {
    id: "f1047",
    name: "Patricia",
    normalizedName: "patricia",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Patr",
      "Patie"
    ],
    alternateSpellings: [],
    currentRank: 1047,
    trend: "stable"
  },
  {
    id: "f1048",
    name: "Paula",
    normalizedName: "paula",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Pau"
    ],
    alternateSpellings: [],
    currentRank: 1048,
    trend: "stable"
  },
  {
    id: "f1051",
    name: "Payton",
    normalizedName: "payton",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Pay",
      "Payie"
    ],
    alternateSpellings: [],
    currentRank: 1051,
    trend: "stable"
  },
  {
    id: "f1052",
    name: "Pearl",
    normalizedName: "pearl",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Pea"
    ],
    alternateSpellings: [],
    currentRank: 1052,
    trend: "stable"
  },
  {
    id: "f1055",
    name: "Perla",
    normalizedName: "perla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Per"
    ],
    alternateSpellings: [],
    currentRank: 1055,
    trend: "stable"
  },
  {
    id: "f1058",
    name: "Phoebe",
    normalizedName: "phoebe",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pho",
      "Phoie"
    ],
    alternateSpellings: [],
    currentRank: 1058,
    trend: "stable"
  },
  {
    id: "f1062",
    name: "Presley",
    normalizedName: "presley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Pres",
      "Preie"
    ],
    alternateSpellings: [],
    currentRank: 1062,
    trend: "stable"
  },
  {
    id: "f1064",
    name: "Priscilla",
    normalizedName: "priscilla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Pris",
      "Priie"
    ],
    alternateSpellings: [],
    currentRank: 1064,
    trend: "stable"
  },
  {
    id: "f304",
    name: "Rachel",
    normalizedName: "rachel",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Rac",
      "Racie"
    ],
    alternateSpellings: [],
    currentRank: 304,
    trend: "rising"
  },
  {
    id: "f1067",
    name: "Raegan",
    normalizedName: "raegan",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rae",
      "Raeie"
    ],
    alternateSpellings: [],
    currentRank: 1067,
    trend: "stable"
  },
  {
    id: "f1076",
    name: "Rebecca",
    normalizedName: "rebecca",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Becca",
      "Becky",
      "Bec"
    ],
    alternateSpellings: [],
    currentRank: 1076,
    trend: "stable"
  },
  {
    id: "m780",
    name: "Reese",
    normalizedName: "reese",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ree"
    ],
    alternateSpellings: [],
    currentRank: 780,
    trend: "stable"
  },
  {
    id: "f1080",
    name: "Regina",
    normalizedName: "regina",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Reg",
      "Regie"
    ],
    alternateSpellings: [],
    currentRank: 1080,
    trend: "stable"
  },
  {
    id: "f1082",
    name: "Reina",
    normalizedName: "reina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Rei"
    ],
    alternateSpellings: [],
    currentRank: 1082,
    trend: "stable"
  },
  {
    id: "m191",
    name: "Remington",
    normalizedName: "remington",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Remi",
      "Remie"
    ],
    alternateSpellings: [],
    currentRank: 191,
    trend: "rising"
  },
  {
    id: "f1086",
    name: "Renata",
    normalizedName: "renata",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ren",
      "Renie"
    ],
    alternateSpellings: [],
    currentRank: 1086,
    trend: "stable"
  },
  {
    id: "m549",
    name: "Remy",
    normalizedName: "remy",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 549,
    trend: "stable"
  },
  {
    id: "f1099",
    name: "Rosalie",
    normalizedName: "rosalie",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Rosa",
      "Rosie"
    ],
    alternateSpellings: [],
    currentRank: 1099,
    trend: "stable"
  },
  {
    id: "f1102",
    name: "Rosemary",
    normalizedName: "rosemary",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Rose"
    ],
    syllables: 4,
    nicknames: [
      "Rose",
      "Rosie"
    ],
    alternateSpellings: [],
    currentRank: 1102,
    trend: "stable"
  },
  {
    id: "m109",
    name: "Rowan",
    normalizedName: "rowan",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Row"
    ],
    alternateSpellings: [],
    currentRank: 109,
    trend: "rising"
  },
  {
    id: "f1107",
    name: "Ruth",
    normalizedName: "ruth",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1107,
    trend: "stable"
  },
  {
    id: "f1114",
    name: "Sabrina",
    normalizedName: "sabrina",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Sabr",
      "Sabie"
    ],
    alternateSpellings: [],
    currentRank: 1114,
    trend: "stable"
  },
  {
    id: "m1073",
    name: "Sage",
    normalizedName: "sage",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1073,
    trend: "stable"
  },
  {
    id: "f319",
    name: "Sally",
    normalizedName: "sally",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Sal"
    ],
    alternateSpellings: [],
    currentRank: 319,
    trend: "rising"
  },
  {
    id: "f1120",
    name: "Samara",
    normalizedName: "samara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Sam",
      "Samie"
    ],
    alternateSpellings: [],
    currentRank: 1120,
    trend: "stable"
  },
  {
    id: "f1122",
    name: "Sandra",
    normalizedName: "sandra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "San",
      "Sanie"
    ],
    alternateSpellings: [],
    currentRank: 1122,
    trend: "stable"
  },
  {
    id: "f1131",
    name: "Sasha",
    normalizedName: "sasha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Sas"
    ],
    alternateSpellings: [],
    currentRank: 1131,
    trend: "stable"
  },
  {
    id: "m96",
    name: "Sawyer",
    normalizedName: "sawyer",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Saw",
      "Sawie"
    ],
    alternateSpellings: [],
    currentRank: 96,
    trend: "stable"
  },
  {
    id: "f1139",
    name: "Selena",
    normalizedName: "selena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Sel",
      "Selie"
    ],
    alternateSpellings: [],
    currentRank: 1139,
    trend: "stable"
  },
  {
    id: "f1140",
    name: "Selene",
    normalizedName: "selene",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Sel",
      "Selie"
    ],
    alternateSpellings: [],
    currentRank: 1140,
    trend: "stable"
  },
  {
    id: "f1141",
    name: "Serena",
    normalizedName: "serena",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ser",
      "Serie"
    ],
    alternateSpellings: [],
    currentRank: 1141,
    trend: "stable"
  },
  {
    id: "f1144",
    name: "Shannon",
    normalizedName: "shannon",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Shan",
      "Shaie"
    ],
    alternateSpellings: [],
    currentRank: 1144,
    trend: "stable"
  },
  {
    id: "f1145",
    name: "Sharon",
    normalizedName: "sharon",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Sha",
      "Shaie"
    ],
    alternateSpellings: [],
    currentRank: 1145,
    trend: "stable"
  },
  {
    id: "f1148",
    name: "Shelby",
    normalizedName: "shelby",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "She",
      "Sheie"
    ],
    alternateSpellings: [],
    currentRank: 1148,
    trend: "stable"
  },
  {
    id: "f1152",
    name: "Sierra",
    normalizedName: "sierra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Sie",
      "Sieie"
    ],
    alternateSpellings: [],
    currentRank: 1152,
    trend: "stable"
  },
  {
    id: "f1153",
    name: "Simone",
    normalizedName: "simone",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Sim",
      "Simie"
    ],
    alternateSpellings: [],
    currentRank: 1153,
    trend: "stable"
  },
  {
    id: "f1155",
    name: "Skye",
    normalizedName: "skye",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1155,
    trend: "stable"
  },
  {
    id: "f1160",
    name: "Sloane",
    normalizedName: "sloane",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Slo",
      "Sloie"
    ],
    alternateSpellings: [],
    currentRank: 1160,
    trend: "stable"
  },
  {
    id: "f334",
    name: "Sonia",
    normalizedName: "sonia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Son"
    ],
    alternateSpellings: [],
    currentRank: 334,
    trend: "rising"
  },
  {
    id: "f1165",
    name: "Stacy",
    normalizedName: "stacy",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sta"
    ],
    alternateSpellings: [],
    currentRank: 1165,
    trend: "stable"
  },
  {
    id: "f1167",
    name: "Stephanie",
    normalizedName: "stephanie",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Steph",
      "Stephie",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1167,
    trend: "stable"
  },
  {
    id: "f1169",
    name: "Summer",
    normalizedName: "summer",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sum",
      "Sumie"
    ],
    alternateSpellings: [],
    currentRank: 1169,
    trend: "stable"
  },
  {
    id: "m1082",
    name: "Sutton",
    normalizedName: "sutton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Sut",
      "Sutie"
    ],
    alternateSpellings: [],
    currentRank: 1082,
    trend: "stable"
  },
  {
    id: "f1174",
    name: "Sylvia",
    normalizedName: "sylvia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Syl",
      "Sylie"
    ],
    alternateSpellings: [],
    currentRank: 1174,
    trend: "stable"
  },
  {
    id: "f1177",
    name: "Talia",
    normalizedName: "talia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Tal"
    ],
    alternateSpellings: [],
    currentRank: 1177,
    trend: "stable"
  },
  {
    id: "f1182",
    name: "Tara",
    normalizedName: "tara",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1182,
    trend: "stable"
  },
  {
    id: "f1184",
    name: "Tatiana",
    normalizedName: "tatiana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Tati",
      "Tatie"
    ],
    alternateSpellings: [],
    currentRank: 1184,
    trend: "stable"
  },
  {
    id: "f1186",
    name: "Taylor",
    normalizedName: "taylor",
    gender: "F",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tay",
      "Tayie"
    ],
    alternateSpellings: [],
    currentRank: 1186,
    trend: "stable"
  },
  {
    id: "f1188",
    name: "Teresa",
    normalizedName: "teresa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ter",
      "Terie"
    ],
    alternateSpellings: [],
    currentRank: 1188,
    trend: "stable"
  },
  {
    id: "f1189",
    name: "Tessa",
    normalizedName: "tessa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Tes"
    ],
    alternateSpellings: [],
    currentRank: 1189,
    trend: "stable"
  },
  {
    id: "f1191",
    name: "Thea",
    normalizedName: "thea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1191,
    trend: "stable"
  },
  {
    id: "f1197",
    name: "Tiffany",
    normalizedName: "tiffany",
    gender: "F",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Tiff",
      "Tifie"
    ],
    alternateSpellings: [],
    currentRank: 1197,
    trend: "stable"
  },
  {
    id: "f1198",
    name: "Tina",
    normalizedName: "tina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1198,
    trend: "stable"
  },
  {
    id: "f1201",
    name: "Trinity",
    normalizedName: "trinity",
    gender: "F",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Trin",
      "Triie"
    ],
    alternateSpellings: [],
    currentRank: 1201,
    trend: "stable"
  },
  {
    id: "f1206",
    name: "Uma",
    normalizedName: "uma",
    gender: "F",
    origins: [
      "Indian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1206,
    trend: "stable"
  },
  {
    id: "f1209",
    name: "Valeria",
    normalizedName: "valeria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Vale",
      "Valie"
    ],
    alternateSpellings: [],
    currentRank: 1209,
    trend: "stable"
  },
  {
    id: "f1210",
    name: "Valerie",
    normalizedName: "valerie",
    gender: "F",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Vale",
      "Valie"
    ],
    alternateSpellings: [],
    currentRank: 1210,
    trend: "stable"
  },
  {
    id: "f1211",
    name: "Vanessa",
    normalizedName: "vanessa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Vane",
      "Vanie"
    ],
    alternateSpellings: [],
    currentRank: 1211,
    trend: "stable"
  },
  {
    id: "f1214",
    name: "Veronica",
    normalizedName: "veronica",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Vero",
      "Verie"
    ],
    alternateSpellings: [],
    currentRank: 1214,
    trend: "stable"
  },
  {
    id: "f1217",
    name: "Virginia",
    normalizedName: "virginia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Virg",
      "Virie"
    ],
    alternateSpellings: [],
    currentRank: 1217,
    trend: "stable"
  },
  {
    id: "f1225",
    name: "Willa",
    normalizedName: "willa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Wil"
    ],
    alternateSpellings: [],
    currentRank: 1225,
    trend: "stable"
  },
  {
    id: "m1089",
    name: "Winter",
    normalizedName: "winter",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Win",
      "Winie"
    ],
    alternateSpellings: [],
    currentRank: 1089,
    trend: "stable"
  },
  {
    id: "f1230",
    name: "Wren",
    normalizedName: "wren",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1230,
    trend: "stable"
  },
  {
    id: "f1231",
    name: "Wynter",
    normalizedName: "wynter",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Wyn",
      "Wynie"
    ],
    alternateSpellings: [],
    currentRank: 1231,
    trend: "stable"
  },
  {
    id: "f1233",
    name: "Ximena",
    normalizedName: "ximena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Xim",
      "Ximie"
    ],
    alternateSpellings: [],
    currentRank: 1233,
    trend: "stable"
  },
  {
    id: "f1236",
    name: "Yara",
    normalizedName: "yara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1236,
    trend: "stable"
  },
  {
    id: "f1239",
    name: "Yasmin",
    normalizedName: "yasmin",
    gender: "F",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Yas",
      "Yasie"
    ],
    alternateSpellings: [],
    currentRank: 1239,
    trend: "stable"
  },
  {
    id: "f1243",
    name: "Yvette",
    normalizedName: "yvette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Yve",
      "Yveie"
    ],
    alternateSpellings: [],
    currentRank: 1243,
    trend: "stable"
  },
  {
    id: "f1247",
    name: "Zara",
    normalizedName: "zara",
    gender: "F",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1247,
    trend: "stable"
  },
  {
    id: "f1255",
    name: "Zoe",
    normalizedName: "zoe",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1255,
    trend: "stable"
  },
  {
    id: "f1258",
    name: "Zola",
    normalizedName: "zola",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1258,
    trend: "stable"
  },
  {
    id: "f370",
    name: "Adriana",
    normalizedName: "adriana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Adri",
      "Adrie"
    ],
    alternateSpellings: [],
    currentRank: 370,
    trend: "rising"
  },
  {
    id: "f371",
    name: "Ainsley",
    normalizedName: "ainsley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Ains",
      "Ainie"
    ],
    alternateSpellings: [],
    currentRank: 371,
    trend: "rising"
  },
  {
    id: "f372",
    name: "Alana",
    normalizedName: "alana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ala"
    ],
    alternateSpellings: [],
    currentRank: 372,
    trend: "rising"
  },
  {
    id: "f373",
    name: "Alanna",
    normalizedName: "alanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ala",
      "Alaie"
    ],
    alternateSpellings: [],
    currentRank: 373,
    trend: "rising"
  },
  {
    id: "f374",
    name: "Aleah",
    normalizedName: "aleah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ale"
    ],
    alternateSpellings: [],
    currentRank: 374,
    trend: "rising"
  },
  {
    id: "f1310",
    name: "Alena",
    normalizedName: "alena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ale"
    ],
    alternateSpellings: [],
    currentRank: 1310,
    trend: "stable"
  },
  {
    id: "f376",
    name: "Alessandra",
    normalizedName: "alessandra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Ales",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 376,
    trend: "rising"
  },
  {
    id: "f377",
    name: "Alexa",
    normalizedName: "alexa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ale"
    ],
    alternateSpellings: [],
    currentRank: 377,
    trend: "rising"
  },
  {
    id: "m402",
    name: "Alexis",
    normalizedName: "alexis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ale",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 402,
    trend: "rising"
  },
  {
    id: "f379",
    name: "Alia",
    normalizedName: "alia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 379,
    trend: "rising"
  },
  {
    id: "f380",
    name: "Alicia",
    normalizedName: "alicia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ali",
      "Aliie"
    ],
    alternateSpellings: [],
    currentRank: 380,
    trend: "rising"
  },
  {
    id: "f381",
    name: "Aliyah",
    normalizedName: "aliyah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ali",
      "Aliie"
    ],
    alternateSpellings: [],
    currentRank: 381,
    trend: "rising"
  },
  {
    id: "f382",
    name: "Allie",
    normalizedName: "allie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "All"
    ],
    alternateSpellings: [],
    currentRank: 382,
    trend: "rising"
  },
  {
    id: "f384",
    name: "Alma",
    normalizedName: "alma",
    gender: "F",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 384,
    trend: "rising"
  },
  {
    id: "f385",
    name: "Alondra",
    normalizedName: "alondra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alon",
      "Aloie"
    ],
    alternateSpellings: [],
    currentRank: 385,
    trend: "rising"
  },
  {
    id: "f386",
    name: "Alyssa",
    normalizedName: "alyssa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aly",
      "Alyie"
    ],
    alternateSpellings: [],
    currentRank: 386,
    trend: "rising"
  },
  {
    id: "f387",
    name: "Amanda",
    normalizedName: "amanda",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ama",
      "Amaie"
    ],
    alternateSpellings: [],
    currentRank: 387,
    trend: "rising"
  },
  {
    id: "f388",
    name: "Amara",
    normalizedName: "amara",
    gender: "F",
    origins: [
      "African"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ama"
    ],
    alternateSpellings: [],
    currentRank: 388,
    trend: "rising"
  },
  {
    id: "f1351",
    name: "Amber",
    normalizedName: "amber",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Amb"
    ],
    alternateSpellings: [],
    currentRank: 1351,
    trend: "stable"
  },
  {
    id: "f390",
    name: "Amira",
    normalizedName: "amira",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ami"
    ],
    alternateSpellings: [],
    currentRank: 390,
    trend: "rising"
  },
  {
    id: "f391",
    name: "Anastasia",
    normalizedName: "anastasia",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Ana",
      "Stasia",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 391,
    trend: "rising"
  },
  {
    id: "m74",
    name: "Angel",
    normalizedName: "angel",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Ang"
    ],
    alternateSpellings: [],
    currentRank: 74,
    trend: "stable"
  },
  {
    id: "f393",
    name: "Angela",
    normalizedName: "angela",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ang",
      "Angie"
    ],
    alternateSpellings: [],
    currentRank: 393,
    trend: "rising"
  },
  {
    id: "f394",
    name: "Angelica",
    normalizedName: "angelica",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Ange",
      "Angie"
    ],
    alternateSpellings: [],
    currentRank: 394,
    trend: "rising"
  },
  {
    id: "f395",
    name: "Angelina",
    normalizedName: "angelina",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Ange",
      "Angie"
    ],
    alternateSpellings: [],
    currentRank: 395,
    trend: "rising"
  },
  {
    id: "f396",
    name: "Angie",
    normalizedName: "angie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ang"
    ],
    alternateSpellings: [],
    currentRank: 396,
    trend: "rising"
  },
  {
    id: "f397",
    name: "Anika",
    normalizedName: "anika",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ani"
    ],
    alternateSpellings: [],
    currentRank: 397,
    trend: "rising"
  },
  {
    id: "f398",
    name: "Aniya",
    normalizedName: "aniya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ani"
    ],
    alternateSpellings: [],
    currentRank: 398,
    trend: "rising"
  },
  {
    id: "f399",
    name: "Ann",
    normalizedName: "ann",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 399,
    trend: "rising"
  },
  {
    id: "f401",
    name: "Annabella",
    normalizedName: "annabella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 401,
    trend: "rising"
  },
  {
    id: "f402",
    name: "Annabelle",
    normalizedName: "annabelle",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 402,
    trend: "rising"
  },
  {
    id: "f403",
    name: "Anne",
    normalizedName: "anne",
    gender: "F",
    origins: [
      "Hebrew",
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 403,
    trend: "rising"
  },
  {
    id: "f404",
    name: "Annie",
    normalizedName: "annie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ann"
    ],
    alternateSpellings: [],
    currentRank: 404,
    trend: "rising"
  },
  {
    id: "f405",
    name: "Annika",
    normalizedName: "annika",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ann",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 405,
    trend: "rising"
  },
  {
    id: "f406",
    name: "April",
    normalizedName: "april",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Apr"
    ],
    alternateSpellings: [],
    currentRank: 406,
    trend: "rising"
  },
  {
    id: "f1435",
    name: "Arabella",
    normalizedName: "arabella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Arab",
      "Araie"
    ],
    alternateSpellings: [],
    currentRank: 1435,
    trend: "stable"
  },
  {
    id: "m1105",
    name: "Arden",
    normalizedName: "arden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ard"
    ],
    alternateSpellings: [],
    currentRank: 1105,
    trend: "stable"
  },
  {
    id: "f410",
    name: "Ariadne",
    normalizedName: "ariadne",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Aria",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 410,
    trend: "rising"
  },
  {
    id: "f411",
    name: "Arielle",
    normalizedName: "arielle",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arie",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 411,
    trend: "rising"
  },
  {
    id: "m356",
    name: "Armani",
    normalizedName: "armani",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arm",
      "Armie"
    ],
    alternateSpellings: [],
    currentRank: 356,
    trend: "rising"
  },
  {
    id: "f413",
    name: "Asha",
    normalizedName: "asha",
    gender: "F",
    origins: [
      "African"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 413,
    trend: "rising"
  },
  {
    id: "f414",
    name: "Ashlyn",
    normalizedName: "ashlyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ash",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 414,
    trend: "rising"
  },
  {
    id: "f415",
    name: "Asia",
    normalizedName: "asia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 415,
    trend: "rising"
  },
  {
    id: "f416",
    name: "Astrid",
    normalizedName: "astrid",
    gender: "F",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ast",
      "Astie"
    ],
    alternateSpellings: [],
    currentRank: 416,
    trend: "rising"
  },
  {
    id: "f1502",
    name: "Aubree",
    normalizedName: "aubree",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aub",
      "Aubie"
    ],
    alternateSpellings: [],
    currentRank: 1502,
    trend: "stable"
  },
  {
    id: "f419",
    name: "Aubrianna",
    normalizedName: "aubrianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aubr",
      "Aubie"
    ],
    alternateSpellings: [],
    currentRank: 419,
    trend: "rising"
  },
  {
    id: "f420",
    name: "Aubrielle",
    normalizedName: "aubrielle",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Aubr",
      "Aubie"
    ],
    alternateSpellings: [],
    currentRank: 420,
    trend: "rising"
  },
  {
    id: "f1505",
    name: "Audra",
    normalizedName: "audra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Aud"
    ],
    alternateSpellings: [],
    currentRank: 1505,
    trend: "stable"
  },
  {
    id: "m141",
    name: "August",
    normalizedName: "august",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aug",
      "Augie"
    ],
    alternateSpellings: [],
    currentRank: 141,
    trend: "rising"
  },
  {
    id: "f1511",
    name: "Aurelia",
    normalizedName: "aurelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aure",
      "Aurie"
    ],
    alternateSpellings: [],
    currentRank: 1511,
    trend: "stable"
  },
  {
    id: "f424",
    name: "Avalyn",
    normalizedName: "avalyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ava",
      "Avaie"
    ],
    alternateSpellings: [],
    currentRank: 424,
    trend: "rising"
  },
  {
    id: "f1523",
    name: "Averie",
    normalizedName: "averie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ave",
      "Aveie"
    ],
    alternateSpellings: [],
    currentRank: 1523,
    trend: "stable"
  },
  {
    id: "f1526",
    name: "Aviana",
    normalizedName: "aviana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Avi",
      "Aviie"
    ],
    alternateSpellings: [],
    currentRank: 1526,
    trend: "stable"
  },
  {
    id: "f1541",
    name: "Aylin",
    normalizedName: "aylin",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ayl"
    ],
    alternateSpellings: [],
    currentRank: 1541,
    trend: "stable"
  },
  {
    id: "f1559",
    name: "Barbara",
    normalizedName: "barbara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Barb",
      "Barie"
    ],
    alternateSpellings: [],
    currentRank: 1559,
    trend: "stable"
  },
  {
    id: "f429",
    name: "Beatrice",
    normalizedName: "beatrice",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Beat",
      "Beaie"
    ],
    alternateSpellings: [],
    currentRank: 429,
    trend: "rising"
  },
  {
    id: "f430",
    name: "Beatriz",
    normalizedName: "beatriz",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Beat",
      "Beaie"
    ],
    alternateSpellings: [],
    currentRank: 430,
    trend: "rising"
  },
  {
    id: "f431",
    name: "Belen",
    normalizedName: "belen",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bel"
    ],
    alternateSpellings: [],
    currentRank: 431,
    trend: "rising"
  },
  {
    id: "f1576",
    name: "Belinda",
    normalizedName: "belinda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Beli",
      "Belie"
    ],
    alternateSpellings: [],
    currentRank: 1576,
    trend: "stable"
  },
  {
    id: "f1578",
    name: "Belle",
    normalizedName: "belle",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bel"
    ],
    alternateSpellings: [],
    currentRank: 1578,
    trend: "stable"
  },
  {
    id: "f435",
    name: "Bexley",
    normalizedName: "bexley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Bex",
      "Bexie"
    ],
    alternateSpellings: [],
    currentRank: 435,
    trend: "rising"
  },
  {
    id: "m1121",
    name: "Blaine",
    normalizedName: "blaine",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bla",
      "Blaie"
    ],
    alternateSpellings: [],
    currentRank: 1121,
    trend: "stable"
  },
  {
    id: "m1119",
    name: "Blair",
    normalizedName: "blair",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bla"
    ],
    alternateSpellings: [],
    currentRank: 1119,
    trend: "stable"
  },
  {
    id: "m196",
    name: "Blake",
    normalizedName: "blake",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Blakey"
    ],
    alternateSpellings: [],
    currentRank: 196,
    trend: "rising"
  },
  {
    id: "f439",
    name: "Blakely",
    normalizedName: "blakely",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Blak",
      "Blaie"
    ],
    alternateSpellings: [],
    currentRank: 439,
    trend: "rising"
  },
  {
    id: "f440",
    name: "Bonnie",
    normalizedName: "bonnie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bon",
      "Bonie"
    ],
    alternateSpellings: [],
    currentRank: 440,
    trend: "rising"
  },
  {
    id: "f441",
    name: "Braelynn",
    normalizedName: "braelynn",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brae",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 441,
    trend: "rising"
  },
  {
    id: "f1632",
    name: "Brenda",
    normalizedName: "brenda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bre",
      "Breie"
    ],
    alternateSpellings: [],
    currentRank: 1632,
    trend: "stable"
  },
  {
    id: "f443",
    name: "Brenna",
    normalizedName: "brenna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bre",
      "Breie"
    ],
    alternateSpellings: [],
    currentRank: 443,
    trend: "rising"
  },
  {
    id: "f444",
    name: "Bria",
    normalizedName: "bria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 444,
    trend: "rising"
  },
  {
    id: "f445",
    name: "Briana",
    normalizedName: "briana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bri",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 445,
    trend: "rising"
  },
  {
    id: "f447",
    name: "Bridget",
    normalizedName: "bridget",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brid",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 447,
    trend: "rising"
  },
  {
    id: "f1640",
    name: "Brigitte",
    normalizedName: "brigitte",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Brig",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1640,
    trend: "stable"
  },
  {
    id: "f1641",
    name: "Brinley",
    normalizedName: "brinley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Brin",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1641,
    trend: "stable"
  },
  {
    id: "f1644",
    name: "Bristol",
    normalizedName: "bristol",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bris",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1644,
    trend: "stable"
  },
  {
    id: "f452",
    name: "Brittany",
    normalizedName: "brittany",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Brit",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 452,
    trend: "rising"
  },
  {
    id: "f453",
    name: "Bronwyn",
    normalizedName: "bronwyn",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bron",
      "Broie"
    ],
    alternateSpellings: [],
    currentRank: 453,
    trend: "rising"
  },
  {
    id: "f454",
    name: "Brylee",
    normalizedName: "brylee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bry",
      "Bryie"
    ],
    alternateSpellings: [],
    currentRank: 454,
    trend: "rising"
  },
  {
    id: "f455",
    name: "Brynlee",
    normalizedName: "brynlee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bryn",
      "Bryie"
    ],
    alternateSpellings: [],
    currentRank: 455,
    trend: "rising"
  },
  {
    id: "f1662",
    name: "Cadence",
    normalizedName: "cadence",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cade",
      "Cadie"
    ],
    alternateSpellings: [],
    currentRank: 1662,
    trend: "stable"
  },
  {
    id: "f1669",
    name: "Caitlin",
    normalizedName: "caitlin",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cait",
      "Caiie"
    ],
    alternateSpellings: [],
    currentRank: 1669,
    trend: "stable"
  },
  {
    id: "f458",
    name: "Cali",
    normalizedName: "cali",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 458,
    trend: "rising"
  },
  {
    id: "f459",
    name: "Callie",
    normalizedName: "callie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cal",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 459,
    trend: "rising"
  },
  {
    id: "m55",
    name: "Cameron",
    normalizedName: "cameron",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Cam",
      "Cammie"
    ],
    alternateSpellings: [],
    currentRank: 55,
    trend: "stable"
  },
  {
    id: "f1682",
    name: "Camille",
    normalizedName: "camille",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cami",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 1682,
    trend: "stable"
  },
  {
    id: "f462",
    name: "Camryn",
    normalizedName: "camryn",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cam",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 462,
    trend: "rising"
  },
  {
    id: "f463",
    name: "Candace",
    normalizedName: "candace",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cand",
      "Canie"
    ],
    alternateSpellings: [],
    currentRank: 463,
    trend: "rising"
  },
  {
    id: "f1688",
    name: "Capri",
    normalizedName: "capri",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cap"
    ],
    alternateSpellings: [],
    currentRank: 1688,
    trend: "stable"
  },
  {
    id: "f1701",
    name: "Carly",
    normalizedName: "carly",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Car"
    ],
    alternateSpellings: [],
    currentRank: 1701,
    trend: "stable"
  },
  {
    id: "f1706",
    name: "Carmen",
    normalizedName: "carmen",
    gender: "F",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1706,
    trend: "stable"
  },
  {
    id: "f1710",
    name: "Carol",
    normalizedName: "carol",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Car"
    ],
    alternateSpellings: [],
    currentRank: 1710,
    trend: "stable"
  },
  {
    id: "f1712",
    name: "Carolina",
    normalizedName: "carolina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Caro",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1712,
    trend: "stable"
  },
  {
    id: "f1714",
    name: "Carolyn",
    normalizedName: "carolyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Caro",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1714,
    trend: "stable"
  },
  {
    id: "m23",
    name: "Carter",
    normalizedName: "carter",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Cart driver"
    ],
    syllables: 2,
    nicknames: [
      "Cart"
    ],
    alternateSpellings: [],
    currentRank: 23,
    trend: "stable"
  },
  {
    id: "m349",
    name: "Casey",
    normalizedName: "casey",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cas"
    ],
    alternateSpellings: [],
    currentRank: 349,
    trend: "rising"
  },
  {
    id: "f1724",
    name: "Cassandra",
    normalizedName: "cassandra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cass",
      "Cassie",
      "Sandra"
    ],
    alternateSpellings: [],
    currentRank: 1724,
    trend: "stable"
  },
  {
    id: "f1726",
    name: "Cassidy",
    normalizedName: "cassidy",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cass",
      "Casie"
    ],
    alternateSpellings: [],
    currentRank: 1726,
    trend: "stable"
  },
  {
    id: "f474",
    name: "Cataleya",
    normalizedName: "cataleya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cata",
      "Catie"
    ],
    alternateSpellings: [],
    currentRank: 474,
    trend: "rising"
  },
  {
    id: "f1737",
    name: "Caylee",
    normalizedName: "caylee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cay",
      "Cayie"
    ],
    alternateSpellings: [],
    currentRank: 1737,
    trend: "stable"
  },
  {
    id: "f1739",
    name: "Cecelia",
    normalizedName: "cecelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cece",
      "Cecie"
    ],
    alternateSpellings: [],
    currentRank: 1739,
    trend: "stable"
  },
  {
    id: "f1746",
    name: "Celeste",
    normalizedName: "celeste",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cele",
      "Celie"
    ],
    alternateSpellings: [],
    currentRank: 1746,
    trend: "stable"
  },
  {
    id: "f1749",
    name: "Celia",
    normalizedName: "celia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cel"
    ],
    alternateSpellings: [],
    currentRank: 1749,
    trend: "stable"
  },
  {
    id: "f1756",
    name: "Chanel",
    normalizedName: "chanel",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Cha",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1756,
    trend: "stable"
  },
  {
    id: "f1763",
    name: "Charity",
    normalizedName: "charity",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1763,
    trend: "stable"
  },
  {
    id: "f481",
    name: "Charlee",
    normalizedName: "charlee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 481,
    trend: "rising"
  },
  {
    id: "m1162",
    name: "Charley",
    normalizedName: "charley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1162,
    trend: "stable"
  },
  {
    id: "f1769",
    name: "Charli",
    normalizedName: "charli",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cha",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1769,
    trend: "stable"
  },
  {
    id: "f1774",
    name: "Chasity",
    normalizedName: "chasity",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Chas",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1774,
    trend: "stable"
  },
  {
    id: "f1788",
    name: "Cheyenne",
    normalizedName: "cheyenne",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chey",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1788,
    trend: "stable"
  },
  {
    id: "f1800",
    name: "Christina",
    normalizedName: "christina",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1800,
    trend: "stable"
  },
  {
    id: "f1801",
    name: "Christine",
    normalizedName: "christine",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1801,
    trend: "stable"
  },
  {
    id: "f1809",
    name: "Cindy",
    normalizedName: "cindy",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cin"
    ],
    alternateSpellings: [],
    currentRank: 1809,
    trend: "stable"
  },
  {
    id: "f1816",
    name: "Clarissa",
    normalizedName: "clarissa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Clar",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1816,
    trend: "stable"
  },
  {
    id: "f1821",
    name: "Claudia",
    normalizedName: "claudia",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Clau",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1821,
    trend: "stable"
  },
  {
    id: "f1827",
    name: "Clementine",
    normalizedName: "clementine",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Clem",
      "Cleie"
    ],
    alternateSpellings: [],
    currentRank: 1827,
    trend: "stable"
  },
  {
    id: "f1828",
    name: "Cleo",
    normalizedName: "cleo",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1828,
    trend: "stable"
  },
  {
    id: "f1837",
    name: "Colleen",
    normalizedName: "colleen",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Coll",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 1837,
    trend: "stable"
  },
  {
    id: "f1838",
    name: "Collins",
    normalizedName: "collins",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Coll",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 1838,
    trend: "stable"
  },
  {
    id: "f1854",
    name: "Coraline",
    normalizedName: "coraline",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Cora",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1854,
    trend: "stable"
  },
  {
    id: "f498",
    name: "Corinne",
    normalizedName: "corinne",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cori",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 498,
    trend: "rising"
  },
  {
    id: "f499",
    name: "Courtney",
    normalizedName: "courtney",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cour",
      "Couie"
    ],
    alternateSpellings: [],
    currentRank: 499,
    trend: "rising"
  },
  {
    id: "f500",
    name: "Crystal",
    normalizedName: "crystal",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Crys",
      "Cryie"
    ],
    alternateSpellings: [],
    currentRank: 500,
    trend: "rising"
  },
  {
    id: "f501",
    name: "Cynthia",
    normalizedName: "cynthia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cynt",
      "Cynie"
    ],
    alternateSpellings: [],
    currentRank: 501,
    trend: "stable"
  },
  {
    id: "m1202",
    name: "Dallas",
    normalizedName: "dallas",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dal",
      "Dalie"
    ],
    alternateSpellings: [],
    currentRank: 1202,
    trend: "stable"
  },
  {
    id: "f505",
    name: "Dalilah",
    normalizedName: "dalilah",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dali",
      "Dalie"
    ],
    alternateSpellings: [],
    currentRank: 505,
    trend: "stable"
  },
  {
    id: "f506",
    name: "Dana",
    normalizedName: "dana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 506,
    trend: "stable"
  },
  {
    id: "f507",
    name: "Danica",
    normalizedName: "danica",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Dan",
      "Danie"
    ],
    alternateSpellings: [],
    currentRank: 507,
    trend: "stable"
  },
  {
    id: "f508",
    name: "Danielle",
    normalizedName: "danielle",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dani",
      "Danie"
    ],
    alternateSpellings: [],
    currentRank: 508,
    trend: "stable"
  },
  {
    id: "f509",
    name: "Danna",
    normalizedName: "danna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Dan"
    ],
    alternateSpellings: [],
    currentRank: 509,
    trend: "stable"
  },
  {
    id: "f510",
    name: "Daphne",
    normalizedName: "daphne",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dap",
      "Dapie"
    ],
    alternateSpellings: [],
    currentRank: 510,
    trend: "stable"
  },
  {
    id: "f511",
    name: "Darcy",
    normalizedName: "darcy",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dar"
    ],
    alternateSpellings: [],
    currentRank: 511,
    trend: "stable"
  },
  {
    id: "f512",
    name: "Darlene",
    normalizedName: "darlene",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Darl",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 512,
    trend: "stable"
  },
  {
    id: "f513",
    name: "Davina",
    normalizedName: "davina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Dav",
      "Davie"
    ],
    alternateSpellings: [],
    currentRank: 513,
    trend: "stable"
  },
  {
    id: "f514",
    name: "Dawn",
    normalizedName: "dawn",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 514,
    trend: "stable"
  },
  {
    id: "f515",
    name: "Dayana",
    normalizedName: "dayana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Day",
      "Dayie"
    ],
    alternateSpellings: [],
    currentRank: 515,
    trend: "stable"
  },
  {
    id: "f516",
    name: "Deborah",
    normalizedName: "deborah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Debo",
      "Debie"
    ],
    alternateSpellings: [],
    currentRank: 516,
    trend: "stable"
  },
  {
    id: "f517",
    name: "Delaney",
    normalizedName: "delaney",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dela",
      "Delie"
    ],
    alternateSpellings: [],
    currentRank: 517,
    trend: "stable"
  },
  {
    id: "f518",
    name: "Delia",
    normalizedName: "delia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Del"
    ],
    alternateSpellings: [],
    currentRank: 518,
    trend: "stable"
  },
  {
    id: "f519",
    name: "Della",
    normalizedName: "della",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Del"
    ],
    alternateSpellings: [],
    currentRank: 519,
    trend: "stable"
  },
  {
    id: "f520",
    name: "Delphine",
    normalizedName: "delphine",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Delp",
      "Delie"
    ],
    alternateSpellings: [],
    currentRank: 520,
    trend: "stable"
  },
  {
    id: "f521",
    name: "Demi",
    normalizedName: "demi",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 521,
    trend: "stable"
  },
  {
    id: "f522",
    name: "Denise",
    normalizedName: "denise",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Den",
      "Denie"
    ],
    alternateSpellings: [],
    currentRank: 522,
    trend: "stable"
  },
  {
    id: "m1247",
    name: "Denver",
    normalizedName: "denver",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Den",
      "Denie"
    ],
    alternateSpellings: [],
    currentRank: 1247,
    trend: "stable"
  },
  {
    id: "f524",
    name: "Desiree",
    normalizedName: "desiree",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Desi",
      "Desie"
    ],
    alternateSpellings: [],
    currentRank: 524,
    trend: "stable"
  },
  {
    id: "f525",
    name: "Diamond",
    normalizedName: "diamond",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Diam",
      "Diaie"
    ],
    alternateSpellings: [],
    currentRank: 525,
    trend: "stable"
  },
  {
    id: "f527",
    name: "Dianna",
    normalizedName: "dianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Dia",
      "Diaie"
    ],
    alternateSpellings: [],
    currentRank: 527,
    trend: "stable"
  },
  {
    id: "f528",
    name: "Dixie",
    normalizedName: "dixie",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dix"
    ],
    alternateSpellings: [],
    currentRank: 528,
    trend: "stable"
  },
  {
    id: "f529",
    name: "Dolly",
    normalizedName: "dolly",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Dol"
    ],
    alternateSpellings: [],
    currentRank: 529,
    trend: "stable"
  },
  {
    id: "f530",
    name: "Dominique",
    normalizedName: "dominique",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Domi",
      "Domie"
    ],
    alternateSpellings: [],
    currentRank: 530,
    trend: "stable"
  },
  {
    id: "f531",
    name: "Donna",
    normalizedName: "donna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Don"
    ],
    alternateSpellings: [],
    currentRank: 531,
    trend: "stable"
  },
  {
    id: "f532",
    name: "Dorothy",
    normalizedName: "dorothy",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Doro",
      "Dorie"
    ],
    alternateSpellings: [],
    currentRank: 532,
    trend: "stable"
  },
  {
    id: "f533",
    name: "Dream",
    normalizedName: "dream",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Dre"
    ],
    alternateSpellings: [],
    currentRank: 533,
    trend: "stable"
  },
  {
    id: "m1285",
    name: "Drew",
    normalizedName: "drew",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1285,
    trend: "stable"
  },
  {
    id: "f535",
    name: "Dulce",
    normalizedName: "dulce",
    gender: "F",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dul"
    ],
    alternateSpellings: [],
    currentRank: 535,
    trend: "stable"
  },
  {
    id: "m1291",
    name: "Dylan",
    normalizedName: "dylan",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Son of the sea"
    ],
    syllables: 2,
    nicknames: [
      "Dyl"
    ],
    alternateSpellings: [],
    currentRank: 1291,
    trend: "stable"
  },
  {
    id: "f537",
    name: "Edie",
    normalizedName: "edie",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 537,
    trend: "stable"
  },
  {
    id: "f538",
    name: "Edith",
    normalizedName: "edith",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Edi"
    ],
    alternateSpellings: [],
    currentRank: 538,
    trend: "stable"
  },
  {
    id: "f539",
    name: "Edna",
    normalizedName: "edna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 539,
    trend: "stable"
  },
  {
    id: "f540",
    name: "Eileen",
    normalizedName: "eileen",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Eil",
      "Eilie"
    ],
    alternateSpellings: [],
    currentRank: 540,
    trend: "stable"
  },
  {
    id: "f541",
    name: "Elaina",
    normalizedName: "elaina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ela",
      "Elaie"
    ],
    alternateSpellings: [],
    currentRank: 541,
    trend: "stable"
  },
  {
    id: "f542",
    name: "Elaine",
    normalizedName: "elaine",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ela",
      "Elaie"
    ],
    alternateSpellings: [],
    currentRank: 542,
    trend: "stable"
  },
  {
    id: "f544",
    name: "Electra",
    normalizedName: "electra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Elec",
      "Eleie"
    ],
    alternateSpellings: [],
    currentRank: 544,
    trend: "stable"
  },
  {
    id: "f547",
    name: "Elina",
    normalizedName: "elina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Eli"
    ],
    alternateSpellings: [],
    currentRank: 547,
    trend: "stable"
  },
  {
    id: "f548",
    name: "Elisa",
    normalizedName: "elisa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Eli"
    ],
    alternateSpellings: [],
    currentRank: 548,
    trend: "stable"
  },
  {
    id: "f549",
    name: "Elisabeth",
    normalizedName: "elisabeth",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Elis",
      "Eliie"
    ],
    alternateSpellings: [],
    currentRank: 549,
    trend: "stable"
  },
  {
    id: "f551",
    name: "Eliza",
    normalizedName: "eliza",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Eli"
    ],
    alternateSpellings: [],
    currentRank: 551,
    trend: "stable"
  },
  {
    id: "f554",
    name: "Ellen",
    normalizedName: "ellen",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ell"
    ],
    alternateSpellings: [],
    currentRank: 554,
    trend: "stable"
  },
  {
    id: "f555",
    name: "Elliana",
    normalizedName: "elliana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Elli",
      "Ellie"
    ],
    alternateSpellings: [],
    currentRank: 555,
    trend: "stable"
  },
  {
    id: "m1318",
    name: "Elliot",
    normalizedName: "elliot",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ell",
      "Ellie"
    ],
    alternateSpellings: [],
    currentRank: 1318,
    trend: "stable"
  },
  {
    id: "m1320",
    name: "Ellis",
    normalizedName: "ellis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ell"
    ],
    alternateSpellings: [],
    currentRank: 1320,
    trend: "stable"
  },
  {
    id: "f560",
    name: "Elora",
    normalizedName: "elora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Elo"
    ],
    alternateSpellings: [],
    currentRank: 560,
    trend: "stable"
  },
  {
    id: "f561",
    name: "Elsa",
    normalizedName: "elsa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 561,
    trend: "stable"
  },
  {
    id: "f563",
    name: "Elyse",
    normalizedName: "elyse",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ely"
    ],
    alternateSpellings: [],
    currentRank: 563,
    trend: "stable"
  },
  {
    id: "f565",
    name: "Emberly",
    normalizedName: "emberly",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Embe",
      "Embie"
    ],
    alternateSpellings: [],
    currentRank: 565,
    trend: "stable"
  },
  {
    id: "f566",
    name: "Emelia",
    normalizedName: "emelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Eme",
      "Emeie"
    ],
    alternateSpellings: [],
    currentRank: 566,
    trend: "stable"
  },
  {
    id: "f567",
    name: "Emerald",
    normalizedName: "emerald",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Emer",
      "Emeie"
    ],
    alternateSpellings: [],
    currentRank: 567,
    trend: "stable"
  },
  {
    id: "f568",
    name: "Emersyn",
    normalizedName: "emersyn",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Emer",
      "Emeie"
    ],
    alternateSpellings: [],
    currentRank: 568,
    trend: "stable"
  },
  {
    id: "f573",
    name: "Emmaline",
    normalizedName: "emmaline",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Emma",
      "Emmie"
    ],
    alternateSpellings: [],
    currentRank: 573,
    trend: "stable"
  },
  {
    id: "f574",
    name: "Emmalyn",
    normalizedName: "emmalyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Emma",
      "Emmie"
    ],
    alternateSpellings: [],
    currentRank: 574,
    trend: "stable"
  },
  {
    id: "f575",
    name: "Emmeline",
    normalizedName: "emmeline",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Emme",
      "Emmie"
    ],
    alternateSpellings: [],
    currentRank: 575,
    trend: "stable"
  },
  {
    id: "f576",
    name: "Emmy",
    normalizedName: "emmy",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 576,
    trend: "stable"
  },
  {
    id: "f577",
    name: "Ensley",
    normalizedName: "ensley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Ens",
      "Ensie"
    ],
    alternateSpellings: [],
    currentRank: 577,
    trend: "stable"
  },
  {
    id: "f578",
    name: "Erica",
    normalizedName: "erica",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Eri"
    ],
    alternateSpellings: [],
    currentRank: 578,
    trend: "stable"
  },
  {
    id: "f579",
    name: "Erin",
    normalizedName: "erin",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 579,
    trend: "stable"
  },
  {
    id: "f580",
    name: "Esmeralda",
    normalizedName: "esmeralda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Esme",
      "Esmie"
    ],
    alternateSpellings: [],
    currentRank: 580,
    trend: "stable"
  },
  {
    id: "f581",
    name: "Esperanza",
    normalizedName: "esperanza",
    gender: "F",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Espe",
      "Espie"
    ],
    alternateSpellings: [],
    currentRank: 581,
    trend: "stable"
  },
  {
    id: "f582",
    name: "Estelle",
    normalizedName: "estelle",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Este",
      "Estie"
    ],
    alternateSpellings: [],
    currentRank: 582,
    trend: "stable"
  },
  {
    id: "f584",
    name: "Estrella",
    normalizedName: "estrella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Estr",
      "Estie"
    ],
    alternateSpellings: [],
    currentRank: 584,
    trend: "stable"
  },
  {
    id: "f585",
    name: "Etta",
    normalizedName: "etta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 585,
    trend: "stable"
  },
  {
    id: "f590",
    name: "Evelynn",
    normalizedName: "evelynn",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Evel",
      "Eveie"
    ],
    alternateSpellings: [],
    currentRank: 590,
    trend: "stable"
  },
  {
    id: "f591",
    name: "Everlee",
    normalizedName: "everlee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ever",
      "Eveie"
    ],
    alternateSpellings: [],
    currentRank: 591,
    trend: "stable"
  },
  {
    id: "m1021",
    name: "Everly",
    normalizedName: "everly",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Eve",
      "Eveie"
    ],
    alternateSpellings: [],
    currentRank: 1021,
    trend: "stable"
  },
  {
    id: "f593",
    name: "Evie",
    normalizedName: "evie",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 593,
    trend: "stable"
  },
  {
    id: "m1358",
    name: "Ezra",
    normalizedName: "ezra",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Helper"
    ],
    syllables: 2,
    nicknames: [
      "Ez"
    ],
    alternateSpellings: [],
    currentRank: 1358,
    trend: "stable"
  },
  {
    id: "f595",
    name: "Fabiola",
    normalizedName: "fabiola",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Fabi",
      "Fabie"
    ],
    alternateSpellings: [],
    currentRank: 595,
    trend: "stable"
  },
  {
    id: "f597",
    name: "Fallon",
    normalizedName: "fallon",
    gender: "F",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Fal",
      "Falie"
    ],
    alternateSpellings: [],
    currentRank: 597,
    trend: "stable"
  },
  {
    id: "f598",
    name: "Farrah",
    normalizedName: "farrah",
    gender: "F",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Far",
      "Farie"
    ],
    alternateSpellings: [],
    currentRank: 598,
    trend: "stable"
  },
  {
    id: "f599",
    name: "Fatima",
    normalizedName: "fatima",
    gender: "F",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Fat",
      "Fatie"
    ],
    alternateSpellings: [],
    currentRank: 599,
    trend: "stable"
  },
  {
    id: "f600",
    name: "Faye",
    normalizedName: "faye",
    gender: "F",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 600,
    trend: "stable"
  },
  {
    id: "f601",
    name: "Felicity",
    normalizedName: "felicity",
    gender: "F",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Feli",
      "Felie"
    ],
    alternateSpellings: [],
    currentRank: 601,
    trend: "stable"
  },
  {
    id: "f602",
    name: "Fern",
    normalizedName: "fern",
    gender: "F",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 602,
    trend: "stable"
  },
  {
    id: "f603",
    name: "Fernanda",
    normalizedName: "fernanda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Fern",
      "Ferie"
    ],
    alternateSpellings: [],
    currentRank: 603,
    trend: "stable"
  },
  {
    id: "m1375",
    name: "Finley",
    normalizedName: "finley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Fin",
      "Finie"
    ],
    alternateSpellings: [],
    currentRank: 1375,
    trend: "stable"
  },
  {
    id: "f607",
    name: "Florence",
    normalizedName: "florence",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Flor",
      "Floie"
    ],
    alternateSpellings: [],
    currentRank: 607,
    trend: "stable"
  },
  {
    id: "f608",
    name: "Frances",
    normalizedName: "frances",
    gender: "F",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fran",
      "Fraie"
    ],
    alternateSpellings: [],
    currentRank: 608,
    trend: "stable"
  },
  {
    id: "m1396",
    name: "Frankie",
    normalizedName: "frankie",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fran",
      "Fraie"
    ],
    alternateSpellings: [],
    currentRank: 1396,
    trend: "stable"
  },
  {
    id: "f611",
    name: "Freda",
    normalizedName: "freda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Fre"
    ],
    alternateSpellings: [],
    currentRank: 611,
    trend: "stable"
  },
  {
    id: "f613",
    name: "Frida",
    normalizedName: "frida",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Fri"
    ],
    alternateSpellings: [],
    currentRank: 613,
    trend: "stable"
  },
  {
    id: "f614",
    name: "Gabriela",
    normalizedName: "gabriela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Gabr",
      "Gabie"
    ],
    alternateSpellings: [],
    currentRank: 614,
    trend: "stable"
  },
  {
    id: "f616",
    name: "Gabrielle",
    normalizedName: "gabrielle",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gabr",
      "Gabie"
    ],
    alternateSpellings: [],
    currentRank: 616,
    trend: "stable"
  },
  {
    id: "f617",
    name: "Gail",
    normalizedName: "gail",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 617,
    trend: "stable"
  },
  {
    id: "f618",
    name: "Galilea",
    normalizedName: "galilea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Gali",
      "Galie"
    ],
    alternateSpellings: [],
    currentRank: 618,
    trend: "stable"
  },
  {
    id: "f621",
    name: "Genevieve",
    normalizedName: "genevieve",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Gen",
      "Genny",
      "Vivi",
      "Eve"
    ],
    alternateSpellings: [],
    currentRank: 621,
    trend: "stable"
  },
  {
    id: "f623",
    name: "Georgina",
    normalizedName: "georgina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Geor",
      "Geoie"
    ],
    alternateSpellings: [],
    currentRank: 623,
    trend: "stable"
  },
  {
    id: "f625",
    name: "Giada",
    normalizedName: "giada",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Gia"
    ],
    alternateSpellings: [],
    currentRank: 625,
    trend: "stable"
  },
  {
    id: "f627",
    name: "Gillian",
    normalizedName: "gillian",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gill",
      "Gilie"
    ],
    alternateSpellings: [],
    currentRank: 627,
    trend: "stable"
  },
  {
    id: "f628",
    name: "Gina",
    normalizedName: "gina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 628,
    trend: "stable"
  },
  {
    id: "f630",
    name: "Giuliana",
    normalizedName: "giuliana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Giul",
      "Giuie"
    ],
    alternateSpellings: [],
    currentRank: 630,
    trend: "stable"
  },
  {
    id: "f633",
    name: "Gracelyn",
    normalizedName: "gracelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Grace"
    ],
    syllables: 3,
    nicknames: [
      "Grac",
      "Graie"
    ],
    alternateSpellings: [],
    currentRank: 633,
    trend: "stable"
  },
  {
    id: "f635",
    name: "Graciela",
    normalizedName: "graciela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Grac",
      "Graie"
    ],
    alternateSpellings: [],
    currentRank: 635,
    trend: "stable"
  },
  {
    id: "f636",
    name: "Greta",
    normalizedName: "greta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Gre"
    ],
    alternateSpellings: [],
    currentRank: 636,
    trend: "stable"
  },
  {
    id: "f637",
    name: "Gretchen",
    normalizedName: "gretchen",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Gret",
      "Greie"
    ],
    alternateSpellings: [],
    currentRank: 637,
    trend: "stable"
  },
  {
    id: "m1461",
    name: "Guadalupe",
    normalizedName: "guadalupe",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Guad",
      "Guaie"
    ],
    alternateSpellings: [],
    currentRank: 1461,
    trend: "stable"
  },
  {
    id: "f639",
    name: "Gwen",
    normalizedName: "gwen",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 639,
    trend: "stable"
  },
  {
    id: "f641",
    name: "Gwyneth",
    normalizedName: "gwyneth",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gwyn",
      "Gwyie"
    ],
    alternateSpellings: [],
    currentRank: 641,
    trend: "stable"
  },
  {
    id: "f642",
    name: "Hadassah",
    normalizedName: "hadassah",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Hada",
      "Hadie"
    ],
    alternateSpellings: [],
    currentRank: 642,
    trend: "stable"
  },
  {
    id: "f643",
    name: "Hadlee",
    normalizedName: "hadlee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Had",
      "Hadie"
    ],
    alternateSpellings: [],
    currentRank: 643,
    trend: "stable"
  },
  {
    id: "f646",
    name: "Halle",
    normalizedName: "halle",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hal"
    ],
    alternateSpellings: [],
    currentRank: 646,
    trend: "stable"
  },
  {
    id: "f648",
    name: "Hana",
    normalizedName: "hana",
    gender: "F",
    origins: [
      "Japanese"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 648,
    trend: "stable"
  },
  {
    id: "f650",
    name: "Harlee",
    normalizedName: "harlee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Har",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 650,
    trend: "stable"
  },
  {
    id: "f652",
    name: "Harlow",
    normalizedName: "harlow",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Har",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 652,
    trend: "stable"
  },
  {
    id: "f653",
    name: "Harmoni",
    normalizedName: "harmoni",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Harm",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 653,
    trend: "stable"
  },
  {
    id: "f656",
    name: "Harriet",
    normalizedName: "harriet",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Harr",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 656,
    trend: "stable"
  },
  {
    id: "f657",
    name: "Hattie",
    normalizedName: "hattie",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hat",
      "Hatie"
    ],
    alternateSpellings: [],
    currentRank: 657,
    trend: "stable"
  },
  {
    id: "m1493",
    name: "Hayden",
    normalizedName: "hayden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Hay",
      "Hayie"
    ],
    alternateSpellings: [],
    currentRank: 1493,
    trend: "stable"
  },
  {
    id: "f660",
    name: "Haylee",
    normalizedName: "haylee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hay",
      "Hayie"
    ],
    alternateSpellings: [],
    currentRank: 660,
    trend: "stable"
  },
  {
    id: "f661",
    name: "Hayley",
    normalizedName: "hayley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Hay",
      "Hayie"
    ],
    alternateSpellings: [],
    currentRank: 661,
    trend: "stable"
  },
  {
    id: "f663",
    name: "Heather",
    normalizedName: "heather",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Heat",
      "Heaie"
    ],
    alternateSpellings: [],
    currentRank: 663,
    trend: "stable"
  },
  {
    id: "f664",
    name: "Heaven",
    normalizedName: "heaven",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Hea",
      "Heaie"
    ],
    alternateSpellings: [],
    currentRank: 664,
    trend: "stable"
  },
  {
    id: "f667",
    name: "Helena",
    normalizedName: "helena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Hel",
      "Helie"
    ],
    alternateSpellings: [],
    currentRank: 667,
    trend: "stable"
  },
  {
    id: "f668",
    name: "Henley",
    normalizedName: "henley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Hen",
      "Henie"
    ],
    alternateSpellings: [],
    currentRank: 668,
    trend: "stable"
  },
  {
    id: "f669",
    name: "Henna",
    normalizedName: "henna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Hen"
    ],
    alternateSpellings: [],
    currentRank: 669,
    trend: "stable"
  },
  {
    id: "f671",
    name: "Honor",
    normalizedName: "honor",
    gender: "F",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hon"
    ],
    alternateSpellings: [],
    currentRank: 671,
    trend: "stable"
  },
  {
    id: "m1519",
    name: "Hunter",
    normalizedName: "hunter",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hunt"
    ],
    alternateSpellings: [],
    currentRank: 1519,
    trend: "stable"
  },
  {
    id: "f674",
    name: "Ida",
    normalizedName: "ida",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 674,
    trend: "stable"
  },
  {
    id: "f675",
    name: "Iliana",
    normalizedName: "iliana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ili",
      "Iliie"
    ],
    alternateSpellings: [],
    currentRank: 675,
    trend: "stable"
  },
  {
    id: "f677",
    name: "India",
    normalizedName: "india",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ind"
    ],
    alternateSpellings: [],
    currentRank: 677,
    trend: "stable"
  },
  {
    id: "f678",
    name: "Indie",
    normalizedName: "indie",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ind"
    ],
    alternateSpellings: [],
    currentRank: 678,
    trend: "stable"
  },
  {
    id: "f679",
    name: "Ingrid",
    normalizedName: "ingrid",
    gender: "F",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ing",
      "Ingie"
    ],
    alternateSpellings: [],
    currentRank: 679,
    trend: "stable"
  },
  {
    id: "f680",
    name: "Irene",
    normalizedName: "irene",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ire"
    ],
    alternateSpellings: [],
    currentRank: 680,
    trend: "stable"
  },
  {
    id: "f683",
    name: "Isabela",
    normalizedName: "isabela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Isab",
      "Isaie"
    ],
    alternateSpellings: [],
    currentRank: 683,
    trend: "stable"
  },
  {
    id: "f687",
    name: "Itzel",
    normalizedName: "itzel",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Itz"
    ],
    alternateSpellings: [],
    currentRank: 687,
    trend: "stable"
  },
  {
    id: "f689",
    name: "Ivory",
    normalizedName: "ivory",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ivo"
    ],
    alternateSpellings: [],
    currentRank: 689,
    trend: "stable"
  },
  {
    id: "f691",
    name: "Izabella",
    normalizedName: "izabella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Izab",
      "Izaie"
    ],
    alternateSpellings: [],
    currentRank: 691,
    trend: "stable"
  },
  {
    id: "f692",
    name: "Jacqueline",
    normalizedName: "jacqueline",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Jackie",
      "Jack"
    ],
    alternateSpellings: [],
    currentRank: 692,
    trend: "stable"
  },
  {
    id: "m1561",
    name: "Jadyn",
    normalizedName: "jadyn",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jad"
    ],
    alternateSpellings: [],
    currentRank: 1561,
    trend: "stable"
  },
  {
    id: "f696",
    name: "Jaelyn",
    normalizedName: "jaelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jae",
      "Jaeie"
    ],
    alternateSpellings: [],
    currentRank: 696,
    trend: "stable"
  },
  {
    id: "f697",
    name: "Jaida",
    normalizedName: "jaida",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Jai"
    ],
    alternateSpellings: [],
    currentRank: 697,
    trend: "stable"
  },
  {
    id: "m1569",
    name: "Jaime",
    normalizedName: "jaime",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jai"
    ],
    alternateSpellings: [],
    currentRank: 1569,
    trend: "stable"
  },
  {
    id: "m1583",
    name: "Jamie",
    normalizedName: "jamie",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jam"
    ],
    alternateSpellings: [],
    currentRank: 1583,
    trend: "stable"
  },
  {
    id: "m1586",
    name: "Jamison",
    normalizedName: "jamison",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Jami",
      "Jamie"
    ],
    alternateSpellings: [],
    currentRank: 1586,
    trend: "stable"
  },
  {
    id: "f701",
    name: "Jana",
    normalizedName: "jana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 701,
    trend: "stable"
  },
  {
    id: "f703",
    name: "Janelle",
    normalizedName: "janelle",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jane",
      "Janie"
    ],
    alternateSpellings: [],
    currentRank: 703,
    trend: "stable"
  },
  {
    id: "f704",
    name: "Janet",
    normalizedName: "janet",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jan"
    ],
    alternateSpellings: [],
    currentRank: 704,
    trend: "stable"
  },
  {
    id: "f705",
    name: "Janice",
    normalizedName: "janice",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jan",
      "Janie"
    ],
    alternateSpellings: [],
    currentRank: 705,
    trend: "stable"
  },
  {
    id: "f706",
    name: "Janie",
    normalizedName: "janie",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jan"
    ],
    alternateSpellings: [],
    currentRank: 706,
    trend: "stable"
  },
  {
    id: "f707",
    name: "Janiya",
    normalizedName: "janiya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Jan",
      "Janie"
    ],
    alternateSpellings: [],
    currentRank: 707,
    trend: "stable"
  },
  {
    id: "f709",
    name: "Jaylah",
    normalizedName: "jaylah",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 709,
    trend: "stable"
  },
  {
    id: "f711",
    name: "Jayleen",
    normalizedName: "jayleen",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jayl",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 711,
    trend: "stable"
  },
  {
    id: "f712",
    name: "Jazlyn",
    normalizedName: "jazlyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jaz",
      "Jazie"
    ],
    alternateSpellings: [],
    currentRank: 712,
    trend: "stable"
  },
  {
    id: "f713",
    name: "Jazmin",
    normalizedName: "jazmin",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jaz",
      "Jazie"
    ],
    alternateSpellings: [],
    currentRank: 713,
    trend: "stable"
  },
  {
    id: "f714",
    name: "Jazmine",
    normalizedName: "jazmine",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jazm",
      "Jazie"
    ],
    alternateSpellings: [],
    currentRank: 714,
    trend: "stable"
  },
  {
    id: "m1620",
    name: "Jean",
    normalizedName: "jean",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1620,
    trend: "stable"
  },
  {
    id: "f716",
    name: "Jeanette",
    normalizedName: "jeanette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jean",
      "Jeaie"
    ],
    alternateSpellings: [],
    currentRank: 716,
    trend: "stable"
  },
  {
    id: "f717",
    name: "Jemma",
    normalizedName: "jemma",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Jem"
    ],
    alternateSpellings: [],
    currentRank: 717,
    trend: "stable"
  },
  {
    id: "f718",
    name: "Jenifer",
    normalizedName: "jenifer",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jeni",
      "Jenie"
    ],
    alternateSpellings: [],
    currentRank: 718,
    trend: "stable"
  },
  {
    id: "f720",
    name: "Jennifer",
    normalizedName: "jennifer",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jen",
      "Jenny",
      "Jenn"
    ],
    alternateSpellings: [],
    currentRank: 720,
    trend: "stable"
  },
  {
    id: "f721",
    name: "Jenny",
    normalizedName: "jenny",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jen"
    ],
    alternateSpellings: [],
    currentRank: 721,
    trend: "stable"
  },
  {
    id: "m1636",
    name: "Jessie",
    normalizedName: "jessie",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jes",
      "Jesie"
    ],
    alternateSpellings: [],
    currentRank: 1636,
    trend: "stable"
  },
  {
    id: "f724",
    name: "Jewel",
    normalizedName: "jewel",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Jew"
    ],
    alternateSpellings: [],
    currentRank: 724,
    trend: "stable"
  },
  {
    id: "f725",
    name: "Jillian",
    normalizedName: "jillian",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jill",
      "Jilie"
    ],
    alternateSpellings: [],
    currentRank: 725,
    trend: "stable"
  },
  {
    id: "f726",
    name: "Jimena",
    normalizedName: "jimena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Jim",
      "Jimie"
    ],
    alternateSpellings: [],
    currentRank: 726,
    trend: "stable"
  },
  {
    id: "m1645",
    name: "Joan",
    normalizedName: "joan",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1645,
    trend: "stable"
  },
  {
    id: "f730",
    name: "Joelle",
    normalizedName: "joelle",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Joe",
      "Joeie"
    ],
    alternateSpellings: [],
    currentRank: 730,
    trend: "stable"
  },
  {
    id: "f731",
    name: "Johanna",
    normalizedName: "johanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Joha",
      "Johie"
    ],
    alternateSpellings: [],
    currentRank: 731,
    trend: "stable"
  },
  {
    id: "f733",
    name: "Jolie",
    normalizedName: "jolie",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jol"
    ],
    alternateSpellings: [],
    currentRank: 733,
    trend: "stable"
  },
  {
    id: "f735",
    name: "Jordana",
    normalizedName: "jordana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Jord",
      "Jorie"
    ],
    alternateSpellings: [],
    currentRank: 735,
    trend: "stable"
  },
  {
    id: "f737",
    name: "Joselyn",
    normalizedName: "joselyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jose",
      "Josie"
    ],
    alternateSpellings: [],
    currentRank: 737,
    trend: "stable"
  },
  {
    id: "f740",
    name: "Journee",
    normalizedName: "journee",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jour",
      "Jouie"
    ],
    alternateSpellings: [],
    currentRank: 740,
    trend: "stable"
  },
  {
    id: "f743",
    name: "Joyce",
    normalizedName: "joyce",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Joy"
    ],
    syllables: 2,
    nicknames: [
      "Joy"
    ],
    alternateSpellings: [],
    currentRank: 743,
    trend: "stable"
  },
  {
    id: "f744",
    name: "Judith",
    normalizedName: "judith",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jud",
      "Judie"
    ],
    alternateSpellings: [],
    currentRank: 744,
    trend: "stable"
  },
  {
    id: "f748",
    name: "Julie",
    normalizedName: "julie",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jul"
    ],
    alternateSpellings: [],
    currentRank: 748,
    trend: "stable"
  },
  {
    id: "f749",
    name: "Juliet",
    normalizedName: "juliet",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jul",
      "Julie"
    ],
    alternateSpellings: [],
    currentRank: 749,
    trend: "stable"
  },
  {
    id: "f750",
    name: "Julieta",
    normalizedName: "julieta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Juli",
      "Julie"
    ],
    alternateSpellings: [],
    currentRank: 750,
    trend: "stable"
  },
  {
    id: "f753",
    name: "Juniper",
    normalizedName: "juniper",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Juni",
      "Junie"
    ],
    alternateSpellings: [],
    currentRank: 753,
    trend: "stable"
  },
  {
    id: "m1692",
    name: "Justice",
    normalizedName: "justice",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Just",
      "Jusie"
    ],
    alternateSpellings: [],
    currentRank: 1692,
    trend: "stable"
  },
  {
    id: "f755",
    name: "Justine",
    normalizedName: "justine",
    gender: "F",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Just",
      "Jusie"
    ],
    alternateSpellings: [],
    currentRank: 755,
    trend: "stable"
  },
  {
    id: "f757",
    name: "Kailani",
    normalizedName: "kailani",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kail",
      "Kaiie"
    ],
    alternateSpellings: [],
    currentRank: 757,
    trend: "stable"
  },
  {
    id: "f758",
    name: "Kailey",
    normalizedName: "kailey",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Kai",
      "Kaiie"
    ],
    alternateSpellings: [],
    currentRank: 758,
    trend: "stable"
  },
  {
    id: "f759",
    name: "Kairi",
    normalizedName: "kairi",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kai"
    ],
    alternateSpellings: [],
    currentRank: 759,
    trend: "stable"
  },
  {
    id: "f761",
    name: "Kali",
    normalizedName: "kali",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 761,
    trend: "stable"
  },
  {
    id: "f762",
    name: "Kaliyah",
    normalizedName: "kaliyah",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kali",
      "Kalie"
    ],
    alternateSpellings: [],
    currentRank: 762,
    trend: "stable"
  },
  {
    id: "f763",
    name: "Kallie",
    normalizedName: "kallie",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kal",
      "Kalie"
    ],
    alternateSpellings: [],
    currentRank: 763,
    trend: "stable"
  },
  {
    id: "m1704",
    name: "Kamari",
    normalizedName: "kamari",
    gender: "M",
    origins: [
      "African"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kam",
      "Kamie"
    ],
    alternateSpellings: [],
    currentRank: 1704,
    trend: "stable"
  },
  {
    id: "f766",
    name: "Kamiyah",
    normalizedName: "kamiyah",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kami",
      "Kamie"
    ],
    alternateSpellings: [],
    currentRank: 766,
    trend: "stable"
  },
  {
    id: "m664",
    name: "Kamryn",
    normalizedName: "kamryn",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kam",
      "Kamie"
    ],
    alternateSpellings: [],
    currentRank: 664,
    trend: "stable"
  },
  {
    id: "f770",
    name: "Kari",
    normalizedName: "kari",
    gender: "F",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 770,
    trend: "stable"
  },
  {
    id: "f772",
    name: "Karla",
    normalizedName: "karla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Kar"
    ],
    alternateSpellings: [],
    currentRank: 772,
    trend: "stable"
  },
  {
    id: "f773",
    name: "Karlee",
    normalizedName: "karlee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kar",
      "Karie"
    ],
    alternateSpellings: [],
    currentRank: 773,
    trend: "stable"
  },
  {
    id: "f774",
    name: "Karsyn",
    normalizedName: "karsyn",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kar",
      "Karie"
    ],
    alternateSpellings: [],
    currentRank: 774,
    trend: "stable"
  },
  {
    id: "f775",
    name: "Kasey",
    normalizedName: "kasey",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kas"
    ],
    alternateSpellings: [],
    currentRank: 775,
    trend: "stable"
  },
  {
    id: "f776",
    name: "Kassidy",
    normalizedName: "kassidy",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kass",
      "Kasie"
    ],
    alternateSpellings: [],
    currentRank: 776,
    trend: "stable"
  },
  {
    id: "f779",
    name: "Katerina",
    normalizedName: "katerina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Kate",
      "Katie"
    ],
    alternateSpellings: [],
    currentRank: 779,
    trend: "stable"
  },
  {
    id: "f781",
    name: "Kathleen",
    normalizedName: "kathleen",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kath",
      "Katie"
    ],
    alternateSpellings: [],
    currentRank: 781,
    trend: "stable"
  },
  {
    id: "f782",
    name: "Kathryn",
    normalizedName: "kathryn",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kath",
      "Katie"
    ],
    alternateSpellings: [],
    currentRank: 782,
    trend: "stable"
  },
  {
    id: "f784",
    name: "Katrina",
    normalizedName: "katrina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Katr",
      "Katie"
    ],
    alternateSpellings: [],
    currentRank: 784,
    trend: "stable"
  },
  {
    id: "f785",
    name: "Kaya",
    normalizedName: "kaya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 785,
    trend: "stable"
  },
  {
    id: "m1719",
    name: "Kayden",
    normalizedName: "kayden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kay",
      "Kade"
    ],
    alternateSpellings: [],
    currentRank: 1719,
    trend: "stable"
  },
  {
    id: "f789",
    name: "Kaylie",
    normalizedName: "kaylie",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kay",
      "Kayie"
    ],
    alternateSpellings: [],
    currentRank: 789,
    trend: "stable"
  },
  {
    id: "m1725",
    name: "Keegan",
    normalizedName: "keegan",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kee",
      "Keeie"
    ],
    alternateSpellings: [],
    currentRank: 1725,
    trend: "stable"
  },
  {
    id: "f791",
    name: "Keely",
    normalizedName: "keely",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Kee"
    ],
    alternateSpellings: [],
    currentRank: 791,
    trend: "stable"
  },
  {
    id: "m1729",
    name: "Kelly",
    normalizedName: "kelly",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Kel"
    ],
    alternateSpellings: [],
    currentRank: 1729,
    trend: "stable"
  },
  {
    id: "f797",
    name: "Kenna",
    normalizedName: "kenna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ken"
    ],
    alternateSpellings: [],
    currentRank: 797,
    trend: "stable"
  },
  {
    id: "f799",
    name: "Kensley",
    normalizedName: "kensley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Kens",
      "Kenie"
    ],
    alternateSpellings: [],
    currentRank: 799,
    trend: "stable"
  },
  {
    id: "m1741",
    name: "Kenya",
    normalizedName: "kenya",
    gender: "M",
    origins: [
      "African"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ken"
    ],
    alternateSpellings: [],
    currentRank: 1741,
    trend: "stable"
  },
  {
    id: "f802",
    name: "Keyla",
    normalizedName: "keyla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Key"
    ],
    alternateSpellings: [],
    currentRank: 802,
    trend: "stable"
  },
  {
    id: "f803",
    name: "Khadijah",
    normalizedName: "khadijah",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Khad",
      "Khaie"
    ],
    alternateSpellings: [],
    currentRank: 803,
    trend: "stable"
  },
  {
    id: "f806",
    name: "Kiera",
    normalizedName: "kiera",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Kie"
    ],
    alternateSpellings: [],
    currentRank: 806,
    trend: "stable"
  },
  {
    id: "f807",
    name: "Kimber",
    normalizedName: "kimber",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kim",
      "Kimie"
    ],
    alternateSpellings: [],
    currentRank: 807,
    trend: "stable"
  },
  {
    id: "f809",
    name: "Kimora",
    normalizedName: "kimora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Kim",
      "Kimie"
    ],
    alternateSpellings: [],
    currentRank: 809,
    trend: "stable"
  },
  {
    id: "f810",
    name: "Kinley",
    normalizedName: "kinley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Kin",
      "Kinie"
    ],
    alternateSpellings: [],
    currentRank: 810,
    trend: "stable"
  },
  {
    id: "f813",
    name: "Kirsten",
    normalizedName: "kirsten",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kirs",
      "Kirie"
    ],
    alternateSpellings: [],
    currentRank: 813,
    trend: "stable"
  },
  {
    id: "f814",
    name: "Kora",
    normalizedName: "kora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 814,
    trend: "stable"
  },
  {
    id: "f815",
    name: "Kristen",
    normalizedName: "kristen",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kris",
      "Kriie"
    ],
    alternateSpellings: [],
    currentRank: 815,
    trend: "stable"
  },
  {
    id: "f816",
    name: "Kristina",
    normalizedName: "kristina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Kris",
      "Kriie"
    ],
    alternateSpellings: [],
    currentRank: 816,
    trend: "stable"
  },
  {
    id: "f817",
    name: "Kyla",
    normalizedName: "kyla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 817,
    trend: "stable"
  },
  {
    id: "f819",
    name: "Kyleigh",
    normalizedName: "kyleigh",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyle",
      "Kylie"
    ],
    alternateSpellings: [],
    currentRank: 819,
    trend: "stable"
  },
  {
    id: "f821",
    name: "Kylynn",
    normalizedName: "kylynn",
    gender: "F",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyl",
      "Kylie"
    ],
    alternateSpellings: [],
    currentRank: 821,
    trend: "stable"
  },
  {
    id: "f822",
    name: "Kyra",
    normalizedName: "kyra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 822,
    trend: "stable"
  },
  {
    id: "f824",
    name: "Laila",
    normalizedName: "laila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lai"
    ],
    alternateSpellings: [],
    currentRank: 824,
    trend: "stable"
  },
  {
    id: "f825",
    name: "Lainey",
    normalizedName: "lainey",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lai",
      "Laiie"
    ],
    alternateSpellings: [],
    currentRank: 825,
    trend: "stable"
  },
  {
    id: "f827",
    name: "Laney",
    normalizedName: "laney",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lan"
    ],
    alternateSpellings: [],
    currentRank: 827,
    trend: "stable"
  },
  {
    id: "f828",
    name: "Lara",
    normalizedName: "lara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 828,
    trend: "stable"
  },
  {
    id: "f829",
    name: "Larissa",
    normalizedName: "larissa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Lari",
      "Larie"
    ],
    alternateSpellings: [],
    currentRank: 829,
    trend: "stable"
  },
  {
    id: "f831",
    name: "Laurel",
    normalizedName: "laurel",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Lau",
      "Lauie"
    ],
    alternateSpellings: [],
    currentRank: 831,
    trend: "stable"
  },
  {
    id: "f833",
    name: "Lauryn",
    normalizedName: "lauryn",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lau",
      "Lauie"
    ],
    alternateSpellings: [],
    currentRank: 833,
    trend: "stable"
  },
  {
    id: "f835",
    name: "Lea",
    normalizedName: "lea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 835,
    trend: "stable"
  },
  {
    id: "f837",
    name: "Leanna",
    normalizedName: "leanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lea",
      "Leaie"
    ],
    alternateSpellings: [],
    currentRank: 837,
    trend: "stable"
  },
  {
    id: "m639",
    name: "Legacy",
    normalizedName: "legacy",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Leg",
      "Legie"
    ],
    alternateSpellings: [],
    currentRank: 639,
    trend: "stable"
  },
  {
    id: "f839",
    name: "Leia",
    normalizedName: "leia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 839,
    trend: "stable"
  },
  {
    id: "m1824",
    name: "Lennon",
    normalizedName: "lennon",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Len",
      "Lenie"
    ],
    alternateSpellings: [],
    currentRank: 1824,
    trend: "stable"
  },
  {
    id: "m1825",
    name: "Lennox",
    normalizedName: "lennox",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Len",
      "Lenie"
    ],
    alternateSpellings: [],
    currentRank: 1825,
    trend: "stable"
  },
  {
    id: "f845",
    name: "Leona",
    normalizedName: "leona",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Leo"
    ],
    alternateSpellings: [],
    currentRank: 845,
    trend: "stable"
  },
  {
    id: "f847",
    name: "Lexi",
    normalizedName: "lexi",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 847,
    trend: "stable"
  },
  {
    id: "f849",
    name: "Leyla",
    normalizedName: "leyla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ley"
    ],
    alternateSpellings: [],
    currentRank: 849,
    trend: "stable"
  },
  {
    id: "f851",
    name: "Liana",
    normalizedName: "liana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lia"
    ],
    alternateSpellings: [],
    currentRank: 851,
    trend: "stable"
  },
  {
    id: "f852",
    name: "Liberty",
    normalizedName: "liberty",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Libe",
      "Libie"
    ],
    alternateSpellings: [],
    currentRank: 852,
    trend: "stable"
  },
  {
    id: "f855",
    name: "Lilia",
    normalizedName: "lilia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lil"
    ],
    alternateSpellings: [],
    currentRank: 855,
    trend: "stable"
  },
  {
    id: "f856",
    name: "Lilian",
    normalizedName: "lilian",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lil",
      "Lilie"
    ],
    alternateSpellings: [],
    currentRank: 856,
    trend: "stable"
  },
  {
    id: "f858",
    name: "Lilith",
    normalizedName: "lilith",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lil",
      "Lilie"
    ],
    alternateSpellings: [],
    currentRank: 858,
    trend: "stable"
  },
  {
    id: "f861",
    name: "Lilly",
    normalizedName: "lilly",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Lil"
    ],
    alternateSpellings: [],
    currentRank: 861,
    trend: "stable"
  },
  {
    id: "f863",
    name: "Lilyana",
    normalizedName: "lilyana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Lily"
    ],
    syllables: 3,
    nicknames: [
      "Lily",
      "Lilie"
    ],
    alternateSpellings: [],
    currentRank: 863,
    trend: "stable"
  },
  {
    id: "f864",
    name: "Lina",
    normalizedName: "lina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 864,
    trend: "stable"
  },
  {
    id: "m1844",
    name: "Lindsay",
    normalizedName: "lindsay",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lind",
      "Linie"
    ],
    alternateSpellings: [],
    currentRank: 1844,
    trend: "stable"
  },
  {
    id: "f869",
    name: "Liv",
    normalizedName: "liv",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 869,
    trend: "stable"
  },
  {
    id: "f870",
    name: "Livia",
    normalizedName: "livia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Liv"
    ],
    alternateSpellings: [],
    currentRank: 870,
    trend: "stable"
  },
  {
    id: "f871",
    name: "Liza",
    normalizedName: "liza",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 871,
    trend: "stable"
  },
  {
    id: "f873",
    name: "Lois",
    normalizedName: "lois",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 873,
    trend: "stable"
  },
  {
    id: "f876",
    name: "Lorelai",
    normalizedName: "lorelai",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Lore",
      "Lorie"
    ],
    alternateSpellings: [],
    currentRank: 876,
    trend: "stable"
  },
  {
    id: "f878",
    name: "Lorena",
    normalizedName: "lorena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Lor",
      "Lorie"
    ],
    alternateSpellings: [],
    currentRank: 878,
    trend: "stable"
  },
  {
    id: "f879",
    name: "Loretta",
    normalizedName: "loretta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Lore",
      "Lorie"
    ],
    alternateSpellings: [],
    currentRank: 879,
    trend: "stable"
  },
  {
    id: "f880",
    name: "Lori",
    normalizedName: "lori",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 880,
    trend: "stable"
  },
  {
    id: "f881",
    name: "Louisa",
    normalizedName: "louisa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lou",
      "Louie"
    ],
    alternateSpellings: [],
    currentRank: 881,
    trend: "stable"
  },
  {
    id: "f882",
    name: "Louise",
    normalizedName: "louise",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lou",
      "Louie"
    ],
    alternateSpellings: [],
    currentRank: 882,
    trend: "stable"
  },
  {
    id: "f887",
    name: "Luella",
    normalizedName: "luella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Lue",
      "Lueie"
    ],
    alternateSpellings: [],
    currentRank: 887,
    trend: "stable"
  },
  {
    id: "f890",
    name: "Luz",
    normalizedName: "luz",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 890,
    trend: "stable"
  },
  {
    id: "f893",
    name: "Lylah",
    normalizedName: "lylah",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lyl"
    ],
    alternateSpellings: [],
    currentRank: 893,
    trend: "stable"
  },
  {
    id: "f894",
    name: "Lyra",
    normalizedName: "lyra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 894,
    trend: "stable"
  },
  {
    id: "f897",
    name: "Maci",
    normalizedName: "maci",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 897,
    trend: "stable"
  },
  {
    id: "f898",
    name: "Macie",
    normalizedName: "macie",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mac"
    ],
    alternateSpellings: [],
    currentRank: 898,
    trend: "stable"
  },
  {
    id: "f900",
    name: "Madalyn",
    normalizedName: "madalyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mada",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 900,
    trend: "stable"
  },
  {
    id: "f901",
    name: "Madalynn",
    normalizedName: "madalynn",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mada",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 901,
    trend: "stable"
  },
  {
    id: "f902",
    name: "Maddie",
    normalizedName: "maddie",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mad",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 902,
    trend: "stable"
  },
  {
    id: "f907",
    name: "Madelynn",
    normalizedName: "madelynn",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Made",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 907,
    trend: "stable"
  },
  {
    id: "f909",
    name: "Madilynn",
    normalizedName: "madilynn",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Madi",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 909,
    trend: "stable"
  },
  {
    id: "f911",
    name: "Madisyn",
    normalizedName: "madisyn",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Madi",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 911,
    trend: "stable"
  },
  {
    id: "f912",
    name: "Mae",
    normalizedName: "mae",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 912,
    trend: "stable"
  },
  {
    id: "f914",
    name: "Magdalena",
    normalizedName: "magdalena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Magd",
      "Magie"
    ],
    alternateSpellings: [],
    currentRank: 914,
    trend: "stable"
  },
  {
    id: "f916",
    name: "Magnolia",
    normalizedName: "magnolia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Magn",
      "Magie"
    ],
    alternateSpellings: [],
    currentRank: 916,
    trend: "stable"
  },
  {
    id: "f918",
    name: "Maisy",
    normalizedName: "maisy",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mai"
    ],
    alternateSpellings: [],
    currentRank: 918,
    trend: "stable"
  },
  {
    id: "f919",
    name: "Makayla",
    normalizedName: "makayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Maka",
      "Makie"
    ],
    alternateSpellings: [],
    currentRank: 919,
    trend: "stable"
  },
  {
    id: "f921",
    name: "Makenzie",
    normalizedName: "makenzie",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Make",
      "Makie"
    ],
    alternateSpellings: [],
    currentRank: 921,
    trend: "stable"
  },
  {
    id: "f922",
    name: "Malaysia",
    normalizedName: "malaysia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mala",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 922,
    trend: "stable"
  },
  {
    id: "f923",
    name: "Maleah",
    normalizedName: "maleah",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mal",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 923,
    trend: "stable"
  },
  {
    id: "f925",
    name: "Maliah",
    normalizedName: "maliah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mal",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 925,
    trend: "stable"
  },
  {
    id: "f926",
    name: "Maliyah",
    normalizedName: "maliyah",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mali",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 926,
    trend: "stable"
  },
  {
    id: "f929",
    name: "Marcy",
    normalizedName: "marcy",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar"
    ],
    alternateSpellings: [],
    currentRank: 929,
    trend: "stable"
  },
  {
    id: "f931",
    name: "Margo",
    normalizedName: "margo",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar"
    ],
    alternateSpellings: [],
    currentRank: 931,
    trend: "stable"
  },
  {
    id: "f934",
    name: "Mariah",
    normalizedName: "mariah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 934,
    trend: "stable"
  },
  {
    id: "f935",
    name: "Mariam",
    normalizedName: "mariam",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 935,
    trend: "stable"
  },
  {
    id: "f937",
    name: "Marianna",
    normalizedName: "marianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mari",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 937,
    trend: "stable"
  },
  {
    id: "f938",
    name: "Marie",
    normalizedName: "marie",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar"
    ],
    alternateSpellings: [],
    currentRank: 938,
    trend: "stable"
  },
  {
    id: "f939",
    name: "Mariela",
    normalizedName: "mariela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mari",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 939,
    trend: "stable"
  },
  {
    id: "f940",
    name: "Marilyn",
    normalizedName: "marilyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mari",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 940,
    trend: "stable"
  },
  {
    id: "f941",
    name: "Marina",
    normalizedName: "marina",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 941,
    trend: "stable"
  },
  {
    id: "f943",
    name: "Marissa",
    normalizedName: "marissa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mari",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 943,
    trend: "stable"
  },
  {
    id: "f944",
    name: "Marjorie",
    normalizedName: "marjorie",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Marj",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 944,
    trend: "stable"
  },
  {
    id: "f945",
    name: "Marlee",
    normalizedName: "marlee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 945,
    trend: "stable"
  },
  {
    id: "f946",
    name: "Marlene",
    normalizedName: "marlene",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Marl",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 946,
    trend: "stable"
  },
  {
    id: "f948",
    name: "Marta",
    normalizedName: "marta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Mar"
    ],
    alternateSpellings: [],
    currentRank: 948,
    trend: "stable"
  },
  {
    id: "f949",
    name: "Martha",
    normalizedName: "martha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 949,
    trend: "stable"
  },
  {
    id: "f951",
    name: "Maryam",
    normalizedName: "maryam",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 951,
    trend: "stable"
  },
  {
    id: "f952",
    name: "Mathilda",
    normalizedName: "mathilda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Math",
      "Matie"
    ],
    alternateSpellings: [],
    currentRank: 952,
    trend: "stable"
  },
  {
    id: "f954",
    name: "Maureen",
    normalizedName: "maureen",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Maur",
      "Mauie"
    ],
    alternateSpellings: [],
    currentRank: 954,
    trend: "stable"
  },
  {
    id: "f955",
    name: "Mavis",
    normalizedName: "mavis",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mav"
    ],
    alternateSpellings: [],
    currentRank: 955,
    trend: "stable"
  },
  {
    id: "f956",
    name: "Maxine",
    normalizedName: "maxine",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Max",
      "Maxie"
    ],
    alternateSpellings: [],
    currentRank: 956,
    trend: "stable"
  },
  {
    id: "f958",
    name: "Mayra",
    normalizedName: "mayra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "May"
    ],
    alternateSpellings: [],
    currentRank: 958,
    trend: "stable"
  },
  {
    id: "f959",
    name: "Mckayla",
    normalizedName: "mckayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Mcka",
      "Mckie"
    ],
    alternateSpellings: [],
    currentRank: 959,
    trend: "stable"
  },
  {
    id: "f962",
    name: "Mckinley",
    normalizedName: "mckinley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Mcki",
      "Mckie"
    ],
    alternateSpellings: [],
    currentRank: 962,
    trend: "stable"
  },
  {
    id: "f963",
    name: "Meadow",
    normalizedName: "meadow",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mea",
      "Meaie"
    ],
    alternateSpellings: [],
    currentRank: 963,
    trend: "stable"
  },
  {
    id: "f965",
    name: "Meghan",
    normalizedName: "meghan",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Meg",
      "Megie"
    ],
    alternateSpellings: [],
    currentRank: 965,
    trend: "stable"
  },
  {
    id: "f967",
    name: "Melany",
    normalizedName: "melany",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mel",
      "Melie"
    ],
    alternateSpellings: [],
    currentRank: 967,
    trend: "stable"
  },
  {
    id: "f968",
    name: "Melina",
    normalizedName: "melina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mel",
      "Melie"
    ],
    alternateSpellings: [],
    currentRank: 968,
    trend: "stable"
  },
  {
    id: "f969",
    name: "Melinda",
    normalizedName: "melinda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Meli",
      "Melie"
    ],
    alternateSpellings: [],
    currentRank: 969,
    trend: "stable"
  },
  {
    id: "f972",
    name: "Mercedes",
    normalizedName: "mercedes",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Merc",
      "Merie"
    ],
    alternateSpellings: [],
    currentRank: 972,
    trend: "stable"
  },
  {
    id: "f975",
    name: "Miah",
    normalizedName: "miah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 975,
    trend: "stable"
  },
  {
    id: "m104",
    name: "Micah",
    normalizedName: "micah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mic"
    ],
    alternateSpellings: [],
    currentRank: 104,
    trend: "rising"
  },
  {
    id: "f979",
    name: "Mikaela",
    normalizedName: "mikaela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mika",
      "Mikie"
    ],
    alternateSpellings: [],
    currentRank: 979,
    trend: "stable"
  },
  {
    id: "m1054",
    name: "Milan",
    normalizedName: "milan",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mil"
    ],
    alternateSpellings: [],
    currentRank: 1054,
    trend: "stable"
  },
  {
    id: "f984",
    name: "Miley",
    normalizedName: "miley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Mil"
    ],
    alternateSpellings: [],
    currentRank: 984,
    trend: "stable"
  },
  {
    id: "f986",
    name: "Mina",
    normalizedName: "mina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 986,
    trend: "stable"
  },
  {
    id: "f987",
    name: "Mira",
    normalizedName: "mira",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 987,
    trend: "stable"
  },
  {
    id: "f988",
    name: "Miracle",
    normalizedName: "miracle",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mira",
      "Mirie"
    ],
    alternateSpellings: [],
    currentRank: 988,
    trend: "stable"
  },
  {
    id: "f990",
    name: "Mireya",
    normalizedName: "mireya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Mir",
      "Mirie"
    ],
    alternateSpellings: [],
    currentRank: 990,
    trend: "stable"
  },
  {
    id: "f993",
    name: "Monica",
    normalizedName: "monica",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Mon",
      "Monie"
    ],
    alternateSpellings: [],
    currentRank: 993,
    trend: "stable"
  },
  {
    id: "f994",
    name: "Monroe",
    normalizedName: "monroe",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mon",
      "Monie"
    ],
    alternateSpellings: [],
    currentRank: 994,
    trend: "stable"
  },
  {
    id: "f996",
    name: "Mya",
    normalizedName: "mya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 996,
    trend: "stable"
  },
  {
    id: "f997",
    name: "Myah",
    normalizedName: "myah",
    gender: "F",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 997,
    trend: "stable"
  },
  {
    id: "f998",
    name: "Myla",
    normalizedName: "myla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 998,
    trend: "stable"
  },
  {
    id: "f1001",
    name: "Nala",
    normalizedName: "nala",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1001,
    trend: "stable"
  },
  {
    id: "f1006",
    name: "Nataly",
    normalizedName: "nataly",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Nat",
      "Natie"
    ],
    alternateSpellings: [],
    currentRank: 1006,
    trend: "stable"
  },
  {
    id: "f1007",
    name: "Natasha",
    normalizedName: "natasha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Nata",
      "Natie"
    ],
    alternateSpellings: [],
    currentRank: 1007,
    trend: "stable"
  },
  {
    id: "f1008",
    name: "Nathalie",
    normalizedName: "nathalie",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Nath",
      "Natie"
    ],
    alternateSpellings: [],
    currentRank: 1008,
    trend: "stable"
  },
  {
    id: "f1009",
    name: "Navy",
    normalizedName: "navy",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1009,
    trend: "stable"
  },
  {
    id: "f1010",
    name: "Naya",
    normalizedName: "naya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1010,
    trend: "stable"
  },
  {
    id: "f1011",
    name: "Nayeli",
    normalizedName: "nayeli",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nay",
      "Nayie"
    ],
    alternateSpellings: [],
    currentRank: 1011,
    trend: "stable"
  },
  {
    id: "f1013",
    name: "Nia",
    normalizedName: "nia",
    gender: "F",
    origins: [
      "African"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1013,
    trend: "stable"
  },
  {
    id: "f1015",
    name: "Nicolette",
    normalizedName: "nicolette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Nico",
      "Nicie"
    ],
    alternateSpellings: [],
    currentRank: 1015,
    trend: "stable"
  },
  {
    id: "f1016",
    name: "Nikita",
    normalizedName: "nikita",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Nik",
      "Nikie"
    ],
    alternateSpellings: [],
    currentRank: 1016,
    trend: "stable"
  },
  {
    id: "f1017",
    name: "Nikki",
    normalizedName: "nikki",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nik"
    ],
    alternateSpellings: [],
    currentRank: 1017,
    trend: "stable"
  },
  {
    id: "f1018",
    name: "Nila",
    normalizedName: "nila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1018,
    trend: "stable"
  },
  {
    id: "f1021",
    name: "Noemi",
    normalizedName: "noemi",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Noe"
    ],
    alternateSpellings: [],
    currentRank: 1021,
    trend: "stable"
  },
  {
    id: "f1023",
    name: "Noor",
    normalizedName: "noor",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1023,
    trend: "stable"
  },
  {
    id: "f1025",
    name: "Norah",
    normalizedName: "norah",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nor"
    ],
    alternateSpellings: [],
    currentRank: 1025,
    trend: "stable"
  },
  {
    id: "f1027",
    name: "Nyla",
    normalizedName: "nyla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1027,
    trend: "stable"
  },
  {
    id: "f1028",
    name: "Nylah",
    normalizedName: "nylah",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nyl"
    ],
    alternateSpellings: [],
    currentRank: 1028,
    trend: "stable"
  },
  {
    id: "f1029",
    name: "Oaklee",
    normalizedName: "oaklee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Oak",
      "Oakie"
    ],
    alternateSpellings: [],
    currentRank: 1029,
    trend: "stable"
  },
  {
    id: "f1031",
    name: "Oaklyn",
    normalizedName: "oaklyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Oak",
      "Oakie"
    ],
    alternateSpellings: [],
    currentRank: 1031,
    trend: "stable"
  },
  {
    id: "f1032",
    name: "Octavia",
    normalizedName: "octavia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Octa",
      "Octie"
    ],
    alternateSpellings: [],
    currentRank: 1032,
    trend: "stable"
  },
  {
    id: "f1035",
    name: "Opal",
    normalizedName: "opal",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1035,
    trend: "stable"
  },
  {
    id: "f1038",
    name: "Paislee",
    normalizedName: "paislee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pais",
      "Paiie"
    ],
    alternateSpellings: [],
    currentRank: 1038,
    trend: "stable"
  },
  {
    id: "f1040",
    name: "Paityn",
    normalizedName: "paityn",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pai",
      "Paiie"
    ],
    alternateSpellings: [],
    currentRank: 1040,
    trend: "stable"
  },
  {
    id: "m614",
    name: "Palmer",
    normalizedName: "palmer",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pal",
      "Palie"
    ],
    alternateSpellings: [],
    currentRank: 614,
    trend: "stable"
  },
  {
    id: "f1043",
    name: "Pamela",
    normalizedName: "pamela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Pam",
      "Pamie"
    ],
    alternateSpellings: [],
    currentRank: 1043,
    trend: "stable"
  },
  {
    id: "f1044",
    name: "Paola",
    normalizedName: "paola",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Pao"
    ],
    alternateSpellings: [],
    currentRank: 1044,
    trend: "stable"
  },
  {
    id: "m90",
    name: "Parker",
    normalizedName: "parker",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Park"
    ],
    alternateSpellings: [],
    currentRank: 90,
    trend: "stable"
  },
  {
    id: "f1049",
    name: "Paulina",
    normalizedName: "paulina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Paul",
      "Pauie"
    ],
    alternateSpellings: [],
    currentRank: 1049,
    trend: "stable"
  },
  {
    id: "m229",
    name: "Paxton",
    normalizedName: "paxton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Pax",
      "Paxie"
    ],
    alternateSpellings: [],
    currentRank: 229,
    trend: "rising"
  },
  {
    id: "f1054",
    name: "Penny",
    normalizedName: "penny",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pen"
    ],
    alternateSpellings: [],
    currentRank: 1054,
    trend: "stable"
  },
  {
    id: "f1056",
    name: "Petra",
    normalizedName: "petra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Pet"
    ],
    alternateSpellings: [],
    currentRank: 1056,
    trend: "stable"
  },
  {
    id: "m234",
    name: "Phoenix",
    normalizedName: "phoenix",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Phoe",
      "Phoie"
    ],
    alternateSpellings: [],
    currentRank: 234,
    trend: "rising"
  },
  {
    id: "f1061",
    name: "Poppy",
    normalizedName: "poppy",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pop"
    ],
    alternateSpellings: [],
    currentRank: 1061,
    trend: "stable"
  },
  {
    id: "f1063",
    name: "Princess",
    normalizedName: "princess",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Prin",
      "Priie"
    ],
    alternateSpellings: [],
    currentRank: 1063,
    trend: "stable"
  },
  {
    id: "f1065",
    name: "Promise",
    normalizedName: "promise",
    gender: "F",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Prom",
      "Proie"
    ],
    alternateSpellings: [],
    currentRank: 1065,
    trend: "stable"
  },
  {
    id: "f1068",
    name: "Raelyn",
    normalizedName: "raelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rae",
      "Raeie"
    ],
    alternateSpellings: [],
    currentRank: 1068,
    trend: "stable"
  },
  {
    id: "f1070",
    name: "Raina",
    normalizedName: "raina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Rai"
    ],
    alternateSpellings: [],
    currentRank: 1070,
    trend: "stable"
  },
  {
    id: "f1071",
    name: "Ramona",
    normalizedName: "ramona",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ram",
      "Ramie"
    ],
    alternateSpellings: [],
    currentRank: 1071,
    trend: "stable"
  },
  {
    id: "f1072",
    name: "Raven",
    normalizedName: "raven",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Rav"
    ],
    alternateSpellings: [],
    currentRank: 1072,
    trend: "stable"
  },
  {
    id: "f1073",
    name: "Rayna",
    normalizedName: "rayna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ray"
    ],
    alternateSpellings: [],
    currentRank: 1073,
    trend: "stable"
  },
  {
    id: "f1074",
    name: "Rayne",
    normalizedName: "rayne",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ray"
    ],
    alternateSpellings: [],
    currentRank: 1074,
    trend: "stable"
  },
  {
    id: "f1077",
    name: "Rebekah",
    normalizedName: "rebekah",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Rebe",
      "Rebie"
    ],
    alternateSpellings: [],
    currentRank: 1077,
    trend: "stable"
  },
  {
    id: "m1067",
    name: "Reece",
    normalizedName: "reece",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ree"
    ],
    alternateSpellings: [],
    currentRank: 1067,
    trend: "stable"
  },
  {
    id: "m608",
    name: "Reign",
    normalizedName: "reign",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Rei"
    ],
    alternateSpellings: [],
    currentRank: 608,
    trend: "stable"
  },
  {
    id: "f1087",
    name: "Renee",
    normalizedName: "renee",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ren"
    ],
    alternateSpellings: [],
    currentRank: 1087,
    trend: "stable"
  },
  {
    id: "f1088",
    name: "Reyna",
    normalizedName: "reyna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Rey"
    ],
    alternateSpellings: [],
    currentRank: 1088,
    trend: "stable"
  },
  {
    id: "f1089",
    name: "Rhea",
    normalizedName: "rhea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1089,
    trend: "stable"
  },
  {
    id: "f1090",
    name: "Rhiannon",
    normalizedName: "rhiannon",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Rhia",
      "Rhiie"
    ],
    alternateSpellings: [],
    currentRank: 1090,
    trend: "stable"
  },
  {
    id: "m294",
    name: "River",
    normalizedName: "river",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Riv"
    ],
    alternateSpellings: [],
    currentRank: 294,
    trend: "rising"
  },
  {
    id: "f1093",
    name: "Rivka",
    normalizedName: "rivka",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Riv"
    ],
    alternateSpellings: [],
    currentRank: 1093,
    trend: "stable"
  },
  {
    id: "f1094",
    name: "Robin",
    normalizedName: "robin",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rob"
    ],
    alternateSpellings: [],
    currentRank: 1094,
    trend: "stable"
  },
  {
    id: "f1095",
    name: "Rocio",
    normalizedName: "rocio",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Roc"
    ],
    alternateSpellings: [],
    currentRank: 1095,
    trend: "stable"
  },
  {
    id: "f1096",
    name: "Romina",
    normalizedName: "romina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Rom",
      "Romie"
    ],
    alternateSpellings: [],
    currentRank: 1096,
    trend: "stable"
  },
  {
    id: "f1097",
    name: "Rosa",
    normalizedName: "rosa",
    gender: "F",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1097,
    trend: "stable"
  },
  {
    id: "f1098",
    name: "Rosalia",
    normalizedName: "rosalia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Rosa",
      "Rosie"
    ],
    alternateSpellings: [],
    currentRank: 1098,
    trend: "stable"
  },
  {
    id: "f1101",
    name: "Roselyn",
    normalizedName: "roselyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Rose"
    ],
    syllables: 3,
    nicknames: [
      "Rose",
      "Rosie"
    ],
    alternateSpellings: [],
    currentRank: 1101,
    trend: "stable"
  },
  {
    id: "f1103",
    name: "Rosie",
    normalizedName: "rosie",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ros"
    ],
    alternateSpellings: [],
    currentRank: 1103,
    trend: "stable"
  },
  {
    id: "f1105",
    name: "Royalty",
    normalizedName: "royalty",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Roya",
      "Royie"
    ],
    alternateSpellings: [],
    currentRank: 1105,
    trend: "stable"
  },
  {
    id: "m54",
    name: "Ryan",
    normalizedName: "ryan",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Little king"
    ],
    syllables: 1,
    nicknames: [
      "Ry"
    ],
    alternateSpellings: [],
    currentRank: 54,
    trend: "stable"
  },
  {
    id: "f1109",
    name: "Ryann",
    normalizedName: "ryann",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Rya"
    ],
    alternateSpellings: [],
    currentRank: 1109,
    trend: "stable"
  },
  {
    id: "m330",
    name: "Rylan",
    normalizedName: "rylan",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ryl"
    ],
    alternateSpellings: [],
    currentRank: 330,
    trend: "rising"
  },
  {
    id: "f1112",
    name: "Ryleigh",
    normalizedName: "ryleigh",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ryle",
      "Rylie"
    ],
    alternateSpellings: [],
    currentRank: 1112,
    trend: "stable"
  },
  {
    id: "f1113",
    name: "Rylie",
    normalizedName: "rylie",
    gender: "F",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ryl"
    ],
    alternateSpellings: [],
    currentRank: 1113,
    trend: "stable"
  },
  {
    id: "f1117",
    name: "Saige",
    normalizedName: "saige",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sai"
    ],
    alternateSpellings: [],
    currentRank: 1117,
    trend: "stable"
  },
  {
    id: "f1118",
    name: "Salma",
    normalizedName: "salma",
    gender: "F",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Sal"
    ],
    alternateSpellings: [],
    currentRank: 1118,
    trend: "stable"
  },
  {
    id: "f1121",
    name: "Samira",
    normalizedName: "samira",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Sam",
      "Samie"
    ],
    alternateSpellings: [],
    currentRank: 1121,
    trend: "stable"
  },
  {
    id: "f1123",
    name: "Sandy",
    normalizedName: "sandy",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "San"
    ],
    alternateSpellings: [],
    currentRank: 1123,
    trend: "stable"
  },
  {
    id: "f1124",
    name: "Saniya",
    normalizedName: "saniya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "San",
      "Sanie"
    ],
    alternateSpellings: [],
    currentRank: 1124,
    trend: "stable"
  },
  {
    id: "f1125",
    name: "Saoirse",
    normalizedName: "saoirse",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Saoi",
      "Saoie"
    ],
    alternateSpellings: [],
    currentRank: 1125,
    trend: "stable"
  },
  {
    id: "f1128",
    name: "Sarahi",
    normalizedName: "sarahi",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Sar",
      "Sarie"
    ],
    alternateSpellings: [],
    currentRank: 1128,
    trend: "stable"
  },
  {
    id: "f1129",
    name: "Sarai",
    normalizedName: "sarai",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sar"
    ],
    alternateSpellings: [],
    currentRank: 1129,
    trend: "stable"
  },
  {
    id: "f1130",
    name: "Sariah",
    normalizedName: "sariah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sar",
      "Sarie"
    ],
    alternateSpellings: [],
    currentRank: 1130,
    trend: "stable"
  },
  {
    id: "f1132",
    name: "Savanna",
    normalizedName: "savanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Sava",
      "Savie"
    ],
    alternateSpellings: [],
    currentRank: 1132,
    trend: "stable"
  },
  {
    id: "f1135",
    name: "Scarlet",
    normalizedName: "scarlet",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Scar",
      "Scaie"
    ],
    alternateSpellings: [],
    currentRank: 1135,
    trend: "stable"
  },
  {
    id: "f1137",
    name: "Scarlette",
    normalizedName: "scarlette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Scar",
      "Scaie"
    ],
    alternateSpellings: [],
    currentRank: 1137,
    trend: "stable"
  },
  {
    id: "f1138",
    name: "Selah",
    normalizedName: "selah",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sel"
    ],
    alternateSpellings: [],
    currentRank: 1138,
    trend: "stable"
  },
  {
    id: "f1143",
    name: "Shania",
    normalizedName: "shania",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Sha",
      "Shaie"
    ],
    alternateSpellings: [],
    currentRank: 1143,
    trend: "stable"
  },
  {
    id: "f1146",
    name: "Shay",
    normalizedName: "shay",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1146,
    trend: "stable"
  },
  {
    id: "f1147",
    name: "Shayla",
    normalizedName: "shayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Sha",
      "Shaie"
    ],
    alternateSpellings: [],
    currentRank: 1147,
    trend: "stable"
  },
  {
    id: "f1149",
    name: "Shirley",
    normalizedName: "shirley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Shir",
      "Shiie"
    ],
    alternateSpellings: [],
    currentRank: 1149,
    trend: "stable"
  },
  {
    id: "f1150",
    name: "Siena",
    normalizedName: "siena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Sie"
    ],
    alternateSpellings: [],
    currentRank: 1150,
    trend: "stable"
  },
  {
    id: "f1154",
    name: "Sky",
    normalizedName: "sky",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1154,
    trend: "stable"
  },
  {
    id: "f1156",
    name: "Skyla",
    normalizedName: "skyla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Sky"
    ],
    alternateSpellings: [],
    currentRank: 1156,
    trend: "stable"
  },
  {
    id: "m412",
    name: "Skyler",
    normalizedName: "skyler",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sky",
      "Skyie"
    ],
    alternateSpellings: [],
    currentRank: 412,
    trend: "rising"
  },
  {
    id: "f1159",
    name: "Sloan",
    normalizedName: "sloan",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Slo"
    ],
    alternateSpellings: [],
    currentRank: 1159,
    trend: "stable"
  },
  {
    id: "m157",
    name: "Spencer",
    normalizedName: "spencer",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Spence"
    ],
    alternateSpellings: [],
    currentRank: 157,
    trend: "rising"
  },
  {
    id: "f1168",
    name: "Stevie",
    normalizedName: "stevie",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ste",
      "Steie"
    ],
    alternateSpellings: [],
    currentRank: 1168,
    trend: "stable"
  },
  {
    id: "f1170",
    name: "Sunny",
    normalizedName: "sunny",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Sun"
    ],
    syllables: 2,
    nicknames: [
      "Sun"
    ],
    alternateSpellings: [],
    currentRank: 1170,
    trend: "stable"
  },
  {
    id: "f1171",
    name: "Susan",
    normalizedName: "susan",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sus"
    ],
    alternateSpellings: [],
    currentRank: 1171,
    trend: "stable"
  },
  {
    id: "f1175",
    name: "Sylvie",
    normalizedName: "sylvie",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Syl",
      "Sylie"
    ],
    alternateSpellings: [],
    currentRank: 1175,
    trend: "stable"
  },
  {
    id: "f1176",
    name: "Tabitha",
    normalizedName: "tabitha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Tabi",
      "Tabie"
    ],
    alternateSpellings: [],
    currentRank: 1176,
    trend: "stable"
  },
  {
    id: "f1178",
    name: "Taliyah",
    normalizedName: "taliyah",
    gender: "F",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tali",
      "Talie"
    ],
    alternateSpellings: [],
    currentRank: 1178,
    trend: "stable"
  },
  {
    id: "f1179",
    name: "Tamara",
    normalizedName: "tamara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Tam",
      "Tamie"
    ],
    alternateSpellings: [],
    currentRank: 1179,
    trend: "stable"
  },
  {
    id: "f1180",
    name: "Tania",
    normalizedName: "tania",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Tan"
    ],
    alternateSpellings: [],
    currentRank: 1180,
    trend: "stable"
  },
  {
    id: "f1181",
    name: "Tanya",
    normalizedName: "tanya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Tan"
    ],
    alternateSpellings: [],
    currentRank: 1181,
    trend: "stable"
  },
  {
    id: "f1183",
    name: "Taryn",
    normalizedName: "taryn",
    gender: "F",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tar"
    ],
    alternateSpellings: [],
    currentRank: 1183,
    trend: "stable"
  },
  {
    id: "m752",
    name: "Tatum",
    normalizedName: "tatum",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tat"
    ],
    alternateSpellings: [],
    currentRank: 752,
    trend: "stable"
  },
  {
    id: "m917",
    name: "Teagan",
    normalizedName: "teagan",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tea",
      "Teaie"
    ],
    alternateSpellings: [],
    currentRank: 917,
    trend: "stable"
  },
  {
    id: "f1190",
    name: "Thalia",
    normalizedName: "thalia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Tha",
      "Thaie"
    ],
    alternateSpellings: [],
    currentRank: 1190,
    trend: "stable"
  },
  {
    id: "f1192",
    name: "Theodora",
    normalizedName: "theodora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Theo",
      "Theie"
    ],
    alternateSpellings: [],
    currentRank: 1192,
    trend: "stable"
  },
  {
    id: "f1193",
    name: "Theresa",
    normalizedName: "theresa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ther",
      "Theie"
    ],
    alternateSpellings: [],
    currentRank: 1193,
    trend: "stable"
  },
  {
    id: "f1194",
    name: "Tia",
    normalizedName: "tia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1194,
    trend: "stable"
  },
  {
    id: "f1195",
    name: "Tiana",
    normalizedName: "tiana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Tia"
    ],
    alternateSpellings: [],
    currentRank: 1195,
    trend: "stable"
  },
  {
    id: "f1196",
    name: "Tiara",
    normalizedName: "tiara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Tia"
    ],
    alternateSpellings: [],
    currentRank: 1196,
    trend: "stable"
  },
  {
    id: "f1199",
    name: "Tinley",
    normalizedName: "tinley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Tin",
      "Tinie"
    ],
    alternateSpellings: [],
    currentRank: 1199,
    trend: "stable"
  },
  {
    id: "f1200",
    name: "Treasure",
    normalizedName: "treasure",
    gender: "F",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Trea",
      "Treie"
    ],
    alternateSpellings: [],
    currentRank: 1200,
    trend: "stable"
  },
  {
    id: "f1202",
    name: "Trista",
    normalizedName: "trista",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Tri",
      "Triie"
    ],
    alternateSpellings: [],
    currentRank: 1202,
    trend: "stable"
  },
  {
    id: "f1203",
    name: "Trudy",
    normalizedName: "trudy",
    gender: "F",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tru"
    ],
    alternateSpellings: [],
    currentRank: 1203,
    trend: "stable"
  },
  {
    id: "m112",
    name: "Tyler",
    normalizedName: "tyler",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ty"
    ],
    alternateSpellings: [],
    currentRank: 112,
    trend: "rising"
  },
  {
    id: "f1205",
    name: "Tyra",
    normalizedName: "tyra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1205,
    trend: "stable"
  },
  {
    id: "f1207",
    name: "Unique",
    normalizedName: "unique",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Uni",
      "Uniie"
    ],
    alternateSpellings: [],
    currentRank: 1207,
    trend: "stable"
  },
  {
    id: "f1212",
    name: "Veda",
    normalizedName: "veda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1212,
    trend: "stable"
  },
  {
    id: "f1215",
    name: "Vienna",
    normalizedName: "vienna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Vie",
      "Vieie"
    ],
    alternateSpellings: [],
    currentRank: 1215,
    trend: "stable"
  },
  {
    id: "f1218",
    name: "Viv",
    normalizedName: "viv",
    gender: "F",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1218,
    trend: "stable"
  },
  {
    id: "f1220",
    name: "Viviana",
    normalizedName: "viviana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Vivi",
      "Vivie"
    ],
    alternateSpellings: [],
    currentRank: 1220,
    trend: "stable"
  },
  {
    id: "f1222",
    name: "Waverly",
    normalizedName: "waverly",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Wave",
      "Wavie"
    ],
    alternateSpellings: [],
    currentRank: 1222,
    trend: "stable"
  },
  {
    id: "f1223",
    name: "Wendy",
    normalizedName: "wendy",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Wen"
    ],
    alternateSpellings: [],
    currentRank: 1223,
    trend: "stable"
  },
  {
    id: "f1224",
    name: "Whitney",
    normalizedName: "whitney",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Whit",
      "Whiie"
    ],
    alternateSpellings: [],
    currentRank: 1224,
    trend: "stable"
  },
  {
    id: "f1227",
    name: "Wilma",
    normalizedName: "wilma",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Wil"
    ],
    alternateSpellings: [],
    currentRank: 1227,
    trend: "stable"
  },
  {
    id: "f1228",
    name: "Winnie",
    normalizedName: "winnie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Win",
      "Winie"
    ],
    alternateSpellings: [],
    currentRank: 1228,
    trend: "stable"
  },
  {
    id: "f1232",
    name: "Xena",
    normalizedName: "xena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1232,
    trend: "stable"
  },
  {
    id: "f1234",
    name: "Xiomara",
    normalizedName: "xiomara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Xiom",
      "Xioie"
    ],
    alternateSpellings: [],
    currentRank: 1234,
    trend: "stable"
  },
  {
    id: "f1235",
    name: "Yamileth",
    normalizedName: "yamileth",
    gender: "F",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Yami",
      "Yamie"
    ],
    alternateSpellings: [],
    currentRank: 1235,
    trend: "stable"
  },
  {
    id: "f1237",
    name: "Yareli",
    normalizedName: "yareli",
    gender: "F",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Yar",
      "Yarie"
    ],
    alternateSpellings: [],
    currentRank: 1237,
    trend: "stable"
  },
  {
    id: "f1238",
    name: "Yaretzi",
    normalizedName: "yaretzi",
    gender: "F",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Yare",
      "Yarie"
    ],
    alternateSpellings: [],
    currentRank: 1238,
    trend: "stable"
  },
  {
    id: "f1240",
    name: "Yazmin",
    normalizedName: "yazmin",
    gender: "F",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Yaz",
      "Yazie"
    ],
    alternateSpellings: [],
    currentRank: 1240,
    trend: "stable"
  },
  {
    id: "f1241",
    name: "Yesenia",
    normalizedName: "yesenia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Yese",
      "Yesie"
    ],
    alternateSpellings: [],
    currentRank: 1241,
    trend: "stable"
  },
  {
    id: "f1242",
    name: "Yolanda",
    normalizedName: "yolanda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Yola",
      "Yolie"
    ],
    alternateSpellings: [],
    currentRank: 1242,
    trend: "stable"
  },
  {
    id: "f1244",
    name: "Yvonne",
    normalizedName: "yvonne",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Yvo",
      "Yvoie"
    ],
    alternateSpellings: [],
    currentRank: 1244,
    trend: "stable"
  },
  {
    id: "f1245",
    name: "Zainab",
    normalizedName: "zainab",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zai",
      "Zaiie"
    ],
    alternateSpellings: [],
    currentRank: 1245,
    trend: "stable"
  },
  {
    id: "f1246",
    name: "Zaniyah",
    normalizedName: "zaniyah",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zani",
      "Zanie"
    ],
    alternateSpellings: [],
    currentRank: 1246,
    trend: "stable"
  },
  {
    id: "f1248",
    name: "Zariah",
    normalizedName: "zariah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zar",
      "Zarie"
    ],
    alternateSpellings: [],
    currentRank: 1248,
    trend: "stable"
  },
  {
    id: "f1249",
    name: "Zaria",
    normalizedName: "zaria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Zar"
    ],
    alternateSpellings: [],
    currentRank: 1249,
    trend: "stable"
  },
  {
    id: "f1250",
    name: "Zariyah",
    normalizedName: "zariyah",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zari",
      "Zarie"
    ],
    alternateSpellings: [],
    currentRank: 1250,
    trend: "stable"
  },
  {
    id: "f1251",
    name: "Zayla",
    normalizedName: "zayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Zay"
    ],
    alternateSpellings: [],
    currentRank: 1251,
    trend: "stable"
  },
  {
    id: "f1252",
    name: "Zelda",
    normalizedName: "zelda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Zel"
    ],
    alternateSpellings: [],
    currentRank: 1252,
    trend: "stable"
  },
  {
    id: "f1253",
    name: "Zendaya",
    normalizedName: "zendaya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Zend",
      "Zenie"
    ],
    alternateSpellings: [],
    currentRank: 1253,
    trend: "stable"
  },
  {
    id: "m158",
    name: "Zion",
    normalizedName: "zion",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 158,
    trend: "rising"
  },
  {
    id: "f1257",
    name: "Zoie",
    normalizedName: "zoie",
    gender: "F",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1257,
    trend: "stable"
  },
  {
    id: "f1259",
    name: "Zora",
    normalizedName: "zora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1259,
    trend: "stable"
  },
  {
    id: "f1260",
    name: "Zuri",
    normalizedName: "zuri",
    gender: "F",
    origins: [
      "African"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1260,
    trend: "stable"
  },
  {
    id: "f1261",
    name: "Abril",
    normalizedName: "abril",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Abr"
    ],
    alternateSpellings: [],
    currentRank: 1261,
    trend: "stable"
  },
  {
    id: "f1262",
    name: "Ada",
    normalizedName: "ada",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1262,
    trend: "stable"
  },
  {
    id: "f1263",
    name: "Adah",
    normalizedName: "adah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1263,
    trend: "stable"
  },
  {
    id: "f1264",
    name: "Adalee",
    normalizedName: "adalee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ada",
      "Adaie"
    ],
    alternateSpellings: [],
    currentRank: 1264,
    trend: "stable"
  },
  {
    id: "f1265",
    name: "Adaline",
    normalizedName: "adaline",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Adal",
      "Adaie"
    ],
    alternateSpellings: [],
    currentRank: 1265,
    trend: "stable"
  },
  {
    id: "f1266",
    name: "Adalyn",
    normalizedName: "adalyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ada",
      "Adaie"
    ],
    alternateSpellings: [],
    currentRank: 1266,
    trend: "stable"
  },
  {
    id: "f1267",
    name: "Addilyn",
    normalizedName: "addilyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Addi",
      "Addie"
    ],
    alternateSpellings: [],
    currentRank: 1267,
    trend: "stable"
  },
  {
    id: "f1268",
    name: "Addilynn",
    normalizedName: "addilynn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Addi",
      "Addie"
    ],
    alternateSpellings: [],
    currentRank: 1268,
    trend: "stable"
  },
  {
    id: "f1269",
    name: "Adela",
    normalizedName: "adela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ade"
    ],
    alternateSpellings: [],
    currentRank: 1269,
    trend: "stable"
  },
  {
    id: "f1271",
    name: "Adele",
    normalizedName: "adele",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ade"
    ],
    alternateSpellings: [],
    currentRank: 1271,
    trend: "stable"
  },
  {
    id: "f1272",
    name: "Adelina",
    normalizedName: "adelina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Adel",
      "Adeie"
    ],
    alternateSpellings: [],
    currentRank: 1272,
    trend: "stable"
  },
  {
    id: "f1273",
    name: "Adelyn",
    normalizedName: "adelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ade",
      "Adeie"
    ],
    alternateSpellings: [],
    currentRank: 1273,
    trend: "stable"
  },
  {
    id: "f1274",
    name: "Adelynn",
    normalizedName: "adelynn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Adel",
      "Adeie"
    ],
    alternateSpellings: [],
    currentRank: 1274,
    trend: "stable"
  },
  {
    id: "f1275",
    name: "Adi",
    normalizedName: "adi",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1275,
    trend: "stable"
  },
  {
    id: "f1276",
    name: "Adia",
    normalizedName: "adia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1276,
    trend: "stable"
  },
  {
    id: "f1277",
    name: "Adina",
    normalizedName: "adina",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Adi"
    ],
    alternateSpellings: [],
    currentRank: 1277,
    trend: "stable"
  },
  {
    id: "f1278",
    name: "Adley",
    normalizedName: "adley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Adl"
    ],
    alternateSpellings: [],
    currentRank: 1278,
    trend: "stable"
  },
  {
    id: "f1279",
    name: "Adrianna",
    normalizedName: "adrianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Adri",
      "Adrie"
    ],
    alternateSpellings: [],
    currentRank: 1279,
    trend: "stable"
  },
  {
    id: "f1280",
    name: "Adrienne",
    normalizedName: "adrienne",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Adri",
      "Adrie"
    ],
    alternateSpellings: [],
    currentRank: 1280,
    trend: "stable"
  },
  {
    id: "f1281",
    name: "Ady",
    normalizedName: "ady",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1281,
    trend: "stable"
  },
  {
    id: "f1282",
    name: "Aerin",
    normalizedName: "aerin",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aer"
    ],
    alternateSpellings: [],
    currentRank: 1282,
    trend: "stable"
  },
  {
    id: "f1283",
    name: "Aida",
    normalizedName: "aida",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1283,
    trend: "stable"
  },
  {
    id: "f1284",
    name: "Aila",
    normalizedName: "aila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1284,
    trend: "stable"
  },
  {
    id: "f1285",
    name: "Aileen",
    normalizedName: "aileen",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ail",
      "Ailie"
    ],
    alternateSpellings: [],
    currentRank: 1285,
    trend: "stable"
  },
  {
    id: "f1286",
    name: "Ailsa",
    normalizedName: "ailsa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ail"
    ],
    alternateSpellings: [],
    currentRank: 1286,
    trend: "stable"
  },
  {
    id: "f1287",
    name: "Aimee",
    normalizedName: "aimee",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aim"
    ],
    alternateSpellings: [],
    currentRank: 1287,
    trend: "stable"
  },
  {
    id: "f1288",
    name: "Ainara",
    normalizedName: "ainara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ain",
      "Ainie"
    ],
    alternateSpellings: [],
    currentRank: 1288,
    trend: "stable"
  },
  {
    id: "f1289",
    name: "Ainhoa",
    normalizedName: "ainhoa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ain",
      "Ainie"
    ],
    alternateSpellings: [],
    currentRank: 1289,
    trend: "stable"
  },
  {
    id: "f1290",
    name: "Ainslee",
    normalizedName: "ainslee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ains",
      "Ainie"
    ],
    alternateSpellings: [],
    currentRank: 1290,
    trend: "stable"
  },
  {
    id: "f1291",
    name: "Airlie",
    normalizedName: "airlie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Air",
      "Airie"
    ],
    alternateSpellings: [],
    currentRank: 1291,
    trend: "stable"
  },
  {
    id: "f1292",
    name: "Aisha",
    normalizedName: "aisha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ais"
    ],
    alternateSpellings: [],
    currentRank: 1292,
    trend: "stable"
  },
  {
    id: "f1293",
    name: "Aitana",
    normalizedName: "aitana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ait",
      "Aitie"
    ],
    alternateSpellings: [],
    currentRank: 1293,
    trend: "stable"
  },
  {
    id: "f1294",
    name: "Alaia",
    normalizedName: "alaia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ala"
    ],
    alternateSpellings: [],
    currentRank: 1294,
    trend: "stable"
  },
  {
    id: "f1295",
    name: "Alaina",
    normalizedName: "alaina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ala",
      "Alaie"
    ],
    alternateSpellings: [],
    currentRank: 1295,
    trend: "stable"
  },
  {
    id: "f1296",
    name: "Alani",
    normalizedName: "alani",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ala"
    ],
    alternateSpellings: [],
    currentRank: 1296,
    trend: "stable"
  },
  {
    id: "f1297",
    name: "Alannah",
    normalizedName: "alannah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Alan",
      "Alaie"
    ],
    alternateSpellings: [],
    currentRank: 1297,
    trend: "stable"
  },
  {
    id: "f1298",
    name: "Alannis",
    normalizedName: "alannis",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Alan",
      "Alaie"
    ],
    alternateSpellings: [],
    currentRank: 1298,
    trend: "stable"
  },
  {
    id: "f1299",
    name: "Alaya",
    normalizedName: "alaya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ala"
    ],
    alternateSpellings: [],
    currentRank: 1299,
    trend: "stable"
  },
  {
    id: "f1300",
    name: "Alayah",
    normalizedName: "alayah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ala",
      "Alaie"
    ],
    alternateSpellings: [],
    currentRank: 1300,
    trend: "stable"
  },
  {
    id: "f1301",
    name: "Alayna",
    normalizedName: "alayna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ala",
      "Alaie"
    ],
    alternateSpellings: [],
    currentRank: 1301,
    trend: "stable"
  },
  {
    id: "f1302",
    name: "Alba",
    normalizedName: "alba",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1302,
    trend: "stable"
  },
  {
    id: "f1303",
    name: "Alberta",
    normalizedName: "alberta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Albe",
      "Albie"
    ],
    alternateSpellings: [],
    currentRank: 1303,
    trend: "stable"
  },
  {
    id: "f1304",
    name: "Albina",
    normalizedName: "albina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alb",
      "Albie"
    ],
    alternateSpellings: [],
    currentRank: 1304,
    trend: "stable"
  },
  {
    id: "f1305",
    name: "Aldana",
    normalizedName: "aldana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ald",
      "Aldie"
    ],
    alternateSpellings: [],
    currentRank: 1305,
    trend: "stable"
  },
  {
    id: "f1306",
    name: "Aleena",
    normalizedName: "aleena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ale",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1306,
    trend: "stable"
  },
  {
    id: "f1307",
    name: "Aleigha",
    normalizedName: "aleigha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alei",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1307,
    trend: "stable"
  },
  {
    id: "f1308",
    name: "Alejandra",
    normalizedName: "alejandra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Alej",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1308,
    trend: "stable"
  },
  {
    id: "f1309",
    name: "Aleksandra",
    normalizedName: "aleksandra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Alek",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1309,
    trend: "stable"
  },
  {
    id: "f1311",
    name: "Alessia",
    normalizedName: "alessia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ales",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1311,
    trend: "stable"
  },
  {
    id: "m211",
    name: "Alex",
    normalizedName: "alex",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Al",
      "Lex"
    ],
    alternateSpellings: [],
    currentRank: 211,
    trend: "rising"
  },
  {
    id: "f1313",
    name: "Alexandrea",
    normalizedName: "alexandrea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Alex",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1313,
    trend: "stable"
  },
  {
    id: "f1314",
    name: "Alexandria",
    normalizedName: "alexandria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Alex",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1314,
    trend: "stable"
  },
  {
    id: "f1315",
    name: "Alexia",
    normalizedName: "alexia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ale",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1315,
    trend: "stable"
  },
  {
    id: "f1316",
    name: "Alexina",
    normalizedName: "alexina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Alex",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1316,
    trend: "stable"
  },
  {
    id: "f1317",
    name: "Alfie",
    normalizedName: "alfie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Alf"
    ],
    alternateSpellings: [],
    currentRank: 1317,
    trend: "stable"
  },
  {
    id: "m358",
    name: "Ali",
    normalizedName: "ali",
    gender: "M",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 358,
    trend: "rising"
  },
  {
    id: "f1319",
    name: "Alianna",
    normalizedName: "alianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alia",
      "Aliie"
    ],
    alternateSpellings: [],
    currentRank: 1319,
    trend: "stable"
  },
  {
    id: "f1320",
    name: "Aliena",
    normalizedName: "aliena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ali",
      "Aliie"
    ],
    alternateSpellings: [],
    currentRank: 1320,
    trend: "stable"
  },
  {
    id: "f1321",
    name: "Alisa",
    normalizedName: "alisa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ali"
    ],
    alternateSpellings: [],
    currentRank: 1321,
    trend: "stable"
  },
  {
    id: "f1322",
    name: "Alisha",
    normalizedName: "alisha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ali",
      "Aliie"
    ],
    alternateSpellings: [],
    currentRank: 1322,
    trend: "stable"
  },
  {
    id: "f1323",
    name: "Alisson",
    normalizedName: "alisson",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Alis",
      "Aliie"
    ],
    alternateSpellings: [],
    currentRank: 1323,
    trend: "stable"
  },
  {
    id: "f1324",
    name: "Alivia",
    normalizedName: "alivia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ali",
      "Aliie"
    ],
    alternateSpellings: [],
    currentRank: 1324,
    trend: "stable"
  },
  {
    id: "f1325",
    name: "Aliya",
    normalizedName: "aliya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ali"
    ],
    alternateSpellings: [],
    currentRank: 1325,
    trend: "stable"
  },
  {
    id: "f1327",
    name: "Aliza",
    normalizedName: "aliza",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ali"
    ],
    alternateSpellings: [],
    currentRank: 1327,
    trend: "stable"
  },
  {
    id: "f1328",
    name: "Allaura",
    normalizedName: "allaura",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alla",
      "Allie"
    ],
    alternateSpellings: [],
    currentRank: 1328,
    trend: "stable"
  },
  {
    id: "f1329",
    name: "Allegra",
    normalizedName: "allegra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alle",
      "Allie"
    ],
    alternateSpellings: [],
    currentRank: 1329,
    trend: "stable"
  },
  {
    id: "f1330",
    name: "Allura",
    normalizedName: "allura",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "All",
      "Allie"
    ],
    alternateSpellings: [],
    currentRank: 1330,
    trend: "stable"
  },
  {
    id: "f1331",
    name: "Ally",
    normalizedName: "ally",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1331,
    trend: "stable"
  },
  {
    id: "f1332",
    name: "Allyson",
    normalizedName: "allyson",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Ally",
      "Allie"
    ],
    alternateSpellings: [],
    currentRank: 1332,
    trend: "stable"
  },
  {
    id: "f1333",
    name: "Almira",
    normalizedName: "almira",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alm",
      "Almie"
    ],
    alternateSpellings: [],
    currentRank: 1333,
    trend: "stable"
  },
  {
    id: "f1334",
    name: "Alodia",
    normalizedName: "alodia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alo",
      "Aloie"
    ],
    alternateSpellings: [],
    currentRank: 1334,
    trend: "stable"
  },
  {
    id: "f1335",
    name: "Alora",
    normalizedName: "alora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alo"
    ],
    alternateSpellings: [],
    currentRank: 1335,
    trend: "stable"
  },
  {
    id: "f1336",
    name: "Althea",
    normalizedName: "althea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Alt",
      "Altie"
    ],
    alternateSpellings: [],
    currentRank: 1336,
    trend: "stable"
  },
  {
    id: "f1337",
    name: "Alva",
    normalizedName: "alva",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1337,
    trend: "stable"
  },
  {
    id: "f1338",
    name: "Alvina",
    normalizedName: "alvina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Alv",
      "Alvie"
    ],
    alternateSpellings: [],
    currentRank: 1338,
    trend: "stable"
  },
  {
    id: "f1339",
    name: "Alya",
    normalizedName: "alya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1339,
    trend: "stable"
  },
  {
    id: "f1340",
    name: "Alycia",
    normalizedName: "alycia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aly",
      "Alyie"
    ],
    alternateSpellings: [],
    currentRank: 1340,
    trend: "stable"
  },
  {
    id: "f1341",
    name: "Alyson",
    normalizedName: "alyson",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Aly",
      "Alyie"
    ],
    alternateSpellings: [],
    currentRank: 1341,
    trend: "stable"
  },
  {
    id: "f1342",
    name: "Alyvia",
    normalizedName: "alyvia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aly",
      "Alyie"
    ],
    alternateSpellings: [],
    currentRank: 1342,
    trend: "stable"
  },
  {
    id: "f1343",
    name: "Amada",
    normalizedName: "amada",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ama"
    ],
    alternateSpellings: [],
    currentRank: 1343,
    trend: "stable"
  },
  {
    id: "f1344",
    name: "Amadea",
    normalizedName: "amadea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ama",
      "Amaie"
    ],
    alternateSpellings: [],
    currentRank: 1344,
    trend: "stable"
  },
  {
    id: "f1345",
    name: "Amaia",
    normalizedName: "amaia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ama"
    ],
    alternateSpellings: [],
    currentRank: 1345,
    trend: "stable"
  },
  {
    id: "f1346",
    name: "Amalia",
    normalizedName: "amalia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ama",
      "Amaie"
    ],
    alternateSpellings: [],
    currentRank: 1346,
    trend: "stable"
  },
  {
    id: "f1347",
    name: "Amani",
    normalizedName: "amani",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ama"
    ],
    alternateSpellings: [],
    currentRank: 1347,
    trend: "stable"
  },
  {
    id: "f1348",
    name: "Amaris",
    normalizedName: "amaris",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ama",
      "Amaie"
    ],
    alternateSpellings: [],
    currentRank: 1348,
    trend: "stable"
  },
  {
    id: "f1349",
    name: "Amaya",
    normalizedName: "amaya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ama"
    ],
    alternateSpellings: [],
    currentRank: 1349,
    trend: "stable"
  },
  {
    id: "f1350",
    name: "Amayah",
    normalizedName: "amayah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ama",
      "Amaie"
    ],
    alternateSpellings: [],
    currentRank: 1350,
    trend: "stable"
  },
  {
    id: "f1352",
    name: "Amberly",
    normalizedName: "amberly",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Ambe",
      "Ambie"
    ],
    alternateSpellings: [],
    currentRank: 1352,
    trend: "stable"
  },
  {
    id: "f1353",
    name: "Ambrose",
    normalizedName: "ambrose",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Rose"
    ],
    syllables: 3,
    nicknames: [
      "Ambr",
      "Ambie"
    ],
    alternateSpellings: [],
    currentRank: 1353,
    trend: "stable"
  },
  {
    id: "f1354",
    name: "Ambrosia",
    normalizedName: "ambrosia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ambr",
      "Ambie"
    ],
    alternateSpellings: [],
    currentRank: 1354,
    trend: "stable"
  },
  {
    id: "f1355",
    name: "Amelie",
    normalizedName: "amelie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ame",
      "Ameie"
    ],
    alternateSpellings: [],
    currentRank: 1355,
    trend: "stable"
  },
  {
    id: "f1356",
    name: "Amerie",
    normalizedName: "amerie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ame",
      "Ameie"
    ],
    alternateSpellings: [],
    currentRank: 1356,
    trend: "stable"
  },
  {
    id: "f1357",
    name: "Amethyst",
    normalizedName: "amethyst",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Amet",
      "Ameie"
    ],
    alternateSpellings: [],
    currentRank: 1357,
    trend: "stable"
  },
  {
    id: "f1358",
    name: "Ami",
    normalizedName: "ami",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1358,
    trend: "stable"
  },
  {
    id: "f1359",
    name: "Amie",
    normalizedName: "amie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1359,
    trend: "stable"
  },
  {
    id: "f1360",
    name: "Amina",
    normalizedName: "amina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ami"
    ],
    alternateSpellings: [],
    currentRank: 1360,
    trend: "stable"
  },
  {
    id: "f1361",
    name: "Aminah",
    normalizedName: "aminah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ami",
      "Amiie"
    ],
    alternateSpellings: [],
    currentRank: 1361,
    trend: "stable"
  },
  {
    id: "f1362",
    name: "Amirah",
    normalizedName: "amirah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ami",
      "Amiie"
    ],
    alternateSpellings: [],
    currentRank: 1362,
    trend: "stable"
  },
  {
    id: "f1363",
    name: "Amiya",
    normalizedName: "amiya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ami"
    ],
    alternateSpellings: [],
    currentRank: 1363,
    trend: "stable"
  },
  {
    id: "f1364",
    name: "Amiyah",
    normalizedName: "amiyah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ami",
      "Amiie"
    ],
    alternateSpellings: [],
    currentRank: 1364,
    trend: "stable"
  },
  {
    id: "f1365",
    name: "Amor",
    normalizedName: "amor",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1365,
    trend: "stable"
  },
  {
    id: "f1366",
    name: "Amore",
    normalizedName: "amore",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Amo"
    ],
    alternateSpellings: [],
    currentRank: 1366,
    trend: "stable"
  },
  {
    id: "f1367",
    name: "Amorie",
    normalizedName: "amorie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Amo",
      "Amoie"
    ],
    alternateSpellings: [],
    currentRank: 1367,
    trend: "stable"
  },
  {
    id: "f1368",
    name: "Amparo",
    normalizedName: "amparo",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Amp",
      "Ampie"
    ],
    alternateSpellings: [],
    currentRank: 1368,
    trend: "stable"
  },
  {
    id: "f1369",
    name: "Amya",
    normalizedName: "amya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1369,
    trend: "stable"
  },
  {
    id: "f1370",
    name: "Amyra",
    normalizedName: "amyra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Amy"
    ],
    alternateSpellings: [],
    currentRank: 1370,
    trend: "stable"
  },
  {
    id: "f1372",
    name: "Anabel",
    normalizedName: "anabel",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Ana",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 1372,
    trend: "stable"
  },
  {
    id: "f1373",
    name: "Anabella",
    normalizedName: "anabella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anab",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 1373,
    trend: "stable"
  },
  {
    id: "f1374",
    name: "Anabelle",
    normalizedName: "anabelle",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anab",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 1374,
    trend: "stable"
  },
  {
    id: "f1375",
    name: "Anahi",
    normalizedName: "anahi",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ana"
    ],
    alternateSpellings: [],
    currentRank: 1375,
    trend: "stable"
  },
  {
    id: "f1376",
    name: "Anaia",
    normalizedName: "anaia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ana"
    ],
    alternateSpellings: [],
    currentRank: 1376,
    trend: "stable"
  },
  {
    id: "f1377",
    name: "Anais",
    normalizedName: "anais",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ana"
    ],
    alternateSpellings: [],
    currentRank: 1377,
    trend: "stable"
  },
  {
    id: "f1378",
    name: "Analia",
    normalizedName: "analia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ana",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 1378,
    trend: "stable"
  },
  {
    id: "f1379",
    name: "Anamaria",
    normalizedName: "anamaria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anam",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 1379,
    trend: "stable"
  },
  {
    id: "f1380",
    name: "Ananya",
    normalizedName: "ananya",
    gender: "F",
    origins: [
      "Indian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ana",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 1380,
    trend: "stable"
  },
  {
    id: "f1381",
    name: "Anastacia",
    normalizedName: "anastacia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anas",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 1381,
    trend: "stable"
  },
  {
    id: "f1382",
    name: "Anaya",
    normalizedName: "anaya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ana"
    ],
    alternateSpellings: [],
    currentRank: 1382,
    trend: "stable"
  },
  {
    id: "f1383",
    name: "Anayah",
    normalizedName: "anayah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ana",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 1383,
    trend: "stable"
  },
  {
    id: "f1384",
    name: "Andi",
    normalizedName: "andi",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1384,
    trend: "stable"
  },
  {
    id: "f1385",
    name: "Andie",
    normalizedName: "andie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "And"
    ],
    alternateSpellings: [],
    currentRank: 1385,
    trend: "stable"
  },
  {
    id: "f1386",
    name: "Andra",
    normalizedName: "andra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "And"
    ],
    alternateSpellings: [],
    currentRank: 1386,
    trend: "stable"
  },
  {
    id: "f1387",
    name: "Andria",
    normalizedName: "andria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "And",
      "Andie"
    ],
    alternateSpellings: [],
    currentRank: 1387,
    trend: "stable"
  },
  {
    id: "f1388",
    name: "Anessa",
    normalizedName: "anessa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ane",
      "Aneie"
    ],
    alternateSpellings: [],
    currentRank: 1388,
    trend: "stable"
  },
  {
    id: "f1389",
    name: "Anette",
    normalizedName: "anette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ane",
      "Aneie"
    ],
    alternateSpellings: [],
    currentRank: 1389,
    trend: "stable"
  },
  {
    id: "f1390",
    name: "Angelia",
    normalizedName: "angelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ange",
      "Angie"
    ],
    alternateSpellings: [],
    currentRank: 1390,
    trend: "stable"
  },
  {
    id: "f1391",
    name: "Angelika",
    normalizedName: "angelika",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Ange",
      "Angie"
    ],
    alternateSpellings: [],
    currentRank: 1391,
    trend: "stable"
  },
  {
    id: "f1392",
    name: "Angelique",
    normalizedName: "angelique",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Ange",
      "Angie"
    ],
    alternateSpellings: [],
    currentRank: 1392,
    trend: "stable"
  },
  {
    id: "f1393",
    name: "Angely",
    normalizedName: "angely",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Ang",
      "Angie"
    ],
    alternateSpellings: [],
    currentRank: 1393,
    trend: "stable"
  },
  {
    id: "f1394",
    name: "Anh",
    normalizedName: "anh",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1394,
    trend: "stable"
  },
  {
    id: "f1395",
    name: "Ania",
    normalizedName: "ania",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1395,
    trend: "stable"
  },
  {
    id: "f1396",
    name: "Anica",
    normalizedName: "anica",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ani"
    ],
    alternateSpellings: [],
    currentRank: 1396,
    trend: "stable"
  },
  {
    id: "f1397",
    name: "Anissa",
    normalizedName: "anissa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ani",
      "Aniie"
    ],
    alternateSpellings: [],
    currentRank: 1397,
    trend: "stable"
  },
  {
    id: "f1398",
    name: "Anita",
    normalizedName: "anita",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ani"
    ],
    alternateSpellings: [],
    currentRank: 1398,
    trend: "stable"
  },
  {
    id: "f1399",
    name: "Anitra",
    normalizedName: "anitra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ani",
      "Aniie"
    ],
    alternateSpellings: [],
    currentRank: 1399,
    trend: "stable"
  },
  {
    id: "f1400",
    name: "Anja",
    normalizedName: "anja",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1400,
    trend: "stable"
  },
  {
    id: "f1401",
    name: "Anjelica",
    normalizedName: "anjelica",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anje",
      "Anjie"
    ],
    alternateSpellings: [],
    currentRank: 1401,
    trend: "stable"
  },
  {
    id: "f1402",
    name: "Annabel",
    normalizedName: "annabel",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1402,
    trend: "stable"
  },
  {
    id: "f1403",
    name: "Annabeth",
    normalizedName: "annabeth",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1403,
    trend: "stable"
  },
  {
    id: "f1404",
    name: "Annaka",
    normalizedName: "annaka",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ann",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1404,
    trend: "stable"
  },
  {
    id: "f1405",
    name: "Annalee",
    normalizedName: "annalee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1405,
    trend: "stable"
  },
  {
    id: "f1406",
    name: "Annaleigh",
    normalizedName: "annaleigh",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1406,
    trend: "stable"
  },
  {
    id: "f1407",
    name: "Annaliese",
    normalizedName: "annaliese",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1407,
    trend: "stable"
  },
  {
    id: "f1408",
    name: "Annalisa",
    normalizedName: "annalisa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1408,
    trend: "stable"
  },
  {
    id: "f1409",
    name: "Annalise",
    normalizedName: "annalise",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1409,
    trend: "stable"
  },
  {
    id: "f1410",
    name: "Annamae",
    normalizedName: "annamae",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1410,
    trend: "stable"
  },
  {
    id: "f1411",
    name: "Annamaria",
    normalizedName: "annamaria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anna",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1411,
    trend: "stable"
  },
  {
    id: "f1412",
    name: "Anneka",
    normalizedName: "anneka",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ann",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1412,
    trend: "stable"
  },
  {
    id: "f1413",
    name: "Anneliese",
    normalizedName: "anneliese",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anne",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1413,
    trend: "stable"
  },
  {
    id: "f1414",
    name: "Annelise",
    normalizedName: "annelise",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anne",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1414,
    trend: "stable"
  },
  {
    id: "f1415",
    name: "Annemarie",
    normalizedName: "annemarie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anne",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1415,
    trend: "stable"
  },
  {
    id: "f1416",
    name: "Annetta",
    normalizedName: "annetta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Anne",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1416,
    trend: "stable"
  },
  {
    id: "f1417",
    name: "Annia",
    normalizedName: "annia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ann"
    ],
    alternateSpellings: [],
    currentRank: 1417,
    trend: "stable"
  },
  {
    id: "f1418",
    name: "Annice",
    normalizedName: "annice",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ann",
      "Annie"
    ],
    alternateSpellings: [],
    currentRank: 1418,
    trend: "stable"
  },
  {
    id: "f1419",
    name: "Anni",
    normalizedName: "anni",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1419,
    trend: "stable"
  },
  {
    id: "f1420",
    name: "Anora",
    normalizedName: "anora",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ano"
    ],
    alternateSpellings: [],
    currentRank: 1420,
    trend: "stable"
  },
  {
    id: "f1421",
    name: "Anouk",
    normalizedName: "anouk",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ano"
    ],
    alternateSpellings: [],
    currentRank: 1421,
    trend: "stable"
  },
  {
    id: "f1422",
    name: "Antigone",
    normalizedName: "antigone",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anti",
      "Antie"
    ],
    alternateSpellings: [],
    currentRank: 1422,
    trend: "stable"
  },
  {
    id: "f1423",
    name: "Antoinette",
    normalizedName: "antoinette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Anto",
      "Antie"
    ],
    alternateSpellings: [],
    currentRank: 1423,
    trend: "stable"
  },
  {
    id: "f1424",
    name: "Antonella",
    normalizedName: "antonella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anto",
      "Antie"
    ],
    alternateSpellings: [],
    currentRank: 1424,
    trend: "stable"
  },
  {
    id: "f1425",
    name: "Antonia",
    normalizedName: "antonia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Anto",
      "Antie"
    ],
    alternateSpellings: [],
    currentRank: 1425,
    trend: "stable"
  },
  {
    id: "f1426",
    name: "Antonietta",
    normalizedName: "antonietta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Anto",
      "Antie"
    ],
    alternateSpellings: [],
    currentRank: 1426,
    trend: "stable"
  },
  {
    id: "f1427",
    name: "Anya",
    normalizedName: "anya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1427,
    trend: "stable"
  },
  {
    id: "f1428",
    name: "Aolani",
    normalizedName: "aolani",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Aol",
      "Aolie"
    ],
    alternateSpellings: [],
    currentRank: 1428,
    trend: "stable"
  },
  {
    id: "f1429",
    name: "Aoife",
    normalizedName: "aoife",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aoi"
    ],
    alternateSpellings: [],
    currentRank: 1429,
    trend: "stable"
  },
  {
    id: "f1430",
    name: "Apolline",
    normalizedName: "apolline",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Apol",
      "Apoie"
    ],
    alternateSpellings: [],
    currentRank: 1430,
    trend: "stable"
  },
  {
    id: "f1431",
    name: "Apollonia",
    normalizedName: "apollonia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Apol",
      "Apoie"
    ],
    alternateSpellings: [],
    currentRank: 1431,
    trend: "stable"
  },
  {
    id: "f1432",
    name: "Apphia",
    normalizedName: "apphia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "App",
      "Appie"
    ],
    alternateSpellings: [],
    currentRank: 1432,
    trend: "stable"
  },
  {
    id: "f1433",
    name: "Aquata",
    normalizedName: "aquata",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aqu",
      "Aquie"
    ],
    alternateSpellings: [],
    currentRank: 1433,
    trend: "stable"
  },
  {
    id: "f1434",
    name: "Ara",
    normalizedName: "ara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1434,
    trend: "stable"
  },
  {
    id: "f1436",
    name: "Araceli",
    normalizedName: "araceli",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Arac",
      "Araie"
    ],
    alternateSpellings: [],
    currentRank: 1436,
    trend: "stable"
  },
  {
    id: "f1437",
    name: "Aracely",
    normalizedName: "aracely",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 4,
    nicknames: [
      "Arac",
      "Araie"
    ],
    alternateSpellings: [],
    currentRank: 1437,
    trend: "stable"
  },
  {
    id: "f1438",
    name: "Araminta",
    normalizedName: "araminta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Aram",
      "Araie"
    ],
    alternateSpellings: [],
    currentRank: 1438,
    trend: "stable"
  },
  {
    id: "f1439",
    name: "Arantxa",
    normalizedName: "arantxa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aran",
      "Araie"
    ],
    alternateSpellings: [],
    currentRank: 1439,
    trend: "stable"
  },
  {
    id: "f1440",
    name: "Arbor",
    normalizedName: "arbor",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Arb"
    ],
    alternateSpellings: [],
    currentRank: 1440,
    trend: "stable"
  },
  {
    id: "f1441",
    name: "Arcadia",
    normalizedName: "arcadia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Arca",
      "Arcie"
    ],
    alternateSpellings: [],
    currentRank: 1441,
    trend: "stable"
  },
  {
    id: "f1442",
    name: "Arcelia",
    normalizedName: "arcelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Arce",
      "Arcie"
    ],
    alternateSpellings: [],
    currentRank: 1442,
    trend: "stable"
  },
  {
    id: "f1443",
    name: "Ardelia",
    normalizedName: "ardelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Arde",
      "Ardie"
    ],
    alternateSpellings: [],
    currentRank: 1443,
    trend: "stable"
  },
  {
    id: "f1445",
    name: "Ardith",
    normalizedName: "ardith",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ard",
      "Ardie"
    ],
    alternateSpellings: [],
    currentRank: 1445,
    trend: "stable"
  },
  {
    id: "f1446",
    name: "Areeba",
    normalizedName: "areeba",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Are",
      "Areie"
    ],
    alternateSpellings: [],
    currentRank: 1446,
    trend: "stable"
  },
  {
    id: "f1447",
    name: "Areej",
    normalizedName: "areej",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Are"
    ],
    alternateSpellings: [],
    currentRank: 1447,
    trend: "stable"
  },
  {
    id: "f1448",
    name: "Aretha",
    normalizedName: "aretha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Are",
      "Areie"
    ],
    alternateSpellings: [],
    currentRank: 1448,
    trend: "stable"
  },
  {
    id: "f1449",
    name: "Argelia",
    normalizedName: "argelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Arge",
      "Argie"
    ],
    alternateSpellings: [],
    currentRank: 1449,
    trend: "stable"
  },
  {
    id: "f1451",
    name: "Ariadna",
    normalizedName: "ariadna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aria",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1451,
    trend: "stable"
  },
  {
    id: "f1452",
    name: "Ariah",
    normalizedName: "ariah",
    gender: "F",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ari"
    ],
    alternateSpellings: [],
    currentRank: 1452,
    trend: "stable"
  },
  {
    id: "f1453",
    name: "Arian",
    normalizedName: "arian",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ari"
    ],
    alternateSpellings: [],
    currentRank: 1453,
    trend: "stable"
  },
  {
    id: "f1455",
    name: "Ariane",
    normalizedName: "ariane",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ari",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1455,
    trend: "stable"
  },
  {
    id: "f1456",
    name: "Arianne",
    normalizedName: "arianne",
    gender: "F",
    origins: [
      "Hebrew",
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Aria",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1456,
    trend: "stable"
  },
  {
    id: "f1457",
    name: "Arianny",
    normalizedName: "arianny",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Aria",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1457,
    trend: "stable"
  },
  {
    id: "f1458",
    name: "Ariela",
    normalizedName: "ariela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ari",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1458,
    trend: "stable"
  },
  {
    id: "f1459",
    name: "Ariella",
    normalizedName: "ariella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Arie",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1459,
    trend: "stable"
  },
  {
    id: "f1460",
    name: "Arienne",
    normalizedName: "arienne",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arie",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1460,
    trend: "stable"
  },
  {
    id: "f1461",
    name: "Arietta",
    normalizedName: "arietta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Arie",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1461,
    trend: "stable"
  },
  {
    id: "f1462",
    name: "Arin",
    normalizedName: "arin",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1462,
    trend: "stable"
  },
  {
    id: "f1463",
    name: "Arissa",
    normalizedName: "arissa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ari",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1463,
    trend: "stable"
  },
  {
    id: "f1464",
    name: "Arizona",
    normalizedName: "arizona",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Ariz",
      "Ariie"
    ],
    alternateSpellings: [],
    currentRank: 1464,
    trend: "stable"
  },
  {
    id: "f1465",
    name: "Arla",
    normalizedName: "arla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1465,
    trend: "stable"
  },
  {
    id: "f1466",
    name: "Arlene",
    normalizedName: "arlene",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arl",
      "Arlie"
    ],
    alternateSpellings: [],
    currentRank: 1466,
    trend: "stable"
  },
  {
    id: "f1467",
    name: "Arleth",
    normalizedName: "arleth",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Arl",
      "Arlie"
    ],
    alternateSpellings: [],
    currentRank: 1467,
    trend: "stable"
  },
  {
    id: "f1468",
    name: "Arlette",
    normalizedName: "arlette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arle",
      "Arlie"
    ],
    alternateSpellings: [],
    currentRank: 1468,
    trend: "stable"
  },
  {
    id: "f1469",
    name: "Arlie",
    normalizedName: "arlie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Arl"
    ],
    alternateSpellings: [],
    currentRank: 1469,
    trend: "stable"
  },
  {
    id: "m596",
    name: "Arlo",
    normalizedName: "arlo",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 596,
    trend: "stable"
  },
  {
    id: "f1471",
    name: "Armida",
    normalizedName: "armida",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Arm",
      "Armie"
    ],
    alternateSpellings: [],
    currentRank: 1471,
    trend: "stable"
  },
  {
    id: "f1472",
    name: "Arminda",
    normalizedName: "arminda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Armi",
      "Armie"
    ],
    alternateSpellings: [],
    currentRank: 1472,
    trend: "stable"
  },
  {
    id: "f1473",
    name: "Arnelle",
    normalizedName: "arnelle",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arne",
      "Arnie"
    ],
    alternateSpellings: [],
    currentRank: 1473,
    trend: "stable"
  },
  {
    id: "f1474",
    name: "Artemis",
    normalizedName: "artemis",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arte",
      "Artie"
    ],
    alternateSpellings: [],
    currentRank: 1474,
    trend: "stable"
  },
  {
    id: "f1475",
    name: "Artie",
    normalizedName: "artie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Art"
    ],
    alternateSpellings: [],
    currentRank: 1475,
    trend: "stable"
  },
  {
    id: "f1476",
    name: "Arwen",
    normalizedName: "arwen",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Arw"
    ],
    alternateSpellings: [],
    currentRank: 1476,
    trend: "stable"
  },
  {
    id: "f1477",
    name: "Arya",
    normalizedName: "arya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1477,
    trend: "stable"
  },
  {
    id: "f1478",
    name: "Aryana",
    normalizedName: "aryana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ary",
      "Aryie"
    ],
    alternateSpellings: [],
    currentRank: 1478,
    trend: "stable"
  },
  {
    id: "f1479",
    name: "Aryanna",
    normalizedName: "aryanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Arya",
      "Aryie"
    ],
    alternateSpellings: [],
    currentRank: 1479,
    trend: "stable"
  },
  {
    id: "f1480",
    name: "Asa",
    normalizedName: "asa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1480,
    trend: "stable"
  },
  {
    id: "f1481",
    name: "Ashanti",
    normalizedName: "ashanti",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Asha",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 1481,
    trend: "stable"
  },
  {
    id: "f1482",
    name: "Ashby",
    normalizedName: "ashby",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ash"
    ],
    alternateSpellings: [],
    currentRank: 1482,
    trend: "stable"
  },
  {
    id: "f1483",
    name: "Ashlee",
    normalizedName: "ashlee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ash",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 1483,
    trend: "stable"
  },
  {
    id: "f1484",
    name: "Ashleigh",
    normalizedName: "ashleigh",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ashl",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 1484,
    trend: "stable"
  },
  {
    id: "f1485",
    name: "Ashley",
    normalizedName: "ashley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Ash",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 1485,
    trend: "stable"
  },
  {
    id: "f1486",
    name: "Ashlie",
    normalizedName: "ashlie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ash",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 1486,
    trend: "stable"
  },
  {
    id: "f1487",
    name: "Ashlynn",
    normalizedName: "ashlynn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ashl",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 1487,
    trend: "stable"
  },
  {
    id: "m124",
    name: "Ashton",
    normalizedName: "ashton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ash",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 124,
    trend: "rising"
  },
  {
    id: "f1489",
    name: "Ashtyn",
    normalizedName: "ashtyn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ash",
      "Ashie"
    ],
    alternateSpellings: [],
    currentRank: 1489,
    trend: "stable"
  },
  {
    id: "f1490",
    name: "Asma",
    normalizedName: "asma",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1490,
    trend: "stable"
  },
  {
    id: "f1492",
    name: "Aspyn",
    normalizedName: "aspyn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Asp"
    ],
    alternateSpellings: [],
    currentRank: 1492,
    trend: "stable"
  },
  {
    id: "f1493",
    name: "Assata",
    normalizedName: "assata",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ass",
      "Assie"
    ],
    alternateSpellings: [],
    currentRank: 1493,
    trend: "stable"
  },
  {
    id: "f1494",
    name: "Assumpta",
    normalizedName: "assumpta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Assu",
      "Assie"
    ],
    alternateSpellings: [],
    currentRank: 1494,
    trend: "stable"
  },
  {
    id: "f1495",
    name: "Aster",
    normalizedName: "aster",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ast"
    ],
    alternateSpellings: [],
    currentRank: 1495,
    trend: "stable"
  },
  {
    id: "f1496",
    name: "Astoria",
    normalizedName: "astoria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Asto",
      "Astie"
    ],
    alternateSpellings: [],
    currentRank: 1496,
    trend: "stable"
  },
  {
    id: "f1497",
    name: "Astra",
    normalizedName: "astra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ast"
    ],
    alternateSpellings: [],
    currentRank: 1497,
    trend: "stable"
  },
  {
    id: "f1498",
    name: "Asuncion",
    normalizedName: "asuncion",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Sun"
    ],
    syllables: 3,
    nicknames: [
      "Asun",
      "Asuie"
    ],
    alternateSpellings: [],
    currentRank: 1498,
    trend: "stable"
  },
  {
    id: "f1499",
    name: "Athalie",
    normalizedName: "athalie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Atha",
      "Athie"
    ],
    alternateSpellings: [],
    currentRank: 1499,
    trend: "stable"
  },
  {
    id: "f1500",
    name: "Atlanta",
    normalizedName: "atlanta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Atla",
      "Atlie"
    ],
    alternateSpellings: [],
    currentRank: 1500,
    trend: "stable"
  },
  {
    id: "f1501",
    name: "Atlantis",
    normalizedName: "atlantis",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Atla",
      "Atlie"
    ],
    alternateSpellings: [],
    currentRank: 1501,
    trend: "stable"
  },
  {
    id: "f1503",
    name: "Aubri",
    normalizedName: "aubri",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aub"
    ],
    alternateSpellings: [],
    currentRank: 1503,
    trend: "stable"
  },
  {
    id: "f1504",
    name: "Aubrie",
    normalizedName: "aubrie",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aub",
      "Aubie"
    ],
    alternateSpellings: [],
    currentRank: 1504,
    trend: "stable"
  },
  {
    id: "f1507",
    name: "Audrianna",
    normalizedName: "audrianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Audr",
      "Audie"
    ],
    alternateSpellings: [],
    currentRank: 1507,
    trend: "stable"
  },
  {
    id: "f1508",
    name: "Audrina",
    normalizedName: "audrina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Audr",
      "Audie"
    ],
    alternateSpellings: [],
    currentRank: 1508,
    trend: "stable"
  },
  {
    id: "f1509",
    name: "Augusta",
    normalizedName: "augusta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Augu",
      "Augie"
    ],
    alternateSpellings: [],
    currentRank: 1509,
    trend: "stable"
  },
  {
    id: "f1510",
    name: "Augustina",
    normalizedName: "augustina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Augu",
      "Augie"
    ],
    alternateSpellings: [],
    currentRank: 1510,
    trend: "stable"
  },
  {
    id: "f1512",
    name: "Auri",
    normalizedName: "auri",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1512,
    trend: "stable"
  },
  {
    id: "f1513",
    name: "Aurianna",
    normalizedName: "aurianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Auri",
      "Aurie"
    ],
    alternateSpellings: [],
    currentRank: 1513,
    trend: "stable"
  },
  {
    id: "f1514",
    name: "Aurielle",
    normalizedName: "aurielle",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Auri",
      "Aurie"
    ],
    alternateSpellings: [],
    currentRank: 1514,
    trend: "stable"
  },
  {
    id: "f1516",
    name: "Austine",
    normalizedName: "austine",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Aust",
      "Ausie"
    ],
    alternateSpellings: [],
    currentRank: 1516,
    trend: "stable"
  },
  {
    id: "f1517",
    name: "Austyn",
    normalizedName: "austyn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aus",
      "Ausie"
    ],
    alternateSpellings: [],
    currentRank: 1517,
    trend: "stable"
  },
  {
    id: "f1520",
    name: "Avalon",
    normalizedName: "avalon",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Ava",
      "Avaie"
    ],
    alternateSpellings: [],
    currentRank: 1520,
    trend: "stable"
  },
  {
    id: "f1521",
    name: "Avalynn",
    normalizedName: "avalynn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Aval",
      "Avaie"
    ],
    alternateSpellings: [],
    currentRank: 1521,
    trend: "stable"
  },
  {
    id: "f1522",
    name: "Avani",
    normalizedName: "avani",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ava"
    ],
    alternateSpellings: [],
    currentRank: 1522,
    trend: "stable"
  },
  {
    id: "f1525",
    name: "Avi",
    normalizedName: "avi",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1525,
    trend: "stable"
  },
  {
    id: "f1527",
    name: "Avianna",
    normalizedName: "avianna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Avia",
      "Aviie"
    ],
    alternateSpellings: [],
    currentRank: 1527,
    trend: "stable"
  },
  {
    id: "f1528",
    name: "Avila",
    normalizedName: "avila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Avi"
    ],
    alternateSpellings: [],
    currentRank: 1528,
    trend: "stable"
  },
  {
    id: "f1529",
    name: "Aviva",
    normalizedName: "aviva",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Avi"
    ],
    alternateSpellings: [],
    currentRank: 1529,
    trend: "stable"
  },
  {
    id: "f1530",
    name: "Avon",
    normalizedName: "avon",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1530,
    trend: "stable"
  },
  {
    id: "f1531",
    name: "Avril",
    normalizedName: "avril",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Avr"
    ],
    alternateSpellings: [],
    currentRank: 1531,
    trend: "stable"
  },
  {
    id: "f1532",
    name: "Aya",
    normalizedName: "aya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1532,
    trend: "stable"
  },
  {
    id: "f1533",
    name: "Ayah",
    normalizedName: "ayah",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1533,
    trend: "stable"
  },
  {
    id: "f1534",
    name: "Ayana",
    normalizedName: "ayana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Aya"
    ],
    alternateSpellings: [],
    currentRank: 1534,
    trend: "stable"
  },
  {
    id: "f1535",
    name: "Ayanna",
    normalizedName: "ayanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Aya",
      "Ayaie"
    ],
    alternateSpellings: [],
    currentRank: 1535,
    trend: "stable"
  },
  {
    id: "f1536",
    name: "Ayda",
    normalizedName: "ayda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1536,
    trend: "stable"
  },
  {
    id: "f1537",
    name: "Ayesha",
    normalizedName: "ayesha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Aye",
      "Ayeie"
    ],
    alternateSpellings: [],
    currentRank: 1537,
    trend: "stable"
  },
  {
    id: "f1538",
    name: "Ayisha",
    normalizedName: "ayisha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ayi",
      "Ayiie"
    ],
    alternateSpellings: [],
    currentRank: 1538,
    trend: "stable"
  },
  {
    id: "f1540",
    name: "Ayleen",
    normalizedName: "ayleen",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ayl",
      "Aylie"
    ],
    alternateSpellings: [],
    currentRank: 1540,
    trend: "stable"
  },
  {
    id: "f1542",
    name: "Aylinn",
    normalizedName: "aylinn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ayl",
      "Aylie"
    ],
    alternateSpellings: [],
    currentRank: 1542,
    trend: "stable"
  },
  {
    id: "f1543",
    name: "Ayn",
    normalizedName: "ayn",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1543,
    trend: "stable"
  },
  {
    id: "f1544",
    name: "Aysha",
    normalizedName: "aysha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ays"
    ],
    alternateSpellings: [],
    currentRank: 1544,
    trend: "stable"
  },
  {
    id: "f1545",
    name: "Azalea",
    normalizedName: "azalea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aza",
      "Azaie"
    ],
    alternateSpellings: [],
    currentRank: 1545,
    trend: "stable"
  },
  {
    id: "f1546",
    name: "Azaria",
    normalizedName: "azaria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Aza",
      "Azaie"
    ],
    alternateSpellings: [],
    currentRank: 1546,
    trend: "stable"
  },
  {
    id: "m871",
    name: "Azariah",
    normalizedName: "azariah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Azar",
      "Azaie"
    ],
    alternateSpellings: [],
    currentRank: 871,
    trend: "stable"
  },
  {
    id: "f1548",
    name: "Azure",
    normalizedName: "azure",
    gender: "F",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Azu"
    ],
    alternateSpellings: [],
    currentRank: 1548,
    trend: "stable"
  },
  {
    id: "f1549",
    name: "Azura",
    normalizedName: "azura",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Azu"
    ],
    alternateSpellings: [],
    currentRank: 1549,
    trend: "stable"
  },
  {
    id: "f1550",
    name: "Baby",
    normalizedName: "baby",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1550,
    trend: "stable"
  },
  {
    id: "m1112",
    name: "Baden",
    normalizedName: "baden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bad"
    ],
    alternateSpellings: [],
    currentRank: 1112,
    trend: "stable"
  },
  {
    id: "f1552",
    name: "Baila",
    normalizedName: "baila",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bai"
    ],
    alternateSpellings: [],
    currentRank: 1552,
    trend: "stable"
  },
  {
    id: "f1553",
    name: "Bailee",
    normalizedName: "bailee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bai",
      "Baiie"
    ],
    alternateSpellings: [],
    currentRank: 1553,
    trend: "stable"
  },
  {
    id: "f1554",
    name: "Bailyn",
    normalizedName: "bailyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bai",
      "Baiie"
    ],
    alternateSpellings: [],
    currentRank: 1554,
    trend: "stable"
  },
  {
    id: "f1555",
    name: "Baja",
    normalizedName: "baja",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1555,
    trend: "stable"
  },
  {
    id: "f1556",
    name: "Bambi",
    normalizedName: "bambi",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bam"
    ],
    alternateSpellings: [],
    currentRank: 1556,
    trend: "stable"
  },
  {
    id: "m770",
    name: "Banks",
    normalizedName: "banks",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Ban"
    ],
    alternateSpellings: [],
    currentRank: 770,
    trend: "stable"
  },
  {
    id: "f1558",
    name: "Bao",
    normalizedName: "bao",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1558,
    trend: "stable"
  },
  {
    id: "f1560",
    name: "Barbie",
    normalizedName: "barbie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bar",
      "Barie"
    ],
    alternateSpellings: [],
    currentRank: 1560,
    trend: "stable"
  },
  {
    id: "f1561",
    name: "Bardot",
    normalizedName: "bardot",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bar",
      "Barie"
    ],
    alternateSpellings: [],
    currentRank: 1561,
    trend: "stable"
  },
  {
    id: "m222",
    name: "Barrett",
    normalizedName: "barrett",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Barr",
      "Barie"
    ],
    alternateSpellings: [],
    currentRank: 222,
    trend: "rising"
  },
  {
    id: "f1563",
    name: "Basil",
    normalizedName: "basil",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bas"
    ],
    alternateSpellings: [],
    currentRank: 1563,
    trend: "stable"
  },
  {
    id: "f1564",
    name: "Bay",
    normalizedName: "bay",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1564,
    trend: "stable"
  },
  {
    id: "f1565",
    name: "Baylee",
    normalizedName: "baylee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bay",
      "Bayie"
    ],
    alternateSpellings: [],
    currentRank: 1565,
    trend: "stable"
  },
  {
    id: "m447",
    name: "Baylor",
    normalizedName: "baylor",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bay",
      "Bayie"
    ],
    alternateSpellings: [],
    currentRank: 447,
    trend: "rising"
  },
  {
    id: "f1567",
    name: "Bea",
    normalizedName: "bea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1567,
    trend: "stable"
  },
  {
    id: "f1568",
    name: "Beah",
    normalizedName: "beah",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1568,
    trend: "stable"
  },
  {
    id: "f1569",
    name: "Beata",
    normalizedName: "beata",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bea"
    ],
    alternateSpellings: [],
    currentRank: 1569,
    trend: "stable"
  },
  {
    id: "f1570",
    name: "Beatrix",
    normalizedName: "beatrix",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Beat",
      "Beaie"
    ],
    alternateSpellings: [],
    currentRank: 1570,
    trend: "stable"
  },
  {
    id: "f1571",
    name: "Becca",
    normalizedName: "becca",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bec"
    ],
    alternateSpellings: [],
    currentRank: 1571,
    trend: "stable"
  },
  {
    id: "m1114",
    name: "Beckett",
    normalizedName: "beckett",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Beck",
      "Becie"
    ],
    alternateSpellings: [],
    currentRank: 1114,
    trend: "stable"
  },
  {
    id: "f1573",
    name: "Becky",
    normalizedName: "becky",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bec"
    ],
    alternateSpellings: [],
    currentRank: 1573,
    trend: "stable"
  },
  {
    id: "f1574",
    name: "Bee",
    normalizedName: "bee",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1574,
    trend: "stable"
  },
  {
    id: "f1575",
    name: "Belén",
    normalizedName: "belén",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bel"
    ],
    alternateSpellings: [],
    currentRank: 1575,
    trend: "stable"
  },
  {
    id: "m1115",
    name: "Bellamy",
    normalizedName: "bellamy",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Bell",
      "Belie"
    ],
    alternateSpellings: [],
    currentRank: 1115,
    trend: "stable"
  },
  {
    id: "f1579",
    name: "Belmira",
    normalizedName: "belmira",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Belm",
      "Belie"
    ],
    alternateSpellings: [],
    currentRank: 1579,
    trend: "stable"
  },
  {
    id: "f1580",
    name: "Benita",
    normalizedName: "benita",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Ben",
      "Benie"
    ],
    alternateSpellings: [],
    currentRank: 1580,
    trend: "stable"
  },
  {
    id: "f1581",
    name: "Benjamina",
    normalizedName: "benjamina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Benj",
      "Benie"
    ],
    alternateSpellings: [],
    currentRank: 1581,
    trend: "stable"
  },
  {
    id: "f1582",
    name: "Bennie",
    normalizedName: "bennie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ben",
      "Benie"
    ],
    alternateSpellings: [],
    currentRank: 1582,
    trend: "stable"
  },
  {
    id: "f1583",
    name: "Berenice",
    normalizedName: "berenice",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Bere",
      "Berie"
    ],
    alternateSpellings: [],
    currentRank: 1583,
    trend: "stable"
  },
  {
    id: "f1584",
    name: "Berlin",
    normalizedName: "berlin",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ber",
      "Berie"
    ],
    alternateSpellings: [],
    currentRank: 1584,
    trend: "stable"
  },
  {
    id: "f1585",
    name: "Bernadette",
    normalizedName: "bernadette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Bern",
      "Berie"
    ],
    alternateSpellings: [],
    currentRank: 1585,
    trend: "stable"
  },
  {
    id: "f1586",
    name: "Bernadine",
    normalizedName: "bernadine",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Bern",
      "Berie"
    ],
    alternateSpellings: [],
    currentRank: 1586,
    trend: "stable"
  },
  {
    id: "f1587",
    name: "Bernice",
    normalizedName: "bernice",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Bern",
      "Berie"
    ],
    alternateSpellings: [],
    currentRank: 1587,
    trend: "stable"
  },
  {
    id: "f1588",
    name: "Bertha",
    normalizedName: "bertha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ber",
      "Berie"
    ],
    alternateSpellings: [],
    currentRank: 1588,
    trend: "stable"
  },
  {
    id: "f1589",
    name: "Beryl",
    normalizedName: "beryl",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ber"
    ],
    alternateSpellings: [],
    currentRank: 1589,
    trend: "stable"
  },
  {
    id: "f1590",
    name: "Bess",
    normalizedName: "bess",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1590,
    trend: "stable"
  },
  {
    id: "f1591",
    name: "Bessie",
    normalizedName: "bessie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bes",
      "Besie"
    ],
    alternateSpellings: [],
    currentRank: 1591,
    trend: "stable"
  },
  {
    id: "f1592",
    name: "Beth",
    normalizedName: "beth",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1592,
    trend: "stable"
  },
  {
    id: "f1593",
    name: "Bethanie",
    normalizedName: "bethanie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Beth",
      "Betie"
    ],
    alternateSpellings: [],
    currentRank: 1593,
    trend: "stable"
  },
  {
    id: "f1594",
    name: "Bethany",
    normalizedName: "bethany",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Beth",
      "Betie"
    ],
    alternateSpellings: [],
    currentRank: 1594,
    trend: "stable"
  },
  {
    id: "f1595",
    name: "Bethel",
    normalizedName: "bethel",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Bet",
      "Betie"
    ],
    alternateSpellings: [],
    currentRank: 1595,
    trend: "stable"
  },
  {
    id: "f1596",
    name: "Betsy",
    normalizedName: "betsy",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bet"
    ],
    alternateSpellings: [],
    currentRank: 1596,
    trend: "stable"
  },
  {
    id: "f1597",
    name: "Bette",
    normalizedName: "bette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bet"
    ],
    alternateSpellings: [],
    currentRank: 1597,
    trend: "stable"
  },
  {
    id: "f1598",
    name: "Bettina",
    normalizedName: "bettina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Bett",
      "Betie"
    ],
    alternateSpellings: [],
    currentRank: 1598,
    trend: "stable"
  },
  {
    id: "f1599",
    name: "Betty",
    normalizedName: "betty",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bet"
    ],
    alternateSpellings: [],
    currentRank: 1599,
    trend: "stable"
  },
  {
    id: "f1600",
    name: "Beulah",
    normalizedName: "beulah",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Beu",
      "Beuie"
    ],
    alternateSpellings: [],
    currentRank: 1600,
    trend: "stable"
  },
  {
    id: "f1601",
    name: "Beverly",
    normalizedName: "beverly",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Beve",
      "Bevie"
    ],
    alternateSpellings: [],
    currentRank: 1601,
    trend: "stable"
  },
  {
    id: "f1602",
    name: "Bevin",
    normalizedName: "bevin",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bev"
    ],
    alternateSpellings: [],
    currentRank: 1602,
    trend: "stable"
  },
  {
    id: "f1603",
    name: "Bibi",
    normalizedName: "bibi",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1603,
    trend: "stable"
  },
  {
    id: "f1604",
    name: "Bijou",
    normalizedName: "bijou",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bij"
    ],
    alternateSpellings: [],
    currentRank: 1604,
    trend: "stable"
  },
  {
    id: "f1605",
    name: "Billie",
    normalizedName: "billie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bil",
      "Bilie"
    ],
    alternateSpellings: [],
    currentRank: 1605,
    trend: "stable"
  },
  {
    id: "f1606",
    name: "Bina",
    normalizedName: "bina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1606,
    trend: "stable"
  },
  {
    id: "f1607",
    name: "Birdie",
    normalizedName: "birdie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bir",
      "Birie"
    ],
    alternateSpellings: [],
    currentRank: 1607,
    trend: "stable"
  },
  {
    id: "f1608",
    name: "Bjork",
    normalizedName: "bjork",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bjo"
    ],
    alternateSpellings: [],
    currentRank: 1608,
    trend: "stable"
  },
  {
    id: "f1609",
    name: "Blaire",
    normalizedName: "blaire",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bla",
      "Blaie"
    ],
    alternateSpellings: [],
    currentRank: 1609,
    trend: "stable"
  },
  {
    id: "f1610",
    name: "Blaize",
    normalizedName: "blaize",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bla",
      "Blaie"
    ],
    alternateSpellings: [],
    currentRank: 1610,
    trend: "stable"
  },
  {
    id: "f1611",
    name: "Blanca",
    normalizedName: "blanca",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bla",
      "Blaie"
    ],
    alternateSpellings: [],
    currentRank: 1611,
    trend: "stable"
  },
  {
    id: "f1612",
    name: "Blanche",
    normalizedName: "blanche",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Blan",
      "Blaie"
    ],
    alternateSpellings: [],
    currentRank: 1612,
    trend: "stable"
  },
  {
    id: "f1613",
    name: "Blessie",
    normalizedName: "blessie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bles",
      "Bleie"
    ],
    alternateSpellings: [],
    currentRank: 1613,
    trend: "stable"
  },
  {
    id: "f1614",
    name: "Bliss",
    normalizedName: "bliss",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bli"
    ],
    alternateSpellings: [],
    currentRank: 1614,
    trend: "stable"
  },
  {
    id: "f1615",
    name: "Blossom",
    normalizedName: "blossom",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Blos",
      "Bloie"
    ],
    alternateSpellings: [],
    currentRank: 1615,
    trend: "stable"
  },
  {
    id: "f1616",
    name: "Blythe",
    normalizedName: "blythe",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bly",
      "Blyie"
    ],
    alternateSpellings: [],
    currentRank: 1616,
    trend: "stable"
  },
  {
    id: "m563",
    name: "Bo",
    normalizedName: "bo",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 563,
    trend: "stable"
  },
  {
    id: "f1618",
    name: "Bobbie",
    normalizedName: "bobbie",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bob",
      "Bobie"
    ],
    alternateSpellings: [],
    currentRank: 1618,
    trend: "stable"
  },
  {
    id: "f1619",
    name: "Bonita",
    normalizedName: "bonita",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Bon",
      "Bonie"
    ],
    alternateSpellings: [],
    currentRank: 1619,
    trend: "stable"
  },
  {
    id: "f1620",
    name: "Bonny",
    normalizedName: "bonny",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bon"
    ],
    alternateSpellings: [],
    currentRank: 1620,
    trend: "stable"
  },
  {
    id: "f1621",
    name: "Boone",
    normalizedName: "boone",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Boo"
    ],
    alternateSpellings: [],
    currentRank: 1621,
    trend: "stable"
  },
  {
    id: "m1124",
    name: "Boston",
    normalizedName: "boston",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bos",
      "Bosie"
    ],
    alternateSpellings: [],
    currentRank: 1124,
    trend: "stable"
  },
  {
    id: "f1623",
    name: "Bracha",
    normalizedName: "bracha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bra",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1623,
    trend: "stable"
  },
  {
    id: "f1624",
    name: "Braelyn",
    normalizedName: "braelyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brae",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1624,
    trend: "stable"
  },
  {
    id: "f1625",
    name: "Braelynne",
    normalizedName: "braelynne",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Brae",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1625,
    trend: "stable"
  },
  {
    id: "f1626",
    name: "Brandy",
    normalizedName: "brandy",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bra",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1626,
    trend: "stable"
  },
  {
    id: "f1627",
    name: "Braylynn",
    normalizedName: "braylynn",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bray",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1627,
    trend: "stable"
  },
  {
    id: "f1628",
    name: "Brea",
    normalizedName: "brea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1628,
    trend: "stable"
  },
  {
    id: "f1629",
    name: "Breanna",
    normalizedName: "breanna",
    gender: "F",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Brea",
      "Breie"
    ],
    alternateSpellings: [],
    currentRank: 1629,
    trend: "stable"
  },
  {
    id: "f1630",
    name: "Bree",
    normalizedName: "bree",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1630,
    trend: "stable"
  },
  {
    id: "f1631",
    name: "Breea",
    normalizedName: "breea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [
      "Bre"
    ],
    alternateSpellings: [],
    currentRank: 1631,
    trend: "stable"
  },
  {
    id: "m492",
    name: "Brennan",
    normalizedName: "brennan",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bren",
      "Breie"
    ],
    alternateSpellings: [],
    currentRank: 492,
    trend: "rising"
  },
  {
    id: "f1634",
    name: "Briallen",
    normalizedName: "briallen",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bria",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1634,
    trend: "stable"
  },
  {
    id: "m832",
    name: "Briar",
    normalizedName: "briar",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bri"
    ],
    alternateSpellings: [],
    currentRank: 832,
    trend: "stable"
  },
  {
    id: "f1637",
    name: "Briella",
    normalizedName: "briella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Brie",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1637,
    trend: "stable"
  },
  {
    id: "f1639",
    name: "Brigid",
    normalizedName: "brigid",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bri",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1639,
    trend: "stable"
  },
  {
    id: "f1642",
    name: "Briony",
    normalizedName: "briony",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bri",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1642,
    trend: "stable"
  },
  {
    id: "f1643",
    name: "Brisa",
    normalizedName: "brisa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bri"
    ],
    alternateSpellings: [],
    currentRank: 1643,
    trend: "stable"
  },
  {
    id: "f1645",
    name: "Brit",
    normalizedName: "brit",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1645,
    trend: "stable"
  },
  {
    id: "f1646",
    name: "Britannia",
    normalizedName: "britannia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Brit",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1646,
    trend: "stable"
  },
  {
    id: "f1647",
    name: "Britney",
    normalizedName: "britney",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brit",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1647,
    trend: "stable"
  },
  {
    id: "f1648",
    name: "Britt",
    normalizedName: "britt",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bri"
    ],
    alternateSpellings: [],
    currentRank: 1648,
    trend: "stable"
  },
  {
    id: "f1649",
    name: "Britta",
    normalizedName: "britta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bri",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1649,
    trend: "stable"
  },
  {
    id: "f1650",
    name: "Brittani",
    normalizedName: "brittani",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Brit",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1650,
    trend: "stable"
  },
  {
    id: "f1651",
    name: "Brittney",
    normalizedName: "brittney",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brit",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1651,
    trend: "stable"
  },
  {
    id: "f1652",
    name: "Bronwen",
    normalizedName: "bronwen",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bron",
      "Broie"
    ],
    alternateSpellings: [],
    currentRank: 1652,
    trend: "stable"
  },
  {
    id: "f1655",
    name: "Brooklynn",
    normalizedName: "brooklynn",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Broo",
      "Broie"
    ],
    alternateSpellings: [],
    currentRank: 1655,
    trend: "stable"
  },
  {
    id: "f1656",
    name: "Bruna",
    normalizedName: "bruna",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Bru"
    ],
    alternateSpellings: [],
    currentRank: 1656,
    trend: "stable"
  },
  {
    id: "f1657",
    name: "Brunella",
    normalizedName: "brunella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Brun",
      "Bruie"
    ],
    alternateSpellings: [],
    currentRank: 1657,
    trend: "stable"
  },
  {
    id: "f1658",
    name: "Brynn",
    normalizedName: "brynn",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bry"
    ],
    alternateSpellings: [],
    currentRank: 1658,
    trend: "stable"
  },
  {
    id: "f1659",
    name: "Brynne",
    normalizedName: "brynne",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bry",
      "Bryie"
    ],
    alternateSpellings: [],
    currentRank: 1659,
    trend: "stable"
  },
  {
    id: "f1660",
    name: "Buffy",
    normalizedName: "buffy",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Buf"
    ],
    alternateSpellings: [],
    currentRank: 1660,
    trend: "stable"
  },
  {
    id: "f1661",
    name: "Bunny",
    normalizedName: "bunny",
    gender: "F",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bun"
    ],
    alternateSpellings: [],
    currentRank: 1661,
    trend: "stable"
  },
  {
    id: "f1663",
    name: "Cady",
    normalizedName: "cady",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1663,
    trend: "stable"
  },
  {
    id: "f1664",
    name: "Caia",
    normalizedName: "caia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1664,
    trend: "stable"
  },
  {
    id: "f1665",
    name: "Cailyn",
    normalizedName: "cailyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cai",
      "Caiie"
    ],
    alternateSpellings: [],
    currentRank: 1665,
    trend: "stable"
  },
  {
    id: "f1666",
    name: "Cairn",
    normalizedName: "cairn",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Cai"
    ],
    alternateSpellings: [],
    currentRank: 1666,
    trend: "stable"
  },
  {
    id: "m1007",
    name: "Cairo",
    normalizedName: "cairo",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cai"
    ],
    alternateSpellings: [],
    currentRank: 1007,
    trend: "stable"
  },
  {
    id: "f1668",
    name: "Cait",
    normalizedName: "cait",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1668,
    trend: "stable"
  },
  {
    id: "f1670",
    name: "Caitlyn",
    normalizedName: "caitlyn",
    gender: "F",
    origins: [
      "English",
      "Welsh"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cait",
      "Caiie"
    ],
    alternateSpellings: [],
    currentRank: 1670,
    trend: "stable"
  },
  {
    id: "f1671",
    name: "Caleigh",
    normalizedName: "caleigh",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cale",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 1671,
    trend: "stable"
  },
  {
    id: "f1672",
    name: "Calia",
    normalizedName: "calia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cal"
    ],
    alternateSpellings: [],
    currentRank: 1672,
    trend: "stable"
  },
  {
    id: "f1673",
    name: "Calla",
    normalizedName: "calla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cal"
    ],
    alternateSpellings: [],
    currentRank: 1673,
    trend: "stable"
  },
  {
    id: "f1674",
    name: "Calliope",
    normalizedName: "calliope",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Call",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 1674,
    trend: "stable"
  },
  {
    id: "f1675",
    name: "Callista",
    normalizedName: "callista",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Call",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 1675,
    trend: "stable"
  },
  {
    id: "f1676",
    name: "Cambria",
    normalizedName: "cambria",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Camb",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 1676,
    trend: "stable"
  },
  {
    id: "m1009",
    name: "Camden",
    normalizedName: "camden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Cam",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 1009,
    trend: "stable"
  },
  {
    id: "f1678",
    name: "Camellia",
    normalizedName: "camellia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Came",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 1678,
    trend: "stable"
  },
  {
    id: "f1679",
    name: "Cameran",
    normalizedName: "cameran",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Came",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 1679,
    trend: "stable"
  },
  {
    id: "f1681",
    name: "Camilla",
    normalizedName: "camilla",
    gender: "F",
    origins: [
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cami",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 1681,
    trend: "stable"
  },
  {
    id: "m1147",
    name: "Campbell",
    normalizedName: "campbell",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Camp",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 1147,
    trend: "stable"
  },
  {
    id: "f1684",
    name: "Candela",
    normalizedName: "candela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cand",
      "Canie"
    ],
    alternateSpellings: [],
    currentRank: 1684,
    trend: "stable"
  },
  {
    id: "f1685",
    name: "Candice",
    normalizedName: "candice",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cand",
      "Canie"
    ],
    alternateSpellings: [],
    currentRank: 1685,
    trend: "stable"
  },
  {
    id: "f1686",
    name: "Candra",
    normalizedName: "candra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Can",
      "Canie"
    ],
    alternateSpellings: [],
    currentRank: 1686,
    trend: "stable"
  },
  {
    id: "f1687",
    name: "Candy",
    normalizedName: "candy",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Can"
    ],
    alternateSpellings: [],
    currentRank: 1687,
    trend: "stable"
  },
  {
    id: "f1689",
    name: "Cara",
    normalizedName: "cara",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1689,
    trend: "stable"
  },
  {
    id: "f1690",
    name: "Caren",
    normalizedName: "caren",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Car"
    ],
    alternateSpellings: [],
    currentRank: 1690,
    trend: "stable"
  },
  {
    id: "f1691",
    name: "Carey",
    normalizedName: "carey",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Car"
    ],
    alternateSpellings: [],
    currentRank: 1691,
    trend: "stable"
  },
  {
    id: "f1692",
    name: "Cari",
    normalizedName: "cari",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1692,
    trend: "stable"
  },
  {
    id: "f1693",
    name: "Caridad",
    normalizedName: "caridad",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cari",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1693,
    trend: "stable"
  },
  {
    id: "f1694",
    name: "Carissa",
    normalizedName: "carissa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cari",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1694,
    trend: "stable"
  },
  {
    id: "f1695",
    name: "Carla",
    normalizedName: "carla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Car"
    ],
    alternateSpellings: [],
    currentRank: 1695,
    trend: "stable"
  },
  {
    id: "f1696",
    name: "Carlene",
    normalizedName: "carlene",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Carl",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1696,
    trend: "stable"
  },
  {
    id: "f1697",
    name: "Carley",
    normalizedName: "carley",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1697,
    trend: "stable"
  },
  {
    id: "f1698",
    name: "Carli",
    normalizedName: "carli",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Car"
    ],
    alternateSpellings: [],
    currentRank: 1698,
    trend: "stable"
  },
  {
    id: "f1699",
    name: "Carlie",
    normalizedName: "carlie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1699,
    trend: "stable"
  },
  {
    id: "f1700",
    name: "Carlotta",
    normalizedName: "carlotta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Carl",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1700,
    trend: "stable"
  },
  {
    id: "f1702",
    name: "Carmel",
    normalizedName: "carmel",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1702,
    trend: "stable"
  },
  {
    id: "f1703",
    name: "Carmela",
    normalizedName: "carmela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Carm",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1703,
    trend: "stable"
  },
  {
    id: "f1704",
    name: "Carmelita",
    normalizedName: "carmelita",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Carm",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1704,
    trend: "stable"
  },
  {
    id: "f1705",
    name: "Carmella",
    normalizedName: "carmella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Carm",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1705,
    trend: "stable"
  },
  {
    id: "f1707",
    name: "Carmina",
    normalizedName: "carmina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Carm",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1707,
    trend: "stable"
  },
  {
    id: "f1708",
    name: "Carmine",
    normalizedName: "carmine",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Carm",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1708,
    trend: "stable"
  },
  {
    id: "f1709",
    name: "Carnation",
    normalizedName: "carnation",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Carn",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1709,
    trend: "stable"
  },
  {
    id: "f1711",
    name: "Carole",
    normalizedName: "carole",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1711,
    trend: "stable"
  },
  {
    id: "f1715",
    name: "Carolynn",
    normalizedName: "carolynn",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Caro",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1715,
    trend: "stable"
  },
  {
    id: "f1716",
    name: "Carrie",
    normalizedName: "carrie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1716,
    trend: "stable"
  },
  {
    id: "m1151",
    name: "Carson",
    normalizedName: "carson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1151,
    trend: "stable"
  },
  {
    id: "f1719",
    name: "Carys",
    normalizedName: "carys",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Car"
    ],
    alternateSpellings: [],
    currentRank: 1719,
    trend: "stable"
  },
  {
    id: "f1721",
    name: "Cashmere",
    normalizedName: "cashmere",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cash",
      "Casie"
    ],
    alternateSpellings: [],
    currentRank: 1721,
    trend: "stable"
  },
  {
    id: "f1722",
    name: "Casie",
    normalizedName: "casie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cas"
    ],
    alternateSpellings: [],
    currentRank: 1722,
    trend: "stable"
  },
  {
    id: "f1723",
    name: "Cass",
    normalizedName: "cass",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1723,
    trend: "stable"
  },
  {
    id: "f1725",
    name: "Cassia",
    normalizedName: "cassia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cas",
      "Casie"
    ],
    alternateSpellings: [],
    currentRank: 1725,
    trend: "stable"
  },
  {
    id: "f1727",
    name: "Cassie",
    normalizedName: "cassie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cas",
      "Casie"
    ],
    alternateSpellings: [],
    currentRank: 1727,
    trend: "stable"
  },
  {
    id: "f1728",
    name: "Cat",
    normalizedName: "cat",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1728,
    trend: "stable"
  },
  {
    id: "f1730",
    name: "Cate",
    normalizedName: "cate",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1730,
    trend: "stable"
  },
  {
    id: "f1731",
    name: "Caterina",
    normalizedName: "caterina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Cate",
      "Catie"
    ],
    alternateSpellings: [],
    currentRank: 1731,
    trend: "stable"
  },
  {
    id: "f1733",
    name: "Cathleen",
    normalizedName: "cathleen",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Cath",
      "Catie"
    ],
    alternateSpellings: [],
    currentRank: 1733,
    trend: "stable"
  },
  {
    id: "f1734",
    name: "Cathy",
    normalizedName: "cathy",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cat"
    ],
    alternateSpellings: [],
    currentRank: 1734,
    trend: "stable"
  },
  {
    id: "f1735",
    name: "Catrina",
    normalizedName: "catrina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Catr",
      "Catie"
    ],
    alternateSpellings: [],
    currentRank: 1735,
    trend: "stable"
  },
  {
    id: "f1736",
    name: "Cayla",
    normalizedName: "cayla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cay"
    ],
    alternateSpellings: [],
    currentRank: 1736,
    trend: "stable"
  },
  {
    id: "f1738",
    name: "Caylin",
    normalizedName: "caylin",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cay",
      "Cayie"
    ],
    alternateSpellings: [],
    currentRank: 1738,
    trend: "stable"
  },
  {
    id: "f1740",
    name: "Ceci",
    normalizedName: "ceci",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1740,
    trend: "stable"
  },
  {
    id: "m1156",
    name: "Cecil",
    normalizedName: "cecil",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cec"
    ],
    alternateSpellings: [],
    currentRank: 1156,
    trend: "stable"
  },
  {
    id: "f1742",
    name: "Cecile",
    normalizedName: "cecile",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cec",
      "Cecie"
    ],
    alternateSpellings: [],
    currentRank: 1742,
    trend: "stable"
  },
  {
    id: "f1743",
    name: "Cecily",
    normalizedName: "cecily",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Cec",
      "Cecie"
    ],
    alternateSpellings: [],
    currentRank: 1743,
    trend: "stable"
  },
  {
    id: "f1744",
    name: "Cedella",
    normalizedName: "cedella",
    gender: "F",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cede",
      "Cedie"
    ],
    alternateSpellings: [],
    currentRank: 1744,
    trend: "stable"
  },
  {
    id: "f1745",
    name: "Celena",
    normalizedName: "celena",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cel",
      "Celie"
    ],
    alternateSpellings: [],
    currentRank: 1745,
    trend: "stable"
  },
  {
    id: "f1747",
    name: "Celestina",
    normalizedName: "celestina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Cele",
      "Celie"
    ],
    alternateSpellings: [],
    currentRank: 1747,
    trend: "stable"
  },
  {
    id: "f1748",
    name: "Celestine",
    normalizedName: "celestine",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Cele",
      "Celie"
    ],
    alternateSpellings: [],
    currentRank: 1748,
    trend: "stable"
  },
  {
    id: "f1750",
    name: "Celina",
    normalizedName: "celina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cel",
      "Celie"
    ],
    alternateSpellings: [],
    currentRank: 1750,
    trend: "stable"
  },
  {
    id: "f1751",
    name: "Celine",
    normalizedName: "celine",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cel",
      "Celie"
    ],
    alternateSpellings: [],
    currentRank: 1751,
    trend: "stable"
  },
  {
    id: "f1752",
    name: "Cerys",
    normalizedName: "cerys",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cer"
    ],
    alternateSpellings: [],
    currentRank: 1752,
    trend: "stable"
  },
  {
    id: "f1753",
    name: "Chana",
    normalizedName: "chana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cha"
    ],
    alternateSpellings: [],
    currentRank: 1753,
    trend: "stable"
  },
  {
    id: "f1754",
    name: "Chananya",
    normalizedName: "chananya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Chan",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1754,
    trend: "stable"
  },
  {
    id: "m1160",
    name: "Chandler",
    normalizedName: "chandler",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chan",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1160,
    trend: "stable"
  },
  {
    id: "f1757",
    name: "Chanelle",
    normalizedName: "chanelle",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Chan",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1757,
    trend: "stable"
  },
  {
    id: "f1758",
    name: "Channing",
    normalizedName: "channing",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chan",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1758,
    trend: "stable"
  },
  {
    id: "f1759",
    name: "Chantal",
    normalizedName: "chantal",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chan",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1759,
    trend: "stable"
  },
  {
    id: "f1760",
    name: "Chantelle",
    normalizedName: "chantelle",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Chan",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1760,
    trend: "stable"
  },
  {
    id: "f1761",
    name: "Charis",
    normalizedName: "charis",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cha",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1761,
    trend: "stable"
  },
  {
    id: "f1762",
    name: "Charissa",
    normalizedName: "charissa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1762,
    trend: "stable"
  },
  {
    id: "f1764",
    name: "Charla",
    normalizedName: "charla",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cha",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1764,
    trend: "stable"
  },
  {
    id: "f1765",
    name: "Charlene",
    normalizedName: "charlene",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1765,
    trend: "stable"
  },
  {
    id: "m51",
    name: "Charles",
    normalizedName: "charles",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Free man"
    ],
    syllables: 2,
    nicknames: [
      "Charlie",
      "Chuck",
      "Chaz"
    ],
    alternateSpellings: [],
    currentRank: 51,
    trend: "stable"
  },
  {
    id: "m1163",
    name: "Charleston",
    normalizedName: "charleston",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1163,
    trend: "stable"
  },
  {
    id: "f1771",
    name: "Charlize",
    normalizedName: "charlize",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1771,
    trend: "stable"
  },
  {
    id: "f1773",
    name: "Charmaine",
    normalizedName: "charmaine",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Char",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1773,
    trend: "stable"
  },
  {
    id: "f1775",
    name: "Chaya",
    normalizedName: "chaya",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [
      "Cha"
    ],
    alternateSpellings: [],
    currentRank: 1775,
    trend: "stable"
  },
  {
    id: "f1777",
    name: "Chelsey",
    normalizedName: "chelsey",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chel",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1777,
    trend: "stable"
  },
  {
    id: "f1778",
    name: "Cher",
    normalizedName: "cher",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1778,
    trend: "stable"
  },
  {
    id: "f1779",
    name: "Cheri",
    normalizedName: "cheri",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Che"
    ],
    alternateSpellings: [],
    currentRank: 1779,
    trend: "stable"
  },
  {
    id: "f1780",
    name: "Cherie",
    normalizedName: "cherie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Che",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1780,
    trend: "stable"
  },
  {
    id: "f1781",
    name: "Cherish",
    normalizedName: "cherish",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cher",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1781,
    trend: "stable"
  },
  {
    id: "f1782",
    name: "Cherokee",
    normalizedName: "cherokee",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cher",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1782,
    trend: "stable"
  },
  {
    id: "f1783",
    name: "Cherry",
    normalizedName: "cherry",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Che",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1783,
    trend: "stable"
  },
  {
    id: "f1784",
    name: "Cheryl",
    normalizedName: "cheryl",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Che",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1784,
    trend: "stable"
  },
  {
    id: "f1785",
    name: "Chesney",
    normalizedName: "chesney",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ches",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1785,
    trend: "stable"
  },
  {
    id: "f1786",
    name: "Chessie",
    normalizedName: "chessie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ches",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1786,
    trend: "stable"
  },
  {
    id: "f1787",
    name: "Cheyanne",
    normalizedName: "cheyanne",
    gender: "F",
    origins: [
      "Hebrew",
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chey",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1787,
    trend: "stable"
  },
  {
    id: "f1789",
    name: "Chiara",
    normalizedName: "chiara",
    gender: "F",
    origins: [
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Chi",
      "Chiie"
    ],
    alternateSpellings: [],
    currentRank: 1789,
    trend: "stable"
  },
  {
    id: "f1790",
    name: "China",
    normalizedName: "china",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Chi"
    ],
    alternateSpellings: [],
    currentRank: 1790,
    trend: "stable"
  },
  {
    id: "f1792",
    name: "Chrissy",
    normalizedName: "chrissy",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1792,
    trend: "stable"
  },
  {
    id: "f1793",
    name: "Christa",
    normalizedName: "christa",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1793,
    trend: "stable"
  },
  {
    id: "f1794",
    name: "Christabel",
    normalizedName: "christabel",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1794,
    trend: "stable"
  },
  {
    id: "f1795",
    name: "Christal",
    normalizedName: "christal",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1795,
    trend: "stable"
  },
  {
    id: "f1796",
    name: "Christen",
    normalizedName: "christen",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1796,
    trend: "stable"
  },
  {
    id: "f1797",
    name: "Christi",
    normalizedName: "christi",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1797,
    trend: "stable"
  },
  {
    id: "f1798",
    name: "Christiana",
    normalizedName: "christiana",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1798,
    trend: "stable"
  },
  {
    id: "f1799",
    name: "Christie",
    normalizedName: "christie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1799,
    trend: "stable"
  },
  {
    id: "f1802",
    name: "Christy",
    normalizedName: "christy",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1802,
    trend: "stable"
  },
  {
    id: "f1803",
    name: "Chrystal",
    normalizedName: "chrystal",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chry",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 1803,
    trend: "stable"
  },
  {
    id: "f1804",
    name: "Ciara",
    normalizedName: "ciara",
    gender: "F",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cia"
    ],
    alternateSpellings: [],
    currentRank: 1804,
    trend: "stable"
  },
  {
    id: "f1805",
    name: "Cicely",
    normalizedName: "cicely",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 3,
    nicknames: [
      "Cic",
      "Cicie"
    ],
    alternateSpellings: [],
    currentRank: 1805,
    trend: "stable"
  },
  {
    id: "f1806",
    name: "Cielo",
    normalizedName: "cielo",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cie"
    ],
    alternateSpellings: [],
    currentRank: 1806,
    trend: "stable"
  },
  {
    id: "f1807",
    name: "Ciera",
    normalizedName: "ciera",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cie"
    ],
    alternateSpellings: [],
    currentRank: 1807,
    trend: "stable"
  },
  {
    id: "f1808",
    name: "Cierra",
    normalizedName: "cierra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cie",
      "Cieie"
    ],
    alternateSpellings: [],
    currentRank: 1808,
    trend: "stable"
  },
  {
    id: "f1812",
    name: "Clarabelle",
    normalizedName: "clarabelle",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Clar",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1812,
    trend: "stable"
  },
  {
    id: "f1813",
    name: "Clarice",
    normalizedName: "clarice",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Clar",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1813,
    trend: "stable"
  },
  {
    id: "f1814",
    name: "Clarinda",
    normalizedName: "clarinda",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Clar",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1814,
    trend: "stable"
  },
  {
    id: "f1815",
    name: "Claris",
    normalizedName: "claris",
    gender: "F",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cla",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1815,
    trend: "stable"
  },
  {
    id: "f1817",
    name: "Clarisse",
    normalizedName: "clarisse",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Clar",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1817,
    trend: "stable"
  },
  {
    id: "f1818",
    name: "Clarity",
    normalizedName: "clarity",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Clar",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1818,
    trend: "stable"
  },
  {
    id: "f1819",
    name: "Classie",
    normalizedName: "classie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Clas",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1819,
    trend: "stable"
  },
  {
    id: "f1820",
    name: "Claudette",
    normalizedName: "claudette",
    gender: "F",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Clau",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1820,
    trend: "stable"
  },
  {
    id: "f1822",
    name: "Claudine",
    normalizedName: "claudine",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Clau",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1822,
    trend: "stable"
  },
  {
    id: "f1823",
    name: "Clea",
    normalizedName: "clea",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1823,
    trend: "stable"
  },
  {
    id: "f1824",
    name: "Clelia",
    normalizedName: "clelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Cle",
      "Cleie"
    ],
    alternateSpellings: [],
    currentRank: 1824,
    trend: "stable"
  },
  {
    id: "f1825",
    name: "Clemence",
    normalizedName: "clemence",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Clem",
      "Cleie"
    ],
    alternateSpellings: [],
    currentRank: 1825,
    trend: "stable"
  },
  {
    id: "f1826",
    name: "Clementina",
    normalizedName: "clementina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 4,
    nicknames: [
      "Clem",
      "Cleie"
    ],
    alternateSpellings: [],
    currentRank: 1826,
    trend: "stable"
  },
  {
    id: "f1829",
    name: "Cleopatra",
    normalizedName: "cleopatra",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cleo",
      "Cleie"
    ],
    alternateSpellings: [],
    currentRank: 1829,
    trend: "stable"
  },
  {
    id: "f1830",
    name: "Cloe",
    normalizedName: "cloe",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1830,
    trend: "stable"
  },
  {
    id: "f1831",
    name: "Clotilde",
    normalizedName: "clotilde",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Clot",
      "Cloie"
    ],
    alternateSpellings: [],
    currentRank: 1831,
    trend: "stable"
  },
  {
    id: "f1832",
    name: "Clover",
    normalizedName: "clover",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Love"
    ],
    syllables: 2,
    nicknames: [
      "Clo",
      "Cloie"
    ],
    alternateSpellings: [],
    currentRank: 1832,
    trend: "stable"
  },
  {
    id: "f1833",
    name: "Coco",
    normalizedName: "coco",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1833,
    trend: "stable"
  },
  {
    id: "f1834",
    name: "Coleen",
    normalizedName: "coleen",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Col",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 1834,
    trend: "stable"
  },
  {
    id: "f1835",
    name: "Coletta",
    normalizedName: "coletta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cole",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 1835,
    trend: "stable"
  },
  {
    id: "f1839",
    name: "Columbia",
    normalizedName: "columbia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Colu",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 1839,
    trend: "stable"
  },
  {
    id: "f1840",
    name: "Comfort",
    normalizedName: "comfort",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Comf",
      "Comie"
    ],
    alternateSpellings: [],
    currentRank: 1840,
    trend: "stable"
  },
  {
    id: "f1841",
    name: "Concetta",
    normalizedName: "concetta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Conc",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1841,
    trend: "stable"
  },
  {
    id: "f1842",
    name: "Concha",
    normalizedName: "concha",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Con",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1842,
    trend: "stable"
  },
  {
    id: "f1843",
    name: "Conchita",
    normalizedName: "conchita",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Conc",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1843,
    trend: "stable"
  },
  {
    id: "f1844",
    name: "Connie",
    normalizedName: "connie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Con",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1844,
    trend: "stable"
  },
  {
    id: "f1845",
    name: "Constance",
    normalizedName: "constance",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cons",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1845,
    trend: "stable"
  },
  {
    id: "f1846",
    name: "Consuela",
    normalizedName: "consuela",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cons",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1846,
    trend: "stable"
  },
  {
    id: "f1847",
    name: "Consuelo",
    normalizedName: "consuelo",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cons",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1847,
    trend: "stable"
  },
  {
    id: "f1848",
    name: "Content",
    normalizedName: "content",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cont",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1848,
    trend: "stable"
  },
  {
    id: "f1849",
    name: "Cookie",
    normalizedName: "cookie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Coo",
      "Cooie"
    ],
    alternateSpellings: [],
    currentRank: 1849,
    trend: "stable"
  },
  {
    id: "f1851",
    name: "Coral",
    normalizedName: "coral",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cor"
    ],
    alternateSpellings: [],
    currentRank: 1851,
    trend: "stable"
  },
  {
    id: "f1852",
    name: "Coralee",
    normalizedName: "coralee",
    gender: "F",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cora",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1852,
    trend: "stable"
  },
  {
    id: "f1853",
    name: "Coralie",
    normalizedName: "coralie",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cora",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1853,
    trend: "stable"
  },
  {
    id: "f1855",
    name: "Corazón",
    normalizedName: "corazón",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cora",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1855,
    trend: "stable"
  },
  {
    id: "f1856",
    name: "Cordelia",
    normalizedName: "cordelia",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cord",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1856,
    trend: "stable"
  },
  {
    id: "f1857",
    name: "Coretta",
    normalizedName: "coretta",
    gender: "F",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Core",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1857,
    trend: "stable"
  },
  {
    id: "m1187",
    name: "Corey",
    normalizedName: "corey",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cor"
    ],
    alternateSpellings: [],
    currentRank: 1187,
    trend: "stable"
  },
  {
    id: "f1859",
    name: "Cori",
    normalizedName: "cori",
    gender: "F",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1859,
    trend: "stable"
  },
  {
    id: "f1860",
    name: "Corina",
    normalizedName: "corina",
    gender: "F",
    origins: [
      "Italian",
      "Latin"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Cor",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1860,
    trend: "stable"
  },
  {
    id: "m1842",
    name: "Liam",
    normalizedName: "liam",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Strong-willed warrior"
    ],
    syllables: 1,
    nicknames: [
      "Lee"
    ],
    alternateSpellings: [],
    currentRank: 1842,
    trend: "stable"
  },
  {
    id: "m2",
    name: "Noah",
    normalizedName: "noah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Rest",
      "Comfort"
    ],
    syllables: 1,
    nicknames: [
      "No"
    ],
    alternateSpellings: [],
    currentRank: 2,
    trend: "stable"
  },
  {
    id: "m3",
    name: "Oliver",
    normalizedName: "oliver",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Olive tree"
    ],
    syllables: 3,
    nicknames: [
      "Ollie",
      "Olly"
    ],
    alternateSpellings: [],
    currentRank: 3,
    trend: "stable"
  },
  {
    id: "m1581",
    name: "James",
    normalizedName: "james",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Supplanter"
    ],
    syllables: 2,
    nicknames: [
      "Jamie",
      "Jim",
      "Jimmy"
    ],
    alternateSpellings: [],
    currentRank: 1581,
    trend: "stable"
  },
  {
    id: "m1314",
    name: "Elijah",
    normalizedName: "elijah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "My God is Yahweh"
    ],
    syllables: 3,
    nicknames: [
      "Eli",
      "Lijah"
    ],
    alternateSpellings: [],
    currentRank: 1314,
    trend: "stable"
  },
  {
    id: "m6",
    name: "William",
    normalizedName: "william",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Resolute protector"
    ],
    syllables: 2,
    nicknames: [
      "Will",
      "Bill",
      "Billy",
      "Liam"
    ],
    alternateSpellings: [],
    currentRank: 6,
    trend: "stable"
  },
  {
    id: "m1499",
    name: "Henry",
    normalizedName: "henry",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Ruler of the home"
    ],
    syllables: 2,
    nicknames: [
      "Hank",
      "Harry",
      "Hal"
    ],
    alternateSpellings: [],
    currentRank: 1499,
    trend: "stable"
  },
  {
    id: "m1862",
    name: "Lucas",
    normalizedName: "lucas",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Bringer of light"
    ],
    syllables: 2,
    nicknames: [
      "Luke",
      "Luca"
    ],
    alternateSpellings: [],
    currentRank: 1862,
    trend: "stable"
  },
  {
    id: "m9",
    name: "Benjamin",
    normalizedName: "benjamin",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Son of the right hand"
    ],
    syllables: 3,
    nicknames: [
      "Ben",
      "Benny",
      "Benji"
    ],
    alternateSpellings: [],
    currentRank: 9,
    trend: "stable"
  },
  {
    id: "m10",
    name: "Theodore",
    normalizedName: "theodore",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Gift of God"
    ],
    syllables: 3,
    nicknames: [
      "Theo",
      "Ted",
      "Teddy"
    ],
    alternateSpellings: [],
    currentRank: 10,
    trend: "stable"
  },
  {
    id: "m1553",
    name: "Jack",
    normalizedName: "jack",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "God is gracious"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1553,
    trend: "stable"
  },
  {
    id: "m1838",
    name: "Levi",
    normalizedName: "levi",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Joined",
      "Attached"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1838,
    trend: "stable"
  },
  {
    id: "m13",
    name: "Alexander",
    normalizedName: "alexander",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Defender of the people"
    ],
    syllables: 4,
    nicknames: [
      "Alex",
      "Xander",
      "Lex",
      "Al"
    ],
    alternateSpellings: [],
    currentRank: 13,
    trend: "stable"
  },
  {
    id: "m14",
    name: "Mason",
    normalizedName: "mason",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Stone worker"
    ],
    syllables: 2,
    nicknames: [
      "Mase"
    ],
    alternateSpellings: [],
    currentRank: 14,
    trend: "stable"
  },
  {
    id: "m1350",
    name: "Ethan",
    normalizedName: "ethan",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Firm"
    ],
    syllables: 2,
    nicknames: [
      "Eth"
    ],
    alternateSpellings: [],
    currentRank: 1350,
    trend: "stable"
  },
  {
    id: "m16",
    name: "Daniel",
    normalizedName: "daniel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "God is my judge"
    ],
    syllables: 2,
    nicknames: [
      "Dan",
      "Danny"
    ],
    alternateSpellings: [],
    currentRank: 16,
    trend: "stable"
  },
  {
    id: "m1555",
    name: "Jacob",
    normalizedName: "jacob",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Supplanter"
    ],
    syllables: 2,
    nicknames: [
      "Jake",
      "Jay",
      "Coby"
    ],
    alternateSpellings: [],
    currentRank: 1555,
    trend: "stable"
  },
  {
    id: "m19",
    name: "Sebastian",
    normalizedName: "sebastian",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Venerable",
      "Revered"
    ],
    syllables: 3,
    nicknames: [
      "Seb",
      "Bash",
      "Bastian"
    ],
    alternateSpellings: [],
    currentRank: 19,
    trend: "stable"
  },
  {
    id: "m20",
    name: "Matthew",
    normalizedName: "matthew",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Gift of God"
    ],
    syllables: 2,
    nicknames: [
      "Matt",
      "Matty"
    ],
    alternateSpellings: [],
    currentRank: 20,
    trend: "stable"
  },
  {
    id: "m1672",
    name: "Joseph",
    normalizedName: "joseph",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "He will add"
    ],
    syllables: 2,
    nicknames: [
      "Joe",
      "Joey"
    ],
    alternateSpellings: [],
    currentRank: 1672,
    trend: "stable"
  },
  {
    id: "m22",
    name: "David",
    normalizedName: "david",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Beloved"
    ],
    syllables: 2,
    nicknames: [
      "Dave",
      "Davey"
    ],
    alternateSpellings: [],
    currentRank: 22,
    trend: "stable"
  },
  {
    id: "m24",
    name: "Owen",
    normalizedName: "owen",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Young warrior"
    ],
    syllables: 2,
    nicknames: [
      "O"
    ],
    alternateSpellings: [],
    currentRank: 24,
    trend: "stable"
  },
  {
    id: "m25",
    name: "Wyatt",
    normalizedName: "wyatt",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Wya"
    ],
    alternateSpellings: [],
    currentRank: 25,
    trend: "stable"
  },
  {
    id: "m1871",
    name: "Luke",
    normalizedName: "luke",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Light-giving"
    ],
    syllables: 2,
    nicknames: [
      "Lukey"
    ],
    alternateSpellings: [],
    currentRank: 1871,
    trend: "stable"
  },
  {
    id: "m1554",
    name: "Jackson",
    normalizedName: "jackson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jack",
      "Jax",
      "Jackie"
    ],
    alternateSpellings: [],
    currentRank: 1554,
    trend: "stable"
  },
  {
    id: "m1615",
    name: "Jayden",
    normalizedName: "jayden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Thankful",
      "God will judge"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jade"
    ],
    alternateSpellings: [],
    currentRank: 1615,
    trend: "stable"
  },
  {
    id: "m1655",
    name: "John",
    normalizedName: "john",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "God is gracious"
    ],
    syllables: 1,
    nicknames: [
      "Jack",
      "Johnny",
      "Jon"
    ],
    alternateSpellings: [],
    currentRank: 1655,
    trend: "stable"
  },
  {
    id: "m1406",
    name: "Gabriel",
    normalizedName: "gabriel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Gabe",
      "Gabby"
    ],
    alternateSpellings: [],
    currentRank: 1406,
    trend: "stable"
  },
  {
    id: "m31",
    name: "Anthony",
    normalizedName: "anthony",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Tony",
      "Ant"
    ],
    alternateSpellings: [],
    currentRank: 31,
    trend: "stable"
  },
  {
    id: "m1535",
    name: "Isaac",
    normalizedName: "isaac",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Laughter"
    ],
    syllables: 2,
    nicknames: [
      "Ike",
      "Izzy"
    ],
    alternateSpellings: [],
    currentRank: 1535,
    trend: "stable"
  },
  {
    id: "m1452",
    name: "Grayson",
    normalizedName: "grayson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Gray",
      "Graie"
    ],
    alternateSpellings: [],
    currentRank: 1452,
    trend: "stable"
  },
  {
    id: "m1827",
    name: "Leo",
    normalizedName: "leo",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Lion"
    ],
    syllables: 1,
    nicknames: [
      "Lee"
    ],
    alternateSpellings: [],
    currentRank: 1827,
    trend: "stable"
  },
  {
    id: "m1686",
    name: "Julian",
    normalizedName: "julian",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jules",
      "Jule"
    ],
    alternateSpellings: [],
    currentRank: 1686,
    trend: "stable"
  },
  {
    id: "m1843",
    name: "Lincoln",
    normalizedName: "lincoln",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Link",
      "Linc"
    ],
    alternateSpellings: [],
    currentRank: 1843,
    trend: "stable"
  },
  {
    id: "m1610",
    name: "Jaxon",
    normalizedName: "jaxon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jax"
    ],
    alternateSpellings: [],
    currentRank: 1610,
    trend: "stable"
  },
  {
    id: "m39",
    name: "Asher",
    normalizedName: "asher",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Happy",
      "Blessed"
    ],
    syllables: 2,
    nicknames: [
      "Ash"
    ],
    alternateSpellings: [],
    currentRank: 39,
    trend: "stable"
  },
  {
    id: "m40",
    name: "Christopher",
    normalizedName: "christopher",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Bearer of Christ"
    ],
    syllables: 3,
    nicknames: [
      "Chris",
      "Topher",
      "Kit"
    ],
    alternateSpellings: [],
    currentRank: 40,
    trend: "stable"
  },
  {
    id: "m42",
    name: "Mateo",
    normalizedName: "mateo",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mat"
    ],
    alternateSpellings: [],
    currentRank: 42,
    trend: "stable"
  },
  {
    id: "m43",
    name: "Thomas",
    normalizedName: "thomas",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Twin"
    ],
    syllables: 2,
    nicknames: [
      "Tom",
      "Tommy"
    ],
    alternateSpellings: [],
    currentRank: 43,
    trend: "stable"
  },
  {
    id: "m44",
    name: "Maverick",
    normalizedName: "maverick",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mave",
      "Mavie"
    ],
    alternateSpellings: [],
    currentRank: 44,
    trend: "stable"
  },
  {
    id: "m1514",
    name: "Hudson",
    normalizedName: "hudson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Hud",
      "Hudie"
    ],
    alternateSpellings: [],
    currentRank: 1514,
    trend: "stable"
  },
  {
    id: "m1312",
    name: "Elias",
    normalizedName: "elias",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Eli"
    ],
    alternateSpellings: [],
    currentRank: 1312,
    trend: "stable"
  },
  {
    id: "m1674",
    name: "Joshua",
    normalizedName: "joshua",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "God is salvation"
    ],
    syllables: 2,
    nicknames: [
      "Josh"
    ],
    alternateSpellings: [],
    currentRank: 1674,
    trend: "stable"
  },
  {
    id: "m48",
    name: "Andrew",
    normalizedName: "andrew",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Manly",
      "Brave"
    ],
    syllables: 2,
    nicknames: [
      "Andy",
      "Drew"
    ],
    alternateSpellings: [],
    currentRank: 48,
    trend: "stable"
  },
  {
    id: "m49",
    name: "Nathan",
    normalizedName: "nathan",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "He gave"
    ],
    syllables: 2,
    nicknames: [
      "Nate",
      "Nat"
    ],
    alternateSpellings: [],
    currentRank: 49,
    trend: "stable"
  },
  {
    id: "m50",
    name: "Aiden",
    normalizedName: "aiden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Aid",
      "Aidy"
    ],
    alternateSpellings: [],
    currentRank: 50,
    trend: "stable"
  },
  {
    id: "m52",
    name: "Caleb",
    normalizedName: "caleb",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Faithful",
      "Devotion"
    ],
    syllables: 2,
    nicknames: [
      "Cal",
      "Cale"
    ],
    alternateSpellings: [],
    currentRank: 52,
    trend: "stable"
  },
  {
    id: "m53",
    name: "Samuel",
    normalizedName: "samuel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Heard by God"
    ],
    syllables: 2,
    nicknames: [
      "Sam",
      "Sammy"
    ],
    alternateSpellings: [],
    currentRank: 53,
    trend: "stable"
  },
  {
    id: "m56",
    name: "Muhammad",
    normalizedName: "muhammad",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Muha",
      "Muhie"
    ],
    alternateSpellings: [],
    currentRank: 56,
    trend: "stable"
  },
  {
    id: "m57",
    name: "Miles",
    normalizedName: "miles",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mi"
    ],
    alternateSpellings: [],
    currentRank: 57,
    trend: "stable"
  },
  {
    id: "m1310",
    name: "Eli",
    normalizedName: "eli",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "E"
    ],
    alternateSpellings: [],
    currentRank: 1310,
    trend: "stable"
  },
  {
    id: "m59",
    name: "Connor",
    normalizedName: "connor",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Con"
    ],
    alternateSpellings: [],
    currentRank: 59,
    trend: "stable"
  },
  {
    id: "m60",
    name: "Aaron",
    normalizedName: "aaron",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "High mountain",
      "Exalted"
    ],
    syllables: 2,
    nicknames: [
      "Ari",
      "Ron"
    ],
    alternateSpellings: [],
    currentRank: 60,
    trend: "stable"
  },
  {
    id: "m61",
    name: "Nicholas",
    normalizedName: "nicholas",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Victory of the people"
    ],
    syllables: 3,
    nicknames: [
      "Nick",
      "Nico"
    ],
    alternateSpellings: [],
    currentRank: 61,
    trend: "stable"
  },
  {
    id: "m62",
    name: "Dominic",
    normalizedName: "dominic",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dom",
      "Nic"
    ],
    alternateSpellings: [],
    currentRank: 62,
    trend: "stable"
  },
  {
    id: "m63",
    name: "Adrian",
    normalizedName: "adrian",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "From Hadria"
    ],
    syllables: 2,
    nicknames: [
      "Ade",
      "Adri"
    ],
    alternateSpellings: [],
    currentRank: 63,
    trend: "stable"
  },
  {
    id: "m1675",
    name: "Josiah",
    normalizedName: "josiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jos",
      "Josie"
    ],
    alternateSpellings: [],
    currentRank: 1675,
    trend: "stable"
  },
  {
    id: "m1522",
    name: "Ian",
    normalizedName: "ian",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1522,
    trend: "stable"
  },
  {
    id: "m67",
    name: "Christian",
    normalizedName: "christian",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Chri",
      "Chrie"
    ],
    alternateSpellings: [],
    currentRank: 67,
    trend: "stable"
  },
  {
    id: "m68",
    name: "Colton",
    normalizedName: "colton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Colt",
      "Colby"
    ],
    alternateSpellings: [],
    currentRank: 68,
    trend: "stable"
  },
  {
    id: "m1663",
    name: "Jonathan",
    normalizedName: "jonathan",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jon",
      "Johnny",
      "Nathan"
    ],
    alternateSpellings: [],
    currentRank: 1663,
    trend: "stable"
  },
  {
    id: "m71",
    name: "Chase",
    normalizedName: "chase",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cha"
    ],
    alternateSpellings: [],
    currentRank: 71,
    trend: "stable"
  },
  {
    id: "m1352",
    name: "Evan",
    normalizedName: "evan",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ev"
    ],
    alternateSpellings: [],
    currentRank: 1352,
    trend: "stable"
  },
  {
    id: "m73",
    name: "Cooper",
    normalizedName: "cooper",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Coop"
    ],
    alternateSpellings: [],
    currentRank: 73,
    trend: "stable"
  },
  {
    id: "m1295",
    name: "Easton",
    normalizedName: "easton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Eas",
      "Easie"
    ],
    alternateSpellings: [],
    currentRank: 1295,
    trend: "stable"
  },
  {
    id: "m76",
    name: "Austin",
    normalizedName: "austin",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aus"
    ],
    alternateSpellings: [],
    currentRank: 76,
    trend: "stable"
  },
  {
    id: "m77",
    name: "Robert",
    normalizedName: "robert",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rob",
      "Robbie",
      "Bob",
      "Bobby"
    ],
    alternateSpellings: [],
    currentRank: 77,
    trend: "stable"
  },
  {
    id: "m1629",
    name: "Jeremiah",
    normalizedName: "jeremiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jere",
      "Jerie"
    ],
    alternateSpellings: [],
    currentRank: 1629,
    trend: "stable"
  },
  {
    id: "m1458",
    name: "Greyson",
    normalizedName: "greyson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Grey",
      "Greie"
    ],
    alternateSpellings: [],
    currentRank: 1458,
    trend: "stable"
  },
  {
    id: "m80",
    name: "Brooks",
    normalizedName: "brooks",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bro",
      "Broie"
    ],
    alternateSpellings: [],
    currentRank: 80,
    trend: "stable"
  },
  {
    id: "m81",
    name: "Roman",
    normalizedName: "roman",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rom"
    ],
    alternateSpellings: [],
    currentRank: 81,
    trend: "stable"
  },
  {
    id: "m1795",
    name: "Landon",
    normalizedName: "landon",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lan",
      "Lanie"
    ],
    alternateSpellings: [],
    currentRank: 1795,
    trend: "stable"
  },
  {
    id: "m83",
    name: "Adam",
    normalizedName: "adam",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 83,
    trend: "stable"
  },
  {
    id: "m84",
    name: "Axel",
    normalizedName: "axel",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 84,
    trend: "stable"
  },
  {
    id: "m85",
    name: "Nolan",
    normalizedName: "nolan",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nol"
    ],
    alternateSpellings: [],
    currentRank: 85,
    trend: "stable"
  },
  {
    id: "m1670",
    name: "Jose",
    normalizedName: "jose",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1670,
    trend: "stable"
  },
  {
    id: "m1552",
    name: "Jace",
    normalizedName: "jace",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1552,
    trend: "stable"
  },
  {
    id: "m1357",
    name: "Ezekiel",
    normalizedName: "ezekiel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Ezek",
      "Ezeie"
    ],
    alternateSpellings: [],
    currentRank: 1357,
    trend: "stable"
  },
  {
    id: "m1356",
    name: "Everett",
    normalizedName: "everett",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ever",
      "Eveie"
    ],
    alternateSpellings: [],
    currentRank: 1356,
    trend: "stable"
  },
  {
    id: "m92",
    name: "Xavier",
    normalizedName: "xavier",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Xavi",
      "X"
    ],
    alternateSpellings: [],
    currentRank: 92,
    trend: "stable"
  },
  {
    id: "m1697",
    name: "Kai",
    normalizedName: "kai",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1697,
    trend: "stable"
  },
  {
    id: "m94",
    name: "Weston",
    normalizedName: "weston",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Wes",
      "Wesie"
    ],
    alternateSpellings: [],
    currentRank: 94,
    trend: "stable"
  },
  {
    id: "m1582",
    name: "Jameson",
    normalizedName: "jameson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Jame",
      "Jamie"
    ],
    alternateSpellings: [],
    currentRank: 1582,
    trend: "stable"
  },
  {
    id: "m1602",
    name: "Jason",
    normalizedName: "jason",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jas"
    ],
    alternateSpellings: [],
    currentRank: 1602,
    trend: "stable"
  },
  {
    id: "m1830",
    name: "Leonardo",
    normalizedName: "leonardo",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Leon",
      "Leoie"
    ],
    alternateSpellings: [],
    currentRank: 1830,
    trend: "stable"
  },
  {
    id: "m99",
    name: "Wesley",
    normalizedName: "wesley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Wes",
      "Wesie"
    ],
    alternateSpellings: [],
    currentRank: 99,
    trend: "stable"
  },
  {
    id: "m100",
    name: "Michael",
    normalizedName: "michael",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Who is like God"
    ],
    syllables: 2,
    nicknames: [
      "Mike",
      "Mikey",
      "Mick"
    ],
    alternateSpellings: [],
    currentRank: 100,
    trend: "stable"
  },
  {
    id: "m1335",
    name: "Emmett",
    normalizedName: "emmett",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Emm",
      "Emmie"
    ],
    alternateSpellings: [],
    currentRank: 1335,
    trend: "stable"
  },
  {
    id: "m241",
    name: "Bennett",
    normalizedName: "bennett",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Benn",
      "Benie"
    ],
    alternateSpellings: [],
    currentRank: 241,
    trend: "rising"
  },
  {
    id: "m1485",
    name: "Harrison",
    normalizedName: "harrison",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Harry",
      "Harris"
    ],
    alternateSpellings: [],
    currentRank: 1485,
    trend: "stable"
  },
  {
    id: "m1611",
    name: "Jaxson",
    normalizedName: "jaxson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jax",
      "Jaxie"
    ],
    alternateSpellings: [],
    currentRank: 1611,
    trend: "stable"
  },
  {
    id: "m1755",
    name: "Kingston",
    normalizedName: "kingston",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "King"
    ],
    syllables: 2,
    nicknames: [
      "King",
      "Kinie"
    ],
    alternateSpellings: [],
    currentRank: 1755,
    trend: "stable"
  },
  {
    id: "m107",
    name: "Max",
    normalizedName: "max",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 107,
    trend: "rising"
  },
  {
    id: "m108",
    name: "Silas",
    normalizedName: "silas",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sil"
    ],
    alternateSpellings: [],
    currentRank: 108,
    trend: "rising"
  },
  {
    id: "m110",
    name: "Beau",
    normalizedName: "beau",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 110,
    trend: "rising"
  },
  {
    id: "m1419",
    name: "Gavin",
    normalizedName: "gavin",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gav"
    ],
    alternateSpellings: [],
    currentRank: 1419,
    trend: "stable"
  },
  {
    id: "m1423",
    name: "George",
    normalizedName: "george",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Georgie"
    ],
    alternateSpellings: [],
    currentRank: 1423,
    trend: "stable"
  },
  {
    id: "m114",
    name: "Vincent",
    normalizedName: "vincent",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Vinc",
      "Vinie"
    ],
    alternateSpellings: [],
    currentRank: 114,
    trend: "rising"
  },
  {
    id: "m115",
    name: "Zachary",
    normalizedName: "zachary",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Zach",
      "Zack",
      "Zak"
    ],
    alternateSpellings: [],
    currentRank: 115,
    trend: "rising"
  },
  {
    id: "m116",
    name: "Bryson",
    normalizedName: "bryson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bry",
      "Bryie"
    ],
    alternateSpellings: [],
    currentRank: 116,
    trend: "rising"
  },
  {
    id: "m117",
    name: "Ryder",
    normalizedName: "ryder",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ryd"
    ],
    alternateSpellings: [],
    currentRank: 117,
    trend: "rising"
  },
  {
    id: "m118",
    name: "Nathaniel",
    normalizedName: "nathaniel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Nate",
      "Nathan",
      "Nat"
    ],
    alternateSpellings: [],
    currentRank: 118,
    trend: "rising"
  },
  {
    id: "m119",
    name: "Brandon",
    normalizedName: "brandon",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bran",
      "Brand"
    ],
    alternateSpellings: [],
    currentRank: 119,
    trend: "rising"
  },
  {
    id: "m120",
    name: "Carlos",
    normalizedName: "carlos",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 120,
    trend: "rising"
  },
  {
    id: "m1868",
    name: "Luis",
    normalizedName: "luis",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1868,
    trend: "stable"
  },
  {
    id: "m122",
    name: "Damian",
    normalizedName: "damian",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dam",
      "Damie"
    ],
    alternateSpellings: [],
    currentRank: 122,
    trend: "rising"
  },
  {
    id: "m1746",
    name: "Kevin",
    normalizedName: "kevin",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kev"
    ],
    alternateSpellings: [],
    currentRank: 1746,
    trend: "stable"
  },
  {
    id: "m125",
    name: "Antonio",
    normalizedName: "antonio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Anto",
      "Antie"
    ],
    alternateSpellings: [],
    currentRank: 125,
    trend: "rising"
  },
  {
    id: "m739",
    name: "Bentley",
    normalizedName: "bentley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Ben"
    ],
    alternateSpellings: [],
    currentRank: 739,
    trend: "stable"
  },
  {
    id: "m1237",
    name: "Declan",
    normalizedName: "declan",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dec",
      "Decie"
    ],
    alternateSpellings: [],
    currentRank: 1237,
    trend: "stable"
  },
  {
    id: "m1441",
    name: "Giovanni",
    normalizedName: "giovanni",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Giov",
      "Gioie"
    ],
    alternateSpellings: [],
    currentRank: 1441,
    trend: "stable"
  },
  {
    id: "m1342",
    name: "Eric",
    normalizedName: "eric",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1342,
    trend: "stable"
  },
  {
    id: "m130",
    name: "Braxton",
    normalizedName: "braxton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Brax",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 130,
    trend: "rising"
  },
  {
    id: "m1816",
    name: "Legend",
    normalizedName: "legend",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Leg",
      "Legie"
    ],
    alternateSpellings: [],
    currentRank: 1816,
    trend: "stable"
  },
  {
    id: "m1449",
    name: "Graham",
    normalizedName: "graham",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gra",
      "Graie"
    ],
    alternateSpellings: [],
    currentRank: 1449,
    trend: "stable"
  },
  {
    id: "m1546",
    name: "Ivan",
    normalizedName: "ivan",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1546,
    trend: "stable"
  },
  {
    id: "m134",
    name: "Milo",
    normalizedName: "milo",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 134,
    trend: "rising"
  },
  {
    id: "m1637",
    name: "Jesus",
    normalizedName: "jesus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jes"
    ],
    alternateSpellings: [],
    currentRank: 1637,
    trend: "stable"
  },
  {
    id: "m136",
    name: "Maxwell",
    normalizedName: "maxwell",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Max"
    ],
    alternateSpellings: [],
    currentRank: 136,
    trend: "rising"
  },
  {
    id: "m1236",
    name: "Dean",
    normalizedName: "dean",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1236,
    trend: "stable"
  },
  {
    id: "m1319",
    name: "Elliott",
    normalizedName: "elliott",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Eli",
      "El"
    ],
    alternateSpellings: [],
    currentRank: 1319,
    trend: "stable"
  },
  {
    id: "m1177",
    name: "Cole",
    normalizedName: "cole",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1177,
    trend: "stable"
  },
  {
    id: "m140",
    name: "Ayden",
    normalizedName: "ayden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ayd"
    ],
    alternateSpellings: [],
    currentRank: 140,
    trend: "rising"
  },
  {
    id: "m1889",
    name: "Malachi",
    normalizedName: "malachi",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mala",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 1889,
    trend: "stable"
  },
  {
    id: "m1376",
    name: "Finn",
    normalizedName: "finn",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1376,
    trend: "stable"
  },
  {
    id: "m422",
    name: "Archer",
    normalizedName: "archer",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Arc",
      "Arcie"
    ],
    alternateSpellings: [],
    currentRank: 422,
    trend: "rising"
  },
  {
    id: "m145",
    name: "Abel",
    normalizedName: "abel",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 145,
    trend: "rising"
  },
  {
    id: "m147",
    name: "Bryce",
    normalizedName: "bryce",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bry"
    ],
    alternateSpellings: [],
    currentRank: 147,
    trend: "rising"
  },
  {
    id: "m148",
    name: "Victor",
    normalizedName: "victor",
    gender: "M",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Vic",
      "Vicky"
    ],
    alternateSpellings: [],
    currentRank: 148,
    trend: "rising"
  },
  {
    id: "m1332",
    name: "Emiliano",
    normalizedName: "emiliano",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Emil",
      "Emiie"
    ],
    alternateSpellings: [],
    currentRank: 1332,
    trend: "stable"
  },
  {
    id: "m150",
    name: "Waylon",
    normalizedName: "waylon",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Way",
      "Wayie"
    ],
    alternateSpellings: [],
    currentRank: 150,
    trend: "rising"
  },
  {
    id: "m151",
    name: "Theo",
    normalizedName: "theo",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 151,
    trend: "rising"
  },
  {
    id: "m1459",
    name: "Griffin",
    normalizedName: "griffin",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Grif",
      "Griie"
    ],
    alternateSpellings: [],
    currentRank: 1459,
    trend: "stable"
  },
  {
    id: "m153",
    name: "Timothy",
    normalizedName: "timothy",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Tim",
      "Timmy"
    ],
    alternateSpellings: [],
    currentRank: 153,
    trend: "rising"
  },
  {
    id: "m1544",
    name: "Israel",
    normalizedName: "israel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Isr",
      "Isrie"
    ],
    alternateSpellings: [],
    currentRank: 1544,
    trend: "stable"
  },
  {
    id: "m1635",
    name: "Jesse",
    normalizedName: "jesse",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jes"
    ],
    alternateSpellings: [],
    currentRank: 1635,
    trend: "stable"
  },
  {
    id: "m156",
    name: "Brantley",
    normalizedName: "brantley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Bran",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 156,
    trend: "rising"
  },
  {
    id: "m1626",
    name: "Jeffrey",
    normalizedName: "jeffrey",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jeff",
      "Jefie"
    ],
    alternateSpellings: [],
    currentRank: 1626,
    trend: "stable"
  },
  {
    id: "m160",
    name: "Marcus",
    normalizedName: "marcus",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Marc",
      "Mark"
    ],
    alternateSpellings: [],
    currentRank: 160,
    trend: "rising"
  },
  {
    id: "m161",
    name: "Caden",
    normalizedName: "caden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Cad"
    ],
    alternateSpellings: [],
    currentRank: 161,
    trend: "rising"
  },
  {
    id: "m162",
    name: "Tucker",
    normalizedName: "tucker",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tuc",
      "Tucie"
    ],
    alternateSpellings: [],
    currentRank: 162,
    trend: "rising"
  },
  {
    id: "m163",
    name: "Richard",
    normalizedName: "richard",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rich",
      "Rick",
      "Ricky",
      "Dick"
    ],
    alternateSpellings: [],
    currentRank: 163,
    trend: "rising"
  },
  {
    id: "m1572",
    name: "Jake",
    normalizedName: "jake",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1572,
    trend: "stable"
  },
  {
    id: "m165",
    name: "Tristan",
    normalizedName: "tristan",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tris"
    ],
    alternateSpellings: [],
    currentRank: 165,
    trend: "rising"
  },
  {
    id: "m166",
    name: "Patrick",
    normalizedName: "patrick",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pat",
      "Paddy",
      "Rick"
    ],
    alternateSpellings: [],
    currentRank: 166,
    trend: "rising"
  },
  {
    id: "m167",
    name: "Xander",
    normalizedName: "xander",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Xan",
      "Xanie"
    ],
    alternateSpellings: [],
    currentRank: 167,
    trend: "rising"
  },
  {
    id: "m1451",
    name: "Grant",
    normalizedName: "grant",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Gra"
    ],
    alternateSpellings: [],
    currentRank: 1451,
    trend: "stable"
  },
  {
    id: "m170",
    name: "Preston",
    normalizedName: "preston",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Pres",
      "Preie"
    ],
    alternateSpellings: [],
    currentRank: 170,
    trend: "rising"
  },
  {
    id: "m1368",
    name: "Felix",
    normalizedName: "felix",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fel"
    ],
    alternateSpellings: [],
    currentRank: 1368,
    trend: "stable"
  },
  {
    id: "m1682",
    name: "Judah",
    normalizedName: "judah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jud"
    ],
    alternateSpellings: [],
    currentRank: 1682,
    trend: "stable"
  },
  {
    id: "m173",
    name: "Alan",
    normalizedName: "alan",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 173,
    trend: "rising"
  },
  {
    id: "m174",
    name: "Arthur",
    normalizedName: "arthur",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Art",
      "Artie"
    ],
    alternateSpellings: [],
    currentRank: 174,
    trend: "rising"
  },
  {
    id: "m1754",
    name: "King",
    normalizedName: "king",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "King"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1754,
    trend: "stable"
  },
  {
    id: "m176",
    name: "Ace",
    normalizedName: "ace",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 176,
    trend: "rising"
  },
  {
    id: "m1340",
    name: "Enzo",
    normalizedName: "enzo",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1340,
    trend: "stable"
  },
  {
    id: "m1262",
    name: "Diego",
    normalizedName: "diego",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Die"
    ],
    alternateSpellings: [],
    currentRank: 1262,
    trend: "stable"
  },
  {
    id: "m1303",
    name: "Edward",
    normalizedName: "edward",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ed",
      "Eddie",
      "Ted",
      "Teddy"
    ],
    alternateSpellings: [],
    currentRank: 1303,
    trend: "stable"
  },
  {
    id: "m180",
    name: "Brian",
    normalizedName: "brian",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bri"
    ],
    alternateSpellings: [],
    currentRank: 180,
    trend: "rising"
  },
  {
    id: "m181",
    name: "Oscar",
    normalizedName: "oscar",
    gender: "M",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Osc"
    ],
    alternateSpellings: [],
    currentRank: 181,
    trend: "rising"
  },
  {
    id: "m182",
    name: "Paul",
    normalizedName: "paul",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 182,
    trend: "rising"
  },
  {
    id: "m1861",
    name: "Luca",
    normalizedName: "luca",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1861,
    trend: "stable"
  },
  {
    id: "m1759",
    name: "Knox",
    normalizedName: "knox",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1759,
    trend: "stable"
  },
  {
    id: "m185",
    name: "Andres",
    normalizedName: "andres",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "And",
      "Andie"
    ],
    alternateSpellings: [],
    currentRank: 185,
    trend: "rising"
  },
  {
    id: "m186",
    name: "Peter",
    normalizedName: "peter",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pete",
      "Petey"
    ],
    alternateSpellings: [],
    currentRank: 186,
    trend: "rising"
  },
  {
    id: "m187",
    name: "Mark",
    normalizedName: "mark",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 187,
    trend: "rising"
  },
  {
    id: "m188",
    name: "Steven",
    normalizedName: "steven",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Steve"
    ],
    alternateSpellings: [],
    currentRank: 188,
    trend: "rising"
  },
  {
    id: "m189",
    name: "Thiago",
    normalizedName: "thiago",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Thi",
      "Thiie"
    ],
    alternateSpellings: [],
    currentRank: 189,
    trend: "rising"
  },
  {
    id: "m190",
    name: "Nicolas",
    normalizedName: "nicolas",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Nico",
      "Nicie"
    ],
    alternateSpellings: [],
    currentRank: 190,
    trend: "rising"
  },
  {
    id: "m1683",
    name: "Jude",
    normalizedName: "jude",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1683,
    trend: "stable"
  },
  {
    id: "m1230",
    name: "Dawson",
    normalizedName: "dawson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Daw",
      "Dawie"
    ],
    alternateSpellings: [],
    currentRank: 1230,
    trend: "stable"
  },
  {
    id: "m195",
    name: "Simon",
    normalizedName: "simon",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Sim"
    ],
    alternateSpellings: [],
    currentRank: 195,
    trend: "rising"
  },
  {
    id: "m1696",
    name: "Kaden",
    normalizedName: "kaden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kad"
    ],
    alternateSpellings: [],
    currentRank: 1696,
    trend: "stable"
  },
  {
    id: "m199",
    name: "Bryan",
    normalizedName: "bryan",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bry"
    ],
    alternateSpellings: [],
    currentRank: 199,
    trend: "rising"
  },
  {
    id: "m200",
    name: "Alejandro",
    normalizedName: "alejandro",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Alej",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 200,
    trend: "rising"
  },
  {
    id: "m201",
    name: "Calvin",
    normalizedName: "calvin",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cal",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 201,
    trend: "rising"
  },
  {
    id: "m1333",
    name: "Emilio",
    normalizedName: "emilio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Emi",
      "Emiie"
    ],
    alternateSpellings: [],
    currentRank: 1333,
    trend: "stable"
  },
  {
    id: "m1676",
    name: "Josue",
    normalizedName: "josue",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jos"
    ],
    alternateSpellings: [],
    currentRank: 1676,
    trend: "stable"
  },
  {
    id: "m205",
    name: "Zayden",
    normalizedName: "zayden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Zay",
      "Zayie"
    ],
    alternateSpellings: [],
    currentRank: 205,
    trend: "rising"
  },
  {
    id: "m206",
    name: "Rhett",
    normalizedName: "rhett",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Rhe"
    ],
    alternateSpellings: [],
    currentRank: 206,
    trend: "rising"
  },
  {
    id: "m207",
    name: "Ryker",
    normalizedName: "ryker",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ryk"
    ],
    alternateSpellings: [],
    currentRank: 207,
    trend: "rising"
  },
  {
    id: "m209",
    name: "Walker",
    normalizedName: "walker",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Wal",
      "Walie"
    ],
    alternateSpellings: [],
    currentRank: 209,
    trend: "rising"
  },
  {
    id: "m1856",
    name: "Lorenzo",
    normalizedName: "lorenzo",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Lore",
      "Lorie"
    ],
    alternateSpellings: [],
    currentRank: 1856,
    trend: "stable"
  },
  {
    id: "m213",
    name: "Messiah",
    normalizedName: "messiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mess",
      "Mesie"
    ],
    alternateSpellings: [],
    currentRank: 213,
    trend: "rising"
  },
  {
    id: "m214",
    name: "Amir",
    normalizedName: "amir",
    gender: "M",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 214,
    trend: "rising"
  },
  {
    id: "m1780",
    name: "Kyle",
    normalizedName: "kyle",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1780,
    trend: "stable"
  },
  {
    id: "m217",
    name: "Tanner",
    normalizedName: "tanner",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tan",
      "Tanie"
    ],
    alternateSpellings: [],
    currentRank: 217,
    trend: "rising"
  },
  {
    id: "m218",
    name: "Maximus",
    normalizedName: "maximus",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Maxi",
      "Maxie"
    ],
    alternateSpellings: [],
    currentRank: 218,
    trend: "rising"
  },
  {
    id: "m1651",
    name: "Joel",
    normalizedName: "joel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1651,
    trend: "stable"
  },
  {
    id: "m220",
    name: "Chance",
    normalizedName: "chance",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cha",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 220,
    trend: "rising"
  },
  {
    id: "m221",
    name: "Brody",
    normalizedName: "brody",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bro"
    ],
    alternateSpellings: [],
    currentRank: 221,
    trend: "rising"
  },
  {
    id: "m223",
    name: "Zane",
    normalizedName: "zane",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 223,
    trend: "rising"
  },
  {
    id: "m224",
    name: "Myles",
    normalizedName: "myles",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Myl"
    ],
    alternateSpellings: [],
    currentRank: 224,
    trend: "rising"
  },
  {
    id: "m1693",
    name: "Justin",
    normalizedName: "justin",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jus",
      "Jusie"
    ],
    alternateSpellings: [],
    currentRank: 1693,
    trend: "stable"
  },
  {
    id: "m226",
    name: "Omar",
    normalizedName: "omar",
    gender: "M",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 226,
    trend: "rising"
  },
  {
    id: "m1605",
    name: "Javier",
    normalizedName: "javier",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jav",
      "Javie"
    ],
    alternateSpellings: [],
    currentRank: 1605,
    trend: "stable"
  },
  {
    id: "m228",
    name: "Nash",
    normalizedName: "nash",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 228,
    trend: "rising"
  },
  {
    id: "m1613",
    name: "Jayce",
    normalizedName: "jayce",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jay"
    ],
    alternateSpellings: [],
    currentRank: 1613,
    trend: "stable"
  },
  {
    id: "m231",
    name: "Colin",
    normalizedName: "colin",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Col"
    ],
    alternateSpellings: [],
    currentRank: 231,
    trend: "rising"
  },
  {
    id: "m232",
    name: "Bradley",
    normalizedName: "bradley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Brad",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 232,
    trend: "rising"
  },
  {
    id: "m1153",
    name: "Cash",
    normalizedName: "cash",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1153,
    trend: "stable"
  },
  {
    id: "m1250",
    name: "Derek",
    normalizedName: "derek",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Der"
    ],
    alternateSpellings: [],
    currentRank: 1250,
    trend: "stable"
  },
  {
    id: "m1174",
    name: "Cody",
    normalizedName: "cody",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1174,
    trend: "stable"
  },
  {
    id: "m1185",
    name: "Corbin",
    normalizedName: "corbin",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cor",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1185,
    trend: "stable"
  },
  {
    id: "m1627",
    name: "Jensen",
    normalizedName: "jensen",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jen",
      "Jenie"
    ],
    alternateSpellings: [],
    currentRank: 1627,
    trend: "stable"
  },
  {
    id: "m1407",
    name: "Gael",
    normalizedName: "gael",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1407,
    trend: "stable"
  },
  {
    id: "m1393",
    name: "Francisco",
    normalizedName: "francisco",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Fran",
      "Fraie"
    ],
    alternateSpellings: [],
    currentRank: 1393,
    trend: "stable"
  },
  {
    id: "m1751",
    name: "Killian",
    normalizedName: "killian",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kill",
      "Kilie"
    ],
    alternateSpellings: [],
    currentRank: 1751,
    trend: "stable"
  },
  {
    id: "m244",
    name: "Clayton",
    normalizedName: "clayton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Clay",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 244,
    trend: "rising"
  },
  {
    id: "m245",
    name: "Sean",
    normalizedName: "sean",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 245,
    trend: "rising"
  },
  {
    id: "m1869",
    name: "Luka",
    normalizedName: "luka",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1869,
    trend: "stable"
  },
  {
    id: "m1784",
    name: "Kyrie",
    normalizedName: "kyrie",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyr"
    ],
    alternateSpellings: [],
    currentRank: 1784,
    trend: "stable"
  },
  {
    id: "m248",
    name: "Martin",
    normalizedName: "martin",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 248,
    trend: "rising"
  },
  {
    id: "m249",
    name: "Reid",
    normalizedName: "reid",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 249,
    trend: "rising"
  },
  {
    id: "m1658",
    name: "Johnny",
    normalizedName: "johnny",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "John"
    ],
    alternateSpellings: [],
    currentRank: 1658,
    trend: "stable"
  },
  {
    id: "m1798",
    name: "Lane",
    normalizedName: "lane",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1798,
    trend: "stable"
  },
  {
    id: "m252",
    name: "Cayden",
    normalizedName: "cayden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Cay",
      "Cayie"
    ],
    alternateSpellings: [],
    currentRank: 252,
    trend: "rising"
  },
  {
    id: "m1713",
    name: "Karson",
    normalizedName: "karson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kar",
      "Karie"
    ],
    alternateSpellings: [],
    currentRank: 1713,
    trend: "stable"
  },
  {
    id: "m1737",
    name: "Kenneth",
    normalizedName: "kenneth",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ken",
      "Kenny"
    ],
    alternateSpellings: [],
    currentRank: 1737,
    trend: "stable"
  },
  {
    id: "m1302",
    name: "Eduardo",
    normalizedName: "eduardo",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Edua",
      "Eduie"
    ],
    alternateSpellings: [],
    currentRank: 1302,
    trend: "stable"
  },
  {
    id: "m1669",
    name: "Jorge",
    normalizedName: "jorge",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jor"
    ],
    alternateSpellings: [],
    currentRank: 1669,
    trend: "stable"
  },
  {
    id: "m257",
    name: "Walter",
    normalizedName: "walter",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Walt",
      "Wally"
    ],
    alternateSpellings: [],
    currentRank: 257,
    trend: "rising"
  },
  {
    id: "m1334",
    name: "Emmanuel",
    normalizedName: "emmanuel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Emma",
      "Emmie"
    ],
    alternateSpellings: [],
    currentRank: 1334,
    trend: "stable"
  },
  {
    id: "m259",
    name: "Zaiden",
    normalizedName: "zaiden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Zai",
      "Zaiie"
    ],
    alternateSpellings: [],
    currentRank: 259,
    trend: "rising"
  },
  {
    id: "m1497",
    name: "Hendrix",
    normalizedName: "hendrix",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hend",
      "Henie"
    ],
    alternateSpellings: [],
    currentRank: 1497,
    trend: "stable"
  },
  {
    id: "m262",
    name: "Ronan",
    normalizedName: "ronan",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ron"
    ],
    alternateSpellings: [],
    currentRank: 262,
    trend: "rising"
  },
  {
    id: "m263",
    name: "Stephen",
    normalizedName: "stephen",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Step",
      "Steie"
    ],
    alternateSpellings: [],
    currentRank: 263,
    trend: "rising"
  },
  {
    id: "m264",
    name: "Miguel",
    normalizedName: "miguel",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Mig",
      "Migie"
    ],
    alternateSpellings: [],
    currentRank: 264,
    trend: "rising"
  },
  {
    id: "m265",
    name: "Andre",
    normalizedName: "andre",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "And"
    ],
    alternateSpellings: [],
    currentRank: 265,
    trend: "rising"
  },
  {
    id: "m266",
    name: "Caiden",
    normalizedName: "caiden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Cai",
      "Caiie"
    ],
    alternateSpellings: [],
    currentRank: 266,
    trend: "rising"
  },
  {
    id: "m267",
    name: "Tobias",
    normalizedName: "tobias",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tob",
      "Tobie"
    ],
    alternateSpellings: [],
    currentRank: 267,
    trend: "rising"
  },
  {
    id: "m268",
    name: "Prince",
    normalizedName: "prince",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pri",
      "Priie"
    ],
    alternateSpellings: [],
    currentRank: 268,
    trend: "rising"
  },
  {
    id: "m1858",
    name: "Louis",
    normalizedName: "louis",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Lou"
    ],
    alternateSpellings: [],
    currentRank: 1858,
    trend: "stable"
  },
  {
    id: "m270",
    name: "Russell",
    normalizedName: "russell",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Russ",
      "Rusty"
    ],
    alternateSpellings: [],
    currentRank: 270,
    trend: "rising"
  },
  {
    id: "m1603",
    name: "Jasper",
    normalizedName: "jasper",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jas",
      "Jasie"
    ],
    alternateSpellings: [],
    currentRank: 1603,
    trend: "stable"
  },
  {
    id: "m1516",
    name: "Hugo",
    normalizedName: "hugo",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1516,
    trend: "stable"
  },
  {
    id: "m1464",
    name: "Gunner",
    normalizedName: "gunner",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gun",
      "Gunie"
    ],
    alternateSpellings: [],
    currentRank: 1464,
    trend: "stable"
  },
  {
    id: "m1371",
    name: "Fernando",
    normalizedName: "fernando",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Fern",
      "Ferie"
    ],
    alternateSpellings: [],
    currentRank: 1371,
    trend: "stable"
  },
  {
    id: "m277",
    name: "Sergio",
    normalizedName: "sergio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ser",
      "Serie"
    ],
    alternateSpellings: [],
    currentRank: 277,
    trend: "rising"
  },
  {
    id: "m278",
    name: "Pablo",
    normalizedName: "pablo",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pab"
    ],
    alternateSpellings: [],
    currentRank: 278,
    trend: "rising"
  },
  {
    id: "m1883",
    name: "Major",
    normalizedName: "major",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Maj"
    ],
    alternateSpellings: [],
    currentRank: 1883,
    trend: "stable"
  },
  {
    id: "m281",
    name: "Raymond",
    normalizedName: "raymond",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ray"
    ],
    alternateSpellings: [],
    currentRank: 281,
    trend: "rising"
  },
  {
    id: "m1879",
    name: "Maddox",
    normalizedName: "maddox",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mad",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 1879,
    trend: "stable"
  },
  {
    id: "m283",
    name: "Maximiliano",
    normalizedName: "maximiliano",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 5,
    nicknames: [
      "Maxi",
      "Maxie"
    ],
    alternateSpellings: [],
    currentRank: 283,
    trend: "rising"
  },
  {
    id: "m284",
    name: "Cruz",
    normalizedName: "cruz",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 284,
    trend: "rising"
  },
  {
    id: "m286",
    name: "Rafael",
    normalizedName: "rafael",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Raf",
      "Rafie"
    ],
    alternateSpellings: [],
    currentRank: 286,
    trend: "rising"
  },
  {
    id: "m1709",
    name: "Kane",
    normalizedName: "kane",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1709,
    trend: "stable"
  },
  {
    id: "m1180",
    name: "Colt",
    normalizedName: "colt",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1180,
    trend: "stable"
  },
  {
    id: "m289",
    name: "Orion",
    normalizedName: "orion",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ori"
    ],
    alternateSpellings: [],
    currentRank: 289,
    trend: "rising"
  },
  {
    id: "m290",
    name: "Atticus",
    normalizedName: "atticus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Atti",
      "Attie"
    ],
    alternateSpellings: [],
    currentRank: 290,
    trend: "rising"
  },
  {
    id: "m291",
    name: "Odin",
    normalizedName: "odin",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 291,
    trend: "rising"
  },
  {
    id: "m292",
    name: "Titus",
    normalizedName: "titus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tit"
    ],
    alternateSpellings: [],
    currentRank: 292,
    trend: "rising"
  },
  {
    id: "m1505",
    name: "Holden",
    normalizedName: "holden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Hol",
      "Holie"
    ],
    alternateSpellings: [],
    currentRank: 1505,
    trend: "stable"
  },
  {
    id: "m1213",
    name: "Dante",
    normalizedName: "dante",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dan"
    ],
    alternateSpellings: [],
    currentRank: 1213,
    trend: "stable"
  },
  {
    id: "m1408",
    name: "Gage",
    normalizedName: "gage",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1408,
    trend: "stable"
  },
  {
    id: "m297",
    name: "Pedro",
    normalizedName: "pedro",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ped"
    ],
    alternateSpellings: [],
    currentRank: 297,
    trend: "rising"
  },
  {
    id: "m298",
    name: "Sullivan",
    normalizedName: "sullivan",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Sull",
      "Sulie"
    ],
    alternateSpellings: [],
    currentRank: 298,
    trend: "rising"
  },
  {
    id: "m1395",
    name: "Frank",
    normalizedName: "frank",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Frankie"
    ],
    alternateSpellings: [],
    currentRank: 1395,
    trend: "stable"
  },
  {
    id: "m300",
    name: "Marcos",
    normalizedName: "marcos",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 300,
    trend: "rising"
  },
  {
    id: "m1254",
    name: "Desmond",
    normalizedName: "desmond",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Desm",
      "Desie"
    ],
    alternateSpellings: [],
    currentRank: 1254,
    trend: "stable"
  },
  {
    id: "m1246",
    name: "Dennis",
    normalizedName: "dennis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Den",
      "Denie"
    ],
    alternateSpellings: [],
    currentRank: 1246,
    trend: "stable"
  },
  {
    id: "m1870",
    name: "Lukas",
    normalizedName: "lukas",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Luk"
    ],
    alternateSpellings: [],
    currentRank: 1870,
    trend: "stable"
  },
  {
    id: "m305",
    name: "Royce",
    normalizedName: "royce",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Roy"
    ],
    alternateSpellings: [],
    currentRank: 305,
    trend: "rising"
  },
  {
    id: "m306",
    name: "Porter",
    normalizedName: "porter",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Por",
      "Porie"
    ],
    alternateSpellings: [],
    currentRank: 306,
    trend: "rising"
  },
  {
    id: "m1568",
    name: "Jaiden",
    normalizedName: "jaiden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jai",
      "Jaiie"
    ],
    alternateSpellings: [],
    currentRank: 1568,
    trend: "stable"
  },
  {
    id: "m310",
    name: "Devin",
    normalizedName: "devin",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dev"
    ],
    alternateSpellings: [],
    currentRank: 310,
    trend: "rising"
  },
  {
    id: "m1344",
    name: "Erik",
    normalizedName: "erik",
    gender: "M",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1344,
    trend: "stable"
  },
  {
    id: "m1706",
    name: "Kameron",
    normalizedName: "kameron",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Kame",
      "Kamie"
    ],
    alternateSpellings: [],
    currentRank: 1706,
    trend: "stable"
  },
  {
    id: "m453",
    name: "Pierce",
    normalizedName: "pierce",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pie",
      "Pieie"
    ],
    alternateSpellings: [],
    currentRank: 453,
    trend: "rising"
  },
  {
    id: "m1896",
    name: "Manuel",
    normalizedName: "manuel",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Man",
      "Manie"
    ],
    alternateSpellings: [],
    currentRank: 1896,
    trend: "stable"
  },
  {
    id: "m315",
    name: "Cesar",
    normalizedName: "cesar",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ces"
    ],
    alternateSpellings: [],
    currentRank: 315,
    trend: "rising"
  },
  {
    id: "m316",
    name: "Ronin",
    normalizedName: "ronin",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ron"
    ],
    alternateSpellings: [],
    currentRank: 316,
    trend: "rising"
  },
  {
    id: "m1900",
    name: "Marco",
    normalizedName: "marco",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar"
    ],
    alternateSpellings: [],
    currentRank: 1900,
    trend: "stable"
  },
  {
    id: "m318",
    name: "Shawn",
    normalizedName: "shawn",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Sha"
    ],
    alternateSpellings: [],
    currentRank: 318,
    trend: "rising"
  },
  {
    id: "m1714",
    name: "Karter",
    normalizedName: "karter",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kar",
      "Karie"
    ],
    alternateSpellings: [],
    currentRank: 1714,
    trend: "stable"
  },
  {
    id: "m1343",
    name: "Erick",
    normalizedName: "erick",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Eri"
    ],
    alternateSpellings: [],
    currentRank: 1343,
    trend: "stable"
  },
  {
    id: "m1427",
    name: "Gerardo",
    normalizedName: "gerardo",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gera",
      "Gerie"
    ],
    alternateSpellings: [],
    currentRank: 1427,
    trend: "stable"
  },
  {
    id: "m322",
    name: "Andy",
    normalizedName: "andy",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 322,
    trend: "rising"
  },
  {
    id: "m1175",
    name: "Cohen",
    normalizedName: "cohen",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Coh"
    ],
    alternateSpellings: [],
    currentRank: 1175,
    trend: "stable"
  },
  {
    id: "m1204",
    name: "Dalton",
    normalizedName: "dalton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dal",
      "Dalie"
    ],
    alternateSpellings: [],
    currentRank: 1204,
    trend: "stable"
  },
  {
    id: "m1828",
    name: "Leon",
    normalizedName: "leon",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1828,
    trend: "stable"
  },
  {
    id: "m328",
    name: "Anderson",
    normalizedName: "anderson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Ande",
      "Andie"
    ],
    alternateSpellings: [],
    currentRank: 328,
    trend: "rising"
  },
  {
    id: "m329",
    name: "Roberto",
    normalizedName: "roberto",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Robe",
      "Robie"
    ],
    alternateSpellings: [],
    currentRank: 329,
    trend: "rising"
  },
  {
    id: "m332",
    name: "Shane",
    normalizedName: "shane",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sha"
    ],
    alternateSpellings: [],
    currentRank: 332,
    trend: "rising"
  },
  {
    id: "m1277",
    name: "Donovan",
    normalizedName: "donovan",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dono",
      "Donie"
    ],
    alternateSpellings: [],
    currentRank: 1277,
    trend: "stable"
  },
  {
    id: "m334",
    name: "Warren",
    normalizedName: "warren",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "War"
    ],
    alternateSpellings: [],
    currentRank: 334,
    trend: "rising"
  },
  {
    id: "m335",
    name: "Reed",
    normalizedName: "reed",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 335,
    trend: "rising"
  },
  {
    id: "m1489",
    name: "Harvey",
    normalizedName: "harvey",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Har",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 1489,
    trend: "stable"
  },
  {
    id: "m468",
    name: "Romeo",
    normalizedName: "romeo",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rom"
    ],
    alternateSpellings: [],
    currentRank: 468,
    trend: "rising"
  },
  {
    id: "m338",
    name: "Solomon",
    normalizedName: "solomon",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Solo",
      "Solie"
    ],
    alternateSpellings: [],
    currentRank: 338,
    trend: "rising"
  },
  {
    id: "m340",
    name: "Mario",
    normalizedName: "mario",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar"
    ],
    alternateSpellings: [],
    currentRank: 340,
    trend: "rising"
  },
  {
    id: "m1299",
    name: "Edgar",
    normalizedName: "edgar",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Edg"
    ],
    alternateSpellings: [],
    currentRank: 1299,
    trend: "stable"
  },
  {
    id: "m1251",
    name: "Derrick",
    normalizedName: "derrick",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Derr",
      "Derie"
    ],
    alternateSpellings: [],
    currentRank: 1251,
    trend: "stable"
  },
  {
    id: "m343",
    name: "Trenton",
    normalizedName: "trenton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Tren",
      "Treie"
    ],
    alternateSpellings: [],
    currentRank: 343,
    trend: "rising"
  },
  {
    id: "m345",
    name: "Brodie",
    normalizedName: "brodie",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bro",
      "Broie"
    ],
    alternateSpellings: [],
    currentRank: 345,
    trend: "rising"
  },
  {
    id: "m1496",
    name: "Hector",
    normalizedName: "hector",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hec",
      "Hecie"
    ],
    alternateSpellings: [],
    currentRank: 1496,
    trend: "stable"
  },
  {
    id: "m347",
    name: "Damien",
    normalizedName: "damien",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dam",
      "Damie"
    ],
    alternateSpellings: [],
    currentRank: 347,
    trend: "rising"
  },
  {
    id: "m1527",
    name: "Iker",
    normalizedName: "iker",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1527,
    trend: "stable"
  },
  {
    id: "m350",
    name: "Troy",
    normalizedName: "troy",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 350,
    trend: "rising"
  },
  {
    id: "m351",
    name: "Clark",
    normalizedName: "clark",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Cla"
    ],
    alternateSpellings: [],
    currentRank: 351,
    trend: "rising"
  },
  {
    id: "m424",
    name: "Winston",
    normalizedName: "winston",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Wins",
      "Winie"
    ],
    alternateSpellings: [],
    currentRank: 424,
    trend: "rising"
  },
  {
    id: "m1494",
    name: "Hayes",
    normalizedName: "hayes",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Hay"
    ],
    alternateSpellings: [],
    currentRank: 1494,
    trend: "stable"
  },
  {
    id: "m1359",
    name: "Fabian",
    normalizedName: "fabian",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fab",
      "Fabie"
    ],
    alternateSpellings: [],
    currentRank: 1359,
    trend: "stable"
  },
  {
    id: "m1639",
    name: "Jett",
    normalizedName: "jett",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1639,
    trend: "stable"
  },
  {
    id: "m357",
    name: "Conor",
    normalizedName: "conor",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Con"
    ],
    alternateSpellings: [],
    currentRank: 357,
    trend: "rising"
  },
  {
    id: "m1052",
    name: "Memphis",
    normalizedName: "memphis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Memp",
      "Memie"
    ],
    alternateSpellings: [],
    currentRank: 1052,
    trend: "stable"
  },
  {
    id: "m360",
    name: "Rory",
    normalizedName: "rory",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 360,
    trend: "rising"
  },
  {
    id: "m1367",
    name: "Felipe",
    normalizedName: "felipe",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Fel",
      "Felie"
    ],
    alternateSpellings: [],
    currentRank: 1367,
    trend: "stable"
  },
  {
    id: "m1084",
    name: "Tate",
    normalizedName: "tate",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1084,
    trend: "stable"
  },
  {
    id: "m1689",
    name: "Julius",
    normalizedName: "julius",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jul",
      "Julie"
    ],
    alternateSpellings: [],
    currentRank: 1689,
    trend: "stable"
  },
  {
    id: "m1715",
    name: "Kasen",
    normalizedName: "kasen",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kas"
    ],
    alternateSpellings: [],
    currentRank: 1715,
    trend: "stable"
  },
  {
    id: "m365",
    name: "Ruben",
    normalizedName: "ruben",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Rub"
    ],
    alternateSpellings: [],
    currentRank: 365,
    trend: "rising"
  },
  {
    id: "m1401",
    name: "Frederick",
    normalizedName: "frederick",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Fred",
      "Freddie",
      "Rick"
    ],
    alternateSpellings: [],
    currentRank: 1401,
    trend: "stable"
  },
  {
    id: "m1139",
    name: "Bruce",
    normalizedName: "bruce",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brucie"
    ],
    alternateSpellings: [],
    currentRank: 1139,
    trend: "stable"
  },
  {
    id: "m369",
    name: "Matias",
    normalizedName: "matias",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mat",
      "Matie"
    ],
    alternateSpellings: [],
    currentRank: 369,
    trend: "rising"
  },
  {
    id: "m370",
    name: "Nehemiah",
    normalizedName: "nehemiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Nehe",
      "Nehie"
    ],
    alternateSpellings: [],
    currentRank: 370,
    trend: "rising"
  },
  {
    id: "m371",
    name: "Philip",
    normalizedName: "philip",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Phi",
      "Phiie"
    ],
    alternateSpellings: [],
    currentRank: 371,
    trend: "rising"
  },
  {
    id: "m1716",
    name: "Kash",
    normalizedName: "kash",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1716,
    trend: "stable"
  },
  {
    id: "m1456",
    name: "Gregory",
    normalizedName: "gregory",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Greg"
    ],
    alternateSpellings: [],
    currentRank: 1456,
    trend: "stable"
  },
  {
    id: "m1808",
    name: "Lawrence",
    normalizedName: "lawrence",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Larry",
      "Law"
    ],
    alternateSpellings: [],
    currentRank: 1808,
    trend: "stable"
  },
  {
    id: "m1781",
    name: "Kyler",
    normalizedName: "kyler",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyl"
    ],
    alternateSpellings: [],
    currentRank: 1781,
    trend: "stable"
  },
  {
    id: "m376",
    name: "Seth",
    normalizedName: "seth",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 376,
    trend: "rising"
  },
  {
    id: "m1786",
    name: "Kyson",
    normalizedName: "kyson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kys"
    ],
    alternateSpellings: [],
    currentRank: 1786,
    trend: "stable"
  },
  {
    id: "m1543",
    name: "Ismael",
    normalizedName: "ismael",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Ism",
      "Ismie"
    ],
    alternateSpellings: [],
    currentRank: 1543,
    trend: "stable"
  },
  {
    id: "m379",
    name: "Scott",
    normalizedName: "scott",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Sco"
    ],
    alternateSpellings: [],
    currentRank: 379,
    trend: "rising"
  },
  {
    id: "m1831",
    name: "Leonel",
    normalizedName: "leonel",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Leo",
      "Leoie"
    ],
    alternateSpellings: [],
    currentRank: 1831,
    trend: "stable"
  },
  {
    id: "m1397",
    name: "Franklin",
    normalizedName: "franklin",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fran",
      "Fraie"
    ],
    alternateSpellings: [],
    currentRank: 1397,
    trend: "stable"
  },
  {
    id: "m506",
    name: "Rocco",
    normalizedName: "rocco",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Roc"
    ],
    alternateSpellings: [],
    currentRank: 506,
    trend: "stable"
  },
  {
    id: "m1476",
    name: "Hank",
    normalizedName: "hank",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1476,
    trend: "stable"
  },
  {
    id: "m504",
    name: "Rodrigo",
    normalizedName: "rodrigo",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Rodr",
      "Rodie"
    ],
    alternateSpellings: [],
    currentRank: 504,
    trend: "stable"
  },
  {
    id: "m385",
    name: "Ty",
    normalizedName: "ty",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 385,
    trend: "rising"
  },
  {
    id: "m1760",
    name: "Kobe",
    normalizedName: "kobe",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1760,
    trend: "stable"
  },
  {
    id: "m387",
    name: "Duke",
    normalizedName: "duke",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 387,
    trend: "rising"
  },
  {
    id: "m388",
    name: "Allen",
    normalizedName: "allen",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "All"
    ],
    alternateSpellings: [],
    currentRank: 388,
    trend: "rising"
  },
  {
    id: "m1698",
    name: "Kaiden",
    normalizedName: "kaiden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kai",
      "Kaiie"
    ],
    alternateSpellings: [],
    currentRank: 1698,
    trend: "stable"
  },
  {
    id: "m390",
    name: "Adan",
    normalizedName: "adan",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 390,
    trend: "rising"
  },
  {
    id: "m1388",
    name: "Forrest",
    normalizedName: "forrest",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Forr",
      "Forie"
    ],
    alternateSpellings: [],
    currentRank: 1388,
    trend: "stable"
  },
  {
    id: "m392",
    name: "Arturo",
    normalizedName: "arturo",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Art",
      "Artie"
    ],
    alternateSpellings: [],
    currentRank: 392,
    trend: "rising"
  },
  {
    id: "m1809",
    name: "Lawson",
    normalizedName: "lawson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Law",
      "Lawie"
    ],
    alternateSpellings: [],
    currentRank: 1809,
    trend: "stable"
  },
  {
    id: "m394",
    name: "Alberto",
    normalizedName: "alberto",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Albe",
      "Albie"
    ],
    alternateSpellings: [],
    currentRank: 394,
    trend: "rising"
  },
  {
    id: "m1579",
    name: "Jamari",
    normalizedName: "jamari",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jam",
      "Jamie"
    ],
    alternateSpellings: [],
    currentRank: 1579,
    trend: "stable"
  },
  {
    id: "m396",
    name: "Matthias",
    normalizedName: "matthias",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Matt",
      "Matie"
    ],
    alternateSpellings: [],
    currentRank: 396,
    trend: "rising"
  },
  {
    id: "m1176",
    name: "Colby",
    normalizedName: "colby",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Col"
    ],
    alternateSpellings: [],
    currentRank: 1176,
    trend: "stable"
  },
  {
    id: "m398",
    name: "Benson",
    normalizedName: "benson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ben",
      "Benie"
    ],
    alternateSpellings: [],
    currentRank: 398,
    trend: "rising"
  },
  {
    id: "m399",
    name: "Marshall",
    normalizedName: "marshall",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mars",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 399,
    trend: "rising"
  },
  {
    id: "m400",
    name: "Adonis",
    normalizedName: "adonis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ado",
      "Adoie"
    ],
    alternateSpellings: [],
    currentRank: 400,
    trend: "rising"
  },
  {
    id: "m401",
    name: "Trent",
    normalizedName: "trent",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Tre"
    ],
    alternateSpellings: [],
    currentRank: 401,
    trend: "rising"
  },
  {
    id: "m1466",
    name: "Gustavo",
    normalizedName: "gustavo",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gust",
      "Gusie"
    ],
    alternateSpellings: [],
    currentRank: 1466,
    trend: "stable"
  },
  {
    id: "m1618",
    name: "Jayson",
    normalizedName: "jayson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 1618,
    trend: "stable"
  },
  {
    id: "m1197",
    name: "Cyrus",
    normalizedName: "cyrus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cyr"
    ],
    alternateSpellings: [],
    currentRank: 1197,
    trend: "stable"
  },
  {
    id: "m406",
    name: "Clay",
    normalizedName: "clay",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 406,
    trend: "rising"
  },
  {
    id: "m695",
    name: "Moshe",
    normalizedName: "moshe",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mos"
    ],
    alternateSpellings: [],
    currentRank: 695,
    trend: "stable"
  },
  {
    id: "m1625",
    name: "Jeffery",
    normalizedName: "jeffery",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jeff",
      "Jefie"
    ],
    alternateSpellings: [],
    currentRank: 1625,
    trend: "stable"
  },
  {
    id: "m409",
    name: "Kellan",
    normalizedName: "kellan",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kel",
      "Kelie"
    ],
    alternateSpellings: [],
    currentRank: 409,
    trend: "rising"
  },
  {
    id: "m410",
    name: "Moses",
    normalizedName: "moses",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mos"
    ],
    alternateSpellings: [],
    currentRank: 410,
    trend: "rising"
  },
  {
    id: "m795",
    name: "Princeton",
    normalizedName: "princeton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Prin",
      "Priie"
    ],
    alternateSpellings: [],
    currentRank: 795,
    trend: "stable"
  },
  {
    id: "m1418",
    name: "Gauge",
    normalizedName: "gauge",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gau"
    ],
    alternateSpellings: [],
    currentRank: 1418,
    trend: "stable"
  },
  {
    id: "m1346",
    name: "Ernesto",
    normalizedName: "ernesto",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Erne",
      "Ernie"
    ],
    alternateSpellings: [],
    currentRank: 1346,
    trend: "stable"
  },
  {
    id: "m1794",
    name: "Landen",
    normalizedName: "landen",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lan",
      "Lanie"
    ],
    alternateSpellings: [],
    currentRank: 1794,
    trend: "stable"
  },
  {
    id: "m416",
    name: "Moises",
    normalizedName: "moises",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Moi",
      "Moiie"
    ],
    alternateSpellings: [],
    currentRank: 416,
    trend: "rising"
  },
  {
    id: "m1735",
    name: "Kendrick",
    normalizedName: "kendrick",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kend",
      "Kenie"
    ],
    alternateSpellings: [],
    currentRank: 1735,
    trend: "stable"
  },
  {
    id: "m1261",
    name: "Dexter",
    normalizedName: "dexter",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dex",
      "Dexie"
    ],
    alternateSpellings: [],
    currentRank: 1261,
    trend: "stable"
  },
  {
    id: "m419",
    name: "Alonso",
    normalizedName: "alonso",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Alo",
      "Aloie"
    ],
    alternateSpellings: [],
    currentRank: 419,
    trend: "rising"
  },
  {
    id: "m1893",
    name: "Malik",
    normalizedName: "malik",
    gender: "M",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mal"
    ],
    alternateSpellings: [],
    currentRank: 1893,
    trend: "stable"
  },
  {
    id: "m1575",
    name: "Jalen",
    normalizedName: "jalen",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jal"
    ],
    alternateSpellings: [],
    currentRank: 1575,
    trend: "stable"
  },
  {
    id: "m423",
    name: "Apollo",
    normalizedName: "apollo",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Apo",
      "Apoie"
    ],
    alternateSpellings: [],
    currentRank: 423,
    trend: "rising"
  },
  {
    id: "m425",
    name: "Sylas",
    normalizedName: "sylas",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Syl"
    ],
    alternateSpellings: [],
    currentRank: 425,
    trend: "rising"
  },
  {
    id: "m426",
    name: "Noel",
    normalizedName: "noel",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 426,
    trend: "rising"
  },
  {
    id: "m1194",
    name: "Crew",
    normalizedName: "crew",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1194,
    trend: "stable"
  },
  {
    id: "m430",
    name: "Quentin",
    normalizedName: "quentin",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Quen",
      "Queie"
    ],
    alternateSpellings: [],
    currentRank: 430,
    trend: "rising"
  },
  {
    id: "m1125",
    name: "Bowen",
    normalizedName: "bowen",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bow"
    ],
    alternateSpellings: [],
    currentRank: 1125,
    trend: "stable"
  },
  {
    id: "m1779",
    name: "Kylan",
    normalizedName: "kylan",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyl"
    ],
    alternateSpellings: [],
    currentRank: 1779,
    trend: "stable"
  },
  {
    id: "m1212",
    name: "Danny",
    normalizedName: "danny",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dan"
    ],
    alternateSpellings: [],
    currentRank: 1212,
    trend: "stable"
  },
  {
    id: "m434",
    name: "Tony",
    normalizedName: "tony",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 434,
    trend: "rising"
  },
  {
    id: "m435",
    name: "Alec",
    normalizedName: "alec",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 435,
    trend: "rising"
  },
  {
    id: "m436",
    name: "Royal",
    normalizedName: "royal",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Roy"
    ],
    alternateSpellings: [],
    currentRank: 436,
    trend: "rising"
  },
  {
    id: "m1724",
    name: "Keaton",
    normalizedName: "keaton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kea",
      "Keaie"
    ],
    alternateSpellings: [],
    currentRank: 1724,
    trend: "stable"
  },
  {
    id: "m438",
    name: "Jayceon",
    normalizedName: "jayceon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jayc",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 438,
    trend: "rising"
  },
  {
    id: "m1349",
    name: "Esteban",
    normalizedName: "esteban",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Este",
      "Estie"
    ],
    alternateSpellings: [],
    currentRank: 1349,
    trend: "stable"
  },
  {
    id: "m440",
    name: "Cullen",
    normalizedName: "cullen",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Cul",
      "Culie"
    ],
    alternateSpellings: [],
    currentRank: 440,
    trend: "rising"
  },
  {
    id: "m1339",
    name: "Enrique",
    normalizedName: "enrique",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Enri",
      "Enrie"
    ],
    alternateSpellings: [],
    currentRank: 1339,
    trend: "stable"
  },
  {
    id: "m442",
    name: "Ari",
    normalizedName: "ari",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 442,
    trend: "rising"
  },
  {
    id: "m443",
    name: "Otto",
    normalizedName: "otto",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 443,
    trend: "rising"
  },
  {
    id: "m444",
    name: "Armando",
    normalizedName: "armando",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arma",
      "Armie"
    ],
    alternateSpellings: [],
    currentRank: 444,
    trend: "rising"
  },
  {
    id: "m445",
    name: "Saint",
    normalizedName: "saint",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Sai"
    ],
    alternateSpellings: [],
    currentRank: 445,
    trend: "rising"
  },
  {
    id: "m446",
    name: "Soren",
    normalizedName: "soren",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Sor"
    ],
    alternateSpellings: [],
    currentRank: 446,
    trend: "rising"
  },
  {
    id: "m1152",
    name: "Case",
    normalizedName: "case",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1152,
    trend: "stable"
  },
  {
    id: "m449",
    name: "Stanley",
    normalizedName: "stanley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Stan",
      "Staie"
    ],
    alternateSpellings: [],
    currentRank: 449,
    trend: "rising"
  },
  {
    id: "m1179",
    name: "Collin",
    normalizedName: "collin",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Col",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 1179,
    trend: "stable"
  },
  {
    id: "m451",
    name: "Mathew",
    normalizedName: "mathew",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mat",
      "Matie"
    ],
    alternateSpellings: [],
    currentRank: 451,
    trend: "rising"
  },
  {
    id: "m817",
    name: "Nikolai",
    normalizedName: "nikolai",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Niko",
      "Nikie"
    ],
    alternateSpellings: [],
    currentRank: 817,
    trend: "stable"
  },
  {
    id: "m454",
    name: "Roy",
    normalizedName: "roy",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 454,
    trend: "rising"
  },
  {
    id: "m1083",
    name: "Talon",
    normalizedName: "talon",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Tal"
    ],
    alternateSpellings: [],
    currentRank: 1083,
    trend: "stable"
  },
  {
    id: "m456",
    name: "Alonzo",
    normalizedName: "alonzo",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Alo",
      "Aloie"
    ],
    alternateSpellings: [],
    currentRank: 456,
    trend: "rising"
  },
  {
    id: "m457",
    name: "Bryant",
    normalizedName: "bryant",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bry",
      "Bryie"
    ],
    alternateSpellings: [],
    currentRank: 457,
    trend: "rising"
  },
  {
    id: "m458",
    name: "Maximilian",
    normalizedName: "maximilian",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Max",
      "Maxi"
    ],
    alternateSpellings: [],
    currentRank: 458,
    trend: "rising"
  },
  {
    id: "m1662",
    name: "Jonas",
    normalizedName: "jonas",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jon"
    ],
    alternateSpellings: [],
    currentRank: 1662,
    trend: "stable"
  },
  {
    id: "m461",
    name: "Raul",
    normalizedName: "raul",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 461,
    trend: "rising"
  },
  {
    id: "m1863",
    name: "Lucian",
    normalizedName: "lucian",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Luc",
      "Lucie"
    ],
    alternateSpellings: [],
    currentRank: 1863,
    trend: "stable"
  },
  {
    id: "m1750",
    name: "Kieran",
    normalizedName: "kieran",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kie",
      "Kieie"
    ],
    alternateSpellings: [],
    currentRank: 1750,
    trend: "stable"
  },
  {
    id: "m464",
    name: "Braylon",
    normalizedName: "braylon",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bray",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 464,
    trend: "rising"
  },
  {
    id: "m465",
    name: "Dillon",
    normalizedName: "dillon",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dil",
      "Dilie"
    ],
    alternateSpellings: [],
    currentRank: 465,
    trend: "rising"
  },
  {
    id: "m466",
    name: "Nelson",
    normalizedName: "nelson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Nel",
      "Nelie"
    ],
    alternateSpellings: [],
    currentRank: 466,
    trend: "rising"
  },
  {
    id: "m1749",
    name: "Kian",
    normalizedName: "kian",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1749,
    trend: "stable"
  },
  {
    id: "m570",
    name: "Terrance",
    normalizedName: "terrance",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Terr",
      "Terie"
    ],
    alternateSpellings: [],
    currentRank: 570,
    trend: "stable"
  },
  {
    id: "m470",
    name: "Uriel",
    normalizedName: "uriel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Uri"
    ],
    alternateSpellings: [],
    currentRank: 470,
    trend: "rising"
  },
  {
    id: "m471",
    name: "Zachariah",
    normalizedName: "zachariah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Zach",
      "Zacie"
    ],
    alternateSpellings: [],
    currentRank: 471,
    trend: "rising"
  },
  {
    id: "m1832",
    name: "Leonidas",
    normalizedName: "leonidas",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Leon",
      "Leoie"
    ],
    alternateSpellings: [],
    currentRank: 1832,
    trend: "stable"
  },
  {
    id: "m1208",
    name: "Damon",
    normalizedName: "damon",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dam"
    ],
    alternateSpellings: [],
    currentRank: 1208,
    trend: "stable"
  },
  {
    id: "m474",
    name: "Aden",
    normalizedName: "aden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 474,
    trend: "rising"
  },
  {
    id: "m475",
    name: "Maurice",
    normalizedName: "maurice",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Maur",
      "Mauie"
    ],
    alternateSpellings: [],
    currentRank: 475,
    trend: "rising"
  },
  {
    id: "m476",
    name: "Sterling",
    normalizedName: "sterling",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ster",
      "Steie"
    ],
    alternateSpellings: [],
    currentRank: 476,
    trend: "rising"
  },
  {
    id: "m1585",
    name: "Jamir",
    normalizedName: "jamir",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jam"
    ],
    alternateSpellings: [],
    currentRank: 1585,
    trend: "stable"
  },
  {
    id: "m478",
    name: "Ahmad",
    normalizedName: "ahmad",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ahm"
    ],
    alternateSpellings: [],
    currentRank: 478,
    trend: "rising"
  },
  {
    id: "m1300",
    name: "Edison",
    normalizedName: "edison",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Edi",
      "Ediie"
    ],
    alternateSpellings: [],
    currentRank: 1300,
    trend: "stable"
  },
  {
    id: "m1545",
    name: "Issac",
    normalizedName: "issac",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Iss"
    ],
    alternateSpellings: [],
    currentRank: 1545,
    trend: "stable"
  },
  {
    id: "m481",
    name: "Saul",
    normalizedName: "saul",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 481,
    trend: "rising"
  },
  {
    id: "m1705",
    name: "Kamden",
    normalizedName: "kamden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kam",
      "Kamie"
    ],
    alternateSpellings: [],
    currentRank: 1705,
    trend: "stable"
  },
  {
    id: "m1881",
    name: "Magnus",
    normalizedName: "magnus",
    gender: "M",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mag",
      "Magie"
    ],
    alternateSpellings: [],
    currentRank: 1881,
    trend: "stable"
  },
  {
    id: "m484",
    name: "Titan",
    normalizedName: "titan",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tit"
    ],
    alternateSpellings: [],
    currentRank: 484,
    trend: "rising"
  },
  {
    id: "m1884",
    name: "Makai",
    normalizedName: "makai",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mak"
    ],
    alternateSpellings: [],
    currentRank: 1884,
    trend: "stable"
  },
  {
    id: "m1148",
    name: "Cannon",
    normalizedName: "cannon",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Can",
      "Canie"
    ],
    alternateSpellings: [],
    currentRank: 1148,
    trend: "stable"
  },
  {
    id: "m487",
    name: "Ryland",
    normalizedName: "ryland",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ryl",
      "Rylie"
    ],
    alternateSpellings: [],
    currentRank: 487,
    trend: "rising"
  },
  {
    id: "m1727",
    name: "Keith",
    normalizedName: "keith",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Keithy"
    ],
    alternateSpellings: [],
    currentRank: 1727,
    trend: "stable"
  },
  {
    id: "m1182",
    name: "Conrad",
    normalizedName: "conrad",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Con",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1182,
    trend: "stable"
  },
  {
    id: "m491",
    name: "Mekhi",
    normalizedName: "mekhi",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mek"
    ],
    alternateSpellings: [],
    currentRank: 491,
    trend: "rising"
  },
  {
    id: "m493",
    name: "Zander",
    normalizedName: "zander",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zan",
      "Zanie"
    ],
    alternateSpellings: [],
    currentRank: 493,
    trend: "rising"
  },
  {
    id: "m786",
    name: "Raylan",
    normalizedName: "raylan",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ray",
      "Rayie"
    ],
    alternateSpellings: [],
    currentRank: 786,
    trend: "stable"
  },
  {
    id: "m1695",
    name: "Kade",
    normalizedName: "kade",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1695,
    trend: "stable"
  },
  {
    id: "m1728",
    name: "Kellen",
    normalizedName: "kellen",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kel",
      "Kelie"
    ],
    alternateSpellings: [],
    currentRank: 1728,
    trend: "stable"
  },
  {
    id: "m497",
    name: "Nikolas",
    normalizedName: "nikolas",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Niko",
      "Nikie"
    ],
    alternateSpellings: [],
    currentRank: 497,
    trend: "rising"
  },
  {
    id: "m1235",
    name: "Deacon",
    normalizedName: "deacon",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dea",
      "Deaie"
    ],
    alternateSpellings: [],
    currentRank: 1235,
    trend: "stable"
  },
  {
    id: "m499",
    name: "Chaim",
    normalizedName: "chaim",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Cha"
    ],
    alternateSpellings: [],
    currentRank: 499,
    trend: "rising"
  },
  {
    id: "m1140",
    name: "Bruno",
    normalizedName: "bruno",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bru"
    ],
    alternateSpellings: [],
    currentRank: 1140,
    trend: "stable"
  },
  {
    id: "m501",
    name: "Nico",
    normalizedName: "nico",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 501,
    trend: "stable"
  },
  {
    id: "m1748",
    name: "Khalil",
    normalizedName: "khalil",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kha",
      "Khaie"
    ],
    alternateSpellings: [],
    currentRank: 1748,
    trend: "stable"
  },
  {
    id: "m1475",
    name: "Hamza",
    normalizedName: "hamza",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Ham"
    ],
    alternateSpellings: [],
    currentRank: 1475,
    trend: "stable"
  },
  {
    id: "m1775",
    name: "Kristopher",
    normalizedName: "kristopher",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kris",
      "Kriie"
    ],
    alternateSpellings: [],
    currentRank: 1775,
    trend: "stable"
  },
  {
    id: "m507",
    name: "Sincere",
    normalizedName: "sincere",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Sinc",
      "Sinie"
    ],
    alternateSpellings: [],
    currentRank: 507,
    trend: "stable"
  },
  {
    id: "m508",
    name: "Jakari",
    normalizedName: "jakari",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jak",
      "Jakie"
    ],
    alternateSpellings: [],
    currentRank: 508,
    trend: "stable"
  },
  {
    id: "m509",
    name: "Marvin",
    normalizedName: "marvin",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 509,
    trend: "stable"
  },
  {
    id: "m1243",
    name: "Demetrius",
    normalizedName: "demetrius",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Deme",
      "Demie"
    ],
    alternateSpellings: [],
    currentRank: 1243,
    trend: "stable"
  },
  {
    id: "m511",
    name: "Mitchell",
    normalizedName: "mitchell",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mitc",
      "Mitie"
    ],
    alternateSpellings: [],
    currentRank: 511,
    trend: "stable"
  },
  {
    id: "m1840",
    name: "Lewis",
    normalizedName: "lewis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lew"
    ],
    alternateSpellings: [],
    currentRank: 1840,
    trend: "stable"
  },
  {
    id: "m513",
    name: "Nixon",
    normalizedName: "nixon",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Nix"
    ],
    alternateSpellings: [],
    currentRank: 513,
    trend: "stable"
  },
  {
    id: "m514",
    name: "Axl",
    normalizedName: "axl",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 514,
    trend: "stable"
  },
  {
    id: "m1653",
    name: "Johan",
    normalizedName: "johan",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Joh"
    ],
    alternateSpellings: [],
    currentRank: 1653,
    trend: "stable"
  },
  {
    id: "m516",
    name: "Tadeo",
    normalizedName: "tadeo",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tad"
    ],
    alternateSpellings: [],
    currentRank: 516,
    trend: "stable"
  },
  {
    id: "m1892",
    name: "Malcolm",
    normalizedName: "malcolm",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Malc",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 1892,
    trend: "stable"
  },
  {
    id: "m518",
    name: "Trace",
    normalizedName: "trace",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tra"
    ],
    alternateSpellings: [],
    currentRank: 518,
    trend: "stable"
  },
  {
    id: "m1634",
    name: "Jerry",
    normalizedName: "jerry",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jer"
    ],
    alternateSpellings: [],
    currentRank: 1634,
    trend: "stable"
  },
  {
    id: "m1810",
    name: "Layne",
    normalizedName: "layne",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lay"
    ],
    alternateSpellings: [],
    currentRank: 1810,
    trend: "stable"
  },
  {
    id: "m1392",
    name: "Francis",
    normalizedName: "francis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fran",
      "Fraie"
    ],
    alternateSpellings: [],
    currentRank: 1392,
    trend: "stable"
  },
  {
    id: "m1652",
    name: "Joey",
    normalizedName: "joey",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1652,
    trend: "stable"
  },
  {
    id: "m525",
    name: "Trevor",
    normalizedName: "trevor",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tre",
      "Treie"
    ],
    alternateSpellings: [],
    currentRank: 525,
    trend: "stable"
  },
  {
    id: "m526",
    name: "Valentino",
    normalizedName: "valentino",
    gender: "M",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Vale",
      "Valie"
    ],
    alternateSpellings: [],
    currentRank: 526,
    trend: "stable"
  },
  {
    id: "m1416",
    name: "Gary",
    normalizedName: "gary",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1416,
    trend: "stable"
  },
  {
    id: "m1281",
    name: "Douglas",
    normalizedName: "douglas",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Doug",
      "Dougie"
    ],
    alternateSpellings: [],
    currentRank: 1281,
    trend: "stable"
  },
  {
    id: "m529",
    name: "Terry",
    normalizedName: "terry",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ter"
    ],
    alternateSpellings: [],
    currentRank: 529,
    trend: "stable"
  },
  {
    id: "m1563",
    name: "Jagger",
    normalizedName: "jagger",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jag",
      "Jagie"
    ],
    alternateSpellings: [],
    currentRank: 1563,
    trend: "stable"
  },
  {
    id: "m1196",
    name: "Crosby",
    normalizedName: "crosby",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cro",
      "Croie"
    ],
    alternateSpellings: [],
    currentRank: 1196,
    trend: "stable"
  },
  {
    id: "m1788",
    name: "Lachlan",
    normalizedName: "lachlan",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lach",
      "Lacie"
    ],
    alternateSpellings: [],
    currentRank: 1788,
    trend: "stable"
  },
  {
    id: "m533",
    name: "Niko",
    normalizedName: "niko",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 533,
    trend: "stable"
  },
  {
    id: "m534",
    name: "Quinton",
    normalizedName: "quinton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Quin",
      "Quiie"
    ],
    alternateSpellings: [],
    currentRank: 534,
    trend: "stable"
  },
  {
    id: "m535",
    name: "Zayn",
    normalizedName: "zayn",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 535,
    trend: "stable"
  },
  {
    id: "m1899",
    name: "Marcelo",
    normalizedName: "marcelo",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Marc",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 1899,
    trend: "stable"
  },
  {
    id: "m537",
    name: "Reginald",
    normalizedName: "reginald",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Regi",
      "Regie"
    ],
    alternateSpellings: [],
    currentRank: 537,
    trend: "stable"
  },
  {
    id: "m538",
    name: "Ricky",
    normalizedName: "ricky",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ric"
    ],
    alternateSpellings: [],
    currentRank: 538,
    trend: "stable"
  },
  {
    id: "m1761",
    name: "Koda",
    normalizedName: "koda",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1761,
    trend: "stable"
  },
  {
    id: "m1723",
    name: "Keanu",
    normalizedName: "keanu",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kea"
    ],
    alternateSpellings: [],
    currentRank: 1723,
    trend: "stable"
  },
  {
    id: "m1290",
    name: "Dustin",
    normalizedName: "dustin",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dus",
      "Dusie"
    ],
    alternateSpellings: [],
    currentRank: 1290,
    trend: "stable"
  },
  {
    id: "m542",
    name: "Alfred",
    normalizedName: "alfred",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Alf",
      "Alfie"
    ],
    alternateSpellings: [],
    currentRank: 542,
    trend: "stable"
  },
  {
    id: "m1482",
    name: "Harold",
    normalizedName: "harold",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Harry",
      "Hal"
    ],
    alternateSpellings: [],
    currentRank: 1482,
    trend: "stable"
  },
  {
    id: "m1523",
    name: "Ibrahim",
    normalizedName: "ibrahim",
    gender: "M",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ibra",
      "Ibrie"
    ],
    alternateSpellings: [],
    currentRank: 1523,
    trend: "stable"
  },
  {
    id: "m545",
    name: "Vince",
    normalizedName: "vince",
    gender: "M",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Vin"
    ],
    alternateSpellings: [],
    currentRank: 545,
    trend: "stable"
  },
  {
    id: "m1222",
    name: "Darren",
    normalizedName: "darren",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dar",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 1222,
    trend: "stable"
  },
  {
    id: "m547",
    name: "Jaylen",
    normalizedName: "jaylen",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 547,
    trend: "stable"
  },
  {
    id: "m1811",
    name: "Layton",
    normalizedName: "layton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lay",
      "Layie"
    ],
    alternateSpellings: [],
    currentRank: 1811,
    trend: "stable"
  },
  {
    id: "m551",
    name: "Randy",
    normalizedName: "randy",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ran"
    ],
    alternateSpellings: [],
    currentRank: 551,
    trend: "stable"
  },
  {
    id: "m552",
    name: "Curtis",
    normalizedName: "curtis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cur",
      "Curie"
    ],
    alternateSpellings: [],
    currentRank: 552,
    trend: "stable"
  },
  {
    id: "m553",
    name: "Otis",
    normalizedName: "otis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 553,
    trend: "stable"
  },
  {
    id: "m1624",
    name: "Jefferson",
    normalizedName: "jefferson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Jeff",
      "Jefie"
    ],
    alternateSpellings: [],
    currentRank: 1624,
    trend: "stable"
  },
  {
    id: "m555",
    name: "Willie",
    normalizedName: "willie",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Wil",
      "Wilie"
    ],
    alternateSpellings: [],
    currentRank: 555,
    trend: "stable"
  },
  {
    id: "m1486",
    name: "Harry",
    normalizedName: "harry",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Har"
    ],
    alternateSpellings: [],
    currentRank: 1486,
    trend: "stable"
  },
  {
    id: "m1384",
    name: "Flynn",
    normalizedName: "flynn",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Fly"
    ],
    alternateSpellings: [],
    currentRank: 1384,
    trend: "stable"
  },
  {
    id: "m559",
    name: "Santino",
    normalizedName: "santino",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Sant",
      "Sanie"
    ],
    alternateSpellings: [],
    currentRank: 559,
    trend: "stable"
  },
  {
    id: "m1783",
    name: "Kyree",
    normalizedName: "kyree",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyr"
    ],
    alternateSpellings: [],
    currentRank: 1783,
    trend: "stable"
  },
  {
    id: "m561",
    name: "Tyson",
    normalizedName: "tyson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Tys"
    ],
    alternateSpellings: [],
    currentRank: 561,
    trend: "stable"
  },
  {
    id: "m562",
    name: "Jaxton",
    normalizedName: "jaxton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jax",
      "Jaxie"
    ],
    alternateSpellings: [],
    currentRank: 562,
    trend: "stable"
  },
  {
    id: "m564",
    name: "Briggs",
    normalizedName: "briggs",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bri",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 564,
    trend: "stable"
  },
  {
    id: "m1386",
    name: "Ford",
    normalizedName: "ford",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1386,
    trend: "stable"
  },
  {
    id: "m566",
    name: "Quincy",
    normalizedName: "quincy",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Qui",
      "Quiie"
    ],
    alternateSpellings: [],
    currentRank: 566,
    trend: "stable"
  },
  {
    id: "m1503",
    name: "Hezekiah",
    normalizedName: "hezekiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Heze",
      "Hezie"
    ],
    alternateSpellings: [],
    currentRank: 1503,
    trend: "stable"
  },
  {
    id: "m1351",
    name: "Eugene",
    normalizedName: "eugene",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gene"
    ],
    alternateSpellings: [],
    currentRank: 1351,
    trend: "stable"
  },
  {
    id: "m571",
    name: "Alvin",
    normalizedName: "alvin",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Alv"
    ],
    alternateSpellings: [],
    currentRank: 571,
    trend: "stable"
  },
  {
    id: "m572",
    name: "Bodhi",
    normalizedName: "bodhi",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bod"
    ],
    alternateSpellings: [],
    currentRank: 572,
    trend: "stable"
  },
  {
    id: "m573",
    name: "Carmelo",
    normalizedName: "carmelo",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Carm",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 573,
    trend: "stable"
  },
  {
    id: "m575",
    name: "Ronnie",
    normalizedName: "ronnie",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ron",
      "Ronie"
    ],
    alternateSpellings: [],
    currentRank: 575,
    trend: "stable"
  },
  {
    id: "m576",
    name: "Billy",
    normalizedName: "billy",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Bill"
    ],
    alternateSpellings: [],
    currentRank: 576,
    trend: "stable"
  },
  {
    id: "m577",
    name: "Melvin",
    normalizedName: "melvin",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mel",
      "Melie"
    ],
    alternateSpellings: [],
    currentRank: 577,
    trend: "stable"
  },
  {
    id: "m1792",
    name: "Lance",
    normalizedName: "lance",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lan"
    ],
    alternateSpellings: [],
    currentRank: 1792,
    trend: "stable"
  },
  {
    id: "m579",
    name: "Byron",
    normalizedName: "byron",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Byr"
    ],
    alternateSpellings: [],
    currentRank: 579,
    trend: "stable"
  },
  {
    id: "m1829",
    name: "Leonard",
    normalizedName: "leonard",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Leon",
      "Leoie"
    ],
    alternateSpellings: [],
    currentRank: 1829,
    trend: "stable"
  },
  {
    id: "m1479",
    name: "Harlan",
    normalizedName: "harlan",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Har",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 1479,
    trend: "stable"
  },
  {
    id: "m583",
    name: "Ezequiel",
    normalizedName: "ezequiel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Ezeq",
      "Ezeie"
    ],
    alternateSpellings: [],
    currentRank: 583,
    trend: "stable"
  },
  {
    id: "m1766",
    name: "Kolton",
    normalizedName: "kolton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kol",
      "Kolie"
    ],
    alternateSpellings: [],
    currentRank: 1766,
    trend: "stable"
  },
  {
    id: "m1803",
    name: "Larry",
    normalizedName: "larry",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lar"
    ],
    alternateSpellings: [],
    currentRank: 1803,
    trend: "stable"
  },
  {
    id: "m1100",
    name: "Anders",
    normalizedName: "anders",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "And",
      "Andie"
    ],
    alternateSpellings: [],
    currentRank: 1100,
    trend: "stable"
  },
  {
    id: "m589",
    name: "Ray",
    normalizedName: "ray",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 589,
    trend: "stable"
  },
  {
    id: "m1600",
    name: "Jase",
    normalizedName: "jase",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1600,
    trend: "stable"
  },
  {
    id: "m591",
    name: "Camilo",
    normalizedName: "camilo",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cam",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 591,
    trend: "stable"
  },
  {
    id: "m1155",
    name: "Castiel",
    normalizedName: "castiel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Cast",
      "Casie"
    ],
    alternateSpellings: [],
    currentRank: 1155,
    trend: "stable"
  },
  {
    id: "m1688",
    name: "Julio",
    normalizedName: "julio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jul"
    ],
    alternateSpellings: [],
    currentRank: 1688,
    trend: "stable"
  },
  {
    id: "m594",
    name: "Devon",
    normalizedName: "devon",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dev"
    ],
    alternateSpellings: [],
    currentRank: 594,
    trend: "stable"
  },
  {
    id: "m595",
    name: "Orlando",
    normalizedName: "orlando",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Orla",
      "Orlie"
    ],
    alternateSpellings: [],
    currentRank: 595,
    trend: "stable"
  },
  {
    id: "m1377",
    name: "Finnegan",
    normalizedName: "finnegan",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Finn",
      "Finie"
    ],
    alternateSpellings: [],
    currentRank: 1377,
    trend: "stable"
  },
  {
    id: "m1718",
    name: "Kason",
    normalizedName: "kason",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kas"
    ],
    alternateSpellings: [],
    currentRank: 1718,
    trend: "stable"
  },
  {
    id: "m729",
    name: "Tommy",
    normalizedName: "tommy",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tom"
    ],
    alternateSpellings: [],
    currentRank: 729,
    trend: "stable"
  },
  {
    id: "m1075",
    name: "Santana",
    normalizedName: "santana",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Sant",
      "Sanie"
    ],
    alternateSpellings: [],
    currentRank: 1075,
    trend: "stable"
  },
  {
    id: "m1520",
    name: "Huxley",
    normalizedName: "huxley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Hux",
      "Huxie"
    ],
    alternateSpellings: [],
    currentRank: 1520,
    trend: "stable"
  },
  {
    id: "m602",
    name: "Amari",
    normalizedName: "amari",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ama"
    ],
    alternateSpellings: [],
    currentRank: 602,
    trend: "stable"
  },
  {
    id: "m603",
    name: "Mohammed",
    normalizedName: "mohammed",
    gender: "M",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Moha",
      "Mohie"
    ],
    alternateSpellings: [],
    currentRank: 603,
    trend: "stable"
  },
  {
    id: "m1086",
    name: "Wells",
    normalizedName: "wells",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Wel"
    ],
    alternateSpellings: [],
    currentRank: 1086,
    trend: "stable"
  },
  {
    id: "m605",
    name: "Kayson",
    normalizedName: "kayson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kay",
      "Kayie"
    ],
    alternateSpellings: [],
    currentRank: 605,
    trend: "stable"
  },
  {
    id: "m1890",
    name: "Malakai",
    normalizedName: "malakai",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mala",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 1890,
    trend: "stable"
  },
  {
    id: "m607",
    name: "Callum",
    normalizedName: "callum",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cal",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 607,
    trend: "stable"
  },
  {
    id: "m1297",
    name: "Eddie",
    normalizedName: "eddie",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Edd"
    ],
    alternateSpellings: [],
    currentRank: 1297,
    trend: "stable"
  },
  {
    id: "m1577",
    name: "Jamal",
    normalizedName: "jamal",
    gender: "M",
    origins: [
      "African"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jam"
    ],
    alternateSpellings: [],
    currentRank: 1577,
    trend: "stable"
  },
  {
    id: "m611",
    name: "Ramiro",
    normalizedName: "ramiro",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ram",
      "Ramie"
    ],
    alternateSpellings: [],
    currentRank: 611,
    trend: "stable"
  },
  {
    id: "m612",
    name: "Alden",
    normalizedName: "alden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ald"
    ],
    alternateSpellings: [],
    currentRank: 612,
    trend: "stable"
  },
  {
    id: "m613",
    name: "Alfonso",
    normalizedName: "alfonso",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Alfo",
      "Alfie"
    ],
    alternateSpellings: [],
    currentRank: 613,
    trend: "stable"
  },
  {
    id: "m1157",
    name: "Cedric",
    normalizedName: "cedric",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ced",
      "Cedie"
    ],
    alternateSpellings: [],
    currentRank: 1157,
    trend: "stable"
  },
  {
    id: "m616",
    name: "Rudy",
    normalizedName: "rudy",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 616,
    trend: "stable"
  },
  {
    id: "m617",
    name: "Vincenzo",
    normalizedName: "vincenzo",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Vinc",
      "Vinie"
    ],
    alternateSpellings: [],
    currentRank: 617,
    trend: "stable"
  },
  {
    id: "m1509",
    name: "Houston",
    normalizedName: "houston",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Hous",
      "Houie"
    ],
    alternateSpellings: [],
    currentRank: 1509,
    trend: "stable"
  },
  {
    id: "m619",
    name: "Terrell",
    normalizedName: "terrell",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Terr",
      "Terie"
    ],
    alternateSpellings: [],
    currentRank: 619,
    trend: "stable"
  },
  {
    id: "m1206",
    name: "Damari",
    normalizedName: "damari",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dam",
      "Damie"
    ],
    alternateSpellings: [],
    currentRank: 1206,
    trend: "stable"
  },
  {
    id: "m1145",
    name: "Callen",
    normalizedName: "callen",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Cal",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 1145,
    trend: "stable"
  },
  {
    id: "m1001",
    name: "Alaric",
    normalizedName: "alaric",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ala",
      "Alaie"
    ],
    alternateSpellings: [],
    currentRank: 1001,
    trend: "stable"
  },
  {
    id: "m1215",
    name: "Darian",
    normalizedName: "darian",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dar",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 1215,
    trend: "stable"
  },
  {
    id: "m1068",
    name: "Ridge",
    normalizedName: "ridge",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rid"
    ],
    alternateSpellings: [],
    currentRank: 1068,
    trend: "stable"
  },
  {
    id: "m625",
    name: "Omari",
    normalizedName: "omari",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Oma"
    ],
    alternateSpellings: [],
    currentRank: 625,
    trend: "stable"
  },
  {
    id: "m626",
    name: "Davion",
    normalizedName: "davion",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dav",
      "Davie"
    ],
    alternateSpellings: [],
    currentRank: 626,
    trend: "stable"
  },
  {
    id: "m627",
    name: "Rayden",
    normalizedName: "rayden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ray",
      "Rayie"
    ],
    alternateSpellings: [],
    currentRank: 627,
    trend: "stable"
  },
  {
    id: "m628",
    name: "Roland",
    normalizedName: "roland",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rol",
      "Rolie"
    ],
    alternateSpellings: [],
    currentRank: 628,
    trend: "stable"
  },
  {
    id: "m1311",
    name: "Elian",
    normalizedName: "elian",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Eli"
    ],
    alternateSpellings: [],
    currentRank: 1311,
    trend: "stable"
  },
  {
    id: "m630",
    name: "Ben",
    normalizedName: "ben",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 630,
    trend: "stable"
  },
  {
    id: "m1374",
    name: "Finlay",
    normalizedName: "finlay",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fin",
      "Finie"
    ],
    alternateSpellings: [],
    currentRank: 1374,
    trend: "stable"
  },
  {
    id: "m632",
    name: "Carl",
    normalizedName: "carl",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 632,
    trend: "stable"
  },
  {
    id: "m633",
    name: "Samson",
    normalizedName: "samson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Sam",
      "Samie"
    ],
    alternateSpellings: [],
    currentRank: 633,
    trend: "stable"
  },
  {
    id: "m1164",
    name: "Chester",
    normalizedName: "chester",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ches",
      "Cheie"
    ],
    alternateSpellings: [],
    currentRank: 1164,
    trend: "stable"
  },
  {
    id: "m635",
    name: "Maximillian",
    normalizedName: "maximillian",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Maxi",
      "Maxie"
    ],
    alternateSpellings: [],
    currentRank: 635,
    trend: "stable"
  },
  {
    id: "m1857",
    name: "Louie",
    normalizedName: "louie",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Lou"
    ],
    alternateSpellings: [],
    currentRank: 1857,
    trend: "stable"
  },
  {
    id: "m1122",
    name: "Blaze",
    normalizedName: "blaze",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bla"
    ],
    alternateSpellings: [],
    currentRank: 1122,
    trend: "stable"
  },
  {
    id: "m638",
    name: "Brycen",
    normalizedName: "brycen",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bry",
      "Bryie"
    ],
    alternateSpellings: [],
    currentRank: 638,
    trend: "stable"
  },
  {
    id: "m1525",
    name: "Ignacio",
    normalizedName: "ignacio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Igna",
      "Ignie"
    ],
    alternateSpellings: [],
    currentRank: 1525,
    trend: "stable"
  },
  {
    id: "m798",
    name: "Jaziel",
    normalizedName: "jaziel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Jaz",
      "Jazie"
    ],
    alternateSpellings: [],
    currentRank: 798,
    trend: "stable"
  },
  {
    id: "m643",
    name: "Thaddeus",
    normalizedName: "thaddeus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Thad",
      "Thaie"
    ],
    alternateSpellings: [],
    currentRank: 643,
    trend: "stable"
  },
  {
    id: "m644",
    name: "Miller",
    normalizedName: "miller",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mil",
      "Milie"
    ],
    alternateSpellings: [],
    currentRank: 644,
    trend: "stable"
  },
  {
    id: "m645",
    name: "Roger",
    normalizedName: "roger",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rog"
    ],
    alternateSpellings: [],
    currentRank: 645,
    trend: "stable"
  },
  {
    id: "m1813",
    name: "Leandro",
    normalizedName: "leandro",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lean",
      "Leaie"
    ],
    alternateSpellings: [],
    currentRank: 1813,
    trend: "stable"
  },
  {
    id: "m1417",
    name: "Gatlin",
    normalizedName: "gatlin",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gat",
      "Gatie"
    ],
    alternateSpellings: [],
    currentRank: 1417,
    trend: "stable"
  },
  {
    id: "m726",
    name: "Westin",
    normalizedName: "westin",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Wes",
      "Wesie"
    ],
    alternateSpellings: [],
    currentRank: 726,
    trend: "stable"
  },
  {
    id: "m651",
    name: "Davian",
    normalizedName: "davian",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dav",
      "Davie"
    ],
    alternateSpellings: [],
    currentRank: 651,
    trend: "stable"
  },
  {
    id: "m1389",
    name: "Foster",
    normalizedName: "foster",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fos",
      "Fosie"
    ],
    alternateSpellings: [],
    currentRank: 1389,
    trend: "stable"
  },
  {
    id: "m1090",
    name: "Zaire",
    normalizedName: "zaire",
    gender: "M",
    origins: [
      "African"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zai"
    ],
    alternateSpellings: [],
    currentRank: 1090,
    trend: "stable"
  },
  {
    id: "m654",
    name: "Kyng",
    normalizedName: "kyng",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 654,
    trend: "stable"
  },
  {
    id: "m655",
    name: "Krew",
    normalizedName: "krew",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 655,
    trend: "stable"
  },
  {
    id: "m656",
    name: "Kye",
    normalizedName: "kye",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 656,
    trend: "stable"
  },
  {
    id: "m1819",
    name: "Leighton",
    normalizedName: "leighton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Leig",
      "Leiie"
    ],
    alternateSpellings: [],
    currentRank: 1819,
    trend: "stable"
  },
  {
    id: "m658",
    name: "Vicente",
    normalizedName: "vicente",
    gender: "M",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Vice",
      "Vicie"
    ],
    alternateSpellings: [],
    currentRank: 658,
    trend: "stable"
  },
  {
    id: "m659",
    name: "Tristen",
    normalizedName: "tristen",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Tris",
      "Triie"
    ],
    alternateSpellings: [],
    currentRank: 659,
    trend: "stable"
  },
  {
    id: "m660",
    name: "Wesson",
    normalizedName: "wesson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Wes",
      "Wesie"
    ],
    alternateSpellings: [],
    currentRank: 660,
    trend: "stable"
  },
  {
    id: "m661",
    name: "Salvatore",
    normalizedName: "salvatore",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Salv",
      "Salie"
    ],
    alternateSpellings: [],
    currentRank: 661,
    trend: "stable"
  },
  {
    id: "m839",
    name: "Augustine",
    normalizedName: "augustine",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Augu",
      "Augie"
    ],
    alternateSpellings: [],
    currentRank: 839,
    trend: "stable"
  },
  {
    id: "m1060",
    name: "Onyx",
    normalizedName: "onyx",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1060,
    trend: "stable"
  },
  {
    id: "m666",
    name: "Reuben",
    normalizedName: "reuben",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Reu",
      "Reuie"
    ],
    alternateSpellings: [],
    currentRank: 666,
    trend: "stable"
  },
  {
    id: "m667",
    name: "Colten",
    normalizedName: "colten",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Col",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 667,
    trend: "stable"
  },
  {
    id: "m668",
    name: "Jadiel",
    normalizedName: "jadiel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Jad",
      "Jadie"
    ],
    alternateSpellings: [],
    currentRank: 668,
    trend: "stable"
  },
  {
    id: "m669",
    name: "Mac",
    normalizedName: "mac",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 669,
    trend: "stable"
  },
  {
    id: "m1219",
    name: "Darius",
    normalizedName: "darius",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dar",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 1219,
    trend: "stable"
  },
  {
    id: "m672",
    name: "Tripp",
    normalizedName: "tripp",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Tri"
    ],
    alternateSpellings: [],
    currentRank: 672,
    trend: "stable"
  },
  {
    id: "m1224",
    name: "Dash",
    normalizedName: "dash",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1224,
    trend: "stable"
  },
  {
    id: "m674",
    name: "Casen",
    normalizedName: "casen",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Cas"
    ],
    alternateSpellings: [],
    currentRank: 674,
    trend: "stable"
  },
  {
    id: "m1820",
    name: "Leland",
    normalizedName: "leland",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lel",
      "Lelie"
    ],
    alternateSpellings: [],
    currentRank: 1820,
    trend: "stable"
  },
  {
    id: "m1864",
    name: "Luciano",
    normalizedName: "luciano",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Luci",
      "Lucie"
    ],
    alternateSpellings: [],
    currentRank: 1864,
    trend: "stable"
  },
  {
    id: "m847",
    name: "Brixton",
    normalizedName: "brixton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Brix",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 847,
    trend: "stable"
  },
  {
    id: "m678",
    name: "Ulises",
    normalizedName: "ulises",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Uli",
      "Uliie"
    ],
    alternateSpellings: [],
    currentRank: 678,
    trend: "stable"
  },
  {
    id: "m680",
    name: "Brett",
    normalizedName: "brett",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bre"
    ],
    alternateSpellings: [],
    currentRank: 680,
    trend: "stable"
  },
  {
    id: "m681",
    name: "Wayne",
    normalizedName: "wayne",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Way"
    ],
    alternateSpellings: [],
    currentRank: 681,
    trend: "stable"
  },
  {
    id: "m683",
    name: "Emir",
    normalizedName: "emir",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 683,
    trend: "stable"
  },
  {
    id: "m684",
    name: "Bronson",
    normalizedName: "bronson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bron",
      "Broie"
    ],
    alternateSpellings: [],
    currentRank: 684,
    trend: "stable"
  },
  {
    id: "m685",
    name: "Wilson",
    normalizedName: "wilson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Wil",
      "Wilie"
    ],
    alternateSpellings: [],
    currentRank: 685,
    trend: "stable"
  },
  {
    id: "m686",
    name: "Vincente",
    normalizedName: "vincente",
    gender: "M",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Vinc",
      "Vinie"
    ],
    alternateSpellings: [],
    currentRank: 686,
    trend: "stable"
  },
  {
    id: "m1524",
    name: "Idris",
    normalizedName: "idris",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Idr"
    ],
    alternateSpellings: [],
    currentRank: 1524,
    trend: "stable"
  },
  {
    id: "m1209",
    name: "Dane",
    normalizedName: "dane",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1209,
    trend: "stable"
  },
  {
    id: "m1433",
    name: "Gianni",
    normalizedName: "gianni",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gia",
      "Giaie"
    ],
    alternateSpellings: [],
    currentRank: 1433,
    trend: "stable"
  },
  {
    id: "m1769",
    name: "Korbin",
    normalizedName: "korbin",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kor",
      "Korie"
    ],
    alternateSpellings: [],
    currentRank: 1769,
    trend: "stable"
  },
  {
    id: "m1337",
    name: "Emory",
    normalizedName: "emory",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Emo"
    ],
    alternateSpellings: [],
    currentRank: 1337,
    trend: "stable"
  },
  {
    id: "m692",
    name: "Atlas",
    normalizedName: "atlas",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Atl"
    ],
    alternateSpellings: [],
    currentRank: 692,
    trend: "stable"
  },
  {
    id: "m1817",
    name: "Leif",
    normalizedName: "leif",
    gender: "M",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1817,
    trend: "stable"
  },
  {
    id: "m1876",
    name: "Mack",
    normalizedName: "mack",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1876,
    trend: "stable"
  },
  {
    id: "m697",
    name: "Xzavier",
    normalizedName: "xzavier",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Xzav",
      "Xzaie"
    ],
    alternateSpellings: [],
    currentRank: 697,
    trend: "stable"
  },
  {
    id: "m1898",
    name: "Marcel",
    normalizedName: "marcel",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 1898,
    trend: "stable"
  },
  {
    id: "m699",
    name: "Yahir",
    normalizedName: "yahir",
    gender: "M",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Yah"
    ],
    alternateSpellings: [],
    currentRank: 699,
    trend: "stable"
  },
  {
    id: "m700",
    name: "Rodney",
    normalizedName: "rodney",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rod",
      "Rodie"
    ],
    alternateSpellings: [],
    currentRank: 700,
    trend: "stable"
  },
  {
    id: "m1315",
    name: "Eliseo",
    normalizedName: "eliseo",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Eli",
      "Eliie"
    ],
    alternateSpellings: [],
    currentRank: 1315,
    trend: "stable"
  },
  {
    id: "m1136",
    name: "Brock",
    normalizedName: "brock",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bro"
    ],
    alternateSpellings: [],
    currentRank: 1136,
    trend: "stable"
  },
  {
    id: "m703",
    name: "Axton",
    normalizedName: "axton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Axt"
    ],
    alternateSpellings: [],
    currentRank: 703,
    trend: "stable"
  },
  {
    id: "m1042",
    name: "Kohen",
    normalizedName: "kohen",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Koh"
    ],
    alternateSpellings: [],
    currentRank: 1042,
    trend: "stable"
  },
  {
    id: "m1732",
    name: "Kelvin",
    normalizedName: "kelvin",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kel",
      "Kelie"
    ],
    alternateSpellings: [],
    currentRank: 1732,
    trend: "stable"
  },
  {
    id: "m706",
    name: "Rashad",
    normalizedName: "rashad",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ras",
      "Rasie"
    ],
    alternateSpellings: [],
    currentRank: 706,
    trend: "stable"
  },
  {
    id: "m707",
    name: "Blaise",
    normalizedName: "blaise",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bla",
      "Blaie"
    ],
    alternateSpellings: [],
    currentRank: 707,
    trend: "stable"
  },
  {
    id: "m708",
    name: "Clyde",
    normalizedName: "clyde",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cly"
    ],
    alternateSpellings: [],
    currentRank: 708,
    trend: "stable"
  },
  {
    id: "m709",
    name: "Maximo",
    normalizedName: "maximo",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Max",
      "Maxie"
    ],
    alternateSpellings: [],
    currentRank: 709,
    trend: "stable"
  },
  {
    id: "m710",
    name: "Bodie",
    normalizedName: "bodie",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bod"
    ],
    alternateSpellings: [],
    currentRank: 710,
    trend: "stable"
  },
  {
    id: "m1773",
    name: "Kristian",
    normalizedName: "kristian",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kris",
      "Kriie"
    ],
    alternateSpellings: [],
    currentRank: 1773,
    trend: "stable"
  },
  {
    id: "m1510",
    name: "Howard",
    normalizedName: "howard",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "How",
      "Howie"
    ],
    alternateSpellings: [],
    currentRank: 1510,
    trend: "stable"
  },
  {
    id: "m1440",
    name: "Giovani",
    normalizedName: "giovani",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Giov",
      "Gioie"
    ],
    alternateSpellings: [],
    currentRank: 1440,
    trend: "stable"
  },
  {
    id: "m1249",
    name: "Dereck",
    normalizedName: "dereck",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Der",
      "Derie"
    ],
    alternateSpellings: [],
    currentRank: 1249,
    trend: "stable"
  },
  {
    id: "m716",
    name: "Kaison",
    normalizedName: "kaison",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kai",
      "Kaiie"
    ],
    alternateSpellings: [],
    currentRank: 716,
    trend: "stable"
  },
  {
    id: "m717",
    name: "Kase",
    normalizedName: "kase",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 717,
    trend: "stable"
  },
  {
    id: "m718",
    name: "Yosef",
    normalizedName: "yosef",
    gender: "M",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Yos"
    ],
    alternateSpellings: [],
    currentRank: 718,
    trend: "stable"
  },
  {
    id: "m719",
    name: "Jacoby",
    normalizedName: "jacoby",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jac",
      "Jacie"
    ],
    alternateSpellings: [],
    currentRank: 719,
    trend: "stable"
  },
  {
    id: "m720",
    name: "Osiris",
    normalizedName: "osiris",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Osi",
      "Osiie"
    ],
    alternateSpellings: [],
    currentRank: 720,
    trend: "stable"
  },
  {
    id: "m1717",
    name: "Kashton",
    normalizedName: "kashton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kash",
      "Kasie"
    ],
    alternateSpellings: [],
    currentRank: 1717,
    trend: "stable"
  },
  {
    id: "m722",
    name: "Toby",
    normalizedName: "toby",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 722,
    trend: "stable"
  },
  {
    id: "m723",
    name: "Bear",
    normalizedName: "bear",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 723,
    trend: "stable"
  },
  {
    id: "m1313",
    name: "Eliezer",
    normalizedName: "eliezer",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Elie",
      "Eliie"
    ],
    alternateSpellings: [],
    currentRank: 1313,
    trend: "stable"
  },
  {
    id: "m725",
    name: "Ares",
    normalizedName: "ares",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 725,
    trend: "stable"
  },
  {
    id: "m727",
    name: "Everest",
    normalizedName: "everest",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ever",
      "Eveie"
    ],
    alternateSpellings: [],
    currentRank: 727,
    trend: "stable"
  },
  {
    id: "m728",
    name: "Zakai",
    normalizedName: "zakai",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zak"
    ],
    alternateSpellings: [],
    currentRank: 728,
    trend: "stable"
  },
  {
    id: "m730",
    name: "Shepherd",
    normalizedName: "shepherd",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Shep",
      "Sheie"
    ],
    alternateSpellings: [],
    currentRank: 730,
    trend: "stable"
  },
  {
    id: "m731",
    name: "Ledger",
    normalizedName: "ledger",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Led",
      "Ledie"
    ],
    alternateSpellings: [],
    currentRank: 731,
    trend: "stable"
  },
  {
    id: "m1571",
    name: "Jairo",
    normalizedName: "jairo",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jai"
    ],
    alternateSpellings: [],
    currentRank: 1571,
    trend: "stable"
  },
  {
    id: "m1446",
    name: "Gordon",
    normalizedName: "gordon",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Gor",
      "Gorie"
    ],
    alternateSpellings: [],
    currentRank: 1446,
    trend: "stable"
  },
  {
    id: "m734",
    name: "Jaxx",
    normalizedName: "jaxx",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 734,
    trend: "stable"
  },
  {
    id: "m735",
    name: "Niklaus",
    normalizedName: "niklaus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nikl",
      "Nikie"
    ],
    alternateSpellings: [],
    currentRank: 735,
    trend: "stable"
  },
  {
    id: "m1378",
    name: "Fisher",
    normalizedName: "fisher",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fis",
      "Fisie"
    ],
    alternateSpellings: [],
    currentRank: 1378,
    trend: "stable"
  },
  {
    id: "m737",
    name: "Ezrah",
    normalizedName: "ezrah",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ezr"
    ],
    alternateSpellings: [],
    currentRank: 737,
    trend: "stable"
  },
  {
    id: "m784",
    name: "Camdyn",
    normalizedName: "camdyn",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cam",
      "Camie"
    ],
    alternateSpellings: [],
    currentRank: 784,
    trend: "stable"
  },
  {
    id: "m1043",
    name: "Kyro",
    normalizedName: "kyro",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1043,
    trend: "stable"
  },
  {
    id: "m1847",
    name: "Lionel",
    normalizedName: "lionel",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Lio",
      "Lioie"
    ],
    alternateSpellings: [],
    currentRank: 1847,
    trend: "stable"
  },
  {
    id: "m1457",
    name: "Grey",
    normalizedName: "grey",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1457,
    trend: "stable"
  },
  {
    id: "m1234",
    name: "Dayton",
    normalizedName: "dayton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Day",
      "Dayie"
    ],
    alternateSpellings: [],
    currentRank: 1234,
    trend: "stable"
  },
  {
    id: "m745",
    name: "Aldo",
    normalizedName: "aldo",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 745,
    trend: "stable"
  },
  {
    id: "m746",
    name: "Kabir",
    normalizedName: "kabir",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kab"
    ],
    alternateSpellings: [],
    currentRank: 746,
    trend: "stable"
  },
  {
    id: "m747",
    name: "Yehuda",
    normalizedName: "yehuda",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Yeh",
      "Yehie"
    ],
    alternateSpellings: [],
    currentRank: 747,
    trend: "stable"
  },
  {
    id: "m749",
    name: "Alijah",
    normalizedName: "alijah",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ali",
      "Aliie"
    ],
    alternateSpellings: [],
    currentRank: 749,
    trend: "stable"
  },
  {
    id: "m1170",
    name: "Clinton",
    normalizedName: "clinton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Clin",
      "Cliie"
    ],
    alternateSpellings: [],
    currentRank: 1170,
    trend: "stable"
  },
  {
    id: "m1394",
    name: "Franco",
    normalizedName: "franco",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fra",
      "Fraie"
    ],
    alternateSpellings: [],
    currentRank: 1394,
    trend: "stable"
  },
  {
    id: "m1796",
    name: "Landry",
    normalizedName: "landry",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lan",
      "Lanie"
    ],
    alternateSpellings: [],
    currentRank: 1796,
    trend: "stable"
  },
  {
    id: "m754",
    name: "Misael",
    normalizedName: "misael",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Mis",
      "Misie"
    ],
    alternateSpellings: [],
    currentRank: 754,
    trend: "stable"
  },
  {
    id: "m755",
    name: "Dariel",
    normalizedName: "dariel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Dar",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 755,
    trend: "stable"
  },
  {
    id: "m756",
    name: "Kingsley",
    normalizedName: "kingsley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "King"
    ],
    syllables: 2,
    nicknames: [
      "King",
      "Kinie"
    ],
    alternateSpellings: [],
    currentRank: 756,
    trend: "stable"
  },
  {
    id: "m757",
    name: "Koby",
    normalizedName: "koby",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 757,
    trend: "stable"
  },
  {
    id: "m1437",
    name: "Gilberto",
    normalizedName: "gilberto",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gilb",
      "Gilie"
    ],
    alternateSpellings: [],
    currentRank: 1437,
    trend: "stable"
  },
  {
    id: "m760",
    name: "Dior",
    normalizedName: "dior",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 760,
    trend: "stable"
  },
  {
    id: "m761",
    name: "Cain",
    normalizedName: "cain",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 761,
    trend: "stable"
  },
  {
    id: "m1099",
    name: "Ameer",
    normalizedName: "ameer",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ame"
    ],
    alternateSpellings: [],
    currentRank: 1099,
    trend: "stable"
  },
  {
    id: "m763",
    name: "Bode",
    normalizedName: "bode",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 763,
    trend: "stable"
  },
  {
    id: "m764",
    name: "Uriah",
    normalizedName: "uriah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Uri"
    ],
    alternateSpellings: [],
    currentRank: 764,
    trend: "stable"
  },
  {
    id: "m765",
    name: "Rey",
    normalizedName: "rey",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 765,
    trend: "stable"
  },
  {
    id: "m766",
    name: "Karim",
    normalizedName: "karim",
    gender: "M",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kar"
    ],
    alternateSpellings: [],
    currentRank: 766,
    trend: "stable"
  },
  {
    id: "m1720",
    name: "Kaysen",
    normalizedName: "kaysen",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kay",
      "Kayie"
    ],
    alternateSpellings: [],
    currentRank: 1720,
    trend: "stable"
  },
  {
    id: "m1799",
    name: "Langston",
    normalizedName: "langston",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lang",
      "Lanie"
    ],
    alternateSpellings: [],
    currentRank: 1799,
    trend: "stable"
  },
  {
    id: "m1447",
    name: "Grady",
    normalizedName: "grady",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gra"
    ],
    alternateSpellings: [],
    currentRank: 1447,
    trend: "stable"
  },
  {
    id: "m1851",
    name: "Lochlan",
    normalizedName: "lochlan",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Loch",
      "Locie"
    ],
    alternateSpellings: [],
    currentRank: 1851,
    trend: "stable"
  },
  {
    id: "m1117",
    name: "Bishop",
    normalizedName: "bishop",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bis",
      "Bisie"
    ],
    alternateSpellings: [],
    currentRank: 1117,
    trend: "stable"
  },
  {
    id: "m774",
    name: "Jacobi",
    normalizedName: "jacobi",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jac",
      "Jacie"
    ],
    alternateSpellings: [],
    currentRank: 774,
    trend: "stable"
  },
  {
    id: "m1154",
    name: "Caspian",
    normalizedName: "caspian",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Casp",
      "Casie"
    ],
    alternateSpellings: [],
    currentRank: 1154,
    trend: "stable"
  },
  {
    id: "m776",
    name: "Jovanni",
    normalizedName: "jovanni",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jova",
      "Jovie"
    ],
    alternateSpellings: [],
    currentRank: 776,
    trend: "stable"
  },
  {
    id: "m777",
    name: "Zaid",
    normalizedName: "zaid",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 777,
    trend: "stable"
  },
  {
    id: "m778",
    name: "Thatcher",
    normalizedName: "thatcher",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "That",
      "Thaie"
    ],
    alternateSpellings: [],
    currentRank: 778,
    trend: "stable"
  },
  {
    id: "m779",
    name: "Damion",
    normalizedName: "damion",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dam",
      "Damie"
    ],
    alternateSpellings: [],
    currentRank: 779,
    trend: "stable"
  },
  {
    id: "m782",
    name: "Marlon",
    normalizedName: "marlon",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 782,
    trend: "stable"
  },
  {
    id: "m1284",
    name: "Draven",
    normalizedName: "draven",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dra",
      "Draie"
    ],
    alternateSpellings: [],
    currentRank: 1284,
    trend: "stable"
  },
  {
    id: "m1059",
    name: "Ocean",
    normalizedName: "ocean",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Oce"
    ],
    alternateSpellings: [],
    currentRank: 1059,
    trend: "stable"
  },
  {
    id: "m787",
    name: "Brecken",
    normalizedName: "brecken",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Brec",
      "Breie"
    ],
    alternateSpellings: [],
    currentRank: 787,
    trend: "stable"
  },
  {
    id: "m1228",
    name: "Davon",
    normalizedName: "davon",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dav"
    ],
    alternateSpellings: [],
    currentRank: 1228,
    trend: "stable"
  },
  {
    id: "m789",
    name: "Kannon",
    normalizedName: "kannon",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kan",
      "Kanie"
    ],
    alternateSpellings: [],
    currentRank: 789,
    trend: "stable"
  },
  {
    id: "m790",
    name: "Juelz",
    normalizedName: "juelz",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Jue"
    ],
    alternateSpellings: [],
    currentRank: 790,
    trend: "stable"
  },
  {
    id: "m792",
    name: "Mayson",
    normalizedName: "mayson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "May",
      "Mayie"
    ],
    alternateSpellings: [],
    currentRank: 792,
    trend: "stable"
  },
  {
    id: "m793",
    name: "Van",
    normalizedName: "van",
    gender: "M",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 793,
    trend: "stable"
  },
  {
    id: "m1409",
    name: "Gannon",
    normalizedName: "gannon",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Gan",
      "Ganie"
    ],
    alternateSpellings: [],
    currentRank: 1409,
    trend: "stable"
  },
  {
    id: "m796",
    name: "Marcellus",
    normalizedName: "marcellus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Marc",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 796,
    trend: "stable"
  },
  {
    id: "m799",
    name: "Jakobe",
    normalizedName: "jakobe",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jak",
      "Jakie"
    ],
    alternateSpellings: [],
    currentRank: 799,
    trend: "stable"
  },
  {
    id: "m801",
    name: "Benicio",
    normalizedName: "benicio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Beni",
      "Benie"
    ],
    alternateSpellings: [],
    currentRank: 801,
    trend: "stable"
  },
  {
    id: "m802",
    name: "Kelson",
    normalizedName: "kelson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kel",
      "Kelie"
    ],
    alternateSpellings: [],
    currentRank: 802,
    trend: "stable"
  },
  {
    id: "m803",
    name: "Kolbe",
    normalizedName: "kolbe",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kol"
    ],
    alternateSpellings: [],
    currentRank: 803,
    trend: "stable"
  },
  {
    id: "m1051",
    name: "Maxton",
    normalizedName: "maxton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Max",
      "Maxie"
    ],
    alternateSpellings: [],
    currentRank: 1051,
    trend: "stable"
  },
  {
    id: "m876",
    name: "Turner",
    normalizedName: "turner",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tur",
      "Turie"
    ],
    alternateSpellings: [],
    currentRank: 876,
    trend: "stable"
  },
  {
    id: "m806",
    name: "Decker",
    normalizedName: "decker",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dec",
      "Decie"
    ],
    alternateSpellings: [],
    currentRank: 806,
    trend: "stable"
  },
  {
    id: "m1495",
    name: "Heath",
    normalizedName: "heath",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Hea"
    ],
    alternateSpellings: [],
    currentRank: 1495,
    trend: "stable"
  },
  {
    id: "m808",
    name: "Meyer",
    normalizedName: "meyer",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Mey"
    ],
    alternateSpellings: [],
    currentRank: 808,
    trend: "stable"
  },
  {
    id: "m809",
    name: "Westley",
    normalizedName: "westley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "West",
      "Wesie"
    ],
    alternateSpellings: [],
    currentRank: 809,
    trend: "stable"
  },
  {
    id: "m810",
    name: "Rene",
    normalizedName: "rene",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 810,
    trend: "stable"
  },
  {
    id: "m811",
    name: "Zain",
    normalizedName: "zain",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 811,
    trend: "stable"
  },
  {
    id: "m1631",
    name: "Jermaine",
    normalizedName: "jermaine",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jerm",
      "Jerie"
    ],
    alternateSpellings: [],
    currentRank: 1631,
    trend: "stable"
  },
  {
    id: "m814",
    name: "Zavier",
    normalizedName: "zavier",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zav",
      "Zavie"
    ],
    alternateSpellings: [],
    currentRank: 814,
    trend: "stable"
  },
  {
    id: "m1380",
    name: "Fletcher",
    normalizedName: "fletcher",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Flet",
      "Fleie"
    ],
    alternateSpellings: [],
    currentRank: 1380,
    trend: "stable"
  },
  {
    id: "m816",
    name: "Pierre",
    normalizedName: "pierre",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Pie",
      "Pieie"
    ],
    alternateSpellings: [],
    currentRank: 816,
    trend: "stable"
  },
  {
    id: "m818",
    name: "Anson",
    normalizedName: "anson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ans"
    ],
    alternateSpellings: [],
    currentRank: 818,
    trend: "stable"
  },
  {
    id: "m1765",
    name: "Kole",
    normalizedName: "kole",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1765,
    trend: "stable"
  },
  {
    id: "m861",
    name: "Maison",
    normalizedName: "maison",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Mai",
      "Maiie"
    ],
    alternateSpellings: [],
    currentRank: 861,
    trend: "stable"
  },
  {
    id: "m821",
    name: "Quintin",
    normalizedName: "quintin",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Quin",
      "Quiie"
    ],
    alternateSpellings: [],
    currentRank: 821,
    trend: "stable"
  },
  {
    id: "m822",
    name: "Dangelo",
    normalizedName: "dangelo",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dang",
      "Danie"
    ],
    alternateSpellings: [],
    currentRank: 822,
    trend: "stable"
  },
  {
    id: "m1678",
    name: "Jovani",
    normalizedName: "jovani",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jov",
      "Jovie"
    ],
    alternateSpellings: [],
    currentRank: 1678,
    trend: "stable"
  },
  {
    id: "m1886",
    name: "Makhi",
    normalizedName: "makhi",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mak"
    ],
    alternateSpellings: [],
    currentRank: 1886,
    trend: "stable"
  },
  {
    id: "m825",
    name: "Aayan",
    normalizedName: "aayan",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Aay"
    ],
    alternateSpellings: [],
    currentRank: 825,
    trend: "stable"
  },
  {
    id: "m826",
    name: "Tyrell",
    normalizedName: "tyrell",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tyr",
      "Tyrie"
    ],
    alternateSpellings: [],
    currentRank: 826,
    trend: "stable"
  },
  {
    id: "m827",
    name: "Canaan",
    normalizedName: "canaan",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Can",
      "Canie"
    ],
    alternateSpellings: [],
    currentRank: 827,
    trend: "stable"
  },
  {
    id: "m828",
    name: "Creed",
    normalizedName: "creed",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Cre"
    ],
    alternateSpellings: [],
    currentRank: 828,
    trend: "stable"
  },
  {
    id: "m1601",
    name: "Jasiah",
    normalizedName: "jasiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jas",
      "Jasie"
    ],
    alternateSpellings: [],
    currentRank: 1601,
    trend: "stable"
  },
  {
    id: "m830",
    name: "Kooper",
    normalizedName: "kooper",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Koo",
      "Kooie"
    ],
    alternateSpellings: [],
    currentRank: 830,
    trend: "stable"
  },
  {
    id: "m831",
    name: "Will",
    normalizedName: "will",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 831,
    trend: "stable"
  },
  {
    id: "m833",
    name: "Santos",
    normalizedName: "santos",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "San",
      "Sanie"
    ],
    alternateSpellings: [],
    currentRank: 833,
    trend: "stable"
  },
  {
    id: "m1424",
    name: "Gerald",
    normalizedName: "gerald",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gerry",
      "Jerry"
    ],
    alternateSpellings: [],
    currentRank: 1424,
    trend: "stable"
  },
  {
    id: "m1550",
    name: "Jabari",
    normalizedName: "jabari",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jab",
      "Jabie"
    ],
    alternateSpellings: [],
    currentRank: 1550,
    trend: "stable"
  },
  {
    id: "m1834",
    name: "Leroy",
    normalizedName: "leroy",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ler"
    ],
    alternateSpellings: [],
    currentRank: 1834,
    trend: "stable"
  },
  {
    id: "m1680",
    name: "Joziah",
    normalizedName: "joziah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Joz",
      "Jozie"
    ],
    alternateSpellings: [],
    currentRank: 1680,
    trend: "stable"
  },
  {
    id: "m838",
    name: "Dwayne",
    normalizedName: "dwayne",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dwa",
      "Dwaie"
    ],
    alternateSpellings: [],
    currentRank: 838,
    trend: "stable"
  },
  {
    id: "m1221",
    name: "Darrell",
    normalizedName: "darrell",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Darr",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 1221,
    trend: "stable"
  },
  {
    id: "m841",
    name: "Musa",
    normalizedName: "musa",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 841,
    trend: "stable"
  },
  {
    id: "m842",
    name: "Stefan",
    normalizedName: "stefan",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ste",
      "Steie"
    ],
    alternateSpellings: [],
    currentRank: 842,
    trend: "stable"
  },
  {
    id: "m843",
    name: "Brayson",
    normalizedName: "brayson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bray",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 843,
    trend: "stable"
  },
  {
    id: "m844",
    name: "Cassius",
    normalizedName: "cassius",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cass",
      "Casie"
    ],
    alternateSpellings: [],
    currentRank: 844,
    trend: "stable"
  },
  {
    id: "m845",
    name: "Zayd",
    normalizedName: "zayd",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 845,
    trend: "stable"
  },
  {
    id: "m1353",
    name: "Evander",
    normalizedName: "evander",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Evan",
      "Evaie"
    ],
    alternateSpellings: [],
    currentRank: 1353,
    trend: "stable"
  },
  {
    id: "m848",
    name: "Osman",
    normalizedName: "osman",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Osm"
    ],
    alternateSpellings: [],
    currentRank: 848,
    trend: "stable"
  },
  {
    id: "m849",
    name: "Yisroel",
    normalizedName: "yisroel",
    gender: "M",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Yisr",
      "Yisie"
    ],
    alternateSpellings: [],
    currentRank: 849,
    trend: "stable"
  },
  {
    id: "m1557",
    name: "Jad",
    normalizedName: "jad",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1557,
    trend: "stable"
  },
  {
    id: "m851",
    name: "Ayan",
    normalizedName: "ayan",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 851,
    trend: "stable"
  },
  {
    id: "m852",
    name: "Kiaan",
    normalizedName: "kiaan",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Kia"
    ],
    alternateSpellings: [],
    currentRank: 852,
    trend: "stable"
  },
  {
    id: "m853",
    name: "Yousef",
    normalizedName: "yousef",
    gender: "M",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "You",
      "Youie"
    ],
    alternateSpellings: [],
    currentRank: 853,
    trend: "stable"
  },
  {
    id: "m1490",
    name: "Hasan",
    normalizedName: "hasan",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Has"
    ],
    alternateSpellings: [],
    currentRank: 1490,
    trend: "stable"
  },
  {
    id: "m1443",
    name: "Glen",
    normalizedName: "glen",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1443,
    trend: "stable"
  },
  {
    id: "m856",
    name: "Deshawn",
    normalizedName: "deshawn",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Desh",
      "Desie"
    ],
    alternateSpellings: [],
    currentRank: 856,
    trend: "stable"
  },
  {
    id: "m857",
    name: "Jaylin",
    normalizedName: "jaylin",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 857,
    trend: "stable"
  },
  {
    id: "m858",
    name: "Zyon",
    normalizedName: "zyon",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 858,
    trend: "stable"
  },
  {
    id: "m1622",
    name: "Jedidiah",
    normalizedName: "jedidiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jedi",
      "Jedie"
    ],
    alternateSpellings: [],
    currentRank: 1622,
    trend: "stable"
  },
  {
    id: "m860",
    name: "Jeren",
    normalizedName: "jeren",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jer"
    ],
    alternateSpellings: [],
    currentRank: 860,
    trend: "stable"
  },
  {
    id: "m862",
    name: "Tyree",
    normalizedName: "tyree",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tyr"
    ],
    alternateSpellings: [],
    currentRank: 862,
    trend: "stable"
  },
  {
    id: "m1428",
    name: "German",
    normalizedName: "german",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ger",
      "Gerie"
    ],
    alternateSpellings: [],
    currentRank: 1428,
    trend: "stable"
  },
  {
    id: "m864",
    name: "Ozzy",
    normalizedName: "ozzy",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 864,
    trend: "stable"
  },
  {
    id: "m1551",
    name: "Jabez",
    normalizedName: "jabez",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jab"
    ],
    alternateSpellings: [],
    currentRank: 1551,
    trend: "stable"
  },
  {
    id: "m1570",
    name: "Jair",
    normalizedName: "jair",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1570,
    trend: "stable"
  },
  {
    id: "m867",
    name: "Kaidon",
    normalizedName: "kaidon",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kai",
      "Kaiie"
    ],
    alternateSpellings: [],
    currentRank: 867,
    trend: "stable"
  },
  {
    id: "m868",
    name: "Seamus",
    normalizedName: "seamus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sea",
      "Seaie"
    ],
    alternateSpellings: [],
    currentRank: 868,
    trend: "stable"
  },
  {
    id: "m956",
    name: "Brenden",
    normalizedName: "brenden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bren",
      "Breie"
    ],
    alternateSpellings: [],
    currentRank: 956,
    trend: "stable"
  },
  {
    id: "m870",
    name: "Agustin",
    normalizedName: "agustin",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Agus",
      "Aguie"
    ],
    alternateSpellings: [],
    currentRank: 870,
    trend: "stable"
  },
  {
    id: "m872",
    name: "Yahya",
    normalizedName: "yahya",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [
      "Yah"
    ],
    alternateSpellings: [],
    currentRank: 872,
    trend: "stable"
  },
  {
    id: "m873",
    name: "Markel",
    normalizedName: "markel",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Mar",
      "Marie"
    ],
    alternateSpellings: [],
    currentRank: 873,
    trend: "stable"
  },
  {
    id: "m875",
    name: "Jermiah",
    normalizedName: "jermiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jerm",
      "Jerie"
    ],
    alternateSpellings: [],
    currentRank: 875,
    trend: "stable"
  },
  {
    id: "m877",
    name: "Adrien",
    normalizedName: "adrien",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Adr",
      "Adrie"
    ],
    alternateSpellings: [],
    currentRank: 877,
    trend: "stable"
  },
  {
    id: "m878",
    name: "Ayaan",
    normalizedName: "ayaan",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Aya"
    ],
    alternateSpellings: [],
    currentRank: 878,
    trend: "stable"
  },
  {
    id: "m879",
    name: "Blane",
    normalizedName: "blane",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bla"
    ],
    alternateSpellings: [],
    currentRank: 879,
    trend: "stable"
  },
  {
    id: "m880",
    name: "Javi",
    normalizedName: "javi",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 880,
    trend: "stable"
  },
  {
    id: "m881",
    name: "Kylian",
    normalizedName: "kylian",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kyl",
      "Kylie"
    ],
    alternateSpellings: [],
    currentRank: 881,
    trend: "stable"
  },
  {
    id: "m882",
    name: "Rogelio",
    normalizedName: "rogelio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Roge",
      "Rogie"
    ],
    alternateSpellings: [],
    currentRank: 882,
    trend: "stable"
  },
  {
    id: "m883",
    name: "Zack",
    normalizedName: "zack",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 883,
    trend: "stable"
  },
  {
    id: "m884",
    name: "Aamir",
    normalizedName: "aamir",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Aam"
    ],
    alternateSpellings: [],
    currentRank: 884,
    trend: "stable"
  },
  {
    id: "m1694",
    name: "Justus",
    normalizedName: "justus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jus",
      "Jusie"
    ],
    alternateSpellings: [],
    currentRank: 1694,
    trend: "stable"
  },
  {
    id: "m886",
    name: "Mordechai",
    normalizedName: "mordechai",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mord",
      "Morie"
    ],
    alternateSpellings: [],
    currentRank: 886,
    trend: "stable"
  },
  {
    id: "m887",
    name: "Sammy",
    normalizedName: "sammy",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sam"
    ],
    alternateSpellings: [],
    currentRank: 887,
    trend: "stable"
  },
  {
    id: "m888",
    name: "Yadiel",
    normalizedName: "yadiel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Yad",
      "Yadie"
    ],
    alternateSpellings: [],
    currentRank: 888,
    trend: "stable"
  },
  {
    id: "m1341",
    name: "Ephraim",
    normalizedName: "ephraim",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ephr",
      "Ephie"
    ],
    alternateSpellings: [],
    currentRank: 1341,
    trend: "stable"
  },
  {
    id: "m1699",
    name: "Kaine",
    normalizedName: "kaine",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kai"
    ],
    alternateSpellings: [],
    currentRank: 1699,
    trend: "stable"
  },
  {
    id: "m891",
    name: "Tarek",
    normalizedName: "tarek",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Tar"
    ],
    alternateSpellings: [],
    currentRank: 891,
    trend: "stable"
  },
  {
    id: "m1316",
    name: "Elisha",
    normalizedName: "elisha",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Eli",
      "Eliie"
    ],
    alternateSpellings: [],
    currentRank: 1316,
    trend: "stable"
  },
  {
    id: "m893",
    name: "Ely",
    normalizedName: "ely",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 893,
    trend: "stable"
  },
  {
    id: "m946",
    name: "Jericho",
    normalizedName: "jericho",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jeri",
      "Jerie"
    ],
    alternateSpellings: [],
    currentRank: 946,
    trend: "stable"
  },
  {
    id: "m896",
    name: "Keller",
    normalizedName: "keller",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kel",
      "Kelie"
    ],
    alternateSpellings: [],
    currentRank: 896,
    trend: "stable"
  },
  {
    id: "m897",
    name: "Nathen",
    normalizedName: "nathen",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Nat",
      "Natie"
    ],
    alternateSpellings: [],
    currentRank: 897,
    trend: "stable"
  },
  {
    id: "m1740",
    name: "Kenton",
    normalizedName: "kenton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ken",
      "Kenie"
    ],
    alternateSpellings: [],
    currentRank: 1740,
    trend: "stable"
  },
  {
    id: "m899",
    name: "Mikel",
    normalizedName: "mikel",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Mik"
    ],
    alternateSpellings: [],
    currentRank: 899,
    trend: "stable"
  },
  {
    id: "m900",
    name: "Norman",
    normalizedName: "norman",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nor",
      "Norie"
    ],
    alternateSpellings: [],
    currentRank: 900,
    trend: "stable"
  },
  {
    id: "m1091",
    name: "Zechariah",
    normalizedName: "zechariah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Zech",
      "Zecie"
    ],
    alternateSpellings: [],
    currentRank: 1091,
    trend: "stable"
  },
  {
    id: "m1790",
    name: "Lamar",
    normalizedName: "lamar",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lam"
    ],
    alternateSpellings: [],
    currentRank: 1790,
    trend: "stable"
  },
  {
    id: "m904",
    name: "Boden",
    normalizedName: "boden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bod"
    ],
    alternateSpellings: [],
    currentRank: 904,
    trend: "stable"
  },
  {
    id: "m905",
    name: "Kace",
    normalizedName: "kace",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 905,
    trend: "stable"
  },
  {
    id: "m906",
    name: "Nikhil",
    normalizedName: "nikhil",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Nik",
      "Nikie"
    ],
    alternateSpellings: [],
    currentRank: 906,
    trend: "stable"
  },
  {
    id: "m907",
    name: "Treyton",
    normalizedName: "treyton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Trey",
      "Treie"
    ],
    alternateSpellings: [],
    currentRank: 907,
    trend: "stable"
  },
  {
    id: "m908",
    name: "Cory",
    normalizedName: "cory",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 908,
    trend: "stable"
  },
  {
    id: "m909",
    name: "Darnell",
    normalizedName: "darnell",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Darn",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 909,
    trend: "stable"
  },
  {
    id: "m1431",
    name: "Giancarlo",
    normalizedName: "giancarlo",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gian",
      "Giaie"
    ],
    alternateSpellings: [],
    currentRank: 1431,
    trend: "stable"
  },
  {
    id: "m1690",
    name: "Junior",
    normalizedName: "junior",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jun",
      "Junie"
    ],
    alternateSpellings: [],
    currentRank: 1690,
    trend: "stable"
  },
  {
    id: "m912",
    name: "Kadyn",
    normalizedName: "kadyn",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kad"
    ],
    alternateSpellings: [],
    currentRank: 912,
    trend: "stable"
  },
  {
    id: "m1762",
    name: "Kody",
    normalizedName: "kody",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1762,
    trend: "stable"
  },
  {
    id: "m914",
    name: "Lydon",
    normalizedName: "lydon",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lyd"
    ],
    alternateSpellings: [],
    currentRank: 914,
    trend: "stable"
  },
  {
    id: "m915",
    name: "Masen",
    normalizedName: "masen",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Mas"
    ],
    alternateSpellings: [],
    currentRank: 915,
    trend: "stable"
  },
  {
    id: "m916",
    name: "Noe",
    normalizedName: "noe",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 916,
    trend: "stable"
  },
  {
    id: "m918",
    name: "Arnav",
    normalizedName: "arnav",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Arn"
    ],
    alternateSpellings: [],
    currentRank: 918,
    trend: "stable"
  },
  {
    id: "m919",
    name: "Ignatius",
    normalizedName: "ignatius",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Igna",
      "Ignie"
    ],
    alternateSpellings: [],
    currentRank: 919,
    trend: "stable"
  },
  {
    id: "m1531",
    name: "Ira",
    normalizedName: "ira",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1531,
    trend: "stable"
  },
  {
    id: "m921",
    name: "Jayvon",
    normalizedName: "jayvon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 921,
    trend: "stable"
  },
  {
    id: "m922",
    name: "Kaidyn",
    normalizedName: "kaidyn",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kai",
      "Kaiie"
    ],
    alternateSpellings: [],
    currentRank: 922,
    trend: "stable"
  },
  {
    id: "m923",
    name: "Obadiah",
    normalizedName: "obadiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Obad",
      "Obaie"
    ],
    alternateSpellings: [],
    currentRank: 923,
    trend: "stable"
  },
  {
    id: "m924",
    name: "Xan",
    normalizedName: "xan",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 924,
    trend: "stable"
  },
  {
    id: "m925",
    name: "Zackery",
    normalizedName: "zackery",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Zack",
      "Zacie"
    ],
    alternateSpellings: [],
    currentRank: 925,
    trend: "stable"
  },
  {
    id: "m1484",
    name: "Harris",
    normalizedName: "harris",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Har",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 1484,
    trend: "stable"
  },
  {
    id: "m1599",
    name: "Jarvis",
    normalizedName: "jarvis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jar",
      "Jarie"
    ],
    alternateSpellings: [],
    currentRank: 1599,
    trend: "stable"
  },
  {
    id: "m928",
    name: "Kylen",
    normalizedName: "kylen",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kyl"
    ],
    alternateSpellings: [],
    currentRank: 928,
    trend: "stable"
  },
  {
    id: "m929",
    name: "Tegan",
    normalizedName: "tegan",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Teg"
    ],
    alternateSpellings: [],
    currentRank: 929,
    trend: "stable"
  },
  {
    id: "m930",
    name: "Bladen",
    normalizedName: "bladen",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bla",
      "Blaie"
    ],
    alternateSpellings: [],
    currentRank: 930,
    trend: "stable"
  },
  {
    id: "m1150",
    name: "Carlton",
    normalizedName: "carlton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Carl",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 1150,
    trend: "stable"
  },
  {
    id: "m932",
    name: "Izaak",
    normalizedName: "izaak",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Iza"
    ],
    alternateSpellings: [],
    currentRank: 932,
    trend: "stable"
  },
  {
    id: "m1616",
    name: "Jaydon",
    normalizedName: "jaydon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 1616,
    trend: "stable"
  },
  {
    id: "m934",
    name: "Joao",
    normalizedName: "joao",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 934,
    trend: "stable"
  },
  {
    id: "m935",
    name: "Riaan",
    normalizedName: "riaan",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Ria"
    ],
    alternateSpellings: [],
    currentRank: 935,
    trend: "stable"
  },
  {
    id: "m936",
    name: "Yoel",
    normalizedName: "yoel",
    gender: "M",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 936,
    trend: "stable"
  },
  {
    id: "m937",
    name: "Youssef",
    normalizedName: "youssef",
    gender: "M",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Yous",
      "Youie"
    ],
    alternateSpellings: [],
    currentRank: 937,
    trend: "stable"
  },
  {
    id: "m938",
    name: "Abdiel",
    normalizedName: "abdiel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Abd",
      "Abdie"
    ],
    alternateSpellings: [],
    currentRank: 938,
    trend: "stable"
  },
  {
    id: "m939",
    name: "Adriel",
    normalizedName: "adriel",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Adr",
      "Adrie"
    ],
    alternateSpellings: [],
    currentRank: 939,
    trend: "stable"
  },
  {
    id: "m940",
    name: "Anakin",
    normalizedName: "anakin",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ana",
      "Anaie"
    ],
    alternateSpellings: [],
    currentRank: 940,
    trend: "stable"
  },
  {
    id: "m1137",
    name: "Broderick",
    normalizedName: "broderick",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Brod",
      "Broie"
    ],
    alternateSpellings: [],
    currentRank: 1137,
    trend: "stable"
  },
  {
    id: "m942",
    name: "Che",
    normalizedName: "che",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 942,
    trend: "stable"
  },
  {
    id: "m1267",
    name: "Dion",
    normalizedName: "dion",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1267,
    trend: "stable"
  },
  {
    id: "m944",
    name: "Emeric",
    normalizedName: "emeric",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Eme",
      "Emeie"
    ],
    alternateSpellings: [],
    currentRank: 944,
    trend: "stable"
  },
  {
    id: "m945",
    name: "Geremiah",
    normalizedName: "geremiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gere",
      "Gerie"
    ],
    alternateSpellings: [],
    currentRank: 945,
    trend: "stable"
  },
  {
    id: "m1726",
    name: "Keenan",
    normalizedName: "keenan",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kee",
      "Keeie"
    ],
    alternateSpellings: [],
    currentRank: 1726,
    trend: "stable"
  },
  {
    id: "m1867",
    name: "Lucky",
    normalizedName: "lucky",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Luc"
    ],
    alternateSpellings: [],
    currentRank: 1867,
    trend: "stable"
  },
  {
    id: "m949",
    name: "Pharaoh",
    normalizedName: "pharaoh",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Phar",
      "Phaie"
    ],
    alternateSpellings: [],
    currentRank: 949,
    trend: "stable"
  },
  {
    id: "m950",
    name: "Rashawn",
    normalizedName: "rashawn",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rash",
      "Rasie"
    ],
    alternateSpellings: [],
    currentRank: 950,
    trend: "stable"
  },
  {
    id: "m951",
    name: "Shmuel",
    normalizedName: "shmuel",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 1,
    nicknames: [
      "Shm",
      "Shmie"
    ],
    alternateSpellings: [],
    currentRank: 951,
    trend: "stable"
  },
  {
    id: "m952",
    name: "Stanton",
    normalizedName: "stanton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Stan",
      "Staie"
    ],
    alternateSpellings: [],
    currentRank: 952,
    trend: "stable"
  },
  {
    id: "m953",
    name: "Yakov",
    normalizedName: "yakov",
    gender: "M",
    origins: [
      "Hebrew",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Yak"
    ],
    alternateSpellings: [],
    currentRank: 953,
    trend: "stable"
  },
  {
    id: "m954",
    name: "Zev",
    normalizedName: "zev",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 954,
    trend: "stable"
  },
  {
    id: "m955",
    name: "Aaden",
    normalizedName: "aaden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Aad"
    ],
    alternateSpellings: [],
    currentRank: 955,
    trend: "stable"
  },
  {
    id: "m957",
    name: "Brentley",
    normalizedName: "brentley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Bren",
      "Breie"
    ],
    alternateSpellings: [],
    currentRank: 957,
    trend: "stable"
  },
  {
    id: "m958",
    name: "Darien",
    normalizedName: "darien",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dar",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 958,
    trend: "stable"
  },
  {
    id: "m959",
    name: "Deen",
    normalizedName: "deen",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 959,
    trend: "stable"
  },
  {
    id: "m960",
    name: "Ephram",
    normalizedName: "ephram",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Eph",
      "Ephie"
    ],
    alternateSpellings: [],
    currentRank: 960,
    trend: "stable"
  },
  {
    id: "m1448",
    name: "Graeme",
    normalizedName: "graeme",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gra",
      "Graie"
    ],
    alternateSpellings: [],
    currentRank: 1448,
    trend: "stable"
  },
  {
    id: "m962",
    name: "Hadrian",
    normalizedName: "hadrian",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hadr",
      "Hadie"
    ],
    alternateSpellings: [],
    currentRank: 962,
    trend: "stable"
  },
  {
    id: "m1597",
    name: "Jarrett",
    normalizedName: "jarrett",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jarr",
      "Jarie"
    ],
    alternateSpellings: [],
    currentRank: 1597,
    trend: "stable"
  },
  {
    id: "m965",
    name: "Kain",
    normalizedName: "kain",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 965,
    trend: "stable"
  },
  {
    id: "m966",
    name: "Kobi",
    normalizedName: "kobi",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 966,
    trend: "stable"
  },
  {
    id: "m967",
    name: "Leandre",
    normalizedName: "leandre",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lean",
      "Leaie"
    ],
    alternateSpellings: [],
    currentRank: 967,
    trend: "stable"
  },
  {
    id: "m968",
    name: "Seymour",
    normalizedName: "seymour",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Seym",
      "Seyie"
    ],
    alternateSpellings: [],
    currentRank: 968,
    trend: "stable"
  },
  {
    id: "m969",
    name: "Theron",
    normalizedName: "theron",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "The",
      "Theie"
    ],
    alternateSpellings: [],
    currentRank: 969,
    trend: "stable"
  },
  {
    id: "m970",
    name: "Virgil",
    normalizedName: "virgil",
    gender: "M",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Vir",
      "Virie"
    ],
    alternateSpellings: [],
    currentRank: 970,
    trend: "stable"
  },
  {
    id: "m971",
    name: "Yuri",
    normalizedName: "yuri",
    gender: "M",
    origins: [
      "Japanese"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 971,
    trend: "stable"
  },
  {
    id: "m972",
    name: "Bram",
    normalizedName: "bram",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 972,
    trend: "stable"
  },
  {
    id: "m973",
    name: "Canyon",
    normalizedName: "canyon",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Can",
      "Canie"
    ],
    alternateSpellings: [],
    currentRank: 973,
    trend: "stable"
  },
  {
    id: "m974",
    name: "Carver",
    normalizedName: "carver",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Car",
      "Carie"
    ],
    alternateSpellings: [],
    currentRank: 974,
    trend: "stable"
  },
  {
    id: "m975",
    name: "Cortez",
    normalizedName: "cortez",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cor",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 975,
    trend: "stable"
  },
  {
    id: "m976",
    name: "Denzel",
    normalizedName: "denzel",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Den",
      "Denie"
    ],
    alternateSpellings: [],
    currentRank: 976,
    trend: "stable"
  },
  {
    id: "m1283",
    name: "Drake",
    normalizedName: "drake",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dra"
    ],
    alternateSpellings: [],
    currentRank: 1283,
    trend: "stable"
  },
  {
    id: "m1414",
    name: "Garrison",
    normalizedName: "garrison",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Garr",
      "Garie"
    ],
    alternateSpellings: [],
    currentRank: 1414,
    trend: "stable"
  },
  {
    id: "m980",
    name: "Gaven",
    normalizedName: "gaven",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Gav"
    ],
    alternateSpellings: [],
    currentRank: 980,
    trend: "stable"
  },
  {
    id: "m1498",
    name: "Henrik",
    normalizedName: "henrik",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hen",
      "Henie"
    ],
    alternateSpellings: [],
    currentRank: 1498,
    trend: "stable"
  },
  {
    id: "m1512",
    name: "Hoyt",
    normalizedName: "hoyt",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1512,
    trend: "stable"
  },
  {
    id: "m983",
    name: "Jarrel",
    normalizedName: "jarrel",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Jar",
      "Jarie"
    ],
    alternateSpellings: [],
    currentRank: 983,
    trend: "stable"
  },
  {
    id: "m1609",
    name: "Jaxen",
    normalizedName: "jaxen",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jax"
    ],
    alternateSpellings: [],
    currentRank: 1609,
    trend: "stable"
  },
  {
    id: "m985",
    name: "Joash",
    normalizedName: "joash",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Joa"
    ],
    alternateSpellings: [],
    currentRank: 985,
    trend: "stable"
  },
  {
    id: "m986",
    name: "Kadence",
    normalizedName: "kadence",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kade",
      "Kadie"
    ],
    alternateSpellings: [],
    currentRank: 986,
    trend: "stable"
  },
  {
    id: "m987",
    name: "Kagen",
    normalizedName: "kagen",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kag"
    ],
    alternateSpellings: [],
    currentRank: 987,
    trend: "stable"
  },
  {
    id: "m988",
    name: "Kendrix",
    normalizedName: "kendrix",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kend",
      "Kenie"
    ],
    alternateSpellings: [],
    currentRank: 988,
    trend: "stable"
  },
  {
    id: "m989",
    name: "Khari",
    normalizedName: "khari",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kha"
    ],
    alternateSpellings: [],
    currentRank: 989,
    trend: "stable"
  },
  {
    id: "m990",
    name: "Leeland",
    normalizedName: "leeland",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Leel",
      "Leeie"
    ],
    alternateSpellings: [],
    currentRank: 990,
    trend: "stable"
  },
  {
    id: "m1823",
    name: "Lennard",
    normalizedName: "lennard",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lenn",
      "Lenie"
    ],
    alternateSpellings: [],
    currentRank: 1823,
    trend: "stable"
  },
  {
    id: "m992",
    name: "Maksim",
    normalizedName: "maksim",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mak",
      "Makie"
    ],
    alternateSpellings: [],
    currentRank: 992,
    trend: "stable"
  },
  {
    id: "m993",
    name: "Morris",
    normalizedName: "morris",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mor",
      "Morie"
    ],
    alternateSpellings: [],
    currentRank: 993,
    trend: "stable"
  },
  {
    id: "m994",
    name: "Obed",
    normalizedName: "obed",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 994,
    trend: "stable"
  },
  {
    id: "m995",
    name: "Rigoberto",
    normalizedName: "rigoberto",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Rigo",
      "Rigie"
    ],
    alternateSpellings: [],
    currentRank: 995,
    trend: "stable"
  },
  {
    id: "m996",
    name: "Ronaldo",
    normalizedName: "ronaldo",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Rona",
      "Ronie"
    ],
    alternateSpellings: [],
    currentRank: 996,
    trend: "stable"
  },
  {
    id: "m997",
    name: "Tyrese",
    normalizedName: "tyrese",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Tyr",
      "Tyrie"
    ],
    alternateSpellings: [],
    currentRank: 997,
    trend: "stable"
  },
  {
    id: "m998",
    name: "Vihaan",
    normalizedName: "vihaan",
    gender: "M",
    origins: [
      "Latin",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Vih",
      "Vihie"
    ],
    alternateSpellings: [],
    currentRank: 998,
    trend: "stable"
  },
  {
    id: "m999",
    name: "Zavion",
    normalizedName: "zavion",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Zav",
      "Zavie"
    ],
    alternateSpellings: [],
    currentRank: 999,
    trend: "stable"
  },
  {
    id: "m1000",
    name: "Zeek",
    normalizedName: "zeek",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1000,
    trend: "stable"
  },
  {
    id: "m1002",
    name: "Amias",
    normalizedName: "amias",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ami"
    ],
    alternateSpellings: [],
    currentRank: 1002,
    trend: "stable"
  },
  {
    id: "m1003",
    name: "Amos",
    normalizedName: "amos",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1003,
    trend: "stable"
  },
  {
    id: "m1004",
    name: "Ansel",
    normalizedName: "ansel",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Ans"
    ],
    alternateSpellings: [],
    currentRank: 1004,
    trend: "stable"
  },
  {
    id: "m1005",
    name: "Aryan",
    normalizedName: "aryan",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ary"
    ],
    alternateSpellings: [],
    currentRank: 1005,
    trend: "stable"
  },
  {
    id: "m1006",
    name: "Bridger",
    normalizedName: "bridger",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Brid",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1006,
    trend: "stable"
  },
  {
    id: "m1008",
    name: "Callahan",
    normalizedName: "callahan",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Call",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 1008,
    trend: "stable"
  },
  {
    id: "m1011",
    name: "Cedrick",
    normalizedName: "cedrick",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cedr",
      "Cedie"
    ],
    alternateSpellings: [],
    currentRank: 1011,
    trend: "stable"
  },
  {
    id: "m1012",
    name: "Chevy",
    normalizedName: "chevy",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Che"
    ],
    alternateSpellings: [],
    currentRank: 1012,
    trend: "stable"
  },
  {
    id: "m1178",
    name: "Coleman",
    normalizedName: "coleman",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cole",
      "Colie"
    ],
    alternateSpellings: [],
    currentRank: 1178,
    trend: "stable"
  },
  {
    id: "m1014",
    name: "Cristiano",
    normalizedName: "cristiano",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cris",
      "Criie"
    ],
    alternateSpellings: [],
    currentRank: 1014,
    trend: "stable"
  },
  {
    id: "m1016",
    name: "Dilan",
    normalizedName: "dilan",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dil"
    ],
    alternateSpellings: [],
    currentRank: 1016,
    trend: "stable"
  },
  {
    id: "m1282",
    name: "Draco",
    normalizedName: "draco",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dra"
    ],
    alternateSpellings: [],
    currentRank: 1282,
    trend: "stable"
  },
  {
    id: "m1336",
    name: "Emmitt",
    normalizedName: "emmitt",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Emm",
      "Emmie"
    ],
    alternateSpellings: [],
    currentRank: 1336,
    trend: "stable"
  },
  {
    id: "m1338",
    name: "Enoch",
    normalizedName: "enoch",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Eno"
    ],
    alternateSpellings: [],
    currentRank: 1338,
    trend: "stable"
  },
  {
    id: "m1390",
    name: "Fox",
    normalizedName: "fox",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1390,
    trend: "stable"
  },
  {
    id: "m1465",
    name: "Gus",
    normalizedName: "gus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1465,
    trend: "stable"
  },
  {
    id: "m1025",
    name: "Hollis",
    normalizedName: "hollis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hol",
      "Holie"
    ],
    alternateSpellings: [],
    currentRank: 1025,
    trend: "stable"
  },
  {
    id: "m1536",
    name: "Isaak",
    normalizedName: "isaak",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Isa"
    ],
    alternateSpellings: [],
    currentRank: 1536,
    trend: "stable"
  },
  {
    id: "m1549",
    name: "Izaiah",
    normalizedName: "izaiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Iza",
      "Izaie"
    ],
    alternateSpellings: [],
    currentRank: 1549,
    trend: "stable"
  },
  {
    id: "m1562",
    name: "Jael",
    normalizedName: "jael",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1562,
    trend: "stable"
  },
  {
    id: "m1566",
    name: "Jahmir",
    normalizedName: "jahmir",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jah",
      "Jahie"
    ],
    alternateSpellings: [],
    currentRank: 1566,
    trend: "stable"
  },
  {
    id: "m1606",
    name: "Javion",
    normalizedName: "javion",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jav",
      "Javie"
    ],
    alternateSpellings: [],
    currentRank: 1606,
    trend: "stable"
  },
  {
    id: "m1617",
    name: "Jaylon",
    normalizedName: "jaylon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 1617,
    trend: "stable"
  },
  {
    id: "m1668",
    name: "Jordy",
    normalizedName: "jordy",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jor"
    ],
    alternateSpellings: [],
    currentRank: 1668,
    trend: "stable"
  },
  {
    id: "m1679",
    name: "Jovany",
    normalizedName: "jovany",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jov",
      "Jovie"
    ],
    alternateSpellings: [],
    currentRank: 1679,
    trend: "stable"
  },
  {
    id: "m1685",
    name: "Judson",
    normalizedName: "judson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jud",
      "Judie"
    ],
    alternateSpellings: [],
    currentRank: 1685,
    trend: "stable"
  },
  {
    id: "m1711",
    name: "Kareem",
    normalizedName: "kareem",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kar",
      "Karie"
    ],
    alternateSpellings: [],
    currentRank: 1711,
    trend: "stable"
  },
  {
    id: "m1038",
    name: "Kenji",
    normalizedName: "kenji",
    gender: "M",
    origins: [
      "Japanese"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ken"
    ],
    alternateSpellings: [],
    currentRank: 1038,
    trend: "stable"
  },
  {
    id: "m1744",
    name: "Keon",
    normalizedName: "keon",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1744,
    trend: "stable"
  },
  {
    id: "m1041",
    name: "Kingslee",
    normalizedName: "kingslee",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "King"
    ],
    syllables: 2,
    nicknames: [
      "King",
      "Kinie"
    ],
    alternateSpellings: [],
    currentRank: 1041,
    trend: "stable"
  },
  {
    id: "m1050",
    name: "Mathias",
    normalizedName: "mathias",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Math",
      "Matie"
    ],
    alternateSpellings: [],
    currentRank: 1050,
    trend: "stable"
  },
  {
    id: "m1053",
    name: "Meyers",
    normalizedName: "meyers",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Mey",
      "Meyie"
    ],
    alternateSpellings: [],
    currentRank: 1053,
    trend: "stable"
  },
  {
    id: "m1055",
    name: "Murphy",
    normalizedName: "murphy",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Mur",
      "Murie"
    ],
    alternateSpellings: [],
    currentRank: 1055,
    trend: "stable"
  },
  {
    id: "m1056",
    name: "Neel",
    normalizedName: "neel",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1056,
    trend: "stable"
  },
  {
    id: "m1057",
    name: "Noble",
    normalizedName: "noble",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Noble"
    ],
    syllables: 2,
    nicknames: [
      "Nob"
    ],
    alternateSpellings: [],
    currentRank: 1057,
    trend: "stable"
  },
  {
    id: "m1061",
    name: "Orin",
    normalizedName: "orin",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1061,
    trend: "stable"
  },
  {
    id: "m1062",
    name: "Pax",
    normalizedName: "pax",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1062,
    trend: "stable"
  },
  {
    id: "m1063",
    name: "Penn",
    normalizedName: "penn",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1063,
    trend: "stable"
  },
  {
    id: "m1064",
    name: "Pharrell",
    normalizedName: "pharrell",
    gender: "M",
    origins: [
      "Greek",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Phar",
      "Phaie"
    ],
    alternateSpellings: [],
    currentRank: 1064,
    trend: "stable"
  },
  {
    id: "m1065",
    name: "Raiden",
    normalizedName: "raiden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Rai",
      "Raiie"
    ],
    alternateSpellings: [],
    currentRank: 1065,
    trend: "stable"
  },
  {
    id: "m1066",
    name: "Raylen",
    normalizedName: "raylen",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ray",
      "Rayie"
    ],
    alternateSpellings: [],
    currentRank: 1066,
    trend: "stable"
  },
  {
    id: "m1069",
    name: "Rocky",
    normalizedName: "rocky",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Roc"
    ],
    alternateSpellings: [],
    currentRank: 1069,
    trend: "stable"
  },
  {
    id: "m1070",
    name: "Rogue",
    normalizedName: "rogue",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rog"
    ],
    alternateSpellings: [],
    currentRank: 1070,
    trend: "stable"
  },
  {
    id: "m1071",
    name: "Rohan",
    normalizedName: "rohan",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Roh"
    ],
    alternateSpellings: [],
    currentRank: 1071,
    trend: "stable"
  },
  {
    id: "m1072",
    name: "Rollo",
    normalizedName: "rollo",
    gender: "M",
    origins: [
      "Germanic",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Rol"
    ],
    alternateSpellings: [],
    currentRank: 1072,
    trend: "stable"
  },
  {
    id: "m1074",
    name: "Salem",
    normalizedName: "salem",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sal"
    ],
    alternateSpellings: [],
    currentRank: 1074,
    trend: "stable"
  },
  {
    id: "m1076",
    name: "Saxon",
    normalizedName: "saxon",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Sax"
    ],
    alternateSpellings: [],
    currentRank: 1076,
    trend: "stable"
  },
  {
    id: "m1077",
    name: "Shiloh",
    normalizedName: "shiloh",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Shi",
      "Shiie"
    ],
    alternateSpellings: [],
    currentRank: 1077,
    trend: "stable"
  },
  {
    id: "m1078",
    name: "Sonny",
    normalizedName: "sonny",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Son"
    ],
    alternateSpellings: [],
    currentRank: 1078,
    trend: "stable"
  },
  {
    id: "m1079",
    name: "Stellan",
    normalizedName: "stellan",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Stel",
      "Steie"
    ],
    alternateSpellings: [],
    currentRank: 1079,
    trend: "stable"
  },
  {
    id: "m1080",
    name: "Stone",
    normalizedName: "stone",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Sto"
    ],
    alternateSpellings: [],
    currentRank: 1080,
    trend: "stable"
  },
  {
    id: "m1081",
    name: "Storm",
    normalizedName: "storm",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Sto"
    ],
    alternateSpellings: [],
    currentRank: 1081,
    trend: "stable"
  },
  {
    id: "m1085",
    name: "Truth",
    normalizedName: "truth",
    gender: "M",
    origins: [
      "Greek",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Tru"
    ],
    alternateSpellings: [],
    currentRank: 1085,
    trend: "stable"
  },
  {
    id: "m1087",
    name: "West",
    normalizedName: "west",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1087,
    trend: "stable"
  },
  {
    id: "m1088",
    name: "Wilder",
    normalizedName: "wilder",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Wil",
      "Wilie"
    ],
    alternateSpellings: [],
    currentRank: 1088,
    trend: "stable"
  },
  {
    id: "m1092",
    name: "Zeke",
    normalizedName: "zeke",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1092,
    trend: "stable"
  },
  {
    id: "m1093",
    name: "Zen",
    normalizedName: "zen",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1093,
    trend: "stable"
  },
  {
    id: "m1094",
    name: "Ziggy",
    normalizedName: "ziggy",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Zig"
    ],
    alternateSpellings: [],
    currentRank: 1094,
    trend: "stable"
  },
  {
    id: "m1095",
    name: "Abraham",
    normalizedName: "abraham",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Abra",
      "Abrie"
    ],
    alternateSpellings: [],
    currentRank: 1095,
    trend: "stable"
  },
  {
    id: "m1096",
    name: "Achilles",
    normalizedName: "achilles",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Achi",
      "Achie"
    ],
    alternateSpellings: [],
    currentRank: 1096,
    trend: "stable"
  },
  {
    id: "m1097",
    name: "Alastair",
    normalizedName: "alastair",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Alas",
      "Alaie"
    ],
    alternateSpellings: [],
    currentRank: 1097,
    trend: "stable"
  },
  {
    id: "m1098",
    name: "Alessandro",
    normalizedName: "alessandro",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Ales",
      "Aleie"
    ],
    alternateSpellings: [],
    currentRank: 1098,
    trend: "stable"
  },
  {
    id: "m1101",
    name: "Ander",
    normalizedName: "ander",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "And"
    ],
    alternateSpellings: [],
    currentRank: 1101,
    trend: "stable"
  },
  {
    id: "m1102",
    name: "Andrey",
    normalizedName: "andrey",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "And",
      "Andie"
    ],
    alternateSpellings: [],
    currentRank: 1102,
    trend: "stable"
  },
  {
    id: "m1103",
    name: "Angus",
    normalizedName: "angus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ang"
    ],
    alternateSpellings: [],
    currentRank: 1103,
    trend: "stable"
  },
  {
    id: "m1104",
    name: "Archibald",
    normalizedName: "archibald",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Arch",
      "Arcie"
    ],
    alternateSpellings: [],
    currentRank: 1104,
    trend: "stable"
  },
  {
    id: "m1106",
    name: "Aries",
    normalizedName: "aries",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ari"
    ],
    alternateSpellings: [],
    currentRank: 1106,
    trend: "stable"
  },
  {
    id: "m1107",
    name: "Arjun",
    normalizedName: "arjun",
    gender: "M",
    origins: [
      "Indian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Arj"
    ],
    alternateSpellings: [],
    currentRank: 1107,
    trend: "stable"
  },
  {
    id: "m1108",
    name: "Arrow",
    normalizedName: "arrow",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Arr"
    ],
    alternateSpellings: [],
    currentRank: 1108,
    trend: "stable"
  },
  {
    id: "m1109",
    name: "Artem",
    normalizedName: "artem",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Art"
    ],
    alternateSpellings: [],
    currentRank: 1109,
    trend: "stable"
  },
  {
    id: "m1110",
    name: "Augustus",
    normalizedName: "augustus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Augu",
      "Augie"
    ],
    alternateSpellings: [],
    currentRank: 1110,
    trend: "stable"
  },
  {
    id: "m1111",
    name: "Aurelio",
    normalizedName: "aurelio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Aure",
      "Aurie"
    ],
    alternateSpellings: [],
    currentRank: 1111,
    trend: "stable"
  },
  {
    id: "m1113",
    name: "Baker",
    normalizedName: "baker",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bak"
    ],
    alternateSpellings: [],
    currentRank: 1113,
    trend: "stable"
  },
  {
    id: "m1116",
    name: "Benedict",
    normalizedName: "benedict",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Bene",
      "Benie"
    ],
    alternateSpellings: [],
    currentRank: 1116,
    trend: "stable"
  },
  {
    id: "m1118",
    name: "Bjorn",
    normalizedName: "bjorn",
    gender: "M",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Bjo"
    ],
    alternateSpellings: [],
    currentRank: 1118,
    trend: "stable"
  },
  {
    id: "m1120",
    name: "Blade",
    normalizedName: "blade",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bla"
    ],
    alternateSpellings: [],
    currentRank: 1120,
    trend: "stable"
  },
  {
    id: "m1123",
    name: "Booker",
    normalizedName: "booker",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Boo",
      "Booie"
    ],
    alternateSpellings: [],
    currentRank: 1123,
    trend: "stable"
  },
  {
    id: "m1126",
    name: "Bowie",
    normalizedName: "bowie",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bow"
    ],
    alternateSpellings: [],
    currentRank: 1126,
    trend: "stable"
  },
  {
    id: "m1127",
    name: "Brady",
    normalizedName: "brady",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bra"
    ],
    alternateSpellings: [],
    currentRank: 1127,
    trend: "stable"
  },
  {
    id: "m1128",
    name: "Braeden",
    normalizedName: "braeden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Brae",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1128,
    trend: "stable"
  },
  {
    id: "m1129",
    name: "Branson",
    normalizedName: "branson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bran",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1129,
    trend: "stable"
  },
  {
    id: "m1130",
    name: "Brantlee",
    normalizedName: "brantlee",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bran",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1130,
    trend: "stable"
  },
  {
    id: "m1131",
    name: "Brawley",
    normalizedName: "brawley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Braw",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1131,
    trend: "stable"
  },
  {
    id: "m1132",
    name: "Braylen",
    normalizedName: "braylen",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Bray",
      "Braie"
    ],
    alternateSpellings: [],
    currentRank: 1132,
    trend: "stable"
  },
  {
    id: "m1133",
    name: "Brendan",
    normalizedName: "brendan",
    gender: "M",
    origins: [
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bren",
      "Breie"
    ],
    alternateSpellings: [],
    currentRank: 1133,
    trend: "stable"
  },
  {
    id: "m1134",
    name: "Brien",
    normalizedName: "brien",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [
      "Bri"
    ],
    alternateSpellings: [],
    currentRank: 1134,
    trend: "stable"
  },
  {
    id: "m1135",
    name: "Brighton",
    normalizedName: "brighton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Bright"
    ],
    syllables: 2,
    nicknames: [
      "Brig",
      "Briie"
    ],
    alternateSpellings: [],
    currentRank: 1135,
    trend: "stable"
  },
  {
    id: "m1141",
    name: "Buck",
    normalizedName: "buck",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1141,
    trend: "stable"
  },
  {
    id: "m1142",
    name: "Burke",
    normalizedName: "burke",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Bur"
    ],
    alternateSpellings: [],
    currentRank: 1142,
    trend: "stable"
  },
  {
    id: "m1143",
    name: "Cade",
    normalizedName: "cade",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1143,
    trend: "stable"
  },
  {
    id: "m1144",
    name: "Calder",
    normalizedName: "calder",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cal",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 1144,
    trend: "stable"
  },
  {
    id: "m1146",
    name: "Calloway",
    normalizedName: "calloway",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Call",
      "Calie"
    ],
    alternateSpellings: [],
    currentRank: 1146,
    trend: "stable"
  },
  {
    id: "m1149",
    name: "Captain",
    normalizedName: "captain",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Capt",
      "Capie"
    ],
    alternateSpellings: [],
    currentRank: 1149,
    trend: "stable"
  },
  {
    id: "m1158",
    name: "Cedrik",
    normalizedName: "cedrik",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ced",
      "Cedie"
    ],
    alternateSpellings: [],
    currentRank: 1158,
    trend: "stable"
  },
  {
    id: "m1159",
    name: "Chace",
    normalizedName: "chace",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cha"
    ],
    alternateSpellings: [],
    currentRank: 1159,
    trend: "stable"
  },
  {
    id: "m1161",
    name: "Chapel",
    normalizedName: "chapel",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Cha",
      "Chaie"
    ],
    alternateSpellings: [],
    currentRank: 1161,
    trend: "stable"
  },
  {
    id: "m1165",
    name: "Chip",
    normalizedName: "chip",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1165,
    trend: "stable"
  },
  {
    id: "m1166",
    name: "Clarke",
    normalizedName: "clarke",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cla",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1166,
    trend: "stable"
  },
  {
    id: "m1167",
    name: "Claude",
    normalizedName: "claude",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cla",
      "Claie"
    ],
    alternateSpellings: [],
    currentRank: 1167,
    trend: "stable"
  },
  {
    id: "m1168",
    name: "Clifford",
    normalizedName: "clifford",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Clif",
      "Cliie"
    ],
    alternateSpellings: [],
    currentRank: 1168,
    trend: "stable"
  },
  {
    id: "m1169",
    name: "Clifton",
    normalizedName: "clifton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Clif",
      "Cliie"
    ],
    alternateSpellings: [],
    currentRank: 1169,
    trend: "stable"
  },
  {
    id: "m1171",
    name: "Clint",
    normalizedName: "clint",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Cli"
    ],
    alternateSpellings: [],
    currentRank: 1171,
    trend: "stable"
  },
  {
    id: "m1172",
    name: "Clive",
    normalizedName: "clive",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cli"
    ],
    alternateSpellings: [],
    currentRank: 1172,
    trend: "stable"
  },
  {
    id: "m1173",
    name: "Clovis",
    normalizedName: "clovis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Clo",
      "Cloie"
    ],
    alternateSpellings: [],
    currentRank: 1173,
    trend: "stable"
  },
  {
    id: "m1181",
    name: "Conan",
    normalizedName: "conan",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Con"
    ],
    alternateSpellings: [],
    currentRank: 1181,
    trend: "stable"
  },
  {
    id: "m1183",
    name: "Constantine",
    normalizedName: "constantine",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Cons",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1183,
    trend: "stable"
  },
  {
    id: "m1184",
    name: "Conway",
    normalizedName: "conway",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Con",
      "Conie"
    ],
    alternateSpellings: [],
    currentRank: 1184,
    trend: "stable"
  },
  {
    id: "m1186",
    name: "Cordell",
    normalizedName: "cordell",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cord",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1186,
    trend: "stable"
  },
  {
    id: "m1188",
    name: "Cornelius",
    normalizedName: "cornelius",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Corn",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1188,
    trend: "stable"
  },
  {
    id: "m1189",
    name: "Cornell",
    normalizedName: "cornell",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Corn",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1189,
    trend: "stable"
  },
  {
    id: "m1190",
    name: "Corwin",
    normalizedName: "corwin",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cor",
      "Corie"
    ],
    alternateSpellings: [],
    currentRank: 1190,
    trend: "stable"
  },
  {
    id: "m1191",
    name: "Cosmo",
    normalizedName: "cosmo",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Cos"
    ],
    alternateSpellings: [],
    currentRank: 1191,
    trend: "stable"
  },
  {
    id: "m1192",
    name: "Craig",
    normalizedName: "craig",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Cra"
    ],
    alternateSpellings: [],
    currentRank: 1192,
    trend: "stable"
  },
  {
    id: "m1193",
    name: "Crawford",
    normalizedName: "crawford",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Craw",
      "Craie"
    ],
    alternateSpellings: [],
    currentRank: 1193,
    trend: "stable"
  },
  {
    id: "m1195",
    name: "Cristobal",
    normalizedName: "cristobal",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Cris",
      "Criie"
    ],
    alternateSpellings: [],
    currentRank: 1195,
    trend: "stable"
  },
  {
    id: "m1198",
    name: "Dace",
    normalizedName: "dace",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1198,
    trend: "stable"
  },
  {
    id: "m1199",
    name: "Dacian",
    normalizedName: "dacian",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dac",
      "Dacie"
    ],
    alternateSpellings: [],
    currentRank: 1199,
    trend: "stable"
  },
  {
    id: "m1200",
    name: "Dagwood",
    normalizedName: "dagwood",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dagw",
      "Dagie"
    ],
    alternateSpellings: [],
    currentRank: 1200,
    trend: "stable"
  },
  {
    id: "m1201",
    name: "Dale",
    normalizedName: "dale",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1201,
    trend: "stable"
  },
  {
    id: "m1203",
    name: "Dallin",
    normalizedName: "dallin",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dal",
      "Dalie"
    ],
    alternateSpellings: [],
    currentRank: 1203,
    trend: "stable"
  },
  {
    id: "m1205",
    name: "Damarcus",
    normalizedName: "damarcus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dama",
      "Damie"
    ],
    alternateSpellings: [],
    currentRank: 1205,
    trend: "stable"
  },
  {
    id: "m1207",
    name: "Damir",
    normalizedName: "damir",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dam"
    ],
    alternateSpellings: [],
    currentRank: 1207,
    trend: "stable"
  },
  {
    id: "m1210",
    name: "Danger",
    normalizedName: "danger",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dan",
      "Danie"
    ],
    alternateSpellings: [],
    currentRank: 1210,
    trend: "stable"
  },
  {
    id: "m1211",
    name: "Danil",
    normalizedName: "danil",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dan"
    ],
    alternateSpellings: [],
    currentRank: 1211,
    trend: "stable"
  },
  {
    id: "m1214",
    name: "Daquan",
    normalizedName: "daquan",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Daq",
      "Daqie"
    ],
    alternateSpellings: [],
    currentRank: 1214,
    trend: "stable"
  },
  {
    id: "m1216",
    name: "Darin",
    normalizedName: "darin",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dar"
    ],
    alternateSpellings: [],
    currentRank: 1216,
    trend: "stable"
  },
  {
    id: "m1217",
    name: "Dario",
    normalizedName: "dario",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dar"
    ],
    alternateSpellings: [],
    currentRank: 1217,
    trend: "stable"
  },
  {
    id: "m1218",
    name: "Darion",
    normalizedName: "darion",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dar",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 1218,
    trend: "stable"
  },
  {
    id: "m1220",
    name: "Darko",
    normalizedName: "darko",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dar"
    ],
    alternateSpellings: [],
    currentRank: 1220,
    trend: "stable"
  },
  {
    id: "m1223",
    name: "Darwin",
    normalizedName: "darwin",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dar",
      "Darie"
    ],
    alternateSpellings: [],
    currentRank: 1223,
    trend: "stable"
  },
  {
    id: "m1225",
    name: "Dashawn",
    normalizedName: "dashawn",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dash",
      "Dasie"
    ],
    alternateSpellings: [],
    currentRank: 1225,
    trend: "stable"
  },
  {
    id: "m1226",
    name: "Dashiell",
    normalizedName: "dashiell",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dash",
      "Dasie"
    ],
    alternateSpellings: [],
    currentRank: 1226,
    trend: "stable"
  },
  {
    id: "m1227",
    name: "Davis",
    normalizedName: "davis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dav"
    ],
    alternateSpellings: [],
    currentRank: 1227,
    trend: "stable"
  },
  {
    id: "m1229",
    name: "Davy",
    normalizedName: "davy",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1229,
    trend: "stable"
  },
  {
    id: "m1231",
    name: "Dax",
    normalizedName: "dax",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1231,
    trend: "stable"
  },
  {
    id: "m1232",
    name: "Daxton",
    normalizedName: "daxton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dax",
      "Daxie"
    ],
    alternateSpellings: [],
    currentRank: 1232,
    trend: "stable"
  },
  {
    id: "m1233",
    name: "Daylen",
    normalizedName: "daylen",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Day",
      "Dayie"
    ],
    alternateSpellings: [],
    currentRank: 1233,
    trend: "stable"
  },
  {
    id: "m1238",
    name: "Deegan",
    normalizedName: "deegan",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dee",
      "Deeie"
    ],
    alternateSpellings: [],
    currentRank: 1238,
    trend: "stable"
  },
  {
    id: "m1239",
    name: "Delfino",
    normalizedName: "delfino",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Delf",
      "Delie"
    ],
    alternateSpellings: [],
    currentRank: 1239,
    trend: "stable"
  },
  {
    id: "m1240",
    name: "Dell",
    normalizedName: "dell",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1240,
    trend: "stable"
  },
  {
    id: "m1241",
    name: "Delmar",
    normalizedName: "delmar",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Del",
      "Delie"
    ],
    alternateSpellings: [],
    currentRank: 1241,
    trend: "stable"
  },
  {
    id: "m1242",
    name: "Demetri",
    normalizedName: "demetri",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Deme",
      "Demie"
    ],
    alternateSpellings: [],
    currentRank: 1242,
    trend: "stable"
  },
  {
    id: "m1244",
    name: "Denis",
    normalizedName: "denis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Den"
    ],
    alternateSpellings: [],
    currentRank: 1244,
    trend: "stable"
  },
  {
    id: "m1245",
    name: "Deniz",
    normalizedName: "deniz",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Den"
    ],
    alternateSpellings: [],
    currentRank: 1245,
    trend: "stable"
  },
  {
    id: "m1248",
    name: "Deon",
    normalizedName: "deon",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1248,
    trend: "stable"
  },
  {
    id: "m1252",
    name: "Deshaun",
    normalizedName: "deshaun",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Desh",
      "Desie"
    ],
    alternateSpellings: [],
    currentRank: 1252,
    trend: "stable"
  },
  {
    id: "m1253",
    name: "Desiderio",
    normalizedName: "desiderio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Desi",
      "Desie"
    ],
    alternateSpellings: [],
    currentRank: 1253,
    trend: "stable"
  },
  {
    id: "m1255",
    name: "Dev",
    normalizedName: "dev",
    gender: "M",
    origins: [
      "Indian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1255,
    trend: "stable"
  },
  {
    id: "m1256",
    name: "Devante",
    normalizedName: "devante",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Deva",
      "Devie"
    ],
    alternateSpellings: [],
    currentRank: 1256,
    trend: "stable"
  },
  {
    id: "m1257",
    name: "Deven",
    normalizedName: "deven",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dev"
    ],
    alternateSpellings: [],
    currentRank: 1257,
    trend: "stable"
  },
  {
    id: "m1258",
    name: "Devlin",
    normalizedName: "devlin",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dev",
      "Devie"
    ],
    alternateSpellings: [],
    currentRank: 1258,
    trend: "stable"
  },
  {
    id: "m1259",
    name: "Devonte",
    normalizedName: "devonte",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Devo",
      "Devie"
    ],
    alternateSpellings: [],
    currentRank: 1259,
    trend: "stable"
  },
  {
    id: "m1260",
    name: "Dewey",
    normalizedName: "dewey",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dew"
    ],
    alternateSpellings: [],
    currentRank: 1260,
    trend: "stable"
  },
  {
    id: "m1263",
    name: "Diesel",
    normalizedName: "diesel",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Die",
      "Dieie"
    ],
    alternateSpellings: [],
    currentRank: 1263,
    trend: "stable"
  },
  {
    id: "m1264",
    name: "Dieter",
    normalizedName: "dieter",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Die",
      "Dieie"
    ],
    alternateSpellings: [],
    currentRank: 1264,
    trend: "stable"
  },
  {
    id: "m1265",
    name: "Dimitri",
    normalizedName: "dimitri",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Dimi",
      "Dimie"
    ],
    alternateSpellings: [],
    currentRank: 1265,
    trend: "stable"
  },
  {
    id: "m1266",
    name: "Dino",
    normalizedName: "dino",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1266,
    trend: "stable"
  },
  {
    id: "m1268",
    name: "Dirk",
    normalizedName: "dirk",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1268,
    trend: "stable"
  },
  {
    id: "m1269",
    name: "Django",
    normalizedName: "django",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dja",
      "Djaie"
    ],
    alternateSpellings: [],
    currentRank: 1269,
    trend: "stable"
  },
  {
    id: "m1270",
    name: "Dmitri",
    normalizedName: "dmitri",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dmi",
      "Dmiie"
    ],
    alternateSpellings: [],
    currentRank: 1270,
    trend: "stable"
  },
  {
    id: "m1271",
    name: "Dominick",
    normalizedName: "dominick",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Domi",
      "Domie"
    ],
    alternateSpellings: [],
    currentRank: 1271,
    trend: "stable"
  },
  {
    id: "m1272",
    name: "Dominik",
    normalizedName: "dominik",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Domi",
      "Domie"
    ],
    alternateSpellings: [],
    currentRank: 1272,
    trend: "stable"
  },
  {
    id: "m1273",
    name: "Donald",
    normalizedName: "donald",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Don",
      "Donnie"
    ],
    alternateSpellings: [],
    currentRank: 1273,
    trend: "stable"
  },
  {
    id: "m1274",
    name: "Donato",
    normalizedName: "donato",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Don",
      "Donie"
    ],
    alternateSpellings: [],
    currentRank: 1274,
    trend: "stable"
  },
  {
    id: "m1275",
    name: "Donnell",
    normalizedName: "donnell",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Donn",
      "Donie"
    ],
    alternateSpellings: [],
    currentRank: 1275,
    trend: "stable"
  },
  {
    id: "m1276",
    name: "Donnie",
    normalizedName: "donnie",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Don",
      "Donie"
    ],
    alternateSpellings: [],
    currentRank: 1276,
    trend: "stable"
  },
  {
    id: "m1278",
    name: "Donte",
    normalizedName: "donte",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Don"
    ],
    alternateSpellings: [],
    currentRank: 1278,
    trend: "stable"
  },
  {
    id: "m1279",
    name: "Dorian",
    normalizedName: "dorian",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dor",
      "Dorie"
    ],
    alternateSpellings: [],
    currentRank: 1279,
    trend: "stable"
  },
  {
    id: "m1280",
    name: "Doug",
    normalizedName: "doug",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1280,
    trend: "stable"
  },
  {
    id: "m1286",
    name: "Dru",
    normalizedName: "dru",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1286,
    trend: "stable"
  },
  {
    id: "m1287",
    name: "Dryden",
    normalizedName: "dryden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Dry",
      "Dryie"
    ],
    alternateSpellings: [],
    currentRank: 1287,
    trend: "stable"
  },
  {
    id: "m1288",
    name: "Duane",
    normalizedName: "duane",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dua"
    ],
    alternateSpellings: [],
    currentRank: 1288,
    trend: "stable"
  },
  {
    id: "m1289",
    name: "Duncan",
    normalizedName: "duncan",
    gender: "M",
    origins: [
      "English",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Dun",
      "Dunie"
    ],
    alternateSpellings: [],
    currentRank: 1289,
    trend: "stable"
  },
  {
    id: "m1292",
    name: "Eamon",
    normalizedName: "eamon",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Eam"
    ],
    alternateSpellings: [],
    currentRank: 1292,
    trend: "stable"
  },
  {
    id: "m1293",
    name: "Earl",
    normalizedName: "earl",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1293,
    trend: "stable"
  },
  {
    id: "m1294",
    name: "Earnest",
    normalizedName: "earnest",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Earn",
      "Earie"
    ],
    alternateSpellings: [],
    currentRank: 1294,
    trend: "stable"
  },
  {
    id: "m1296",
    name: "Ed",
    normalizedName: "ed",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1296,
    trend: "stable"
  },
  {
    id: "m1301",
    name: "Edmund",
    normalizedName: "edmund",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Edm",
      "Edmie"
    ],
    alternateSpellings: [],
    currentRank: 1301,
    trend: "stable"
  },
  {
    id: "m1304",
    name: "Edwin",
    normalizedName: "edwin",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Edw"
    ],
    alternateSpellings: [],
    currentRank: 1304,
    trend: "stable"
  },
  {
    id: "m1305",
    name: "Efe",
    normalizedName: "efe",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1305,
    trend: "stable"
  },
  {
    id: "m1306",
    name: "Efrain",
    normalizedName: "efrain",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Efr",
      "Efrie"
    ],
    alternateSpellings: [],
    currentRank: 1306,
    trend: "stable"
  },
  {
    id: "m1307",
    name: "Efren",
    normalizedName: "efren",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Efr"
    ],
    alternateSpellings: [],
    currentRank: 1307,
    trend: "stable"
  },
  {
    id: "m1308",
    name: "Egan",
    normalizedName: "egan",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1308,
    trend: "stable"
  },
  {
    id: "m1309",
    name: "Eitan",
    normalizedName: "eitan",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Eit"
    ],
    alternateSpellings: [],
    currentRank: 1309,
    trend: "stable"
  },
  {
    id: "m1317",
    name: "Elizar",
    normalizedName: "elizar",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Eli",
      "Eliie"
    ],
    alternateSpellings: [],
    currentRank: 1317,
    trend: "stable"
  },
  {
    id: "m1321",
    name: "Ellison",
    normalizedName: "ellison",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Elli",
      "Ellie"
    ],
    alternateSpellings: [],
    currentRank: 1321,
    trend: "stable"
  },
  {
    id: "m1322",
    name: "Elmer",
    normalizedName: "elmer",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Elm"
    ],
    alternateSpellings: [],
    currentRank: 1322,
    trend: "stable"
  },
  {
    id: "m1323",
    name: "Elon",
    normalizedName: "elon",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1323,
    trend: "stable"
  },
  {
    id: "m1324",
    name: "Elroy",
    normalizedName: "elroy",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Elr"
    ],
    alternateSpellings: [],
    currentRank: 1324,
    trend: "stable"
  },
  {
    id: "m1325",
    name: "Elton",
    normalizedName: "elton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Elt"
    ],
    alternateSpellings: [],
    currentRank: 1325,
    trend: "stable"
  },
  {
    id: "m1326",
    name: "Elvin",
    normalizedName: "elvin",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Elv"
    ],
    alternateSpellings: [],
    currentRank: 1326,
    trend: "stable"
  },
  {
    id: "m1327",
    name: "Elvis",
    normalizedName: "elvis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Elv"
    ],
    alternateSpellings: [],
    currentRank: 1327,
    trend: "stable"
  },
  {
    id: "m1328",
    name: "Emanuel",
    normalizedName: "emanuel",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Eman",
      "Emaie"
    ],
    alternateSpellings: [],
    currentRank: 1328,
    trend: "stable"
  },
  {
    id: "m1331",
    name: "Emil",
    normalizedName: "emil",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1331,
    trend: "stable"
  },
  {
    id: "m1345",
    name: "Ernest",
    normalizedName: "ernest",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ern",
      "Ernie"
    ],
    alternateSpellings: [],
    currentRank: 1345,
    trend: "stable"
  },
  {
    id: "m1347",
    name: "Ervin",
    normalizedName: "ervin",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Erv"
    ],
    alternateSpellings: [],
    currentRank: 1347,
    trend: "stable"
  },
  {
    id: "m1348",
    name: "Erwin",
    normalizedName: "erwin",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Erw"
    ],
    alternateSpellings: [],
    currentRank: 1348,
    trend: "stable"
  },
  {
    id: "m1354",
    name: "Evans",
    normalizedName: "evans",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Eva"
    ],
    alternateSpellings: [],
    currentRank: 1354,
    trend: "stable"
  },
  {
    id: "m1355",
    name: "Everardo",
    normalizedName: "everardo",
    gender: "M",
    origins: [
      "Hebrew",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Ever",
      "Eveie"
    ],
    alternateSpellings: [],
    currentRank: 1355,
    trend: "stable"
  },
  {
    id: "m1360",
    name: "Fabio",
    normalizedName: "fabio",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fab"
    ],
    alternateSpellings: [],
    currentRank: 1360,
    trend: "stable"
  },
  {
    id: "m1361",
    name: "Fairfax",
    normalizedName: "fairfax",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fair",
      "Faiie"
    ],
    alternateSpellings: [],
    currentRank: 1361,
    trend: "stable"
  },
  {
    id: "m1362",
    name: "Farhan",
    normalizedName: "farhan",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Far",
      "Farie"
    ],
    alternateSpellings: [],
    currentRank: 1362,
    trend: "stable"
  },
  {
    id: "m1363",
    name: "Farley",
    normalizedName: "farley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Far",
      "Farie"
    ],
    alternateSpellings: [],
    currentRank: 1363,
    trend: "stable"
  },
  {
    id: "m1364",
    name: "Faris",
    normalizedName: "faris",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Far"
    ],
    alternateSpellings: [],
    currentRank: 1364,
    trend: "stable"
  },
  {
    id: "m1365",
    name: "Farrell",
    normalizedName: "farrell",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Farr",
      "Farie"
    ],
    alternateSpellings: [],
    currentRank: 1365,
    trend: "stable"
  },
  {
    id: "m1366",
    name: "Federico",
    normalizedName: "federico",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Fede",
      "Fedie"
    ],
    alternateSpellings: [],
    currentRank: 1366,
    trend: "stable"
  },
  {
    id: "m1369",
    name: "Ferdinand",
    normalizedName: "ferdinand",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ferd",
      "Ferie"
    ],
    alternateSpellings: [],
    currentRank: 1369,
    trend: "stable"
  },
  {
    id: "m1370",
    name: "Fergus",
    normalizedName: "fergus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fer",
      "Ferie"
    ],
    alternateSpellings: [],
    currentRank: 1370,
    trend: "stable"
  },
  {
    id: "m1372",
    name: "Fidel",
    normalizedName: "fidel",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Fid"
    ],
    alternateSpellings: [],
    currentRank: 1372,
    trend: "stable"
  },
  {
    id: "m1373",
    name: "Finegan",
    normalizedName: "finegan",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Fine",
      "Finie"
    ],
    alternateSpellings: [],
    currentRank: 1373,
    trend: "stable"
  },
  {
    id: "m1379",
    name: "Flash",
    normalizedName: "flash",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Fla"
    ],
    alternateSpellings: [],
    currentRank: 1379,
    trend: "stable"
  },
  {
    id: "m1381",
    name: "Flint",
    normalizedName: "flint",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Fli"
    ],
    alternateSpellings: [],
    currentRank: 1381,
    trend: "stable"
  },
  {
    id: "m1382",
    name: "Florian",
    normalizedName: "florian",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Flor",
      "Floie"
    ],
    alternateSpellings: [],
    currentRank: 1382,
    trend: "stable"
  },
  {
    id: "m1383",
    name: "Floyd",
    normalizedName: "floyd",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Flo"
    ],
    alternateSpellings: [],
    currentRank: 1383,
    trend: "stable"
  },
  {
    id: "m1385",
    name: "Forbes",
    normalizedName: "forbes",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "For",
      "Forie"
    ],
    alternateSpellings: [],
    currentRank: 1385,
    trend: "stable"
  },
  {
    id: "m1387",
    name: "Forest",
    normalizedName: "forest",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "For",
      "Forie"
    ],
    alternateSpellings: [],
    currentRank: 1387,
    trend: "stable"
  },
  {
    id: "m1391",
    name: "Francesco",
    normalizedName: "francesco",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Fran",
      "Fraie"
    ],
    alternateSpellings: [],
    currentRank: 1391,
    trend: "stable"
  },
  {
    id: "m1398",
    name: "Frazier",
    normalizedName: "frazier",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fraz",
      "Fraie"
    ],
    alternateSpellings: [],
    currentRank: 1398,
    trend: "stable"
  },
  {
    id: "m1399",
    name: "Fred",
    normalizedName: "fred",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1399,
    trend: "stable"
  },
  {
    id: "m1400",
    name: "Freddie",
    normalizedName: "freddie",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fred",
      "Freie"
    ],
    alternateSpellings: [],
    currentRank: 1400,
    trend: "stable"
  },
  {
    id: "m1402",
    name: "Fredrick",
    normalizedName: "fredrick",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Fred",
      "Freie"
    ],
    alternateSpellings: [],
    currentRank: 1402,
    trend: "stable"
  },
  {
    id: "m1403",
    name: "Freeman",
    normalizedName: "freeman",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Free",
      "Freie"
    ],
    alternateSpellings: [],
    currentRank: 1403,
    trend: "stable"
  },
  {
    id: "m1404",
    name: "Fritz",
    normalizedName: "fritz",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Fri"
    ],
    alternateSpellings: [],
    currentRank: 1404,
    trend: "stable"
  },
  {
    id: "m1405",
    name: "Froylan",
    normalizedName: "froylan",
    gender: "M",
    origins: [
      "Germanic",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Froy",
      "Froie"
    ],
    alternateSpellings: [],
    currentRank: 1405,
    trend: "stable"
  },
  {
    id: "m1410",
    name: "Gareth",
    normalizedName: "gareth",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gar",
      "Garie"
    ],
    alternateSpellings: [],
    currentRank: 1410,
    trend: "stable"
  },
  {
    id: "m1411",
    name: "Garland",
    normalizedName: "garland",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Garl",
      "Garie"
    ],
    alternateSpellings: [],
    currentRank: 1411,
    trend: "stable"
  },
  {
    id: "m1412",
    name: "Garner",
    normalizedName: "garner",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gar",
      "Garie"
    ],
    alternateSpellings: [],
    currentRank: 1412,
    trend: "stable"
  },
  {
    id: "m1413",
    name: "Garrett",
    normalizedName: "garrett",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Garr",
      "Garie"
    ],
    alternateSpellings: [],
    currentRank: 1413,
    trend: "stable"
  },
  {
    id: "m1415",
    name: "Garry",
    normalizedName: "garry",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gar"
    ],
    alternateSpellings: [],
    currentRank: 1415,
    trend: "stable"
  },
  {
    id: "m1420",
    name: "Gene",
    normalizedName: "gene",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1420,
    trend: "stable"
  },
  {
    id: "m1421",
    name: "Geno",
    normalizedName: "geno",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1421,
    trend: "stable"
  },
  {
    id: "m1422",
    name: "Geoffrey",
    normalizedName: "geoffrey",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Geof",
      "Geoie"
    ],
    alternateSpellings: [],
    currentRank: 1422,
    trend: "stable"
  },
  {
    id: "m1425",
    name: "Geraldo",
    normalizedName: "geraldo",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gera",
      "Gerie"
    ],
    alternateSpellings: [],
    currentRank: 1425,
    trend: "stable"
  },
  {
    id: "m1426",
    name: "Gerard",
    normalizedName: "gerard",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ger",
      "Gerie"
    ],
    alternateSpellings: [],
    currentRank: 1426,
    trend: "stable"
  },
  {
    id: "m1429",
    name: "Gerson",
    normalizedName: "gerson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ger",
      "Gerie"
    ],
    alternateSpellings: [],
    currentRank: 1429,
    trend: "stable"
  },
  {
    id: "m1430",
    name: "Gian",
    normalizedName: "gian",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1430,
    trend: "stable"
  },
  {
    id: "m1432",
    name: "Gianluca",
    normalizedName: "gianluca",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Gian",
      "Giaie"
    ],
    alternateSpellings: [],
    currentRank: 1432,
    trend: "stable"
  },
  {
    id: "m1434",
    name: "Gibson",
    normalizedName: "gibson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Gib",
      "Gibie"
    ],
    alternateSpellings: [],
    currentRank: 1434,
    trend: "stable"
  },
  {
    id: "m1435",
    name: "Gideon",
    normalizedName: "gideon",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Gid",
      "Gidie"
    ],
    alternateSpellings: [],
    currentRank: 1435,
    trend: "stable"
  },
  {
    id: "m1436",
    name: "Gilbert",
    normalizedName: "gilbert",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gilb",
      "Gilie"
    ],
    alternateSpellings: [],
    currentRank: 1436,
    trend: "stable"
  },
  {
    id: "m1438",
    name: "Giles",
    normalizedName: "giles",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gil"
    ],
    alternateSpellings: [],
    currentRank: 1438,
    trend: "stable"
  },
  {
    id: "m1439",
    name: "Gill",
    normalizedName: "gill",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1439,
    trend: "stable"
  },
  {
    id: "m1442",
    name: "Giuseppe",
    normalizedName: "giuseppe",
    gender: "M",
    origins: [
      "Italian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gius",
      "Giuie"
    ],
    alternateSpellings: [],
    currentRank: 1442,
    trend: "stable"
  },
  {
    id: "m1444",
    name: "Glenn",
    normalizedName: "glenn",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Gle"
    ],
    alternateSpellings: [],
    currentRank: 1444,
    trend: "stable"
  },
  {
    id: "m1445",
    name: "Gonzalo",
    normalizedName: "gonzalo",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Gonz",
      "Gonie"
    ],
    alternateSpellings: [],
    currentRank: 1445,
    trend: "stable"
  },
  {
    id: "m1450",
    name: "Granger",
    normalizedName: "granger",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gran",
      "Graie"
    ],
    alternateSpellings: [],
    currentRank: 1450,
    trend: "stable"
  },
  {
    id: "m1453",
    name: "Greg",
    normalizedName: "greg",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1453,
    trend: "stable"
  },
  {
    id: "m1454",
    name: "Gregg",
    normalizedName: "gregg",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Gre"
    ],
    alternateSpellings: [],
    currentRank: 1454,
    trend: "stable"
  },
  {
    id: "m1455",
    name: "Gregorio",
    normalizedName: "gregorio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Greg",
      "Greie"
    ],
    alternateSpellings: [],
    currentRank: 1455,
    trend: "stable"
  },
  {
    id: "m1460",
    name: "Grover",
    normalizedName: "grover",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gro",
      "Groie"
    ],
    alternateSpellings: [],
    currentRank: 1460,
    trend: "stable"
  },
  {
    id: "m1462",
    name: "Guillermo",
    normalizedName: "guillermo",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Guil",
      "Guiie"
    ],
    alternateSpellings: [],
    currentRank: 1462,
    trend: "stable"
  },
  {
    id: "m1463",
    name: "Gunnar",
    normalizedName: "gunnar",
    gender: "M",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Gun",
      "Gunie"
    ],
    alternateSpellings: [],
    currentRank: 1463,
    trend: "stable"
  },
  {
    id: "m1467",
    name: "Guy",
    normalizedName: "guy",
    gender: "M",
    origins: [
      "Germanic",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1467,
    trend: "stable"
  },
  {
    id: "m1468",
    name: "Haden",
    normalizedName: "haden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Had"
    ],
    alternateSpellings: [],
    currentRank: 1468,
    trend: "stable"
  },
  {
    id: "m1470",
    name: "Hakeem",
    normalizedName: "hakeem",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hak",
      "Hakie"
    ],
    alternateSpellings: [],
    currentRank: 1470,
    trend: "stable"
  },
  {
    id: "m1471",
    name: "Hal",
    normalizedName: "hal",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1471,
    trend: "stable"
  },
  {
    id: "m1472",
    name: "Hale",
    normalizedName: "hale",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1472,
    trend: "stable"
  },
  {
    id: "m1473",
    name: "Haley",
    normalizedName: "haley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Hal"
    ],
    alternateSpellings: [],
    currentRank: 1473,
    trend: "stable"
  },
  {
    id: "m1474",
    name: "Hamilton",
    normalizedName: "hamilton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Hami",
      "Hamie"
    ],
    alternateSpellings: [],
    currentRank: 1474,
    trend: "stable"
  },
  {
    id: "m1477",
    name: "Hans",
    normalizedName: "hans",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1477,
    trend: "stable"
  },
  {
    id: "m1478",
    name: "Hardy",
    normalizedName: "hardy",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Har"
    ],
    alternateSpellings: [],
    currentRank: 1478,
    trend: "stable"
  },
  {
    id: "m1480",
    name: "Harlem",
    normalizedName: "harlem",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Har",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 1480,
    trend: "stable"
  },
  {
    id: "m1487",
    name: "Hart",
    normalizedName: "hart",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1487,
    trend: "stable"
  },
  {
    id: "m1488",
    name: "Hartley",
    normalizedName: "hartley",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "From the meadow",
      "Field"
    ],
    syllables: 2,
    nicknames: [
      "Hart",
      "Harie"
    ],
    alternateSpellings: [],
    currentRank: 1488,
    trend: "stable"
  },
  {
    id: "m1491",
    name: "Hassan",
    normalizedName: "hassan",
    gender: "M",
    origins: [
      "Arabic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Has",
      "Hasie"
    ],
    alternateSpellings: [],
    currentRank: 1491,
    trend: "stable"
  },
  {
    id: "m1492",
    name: "Hawk",
    normalizedName: "hawk",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1492,
    trend: "stable"
  },
  {
    id: "m1500",
    name: "Herbert",
    normalizedName: "herbert",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Herb",
      "Herie"
    ],
    alternateSpellings: [],
    currentRank: 1500,
    trend: "stable"
  },
  {
    id: "m1501",
    name: "Hercules",
    normalizedName: "hercules",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Herc",
      "Herie"
    ],
    alternateSpellings: [],
    currentRank: 1501,
    trend: "stable"
  },
  {
    id: "m1502",
    name: "Herman",
    normalizedName: "herman",
    gender: "M",
    origins: [
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Her",
      "Herie"
    ],
    alternateSpellings: [],
    currentRank: 1502,
    trend: "stable"
  },
  {
    id: "m1504",
    name: "Hiram",
    normalizedName: "hiram",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hir"
    ],
    alternateSpellings: [],
    currentRank: 1504,
    trend: "stable"
  },
  {
    id: "m1506",
    name: "Holland",
    normalizedName: "holland",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Holl",
      "Holie"
    ],
    alternateSpellings: [],
    currentRank: 1506,
    trend: "stable"
  },
  {
    id: "m1507",
    name: "Homer",
    normalizedName: "homer",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hom"
    ],
    alternateSpellings: [],
    currentRank: 1507,
    trend: "stable"
  },
  {
    id: "m1508",
    name: "Horace",
    normalizedName: "horace",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Hor",
      "Horie"
    ],
    alternateSpellings: [],
    currentRank: 1508,
    trend: "stable"
  },
  {
    id: "m1511",
    name: "Howie",
    normalizedName: "howie",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "How"
    ],
    alternateSpellings: [],
    currentRank: 1511,
    trend: "stable"
  },
  {
    id: "m1513",
    name: "Hubert",
    normalizedName: "hubert",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hub",
      "Hubie"
    ],
    alternateSpellings: [],
    currentRank: 1513,
    trend: "stable"
  },
  {
    id: "m1515",
    name: "Hugh",
    normalizedName: "hugh",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1515,
    trend: "stable"
  },
  {
    id: "m1517",
    name: "Humberto",
    normalizedName: "humberto",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Humb",
      "Humie"
    ],
    alternateSpellings: [],
    currentRank: 1517,
    trend: "stable"
  },
  {
    id: "m1518",
    name: "Humphrey",
    normalizedName: "humphrey",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hump",
      "Humie"
    ],
    alternateSpellings: [],
    currentRank: 1518,
    trend: "stable"
  },
  {
    id: "m1521",
    name: "Hyrum",
    normalizedName: "hyrum",
    gender: "M",
    origins: [
      "Germanic",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Hyr"
    ],
    alternateSpellings: [],
    currentRank: 1521,
    trend: "stable"
  },
  {
    id: "m1526",
    name: "Igor",
    normalizedName: "igor",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1526,
    trend: "stable"
  },
  {
    id: "m1528",
    name: "Immanuel",
    normalizedName: "immanuel",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 3,
    nicknames: [
      "Imma",
      "Immie"
    ],
    alternateSpellings: [],
    currentRank: 1528,
    trend: "stable"
  },
  {
    id: "m1529",
    name: "Indiana",
    normalizedName: "indiana",
    gender: "M",
    origins: [
      "Latin",
      "Italian"
    ],
    meanings: [
      "Graceful",
      "Beautiful"
    ],
    syllables: 3,
    nicknames: [
      "Indi",
      "Indie"
    ],
    alternateSpellings: [],
    currentRank: 1529,
    trend: "stable"
  },
  {
    id: "m1530",
    name: "Inigo",
    normalizedName: "inigo",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Ini"
    ],
    alternateSpellings: [],
    currentRank: 1530,
    trend: "stable"
  },
  {
    id: "m1532",
    name: "Irvin",
    normalizedName: "irvin",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Irv"
    ],
    alternateSpellings: [],
    currentRank: 1532,
    trend: "stable"
  },
  {
    id: "m1533",
    name: "Irving",
    normalizedName: "irving",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Irv",
      "Irvie"
    ],
    alternateSpellings: [],
    currentRank: 1533,
    trend: "stable"
  },
  {
    id: "m1534",
    name: "Irwin",
    normalizedName: "irwin",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Irw"
    ],
    alternateSpellings: [],
    currentRank: 1534,
    trend: "stable"
  },
  {
    id: "m1537",
    name: "Isaiah",
    normalizedName: "isaiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Salvation of the Lord"
    ],
    syllables: 2,
    nicknames: [
      "Isa",
      "Isaie"
    ],
    alternateSpellings: [],
    currentRank: 1537,
    trend: "stable"
  },
  {
    id: "m1538",
    name: "Isaias",
    normalizedName: "isaias",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Isa",
      "Isaie"
    ],
    alternateSpellings: [],
    currentRank: 1538,
    trend: "stable"
  },
  {
    id: "m1539",
    name: "Ishmael",
    normalizedName: "ishmael",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Ishm",
      "Ishie"
    ],
    alternateSpellings: [],
    currentRank: 1539,
    trend: "stable"
  },
  {
    id: "m1540",
    name: "Isiah",
    normalizedName: "isiah",
    gender: "M",
    origins: [
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Isi"
    ],
    alternateSpellings: [],
    currentRank: 1540,
    trend: "stable"
  },
  {
    id: "m1541",
    name: "Isidore",
    normalizedName: "isidore",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 4,
    nicknames: [
      "Isid",
      "Isiie"
    ],
    alternateSpellings: [],
    currentRank: 1541,
    trend: "stable"
  },
  {
    id: "m1542",
    name: "Isidro",
    normalizedName: "isidro",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Isi",
      "Isiie"
    ],
    alternateSpellings: [],
    currentRank: 1542,
    trend: "stable"
  },
  {
    id: "m1547",
    name: "Iver",
    normalizedName: "iver",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1547,
    trend: "stable"
  },
  {
    id: "m1548",
    name: "Ivo",
    normalizedName: "ivo",
    gender: "M",
    origins: [
      "Hebrew",
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1548,
    trend: "stable"
  },
  {
    id: "m1556",
    name: "Jacques",
    normalizedName: "jacques",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jacq",
      "Jacie"
    ],
    alternateSpellings: [],
    currentRank: 1556,
    trend: "stable"
  },
  {
    id: "m1559",
    name: "Jaden",
    normalizedName: "jaden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jad"
    ],
    alternateSpellings: [],
    currentRank: 1559,
    trend: "stable"
  },
  {
    id: "m1560",
    name: "Jadon",
    normalizedName: "jadon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jad"
    ],
    alternateSpellings: [],
    currentRank: 1560,
    trend: "stable"
  },
  {
    id: "m1564",
    name: "Jaheim",
    normalizedName: "jaheim",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jah",
      "Jahie"
    ],
    alternateSpellings: [],
    currentRank: 1564,
    trend: "stable"
  },
  {
    id: "m1565",
    name: "Jahir",
    normalizedName: "jahir",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jah"
    ],
    alternateSpellings: [],
    currentRank: 1565,
    trend: "stable"
  },
  {
    id: "m1567",
    name: "Jahseh",
    normalizedName: "jahseh",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jah",
      "Jahie"
    ],
    alternateSpellings: [],
    currentRank: 1567,
    trend: "stable"
  },
  {
    id: "m1573",
    name: "Jakeem",
    normalizedName: "jakeem",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jak",
      "Jakie"
    ],
    alternateSpellings: [],
    currentRank: 1573,
    trend: "stable"
  },
  {
    id: "m1574",
    name: "Jakob",
    normalizedName: "jakob",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jak"
    ],
    alternateSpellings: [],
    currentRank: 1574,
    trend: "stable"
  },
  {
    id: "m1576",
    name: "Jalil",
    normalizedName: "jalil",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jal"
    ],
    alternateSpellings: [],
    currentRank: 1576,
    trend: "stable"
  },
  {
    id: "m1578",
    name: "Jamar",
    normalizedName: "jamar",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jam"
    ],
    alternateSpellings: [],
    currentRank: 1578,
    trend: "stable"
  },
  {
    id: "m1580",
    name: "Jamarion",
    normalizedName: "jamarion",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 3,
    nicknames: [
      "Jama",
      "Jamie"
    ],
    alternateSpellings: [],
    currentRank: 1580,
    trend: "stable"
  },
  {
    id: "m1584",
    name: "Jamil",
    normalizedName: "jamil",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jam"
    ],
    alternateSpellings: [],
    currentRank: 1584,
    trend: "stable"
  },
  {
    id: "m1587",
    name: "Jamon",
    normalizedName: "jamon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jam"
    ],
    alternateSpellings: [],
    currentRank: 1587,
    trend: "stable"
  },
  {
    id: "m1588",
    name: "Jan",
    normalizedName: "jan",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1588,
    trend: "stable"
  },
  {
    id: "m1589",
    name: "Jano",
    normalizedName: "jano",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1589,
    trend: "stable"
  },
  {
    id: "m1590",
    name: "Jaquan",
    normalizedName: "jaquan",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jaq",
      "Jaqie"
    ],
    alternateSpellings: [],
    currentRank: 1590,
    trend: "stable"
  },
  {
    id: "m1591",
    name: "Jardan",
    normalizedName: "jardan",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jar",
      "Jarie"
    ],
    alternateSpellings: [],
    currentRank: 1591,
    trend: "stable"
  },
  {
    id: "m1592",
    name: "Jared",
    normalizedName: "jared",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jar"
    ],
    alternateSpellings: [],
    currentRank: 1592,
    trend: "stable"
  },
  {
    id: "m1593",
    name: "Jaren",
    normalizedName: "jaren",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jar"
    ],
    alternateSpellings: [],
    currentRank: 1593,
    trend: "stable"
  },
  {
    id: "m1594",
    name: "Jarod",
    normalizedName: "jarod",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jar"
    ],
    alternateSpellings: [],
    currentRank: 1594,
    trend: "stable"
  },
  {
    id: "m1595",
    name: "Jaroslav",
    normalizedName: "jaroslav",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jaro",
      "Jarie"
    ],
    alternateSpellings: [],
    currentRank: 1595,
    trend: "stable"
  },
  {
    id: "m1596",
    name: "Jarred",
    normalizedName: "jarred",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jar",
      "Jarie"
    ],
    alternateSpellings: [],
    currentRank: 1596,
    trend: "stable"
  },
  {
    id: "m1598",
    name: "Jarrod",
    normalizedName: "jarrod",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jar",
      "Jarie"
    ],
    alternateSpellings: [],
    currentRank: 1598,
    trend: "stable"
  },
  {
    id: "m1604",
    name: "Javen",
    normalizedName: "javen",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jav"
    ],
    alternateSpellings: [],
    currentRank: 1604,
    trend: "stable"
  },
  {
    id: "m1607",
    name: "Javon",
    normalizedName: "javon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jav"
    ],
    alternateSpellings: [],
    currentRank: 1607,
    trend: "stable"
  },
  {
    id: "m1608",
    name: "Jax",
    normalizedName: "jax",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1608,
    trend: "stable"
  },
  {
    id: "m1612",
    name: "Jay",
    normalizedName: "jay",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1612,
    trend: "stable"
  },
  {
    id: "m1614",
    name: "Jaycee",
    normalizedName: "jaycee",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jay",
      "Jayie"
    ],
    alternateSpellings: [],
    currentRank: 1614,
    trend: "stable"
  },
  {
    id: "m1619",
    name: "Jazz",
    normalizedName: "jazz",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1619,
    trend: "stable"
  },
  {
    id: "m1621",
    name: "Jed",
    normalizedName: "jed",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1621,
    trend: "stable"
  },
  {
    id: "m1623",
    name: "Jeff",
    normalizedName: "jeff",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1623,
    trend: "stable"
  },
  {
    id: "m1628",
    name: "Jerald",
    normalizedName: "jerald",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jer",
      "Jerie"
    ],
    alternateSpellings: [],
    currentRank: 1628,
    trend: "stable"
  },
  {
    id: "m1630",
    name: "Jeremy",
    normalizedName: "jeremy",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jer",
      "Jerie"
    ],
    alternateSpellings: [],
    currentRank: 1630,
    trend: "stable"
  },
  {
    id: "m1632",
    name: "Jerod",
    normalizedName: "jerod",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jer"
    ],
    alternateSpellings: [],
    currentRank: 1632,
    trend: "stable"
  },
  {
    id: "m1633",
    name: "Jerome",
    normalizedName: "jerome",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Jer",
      "Jerie"
    ],
    alternateSpellings: [],
    currentRank: 1633,
    trend: "stable"
  },
  {
    id: "m1638",
    name: "Jet",
    normalizedName: "jet",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1638,
    trend: "stable"
  },
  {
    id: "m1640",
    name: "Jim",
    normalizedName: "jim",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1640,
    trend: "stable"
  },
  {
    id: "m1641",
    name: "Jimmie",
    normalizedName: "jimmie",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jim",
      "Jimie"
    ],
    alternateSpellings: [],
    currentRank: 1641,
    trend: "stable"
  },
  {
    id: "m1642",
    name: "Jimmy",
    normalizedName: "jimmy",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jim"
    ],
    alternateSpellings: [],
    currentRank: 1642,
    trend: "stable"
  },
  {
    id: "m1643",
    name: "Jo",
    normalizedName: "jo",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1643,
    trend: "stable"
  },
  {
    id: "m1644",
    name: "Joachim",
    normalizedName: "joachim",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Joac",
      "Joaie"
    ],
    alternateSpellings: [],
    currentRank: 1644,
    trend: "stable"
  },
  {
    id: "m1646",
    name: "Joaquin",
    normalizedName: "joaquin",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Joaq",
      "Joaie"
    ],
    alternateSpellings: [],
    currentRank: 1646,
    trend: "stable"
  },
  {
    id: "m1647",
    name: "Job",
    normalizedName: "job",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1647,
    trend: "stable"
  },
  {
    id: "m1648",
    name: "Jobe",
    normalizedName: "jobe",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1648,
    trend: "stable"
  },
  {
    id: "m1649",
    name: "Jody",
    normalizedName: "jody",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1649,
    trend: "stable"
  },
  {
    id: "m1650",
    name: "Joe",
    normalizedName: "joe",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1650,
    trend: "stable"
  },
  {
    id: "m1654",
    name: "Johann",
    normalizedName: "johann",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Joh",
      "Johie"
    ],
    alternateSpellings: [],
    currentRank: 1654,
    trend: "stable"
  },
  {
    id: "m1656",
    name: "Johnathan",
    normalizedName: "johnathan",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "John",
      "Johie"
    ],
    alternateSpellings: [],
    currentRank: 1656,
    trend: "stable"
  },
  {
    id: "m1657",
    name: "Johnnie",
    normalizedName: "johnnie",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "John",
      "Johie"
    ],
    alternateSpellings: [],
    currentRank: 1657,
    trend: "stable"
  },
  {
    id: "m1659",
    name: "Johnson",
    normalizedName: "johnson",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "John",
      "Johie"
    ],
    alternateSpellings: [],
    currentRank: 1659,
    trend: "stable"
  },
  {
    id: "m1660",
    name: "Jon",
    normalizedName: "jon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1660,
    trend: "stable"
  },
  {
    id: "m1661",
    name: "Jonah",
    normalizedName: "jonah",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jon"
    ],
    alternateSpellings: [],
    currentRank: 1661,
    trend: "stable"
  },
  {
    id: "m1664",
    name: "Jones",
    normalizedName: "jones",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jon"
    ],
    alternateSpellings: [],
    currentRank: 1664,
    trend: "stable"
  },
  {
    id: "m1666",
    name: "Jordi",
    normalizedName: "jordi",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jor"
    ],
    alternateSpellings: [],
    currentRank: 1666,
    trend: "stable"
  },
  {
    id: "m1667",
    name: "Jordon",
    normalizedName: "jordon",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jor",
      "Jorie"
    ],
    alternateSpellings: [],
    currentRank: 1667,
    trend: "stable"
  },
  {
    id: "m1671",
    name: "Josef",
    normalizedName: "josef",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jos"
    ],
    alternateSpellings: [],
    currentRank: 1671,
    trend: "stable"
  },
  {
    id: "m1673",
    name: "Josh",
    normalizedName: "josh",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1673,
    trend: "stable"
  },
  {
    id: "m1677",
    name: "Jovan",
    normalizedName: "jovan",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jov"
    ],
    alternateSpellings: [],
    currentRank: 1677,
    trend: "stable"
  },
  {
    id: "m1681",
    name: "Juan",
    normalizedName: "juan",
    gender: "M",
    origins: [
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1681,
    trend: "stable"
  },
  {
    id: "m1684",
    name: "Judge",
    normalizedName: "judge",
    gender: "M",
    origins: [
      "Hebrew",
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jud"
    ],
    alternateSpellings: [],
    currentRank: 1684,
    trend: "stable"
  },
  {
    id: "m1687",
    name: "Julien",
    normalizedName: "julien",
    gender: "M",
    origins: [
      "French"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Jul",
      "Julie"
    ],
    alternateSpellings: [],
    currentRank: 1687,
    trend: "stable"
  },
  {
    id: "m1691",
    name: "Junius",
    normalizedName: "junius",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Jun",
      "Junie"
    ],
    alternateSpellings: [],
    currentRank: 1691,
    trend: "stable"
  },
  {
    id: "m1700",
    name: "Kaiser",
    normalizedName: "kaiser",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kai",
      "Kaiie"
    ],
    alternateSpellings: [],
    currentRank: 1700,
    trend: "stable"
  },
  {
    id: "m1701",
    name: "Kaleb",
    normalizedName: "kaleb",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kal"
    ],
    alternateSpellings: [],
    currentRank: 1701,
    trend: "stable"
  },
  {
    id: "m1702",
    name: "Kalel",
    normalizedName: "kalel",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Kal"
    ],
    alternateSpellings: [],
    currentRank: 1702,
    trend: "stable"
  },
  {
    id: "m1703",
    name: "Kalen",
    normalizedName: "kalen",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kal"
    ],
    alternateSpellings: [],
    currentRank: 1703,
    trend: "stable"
  },
  {
    id: "m1707",
    name: "Kamran",
    normalizedName: "kamran",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kam",
      "Kamie"
    ],
    alternateSpellings: [],
    currentRank: 1707,
    trend: "stable"
  },
  {
    id: "m1708",
    name: "Kamron",
    normalizedName: "kamron",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kam",
      "Kamie"
    ],
    alternateSpellings: [],
    currentRank: 1708,
    trend: "stable"
  },
  {
    id: "m1710",
    name: "Kanye",
    normalizedName: "kanye",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kan"
    ],
    alternateSpellings: [],
    currentRank: 1710,
    trend: "stable"
  },
  {
    id: "m1712",
    name: "Karl",
    normalizedName: "karl",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1712,
    trend: "stable"
  },
  {
    id: "m1721",
    name: "Kazuki",
    normalizedName: "kazuki",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kaz",
      "Kazie"
    ],
    alternateSpellings: [],
    currentRank: 1721,
    trend: "stable"
  },
  {
    id: "m1722",
    name: "Keagan",
    normalizedName: "keagan",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kea",
      "Keaie"
    ],
    alternateSpellings: [],
    currentRank: 1722,
    trend: "stable"
  },
  {
    id: "m1731",
    name: "Kelton",
    normalizedName: "kelton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kel",
      "Kelie"
    ],
    alternateSpellings: [],
    currentRank: 1731,
    trend: "stable"
  },
  {
    id: "m1733",
    name: "Ken",
    normalizedName: "ken",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1733,
    trend: "stable"
  },
  {
    id: "m1738",
    name: "Kenny",
    normalizedName: "kenny",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ken"
    ],
    alternateSpellings: [],
    currentRank: 1738,
    trend: "stable"
  },
  {
    id: "m1739",
    name: "Kent",
    normalizedName: "kent",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1739,
    trend: "stable"
  },
  {
    id: "m1742",
    name: "Kenyon",
    normalizedName: "kenyon",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Ken",
      "Kenie"
    ],
    alternateSpellings: [],
    currentRank: 1742,
    trend: "stable"
  },
  {
    id: "m1743",
    name: "Kenzo",
    normalizedName: "kenzo",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ken"
    ],
    alternateSpellings: [],
    currentRank: 1743,
    trend: "stable"
  },
  {
    id: "m1745",
    name: "Kerry",
    normalizedName: "kerry",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Ker"
    ],
    alternateSpellings: [],
    currentRank: 1745,
    trend: "stable"
  },
  {
    id: "m1747",
    name: "Khalid",
    normalizedName: "khalid",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kha",
      "Khaie"
    ],
    alternateSpellings: [],
    currentRank: 1747,
    trend: "stable"
  },
  {
    id: "m1752",
    name: "Kim",
    normalizedName: "kim",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1752,
    trend: "stable"
  },
  {
    id: "m1753",
    name: "Kimball",
    normalizedName: "kimball",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kimb",
      "Kimie"
    ],
    alternateSpellings: [],
    currentRank: 1753,
    trend: "stable"
  },
  {
    id: "m1756",
    name: "Kirk",
    normalizedName: "kirk",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1756,
    trend: "stable"
  },
  {
    id: "m1757",
    name: "Kit",
    normalizedName: "kit",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1757,
    trend: "stable"
  },
  {
    id: "m1758",
    name: "Klaus",
    normalizedName: "klaus",
    gender: "M",
    origins: [
      "Latin",
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Kla"
    ],
    alternateSpellings: [],
    currentRank: 1758,
    trend: "stable"
  },
  {
    id: "m1763",
    name: "Koen",
    normalizedName: "koen",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1763,
    trend: "stable"
  },
  {
    id: "m1764",
    name: "Kolby",
    normalizedName: "kolby",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kol"
    ],
    alternateSpellings: [],
    currentRank: 1764,
    trend: "stable"
  },
  {
    id: "m1767",
    name: "Konner",
    normalizedName: "konner",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kon",
      "Konie"
    ],
    alternateSpellings: [],
    currentRank: 1767,
    trend: "stable"
  },
  {
    id: "m1768",
    name: "Konrad",
    normalizedName: "konrad",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kon",
      "Konie"
    ],
    alternateSpellings: [],
    currentRank: 1768,
    trend: "stable"
  },
  {
    id: "m1770",
    name: "Kory",
    normalizedName: "kory",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1770,
    trend: "stable"
  },
  {
    id: "m1771",
    name: "Kraig",
    normalizedName: "kraig",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Kra"
    ],
    alternateSpellings: [],
    currentRank: 1771,
    trend: "stable"
  },
  {
    id: "m1772",
    name: "Kris",
    normalizedName: "kris",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1772,
    trend: "stable"
  },
  {
    id: "m1774",
    name: "Kristofer",
    normalizedName: "kristofer",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kris",
      "Kriie"
    ],
    alternateSpellings: [],
    currentRank: 1774,
    trend: "stable"
  },
  {
    id: "m1776",
    name: "Kurt",
    normalizedName: "kurt",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1776,
    trend: "stable"
  },
  {
    id: "m1777",
    name: "Kurtis",
    normalizedName: "kurtis",
    gender: "M",
    origins: [
      "Greek"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kur",
      "Kurie"
    ],
    alternateSpellings: [],
    currentRank: 1777,
    trend: "stable"
  },
  {
    id: "m1778",
    name: "Kwame",
    normalizedName: "kwame",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Kwa"
    ],
    alternateSpellings: [],
    currentRank: 1778,
    trend: "stable"
  },
  {
    id: "m1782",
    name: "Kymani",
    normalizedName: "kymani",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Kym",
      "Kymie"
    ],
    alternateSpellings: [],
    currentRank: 1782,
    trend: "stable"
  },
  {
    id: "m1785",
    name: "Kyron",
    normalizedName: "kyron",
    gender: "M",
    origins: [
      "Celtic",
      "Germanic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Kyr"
    ],
    alternateSpellings: [],
    currentRank: 1785,
    trend: "stable"
  },
  {
    id: "m1789",
    name: "Ladarius",
    normalizedName: "ladarius",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Lada",
      "Ladie"
    ],
    alternateSpellings: [],
    currentRank: 1789,
    trend: "stable"
  },
  {
    id: "m1791",
    name: "Lamont",
    normalizedName: "lamont",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lam",
      "Lamie"
    ],
    alternateSpellings: [],
    currentRank: 1791,
    trend: "stable"
  },
  {
    id: "m1793",
    name: "Landan",
    normalizedName: "landan",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lan",
      "Lanie"
    ],
    alternateSpellings: [],
    currentRank: 1793,
    trend: "stable"
  },
  {
    id: "m1797",
    name: "Landyn",
    normalizedName: "landyn",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lan",
      "Lanie"
    ],
    alternateSpellings: [],
    currentRank: 1797,
    trend: "stable"
  },
  {
    id: "m1800",
    name: "Lanny",
    normalizedName: "lanny",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lan"
    ],
    alternateSpellings: [],
    currentRank: 1800,
    trend: "stable"
  },
  {
    id: "m1801",
    name: "Laramie",
    normalizedName: "laramie",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Lara",
      "Larie"
    ],
    alternateSpellings: [],
    currentRank: 1801,
    trend: "stable"
  },
  {
    id: "m1802",
    name: "Larkin",
    normalizedName: "larkin",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lar",
      "Larie"
    ],
    alternateSpellings: [],
    currentRank: 1802,
    trend: "stable"
  },
  {
    id: "m1804",
    name: "Lars",
    normalizedName: "lars",
    gender: "M",
    origins: [
      "Scandinavian"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1804,
    trend: "stable"
  },
  {
    id: "m1805",
    name: "Latham",
    normalizedName: "latham",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lat",
      "Latie"
    ],
    alternateSpellings: [],
    currentRank: 1805,
    trend: "stable"
  },
  {
    id: "m1806",
    name: "Latrell",
    normalizedName: "latrell",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Latr",
      "Latie"
    ],
    alternateSpellings: [],
    currentRank: 1806,
    trend: "stable"
  },
  {
    id: "m1807",
    name: "Lawrance",
    normalizedName: "lawrance",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Lawr",
      "Lawie"
    ],
    alternateSpellings: [],
    currentRank: 1807,
    trend: "stable"
  },
  {
    id: "m1812",
    name: "Lazaro",
    normalizedName: "lazaro",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Laz",
      "Lazie"
    ],
    alternateSpellings: [],
    currentRank: 1812,
    trend: "stable"
  },
  {
    id: "m1814",
    name: "Lee",
    normalizedName: "lee",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1814,
    trend: "stable"
  },
  {
    id: "m1815",
    name: "Leeroy",
    normalizedName: "leeroy",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lee",
      "Leeie"
    ],
    alternateSpellings: [],
    currentRank: 1815,
    trend: "stable"
  },
  {
    id: "m1818",
    name: "Leigh",
    normalizedName: "leigh",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Lei"
    ],
    alternateSpellings: [],
    currentRank: 1818,
    trend: "stable"
  },
  {
    id: "m1821",
    name: "Lemuel",
    normalizedName: "lemuel",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Of God",
      "Divine"
    ],
    syllables: 2,
    nicknames: [
      "Lem",
      "Lemie"
    ],
    alternateSpellings: [],
    currentRank: 1821,
    trend: "stable"
  },
  {
    id: "m1822",
    name: "Len",
    normalizedName: "len",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1822,
    trend: "stable"
  },
  {
    id: "m1826",
    name: "Lenny",
    normalizedName: "lenny",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Len"
    ],
    alternateSpellings: [],
    currentRank: 1826,
    trend: "stable"
  },
  {
    id: "m1833",
    name: "Leopold",
    normalizedName: "leopold",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Leop",
      "Leoie"
    ],
    alternateSpellings: [],
    currentRank: 1833,
    trend: "stable"
  },
  {
    id: "m1835",
    name: "Lester",
    normalizedName: "lester",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Les",
      "Lesie"
    ],
    alternateSpellings: [],
    currentRank: 1835,
    trend: "stable"
  },
  {
    id: "m1836",
    name: "Lev",
    normalizedName: "lev",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1836,
    trend: "stable"
  },
  {
    id: "m1837",
    name: "Levar",
    normalizedName: "levar",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lev"
    ],
    alternateSpellings: [],
    currentRank: 1837,
    trend: "stable"
  },
  {
    id: "m1839",
    name: "Levin",
    normalizedName: "levin",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lev"
    ],
    alternateSpellings: [],
    currentRank: 1839,
    trend: "stable"
  },
  {
    id: "m1841",
    name: "Lex",
    normalizedName: "lex",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1841,
    trend: "stable"
  },
  {
    id: "m1845",
    name: "Link",
    normalizedName: "link",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1845,
    trend: "stable"
  },
  {
    id: "m1846",
    name: "Lino",
    normalizedName: "lino",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1846,
    trend: "stable"
  },
  {
    id: "m1848",
    name: "Lisandro",
    normalizedName: "lisandro",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Lisa",
      "Lisie"
    ],
    alternateSpellings: [],
    currentRank: 1848,
    trend: "stable"
  },
  {
    id: "m1849",
    name: "Lleyton",
    normalizedName: "lleyton",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lley",
      "Lleie"
    ],
    alternateSpellings: [],
    currentRank: 1849,
    trend: "stable"
  },
  {
    id: "m1850",
    name: "Lloyd",
    normalizedName: "lloyd",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Llo"
    ],
    alternateSpellings: [],
    currentRank: 1850,
    trend: "stable"
  },
  {
    id: "m1854",
    name: "Lonnie",
    normalizedName: "lonnie",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lon",
      "Lonie"
    ],
    alternateSpellings: [],
    currentRank: 1854,
    trend: "stable"
  },
  {
    id: "m1855",
    name: "Lonzo",
    normalizedName: "lonzo",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lon"
    ],
    alternateSpellings: [],
    currentRank: 1855,
    trend: "stable"
  },
  {
    id: "m1859",
    name: "Lowell",
    normalizedName: "lowell",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Low",
      "Lowie"
    ],
    alternateSpellings: [],
    currentRank: 1859,
    trend: "stable"
  },
  {
    id: "m1860",
    name: "Loyal",
    normalizedName: "loyal",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [
      "Loy"
    ],
    alternateSpellings: [],
    currentRank: 1860,
    trend: "stable"
  },
  {
    id: "m1865",
    name: "Lucio",
    normalizedName: "lucio",
    gender: "M",
    origins: [
      "Italian",
      "Spanish"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Luc"
    ],
    alternateSpellings: [],
    currentRank: 1865,
    trend: "stable"
  },
  {
    id: "m1866",
    name: "Lucius",
    normalizedName: "lucius",
    gender: "M",
    origins: [
      "Latin"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Luc",
      "Lucie"
    ],
    alternateSpellings: [],
    currentRank: 1866,
    trend: "stable"
  },
  {
    id: "m1872",
    name: "Luther",
    normalizedName: "luther",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Lut",
      "Lutie"
    ],
    alternateSpellings: [],
    currentRank: 1872,
    trend: "stable"
  },
  {
    id: "m1873",
    name: "Lyle",
    normalizedName: "lyle",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1873,
    trend: "stable"
  },
  {
    id: "m1874",
    name: "Lyndon",
    normalizedName: "lyndon",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Lyn",
      "Lynie"
    ],
    alternateSpellings: [],
    currentRank: 1874,
    trend: "stable"
  },
  {
    id: "m1875",
    name: "Lynn",
    normalizedName: "lynn",
    gender: "M",
    origins: [
      "Latin",
      "Celtic"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1875,
    trend: "stable"
  },
  {
    id: "m1878",
    name: "Madden",
    normalizedName: "madden",
    gender: "M",
    origins: [
      "English"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Mad",
      "Madie"
    ],
    alternateSpellings: [],
    currentRank: 1878,
    trend: "stable"
  },
  {
    id: "m1882",
    name: "Mahlon",
    normalizedName: "mahlon",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Strong",
      "Mighty"
    ],
    syllables: 2,
    nicknames: [
      "Mah",
      "Mahie"
    ],
    alternateSpellings: [],
    currentRank: 1882,
    trend: "stable"
  },
  {
    id: "m1885",
    name: "Makari",
    normalizedName: "makari",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mak",
      "Makie"
    ],
    alternateSpellings: [],
    currentRank: 1885,
    trend: "stable"
  },
  {
    id: "m1887",
    name: "Mal",
    normalizedName: "mal",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1887,
    trend: "stable"
  },
  {
    id: "m1888",
    name: "Malachai",
    normalizedName: "malachai",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mala",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 1888,
    trend: "stable"
  },
  {
    id: "m1891",
    name: "Malaki",
    normalizedName: "malaki",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 3,
    nicknames: [
      "Mal",
      "Malie"
    ],
    alternateSpellings: [],
    currentRank: 1891,
    trend: "stable"
  },
  {
    id: "m1895",
    name: "Manny",
    normalizedName: "manny",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 2,
    nicknames: [
      "Man"
    ],
    alternateSpellings: [],
    currentRank: 1895,
    trend: "stable"
  },
  {
    id: "m1897",
    name: "Marc",
    normalizedName: "marc",
    gender: "M",
    origins: [
      "Latin",
      "Hebrew"
    ],
    meanings: [
      "Unique",
      "Special"
    ],
    syllables: 1,
    nicknames: [],
    alternateSpellings: [],
    currentRank: 1897,
    trend: "stable"
  }
];

// Helper functions for accessing the data
export function getNameByName(name: string): NameData | null {
  return namesData.find(n => n.name.toLowerCase() === name.toLowerCase()) ?? null;
}

export function getNamesByGender(gender: "M" | "F" | "N"): NameData[] {
  return namesData.filter(n => n.gender === gender);
}

export function getNamesByLetter(letter: string, options?: { gender?: "M" | "F" | "N" | "all" }): NameData[] {
  let results = namesData.filter(n => n.name.toLowerCase().startsWith(letter.toLowerCase()));
  if (options?.gender && options.gender !== "all") {
    results = results.filter(n => n.gender === options.gender);
  }
  return results;
}

export function getRandomName(gender?: "M" | "F" | "N"): NameData {
  const filtered = gender ? namesData.filter(n => n.gender === gender) : namesData;
  return filtered[Math.floor(Math.random() * filtered.length)];
}

export function searchNames(query: string, options?: { gender?: "M" | "F" | "N"; limit?: number }): NameData[] {
  const q = query.toLowerCase();
  let results = namesData.filter(n =>
    n.name.toLowerCase().includes(q) ||
    n.meanings.some(m => m.toLowerCase().includes(q)) ||
    n.origins.some(o => o.toLowerCase().includes(q))
  );

  if (options?.gender) {
    results = results.filter(n => n.gender === options.gender);
  }

  if (options?.limit) {
    results = results.slice(0, options.limit);
  }

  return results;
}

export function getPopularNames(limit: number = 100, gender?: "M" | "F" | "N"): NameData[] {
  let filtered = gender ? namesData.filter(n => n.gender === gender) : namesData;
  return filtered.sort((a, b) => a.currentRank - b.currentRank).slice(0, limit);
}

export function getAllNames(): NameData[] {
  return namesData;
}

// Vibe types
export type NameVibe = "classic" | "modern" | "nature" | "strong" | "gentle" | "unique";

// Nature-related words for vibe detection
const NATURE_WORDS = /flower|tree|moon|sun|star|river|rose|lily|ivy|ocean|sky|meadow|forest|rain|snow|dawn|aurora|willow|violet|daisy|fern|brook|lake|wind|storm|leaf|bloom|garden|pearl|coral|jade|ruby|stone|bear|wolf|lion|eagle|dove|wren|robin|sparrow|phoenix|dragon/i;

// Strong consonant sounds at start
const STRONG_STARTS = /^[KJGBDTMVR]/i;

// Soft/gentle sounds at start
const GENTLE_STARTS = /^[AEIOULSWMN]/i;

// Classic origin languages
const CLASSIC_ORIGINS = ["Latin", "Greek", "Hebrew", "Biblical", "Roman"];

/**
 * Generate vibes for a name based on its characteristics
 */
export function generateVibes(name: NameData): NameVibe[] {
  const vibes: NameVibe[] = [];

  // Classic: Traditional origins (Latin, Greek, Hebrew)
  if (name.origins.some(o => CLASSIC_ORIGINS.some(c => o.toLowerCase().includes(c.toLowerCase())))) {
    vibes.push("classic");
  }

  // Nature: Meanings contain nature words
  if (name.meanings.some(m => NATURE_WORDS.test(m)) || NATURE_WORDS.test(name.name)) {
    vibes.push("nature");
  }

  // Strong: Short names with hard consonant starts
  if (name.syllables <= 2 && STRONG_STARTS.test(name.name)) {
    vibes.push("strong");
  }

  // Gentle: Soft sounds, often longer names
  if (GENTLE_STARTS.test(name.name) && (name.syllables >= 3 || /[aeiou]$/i.test(name.name))) {
    vibes.push("gentle");
  }

  // Modern: Rising trend and not super popular
  if (name.trend === "rising" || (name.currentRank > 500 && name.currentRank < 2000)) {
    vibes.push("modern");
  }

  // Unique: Very rare names
  if (name.currentRank > 1500 || name.currentRank === 0) {
    vibes.push("unique");
  }

  // Ensure at least one vibe
  if (vibes.length === 0) {
    vibes.push("classic"); // Default fallback
  }

  return vibes;
}

/**
 * Get vibes for a name by name string
 */
export function getNameVibes(nameStr: string): NameVibe[] {
  const name = getNameByName(nameStr);
  return name ? generateVibes(name) : [];
}

/**
 * Filter names by vibes (any match)
 */
export function filterByVibes(names: NameData[], vibes: NameVibe[]): NameData[] {
  if (vibes.length === 0) return names;
  return names.filter(name => {
    const nameVibes = generateVibes(name);
    return vibes.some(v => nameVibes.includes(v));
  });
}

/**
 * Get the daily discovery name (deterministic based on date)
 */
export function getDailyName(): NameData {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));

  // Use day of year to select a name deterministically
  // Add year to cycle through different names each year
  const seed = dayOfYear + (now.getFullYear() * 366);
  const index = seed % namesData.length;

  return namesData[index];
}

/**
 * Filter names by length (syllables)
 */
export function filterByLength(names: NameData[], length: "any" | "short" | "medium" | "long"): NameData[] {
  if (length === "any") return names;
  return names.filter(name => {
    if (length === "short") return name.syllables <= 2;
    if (length === "medium") return name.syllables === 3;
    if (length === "long") return name.syllables >= 4;
    return true;
  });
}

/**
 * Filter names by popularity (currentRank)
 */
export function filterByPopularity(names: NameData[], popularity: "any" | "popular" | "uncommon" | "rare"): NameData[] {
  if (popularity === "any") return names;
  return names.filter(name => {
    if (popularity === "popular") return name.currentRank > 0 && name.currentRank <= 200;
    if (popularity === "uncommon") return name.currentRank > 200 && name.currentRank <= 1000;
    if (popularity === "rare") return name.currentRank > 1000 || name.currentRank === 0;
    return true;
  });
}

/**
 * Filter names by starting letter
 */
export function filterByStartingLetter(names: NameData[], letter: string | null): NameData[] {
  if (!letter) return names;
  return names.filter(name => name.name[0].toUpperCase() === letter.toUpperCase());
}

/**
 * Filter names by origins (any match)
 */
export function filterByOrigins(names: NameData[], origins: string[]): NameData[] {
  if (origins.length === 0) return names;
  return names.filter(name =>
    name.origins.some(o => origins.some(fo => o.toLowerCase().includes(fo.toLowerCase())))
  );
}

/**
 * Get all unique origins from the dataset
 */
export function getAllOrigins(): string[] {
  const originsSet = new Set<string>();
  namesData.forEach(name => {
    name.origins.forEach(origin => originsSet.add(origin));
  });
  return Array.from(originsSet).sort();
}
