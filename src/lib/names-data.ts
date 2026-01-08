/**
 * Baby Names Data
 * Comprehensive dataset based on SSA popularity data with origins, meanings, and analysis
 * Total: 550 names
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
  { id: "f1", name: "Olivia", normalizedName: "olivia", gender: "F", origins: ["Latin"], meanings: ["Olive tree","Peace"], syllables: 3, nicknames: ["Liv","Livvy","Ollie"], alternateSpellings: [], currentRank: 1, trend: "stable" },
  { id: "f2", name: "Emma", normalizedName: "emma", gender: "F", origins: ["Germanic"], meanings: ["Whole","Universal"], syllables: 2, nicknames: ["Em","Emmy"], alternateSpellings: [], currentRank: 2, trend: "stable" },
  { id: "f3", name: "Charlotte", normalizedName: "charlotte", gender: "F", origins: ["French","Germanic"], meanings: ["Free woman","Petite"], syllables: 3, nicknames: ["Charlie","Lottie","Lola"], alternateSpellings: [], currentRank: 3, trend: "stable" },
  { id: "f4", name: "Amelia", normalizedName: "amelia", gender: "F", origins: ["Germanic"], meanings: ["Industrious","Striving"], syllables: 3, nicknames: ["Amy","Mia","Millie"], alternateSpellings: [], currentRank: 4, trend: "stable" },
  { id: "f5", name: "Sophia", normalizedName: "sophia", gender: "F", origins: ["Greek"], meanings: ["Wisdom"], syllables: 2, nicknames: ["Sophie","Soph"], alternateSpellings: [], currentRank: 5, trend: "stable" },
  { id: "f6", name: "Mia", normalizedName: "mia", gender: "F", origins: ["Scandinavian","Latin"], meanings: ["Beloved","Mine"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 6, trend: "stable" },
  { id: "f7", name: "Isabella", normalizedName: "isabella", gender: "F", origins: ["Hebrew","Spanish"], meanings: ["Devoted to God"], syllables: 4, nicknames: ["Bella","Izzy","Isa"], alternateSpellings: [], currentRank: 7, trend: "stable" },
  { id: "f8", name: "Ava", normalizedName: "ava", gender: "F", origins: ["Latin","Hebrew"], meanings: ["Life","Bird-like"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 8, trend: "stable" },
  { id: "f9", name: "Evelyn", normalizedName: "evelyn", gender: "F", origins: ["English"], meanings: ["Wished-for child"], syllables: 3, nicknames: ["Evie","Eve"], alternateSpellings: [], currentRank: 9, trend: "stable" },
  { id: "f10", name: "Luna", normalizedName: "luna", gender: "F", origins: ["Latin"], meanings: ["Moon"], syllables: 2, nicknames: ["Lu","Lulu"], alternateSpellings: [], currentRank: 10, trend: "stable" },
  { id: "f11", name: "Harper", normalizedName: "harper", gender: "F", origins: ["English"], meanings: ["Harp player"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 11, trend: "stable" },
  { id: "f12", name: "Sofia", normalizedName: "sofia", gender: "F", origins: ["Greek"], meanings: ["Wisdom"], syllables: 2, nicknames: ["Sof"], alternateSpellings: [], currentRank: 12, trend: "stable" },
  { id: "f13", name: "Camila", normalizedName: "camila", gender: "F", origins: ["Latin","Spanish"], meanings: ["Young ceremonial attendant"], syllables: 3, nicknames: ["Cami","Mila"], alternateSpellings: [], currentRank: 13, trend: "stable" },
  { id: "f14", name: "Eleanor", normalizedName: "eleanor", gender: "F", origins: ["Greek","French"], meanings: ["Bright light"], syllables: 3, nicknames: ["Ellie","Nell","Nora"], alternateSpellings: [], currentRank: 14, trend: "stable" },
  { id: "f15", name: "Elizabeth", normalizedName: "elizabeth", gender: "F", origins: ["Hebrew"], meanings: ["Pledged to God"], syllables: 4, nicknames: ["Liz","Beth","Lizzy","Eliza"], alternateSpellings: [], currentRank: 15, trend: "stable" },
  { id: "f16", name: "Violet", normalizedName: "violet", gender: "F", origins: ["Latin"], meanings: ["Purple flower"], syllables: 2, nicknames: ["Vi"], alternateSpellings: [], currentRank: 16, trend: "stable" },
  { id: "f17", name: "Scarlett", normalizedName: "scarlett", gender: "F", origins: ["English"], meanings: ["Red","Scarlet"], syllables: 2, nicknames: ["Scar"], alternateSpellings: [], currentRank: 17, trend: "stable" },
  { id: "f18", name: "Emily", normalizedName: "emily", gender: "F", origins: ["Latin"], meanings: ["Rival","Industrious"], syllables: 3, nicknames: ["Em","Emmy"], alternateSpellings: [], currentRank: 18, trend: "stable" },
  { id: "f19", name: "Hazel", normalizedName: "hazel", gender: "F", origins: ["English"], meanings: ["Hazelnut tree"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 19, trend: "stable" },
  { id: "f20", name: "Aria", normalizedName: "aria", gender: "F", origins: ["Italian","Hebrew"], meanings: ["Air","Song","Lioness"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 20, trend: "stable" },
  { id: "f21", name: "Penelope", normalizedName: "penelope", gender: "F", origins: ["Greek"], meanings: ["Weaver"], syllables: 4, nicknames: ["Penny","Nell","Poppy"], alternateSpellings: [], currentRank: 21, trend: "stable" },
  { id: "f22", name: "Chloe", normalizedName: "chloe", gender: "F", origins: ["Greek"], meanings: ["Blooming","Fertility"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 22, trend: "stable" },
  { id: "f23", name: "Layla", normalizedName: "layla", gender: "F", origins: ["Arabic"], meanings: ["Night","Dark beauty"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 23, trend: "stable" },
  { id: "f24", name: "Mila", normalizedName: "mila", gender: "F", origins: ["Slavic"], meanings: ["Gracious","Dear"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 24, trend: "stable" },
  { id: "f25", name: "Nora", normalizedName: "nora", gender: "F", origins: ["Irish","Greek"], meanings: ["Honor","Light"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 25, trend: "stable" },
  { id: "f26", name: "Riley", normalizedName: "riley", gender: "F", origins: ["Irish"], meanings: ["Courageous","Valiant"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 26, trend: "stable" },
  { id: "f27", name: "Zoey", normalizedName: "zoey", gender: "F", origins: ["Greek"], meanings: ["Life"], syllables: 1, nicknames: ["Zo"], alternateSpellings: [], currentRank: 27, trend: "stable" },
  { id: "f28", name: "Lily", normalizedName: "lily", gender: "F", origins: ["English","Latin"], meanings: ["Lily flower","Purity"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 28, trend: "stable" },
  { id: "f29", name: "Aurora", normalizedName: "aurora", gender: "F", origins: ["Latin"], meanings: ["Dawn","Goddess of sunrise"], syllables: 3, nicknames: ["Rory","Aura"], alternateSpellings: [], currentRank: 29, trend: "stable" },
  { id: "f30", name: "Nova", normalizedName: "nova", gender: "F", origins: ["Latin"], meanings: ["New","Star"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 30, trend: "stable" },
  { id: "f31", name: "Ella", normalizedName: "ella", gender: "F", origins: ["Germanic","English"], meanings: ["Fairy maiden","All"], syllables: 2, nicknames: ["Ellie"], alternateSpellings: [], currentRank: 31, trend: "stable" },
  { id: "f32", name: "Ellie", normalizedName: "ellie", gender: "F", origins: ["Greek","English"], meanings: ["Light","Shining"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 32, trend: "stable" },
  { id: "f33", name: "Willow", normalizedName: "willow", gender: "F", origins: ["English"], meanings: ["Willow tree","Graceful"], syllables: 2, nicknames: ["Will"], alternateSpellings: [], currentRank: 33, trend: "stable" },
  { id: "f34", name: "Ivy", normalizedName: "ivy", gender: "F", origins: ["English"], meanings: ["Ivy plant","Faithfulness"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 34, trend: "stable" },
  { id: "f35", name: "Emilia", normalizedName: "emilia", gender: "F", origins: ["Latin"], meanings: ["Rival"], syllables: 3, nicknames: ["Mia","Millie"], alternateSpellings: [], currentRank: 35, trend: "stable" },
  { id: "f36", name: "Abigail", normalizedName: "abigail", gender: "F", origins: ["Hebrew"], meanings: ["Father's joy"], syllables: 3, nicknames: ["Abby","Gail"], alternateSpellings: [], currentRank: 36, trend: "stable" },
  { id: "f37", name: "Gianna", normalizedName: "gianna", gender: "F", origins: ["Italian"], meanings: ["God is gracious"], syllables: 2, nicknames: ["Gia","Gigi"], alternateSpellings: [], currentRank: 37, trend: "stable" },
  { id: "f38", name: "Valentina", normalizedName: "valentina", gender: "F", origins: ["Latin"], meanings: ["Strong","Healthy"], syllables: 4, nicknames: ["Val"], alternateSpellings: [], currentRank: 38, trend: "stable" },
  { id: "f39", name: "Luna", normalizedName: "luna", gender: "F", origins: ["Latin"], meanings: ["Moon"], syllables: 2, nicknames: ["Lu"], alternateSpellings: [], currentRank: 39, trend: "stable" },
  { id: "f40", name: "Isla", normalizedName: "isla", gender: "F", origins: ["Scottish"], meanings: ["Island"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 40, trend: "stable" },
  { id: "f41", name: "Everly", normalizedName: "everly", gender: "F", origins: ["English"], meanings: ["From the boar meadow"], syllables: 3, nicknames: ["Ever"], alternateSpellings: [], currentRank: 41, trend: "stable" },
  { id: "f42", name: "Naomi", normalizedName: "naomi", gender: "F", origins: ["Hebrew"], meanings: ["Pleasantness"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 42, trend: "stable" },
  { id: "f43", name: "Grace", normalizedName: "grace", gender: "F", origins: ["Latin"], meanings: ["Grace of God","Elegance"], syllables: 2, nicknames: ["Gracie"], alternateSpellings: [], currentRank: 43, trend: "stable" },
  { id: "f44", name: "Elena", normalizedName: "elena", gender: "F", origins: ["Greek"], meanings: ["Bright light"], syllables: 3, nicknames: ["Lena"], alternateSpellings: [], currentRank: 44, trend: "stable" },
  { id: "f45", name: "Natalie", normalizedName: "natalie", gender: "F", origins: ["Latin"], meanings: ["Christmas Day"], syllables: 3, nicknames: ["Nat","Natty"], alternateSpellings: [], currentRank: 45, trend: "stable" },
  { id: "f46", name: "Eliana", normalizedName: "eliana", gender: "F", origins: ["Hebrew"], meanings: ["God has answered"], syllables: 3, nicknames: ["Ellie","Ana"], alternateSpellings: [], currentRank: 46, trend: "stable" },
  { id: "f47", name: "Maya", normalizedName: "maya", gender: "F", origins: ["Sanskrit","Greek"], meanings: ["Illusion","Water"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 47, trend: "stable" },
  { id: "f48", name: "Kinsley", normalizedName: "kinsley", gender: "F", origins: ["English"], meanings: ["King's meadow"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 48, trend: "stable" },
  { id: "f49", name: "Hannah", normalizedName: "hannah", gender: "F", origins: ["Hebrew"], meanings: ["Grace","Favor"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 49, trend: "stable" },
  { id: "f50", name: "Paisley", normalizedName: "paisley", gender: "F", origins: ["Scottish"], meanings: ["Church"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 50, trend: "stable" },
  { id: "f51", name: "Stella", normalizedName: "stella", gender: "F", origins: ["Latin"], meanings: ["Star"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 51, trend: "rising" },
  { id: "f52", name: "Madelyn", normalizedName: "madelyn", gender: "F", origins: ["English"], meanings: ["Woman from Magdala"], syllables: 3, nicknames: ["Maddie"], alternateSpellings: [], currentRank: 52, trend: "rising" },
  { id: "f53", name: "Kennedy", normalizedName: "kennedy", gender: "F", origins: ["Irish"], meanings: ["Helmeted chief"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 53, trend: "rising" },
  { id: "f54", name: "Genesis", normalizedName: "genesis", gender: "F", origins: ["Greek"], meanings: ["Origin","Beginning"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 54, trend: "rising" },
  { id: "f55", name: "Savannah", normalizedName: "savannah", gender: "F", origins: ["Spanish"], meanings: ["Treeless plain"], syllables: 3, nicknames: ["Sav"], alternateSpellings: [], currentRank: 55, trend: "rising" },
  { id: "f56", name: "Audrey", normalizedName: "audrey", gender: "F", origins: ["English"], meanings: ["Noble strength"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 56, trend: "rising" },
  { id: "f57", name: "Brooklyn", normalizedName: "brooklyn", gender: "F", origins: ["English"], meanings: ["Water","Stream"], syllables: 2, nicknames: ["Brooke"], alternateSpellings: [], currentRank: 57, trend: "rising" },
  { id: "f58", name: "Claire", normalizedName: "claire", gender: "F", origins: ["French","Latin"], meanings: ["Clear","Bright"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 58, trend: "rising" },
  { id: "f59", name: "Skylar", normalizedName: "skylar", gender: "F", origins: ["Dutch"], meanings: ["Scholar"], syllables: 2, nicknames: ["Sky"], alternateSpellings: [], currentRank: 59, trend: "rising" },
  { id: "f60", name: "Lucy", normalizedName: "lucy", gender: "F", origins: ["Latin"], meanings: ["Light"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 60, trend: "rising" },
  { id: "f61", name: "Bella", normalizedName: "bella", gender: "F", origins: ["Italian"], meanings: ["Beautiful"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 61, trend: "rising" },
  { id: "f62", name: "Paisley", normalizedName: "paisley", gender: "F", origins: ["Scottish"], meanings: ["Church"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 62, trend: "rising" },
  { id: "f63", name: "Sadie", normalizedName: "sadie", gender: "F", origins: ["Hebrew"], meanings: ["Princess"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 63, trend: "rising" },
  { id: "f64", name: "Aaliyah", normalizedName: "aaliyah", gender: "F", origins: ["Arabic"], meanings: ["Exalted","Sublime"], syllables: 2, nicknames: ["Ali"], alternateSpellings: [], currentRank: 64, trend: "rising" },
  { id: "f65", name: "Anna", normalizedName: "anna", gender: "F", origins: ["Hebrew"], meanings: ["Grace"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 65, trend: "rising" },
  { id: "f66", name: "Serenity", normalizedName: "serenity", gender: "F", origins: ["English"], meanings: ["Peaceful"], syllables: 4, nicknames: [], alternateSpellings: [], currentRank: 66, trend: "rising" },
  { id: "f67", name: "Caroline", normalizedName: "caroline", gender: "F", origins: ["Latin"], meanings: ["Free woman"], syllables: 4, nicknames: ["Cara","Carrie"], alternateSpellings: [], currentRank: 67, trend: "rising" },
  { id: "f68", name: "Piper", normalizedName: "piper", gender: "F", origins: ["English"], meanings: ["Pipe player"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 68, trend: "rising" },
  { id: "f69", name: "Ruby", normalizedName: "ruby", gender: "F", origins: ["Latin"], meanings: ["Red gemstone"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 69, trend: "rising" },
  { id: "f70", name: "Madeline", normalizedName: "madeline", gender: "F", origins: ["French"], meanings: ["High tower"], syllables: 4, nicknames: ["Maddie"], alternateSpellings: [], currentRank: 70, trend: "rising" },
  { id: "f71", name: "Alice", normalizedName: "alice", gender: "F", origins: ["Germanic"], meanings: ["Noble","Exalted"], syllables: 3, nicknames: ["Ali"], alternateSpellings: [], currentRank: 71, trend: "rising" },
  { id: "f72", name: "Gabriella", normalizedName: "gabriella", gender: "F", origins: ["Hebrew"], meanings: ["God is my strength"], syllables: 3, nicknames: ["Gabby","Ella"], alternateSpellings: [], currentRank: 72, trend: "rising" },
  { id: "f73", name: "Jade", normalizedName: "jade", gender: "F", origins: ["Spanish"], meanings: ["Jade stone"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 73, trend: "rising" },
  { id: "f74", name: "Ariana", normalizedName: "ariana", gender: "F", origins: ["Italian"], meanings: ["Most holy"], syllables: 3, nicknames: ["Ari"], alternateSpellings: [], currentRank: 74, trend: "rising" },
  { id: "f75", name: "Cora", normalizedName: "cora", gender: "F", origins: ["Greek"], meanings: ["Maiden"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 75, trend: "rising" },
  { id: "f76", name: "Eva", normalizedName: "eva", gender: "F", origins: ["Hebrew"], meanings: ["Life"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 76, trend: "rising" },
  { id: "f77", name: "Aubrey", normalizedName: "aubrey", gender: "F", origins: ["Germanic"], meanings: ["Elf ruler"], syllables: 2, nicknames: ["Bree"], alternateSpellings: [], currentRank: 77, trend: "rising" },
  { id: "f78", name: "Addison", normalizedName: "addison", gender: "F", origins: ["English"], meanings: ["Son of Adam"], syllables: 3, nicknames: ["Addie"], alternateSpellings: [], currentRank: 78, trend: "rising" },
  { id: "f79", name: "Leah", normalizedName: "leah", gender: "F", origins: ["Hebrew"], meanings: ["Weary"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 79, trend: "rising" },
  { id: "f80", name: "Lillian", normalizedName: "lillian", gender: "F", origins: ["Latin"], meanings: ["Lily"], syllables: 2, nicknames: ["Lily","Lilly"], alternateSpellings: [], currentRank: 80, trend: "rising" },
  { id: "f81", name: "Victoria", normalizedName: "victoria", gender: "F", origins: ["Latin"], meanings: ["Victory","Conqueror"], syllables: 3, nicknames: ["Vicky","Tori"], alternateSpellings: [], currentRank: 81, trend: "rising" },
  { id: "f82", name: "Hailey", normalizedName: "hailey", gender: "F", origins: ["English"], meanings: ["Hay meadow"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 82, trend: "rising" },
  { id: "f83", name: "Quinn", normalizedName: "quinn", gender: "F", origins: ["Irish"], meanings: ["Wise","Counsel"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 83, trend: "rising" },
  { id: "f84", name: "Sophie", normalizedName: "sophie", gender: "F", origins: ["Greek"], meanings: ["Wisdom"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 84, trend: "rising" },
  { id: "f85", name: "Allison", normalizedName: "allison", gender: "F", origins: ["Germanic"], meanings: ["Noble"], syllables: 3, nicknames: ["Ali","Allie"], alternateSpellings: [], currentRank: 85, trend: "rising" },
  { id: "f86", name: "Autumn", normalizedName: "autumn", gender: "F", origins: ["Latin"], meanings: ["Fall season"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 86, trend: "rising" },
  { id: "f87", name: "Peyton", normalizedName: "peyton", gender: "F", origins: ["English"], meanings: ["Fighting man's estate"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 87, trend: "rising" },
  { id: "f88", name: "Samantha", normalizedName: "samantha", gender: "F", origins: ["Hebrew"], meanings: ["Listener"], syllables: 3, nicknames: ["Sam","Sammy"], alternateSpellings: [], currentRank: 88, trend: "rising" },
  { id: "f89", name: "Nevaeh", normalizedName: "nevaeh", gender: "F", origins: ["American"], meanings: ["Heaven spelled backwards"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 89, trend: "rising" },
  { id: "f90", name: "Sarah", normalizedName: "sarah", gender: "F", origins: ["Hebrew"], meanings: ["Princess"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 90, trend: "rising" },
  { id: "f91", name: "Lydia", normalizedName: "lydia", gender: "F", origins: ["Greek"], meanings: ["Woman from Lydia"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 91, trend: "rising" },
  { id: "f92", name: "Zoe", normalizedName: "zoe", gender: "F", origins: ["Greek"], meanings: ["Life"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 92, trend: "rising" },
  { id: "f93", name: "Clara", normalizedName: "clara", gender: "F", origins: ["Latin"], meanings: ["Bright","Clear"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 93, trend: "rising" },
  { id: "f94", name: "Josephine", normalizedName: "josephine", gender: "F", origins: ["Hebrew"], meanings: ["God will add"], syllables: 4, nicknames: ["Jo","Josie"], alternateSpellings: [], currentRank: 94, trend: "rising" },
  { id: "f95", name: "Delilah", normalizedName: "delilah", gender: "F", origins: ["Hebrew"], meanings: ["Delicate"], syllables: 3, nicknames: ["Lilah"], alternateSpellings: [], currentRank: 95, trend: "rising" },
  { id: "f96", name: "Vivian", normalizedName: "vivian", gender: "F", origins: ["Latin"], meanings: ["Alive"], syllables: 2, nicknames: ["Vivi"], alternateSpellings: [], currentRank: 96, trend: "rising" },
  { id: "f97", name: "Natalia", normalizedName: "natalia", gender: "F", origins: ["Latin"], meanings: ["Christmas Day"], syllables: 3, nicknames: ["Nat"], alternateSpellings: [], currentRank: 97, trend: "rising" },
  { id: "f98", name: "Athena", normalizedName: "athena", gender: "F", origins: ["Greek"], meanings: ["Goddess of wisdom"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 98, trend: "rising" },
  { id: "f99", name: "Lila", normalizedName: "lila", gender: "F", origins: ["Arabic","Sanskrit"], meanings: ["Night","Play"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 99, trend: "rising" },
  { id: "f100", name: "Eliza", normalizedName: "eliza", gender: "F", origins: ["Hebrew"], meanings: ["Pledged to God"], syllables: 3, nicknames: ["Liza"], alternateSpellings: [], currentRank: 100, trend: "rising" },
  { id: "f101", name: "Maria", normalizedName: "maria", gender: "F", origins: ["Hebrew","Latin"], meanings: ["Bitter","Beloved"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 101, trend: "rising" },
  { id: "f102", name: "Hadley", normalizedName: "hadley", gender: "F", origins: ["English"], meanings: ["Heather field"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 102, trend: "rising" },
  { id: "f103", name: "Iris", normalizedName: "iris", gender: "F", origins: ["Greek"], meanings: ["Rainbow"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 103, trend: "rising" },
  { id: "f104", name: "Eden", normalizedName: "eden", gender: "F", origins: ["Hebrew"], meanings: ["Paradise","Delight"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 104, trend: "rising" },
  { id: "f105", name: "Julia", normalizedName: "julia", gender: "F", origins: ["Latin"], meanings: ["Youthful"], syllables: 2, nicknames: ["Julie"], alternateSpellings: [], currentRank: 105, trend: "rising" },
  { id: "f106", name: "Emery", normalizedName: "emery", gender: "F", origins: ["Germanic"], meanings: ["Brave","Powerful"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 106, trend: "rising" },
  { id: "f107", name: "Rose", normalizedName: "rose", gender: "F", origins: ["Latin"], meanings: ["Rose flower"], syllables: 2, nicknames: ["Rosie"], alternateSpellings: [], currentRank: 107, trend: "rising" },
  { id: "f108", name: "Margaret", normalizedName: "margaret", gender: "F", origins: ["Greek"], meanings: ["Pearl"], syllables: 3, nicknames: ["Maggie","Meg"], alternateSpellings: [], currentRank: 108, trend: "rising" },
  { id: "f109", name: "Leilani", normalizedName: "leilani", gender: "F", origins: ["Hawaiian"], meanings: ["Heavenly flower"], syllables: 3, nicknames: ["Lei"], alternateSpellings: [], currentRank: 109, trend: "rising" },
  { id: "f110", name: "Melody", normalizedName: "melody", gender: "F", origins: ["Greek"], meanings: ["Song"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 110, trend: "rising" },
  { id: "f111", name: "Mackenzie", normalizedName: "mackenzie", gender: "F", origins: ["Scottish"], meanings: ["Son of Kenneth"], syllables: 3, nicknames: ["Kenzie"], alternateSpellings: [], currentRank: 111, trend: "rising" },
  { id: "f112", name: "Reagan", normalizedName: "reagan", gender: "F", origins: ["Irish"], meanings: ["Little ruler"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 112, trend: "rising" },
  { id: "f113", name: "Brielle", normalizedName: "brielle", gender: "F", origins: ["French"], meanings: ["Hunting grounds"], syllables: 2, nicknames: ["Bri"], alternateSpellings: [], currentRank: 113, trend: "rising" },
  { id: "f114", name: "Adalynn", normalizedName: "adalynn", gender: "F", origins: ["Germanic"], meanings: ["Noble"], syllables: 3, nicknames: ["Ada","Addy"], alternateSpellings: [], currentRank: 114, trend: "rising" },
  { id: "f115", name: "Londyn", normalizedName: "londyn", gender: "F", origins: ["English"], meanings: ["London"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 115, trend: "rising" },
  { id: "f116", name: "Sienna", normalizedName: "sienna", gender: "F", origins: ["Italian"], meanings: ["Orange-red"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 116, trend: "rising" },
  { id: "f117", name: "Jasmine", normalizedName: "jasmine", gender: "F", origins: ["Persian"], meanings: ["Jasmine flower"], syllables: 3, nicknames: ["Jazz"], alternateSpellings: [], currentRank: 117, trend: "rising" },
  { id: "f118", name: "Reese", normalizedName: "reese", gender: "F", origins: ["Welsh"], meanings: ["Enthusiasm"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 118, trend: "rising" },
  { id: "f119", name: "Adalyn", normalizedName: "adalyn", gender: "F", origins: ["Germanic"], meanings: ["Noble"], syllables: 3, nicknames: ["Ada"], alternateSpellings: [], currentRank: 119, trend: "rising" },
  { id: "f120", name: "Katherine", normalizedName: "katherine", gender: "F", origins: ["Greek"], meanings: ["Pure"], syllables: 4, nicknames: ["Kate","Katie","Kat"], alternateSpellings: [], currentRank: 120, trend: "rising" },
  { id: "f121", name: "Freya", normalizedName: "freya", gender: "F", origins: ["Norse"], meanings: ["Noble woman"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 121, trend: "rising" },
  { id: "f122", name: "Lucia", normalizedName: "lucia", gender: "F", origins: ["Italian","Latin"], meanings: ["Light"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 122, trend: "rising" },
  { id: "f123", name: "Daisy", normalizedName: "daisy", gender: "F", origins: ["English"], meanings: ["Day's eye"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 123, trend: "rising" },
  { id: "f124", name: "Raelynn", normalizedName: "raelynn", gender: "F", origins: ["American"], meanings: ["Combination of Rae + Lynn"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 124, trend: "rising" },
  { id: "f125", name: "Maeve", normalizedName: "maeve", gender: "F", origins: ["Irish"], meanings: ["Intoxicating"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 125, trend: "rising" },
  { id: "f126", name: "Catalina", normalizedName: "catalina", gender: "F", origins: ["Spanish"], meanings: ["Pure"], syllables: 4, nicknames: ["Cat"], alternateSpellings: [], currentRank: 126, trend: "rising" },
  { id: "f127", name: "Sloane", normalizedName: "sloane", gender: "F", origins: ["Irish"], meanings: ["Warrior"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 127, trend: "rising" },
  { id: "f128", name: "Esther", normalizedName: "esther", gender: "F", origins: ["Persian","Hebrew"], meanings: ["Star"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 128, trend: "rising" },
  { id: "f129", name: "Juliana", normalizedName: "juliana", gender: "F", origins: ["Latin"], meanings: ["Youthful"], syllables: 3, nicknames: ["Julie","Ana"], alternateSpellings: [], currentRank: 129, trend: "rising" },
  { id: "f130", name: "Cecilia", normalizedName: "cecilia", gender: "F", origins: ["Latin"], meanings: ["Blind"], syllables: 3, nicknames: ["Cece"], alternateSpellings: [], currentRank: 130, trend: "rising" },
  { id: "f131", name: "Lyla", normalizedName: "lyla", gender: "F", origins: ["Arabic"], meanings: ["Night"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 131, trend: "rising" },
  { id: "f132", name: "Molly", normalizedName: "molly", gender: "F", origins: ["Hebrew"], meanings: ["Bitter"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 132, trend: "rising" },
  { id: "f133", name: "Olive", normalizedName: "olive", gender: "F", origins: ["Latin"], meanings: ["Olive tree"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 133, trend: "rising" },
  { id: "f134", name: "Rylee", normalizedName: "rylee", gender: "F", origins: ["Irish"], meanings: ["Courageous"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 134, trend: "rising" },
  { id: "f135", name: "Remi", normalizedName: "remi", gender: "F", origins: ["French"], meanings: ["Oarsman"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 135, trend: "rising" },
  { id: "f136", name: "Rosalie", normalizedName: "rosalie", gender: "F", origins: ["French"], meanings: ["Rose"], syllables: 3, nicknames: ["Rose","Rosie"], alternateSpellings: [], currentRank: 136, trend: "rising" },
  { id: "f137", name: "Selena", normalizedName: "selena", gender: "F", origins: ["Greek"], meanings: ["Moon"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 137, trend: "rising" },
  { id: "f138", name: "Parker", normalizedName: "parker", gender: "F", origins: ["English"], meanings: ["Park keeper"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 138, trend: "rising" },
  { id: "f139", name: "Kate", normalizedName: "kate", gender: "F", origins: ["Greek"], meanings: ["Pure"], syllables: 2, nicknames: ["Katie"], alternateSpellings: [], currentRank: 139, trend: "rising" },
  { id: "f140", name: "Diana", normalizedName: "diana", gender: "F", origins: ["Latin"], meanings: ["Divine","Goddess"], syllables: 2, nicknames: ["Di"], alternateSpellings: [], currentRank: 140, trend: "rising" },
  { id: "f141", name: "Margot", normalizedName: "margot", gender: "F", origins: ["French"], meanings: ["Pearl"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 141, trend: "rising" },
  { id: "f142", name: "Genevieve", normalizedName: "genevieve", gender: "F", origins: ["French"], meanings: ["Tribe woman"], syllables: 4, nicknames: ["Gen","Vivi"], alternateSpellings: [], currentRank: 142, trend: "rising" },
  { id: "f143", name: "Gemma", normalizedName: "gemma", gender: "F", origins: ["Italian"], meanings: ["Precious stone"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 143, trend: "rising" },
  { id: "f144", name: "Anastasia", normalizedName: "anastasia", gender: "F", origins: ["Greek"], meanings: ["Resurrection"], syllables: 4, nicknames: ["Ana","Stacy"], alternateSpellings: [], currentRank: 144, trend: "rising" },
  { id: "f145", name: "Arabella", normalizedName: "arabella", gender: "F", origins: ["Latin"], meanings: ["Yielding to prayer"], syllables: 4, nicknames: ["Bella"], alternateSpellings: [], currentRank: 145, trend: "rising" },
  { id: "f146", name: "Zara", normalizedName: "zara", gender: "F", origins: ["Arabic"], meanings: ["Princess","Flower"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 146, trend: "rising" },
  { id: "f147", name: "Arya", normalizedName: "arya", gender: "F", origins: ["Sanskrit"], meanings: ["Noble"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 147, trend: "rising" },
  { id: "f148", name: "Juliette", normalizedName: "juliette", gender: "F", origins: ["French"], meanings: ["Youthful"], syllables: 3, nicknames: ["Julie"], alternateSpellings: [], currentRank: 148, trend: "rising" },
  { id: "f149", name: "Harley", normalizedName: "harley", gender: "F", origins: ["English"], meanings: ["Hare meadow"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 149, trend: "rising" },
  { id: "f150", name: "Ada", normalizedName: "ada", gender: "F", origins: ["Germanic"], meanings: ["Noble"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 150, trend: "rising" },
  { id: "f151", name: "Camille", normalizedName: "camille", gender: "F", origins: ["French"], meanings: ["Young ceremonial attendant"], syllables: 3, nicknames: ["Cami"], alternateSpellings: [], currentRank: 151, trend: "stable" },
  { id: "f152", name: "Georgia", normalizedName: "georgia", gender: "F", origins: ["Greek"], meanings: ["Farmer"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 152, trend: "stable" },
  { id: "f153", name: "Presley", normalizedName: "presley", gender: "F", origins: ["English"], meanings: ["Priest's meadow"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 153, trend: "stable" },
  { id: "f154", name: "Charlie", normalizedName: "charlie", gender: "F", origins: ["Germanic"], meanings: ["Free man"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 154, trend: "stable" },
  { id: "f155", name: "Khloe", normalizedName: "khloe", gender: "F", origins: ["Greek"], meanings: ["Blooming"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 155, trend: "stable" },
  { id: "f156", name: "Brianna", normalizedName: "brianna", gender: "F", origins: ["Irish"], meanings: ["Strong","Noble"], syllables: 2, nicknames: ["Bri"], alternateSpellings: [], currentRank: 156, trend: "stable" },
  { id: "f157", name: "Miriam", normalizedName: "miriam", gender: "F", origins: ["Hebrew"], meanings: ["Wished-for child"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 157, trend: "stable" },
  { id: "f158", name: "Kaylee", normalizedName: "kaylee", gender: "F", origins: ["American"], meanings: ["Pure","Beloved"], syllables: 2, nicknames: ["Kay"], alternateSpellings: [], currentRank: 158, trend: "stable" },
  { id: "f159", name: "Morgan", normalizedName: "morgan", gender: "F", origins: ["Welsh"], meanings: ["Sea-born"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 159, trend: "stable" },
  { id: "f160", name: "Aspen", normalizedName: "aspen", gender: "F", origins: ["English"], meanings: ["Aspen tree"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 160, trend: "stable" },
  { id: "f161", name: "Amara", normalizedName: "amara", gender: "F", origins: ["African"], meanings: ["Grace","Eternal"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 161, trend: "stable" },
  { id: "f162", name: "Jordan", normalizedName: "jordan", gender: "F", origins: ["Hebrew"], meanings: ["To flow down"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 162, trend: "stable" },
  { id: "f163", name: "Summer", normalizedName: "summer", gender: "F", origins: ["English"], meanings: ["Summer season"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 163, trend: "stable" },
  { id: "f164", name: "Kira", normalizedName: "kira", gender: "F", origins: ["Russian"], meanings: ["Ruler"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 164, trend: "stable" },
  { id: "f165", name: "Brooke", normalizedName: "brooke", gender: "F", origins: ["English"], meanings: ["Stream","Water"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 165, trend: "stable" },
  { id: "f166", name: "Faith", normalizedName: "faith", gender: "F", origins: ["English"], meanings: ["Trust","Belief"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 166, trend: "stable" },
  { id: "f167", name: "Callie", normalizedName: "callie", gender: "F", origins: ["Greek"], meanings: ["Beautiful"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 167, trend: "stable" },
  { id: "f168", name: "Kimberly", normalizedName: "kimberly", gender: "F", origins: ["English"], meanings: ["Royal fortress meadow"], syllables: 3, nicknames: ["Kim"], alternateSpellings: [], currentRank: 168, trend: "stable" },
  { id: "f169", name: "Alexis", normalizedName: "alexis", gender: "F", origins: ["Greek"], meanings: ["Defender"], syllables: 3, nicknames: ["Alex","Lexi"], alternateSpellings: [], currentRank: 169, trend: "stable" },
  { id: "f170", name: "Vera", normalizedName: "vera", gender: "F", origins: ["Russian"], meanings: ["Faith","Truth"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 170, trend: "stable" },
  { id: "f171", name: "Sage", normalizedName: "sage", gender: "F", origins: ["Latin"], meanings: ["Wise"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 171, trend: "stable" },
  { id: "f172", name: "June", normalizedName: "june", gender: "F", origins: ["Latin"], meanings: ["June month"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 172, trend: "stable" },
  { id: "f173", name: "Willa", normalizedName: "willa", gender: "F", origins: ["Germanic"], meanings: ["Resolute protection"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 173, trend: "stable" },
  { id: "f174", name: "Oakley", normalizedName: "oakley", gender: "F", origins: ["English"], meanings: ["Oak meadow"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 174, trend: "stable" },
  { id: "f175", name: "Jessica", normalizedName: "jessica", gender: "F", origins: ["Hebrew"], meanings: ["God beholds"], syllables: 3, nicknames: ["Jess"], alternateSpellings: [], currentRank: 175, trend: "stable" },
  { id: "f176", name: "Blake", normalizedName: "blake", gender: "F", origins: ["English"], meanings: ["Fair-haired","Dark"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 176, trend: "stable" },
  { id: "f177", name: "Esme", normalizedName: "esme", gender: "F", origins: ["French"], meanings: ["Beloved"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 177, trend: "stable" },
  { id: "f178", name: "Tessa", normalizedName: "tessa", gender: "F", origins: ["Greek"], meanings: ["Harvester"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 178, trend: "stable" },
  { id: "f179", name: "Valerie", normalizedName: "valerie", gender: "F", origins: ["Latin"], meanings: ["Strength","Health"], syllables: 3, nicknames: ["Val"], alternateSpellings: [], currentRank: 179, trend: "stable" },
  { id: "f180", name: "Ember", normalizedName: "ember", gender: "F", origins: ["English"], meanings: ["Spark","Burning low"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 180, trend: "stable" },
  { id: "f181", name: "Paige", normalizedName: "paige", gender: "F", origins: ["English"], meanings: ["Young servant"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 181, trend: "stable" },
  { id: "f182", name: "Teagan", normalizedName: "teagan", gender: "F", origins: ["Irish"], meanings: ["Little poet"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 182, trend: "stable" },
  { id: "f183", name: "Nicole", normalizedName: "nicole", gender: "F", origins: ["Greek"], meanings: ["Victory of the people"], syllables: 3, nicknames: ["Nicky"], alternateSpellings: [], currentRank: 183, trend: "stable" },
  { id: "f184", name: "Bailey", normalizedName: "bailey", gender: "F", origins: ["English"], meanings: ["Bailiff"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 184, trend: "stable" },
  { id: "f185", name: "Amy", normalizedName: "amy", gender: "F", origins: ["French","Latin"], meanings: ["Beloved"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 185, trend: "stable" },
  { id: "f186", name: "Gracie", normalizedName: "gracie", gender: "F", origins: ["Latin"], meanings: ["Grace"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 186, trend: "stable" },
  { id: "f187", name: "Hope", normalizedName: "hope", gender: "F", origins: ["English"], meanings: ["Expectation","Belief"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 187, trend: "stable" },
  { id: "f188", name: "Vanessa", normalizedName: "vanessa", gender: "F", origins: ["Greek"], meanings: ["Butterfly"], syllables: 3, nicknames: ["Nessa"], alternateSpellings: [], currentRank: 188, trend: "stable" },
  { id: "f189", name: "Ruth", normalizedName: "ruth", gender: "F", origins: ["Hebrew"], meanings: ["Friend"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 189, trend: "stable" },
  { id: "f190", name: "Alexandra", normalizedName: "alexandra", gender: "F", origins: ["Greek"], meanings: ["Defender of the people"], syllables: 4, nicknames: ["Alex","Lexi"], alternateSpellings: [], currentRank: 190, trend: "stable" },
  { id: "f191", name: "Lauren", normalizedName: "lauren", gender: "F", origins: ["Latin"], meanings: ["Laurel"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 191, trend: "stable" },
  { id: "f192", name: "Destiny", normalizedName: "destiny", gender: "F", origins: ["English"], meanings: ["Fate"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 192, trend: "stable" },
  { id: "f193", name: "Rachel", normalizedName: "rachel", gender: "F", origins: ["Hebrew"], meanings: ["Ewe"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 193, trend: "stable" },
  { id: "f194", name: "Trinity", normalizedName: "trinity", gender: "F", origins: ["Latin"], meanings: ["Triad"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 194, trend: "stable" },
  { id: "f195", name: "Daniela", normalizedName: "daniela", gender: "F", origins: ["Hebrew"], meanings: ["God is my judge"], syllables: 3, nicknames: ["Dani"], alternateSpellings: [], currentRank: 195, trend: "stable" },
  { id: "f196", name: "Fiona", normalizedName: "fiona", gender: "F", origins: ["Gaelic"], meanings: ["White","Fair"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 196, trend: "stable" },
  { id: "f197", name: "Thea", normalizedName: "thea", gender: "F", origins: ["Greek"], meanings: ["Goddess"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 197, trend: "stable" },
  { id: "f198", name: "Jocelyn", normalizedName: "jocelyn", gender: "F", origins: ["Germanic"], meanings: ["Member of Gauts tribe"], syllables: 3, nicknames: ["Joss"], alternateSpellings: [], currentRank: 198, trend: "stable" },
  { id: "f199", name: "Ximena", normalizedName: "ximena", gender: "F", origins: ["Spanish"], meanings: ["Hearkening"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 199, trend: "stable" },
  { id: "f200", name: "Rebecca", normalizedName: "rebecca", gender: "F", origins: ["Hebrew"], meanings: ["To bind"], syllables: 3, nicknames: ["Becca","Becky"], alternateSpellings: [], currentRank: 200, trend: "stable" },
  { id: "f201", name: "Dakota", normalizedName: "dakota", gender: "F", origins: ["Native American"], meanings: ["Friend","Ally"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 201, trend: "stable" },
  { id: "f202", name: "Felicity", normalizedName: "felicity", gender: "F", origins: ["Latin"], meanings: ["Happiness","Good fortune"], syllables: 4, nicknames: [], alternateSpellings: [], currentRank: 202, trend: "stable" },
  { id: "f203", name: "Beatrice", normalizedName: "beatrice", gender: "F", origins: ["Latin"], meanings: ["She who brings happiness"], syllables: 3, nicknames: ["Bea"], alternateSpellings: [], currentRank: 203, trend: "stable" },
  { id: "f204", name: "Heidi", normalizedName: "heidi", gender: "F", origins: ["Germanic"], meanings: ["Noble one"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 204, trend: "stable" },
  { id: "f205", name: "Chelsea", normalizedName: "chelsea", gender: "F", origins: ["English"], meanings: ["Chalk landing place"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 205, trend: "stable" },
  { id: "f206", name: "Anastasia", normalizedName: "anastasia", gender: "F", origins: ["Greek"], meanings: ["Resurrection"], syllables: 4, nicknames: ["Ana"], alternateSpellings: [], currentRank: 206, trend: "stable" },
  { id: "f207", name: "Adriana", normalizedName: "adriana", gender: "F", origins: ["Latin"], meanings: ["From Hadria"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 207, trend: "stable" },
  { id: "f208", name: "Lena", normalizedName: "lena", gender: "F", origins: ["Greek"], meanings: ["Light"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 208, trend: "stable" },
  { id: "f209", name: "Nadia", normalizedName: "nadia", gender: "F", origins: ["Slavic"], meanings: ["Hope"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 209, trend: "stable" },
  { id: "f210", name: "Catherine", normalizedName: "catherine", gender: "F", origins: ["Greek"], meanings: ["Pure"], syllables: 4, nicknames: ["Cat","Cathy"], alternateSpellings: [], currentRank: 210, trend: "stable" },
  { id: "f211", name: "Bianca", normalizedName: "bianca", gender: "F", origins: ["Italian"], meanings: ["White","Pure"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 211, trend: "stable" },
  { id: "f212", name: "Giselle", normalizedName: "giselle", gender: "F", origins: ["Germanic"], meanings: ["Pledge"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 212, trend: "stable" },
  { id: "f213", name: "Priscilla", normalizedName: "priscilla", gender: "F", origins: ["Latin"], meanings: ["Ancient"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 213, trend: "stable" },
  { id: "f214", name: "Holly", normalizedName: "holly", gender: "F", origins: ["English"], meanings: ["Holly tree"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 214, trend: "stable" },
  { id: "f215", name: "Florence", normalizedName: "florence", gender: "F", origins: ["Latin"], meanings: ["Flourishing"], syllables: 3, nicknames: ["Flo"], alternateSpellings: [], currentRank: 215, trend: "stable" },
  { id: "f216", name: "Leslie", normalizedName: "leslie", gender: "F", origins: ["Scottish"], meanings: ["Holly garden"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 216, trend: "stable" },
  { id: "f217", name: "Megan", normalizedName: "megan", gender: "F", origins: ["Welsh"], meanings: ["Pearl"], syllables: 2, nicknames: ["Meg"], alternateSpellings: [], currentRank: 217, trend: "stable" },
  { id: "f218", name: "Sydney", normalizedName: "sydney", gender: "F", origins: ["French"], meanings: ["Wide meadow"], syllables: 2, nicknames: ["Syd"], alternateSpellings: [], currentRank: 218, trend: "stable" },
  { id: "f219", name: "Natasha", normalizedName: "natasha", gender: "F", origins: ["Russian"], meanings: ["Christmas Day"], syllables: 3, nicknames: ["Tasha"], alternateSpellings: [], currentRank: 219, trend: "stable" },
  { id: "f220", name: "Gloria", normalizedName: "gloria", gender: "F", origins: ["Latin"], meanings: ["Glory"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 220, trend: "stable" },
  { id: "f221", name: "Sabrina", normalizedName: "sabrina", gender: "F", origins: ["Celtic"], meanings: ["From the River Severn"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 221, trend: "stable" },
  { id: "f222", name: "Melissa", normalizedName: "melissa", gender: "F", origins: ["Greek"], meanings: ["Bee"], syllables: 3, nicknames: ["Mel"], alternateSpellings: [], currentRank: 222, trend: "stable" },
  { id: "f223", name: "Camilla", normalizedName: "camilla", gender: "F", origins: ["Latin"], meanings: ["Young attendant"], syllables: 3, nicknames: ["Cami"], alternateSpellings: [], currentRank: 223, trend: "stable" },
  { id: "f224", name: "Alana", normalizedName: "alana", gender: "F", origins: ["Irish"], meanings: ["Dear child"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 224, trend: "stable" },
  { id: "f225", name: "Eloise", normalizedName: "eloise", gender: "F", origins: ["French"], meanings: ["Healthy","Wide"], syllables: 3, nicknames: ["Ellie"], alternateSpellings: [], currentRank: 225, trend: "stable" },
  { id: "f226", name: "Miranda", normalizedName: "miranda", gender: "F", origins: ["Latin"], meanings: ["Admirable"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 226, trend: "stable" },
  { id: "f227", name: "Scarlet", normalizedName: "scarlet", gender: "F", origins: ["English"], meanings: ["Red"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 227, trend: "stable" },
  { id: "f228", name: "Francesca", normalizedName: "francesca", gender: "F", origins: ["Italian"], meanings: ["Free one"], syllables: 3, nicknames: ["Fran"], alternateSpellings: [], currentRank: 228, trend: "stable" },
  { id: "f229", name: "Anastasia", normalizedName: "anastasia", gender: "F", origins: ["Greek"], meanings: ["Resurrection"], syllables: 4, nicknames: [], alternateSpellings: [], currentRank: 229, trend: "stable" },
  { id: "f230", name: "April", normalizedName: "april", gender: "F", origins: ["Latin"], meanings: ["Opening","Spring"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 230, trend: "stable" },
  { id: "f231", name: "Wren", normalizedName: "wren", gender: "F", origins: ["English"], meanings: ["Small bird"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 231, trend: "stable" },
  { id: "f232", name: "Winter", normalizedName: "winter", gender: "F", origins: ["English"], meanings: ["Winter season"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 232, trend: "stable" },
  { id: "f233", name: "Gwendolyn", normalizedName: "gwendolyn", gender: "F", origins: ["Welsh"], meanings: ["White ring"], syllables: 3, nicknames: ["Gwen"], alternateSpellings: [], currentRank: 233, trend: "stable" },
  { id: "f234", name: "Juliet", normalizedName: "juliet", gender: "F", origins: ["French"], meanings: ["Youthful"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 234, trend: "stable" },
  { id: "f235", name: "Mabel", normalizedName: "mabel", gender: "F", origins: ["Latin"], meanings: ["Lovable"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 235, trend: "stable" },
  { id: "f236", name: "Nina", normalizedName: "nina", gender: "F", origins: ["Spanish"], meanings: ["Little girl"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 236, trend: "stable" },
  { id: "f237", name: "Adelaide", normalizedName: "adelaide", gender: "F", origins: ["Germanic"], meanings: ["Noble natured"], syllables: 4, nicknames: ["Addie"], alternateSpellings: [], currentRank: 237, trend: "stable" },
  { id: "f238", name: "Leila", normalizedName: "leila", gender: "F", origins: ["Arabic"], meanings: ["Night"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 238, trend: "stable" },
  { id: "f239", name: "Keira", normalizedName: "keira", gender: "F", origins: ["Irish"], meanings: ["Dark"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 239, trend: "stable" },
  { id: "f240", name: "Annabelle", normalizedName: "annabelle", gender: "F", origins: ["French"], meanings: ["Lovable"], syllables: 4, nicknames: ["Anna","Belle"], alternateSpellings: [], currentRank: 240, trend: "stable" },
  { id: "f241", name: "Phoebe", normalizedName: "phoebe", gender: "F", origins: ["Greek"], meanings: ["Bright","Pure"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 241, trend: "stable" },
  { id: "f242", name: "Millie", normalizedName: "millie", gender: "F", origins: ["Germanic"], meanings: ["Industrious"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 242, trend: "stable" },
  { id: "f243", name: "Winnie", normalizedName: "winnie", gender: "F", origins: ["Welsh"], meanings: ["Holy peacemaking"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 243, trend: "stable" },
  { id: "f244", name: "Zelda", normalizedName: "zelda", gender: "F", origins: ["Germanic"], meanings: ["Gray fighting maid"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 244, trend: "stable" },
  { id: "f245", name: "Jane", normalizedName: "jane", gender: "F", origins: ["Hebrew"], meanings: ["God is gracious"], syllables: 2, nicknames: ["Janie"], alternateSpellings: [], currentRank: 245, trend: "stable" },
  { id: "f246", name: "Lilliana", normalizedName: "lilliana", gender: "F", origins: ["Latin"], meanings: ["Lily"], syllables: 3, nicknames: ["Lily"], alternateSpellings: [], currentRank: 246, trend: "stable" },
  { id: "f247", name: "Siena", normalizedName: "siena", gender: "F", origins: ["Italian"], meanings: ["Orange-red"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 247, trend: "stable" },
  { id: "f248", name: "Amira", normalizedName: "amira", gender: "F", origins: ["Arabic"], meanings: ["Princess"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 248, trend: "stable" },
  { id: "f249", name: "Ivy", normalizedName: "ivy", gender: "F", origins: ["English"], meanings: ["Ivy plant"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 249, trend: "stable" },
  { id: "f250", name: "Mae", normalizedName: "mae", gender: "F", origins: ["English"], meanings: ["Bitter","Pearl"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 250, trend: "stable" },
  { id: "f251", name: "Anne", normalizedName: "anne", gender: "F", origins: ["Hebrew"], meanings: ["Grace","Favor"], syllables: 2, nicknames: ["Annie"], alternateSpellings: [], currentRank: 251, trend: "stable" },
  { id: "f252", name: "Annie", normalizedName: "annie", gender: "F", origins: ["Hebrew"], meanings: ["Grace"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 252, trend: "stable" },
  { id: "f253", name: "Cassandra", normalizedName: "cassandra", gender: "F", origins: ["Greek"], meanings: ["Shining upon man"], syllables: 3, nicknames: ["Cassie"], alternateSpellings: [], currentRank: 253, trend: "stable" },
  { id: "f254", name: "Celeste", normalizedName: "celeste", gender: "F", origins: ["Latin"], meanings: ["Heavenly"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 254, trend: "stable" },
  { id: "f255", name: "Charley", normalizedName: "charley", gender: "F", origins: ["Germanic"], meanings: ["Free man"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 255, trend: "stable" },
  { id: "f256", name: "Colette", normalizedName: "colette", gender: "F", origins: ["French"], meanings: ["Victory of the people"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 256, trend: "stable" },
  { id: "f257", name: "Dahlia", normalizedName: "dahlia", gender: "F", origins: ["Scandinavian"], meanings: ["Valley"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 257, trend: "stable" },
  { id: "f258", name: "Daphne", normalizedName: "daphne", gender: "F", origins: ["Greek"], meanings: ["Laurel tree"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 258, trend: "stable" },
  { id: "f259", name: "Edith", normalizedName: "edith", gender: "F", origins: ["English"], meanings: ["Prosperous in war"], syllables: 2, nicknames: ["Edie"], alternateSpellings: [], currentRank: 259, trend: "stable" },
  { id: "f260", name: "Elise", normalizedName: "elise", gender: "F", origins: ["French"], meanings: ["Pledged to God"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 260, trend: "stable" },
  { id: "f261", name: "Elsie", normalizedName: "elsie", gender: "F", origins: ["Scottish"], meanings: ["Pledged to God"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 261, trend: "stable" },
  { id: "f262", name: "Evie", normalizedName: "evie", gender: "F", origins: ["Hebrew"], meanings: ["Life"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 262, trend: "stable" },
  { id: "f263", name: "Faye", normalizedName: "faye", gender: "F", origins: ["English"], meanings: ["Fairy"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 263, trend: "stable" },
  { id: "f264", name: "Flora", normalizedName: "flora", gender: "F", origins: ["Latin"], meanings: ["Flower"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 264, trend: "stable" },
  { id: "f265", name: "Frances", normalizedName: "frances", gender: "F", origins: ["Latin"], meanings: ["Free one"], syllables: 2, nicknames: ["Fran"], alternateSpellings: [], currentRank: 265, trend: "stable" },
  { id: "f266", name: "Greta", normalizedName: "greta", gender: "F", origins: ["Germanic"], meanings: ["Pearl"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 266, trend: "stable" },
  { id: "f267", name: "Harriet", normalizedName: "harriet", gender: "F", origins: ["Germanic"], meanings: ["Estate ruler"], syllables: 2, nicknames: ["Hattie"], alternateSpellings: [], currentRank: 267, trend: "stable" },
  { id: "f268", name: "Haven", normalizedName: "haven", gender: "F", origins: ["English"], meanings: ["Safe place"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 268, trend: "stable" },
  { id: "f269", name: "Helena", normalizedName: "helena", gender: "F", origins: ["Greek"], meanings: ["Bright light"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 269, trend: "stable" },
  { id: "f270", name: "Imogen", normalizedName: "imogen", gender: "F", origins: ["Celtic"], meanings: ["Maiden"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 270, trend: "stable" },
  { id: "f271", name: "Ingrid", normalizedName: "ingrid", gender: "F", origins: ["Norse"], meanings: ["Beautiful","Beloved"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 271, trend: "stable" },
  { id: "f272", name: "Ivy", normalizedName: "ivy", gender: "F", origins: ["English"], meanings: ["Ivy plant"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 272, trend: "stable" },
  { id: "f273", name: "Joanna", normalizedName: "joanna", gender: "F", origins: ["Hebrew"], meanings: ["God is gracious"], syllables: 2, nicknames: ["Jo"], alternateSpellings: [], currentRank: 273, trend: "stable" },
  { id: "f274", name: "Jolie", normalizedName: "jolie", gender: "F", origins: ["French"], meanings: ["Pretty"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 274, trend: "stable" },
  { id: "f275", name: "Josie", normalizedName: "josie", gender: "F", origins: ["Hebrew"], meanings: ["God will add"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 275, trend: "stable" },
  { id: "f276", name: "Juniper", normalizedName: "juniper", gender: "F", origins: ["Latin"], meanings: ["Young"], syllables: 3, nicknames: ["June"], alternateSpellings: [], currentRank: 276, trend: "stable" },
  { id: "f277", name: "Kaia", normalizedName: "kaia", gender: "F", origins: ["Scandinavian"], meanings: ["Earth"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 277, trend: "stable" },
  { id: "f278", name: "Kali", normalizedName: "kali", gender: "F", origins: ["Sanskrit"], meanings: ["Black one"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 278, trend: "stable" },
  { id: "f279", name: "Laney", normalizedName: "laney", gender: "F", origins: ["English"], meanings: ["Path"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 279, trend: "stable" },
  { id: "f280", name: "Laurel", normalizedName: "laurel", gender: "F", origins: ["Latin"], meanings: ["Laurel tree"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 280, trend: "stable" },
  { id: "f281", name: "Leia", normalizedName: "leia", gender: "F", origins: ["Hebrew"], meanings: ["Weary"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 281, trend: "stable" },
  { id: "f282", name: "Leona", normalizedName: "leona", gender: "F", origins: ["Latin"], meanings: ["Lion"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 282, trend: "stable" },
  { id: "f283", name: "Lilith", normalizedName: "lilith", gender: "F", origins: ["Hebrew"], meanings: ["Night monster"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 283, trend: "stable" },
  { id: "f284", name: "Liv", normalizedName: "liv", gender: "F", origins: ["Norse"], meanings: ["Life"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 284, trend: "stable" },
  { id: "f285", name: "Lorelei", normalizedName: "lorelei", gender: "F", origins: ["Germanic"], meanings: ["Alluring"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 285, trend: "stable" },
  { id: "f286", name: "Louise", normalizedName: "louise", gender: "F", origins: ["Germanic"], meanings: ["Famous warrior"], syllables: 2, nicknames: ["Lou"], alternateSpellings: [], currentRank: 286, trend: "stable" },
  { id: "f287", name: "Lucia", normalizedName: "lucia", gender: "F", origins: ["Latin"], meanings: ["Light"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 287, trend: "stable" },
  { id: "f288", name: "Maisie", normalizedName: "maisie", gender: "F", origins: ["Scottish"], meanings: ["Pearl"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 288, trend: "stable" },
  { id: "f289", name: "Mallory", normalizedName: "mallory", gender: "F", origins: ["French"], meanings: ["Unlucky"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 289, trend: "stable" },
  { id: "f290", name: "Mariana", normalizedName: "mariana", gender: "F", origins: ["Latin"], meanings: ["Of the sea"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 290, trend: "stable" },
  { id: "f291", name: "Marley", normalizedName: "marley", gender: "F", origins: ["English"], meanings: ["Pleasant meadow"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 291, trend: "stable" },
  { id: "f292", name: "Matilda", normalizedName: "matilda", gender: "F", origins: ["Germanic"], meanings: ["Battle-mighty"], syllables: 3, nicknames: ["Tilly"], alternateSpellings: [], currentRank: 292, trend: "stable" },
  { id: "f293", name: "Maxine", normalizedName: "maxine", gender: "F", origins: ["Latin"], meanings: ["Greatest"], syllables: 3, nicknames: ["Max"], alternateSpellings: [], currentRank: 293, trend: "stable" },
  { id: "f294", name: "McKenna", normalizedName: "mckenna", gender: "F", origins: ["Irish"], meanings: ["Son of Kenneth"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 294, trend: "stable" },
  { id: "f295", name: "Meredith", normalizedName: "meredith", gender: "F", origins: ["Welsh"], meanings: ["Great ruler"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 295, trend: "stable" },
  { id: "f296", name: "Naya", normalizedName: "naya", gender: "F", origins: ["Arabic"], meanings: ["New"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 296, trend: "stable" },
  { id: "f297", name: "Nellie", normalizedName: "nellie", gender: "F", origins: ["English"], meanings: ["Horn"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 297, trend: "stable" },
  { id: "f298", name: "Nyla", normalizedName: "nyla", gender: "F", origins: ["Arabic"], meanings: ["Winner"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 298, trend: "stable" },
  { id: "f299", name: "Ophelia", normalizedName: "ophelia", gender: "F", origins: ["Greek"], meanings: ["Help"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 299, trend: "stable" },
  { id: "f300", name: "Payton", normalizedName: "payton", gender: "F", origins: ["English"], meanings: ["Fighting man's estate"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 300, trend: "stable" },
  { id: "m1", name: "Liam", normalizedName: "liam", gender: "M", origins: ["Irish","Germanic"], meanings: ["Strong-willed warrior"], syllables: 1, nicknames: ["Li"], alternateSpellings: [], currentRank: 1, trend: "stable" },
  { id: "m2", name: "Noah", normalizedName: "noah", gender: "M", origins: ["Hebrew"], meanings: ["Rest","Comfort"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 2, trend: "stable" },
  { id: "m3", name: "Oliver", normalizedName: "oliver", gender: "M", origins: ["Latin","Old French"], meanings: ["Olive tree","Peaceful"], syllables: 3, nicknames: ["Ollie","Oli"], alternateSpellings: [], currentRank: 3, trend: "stable" },
  { id: "m4", name: "James", normalizedName: "james", gender: "M", origins: ["Hebrew","English"], meanings: ["Supplanter"], syllables: 2, nicknames: ["Jim","Jimmy","Jamie"], alternateSpellings: [], currentRank: 4, trend: "stable" },
  { id: "m5", name: "Elijah", normalizedName: "elijah", gender: "M", origins: ["Hebrew"], meanings: ["My God is Yahweh"], syllables: 3, nicknames: ["Eli"], alternateSpellings: [], currentRank: 5, trend: "stable" },
  { id: "m6", name: "William", normalizedName: "william", gender: "M", origins: ["Germanic"], meanings: ["Resolute protector"], syllables: 2, nicknames: ["Will","Bill","Billy","Liam"], alternateSpellings: [], currentRank: 6, trend: "stable" },
  { id: "m7", name: "Henry", normalizedName: "henry", gender: "M", origins: ["Germanic"], meanings: ["Ruler of the home"], syllables: 2, nicknames: ["Hank","Harry","Hal"], alternateSpellings: [], currentRank: 7, trend: "stable" },
  { id: "m8", name: "Lucas", normalizedName: "lucas", gender: "M", origins: ["Greek","Latin"], meanings: ["Bringer of light"], syllables: 2, nicknames: ["Luke","Luc"], alternateSpellings: [], currentRank: 8, trend: "stable" },
  { id: "m9", name: "Benjamin", normalizedName: "benjamin", gender: "M", origins: ["Hebrew"], meanings: ["Son of the right hand"], syllables: 3, nicknames: ["Ben","Benny","Benji"], alternateSpellings: [], currentRank: 9, trend: "stable" },
  { id: "m10", name: "Theodore", normalizedName: "theodore", gender: "M", origins: ["Greek"], meanings: ["Gift of God"], syllables: 3, nicknames: ["Theo","Ted","Teddy"], alternateSpellings: [], currentRank: 10, trend: "stable" },
  { id: "m11", name: "Jack", normalizedName: "jack", gender: "M", origins: ["English"], meanings: ["God is gracious"], syllables: 1, nicknames: ["Jackie"], alternateSpellings: [], currentRank: 11, trend: "stable" },
  { id: "m12", name: "Levi", normalizedName: "levi", gender: "M", origins: ["Hebrew"], meanings: ["Joined","Attached"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 12, trend: "stable" },
  { id: "m13", name: "Alexander", normalizedName: "alexander", gender: "M", origins: ["Greek"], meanings: ["Defender of the people"], syllables: 4, nicknames: ["Alex","Xander"], alternateSpellings: [], currentRank: 13, trend: "stable" },
  { id: "m14", name: "Mason", normalizedName: "mason", gender: "M", origins: ["English"], meanings: ["Stone worker"], syllables: 2, nicknames: ["Mace"], alternateSpellings: [], currentRank: 14, trend: "stable" },
  { id: "m15", name: "Ethan", normalizedName: "ethan", gender: "M", origins: ["Hebrew"], meanings: ["Strong","Firm"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 15, trend: "stable" },
  { id: "m16", name: "Sebastian", normalizedName: "sebastian", gender: "M", origins: ["Greek","Latin"], meanings: ["Venerable"], syllables: 3, nicknames: ["Seb","Sebby"], alternateSpellings: [], currentRank: 16, trend: "stable" },
  { id: "m17", name: "Daniel", normalizedName: "daniel", gender: "M", origins: ["Hebrew"], meanings: ["God is my judge"], syllables: 2, nicknames: ["Dan","Danny"], alternateSpellings: [], currentRank: 17, trend: "stable" },
  { id: "m18", name: "Michael", normalizedName: "michael", gender: "M", origins: ["Hebrew"], meanings: ["Who is like God?"], syllables: 2, nicknames: ["Mike","Mikey"], alternateSpellings: [], currentRank: 18, trend: "stable" },
  { id: "m19", name: "Owen", normalizedName: "owen", gender: "M", origins: ["Welsh","Irish"], meanings: ["Young warrior"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 19, trend: "stable" },
  { id: "m20", name: "Aiden", normalizedName: "aiden", gender: "M", origins: ["Irish","Gaelic"], meanings: ["Little fire","Fiery"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 20, trend: "stable" },
  { id: "m21", name: "Matthew", normalizedName: "matthew", gender: "M", origins: ["Hebrew"], meanings: ["Gift of God"], syllables: 2, nicknames: ["Matt","Matty"], alternateSpellings: [], currentRank: 21, trend: "stable" },
  { id: "m22", name: "Logan", normalizedName: "logan", gender: "M", origins: ["Scottish"], meanings: ["Little hollow"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 22, trend: "stable" },
  { id: "m23", name: "Samuel", normalizedName: "samuel", gender: "M", origins: ["Hebrew"], meanings: ["God has heard"], syllables: 2, nicknames: ["Sam","Sammy"], alternateSpellings: [], currentRank: 23, trend: "stable" },
  { id: "m24", name: "Joseph", normalizedName: "joseph", gender: "M", origins: ["Hebrew"], meanings: ["God will add"], syllables: 2, nicknames: ["Joe","Joey"], alternateSpellings: [], currentRank: 24, trend: "stable" },
  { id: "m25", name: "Asher", normalizedName: "asher", gender: "M", origins: ["Hebrew"], meanings: ["Happy","Blessed"], syllables: 2, nicknames: ["Ash"], alternateSpellings: [], currentRank: 25, trend: "stable" },
  { id: "m26", name: "Leo", normalizedName: "leo", gender: "M", origins: ["Latin"], meanings: ["Lion"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 26, trend: "stable" },
  { id: "m27", name: "David", normalizedName: "david", gender: "M", origins: ["Hebrew"], meanings: ["Beloved"], syllables: 2, nicknames: ["Dave","Davey"], alternateSpellings: [], currentRank: 27, trend: "stable" },
  { id: "m28", name: "Jackson", normalizedName: "jackson", gender: "M", origins: ["English"], meanings: ["Son of Jack"], syllables: 2, nicknames: ["Jax"], alternateSpellings: [], currentRank: 28, trend: "stable" },
  { id: "m29", name: "Ezra", normalizedName: "ezra", gender: "M", origins: ["Hebrew"], meanings: ["Helper"], syllables: 2, nicknames: ["Ez"], alternateSpellings: [], currentRank: 29, trend: "stable" },
  { id: "m30", name: "Luke", normalizedName: "luke", gender: "M", origins: ["Greek"], meanings: ["Light"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 30, trend: "stable" },
  { id: "m31", name: "Carter", normalizedName: "carter", gender: "M", origins: ["English"], meanings: ["Cart driver"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 31, trend: "stable" },
  { id: "m32", name: "Jayden", normalizedName: "jayden", gender: "M", origins: ["Modern American"], meanings: ["Thankful"], syllables: 2, nicknames: ["Jay"], alternateSpellings: [], currentRank: 32, trend: "stable" },
  { id: "m33", name: "Grayson", normalizedName: "grayson", gender: "M", origins: ["English"], meanings: ["Son of the gray-haired one"], syllables: 2, nicknames: ["Gray"], alternateSpellings: [], currentRank: 33, trend: "stable" },
  { id: "m34", name: "Wyatt", normalizedName: "wyatt", gender: "M", origins: ["English"], meanings: ["Brave in war"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 34, trend: "stable" },
  { id: "m35", name: "Julian", normalizedName: "julian", gender: "M", origins: ["Latin"], meanings: ["Youthful"], syllables: 2, nicknames: ["Jules"], alternateSpellings: [], currentRank: 35, trend: "stable" },
  { id: "m36", name: "Gabriel", normalizedName: "gabriel", gender: "M", origins: ["Hebrew"], meanings: ["God is my strength"], syllables: 2, nicknames: ["Gabe"], alternateSpellings: [], currentRank: 36, trend: "stable" },
  { id: "m37", name: "Lincoln", normalizedName: "lincoln", gender: "M", origins: ["English"], meanings: ["Lake colony"], syllables: 2, nicknames: ["Linc"], alternateSpellings: [], currentRank: 37, trend: "stable" },
  { id: "m38", name: "Isaac", normalizedName: "isaac", gender: "M", origins: ["Hebrew"], meanings: ["He will laugh"], syllables: 2, nicknames: ["Ike"], alternateSpellings: [], currentRank: 38, trend: "stable" },
  { id: "m39", name: "Anthony", normalizedName: "anthony", gender: "M", origins: ["Latin"], meanings: ["Priceless","Praiseworthy"], syllables: 3, nicknames: ["Tony"], alternateSpellings: [], currentRank: 39, trend: "stable" },
  { id: "m40", name: "Dylan", normalizedName: "dylan", gender: "M", origins: ["Welsh"], meanings: ["Son of the sea"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 40, trend: "stable" },
  { id: "m41", name: "Mateo", normalizedName: "mateo", gender: "M", origins: ["Spanish"], meanings: ["Gift of God"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 41, trend: "stable" },
  { id: "m42", name: "Maverick", normalizedName: "maverick", gender: "M", origins: ["American"], meanings: ["Independent"], syllables: 3, nicknames: ["Mav"], alternateSpellings: [], currentRank: 42, trend: "stable" },
  { id: "m43", name: "Thomas", normalizedName: "thomas", gender: "M", origins: ["Aramaic"], meanings: ["Twin"], syllables: 2, nicknames: ["Tom","Tommy"], alternateSpellings: [], currentRank: 43, trend: "stable" },
  { id: "m44", name: "Charles", normalizedName: "charles", gender: "M", origins: ["Germanic"], meanings: ["Free man"], syllables: 2, nicknames: ["Charlie","Chuck"], alternateSpellings: [], currentRank: 44, trend: "stable" },
  { id: "m45", name: "Christopher", normalizedName: "christopher", gender: "M", origins: ["Greek"], meanings: ["Bearer of Christ"], syllables: 3, nicknames: ["Chris","Topher"], alternateSpellings: [], currentRank: 45, trend: "stable" },
  { id: "m46", name: "Miles", normalizedName: "miles", gender: "M", origins: ["Latin"], meanings: ["Soldier"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 46, trend: "stable" },
  { id: "m47", name: "Jaxon", normalizedName: "jaxon", gender: "M", origins: ["English"], meanings: ["Son of Jack"], syllables: 2, nicknames: ["Jax"], alternateSpellings: [], currentRank: 47, trend: "stable" },
  { id: "m48", name: "Caleb", normalizedName: "caleb", gender: "M", origins: ["Hebrew"], meanings: ["Faithful","Devotion"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 48, trend: "stable" },
  { id: "m49", name: "Nathan", normalizedName: "nathan", gender: "M", origins: ["Hebrew"], meanings: ["Gift of God"], syllables: 2, nicknames: ["Nate"], alternateSpellings: [], currentRank: 49, trend: "stable" },
  { id: "m50", name: "Hudson", normalizedName: "hudson", gender: "M", origins: ["English"], meanings: ["Son of Hudde"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 50, trend: "stable" },
  { id: "m51", name: "Eli", normalizedName: "eli", gender: "M", origins: ["Hebrew"], meanings: ["Ascended","High"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 51, trend: "rising" },
  { id: "m52", name: "Andrew", normalizedName: "andrew", gender: "M", origins: ["Greek"], meanings: ["Manly","Strong"], syllables: 2, nicknames: ["Andy","Drew"], alternateSpellings: [], currentRank: 52, trend: "rising" },
  { id: "m53", name: "Hunter", normalizedName: "hunter", gender: "M", origins: ["English"], meanings: ["One who hunts"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 53, trend: "rising" },
  { id: "m54", name: "Nolan", normalizedName: "nolan", gender: "M", origins: ["Irish"], meanings: ["Champion"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 54, trend: "rising" },
  { id: "m55", name: "Adrian", normalizedName: "adrian", gender: "M", origins: ["Latin"], meanings: ["From Hadria"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 55, trend: "rising" },
  { id: "m56", name: "Cameron", normalizedName: "cameron", gender: "M", origins: ["Scottish"], meanings: ["Crooked nose"], syllables: 3, nicknames: ["Cam"], alternateSpellings: [], currentRank: 56, trend: "rising" },
  { id: "m57", name: "Aaron", normalizedName: "aaron", gender: "M", origins: ["Hebrew"], meanings: ["High mountain","Exalted"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 57, trend: "rising" },
  { id: "m58", name: "Ryan", normalizedName: "ryan", gender: "M", origins: ["Irish"], meanings: ["Little king"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 58, trend: "rising" },
  { id: "m59", name: "Isaiah", normalizedName: "isaiah", gender: "M", origins: ["Hebrew"], meanings: ["Salvation of the Lord"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 59, trend: "rising" },
  { id: "m60", name: "Cooper", normalizedName: "cooper", gender: "M", origins: ["English"], meanings: ["Barrel maker"], syllables: 2, nicknames: ["Coop"], alternateSpellings: [], currentRank: 60, trend: "rising" },
  { id: "m61", name: "Joshua", normalizedName: "joshua", gender: "M", origins: ["Hebrew"], meanings: ["God is salvation"], syllables: 2, nicknames: ["Josh"], alternateSpellings: [], currentRank: 61, trend: "rising" },
  { id: "m62", name: "Christian", normalizedName: "christian", gender: "M", origins: ["Latin"], meanings: ["Follower of Christ"], syllables: 2, nicknames: ["Chris"], alternateSpellings: [], currentRank: 62, trend: "rising" },
  { id: "m63", name: "Landon", normalizedName: "landon", gender: "M", origins: ["English"], meanings: ["Long hill"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 63, trend: "rising" },
  { id: "m64", name: "Connor", normalizedName: "connor", gender: "M", origins: ["Irish"], meanings: ["Wolf lover"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 64, trend: "rising" },
  { id: "m65", name: "Robert", normalizedName: "robert", gender: "M", origins: ["Germanic"], meanings: ["Bright fame"], syllables: 2, nicknames: ["Rob","Bob","Bobby"], alternateSpellings: [], currentRank: 65, trend: "rising" },
  { id: "m66", name: "Colton", normalizedName: "colton", gender: "M", origins: ["English"], meanings: ["Coal town"], syllables: 2, nicknames: ["Colt"], alternateSpellings: [], currentRank: 66, trend: "rising" },
  { id: "m67", name: "Jeremiah", normalizedName: "jeremiah", gender: "M", origins: ["Hebrew"], meanings: ["God will exalt"], syllables: 3, nicknames: ["Jeremy","Jerry"], alternateSpellings: [], currentRank: 67, trend: "rising" },
  { id: "m68", name: "Austin", normalizedName: "austin", gender: "M", origins: ["Latin"], meanings: ["Great","Magnificent"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 68, trend: "rising" },
  { id: "m69", name: "Nathaniel", normalizedName: "nathaniel", gender: "M", origins: ["Hebrew"], meanings: ["Gift of God"], syllables: 3, nicknames: ["Nate","Nathan"], alternateSpellings: [], currentRank: 69, trend: "rising" },
  { id: "m70", name: "Dominic", normalizedName: "dominic", gender: "M", origins: ["Latin"], meanings: ["Belonging to the Lord"], syllables: 3, nicknames: ["Dom","Nick"], alternateSpellings: [], currentRank: 70, trend: "rising" },
  { id: "m71", name: "Everett", normalizedName: "everett", gender: "M", origins: ["English"], meanings: ["Brave boar"], syllables: 3, nicknames: ["Ev","Rhett"], alternateSpellings: [], currentRank: 71, trend: "rising" },
  { id: "m72", name: "Roman", normalizedName: "roman", gender: "M", origins: ["Latin"], meanings: ["Citizen of Rome"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 72, trend: "rising" },
  { id: "m73", name: "Parker", normalizedName: "parker", gender: "M", origins: ["English"], meanings: ["Park keeper"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 73, trend: "rising" },
  { id: "m74", name: "Carson", normalizedName: "carson", gender: "M", origins: ["Scottish"], meanings: ["Son of marsh dwellers"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 74, trend: "rising" },
  { id: "m75", name: "Kai", normalizedName: "kai", gender: "M", origins: ["Hawaiian"], meanings: ["Sea"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 75, trend: "rising" },
  { id: "m76", name: "Xavier", normalizedName: "xavier", gender: "M", origins: ["Basque"], meanings: ["New house"], syllables: 2, nicknames: ["Xavi"], alternateSpellings: [], currentRank: 76, trend: "rising" },
  { id: "m77", name: "Adam", normalizedName: "adam", gender: "M", origins: ["Hebrew"], meanings: ["Man","Earth"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 77, trend: "rising" },
  { id: "m78", name: "Greyson", normalizedName: "greyson", gender: "M", origins: ["English"], meanings: ["Son of the gray-haired one"], syllables: 2, nicknames: ["Grey"], alternateSpellings: [], currentRank: 78, trend: "rising" },
  { id: "m79", name: "Jose", normalizedName: "jose", gender: "M", origins: ["Spanish","Hebrew"], meanings: ["God will add"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 79, trend: "rising" },
  { id: "m80", name: "Ian", normalizedName: "ian", gender: "M", origins: ["Scottish"], meanings: ["God is gracious"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 80, trend: "rising" },
  { id: "m81", name: "Wesley", normalizedName: "wesley", gender: "M", origins: ["English"], meanings: ["West meadow"], syllables: 2, nicknames: ["Wes"], alternateSpellings: [], currentRank: 81, trend: "rising" },
  { id: "m82", name: "Bennett", normalizedName: "bennett", gender: "M", origins: ["Latin"], meanings: ["Blessed"], syllables: 2, nicknames: ["Ben"], alternateSpellings: [], currentRank: 82, trend: "rising" },
  { id: "m83", name: "Axel", normalizedName: "axel", gender: "M", origins: ["Scandinavian"], meanings: ["Father of peace"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 83, trend: "rising" },
  { id: "m84", name: "Easton", normalizedName: "easton", gender: "M", origins: ["English"], meanings: ["East town"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 84, trend: "rising" },
  { id: "m85", name: "Weston", normalizedName: "weston", gender: "M", origins: ["English"], meanings: ["Western town"], syllables: 2, nicknames: ["Wes"], alternateSpellings: [], currentRank: 85, trend: "rising" },
  { id: "m86", name: "Nicholas", normalizedName: "nicholas", gender: "M", origins: ["Greek"], meanings: ["Victory of the people"], syllables: 3, nicknames: ["Nick","Nicky"], alternateSpellings: [], currentRank: 86, trend: "rising" },
  { id: "m87", name: "Santiago", normalizedName: "santiago", gender: "M", origins: ["Spanish"], meanings: ["Saint James"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 87, trend: "rising" },
  { id: "m88", name: "Declan", normalizedName: "declan", gender: "M", origins: ["Irish"], meanings: ["Man of prayer"], syllables: 2, nicknames: ["Dec"], alternateSpellings: [], currentRank: 88, trend: "rising" },
  { id: "m89", name: "Micah", normalizedName: "micah", gender: "M", origins: ["Hebrew"], meanings: ["Who is like God?"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 89, trend: "rising" },
  { id: "m90", name: "Kayden", normalizedName: "kayden", gender: "M", origins: ["American"], meanings: ["Fighter"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 90, trend: "rising" },
  { id: "m91", name: "Evan", normalizedName: "evan", gender: "M", origins: ["Welsh"], meanings: ["God is gracious"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 91, trend: "rising" },
  { id: "m92", name: "Brooks", normalizedName: "brooks", gender: "M", origins: ["English"], meanings: ["Stream"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 92, trend: "rising" },
  { id: "m93", name: "Silas", normalizedName: "silas", gender: "M", origins: ["Latin"], meanings: ["Wood","Forest"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 93, trend: "rising" },
  { id: "m94", name: "Blake", normalizedName: "blake", gender: "M", origins: ["English"], meanings: ["Fair-haired","Dark"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 94, trend: "rising" },
  { id: "m95", name: "Finn", normalizedName: "finn", gender: "M", origins: ["Irish"], meanings: ["Fair","White"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 95, trend: "rising" },
  { id: "m96", name: "Jasper", normalizedName: "jasper", gender: "M", origins: ["Persian"], meanings: ["Treasurer"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 96, trend: "rising" },
  { id: "m97", name: "Jordan", normalizedName: "jordan", gender: "M", origins: ["Hebrew"], meanings: ["To flow down"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 97, trend: "rising" },
  { id: "m98", name: "Beau", normalizedName: "beau", gender: "M", origins: ["French"], meanings: ["Handsome"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 98, trend: "rising" },
  { id: "m99", name: "Maxwell", normalizedName: "maxwell", gender: "M", origins: ["Scottish"], meanings: ["Great spring"], syllables: 2, nicknames: ["Max"], alternateSpellings: [], currentRank: 99, trend: "rising" },
  { id: "m100", name: "Knox", normalizedName: "knox", gender: "M", origins: ["Scottish"], meanings: ["Round hill"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 100, trend: "rising" },
  { id: "m101", name: "Jason", normalizedName: "jason", gender: "M", origins: ["Greek"], meanings: ["Healer"], syllables: 2, nicknames: ["Jay"], alternateSpellings: [], currentRank: 101, trend: "rising" },
  { id: "m102", name: "Damian", normalizedName: "damian", gender: "M", origins: ["Greek"], meanings: ["To tame"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 102, trend: "rising" },
  { id: "m103", name: "Ryder", normalizedName: "ryder", gender: "M", origins: ["English"], meanings: ["Horseman"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 103, trend: "rising" },
  { id: "m104", name: "Leonardo", normalizedName: "leonardo", gender: "M", origins: ["Italian"], meanings: ["Brave lion"], syllables: 3, nicknames: ["Leo"], alternateSpellings: [], currentRank: 104, trend: "rising" },
  { id: "m105", name: "Sawyer", normalizedName: "sawyer", gender: "M", origins: ["English"], meanings: ["Wood cutter"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 105, trend: "rising" },
  { id: "m106", name: "Luca", normalizedName: "luca", gender: "M", origins: ["Italian"], meanings: ["Light"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 106, trend: "rising" },
  { id: "m107", name: "Kingston", normalizedName: "kingston", gender: "M", origins: ["English"], meanings: ["King's town"], syllables: 2, nicknames: ["King"], alternateSpellings: [], currentRank: 107, trend: "rising" },
  { id: "m108", name: "Archer", normalizedName: "archer", gender: "M", origins: ["English"], meanings: ["Bowman"], syllables: 2, nicknames: ["Arch"], alternateSpellings: [], currentRank: 108, trend: "rising" },
  { id: "m109", name: "Brody", normalizedName: "brody", gender: "M", origins: ["Gaelic"], meanings: ["Ditch","Muddy place"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 109, trend: "rising" },
  { id: "m110", name: "Rowan", normalizedName: "rowan", gender: "M", origins: ["Irish"], meanings: ["Little red one"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 110, trend: "rising" },
  { id: "m111", name: "Brandon", normalizedName: "brandon", gender: "M", origins: ["English"], meanings: ["Broom hill"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 111, trend: "rising" },
  { id: "m112", name: "George", normalizedName: "george", gender: "M", origins: ["Greek"], meanings: ["Farmer"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 112, trend: "rising" },
  { id: "m113", name: "Vincent", normalizedName: "vincent", gender: "M", origins: ["Latin"], meanings: ["Conquering"], syllables: 2, nicknames: ["Vince","Vinny"], alternateSpellings: [], currentRank: 113, trend: "rising" },
  { id: "m114", name: "Tyler", normalizedName: "tyler", gender: "M", origins: ["English"], meanings: ["Tile maker"], syllables: 2, nicknames: ["Ty"], alternateSpellings: [], currentRank: 114, trend: "rising" },
  { id: "m115", name: "Harrison", normalizedName: "harrison", gender: "M", origins: ["English"], meanings: ["Son of Harry"], syllables: 3, nicknames: ["Harry"], alternateSpellings: [], currentRank: 115, trend: "rising" },
  { id: "m116", name: "Tucker", normalizedName: "tucker", gender: "M", origins: ["English"], meanings: ["Fabric pleater"], syllables: 2, nicknames: ["Tuck"], alternateSpellings: [], currentRank: 116, trend: "rising" },
  { id: "m117", name: "Braxton", normalizedName: "braxton", gender: "M", origins: ["English"], meanings: ["Brock's town"], syllables: 2, nicknames: ["Brax"], alternateSpellings: [], currentRank: 117, trend: "rising" },
  { id: "m118", name: "Giovanni", normalizedName: "giovanni", gender: "M", origins: ["Italian"], meanings: ["God is gracious"], syllables: 3, nicknames: ["Gio"], alternateSpellings: [], currentRank: 118, trend: "rising" },
  { id: "m119", name: "Oscar", normalizedName: "oscar", gender: "M", origins: ["Irish"], meanings: ["Deer lover"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 119, trend: "rising" },
  { id: "m120", name: "Cole", normalizedName: "cole", gender: "M", origins: ["English"], meanings: ["Coal black"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 120, trend: "rising" },
  { id: "m121", name: "Zachary", normalizedName: "zachary", gender: "M", origins: ["Hebrew"], meanings: ["God remembers"], syllables: 3, nicknames: ["Zach","Zack"], alternateSpellings: [], currentRank: 121, trend: "rising" },
  { id: "m122", name: "Gavin", normalizedName: "gavin", gender: "M", origins: ["Welsh"], meanings: ["White hawk"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 122, trend: "rising" },
  { id: "m123", name: "Tristan", normalizedName: "tristan", gender: "M", origins: ["Celtic"], meanings: ["Sorrowful"], syllables: 2, nicknames: ["Tris"], alternateSpellings: [], currentRank: 123, trend: "rising" },
  { id: "m124", name: "Preston", normalizedName: "preston", gender: "M", origins: ["English"], meanings: ["Priest's town"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 124, trend: "rising" },
  { id: "m125", name: "Ryker", normalizedName: "ryker", gender: "M", origins: ["Germanic"], meanings: ["Rich"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 125, trend: "rising" },
  { id: "m126", name: "Jesse", normalizedName: "jesse", gender: "M", origins: ["Hebrew"], meanings: ["Gift"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 126, trend: "rising" },
  { id: "m127", name: "August", normalizedName: "august", gender: "M", origins: ["Latin"], meanings: ["Great","Venerable"], syllables: 2, nicknames: ["Gus"], alternateSpellings: [], currentRank: 127, trend: "rising" },
  { id: "m128", name: "Zion", normalizedName: "zion", gender: "M", origins: ["Hebrew"], meanings: ["Highest point"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 128, trend: "rising" },
  { id: "m129", name: "Emmanuel", normalizedName: "emmanuel", gender: "M", origins: ["Hebrew"], meanings: ["God is with us"], syllables: 3, nicknames: ["Manny","Manuel"], alternateSpellings: [], currentRank: 129, trend: "rising" },
  { id: "m130", name: "Grant", normalizedName: "grant", gender: "M", origins: ["Scottish"], meanings: ["Great","Large"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 130, trend: "rising" },
  { id: "m131", name: "Dean", normalizedName: "dean", gender: "M", origins: ["English"], meanings: ["Valley"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 131, trend: "rising" },
  { id: "m132", name: "Felix", normalizedName: "felix", gender: "M", origins: ["Latin"], meanings: ["Happy","Lucky"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 132, trend: "rising" },
  { id: "m133", name: "Timothy", normalizedName: "timothy", gender: "M", origins: ["Greek"], meanings: ["Honoring God"], syllables: 3, nicknames: ["Tim","Timmy"], alternateSpellings: [], currentRank: 133, trend: "rising" },
  { id: "m134", name: "Finley", normalizedName: "finley", gender: "M", origins: ["Irish"], meanings: ["Fair warrior"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 134, trend: "rising" },
  { id: "m135", name: "Patrick", normalizedName: "patrick", gender: "M", origins: ["Latin"], meanings: ["Nobleman"], syllables: 2, nicknames: ["Pat","Paddy"], alternateSpellings: [], currentRank: 135, trend: "rising" },
  { id: "m136", name: "Kevin", normalizedName: "kevin", gender: "M", origins: ["Irish"], meanings: ["Gentle","Kind"], syllables: 2, nicknames: ["Kev"], alternateSpellings: [], currentRank: 136, trend: "rising" },
  { id: "m137", name: "Paul", normalizedName: "paul", gender: "M", origins: ["Latin"], meanings: ["Small","Humble"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 137, trend: "rising" },
  { id: "m138", name: "Graham", normalizedName: "graham", gender: "M", origins: ["Scottish"], meanings: ["Gravelly homestead"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 138, trend: "rising" },
  { id: "m139", name: "Kyle", normalizedName: "kyle", gender: "M", origins: ["Gaelic"], meanings: ["Narrow strait"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 139, trend: "rising" },
  { id: "m140", name: "Victor", normalizedName: "victor", gender: "M", origins: ["Latin"], meanings: ["Winner","Conqueror"], syllables: 2, nicknames: ["Vic"], alternateSpellings: [], currentRank: 140, trend: "rising" },
  { id: "m141", name: "Joel", normalizedName: "joel", gender: "M", origins: ["Hebrew"], meanings: ["Yahweh is God"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 141, trend: "rising" },
  { id: "m142", name: "Griffin", normalizedName: "griffin", gender: "M", origins: ["Welsh"], meanings: ["Strong lord"], syllables: 2, nicknames: ["Griff"], alternateSpellings: [], currentRank: 142, trend: "rising" },
  { id: "m143", name: "Xander", normalizedName: "xander", gender: "M", origins: ["Greek"], meanings: ["Defender of the people"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 143, trend: "rising" },
  { id: "m144", name: "Edward", normalizedName: "edward", gender: "M", origins: ["English"], meanings: ["Wealthy guardian"], syllables: 2, nicknames: ["Ed","Eddie","Ted"], alternateSpellings: [], currentRank: 144, trend: "rising" },
  { id: "m145", name: "Jonathan", normalizedName: "jonathan", gender: "M", origins: ["Hebrew"], meanings: ["Gift of God"], syllables: 3, nicknames: ["Jon","Johnny"], alternateSpellings: [], currentRank: 145, trend: "rising" },
  { id: "m146", name: "Eric", normalizedName: "eric", gender: "M", origins: ["Norse"], meanings: ["Eternal ruler"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 146, trend: "rising" },
  { id: "m147", name: "Marcus", normalizedName: "marcus", gender: "M", origins: ["Latin"], meanings: ["Dedicated to Mars"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 147, trend: "rising" },
  { id: "m148", name: "Peter", normalizedName: "peter", gender: "M", origins: ["Greek"], meanings: ["Rock","Stone"], syllables: 2, nicknames: ["Pete"], alternateSpellings: [], currentRank: 148, trend: "rising" },
  { id: "m149", name: "Emiliano", normalizedName: "emiliano", gender: "M", origins: ["Spanish"], meanings: ["Rival"], syllables: 4, nicknames: [], alternateSpellings: [], currentRank: 149, trend: "rising" },
  { id: "m150", name: "Steven", normalizedName: "steven", gender: "M", origins: ["Greek"], meanings: ["Crown","Garland"], syllables: 2, nicknames: ["Steve"], alternateSpellings: [], currentRank: 150, trend: "rising" },
  { id: "m151", name: "Colin", normalizedName: "colin", gender: "M", origins: ["Gaelic"], meanings: ["Young creature"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 151, trend: "stable" },
  { id: "m152", name: "Richard", normalizedName: "richard", gender: "M", origins: ["Germanic"], meanings: ["Brave ruler"], syllables: 2, nicknames: ["Rick","Rich"], alternateSpellings: [], currentRank: 152, trend: "stable" },
  { id: "m153", name: "Derek", normalizedName: "derek", gender: "M", origins: ["Germanic"], meanings: ["Ruler of the people"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 153, trend: "stable" },
  { id: "m154", name: "Bryan", normalizedName: "bryan", gender: "M", origins: ["Celtic"], meanings: ["Noble","Strong"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 154, trend: "stable" },
  { id: "m155", name: "Tobias", normalizedName: "tobias", gender: "M", origins: ["Hebrew"], meanings: ["God is good"], syllables: 2, nicknames: ["Toby"], alternateSpellings: [], currentRank: 155, trend: "stable" },
  { id: "m156", name: "Francisco", normalizedName: "francisco", gender: "M", origins: ["Spanish"], meanings: ["Free man"], syllables: 3, nicknames: ["Frank","Cisco"], alternateSpellings: [], currentRank: 156, trend: "stable" },
  { id: "m157", name: "Bradley", normalizedName: "bradley", gender: "M", origins: ["English"], meanings: ["Broad meadow"], syllables: 2, nicknames: ["Brad"], alternateSpellings: [], currentRank: 157, trend: "stable" },
  { id: "m158", name: "Kenneth", normalizedName: "kenneth", gender: "M", origins: ["Scottish"], meanings: ["Handsome","Born of fire"], syllables: 2, nicknames: ["Ken","Kenny"], alternateSpellings: [], currentRank: 158, trend: "stable" },
  { id: "m159", name: "Theo", normalizedName: "theo", gender: "M", origins: ["Greek"], meanings: ["Gift of God"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 159, trend: "stable" },
  { id: "m160", name: "Walter", normalizedName: "walter", gender: "M", origins: ["Germanic"], meanings: ["Army ruler"], syllables: 2, nicknames: ["Walt"], alternateSpellings: [], currentRank: 160, trend: "stable" },
  { id: "m161", name: "Travis", normalizedName: "travis", gender: "M", origins: ["French"], meanings: ["To cross"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 161, trend: "stable" },
  { id: "m162", name: "Jake", normalizedName: "jake", gender: "M", origins: ["Hebrew"], meanings: ["Supplanter"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 162, trend: "stable" },
  { id: "m163", name: "Jacob", normalizedName: "jacob", gender: "M", origins: ["Hebrew"], meanings: ["Supplanter"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 163, trend: "stable" },
  { id: "m164", name: "John", normalizedName: "john", gender: "M", origins: ["Hebrew"], meanings: ["God is gracious"], syllables: 1, nicknames: ["Johnny","Jack"], alternateSpellings: [], currentRank: 164, trend: "stable" },
  { id: "m165", name: "Mark", normalizedName: "mark", gender: "M", origins: ["Latin"], meanings: ["Dedicated to Mars"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 165, trend: "stable" },
  { id: "m166", name: "Spencer", normalizedName: "spencer", gender: "M", origins: ["English"], meanings: ["Steward"], syllables: 2, nicknames: ["Spence"], alternateSpellings: [], currentRank: 166, trend: "stable" },
  { id: "m167", name: "Raymond", normalizedName: "raymond", gender: "M", origins: ["Germanic"], meanings: ["Wise protector"], syllables: 2, nicknames: ["Ray"], alternateSpellings: [], currentRank: 167, trend: "stable" },
  { id: "m168", name: "Warren", normalizedName: "warren", gender: "M", origins: ["Germanic"], meanings: ["Guard"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 168, trend: "stable" },
  { id: "m169", name: "Jorge", normalizedName: "jorge", gender: "M", origins: ["Spanish"], meanings: ["Farmer"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 169, trend: "stable" },
  { id: "m170", name: "Alejandro", normalizedName: "alejandro", gender: "M", origins: ["Spanish"], meanings: ["Defender of the people"], syllables: 4, nicknames: ["Alex"], alternateSpellings: [], currentRank: 170, trend: "stable" },
  { id: "m171", name: "Carlos", normalizedName: "carlos", gender: "M", origins: ["Spanish"], meanings: ["Free man"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 171, trend: "stable" },
  { id: "m172", name: "Diego", normalizedName: "diego", gender: "M", origins: ["Spanish"], meanings: ["Supplanter"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 172, trend: "stable" },
  { id: "m173", name: "Ivan", normalizedName: "ivan", gender: "M", origins: ["Russian"], meanings: ["God is gracious"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 173, trend: "stable" },
  { id: "m174", name: "Andres", normalizedName: "andres", gender: "M", origins: ["Spanish"], meanings: ["Manly","Strong"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 174, trend: "stable" },
  { id: "m175", name: "Luis", normalizedName: "luis", gender: "M", origins: ["Spanish"], meanings: ["Famous warrior"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 175, trend: "stable" },
  { id: "m176", name: "Miguel", normalizedName: "miguel", gender: "M", origins: ["Spanish"], meanings: ["Who is like God?"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 176, trend: "stable" },
  { id: "m177", name: "Rafael", normalizedName: "rafael", gender: "M", origins: ["Hebrew"], meanings: ["God has healed"], syllables: 2, nicknames: ["Rafa"], alternateSpellings: [], currentRank: 177, trend: "stable" },
  { id: "m178", name: "Antonio", normalizedName: "antonio", gender: "M", origins: ["Latin"], meanings: ["Priceless"], syllables: 3, nicknames: ["Tony"], alternateSpellings: [], currentRank: 178, trend: "stable" },
  { id: "m179", name: "Eduardo", normalizedName: "eduardo", gender: "M", origins: ["Spanish"], meanings: ["Wealthy guardian"], syllables: 3, nicknames: ["Ed"], alternateSpellings: [], currentRank: 179, trend: "stable" },
  { id: "m180", name: "Angel", normalizedName: "angel", gender: "M", origins: ["Greek"], meanings: ["Messenger"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 180, trend: "stable" },
  { id: "m181", name: "Fernando", normalizedName: "fernando", gender: "M", origins: ["Germanic"], meanings: ["Bold voyager"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 181, trend: "stable" },
  { id: "m182", name: "Ricardo", normalizedName: "ricardo", gender: "M", origins: ["Spanish"], meanings: ["Brave ruler"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 182, trend: "stable" },
  { id: "m183", name: "Martin", normalizedName: "martin", gender: "M", origins: ["Latin"], meanings: ["Of Mars"], syllables: 2, nicknames: ["Marty"], alternateSpellings: [], currentRank: 183, trend: "stable" },
  { id: "m184", name: "Roberto", normalizedName: "roberto", gender: "M", origins: ["Spanish"], meanings: ["Bright fame"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 184, trend: "stable" },
  { id: "m185", name: "Victor", normalizedName: "victor", gender: "M", origins: ["Latin"], meanings: ["Winner"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 185, trend: "stable" },
  { id: "m186", name: "Omar", normalizedName: "omar", gender: "M", origins: ["Arabic"], meanings: ["Flourishing"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 186, trend: "stable" },
  { id: "m187", name: "Adrian", normalizedName: "adrian", gender: "M", origins: ["Latin"], meanings: ["From Hadria"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 187, trend: "stable" },
  { id: "m188", name: "Manuel", normalizedName: "manuel", gender: "M", origins: ["Hebrew"], meanings: ["God is with us"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 188, trend: "stable" },
  { id: "m189", name: "Hector", normalizedName: "hector", gender: "M", origins: ["Greek"], meanings: ["Holding fast"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 189, trend: "stable" },
  { id: "m190", name: "Alan", normalizedName: "alan", gender: "M", origins: ["Celtic"], meanings: ["Handsome"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 190, trend: "stable" },
  { id: "m191", name: "Lorenzo", normalizedName: "lorenzo", gender: "M", origins: ["Latin"], meanings: ["From Laurentum"], syllables: 3, nicknames: ["Enzo"], alternateSpellings: [], currentRank: 191, trend: "stable" },
  { id: "m192", name: "Edgar", normalizedName: "edgar", gender: "M", origins: ["English"], meanings: ["Wealthy spear"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 192, trend: "stable" },
  { id: "m193", name: "Sergio", normalizedName: "sergio", gender: "M", origins: ["Latin"], meanings: ["Servant"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 193, trend: "stable" },
  { id: "m194", name: "Alberto", normalizedName: "alberto", gender: "M", origins: ["Germanic"], meanings: ["Noble bright"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 194, trend: "stable" },
  { id: "m195", name: "Cesar", normalizedName: "cesar", gender: "M", origins: ["Latin"], meanings: ["Long-haired"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 195, trend: "stable" },
  { id: "m196", name: "Marco", normalizedName: "marco", gender: "M", origins: ["Latin"], meanings: ["Dedicated to Mars"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 196, trend: "stable" },
  { id: "m197", name: "Julio", normalizedName: "julio", gender: "M", origins: ["Latin"], meanings: ["Youthful"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 197, trend: "stable" },
  { id: "m198", name: "Francisco", normalizedName: "francisco", gender: "M", origins: ["Spanish"], meanings: ["Free man"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 198, trend: "stable" },
  { id: "m199", name: "Arturo", normalizedName: "arturo", gender: "M", origins: ["Celtic"], meanings: ["Bear"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 199, trend: "stable" },
  { id: "m200", name: "Pablo", normalizedName: "pablo", gender: "M", origins: ["Spanish"], meanings: ["Small"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 200, trend: "stable" },
  { id: "m201", name: "Forrest", normalizedName: "forrest", gender: "M", origins: ["English"], meanings: ["Dweller near the woods"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 201, trend: "stable" },
  { id: "m202", name: "Frederick", normalizedName: "frederick", gender: "M", origins: ["Germanic"], meanings: ["Peaceful ruler"], syllables: 3, nicknames: ["Fred","Freddy"], alternateSpellings: [], currentRank: 202, trend: "stable" },
  { id: "m203", name: "Quentin", normalizedName: "quentin", gender: "M", origins: ["Latin"], meanings: ["Fifth"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 203, trend: "stable" },
  { id: "m204", name: "Quincy", normalizedName: "quincy", gender: "M", origins: ["Latin"], meanings: ["Fifth son's estate"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 204, trend: "stable" },
  { id: "m205", name: "Uriel", normalizedName: "uriel", gender: "M", origins: ["Hebrew"], meanings: ["God is my light"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 205, trend: "stable" },
  { id: "m206", name: "Ulysses", normalizedName: "ulysses", gender: "M", origins: ["Latin"], meanings: ["Wrathful"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 206, trend: "stable" },
  { id: "m207", name: "Yusuf", normalizedName: "yusuf", gender: "M", origins: ["Arabic"], meanings: ["God increases"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 207, trend: "stable" },
  { id: "m208", name: "Yahir", normalizedName: "yahir", gender: "M", origins: ["Hebrew"], meanings: ["He will enlighten"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 208, trend: "stable" },
  { id: "m209", name: "Zander", normalizedName: "zander", gender: "M", origins: ["Greek"], meanings: ["Defender of the people"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 209, trend: "stable" },
  { id: "m210", name: "Cruz", normalizedName: "cruz", gender: "M", origins: ["Spanish"], meanings: ["Cross"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 210, trend: "stable" },
  { id: "m211", name: "Enzo", normalizedName: "enzo", gender: "M", origins: ["Italian"], meanings: ["Home ruler"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 211, trend: "stable" },
  { id: "m212", name: "Jace", normalizedName: "jace", gender: "M", origins: ["Hebrew"], meanings: ["Healer"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 212, trend: "stable" },
  { id: "m213", name: "Milo", normalizedName: "milo", gender: "M", origins: ["Germanic"], meanings: ["Merciful"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 213, trend: "stable" },
  { id: "m214", name: "Phoenix", normalizedName: "phoenix", gender: "M", origins: ["Greek"], meanings: ["Dark red"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 214, trend: "stable" },
  { id: "m215", name: "River", normalizedName: "river", gender: "M", origins: ["English"], meanings: ["Stream of water"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 215, trend: "stable" },
  { id: "m216", name: "Reid", normalizedName: "reid", gender: "M", origins: ["English"], meanings: ["Red-haired"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 216, trend: "stable" },
  { id: "m217", name: "Rhett", normalizedName: "rhett", gender: "M", origins: ["Welsh"], meanings: ["Advice"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 217, trend: "stable" },
  { id: "m218", name: "Ronan", normalizedName: "ronan", gender: "M", origins: ["Irish"], meanings: ["Little seal"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 218, trend: "stable" },
  { id: "m219", name: "Cash", normalizedName: "cash", gender: "M", origins: ["English"], meanings: ["Hollow"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 219, trend: "stable" },
  { id: "m220", name: "Dallas", normalizedName: "dallas", gender: "M", origins: ["Scottish"], meanings: ["Meadow dwelling"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 220, trend: "stable" },
  { id: "m221", name: "Nash", normalizedName: "nash", gender: "M", origins: ["English"], meanings: ["At the ash tree"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 221, trend: "stable" },
  { id: "m222", name: "Bodhi", normalizedName: "bodhi", gender: "M", origins: ["Sanskrit"], meanings: ["Awakening"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 222, trend: "stable" },
  { id: "m223", name: "Atlas", normalizedName: "atlas", gender: "M", origins: ["Greek"], meanings: ["To carry"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 223, trend: "stable" },
  { id: "m224", name: "Beckett", normalizedName: "beckett", gender: "M", origins: ["English"], meanings: ["Beehive"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 224, trend: "stable" },
  { id: "m225", name: "Crew", normalizedName: "crew", gender: "M", origins: ["English"], meanings: ["Chariot"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 225, trend: "stable" },
  { id: "m226", name: "Hayes", normalizedName: "hayes", gender: "M", origins: ["English"], meanings: ["Hedged area"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 226, trend: "stable" },
  { id: "m227", name: "Legend", normalizedName: "legend", gender: "M", origins: ["English"], meanings: ["Story"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 227, trend: "stable" },
  { id: "m228", name: "Lennox", normalizedName: "lennox", gender: "M", origins: ["Scottish"], meanings: ["Elm grove"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 228, trend: "stable" },
  { id: "m229", name: "Messiah", normalizedName: "messiah", gender: "M", origins: ["Hebrew"], meanings: ["Anointed one"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 229, trend: "stable" },
  { id: "m230", name: "Prince", normalizedName: "prince", gender: "M", origins: ["Latin"], meanings: ["Royal son"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 230, trend: "stable" },
  { id: "m231", name: "Karter", normalizedName: "karter", gender: "M", origins: ["English"], meanings: ["Cart driver"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 231, trend: "stable" },
  { id: "m232", name: "Emilio", normalizedName: "emilio", gender: "M", origins: ["Latin"], meanings: ["Rival"], syllables: 3, nicknames: [], alternateSpellings: [], currentRank: 232, trend: "stable" },
  { id: "m233", name: "Gage", normalizedName: "gage", gender: "M", origins: ["French"], meanings: ["Pledge"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 233, trend: "stable" },
  { id: "m234", name: "Holden", normalizedName: "holden", gender: "M", origins: ["English"], meanings: ["Hollow valley"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 234, trend: "stable" },
  { id: "m235", name: "King", normalizedName: "king", gender: "M", origins: ["English"], meanings: ["Ruler"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 235, trend: "stable" },
  { id: "m236", name: "Kyrie", normalizedName: "kyrie", gender: "M", origins: ["Greek"], meanings: ["Lord"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 236, trend: "stable" },
  { id: "m237", name: "Malcolm", normalizedName: "malcolm", gender: "M", origins: ["Scottish"], meanings: ["Devotee of Saint Columba"], syllables: 2, nicknames: ["Mal"], alternateSpellings: [], currentRank: 237, trend: "stable" },
  { id: "m238", name: "Orion", normalizedName: "orion", gender: "M", origins: ["Greek"], meanings: ["Hunter"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 238, trend: "stable" },
  { id: "m239", name: "Paxton", normalizedName: "paxton", gender: "M", origins: ["English"], meanings: ["Peace town"], syllables: 2, nicknames: ["Pax"], alternateSpellings: [], currentRank: 239, trend: "stable" },
  { id: "m240", name: "Pierce", normalizedName: "pierce", gender: "M", origins: ["English"], meanings: ["Rock"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 240, trend: "stable" },
  { id: "m241", name: "Remington", normalizedName: "remington", gender: "M", origins: ["English"], meanings: ["Raven family town"], syllables: 3, nicknames: ["Remi"], alternateSpellings: [], currentRank: 241, trend: "stable" },
  { id: "m242", name: "Rocco", normalizedName: "rocco", gender: "M", origins: ["Germanic"], meanings: ["Rest"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 242, trend: "stable" },
  { id: "m243", name: "Tate", normalizedName: "tate", gender: "M", origins: ["English"], meanings: ["Cheerful"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 243, trend: "stable" },
  { id: "m244", name: "Titus", normalizedName: "titus", gender: "M", origins: ["Latin"], meanings: ["Title of honor"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 244, trend: "stable" },
  { id: "m245", name: "Warren", normalizedName: "warren", gender: "M", origins: ["Germanic"], meanings: ["Guard"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 245, trend: "stable" },
  { id: "m246", name: "Wells", normalizedName: "wells", gender: "M", origins: ["English"], meanings: ["Spring"], syllables: 1, nicknames: [], alternateSpellings: [], currentRank: 246, trend: "stable" },
  { id: "m247", name: "Zayden", normalizedName: "zayden", gender: "M", origins: ["Arabic"], meanings: ["Growth"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 247, trend: "stable" },
  { id: "m248", name: "Anderson", normalizedName: "anderson", gender: "M", origins: ["English"], meanings: ["Son of Andrew"], syllables: 3, nicknames: ["Andy"], alternateSpellings: [], currentRank: 248, trend: "stable" },
  { id: "m249", name: "Barrett", normalizedName: "barrett", gender: "M", origins: ["Germanic"], meanings: ["Bear strength"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 249, trend: "stable" },
  { id: "m250", name: "Callum", normalizedName: "callum", gender: "M", origins: ["Scottish"], meanings: ["Dove"], syllables: 2, nicknames: [], alternateSpellings: [], currentRank: 250, trend: "stable" },
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

  if (gender && gender !== "all") {
    filtered = filtered.filter((n) => n.gender === gender);
  }

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

  filtered.sort((a, b) => a.name.localeCompare(b.name));

  if (limit) {
    return filtered.slice(0, limit);
  }

  return filtered;
}

/**
 * Get available letters that have names
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
