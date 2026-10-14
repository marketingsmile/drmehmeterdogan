import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TechniquesGrid from "@/components/TechniquesGrid";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Trophy, 
  Sparkle, 
  Question, 
  Calculator 
} from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Hair Transplant Guide & Procedure Hub | Dr. Mehmet Erdoğan Hair Transplant Doctor",
  description: "Comprehensive Hair Transplant Hub page curated by expert Hair Transplant Doctor Dr. Mehmet Erdoğan. Explore Sapphire FUE, DHI, candidate evaluation, procedure steps, and recovery timeline.",
  keywords: ["Hair Transplant Doctor", "Hair Transplant Turkey", "Sapphire FUE Hair Transplant", "DHI Hair Transplant", "Hair Loss Solutions", "Dr Mehmet Erdogan Hub"],
};

export default function HairTransplantHubPage() {
  const locale = "en";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-2">
              Comprehensive Surgical Guide
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0e263f] leading-tight mb-4">
              The Complete Guide to Hair Restoration <br />
              <span className="amber-text-gradient">with Dr. Mehmet Erdoğan</span>
            </h1>
            <p className="text-slate-700 text-lg font-medium leading-relaxed">
              Everything you need to know about hair loss diagnosis, graft planning, advanced surgical methodologies, and permanent hairline restoration in Istanbul.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-12 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/techniques"
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#0e263f] shadow-sm hover:shadow-md transition-all group"
            >
              <Sparkle weight="bold" className="w-8 h-8 text-[#0e263f] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-extrabold text-[#0e263f] text-lg mb-1">
                Advanced Techniques
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3">
                Explore Sapphire FUE & DHI Choi Pen micro-surgeries.
              </p>
              <span className="text-xs font-bold text-[#415e79] flex items-center gap-1 group-hover:gap-2 transition-all">
                Learn Techniques <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
              </span>
            </Link>

            <Link
              href="/graft-calculator"
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#0e263f] shadow-sm hover:shadow-md transition-all group"
            >
              <Calculator weight="bold" className="w-8 h-8 text-[#0e263f] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-extrabold text-[#0e263f] text-lg mb-1">
                Graft Estimator
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3">
                Calculate your required graft count based on Norwood scale.
              </p>
              <span className="text-xs font-bold text-[#415e79] flex items-center gap-1 group-hover:gap-2 transition-all">
                Calculate Grafts <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
              </span>
            </Link>

            <Link
              href="/before-after"
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#0e263f] shadow-sm hover:shadow-md transition-all group"
            >
              <Trophy weight="bold" className="w-8 h-8 text-[#0e263f] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-extrabold text-[#0e263f] text-lg mb-1">
                Before & After Results
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3">
                Review verified 12-month patient transformation cases.
              </p>
              <span className="text-xs font-bold text-[#415e79] flex items-center gap-1 group-hover:gap-2 transition-all">
                View Gallery <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
              </span>
            </Link>

            <Link
              href="/cost"
              className="p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#0e263f] shadow-sm hover:shadow-md transition-all group"
            >
              <ShieldCheck weight="bold" className="w-8 h-8 text-[#0e263f] mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading font-extrabold text-[#0e263f] text-lg mb-1">
                Cost & Pricing
              </h3>
              <p className="text-xs text-slate-600 font-medium mb-3">
                Compare VIP all-inclusive packages with zero hidden fees.
              </p>
              <span className="text-xs font-bold text-[#415e79] flex items-center gap-1 group-hover:gap-2 transition-all">
                View Packages <ArrowRight weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Educational Article Section */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div>
            <h2 className="font-heading text-3xl font-extrabold text-[#0e263f] mb-4">
              Understanding Hair Restoration with Dr. Mehmet Erdoğan
            </h2>
            <p className="text-slate-700 text-base leading-relaxed font-medium mb-4">
              Hair transplantation is a micro-surgical technique that transfers DHT-resistant hair follicles from donor zones into thinning or balding areas. As an expert Hair Transplant Doctor, Dr. Mehmet Erdoğan ensures every graft is implanted with exact hairline angle, direction, and density.
            </p>
            <p className="text-slate-700 text-base leading-relaxed font-medium">
              Unlike temporary cosmetic solutions or daily topicals, a professional hair transplant performed by a qualified Hair Transplant Doctor offers permanent, lifelong growth.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <h3 className="font-heading text-2xl font-extrabold text-[#0e263f]">
              Are You a Suitable Candidate?
            </h3>
            <ul className="space-y-3 text-slate-700 text-sm font-medium">
              <li className="flex items-start gap-2.5">
                <CheckCircle weight="fill" className="w-5 h-5 text-[#0e263f] shrink-0 mt-0.5" />
                <span><strong>Sufficient Donor Area:</strong> Healthy hair density in the donor zone to allow safe extraction without over-harvesting.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle weight="fill" className="w-5 h-5 text-[#0e263f] shrink-0 mt-0.5" />
                <span><strong>Stable Hair Loss Pattern:</strong> Clearly identified Norwood stage allowing targeted surgical hairline planning.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle weight="fill" className="w-5 h-5 text-[#0e263f] shrink-0 mt-0.5" />
                <span><strong>Good Overall Medical Health:</strong> Suitable for local needle-free anesthesia and micro-surgical recovery.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Embedded Techniques Overview */}
      <TechniquesGrid locale={locale} />

      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
