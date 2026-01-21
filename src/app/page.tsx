import { Suspense } from "react";
import { namesData } from "@/lib/names-data";
import { DiscoveryView } from "@/components/features/discovery-view";
import { NavBar } from "@/components/ui/navbar";
import { TabBar } from "@/components/ui/tab-bar";
import { Skeleton } from "@/components/ui/skeleton";

// Get initial names for server-side rendering
function getInitialNames() {
  // Shuffle and return first 200 names
  const shuffled = [...namesData].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 200);
}

function DiscoverySkeleton() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] px-4">
      <Skeleton className="w-[85%] max-w-[320px] aspect-[3/4] rounded-3xl" />
    </div>
  );
}

export default function Home() {
  const initialNames = getInitialNames();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Desktop navbar - hidden on mobile */}
      <div className="hidden md:block">
        <NavBar showSignIn={true} />
      </div>

      {/* Mobile header */}
      <header className="md:hidden bg-background/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-30 safe-top">
        <div className="px-4 py-3 flex items-center justify-center">
          <h1 className="font-heading text-xl font-semibold">namesy</h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-2xl mx-auto">
        <Suspense fallback={<DiscoverySkeleton />}>
          <DiscoveryView initialNames={initialNames} />
        </Suspense>
      </main>

      {/* Mobile tab bar */}
      <TabBar />
    </div>
  );
}
