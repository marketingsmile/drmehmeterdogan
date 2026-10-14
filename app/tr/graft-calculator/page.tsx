import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GraftCalculator from "@/components/GraftCalculator";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "İnteraktif Greft & Fiyat Hesaplayıcı | Dr. Mehmet Erdoğan",
  description: "Norwood ölçeğine göre gereken greft sayınızı hesaplayın, ABD, İngiltere, Avustralya, İrlanda ve Türkiye operasyon maliyetlerini karşılaştırın.",
  keywords: ["Greft Hesaplayıcı", "Saç Ekimi Fiyat Hesaplama", "Norwood Ölçeği", "Saç Ekimi Maliyeti", "Dr Mehmet Erdoğan"],
};

export default function TrGraftCalculatorPage() {
  const locale = "tr";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-2">
              İnteraktif Hesaplama & Fiyat Karşılaştırma
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0e263f] leading-tight mb-4">
              Online Greft & Maliyet Hesaplayıcı <br />
              <span className="amber-text-gradient">Dr. Mehmet Erdoğan</span>
            </h1>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              İnteraktif Norwood ölçeğinden dökülme evrenizi seçerek cerrahi planınızı, tahmini greft sayısını ve uluslararası operasyon fiyat karşılaştırmasını görüntüleyin.
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
