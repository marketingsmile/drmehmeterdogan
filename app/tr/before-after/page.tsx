import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hair Transplant Turkey Before & After Results Gallery | Dr. Mehmet Erdoğan",
  description: "Dr. Mehmet Erdoğan tarafından gerçekleştirilen 12 aylık saç ekimi öncesi ve sonrası değişim fotoğrafları, greft filtreleri ve hasta deneyimleri.",
  keywords: ["Türkiye Saç Ekimi Öncesi Sonrası", "Dr Mehmet Erdoğan Sonuçları", "Saç Ekimi Değişim Galerisi", "Smile Hair Clinic Sonuçlar"],
};

export default function TrBeforeAfterPage() {
  const locale = "tr";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-2">
              Doğrulanmış Cerrahi Değişimler
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#0e263f] leading-tight mb-4">
              Hair Transplant Turkey <br />
              <span className="amber-text-gradient">Before & After Results Gallery</span>
            </h1>
            <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
              Dr. Mehmet Erdoğan gözetiminde tamamlanan 12 aylık operasyon sonuçlarını ve gerçek hasta yorumlarını inceleyin. Greft sayısına göre filtreleme yapabilirsiniz.
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
