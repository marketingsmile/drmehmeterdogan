"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  GlobeHemisphereWest,
  CurrencyDollar,
  Sparkle,
  CheckCircle,
  MapPin
} from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";

interface GraftCalculatorProps {
  locale: Locale;
}

export default function GraftCalculator({ locale }: GraftCalculatorProps) {
  const dict = getDictionary(locale);
  const stages = dict.calculator.stages;
  const isTr = locale === "tr";
  const [selectedIndex, setSelectedIndex] = useState(1); // Default Norwood 3

  const currentStage = stages[selectedIndex];
  const costs = currentStage.internationalCosts;
  const basePrefix = isTr ? "/tr" : "";

  return (
    <section id="calculator" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#415e79]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Calculator weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
            <span>{dict.calculator.tag}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
            {dict.calculator.title}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            {dict.calculator.subtitle}
          </p>
        </div>

        {/* Calculator Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Stage Selection Options (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="font-bold text-[#0e263f] text-xs uppercase tracking-wider mb-3">
              {dict.calculator.selectStage}
            </h4>

            {stages.map((st, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`w-full p-4 rounded-2xl text-left transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? "bg-slate-100 border-[#0e263f] shadow-md scale-[1.01]"
                      : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-sm transition-colors shrink-0 ${
                        isSelected
                          ? "bg-[#0e263f] text-white shadow-sm"
                          : "bg-slate-100 text-[#0e263f]"
                      }`}
                    >
                      {st.stage.replace("Norwood ", "N-")}
                    </div>
                    <div>
                      <h5 className="font-heading font-extrabold text-[#0e263f] text-base leading-tight">
                        {st.stage}
                      </h5>
                      <p className="text-xs text-slate-600 font-medium mt-0.5">
                        {st.label}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="font-extrabold text-sm text-[#0e263f] block">
                      {st.minGrafts.toLocaleString()} - {st.maxGrafts.toLocaleString()}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Grafts</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Surgical Estimate & Country Price Comparison Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#415e79]/10 rounded-full blur-2xl pointer-events-none"></div>

              <div className="flex items-center justify-between border-b border-slate-200 pb-5 mb-6">
                <div>
                  <span className="text-xs text-slate-500 font-bold uppercase tracking-wider block">
                    {dict.calculator.resultTitle}
                  </span>
                  <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e263f] mt-1">
                    {currentStage.stage} Analysis
                  </h4>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#0e263f] shadow-xs">
                  {currentStage.label}
                </div>
              </div>

              {/* Graft Range Big Display */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-6 text-center">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  {dict.calculator.graftRange}
                </span>
                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-[#0e263f] my-1 tracking-tight">
                  {currentStage.minGrafts.toLocaleString()} – {currentStage.maxGrafts.toLocaleString()}
                </div>
                <span className="text-xs text-slate-600 font-semibold">
                  Individual Follicular Units (Hair Grafts)
                </span>
              </div>

              {/* Specifics Breakdown (Region & Hours) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mb-1">
                    <MapPin weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
                    <span>{dict.calculator.targetArea}</span>
                  </div>
                  <span className="text-sm font-extrabold text-[#0e263f]">
                    {currentStage.area}
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold mb-1">
                    <Clock weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
                    <span>{dict.calculator.estimatedTime}</span>
                  </div>
                  <span className="text-sm font-extrabold text-[#0e263f]">
                    {currentStage.hours}
                  </span>
                </div>
              </div>

              {/* International Country Cost Comparison Box */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-6">
                <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <GlobeHemisphereWest weight="bold" className="w-4 h-4 text-[#0e263f]" />
                    <h5 className="font-heading font-extrabold text-xs sm:text-sm text-[#0e263f]">
                      {isTr ? "Uluslararası Ortalama Operasyon Maliyeti" : "Estimated International Procedure Cost"}
                    </h5>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    {costs.turkey.savings}
                  </span>
                </div>

                {/* Country Cost Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center mb-4">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-500 font-bold block">🇺🇸 USA</span>
                    <span className="font-extrabold text-xs text-slate-800">
                      ${costs.usa.min.toLocaleString()} - ${costs.usa.max.toLocaleString()}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-500 font-bold block">🇬🇧 UK</span>
                    <span className="font-extrabold text-xs text-slate-800">
                      £{costs.uk.min.toLocaleString()} - £{costs.uk.max.toLocaleString()}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-500 font-bold block">🇦🇺 Australia</span>
                    <span className="font-extrabold text-xs text-slate-800">
                      A${costs.australia.min.toLocaleString()} - A${costs.australia.max.toLocaleString()}
                    </span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-500 font-bold block">🇮🇪 Ireland</span>
                    <span className="font-extrabold text-xs text-slate-800">
                      €{costs.ireland.min.toLocaleString()} - €{costs.ireland.max.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Turkey Featured Rate Row */}
                <div className="p-3.5 rounded-xl bg-[#0e263f] text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center font-bold text-white text-xs">
                      🇹🇷
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-300 block">
                        {isTr ? "Başlangıç Fiyatı €2.390, her şey dâhil" : "Starting from €2,390, all-inclusive"}
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {isTr ? "Otel + VIP Transfer + Bakım Paketi Dâhil" : "Hotel + VIP Transfers + Care Included"}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-heading font-extrabold text-lg sm:text-xl text-white block">
                      €2,390
                    </span>
                    <span className="text-[10px] text-slate-300 font-medium">
                      {isTr ? "Her Şey Dâhil" : "All-Inclusive"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Primary Consultation Trigger */}
              <Link
                href={`${basePrefix}/#consultation`}
                className="w-full py-4 rounded-2xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>{dict.calculator.cta} {currentStage.stage}</span>
                <ArrowRight weight="bold" className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
