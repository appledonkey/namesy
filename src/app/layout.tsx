import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
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

// GitHub Pages: app is at https://appledonkey.github.io/namesy/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const baseUrl = basePath
  ? "https://appledonkey.github.io"
  : "https://namesy.io";
const fullBaseUrl = basePath ? `${baseUrl}${basePath}` : baseUrl;

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
  metadataBase: new URL(fullBaseUrl),
  alternates: {
    canonical: basePath ? `${basePath}/` : "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: fullBaseUrl,
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
  url: "https://namesy.io",
  description:
    "Find the perfect baby name with comprehensive insights, popularity trends, and meaning origins.",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Namesy",
  url: "https://namesy.io",
  logo: "https://namesy.io/logo.png",
  sameAs: [],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Anti-flash: apply theme class before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=JSON.parse(localStorage.getItem("namesy-partner-app")||"{}");var t=(s.settings&&s.settings.theme)||"system";var d=document.documentElement;if(t==="dark")d.classList.add("dark");else if(t==="light")d.classList.add("light");var m=document.querySelectorAll('meta[name="theme-color"]');if(t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme:dark)").matches)){m.forEach(function(e){e.setAttribute("content","#1A1614")})}else{m.forEach(function(e){e.setAttribute("content","#E8A0A0")})}}catch(e){}})()`,
          }}
        />
        {/* PWA meta tags */}
        <meta name="theme-color" content="#E8A0A0" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1A1614" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href={`${basePath}/manifest.json`} />
        <link rel="icon" href={`${basePath}/icon.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/icon.png`} />
        <meta name="apple-mobile-web-app-title" content="Namesy" />
        {/* iOS web app meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
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
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground overscroll-none`}
      >
        <PaperTexture />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
