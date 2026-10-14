import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TechniquesGrid from "@/components/TechniquesGrid";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gelişmiş Saç Ekim Teknikleri | Dr. Mehmet Erdoğan Hair Transplant Doctor",
  description: "Safir FUE, DHI Choi Kalemi, Tıraşsız Saç Ekimi ve Revizyon Cerrahi teknikleri.",
};

export default function TurkishTechniquesPage() {
  const locale = "tr";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-700 font-extrabold block mb-2">
              Cerrahi Yöntemler
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#131b2e] leading-tight mb-4">
              Gelişmiş Saç Ekim Teknikleri <br />
              <span className="gold-text-gradient">Hair Transplant Doctor Dr. Mehmet Erdoğan</span>
            </h1>
          </div>
        </div>
      </section>
      <TechniquesGrid locale={locale} />
      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
