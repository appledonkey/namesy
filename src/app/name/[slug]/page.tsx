import { Metadata } from "next";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { NameDetailContent, NameDetailData } from "./name-detail-content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Fetch name data from database
async function getNameData(slug: string): Promise<NameDetailData | null> {
  const normalizedSlug = slug.toLowerCase();

  const name = await prisma.name.findFirst({
    where: {
      normalizedName: normalizedSlug,
    },
    include: {
      origins: {
        include: {
          origin: true,
        },
      },
      meanings: true,
      nicknames: true,
      alternateSpellings: true,
      popularityHistory: {
        orderBy: { year: "asc" },
      },
      namesakes: true,
    },
  });

  if (!name) {
    // Return fallback data for names not in database
    const displayName = slug.charAt(0).toUpperCase() + slug.slice(1).toLowerCase();
    return {
      name: displayName,
      gender: "N",
      origins: [],
      meanings: [],
      syllables: Math.max(1, displayName.split(/[aeiou]/i).length - 1),
      phonetic: null,
      nicknames: [],
      alternateSpellings: [],
      famousNamesakes: [],
      popularityData: [],
      scores: {
        Uniqueness: 50,
        Timelessness: 50,
        Pronunciation: 50,
        Spelling: 50,
        Nicknames: 50,
        Professional: 50,
        "Teasing Resistance": 50,
        Flow: 50,
      },
      teasingRisk: "LOW",
      rhymingProblems: [],
      soundAlikeIssues: [],
      similarNames: [],
    };
  }

  return {
    name: name.name,
    gender: name.gender as "M" | "F" | "N",
    origins: name.origins.map((o) => o.origin.name),
    meanings: name.meanings.map((m) => m.meaning),
    syllables: name.syllables,
    phonetic: name.phonetic,
    nicknames: name.nicknames.map((n) => n.nickname),
    alternateSpellings: name.alternateSpellings.map((a) => a.spelling),
    famousNamesakes: name.namesakes.map((n) => ({
      name: n.personName,
      type: n.description || "Notable person",
    })),
    popularityData: name.popularityHistory
      .filter((p) => p.rank !== null)
      .map((p) => ({
        year: p.year,
        rank: p.rank!,
      })),
    scores: {
      Uniqueness: 50,
      Timelessness: 75,
      Pronunciation: 80,
      Spelling: 85,
      Nicknames: name.nicknames.length > 0 ? 80 : 40,
      Professional: 85,
      "Teasing Resistance": 80,
      Flow: 75,
    },
    teasingRisk: "LOW",
    rhymingProblems: [],
    soundAlikeIssues: [],
    similarNames: [],
  };
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const nameData = await getNameData(slug);

  if (!nameData) {
    return {
      title: "Name Not Found | Namesy",
      description: "The requested name could not be found.",
    };
  }

  const genderText =
    nameData.gender === "M" ? "boy" : nameData.gender === "F" ? "girl" : "unisex";
  const meaningText =
    nameData.meanings.length > 0 ? ` meaning "${nameData.meanings[0]}"` : "";
  const originText =
    nameData.origins.length > 0 ? ` of ${nameData.origins[0]} origin` : "";

  const title = `${nameData.name} - Baby Name Meaning, Origin & Popularity | Namesy`;
  const description = `Discover the ${genderText} name ${nameData.name}${meaningText}${originText}. View popularity trends, nicknames, famous namesakes, and detailed analysis to help you choose the perfect baby name.`;

  const currentRank =
    nameData.popularityData.length > 0
      ? nameData.popularityData[nameData.popularityData.length - 1].rank
      : null;

  return {
    title,
    description,
    keywords: [
      nameData.name,
      `${nameData.name} meaning`,
      `${nameData.name} origin`,
      `${nameData.name} baby name`,
      `${genderText} names`,
      ...nameData.origins.map((o) => `${o} baby names`),
      ...nameData.nicknames.map((n) => `${n} nickname`),
    ],
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "Namesy",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: `${nameData.name} - Baby Name Meaning & Origin`,
      description,
    },
    alternates: {
      canonical: `/name/${slug}`,
    },
    other: currentRank
      ? {
          "article:section": "Baby Names",
          popularity_rank: currentRank.toString(),
        }
      : {
          "article:section": "Baby Names",
        },
  };
}

// Schema.org structured data for the name
function generateStructuredData(nameData: NameDetailData, slug: string) {
  const genderText =
    nameData.gender === "M" ? "Male" : nameData.gender === "F" ? "Female" : "Unisex";

  const currentRank =
    nameData.popularityData.length > 0
      ? nameData.popularityData[nameData.popularityData.length - 1].rank
      : null;

  // Thing schema for name information
  const nameSchema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: nameData.name,
    description:
      nameData.meanings.length > 0
        ? `A ${genderText.toLowerCase()} name meaning "${nameData.meanings.join(", ")}"`
        : `A ${genderText.toLowerCase()} name`,
    url: `https://namesy.app/name/${slug}`,
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Gender",
        value: genderText,
      },
      {
        "@type": "PropertyValue",
        name: "Syllables",
        value: nameData.syllables,
      },
      ...(nameData.origins.length > 0
        ? [
            {
              "@type": "PropertyValue",
              name: "Origin",
              value: nameData.origins.join(", "),
            },
          ]
        : []),
      ...(currentRank
        ? [
            {
              "@type": "PropertyValue",
              name: "Popularity Rank (US)",
              value: currentRank,
            },
          ]
        : []),
    ],
  };

  // BreadcrumbList for navigation
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://namesy.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Browse Names",
        item: "https://namesy.app/browse",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: nameData.name,
        item: `https://namesy.app/name/${slug}`,
      },
    ],
  };

  // FAQPage schema for common questions
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What does the name ${nameData.name} mean?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            nameData.meanings.length > 0
              ? `The name ${nameData.name} means "${nameData.meanings.join(", ")}".`
              : `The meaning of ${nameData.name} varies by cultural interpretation.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the origin of the name ${nameData.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text:
            nameData.origins.length > 0
              ? `${nameData.name} is of ${nameData.origins.join(" and ")} origin.`
              : `The origin of ${nameData.name} is varied across cultures.`,
        },
      },
      ...(nameData.nicknames.length > 0
        ? [
            {
              "@type": "Question",
              name: `What are nicknames for ${nameData.name}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `Common nicknames for ${nameData.name} include ${nameData.nicknames.join(", ")}.`,
              },
            },
          ]
        : []),
      ...(currentRank
        ? [
            {
              "@type": "Question",
              name: `How popular is the name ${nameData.name}?`,
              acceptedAnswer: {
                "@type": "Answer",
                text: `${nameData.name} is currently ranked #${currentRank} in popularity in the United States.`,
              },
            },
          ]
        : []),
    ],
  };

  return [nameSchema, breadcrumbSchema, faqSchema];
}

export default async function NameDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const nameData = await getNameData(slug);

  if (!nameData) {
    notFound();
  }

  const structuredData = generateStructuredData(nameData, slug);

  return (
    <>
      {/* Schema.org structured data */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <NameDetailContent nameData={nameData} />
    </>
  );
}
