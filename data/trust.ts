// Single source of truth for review counts, independent ratings, platform URLs, and accreditations

export interface ReviewBadgeData {
  platform: string;
  score: string;
  bgColor: string;
  countEn: string;
  countTr: string;
  url: string;
  logoUrl?: string;
  starColor: string;
}

export interface MedicalDirectoryProfile {
  id: string;
  name: string;
  badgeEn: string;
  badgeTr: string;
  rating: string;
  reviewsCountEn: string;
  reviewsCountTr: string;
  statusEn: string;
  statusTr: string;
  url: string;
  country: string;
  brandColor: string;
  accentBg: string;
  monogram: string;
  logoUrl: string;
}

export const TRUST_METRICS = {
  proceduresCount: "5,000+",
  proceduresCountLabelEn: "Procedures Performed",
  proceduresCountLabelTr: "Başarılı Operasyon",
  
  yearsExperience: "15+",
  yearsExperienceLabelEn: "Years Medical Experience",
  yearsExperienceLabelTr: "Yıllık Tıbbi Tecrübe",

  sinceYear: "2018",
  sinceYearLabelEn: "Hair Restoration Doctor",
  sinceYearLabelTr: "Saç Ekim Hekimi",

  overallRating: "4.9/5",
  overallRatingLabelEn: "Patient Rating (10,000+ Reviews)",
  overallRatingLabelTr: "Hasta Memnuniyeti (10.000+ Yorum)",

  totalReviewsCount: "10,000+",
  totalCountries: "100+",

  accreditations: [
    { title: "SAÇREHDER President & Founder", trTitle: "SAÇREHDER Kurucu & Başkanı" },
    { title: "FUE Europe Member", trTitle: "FUE Europe Üyesi" },
    { title: "World FUE Institute", trTitle: "World FUE Institute Üyesi" },
    { title: "Yeditepe M.D.", trTitle: "Yeditepe Tıp Fakültesi Mezunu" }
  ]
};

export const REVIEW_BADGES: ReviewBadgeData[] = [
  {
    platform: "Google",
    score: "4.9",
    bgColor: "bg-[#ea4335]",
    countEn: "5,000+ Reviews",
    countTr: "5.000+ Yorum",
    url: "https://www.google.com/maps/place//data=!4m3!3m2!1s0x14cac8b2a33a8b65:0xbc589f8816b1c1fa!12e1?source=g.page.m._&laa=merchant-review-solicitation",
    logoUrl: "/images/google-g-clean.png",
    starColor: "text-amber-400 fill-amber-400"
  },
  {
    platform: "Trustpilot",
    score: "4.9",
    bgColor: "bg-[#00b67a]",
    countEn: "3,000+ Reviews",
    countTr: "3.000+ Yorum",
    url: "https://www.trustpilot.com/review/www.smilehairclinic.com",
    logoUrl: "/images/trustpilot-clean.png",
    starColor: "text-[#00b67a] fill-[#00b67a]"
  },
  {
    platform: "ProvenExpert",
    score: "4.9",
    bgColor: "bg-[#c8b070]",
    countEn: "1,800+ Reviews",
    countTr: "1.800+ Yorum",
    url: "https://www.provenexpert.com/tr-tr/smile-hair-transplant-clinic-istanbul/",
    logoUrl: "/images/provenexpert-clean.png",
    starColor: "text-[#c8b070] fill-[#c8b070]"
  },
  {
    platform: "RealSelf",
    score: "5.0",
    bgColor: "bg-[#ff6868]",
    countEn: "250+ Reviews",
    countTr: "250+ Yorum",
    url: "https://www.realself.com/dr/mehmet-erdogan-istanbul-turkey",
    logoUrl: "/images/realself logo mini.png",
    starColor: "text-amber-400 fill-amber-400"
  }
];

export const MEDICAL_DIRECTORIES: MedicalDirectoryProfile[] = [
  {
    id: "qunomedical",
    name: "Qunomedical",
    badgeEn: "Vetted & Certified MD",
    badgeTr: "Onaylı & Sertifikalı MD",
    rating: "4.9/5",
    reviewsCountEn: "120+ Reviews",
    reviewsCountTr: "120+ Değerlendirme",
    statusEn: "Verified Medical Doctor",
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
    badgeEn: "Top Rated Surgeon",
    badgeTr: "En Yüksek Puanlı Cerrah",
    rating: "4.9/5",
    reviewsCountEn: "350+ Bookings",
    reviewsCountTr: "350+ Randevu",
    statusEn: "Verified Doctor Profile",
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
    badgeEn: "Top Doctor Status",
    badgeTr: "En İyi Doktor Rozeti",
    rating: "5.0/5",
    reviewsCountEn: "250+ Verified",
    reviewsCountTr: "250+ Gerçek Yorum",
    statusEn: "Hall of Fame Doctor",
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
    badgeEn: "Certified Specialist",
    badgeTr: "Sertifikalı Uzman",
    rating: "4.9/5",
    reviewsCountEn: "Global Directory",
    reviewsCountTr: "Küresel Dizin",
    statusEn: "Accredited Surgeon",
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
    badgeEn: "Accredited Partner",
    badgeTr: "Akredite Partner Hekim",
    rating: "4.8/5",
    reviewsCountEn: "NABH Accredited",
    reviewsCountTr: "Akredite Ortak",
    statusEn: "International Specialist",
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
    badgeEn: "Verified Clinic Partner",
    badgeTr: "Doğrulanmış Klinik Ortağı",
    rating: "4.9/5",
    reviewsCountEn: "EU Health Standard",
    reviewsCountTr: "Avrupa Sağlık Standardı",
    statusEn: "Verified Doctor",
    statusTr: "Onaylı Hekim Profili",
    url: "https://www.belorens.com/doctor/mehmet-erdogan/",
    country: "Europe 🇪🇺",
    brandColor: "#1e3799",
    accentBg: "from-[#1e3799]/20 via-[#1e3799]/5 to-transparent",
    monogram: "BL",
    logoUrl: "/images/belorens logo.jpg"
  }
];
