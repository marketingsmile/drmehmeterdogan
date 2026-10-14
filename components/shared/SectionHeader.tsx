import React from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  icon?: React.ReactNode;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "center" | "left";
  as?: "h2" | "h3";
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function SectionHeader({
  eyebrow,
  icon,
  title,
  subtitle,
  align = "center",
  as: HeadingTag = "h2",
  className = "",
  id,
  dark = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`max-w-3xl mb-12 sm:mb-14 ${
        isCenter ? "text-center mx-auto" : "text-left"
      } ${className}`}
    >
      {/* Outlined Eyebrow Pill */}
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm ${
            dark
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-white border border-[#415e79]/30 text-[#0e263f]"
          }`}
        >
          {icon && <span className="shrink-0">{icon}</span>}
          <span>{eyebrow}</span>
        </div>
      )}

      {/* Main Title (H2 or H3 with optional ID for ToC linking) */}
      <HeadingTag
        id={id}
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 leading-tight ${
          dark ? "text-white" : "text-[#0e263f]"
        }`}
      >
        {title}
      </HeadingTag>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-base sm:text-lg font-medium leading-relaxed ${
            dark ? "text-slate-300" : "text-[#415e79]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
