"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Wrench, Heart } from "lucide-react";
import { motion } from "framer-motion";

interface TabItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

const tabs: TabItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/browse", label: "Browse", icon: Search },
  { href: "/builder", label: "Build", icon: Wrench },
  { href: "/favorites", label: "Favorites", icon: Heart },
];

interface TabBarProps {
  /** Number of favorites to show as badge */
  favoritesCount?: number;
}

/**
 * TabBar - Mobile bottom navigation
 * Sticky at bottom with safe area padding for notched devices
 */
export function TabBar({ favoritesCount = 0 }: TabBarProps) {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      {/* Glass background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-t border-border/50" />

      {/* Tab items */}
      <div className="relative flex items-center justify-around px-2 pt-2 pb-2 safe-bottom">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href ||
            (tab.href !== "/" && pathname.startsWith(tab.href));
          const Icon = tab.icon;
          const showBadge = tab.href === "/favorites" && favoritesCount > 0;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`
                relative flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-xl
                transition-colors duration-200 min-w-[64px]
                ${isActive ? "text-primary" : "text-muted"}
              `}
            >
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}

              {/* Icon with optional badge */}
              <div className="relative">
                <Icon className={`w-6 h-6 relative z-10 ${isActive ? "stroke-[2.5]" : ""}`} />
                {showBadge && (
                  <span className="absolute -top-1 -right-2 min-w-[18px] h-[18px] flex items-center justify-center px-1 bg-primary text-white text-[10px] font-bold rounded-full">
                    {favoritesCount > 99 ? "99+" : favoritesCount}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className={`text-[10px] font-medium relative z-10 ${isActive ? "font-semibold" : ""}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
