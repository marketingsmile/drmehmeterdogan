import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import DoctorProfile from "@/components/DoctorProfile";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import AboutMeHeroForm from "@/components/AboutMeHeroForm";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";
import { User, GraduationCap, Buildings, Trophy, Certificate, Globe, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "About Dr. Mehmet Erdoğan | Renowned Hair Transplant Doctor & SAÇREHDER President",
  description: "Learn about Dr. Mehmet Erdoğan, Co-Founder of Smile Hair Clinic, President of SAÇREHDER, and one of Turkey's most renowned hair restoration surgeons.",
  keywords: ["Dr Mehmet Erdogan", "About Dr Mehmet Erdogan", "Smile Hair Clinic Founder", "SAÇREHDER President", "Hair Transplant Doctor Istanbul"],
};

export default function AboutMePage() {
  const locale = "en";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": "https://drmehmeterdogan.com/#physician",
        "name": "Dr. Mehmet Erdoğan",
        "medicalSpecialty": "HairRestoration",
        "jobTitle": "Hair Transplant Surgeon & Co-Founder of Smile Hair Clinic",
        "alumniOf": [
          "Yeditepe University Faculty of Medicine",
          "Anadolu University Healthcare Services Management",
          "Acıbadem Health Group",
          "Medicana Health Group"
        ],
        "memberOf": [
          "Hair Restoration Physicians Association (SAÇREHDER)",
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
    ALL_YOUTUBE_VIDEOS[0], // Consultation & Planning
    ALL_YOUTUBE_VIDEOS[4], // Why Choose Smile Hair Clinic
    ALL_YOUTUBE_VIDEOS[17], // True Philosophy
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
                <span>Official Surgeon Profile</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] leading-tight mb-4">
                Dr. Mehmet Erdoğan <br />
                <span className="text-[#415e79] text-2xl sm:text-3xl lg:text-4xl block mt-1.5 font-bold">
                  Co-Founder of Smile Hair Clinic & SAÇREHDER President
                </span>
              </h1>
              <p className="text-[#415e79] text-base sm:text-lg font-medium leading-relaxed mb-6">
                Co-Founder of Smile Hair Clinic & President of SAÇREHDER. Dedicated to micro-surgical precision, natural hairline architecture, donor area efficiency, and patient safety in Istanbul, Turkey.
              </p>

              {/* 3 Quick Credentials Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-slate-100">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-heading font-extrabold text-[#0e263f] text-lg sm:text-xl">5,000+</div>
                  <div className="text-[11px] font-bold text-[#415e79]">Procedures Performed</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-heading font-extrabold text-[#0e263f] text-lg sm:text-xl">SAÇREHDER</div>
                  <div className="text-[11px] font-bold text-[#415e79]">Founding President</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-heading font-extrabold text-[#0e263f] text-lg sm:text-xl">15+ Years</div>
                  <div className="text-[11px] font-bold text-[#415e79]">Medical Experience</div>
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

      {/* Extended Clinical Background & Career Timeline */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0e263f] mb-4">
              Medical Leadership & Career Milestones
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Discover how Hair Transplant Doctor Dr. Mehmet Erdoğan shaped international hair restoration standards over 15+ years of clinical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0e263f]/10 text-[#0e263f] flex items-center justify-center font-bold mb-6">
                  <GraduationCap weight="bold" className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-[#0e263f] text-xl mb-3">
                  Academic Background
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Graduated from the prestigious Yeditepe University Faculty of Medicine as Medical Doctor (MD), and completed Healthcare Services Management at Anadolu University. Certified in Aesthetic & Cosmetic Applications and Occupational Medicine.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#415e79] font-bold">
                Yeditepe University (M.D.) & Anadolu University
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#415e79]/10 text-[#415e79] flex items-center justify-center font-bold mb-6">
                  <Buildings weight="bold" className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-[#0e263f] text-xl mb-3">
                  Hospital & Executive Leadership
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  Served as Chief Physician of the Emergency Department at Beykoz Paşabahçe State Hospital, physician at Acıbadem Mobile Health Services, and Deputy Chief Physician & Director of International Patients Group at Medicana Health Group.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#415e79] font-bold">
                Acıbadem & Medicana Health Groups
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
                  Co-founded Smile Hair Clinic in 2018, performing 5,000+ hair transplants. Serves as President & Founder of SAÇREHDER and active member of FUE Europe (since 2020) and World FUE Institute, setting ethical clinical standards globally.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-[#415e79] font-bold">
                5,000+ Procedures • SAÇREHDER President
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
            title="Dr. Mehmet Erdoğan on Hair Restoration Mastery"
            subtitle="Watch Dr. Mehmet Erdoğan discuss surgical planning, hairline aesthetics, and patient safety."
          />
        </div>
      </section>

      {/* Consultation Section */}
      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
