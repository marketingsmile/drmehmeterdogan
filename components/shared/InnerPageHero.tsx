import React from "react";
import Link from "next/link";
import { SparklesIcon, Tag01Icon, ArrowRight01Icon } from "hugeicons-react";
import { Locale } from "@/lib/dictionary";
import Breadcrumbs, { BreadcrumbItem } from "./Breadcrumbs";
import MedicalReviewByline from "./MedicalReviewByline";

export interface InnerPageHeroProps {
  breadcrumbs: BreadcrumbItem[];
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  primaryCta?: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  locale: Locale;
  sideImageSrc?: string;
  sideImageAlt?: string;
  lastUpdatedDate?: string;
  displayDate?: string;
  className?: string;
}

export default function InnerPageHero({
  breadcrumbs,
  titlePrefix,
  titleHighlight,
  description,
  primaryCta = { text: "Free Hair Assessment", href: "/#consultation" },
  secondaryCta,
  locale,
  sideImageSrc = "/images/dr-mehmet-erdogan.webp",
  sideImageAlt = "Dr. Mehmet Erdoğan Hair Transplant Doctor",
  lastUpdatedDate,
  displayDate,
  className = "",
}: InnerPageHeroProps) {
  return (
    <section
      className={`relative pt-8 pb-12 sm:pb-16 bg-gradient-to-b from-[#f8fafc] via-[#ededed]/60 to-[#ededed] border-b border-[#415e79]/15 overflow-hidden ${className}`}
    >
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#415e79]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols): Breadcrumbs, Two-tone H1, Lead, CTAs, Byline */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Breadcrumb Trail */}
            <Breadcrumbs items={breadcrumbs} />

            {/* Exactly One Two-Tone H1 (last line in slate-blue #415e79) */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight leading-[1.15] mb-4">
              <span>{titlePrefix} </span>
              <span className="text-[#415e79] block mt-1">
                {titleHighlight}
              </span>
            </h1>

            {/* 2-3 Sentence Lead Paragraph */}
            <p className="text-slate-700 text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mb-6">
              {description}
            </p>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="group px-7 py-3.5 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
                >
                  <SparklesIcon size={18} strokeWidth={2} className="text-white" />
                  <span>{primaryCta.text}</span>
                  <ArrowRight01Icon
                    size={16}
                    strokeWidth={2}
                    className="text-white transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="group px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0e263f] font-bold text-sm sm:text-base border border-[#415e79]/30 shadow-xs flex items-center justify-center gap-2 transition-all hover:border-[#0e263f] transform hover:-translate-y-0.5"
                >
                  <Tag01Icon size={17} strokeWidth={2} className="text-[#0e263f]" />
                  <span>{secondaryCta.text}</span>
                  <ArrowRight01Icon
                    size={15}
                    strokeWidth={2}
                    className="text-[#415e79] transition-transform group-hover:translate-x-1"
                  />
                </Link>
              )}
            </div>

            {/* Medical Review Byline Under CTAs */}
            <MedicalReviewByline
              locale={locale}
              lastUpdatedDate={lastUpdatedDate}
              displayDate={displayDate}
            />
          </div>

          {/* Right Column (5 cols): Compact Portrait or Clinical Photo */}
          <div className="lg:col-span-5 relative flex justify-center items-end">
            <div className="relative w-full max-w-[380px] flex justify-center items-end">
              <img
                src={sideImageSrc}
                alt={sideImageAlt}
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-xl select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
