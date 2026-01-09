"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background border-b border-border sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-2">
          <Image
            src="/icon.png"
            alt="Namesy"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="font-heading text-xl font-semibold">namesy</span>
        </div>
      </nav>

      {/* Empty content area */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Add elements here one at a time */}
      </main>
    </div>
  );
}
