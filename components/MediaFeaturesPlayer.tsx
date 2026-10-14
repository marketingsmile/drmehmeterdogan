"use client";

import React, { useState, useCallback } from "react";
import { 
  Play, 
  CheckCircle, 
  ArrowSquareOut, 
  Television 
} from "@phosphor-icons/react";
import type { MediaFeature } from "@/data/media-features";

interface MediaFeaturesPlayerProps {
  features: readonly MediaFeature[];
}

export default function MediaFeaturesPlayer({ features }: MediaFeaturesPlayerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index);
    setPlayingVideoId(null);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % features.length);
      setPlayingVideoId(null);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
      setPlayingVideoId(null);
    }
  }, [features.length]);

  return (
    <div className="w-full space-y-8" onKeyDown={handleKeyDown}>
      {/* Selector Tabs */}
      <div 
        role="tablist" 
        aria-label="Media Documentary Selection"
        className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-white/5 p-2 rounded-2xl border border-white/10 backdrop-blur-md"
      >
        {features.map((item, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              onClick={() => handleSelect(idx)}
              className={`text-left p-3.5 rounded-xl transition-all flex flex-col justify-between gap-2.5 border ${
                isActive
                  ? "bg-white text-[#0e263f] border-white shadow-xl scale-[1.02]"
                  : "bg-white/5 text-white/80 hover:bg-white/10 hover:text-white border-white/10"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                  isActive ? "bg-[#0e263f] text-white" : "bg-white/10 text-white/90"
                }`}>
                  {item.outlet}
                </span>
                <span className={`text-[10px] font-bold ${isActive ? "text-slate-600" : "text-white/60"}`}>
                  0{idx + 1}
                </span>
              </div>
              <p className={`text-xs font-semibold ${isActive ? "text-slate-600" : "text-white/70"}`}>
                {item.country} · {item.year}
              </p>
            </button>
          );
        })}
      </div>

      {/* Feature Panels */}
      <div className="relative">
        {features.map((item, idx) => {
          const isCurrent = idx === activeIndex;
          const isPlaying = playingVideoId === item.videoId;
          const youtubeWatchUrl = `https://www.youtube.com/watch?v=${item.videoId}`;
          const thumbnailUrl = `https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`;

          return (
            <div
              key={item.id}
              id={`panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${item.id}`}
              hidden={!isCurrent}
              className={`${isCurrent ? "block animate-fadeIn" : "hidden"}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column: Narrative Details & Highlights */}
                <div className="lg:col-span-6 space-y-6">
                  {/* Eyebrow Pill showing Outlet and Country */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-extrabold tracking-wider uppercase text-white shadow-sm">
                    <Television weight="bold" className="w-4 h-4 text-white" />
                    <span>{item.outlet.toUpperCase()} · {item.country.toUpperCase()}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    {item.title}
                  </h3>

                  {/* Narrative Body */}
                  <p className="text-base text-[#ededed]/90 font-medium leading-relaxed">
                    {item.text}
                  </p>

                  {/* 2-Column Checklist of Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
                        <CheckCircle weight="fill" className="w-4.5 h-4.5 text-white shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Row */}
                  <div className="pt-2 flex flex-wrap items-center gap-5">
                    <a
                      href={youtubeWatchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-[#0e263f] font-extrabold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                    >
                      <Play weight="fill" className="w-4 h-4 text-[#0e263f]" />
                      <span>Watch on YouTube</span>
                      <ArrowSquareOut weight="bold" className="w-4 h-4 text-[#0e263f] group-hover:translate-x-0.5 transition-transform" />
                    </a>

                    {"sourceUrl" in item && item.sourceUrl && "sourceLabel" in item && item.sourceLabel && (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-slate-300 hover:text-white underline underline-offset-4 transition-colors"
                      >
                        <span>{item.sourceLabel}</span>
                        <ArrowSquareOut weight="bold" className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Lite-YouTube Facade Player */}
                <div className="lg:col-span-6">
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-950 group">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${item.videoId}?autoplay=1&rel=0`}
                        title={item.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <div 
                        onClick={() => setPlayingVideoId(item.videoId)}
                        className="relative w-full h-full cursor-pointer overflow-hidden group/thumb"
                        role="button"
                        aria-label={`Play ${item.title}`}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setPlayingVideoId(item.videoId);
                          }
                        }}
                      >
                        {/* Static Thumbnail */}
                        <img
                          src={thumbnailUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500 brightness-90 group-hover/thumb:brightness-100"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20" />

                        {/* Centered Play Button Facade */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-[#0e263f] flex items-center justify-center shadow-2xl group-hover/thumb:scale-110 group-hover/thumb:bg-white transition-all">
                            <Play weight="fill" className="w-7 h-7 sm:w-8 sm:h-8 text-[#0e263f] translate-x-0.5" />
                          </div>
                        </div>

                        {/* Bottom Overlay Label */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white font-bold bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl">
                          <span className="line-clamp-1">{item.outlet} · {item.durationLabel}</span>
                          <span className="text-white/80 shrink-0">Click to Play</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
