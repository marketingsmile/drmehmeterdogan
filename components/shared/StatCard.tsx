import React from "react";

export interface StatCardProps {
  icon?: React.ReactNode;
  number: string;
  label: string;
  className?: string;
  dark?: boolean;
}

export default function StatCard({
  icon,
  number,
  label,
  className = "",
  dark = false,
}: StatCardProps) {
  return (
    <div
      className={`group relative p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden ${
        dark
          ? "bg-[#0b1f3a] border-white/15 hover:border-white/30 text-white shadow-md hover:shadow-xl"
          : "bg-gradient-to-b from-white via-white to-slate-50/90 border-[#415e79]/20 hover:border-[#0e263f] text-[#0e263f] shadow-sm hover:shadow-md"
      } ${className}`}
    >
      {/* Top subtle medical indicator line */}
      <div
        className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent ${
          dark ? "via-white/30" : "via-[#415e79]/40"
        } to-transparent group-hover:via-[#0e263f] transition-colors`}
      />

      {/* Icon badge */}
      {icon && (
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
            dark
              ? "bg-white/10 border border-white/20 text-white"
              : "bg-slate-100/90 border border-[#415e79]/15 text-[#415e79]"
          }`}
        >
          {icon}
        </div>
      )}

      {/* Metric Number */}
      <span
        className={`font-heading font-extrabold text-3xl sm:text-4xl tracking-tight mb-1 ${
          dark ? "text-white" : "text-[#0e263f]"
        }`}
      >
        {number}
      </span>

      {/* Label */}
      <span
        className={`text-xs sm:text-sm font-bold tracking-tight ${
          dark ? "text-slate-300" : "text-[#415e79]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
