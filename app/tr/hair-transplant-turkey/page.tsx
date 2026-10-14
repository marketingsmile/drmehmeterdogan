import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TechniquesGrid from "@/components/TechniquesGrid";
import HairTransplantCostsTable from "@/components/HairTransplantCostsTable";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ShieldCheck, 
  Trophy, 
  CheckCircle, 
  AirplaneTilt, 
  Buildings, 
  Sparkle, 
  Handshake, 
  CaretRight 
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Türkiye'de Saç Ekimi İstanbul | Dr. Mehmet Erdoğan ile Her Şey Dâhil VIP Paketler",
  description: "Türkiye ve İstanbul'da dünyaca ünlü saç ekim doktoru Dr. Mehmet Erdoğan ile altın standartta saç ekimi. 5 yıldızlı otel, VIP transfer, Safir FUE ve DHI yöntemleri.",
  keywords: [
    "Türkiye Saç Ekimi", 
    "İstanbul Saç Ekimi", 
    "Dr Mehmet Erdogan Türkiye", 
    "Saç Ekim Doktoru Türkiye", 
    "Her Şey Dahil Saç Ekimi", 
    "Safir FUE Türkiye", 
    "DHI Saç Ekimi", 
    "Smile Hair Clinic Türkiye",
    "Türkiye Saç Ekimi Fiyatları"
  ],
};

