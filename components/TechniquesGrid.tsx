"use client";

import { useState } from "react";
import { Sparkle, CaretRight, ArrowRight } from "@phosphor-icons/react";
import { Locale } from "@/lib/dictionary";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";

interface TechniquesGridProps {
  locale: Locale;
  showVideos?: boolean;
}

export default function TechniquesGrid({ locale, showVideos = false }: TechniquesGridProps) {
  const isTr = locale === "tr";
  const [activeCategory, setActiveCategory] = useState<"techniques" | "area" | "non-surgical">("techniques");

  // Curate 3 videos specifically for Patient Journeys
  const patientJourneyVideos = [
    ALL_YOUTUBE_VIDEOS[1], // Live Sapphire FUE
    ALL_YOUTUBE_VIDEOS[2], // DHI Technique
    ALL_YOUTUBE_VIDEOS[8], // Sapphire vs Steel
  ];

  // Techniques tab cards (Screenshot 3 structure)
  const techniquesCards = [
    {
      badge: "Sapphire FUE",
      image: "/images/Sapphire FUE.webp",
      title: isTr ? "Safir FUE Saç Ekimi" : "Sapphire FUE Hair Transplant",
      desc: isTr
        ? "Doğal değerli safir uçlarla açılan pürüzsüz mikro kanallar sayesinde minimum doku travması ve maksimum sıklık."
        : "Fine sapphire blades create small, smooth micro-channels for dense packing, rapid healing, and minimal tissue trauma.",
      meta: isTr ? "5.000 Grefe Kadar" : "Up to 5,000 Grafts",
      linkText: isTr ? "Safir FUE İncele" : "Explore Sapphire FUE",
      href: "#consultation",
    },
    {
      badge: "DHI Choi Pen",
      image: "/images/DHI Transplant.jpg",
      title: isTr ? "DHI Doğrudan Saç Ekimi" : "DHI (Direct Hair Implantation)",
      desc: isTr
        ? "Önceden kanal açılmaksızın patentli Choi implanter kalemi ile köklerin doğrudan saç çıkış açısına uygun ekimi."
        : "Direct implantation with specialized Choi pens, placing grafts without pre-opened channels for precision angle control.",
      meta: isTr ? "4.000 Grefe Kadar" : "Up to 4,000 Grafts",
      linkText: isTr ? "DHI Yöntemini İncele" : "Explore DHI Method",
      href: "#consultation",
    },
    {
      badge: "Manual FUE",
      image: "/images/hair transplant doctor mehmet erdogan consultation with patient.jpg",
      title: isTr ? "Manuel FUE Greft Alımı" : "Manual FUE Extraction",
      desc: isTr
        ? "Cerrahın tam dokunma hissi ve mikro el zımbası ile her kök ünitesinin donör alanı yıpratmadan hassas alımı."
        : "Full surgeon tactile control over every extraction, preserving the donor zone with individual manual micro-punches.",
      meta: isTr ? "Seçici Greft Alımı" : "Selective Harvesting",
      linkText: isTr ? "Manuel FUE Detayları" : "Explore Manual FUE",
      href: "#consultation",
    },
    {
      badge: "Unshaven VIP",
      image: "/images/unshaven vip hair transplant.png",
      title: isTr ? "Tıraşsız VIP Saç Ekimi" : "Unshaven VIP Hair Transplant",
      desc: isTr
        ? "Mevcut saçlar kazıtılmadan, sosyal ve iş hayatınızdan geri kalmadan uygulanan görünmez ekim tekniği."
        : "Discreet hair restoration without shaving existing hair, enabling an immediate return to professional and social life.",
      meta: isTr ? "Hafif & Orta Dökülmeler" : "Mild to Moderate Loss",
      linkText: isTr ? "Tıraşsız Ekimi İncele" : "Explore Unshaven FUE",
      href: "#consultation",
    },
    {
      badge: "Long FUE",
      image: "/images/hair transplant doctor mehmet erdogan with consultation.jpg",
      title: isTr ? "Uzun Saç FUE (Long FUE)" : "Long Hair FUE",
      desc: isTr
        ? "Saç telleri kısaltılmadan ekilerek operasyon bittiği gün nihai saç çizgisi ve yoğunluk sonucunun önizlemesi."
        : "Transplanting long hair strands without cutting, allowing patients to see immediate aesthetic hairline results on surgery day.",
      meta: isTr ? "Anlık Estetik Önizleme" : "Immediate Preview",
      linkText: isTr ? "Uzun FUE Detayları" : "Explore Long FUE",
      href: "#consultation",
    },
    {
      badge: "Body Hair (BHT)",
      image: "/images/Auqill P 2400 Grafts Sapphire FUE Beard Transplant Before After.png",
      title: isTr ? "Vücut Kılı Ekimi (BHT)" : "Body Hair Transplant (BHT)",
      desc: isTr
        ? "Yetersiz donör vakalarında sakal ve göğüs bölgesindeki güçlü köklerin alınarak tepe alanına transfer edilmesi."
        : "Harvests viable follicles from the beard and chest to augment a depleted scalp donor supply for fuller crown coverage.",
      meta: "+€150 / +€250 donor add-on",
      linkText: isTr ? "BHT Yöntemini İncele" : "Explore Body Hair",
      href: "#consultation",
    },
    {
      badge: "Needle-Free",
      image: "/images/dr-mehmet-erdogan-consultation.webp",
      title: isTr ? "İğnesiz Konfor Anestezisi" : "Needle-Free Comfort Anesthesia",
      desc: isTr
        ? "Yüksek basınçlı mikro püskürtme teknolojisiyle iğne korkusu ve acısı olmadan maksimum konforlu lokal anestezi."
        : "Pressure-based subcutaneous local anesthetic delivery, eliminating needle pain and anxiety across all surgical stages.",
      meta: isTr ? "Tüm Tekniklerde Geçerli" : "Available All Techniques",
      linkText: isTr ? "Konfor Anestezisi" : "Learn About Anesthesia",
      href: "#consultation",
    },
    {
      badge: "Doctor Assessment",
      image: "/images/dr-mehmet-erdogan.webp",
      title: isTr ? "Hangi Yöntem Size Uygun?" : "Not Sure Which Technique?",
      desc: isTr
        ? "Dr. Mehmet Erdoğan fotoğraflarınızı bizzat inceleyerek saç teli kalınlığınıza ve donörünüze en uygun yöntemi seçer."
        : "Dr. Mehmet Erdoğan evaluates your donor characteristics, hair texture, and goals to prescribe your ideal surgical plan.",
      meta: isTr ? "Kişiye Özel Tedavi Planı" : "Personalized Surgical Plan",
      linkText: isTr ? "Ücretsiz Değerlendirme Al" : "Get Free Assessment",
      href: "#consultation",
    },
  ];

  // By area tab cards (Screenshot 4 structure)
  const areaCards = [
    {
      badge: "Men's Restoration",
      image: "/images/JamesN4100GraftsSapphireFUEHairTransplant.jpg",
      title: isTr ? "Erkek Tipi Saç Restorasyonu" : "Men's Hair Restoration",
      desc: isTr
        ? "Norwood evrelerine uygun şakak, ön çizgi ve tepe dökülmelerinde doğal açılı yüksek yoğunluklu restorasyon."
        : "Precision hairline lowering and crown densification designed for Norwood-stage male pattern baldness.",
      meta: "Norwood 2 – 6",
      linkText: isTr ? "Erkek Saç Ekimi" : "Learn more",
      href: "#consultation",
    },
    {
      badge: "Female Restoration",
      image: "/images/Mehmet Erdoğan kadınlarda saç ekimi.jpg",
      title: isTr ? "Kadınlarda Saç Ekimi" : "Female Hair Restoration",
      desc: isTr
        ? "Mevcut saç tellerini kazıtmadan, kadın tipi genel seyrelmeyi hedefleyen hassas mikro DHI ekimi."
        : "Gentle density restoration without full shaving, treating diffuse female thinning while protecting native follicles.",
      meta: isTr ? "Tıraşsız Alıcı Alan" : "No Shave Required",
      linkText: isTr ? "Kadınlarda Saç Ekimi" : "Hair loss in women",
      href: "#consultation",
    },
    {
      badge: "Afro Hair",
      image: "/images/Ido B 7750 Grafts Sapphire FUE Before After.jpg",
      title: isTr ? "Afro Tipi Saç Ekimi" : "Afro Hair Restoration",
      desc: isTr
        ? "Deri altındaki kıvrımlı kök yapısına uygun özel kavisli uçlarla kök kırılmasını önleyen güvenli alım."
        : "Curl-safe extraction using customized curved punches designed specifically for textured, curly hair follicles.",
      meta: isTr ? "Özel Kavisli Uçlar" : "Curved Axis Punches",
      linkText: isTr ? "Afro Saç Ekimi" : "Afro hair transplant",
      href: "#consultation",
    },
    {
      badge: "Beard & Jawline",
      image: "/images/beard facial hair restoration.png",
      title: isTr ? "Sakal & Bıyık Restorasyonu" : "Beard & Facial Hair",
      desc: isTr
        ? "Seyrek, köselik veya yara izi bulunan sakal hatlarında tekli köklerle homojen ve doğal çıkış açılı ekim."
        : "Full, sculpted beard and moustache reconstruction matching your natural facial growth angles and density.",
      meta: "1,500 – 3,000 Grafts",
      linkText: isTr ? "Sakal Ekimi İncele" : "Beard transplant",
      href: "#consultation",
    },
    {
      badge: "Eyebrows",
      image: "/images/Cindy L 450 Grafts Sapphire FUE Eyebrow Transplant Before After.jpg",
      title: isTr ? "Kaş Ekimi" : "Eyebrow Restoration",
      desc: isTr
        ? "Aşırı alım, yanık veya genetik dökülmelerde yüz simetrisine uygun mikro safir kanallarla kaş inşası."
        : "Reconstructs thinning or over-plucked brows with ultra-flat single-hair placement for natural facial framing.",
      meta: "300 – 600 Grafts",
      linkText: isTr ? "Kaş Ekimi İncele" : "Eyebrow transplant",
      href: "#consultation",
    },
    {
      badge: "Sideburns",
      image: "/images/Thomas M 4100 Grafts Sapphire FUE Beard Transplant Before After.png",
      title: isTr ? "Favori Restorasyonu" : "Sideburn Transplantation",
      desc: isTr
        ? "Yüz gerdirme ameliyatları sonrası kaybolan veya genetik olarak seyrek favorileri yeniden şekillendirir."
        : "Restores sideburn symmetry lost to facelifts or genetics, perfectly harmonizing with the natural beard line.",
      meta: isTr ? "Yüz Çerçevesi" : "Facial Framing",
      linkText: isTr ? "Favori Ekimi İncele" : "Sideburn restoration",
      href: "#consultation",
    },
    {
      badge: "Moustache",
      image: "/images/Harrison D 4000 Grafts Sapphire FUE Beard Transplant Before After.png",
      title: isTr ? "Bıyık Ekimi" : "Moustache Restoration",
      desc: isTr
        ? "Üst dudak bölgesindeki yara, yanık veya seyrelmelerde yoğun ve simetrik bıyık restorasyonu."
        : "Dense, natural upper-lip hair restoration correcting scars, asymmetry, or diffuse thinning.",
      meta: isTr ? "Yüksek Yoğunluk" : "High Density",
      linkText: isTr ? "Bıyık Ekimi İncele" : "Moustache transplant",
      href: "#consultation",
    },
  ];

  // Non-surgical tab cards (Screenshot 5 structure)
  const nonSurgicalCards = [
    {
      badge: "PRP Therapy",
      image: "/images/smile hair clinic operation room 2.jpg",
      title: isTr ? "PRP Saç Tedavisi" : "PRP Hair Treatment",
      desc: isTr
        ? "Kişinin kendi kanından elde edilen zenginleştirilmiş trombosit ve büyüme faktörleri ile folikül canlandırma."
        : "Concentrated autologous growth factor plasma stimulating dormant hair follicles and enhancing vascular nourishment.",
      meta: isTr ? "3 – 6 Seans Protokolü" : "3 – 6 Sessions Protocol",
      linkText: isTr ? "PRP Tedavisi Detayları" : "PRP hair treatment",
      href: "#consultation",
    },
    {
      badge: "Exosome Therapy",
      image: "/images/smile hair clinic washing room 2.jpg",
      title: isTr ? "Eksozom Tedavisi" : "Exosome Therapy",
      desc: isTr
        ? "Hücresel iletişimi ve kök hücre aktivasyonunu tetikleyen yeni nesil biyoteknolojik sinyal molekülleri."
        : "Cutting-edge cellular signaling vesicles accelerating follicular regeneration, cell turnover, and scalp health.",
      meta: isTr ? "1 – 2 Seans Protokolü" : "1 – 2 Sessions Protocol",
      linkText: isTr ? "Eksozom Tedavisi" : "Exosome hair therapy",
      href: "#consultation",
    },
    {
      badge: "Mesotherapy",
      image: "/images/smile hair clinic operation room.jpg",
      title: isTr ? "Saç Mezoterapisi" : "Scalp Mesotherapy",
      desc: isTr
        ? "Kafa derisine mikro enjeksiyonlarla doğrudan verilen biyotin, çinko, aminoasit ve vitamin kokteyli."
        : "Targeted intradermal micro-infusion of essential vitamins, minerals, and peptides directly into the scalp dermis.",
      meta: isTr ? "4 – 8 Seans Protokolü" : "4 – 8 Sessions Protocol",
      linkText: isTr ? "Mezoterapi Detayları" : "Mesotherapy protocol",
      href: "#consultation",
    },
    {
      badge: "Ozone Therapy",
      image: "/images/smile hair clinic waiting room 2.jpg",
      title: isTr ? "Medikal Ozon Tedavisi" : "Medical Ozone Therapy",
      desc: isTr
        ? "Kılcal damar dolaşımını ve doku oksijenasyonunu artırarak saç dökülmesini yavaşlatan ozon uygulaması."
        : "Medical ozone infusion enhancing capillary circulation, oxygen delivery, and anti-inflammatory healing for follicles.",
      meta: isTr ? "Haftalık Protokol" : "Weekly Protocol",
      linkText: isTr ? "Ozon Tedavisi Detayları" : "Ozone hair therapy",
      href: "#consultation",
    },
  ];

  const currentCards =
    activeCategory === "techniques"
      ? techniquesCards
      : activeCategory === "area"
      ? areaCards
      : nonSurgicalCards;

  return (
    <section
      id="techniques"
      className="py-20 bg-[#ededed] relative border-y border-[#415e79]/20"
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Consistent with our site's typography & badge style) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkle weight="bold" className="w-4 h-4 text-[#0e263f]" />
            <span>{isTr ? "Cerrahi Metotlar & Tedaviler" : "Real Transformation • Surgical Methodologies"}</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
            {isTr ? "Gelişmiş Saç Ekimi Teknikleri" : "Advanced Hair Transplant Techniques"}
          </h2>
          <p className="text-base sm:text-lg text-[#415e79] font-medium leading-relaxed max-w-2xl mx-auto">
            {isTr
              ? "Dr. Mehmet Erdoğan saç restorasyonunda altın standartları uygular. Bir teknik, uygulama alanı veya cerrahi olmayan tedavi seçin."
              : "Dr. Mehmet Erdoğan applies the highest standards in hair restoration. Choose a surgical technique, a treatment area, or a non-surgical therapy."}
          </p>
        </div>

        {/* 3-Category Pill Tabs (Consistent with our site's button design) */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("techniques")}
            className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
              activeCategory === "techniques"
                ? "bg-[#0e263f] text-white shadow-md scale-105"
                : "bg-white text-[#0e263f] hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            {isTr ? "Teknikler" : "Techniques"}
          </button>
          <button
            onClick={() => setActiveCategory("area")}
            className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
              activeCategory === "area"
                ? "bg-[#0e263f] text-white shadow-md scale-105"
                : "bg-white text-[#0e263f] hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            {isTr ? "Bölgeye Göre" : "By area"}
          </button>
          <button
            onClick={() => setActiveCategory("non-surgical")}
            className={`px-6 sm:px-8 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 cursor-pointer ${
              activeCategory === "non-surgical"
                ? "bg-[#0e263f] text-white shadow-md scale-105"
                : "bg-white text-[#0e263f] hover:bg-slate-50 border border-slate-200 hover:border-slate-300 shadow-xs"
            }`}
          >
            {isTr ? "Ameliyatsız Tedaviler" : "Non-surgical"}
          </button>
        </div>

        {/* 4-Column Cards Grid (Our Site's Card Aesthetic: Crisp White, Rounded-3xl, Photo Header, Navy Accents) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {currentCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#0e263f]/60 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
            >
              <div>
                {/* Visual Header with Real Procedure Photography & Brand Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0e263f]/90 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    {card.badge}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h4 className="font-heading font-extrabold text-[#0e263f] text-lg sm:text-xl mb-2 group-hover:text-[#415e79] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed mb-4">
                    {card.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer: Meta Pill & Brand Arrow Link */}
              <div className="px-6 pb-6 pt-0">
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 text-[#0e263f] border border-slate-200/80">
                    {card.meta}
                  </span>
                  <a
                    href={card.href}
                    className="text-xs font-bold text-[#0e263f] group-hover:text-[#415e79] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <CaretRight weight="bold" className="w-3.5 h-3.5 text-[#0e263f] group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Patient Journeys Video Subsection */}
        {showVideos && (
          <div className="pt-12 border-t border-[#415e79]/20">
            <YouTubeVideoGrid
              locale={locale}
              videos={patientJourneyVideos}
              darkTheme={false}
              tag={isTr ? "HASTA DENEYİMLERİ" : "PATIENT JOURNEYS"}
              title={isTr ? "Hasta Deneyimleri & Cerrahi Süreç" : "Patient Journeys"}
              subtitle={
                isTr
                  ? "Dr. Mehmet Erdoğan ile gerçek hasta hikayeleri, canlı cerrahi operasyon anları ve adım adım dönüşüm süreçleri."
                  : "Real patient experiences, live surgical footage, and step-by-step transformation journeys with Dr. Mehmet Erdoğan."
              }
            />
          </div>
        )}

      </div>
    </section>
  );
}
