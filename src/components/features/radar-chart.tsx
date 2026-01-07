"use client";

import { memo } from "react";
import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";

export interface RadarDataPoint {
  axis: string;
  value: number;
  fullMark: number;
}

interface NameRadarChartProps {
  data: RadarDataPoint[];
  compareData?: RadarDataPoint[];
  compareName?: string;
  name?: string;
}

/**
 * NameRadarChart - 8-axis radar chart for name analysis visualization.
 * Axes: Uniqueness, Timelessness, Pronunciation, Spelling, Nicknames, Professional, Teasing, Flow
 * Memoized to prevent unnecessary re-renders since recharts is expensive.
 */
export const NameRadarChart = memo(function NameRadarChart({
  data,
  compareData,
  compareName,
  name = "Score",
}: NameRadarChartProps) {
  // Merge data if comparing
  const chartData = data.map((d, i) => ({
    axis: d.axis,
    [name]: d.value,
    ...(compareData ? { [compareName || "Compare"]: compareData[i]?.value || 0 } : {}),
    fullMark: d.fullMark,
  }));

  return (
    <div className="h-[240px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart cx="50%" cy="50%" outerRadius="65%" data={chartData}>
          <PolarGrid
            stroke="var(--border-strong)"
            strokeOpacity={0.8}
          />
          <PolarAngleAxis
            dataKey="axis"
            tick={{
              fill: "var(--foreground)",
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={{
              fill: "var(--muted)",
              fontSize: 10,
            }}
            tickCount={5}
            axisLine={false}
          />
          <Radar
            name={name}
            dataKey={name}
            stroke="var(--primary)"
            fill="var(--primary)"
            fillOpacity={0.45}
            strokeWidth={2.5}
          />
          {compareData && (
            <Radar
              name={compareName || "Compare"}
              dataKey={compareName || "Compare"}
              stroke="var(--accent)"
              fill="var(--accent)"
              fillOpacity={0.35}
              strokeWidth={2.5}
            />
          )}
          {compareData && <Legend />}
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
});

/**
 * Default radar data axes for name analysis
 */
export const radarAxes = [
  "Uniqueness",
  "Timelessness",
  "Pronunciation",
  "Spelling",
  "Nicknames",
  "Professional",
  "Teasing Resistance",
  "Flow",
];

/**
 * Create radar data from scores object
 */
export function createRadarData(scores: { [key: string]: number }): RadarDataPoint[] {
  return radarAxes.map((axis) => ({
    axis,
    value: scores[axis] ?? 50,
    fullMark: 100,
  }));
}