export default function TrHairTransplantTurkeyPage() {
  const locale = "tr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://drmehmeterdogan.com/#clinic",
        "name": "Smile Hair Clinic - Dr. Mehmet Erdoğan",
        "image": "https://drmehmeterdogan.com/images/dr-mehmet-erdogan.webp",
        "description": "Dr. Mehmet Erdoğan tarafından kurulan lider İstanbul saç ekim kliniği.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Tatlısu, Eldiven Sk. No:2",
          "addressLocality": "Ümraniye",
          "addressRegion": "İstanbul",
          "postalCode": "34774",
          "addressCountry": "TR"
        },
        "medicalSpecialty": "HairRestoration"
      }
    ]
  };

  const techniqueMatrix = [
    { name: "Safir FUE", incisions: "0.6 - 0.8mm Safir Uçlar", speed: "1.200 - 1.500 Greft/saat", recovery: "7 - 10 Gün", bestFor: "Norwood 2 - 6 İleri Dökülmeler", shaved: "Standart Tıraş" },
    { name: "DHI (Choi Kalemi)", incisions: "Tek Adımda Doğrudan Ekim", speed: "800 - 1.100 Greft/saat", recovery: "5 - 7 Gün", bestFor: "Ön Çizgi Sıklaştırma & DHI", shaved: "Kısmi / Tıraşsız" },
    { name: "Tıraşsız VIP FUE", incisions: "Saç Aralarına Mikro Kesiler", speed: "800 - 1.000 Greft/saat", recovery: "5 Gün (Fark Edilmez)", bestFor: "Yöneticiler ve Göz Önünde Olanlar", shaved: "Sıfır Kazıtma" },
    { name: "Kadınlarda Saç Ekimi", incisions: "Özel DHI Mikro Yerleşim", speed: "600 - 800 Greft/saat", recovery: "7 - 10 Gün", bestFor: "Kadın Tipi Genel Seyrelme", shaved: "Tıraşsız Alıcı Alan" },
  ];

  const travelSteps = [
    { day: "1. Gün", title: "İstanbul'a Varış & 5 Yıldızlı VIP Karşılama", desc: "Özel şoförünüz sizi İstanbul Havalimanı'nda (IST / SAW) VIP Mercedes Vito ile karşılar ve 5 yıldızlı otelinize konforla ulaştırır." },
    { day: "2. Gün", title: "Konsültasyon, Çizim & Cerrahi Operasyon", desc: "Dr. Mehmet Erdoğan ile yüz yüze cerrahi planlama. İğnesiz konfor anestezisi, safir kanal açımı ve köklerin tek tek ekimi." },
    { day: "3. Gün", title: "İlk Tıbbi Yıkama, PRP & Taburculuk", desc: "Kliniğimizde ilk medikal saç yıkaması, PRP tedavisi, medikal bakım setinin teslimi ve havalimanı transferi." },
    { day: "1-12. Ay", title: "Kişiselleştirilmiş 1 Yıllık Dijital Takip", desc: "Özel hasta koordinatörünüz 1, 3, 6, 9 ve 12. aylarda saçınızın gelişimini ve kafa derisi sağlığınızı takip eder." }
  ];

  const patientJourneyVideos = [
    ALL_YOUTUBE_VIDEOS[3], // Patient Transformation: 12-Month Hair Growth Final Result
    ALL_YOUTUBE_VIDEOS[1], // Live Sapphire FUE Hairline Restoration Surgery in Istanbul
    ALL_YOUTUBE_VIDEOS[2], // Direct Hair Implantation (DHI) Technique & Precision Implanters
  ];

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale={locale} />

      {/* Hero Section */}
      <section className="relative bg-navy-gradient text-white py-16 lg:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#415e79]/15 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#415e79]/30 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-extrabold uppercase tracking-wider text-white shadow-sm">
                <AirplaneTilt weight="bold" className="w-4 h-4 text-white" />
                <span>Dünyanın Saç Restorasyonu Başkenti 🇹🇷</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Türkiye'de Saç Ekimi
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl">
                Dr. Mehmet Erdoğan'ın (Smile Hair Clinic Kurucu Ortağı & SAÇREHDER Başkanı) resmi hasta merkezine hoş geldiniz. Bizzat hekim kontrolünde planlanan Safir FUE ve DHI operasyonları, kişiye özel ön saç çizgisi tasarımı ve 5 yıldızlı her şey dâhil medikal konfor ile İstanbul'da hayalinizdeki saçlara güvenle kavuşun.
              </p>

              {/* Surgeon Portrait */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-white/40 bg-slate-800 shadow-md">
                    <img src="/images/dr-mehmet-erdogan.webp" alt="Dr. Mehmet Erdoğan" className="w-full h-full object-cover object-top" />
                  </div>
                  <div>
                    <span className="logo-signature text-2xl text-white block">Dr. Mehmet Erdoğan</span>
                    <span className="text-[11px] uppercase tracking-widest text-slate-300 font-extrabold">
                      KURUCU ORTAK & SAÇREHDER BAŞKANI
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs font-bold text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle weight="fill" className="w-4 h-4 text-white" />
                  <span>%99.4 Greft Yaşama Oranı</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle weight="fill" className="w-4 h-4 text-white" />
                  <span>FUE Europe & SAÇREHDER Başkanı</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle weight="fill" className="w-4 h-4 text-white" />
                  <span>5 Yıldızlı VIP Sağlık Paketi</span>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Fast Consultation Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#0e263f] p-8 rounded-3xl shadow-2xl border border-slate-200">
                <div className="text-center mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-1">
                    DİJİTAL SAÇ ANALİZİ
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#0e263f]">
                    ÜCRETSİZ KONSÜLTASYON ALIN
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    En geç 2 saat içinde kişiye özel greft planlamanızı ve paket fiyatınızı iletelim.
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0e263f] placeholder-slate-400 focus:outline-none focus:border-[#0e263f] font-medium"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="E-Posta Adresiniz"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0e263f] placeholder-slate-400 focus:outline-none focus:border-[#0e263f] font-medium"
                    />
                  </div>

                  <div className="flex gap-2">
                    <div className="w-28 px-3 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#0e263f] flex items-center justify-center">
                      TR (+90)
                    </div>
                    <input
                      type="tel"
                      placeholder="+90 Telefon Numarası"
                      required
                      className="flex-1 px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0e263f] placeholder-slate-400 focus:outline-none focus:border-[#0e263f] font-medium"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-xs text-slate-600">
                    <input type="checkbox" required className="mt-0.5 accent-[#0e263f]" />
                    <span>Gizlilik Politikası ve aydınlatma metnini okudum, kabul ediyorum.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Ücretsiz Talebi Gönder</span>
                    <CaretRight weight="bold" className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Rating Badges */}
                <div className="grid grid-cols-4 gap-2 pt-6 mt-6 border-t border-slate-100 text-center">
                  <div>
                    <span className="text-xs font-extrabold text-[#0e263f] block">4.9 ★</span>
                    <span className="text-[10px] text-slate-500 font-bold">5.000+ Yorum</span>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#0e263f] block">4.9 ★</span>
                    <span className="text-[10px] text-slate-500 font-bold">3.000+ Trustpilot</span>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#0e263f] block">4.9 ★</span>
                    <span className="text-[10px] text-slate-500 font-bold">1.800+ Proven</span>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#0e263f] block">5.0 ★</span>
                    <span className="text-[10px] text-slate-500 font-bold">250+ RealSelf</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. Before & After Results Gallery (Directly after Hero) */}
      <BeforeAfterSlider locale={locale} showVideos={false} />

      {/* 3. Patient Journeys Section (3-Day Travel Steps + Video Stories) */}
      <section id="patient-journeys" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Handshake weight="bold" className="w-4 h-4 text-[#0e263f]" />
              <span>Hasta Deneyimleri & Süreç</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              İstanbul'da 3 Günlük Saç Ekimi Yolculuğunuz
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Havalimanı VIP karşılamasından 12. ay dijital takibinize kadar tüm süreç Dr. Mehmet Erdoğan ve medikal koordinatörlerimizce planlanır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {travelSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading font-extrabold text-2xl text-[#0e263f] block mb-3">
                    {step.day}
                  </span>
                  <h3 className="font-heading font-extrabold text-lg text-[#0e263f] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Patient Journeys Video Grid */}
          <div className="pt-12 border-t border-slate-200">
            <YouTubeVideoGrid
              locale={locale}
              videos={patientJourneyVideos}
              darkTheme={false}
              tag="HASTA VİDEOLARI & CANLI CERRAHİ"
              title="Hasta Deneyimleri & Cerrahi Vaka Videoları"
              subtitle="Dr. Mehmet Erdoğan ile gerçek hasta hikayeleri, canlı cerrahi operasyon anları ve adım adım dönüşüm süreçleri."
            />
          </div>
        </div>
      </section>

      {/* 4. Single Hair Transplant Turkey Costs Section */}
      <section id="cost" className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Trophy weight="bold" className="w-4 h-4 text-[#0e263f]" />
              <span>Şeffaf Fiyatlandırma Rehberi</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              Türkiye Saç Ekimi Fiyatları
            </h2>
            <p className="text-[#415e79] text-base font-medium max-w-2xl mx-auto">
              İstanbul'da Dr. Mehmet Erdoğan VIP paketleri, greft sayılarına göre fiyat aralıkları ve Türkiye, İngiltere, ABD ve Almanya arasındaki şeffaf maliyet karşılaştırması.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#0e263f]/10 text-[#0e263f] flex items-center justify-center font-bold mb-6">
                <Trophy weight="bold" className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#0e263f] mb-3">
                Üst Düzey Cerrahi Tecrübe
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Yüksek vaka hacmi sayesinde Dr. Mehmet Erdoğan gibi deneyimli cerrahlar, saç çıkış açıları ve donör alan korumasında mükemmel sonuçlar sunar.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#415e79]/10 text-[#415e79] flex items-center justify-center font-bold mb-6">
                <AirplaneTilt weight="bold" className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#0e263f] mb-3">
                5 Yıldızlı VIP Sağlık Turizmi
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                VIP şoförlü transferler, 5 yıldızlı otel konaklaması, tüm ilaç ve bakım setleri ile kusursuz bir medikal seyahat deneyimi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0e263f] flex items-center justify-center font-bold mb-6">
                <ShieldCheck weight="bold" className="w-6 h-6 text-[#0e263f]" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#0e263f] mb-3">
                Şeffaf ve Avantajlı Fiyatlar
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Avrupa ve Amerika'ya kıyasla %70'e varan maliyet avantajı ile altın standartta cerrahi kalite ve tam steril ameliyathaneler.
              </p>
            </div>
          </div>

          {/* Interactive Cost Breakdown & Comparison Table */}
          <HairTransplantCostsTable locale={locale} hideTitle={true} />

        </div>
      </section>

      {/* 5. Technique Section (Matrix Table + Advanced Techniques Grid) */}
      <section id="technique" className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkle weight="bold" className="w-4 h-4 text-[#0e263f]" />
              <span>Cerrahi Metotlar</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              Saç Ekimi Teknikleri Karşılaştırma Matrisi
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Her cerrahi vaka; donör yoğunluğu, saç teli kalınlığı ve dökülme evresine göre kişiye özel belirlenir.
            </p>
          </div>

          <div className="bg-[#ededed] rounded-3xl p-6 sm:p-8 border border-[#415e79]/20 shadow-lg overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#415e79]/30 text-xs uppercase font-extrabold text-[#0e263f]">
                  <th className="py-4 px-4">Teknik</th>
                  <th className="py-4 px-4">Kanal Yöntemi</th>
                  <th className="py-4 px-4">Ekim Hızı</th>
                  <th className="py-4 px-4">İyileşme Süresi</th>
                  <th className="py-4 px-4">Tıraş Durumu</th>
                  <th className="py-4 px-4">Uygun Hasta Profili</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#415e79]/15">
                {techniqueMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/50 transition-colors">
                    <td className="py-4 px-4 font-heading font-extrabold text-[#0e263f]">
                      {item.name}
                    </td>
                    <td className="py-4 px-4 text-xs font-semibold text-slate-700">{item.incisions}</td>
                    <td className="py-4 px-4 text-xs font-bold text-[#0e263f]">{item.speed}</td>
                    <td className="py-4 px-4 text-xs font-bold text-[#0e263f]">{item.recovery}</td>
                    <td className="py-4 px-4 text-xs text-slate-700">{item.shaved}</td>
                    <td className="py-4 px-4 text-xs font-semibold text-[#0e263f]">{item.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advanced Hair Transplant Techniques Standalone Section */}
      <TechniquesGrid locale={locale} />

      {/* 6. Consultation Section */}
      <ConsultationSection locale={locale} />

      {/* 7. Footer */}
      <Footer locale={locale} />
    </main>
  );
}
