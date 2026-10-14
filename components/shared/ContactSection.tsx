"use client";

import React, { useState } from "react";
import { 
  PaperPlaneRight, 
  CheckCircle, 
  ShieldCheck, 
  UploadSimple, 
  Phone, 
  Envelope,
  WhatsappLogo
} from "@phosphor-icons/react";
import { Locale } from "@/lib/dictionary";
import { CONTACT_INFO } from "@/data/contact";

export interface ContactSectionProps {
  locale: Locale;
  title?: string;
  subtitle?: string;
  tag?: string;
  id?: string;
  className?: string;
}

export default function ContactSection({
  locale,
  title,
  subtitle,
  tag,
  id = "consultation",
  className = "",
}: ContactSectionProps) {
  const isTr = locale === "tr";
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: isTr ? "Erkek" : "Male",
    hairLossDuration: isTr ? "1 - 3 yıl" : "1 - 3 years",
    previousTransplant: isTr ? "Hayır" : "No",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id={id}
      className={`py-20 bg-slate-50 relative border-t border-slate-200 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Doctor Contact & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
              <span>{tag || (isTr ? "KİŞİSEL TIBBİ DEĞERLENDİRME" : "DIRECT DOCTOR ASSESSMENT")}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight leading-tight">
              {title || (isTr ? "Dr. Mehmet Erdoğan ile Ücretsiz Ön Analiz" : "Get a Free Surgical Hair Assessment")}
            </h2>

            <p className="text-slate-700 text-base font-medium leading-relaxed">
              {subtitle || (isTr
                ? "Fotoğraflarınızı göndererek donör kapasiteniz ve saç çizgisi planlamanız hakkında Dr. Mehmet Erdoğan ve medikal ekibimizden 24 saat içinde kişiye özel değerlendirme alın."
                : "Submit your scalp photos to receive a personalized donor density evaluation, graft estimate, and treatment roadmap directly from Dr. Mehmet Erdoğan and his clinical team within 24 hours.")}
            </p>

            {/* Direct Lines sourced from data/contact.ts */}
            <div className="space-y-4 pt-4">
              {/* WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-emerald-600 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs shrink-0">
                  <WhatsappLogo weight="bold" className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
                    {isTr ? "WhatsApp Canlı Danışma" : "WhatsApp Direct Helpline"}
                  </span>
                  <a
                    href={CONTACT_INFO.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#0e263f] text-base sm:text-lg hover:text-emerald-700 transition-colors"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Direct Phone Call Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-[#0e263f] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#0e263f] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
                  <Phone weight="bold" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
                    {isTr ? "Doğrudan Telefon Hattı" : "Direct Phone Consultation"}
                  </span>
                  <a
                    href={CONTACT_INFO.telHref}
                    className="font-bold text-[#0e263f] text-base sm:text-lg hover:text-[#415e79] transition-colors"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4 hover:border-[#415e79] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#ededed] text-[#0e263f] border border-[#415e79]/30 flex items-center justify-center font-bold shadow-xs shrink-0">
                  <Envelope weight="bold" className="w-5 h-5 text-[#0e263f]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
                    {isTr ? "Resmi İletişim E-Postası" : "Direct Email Inquiries"}
                  </span>
                  <a
                    href={CONTACT_INFO.mailHref}
                    className="font-bold text-[#0e263f] text-base hover:text-[#415e79] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Step Assessment Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 text-[#0e263f] border border-slate-300 mx-auto flex items-center justify-center">
                    <CheckCircle weight="fill" className="w-10 h-10 text-[#0e263f]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#0e263f]">
                    {isTr ? "Talebiniz Alındı!" : "Assessment Request Received!"}
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm font-medium">
                    {isTr
                      ? "Bilgileriniz Dr. Mehmet Erdoğan'ın medikal ekibine başarıyla iletildi. 24 saat içinde greft planınızla birlikte sizinle iletişime geçeceğiz."
                      : "Your photos and details have been forwarded to Dr. Mehmet Erdoğan's surgical team. We will review your donor area and contact you with a bespoke analysis within 24 hours."}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#0e263f] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#173656] transition-all cursor-pointer"
                  >
                    {isTr ? "Yeni Form Gönder" : "Send Another Request"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-100 pb-4 mb-4">
                    <h3 className="font-heading text-xl font-extrabold text-[#0e263f]">
                      {isTr ? "Fotoğraflarınızı Gönderin" : "Upload Your Scalp Photos"}
                    </h3>
                    <p className="text-xs text-[#415e79] font-semibold mt-1">
                      {isTr
                        ? "Gizliliğiniz 100% korunmaktadır. Ön, yan ve tepe fotoğraflarınız hekim analizi için kullanılır."
                        : "100% confidential. Your photos are evaluated solely for surgical donor planning."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] mb-1">
                        {isTr ? "Ad Soyad *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#0e263f] font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] mb-1">
                        {isTr ? "E-Posta *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#0e263f] font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] mb-1">
                        {isTr ? "Telefon (WhatsApp ile) *" : "Phone Number (with WhatsApp) *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7123 456789"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#0e263f] font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] mb-1">
                        {isTr ? "Yaş" : "Age"}
                      </label>
                      <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="35"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#0e263f] font-medium"
                      />
                    </div>
                  </div>

                  {/* Photo Upload Dropzone */}
                  <div className="pt-2">
                    <label className="block text-xs font-bold text-[#0e263f] mb-1">
                      {isTr ? "Saç Fotoğraflarınız (Ön, Tepe, Arka)" : "Scalp Photos (Front, Crown, Donor)"}
                    </label>
                    <div className="border-2 border-dashed border-slate-300 hover:border-[#0e263f] rounded-2xl p-5 text-center cursor-pointer bg-slate-50 transition-colors">
                      <UploadSimple weight="bold" className="w-6 h-6 text-[#415e79] mx-auto mb-2" />
                      <span className="text-xs font-bold text-[#0e263f] block">
                        {isTr ? "Fotoğrafları seçin veya buraya sürükleyin" : "Select or drag photos here"}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium block mt-0.5">
                        JPG, PNG (Max 15MB)
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e263f] mb-1">
                      {isTr ? "Ek Notlar veya Sorularınız" : "Additional Notes or Questions"}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={isTr ? "Saç dökülme geçmişiniz veya beklentileriniz..." : "Tell us about your hair loss history or questions..."}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-[#0e263f] font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <span>{isTr ? "Ücretsiz Değerlendirme Talebi Gönder" : "Request Free Medical Assessment"}</span>
                    <PaperPlaneRight weight="bold" className="w-4 h-4 text-white" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
