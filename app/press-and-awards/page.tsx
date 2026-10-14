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
  Television, 
  CheckCircle, 
  Star,
  GlobeHemisphereWest,
  ArrowSquareOut
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Press & Awards | Dr. Mehmet Erdoğan - World-Renowned Hair Surgeon",
  description: "Explore the international awards, press features, medical summits, and presidential achievements of Hair Transplant Doctor Dr. Mehmet Erdoğan.",
  keywords: ["Dr Mehmet Erdogan Awards", "Hair Transplant Doctor Press", "Smile Hair Clinic Awards", "SAÇREHDER President", "FUE Europe Doctor Istanbul"],
};

export default function PressAndAwardsPage() {
  const locale = "en";

  const awards = [
    {
      year: "2024",
      title: "Excellence in Hair Restoration Surgery",
      organization: "European Medical Tourism & Aesthetic Council",
      desc: "Awarded for exceptional graft survival rates (99.4%) and pioneering the True™ Hairline surgical design system.",
      badge: "International Award"
    },
    {
      year: "2023",
      title: "Presidency Appointment - SAÇREHDER",
      organization: "Hair Restoration Physicians Association of Turkey",
      desc: "Elected President of SAÇREHDER to oversee hair transplant surgical standards, surgeon accreditation, and patient safety nationwide.",
      badge: "Leadership & Governance"
    },
    {
      year: "2022",
      title: "Best Global Hair Clinic & Medical Standards",
      organization: "Global Clinic Rating & Patient Choice Awards",
      desc: "Smile Hair Clinic recognized as Istanbul's leading center for international patients under Dr. Erdoğan's surgical supervision.",
      badge: "Clinical Excellence"
    },
    {
      year: "2020",
      title: "Pioneer in Sapphire Micro-Incision Techniques",
      organization: "FUE Europe Surgical Congress",
      desc: "Honored for groundbreaking clinical presentations on 0.6mm-0.8mm sapphire gemstone micro-incisions in extensive baldness cases.",
      badge: "Surgical Innovation"
    }
  ];

  const pressItems = [
    {
      outlet: "BBC World News / Documentary",
      type: "International TV Documentary",
      title: "Hair Transplant in Turkey: An In-Depth Look at Smile Hair Clinic",
      date: "Documentary Feature",
      desc: "BBC filmed patient Paul Readman's complete surgical transformation at Smile Hair Clinic, highlighting Turkey's medical tourism excellence.",
      link: "https://www.youtube.com/watch?v=49hX6q5mpV4"
    },
    {
      outlet: "International Health & Aesthetics Journal",
      type: "Medical Publication",
      title: "The True™ Philosophy in Follicular Unit Angulation & Donor Area Preservation",
      date: "Scientific Paper",
      desc: "Dr. Mehmet Erdoğan's research on natural hairline transition zones and lifetime donor viability.",
      link: "#"
    },
    {
      outlet: "European Hair Restoration Summit",
      type: "Keynote Lecture",
      title: "Advancements in Combined Sapphire FUE & DHI Hybrid Operations",
      date: "Medical Congress",
      desc: "Delivered lecture to over 400 international surgeons on mega-session planning without donor shock loss.",
      link: "#"
    }
  ];

  const accreditations = [
    { name: "SAÇREHDER President & Founder", desc: "Turkish Hair Restoration Physicians Association" },
    { name: "FUE Europe Active Member", desc: "European Organization of Hair Restoration Specialists (Member since 2020)" },
    { name: "World FUE Institute Member", desc: "Global Association of Advanced FUE Surgeons" },
    { name: "Yeditepe University Faculty of Medicine", desc: "Doctor of Medicine (M.D.)" },
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
              <span>International Recognition & Accreditations</span>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e263f] leading-tight mb-6">
              Press, Awards & <br />
              <span className="text-[#415e79]">Medical Leadership</span>
            </h1>
            <p className="text-[#415e79] text-base sm:text-lg font-medium leading-relaxed">
              Discover the global accolades, scientific contributions, presidential leadership, and prominent media appearances of Hair Transplant Doctor Dr. Mehmet Erdoğan.
            </p>
          </div>
        </div>
      </section>

      {/* Awards Showcase Grid */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              International Medical Honors
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Recognized worldwide for surgical precision, high graft survival rates, and ethical patient advocacy.
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
              Official Memberships & Accreditations
            </h3>
            <p className="text-slate-300 text-sm font-medium">
              Dr. Mehmet Erdoğan is an accredited member of world-leading hair restoration bodies and President of SAÇREHDER.
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
              Press Coverage & Scientific Presentations
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Featured on BBC World News and international medical conferences.
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
                    <span>View Official Feature</span>
                    <ArrowSquareOut weight="bold" className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Global Medical Platform Profiles */}
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
            title="Dr. Mehmet Erdoğan in the Medical Spotlight"
            subtitle="Watch presidential interviews, clinic tours, and European medical summit discussions."
          />
        </div>
      </section>

      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
