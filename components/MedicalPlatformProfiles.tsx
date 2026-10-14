"use client";

import { 
  CheckmarkBadge01Icon, 
  ArrowUpRight01Icon, 
  StarIcon, 
  Globe02Icon,
  Shield01Icon
} from "hugeicons-react";
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
  rating: string;
  reviewsCount: string;
  reviewsCountTr: string;
  status: string;
  statusTr: string;
  url: string;
  country: string;
  brandColor: string;
  accentBg: string;
  monogram: string;
  logoUrl: string;
}

export const MEDICAL_PLATFORMS: PlatformProfile[] = [
  {
    id: "qunomedical",
    name: "Qunomedical",
    badge: "Vetted & Certified MD",
    badgeTr: "Onaylı & Sertifikalı MD",
    rating: "4.9/5",
    reviewsCount: "120+ Reviews",
    reviewsCountTr: "120+ Değerlendirme",
    status: "Verified Medical Doctor",
    statusTr: "Doğrulanmış Uzman Hekim",
    url: "https://www.qunomedical.com/en/dr-mehmet-erdogan-md",
    country: "Germany 🇩🇪",
    brandColor: "#00828A",
    accentBg: "from-[#00828A]/20 via-[#00828A]/5 to-transparent",
    monogram: "Q",
    logoUrl: "/images/qunomedical mini logo.png"
  },
  {
    id: "bookimed",
    name: "Bookimed",
    badge: "Top Rated Surgeon",
    badgeTr: "En Yüksek Puanlı Cerrah",
    rating: "4.9/5",
    reviewsCount: "350+ Bookings",
    reviewsCountTr: "350+ Randevu",
    status: "Verified Doctor Profile",
    statusTr: "Doğrulanmış Doktor Profili",
    url: "https://us-uk.bookimed.com/doctor/mehmet-erdogan/",
    country: "US / UK 🇬🇧",
    brandColor: "#00b140",
    accentBg: "from-[#00b140]/20 via-[#00b140]/5 to-transparent",
    monogram: "B",
    logoUrl: "/images/bookimed logo.webp"
  },
  {
    id: "realself",
    name: "RealSelf",
    badge: "Top Doctor Status",
    badgeTr: "En İyi Doktor Rozeti",
    rating: "5.0/5",
    reviewsCount: "250+ Verified",
    reviewsCountTr: "250+ Gerçek Yorum",
    status: "Hall of Fame Doctor",
    statusTr: "Zirve Hekim Statüsü",
    url: "https://www.realself.com/dr/mehmet-erdogan-istanbul-turkey",
    country: "USA 🇺🇸",
    brandColor: "#ff5252",
    accentBg: "from-[#ff5252]/20 via-[#ff5252]/5 to-transparent",
    monogram: "RS",
    logoUrl: "/images/realself logo mini.png"
  },
  {
    id: "mediglobus",
    name: "MediGlobus",
    badge: "Certified Specialist",
    badgeTr: "Sertifikalı Uzman",
    rating: "4.9/5",
    reviewsCount: "Global Directory",
    reviewsCountTr: "Küresel Dizin",
    status: "Accredited Surgeon",
    statusTr: "Akredite Cerrah",
    url: "https://mediglobus.com/doctors/dr-mehmet-erdogan/",
    country: "Global 🌍",
    brandColor: "#2e86de",
    accentBg: "from-[#2e86de]/20 via-[#2e86de]/5 to-transparent",
    monogram: "MG",
    logoUrl: "/images/mediglobus logo.jpg"
  },
  {
    id: "vaidam",
    name: "Vaidam Health",
    badge: "Accredited Partner",
    badgeTr: "Akredite Partner Hekim",
    rating: "4.8/5",
    reviewsCount: "NABH Accredited",
    reviewsCountTr: "Akredite Ortak",
    status: "International Specialist",
    statusTr: "Uluslararası Uzman",
    url: "https://www.vaidam.com/doctors/dr-mehmet-erdogan",
    country: "Asia / Global 🌏",
    brandColor: "#e67e22",
    accentBg: "from-[#e67e22]/20 via-[#e67e22]/5 to-transparent",
    monogram: "V",
    logoUrl: "/images/vaidam health logo.jpg"
  },
  {
    id: "belorens",
    name: "Belorens",
    badge: "Verified Clinic Partner",
    badgeTr: "Doğrulanmış Klinik Ortağı",
    rating: "4.9/5",
    reviewsCount: "EU Health Standard",
    reviewsCountTr: "Avrupa Sağlık Standardı",
    status: "Verified Doctor",
    statusTr: "Onaylı Hekim Profili",
    url: "https://www.belorens.com/doctor/mehmet-erdogan/",
    country: "Europe 🇪🇺",
    brandColor: "#1e3799",
    accentBg: "from-[#1e3799]/20 via-[#1e3799]/5 to-transparent",
    monogram: "BL",
    logoUrl: "/images/belorens logo.jpg"
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
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#0e263f] text-xs font-bold text-[#0e263f] shadow-xs hover:shadow-md transition-all transform hover:-translate-y-0.5 group"
            >
              <div className="w-5 h-5 rounded-md overflow-hidden bg-white border border-slate-200/80 flex items-center justify-center p-0.5">
                <img 
                  src={platform.logoUrl} 
                  alt={platform.name}
                  className="w-full h-full object-contain rounded-xs"
                />
              </div>
              <span>{platform.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 font-extrabold border border-amber-200/60">
                ★ {platform.rating}
              </span>
              <ArrowUpRight01Icon size={14} strokeWidth={2} className="text-[#415e79] group-hover:text-[#0e263f] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-48 bg-gradient-to-r from-[#00828A]/5 via-[#2e86de]/5 to-[#ff5252]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#415e79]/30 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-sm">
          <Shield01Icon size={16} strokeWidth={2} className="text-[#0e263f]" />
          <span>{isTr ? "DOĞRULANMIŞ KÜRESEL SAĞLIK DİZİNLERİ" : "VERIFIED GLOBAL MEDICAL PROFILES"}</span>
        </div>
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0e263f] tracking-tight mb-3">
          {title || (isTr ? "Bağımsız Sağlık Platformlarındaki Resmi Profiller" : "Official Profiles on Leading Medical Platforms")}
        </h3>
        <p className="text-[#415e79] text-xs sm:text-sm lg:text-base font-semibold leading-relaxed max-w-2xl mx-auto mb-4">
          {subtitle || (isTr
            ? "Dr. Mehmet Erdoğan'ın bağımsız uluslararası sağlık turizmi ve hekim değerlendirme platformlarındaki doğrulanmış profilleri ve hasta yorumları."
            : "Review Dr. Mehmet Erdoğan's verified doctor credentials, independent patient reviews, and accreditation status across premier healthcare directories.")}
        </p>

        {/* Live Activity & Trust Indicator Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-[#0e263f] shadow-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-800 font-extrabold">
              {isTr ? "6/6 Aktif Doğrulanmış Profil" : "6/6 Active Verified Directories"}
            </span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5 text-[#415e79]">
            <StarIcon size={14} className="text-amber-500 fill-amber-400" />
            <span>{isTr ? "Ortalama 4.9/5 Bağımsız Puan" : "4.9/5 Average Independent Rating"}</span>
          </div>
          <span className="hidden sm:inline text-slate-300">•</span>
          <div className="flex items-center gap-1.5 text-[#415e79]">
            <Globe02Icon size={14} strokeWidth={2} className="text-[#415e79]" />
            <span>{isTr ? "Uluslararası Hasta Değerlendirmeleri" : "Global Patient Transparency"}</span>
          </div>
        </div>
      </div>

      {/* 6-Card Responsive Grid with Real Official Logos & Dynamic Lighting */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {MEDICAL_PLATFORMS.map((platform) => (
          <a
            key={platform.id}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-white rounded-2xl p-4 sm:p-4.5 border border-slate-200 hover:border-transparent shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 overflow-hidden cursor-pointer"
          >
            {/* Top Glowing Color Accent Bar on Hover */}
            <div 
              className="absolute top-0 inset-x-0 h-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: platform.brandColor }}
            />

            {/* Subtle Card Background Color Tint on Hover */}
            <div 
              className={`absolute inset-0 bg-gradient-to-b ${platform.accentBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
            />

            <div className="relative z-10">
              {/* Header: Real Logo Emblem + Country Flag Pill */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden bg-white border border-slate-200/90 shadow-xs flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={platform.logoUrl} 
                    alt={platform.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <span className="text-[10px] font-extrabold text-slate-600 bg-slate-100/90 border border-slate-200 px-2 py-0.5 rounded-full">
                  {platform.country}
                </span>
              </div>

              {/* Star Rating Badge */}
              <div className="flex items-center gap-1 bg-amber-50/90 border border-amber-200/80 px-2 py-0.5 rounded-md text-[11px] font-extrabold text-amber-900 mb-2.5 self-start w-fit">
                <StarIcon size={12} className="text-amber-500 fill-amber-400 shrink-0" />
                <span>{platform.rating}</span>
                <span className="text-[9px] text-amber-700/80 font-semibold ml-0.5">
                  ({isTr ? platform.reviewsCountTr : platform.reviewsCount})
                </span>
              </div>

              {/* Platform Title */}
              <h4 className="font-heading font-extrabold text-sm sm:text-base text-[#0e263f] group-hover:text-[var(--hover-color)] transition-colors mb-1" style={{ ['--hover-color' as any]: platform.brandColor }}>
                {platform.name}
              </h4>

              {/* Badge Subtitle */}
              <p className="text-[11px] font-bold text-[#415e79] leading-snug mb-3">
                {isTr ? platform.badgeTr : platform.badge}
              </p>
            </div>

            {/* Bottom Status / Link Action with Live Pulse */}
            <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold mt-2">
              <div className="flex items-center gap-1.5 text-emerald-700">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-extrabold truncate">
                  {isTr ? "Aktif Onaylı" : "Live Verified"}
                </span>
              </div>

              <div className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-[#0e263f] flex items-center justify-center transition-colors">
                <ArrowUpRight01Icon 
                  size={13} 
                  strokeWidth={2.5} 
                  className="text-[#415e79] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" 
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
