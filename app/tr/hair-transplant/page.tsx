import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TechniquesGrid from "@/components/TechniquesGrid";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Saç Ekimi Rehberi | Dr. Mehmet Erdoğan Hair Transplant Doctor",
  description: "Dr. Mehmet Erdoğan tarafından hazırlanan kapsamlı saç ekimi hub sayfası. Safir FUE, DHI, greft planlaması ve tedavi adımları.",
  keywords: ["Saç Ekimi İstanbul", "Hair Transplant Doctor", "Safir FUE", "DHI Saç Ekimi"],
};

export default function TurkishHairTransplantHubPage() {
  const locale = "tr";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-700 font-extrabold block mb-2">
              Medikal Bilgi Hub Sayfası
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#131b2e] leading-tight mb-4">
              Kapsamlı Saç Ekimi Rehberi <br />
              <span className="gold-text-gradient">Hair Transplant Doctor Dr. Mehmet Erdoğan</span>
            </h1>
            <p className="text-slate-700 text-lg font-medium leading-relaxed">
              Saç dökülmesi teşhisi, greft hesabı, cerrahi yöntemler ve operasyon süreci hakkında detaylı bilgiler.
            </p>
          </div>
        </div>
      </section>
      <TechniquesGrid locale={locale} />
      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
