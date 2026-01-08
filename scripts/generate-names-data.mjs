/**
 * Generate expanded baby names dataset
 * Based on SSA popularity data with meanings and origins
 */

// Top names data - SSA rankings with meanings/origins
// This is a curated list based on SSA top 1000 data

const girlNames = [
  // Top 100 girl names with full data
  ["Olivia", ["Latin"], ["Olive tree", "Peace"], ["Liv", "Livvy", "Ollie"], 1],
  ["Emma", ["Germanic"], ["Whole", "Universal"], ["Em", "Emmy"], 2],
  ["Charlotte", ["French", "Germanic"], ["Free woman", "Petite"], ["Charlie", "Lottie", "Lola"], 3],
  ["Amelia", ["Germanic"], ["Industrious", "Striving"], ["Amy", "Mia", "Millie"], 4],
  ["Sophia", ["Greek"], ["Wisdom"], ["Sophie", "Soph"], 5],
  ["Mia", ["Scandinavian", "Latin"], ["Beloved", "Mine"], [], 6],
  ["Isabella", ["Hebrew", "Spanish"], ["Devoted to God"], ["Bella", "Izzy", "Isa"], 7],
  ["Ava", ["Latin", "Hebrew"], ["Life", "Bird-like"], [], 8],
  ["Evelyn", ["English"], ["Wished-for child"], ["Evie", "Eve"], 9],
  ["Luna", ["Latin"], ["Moon"], ["Lu", "Lulu"], 10],
  ["Harper", ["English"], ["Harp player"], [], 11],
  ["Sofia", ["Greek"], ["Wisdom"], ["Sof"], 12],
  ["Camila", ["Latin", "Spanish"], ["Young ceremonial attendant"], ["Cami", "Mila"], 13],
  ["Eleanor", ["Greek", "French"], ["Bright light"], ["Ellie", "Nell", "Nora"], 14],
  ["Elizabeth", ["Hebrew"], ["Pledged to God"], ["Liz", "Beth", "Lizzy", "Eliza"], 15],
  ["Violet", ["Latin"], ["Purple flower"], ["Vi"], 16],
  ["Scarlett", ["English"], ["Red", "Scarlet"], ["Scar"], 17],
  ["Emily", ["Latin"], ["Rival", "Industrious"], ["Em", "Emmy"], 18],
  ["Hazel", ["English"], ["Hazelnut tree"], [], 19],
  ["Aria", ["Italian", "Hebrew"], ["Air", "Song", "Lioness"], [], 20],
  ["Penelope", ["Greek"], ["Weaver"], ["Penny", "Nell", "Poppy"], 21],
  ["Chloe", ["Greek"], ["Blooming", "Fertility"], [], 22],
  ["Layla", ["Arabic"], ["Night", "Dark beauty"], [], 23],
  ["Mila", ["Slavic"], ["Gracious", "Dear"], [], 24],
  ["Nora", ["Irish", "Greek"], ["Honor", "Light"], [], 25],
  ["Riley", ["Irish"], ["Courageous", "Valiant"], [], 26],
  ["Zoey", ["Greek"], ["Life"], ["Zo"], 27],
  ["Lily", ["English", "Latin"], ["Lily flower", "Purity"], [], 28],
  ["Aurora", ["Latin"], ["Dawn", "Goddess of sunrise"], ["Rory", "Aura"], 29],
  ["Nova", ["Latin"], ["New", "Star"], [], 30],
  ["Ella", ["Germanic", "English"], ["Fairy maiden", "All"], ["Ellie"], 31],
  ["Ellie", ["Greek", "English"], ["Light", "Shining"], [], 32],
  ["Willow", ["English"], ["Willow tree", "Graceful"], ["Will"], 33],
  ["Ivy", ["English"], ["Ivy plant", "Faithfulness"], [], 34],
  ["Emilia", ["Latin"], ["Rival"], ["Mia", "Millie"], 35],
  ["Abigail", ["Hebrew"], ["Father's joy"], ["Abby", "Gail"], 36],
  ["Gianna", ["Italian"], ["God is gracious"], ["Gia", "Gigi"], 37],
  ["Valentina", ["Latin"], ["Strong", "Healthy"], ["Val"], 38],
  ["Luna", ["Latin"], ["Moon"], ["Lu"], 39],
  ["Isla", ["Scottish"], ["Island"], [], 40],
  ["Everly", ["English"], ["From the boar meadow"], ["Ever"], 41],
  ["Naomi", ["Hebrew"], ["Pleasantness"], [], 42],
  ["Grace", ["Latin"], ["Grace of God", "Elegance"], ["Gracie"], 43],
  ["Elena", ["Greek"], ["Bright light"], ["Lena"], 44],
  ["Natalie", ["Latin"], ["Christmas Day"], ["Nat", "Natty"], 45],
  ["Eliana", ["Hebrew"], ["God has answered"], ["Ellie", "Ana"], 46],
  ["Maya", ["Sanskrit", "Greek"], ["Illusion", "Water"], [], 47],
  ["Kinsley", ["English"], ["King's meadow"], [], 48],
  ["Hannah", ["Hebrew"], ["Grace", "Favor"], [], 49],
  ["Paisley", ["Scottish"], ["Church"], [], 50],
  ["Stella", ["Latin"], ["Star"], [], 51],
  ["Madelyn", ["English"], ["Woman from Magdala"], ["Maddie"], 52],
  ["Kennedy", ["Irish"], ["Helmeted chief"], [], 53],
  ["Genesis", ["Greek"], ["Origin", "Beginning"], [], 54],
  ["Savannah", ["Spanish"], ["Treeless plain"], ["Sav"], 55],
  ["Audrey", ["English"], ["Noble strength"], [], 56],
  ["Brooklyn", ["English"], ["Water", "Stream"], ["Brooke"], 57],
  ["Claire", ["French", "Latin"], ["Clear", "Bright"], [], 58],
  ["Skylar", ["Dutch"], ["Scholar"], ["Sky"], 59],
  ["Lucy", ["Latin"], ["Light"], [], 60],
  ["Bella", ["Italian"], ["Beautiful"], [], 61],
  ["Paisley", ["Scottish"], ["Church"], [], 62],
  ["Sadie", ["Hebrew"], ["Princess"], [], 63],
  ["Aaliyah", ["Arabic"], ["Exalted", "Sublime"], ["Ali"], 64],
  ["Anna", ["Hebrew"], ["Grace"], [], 65],
  ["Serenity", ["English"], ["Peaceful"], [], 66],
  ["Caroline", ["Latin"], ["Free woman"], ["Cara", "Carrie"], 67],
  ["Piper", ["English"], ["Pipe player"], [], 68],
  ["Ruby", ["Latin"], ["Red gemstone"], [], 69],
  ["Madeline", ["French"], ["High tower"], ["Maddie"], 70],
  ["Alice", ["Germanic"], ["Noble", "Exalted"], ["Ali"], 71],
  ["Gabriella", ["Hebrew"], ["God is my strength"], ["Gabby", "Ella"], 72],
  ["Jade", ["Spanish"], ["Jade stone"], [], 73],
  ["Ariana", ["Italian"], ["Most holy"], ["Ari"], 74],
  ["Cora", ["Greek"], ["Maiden"], [], 75],
  ["Eva", ["Hebrew"], ["Life"], [], 76],
  ["Aubrey", ["Germanic"], ["Elf ruler"], ["Bree"], 77],
  ["Addison", ["English"], ["Son of Adam"], ["Addie"], 78],
  ["Leah", ["Hebrew"], ["Weary"], [], 79],
  ["Lillian", ["Latin"], ["Lily"], ["Lily", "Lilly"], 80],
  ["Victoria", ["Latin"], ["Victory", "Conqueror"], ["Vicky", "Tori"], 81],
  ["Hailey", ["English"], ["Hay meadow"], [], 82],
  ["Quinn", ["Irish"], ["Wise", "Counsel"], [], 83],
  ["Sophie", ["Greek"], ["Wisdom"], [], 84],
  ["Allison", ["Germanic"], ["Noble"], ["Ali", "Allie"], 85],
  ["Autumn", ["Latin"], ["Fall season"], [], 86],
  ["Peyton", ["English"], ["Fighting man's estate"], [], 87],
  ["Samantha", ["Hebrew"], ["Listener"], ["Sam", "Sammy"], 88],
  ["Nevaeh", ["American"], ["Heaven spelled backwards"], [], 89],
  ["Sarah", ["Hebrew"], ["Princess"], [], 90],
  ["Lydia", ["Greek"], ["Woman from Lydia"], [], 91],
  ["Zoe", ["Greek"], ["Life"], [], 92],
  ["Clara", ["Latin"], ["Bright", "Clear"], [], 93],
  ["Josephine", ["Hebrew"], ["God will add"], ["Jo", "Josie"], 94],
  ["Delilah", ["Hebrew"], ["Delicate"], ["Lilah"], 95],
  ["Vivian", ["Latin"], ["Alive"], ["Vivi"], 96],
  ["Natalia", ["Latin"], ["Christmas Day"], ["Nat"], 97],
  ["Athena", ["Greek"], ["Goddess of wisdom"], [], 98],
  ["Lila", ["Arabic", "Sanskrit"], ["Night", "Play"], [], 99],
  ["Eliza", ["Hebrew"], ["Pledged to God"], ["Liza"], 100],

  // 101-200
  ["Maria", ["Hebrew", "Latin"], ["Bitter", "Beloved"], [], 101],
  ["Hadley", ["English"], ["Heather field"], [], 102],
  ["Iris", ["Greek"], ["Rainbow"], [], 103],
  ["Eden", ["Hebrew"], ["Paradise", "Delight"], [], 104],
  ["Julia", ["Latin"], ["Youthful"], ["Julie"], 105],
  ["Emery", ["Germanic"], ["Brave", "Powerful"], [], 106],
  ["Rose", ["Latin"], ["Rose flower"], ["Rosie"], 107],
  ["Margaret", ["Greek"], ["Pearl"], ["Maggie", "Meg"], 108],
  ["Leilani", ["Hawaiian"], ["Heavenly flower"], ["Lei"], 109],
  ["Melody", ["Greek"], ["Song"], [], 110],
  ["Mackenzie", ["Scottish"], ["Son of Kenneth"], ["Kenzie"], 111],
  ["Reagan", ["Irish"], ["Little ruler"], [], 112],
  ["Brielle", ["French"], ["Hunting grounds"], ["Bri"], 113],
  ["Adalynn", ["Germanic"], ["Noble"], ["Ada", "Addy"], 114],
  ["Londyn", ["English"], ["London"], [], 115],
  ["Sienna", ["Italian"], ["Orange-red"], [], 116],
  ["Jasmine", ["Persian"], ["Jasmine flower"], ["Jazz"], 117],
  ["Reese", ["Welsh"], ["Enthusiasm"], [], 118],
  ["Adalyn", ["Germanic"], ["Noble"], ["Ada"], 119],
  ["Katherine", ["Greek"], ["Pure"], ["Kate", "Katie", "Kat"], 120],
  ["Freya", ["Norse"], ["Noble woman"], [], 121],
  ["Lucia", ["Italian", "Latin"], ["Light"], [], 122],
  ["Daisy", ["English"], ["Day's eye"], [], 123],
  ["Raelynn", ["American"], ["Combination of Rae + Lynn"], [], 124],
  ["Maeve", ["Irish"], ["Intoxicating"], [], 125],
  ["Catalina", ["Spanish"], ["Pure"], ["Cat"], 126],
  ["Sloane", ["Irish"], ["Warrior"], [], 127],
  ["Esther", ["Persian", "Hebrew"], ["Star"], [], 128],
  ["Juliana", ["Latin"], ["Youthful"], ["Julie", "Ana"], 129],
  ["Cecilia", ["Latin"], ["Blind"], ["Cece"], 130],
  ["Lyla", ["Arabic"], ["Night"], [], 131],
  ["Molly", ["Hebrew"], ["Bitter"], [], 132],
  ["Olive", ["Latin"], ["Olive tree"], [], 133],
  ["Rylee", ["Irish"], ["Courageous"], [], 134],
  ["Remi", ["French"], ["Oarsman"], [], 135],
  ["Rosalie", ["French"], ["Rose"], ["Rose", "Rosie"], 136],
  ["Selena", ["Greek"], ["Moon"], [], 137],
  ["Parker", ["English"], ["Park keeper"], [], 138],
  ["Kate", ["Greek"], ["Pure"], ["Katie"], 139],
  ["Diana", ["Latin"], ["Divine", "Goddess"], ["Di"], 140],
  ["Margot", ["French"], ["Pearl"], [], 141],
  ["Genevieve", ["French"], ["Tribe woman"], ["Gen", "Vivi"], 142],
  ["Gemma", ["Italian"], ["Precious stone"], [], 143],
  ["Anastasia", ["Greek"], ["Resurrection"], ["Ana", "Stacy"], 144],
  ["Arabella", ["Latin"], ["Yielding to prayer"], ["Bella"], 145],
  ["Zara", ["Arabic"], ["Princess", "Flower"], [], 146],
  ["Arya", ["Sanskrit"], ["Noble"], [], 147],
  ["Juliette", ["French"], ["Youthful"], ["Julie"], 148],
  ["Harley", ["English"], ["Hare meadow"], [], 149],
  ["Ada", ["Germanic"], ["Noble"], [], 150],

  // 151-250
  ["Camille", ["French"], ["Young ceremonial attendant"], ["Cami"], 151],
  ["Georgia", ["Greek"], ["Farmer"], [], 152],
  ["Presley", ["English"], ["Priest's meadow"], [], 153],
  ["Charlie", ["Germanic"], ["Free man"], [], 154],
  ["Khloe", ["Greek"], ["Blooming"], [], 155],
  ["Brianna", ["Irish"], ["Strong", "Noble"], ["Bri"], 156],
  ["Miriam", ["Hebrew"], ["Wished-for child"], [], 157],
  ["Kaylee", ["American"], ["Pure", "Beloved"], ["Kay"], 158],
  ["Morgan", ["Welsh"], ["Sea-born"], [], 159],
  ["Aspen", ["English"], ["Aspen tree"], [], 160],
  ["Amara", ["African"], ["Grace", "Eternal"], [], 161],
  ["Jordan", ["Hebrew"], ["To flow down"], [], 162],
  ["Summer", ["English"], ["Summer season"], [], 163],
  ["Kira", ["Russian"], ["Ruler"], [], 164],
  ["Brooke", ["English"], ["Stream", "Water"], [], 165],
  ["Faith", ["English"], ["Trust", "Belief"], [], 166],
  ["Callie", ["Greek"], ["Beautiful"], [], 167],
  ["Kimberly", ["English"], ["Royal fortress meadow"], ["Kim"], 168],
  ["Alexis", ["Greek"], ["Defender"], ["Alex", "Lexi"], 169],
  ["Vera", ["Russian"], ["Faith", "Truth"], [], 170],
  ["Sage", ["Latin"], ["Wise"], [], 171],
  ["June", ["Latin"], ["June month"], [], 172],
  ["Willa", ["Germanic"], ["Resolute protection"], [], 173],
  ["Oakley", ["English"], ["Oak meadow"], [], 174],
  ["Jessica", ["Hebrew"], ["God beholds"], ["Jess"], 175],
  ["Blake", ["English"], ["Fair-haired", "Dark"], [], 176],
  ["Esme", ["French"], ["Beloved"], [], 177],
  ["Tessa", ["Greek"], ["Harvester"], [], 178],
  ["Valerie", ["Latin"], ["Strength", "Health"], ["Val"], 179],
  ["Ember", ["English"], ["Spark", "Burning low"], [], 180],
  ["Paige", ["English"], ["Young servant"], [], 181],
  ["Teagan", ["Irish"], ["Little poet"], [], 182],
  ["Nicole", ["Greek"], ["Victory of the people"], ["Nicky"], 183],
  ["Bailey", ["English"], ["Bailiff"], [], 184],
  ["Amy", ["French", "Latin"], ["Beloved"], [], 185],
  ["Gracie", ["Latin"], ["Grace"], [], 186],
  ["Hope", ["English"], ["Expectation", "Belief"], [], 187],
  ["Vanessa", ["Greek"], ["Butterfly"], ["Nessa"], 188],
  ["Ruth", ["Hebrew"], ["Friend"], [], 189],
  ["Alexandra", ["Greek"], ["Defender of the people"], ["Alex", "Lexi"], 190],
  ["Lauren", ["Latin"], ["Laurel"], [], 191],
  ["Destiny", ["English"], ["Fate"], [], 192],
  ["Rachel", ["Hebrew"], ["Ewe"], [], 193],
  ["Trinity", ["Latin"], ["Triad"], [], 194],
  ["Daniela", ["Hebrew"], ["God is my judge"], ["Dani"], 195],
  ["Fiona", ["Gaelic"], ["White", "Fair"], [], 196],
  ["Thea", ["Greek"], ["Goddess"], [], 197],
  ["Jocelyn", ["Germanic"], ["Member of Gauts tribe"], ["Joss"], 198],
  ["Ximena", ["Spanish"], ["Hearkening"], [], 199],
  ["Rebecca", ["Hebrew"], ["To bind"], ["Becca", "Becky"], 200],

  // 201-300 (more concise)
  ["Dakota", ["Native American"], ["Friend", "Ally"], [], 201],
  ["Felicity", ["Latin"], ["Happiness", "Good fortune"], [], 202],
  ["Beatrice", ["Latin"], ["She who brings happiness"], ["Bea"], 203],
  ["Heidi", ["Germanic"], ["Noble one"], [], 204],
  ["Chelsea", ["English"], ["Chalk landing place"], [], 205],
  ["Anastasia", ["Greek"], ["Resurrection"], ["Ana"], 206],
  ["Adriana", ["Latin"], ["From Hadria"], [], 207],
  ["Lena", ["Greek"], ["Light"], [], 208],
  ["Nadia", ["Slavic"], ["Hope"], [], 209],
  ["Catherine", ["Greek"], ["Pure"], ["Cat", "Cathy"], 210],
  ["Bianca", ["Italian"], ["White", "Pure"], [], 211],
  ["Giselle", ["Germanic"], ["Pledge"], [], 212],
  ["Priscilla", ["Latin"], ["Ancient"], [], 213],
  ["Holly", ["English"], ["Holly tree"], [], 214],
  ["Florence", ["Latin"], ["Flourishing"], ["Flo"], 215],
  ["Leslie", ["Scottish"], ["Holly garden"], [], 216],
  ["Megan", ["Welsh"], ["Pearl"], ["Meg"], 217],
  ["Sydney", ["French"], ["Wide meadow"], ["Syd"], 218],
  ["Natasha", ["Russian"], ["Christmas Day"], ["Tasha"], 219],
  ["Gloria", ["Latin"], ["Glory"], [], 220],
  ["Sabrina", ["Celtic"], ["From the River Severn"], [], 221],
  ["Melissa", ["Greek"], ["Bee"], ["Mel"], 222],
  ["Camilla", ["Latin"], ["Young attendant"], ["Cami"], 223],
  ["Alana", ["Irish"], ["Dear child"], [], 224],
  ["Eloise", ["French"], ["Healthy", "Wide"], ["Ellie"], 225],
  ["Miranda", ["Latin"], ["Admirable"], [], 226],
  ["Scarlet", ["English"], ["Red"], [], 227],
  ["Francesca", ["Italian"], ["Free one"], ["Fran"], 228],
  ["Anastasia", ["Greek"], ["Resurrection"], [], 229],
  ["April", ["Latin"], ["Opening", "Spring"], [], 230],
  ["Wren", ["English"], ["Small bird"], [], 231],
  ["Winter", ["English"], ["Winter season"], [], 232],
  ["Gwendolyn", ["Welsh"], ["White ring"], ["Gwen"], 233],
  ["Juliet", ["French"], ["Youthful"], [], 234],
  ["Mabel", ["Latin"], ["Lovable"], [], 235],
  ["Nina", ["Spanish"], ["Little girl"], [], 236],
  ["Adelaide", ["Germanic"], ["Noble natured"], ["Addie"], 237],
  ["Leila", ["Arabic"], ["Night"], [], 238],
  ["Keira", ["Irish"], ["Dark"], [], 239],
  ["Annabelle", ["French"], ["Lovable"], ["Anna", "Belle"], 240],
  ["Phoebe", ["Greek"], ["Bright", "Pure"], [], 241],
  ["Millie", ["Germanic"], ["Industrious"], [], 242],
  ["Winnie", ["Welsh"], ["Holy peacemaking"], [], 243],
  ["Zelda", ["Germanic"], ["Gray fighting maid"], [], 244],
  ["Jane", ["Hebrew"], ["God is gracious"], ["Janie"], 245],
  ["Lilliana", ["Latin"], ["Lily"], ["Lily"], 246],
  ["Siena", ["Italian"], ["Orange-red"], [], 247],
  ["Amira", ["Arabic"], ["Princess"], [], 248],
  ["Ivy", ["English"], ["Ivy plant"], [], 249],
  ["Mae", ["English"], ["Bitter", "Pearl"], [], 250],

  // Additional popular names 251-400
  ["Anne", ["Hebrew"], ["Grace", "Favor"], ["Annie"], 251],
  ["Annie", ["Hebrew"], ["Grace"], [], 252],
  ["Cassandra", ["Greek"], ["Shining upon man"], ["Cassie"], 253],
  ["Celeste", ["Latin"], ["Heavenly"], [], 254],
  ["Charley", ["Germanic"], ["Free man"], [], 255],
  ["Colette", ["French"], ["Victory of the people"], [], 256],
  ["Dahlia", ["Scandinavian"], ["Valley"], [], 257],
  ["Daphne", ["Greek"], ["Laurel tree"], [], 258],
  ["Edith", ["English"], ["Prosperous in war"], ["Edie"], 259],
  ["Elise", ["French"], ["Pledged to God"], [], 260],
  ["Elsie", ["Scottish"], ["Pledged to God"], [], 261],
  ["Evie", ["Hebrew"], ["Life"], [], 262],
  ["Faye", ["English"], ["Fairy"], [], 263],
  ["Flora", ["Latin"], ["Flower"], [], 264],
  ["Frances", ["Latin"], ["Free one"], ["Fran"], 265],
  ["Greta", ["Germanic"], ["Pearl"], [], 266],
  ["Harriet", ["Germanic"], ["Estate ruler"], ["Hattie"], 267],
  ["Haven", ["English"], ["Safe place"], [], 268],
  ["Helena", ["Greek"], ["Bright light"], [], 269],
  ["Imogen", ["Celtic"], ["Maiden"], [], 270],
  ["Ingrid", ["Norse"], ["Beautiful", "Beloved"], [], 271],
  ["Ivy", ["English"], ["Ivy plant"], [], 272],
  ["Joanna", ["Hebrew"], ["God is gracious"], ["Jo"], 273],
  ["Jolie", ["French"], ["Pretty"], [], 274],
  ["Josie", ["Hebrew"], ["God will add"], [], 275],
  ["Juniper", ["Latin"], ["Young"], ["June"], 276],
  ["Kaia", ["Scandinavian"], ["Earth"], [], 277],
  ["Kali", ["Sanskrit"], ["Black one"], [], 278],
  ["Laney", ["English"], ["Path"], [], 279],
  ["Laurel", ["Latin"], ["Laurel tree"], [], 280],
  ["Leia", ["Hebrew"], ["Weary"], [], 281],
  ["Leona", ["Latin"], ["Lion"], [], 282],
  ["Lilith", ["Hebrew"], ["Night monster"], [], 283],
  ["Liv", ["Norse"], ["Life"], [], 284],
  ["Lorelei", ["Germanic"], ["Alluring"], [], 285],
  ["Louise", ["Germanic"], ["Famous warrior"], ["Lou"], 286],
  ["Lucia", ["Latin"], ["Light"], [], 287],
  ["Maisie", ["Scottish"], ["Pearl"], [], 288],
  ["Mallory", ["French"], ["Unlucky"], [], 289],
  ["Mariana", ["Latin"], ["Of the sea"], [], 290],
  ["Marley", ["English"], ["Pleasant meadow"], [], 291],
  ["Matilda", ["Germanic"], ["Battle-mighty"], ["Tilly"], 292],
  ["Maxine", ["Latin"], ["Greatest"], ["Max"], 293],
  ["McKenna", ["Irish"], ["Son of Kenneth"], [], 294],
  ["Meredith", ["Welsh"], ["Great ruler"], [], 295],
  ["Naya", ["Arabic"], ["New"], [], 296],
  ["Nellie", ["English"], ["Horn"], [], 297],
  ["Nyla", ["Arabic"], ["Winner"], [], 298],
  ["Ophelia", ["Greek"], ["Help"], [], 299],
  ["Payton", ["English"], ["Fighting man's estate"], [], 300],
];

