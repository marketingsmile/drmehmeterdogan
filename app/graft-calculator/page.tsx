import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GraftCalculator from "@/components/GraftCalculator";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Interactive Hair Graft & Cost Calculator | Dr. Mehmet Erdoğan",
  description: "Calculate your required graft count online based on the Norwood scale and compare procedure costs across USA, UK, Australia, Ireland, and Turkey with Dr. Mehmet Erdoğan.",
  keywords: ["Hair Graft Calculator", "Graft Cost Calculator", "Norwood Scale Calculator", "Hair Transplant Cost USA UK", "Dr Mehmet Erdogan Graft Count"],
};

export default function GraftCalculatorPage() {
  const locale = "en";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-2">
              Interactive Estimator & Pricing Tool
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0e263f] leading-tight mb-4">
              Online Hair Graft & Cost Calculator <br />
              <span className="amber-text-gradient">by Dr. Mehmet Erdoğan</span>
            </h1>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              Select your pattern of hair loss on the interactive Norwood scale to receive a surgical breakdown, target graft range, estimated hours, and international country cost comparison.
            </p>
          </div>
        </div>
      </section>

      <GraftCalculator locale={locale} />

      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
