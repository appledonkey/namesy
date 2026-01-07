"use client";

import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Text } from "@/components/ui/typography";

// Common nickname patterns
const nicknamePatterns: Record<string, string[]> = {
  // Girls
  charlotte: ["Charlie", "Lottie", "Char"],
  elizabeth: ["Liz", "Lizzy", "Beth", "Eliza", "Betsy"],
  olivia: ["Liv", "Livvy", "Ollie"],
  emma: ["Em", "Emmy"],
  sophia: ["Sophie", "Soph"],
  isabella: ["Bella", "Izzy", "Isa"],
  amelia: ["Amy", "Mia", "Millie"],
  mia: ["Mi"],
  abigail: ["Abby", "Gail"],
  evelyn: ["Evie", "Eve", "Lyn"],
  harper: ["Harp"],
  camila: ["Cami", "Mila"],
  gianna: ["Gia", "Gigi"],
  aurora: ["Rory", "Aura"],
  penelope: ["Penny", "Nell", "Poppy"],
  riley: ["Ri"],
  zoey: ["Zo"],
  nora: ["Nori"],
  lily: ["Lil"],
  eleanor: ["Ellie", "Nora", "Elle"],
  hazel: ["Haze"],
  violet: ["Vi", "Lettie"],
  stella: ["Stell"],
  zoe: ["Zo"],
  victoria: ["Vicky", "Tori", "Vic"],
  hannah: ["Han", "Annie"],
  addison: ["Addy", "Addie"],
  leah: ["Lee"],
  natalie: ["Nat", "Talie"],
  savannah: ["Sav", "Vanna", "Anna"],
  brooklyn: ["Brooke", "Brook"],
  samantha: ["Sam", "Sammy"],
  // Boys
  william: ["Will", "Liam", "Bill", "Billy"],
  james: ["Jamie", "Jim", "Jimmy"],
  benjamin: ["Ben", "Benji", "Benny"],
  alexander: ["Alex", "Xander", "Lex"],
  theodore: ["Theo", "Ted", "Teddy"],
  sebastian: ["Seb", "Bastian"],
  christopher: ["Chris", "Topher", "Kit"],
  daniel: ["Dan", "Danny"],
  matthew: ["Matt", "Matty"],
  joseph: ["Joe", "Joey"],
  nicholas: ["Nick", "Nicky"],
  jonathan: ["Jon", "John", "Johnny"],
  michael: ["Mike", "Mikey"],
  david: ["Dave", "Davey"],
  anthony: ["Tony", "Ant"],
  joshua: ["Josh"],
  andrew: ["Andy", "Drew"],
  thomas: ["Tom", "Tommy"],
  robert: ["Rob", "Robbie", "Bob", "Bobby"],
  charles: ["Charlie", "Chuck", "Chas"],
  richard: ["Rich", "Rick", "Ricky", "Dick"],
  henry: ["Hank", "Harry", "Hal"],
  oliver: ["Ollie", "Oli"],
  elijah: ["Eli"],
  lucas: ["Luke", "Luca"],
  mason: ["Mace"],
  ethan: ["Eth"],
  jacob: ["Jake", "Coby"],
  logan: ["Lo"],
  jackson: ["Jack", "Jax"],
  levi: ["Lee"],
  samuel: ["Sam", "Sammy"],
  gabriel: ["Gabe", "Gabby"],
  owen: ["O"],
  nathaniel: ["Nate", "Nathan", "Nat"],
  zachary: ["Zach", "Zack"],
  patrick: ["Pat", "Paddy", "Rick"],
  frederick: ["Fred", "Freddy", "Rick"],
  leonard: ["Leo", "Lenny"],
  raymond: ["Ray"],
  timothy: ["Tim", "Timmy"],
  edward: ["Ed", "Eddie", "Ted", "Teddy", "Ned"],
  // Neutral / Both
  alex: ["Al"],
  sam: ["Sammy"],
  max: ["Maxie"],
  charlie: ["Char"],
};

interface NicknamePreviewProps {
  firstName: string;
}

/**
 * NicknamePreview - Shows common nicknames for the given first name
 * Always renders a fixed-height container to prevent layout shifts
 */
export function NicknamePreview({ firstName }: NicknamePreviewProps) {
  const nicknames = useMemo(() => {
    if (!firstName.trim()) return [];

    const normalized = firstName.toLowerCase().trim();

    // Check for exact match
    if (nicknamePatterns[normalized]) {
      return nicknamePatterns[normalized];
    }

    // Check if name starts with a common pattern
    for (const [name, nicks] of Object.entries(nicknamePatterns)) {
      if (normalized.startsWith(name.slice(0, 4)) && normalized.length >= 4) {
        return nicks;
      }
    }

    // Generate basic nicknames for unknown names
    const basic: string[] = [];
    if (firstName.length > 3) {
      // First syllable approximation
      basic.push(firstName.slice(0, Math.min(3, firstName.length)));
      // Add -ie/-y suffix to short form
      if (firstName.length > 4) {
        const short = firstName.slice(0, 3);
        if (!short.endsWith("y") && !short.endsWith("ie")) {
          basic.push(short + (short.endsWith("i") ? "e" : "ie"));
        }
      }
    }

    return basic.filter((n, i, arr) => arr.indexOf(n) === i); // Unique
  }, [firstName]);

  // Always render container for stable layout
  return (
    <div className="h-7 sm:h-8 flex items-center justify-center">
      <AnimatePresence mode="popLayout">
        {nicknames.length > 0 && (
          <motion.div
            key={nicknames.join(",")}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            layout
          >
            <Text size="sm" muted className="text-sm sm:text-base">
              Nicknames: <span className="text-foreground font-medium">{nicknames.slice(0, 3).join(", ")}</span>
            </Text>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