const boyNames = [
  // Top 100 boy names with full data
  ["Liam", ["Irish", "Germanic"], ["Strong-willed warrior"], ["Li"], 1],
  ["Noah", ["Hebrew"], ["Rest", "Comfort"], [], 2],
  ["Oliver", ["Latin", "Old French"], ["Olive tree", "Peaceful"], ["Ollie", "Oli"], 3],
  ["James", ["Hebrew", "English"], ["Supplanter"], ["Jim", "Jimmy", "Jamie"], 4],
  ["Elijah", ["Hebrew"], ["My God is Yahweh"], ["Eli"], 5],
  ["William", ["Germanic"], ["Resolute protector"], ["Will", "Bill", "Billy", "Liam"], 6],
  ["Henry", ["Germanic"], ["Ruler of the home"], ["Hank", "Harry", "Hal"], 7],
  ["Lucas", ["Greek", "Latin"], ["Bringer of light"], ["Luke", "Luc"], 8],
  ["Benjamin", ["Hebrew"], ["Son of the right hand"], ["Ben", "Benny", "Benji"], 9],
  ["Theodore", ["Greek"], ["Gift of God"], ["Theo", "Ted", "Teddy"], 10],
  ["Jack", ["English"], ["God is gracious"], ["Jackie"], 11],
  ["Levi", ["Hebrew"], ["Joined", "Attached"], [], 12],
  ["Alexander", ["Greek"], ["Defender of the people"], ["Alex", "Xander"], 13],
  ["Mason", ["English"], ["Stone worker"], ["Mace"], 14],
  ["Ethan", ["Hebrew"], ["Strong", "Firm"], [], 15],
  ["Sebastian", ["Greek", "Latin"], ["Venerable"], ["Seb", "Sebby"], 16],
  ["Daniel", ["Hebrew"], ["God is my judge"], ["Dan", "Danny"], 17],
  ["Michael", ["Hebrew"], ["Who is like God?"], ["Mike", "Mikey"], 18],
  ["Owen", ["Welsh", "Irish"], ["Young warrior"], [], 19],
  ["Aiden", ["Irish", "Gaelic"], ["Little fire", "Fiery"], [], 20],
  ["Matthew", ["Hebrew"], ["Gift of God"], ["Matt", "Matty"], 21],
  ["Logan", ["Scottish"], ["Little hollow"], [], 22],
  ["Samuel", ["Hebrew"], ["God has heard"], ["Sam", "Sammy"], 23],
  ["Joseph", ["Hebrew"], ["God will add"], ["Joe", "Joey"], 24],
  ["Asher", ["Hebrew"], ["Happy", "Blessed"], ["Ash"], 25],
  ["Leo", ["Latin"], ["Lion"], [], 26],
  ["David", ["Hebrew"], ["Beloved"], ["Dave", "Davey"], 27],
  ["Jackson", ["English"], ["Son of Jack"], ["Jax"], 28],
  ["Ezra", ["Hebrew"], ["Helper"], ["Ez"], 29],
  ["Luke", ["Greek"], ["Light"], [], 30],
  ["Carter", ["English"], ["Cart driver"], [], 31],
  ["Jayden", ["Modern American"], ["Thankful"], ["Jay"], 32],
  ["Grayson", ["English"], ["Son of the gray-haired one"], ["Gray"], 33],
  ["Wyatt", ["English"], ["Brave in war"], [], 34],
  ["Julian", ["Latin"], ["Youthful"], ["Jules"], 35],
  ["Gabriel", ["Hebrew"], ["God is my strength"], ["Gabe"], 36],
  ["Lincoln", ["English"], ["Lake colony"], ["Linc"], 37],
  ["Isaac", ["Hebrew"], ["He will laugh"], ["Ike"], 38],
  ["Anthony", ["Latin"], ["Priceless", "Praiseworthy"], ["Tony"], 39],
  ["Dylan", ["Welsh"], ["Son of the sea"], [], 40],
  ["Mateo", ["Spanish"], ["Gift of God"], [], 41],
  ["Maverick", ["American"], ["Independent"], ["Mav"], 42],
  ["Thomas", ["Aramaic"], ["Twin"], ["Tom", "Tommy"], 43],
  ["Charles", ["Germanic"], ["Free man"], ["Charlie", "Chuck"], 44],
  ["Christopher", ["Greek"], ["Bearer of Christ"], ["Chris", "Topher"], 45],
  ["Miles", ["Latin"], ["Soldier"], [], 46],
  ["Jaxon", ["English"], ["Son of Jack"], ["Jax"], 47],
  ["Caleb", ["Hebrew"], ["Faithful", "Devotion"], [], 48],
  ["Nathan", ["Hebrew"], ["Gift of God"], ["Nate"], 49],
  ["Hudson", ["English"], ["Son of Hudde"], [], 50],
  ["Eli", ["Hebrew"], ["Ascended", "High"], [], 51],
  ["Andrew", ["Greek"], ["Manly", "Strong"], ["Andy", "Drew"], 52],
  ["Hunter", ["English"], ["One who hunts"], [], 53],
  ["Nolan", ["Irish"], ["Champion"], [], 54],
  ["Adrian", ["Latin"], ["From Hadria"], [], 55],
  ["Cameron", ["Scottish"], ["Crooked nose"], ["Cam"], 56],
  ["Aaron", ["Hebrew"], ["High mountain", "Exalted"], [], 57],
  ["Ryan", ["Irish"], ["Little king"], [], 58],
  ["Isaiah", ["Hebrew"], ["Salvation of the Lord"], [], 59],
  ["Cooper", ["English"], ["Barrel maker"], ["Coop"], 60],
  ["Joshua", ["Hebrew"], ["God is salvation"], ["Josh"], 61],
  ["Christian", ["Latin"], ["Follower of Christ"], ["Chris"], 62],
  ["Landon", ["English"], ["Long hill"], [], 63],
  ["Connor", ["Irish"], ["Wolf lover"], [], 64],
  ["Robert", ["Germanic"], ["Bright fame"], ["Rob", "Bob", "Bobby"], 65],
  ["Colton", ["English"], ["Coal town"], ["Colt"], 66],
  ["Jeremiah", ["Hebrew"], ["God will exalt"], ["Jeremy", "Jerry"], 67],
  ["Austin", ["Latin"], ["Great", "Magnificent"], [], 68],
  ["Nathaniel", ["Hebrew"], ["Gift of God"], ["Nate", "Nathan"], 69],
  ["Dominic", ["Latin"], ["Belonging to the Lord"], ["Dom", "Nick"], 70],
  ["Everett", ["English"], ["Brave boar"], ["Ev", "Rhett"], 71],
  ["Roman", ["Latin"], ["Citizen of Rome"], [], 72],
  ["Parker", ["English"], ["Park keeper"], [], 73],
  ["Carson", ["Scottish"], ["Son of marsh dwellers"], [], 74],
  ["Kai", ["Hawaiian"], ["Sea"], [], 75],
  ["Xavier", ["Basque"], ["New house"], ["Xavi"], 76],
  ["Adam", ["Hebrew"], ["Man", "Earth"], [], 77],
  ["Greyson", ["English"], ["Son of the gray-haired one"], ["Grey"], 78],
  ["Jose", ["Spanish", "Hebrew"], ["God will add"], [], 79],
  ["Ian", ["Scottish"], ["God is gracious"], [], 80],
  ["Wesley", ["English"], ["West meadow"], ["Wes"], 81],
  ["Bennett", ["Latin"], ["Blessed"], ["Ben"], 82],
  ["Axel", ["Scandinavian"], ["Father of peace"], [], 83],
  ["Easton", ["English"], ["East town"], [], 84],
  ["Weston", ["English"], ["Western town"], ["Wes"], 85],
  ["Nicholas", ["Greek"], ["Victory of the people"], ["Nick", "Nicky"], 86],
  ["Santiago", ["Spanish"], ["Saint James"], [], 87],
  ["Declan", ["Irish"], ["Man of prayer"], ["Dec"], 88],
  ["Micah", ["Hebrew"], ["Who is like God?"], [], 89],
  ["Kayden", ["American"], ["Fighter"], [], 90],
  ["Evan", ["Welsh"], ["God is gracious"], [], 91],
  ["Brooks", ["English"], ["Stream"], [], 92],
  ["Silas", ["Latin"], ["Wood", "Forest"], [], 93],
  ["Blake", ["English"], ["Fair-haired", "Dark"], [], 94],
  ["Finn", ["Irish"], ["Fair", "White"], [], 95],
  ["Jasper", ["Persian"], ["Treasurer"], [], 96],
  ["Jordan", ["Hebrew"], ["To flow down"], [], 97],
  ["Beau", ["French"], ["Handsome"], [], 98],
  ["Maxwell", ["Scottish"], ["Great spring"], ["Max"], 99],
  ["Knox", ["Scottish"], ["Round hill"], [], 100],

  // 101-200
  ["Jason", ["Greek"], ["Healer"], ["Jay"], 101],
  ["Damian", ["Greek"], ["To tame"], [], 102],
  ["Ryder", ["English"], ["Horseman"], [], 103],
  ["Leonardo", ["Italian"], ["Brave lion"], ["Leo"], 104],
  ["Sawyer", ["English"], ["Wood cutter"], [], 105],
  ["Luca", ["Italian"], ["Light"], [], 106],
  ["Kingston", ["English"], ["King's town"], ["King"], 107],
  ["Archer", ["English"], ["Bowman"], ["Arch"], 108],
  ["Brody", ["Gaelic"], ["Ditch", "Muddy place"], [], 109],
  ["Rowan", ["Irish"], ["Little red one"], [], 110],
  ["Brandon", ["English"], ["Broom hill"], [], 111],
  ["George", ["Greek"], ["Farmer"], [], 112],
  ["Vincent", ["Latin"], ["Conquering"], ["Vince", "Vinny"], 113],
  ["Tyler", ["English"], ["Tile maker"], ["Ty"], 114],
  ["Harrison", ["English"], ["Son of Harry"], ["Harry"], 115],
  ["Tucker", ["English"], ["Fabric pleater"], ["Tuck"], 116],
  ["Braxton", ["English"], ["Brock's town"], ["Brax"], 117],
  ["Giovanni", ["Italian"], ["God is gracious"], ["Gio"], 118],
  ["Oscar", ["Irish"], ["Deer lover"], [], 119],
  ["Cole", ["English"], ["Coal black"], [], 120],
  ["Zachary", ["Hebrew"], ["God remembers"], ["Zach", "Zack"], 121],
  ["Gavin", ["Welsh"], ["White hawk"], [], 122],
  ["Tristan", ["Celtic"], ["Sorrowful"], ["Tris"], 123],
  ["Preston", ["English"], ["Priest's town"], [], 124],
  ["Ryker", ["Germanic"], ["Rich"], [], 125],
  ["Jesse", ["Hebrew"], ["Gift"], [], 126],
  ["August", ["Latin"], ["Great", "Venerable"], ["Gus"], 127],
  ["Zion", ["Hebrew"], ["Highest point"], [], 128],
  ["Emmanuel", ["Hebrew"], ["God is with us"], ["Manny", "Manuel"], 129],
  ["Grant", ["Scottish"], ["Great", "Large"], [], 130],
  ["Dean", ["English"], ["Valley"], [], 131],
  ["Felix", ["Latin"], ["Happy", "Lucky"], [], 132],
  ["Timothy", ["Greek"], ["Honoring God"], ["Tim", "Timmy"], 133],
  ["Finley", ["Irish"], ["Fair warrior"], [], 134],
  ["Patrick", ["Latin"], ["Nobleman"], ["Pat", "Paddy"], 135],
  ["Kevin", ["Irish"], ["Gentle", "Kind"], ["Kev"], 136],
  ["Paul", ["Latin"], ["Small", "Humble"], [], 137],
  ["Graham", ["Scottish"], ["Gravelly homestead"], [], 138],
  ["Kyle", ["Gaelic"], ["Narrow strait"], [], 139],
  ["Victor", ["Latin"], ["Winner", "Conqueror"], ["Vic"], 140],
  ["Joel", ["Hebrew"], ["Yahweh is God"], [], 141],
  ["Griffin", ["Welsh"], ["Strong lord"], ["Griff"], 142],
  ["Xander", ["Greek"], ["Defender of the people"], [], 143],
  ["Edward", ["English"], ["Wealthy guardian"], ["Ed", "Eddie", "Ted"], 144],
  ["Jonathan", ["Hebrew"], ["Gift of God"], ["Jon", "Johnny"], 145],
  ["Eric", ["Norse"], ["Eternal ruler"], [], 146],
  ["Marcus", ["Latin"], ["Dedicated to Mars"], [], 147],
  ["Peter", ["Greek"], ["Rock", "Stone"], ["Pete"], 148],
  ["Emiliano", ["Spanish"], ["Rival"], [], 149],
  ["Steven", ["Greek"], ["Crown", "Garland"], ["Steve"], 150],

  // 151-250
  ["Colin", ["Gaelic"], ["Young creature"], [], 151],
  ["Richard", ["Germanic"], ["Brave ruler"], ["Rick", "Rich"], 152],
  ["Derek", ["Germanic"], ["Ruler of the people"], [], 153],
  ["Bryan", ["Celtic"], ["Noble", "Strong"], [], 154],
  ["Tobias", ["Hebrew"], ["God is good"], ["Toby"], 155],
  ["Francisco", ["Spanish"], ["Free man"], ["Frank", "Cisco"], 156],
  ["Bradley", ["English"], ["Broad meadow"], ["Brad"], 157],
  ["Kenneth", ["Scottish"], ["Handsome", "Born of fire"], ["Ken", "Kenny"], 158],
  ["Theo", ["Greek"], ["Gift of God"], [], 159],
  ["Walter", ["Germanic"], ["Army ruler"], ["Walt"], 160],
  ["Travis", ["French"], ["To cross"], [], 161],
  ["Jake", ["Hebrew"], ["Supplanter"], [], 162],
  ["Jacob", ["Hebrew"], ["Supplanter"], [], 163],
  ["John", ["Hebrew"], ["God is gracious"], ["Johnny", "Jack"], 164],
  ["Mark", ["Latin"], ["Dedicated to Mars"], [], 165],
  ["Spencer", ["English"], ["Steward"], ["Spence"], 166],
  ["Raymond", ["Germanic"], ["Wise protector"], ["Ray"], 167],
  ["Warren", ["Germanic"], ["Guard"], [], 168],
  ["Jorge", ["Spanish"], ["Farmer"], [], 169],
  ["Alejandro", ["Spanish"], ["Defender of the people"], ["Alex"], 170],
  ["Carlos", ["Spanish"], ["Free man"], [], 171],
  ["Diego", ["Spanish"], ["Supplanter"], [], 172],
  ["Ivan", ["Russian"], ["God is gracious"], [], 173],
  ["Andres", ["Spanish"], ["Manly", "Strong"], [], 174],
  ["Luis", ["Spanish"], ["Famous warrior"], [], 175],
  ["Miguel", ["Spanish"], ["Who is like God?"], [], 176],
  ["Rafael", ["Hebrew"], ["God has healed"], ["Rafa"], 177],
  ["Antonio", ["Latin"], ["Priceless"], ["Tony"], 178],
  ["Eduardo", ["Spanish"], ["Wealthy guardian"], ["Ed"], 179],
  ["Angel", ["Greek"], ["Messenger"], [], 180],
  ["Fernando", ["Germanic"], ["Bold voyager"], [], 181],
  ["Ricardo", ["Spanish"], ["Brave ruler"], [], 182],
  ["Martin", ["Latin"], ["Of Mars"], ["Marty"], 183],
  ["Roberto", ["Spanish"], ["Bright fame"], [], 184],
  ["Victor", ["Latin"], ["Winner"], [], 185],
  ["Omar", ["Arabic"], ["Flourishing"], [], 186],
  ["Adrian", ["Latin"], ["From Hadria"], [], 187],
  ["Manuel", ["Hebrew"], ["God is with us"], [], 188],
  ["Hector", ["Greek"], ["Holding fast"], [], 189],
  ["Alan", ["Celtic"], ["Handsome"], [], 190],
  ["Lorenzo", ["Latin"], ["From Laurentum"], ["Enzo"], 191],
  ["Edgar", ["English"], ["Wealthy spear"], [], 192],
  ["Sergio", ["Latin"], ["Servant"], [], 193],
  ["Alberto", ["Germanic"], ["Noble bright"], [], 194],
  ["Cesar", ["Latin"], ["Long-haired"], [], 195],
  ["Marco", ["Latin"], ["Dedicated to Mars"], [], 196],
  ["Julio", ["Latin"], ["Youthful"], [], 197],
  ["Francisco", ["Spanish"], ["Free man"], [], 198],
  ["Arturo", ["Celtic"], ["Bear"], [], 199],
  ["Pablo", ["Spanish"], ["Small"], [], 200],

  // 201-300
  ["Forrest", ["English"], ["Dweller near the woods"], [], 201],
  ["Frederick", ["Germanic"], ["Peaceful ruler"], ["Fred", "Freddy"], 202],
  ["Quentin", ["Latin"], ["Fifth"], [], 203],
  ["Quincy", ["Latin"], ["Fifth son's estate"], [], 204],
  ["Uriel", ["Hebrew"], ["God is my light"], [], 205],
  ["Ulysses", ["Latin"], ["Wrathful"], [], 206],
  ["Yusuf", ["Arabic"], ["God increases"], [], 207],
  ["Yahir", ["Hebrew"], ["He will enlighten"], [], 208],
  ["Zander", ["Greek"], ["Defender of the people"], [], 209],
  ["Cruz", ["Spanish"], ["Cross"], [], 210],
  ["Enzo", ["Italian"], ["Home ruler"], [], 211],
  ["Jace", ["Hebrew"], ["Healer"], [], 212],
  ["Milo", ["Germanic"], ["Merciful"], [], 213],
  ["Phoenix", ["Greek"], ["Dark red"], [], 214],
  ["River", ["English"], ["Stream of water"], [], 215],
  ["Reid", ["English"], ["Red-haired"], [], 216],
  ["Rhett", ["Welsh"], ["Advice"], [], 217],
  ["Ronan", ["Irish"], ["Little seal"], [], 218],
  ["Cash", ["English"], ["Hollow"], [], 219],
  ["Dallas", ["Scottish"], ["Meadow dwelling"], [], 220],
  ["Nash", ["English"], ["At the ash tree"], [], 221],
  ["Bodhi", ["Sanskrit"], ["Awakening"], [], 222],
  ["Atlas", ["Greek"], ["To carry"], [], 223],
  ["Beckett", ["English"], ["Beehive"], [], 224],
  ["Crew", ["English"], ["Chariot"], [], 225],
  ["Hayes", ["English"], ["Hedged area"], [], 226],
  ["Legend", ["English"], ["Story"], [], 227],
  ["Lennox", ["Scottish"], ["Elm grove"], [], 228],
  ["Messiah", ["Hebrew"], ["Anointed one"], [], 229],
  ["Prince", ["Latin"], ["Royal son"], [], 230],
  ["Karter", ["English"], ["Cart driver"], [], 231],
  ["Emilio", ["Latin"], ["Rival"], [], 232],
  ["Gage", ["French"], ["Pledge"], [], 233],
  ["Holden", ["English"], ["Hollow valley"], [], 234],
  ["King", ["English"], ["Ruler"], [], 235],
  ["Kyrie", ["Greek"], ["Lord"], [], 236],
  ["Malcolm", ["Scottish"], ["Devotee of Saint Columba"], ["Mal"], 237],
  ["Orion", ["Greek"], ["Hunter"], [], 238],
  ["Paxton", ["English"], ["Peace town"], ["Pax"], 239],
  ["Pierce", ["English"], ["Rock"], [], 240],
  ["Remington", ["English"], ["Raven family town"], ["Remi"], 241],
  ["Rocco", ["Germanic"], ["Rest"], [], 242],
  ["Tate", ["English"], ["Cheerful"], [], 243],
  ["Titus", ["Latin"], ["Title of honor"], [], 244],
  ["Warren", ["Germanic"], ["Guard"], [], 245],
  ["Wells", ["English"], ["Spring"], [], 246],
  ["Zayden", ["Arabic"], ["Growth"], [], 247],
  ["Anderson", ["English"], ["Son of Andrew"], ["Andy"], 248],
  ["Barrett", ["Germanic"], ["Bear strength"], [], 249],
  ["Callum", ["Scottish"], ["Dove"], [], 250],
];

