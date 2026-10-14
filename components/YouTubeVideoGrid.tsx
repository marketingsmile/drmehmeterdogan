"use client";

import { useState } from "react";
import { 
  Play, 
  YoutubeLogo, 
  ArrowSquareOut, 
  Sparkle
} from "@phosphor-icons/react";
import { Locale } from "@/lib/dictionary";
import { YouTubeVideoItem, ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";

export { ALL_YOUTUBE_VIDEOS };
export type { YouTubeVideoItem };

interface YouTubeVideoGridProps {
  locale: Locale;
  videos?: YouTubeVideoItem[];
  title?: string;
  subtitle?: string;
  tag?: string;
  limit?: number;
  showFilters?: boolean;
  darkTheme?: boolean;
}

export default function YouTubeVideoGrid({
  locale,
  videos = ALL_YOUTUBE_VIDEOS,
  title,
  subtitle,
  tag,
  limit,
  showFilters = false,
  darkTheme = false,
}: YouTubeVideoGridProps) {
  const isTr = locale === "tr";
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(videos.map(v => isTr ? (v.categoryTr || v.category) : v.category)))];

  const filteredVideos = videos.filter(v => {
    if (activeCategory === "all") return true;
    const cat = isTr ? (v.categoryTr || v.category) : v.category;
    return cat === activeCategory;
  });

  const displayedVideos = limit ? filteredVideos.slice(0, limit) : filteredVideos;

  return (
    <div className="w-full">
      {/* Optional Header */}
      {(title || subtitle || tag) && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          {tag && (
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-sm ${
              darkTheme ? "bg-white/10 border border-white/20 text-white" : "bg-white border border-[#415e79]/30 text-[#0e263f]"
            }`}>
              <YoutubeLogo weight="fill" className={`w-4 h-4 ${darkTheme ? "text-red-500" : "text-[#0e263f]"}`} />
              <span>{tag}</span>
            </div>
          )}
          {title && (
            <h3 className={`font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 ${
              darkTheme ? "text-white" : "text-[#0e263f]"
            }`}>
              {title}
            </h3>
          )}
          {subtitle && (
            <p className={`text-sm sm:text-base font-medium leading-relaxed ${
              darkTheme ? "text-slate-300" : "text-[#415e79]"
            }`}>
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Optional Category Filters */}
      {showFilters && categories.length > 2 && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat
                  ? darkTheme
                    ? "bg-white text-[#0e263f] shadow-md scale-105"
                    : "bg-[#0e263f] text-white shadow-md scale-105"
                  : darkTheme
                  ? "bg-white/10 text-white hover:bg-white/20 border border-white/15"
                  : "bg-white text-[#0e263f] hover:bg-slate-100 border border-[#415e79]/20"
              }`}
            >
              {cat === "all" ? (isTr ? `Tüm Videolar (${videos.length})` : `All Videos (${videos.length})`) : cat}
            </button>
          ))}
        </div>
      )}

      {/* 3-Column Responsive YouTube Embed Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayedVideos.map((video) => {
          const videoTitle = isTr ? (video.titleTr || video.title) : video.title;
          const videoCat = isTr ? (video.categoryTr || video.category) : video.category;
          const videoDesc = isTr ? (video.descTr || video.desc) : video.desc;

          return (
            <div
              key={video.id}
              className={`group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                darkTheme
                  ? "bg-[#0b1f3a] border border-white/15 hover:border-white/30 text-white"
                  : "bg-white border border-[#415e79]/20 hover:border-[#0e263f]"
              }`}
            >
              <div>
                {/* 16:9 Video Embed / Responsive Player */}
                <div className="relative aspect-video bg-slate-900 overflow-hidden">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={videoTitle}
                    loading="lazy"
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[11px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full border ${
                      darkTheme
                        ? "bg-white/10 text-slate-200 border-white/15"
                        : "text-[#415e79] bg-slate-100 border-slate-200"
                    }`}>
                      {videoCat}
                    </span>
                    {video.duration && (
                      <span className={`text-[11px] font-bold ${
                        darkTheme ? "text-slate-400" : "text-slate-500"
                      }`}>
                        {video.duration}
                      </span>
                    )}
                  </div>

                  <h4 className={`font-heading font-extrabold text-base transition-colors line-clamp-2 mb-2 ${
                    darkTheme
                      ? "text-white group-hover:text-amber-400"
                      : "text-[#0e263f] group-hover:text-[#415e79]"
                  }`}>
                    {videoTitle}
                  </h4>

                  {videoDesc && (
                    <p className={`text-xs font-medium leading-relaxed line-clamp-2 ${
                      darkTheme ? "text-slate-300" : "text-slate-600"
                    }`}>
                      {videoDesc}
                    </p>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="px-5 pb-5 pt-0">
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pt-3 flex items-center justify-between text-xs font-bold transition-colors ${
                    darkTheme
                      ? "border-t border-white/10 text-slate-300 hover:text-white"
                      : "border-t border-slate-100 text-[#0e263f] hover:text-[#415e79]"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <YoutubeLogo weight="fill" className={`w-4 h-4 ${darkTheme ? "text-red-500" : "text-[#0e263f]"}`} />
                    {isTr ? "YouTube'da İzle" : "Watch on YouTube"}
                  </span>
                  <ArrowSquareOut weight="bold" className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
