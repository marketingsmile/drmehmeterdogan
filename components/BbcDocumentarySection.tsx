"use client";

import { 
  Television, 
  Sparkle, 
  CheckCircle, 
  Play, 
  ArrowSquareOut,
  Buildings
} from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";

interface BbcDocumentarySectionProps {
  locale: Locale;
}

export default function BbcDocumentarySection({ locale }: BbcDocumentarySectionProps) {
  const isTr = locale === "tr";
  const dict = getDictionary(locale);

  return (
    <section className="py-16 bg-navy-gradient text-white relative overflow-hidden border-b border-white/10">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#415e79]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-[#415e79]/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: BBC Documentary Story & Text (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* BBC Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-extrabold tracking-wider uppercase text-white shadow-sm">
              <Television weight="bold" className="w-4 h-4 text-white" />
              <span>{isTr ? "BBC RESMİ BELGESEL ÖZEL BÖLÜMÜ" : "BBC OFFICIAL DOCUMENTARY FEATURE"}</span>
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {isTr ? (
                <>
                  BBC Belgeseli: <span className="text-white underline decoration-[#415e79] underline-offset-8">Smile Hair Clinic</span> Uluslararası Saç Ekimi İncelemesi
                </>
              ) : (
                <>
                  BBC Featured Documentary on <span className="text-white underline decoration-[#415e79] underline-offset-8">Smile Hair Clinic</span>
                </>
              )}
            </h2>

            {/* Narrative Paragraph */}
            <p className="text-base sm:text-lg text-[#ededed]/90 font-medium leading-relaxed">
              {isTr
                ? "BBC, Türkiye'de saç ekimi ve sağlık turizmini incelemek üzere hazırladığı uluslararası belgeselde Dr. Mehmet Erdoğan'ın kurucu ortağı olduğu Smile Hair Clinic'i tercih etti. İngiltere'den gelen hastamız Paul Readman'ın kliniğimizdeki tüm cerrahi hazırlıklarını, operasyon anını ve 12 aylık kalıcı dönüşümünü tarafsız bir bakışla izleyebilirsiniz."
                : "BBC selected Smile Hair Clinic (co-founded by Dr. Mehmet Erdoğan) for its comprehensive international documentary investigating medical tourism and hair restoration in Istanbul. Follow UK patient Paul Readman's personal journey, clinic consultations, surgical procedures, and verified 12-month transformation."}
            </p>

            {/* Key Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle weight="fill" className="w-4.5 h-4.5 text-white shrink-0" />
                <span>{isTr ? "BBC Tarafından Seçilen Sağlık Turizmi Belgeseli" : "BBC Selected Medical Tourism Feature"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle weight="fill" className="w-4.5 h-4.5 text-white shrink-0" />
                <span>{isTr ? "Smile Hair Clinic Klinik Standartları" : "Smile Hair Clinic Medical Standards"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle weight="fill" className="w-4.5 h-4.5 text-white shrink-0" />
                <span>{isTr ? "Hasta Paul Readman Canlı Süreci & Sonuçları" : "Paul Readman Full Transformation"}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                <CheckCircle weight="fill" className="w-4.5 h-4.5 text-white shrink-0" />
                <span>{isTr ? "100% Tarafsız Cerrahi & İyileşme Belgeseli" : "100% Unbiased Clinical Footage"}</span>
              </div>
            </div>

            {/* Direct Link Button */}
            <div className="pt-4">
              <a
                href="https://www.youtube.com/watch?v=49hX6q5mpV4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-[#0e263f] font-extrabold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
              >
                <Play weight="fill" className="w-4 h-4 text-[#0e263f]" />
                <span>{isTr ? "BBC Belgeselini YouTube'da İzle" : "Watch Full BBC Documentary on YouTube"}</span>
                <ArrowSquareOut weight="bold" className="w-4 h-4 text-[#0e263f] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: Embedded BBC Documentary YouTube Video Player */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-950 group">
              <iframe
                src="https://www.youtube.com/embed/49hX6q5mpV4"
                title="BBC Documentary - Hair Transplant with Smile Hair Clinic & Paul Readman"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