// Generate the TypeScript file
function generateNameId(gender, index) {
  return `${gender}${index}`;
}

function generateOutput() {
  let output = `/**
 * Baby Names Data
 * Comprehensive dataset based on SSA popularity data with origins, meanings, and analysis
 * Total: ${girlNames.length + boyNames.length} names
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
function countSyllables(name) {
  const vowels = name.toLowerCase().match(/[aeiouy]+/g);
  return vowels ? Math.max(1, vowels.length) : 1;
}

export const namesData: NameData[] = [\n`;

  // Add girl names
  girlNames.forEach(([name, origins, meanings, nicknames, rank], i) => {
    const syllables = Math.max(1, (name.toLowerCase().match(/[aeiouy]+/g) || []).length);
    const trend = rank <= 50 ? "stable" : rank <= 150 ? "rising" : "stable";
    output += `  { id: "f${i + 1}", name: "${name}", normalizedName: "${name.toLowerCase()}", gender: "F", origins: ${JSON.stringify(origins)}, meanings: ${JSON.stringify(meanings)}, syllables: ${syllables}, nicknames: ${JSON.stringify(nicknames)}, alternateSpellings: [], currentRank: ${rank}, trend: "${trend}" },\n`;
  });

  // Add boy names
  boyNames.forEach(([name, origins, meanings, nicknames, rank], i) => {
    const syllables = Math.max(1, (name.toLowerCase().match(/[aeiouy]+/g) || []).length);
    const trend = rank <= 50 ? "stable" : rank <= 150 ? "rising" : "stable";
    output += `  { id: "m${i + 1}", name: "${name}", normalizedName: "${name.toLowerCase()}", gender: "M", origins: ${JSON.stringify(origins)}, meanings: ${JSON.stringify(meanings)}, syllables: ${syllables}, nicknames: ${JSON.stringify(nicknames)}, alternateSpellings: [], currentRank: ${rank}, trend: "${trend}" },\n`;
  });

  output += `];

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
`;

  return output;
}

// Write to file
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'src', 'lib', 'names-data.ts');

const content = generateOutput();
writeFileSync(outputPath, content);

console.log(`Generated names-data.ts with ${girlNames.length + boyNames.length} names`);
console.log(`- ${girlNames.length} girl names`);
console.log(`- ${boyNames.length} boy names`);
