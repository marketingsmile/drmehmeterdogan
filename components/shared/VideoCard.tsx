"use client";

import React, { useState } from "react";
import { PlayIcon, YoutubeIcon, ArrowUpRight01Icon } from "hugeicons-react";

export interface VideoCardProps {
  id: string;
  title: string;
  category: string;
  description?: string;
  duration?: string;
  darkTheme?: boolean;
  className?: string;
  watchText?: string;
}

export default function VideoCard({
  id,
  title,
  category,
  description,
  duration,
  darkTheme = false,
  className = "",
  watchText = "Watch on YouTube",
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // Sanitize colons from headings if any
  const cleanTitle = title.replace(/:/g, " -");

  return (
    <div
      className={`group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
        darkTheme
          ? "bg-[#0b1f3a] border border-white/15 hover:border-white/30 text-white"
          : "bg-white border border-[#415e79]/20 hover:border-[#0e263f]"
      } ${className}`}
    >
      <div>
        {/* 16:9 Lite-YouTube Facade Player */}
        <div className="relative aspect-video bg-slate-950 overflow-hidden">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
              title={cleanTitle}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              aria-label={`Play video: ${cleanTitle}`}
              className="relative w-full h-full block group/btn focus:outline-none cursor-pointer"
            >
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt={cleanTitle}
                loading="lazy"
                className="w-full h-full object-cover group-hover/btn:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover/btn:bg-slate-900/10 transition-colors" />

              {/* Central Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#0e263f]/90 hover:bg-[#0e263f] text-white flex items-center justify-center shadow-2xl border-2 border-white/40 group-hover/btn:scale-110 transition-transform">
                  <PlayIcon size={24} strokeWidth={2.2} className="text-white ml-0.5" />
                </div>
              </div>

              {duration && (
                <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-xs">
                  {duration}
                </span>
              )}
            </button>
          )}
        </div>

        {/* Video Card Content */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span
              className={`text-[11px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full border ${
                darkTheme
                  ? "bg-white/10 text-slate-200 border-white/15"
                  : "text-[#415e79] bg-slate-100 border-slate-200"
              }`}
            >
              {category}
            </span>
            {duration && (
              <span
                className={`text-[11px] font-bold ${
                  darkTheme ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {duration}
              </span>
            )}
          </div>

          <h4
            className={`font-heading font-extrabold text-base transition-colors line-clamp-2 mb-2 ${
              darkTheme
                ? "text-white group-hover:text-amber-400"
                : "text-[#0e263f] group-hover:text-[#415e79]"
            }`}
          >
            {cleanTitle}
          </h4>

          {description && (
            <p
              className={`text-xs font-medium leading-relaxed line-clamp-2 ${
                darkTheme ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Footer "Watch on YouTube" */}
      <div className="px-5 pb-5 pt-0">
        <a
          href={`https://www.youtube.com/watch?v=${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`pt-3 flex items-center justify-between text-xs font-bold transition-colors ${
            darkTheme
              ? "border-t border-white/10 text-slate-300 hover:text-white"
              : "border-t border-slate-100 text-[#0e263f] hover:text-[#415e79]"
          }`}
        >
          <span className="flex items-center gap-1.5">
            <YoutubeIcon
              size={16}
              strokeWidth={2}
              className={darkTheme ? "text-red-500" : "text-[#0e263f]"}
            />
            <span>{watchText}</span>
          </span>
          <ArrowUpRight01Icon
            size={16}
            strokeWidth={2}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}
