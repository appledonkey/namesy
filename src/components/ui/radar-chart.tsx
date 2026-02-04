"use client";

import { motion } from "framer-motion";
import type { NameScores } from "@/lib/name-analysis";

interface RadarChartProps {
  scores: NameScores;
  size?: number;
  className?: string;
}

const LABELS: { key: keyof NameScores; abbr: string }[] = [
  { key: "Uniqueness", abbr: "Unique" },
  { key: "Timelessness", abbr: "Timeless" },
  { key: "Pronunciation", abbr: "Pronunc." },
  { key: "Spelling", abbr: "Spelling" },
  { key: "Nicknames", abbr: "Nicknames" },
  { key: "Professional", abbr: "Profess." },
  { key: "Teasing Resistance", abbr: "Tease Res." },
  { key: "Flow", abbr: "Flow" },
];

const AXIS_COUNT = LABELS.length;
const CENTER = 100;
const RADIUS = 70;
const LABEL_RADIUS = 90;

/** Convert axis index + fraction (0-1) to SVG x,y */
function polarToXY(index: number, fraction: number): [number, number] {
  const angle = (Math.PI * 2 * index) / AXIS_COUNT - Math.PI / 2;
  return [
    CENTER + Math.cos(angle) * RADIUS * fraction,
    CENTER + Math.sin(angle) * RADIUS * fraction,
  ];
}

/** Build an octagon path at a given fraction of RADIUS */
function ringPath(fraction: number): string {
  return Array.from({ length: AXIS_COUNT }, (_, i) => {
    const [x, y] = polarToXY(i, fraction);
    return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ") + " Z";
}

export function RadarChart({ scores, size = 140, className = "" }: RadarChartProps) {
  // Build the data polygon
  const dataPath = LABELS.map((l, i) => {
    const value = Math.max(0, Math.min(100, scores[l.key] ?? 50)) / 100;
    const [x, y] = polarToXY(i, value);
    return `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ") + " Z";

  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Name analysis radar chart"
    >
      {/* Guide rings at 33%, 66%, 100% */}
      {[0.33, 0.66, 1].map((f) => (
        <path
          key={f}
          d={ringPath(f)}
          fill="none"
          stroke="var(--border)"
          strokeWidth={0.5}
        />
      ))}

      {/* Axis lines from center to edge */}
      {Array.from({ length: AXIS_COUNT }, (_, i) => {
        const [x, y] = polarToXY(i, 1);
        return (
          <line
            key={i}
            x1={CENTER}
            y1={CENTER}
            x2={x}
            y2={y}
            stroke="var(--border)"
            strokeWidth={0.5}
          />
        );
      })}

      {/* Data polygon — animated */}
      <motion.path
        d={dataPath}
        fill="var(--primary)"
        fillOpacity={0.15}
        stroke="var(--primary)"
        strokeWidth={1.5}
        strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
      />

      {/* Score dots on each axis */}
      {LABELS.map((l, i) => {
        const value = Math.max(0, Math.min(100, scores[l.key] ?? 50)) / 100;
        const [x, y] = polarToXY(i, value);
        return (
          <motion.circle
            key={l.key}
            cx={x}
            cy={y}
            r={2}
            fill="var(--primary)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          />
        );
      })}

      {/* Labels outside the chart */}
      {LABELS.map((l, i) => {
        const angle = (Math.PI * 2 * i) / AXIS_COUNT - Math.PI / 2;
        const lx = CENTER + Math.cos(angle) * LABEL_RADIUS;
        const ly = CENTER + Math.sin(angle) * LABEL_RADIUS;

        // Determine text-anchor based on position
        let anchor: "start" | "middle" | "end" = "middle";
        if (lx < CENTER - 5) anchor = "end";
        else if (lx > CENTER + 5) anchor = "start";

        // Slight vertical adjust
        const dy = ly < CENTER - 5 ? -2 : ly > CENTER + 5 ? 6 : 2;

        return (
          <text
            key={l.key}
            x={lx}
            y={ly + dy}
            textAnchor={anchor}
            fill="var(--foreground)"
            fontSize={7}
            opacity={0.6}
            style={{ fontFamily: "var(--font-body, Inter, sans-serif)" }}
          >
            {l.abbr}
          </text>
        );
      })}
    </svg>
  );
}
