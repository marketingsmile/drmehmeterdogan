import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TechniquesGrid from "@/components/TechniquesGrid";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Advanced Hair Restoration Techniques | Dr. Mehmet Erdoğan Hair Transplant Doctor",
  description: "Explore Sapphire FUE, DHI Choi Implanter, Unshaven Hair Transplants, and Revision Surgeries performed by Hair Transplant Doctor Dr. Mehmet Erdoğan in Istanbul.",
  keywords: ["Sapphire FUE", "DHI Hair Transplant", "Unshaven Hair Transplant", "Revision Hair Surgery", "Hair Transplant Doctor", "Dr Mehmet Erdogan Techniques"],
};

export default function TechniquesPage() {
  const locale = "en";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-700 font-extrabold block mb-2">
              Surgical Methodology
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#131b2e] leading-tight mb-4">
              Advanced Hair Restoration Techniques <br />
              <span className="gold-text-gradient">by Hair Transplant Doctor Dr. Mehmet Erdoğan</span>
            </h1>
            <p className="text-slate-700 text-lg font-medium leading-relaxed">
              Every scalp requires a tailored surgical strategy. Discover the difference between Sapphire FUE, DHI Choi Pen Implantation, Unshaven VIP restored hairline, and corrective revision surgeries.
            </p>
          </div>
        </div>
      </section>

      {/* Full Techniques Grid Component */}
      <TechniquesGrid locale={locale} />

      {/* Technique Comparison Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#131b2e] mb-4">
              Sapphire FUE vs. DHI Choi Pen Comparison
            </h2>
            <p className="text-slate-700 text-base font-medium">
              Understand which micro-surgical technique matches your hair density goals.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-[#131b2e] text-sm">
                  <th className="p-4 font-extrabold">Feature / Metric</th>
                  <th className="p-4 font-extrabold">Sapphire FUE</th>
                  <th className="p-4 font-extrabold">DHI Choi Implanter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-700 font-medium">
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">Channel Incisions</td>
                  <td className="p-4">Pre-opened with ultra-sharp Sapphire blades</td>
                  <td className="p-4">Direct 1-step implantation with Choi Pen</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">Max Grafts / Session</td>
                  <td className="p-4">Up to 4,500 - 5,000+ Grafts</td>
                  <td className="p-4">Up to 3,000 - 3,500 Grafts</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">Ideal Hair Loss Stage</td>
                  <td className="p-4">Norwood 3 to Norwood 6 (Extensive Areas)</td>
                  <td className="p-4">Norwood 2 to 4 & Hairline Lowering / Thinning</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">Head Shaving Required</td>
                  <td className="p-4">Donor & Recipient Area Shaved</td>
                  <td className="p-4">Unshaven / Partial Shaving Option Available</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">Healing Time</td>
                  <td className="p-4">7 - 10 Days Scab Shedding</td>
                  <td className="p-4">5 - 7 Days Rapid Recovery</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
