"use client";

import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  AirplaneTilt, 
  CalendarBlank, 
  UserCheck, 
  Stethoscope, 
  Sparkle, 
  Handshake, 
  CaretRight, 
  CheckCircle 
} from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";
import YouTubeVideoGrid from "@/components/YouTubeVideoGrid";
import { ALL_YOUTUBE_VIDEOS } from "@/lib/youtubeData";

interface PatientJourneyProps {
  locale: Locale;
}

export default function PatientJourney({ locale }: PatientJourneyProps) {
  const dict = getDictionary(locale);
  const isTr = locale === "tr";
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const featuredImageRef = useRef<HTMLDivElement>(null);

  const stepImages = [
    "/images/hair transplant doctor mehmet erdogan consultation with patient.jpg",
    "/images/vip airport transfer.JPG",
    "/images/dr mehmet erdogan before photo of patient.jpg",
    "/images/Dr. Mehmet Erdogan canal opening procedure.jpg",
    "/images/smile hair clinic washing room.jpg",
    "/images/dr mehmet erdogan with consultation patient.jpg",
  ];

  const icons = [CalendarBlank, AirplaneTilt, UserCheck, Stethoscope, Sparkle, Handshake];

  useGSAP(
    () => {
      if (featuredImageRef.current) {
        gsap.fromTo(
          featuredImageRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.45, ease: "power2.out" }
        );
      }
    },
    { dependencies: [activeStep], scope: containerRef }
  );

  const currentStepData = dict.journey.steps[activeStep] || dict.journey.steps[0];
  const CurrentIcon = icons[activeStep] || CalendarBlank;

  const leftSteps = dict.journey.steps.slice(0, 3); // Steps 01, 02, 03
  const rightSteps = dict.journey.steps.slice(3, 6); // Steps 04, 05, 06

  return (
    <section
      ref={containerRef}
      className="py-20 bg-[#ededed] relative border-t border-[#415e79]/20 overflow-hidden"
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
            {dict.journey.title}
          </h2>
          <p className="text-base sm:text-lg text-[#415e79] font-medium leading-relaxed">
            {dict.journey.subtitle}
          </p>
        </div>

        {/* Dynamic 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (3.5 cols): Steps 1 - 3 */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
            {leftSteps.map((s, idx) => {
              const globalIdx = idx;
              const isSelected = activeStep === globalIdx;
              const StepIcon = icons[globalIdx];

              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(globalIdx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#0e263f] shadow-xl scale-[1.02]"
                      : "bg-white/80 hover:bg-white border-[#415e79]/20 hover:border-[#0e263f]/40 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-extrabold text-2xl amber-text-gradient">
                      {s.step}
                    </span>
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isSelected ? "bg-[#0e263f] text-white" : "bg-[#ededed] text-[#415e79]"
                      }`}
                    >
                      <StepIcon weight="bold" className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-[#0e263f] mb-1">
                      {s.title}
                    </h4>
                    <p className="text-xs text-[#415e79] font-medium line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column (5 cols): Live Featured Step Imagery & Full Narrative */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#415e79]/20 shadow-2xl h-full flex flex-col justify-between">
              
              {/* Dynamic Photo Display */}
              <div
                ref={featuredImageRef}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100 mb-6 group"
              >
                <img
                  src={stepImages[activeStep]}
                  alt={currentStepData.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#0e263f]/90 text-white font-extrabold text-xs flex items-center gap-2 backdrop-blur-md">
                  <CurrentIcon weight="bold" className="w-4 h-4 text-white" />
                  <span>Step {currentStepData.step} Protocol</span>
                </div>
              </div>

              {/* Full Description & Key Guarantee */}
              <div>
                <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-1">
                  Active Patient Phase
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0e263f] mb-3">
                  {currentStepData.title}
                </h3>
                <p className="text-[#415e79] text-sm sm:text-base leading-relaxed font-medium mb-6">
                  {currentStepData.desc}
                </p>

                <div className="p-4 rounded-2xl bg-[#ededed] border border-[#415e79]/20 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle weight="fill" className="w-5 h-5 text-[#0e263f] shrink-0" />
                    <span className="text-xs sm:text-sm font-extrabold text-[#0e263f]">
                      Official Dr. Mehmet Erdoğan Care Protocol
                    </span>
                  </div>
                  <a
                    href="#consultation"
                    className="text-xs font-extrabold text-[#0e263f] hover:underline flex items-center gap-1"
                  >
                    <span>Plan Journey</span>
                    <CaretRight weight="bold" className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (3.5 cols): Steps 4 - 6 */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
            {rightSteps.map((s, idx) => {
              const globalIdx = idx + 3;
              const isSelected = activeStep === globalIdx;
              const StepIcon = icons[globalIdx];

              return (
                <div
                  key={s.step}
                  onClick={() => setActiveStep(globalIdx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-white border-[#0e263f] shadow-xl scale-[1.02]"
                      : "bg-white/80 hover:bg-white border-[#415e79]/20 hover:border-[#0e263f]/40 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-heading font-extrabold text-2xl text-[#0e263f]">
                      {s.step}
                    </span>
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isSelected ? "bg-[#0e263f] text-white" : "bg-[#ededed] text-[#415e79]"
                      }`}
                    >
                      <StepIcon weight="bold" className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-extrabold text-base text-[#0e263f] mb-1">
                      {s.title}
                    </h4>
                    <p className="text-xs text-[#415e79] font-medium line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* 3-Column Video Embed Subsection at the end of section */}
        <div className="mt-20 pt-12 border-t border-[#415e79]/20">
          <YouTubeVideoGrid
            locale={locale}
            videos={[ALL_YOUTUBE_VIDEOS[5], ALL_YOUTUBE_VIDEOS[12], ALL_YOUTUBE_VIDEOS[15]]}
            title={isTr ? "Operasyon ve İyileşme Sürecini İzleyin" : "Watch Your Procedure & Recovery Steps"}
            subtitle={isTr ? "Operasyon günü akışı, hastanede ilk saç yıkaması ve hasta deneyimi." : "From operation day morning to clinic first wash and recovery support."}
          />
        </div>

      </div>
    </section>
  );
}
