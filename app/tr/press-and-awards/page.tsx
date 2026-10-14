import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import MedicalPlatformProfiles from "@/components/MedicalPlatformProfiles";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";
import { 
  Trophy, 
  Medal, 
  Certificate, 
  Article, 
  CheckCircle, 
  ArrowSquareOut
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Basın & Ödüller | Dr. Mehmet Erdoğan - Dünyaca Ünlü Saç Ekim Doktoru",
  description: "Dr. Mehmet Erdoğan'ın uluslararası ödülleri, basın yayınları, bilimsel tıp zirveleri ve SAÇREHDER başkanlığı başarılarını inceleyin.",
  keywords: ["Dr Mehmet Erdogan Ödülleri", "Saç Ekim Doktoru Basın", "Smile Hair Clinic Ödülleri", "SAÇREHDER Başkanı", "FUE Europe Doktoru İstanbul"],
};

export default function TrPressAndAwardsPage() {
  const locale = "tr";

  const awards = [
    {
      year: "2024",
      title: "Saç Restorasyonunda Üstün Başarı Ödülü",
      organization: "Avrupa Sağlık Turizmi ve Estetik Konseyi",
      desc: "%99.4 greft yaşama oranı ve öncü True™ Saç Çizgisi tasarım felsefesi nedeniyle layık görülmüştür.",
      badge: "Uluslararası Ödül"
    },
    {
      year: "2023",
      title: "SAÇREHDER Yönetim Kurulu Başkanlığı",
      organization: "Saç Ekim Hekimleri Derneği (SAÇREHDER)",
      desc: "Türkiye çapında saç ekimi cerrahi standartları, hekim akreditasyonu ve hasta güvenliğini denetlemek üzere başkan seçilmiştir.",
      badge: "Liderlik & Yönetişim"
    },
    {
      year: "2022",
      title: "En İyi Global Saç Ekim Kliniği",
      organization: "Global Clinic Rating & Patient Choice Awards",
      desc: "Smile Hair Clinic, Dr. Erdoğan'ın cerrahi denetiminde uluslararası hastalar için İstanbul'un lider merkezi seçilmiştir.",
      badge: "Klinik Mükemmeliyet"
    },
    {
      year: "2020",
      title: "Safir Mikro Kanal İnovasyon Başarısı",
      organization: "FUE Europe Cerrahi Kongresi",
      desc: "İleri derece saç dökülmelerinde 0.6mm-0.8mm safir elmas uçlarla kanal açma teknikleri üzerine çığır açan sunumlarıyla ödüllendirilmiştir.",
      badge: "Cerrahi İnovasyon"
    }
  ];

  const pressItems = [
    {
      outlet: "BBC Belgeseli",
      type: "Uluslararası TV Belgeseli",
      title: "Türkiye'de Saç Ekimi - Smile Hair Clinic İncelemesi",
      date: "Özel Belgesel Yayını",
      desc: "BBC, İngiltere'den gelen hasta Paul Readman'ın tüm saç ekim operasyonunu ve dönüşümünü Smile Hair Clinic'te tarafsız olarak kayda aldı.",
      link: "https://www.youtube.com/watch?v=49hX6q5mpV4"
    },
    {
      outlet: "Uluslararası Estetik & Sağlık Dergisi",
      type: "Bilimsel Yayın",
      title: "Foliküler Açı Yerleşimi ve Donör Alan Korumasında True™ Felsefesi",
      date: "Bilimsel Makale",
      desc: "Dr. Mehmet Erdoğan'ın doğal ön saç çizgisi geçiş bölgeleri ve ömür boyu donör bölge sağlığı üzerine akademik çalışması.",
      link: "#"
    },
    {
      outlet: "Avrupa Saç Restorasyonu Zirvesi",
      type: "Açılış Konuşması & Masterclass",
      title: "Kombine Safir FUE ve DHI Hibrit Operasyonlarında Yeni Yaklaşımlar",
      date: "Tıp Kongresi",
      desc: "400'den fazla uluslararası hekime donör şok dökülmesini önleyerek mega seans planlama eğitimi verildi.",
      link: "#"
    }
  ];

  const accreditations = [
    { name: "SAÇREHDER Kurucusu & Başkanı", desc: "Saç Ekim Hekimleri Derneği" },
    { name: "FUE Europe Aktif Üyesi", desc: "Avrupa Saç Restorasyon Uzmanları Birliği (2020'den beri)" },
    { name: "World FUE Institute Üyesi", desc: "İleri FUE Cerrahları Dünya Enstitüsü" },
    { name: "Yeditepe Üniversitesi Tıp Fakültesi", desc: "Tıp Doktoru (M.D.)" },
  ];

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Trophy weight="bold" className="w-4 h-4 text-[#0e263f]" />
              <span>Uluslararası Tanınırlık & Sertifikalar</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e263f] leading-tight mb-6">
              Basın, Ödüller & <br />
              <span className="text-[#415e79]">Tıbbi Liderlik</span>
            </h1>
            <p className="text-[#415e79] text-base sm:text-lg font-medium leading-relaxed">
              Dr. Mehmet Erdoğan'ın uluslararası tıp ödülleri, SAÇREHDER Yönetim Kurulu Başkanlığı, BBC belgesel çekimleri ve küresel bilimsel yayınları.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Showcase Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              Uluslararası Tıp Ödülleri
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Cerrahi başarı, hasta güvenliği ve saç restorasyonundaki bilimsel yenilikler için verilen prestijli ödüller.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#0e263f]/10 text-[#0e263f] text-xs font-bold uppercase tracking-wider">
                      {award.badge}
                    </span>
                    <span className="text-sm font-extrabold text-[#415e79]">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-2xl text-[#0e263f] mb-2">
                    {award.title}
                  </h3>

                  <p className="text-xs font-bold text-[#415e79] uppercase tracking-wider mb-4">
                    {award.organization}
                  </p>

                  <p className="text-slate-700 text-sm font-medium leading-relaxed">
                    {award.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Banner */}
      <section className="py-16 bg-[#0e263f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold mb-3">
              Akreditasyonlar & Üyelikler
            </h3>
            <p className="text-slate-300 text-sm font-medium">
              Dr. Mehmet Erdoğan, uluslararası saç restorasyon kuruluşlarının aktif üyesi ve SAÇREHDER başkanıdır.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {accreditations.map((acc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                    <Certificate weight="bold" className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-white mb-2">
                    {acc.name}
                  </h4>
                  <p className="text-xs text-slate-300 font-medium">
                    {acc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Features & Scientific Publications */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              Basın ve Bilimsel Sunumlar
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Global medya incelemeleri, tıp dergisi yayınları ve uluslararası hekim kongreleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold text-[#415e79] mb-4">
                    <span>{item.type}</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-heading font-extrabold text-lg text-[#0e263f] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs font-bold text-[#415e79] uppercase tracking-wider mb-3">
                    {item.outlet}
                  </p>

                  <p className="text-slate-700 text-sm font-medium leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {item.link !== "#" && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0e263f] hover:underline pt-4 border-t border-slate-100"
                  >
                    <span>Resmi Yayını İnceleyin</span>
                    <ArrowSquareOut weight="bold" className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doğrulanmış Uluslararası Sağlık Platformu Profilleri */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <MedicalPlatformProfiles locale={locale} />
        </div>
      </section>

      {/* 3-Column Video Embed Subsection at the end of section */}
      <section className="py-20 bg-white border-t border-[#415e79]/20">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <YouTubeVideoGrid
            locale={locale}
            videos={[ALL_YOUTUBE_VIDEOS[24], ALL_YOUTUBE_VIDEOS[15], ALL_YOUTUBE_VIDEOS[23]]}
            title="Dr. Mehmet Erdoğan Medya ve TV Çekimleri"
            subtitle="Başkanlık röportajları, ameliyathane standartları ve uluslararası tıp zirvesi konuşmaları."
          />
        </div>
      </section>

      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
