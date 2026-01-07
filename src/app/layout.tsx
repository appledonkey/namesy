import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Inter, Dancing_Script, Lora } from "next/font/google";
import "./globals.css";
import { PaperTexture } from "@/components/ui/paper-texture";
import { ErrorBoundary } from "@/components/error-boundary";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "namesy - Find the Perfect Baby Name",
  description: "Discover, analyze, and decide on the perfect baby name with comprehensive insights, partner collaboration, and beautiful visualizations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSans.variable} ${inter.variable} ${dancingScript.variable} ${lora.variable} antialiased bg-background text-foreground`}
      >
        <PaperTexture />
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
