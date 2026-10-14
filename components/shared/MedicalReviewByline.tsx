import React from "react";
import Link from "next/link";
import { CheckmarkBadge01Icon } from "hugeicons-react";
import { Locale } from "@/lib/dictionary";

export interface MedicalReviewBylineProps {
  locale: Locale;
  lastUpdatedDate?: string;
  displayDate?: string;
  doctorUrl?: string;
  className?: string;
}

export default function MedicalReviewByline({
  locale,
  lastUpdatedDate = "2026-10-14",
  displayDate = locale === "tr" ? "14 Ekim 2026" : "October 14, 2026",
  doctorUrl = locale === "tr" ? "/tr/about-me" : "/about-me",
  className = "",
}: MedicalReviewBylineProps) {
  const isTr = locale === "tr";

  return (
    <div
      className={`inline-flex flex-wrap items-center gap-3 p-2.5 pr-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-left ${className}`}
    >
      {/* Doctor Thumbnail */}
      <Link href={doctorUrl} className="relative w-10 h-10 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 block group">
        <img
          src="/images/dr-mehmet-erdogan.webp"
          alt="Dr. Mehmet Erdoğan"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
        />
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-xs">
          <CheckmarkBadge01Icon size={13} className="text-emerald-600 fill-emerald-100" />
        </div>
      </Link>

      {/* Review Information */}
      <div className="text-xs leading-snug">
        <div className="font-semibold text-slate-700">
          <span>{isTr ? "Tıbbi İnceleme: " : "Medically reviewed by "}</span>
          <Link
            href={doctorUrl}
            className="font-bold text-[#0e263f] hover:text-[#415e79] transition-colors underline decoration-slate-300 underline-offset-2"
          >
            Dr. Mehmet Erdoğan
          </Link>
          <span className="text-slate-500 font-medium hidden sm:inline">
            {isTr ? ", Smile Hair Clinic Kurucu Ortağı" : ", Co-Founder of Smile Hair Clinic"}
          </span>
        </div>
        <div className="text-[11px] text-slate-500 font-medium mt-0.5">
          <span>{isTr ? "Son Güncelleme: " : "Last updated "}</span>
          <time dateTime={lastUpdatedDate} className="font-semibold text-slate-700">
            {displayDate}
          </time>
        </div>
      </div>
    </div>
  );
}
