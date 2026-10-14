"use client";

import { useState } from "react";
import { 
  YoutubeLogo, 
  Play, 
  Sparkle, 
  VideoCamera, 
  ArrowSquareOut, 
  ShieldCheck 
} from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";

interface VideoMediaSectionProps {
  locale: Locale;
}

export default function VideoMediaSection({ locale }: VideoMediaSectionProps) {
  const dict = getDictionary(locale);
  const isTr = locale === "tr";
  const [activeTab, setActiveTab] = useState<"testimonials" | "masterclasses">("testimonials");

  const playlistData = {
    testimonials: {
      id: "testimonials",
      title: isTr ? "Hasta Hikayeleri & Canlı Değişim Videoları" : "Patient Case Stories & Transformation Videos",
      subtitle: isTr
        ? "Dr. Mehmet Erdoğan ile saç ekimi yaptıran hastaların 12 aylık değişim serüvenleri ve canlı deneyim videoları."
        : "Real patient journeys, 12-month growth transformations, and authentic video reviews with Dr. Mehmet Erdoğan.",
      embedUrl: "https://www.youtube-nocookie.com/embed/Tg1-2P3Cscs",
      watchUrl: "https://www.youtube.com/watch?v=Tg1-2P3Cscs",
      badgeText: isTr ? "CANLI HASTA DEĞİŞİMİ" : "PATIENT TRANSFORMATION"
    },
    masterclasses: {
      id: "masterclasses",
      title: isTr ? "Safir & DHI Cerrahi Teknik Anlatımları" : "Surgical Techniques & Masterclasses",
      subtitle: isTr
        ? "Dr. Mehmet Erdoğan'ın Safir FUE, DHI ve saç çizgisi tasarımı üzerine detaylı cerrahi rehber videoları."
        : "In-depth medical guides by Hair Transplant Doctor Dr. Mehmet Erdoğan explaining Sapphire FUE, DHI, and hairline design.",
      embedUrl: "https://www.youtube-nocookie.com/embed/cbcpqrIUnyQ",
      watchUrl: "https://www.youtube.com/watch?v=cbcpqrIUnyQ",
      badgeText: isTr ? "CERRAHİ REHBER" : "SURGICAL MASTERCLASS"
    }
  };

  return (
    <section className="py-20 bg-white relative border-t border-[#415e79]/20 overflow-hidden">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ededed] border border-[#415e79]/30 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <YoutubeLogo weight="fill" className="w-4 h-4 text-[#0e263f]" />
            <span>{isTr ? "RESMİ YOUTUBE VİDEO ARŞİVİ" : "OFFICIAL YOUTUBE MEDIA & INSIGHTS"}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
            {isTr ? "Dr. Mehmet Erdoğan Video Arşivi & Canlı Operasyonlar" : "Watch Dr. Mehmet Erdoğan in Action"}
          </h2>
          <p className="text-[#415e79] text-base sm:text-lg font-semibold">
            {isTr
              ? "Gerçek hasta deneyimlerini, canlı Safir ve DHI cerrahi teknik anlatımlarını resmi YouTube videolarımızdan takip edin."
              : "Explore official video guides, patient journey stories, and surgical masterclasses directly from Hair Transplant Doctor Dr. Mehmet Erdoğan."}
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("testimonials")}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all cursor-pointer ${
              activeTab === "testimonials"
                ? "bg-[#0e263f] text-white shadow-xl scale-105"
                : "bg-[#ededed] text-[#0e263f] hover:bg-slate-200 border border-[#415e79]/20"
            }`}
          >
            <VideoCamera weight="bold" className={`w-4 h-4 ${activeTab === "testimonials" ? "text-white" : "text-[#415e79]"}`} />
            <span>{isTr ? "Hasta Yorumları & Değişimler" : "Patient Transformations"}</span>
          </button>

          <button
            onClick={() => setActiveTab("masterclasses")}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all cursor-pointer ${
              activeTab === "masterclasses"
                ? "bg-[#0e263f] text-white shadow-xl scale-105"
                : "bg-[#ededed] text-[#0e263f] hover:bg-slate-200 border border-[#415e79]/20"
            }`}
          >
            <Play weight="fill" className={`w-4 h-4 ${activeTab === "masterclasses" ? "text-white" : "text-[#415e79]"}`} />
            <span>{isTr ? "Cerrahi Teknik Masterclass" : "Surgical Masterclasses"}</span>
          </button>
        </div>

        {/* Active Featured Video Display Card */}
        {(() => {
          const current = playlistData[activeTab];
          return (
            <div className="bg-[#ededed] rounded-3xl p-6 sm:p-10 border border-[#415e79]/20 shadow-2xl max-w-5xl mx-auto mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Embedded YouTube Player (7 cols) */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-[#415e79]/30 bg-slate-950 group">
                    <iframe
                      src={current.embedUrl}
                      title={current.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* Video Info & Direct Watch Button (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#415e79]/30 text-xs font-extrabold text-[#0e263f] mb-3">
                      <Sparkle weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
                      <span>{current.badgeText}</span>
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl text-[#0e263f] leading-snug mb-3">
                      {current.title}
                    </h3>
                    <p className="text-sm text-[#415e79] font-medium leading-relaxed">
                      {current.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#415e79]/20">
                    <a
                      href={current.watchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group"
                    >
                      <YoutubeLogo weight="fill" className="w-5 h-5 text-white" />
                      <span>{isTr ? "YouTube'da İzle" : "Watch on YouTube"}</span>
                      <ArrowSquareOut weight="bold" className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

        {/* 3-in-a-row Video Showcase Grid */}
        <div className="pt-12 border-t border-[#415e79]/20">
          <YouTubeVideoGrid
            locale={locale}
            videos={ALL_YOUTUBE_VIDEOS.slice(0, 6)}
            tag={isTr ? "ÖNE ÇIKAN VİDEOLAR" : "FEATURED VIDEO FOOTAGE"}
            title={isTr ? "Popüler Cerrahi ve Hasta Videoları" : "Popular Surgical & Patient Videos"}
            subtitle={isTr ? "Dr. Mehmet Erdoğan'ın ameliyathane kayıtları, konsültasyon aşamaları ve hasta yorumları." : "Selected operation recordings, consultation breakdowns, and verified results."}
          />
        </div>

      </div>
    </section>
  );
}
