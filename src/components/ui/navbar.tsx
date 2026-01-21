"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";
import { Button } from "./button";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/browse", label: "Browse" },
  { href: "/builder", label: "Builder" },
  { href: "/favorites", label: "Favorites" },
];

interface NavBarProps {
  /** Show sign in button (default: true) */
  showSignIn?: boolean;
  /** Show keyboard shortcuts hint (default: false) */
  showShortcuts?: boolean;
}

/**
 * NavBar - Shared navigation component
 * Sticky header with logo, nav links, and optional sign in
 */
export function NavBar({ showSignIn = true, showShortcuts = false }: NavBarProps) {
  const pathname = usePathname();

  return (
    <nav className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-40 safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-heading text-xl font-semibold">
          namesy
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-300 ${
                  isActive
                    ? "text-foreground font-medium"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Keyboard shortcuts hint */}
          {showShortcuts && (
            <div className="hidden sm:flex items-center gap-4 text-xs text-muted">
              <span><kbd className="px-1.5 py-0.5 bg-secondary/50 rounded">R</kbd> random</span>
              <span><kbd className="px-1.5 py-0.5 bg-secondary/50 rounded">S</kbd> save</span>
            </div>
          )}

          {/* Sign In button */}
          {showSignIn && <Button size="sm">Sign In</Button>}
        </div>
      </div>
    </nav>
  );
}
