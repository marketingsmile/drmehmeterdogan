import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DoctorProfile from "@/components/DoctorProfile";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import AboutMeHeroForm from "@/components/AboutMeHeroForm";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";
import { User, GraduationCap, Buildings, Trophy } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Hakkımda | Dr. Mehmet Erdoğan - Dünyaca Ünlü Saç Ekim Doktoru & SAÇREHDER Başkanı",
  description: "Smile Hair Clinic Kurucu Ortağı, SAÇREHDER Başkanı ve Türkiye'nin önde gelen saç ekim doktoru Dr. Mehmet Erdoğan'ın biyografisi ve cerrahi uzmanlığı.",
  keywords: ["Dr Mehmet Erdogan", "Dr Mehmet Erdogan Kimdir", "Smile Hair Clinic Kurucusu", "SAÇREHDER Başkanı", "Saç Ekim Doktoru İstanbul"],
};

export default function TrAboutMePage() {
  const locale = "tr";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://drmehmeterdogan.com/#physician",
        "name": "Dr. Mehmet Erdoğan",
        "medicalSpecialty": "HairRestoration",
        "jobTitle": "Saç Ekim Hekimi & Smile Hair Clinic Kurucu Ortağı",
        "alumniOf": [
          "Yeditepe Üniversitesi Tıp Fakültesi",
          "Anadolu Üniversitesi Sağlık Kurumları İşletmeciliği",
          "Acıbadem Sağlık Grubu",
          "Medicana Sağlık Grubu"
        ],
        "memberOf": [
          "Saç Ekim Hekimleri Derneği (SAÇREHDER)",
          "FUE Europe",
          "World FUE Institute"
        ],
        "worksFor": {
          "@type": "MedicalClinic",
          "name": "Smile Hair Clinic"
        }
      }
    ]
  };

  const aboutVideos = [
    ALL_YOUTUBE_VIDEOS[0], // Konsültasyon & Planlama
    ALL_YOUTUBE_VIDEOS[4], // Neden Smile Hair Clinic
    ALL_YOUTUBE_VIDEOS[17], // True Felsefesi
  ];

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar locale={locale} />

      {/* Hero Header Banner with Form */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#415e79]/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Heading, Credentials & Value Prop */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
                <User weight="bold" className="w-4 h-4 text-[#0e263f]" />
                <span>Resmi Hekim Profili</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] leading-tight mb-4">
                Dr. Mehmet Erdoğan <br />
                <span className="text-[#415e79] text-2xl sm:text-3xl lg:text-4xl block mt-1.5 font-bold">
                  Smile Hair Clinic Kurucu Ortağı & SAÇREHDER Başkanı
                </span>
              </h1>
              <p className="text-[#415e79] text-base sm:text-lg font-medium leading-relaxed mb-6">
                Smile Hair Clinic Kurucu Ortağı ve SAÇREHDER Başkanı. İstanbul'da mikro-cerrahi hassasiyeti, donör bölge verimliliği, doğal saç çizgisi tasarımı ve hasta güvenliğine adanmış uluslararası bir kariyer.
              </p>

              {/* 3 Quick Credentials Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-100">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-heading font-extrabold text-[#0e263f] text-lg sm:text-xl">5.000+</div>
                  <div className="text-[11px] font-bold text-[#415e79]">Başarılı Operasyon</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-heading font-extrabold text-[#0e263f] text-lg sm:text-xl">SAÇREHDER</div>
                  <div className="text-[11px] font-bold text-[#415e79]">Kurucu Başkanı</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-heading font-extrabold text-[#0e263f] text-lg sm:text-xl">15+ Yıl</div>
                  <div className="text-[11px] font-bold text-[#415e79]">Mesleki Deneyim</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Consultation Form */}
            <div className="lg:col-span-5">
              <AboutMeHeroForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* Main Doctor Profile Section */}
      <DoctorProfile locale={locale} />

      {/* Extended Bio & Career Timeline */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0e263f] mb-4">
              Tıbbi Liderlik & Kariyer Basamakları
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Saç Ekim Doktoru Dr. Mehmet Erdoğan'ın 15 yılı aşkın mesleki tecrübesiyle uluslararası saç restorasyon standartlarını nasıl şekillendirdiğini keşfedin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0e263f]/10 text-[#0e263f] flex items-center justify-center font-bold mb-6">
                  <GraduationCap weight="bold" className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-[#0e263f] text-xl mb-3">
                  Akademik Tıp Eğitimi
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Yeditepe Üniversitesi Tıp Fakültesi'nden mezun oldu. Anadolu Üniversitesi Sağlık Kurumları İşletmeciliği programını tamamladı. Sağlık Bakanlığı Onaylı Estetik ve Kozmetik Uygulamalar ile İşyeri Hekimliği sertifikalarına sahiptir.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#415e79] font-bold">
                Yeditepe Üniversitesi & Anadolu Üniversitesi
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#415e79]/10 text-[#415e79] flex items-center justify-center font-bold mb-6">
                  <Buildings weight="bold" className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-[#0e263f] text-xl mb-3">
                  Klinik ve Yöneticilik Deneyimi
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Beykoz Paşabahçe Devlet Hastanesi Acil Servis Sorumlu Hekimliği, Acıbadem Mobil Sağlık hekimliği ve Medicana Sağlık Grubu'nda Başhekim Yardımcılığı ile Uluslararası Hasta Merkezi Direktörlüğü görevlerinde bulundu.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#415e79] font-bold">
                Acıbadem & Medicana Sağlık Grupları
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0e263f] flex items-center justify-center font-bold mb-6">
                  <Trophy weight="bold" className="w-6 h-6 text-[#0e263f]" />
                </div>
                <h3 className="font-heading font-extrabold text-[#0e263f] text-xl mb-3">
                  Smile Hair Clinic & SAÇREHDER
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  2018 yılında kurucu ortağı olduğu Smile Hair Clinic'te 5.000'den fazla başarılı operasyona imza attı. SAÇREHDER Kurucusu & Başkanı, FUE Europe (2020'den beri) ve World FUE Institute üyesi olarak etik standartlara öncülük etmektedir.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#415e79] font-bold">
                5.000+ Operasyon • SAÇREHDER Başkanı
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Column Video Embed Subsection at the end of the section */}
      <section className="py-20 bg-white border-t border-[#415e79]/20">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <YouTubeVideoGrid
            locale={locale}
            videos={aboutVideos}
            title="Dr. Mehmet Erdoğan ile Cerrahi Yaklaşımlar"
            subtitle="Dr. Mehmet Erdoğan'ın saç çizgisi planlaması, cerrahi teknikler ve hasta güvenliği üzerine anlatımları."
          />
        </div>
      </section>



      {/* Consultation Section */}
      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
