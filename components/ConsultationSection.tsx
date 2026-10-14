"use client";

import { useState } from "react";
import { 
  PaperPlaneRight, 
  CheckCircle, 
  ShieldCheck, 
  UploadSimple, 
  Phone, 
  Envelope 
} from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";
import { CONTACT_INFO } from "@/data/contact";

interface ConsultationSectionProps {
  locale: Locale;
}

export default function ConsultationSection({ locale }: ConsultationSectionProps) {
  const dict = getDictionary(locale);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    gender: "Male",
    hairLossDuration: "1 - 3 years",
    previousTransplant: "No",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="consultation" className="py-20 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Direct Doctor Contact & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-[#0e263f] text-xs font-bold uppercase tracking-wider shadow-sm">
              <ShieldCheck weight="bold" className="w-3.5 h-3.5 text-[#0e263f]" />
              <span>{dict.consultation.tag}</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight leading-tight">
              {dict.consultation.title}
            </h2>

            <p className="text-slate-700 text-base font-medium leading-relaxed">
              {dict.consultation.subtitle}
            </p>

            {/* Direct Lines */}
            <div className="space-y-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0e263f] text-white flex items-center justify-center font-bold shadow-xs">
                  <Phone weight="bold" className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
                    WhatsApp & Medical Helpline
                  </span>
                  <a
                    href={CONTACT_INFO.telHref}
                    className="font-bold text-[#0e263f] text-base sm:text-lg hover:text-[#415e79] transition-colors"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#ededed] text-[#0e263f] border border-[#415e79]/30 flex items-center justify-center font-bold shadow-xs">
                  <Envelope weight="bold" className="w-5 h-5 text-[#0e263f]" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wider">
                    Direct Email Consultation
                  </span>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="font-bold text-[#0e263f] text-base hover:text-[#415e79] transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Multi-Step Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-slate-100 text-[#0e263f] border border-slate-300 mx-auto flex items-center justify-center">
                    <CheckCircle weight="fill" className="w-10 h-10 text-[#0e263f]" />
                  </div>
                  <h3 className="font-heading font-extrabold text-[#0e263f] text-2xl">
                    Request Received Successfully!
                  </h3>
                  <p className="text-slate-700 text-sm max-w-md mx-auto leading-relaxed font-medium">
                    {dict.consultation.form.successMsg}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-[#0e263f] text-white text-xs font-bold hover:bg-[#173656] transition-colors cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-heading font-extrabold text-[#0e263f] text-2xl mb-4">
                    Medical Hair Loss Assessment
                  </h3>

                  {/* Form Grid Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] uppercase tracking-wider mb-2">
                        {dict.consultation.form.fullName} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0e263f] transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] uppercase tracking-wider mb-2">
                        {dict.consultation.form.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+44 7123 456789"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0e263f] transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] uppercase tracking-wider mb-2">
                        {dict.consultation.form.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0e263f] transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] uppercase tracking-wider mb-2">
                        {dict.consultation.form.age}
                      </label>
                      <input
                        type="number"
                        min="18"
                        max="75"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="35"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0e263f] transition-colors font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] uppercase tracking-wider mb-2">
                        {dict.consultation.form.hairLossDuration}
                      </label>
                      <select
                        value={formData.hairLossDuration}
                        onChange={(e) => setFormData({ ...formData, hairLossDuration: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] text-sm focus:outline-none focus:border-[#0e263f] transition-colors font-medium"
                      >
                        {dict.consultation.form.hairLossOptions.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0e263f] uppercase tracking-wider mb-2">
                        {dict.consultation.form.previousTransplant}
                      </label>
                      <div className="flex items-center gap-4 pt-2">
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-[#0e263f] font-semibold">
                          <input
                            type="radio"
                            name="prevTransplant"
                            value="Yes"
                            checked={formData.previousTransplant === "Yes"}
                            onChange={(e) => setFormData({ ...formData, previousTransplant: e.target.value })}
                            className="accent-[#0e263f]"
                          />
                          <span>{dict.consultation.form.yes}</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer text-sm text-[#0e263f] font-semibold">
                          <input
                            type="radio"
                            name="prevTransplant"
                            value="No"
                            checked={formData.previousTransplant === "No"}
                            onChange={(e) => setFormData({ ...formData, previousTransplant: e.target.value })}
                            className="accent-[#0e263f]"
                          />
                          <span>{dict.consultation.form.no}</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Photo Upload Box */}
                  <div className="p-4 rounded-2xl border-2 border-dashed border-slate-300 hover:border-[#0e263f] transition-colors bg-slate-50 text-center cursor-pointer">
                    <UploadSimple weight="bold" className="w-6 h-6 text-[#0e263f] mx-auto mb-2" />
                    <span className="block text-xs font-bold text-[#0e263f] mb-0.5">
                      Upload Scalp Photos (Front, Top, Back Donor)
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">
                      Drag & Drop files or click to browse (Max 10MB)
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0e263f] uppercase tracking-wider mb-2">
                      {dict.consultation.form.notes}
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Describe your primary expectations..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-[#0e263f] placeholder-slate-400 text-sm focus:outline-none focus:border-[#0e263f] transition-colors font-medium"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-base shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    <PaperPlaneRight weight="bold" className="w-4 h-4 text-white" />
                    <span>{dict.consultation.form.submit}</span>
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
