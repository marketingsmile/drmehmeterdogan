"use client";

import { useState } from "react";
import { 
  PlayIcon, 
  YoutubeIcon, 
  ArrowUpRight01Icon, 
  SparklesIcon
} from "hugeicons-react";
import { Locale } from "@/lib/dictionary";
import { YouTubeVideoItem, ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";
import { VideoCard } from "@/components/shared";

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
              <YoutubeIcon size={16} strokeWidth={2} className={darkTheme ? "text-red-500" : "text-[#0e263f]"} />
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

      {/* 3-Column Responsive YouTube Video Grid with Lite-YouTube Facade */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {displayedVideos.map((video) => {
          const videoTitle = isTr ? (video.titleTr || video.title) : video.title;
          const videoCat = isTr ? (video.categoryTr || video.category) : video.category;
          const videoDesc = isTr ? (video.descTr || video.desc) : video.desc;

          return (
            <VideoCard
              key={video.id}
              id={video.id}
              title={videoTitle}
              category={videoCat}
              description={videoDesc}
              duration={video.duration}
              darkTheme={darkTheme}
              watchText={isTr ? "YouTube'da İzle" : "Watch on YouTube"}
            />
          );
        })}
      </div>
    </div>
  );
}
