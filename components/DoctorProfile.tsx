"use client";

import { Trophy, CheckCircle, Sparkle, Quotes } from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";
import MedicalPlatformProfiles from "@/components/MedicalPlatformProfiles";

interface DoctorProfileProps {
  locale: Locale;
}

export default function DoctorProfile({ locale }: DoctorProfileProps) {
  const dict = getDictionary(locale);

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden border-t border-slate-200">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#415e79]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Portrait Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#415e79]/30 via-slate-200 to-slate-100 shadow-xl">
              <div className="bg-white rounded-[23px] overflow-hidden p-3 backdrop-blur-xl">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200">
                  <img
                    src="/images/dr-mehmet-erdogan-consultation.webp"
                    alt="Dr. Mehmet Erdoğan - Expert Hair Transplant Doctor in Consultation"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e263f]/85 via-transparent to-transparent"></div>

                  {/* Co-founder Floating Ribbon */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#0e263f] text-white shadow-sm">
                        <Trophy weight="bold" className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-[#0e263f] text-sm sm:text-base">
                          Smile Hair Clinic
                        </h4>
                        <p className="text-xs text-[#415e79] font-bold">
                          Co-Founder & Hair Transplant Doctor
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Qualifications */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0e263f] tracking-tight leading-tight mb-2">
              {dict.doctor.name}
            </h2>

            <p className="text-[#415e79] text-sm sm:text-base font-bold mb-6">
              {dict.doctor.title}
            </p>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed mb-8 font-medium">
              <p>{dict.doctor.bioParagraph1}</p>
              <p>{dict.doctor.bioParagraph2}</p>
              <p>{dict.doctor.bioParagraph3}</p>
            </div>

            {/* Quote Box */}
            <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-[#0e263f] mb-8 relative bg-slate-50 border border-slate-200">
              <Quotes weight="fill" className="w-8 h-8 text-[#0e263f]/20 absolute top-3 right-3" />
              <p className="font-heading italic text-[#0e263f] text-sm sm:text-base font-medium leading-relaxed relative z-10">
                "{dict.doctor.quote}"
              </p>
              <span className="block text-xs font-bold text-[#415e79] mt-2">
                — Dr. Mehmet Erdoğan (Hair Transplant Doctor)
              </span>
            </div>

            {/* Core Surgical Pillars Grid */}
            <div className="border-t border-slate-200 pt-6">
              <h4 className="font-heading font-bold text-[#0e263f] text-lg mb-4">
                {dict.doctor.keyPointsTitle}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.doctor.keyPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#0e263f] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle weight="fill" className="w-4 h-4 text-[#415e79] shrink-0" />
                      <h5 className="font-bold text-[#0e263f] text-sm">
                        {point.title}
                      </h5>
                    </div>
                    <p className="text-xs text-slate-600 leading-normal font-medium">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verified Medical Platform Profiles Grid */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <MedicalPlatformProfiles locale={locale} />
        </div>
      </div>
    </section>
  );
}
