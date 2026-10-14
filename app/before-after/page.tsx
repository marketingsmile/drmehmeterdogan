import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hair Transplant Turkey Before & After Results Gallery | Dr. Mehmet Erdoğan",
  description: "Explore 12-month documented hair transplant transformations and authentic reviews with Dr. Mehmet Erdoğan. Filter by graft count (<3000, 3000-4000, 4000-5000, 5000+).",
  keywords: ["Hair Transplant Turkey Before and After", "Dr Mehmet Erdogan Results", "Hair Transplant Before After Gallery", "Istanbul Hair Transplant Transformations", "Smile Hair Clinic Results"],
};

export default function BeforeAfterPage() {
  const locale = "en";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-2">
              Verified Clinical Transformations
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0e263f] leading-tight mb-4">
              Hair Transplant Turkey <br />
              <span className="amber-text-gradient">Before & After Results Gallery</span>
            </h1>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              Explore documented 12-month post-operative growth results and authentic patient video stories. Filter by graft count ranging from &lt;3,000 grafts hairline touchups to 5,850+ grafts mega sessions.
            </p>
          </div>
        </div>
      </section>

      <BeforeAfterSlider locale={locale} />

      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
