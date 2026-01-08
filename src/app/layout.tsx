import type { Metadata } from "next";
import { Playfair_Display, Inter, Meow_Script } from "next/font/google";
import "./globals.css";
import { PaperTexture } from "@/components/ui/paper-texture";
import { ErrorBoundary } from "@/components/error-boundary";

// Only load 2 fonts for better performance (~300KB savings)
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  // Preload only the weights we use
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const meowScript = Meow_Script({
  variable: "--font-meow-script",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Namesy - Find the Perfect Baby Name",
    template: "%s | Namesy",
  },
  description:
    "Discover, analyze, and decide on the perfect baby name with comprehensive insights, popularity trends, meaning origins, and beautiful visualizations.",
  keywords: [
    "baby names",
    "baby name finder",
    "name meaning",
    "name origin",
    "baby name popularity",
    "girl names",
    "boy names",
    "unisex names",
    "name analysis",
  ],
  authors: [{ name: "Namesy" }],
  creator: "Namesy",
  publisher: "Namesy",
  metadataBase: new URL("https://namesy.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://namesy.app",
    siteName: "Namesy",
    title: "Namesy - Find the Perfect Baby Name",
    description:
      "Discover, analyze, and decide on the perfect baby name with comprehensive insights, popularity trends, and beautiful visualizations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Namesy - Find the Perfect Baby Name",
    description:
      "Discover and analyze baby names with popularity trends, meanings, origins, and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Baby Names",
};

// Schema.org structured data for the website
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Namesy",
  url: "https://namesy.app",
  description:
    "Find the perfect baby name with comprehensive insights, popularity trends, and meaning origins.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://namesy.app/browse?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Namesy",
  url: "https://namesy.app",
  logo: "https://namesy.app/logo.png",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${meowScript.variable} antialiased bg-background text-foreground`}
      >
        <PaperTexture />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
