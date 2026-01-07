"use client";

import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

/**
 * Skeleton - Loading placeholder with shimmer animation
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "skeleton rounded-lg",
        className
      )}
    />
  );
}

/**
 * SkeletonPill - Name pill shaped skeleton
 */
export function SkeletonPill({ className }: SkeletonProps) {
  return (
    <Skeleton className={cn("h-10 w-20 rounded-full", className)} />
  );
}

/**
 * SkeletonCard - Card shaped skeleton for name cards
 */
export function SkeletonCard({ className }: SkeletonProps) {
  return (
    <div className={cn("bg-card rounded-3xl border border-border p-6", className)}>
      <div className="flex flex-col items-center space-y-4">
        <Skeleton className="h-10 w-32" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-20" />
      </div>
    </div>
  );
}

/**
 * SkeletonNameList - Multiple name pill skeletons
 */
export function SkeletonNameList({ count = 8, className }: SkeletonProps & { count?: number }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonPill
          key={i}
          className={cn(
            // Vary widths for more natural look
            i % 3 === 0 ? "w-24" : i % 3 === 1 ? "w-20" : "w-16"
          )}
        />
      ))}
    </div>
  );
}
