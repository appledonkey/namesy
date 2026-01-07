"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

export interface PopularityDataPoint {
  year: number;
  rank?: number;
  count?: number;
}

interface PopularityChartProps {
  data: PopularityDataPoint[];
  type?: "rank" | "count";
  height?: number;
}

/**
 * PopularityChart - Shows name popularity trends over time.
 * Can display either rank (inverted, lower is better) or count data.
 */
export function PopularityChart({
  data,
  type = "rank",
  height = 300,
}: PopularityChartProps) {
  const dataKey = type === "rank" ? "rank" : "count";
  const isRank = type === "rank";

  // For rank, we invert the axis (1 at top, higher numbers at bottom)
  const minValue = isRank
    ? Math.min(...data.map((d) => d.rank || Infinity))
    : 0;
  const maxValue = isRank
    ? Math.max(...data.map((d) => d.rank || 0))
    : Math.max(...data.map((d) => d.count || 0));

  return (
    <ResponsiveContainer width="100%" height={height}>
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
            <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="3 3"
          stroke="var(--border)"
          strokeOpacity={0.5}
        />
        <XAxis
          dataKey="year"
          tick={{ fill: "var(--muted)", fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "var(--border)" }}
        />
        <YAxis
          reversed={isRank}
          domain={isRank ? [1, maxValue] : [0, "auto"]}
          tick={{ fill: "var(--muted)", fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "var(--border)" }}
          tickFormatter={(value) => (isRank ? `#${value}` : value.toLocaleString())}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "12px",
            boxShadow: "var(--shadow-md)",
          }}
          labelStyle={{ color: "var(--foreground)", fontWeight: 600 }}
          formatter={(value) => [
            isRank ? `Rank #${value}` : (value as number).toLocaleString(),
            isRank ? "Rank" : "Births",
          ]}
        />
        <Area
          type="monotone"
          dataKey={dataKey}
          stroke="var(--primary)"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

/**
 * MiniSparkline - Small inline chart for name cards
 */
interface MiniSparklineProps {
  data: PopularityDataPoint[];
  width?: number;
  height?: number;
}

export function MiniSparkline({
  data,
  width = 80,
  height = 24,
}: MiniSparklineProps) {
  // Take last 20 years of data
  const recentData = data.slice(-20);

  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={recentData}>
        <Line
          type="monotone"
          dataKey="rank"
          stroke="var(--primary)"
          strokeWidth={1.5}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
