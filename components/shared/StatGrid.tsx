import React from "react";
import StatCard, { StatCardProps } from "./StatCard";

export interface StatGridProps {
  stats: StatCardProps[];
  className?: string;
  dark?: boolean;
}

export default function StatGrid({
  stats,
  className = "",
  dark = false,
}: StatGridProps) {
  return (
    <div
      className={`grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 ${className}`}
    >
      {stats.map((stat, idx) => (
        <StatCard
          key={idx}
          icon={stat.icon}
          number={stat.number}
          label={stat.label}
          dark={dark || stat.dark}
        />
      ))}
    </div>
  );
}
