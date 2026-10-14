"use client";

import Link from "next/link";
import { Check, Buildings, NavigationArrow, ArrowRight, Sparkle } from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";

interface PackagesGridProps {
  locale: Locale;
}

export default function PackagesGrid({ locale }: PackagesGridProps) {
  const dict = getDictionary(locale);
  const basePrefix = locale === "tr" ? "/tr" : "";
  const isTr = locale === "tr";

  return (
    <section id="packages" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e263f] tracking-tight mb-4">
            {dict.packages.title}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            {dict.packages.subtitle}
          </p>
        </div>

        {/* Top Announcement Bar */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#0e263f] text-white shadow-md">
            <span className="w-6 h-0.5 bg-[#415e79] font-bold"></span>
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              {dict.packages.topBanner || "All packages include our 1-Year Comprehensive Care Plan."}
            </span>
          </div>
        </div>

        {/* 3 Package Cards Grid Matching User Screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Card 1: GOLD (Gold Header #dda83e) */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl">
            <div>
              {/* Gold Header Block */}
              <div className="bg-[#dda83e] p-6 text-center text-[#1a1a1a]">
                <span className="text-xs uppercase font-extrabold tracking-widest block text-[#1a1a1a]/80 mb-1">
                  GOLD
                </span>
                <h3 className="font-heading text-4xl sm:text-5xl font-bold my-1 text-[#1a1a1a]">
                  €2,390
                </h3>
                <span className="text-xs italic font-medium opacity-90 block">
                  {isTr ? "her şey dâhil · gizli maliyet yok" : "all-inclusive · no hidden fees"}
                </span>
              </div>

              {/* Card Body Features */}
              <div className="p-6 space-y-4 text-sm text-slate-700 font-medium">
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#dda83e]/20 text-[#b45309] flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Kişiye ve yaşa özel saç çizgisi tasarımı" : "Personal, age-appropriate hairline design"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#dda83e]/20 text-[#b45309] flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Dr. Mehmet Erdoğan & Medikal Ekip konsültasyonu" : "Consultation & planning by Dr. Mehmet Erdoğan & Team"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#dda83e]/20 text-[#b45309] flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Safir kanal açımı cerrahi teknisyenler tarafından" : "Sapphire incision by our surgical technicians"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#dda83e]/20 text-[#b45309] flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Mikro motor FUE greft alımı" : "Micro motor FUE extraction"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#dda83e]/20 text-[#b45309] flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Cerrahi teknisyenler tarafından manuel ekim" : "Manual implantation by surgical technicians"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#dda83e]/20 text-[#b45309] flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Ameliyat öncesi testler, PRP & bakım paketi" : "Pre-op blood tests, PRP & aftercare package"}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Inclusions & CTA */}
            <div className="p-6 pt-0 space-y-4">
              <div className="border-t border-slate-200 pt-4 space-y-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <Buildings weight="bold" className="w-4 h-4 text-slate-500" />
                  <span>{isTr ? "2 Gece · 4 Yıldızlı Otel" : "2 Nights · 4-Star Hotel"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <NavigationArrow weight="bold" className="w-4 h-4 text-slate-500" />
                  <span>{isTr ? "VIP Transfer · Havalimanı – Otel – Klinik" : "VIP Transfer · Airport – Hotel – Clinic"}</span>
                </div>
              </div>

              <Link
                href={`${basePrefix}/#consultation`}
                className="w-full py-3.5 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-bold text-sm flex items-center justify-center transition-all shadow-md"
              >
                {isTr ? "Gold Paketi Seçin" : "Select Gold"}
              </Link>
            </div>
          </div>

          {/* Card 2: PLATINUM (Silver / Grey Header #cbd5e1) */}
          <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-lg flex flex-col justify-between transition-all hover:shadow-xl">
            <div>
              {/* Platinum Header Block */}
              <div className="bg-[#cbd5e1] p-6 text-center text-[#1a1a1a]">
                <span className="text-xs uppercase font-extrabold tracking-widest block text-[#1a1a1a]/80 mb-1">
                  PLATINUM
                </span>
                <h3 className="font-heading text-4xl sm:text-5xl font-bold my-1 text-[#1a1a1a]">
                  €3,290
                </h3>
                <span className="text-xs italic font-medium opacity-90 block">
                  {isTr ? "her şey dâhil · gizli maliyet yok" : "all-inclusive · no hidden fees"}
                </span>
              </div>

              {/* Card Body Features */}
              <div className="p-6 space-y-4 text-sm text-slate-700 font-medium">
                <ul className="space-y-3.5">
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Kişiye ve yaşa özel saç çizgisi tasarımı" : "Personal, age-appropriate hairline design"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Dr. Mehmet Erdoğan & Kıdemli Ekip konsültasyonu" : "Consultation & planning by Dr. Mehmet Erdoğan & Senior Team"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Safir kanal açımı Dr. Mehmet Erdoğan tarafından" : "Sapphire incision by Dr. Mehmet Erdoğan"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Mikro motor FUE greft alımı" : "Micro motor FUE extraction"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Cerrahi teknisyenler tarafından manuel ekim" : "Manual implantation by surgical technicians"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Ameliyat öncesi testler, PRP & bakım paketi" : "Pre-op blood tests, PRP & aftercare package"}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Inclusions & CTA */}
            <div className="p-6 pt-0 space-y-4">
              <div className="border-t border-slate-200 pt-4 space-y-2 text-xs font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <Buildings weight="bold" className="w-4 h-4 text-slate-500" />
                  <span>{isTr ? "2 Gece · 5 Yıldızlı Otel" : "2 Nights · 5-Star Hotel"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <NavigationArrow weight="bold" className="w-4 h-4 text-slate-500" />
                  <span>{isTr ? "VIP Transfer · Havalimanı – Otel – Klinik" : "VIP Transfer · Airport – Hotel – Clinic"}</span>
                </div>
              </div>

              <Link
                href={`${basePrefix}/#consultation`}
                className="w-full py-3.5 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-bold text-sm flex items-center justify-center transition-all shadow-md"
              >
                {isTr ? "Platinum Paketi Seçin" : "Select Platinum"}
              </Link>
            </div>
          </div>

          {/* Card 3: DIAMOND (Midnight Navy #091a2e with Cyan Accents) */}
          <div className="rounded-2xl border border-cyan-900/50 bg-[#091a2e] text-white overflow-hidden shadow-2xl flex flex-col justify-between transition-all hover:scale-[1.01]">
            <div>
              {/* Diamond Header Block */}
              <div className="p-6 text-center border-b border-cyan-900/40">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-[#38bdf8]">
                    DIAMOND
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#38bdf8] text-[#091a2e] text-[10px] font-extrabold uppercase">
                    {isTr ? "EN KAPSAMLI" : "MOST COMPLETE"}
                  </span>
                </div>
                <h3 className="font-heading text-4xl sm:text-5xl font-bold my-1 text-white !text-white">
                  €5,790
                </h3>
                <span className="text-xs italic font-medium text-slate-300 block">
                  {isTr ? "her şey dâhil · gizli maliyet yok" : "all-inclusive · no hidden fees"}
                </span>
              </div>

              {/* Head Doctor Execution Box */}
              <div className="p-6 space-y-4">
                <div className="p-4 rounded-xl bg-[#0e263f] border border-[#38bdf8]/30">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#38bdf8] block mb-1">
                    {isTr ? "BAŞHEKİM UYGULAMASI & KIDEMLİ DOKTOR" : "HEAD DOCTOR EXECUTION & SENIOR HEAD DOCTOR"}
                  </span>
                  <p className="text-xs text-slate-200 leading-relaxed font-medium mb-3">
                    {isTr 
                      ? "Bizzat kurucu hekimimiz Dr. Mehmet Erdoğan ve kıdemli başhekimlerimiz tarafından uygulanır."
                      : "Performed exclusively by our founding doctor, Dr. Mehmet Erdoğan, or by our senior head doctor."}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-200 font-semibold">
                    <li className="flex items-center gap-2">
                      <Check weight="bold" className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>{isTr ? "Kişiye özel saç çizgisi tasarımı" : "Personal, age-appropriate hairline design"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check weight="bold" className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>{isTr ? "Konsültasyon & planlama" : "Consultation & planning"}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check weight="bold" className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span>{isTr ? "Safir kanal açımı" : "Sapphire incision"}</span>
                    </li>
                  </ul>
                </div>

                {/* Additional Diamond Exclusives */}
                <div className="space-y-2.5 text-xs text-slate-200 font-medium">
                  <span className="text-[11px] font-bold text-slate-400 block italic">
                    {isTr ? "Platinum içeriğine ek olarak:" : "Everything in Platinum, plus:"}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "Eksozom kök hücre terapisi dâhil" : "Exosome therapy included"}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#38bdf8]/20 text-[#38bdf8] flex items-center justify-center shrink-0">
                      <Check weight="bold" className="w-3.5 h-3.5" />
                    </div>
                    <span>{isTr ? "İlk 3 ay için saç koruma & bakım seti" : "Hair care & protection kit for first 3 months"}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Inclusions & CTA */}
            <div className="p-6 pt-0 space-y-4">
              <div className="border-t border-cyan-900/40 pt-4 space-y-2 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <Buildings weight="bold" className="w-4 h-4 text-[#38bdf8]" />
                  <span>{isTr ? "3 Gece · 5 Yıldızlı Otel" : "3 Nights · 5-Star Hotel"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <NavigationArrow weight="bold" className="w-4 h-4 text-[#38bdf8]" />
                  <span>{isTr ? "VIP Transfer · Havalimanı – Otel – Klinik" : "VIP Transfer · Airport – Hotel – Clinic"}</span>
                </div>
              </div>

              <Link
                href={`${basePrefix}/#consultation`}
                className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#091a2e] font-bold text-sm flex items-center justify-center transition-all shadow-md"
              >
                {isTr ? "Diamond Paketi Seçin" : "Select Diamond"}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
