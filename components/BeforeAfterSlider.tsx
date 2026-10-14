"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Sparkle, 
  CheckCircle, 
  Star, 
  CaretLeft,
  CaretRight, 
  ShieldCheck,
  FirstAid,
  ArrowRight
} from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";

interface BeforeAfterSliderProps {
  locale: Locale;
  showVideos?: boolean;
}

export default function BeforeAfterSlider({ locale, showVideos = true }: BeforeAfterSliderProps) {
  const dict = getDictionary(locale);
  const cases = dict.results.cases;
  const filters = dict.results.filters;
  const isTr = locale === "tr";

  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [activeCaseId, setActiveCaseId] = useState<number>(cases[0].id);

  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  const isAllFilter = activeFilter === filters[0] || activeFilter === "All Cases" || activeFilter === "Tüm Vakalar";

  const filteredCases = isAllFilter
    ? cases
    : cases.filter((c) => c.category === activeFilter);

  useGSAP(
    () => {
      if (leftContentRef.current && rightContentRef.current) {
        gsap.fromTo(
          [leftContentRef.current, rightContentRef.current],
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
        );
      }
    },
    { dependencies: [activeCaseId], scope: containerRef }
  );

  const handlePanelClick = (id: number) => {
    if (id === activeCaseId) return;
    setActiveCaseId(id);
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const activeCase = filteredCases.find((c) => c.id === activeCaseId) || filteredCases[0] || cases[0];

  return (
    <section id="results" ref={containerRef} className="py-12 sm:py-16 bg-slate-50 relative border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header - Prominent */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-3">
            {dict.results.title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium">
            {dict.results.subtitle}
          </p>
        </div>

        {/* Filter Pills Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {filters.map((filterName, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActiveFilter(filterName);
                const nextCases = filterName === filters[0] ? cases : cases.filter((c) => c.category === filterName);
                if (nextCases.length > 0) setActiveCaseId(nextCases[0].id);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 border cursor-pointer ${
                activeFilter === filterName
                  ? "bg-[#0e263f] text-white border-[#0e263f] shadow-sm"
                  : "bg-white text-[#0e263f] border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {filterName}
            </button>
          ))}
        </div>

        {/* Top Horizontal Scrolling Carousel with Arrow Navigation Controls */}
        <div className="relative mb-6 group/carousel">
          {/* Left Arrow Button */}
          <button
            onClick={() => scrollCarousel("left")}
            aria-label="Scroll Left"
            className="absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center text-[#0e263f] hover:bg-slate-50 transition-all cursor-pointer"
          >
            <CaretLeft weight="bold" className="w-4 h-4" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={carouselRef}
            className="flex items-center gap-3 overflow-x-auto px-2 py-2 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
          >
            {filteredCases.map((c) => {
              const isSelected = c.id === activeCase.id;
              return (
                <button
                  key={c.id}
                  onClick={() => handlePanelClick(c.id)}
                  className={`flex items-center gap-2.5 p-2 pr-3.5 rounded-xl border shrink-0 transition-all duration-200 cursor-pointer min-w-[240px] sm:min-w-[270px] text-left ${
                    isSelected
                      ? "bg-white border-[#0e263f] shadow-md ring-2 ring-[#0e263f]/15 scale-[1.01]"
                      : "bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                  }`}
                >
                  {/* Photo Thumbnail */}
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-slate-200">
                    <img
                      src={(c as any).image}
                      alt={c.patient}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-[#0e263f] text-white font-extrabold text-[8px] flex items-center justify-center">
                      {c.id}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-0.5">
                      <h4 className="font-heading font-bold text-[#0e263f] text-xs truncate">
                        {c.patient}
                      </h4>
                      <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded bg-slate-100 text-[#0e263f] shrink-0">
                        {c.grafts.toLocaleString()} Grafts
                      </span>
                    </div>
                    <p className="text-[10px] text-[#415e79] font-medium truncate">
                      {c.technique}
                    </p>
                    <span className="text-[9.5px] font-semibold text-slate-500 block truncate">
                      {c.timeframe} • {(c as any).country || "Verified Patient"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollCarousel("right")}
            aria-label="Scroll Right"
            className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-white border border-slate-300 shadow-md flex items-center justify-center text-[#0e263f] hover:bg-slate-50 transition-all cursor-pointer"
          >
            <CaretRight weight="bold" className="w-4 h-4" />
          </button>
        </div>

        {/* Main Showcase Grid (Scaled to fit viewport comfortably) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
          {/* Left Column (6 cols): Before & After Patient Transformation Image */}
          <div
            ref={leftContentRef}
            className="lg:col-span-6 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#415e79] font-bold block">
                    {isTr ? `DOĞRULANMIŞ HASTA VAKASI #${activeCase.id}` : `VERIFIED PATIENT CASE #${activeCase.id}`}
                  </span>
                  <h3 className="font-heading font-bold text-[#0e263f] text-base sm:text-lg mt-0.5">
                    {activeCase.title}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0e263f] border border-slate-200 font-bold text-[11px]">
                    {activeCase.grafts.toLocaleString()} Grafts
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[#0e263f] border border-slate-200 font-medium text-[11px]">
                    {activeCase.timeframe}
                  </span>
                </div>
              </div>

              {/* Scaled Transformation Image Box */}
              <div className="relative w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-200 group flex items-center justify-center h-[260px] sm:h-[300px] lg:h-[310px]">
                <img
                  src={(activeCase as any).image}
                  alt={activeCase.title}
                  className="w-full h-full object-contain object-center group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e263f]/60 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle weight="fill" className="w-3.5 h-3.5 text-[#0e263f]" />
                    <span className="text-[11px] font-bold text-[#0e263f]">
                      Technique: {activeCase.technique}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#415e79] font-bold">
                    Dr. Mehmet Erdoğan Protocol
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="grid grid-cols-3 gap-2 text-center pt-3 border-t border-slate-100 text-xs mt-3 font-medium text-slate-700">
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-[9.5px] text-slate-500 font-bold block">Patient</span>
                <span className="font-bold text-[#0e263f] text-xs truncate block">{activeCase.patient}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-[9.5px] text-slate-500 font-bold block">Country</span>
                <span className="font-bold text-[#0e263f] text-xs truncate block">{(activeCase as any).country || "United Kingdom 🇬🇧"}</span>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
                <span className="text-[9.5px] text-slate-500 font-bold block">Milestone</span>
                <span className="font-bold text-[#0e263f] text-xs truncate block">{activeCase.timeframe}</span>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): 2 Stacked Cards (Story Card + Authentic Testimonial Card) */}
          <div
            ref={rightContentRef}
            className="lg:col-span-6 flex flex-col justify-between gap-4 h-full"
          >
            {/* Card 1: Surgical Case Details & Story */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <FirstAid weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#0e263f]">
                      {isTr ? "Cerrahi Vaka Özeti" : "Clinical Case Overview & Strategy"}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-slate-100 text-[#0e263f] font-bold text-[10px]">
                    {(activeCase as any).norwood || "Norwood 3 - 4"}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-[#0e263f] text-sm sm:text-base mb-1.5">
                  {isTr ? "Kişiye Özel Cerrahi Restorasyon" : "Tailored Surgical Hairline Architecture"}
                </h4>

                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed mb-3">
                  {(activeCase as any).story || "Dr. Mehmet Erdoğan personalized the hairline geometry, taking single-hair follicular units for soft front feathering and dense multi-grafts for mid-scalp volume."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                  <CheckCircle weight="fill" className="w-3.5 h-3.5 text-[#0e263f] shrink-0" />
                  <span>{isTr ? "Tekli Kök Ön Çizgi Geçişi" : "Single-Hair Feathered Edge"}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-700">
                  <CheckCircle weight="fill" className="w-3.5 h-3.5 text-[#0e263f] shrink-0" />
                  <span>{isTr ? "Donör Alan Homojenliği" : "Donor Area Preservation"}</span>
                </div>
              </div>
            </div>

            {/* Card 2: Authentic Patient Review / Testimonial */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-lg flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} weight="fill" className="w-3.5 h-3.5 text-amber-400" />
                    ))}
                    <span className="text-[11px] font-bold text-slate-800 ml-1">5.0 / 5.0</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold">
                    <ShieldCheck weight="bold" className="w-3 h-3" />
                    <span>{isTr ? "Doğrulanmış Hasta" : "Verified Patient"}</span>
                  </div>
                </div>

                <div className="relative mb-3">
                  <p className="text-xs sm:text-sm text-[#0e263f] font-medium italic leading-relaxed pl-2.5 border-l-2 border-slate-200">
                    “{(activeCase as any).review || "The experience with Dr. Mehmet Erdoğan and Smile Hair Clinic exceeded all my expectations. The hairline is completely natural and my density is back."}”
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="font-heading font-bold text-xs text-[#0e263f] block">
                    {activeCase.patient}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    {(activeCase as any).country || "United Kingdom 🇬🇧"}
                  </span>
                </div>

                <a
                  href="#consultation"
                  className="px-3.5 py-1.5 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-bold text-[11px] shadow-xs hover:shadow-sm flex items-center gap-1 transition-all group/btn"
                >
                  <span>{isTr ? "Benzer Sonuç İsteyin" : "Get Free Evaluation"}</span>
                  <ArrowRight weight="bold" className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* 3-Column Video Embed Subsection at the end of section (optional) */}
        {showVideos && (
          <div className="mt-16 pt-12 border-t border-[#415e79]/20">
            <YouTubeVideoGrid
              locale={locale}
              videos={[ALL_YOUTUBE_VIDEOS[3], ALL_YOUTUBE_VIDEOS[10], ALL_YOUTUBE_VIDEOS[19]]}
              title={isTr ? "Saç Ekimi Öncesi & Sonrası Videolarını İzleyin" : "Watch Hair Transplant Before & After Videos"}
              subtitle={isTr ? "Hastaların saç ekimi operasyonu ve 12 aylık gelişim süreçleri." : "Documented patient experiences, surgical results, and 12-month transformation journeys."}
            />
          </div>
        )}

      </div>
    </section>
  );
}
