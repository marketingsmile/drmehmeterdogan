import React from "react";

export interface CaseCardProps {
  id: number;
  patient: string;
  grafts: number;
  technique: string;
  timeframe: string;
  image: string;
  country?: string;
  norwood?: string;
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function CaseCard({
  id,
  patient,
  grafts,
  technique,
  timeframe,
  image,
  country,
  isSelected = false,
  onClick,
  className = "",
}: CaseCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2.5 p-2 pr-3.5 rounded-xl border shrink-0 transition-all duration-200 cursor-pointer min-w-[240px] sm:min-w-[270px] text-left ${
        isSelected
          ? "bg-white border-[#0e263f] shadow-md ring-2 ring-[#0e263f]/15 scale-[1.01]"
          : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs"
      } ${className}`}
    >
      {/* Thumbnail */}
      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
        <img
          src={image}
          alt={patient}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-[#0e263f] text-white font-extrabold text-[8px] flex items-center justify-center">
          {id}
        </div>
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <h4 className="font-heading font-bold text-[#0e263f] text-xs truncate">
            {patient}
          </h4>
          <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-slate-100 text-[#0e263f] shrink-0">
            {grafts.toLocaleString()} Grafts
          </span>
        </div>
        <p className="text-[10px] text-[#415e79] font-medium truncate">
          {technique}
        </p>
        <span className="text-[9.5px] font-semibold text-slate-500 block truncate">
          {timeframe} • {country || "Verified Patient"}
        </span>
      </div>
    </button>
  );
}
