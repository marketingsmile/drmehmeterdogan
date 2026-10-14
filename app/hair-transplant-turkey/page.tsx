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
  MapPin, 
  Buildings, 
  Star, 
  Calculator, 
  ArrowRight,
  Clock,
  Sparkle,
  FirstAid,
  Handshake,
  Question,
  CaretRight,
  User
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Hair Transplant in Turkey (Istanbul) | All-Inclusive Packages by Dr. Mehmet Erdoğan",
  description: "Experience gold-standard hair restoration in Turkey with Hair Transplant Doctor Dr. Mehmet Erdoğan at Smile Hair Clinic. All-inclusive VIP packages, 5-star hotel, transfers, and lifetime guarantee.",
  keywords: [
    "Hair Transplant Turkey", 
    "Hair Transplant Istanbul", 
    "Dr Mehmet Erdogan Turkey", 
    "Hair Transplant Doctor Turkey", 
    "All Inclusive Hair Transplant Turkey", 
    "Sapphire FUE Turkey", 
    "DHI Turkey", 
    "Smile Hair Clinic Turkey",
    "Cost of Hair Transplant Turkey"
  ],
};

export default function HairTransplantTurkeyPage() {
  const locale = "en";
  const basePrefix = "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://drmehmeterdogan.com/#clinic",
        "name": "Smile Hair Clinic - Dr. Mehmet Erdoğan",
        "image": "https://drmehmeterdogan.com/images/dr-mehmet-erdogan.webp",
        "description": "Leading Hair Transplant Clinic in Istanbul, Turkey co-founded by Hair Transplant Doctor Dr. Mehmet Erdoğan.",
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
    { name: "Sapphire FUE", incisions: "0.6 - 0.8mm Sapphire Blades", speed: "1,200 - 1,500 Grafts/hr", recovery: "7 - 10 Days", bestFor: "Norwood 2 - 6 Extensive Baldness", shaved: "Standard Shave" },
    { name: "DHI (Choi Pen)", incisions: "Simultaneous 1-step Implantation", speed: "800 - 1,100 Grafts/hr", recovery: "5 - 7 Days", bestFor: "Hairline Lowering & Density Boost", shaved: "Partial / No Shave" },
    { name: "Unshaven VIP FUE", incisions: "Micro-Incisions between hair", speed: "800 - 1,000 Grafts/hr", recovery: "5 Days (Invisible)", bestFor: "Executives & Public Figures", shaved: "Zero Shaving" },
    { name: "Female Hair Restoration", incisions: "Targeted Micro-DHI Placement", speed: "600 - 800 Grafts/hr", recovery: "7 - 10 Days", bestFor: "Diffuse Female Thinning", shaved: "Unshaven Recipient" },
  ];

  const travelSteps = [
    { day: "Day 1", title: "Arrival & 5-Star VIP Check-In", desc: "Private chauffeur meets you at Istanbul Airport (IST or SAW) in a luxury VIP Mercedes Vito and transfers you directly to your 5-star hotel." },
    { day: "Day 2", title: "Consultation, Hairline Design & Surgery", desc: "In-person planning with Dr. Mehmet Erdoğan. Needle-free painless anesthesia, sapphire channel creation, and micro-graft placement." },
    { day: "Day 3", title: "Post-Op Medical Wash & Discharge", desc: "Clinic visit for first medical hair wash, PRP session, aftercare kit instructions, and airport transfer back home." },
    { day: "Months 1-12", title: "Personalized Digital Growth Tracking", desc: "Dedicated medical coordinator monitors your hair growth and scalp healing at months 1, 3, 6, 9, and 12." }
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
                <span>Global Capital of Hair Restoration 🇹🇷</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Hair Transplant in Turkey
              </h1>

              <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed max-w-2xl">
                Welcome to the official practice of Dr. Mehmet Erdoğan (Co-Founder of Smile Hair Clinic & President of SAÇREHDER). Experience surgeon-led surgical planning, precision Sapphire FUE and DHI restorations, and personalized 5-star all-inclusive medical hospitality in Istanbul.
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
                      CO-FOUNDER & SAÇREHDER PRESIDENT
                    </span>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs font-bold text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle weight="fill" className="w-4 h-4 text-white" />
                  <span>99.4% Graft Survival</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle weight="fill" className="w-4 h-4 text-white" />
                  <span>FUE Europe & SAÇREHDER President</span>
                </div>
                <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                  <CheckCircle weight="fill" className="w-4 h-4 text-white" />
                  <span>5-Star Luxury VIP Package</span>
                </div>
              </div>
            </div>

            {/* Right Hero Column: Fast Consultation Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-[#0e263f] p-8 rounded-3xl shadow-2xl border border-slate-200">
                <div className="text-center mb-6">
                  <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-1">
                    ONLINE ASSESSMENT
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#0e263f]">
                    GET FREE CONSULTATION
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Receive your customized graft calculation & package quote within 2 hours.
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0e263f] placeholder-slate-400 focus:outline-none focus:border-[#0e263f] font-medium"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="E-mail"
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
                      placeholder="+90 Phone Number"
                      required
                      className="flex-1 px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0e263f] placeholder-slate-400 focus:outline-none focus:border-[#0e263f] font-medium"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-1 text-xs text-slate-600">
                    <input type="checkbox" required className="mt-0.5 accent-[#0e263f]" />
                    <span>I have read and accept the Privacy Policy and consent to medical evaluation.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Free Request</span>
                    <CaretRight weight="bold" className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Rating Badges */}
                <div className="grid grid-cols-4 gap-2 pt-6 mt-6 border-t border-slate-100 text-center">
                  <div>
                    <span className="text-xs font-extrabold text-[#0e263f] block">4.9 ★</span>
                    <span className="text-[10px] text-slate-500 font-bold">5,000+ Reviews</span>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#0e263f] block">4.9 ★</span>
                    <span className="text-[10px] text-slate-500 font-bold">3,000+ Trustpilot</span>
                  </div>
                  <div>
                    <span className="text-xs font-extrabold text-[#0e263f] block">4.9 ★</span>
                    <span className="text-[10px] text-slate-500 font-bold">1,800+ Proven</span>
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
              <span>Patient Journeys</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              Your Hair Transplant Journey in Istanbul
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              From private airport chauffeur reception to your 12-month digital growth tracking, experience effortless medical hospitality.
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

          {/* Patient Journeys Video Stories */}
          <div className="pt-12 border-t border-slate-200">
            <YouTubeVideoGrid
              locale={locale}
              videos={patientJourneyVideos}
              darkTheme={false}
              tag="PATIENT STORIES & LIVE SURGERY"
              title="Patient Journeys & Surgical Case Videos"
              subtitle="Real patient stories, live surgical footage, and step-by-step transformation journeys with Dr. Mehmet Erdoğan."
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
              <span>Transparent Price Guide</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              Hair Transplant Turkey Costs
            </h2>
            <p className="text-[#415e79] text-base font-medium max-w-2xl mx-auto">
              All-inclusive VIP packages, graft breakdown, and international cost comparison between Dr. Mehmet Erdoğan in Istanbul, general Turkey market averages, and clinics in the UK, USA, and Western Europe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#0e263f]/10 text-[#0e263f] flex items-center justify-center font-bold mb-6">
                <Trophy weight="bold" className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#0e263f] mb-3">
                Unmatched Surgical Mastery
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Due to high procedure volume, leading Turkish hair surgeons like Dr. Mehmet Erdoğan perform hundreds of surgeries annually, perfecting hairline micro-angulation and donor preservation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-[#415e79]/10 text-[#415e79] flex items-center justify-center font-bold mb-6">
                <AirplaneTilt weight="bold" className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#0e263f] mb-3">
                5-Star All-Inclusive Hospitality
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Seamless medical travel experience. Private VIP chauffeur transfers, luxury 5-star hotel accommodation in Istanbul, all medications, and dedicated patient coordinators included.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#0e263f] flex items-center justify-center font-bold mb-6">
                <ShieldCheck weight="bold" className="w-6 h-6 text-[#0e263f]" />
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#0e263f] mb-3">
                Transparent Cost Advantage
              </h3>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Receive top-tier sapphire or DHI surgical execution at up to 70% lower prices than in the UK, USA, or Germany, without compromising on sterility or hospital standards.
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
              <span>Surgical Methodologies</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
              Hair Restoration Techniques Matrix
            </h2>
            <p className="text-[#415e79] text-base font-medium">
              Every surgical case is tailored to patient donor density, hairline angle, and scalp characteristics.
            </p>
          </div>

          <div className="bg-[#ededed] rounded-3xl p-6 sm:p-8 border border-[#415e79]/20 shadow-lg overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#415e79]/30 text-xs uppercase font-extrabold text-[#0e263f]">
                  <th className="py-4 px-4">Technique</th>
                  <th className="py-4 px-4">Incision Method</th>
                  <th className="py-4 px-4">Extraction Speed</th>
                  <th className="py-4 px-4">Recovery Time</th>
                  <th className="py-4 px-4">Shaving Required</th>
                  <th className="py-4 px-4">Best Candidate</th>
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

      {/* Advanced Hair Transplant Techniques Grid */}
      <TechniquesGrid locale={locale} />

      {/* 6. Consultation Section */}
      <ConsultationSection locale={locale} />

      {/* 7. Footer */}
      <Footer locale={locale} />
    </main>
  );
}
