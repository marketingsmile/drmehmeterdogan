import React from "react";
import Link from "next/link";
import { Check, Buildings, NavigationArrow } from "@phosphor-icons/react/dist/ssr";

export type PricingTier = "gold" | "platinum" | "diamond";

export interface PricingCardProps {
  tier: PricingTier;
  price: string;
  name: string;
  subtitle?: string;
  badge?: string;
  features: string[];
  hotel: string;
  transfer: string;
  doctorInvolvement?: string;
  ctaText?: string;
  ctaHref?: string;
  className?: string;
}

export default function PricingCard({
  tier,
  price,
  name,
  subtitle = "all-inclusive · no hidden fees",
  badge,
  features,
  hotel,
  transfer,
  doctorInvolvement,
  ctaText = "Select Package",
  ctaHref = "/#consultation",
  className = "",
}: PricingCardProps) {
  const isGold = tier === "gold";
  const isPlatinum = tier === "platinum";
  const isDiamond = tier === "diamond";

  // Tier-specific styles
  const headerBg = isGold
    ? "bg-[#dda83e] text-[#1a1a1a]"
    : isPlatinum
    ? "bg-[#cbd5e1] text-[#1a1a1a]"
    : "p-6 text-center border-b border-cyan-900/40";

  const cardBorder = isDiamond
    ? "border-cyan-900/50 bg-[#091a2e] text-white shadow-2xl hover:scale-[1.01]"
    : "border-slate-200 bg-white text-slate-800 shadow-lg hover:shadow-xl";

  const checkBg = isGold
    ? "bg-[#dda83e]/20 text-[#b45309]"
    : isPlatinum
    ? "bg-slate-200 text-slate-700"
    : "bg-cyan-500/20 text-[#38bdf8]";

  return (
    <div
      className={`rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-300 ${cardBorder} ${className}`}
    >
      <div>
        {/* Tier Header Block */}
        {isDiamond ? (
          <div className="p-6 text-center border-b border-cyan-900/40">
            <div className="flex items-center justify-center gap-2 mb-1">
              <span className="text-xs uppercase font-extrabold tracking-widest text-[#38bdf8]">
                {name}
              </span>
              {badge && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#38bdf8] text-[#091a2e] text-[10px] font-extrabold uppercase">
                  {badge}
                </span>
              )}
            </div>
            <h3 className="font-heading text-4xl sm:text-5xl font-extrabold my-1 text-white">
              {price}
            </h3>
            <span className="text-xs italic font-medium text-slate-300 block">
              {subtitle}
            </span>
          </div>
        ) : (
          <div className={`${headerBg} p-6 text-center`}>
            <span className="text-xs uppercase font-extrabold tracking-widest block opacity-85 mb-1">
              {name}
            </span>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold my-1">
              {price}
            </h3>
            <span className="text-xs italic font-medium opacity-90 block">
              {subtitle}
            </span>
          </div>
        )}

        {/* Doctor Involvement Callout (Crucial for medical accuracy) */}
        {doctorInvolvement && (
          <div
            className={`p-4 mx-6 mt-6 rounded-xl border text-xs leading-relaxed font-medium ${
              isDiamond
                ? "bg-[#0e263f] border-[#38bdf8]/30 text-slate-200"
                : "bg-slate-50 border-slate-200 text-slate-700"
            }`}
          >
            <span
              className={`block font-extrabold uppercase tracking-wider text-[10px] mb-1 ${
                isDiamond ? "text-[#38bdf8]" : "text-[#415e79]"
              }`}
            >
              Medical Team & Supervision
            </span>
            <p>{doctorInvolvement}</p>
          </div>
        )}

        {/* Inclusions Feature List */}
        <div className="p-6 space-y-3.5 text-sm font-medium">
          <ul className="space-y-3">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full ${checkBg} flex items-center justify-center shrink-0 mt-0.5`}
                >
                  <Check weight="bold" className="w-3.5 h-3.5" />
                </div>
                <span
                  className={
                    isDiamond ? "text-slate-200 text-xs sm:text-sm" : "text-slate-700 text-xs sm:text-sm"
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer: Hotel, Transfer & Action */}
      <div className="p-6 pt-0 space-y-4">
        <div
          className={`border-t pt-4 space-y-2 text-xs font-semibold ${
            isDiamond ? "border-cyan-900/40 text-slate-300" : "border-slate-200 text-slate-600"
          }`}
        >
          <div className="flex items-center gap-2">
            <Buildings
              weight="bold"
              className={`w-4 h-4 ${isDiamond ? "text-cyan-400" : "text-slate-500"}`}
            />
            <span>{hotel}</span>
          </div>
          <div className="flex items-center gap-2">
            <NavigationArrow
              weight="bold"
              className={`w-4 h-4 ${isDiamond ? "text-cyan-400" : "text-slate-500"}`}
            />
            <span>{transfer}</span>
          </div>
        </div>

        <Link
          href={ctaHref}
          className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center transition-all shadow-md ${
            isDiamond
              ? "bg-[#38bdf8] hover:bg-[#0284c7] text-[#091a2e] font-extrabold shadow-cyan-950"
              : "bg-[#0e263f] hover:bg-[#173656] text-white"
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </div>
  );
}
