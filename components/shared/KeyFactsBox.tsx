import React from "react";
import { CheckCircle2, Clock, ShieldCheck, Activity, CalendarCheck } from "lucide-react";

export interface KeyFact {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export interface KeyFactsBoxProps {
  title?: string;
  facts: KeyFact[];
  className?: string;
}

export default function KeyFactsBox({
  title = "Key Clinical Facts",
  facts,
  className = "",
}: KeyFactsBoxProps) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm my-8 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
        <ShieldCheck className="w-5 h-5 text-[#0e263f]" />
        <h3 className="font-heading font-extrabold text-[#0e263f] text-base sm:text-lg">
          {title}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {facts.map((fact, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80"
          >
            <div className="flex items-center gap-2 mb-1">
              {fact.icon || <Activity className="w-4 h-4 text-[#415e79]" />}
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#415e79]">
                {fact.label}
              </span>
            </div>
            <span className="font-heading font-extrabold text-sm sm:text-base text-[#0e263f] block">
              {fact.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
