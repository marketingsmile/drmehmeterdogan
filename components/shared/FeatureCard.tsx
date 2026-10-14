import React from "react";
import { CheckmarkBadge01Icon } from "hugeicons-react";

export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  dark?: boolean;
}

export function FeatureCard({
  icon,
  title,
  description,
  className = "",
  dark = false,
}: FeatureCardProps) {
  return (
    <div
      className={`p-4 sm:p-5 rounded-xl border transition-all duration-200 ${
        dark
          ? "bg-[#0b1f3a] border-white/15 hover:border-white/30 text-white"
          : "bg-slate-50 border-slate-200 hover:border-[#0e263f] text-[#0e263f]"
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-1.5">
        {icon || (
          <CheckmarkBadge01Icon
            size={18}
            strokeWidth={2}
            className={dark ? "text-cyan-400 shrink-0" : "text-[#415e79] shrink-0"}
          />
        )}
        <h4 className="font-heading font-bold text-sm sm:text-base">
          {title}
        </h4>
      </div>
      <p
        className={`text-xs sm:text-sm leading-normal font-medium ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export interface FeatureGridProps {
  features: {
    icon?: React.ReactNode;
    title: string;
    description: string;
  }[];
  columns?: 2 | 3 | 4;
  className?: string;
  dark?: boolean;
}

export function FeatureGrid({
  features,
  columns = 2,
  className = "",
  dark = false,
}: FeatureGridProps) {
  const colClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
      ? "grid-cols-1 md:grid-cols-3"
      : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid ${colClass} gap-4 ${className}`}>
      {features.map((item, idx) => (
        <FeatureCard
          key={idx}
          icon={item.icon}
          title={item.title}
          description={item.description}
          dark={dark}
        />
      ))}
    </div>
  );
}

export default FeatureCard;
