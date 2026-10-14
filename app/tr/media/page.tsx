import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import MediaFeaturesSection from "@/components/MediaFeaturesSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";
import { 
  Article
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Medya & Basın Arşivi | Dr. Mehmet Erdoğan",
  description: "Dr. Mehmet Erdoğan ve Smile Hair Clinic'in uluslararası belgeselleri, BBC çekimleri, küresel basın haberleri ve canlı cerrahi anlatımları.",
  keywords: ["Dr Mehmet Erdogan Medya", "BBC Türkiye Saç Ekimi", "Smile Hair Clinic Basın", "Saç Ekimi Belgeseli", "Safir FUE Video"],
};

export default function TrMediaPage() {
  const locale = "tr";

  const mediaLogos = [
    { name: "ABC News", file: "/trust bar logos/abc-news-logo.webp" },
    { name: "ABC Australia", file: "/trust bar logos/abc-aus-logo.webp" },
    { name: "Los Angeles Times", file: "/trust bar logos/Los_Angeles_Times_Logo.webp" },
    { name: "HuffPost", file: "/trust bar logos/HUFFPOST-LOGO.webp" },
    { name: "Libération", file: "/trust bar logos/LIBERATION-LOGO.webp" },
    { name: "Monocle", file: "/trust bar logos/MONOCLE-LOGO.webp" },
  ];

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header with 2-Column Layout & Trust Bar Press Logos */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Title & Intro */}
            <div className="lg:col-span-6">
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e263f] leading-tight mb-4">
                Belgeseller & <br />
                <span className="text-[#415e79]">Küresel Basın Arşivi</span>
              </h1>
              <p className="text-[#415e79] text-base sm:text-lg font-medium leading-relaxed max-w-xl">
                Dr. Mehmet Erdoğan ve Smile Hair Clinic'in uluslararası belgesellerini, küresel basındaki yerini, ameliyathane kayıtlarını ve canlı hasta deneyimlerini keşfedin.
              </p>
            </div>

            {/* Right Column: Trust Bar Logos Showcase */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <Article weight="bold" className="w-5 h-5 text-[#0e263f]" />
                    <span className="font-heading font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#0e263f]">
                      Uluslararası Basında Biz
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#415e79] bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    9+ Küresel Yayın
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3.5 sm:gap-4 items-center">
                  {mediaLogos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="h-14 sm:h-16 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#0e263f]/30 transition-all p-3 flex items-center justify-center group"
                      title={logo.name}
                    >
                      <img
                        src={logo.file}
                        alt={logo.name}
                        className="max-h-7 sm:max-h-8 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Official Media & Documentary Spotlight */}
      <MediaFeaturesSection locale={locale} />

      {/* Full 25-Video Interactive YouTube Media Gallery */}
      <section className="py-20 bg-[#ededed] border-t border-[#415e79]/20">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              Kapsamlı Video Kütüphanesi
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Ameliyathane operasyonları, teknik detaylar, hasta gelişim serüvenleri ve hekim anlatımlarını inceleyin.
            </p>
          </div>

          <YouTubeVideoGrid
            locale={locale}
            videos={ALL_YOUTUBE_VIDEOS}
            showFilters={true}
          />
        </div>
      </section>

      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
