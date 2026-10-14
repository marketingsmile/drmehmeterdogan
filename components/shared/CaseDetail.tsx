import React from "react";
import { CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export interface CaseDetailProps {
  id: number;
  title: string;
  patient: string;
  grafts: number;
  timeframe: string;
  technique: string;
  image: string;
  norwood?: string;
  doctor?: string;
  country?: string;
  verifiedLabel?: string;
  className?: string;
}

export default function CaseDetail({
  id,
  title,
  patient,
  grafts,
  timeframe,
  technique,
  image,
  norwood = "Norwood 3-4",
  doctor = "Dr. Mehmet Erdoğan",
  country = "Verified Patient",
  verifiedLabel = "Authentic Surgical Case - Dr. Mehmet Erdoğan Practice",
  className = "",
}: CaseDetailProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Header with Chips */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-4">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#415e79] font-bold block">
              VERIFIED PATIENT CASE #{id}
            </span>
            <h3 className="font-heading font-extrabold text-[#0e263f] text-base sm:text-lg mt-0.5">
              {title}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {norwood && (
              <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0e263f] border border-slate-200 font-extrabold text-[11px]">
                {norwood}
              </span>
            )}
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0e263f] border border-slate-200 font-bold text-[11px]">
              {grafts.toLocaleString()} Grafts
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-[11px]">
              {timeframe}
            </span>
          </div>
        </div>

        {/* Scaled Transformation Image Box */}
        <div className="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-200 group flex items-center justify-center min-h-[260px] sm:min-h-[320px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain object-center group-hover:scale-[1.01] transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e263f]/60 via-transparent to-transparent pointer-events-none" />

          {/* Floating Verification Ribbon */}
          <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <CheckCircle weight="fill" className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-extrabold text-[#0e263f]">
                {verifiedLabel}
              </span>
            </div>
            <span className="text-[10px] font-bold text-[#415e79] hidden sm:inline">
              {technique}
            </span>
          </div>
        </div>
      </div>

      {/* Meta Footer */}
      <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>Patient: {patient}</span>
        <span>{country}</span>
      </div>
    </div>
  );
}
