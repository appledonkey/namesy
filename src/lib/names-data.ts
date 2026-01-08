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
  historicalRanks?: Record<number, number>;
}

// Helper to create name entries more concisely
function n(
  id: string,
  name: string,
  gender: "M" | "F" | "N",
  origins: string[],
  meanings: string[],
  syllables: number,
  nicknames: string[],
  currentRank: number,
  trend: "rising" | "falling" | "stable" = "stable",
  alternateSpellings: string[] = []
): NameData {
  return {
    id,
    name,
    normalizedName: name.toLowerCase(),
    gender,
    origins,
    meanings,
    syllables,
    nicknames,
    alternateSpellings,
    currentRank,
    trend,
  };
}

export const namesData: NameData[] = [
  // ============== A ==============
  n("f1", "Olivia", "F", ["Latin"], ["Olive tree", "Peace"], 4, ["Liv", "Livvy", "Ollie"], 1, "stable"),
  n("f4", "Amelia", "F", ["Germanic"], ["Industrious", "Striving"], 4, ["Amy", "Mia", "Millie"], 4, "rising"),
  n("f7", "Ava", "F", ["Latin", "Hebrew"], ["Life", "Bird-like"], 2, [], 7, "stable"),
  n("f14", "Aurora", "F", ["Latin"], ["Dawn", "Goddess of sunrise"], 4, ["Rory", "Aura"], 14, "rising"),
  n("f19", "Aria", "F", ["Italian", "Hebrew"], ["Air", "Song", "Lioness"], 3, [], 19, "stable"),
  n("f43", "Anne", "F", ["Hebrew"], ["Grace", "Favor"], 1, ["Annie"], 550, "stable"),
  n("f50", "Abigail", "F", ["Hebrew"], ["Father's joy"], 4, ["Abby", "Gail"], 15, "stable"),
  n("f51", "Addison", "F", ["English"], ["Son of Adam"], 3, ["Addie"], 45, "falling"),
  n("f52", "Audrey", "F", ["English"], ["Noble strength"], 2, [], 55, "rising"),
  n("f53", "Alice", "F", ["Germanic"], ["Noble", "Exalted"], 2, ["Ali"], 65, "rising"),
  n("f54", "Autumn", "F", ["Latin"], ["Fall season"], 2, [], 70, "stable"),
  n("f55", "Aubrey", "F", ["Germanic"], ["Elf ruler"], 2, ["Bree"], 80, "falling"),
  n("f56", "Anastasia", "F", ["Greek"], ["Resurrection"], 5, ["Ana", "Stacy"], 150, "rising"),
  n("f57", "Athena", "F", ["Greek"], ["Goddess of wisdom"], 3, [], 95, "rising"),
  n("f58", "Adalyn", "F", ["Germanic"], ["Noble"], 3, ["Ada", "Addy"], 110, "rising"),
  n("f59", "Ariana", "F", ["Italian"], ["Most holy"], 4, ["Ari"], 85, "stable"),
  n("f60", "Allison", "F", ["Germanic"], ["Noble"], 3, ["Ali", "Allie"], 90, "falling"),
  n("m13", "Alexander", "M", ["Greek"], ["Defender of the people"], 4, ["Alex", "Xander", "Lex"], 13, "stable"),
  n("m20", "Aiden", "M", ["Irish", "Gaelic"], ["Little fire", "Fiery"], 2, ["Aidy"], 20, "falling"),
  n("m23", "Asher", "M", ["Hebrew"], ["Happy", "Blessed"], 2, ["Ash"], 23, "rising"),
  n("m43", "Andrew", "M", ["Greek"], ["Manly", "Strong"], 2, ["Andy", "Drew"], 55, "falling"),
  n("m50", "Anthony", "M", ["Latin"], ["Priceless", "Praiseworthy"], 3, ["Tony", "Ant"], 40, "falling"),
  n("m51", "Aaron", "M", ["Hebrew"], ["High mountain", "Exalted"], 2, [], 60, "falling"),
  n("m52", "Adam", "M", ["Hebrew"], ["Man", "Earth"], 2, [], 85, "falling"),
  n("m53", "Adrian", "M", ["Latin"], ["From Hadria"], 3, [], 65, "stable"),
  n("m54", "Austin", "M", ["Latin"], ["Great", "Magnificent"], 2, [], 90, "falling"),
  n("m55", "Axel", "M", ["Scandinavian"], ["Father of peace"], 2, [], 70, "rising"),
  n("m56", "Archer", "M", ["English"], ["Bowman"], 2, ["Arch"], 115, "rising"),
  n("m57", "August", "M", ["Latin"], ["Great", "Venerable"], 2, ["Gus"], 125, "rising"),

  // ============== B ==============
  n("m9", "Benjamin", "M", ["Hebrew"], ["Son of the right hand"], 3, ["Ben", "Benny", "Benji"], 9, "stable"),
  n("f70", "Bella", "F", ["Italian"], ["Beautiful"], 2, [], 50, "stable"),
  n("f71", "Brooklyn", "F", ["English"], ["Water", "Stream"], 2, ["Brooke"], 40, "falling"),
  n("f72", "Brianna", "F", ["Irish"], ["Strong", "Noble"], 3, ["Bri"], 95, "falling"),
  n("f73", "Bailey", "F", ["English"], ["Bailiff"], 2, [], 175, "falling"),
  n("f74", "Brooke", "F", ["English"], ["Stream", "Water"], 1, [], 180, "falling"),
  n("f75", "Brielle", "F", ["French"], ["Hunting grounds"], 2, ["Bri"], 140, "rising"),
  n("f76", "Beatrice", "F", ["Latin"], ["She who brings happiness"], 3, ["Bea", "Trixie"], 200, "rising"),
  n("f77", "Bianca", "F", ["Italian"], ["White", "Pure"], 3, [], 250, "stable"),
  n("f78", "Bethany", "F", ["Hebrew"], ["House of figs"], 3, ["Beth"], 400, "falling"),
  n("m70", "Blake", "M", ["English"], ["Fair-haired", "Dark"], 1, [], 95, "falling"),
  n("m71", "Brandon", "M", ["English"], ["Broom hill"], 2, [], 155, "falling"),
  n("m72", "Brody", "M", ["Gaelic"], ["Ditch", "Muddy place"], 2, [], 120, "falling"),
  n("m73", "Beau", "M", ["French"], ["Handsome"], 1, [], 100, "rising"),
  n("m74", "Brooks", "M", ["English"], ["Stream"], 1, [], 105, "rising"),
  n("m75", "Braxton", "M", ["English"], ["Brock's town"], 2, ["Brax"], 130, "falling"),
  n("m76", "Bennett", "M", ["Latin"], ["Blessed"], 2, ["Ben"], 75, "rising"),
  n("m77", "Bryan", "M", ["Celtic"], ["Noble", "Strong"], 2, [], 200, "falling"),
  n("m78", "Bradley", "M", ["English"], ["Broad meadow"], 2, ["Brad"], 280, "falling"),

  // ============== C ==============
  n("f3", "Charlotte", "F", ["French", "Germanic"], ["Free woman", "Petite"], 2, ["Charlie", "Lottie", "Lola"], 3, "rising"),
  n("f17", "Chloe", "F", ["Greek"], ["Blooming", "Fertility"], 2, [], 17, "falling"),
  n("f30", "Camila", "F", ["Latin", "Spanish"], ["Young ceremonial attendant"], 3, ["Cami", "Mila"], 30, "stable"),
  n("f44", "Claire", "F", ["French", "Latin"], ["Clear", "Bright"], 1, [], 72, "stable"),
  n("f80", "Caroline", "F", ["Latin"], ["Free woman"], 3, ["Cara", "Carrie"], 60, "stable"),
  n("f81", "Clara", "F", ["Latin"], ["Bright", "Clear"], 2, [], 100, "rising"),
  n("f82", "Cora", "F", ["Greek"], ["Maiden"], 2, [], 75, "rising"),
  n("f83", "Cecilia", "F", ["Latin"], ["Blind"], 4, ["Cece"], 140, "rising"),
  n("f84", "Catherine", "F", ["Greek"], ["Pure"], 3, ["Kate", "Katie", "Cat"], 185, "stable"),
  n("m31", "Carter", "M", ["English"], ["Cart driver"], 2, [], 31, "falling"),
  n("m41", "Charles", "M", ["Germanic"], ["Free man"], 1, ["Charlie", "Chuck"], 50, "rising"),
  n("m42", "Christopher", "M", ["Greek"], ["Bearer of Christ"], 3, ["Chris", "Topher"], 48, "falling"),
  n("m80", "Caleb", "M", ["Hebrew"], ["Faithful", "Devotion"], 2, [], 55, "falling"),
  n("m81", "Cameron", "M", ["Scottish"], ["Crooked nose"], 3, ["Cam"], 80, "falling"),
  n("m82", "Christian", "M", ["Latin"], ["Follower of Christ"], 3, ["Chris"], 60, "stable"),
  n("m83", "Connor", "M", ["Irish"], ["Wolf lover"], 2, [], 85, "falling"),
  n("m84", "Colton", "M", ["English"], ["Coal town"], 2, ["Colt"], 100, "falling"),
  n("m85", "Carson", "M", ["Scottish"], ["Son of marsh dwellers"], 2, [], 90, "falling"),
  n("m86", "Cooper", "M", ["English"], ["Barrel maker"], 2, ["Coop"], 70, "stable"),
  n("m87", "Cole", "M", ["English"], ["Coal black"], 1, [], 110, "stable"),

  // ============== D ==============
  n("m17", "Daniel", "M", ["Hebrew"], ["God is my judge"], 3, ["Dan", "Danny"], 17, "stable"),
  n("m27", "David", "M", ["Hebrew"], ["Beloved"], 2, ["Dave", "Davey"], 27, "falling"),
  n("m90", "Dylan", "M", ["Welsh"], ["Son of the sea"], 2, [], 35, "falling"),
  n("m91", "Dominic", "M", ["Latin"], ["Belonging to the Lord"], 3, ["Dom", "Nick"], 80, "stable"),
  n("m92", "Declan", "M", ["Irish"], ["Man of prayer"], 2, ["Dec"], 95, "rising"),
  n("m93", "Dean", "M", ["English"], ["Valley"], 1, [], 200, "rising"),
  n("m94", "Derek", "M", ["Germanic"], ["Ruler of the people"], 2, [], 300, "falling"),
  n("m95", "Damian", "M", ["Greek"], ["To tame"], 3, [], 115, "stable"),
  n("f90", "Delilah", "F", ["Hebrew"], ["Delicate"], 3, ["Lilah"], 75, "rising"),
  n("f91", "Daisy", "F", ["English"], ["Day's eye"], 2, [], 130, "rising"),
  n("f92", "Diana", "F", ["Latin"], ["Divine", "Goddess"], 3, ["Di"], 220, "rising"),
  n("f93", "Dakota", "F", ["Native American"], ["Friend", "Ally"], 3, [], 280, "falling"),
  n("f94", "Daniella", "F", ["Hebrew"], ["God is my judge"], 4, ["Dani", "Ella"], 200, "stable"),

  // ============== E ==============
  n("f2", "Emma", "F", ["Germanic"], ["Whole", "Universal"], 2, ["Em", "Emmy"], 2, "falling"),
  n("f11", "Evelyn", "F", ["English", "French"], ["Wished-for child", "Life"], 3, ["Evie", "Eve", "Lyn"], 11, "rising"),
  n("f12", "Ella", "F", ["Germanic", "English"], ["Fairy maiden", "All"], 2, ["Ellie"], 12, "stable"),
  n("f20", "Ellie", "F", ["Greek", "English"], ["Light", "Shining"], 2, [], 20, "rising"),
  n("f26", "Eleanor", "F", ["Greek", "French"], ["Bright light"], 3, ["Ellie", "Nell", "Nora"], 26, "rising"),
  n("f100", "Elizabeth", "F", ["Hebrew"], ["Pledged to God"], 4, ["Liz", "Beth", "Lizzy", "Eliza"], 16, "stable"),
  n("f101", "Emily", "F", ["Latin"], ["Rival", "Industrious"], 3, ["Em", "Emmy"], 18, "falling"),
  n("f102", "Elena", "F", ["Greek"], ["Bright light"], 3, ["Lena"], 55, "rising"),
  n("f103", "Eva", "F", ["Hebrew"], ["Life"], 2, [], 85, "stable"),
  n("f104", "Eliza", "F", ["Hebrew"], ["Pledged to God"], 3, ["Liza"], 95, "rising"),
  n("f105", "Eden", "F", ["Hebrew"], ["Paradise", "Delight"], 2, [], 120, "rising"),
  n("f106", "Emilia", "F", ["Latin"], ["Rival"], 4, ["Mia", "Millie"], 25, "rising"),
  n("f107", "Eliana", "F", ["Hebrew"], ["God has answered"], 4, ["Ellie", "Ana"], 45, "rising"),
  n("m5", "Elijah", "M", ["Hebrew"], ["My God is Yahweh"], 3, ["Eli", "Lijah"], 5, "rising"),
  n("m16", "Ethan", "M", ["Hebrew"], ["Strong", "Firm"], 2, [], 16, "falling"),
  n("m29", "Ezra", "M", ["Hebrew"], ["Helper"], 2, ["Ez"], 29, "rising"),
  n("m100", "Eli", "M", ["Hebrew"], ["Ascended", "High"], 2, [], 45, "stable"),
  n("m101", "Evan", "M", ["Welsh"], ["God is gracious"], 2, [], 85, "falling"),
  n("m102", "Easton", "M", ["English"], ["East town"], 2, [], 75, "rising"),
  n("m103", "Everett", "M", ["English"], ["Brave boar"], 3, ["Ev", "Rhett"], 80, "rising"),
  n("m104", "Emmanuel", "M", ["Hebrew"], ["God is with us"], 4, ["Manny", "Manuel"], 150, "stable"),
  n("m105", "Edward", "M", ["English"], ["Wealthy guardian"], 2, ["Ed", "Eddie", "Ted"], 165, "rising"),
  n("m106", "Eric", "M", ["Norse"], ["Eternal ruler"], 2, [], 175, "falling"),

  // ============== F ==============
  n("f110", "Faith", "F", ["English"], ["Trust", "Belief"], 1, [], 150, "falling"),
  n("f111", "Freya", "F", ["Norse"], ["Noble woman"], 2, [], 130, "rising"),
  n("f112", "Fiona", "F", ["Gaelic"], ["White", "Fair"], 3, [], 250, "stable"),
  n("f113", "Felicity", "F", ["Latin"], ["Happiness", "Good fortune"], 4, [], 350, "rising"),
  n("f114", "Florence", "F", ["Latin"], ["Flourishing", "Prosperous"], 2, ["Flo"], 400, "rising"),
  n("f115", "Francesca", "F", ["Italian"], ["Free one"], 3, ["Fran", "Frankie"], 380, "stable"),
  n("m110", "Finn", "M", ["Irish"], ["Fair", "White"], 1, [], 65, "rising"),
  n("m111", "Felix", "M", ["Latin"], ["Happy", "Lucky"], 2, [], 200, "rising"),
  n("m112", "Finley", "M", ["Irish"], ["Fair warrior"], 2, [], 135, "rising"),
  n("m113", "Francisco", "M", ["Spanish"], ["Free man"], 3, ["Frank", "Cisco"], 210, "falling"),
  n("m114", "Frederick", "M", ["Germanic"], ["Peaceful ruler"], 3, ["Fred", "Freddy"], 380, "rising"),
  n("m115", "Forrest", "M", ["English"], ["Dweller near the woods"], 2, [], 450, "rising"),

  // ============== G ==============
  n("f13", "Gianna", "F", ["Italian"], ["God is gracious"], 3, ["Gia", "Gigi"], 13, "rising"),
  n("f31", "Grace", "F", ["Latin"], ["Grace of God", "Elegance"], 1, ["Gracie"], 31, "stable"),
  n("f120", "Genesis", "F", ["Greek"], ["Origin", "Beginning"], 3, [], 65, "stable"),
  n("f121", "Gabriella", "F", ["Hebrew"], ["God is my strength"], 4, ["Gabby", "Ella"], 45, "falling"),
  n("f122", "Genevieve", "F", ["French"], ["Tribe woman"], 4, ["Gen", "Vivi"], 175, "rising"),
  n("f123", "Gemma", "F", ["Italian"], ["Precious stone"], 2, [], 190, "rising"),
  n("f124", "Georgia", "F", ["Greek"], ["Farmer"], 3, [], 220, "rising"),
  n("m33", "Grayson", "M", ["English"], ["Son of the gray-haired one"], 2, ["Gray"], 33, "stable"),
  n("m120", "Gabriel", "M", ["Hebrew"], ["God is my strength"], 3, ["Gabe"], 35, "stable"),
  n("m121", "Gavin", "M", ["Welsh"], ["White hawk"], 2, [], 130, "falling"),
  n("m122", "George", "M", ["Greek"], ["Farmer"], 2, [], 125, "rising"),
  n("m123", "Giovanni", "M", ["Italian"], ["God is gracious"], 4, ["Gio"], 140, "stable"),
  n("m124", "Grant", "M", ["Scottish"], ["Great", "Large"], 1, [], 200, "falling"),
  n("m125", "Graham", "M", ["Scottish"], ["Gravelly homestead"], 2, [], 185, "stable"),
  n("m126", "Griffin", "M", ["Welsh"], ["Strong lord"], 2, ["Griff"], 195, "rising"),

  // ============== H ==============
  n("f10", "Harper", "F", ["English"], ["Harp player"], 2, [], 10, "stable"),
  n("f22", "Hazel", "F", ["English"], ["Hazelnut tree"], 2, [], 22, "rising"),
  n("m7", "Henry", "M", ["Germanic"], ["Ruler of the home"], 2, ["Hank", "Harry", "Hal"], 7, "rising"),
  n("m130", "Hudson", "M", ["English"], ["Son of Hudde"], 2, [], 50, "stable"),
  n("m131", "Hunter", "M", ["English"], ["One who hunts"], 2, [], 60, "falling"),
  n("m132", "Harrison", "M", ["English"], ["Son of Harry"], 3, ["Harry"], 115, "stable"),
  n("f130", "Hannah", "F", ["Hebrew"], ["Grace", "Favor"], 2, [], 35, "falling"),
  n("f131", "Hadley", "F", ["English"], ["Heather field"], 2, [], 100, "stable"),
  n("f132", "Hailey", "F", ["English"], ["Hay meadow"], 2, [], 80, "falling"),
  n("f133", "Hope", "F", ["English"], ["Expectation", "Belief"], 1, [], 250, "stable"),
  n("f134", "Heidi", "F", ["Germanic"], ["Noble one"], 2, [], 350, "stable"),
  n("f135", "Holly", "F", ["English"], ["Holly tree"], 2, [], 400, "falling"),

  // ============== I ==============
  n("f8", "Isabella", "F", ["Hebrew", "Spanish"], ["Devoted to God"], 4, ["Bella", "Izzy", "Isa"], 8, "falling"),
  n("f29", "Ivy", "F", ["English"], ["Ivy plant", "Faithfulness"], 2, [], 29, "rising"),
  n("f140", "Isla", "F", ["Scottish"], ["Island"], 2, [], 5, "rising"),
  n("f141", "Iris", "F", ["Greek"], ["Rainbow"], 2, [], 115, "rising"),
  n("f142", "Imogen", "F", ["Celtic"], ["Maiden"], 3, [], 350, "rising"),
  n("f143", "Ingrid", "F", ["Norse"], ["Beautiful", "Beloved"], 2, [], 500, "rising"),
  n("m140", "Isaac", "M", ["Hebrew"], ["He will laugh"], 2, ["Ike"], 40, "stable"),
  n("m141", "Ian", "M", ["Scottish"], ["God is gracious"], 2, [], 100, "falling"),
  n("m142", "Ivan", "M", ["Russian"], ["God is gracious"], 2, [], 170, "falling"),
  n("m143", "Isaiah", "M", ["Hebrew"], ["Salvation of the Lord"], 3, [], 45, "stable"),

  // ============== J ==============
  n("m4", "James", "M", ["Hebrew", "English"], ["Supplanter"], 1, ["Jim", "Jimmy", "Jamie"], 4, "stable"),
  n("m11", "Jack", "M", ["English"], ["God is gracious"], 1, ["Jackie"], 11, "stable"),
  n("m25", "Joseph", "M", ["Hebrew"], ["God will add"], 2, ["Joe", "Joey"], 25, "stable"),
  n("m28", "Jackson", "M", ["English"], ["Son of Jack"], 2, ["Jax"], 28, "falling"),
  n("m32", "Jayden", "M", ["Modern American"], ["Thankful"], 2, ["Jay"], 32, "falling"),
  n("m35", "Julian", "M", ["Latin"], ["Youthful"], 3, ["Jules"], 35, "rising"),
  n("m150", "Jacob", "M", ["Hebrew"], ["Supplanter"], 2, ["Jake"], 30, "falling"),
  n("m151", "John", "M", ["Hebrew"], ["God is gracious"], 1, ["Johnny", "Jack"], 25, "stable"),
  n("m152", "Jonathan", "M", ["Hebrew"], ["Gift of God"], 3, ["Jon", "Johnny"], 75, "falling"),
  n("m153", "Joshua", "M", ["Hebrew"], ["God is salvation"], 3, ["Josh"], 55, "falling"),
  n("m154", "Jaxon", "M", ["English"], ["Son of Jack"], 2, ["Jax"], 45, "falling"),
  n("m155", "Jasper", "M", ["Persian"], ["Treasurer"], 2, [], 95, "rising"),
  n("m156", "Jordan", "M", ["Hebrew"], ["To flow down"], 2, [], 70, "falling"),
  n("m157", "Jason", "M", ["Greek"], ["Healer"], 2, ["Jay"], 130, "falling"),
  n("m158", "Jeremiah", "M", ["Hebrew"], ["God will exalt"], 4, ["Jeremy", "Jerry"], 65, "stable"),
  n("m159", "Jesse", "M", ["Hebrew"], ["Gift"], 2, [], 180, "falling"),
  n("f42", "Jane", "F", ["Hebrew"], ["God is gracious"], 1, ["Janie"], 291, "rising"),
  n("f150", "Julia", "F", ["Latin"], ["Youthful"], 3, ["Julie"], 85, "stable"),
  n("f151", "Josephine", "F", ["Hebrew"], ["God will add"], 3, ["Jo", "Josie"], 90, "rising"),
  n("f152", "Jade", "F", ["Spanish"], ["Jade stone"], 1, [], 100, "stable"),
  n("f153", "Jasmine", "F", ["Persian"], ["Jasmine flower"], 2, ["Jazz"], 130, "falling"),
  n("f154", "Juliette", "F", ["French"], ["Youthful"], 3, ["Julie"], 200, "rising"),
  n("f155", "Juliana", "F", ["Latin"], ["Youthful"], 4, ["Julie", "Ana"], 165, "stable"),
  n("f156", "Jocelyn", "F", ["Germanic"], ["Member of Gauts tribe"], 3, ["Joss", "Lyn"], 250, "falling"),
  n("f157", "Jordan", "F", ["Hebrew"], ["To flow down"], 2, [], 300, "falling"),

  // ============== K ==============
  n("f160", "Kennedy", "F", ["Irish"], ["Helmeted chief"], 3, [], 55, "falling"),
  n("f161", "Kinsley", "F", ["English"], ["King's meadow"], 2, [], 65, "falling"),
  n("f162", "Kaylee", "F", ["American"], ["Pure", "Beloved"], 2, ["Kay"], 105, "falling"),
  n("f163", "Katherine", "F", ["Greek"], ["Pure"], 3, ["Kate", "Katie", "Kat"], 125, "stable"),
  n("f164", "Kira", "F", ["Russian"], ["Ruler"], 2, [], 300, "rising"),
  n("f165", "Kayla", "F", ["Arabic", "Hebrew"], ["Laurel", "Crown"], 2, [], 150, "falling"),
  n("f166", "Kylie", "F", ["Australian"], ["Boomerang"], 2, [], 175, "falling"),
  n("f167", "Khloe", "F", ["Greek"], ["Blooming"], 2, [], 50, "falling"),
  n("m160", "Kai", "M", ["Hawaiian"], ["Sea"], 1, [], 70, "rising"),
  n("m161", "Kingston", "M", ["English"], ["King's town"], 2, ["King"], 105, "stable"),
  n("m162", "Kayden", "M", ["American"], ["Fighter"], 2, [], 115, "falling"),
  n("m163", "Kevin", "M", ["Irish"], ["Gentle", "Kind"], 2, ["Kev"], 155, "falling"),
  n("m164", "Kyle", "M", ["Gaelic"], ["Narrow strait"], 1, [], 200, "falling"),
  n("m165", "Kenneth", "M", ["Scottish"], ["Handsome", "Born of fire"], 2, ["Ken", "Kenny"], 250, "falling"),
  n("m166", "Knox", "M", ["Scottish"], ["Round hill"], 1, [], 120, "rising"),

  // ============== L ==============
  n("m1", "Liam", "M", ["Irish", "Germanic"], ["Strong-willed warrior"], 1, ["Li"], 1, "stable"),
  n("m8", "Lucas", "M", ["Greek", "Latin"], ["Bringer of light"], 2, ["Luke", "Luc"], 8, "stable"),
  n("m12", "Levi", "M", ["Hebrew"], ["Joined", "Attached"], 2, [], 12, "rising"),
  n("m22", "Logan", "M", ["Scottish"], ["Little hollow"], 2, [], 22, "falling"),
  n("m26", "Leo", "M", ["Latin"], ["Lion"], 2, [], 26, "rising"),
  n("m30", "Luke", "M", ["Greek"], ["Light"], 1, [], 30, "stable"),
  n("m170", "Lincoln", "M", ["English"], ["Lake colony"], 2, ["Linc"], 40, "rising"),
  n("m171", "Landon", "M", ["English"], ["Long hill"], 2, [], 70, "falling"),
  n("m172", "Leonardo", "M", ["Italian"], ["Brave lion"], 4, ["Leo"], 75, "rising"),
  n("m173", "Luca", "M", ["Italian"], ["Light"], 2, [], 50, "rising"),
  n("f9", "Luna", "F", ["Latin"], ["Moon"], 2, ["Lu", "Lulu"], 9, "rising"),
  n("f16", "Layla", "F", ["Arabic"], ["Night", "Dark beauty"], 2, ["Lay"], 16, "stable"),
  n("f25", "Lily", "F", ["English", "Latin"], ["Lily flower", "Purity"], 2, [], 25, "stable"),
  n("f170", "Lucy", "F", ["Latin"], ["Light"], 2, [], 45, "rising"),
  n("f171", "Leah", "F", ["Hebrew"], ["Weary"], 2, [], 50, "stable"),
  n("f172", "Lillian", "F", ["Latin"], ["Lily"], 3, ["Lily", "Lilly"], 30, "stable"),
  n("f173", "Lila", "F", ["Arabic", "Sanskrit"], ["Night", "Play"], 2, [], 110, "rising"),
  n("f174", "Lauren", "F", ["Latin"], ["Laurel"], 2, [], 200, "falling"),
  n("f175", "Lydia", "F", ["Greek"], ["Woman from Lydia"], 3, [], 85, "rising"),
  n("f176", "Londyn", "F", ["English"], ["London"], 2, [], 115, "stable"),
  n("f177", "Leilani", "F", ["Hawaiian"], ["Heavenly flower"], 4, ["Lei"], 120, "rising"),
  n("f178", "Lucia", "F", ["Italian", "Latin"], ["Light"], 3, [], 180, "rising"),

  // ============== M ==============
  n("f6", "Mia", "F", ["Scandinavian", "Latin"], ["Beloved", "Mine"], 2, [], 6, "stable"),
  n("f35", "Maya", "F", ["Sanskrit", "Greek"], ["Illusion", "Water"], 2, [], 35, "stable"),
  n("f41", "Mae", "F", ["English"], ["Bitter", "Pearl"], 1, [], 270, "rising"),
  n("m18", "Michael", "M", ["Hebrew"], ["Who is like God?"], 2, ["Mike", "Mikey"], 18, "falling"),
  n("m15", "Mason", "M", ["English"], ["Stone worker"], 2, ["Mace"], 15, "falling"),
  n("m21", "Matthew", "M", ["Hebrew"], ["Gift of God"], 2, ["Matt", "Matty"], 21, "falling"),
  n("m180", "Mateo", "M", ["Spanish"], ["Gift of God"], 3, [], 10, "rising"),
  n("m181", "Maverick", "M", ["American"], ["Independent"], 3, ["Mav"], 45, "rising"),
  n("m182", "Miles", "M", ["Latin"], ["Soldier"], 1, [], 55, "stable"),
  n("m183", "Micah", "M", ["Hebrew"], ["Who is like God?"], 2, [], 95, "stable"),
  n("m184", "Maxwell", "M", ["Scottish"], ["Great spring"], 2, ["Max"], 105, "stable"),
  n("m185", "Marcus", "M", ["Latin"], ["Dedicated to Mars"], 2, [], 160, "falling"),
  n("f180", "Madison", "F", ["English"], ["Son of Matthew"], 3, ["Maddie"], 25, "falling"),
  n("f181", "Mila", "F", ["Slavic"], ["Gracious", "Dear"], 2, [], 20, "rising"),
  n("f182", "Madelyn", "F", ["English"], ["Woman from Magdala"], 3, ["Maddie"], 65, "falling"),
  n("f183", "Melody", "F", ["Greek"], ["Song"], 3, [], 110, "stable"),
  n("f184", "Morgan", "F", ["Welsh"], ["Sea-born"], 2, [], 155, "falling"),
  n("f185", "Mackenzie", "F", ["Scottish"], ["Son of Kenneth"], 3, ["Kenzie"], 120, "falling"),
  n("f186", "Molly", "F", ["Hebrew"], ["Bitter"], 2, [], 165, "rising"),
  n("f187", "Margaret", "F", ["Greek"], ["Pearl"], 3, ["Maggie", "Meg"], 135, "rising"),
  n("f188", "Maeve", "F", ["Irish"], ["Intoxicating"], 1, [], 140, "rising"),

  // ============== N ==============
  n("m2", "Noah", "M", ["Hebrew"], ["Rest", "Comfort"], 2, [], 2, "stable"),
  n("m190", "Nathan", "M", ["Hebrew"], ["Gift of God"], 2, ["Nate"], 50, "falling"),
  n("m191", "Nicholas", "M", ["Greek"], ["Victory of the people"], 3, ["Nick", "Nicky"], 95, "falling"),
  n("m192", "Nolan", "M", ["Irish"], ["Champion"], 2, [], 60, "stable"),
  n("m193", "Nathaniel", "M", ["Hebrew"], ["Gift of God"], 3, ["Nate", "Nathan"], 70, "stable"),
  n("f21", "Nora", "F", ["Irish", "Greek"], ["Honor", "Light"], 2, [], 21, "rising"),
  n("f28", "Nova", "F", ["Latin"], ["New", "Star"], 2, [], 28, "rising"),
  n("f190", "Natalie", "F", ["Latin"], ["Christmas Day"], 3, ["Nat"], 55, "falling"),
  n("f191", "Naomi", "F", ["Hebrew"], ["Pleasantness"], 3, [], 70, "stable"),
  n("f192", "Nevaeh", "F", ["American"], ["Heaven spelled backwards"], 3, [], 85, "falling"),
  n("f193", "Nicole", "F", ["Greek"], ["Victory of the people"], 2, ["Nicky"], 200, "falling"),

  // ============== O ==============
  n("m3", "Oliver", "M", ["Latin", "Old French"], ["Olive tree", "Peaceful"], 3, ["Ollie", "Oli"], 3, "rising"),
  n("m19", "Owen", "M", ["Welsh", "Irish"], ["Young warrior"], 2, [], 19, "stable"),
  n("m200", "Oscar", "M", ["Irish"], ["Deer lover"], 2, [], 90, "rising"),
  n("f200", "Olivia", "F", ["Latin"], ["Olive tree"], 4, ["Liv", "Livvy"], 1, "stable"),
  n("f201", "Oakley", "F", ["English"], ["Oak meadow"], 2, [], 200, "rising"),

  // ============== P ==============
  n("f15", "Penelope", "F", ["Greek"], ["Weaver"], 4, ["Penny", "Nell", "Poppy"], 15, "rising"),
  n("f210", "Piper", "F", ["English"], ["Pipe player"], 2, [], 60, "stable"),
  n("f211", "Paisley", "F", ["Scottish"], ["Church"], 2, [], 50, "falling"),
  n("f212", "Peyton", "F", ["English"], ["Fighting man's estate"], 2, [], 95, "falling"),
  n("f213", "Paige", "F", ["English"], ["Young servant"], 1, [], 200, "falling"),
  n("f214", "Phoebe", "F", ["Greek"], ["Bright", "Pure"], 2, [], 250, "rising"),
  n("f215", "Priscilla", "F", ["Latin"], ["Ancient"], 3, [], 400, "rising"),
  n("m210", "Parker", "M", ["English"], ["Park keeper"], 2, [], 85, "falling"),
  n("m211", "Preston", "M", ["English"], ["Priest's town"], 2, [], 140, "falling"),
  n("m212", "Patrick", "M", ["Latin"], ["Nobleman"], 2, ["Pat", "Paddy"], 190, "falling"),
  n("m213", "Paul", "M", ["Latin"], ["Small", "Humble"], 1, [], 220, "stable"),
  n("m214", "Peter", "M", ["Greek"], ["Rock", "Stone"], 2, ["Pete"], 200, "rising"),

  // ============== Q ==============
  n("f220", "Quinn", "F", ["Irish"], ["Wise", "Counsel"], 1, [], 90, "stable"),
  n("f221", "Queenie", "F", ["English"], ["Queen"], 2, [], 800, "rising"),
  n("m220", "Quentin", "M", ["Latin"], ["Fifth"], 2, [], 350, "stable"),
  n("m221", "Quincy", "M", ["Latin"], ["Fifth son's estate"], 2, [], 450, "rising"),

  // ============== R ==============
  n("f24", "Riley", "F", ["Irish"], ["Courageous", "Valiant"], 2, [], 24, "stable"),
  n("f40", "Rose", "F", ["Latin"], ["Rose flower"], 1, ["Rosie"], 116, "stable"),
  n("m44", "Ryan", "M", ["Irish"], ["Little king"], 2, [], 60, "falling"),
  n("m230", "Roman", "M", ["Latin"], ["Citizen of Rome"], 2, [], 65, "rising"),
  n("m231", "Robert", "M", ["Germanic"], ["Bright fame"], 2, ["Rob", "Bob", "Bobby"], 80, "stable"),
  n("m232", "Rowan", "M", ["Irish"], ["Little red one"], 2, [], 95, "rising"),
  n("m233", "Ryder", "M", ["English"], ["Horseman"], 2, [], 100, "falling"),
  n("m234", "Ryker", "M", ["Germanic"], ["Rich"], 2, [], 110, "falling"),
  n("m235", "Richard", "M", ["Germanic"], ["Brave ruler"], 2, ["Rick", "Rich", "Dick"], 180, "falling"),
  n("m236", "Raymond", "M", ["Germanic"], ["Wise protector"], 2, ["Ray"], 250, "falling"),
  n("f230", "Ruby", "F", ["Latin"], ["Red gemstone"], 2, [], 70, "rising"),
  n("f231", "Reagan", "F", ["Irish"], ["Little ruler"], 2, [], 100, "falling"),
  n("f232", "Rachel", "F", ["Hebrew"], ["Ewe"], 2, [], 180, "falling"),
  n("f233", "Rebecca", "F", ["Hebrew"], ["To bind"], 3, ["Becca", "Becky"], 200, "falling"),
  n("f234", "Reese", "F", ["Welsh"], ["Enthusiasm"], 1, [], 130, "falling"),
  n("f235", "Remi", "F", ["French"], ["Oarsman"], 2, [], 140, "rising"),
  n("f236", "Raelynn", "F", ["American"], ["Combination of Rae + Lynn"], 2, [], 155, "rising"),
  n("f237", "Rosalie", "F", ["French"], ["Rose"], 3, ["Rose", "Rosie"], 125, "rising"),

  // ============== S ==============
  n("f5", "Sophia", "F", ["Greek"], ["Wisdom"], 3, ["Sophie", "Soph"], 5, "falling"),
  n("f32", "Scarlett", "F", ["English"], ["Red", "Scarlet"], 2, ["Scar"], 32, "stable"),
  n("f34", "Stella", "F", ["Latin"], ["Star"], 2, [], 34, "rising"),
  n("m14", "Sebastian", "M", ["Greek", "Latin"], ["Venerable"], 4, ["Seb", "Sebby"], 14, "stable"),
  n("m24", "Samuel", "M", ["Hebrew"], ["God has heard"], 3, ["Sam", "Sammy"], 24, "stable"),
  n("m240", "Santiago", "M", ["Spanish"], ["Saint James"], 4, [], 75, "rising"),
  n("m241", "Sawyer", "M", ["English"], ["Wood cutter"], 2, [], 110, "falling"),
  n("m242", "Silas", "M", ["Latin"], ["Wood", "Forest"], 2, [], 100, "rising"),
  n("m243", "Steven", "M", ["Greek"], ["Crown", "Garland"], 2, ["Steve"], 190, "falling"),
  n("f240", "Savannah", "F", ["Spanish"], ["Treeless plain"], 3, [], 45, "falling"),
  n("f241", "Skylar", "F", ["Dutch"], ["Scholar"], 2, ["Sky"], 60, "falling"),
  n("f242", "Sadie", "F", ["Hebrew"], ["Princess"], 2, [], 75, "stable"),
  n("f243", "Sarah", "F", ["Hebrew"], ["Princess"], 2, [], 80, "falling"),
  n("f244", "Samantha", "F", ["Hebrew"], ["Listener"], 4, ["Sam", "Sammy"], 100, "falling"),
  n("f245", "Serenity", "F", ["English"], ["Peaceful"], 4, [], 90, "stable"),
  n("f246", "Sienna", "F", ["Italian"], ["Orange-red"], 3, [], 135, "stable"),
  n("f247", "Summer", "F", ["English"], ["Summer season"], 2, [], 170, "falling"),
  n("f248", "Sloane", "F", ["Irish"], ["Warrior"], 1, [], 175, "rising"),
  n("f249", "Sophie", "F", ["Greek"], ["Wisdom"], 2, [], 85, "stable"),
  n("f250", "Selena", "F", ["Greek"], ["Moon"], 3, [], 200, "stable"),

  // ============== T ==============
  n("m10", "Theodore", "M", ["Greek"], ["Gift of God"], 3, ["Theo", "Ted", "Teddy"], 10, "rising"),
  n("m40", "Thomas", "M", ["Aramaic"], ["Twin"], 2, ["Tom", "Tommy"], 45, "falling"),
  n("m250", "Tyler", "M", ["English"], ["Tile maker"], 2, ["Ty"], 100, "falling"),
  n("m251", "Tristan", "M", ["Celtic"], ["Sorrowful"], 2, ["Tris"], 130, "falling"),
  n("m252", "Travis", "M", ["French"], ["To cross"], 2, [], 250, "falling"),
  n("m253", "Timothy", "M", ["Greek"], ["Honoring God"], 3, ["Tim", "Timmy"], 165, "falling"),
  n("m254", "Tucker", "M", ["English"], ["Fabric pleater"], 2, ["Tuck"], 185, "stable"),
  n("m255", "Tobias", "M", ["Hebrew"], ["God is good"], 3, ["Toby"], 260, "rising"),
  n("m256", "Theo", "M", ["Greek"], ["Gift of God"], 2, [], 200, "rising"),
  n("f250", "Taylor", "F", ["English"], ["Tailor"], 2, [], 210, "falling"),
  n("f251", "Tessa", "F", ["Greek"], ["Harvester"], 2, [], 250, "stable"),
  n("f252", "Trinity", "F", ["Latin"], ["Triad"], 3, [], 280, "falling"),
  n("f253", "Teagan", "F", ["Irish"], ["Little poet"], 2, [], 290, "falling"),
  n("f254", "Thea", "F", ["Greek"], ["Goddess"], 2, [], 300, "rising"),

  // ============== U ==============
  n("f260", "Una", "F", ["Irish"], ["Lamb"], 2, [], 700, "rising"),
  n("f261", "Unity", "F", ["English"], ["Oneness"], 3, [], 900, "rising"),
  n("f262", "Ursula", "F", ["Latin"], ["Little bear"], 3, [], 950, "stable"),
  n("m260", "Uriel", "M", ["Hebrew"], ["God is my light"], 3, [], 450, "stable"),
  n("m261", "Ulysses", "M", ["Latin"], ["Wrathful"], 3, [], 700, "rising"),

  // ============== V ==============
  n("f27", "Violet", "F", ["Latin"], ["Purple flower"], 3, ["Vi"], 27, "rising"),
  n("f33", "Victoria", "F", ["Latin"], ["Victory", "Conqueror"], 4, ["Vicky", "Tori"], 33, "falling"),
  n("f270", "Valentina", "F", ["Latin"], ["Strong", "Healthy"], 4, ["Val"], 60, "rising"),
  n("f271", "Valerie", "F", ["Latin"], ["Strength", "Health"], 3, ["Val"], 150, "falling"),
  n("f272", "Vivian", "F", ["Latin"], ["Alive"], 3, ["Vivi"], 95, "rising"),
  n("f273", "Vera", "F", ["Russian"], ["Faith", "Truth"], 2, [], 240, "rising"),
  n("f274", "Vanessa", "F", ["Greek"], ["Butterfly"], 3, ["Nessa"], 220, "falling"),
  n("m270", "Vincent", "M", ["Latin"], ["Conquering"], 2, ["Vince", "Vinny"], 115, "stable"),
  n("m271", "Victor", "M", ["Latin"], ["Winner", "Conqueror"], 2, ["Vic"], 175, "stable"),

  // ============== W ==============
  n("f18", "Willow", "F", ["English"], ["Willow tree", "Graceful"], 2, ["Will", "Willa"], 18, "rising"),
  n("m6", "William", "M", ["Germanic"], ["Resolute protector"], 3, ["Will", "Bill", "Billy", "Liam"], 6, "stable"),
  n("m34", "Wyatt", "M", ["English"], ["Brave in war"], 2, [], 34, "stable"),
  n("m280", "Wesley", "M", ["English"], ["West meadow"], 2, ["Wes"], 90, "stable"),
  n("m281", "Weston", "M", ["English"], ["Western town"], 2, ["Wes"], 95, "stable"),
  n("m282", "Walter", "M", ["Germanic"], ["Army ruler"], 2, ["Walt"], 260, "rising"),
  n("m283", "Warren", "M", ["Germanic"], ["Guard"], 2, [], 340, "rising"),
  n("f280", "Willa", "F", ["Germanic"], ["Resolute protection"], 2, [], 200, "rising"),
  n("f281", "Winnie", "F", ["Welsh"], ["Holy peacemaking"], 2, [], 380, "rising"),
  n("f282", "Winter", "F", ["English"], ["Winter season"], 2, [], 350, "rising"),
  n("f283", "Whitney", "F", ["English"], ["White island"], 2, [], 600, "falling"),

  // ============== X ==============
  n("m290", "Xavier", "M", ["Basque"], ["New house"], 3, ["Xavi"], 85, "falling"),
  n("m291", "Xander", "M", ["Greek"], ["Defender of the people"], 2, [], 175, "stable"),
  n("f290", "Ximena", "F", ["Spanish"], ["Hearkening"], 3, [], 125, "stable"),
  n("f291", "Xyla", "F", ["Greek"], ["Wood dweller"], 2, [], 800, "rising"),

  // ============== Y ==============
  n("f300", "Yara", "F", ["Arabic", "Brazilian"], ["Small butterfly", "Water lady"], 2, [], 400, "rising"),
  n("f301", "Yasmin", "F", ["Persian"], ["Jasmine flower"], 2, [], 500, "stable"),
  n("f302", "Yvette", "F", ["French"], ["Yew tree"], 2, [], 750, "rising"),
  n("f303", "Yolanda", "F", ["Greek"], ["Violet flower"], 3, [], 850, "falling"),
  n("m300", "Yusuf", "M", ["Arabic"], ["God increases"], 2, [], 400, "rising"),
  n("m301", "Yahir", "M", ["Hebrew"], ["He will enlighten"], 2, [], 350, "rising"),

  // ============== Z ==============
  n("f23", "Zoey", "F", ["Greek"], ["Life"], 2, ["Zo"], 23, "stable"),
  n("f310", "Zara", "F", ["Arabic"], ["Princess", "Flower"], 2, [], 105, "rising"),
  n("f311", "Zoe", "F", ["Greek"], ["Life"], 2, [], 40, "stable"),
  n("f312", "Zelda", "F", ["Germanic"], ["Gray fighting maid"], 2, [], 450, "rising"),
  n("m310", "Zachary", "M", ["Hebrew"], ["God remembers"], 3, ["Zach", "Zack"], 135, "falling"),
  n("m311", "Zion", "M", ["Hebrew"], ["Highest point"], 2, [], 140, "rising"),
  n("m312", "Zander", "M", ["Greek"], ["Defender of the people"], 2, [], 250, "stable"),
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
