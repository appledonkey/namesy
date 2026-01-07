import path from "node:path";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client";

const dbPath = path.join(process.cwd(), "prisma", "names.db");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` });
const prisma = new PrismaClient({ adapter });

// SSA Top Baby Names Data (2023 rankings)
// Format: [name, gender, rank, origins[], meanings[]]
type NameEntry = [string, "M" | "F", number, string[], string[]];

const NAMES_DATA: NameEntry[] = [
  // Top Female Names
  ["Olivia", "F", 1, ["Latin"], ["Olive tree"]],
  ["Emma", "F", 2, ["Germanic"], ["Whole", "Universal"]],
  ["Charlotte", "F", 3, ["French", "Germanic"], ["Free woman", "Petite"]],
  ["Amelia", "F", 4, ["Germanic"], ["Industrious", "Striving"]],
  ["Sophia", "F", 5, ["Greek"], ["Wisdom"]],
  ["Mia", "F", 6, ["Scandinavian", "Latin"], ["Mine", "Beloved"]],
  ["Isabella", "F", 7, ["Hebrew", "Italian"], ["Devoted to God"]],
  ["Ava", "F", 8, ["Latin", "Hebrew"], ["Life", "Bird-like"]],
  ["Evelyn", "F", 9, ["English"], ["Wished for child"]],
  ["Luna", "F", 10, ["Latin"], ["Moon"]],
  ["Harper", "F", 11, ["English"], ["Harp player"]],
  ["Sofia", "F", 12, ["Greek"], ["Wisdom"]],
  ["Camila", "F", 13, ["Latin"], ["Young ceremonial attendant"]],
  ["Eleanor", "F", 14, ["Greek", "French"], ["Bright, shining one"]],
  ["Elizabeth", "F", 15, ["Hebrew"], ["My God is an oath"]],
  ["Violet", "F", 16, ["Latin"], ["Purple flower"]],
  ["Scarlett", "F", 17, ["English"], ["Red", "Scarlet"]],
  ["Emily", "F", 18, ["Latin"], ["Rival", "Industrious"]],
  ["Hazel", "F", 19, ["English"], ["Hazelnut tree"]],
  ["Lily", "F", 20, ["English"], ["Lily flower", "Purity"]],
  ["Gianna", "F", 21, ["Italian"], ["God is gracious"]],
  ["Aurora", "F", 22, ["Latin"], ["Dawn"]],
  ["Penelope", "F", 23, ["Greek"], ["Weaver"]],
  ["Aria", "F", 24, ["Italian", "Hebrew"], ["Air", "Lioness"]],
  ["Nora", "F", 25, ["Irish", "Arabic"], ["Honor", "Light"]],
  ["Chloe", "F", 26, ["Greek"], ["Blooming", "Fertility"]],
  ["Ellie", "F", 27, ["English"], ["Bright shining one"]],
  ["Mila", "F", 28, ["Slavic"], ["Gracious", "Dear"]],
  ["Avery", "F", 29, ["English"], ["Ruler of elves"]],
  ["Layla", "F", 30, ["Arabic"], ["Night", "Dark beauty"]],
  ["Abigail", "F", 31, ["Hebrew"], ["Father's joy"]],
  ["Ella", "F", 32, ["Germanic"], ["All", "Fairy maiden"]],
  ["Riley", "F", 33, ["Irish"], ["Courageous"]],
  ["Zoey", "F", 34, ["Greek"], ["Life"]],
  ["Willow", "F", 35, ["English"], ["Willow tree"]],
  ["Ivy", "F", 36, ["English"], ["Ivy plant", "Faithfulness"]],
  ["Grace", "F", 37, ["Latin"], ["Grace", "Elegance"]],
  ["Stella", "F", 38, ["Latin"], ["Star"]],
  ["Eliana", "F", 39, ["Hebrew"], ["My God has answered"]],
  ["Nova", "F", 40, ["Latin"], ["New"]],
  ["Madison", "F", 41, ["English"], ["Son of Maud"]],
  ["Isla", "F", 42, ["Scottish"], ["Island"]],
  ["Valentina", "F", 43, ["Latin"], ["Strong", "Healthy"]],
  ["Hannah", "F", 44, ["Hebrew"], ["Grace", "Favor"]],
  ["Everly", "F", 45, ["English"], ["From the boar meadow"]],
  ["Leah", "F", 46, ["Hebrew"], ["Weary", "Delicate"]],
  ["Naomi", "F", 47, ["Hebrew"], ["Pleasant", "Beautiful"]],
  ["Lucy", "F", 48, ["Latin"], ["Light"]],
  ["Victoria", "F", 49, ["Latin"], ["Victory"]],
  ["Paisley", "F", 50, ["Scottish"], ["Church", "Cemetery"]],
  ["Addison", "F", 51, ["English"], ["Son of Adam"]],
  ["Natalie", "F", 52, ["Latin"], ["Christmas Day", "Birth"]],
  ["Maya", "F", 53, ["Sanskrit", "Hebrew"], ["Illusion", "Water"]],
  ["Emilia", "F", 54, ["Latin"], ["Rival"]],
  ["Claire", "F", 55, ["French"], ["Clear", "Bright"]],
  ["Elena", "F", 56, ["Greek"], ["Shining light"]],
  ["Genesis", "F", 57, ["Greek"], ["Origin", "Beginning"]],
  ["Aaliyah", "F", 58, ["Arabic"], ["Exalted", "Sublime"]],
  ["Delilah", "F", 59, ["Hebrew"], ["Delicate"]],
  ["Sadie", "F", 60, ["Hebrew"], ["Princess"]],
  ["Aubrey", "F", 61, ["Germanic"], ["Elf ruler"]],
  ["Kennedy", "F", 62, ["Irish"], ["Helmeted chief"]],
  ["Josephine", "F", 63, ["Hebrew"], ["God will increase"]],
  ["Alice", "F", 64, ["Germanic"], ["Noble"]],
  ["Caroline", "F", 65, ["Germanic"], ["Free woman"]],
  ["Kinsley", "F", 66, ["English"], ["King's meadow"]],
  ["Cora", "F", 67, ["Greek"], ["Maiden"]],
  ["Ruby", "F", 68, ["Latin"], ["Red gemstone"]],
  ["Sophie", "F", 69, ["Greek"], ["Wisdom"]],
  ["Savannah", "F", 70, ["Spanish"], ["Treeless plain"]],
  ["Autumn", "F", 71, ["Latin"], ["Fall season"]],
  ["Hailey", "F", 72, ["English"], ["Hay meadow"]],
  ["Athena", "F", 73, ["Greek"], ["Goddess of wisdom"]],
  ["Brooklyn", "F", 74, ["English"], ["Broken land", "Pretty brook"]],
  ["Clara", "F", 75, ["Latin"], ["Clear", "Bright"]],
  ["Sarah", "F", 76, ["Hebrew"], ["Princess"]],
  ["Serenity", "F", 77, ["Latin"], ["Peaceful", "Calm"]],
  ["Madeline", "F", 78, ["Hebrew", "Greek"], ["Woman from Magdala"]],
  ["Audrey", "F", 79, ["English"], ["Noble strength"]],
  ["Rose", "F", 80, ["Latin"], ["Rose flower"]],
  ["Bella", "F", 81, ["Italian"], ["Beautiful"]],
  ["Skylar", "F", 82, ["Dutch"], ["Scholar"]],
  ["Julia", "F", 83, ["Latin"], ["Youthful"]],
  ["Vivian", "F", 84, ["Latin"], ["Alive"]],
  ["Liliana", "F", 85, ["Latin"], ["Lily"]],
  ["Quinn", "F", 86, ["Irish"], ["Wisdom", "Chief"]],
  ["Eva", "F", 87, ["Hebrew"], ["Life"]],
  ["Iris", "F", 88, ["Greek"], ["Rainbow"]],
  ["Madelyn", "F", 89, ["Hebrew"], ["Woman from Magdala"]],
  ["Maria", "F", 90, ["Hebrew", "Latin"], ["Sea of bitterness", "Beloved"]],
  ["Adelaide", "F", 91, ["Germanic"], ["Noble nature"]],
  ["Emery", "F", 92, ["Germanic"], ["Brave", "Powerful"]],
  ["Melody", "F", 93, ["Greek"], ["Song"]],
  ["Lydia", "F", 94, ["Greek"], ["From Lydia"]],
  ["Piper", "F", 95, ["English"], ["Pipe player"]],
  ["Margot", "F", 96, ["French"], ["Pearl"]],
  ["Eloise", "F", 97, ["French"], ["Healthy", "Wide"]],
  ["Adriana", "F", 98, ["Latin"], ["From Hadria"]],
  ["Jade", "F", 99, ["Spanish"], ["Jade stone"]],
  ["Georgia", "F", 100, ["Greek"], ["Farmer"]],

  // More Female Names (101-250)
  ["Brielle", "F", 101, ["French"], ["God is my strength"]],
  ["Lyla", "F", 102, ["Arabic"], ["Night"]],
  ["Sage", "F", 103, ["Latin"], ["Wise one"]],
  ["Daisy", "F", 104, ["English"], ["Day's eye flower"]],
  ["Anastasia", "F", 105, ["Greek"], ["Resurrection"]],
  ["Faith", "F", 106, ["English"], ["Faith", "Trust"]],
  ["Freya", "F", 107, ["Norse"], ["Noble woman"]],
  ["Londyn", "F", 108, ["English"], ["From London"]],
  ["Isabel", "F", 109, ["Hebrew"], ["Devoted to God"]],
  ["Summer", "F", 110, ["English"], ["Summer season"]],
  ["Esther", "F", 111, ["Persian"], ["Star"]],
  ["Ariana", "F", 112, ["Greek"], ["Most holy"]],
  ["Fiona", "F", 113, ["Irish"], ["White", "Fair"]],
  ["Eden", "F", 114, ["Hebrew"], ["Delight", "Paradise"]],
  ["Peyton", "F", 115, ["English"], ["Fighting man's estate"]],
  ["Catalina", "F", 116, ["Spanish"], ["Pure"]],
  ["Wren", "F", 117, ["English"], ["Small bird"]],
  ["Diana", "F", 118, ["Latin"], ["Divine", "Heavenly"]],
  ["Lucia", "F", 119, ["Latin"], ["Light"]],
  ["Hope", "F", 120, ["English"], ["Hope", "Expectation"]],
  ["Paige", "F", 121, ["English"], ["Young servant"]],
  ["Leilani", "F", 122, ["Hawaiian"], ["Heavenly flower"]],
  ["Sienna", "F", 123, ["Italian"], ["Reddish brown"]],
  ["Ariel", "F", 124, ["Hebrew"], ["Lion of God"]],
  ["Margaret", "F", 125, ["Greek"], ["Pearl"]],
  ["Amy", "F", 126, ["Latin"], ["Beloved"]],
  ["Gracie", "F", 127, ["Latin"], ["Grace"]],
  ["Mckenna", "F", 128, ["Irish"], ["Ascend"]],
  ["Juliette", "F", 129, ["French"], ["Youthful"]],
  ["Ada", "F", 130, ["Germanic"], ["Noble"]],
  ["June", "F", 131, ["Latin"], ["Young"]],
  ["Amara", "F", 132, ["Arabic", "African"], ["Eternal", "Grace"]],
  ["Finley", "F", 133, ["Irish"], ["Fair warrior"]],
  ["Molly", "F", 134, ["Hebrew"], ["Sea of bitterness"]],
  ["Rosalie", "F", 135, ["French"], ["Rose"]],
  ["Brooke", "F", 136, ["English"], ["Small stream"]],
  ["Zara", "F", 137, ["Arabic"], ["Princess", "Blooming flower"]],
  ["Gemma", "F", 138, ["Italian"], ["Gem", "Jewel"]],
  ["Oakley", "F", 139, ["English"], ["Oak tree meadow"]],
  ["Maeve", "F", 140, ["Irish"], ["Intoxicating"]],
  ["Mya", "F", 141, ["Greek"], ["Great"]],
  ["Morgan", "F", 142, ["Welsh"], ["Sea-born"]],
  ["Harley", "F", 143, ["English"], ["Hare meadow"]],
  ["Juliana", "F", 144, ["Latin"], ["Youthful"]],
  ["Reese", "F", 145, ["Welsh"], ["Enthusiasm"]],
  ["Presley", "F", 146, ["English"], ["Priest's meadow"]],
  ["Alina", "F", 147, ["Greek"], ["Bright", "Beautiful"]],
  ["Gabriella", "F", 148, ["Hebrew"], ["God is my strength"]],
  ["Remi", "F", 149, ["French"], ["Oarsman"]],
  ["Kaia", "F", 150, ["Hawaiian", "Greek"], ["Sea", "Pure"]],
  ["Teagan", "F", 151, ["Irish"], ["Little poet"]],
  ["Nyla", "F", 152, ["Arabic"], ["Winner"]],
  ["Parker", "F", 153, ["English"], ["Park keeper"]],
  ["Nicole", "F", 154, ["Greek"], ["Victory of the people"]],
  ["Lila", "F", 155, ["Arabic", "Sanskrit"], ["Night", "Play"]],
  ["Camille", "F", 156, ["French"], ["Young ceremonial attendant"]],
  ["Lilah", "F", 157, ["Arabic"], ["Night"]],
  ["River", "F", 158, ["English"], ["Flowing water"]],
  ["Alaina", "F", 159, ["Irish"], ["Bright"]],
  ["Olive", "F", 160, ["Latin"], ["Olive tree"]],
  ["Ximena", "F", 161, ["Spanish"], ["One who hears"]],
  ["Daniela", "F", 162, ["Hebrew"], ["God is my judge"]],
  ["Lena", "F", 163, ["Greek"], ["Light"]],
  ["Charlie", "F", 164, ["Germanic"], ["Free woman"]],
  ["Brianna", "F", 165, ["Irish"], ["Strong"]],
  ["Journey", "F", 166, ["English"], ["Travel"]],
  ["Brynn", "F", 167, ["Welsh"], ["Hill"]],
  ["Alexandra", "F", 168, ["Greek"], ["Defender of mankind"]],
  ["Sara", "F", 169, ["Hebrew"], ["Princess"]],
  ["Adaline", "F", 170, ["Germanic"], ["Noble"]],
  ["Destiny", "F", 171, ["English"], ["Fate"]],
  ["Alana", "F", 172, ["Irish"], ["Harmony"]],
  ["Vera", "F", 173, ["Russian", "Latin"], ["Faith", "True"]],
  ["Ember", "F", 174, ["English"], ["Spark"]],
  ["Reagan", "F", 175, ["Irish"], ["Little ruler"]],
  ["Eliza", "F", 176, ["Hebrew"], ["Pledged to God"]],
  ["Natalia", "F", 177, ["Latin"], ["Christmas Day"]],
  ["Ana", "F", 178, ["Hebrew"], ["Grace"]],
  ["Adalynn", "F", 179, ["Germanic"], ["Noble"]],
  ["Rylee", "F", 180, ["Irish"], ["Courageous"]],
  ["Michelle", "F", 181, ["Hebrew"], ["Who is like God"]],
  ["Rebecca", "F", 182, ["Hebrew"], ["To bind"]],
  ["Mckenzie", "F", 183, ["Irish"], ["Son of the wise ruler"]],
  ["Vanessa", "F", 184, ["Greek"], ["Butterfly"]],
  ["Crystal", "F", 185, ["Greek"], ["Clear", "Ice"]],
  ["Kimberly", "F", 186, ["English"], ["From the meadow of the royal fortress"]],
  ["Valeria", "F", 187, ["Latin"], ["Strong"]],
  ["Arya", "F", 188, ["Sanskrit"], ["Noble"]],
  ["Ayla", "F", 189, ["Hebrew", "Turkish"], ["Oak tree", "Moonlight"]],
  ["Rachel", "F", 190, ["Hebrew"], ["Ewe"]],
  ["Blakely", "F", 191, ["English"], ["Dark meadow"]],
  ["Lauren", "F", 192, ["Latin"], ["Laurel"]],
  ["Andrea", "F", 193, ["Greek"], ["Brave", "Manly"]],
  ["Elise", "F", 194, ["French"], ["Pledged to God"]],
  ["Miriam", "F", 195, ["Hebrew"], ["Wished-for child"]],
  ["Samantha", "F", 196, ["Hebrew"], ["Listener"]],
  ["Sloane", "F", 197, ["Irish"], ["Warrior"]],
  ["Arabella", "F", 198, ["Latin"], ["Yielding to prayer"]],
  ["Mackenzie", "F", 199, ["Irish"], ["Son of the wise ruler"]],
  ["Taylor", "F", 200, ["English"], ["Tailor"]],
  ["Clarissa", "F", 201, ["Latin"], ["Bright", "Clear"]],
  ["Hayden", "F", 202, ["English"], ["Hay valley"]],
  ["Ophelia", "F", 203, ["Greek"], ["Help"]],
  ["Alicia", "F", 204, ["Germanic"], ["Noble"]],
  ["Raelynn", "F", 205, ["American"], ["Ewe with grace"]],
  ["Catherine", "F", 206, ["Greek"], ["Pure"]],
  ["Serena", "F", 207, ["Latin"], ["Tranquil", "Calm"]],
  ["Nadia", "F", 208, ["Slavic"], ["Hope"]],
  ["Ruth", "F", 209, ["Hebrew"], ["Compassionate friend"]],
  ["Genevieve", "F", 210, ["French"], ["Woman of the people"]],
  ["Harmony", "F", 211, ["Latin"], ["Unity"]],
  ["Heidi", "F", 212, ["Germanic"], ["Noble one"]],
  ["Khloe", "F", 213, ["Greek"], ["Blooming"]],
  ["Leila", "F", 214, ["Arabic"], ["Night"]],
  ["Maggie", "F", 215, ["Greek"], ["Pearl"]],
  ["Selena", "F", 216, ["Greek"], ["Moon"]],
  ["Carmen", "F", 217, ["Hebrew", "Spanish"], ["Garden", "Song"]],
  ["Paris", "F", 218, ["Greek"], ["From Paris"]],
  ["Nina", "F", 219, ["Spanish"], ["Little girl"]],
  ["Elaina", "F", 220, ["Greek"], ["Shining light"]],
  ["Aspen", "F", 221, ["English"], ["Aspen tree"]],
  ["Julianna", "F", 222, ["Latin"], ["Youthful"]],
  ["Mabel", "F", 223, ["Latin"], ["Lovable"]],
  ["Phoebe", "F", 224, ["Greek"], ["Bright", "Pure"]],
  ["Tessa", "F", 225, ["Greek"], ["Harvester"]],
  ["Aliyah", "F", 226, ["Arabic"], ["Exalted"]],
  ["Alexis", "F", 227, ["Greek"], ["Defender"]],
  ["Jessica", "F", 228, ["Hebrew"], ["God beholds"]],
  ["Lola", "F", 229, ["Spanish"], ["Lady of sorrows"]],
  ["Winter", "F", 230, ["English"], ["Winter season"]],
  ["Chelsea", "F", 231, ["English"], ["Chalk landing place"]],
  ["Angela", "F", 232, ["Greek"], ["Messenger of God"]],
  ["Daniella", "F", 233, ["Hebrew"], ["God is my judge"]],
  ["Esmeralda", "F", 234, ["Spanish"], ["Emerald"]],
  ["Callie", "F", 235, ["Greek"], ["Beautiful"]],
  ["Sylvia", "F", 236, ["Latin"], ["Forest"]],
  ["Clarissa", "F", 237, ["Latin"], ["Bright", "Famous"]],
  ["Millie", "F", 238, ["Germanic"], ["Gentle strength"]],
  ["Giselle", "F", 239, ["Germanic"], ["Pledge"]],
  ["Dakota", "F", 240, ["Native American"], ["Friendly one"]],
  ["Keira", "F", 241, ["Irish"], ["Dark-haired"]],
  ["Sutton", "F", 242, ["English"], ["Southern settlement"]],
  ["Francesca", "F", 243, ["Italian"], ["From France"]],
  ["Amira", "F", 244, ["Arabic"], ["Princess"]],
  ["Beatrice", "F", 245, ["Latin"], ["She who brings happiness"]],
  ["Celeste", "F", 246, ["Latin"], ["Heavenly"]],
  ["Thea", "F", 247, ["Greek"], ["Goddess"]],
  ["Elsa", "F", 248, ["Germanic"], ["Noble"]],
  ["Helena", "F", 249, ["Greek"], ["Bright"]],
  ["Joanna", "F", 250, ["Hebrew"], ["God is gracious"]],

  // Top Male Names
  ["Liam", "M", 1, ["Irish"], ["Strong-willed warrior"]],
  ["Noah", "M", 2, ["Hebrew"], ["Rest", "Comfort"]],
  ["Oliver", "M", 3, ["Latin", "French"], ["Olive tree"]],
  ["James", "M", 4, ["Hebrew"], ["Supplanter"]],
  ["Elijah", "M", 5, ["Hebrew"], ["My God is Yahweh"]],
  ["William", "M", 6, ["Germanic"], ["Resolute protector"]],
  ["Henry", "M", 7, ["Germanic"], ["Ruler of the home"]],
  ["Lucas", "M", 8, ["Greek"], ["Bringer of light"]],
  ["Benjamin", "M", 9, ["Hebrew"], ["Son of the right hand"]],
  ["Theodore", "M", 10, ["Greek"], ["Gift of God"]],
  ["Jack", "M", 11, ["English"], ["God is gracious"]],
  ["Levi", "M", 12, ["Hebrew"], ["Joined", "Attached"]],
  ["Alexander", "M", 13, ["Greek"], ["Defender of the people"]],
  ["Mason", "M", 14, ["English"], ["Stone worker"]],
  ["Ethan", "M", 15, ["Hebrew"], ["Strong", "Firm"]],
  ["Sebastian", "M", 16, ["Greek"], ["Venerable"]],
  ["Daniel", "M", 17, ["Hebrew"], ["God is my judge"]],
  ["Michael", "M", 18, ["Hebrew"], ["Who is like God"]],
  ["Matthew", "M", 19, ["Hebrew"], ["Gift of God"]],
  ["Owen", "M", 20, ["Welsh"], ["Young warrior"]],
  ["Aiden", "M", 21, ["Irish"], ["Little fire"]],
  ["Jackson", "M", 22, ["English"], ["Son of Jack"]],
  ["Samuel", "M", 23, ["Hebrew"], ["Heard by God"]],
  ["Logan", "M", 24, ["Scottish"], ["Little hollow"]],
  ["Joseph", "M", 25, ["Hebrew"], ["He will add"]],
  ["Asher", "M", 26, ["Hebrew"], ["Happy", "Blessed"]],
  ["David", "M", 27, ["Hebrew"], ["Beloved"]],
  ["Leo", "M", 28, ["Latin"], ["Lion"]],
  ["John", "M", 29, ["Hebrew"], ["God is gracious"]],
  ["Luke", "M", 30, ["Greek"], ["Light-giving"]],
  ["Julian", "M", 31, ["Latin"], ["Youthful"]],
  ["Gabriel", "M", 32, ["Hebrew"], ["God is my strength"]],
  ["Anthony", "M", 33, ["Latin"], ["Priceless one"]],
  ["Isaac", "M", 34, ["Hebrew"], ["He will laugh"]],
  ["Lincoln", "M", 35, ["English"], ["Town by the pool"]],
  ["Hudson", "M", 36, ["English"], ["Son of Hugh"]],
  ["Wyatt", "M", 37, ["English"], ["Brave in war"]],
  ["Grayson", "M", 38, ["English"], ["Son of the gray-haired one"]],
  ["Eli", "M", 39, ["Hebrew"], ["Ascended", "My God"]],
  ["Carter", "M", 40, ["English"], ["Cart driver"]],
  ["Christopher", "M", 41, ["Greek"], ["Bearer of Christ"]],
  ["Jayden", "M", 42, ["American"], ["Thankful"]],
  ["Dylan", "M", 43, ["Welsh"], ["Son of the sea"]],
  ["Isaiah", "M", 44, ["Hebrew"], ["Salvation of the Lord"]],
  ["Andrew", "M", 45, ["Greek"], ["Manly", "Brave"]],
  ["Joshua", "M", 46, ["Hebrew"], ["God is salvation"]],
  ["Caleb", "M", 47, ["Hebrew"], ["Faithful", "Devotion"]],
  ["Nathan", "M", 48, ["Hebrew"], ["He gave"]],
  ["Maverick", "M", 49, ["American"], ["Independent"]],
  ["Josiah", "M", 50, ["Hebrew"], ["God supports"]],
  ["Thomas", "M", 51, ["Aramaic"], ["Twin"]],
  ["Charles", "M", 52, ["Germanic"], ["Free man"]],
  ["Ezra", "M", 53, ["Hebrew"], ["Help"]],
  ["Miles", "M", 54, ["Latin"], ["Soldier"]],
  ["Jaxon", "M", 55, ["American"], ["Son of Jack"]],
  ["Adrian", "M", 56, ["Latin"], ["From Hadria"]],
  ["Nolan", "M", 57, ["Irish"], ["Champion"]],
  ["Cameron", "M", 58, ["Scottish"], ["Crooked nose"]],
  ["Colton", "M", 59, ["English"], ["From the coal town"]],
  ["Aaron", "M", 60, ["Hebrew"], ["High mountain"]],
  ["Carson", "M", 61, ["Scottish"], ["Son of the marsh-dwellers"]],
  ["Roman", "M", 62, ["Latin"], ["Citizen of Rome"]],
  ["Greyson", "M", 63, ["English"], ["Son of the gray-haired one"]],
  ["Ryan", "M", 64, ["Irish"], ["Little king"]],
  ["Jeremiah", "M", 65, ["Hebrew"], ["God will exalt"]],
  ["Easton", "M", 66, ["English"], ["East-facing place"]],
  ["Cooper", "M", 67, ["English"], ["Barrel maker"]],
  ["Ian", "M", 68, ["Scottish"], ["God is gracious"]],
  ["Landon", "M", 69, ["English"], ["Long hill"]],
  ["Axel", "M", 70, ["Scandinavian"], ["Father of peace"]],
  ["Brooks", "M", 71, ["English"], ["Of the brook"]],
  ["Connor", "M", 72, ["Irish"], ["Lover of hounds"]],
  ["Christian", "M", 73, ["Latin"], ["Follower of Christ"]],
  ["Beau", "M", 74, ["French"], ["Handsome"]],
  ["Robert", "M", 75, ["Germanic"], ["Bright fame"]],
  ["Jace", "M", 76, ["Greek"], ["Healer"]],
  ["Everett", "M", 77, ["English"], ["Brave as a wild boar"]],
  ["Angel", "M", 78, ["Greek"], ["Messenger"]],
  ["Parker", "M", 79, ["English"], ["Park keeper"]],
  ["Jordan", "M", 80, ["Hebrew"], ["To flow down"]],
  ["Wesley", "M", 81, ["English"], ["Western meadow"]],
  ["Bennett", "M", 82, ["Latin"], ["Blessed"]],
  ["Weston", "M", 83, ["English"], ["Western town"]],
  ["Dominic", "M", 84, ["Latin"], ["Of the Lord"]],
  ["Waylon", "M", 85, ["English"], ["Land beside the road"]],
  ["Austin", "M", 86, ["Latin"], ["Great", "Magnificent"]],
  ["Micah", "M", 87, ["Hebrew"], ["Who is like God"]],
  ["Nicholas", "M", 88, ["Greek"], ["Victory of the people"]],
  ["Elias", "M", 89, ["Greek"], ["The Lord is my God"]],
  ["Silas", "M", 90, ["Latin"], ["Of the forest"]],
  ["Kai", "M", 91, ["Hawaiian", "Japanese"], ["Sea", "Forgiveness"]],
  ["Vincent", "M", 92, ["Latin"], ["Conquering"]],
  ["Declan", "M", 93, ["Irish"], ["Full of goodness"]],
  ["Zachary", "M", 94, ["Hebrew"], ["God remembers"]],
  ["Hunter", "M", 95, ["English"], ["One who hunts"]],
  ["Max", "M", 96, ["Latin"], ["Greatest"]],
  ["Harrison", "M", 97, ["English"], ["Son of Harry"]],
  ["George", "M", 98, ["Greek"], ["Farmer"]],
  ["Jonathan", "M", 99, ["Hebrew"], ["God has given"]],
  ["Nathaniel", "M", 100, ["Hebrew"], ["Gift of God"]],

  // More Male Names (101-250)
  ["Felix", "M", 101, ["Latin"], ["Happy", "Fortunate"]],
  ["Sawyer", "M", 102, ["English"], ["Woodcutter"]],
  ["Adam", "M", 103, ["Hebrew"], ["Man", "Earth"]],
  ["Emmett", "M", 104, ["Germanic"], ["Universal"]],
  ["Chase", "M", 105, ["English"], ["Hunter"]],
  ["Ryder", "M", 106, ["English"], ["Horseman"]],
  ["Rowan", "M", 107, ["Irish"], ["Little red-haired one"]],
  ["Myles", "M", 108, ["Latin"], ["Soldier"]],
  ["Kingston", "M", 109, ["English"], ["King's town"]],
  ["Jason", "M", 110, ["Greek"], ["Healer"]],
  ["Edward", "M", 111, ["English"], ["Wealthy guardian"]],
  ["Finn", "M", 112, ["Irish"], ["Fair"]],
  ["Xander", "M", 113, ["Greek"], ["Defender of the people"]],
  ["Jasper", "M", 114, ["Persian"], ["Treasurer"]],
  ["Jesse", "M", 115, ["Hebrew"], ["Gift"]],
  ["Tyler", "M", 116, ["English"], ["Tile maker"]],
  ["Milo", "M", 117, ["Germanic"], ["Gracious"]],
  ["Damian", "M", 118, ["Greek"], ["To tame"]],
  ["Rhett", "M", 119, ["Welsh"], ["Enthusiastic"]],
  ["Legend", "M", 120, ["English"], ["Story handed down"]],
  ["Eric", "M", 121, ["Norse"], ["Eternal ruler"]],
  ["Patrick", "M", 122, ["Latin"], ["Noble"]],
  ["Preston", "M", 123, ["English"], ["Priest's town"]],
  ["Graham", "M", 124, ["English"], ["Gravelly homestead"]],
  ["Jameson", "M", 125, ["English"], ["Son of James"]],
  ["Tucker", "M", 126, ["English"], ["Fabric pleater"]],
  ["Beckett", "M", 127, ["English"], ["Beehive"]],
  ["Elliot", "M", 128, ["Hebrew"], ["The Lord is my God"]],
  ["Derek", "M", 129, ["Germanic"], ["People ruler"]],
  ["Oscar", "M", 130, ["Irish"], ["Friend of deer"]],
  ["Victor", "M", 131, ["Latin"], ["Winner", "Conqueror"]],
  ["Grant", "M", 132, ["Scottish"], ["Large"]],
  ["Bryson", "M", 133, ["Welsh"], ["Son of Brice"]],
  ["Abel", "M", 134, ["Hebrew"], ["Breath"]],
  ["Maxwell", "M", 135, ["Scottish"], ["Great stream"]],
  ["Joel", "M", 136, ["Hebrew"], ["Yahweh is God"]],
  ["Timothy", "M", 137, ["Greek"], ["Honoring God"]],
  ["Richard", "M", 138, ["Germanic"], ["Brave ruler"]],
  ["Griffin", "M", 139, ["Welsh"], ["Strong lord"]],
  ["Avery", "M", 140, ["English"], ["Ruler of elves"]],
  ["Peter", "M", 141, ["Greek"], ["Rock"]],
  ["Knox", "M", 142, ["Scottish"], ["Round hill"]],
  ["Theo", "M", 143, ["Greek"], ["Divine gift"]],
  ["Kenneth", "M", 144, ["Scottish"], ["Handsome"]],
  ["Marcus", "M", 145, ["Latin"], ["Warlike"]],
  ["Archer", "M", 146, ["English"], ["Bowman"]],
  ["Alan", "M", 147, ["Celtic"], ["Handsome"]],
  ["Calvin", "M", 148, ["Latin"], ["Bald"]],
  ["Hayes", "M", 149, ["English"], ["Hedged area"]],
  ["Louis", "M", 150, ["French"], ["Famous warrior"]],
  ["August", "M", 151, ["Latin"], ["Great", "Magnificent"]],
  ["Phoenix", "M", 152, ["Greek"], ["Dark red"]],
  ["Mark", "M", 153, ["Latin"], ["Warlike"]],
  ["Dean", "M", 154, ["English"], ["Valley"]],
  ["Simon", "M", 155, ["Hebrew"], ["He has heard"]],
  ["Colin", "M", 156, ["Scottish"], ["Young creature"]],
  ["Riley", "M", 157, ["Irish"], ["Courageous"]],
  ["Spencer", "M", 158, ["English"], ["House steward"]],
  ["Paul", "M", 159, ["Latin"], ["Small"]],
  ["Jeremy", "M", 160, ["Hebrew"], ["God will exalt"]],
  ["Walter", "M", 161, ["Germanic"], ["Army ruler"]],
  ["Emmitt", "M", 162, ["Germanic"], ["Universal"]],
  ["Anderson", "M", 163, ["English"], ["Son of Andrew"]],
  ["Malachi", "M", 164, ["Hebrew"], ["Messenger of God"]],
  ["Ivan", "M", 165, ["Russian"], ["God is gracious"]],
  ["Charlie", "M", 166, ["Germanic"], ["Free man"]],
  ["Caden", "M", 167, ["American"], ["Spirit of battle"]],
  ["Brady", "M", 168, ["Irish"], ["Spirited one"]],
  ["Blake", "M", 169, ["English"], ["Dark", "Fair"]],
  ["Travis", "M", 170, ["French"], ["To cross over"]],
  ["Martin", "M", 171, ["Latin"], ["Warrior"]],
  ["Tate", "M", 172, ["English"], ["Cheerful"]],
  ["Gregory", "M", 173, ["Greek"], ["Watchful"]],
  ["Sean", "M", 174, ["Irish"], ["God is gracious"]],
  ["Atlas", "M", 175, ["Greek"], ["Bearer of the heavens"]],
  ["Raymond", "M", 176, ["Germanic"], ["Wise protector"]],
  ["Omar", "M", 177, ["Arabic"], ["Flourishing"]],
  ["Leon", "M", 178, ["Greek"], ["Lion"]],
  ["Carlos", "M", 179, ["Spanish"], ["Free man"]],
  ["Francisco", "M", 180, ["Spanish"], ["From France"]],
  ["Kyrie", "M", 181, ["Greek"], ["Lord"]],
  ["Arthur", "M", 182, ["Celtic"], ["Bear"]],
  ["Holden", "M", 183, ["English"], ["Hollow valley"]],
  ["Arlo", "M", 184, ["Spanish"], ["Barberry tree"]],
  ["Barrett", "M", 185, ["Germanic"], ["Bear strength"]],
  ["Ellis", "M", 186, ["Welsh"], ["Benevolent"]],
  ["Rafael", "M", 187, ["Hebrew"], ["God has healed"]],
  ["Nash", "M", 188, ["English"], ["By the ash tree"]],
  ["Jake", "M", 189, ["Hebrew"], ["Supplanter"]],
  ["Jorge", "M", 190, ["Spanish"], ["Farmer"]],
  ["Steven", "M", 191, ["Greek"], ["Crown"]],
  ["Alex", "M", 192, ["Greek"], ["Defender of the people"]],
  ["Dallas", "M", 193, ["Scottish"], ["From the waterfall"]],
  ["Gael", "M", 194, ["Irish"], ["Gaelic"]],
  ["Maximus", "M", 195, ["Latin"], ["Greatest"]],
  ["Sullivan", "M", 196, ["Irish"], ["Dark eyes"]],
  ["Lorenzo", "M", 197, ["Italian"], ["From Laurentum"]],
  ["Cole", "M", 198, ["English"], ["Coal black"]],
  ["Antonio", "M", 199, ["Latin"], ["Priceless"]],
  ["Dawson", "M", 200, ["English"], ["Son of David"]],
  ["Jude", "M", 201, ["Latin"], ["Praised"]],
  ["Shane", "M", 202, ["Irish"], ["God is gracious"]],
  ["Bryan", "M", 203, ["Celtic"], ["Strong", "Virtuous"]],
  ["River", "M", 204, ["English"], ["Flowing water"]],
  ["Sterling", "M", 205, ["English"], ["Genuine", "Pure"]],
  ["Kaden", "M", 206, ["American"], ["Fighter"]],
  ["Andre", "M", 207, ["French"], ["Manly"]],
  ["Tobias", "M", 208, ["Hebrew"], ["God is good"]],
  ["Cruz", "M", 209, ["Spanish"], ["Cross"]],
  ["Prince", "M", 210, ["Latin"], ["Chief", "Prince"]],
  ["Orion", "M", 211, ["Greek"], ["Hunter"]],
  ["Emmanuel", "M", 212, ["Hebrew"], ["God is with us"]],
  ["Zion", "M", 213, ["Hebrew"], ["Highest point"]],
  ["Sergio", "M", 214, ["Latin"], ["Servant"]],
  ["Iker", "M", 215, ["Basque"], ["Visitation"]],
  ["Karter", "M", 216, ["American"], ["Cart driver"]],
  ["Marshall", "M", 217, ["French"], ["Horse keeper"]],
  ["Noel", "M", 218, ["French"], ["Christmas"]],
  ["Tanner", "M", 219, ["English"], ["Leather maker"]],
  ["Russell", "M", 220, ["French"], ["Little red"]],
  ["Clark", "M", 221, ["English"], ["Scholar", "Clerk"]],
  ["Francis", "M", 222, ["Latin"], ["From France"]],
  ["Harvey", "M", 223, ["Breton"], ["Battle worthy"]],
  ["Warren", "M", 224, ["Germanic"], ["Park warden"]],
  ["Fabian", "M", 225, ["Latin"], ["Bean grower"]],
  ["Hugo", "M", 226, ["Germanic"], ["Mind", "Intellect"]],
  ["Lukas", "M", 227, ["Greek"], ["Light"]],
  ["Matteo", "M", 228, ["Italian"], ["Gift of God"]],
  ["Walker", "M", 229, ["English"], ["Fuller of cloth"]],
  ["Chance", "M", 230, ["English"], ["Good fortune"]],
  ["Clay", "M", 231, ["English"], ["Clay worker"]],
  ["Zander", "M", 232, ["Greek"], ["Defender of people"]],
  ["Otto", "M", 233, ["Germanic"], ["Wealth"]],
  ["Lane", "M", 234, ["English"], ["Pathway"]],
  ["Hendrix", "M", 235, ["Germanic"], ["Estate ruler"]],
  ["Lawson", "M", 236, ["English"], ["Son of Lawrence"]],
  ["Finley", "M", 237, ["Irish"], ["Fair warrior"]],
  ["Marco", "M", 238, ["Italian"], ["Warlike"]],
  ["Brock", "M", 239, ["English"], ["Badger"]],
  ["Jayce", "M", 240, ["Greek"], ["Healer"]],
  ["Ronan", "M", 241, ["Irish"], ["Little seal"]],
  ["Malcolm", "M", 242, ["Scottish"], ["Devotee of Saint Columba"]],
  ["Romeo", "M", 243, ["Italian"], ["From Rome"]],
  ["Cash", "M", 244, ["Latin"], ["Hollow"]],
  ["Cody", "M", 245, ["Irish"], ["Helpful"]],
  ["Denver", "M", 246, ["English"], ["Green valley"]],
  ["Crew", "M", 247, ["English"], ["Group of people"]],
  ["Cayden", "M", 248, ["American"], ["Fighter"]],
  ["Callum", "M", 249, ["Scottish"], ["Dove"]],
  ["Bowen", "M", 250, ["Welsh"], ["Son of Owen"]],
];

// Common nicknames mapping
const NICKNAME_MAP: Record<string, string[]> = {
  "William": ["Will", "Bill", "Billy", "Liam"],
  "James": ["Jim", "Jimmy", "Jamie"],
  "Alexander": ["Alex", "Xander", "Lex"],
  "Elizabeth": ["Liz", "Beth", "Lizzy", "Eliza", "Ellie"],
  "Katherine": ["Kate", "Katie", "Kat", "Kathy"],
  "Benjamin": ["Ben", "Benny", "Benji"],
  "Michael": ["Mike", "Mikey"],
  "Christopher": ["Chris", "Topher"],
  "Jonathan": ["Jon", "Johnny", "Nate"],
  "Nicholas": ["Nick", "Nicky"],
  "Samantha": ["Sam", "Sammy"],
  "Rebecca": ["Becca", "Becky"],
  "Jennifer": ["Jen", "Jenny"],
  "Margaret": ["Maggie", "Meg", "Peggy"],
  "Alexandra": ["Alex", "Lexi", "Xandra"],
  "Theodore": ["Theo", "Ted", "Teddy"],
  "Matthew": ["Matt", "Matty"],
  "Andrew": ["Andy", "Drew"],
  "Daniel": ["Dan", "Danny"],
  "Joseph": ["Joe", "Joey"],
  "Thomas": ["Tom", "Tommy"],
  "Edward": ["Ed", "Eddie", "Ted", "Teddy"],
  "Robert": ["Rob", "Bob", "Bobby", "Robbie"],
  "Richard": ["Rich", "Rick", "Dick"],
  "Anthony": ["Tony"],
  "Victoria": ["Vicky", "Tori"],
  "Olivia": ["Liv", "Livvy"],
  "Isabella": ["Izzy", "Bella", "Izzie"],
  "Sophia": ["Sophie"],
  "Charlotte": ["Charlie", "Lottie"],
  "Penelope": ["Penny", "Nellie"],
  "Abigail": ["Abby", "Gail"],
  "Natalie": ["Nat", "Natty"],
  "Josephine": ["Jo", "Josie"],
  "Caroline": ["Carrie", "Carol"],
  "Madeline": ["Maddie", "Maddy"],
  "Gabriella": ["Gabby", "Ella", "Brie"],
  "Valentina": ["Val", "Tina"],
  "Eleanor": ["Ellie", "Nell", "Nora"],
  "Sebastian": ["Seb", "Bastian"],
  "Zachary": ["Zach", "Zack"],
  "Timothy": ["Tim", "Timmy"],
  "Gregory": ["Greg"],
  "Kenneth": ["Ken", "Kenny"],
  "Patrick": ["Pat", "Paddy"],
  "Cameron": ["Cam"],
  "Harrison": ["Harry"],
  "Frederick": ["Fred", "Freddy"],
  "Nathaniel": ["Nate", "Nathan"],
  "Amelia": ["Amy", "Mia", "Millie"],
  "Evelyn": ["Eve", "Evie"],
  "Harper": ["Harp"],
  "Scarlett": ["Lettie"],
  "Madison": ["Maddy", "Maddie"],
  "Addison": ["Addy", "Addie"],
  "Mackenzie": ["Kenzie", "Mac"],
  "Savannah": ["Vanna", "Savvy"],
  "Brooklyn": ["Brooke"],
  "Genevieve": ["Gen", "Genny", "Viv"],
};

// Helper function to count syllables
function countSyllables(name: string): number {
  const word = name.toLowerCase();
  if (word.length <= 3) return 1;

  // Count vowel groups
  const vowels = "aeiouy";
  let count = 0;
  let prevWasVowel = false;

  for (const char of word) {
    const isVowel = vowels.includes(char);
    if (isVowel && !prevWasVowel) {
      count++;
    }
    prevWasVowel = isVowel;
  }

  // Adjust for silent e
  if (word.endsWith("e") && count > 1) {
    count--;
  }

  // Adjust for -le endings
  if (word.endsWith("le") && word.length > 2 && !vowels.includes(word[word.length - 3])) {
    count++;
  }

  return Math.max(1, count);
}

// Helper to generate phonetic representation
function generatePhonetic(name: string): string {
  let phonetic = name.toUpperCase();

  // Common phonetic replacements
  const replacements: [RegExp, string][] = [
    [/PH/g, "F"],
    [/GH/g, ""],
    [/KN/g, "N"],
    [/WR/g, "R"],
    [/MB$/g, "M"],
    [/CK/g, "K"],
    [/SH/g, "SH"],
    [/CH/g, "CH"],
    [/TH/g, "TH"],
  ];

  for (const [pattern, replacement] of replacements) {
    phonetic = phonetic.replace(pattern, replacement);
  }

  return phonetic;
}

async function main() {
  console.log("Starting database seed...");

  // Clear existing data
  console.log("Clearing existing data...");
  await prisma.nickname.deleteMany();
  await prisma.meaning.deleteMany();
  await prisma.nameOrigin.deleteMany();
  await prisma.alternateSpelling.deleteMany();
  await prisma.popularityHistory.deleteMany();
  await prisma.namesake.deleteMany();
  await prisma.name.deleteMany();
  await prisma.origin.deleteMany();

  // Create origins first
  console.log("Creating origins...");
  const uniqueOrigins = new Set<string>();
  for (const entry of NAMES_DATA) {
    for (const origin of entry[3]) {
      uniqueOrigins.add(origin);
    }
  }

  const originMap = new Map<string, string>();
  for (const originName of uniqueOrigins) {
    const origin = await prisma.origin.create({
      data: { name: originName }
    });
    originMap.set(originName, origin.id);
  }
  console.log(`Created ${originMap.size} origins`);

  // Deduplicate names (keep first occurrence)
  const seenNames = new Set<string>();
  const uniqueNames: NameEntry[] = [];
  for (const entry of NAMES_DATA) {
    if (!seenNames.has(entry[0])) {
      seenNames.add(entry[0]);
      uniqueNames.push(entry);
    }
  }
  console.log(`Deduplicated ${NAMES_DATA.length - uniqueNames.length} duplicate names`);

  // Create names with relations
  console.log("Creating names...");
  let count = 0;

  for (const [name, gender, rank, origins, meanings] of uniqueNames) {
    const syllables = countSyllables(name);
    const phonetic = generatePhonetic(name);
    const nicknames = NICKNAME_MAP[name] || [];

    // Create the name
    const createdName = await prisma.name.create({
      data: {
        name,
        normalizedName: name.toLowerCase(),
        gender,
        syllables,
        phonetic,
        currentRank: rank,
        trend: rank <= 20 ? "stable" : rank <= 50 ? "rising" : "stable",
        origins: {
          create: origins.map(o => ({
            originId: originMap.get(o)!
          }))
        },
        meanings: {
          create: meanings.map(m => ({
            meaning: m,
            source: "Traditional"
          }))
        },
        nicknames: {
          create: nicknames.map(n => ({
            nickname: n
          }))
        },
        // Add popularity history for last 5 years
        popularityHistory: {
          create: [
            { year: 2023, rank: rank },
            { year: 2022, rank: Math.round(rank * (0.9 + Math.random() * 0.2)) },
            { year: 2021, rank: Math.round(rank * (0.85 + Math.random() * 0.3)) },
            { year: 2020, rank: Math.round(rank * (0.8 + Math.random() * 0.4)) },
            { year: 2019, rank: Math.round(rank * (0.75 + Math.random() * 0.5)) },
          ]
        }
      }
    });

    count++;
    if (count % 50 === 0) {
      console.log(`Created ${count} names...`);
    }
  }

  console.log(`\nSeed completed! Created ${count} names with origins, meanings, and nicknames.`);

  // Print summary
  const totalNames = await prisma.name.count();
  const femaleNames = await prisma.name.count({ where: { gender: "F" } });
  const maleNames = await prisma.name.count({ where: { gender: "M" } });
  const totalOrigins = await prisma.origin.count();
  const totalMeanings = await prisma.meaning.count();
  const totalNicknames = await prisma.nickname.count();

  console.log("\n=== Database Summary ===");
  console.log(`Total names: ${totalNames}`);
  console.log(`Female names: ${femaleNames}`);
  console.log(`Male names: ${maleNames}`);
  console.log(`Origins: ${totalOrigins}`);
  console.log(`Meanings: ${totalMeanings}`);
  console.log(`Nicknames: ${totalNicknames}`);
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
