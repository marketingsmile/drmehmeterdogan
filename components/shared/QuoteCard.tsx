import React from "react";
import { QuotesIcon } from "hugeicons-react";

export interface QuoteCardProps {
  quote: string;
  author: string;
  title?: string;
  className?: string;
  dark?: boolean;
}

export default function QuoteCard({
  quote,
  author,
  title,
  className = "",
  dark = false,
}: QuoteCardProps) {
  // Strip any accidental leading dashes or em-dashes
  const cleanAuthor = author.replace(/^[—–\-]\s*/, "");

  return (
    <div
      className={`p-5 sm:p-6 rounded-2xl border-l-4 relative overflow-hidden ${
        dark
          ? "bg-[#0b1f3a] border-l-cyan-400 border border-white/10 text-white"
          : "bg-slate-50 border-l-[#0e263f] border border-slate-200 text-[#0e263f]"
      } ${className}`}
    >
      <QuotesIcon
        size={36}
        className={`absolute top-3 right-3 pointer-events-none ${
          dark ? "text-white/10" : "text-[#0e263f]/15"
        }`}
      />

      <p className="font-heading italic text-sm sm:text-base font-medium leading-relaxed relative z-10">
        "{quote}"
      </p>

      <div className="mt-3 relative z-10">
        <span
          className={`block text-xs font-bold ${
            dark ? "text-slate-200" : "text-[#415e79]"
          }`}
        >
          {cleanAuthor}
        </span>
        {title && (
          <span
            className={`block text-[11px] font-semibold mt-0.5 ${
              dark ? "text-slate-400" : "text-slate-500"
            }`}
          >
            {title}
          </span>
        )}
      </div>
    </div>
  );
}
