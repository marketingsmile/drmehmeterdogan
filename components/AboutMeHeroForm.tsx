"use client";

import { useState } from "react";
import { 
  PaperPlaneRight, 
  CheckCircle, 
  ShieldCheck, 
  Lock, 
  WhatsappLogo,
  Sparkle,
  User,
  Phone,
  Envelope,
  CaretDown
} from "@phosphor-icons/react";
import { Locale } from "@/lib/dictionary";

interface AboutMeHeroFormProps {
  locale: Locale;
}

export default function AboutMeHeroForm({ locale }: AboutMeHeroFormProps) {
  const isTr = locale === "tr";
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    procedure: isTr ? "Safir FUE Saç Ekimi" : "Sapphire FUE Hair Transplant",
    notes: "",
  });

  const procedureOptions = isTr
    ? [
        "Safir FUE Saç Ekimi",
        "DHI (Doğrudan Saç Ekimi)",
        "Tıraşsız VIP Saç Ekimi",
        "Sakal & Bıyık Ekimi",
        "Kadınlarda Saç Ekimi",
        "Genel Saç Analizi & Konsültasyon",
      ]
    : [
        "Sapphire FUE Hair Transplant",
        "DHI Direct Hair Implantation",
        "Unshaven VIP Hair Transplant",
        "Beard & Mustache Restoration",
        "Female Hair Restoration",
        "General Hair Loss Assessment",
      ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 relative">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-[#0e263f] via-[#415e79] to-[#0e263f] rounded-t-full"></div>

      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle weight="fill" className="w-10 h-10 text-emerald-600" />
          </div>
          <h3 className="font-heading font-extrabold text-[#0e263f] text-2xl">
            {isTr ? "Talebiniz Başarıyla Alındı!" : "Consultation Request Received!"}
          </h3>
          <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed font-medium">
            {isTr
              ? "Dr. Mehmet Erdoğan'ın medikal ekibi fotoğraflarınızı inceleyip 2 saat içinde kişisel tedavi planınız ve greft analizinizle size ulaşacaktır."
              : "Dr. Mehmet Erdoğan's medical team will review your case and reach out within 2 hours with your personalized graft estimate and treatment plan."}
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: "",
                  phone: "",
                  email: "",
                  procedure: procedureOptions[0],
                  notes: "",
                });
              }}
              className="px-5 py-2.5 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white text-xs font-bold transition-all shadow-xs cursor-pointer"
            >
              {isTr ? "Yeni Talep Gönder" : "Send Another Inquiry"}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Header */}
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>{isTr ? "Öncelikli Doktor Değerlendirmesi" : "Direct Doctor Consultation"}</span>
            </div>
            <h3 className="font-heading font-extrabold text-[#0e263f] text-xl sm:text-2xl tracking-tight">
              {isTr ? "Ücretsiz Saç Analizi Alın" : "Request Free Medical Assessment"}
            </h3>
            <p className="text-[#415e79] text-xs sm:text-sm font-medium mt-1">
              {isTr
                ? "Dr. Mehmet Erdoğan ve kıdemli ekibinden kişisel greft analizi ve planı."
                : "Personalized graft count & surgical plan by Dr. Mehmet Erdoğan's team."}
            </p>
          </div>

          {/* Input: Full Name */}
          <div>
            <label className="block text-[11px] font-bold text-[#0e263f] uppercase tracking-wider mb-1.5">
              {isTr ? "Adınız Soyadınız" : "Full Name"} *
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder={isTr ? "Örn: Ahmet Yılmaz" : "e.g. John Smith"}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#0e263f] focus:bg-white transition-all"
              />
              <User weight="bold" className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Grid: Phone & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-[#0e263f] uppercase tracking-wider mb-1.5">
                {isTr ? "Telefon / WhatsApp" : "Phone / WhatsApp"} *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder={isTr ? "+90 532 000 0000" : "+44 7123 456789"}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#0e263f] focus:bg-white transition-all"
                />
                <Phone weight="bold" className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-[#0e263f] uppercase tracking-wider mb-1.5">
                {isTr ? "E-Posta" : "Email Address"} *
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#0e263f] focus:bg-white transition-all"
                />
                <Envelope weight="bold" className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>
          </div>

          {/* Procedure of Interest Dropdown */}
          <div>
            <label className="block text-[11px] font-bold text-[#0e263f] uppercase tracking-wider mb-1.5">
              {isTr ? "İlgilendiğiniz Tedavi Yöntemi" : "Treatment of Interest"}
            </label>
            <div className="relative">
              <select
                value={formData.procedure}
                onChange={(e) => setFormData({ ...formData, procedure: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] text-xs sm:text-sm font-medium focus:outline-none focus:border-[#0e263f] focus:bg-white transition-all appearance-none cursor-pointer pr-10"
              >
                {procedureOptions.map((opt, i) => (
                  <option key={i} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <CaretDown weight="bold" className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 px-6 rounded-2xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-70 mt-2"
          >
            {isSubmitting ? (
              <span>{isTr ? "Gönderiliyor..." : "Submitting..."}</span>
            ) : (
              <>
                <span>{isTr ? "Ücretsiz Değerlendirme Alın" : "Request Free Medical Assessment"}</span>
                <PaperPlaneRight weight="fill" className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Trust Guarantees & WhatsApp Direct Action */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#415e79] font-medium">
            <div className="flex items-center gap-1.5">
              <Lock weight="bold" className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{isTr ? "%100 Tıbbi Gizlilik" : "100% Confidential"}</span>
            </div>

            <a
              href="https://wa.me/905321234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-bold hover:underline transition-colors"
            >
              <WhatsappLogo weight="fill" className="w-4 h-4 text-emerald-600" />
              <span>{isTr ? "WhatsApp'tan Hızlı Ulaşın" : "Quick WhatsApp Inquiry"}</span>
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
