"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { 
  Trophy, 
  Sparkle, 
  Calculator, 
  ArrowRight, 
  CheckCircle, 
  CalendarBlank,
  Medal,
  ShieldCheck,
  Star
} from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";
import ReviewBadges from "@/components/ReviewBadges";

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const portraitFrameRef = useRef<HTMLDivElement>(null);

  const dict = getDictionary(locale);
  const basePrefix = locale === "tr" ? "/tr" : "";

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, { y: -25, opacity: 0, duration: 0.6 })
        .from(titleRef.current, { y: 35, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(textRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(portraitFrameRef.current, { scale: 0.96, y: 30, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(statsRef.current, { y: 30, opacity: 0, duration: 0.8 }, "-=0.2");
    },
    { scope: containerRef }
  );

  const statIcons = [
    <CalendarBlank key="cal" weight="bold" className="w-5 h-5 text-[#415e79]" />,
    <Medal key="exp" weight="bold" className="w-5 h-5 text-[#415e79]" />,
    <ShieldCheck key="surv" weight="bold" className="w-5 h-5 text-[#415e79]" />,
    <Star key="star" weight="fill" className="w-5 h-5 text-[#415e79]" />
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden bg-[#ededed] py-12 lg:py-20 hero-radial-glow"
    >
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#415e79]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#0e263f]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline & Value Prop */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Trust Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#415e79]/30 text-[#0e263f] text-xs font-bold tracking-wide shadow-sm mb-6"
            >
              <Trophy weight="bold" className="w-4 h-4 text-[#0e263f]" />
              <span>{dict.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1
              ref={titleRef}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0e263f] leading-[1.15] mb-6"
            >
              {dict.hero.titlePrefix}{" "}
              <span className="text-[#415e79] block sm:inline">
                {dict.hero.titleHighlight}
              </span>
            </h1>

            {/* Description Paragraph */}
            <p
              ref={textRef}
              className="text-base sm:text-lg text-[#415e79] font-semibold leading-relaxed mb-8 max-w-2xl"
            >
              {dict.hero.description}
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6"
            >
              <Link
                href={`${basePrefix}/graft-calculator`}
                className="px-8 py-4 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-base shadow-lg hover:shadow-xl flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <Calculator weight="bold" className="w-5 h-5 text-white" />
                <span>{dict.hero.ctaPrimary}</span>
                <ArrowRight weight="bold" className="w-4 h-4 text-white" />
              </Link>

              <Link
                href={`${basePrefix}/before-after`}
                className="px-8 py-4 rounded-xl bg-white hover:bg-white/80 text-[#0e263f] font-bold text-base border border-[#415e79]/30 shadow-sm flex items-center justify-center gap-2 transition-all hover:border-[#0e263f]"
              >
                <Sparkle weight="bold" className="w-4 h-4 text-[#0e263f]" />
                <span>{dict.hero.ctaSecondary}</span>
              </Link>
            </div>

            {/* Official Review Ratings Badges */}
            <ReviewBadges locale={locale} />

            {/* Credentials Bullet Points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-[#0e263f] font-semibold pt-4 border-t border-[#415e79]/20 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#0e263f]" />
                <span>SAÇREHDER President & Founder</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#0e263f]" />
                <span>FUE Europe Member</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle weight="fill" className="w-4 h-4 text-[#0e263f]" />
                <span>World FUE Institute</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait (Frameless, Cleanly Integrated on Hero Background) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-end">
            <div
              ref={portraitFrameRef}
              className="relative w-full max-w-[480px] flex justify-center items-end"
            >
              <img
                src="/images/dr-mehmet-erdogan.webp"
                alt="Dr. Mehmet Erdoğan - Hair Transplant Doctor"
                className="w-full h-auto max-h-[580px] object-contain drop-shadow-2xl select-none pointer-events-none"
              />
            </div>
          </div>
        </div>

        {/* Medical-Focused Stats Cards Section */}
        <div
          ref={statsRef}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6"
        >
          {dict.hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-white via-white to-slate-50/90 p-5 sm:p-6 rounded-2xl border border-[#415e79]/20 shadow-sm hover:shadow-md hover:border-[#0e263f] transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Subtle top medical indicator line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#415e79]/40 to-transparent group-hover:via-[#0e263f] transition-colors" />

              {/* Icon badge */}
              <div className="w-10 h-10 rounded-xl bg-slate-100/90 border border-[#415e79]/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                {statIcons[idx] || <ShieldCheck weight="bold" className="w-5 h-5 text-[#415e79]" />}
              </div>

              {/* Metric Number */}
              <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0e263f] tracking-tight mb-1">
                {stat.number}
              </span>

              {/* Label */}
              <span className="text-xs sm:text-sm text-[#415e79] font-bold tracking-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
