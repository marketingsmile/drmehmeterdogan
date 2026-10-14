import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PackagesGrid from "@/components/PackagesGrid";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import { CheckCircle, ShieldCheck } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Hair Transplant Cost & VIP Packages | Dr. Mehmet Erdoğan Hair Transplant Doctor",
  description: "Transparent Hair Transplant Cost & All-Inclusive VIP Packages by Hair Transplant Doctor Dr. Mehmet Erdoğan in Istanbul, Turkey. 5-star hotel, transfers, medications included with zero hidden fees.",
  keywords: ["Hair Transplant Cost Turkey", "Dr Mehmet Erdogan Packages", "Hair Transplant Pricing", "VIP Hair Transplant Istanbul", "Hair Transplant Doctor Cost"],
};

export default function CostPage() {
  const locale = "en";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-teal-700 font-extrabold block mb-2">
              Transparent Medical Tourism
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#131b2e] leading-tight mb-4">
              Hair Transplant Cost & VIP Packages <br />
              <span className="gold-text-gradient">by Hair Transplant Doctor Dr. Mehmet Erdoğan</span>
            </h1>
            <p className="text-slate-700 text-lg font-medium leading-relaxed">
              Experience world-class surgical precision in Istanbul with complete pricing transparency. No hidden surgical fees, guaranteed max graft count, 5-star hotel stay, and private chauffeur transfers.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Packages Component */}
      <PackagesGrid locale={locale} />

      {/* Comparison: Turkey vs International Cost */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#131b2e] mb-4">
              Why Patients Choose Hair Transplant Doctor Dr. Mehmet Erdoğan in Turkey
            </h2>
            <p className="text-slate-700 text-base font-medium">
              Compare average surgical costs and patient inclusions between Turkey, UK, USA, and Western Europe.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-[#131b2e] text-sm">
                  <th className="p-4 font-extrabold">Service / Inclusions</th>
                  <th className="p-4 font-extrabold text-gold-600">Dr. Mehmet Erdoğan (Istanbul)</th>
                  <th className="p-4 font-extrabold">UK / Europe Clinics</th>
                  <th className="p-4 font-extrabold">USA Clinics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm text-slate-700 font-medium">
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">Average Cost (4,000 Grafts)</td>
                  <td className="p-4 font-extrabold text-gold-600">€2,200 - €3,500 (All-Inclusive)</td>
                  <td className="p-4">£7,000 - £12,000 (Surgery Only)</td>
                  <td className="p-4">$10,000 - $18,000 (Surgery Only)</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">Surgical Oversight</td>
                  <td className="p-4 font-bold text-teal-700">Expert Hair Transplant Doctor Dr. Mehmet Erdoğan</td>
                  <td className="p-4">Varies / Technician Lead</td>
                  <td className="p-4">Physician or Technician</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">5-Star Hotel Accommodation</td>
                  <td className="p-4 text-teal-700 font-bold">Included (2-3 Nights)</td>
                  <td className="p-4 font-normal text-slate-400">Not Included</td>
                  <td className="p-4 font-normal text-slate-400">Not Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">VIP Airport & Clinic Transfers</td>
                  <td className="p-4 text-teal-700 font-bold">Included (Private Chauffeur)</td>
                  <td className="p-4 font-normal text-slate-400">Not Included</td>
                  <td className="p-4 font-normal text-slate-400">Not Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-[#131b2e]">Medications & PRP Treatment</td>
                  <td className="p-4 text-teal-700 font-bold">Included</td>
                  <td className="p-4 font-normal text-slate-400">Extra Charge</td>
                  <td className="p-4 font-normal text-slate-400">Extra Charge</td>
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
