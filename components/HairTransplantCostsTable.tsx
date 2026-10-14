"use client";

import { useState } from "react";
import { Check, ShieldCheck, Sparkle, Trophy, AirplaneTilt, ArrowRight } from "@phosphor-icons/react";
import { Locale } from "@/lib/dictionary";

interface HairTransplantCostsTableProps {
  locale: Locale;
  hideTitle?: boolean;
}

export default function HairTransplantCostsTable({ locale, hideTitle = false }: HairTransplantCostsTableProps) {
  const isTr = locale === "tr";
  const [activeTab, setActiveTab] = useState<"country" | "grafts" | "packages">("country");

  // Country & Provider Comparison
  const countryComparison = [
    {
      provider: isTr ? "Türkiye (Dr. Mehmet Erdoğan)" : "Turkey (Dr. Mehmet Erdoğan)",
      badge: isTr ? "ÖNERİLEN" : "RECOMMENDED",
      cost: "€2,390 – €5,790",
      inclusions: isTr
        ? "Her Şey Dâhil VIP (5★ Otel + VIP Vito Transfer + PRP + 1 Yıllık İlaç & Takip)"
        : "All-Inclusive VIP (5★ Hotel + VIP Transfer + PRP + 1-Yr Care Kit & Digital Follow-up)",
      guarantee: isTr ? "Ömür Boyu Büyüme Garantisi" : "Lifetime Growth Guarantee",
      highlight: true,
    },
    {
      provider: isTr ? "Türkiye Genel Klinik Ortalaması" : "General Turkey Market Average",
      badge: isTr ? "PİYASA ORTALAMASI" : "MARKET AVERAGE",
      cost: "€1,800 – €2,800",
      inclusions: isTr
        ? "Standart Paket (Temel Otel + Transfer + Operasyon, Değişken Tıbbi Denetim)"
        : "Standard Clinic Package (Basic Hotel + Transfers + Surgery, variable medical supervision)",
      guarantee: isTr ? "1 Yıl Standart Garanti" : "1-Year Standard Guarantee",
      highlight: false,
    },
    {
      provider: isTr ? "Birleşik Krallık (UK)" : "United Kingdom (UK)",
      badge: null,
      cost: "£6,500 – £12,000",
      inclusions: isTr
        ? "Yalnızca Cerrahi (Sınırlı greft kotası, otel ve transfer hariç)"
        : "Procedure Only (Strict graft limits, hotel & transfers not included)",
      guarantee: isTr ? "Değişken / Ek Ücretli" : "Variable / Extra Charge",
      highlight: false,
    },
    {
      provider: isTr ? "Amerika Birleşik Devletleri (USA)" : "United States (USA)",
      badge: null,
      cost: "$9,000 – $18,000",
      inclusions: isTr
        ? "Yalnızca Cerrahi (Greft başına $4-$8 faturalandırma + tesis ücretleri)"
        : "Procedure Only ($4 - $8 per graft billing + hospital facility surcharges)",
      guarantee: isTr ? "Değişken" : "Variable",
      highlight: false,
    },
    {
      provider: isTr ? "Almanya & Batı Avrupa" : "Germany & Western EU",
      badge: null,
      cost: "€6,000 – €14,000",
      inclusions: isTr
        ? "Yalnızca Cerrahi (Konaklama ve VIP transfer dâhil değildir)"
        : "Procedure Only (Accommodation and transfers not included)",
      guarantee: isTr ? "Standart Yasal Garanti" : "Standard Statutory Guarantee",
      highlight: false,
    },
  ];

  // Graft Range Breakdown
  const graftTiers = [
    {
      grafts: "1,500 – 2,500 Grafts",
      area: isTr ? "Ön Saç Çizgisi & Şakak Düzeltme (Norwood 2-3)" : "Hairline Lowering & Temples (Norwood 2-3)",
      turkeyAvg: "€1,800 – €2,200",
      drErdoganCost: "€2,390",
      internationalAvg: "£6,500 / $9,500",
      notes: isTr
        ? "Doğal saç çizgisi oluşturma, şakak simetrisi ve erken dökülme vakaları için idealdir."
        : "Ideal for early hairline recession, temporal peak reconstruction, and youthful contouring.",
    },
    {
      grafts: "2,500 – 3,500 Grafts",
      area: isTr ? "Ön Bölge & Orta Tepe Dolgunlaştırma (Norwood 3-4)" : "Frontal Zone & Mid-Scalp Blend (Norwood 3-4)",
      turkeyAvg: "€2,000 – €2,600",
      drErdoganCost: "€2,690 – €3,290",
      internationalAvg: "£8,500 / $13,000",
      notes: isTr
        ? "Genişleyen açılmalar için safir bıçaklarla yüksek yoğunluklu kanal açımı."
        : "High-density micro-sapphire channel opening across frontal half and thinning mid-scalp.",
    },
    {
      grafts: "3,500 – 4,500 Grafts",
      area: isTr ? "İleri Düzey Dökülme & Tepe Bölgesi (Norwood 4-5)" : "Extensive Frontal & Crown Vertex (Norwood 4-5)",
      turkeyAvg: "€2,400 – €3,000",
      drErdoganCost: "€3,290 – €3,890",
      internationalAvg: "£10,500 / $16,500",
      notes: isTr
        ? "Tek seansta maksimum greft alımı ve donör koruma prensibiyle tam tepe kapatma."
        : "Full single-session mega restoration balancing donor preservation with maximum vertex coverage.",
    },
    {
      grafts: "4,500 – 5,500+ Grafts",
      area: isTr ? "Maksimum Mega Seans (Norwood 5-6 / 2 Seans Planlaması)" : "Maximum Safe Mega Session (Norwood 5-6)",
      turkeyAvg: "€2,800 – €3,800",
      drErdoganCost: "€3,990 – €5,790",
      internationalAvg: "£14,000+ / $22,000+",
      notes: isTr
        ? "Donör rezervi elverdiğinde sakal/göğüs kökü desteği ve Dr. Mehmet Erdoğan kişisel planlaması."
        : "Exhaustive donor mapping, optional body hair support, and direct Dr. Mehmet Erdoğan surgical leadership.",
    },
  ];

  // Package Tier Breakdown
  const packageTiers = [
    {
      name: isTr ? "Türkiye Genel Klinik Ortalaması" : "General Turkey Market Average",
      badge: isTr ? "Standart Klinikler" : "Standard Clinics",
      price: "€1,800 – €2,500",
      idealFor: isTr ? "Düşük bütçeli, temel teknisyen operasyonları" : "Budget-focused, technician-only operations",
      features: [
        isTr ? "Standart FUE / Metal bıçak kanal açımı" : "Standard FUE extraction with steel blades",
        isTr ? "3 yıldızlı şehir içi otel konaklaması" : "3-star standard hotel accommodation",
        isTr ? "Temel havaalanı grup transferi" : "Group airport shuttle transfers",
        isTr ? "Temel yıkama losyonu ve şampuan" : "Basic wash foam and shampoo",
        isTr ? "Kısa süreli müşteri temsilcisi takibi" : "Short-term post-op chat support",
      ],
      highlight: false,
    },
    {
      name: isTr ? "Gold Paket (Dr. Mehmet Erdoğan Ekibi)" : "Gold Package (Dr. Mehmet Erdoğan Team)",
      badge: isTr ? "EN POPÜLER" : "MOST POPULAR",
      price: "€2,390",
      idealFor: isTr ? "Eksiksiz VIP sağlık turizmi ve Safir FUE hassasiyeti" : "Comprehensive 5-star VIP care & Sapphire FUE",
      features: [
        isTr ? "Dr. Mehmet Erdoğan liderliğinde kişisel saç çizgisi tasarımı" : "Personal hairline design led by Dr. Mehmet Erdoğan",
        isTr ? "Safir mikro bıçaklarla yüksek yoğunluklu kanal açımı" : "Sapphire micro-blade channel creation",
        isTr ? "5 yıldızlı lüks otelde 2 gece konaklama" : "2 nights luxury 5-star hotel accommodation",
        isTr ? "Özel şoförlü VIP Mercedes Vito havalimanı transferleri" : "Private VIP Mercedes Vito chauffeur transfers",
        isTr ? "Kapsamlı ameliyat öncesi kan testleri & PRP tedavisi" : "Pre-op comprehensive blood tests & PRP session",
        isTr ? "1 yıllık medikal takip ve özel hasta koordinatörü" : "1-year dedicated digital follow-up & medical coordinator",
      ],
      highlight: true,
    },
    {
      name: isTr ? "Platinum DHI / VIP Paket" : "Platinum DHI / VIP Package",
      badge: isTr ? "İLERİ TEKNOLOJİ" : "ADVANCED PRECISION",
      price: "€3,490",
      idealFor: isTr ? "Tıraşsız ekim, DHI Choi kalemi ve iğnesiz konfor" : "DHI Choi pen, unshaven options & painless comfort",
      features: [
        isTr ? "DHI Choi Kalemi veya Safir FUE ileri teknik seçeneği" : "DHI Choi Implanter pen or Sapphire FUE option",
        isTr ? "İğnesiz basınçlı ağrısız lokal anestezi konforu" : "Needle-free, pressure-based comfort local anesthesia",
        isTr ? "Ozon & mezoterapi destekli saç kökü beslemesi" : "Hyperbaric ozone & mesotherapy follicle booster",
        isTr ? "5 yıldızlı lüks süit otel konaklaması" : "5-star luxury suite accommodation in Istanbul",
        isTr ? "Ömür boyu büyüme garantisi sertifikası" : "Lifetime Growth Guarantee certificate",
      ],
      highlight: false,
    },
    {
      name: isTr ? "Exclusive Doktor Katılımlı Paket" : "Exclusive Doctor-Led VIP Package",
      badge: isTr ? "DR. MEHMET ERDOĞAN ÖZEL" : "DIRECT DOCTOR SURGERY",
      price: "€4,890 – €5,790",
      idealFor: isTr ? "Kanal açımı bizzat Dr. Mehmet Erdoğan tarafından" : "Kanal opening performed directly by Dr. Mehmet Erdoğan",
      features: [
        isTr ? "Tüm kritik kanal açımı bizzat Dr. Mehmet Erdoğan tarafından" : "All incision & channel creation performed directly by Dr. Mehmet Erdoğan",
        isTr ? "Günde sadece 1 seçkin hastaya özel cerrahi odak" : "Strict limit of 1 VIP patient per day for maximum surgical focus",
        isTr ? "Kişisel cerrahi konsültasyon ve trikolojik planlama" : "One-on-one surgical consultation & trichological mapping",
        isTr ? "5 yıldızlı ultra-lüks otel paketi ve premium refakatçi desteği" : "5-star ultra-luxury hotel package with companion support",
        isTr ? "Tam teşekküllü 12 aylık premium medikal bakım seti" : "Full 12-month post-op medical care kit & executive line",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
      {/* Title & Subtitle (optional) */}
      {!hideTitle && (
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy weight="bold" className="w-4 h-4 text-[#0e263f]" />
            <span>{isTr ? "Şeffaf Fiyatlandırma Rehberi" : "Transparent Price Guide"}</span>
          </div>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0e263f] tracking-tight mb-3">
            {isTr ? "Türkiye Saç Ekimi Fiyatları" : "Hair Transplant Turkey Costs"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
            {isTr
              ? "İstanbul'da Dr. Mehmet Erdoğan kliniği, Türkiye genel piyasa ortalaması ve İngiltere, ABD ve Almanya arasındaki şeffaf fiyat, paket ve greft karşılaştırması."
              : "Transparent comparison between Dr. Mehmet Erdoğan in Istanbul, general Turkey market averages, and clinics in the UK, USA, and Western Europe."}
          </p>
        </div>
      )}

      {/* Interactive Switcher Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        <button
          onClick={() => setActiveTab("country")}
          className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
            activeTab === "country"
              ? "bg-[#0e263f] text-white shadow-md scale-105"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
          }`}
        >
          {isTr ? "Uluslararası & Türkiye Ortalaması" : "International & Turkey Comparison"}
        </button>
        <button
          onClick={() => setActiveTab("grafts")}
          className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
            activeTab === "grafts"
              ? "bg-[#0e263f] text-white shadow-md scale-105"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
          }`}
        >
          {isTr ? "Greft Sayısına Göre Maliyet" : "Cost by Graft Count"}
        </button>
        <button
          onClick={() => setActiveTab("packages")}
          className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
            activeTab === "packages"
              ? "bg-[#0e263f] text-white shadow-md scale-105"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
          }`}
        >
          {isTr ? "Paket Seviyesine Göre Fiyat" : "Cost by Package Tier"}
        </button>
      </div>

      {/* Tab 1: Country & Provider Comparison Table */}
      {activeTab === "country" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200 text-xs uppercase font-extrabold text-[#0e263f]">
                <th className="py-4 px-4">{isTr ? "Ülke & Sağlayıcı" : "Country & Provider"}</th>
                <th className="py-4 px-4">{isTr ? "Ortalama Fiyat" : "Average Cost"}</th>
                <th className="py-4 px-4">{isTr ? "Paket İçeriği" : "Package Inclusions"}</th>
                <th className="py-4 px-4">{isTr ? "Tıbbi Garanti" : "Medical Guarantee"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {countryComparison.map((row, idx) => (
                <tr
                  key={idx}
                  className={
                    row.highlight
                      ? "bg-[#0e263f]/5 font-bold border-l-4 border-[#0e263f]"
                      : idx === 1
                      ? "bg-slate-50/70"
                      : "hover:bg-slate-50"
                  }
                >
                  <td className="py-4 px-4 text-[#0e263f]">
                    <div className="font-heading font-extrabold text-sm sm:text-base">{row.provider}</div>
                    {row.badge && (
                      <span
                        className={`inline-block mt-1 text-[10px] uppercase px-2 py-0.5 rounded font-extrabold ${
                          row.highlight
                            ? "bg-[#0e263f] text-white"
                            : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {row.badge}
                      </span>
                    )}
                  </td>
                  <td
                    className={`py-4 px-4 font-heading font-extrabold text-base sm:text-lg ${
                      row.highlight ? "text-[#0e263f]" : "text-slate-800"
                    }`}
                  >
                    {row.cost}
                  </td>
                  <td className="py-4 px-4 text-xs sm:text-sm text-slate-600 font-medium max-w-xs sm:max-w-md">
                    {row.inclusions}
                  </td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-semibold text-slate-700">
                    {row.guarantee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 2: Cost by Graft Count Table */}
      {activeTab === "grafts" && (
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200 text-xs uppercase font-extrabold text-[#0e263f]">
                <th className="py-4 px-4">{isTr ? "Greft Aralığı & Alan" : "Graft Range & Target Area"}</th>
                <th className="py-4 px-4">{isTr ? "Türkiye Genel Ort." : "General Turkey Avg."}</th>
                <th className="py-4 px-4">{isTr ? "Dr. Mehmet Erdoğan (VIP)" : "Dr. Mehmet Erdoğan (VIP)"}</th>
                <th className="py-4 px-4">{isTr ? "UK / USA Eşdeğeri" : "UK / USA Equivalent"}</th>
                <th className="py-4 px-4">{isTr ? "Klinik Açıklama" : "Clinical Indication"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {graftTiers.map((tier, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-4">
                    <span className="font-heading font-extrabold text-sm sm:text-base text-[#0e263f] block">
                      {tier.grafts}
                    </span>
                    <span className="text-xs text-slate-500 font-medium block mt-0.5">
                      {tier.area}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-bold text-slate-700">
                    {tier.turkeyAvg}
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-heading font-extrabold text-base text-[#0e263f] bg-slate-100 px-2.5 py-1 rounded-lg inline-block">
                      {tier.drErdoganCost}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold block mt-1">
                      {isTr ? "Her şey dâhil paket" : "All-inclusive package"}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-xs sm:text-sm font-bold text-slate-500 line-through">
                    {tier.internationalAvg}
                  </td>
                  <td className="py-4 px-4 text-xs text-slate-600 font-medium max-w-xs">
                    {tier.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Tab 3: Package Tier Comparison Grid */}
      {activeTab === "packages" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {packageTiers.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                pkg.highlight
                  ? "bg-[#0e263f] text-white shadow-xl ring-2 ring-[#0e263f] scale-[1.02]"
                  : "bg-slate-50 border border-slate-200 text-[#0e263f] hover:border-slate-300 hover:shadow-md"
              }`}
            >
              <div>
                <span
                  className={`inline-block text-[10px] uppercase px-2.5 py-0.5 rounded-full font-extrabold mb-3 ${
                    pkg.highlight
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {pkg.badge}
                </span>
                <h4
                  className={`font-heading font-extrabold text-lg mb-1 ${
                    pkg.highlight ? "text-white" : "text-[#0e263f]"
                  }`}
                >
                  {pkg.name}
                </h4>
                <div
                  className={`font-heading font-extrabold text-2xl sm:text-3xl my-3 ${
                    pkg.highlight ? "text-white" : "text-[#0e263f]"
                  }`}
                >
                  {pkg.price}
                </div>
                <p
                  className={`text-xs font-medium mb-5 leading-relaxed ${
                    pkg.highlight ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  {pkg.idealFor}
                </p>

                <ul className="space-y-2.5 text-xs font-medium mb-6">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2">
                      <Check
                        weight="bold"
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          pkg.highlight ? "text-amber-400" : "text-[#0e263f]"
                        }`}
                      />
                      <span className={pkg.highlight ? "text-slate-100" : "text-slate-700"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#consultation"
                className={`w-full py-3 rounded-xl font-extrabold text-xs text-center transition-all cursor-pointer block ${
                  pkg.highlight
                    ? "bg-white text-[#0e263f] hover:bg-slate-100 shadow-md"
                    : "bg-[#0e263f] text-white hover:bg-[#1a3d60]"
                }`}
              >
                {isTr ? "Fiyat Teklifi Al" : "Request Free Quote"}
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Summary Bar */}
      <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-medium">
        <div className="flex items-center gap-2">
          <ShieldCheck weight="bold" className="w-4 h-4 text-[#0e263f]" />
          <span>
            {isTr
              ? "Tüm paketlerimizde gizli maliyet bulunmamaktadır. Fiyatlar ameliyat öncesi teyit edilir."
              : "No hidden fees. All package rates include transfer, accommodation, medications, and 12-month care."}
          </span>
        </div>
        <a
          href="#consultation"
          className="text-[#0e263f] hover:underline font-extrabold inline-flex items-center gap-1 shrink-0"
        >
          <span>{isTr ? "Kişisel Greft & Fiyat Hesaplaması Yapın" : "Calculate Your Graft & Package Cost"}</span>
          <ArrowRight weight="bold" className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
