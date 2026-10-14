"use client";

import { 
  ShieldCheck, 
  ArrowSquareOut, 
  Star, 
  CheckCircle,
  SealCheck,
  Globe
} from "@phosphor-icons/react";
import { Locale } from "@/lib/dictionary";

interface MedicalPlatformProfilesProps {
  locale: Locale;
  variant?: "full" | "compact" | "cards";
  title?: string;
  subtitle?: string;
}

export interface PlatformProfile {
  id: string;
  name: string;
  badge: string;
  badgeTr: string;
  rating?: string;
  status: string;
  statusTr: string;
  url: string;
  country: string;
  accentColor: string;
}

export const MEDICAL_PLATFORMS: PlatformProfile[] = [
  {
    id: "qunomedical",
    name: "Qunomedical",
    badge: "Vetted & Certified MD",
    badgeTr: "Onaylı & Sertifikalı MD",
    rating: "4.9/5",
    status: "Verified Medical Doctor",
    statusTr: "Doğrulanmış Uzman Hekim",
    url: "https://www.qunomedical.com/en/dr-mehmet-erdogan-md",
    country: "Germany / Global 🇩🇪",
    accentColor: "border-[#00828A] text-[#00828A]"
  },
  {
    id: "bookimed",
    name: "Bookimed",
    badge: "Top Rated Surgeon",
    badgeTr: "En Yüksek Puanlı Cerrah",
    rating: "4.9/5",
    status: "Verified Doctor Profile",
    statusTr: "Doğrulanmış Doktor Profili",
    url: "https://us-uk.bookimed.com/doctor/mehmet-erdogan/",
    country: "US / UK / Global 🇬🇧",
    accentColor: "border-[#00b140] text-[#00b140]"
  },
  {
    id: "realself",
    name: "RealSelf",
    badge: "Top Doctor Status",
    badgeTr: "En İyi Doktor Rozeti",
    rating: "5.0/5",
    status: "Verified Doctor Profile",
    statusTr: "Doğrulanmış Doktor Profili",
    url: "https://www.realself.com/dr/mehmet-erdogan-istanbul-turkey",
    country: "USA 🇺🇸",
    accentColor: "border-[#ff7474] text-[#ff7474]"
  },
  {
    id: "mediglobus",
    name: "MediGlobus",
    badge: "Certified Specialist",
    badgeTr: "Sertifikalı Uzman",
    rating: "4.9/5",
    status: "Accredited Surgeon",
    statusTr: "Akredite Cerrah",
    url: "https://mediglobus.com/doctors/dr-mehmet-erdogan/",
    country: "Global 🌍",
    accentColor: "border-[#2E86DE] text-[#2E86DE]"
  },
  {
    id: "vaidam",
    name: "Vaidam Health",
    badge: "Accredited Partner",
    badgeTr: "Akredite Partner Hekim",
    rating: "4.8/5",
    status: "International Specialist",
    statusTr: "Uluslararası Uzman",
    url: "https://www.vaidam.com/doctors/dr-mehmet-erdogan",
    country: "Global / Asia 🌏",
    accentColor: "border-[#E67E22] text-[#E67E22]"
  },
  {
    id: "belorens",
    name: "Belorens",
    badge: "Verified Clinic Partner",
    badgeTr: "Doğrulanmış Klinik Ortağı",
    rating: "4.9/5",
    status: "Verified Doctor",
    statusTr: "Onaylı Hekim Profili",
    url: "https://www.belorens.com/doctor/mehmet-erdogan/",
    country: "Europe 🇪🇺",
    accentColor: "border-[#1E3799] text-[#1E3799]"
  }
];

export default function MedicalPlatformProfiles({
  locale,
  variant = "full",
  title,
  subtitle
}: MedicalPlatformProfilesProps) {
  const isTr = locale === "tr";

  if (variant === "compact") {
    return (
      <div className="w-full">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {MEDICAL_PLATFORMS.map((platform) => (
            <a
              key={platform.id}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 border border-[#415e79]/20 hover:border-[#0e263f] text-xs font-bold text-[#0e263f] shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 group"
            >
              <SealCheck weight="fill" className="w-4 h-4 text-[#415e79] group-hover:text-[#0e263f] transition-colors" />
              <span>{platform.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 font-extrabold text-[#415e79]">
                {platform.rating}
              </span>
              <ArrowSquareOut weight="bold" className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0e263f] group-hover:translate-x-0.5 transition-all" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#415e79]/30 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
          <ShieldCheck weight="bold" className="w-4 h-4 text-[#0e263f]" />
          <span>{isTr ? "DOĞRULANMIŞ ULUSLARARASI PROFİLLER" : "VERIFIED GLOBAL MEDICAL PROFILES"}</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0e263f] tracking-tight mb-2">
          {title || (isTr ? "Bağımsız Sağlık Platformlarındaki Resmi Profiller" : "Official Profiles on Leading Medical Platforms")}
        </h3>
        <p className="text-[#415e79] text-xs sm:text-sm font-medium leading-relaxed">
          {subtitle || (isTr
            ? "Dr. Mehmet Erdoğan'ın bağımsız uluslararası sağlık turizmi ve hekim değerlendirme platformlarındaki doğrulanmış profilleri ve hasta yorumları."
            : "Review Dr. Mehmet Erdoğan's verified doctor credentials, independent patient reviews, and accreditation status across premier healthcare directories.")}
        </p>
      </div>

      {/* 6-Card Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {MEDICAL_PLATFORMS.map((platform) => (
          <a
            key={platform.id}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-2xl p-4 border border-[#415e79]/20 hover:border-[#0e263f] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Top Row: Country / Rating */}
              <div className="flex items-center justify-between gap-1 mb-2.5">
                <span className="text-[10px] font-bold text-slate-500">
                  {platform.country}
                </span>
                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-1.5 py-0.5 rounded text-[10px] font-extrabold text-amber-900">
                  <Star weight="fill" className="w-2.5 h-2.5 text-amber-500" />
                  <span>{platform.rating}</span>
                </div>
              </div>

              {/* Platform Title */}
              <h4 className="font-heading font-extrabold text-sm text-[#0e263f] group-hover:text-[#415e79] transition-colors mb-1">
                {platform.name}
              </h4>

              {/* Badge Subtitle */}
              <span className="text-[11px] font-bold text-[#415e79] block mb-3">
                {isTr ? platform.badgeTr : platform.badge}
              </span>
            </div>

            {/* Bottom Status / Link Action */}
            <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-[#0e263f]">
              <span className="flex items-center gap-1 text-emerald-700">
                <SealCheck weight="fill" className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="truncate">{isTr ? "Onaylı Profil" : "Verified"}</span>
              </span>
              <ArrowSquareOut weight="bold" className="w-3.5 h-3.5 text-[#415e79] group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
