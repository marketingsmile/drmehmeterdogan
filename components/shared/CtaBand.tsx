import React from "react";
import Link from "next/link";
import { SparklesIcon, Tag01Icon, ArrowRight01Icon } from "hugeicons-react";

export interface CtaBandProps {
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  className?: string;
}

export default function CtaBand({
  title,
  subtitle,
  primaryText = "Request Free Hair Analysis",
  primaryHref = "/#consultation",
  secondaryText = "Explore Packages & Pricing",
  secondaryHref = "/cost",
  className = "",
}: CtaBandProps) {
  return (
    <div
      className={`rounded-3xl bg-navy-gradient text-white p-8 sm:p-12 relative overflow-hidden border border-white/10 shadow-2xl my-12 ${className}`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#415e79]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3 text-white leading-tight">
          {title}
        </h3>

        {subtitle && (
          <p className="text-slate-200 text-sm sm:text-base font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
        )}

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          {primaryText && primaryHref && (
            <Link
              href={primaryHref}
              className="group px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#0e263f] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <SparklesIcon size={18} strokeWidth={2} className="text-[#0e263f]" />
              <span>{primaryText}</span>
              <ArrowRight01Icon
                size={16}
                strokeWidth={2}
                className="text-[#0e263f] transition-transform group-hover:translate-x-1"
              />
            </Link>
          )}

          {secondaryText && secondaryHref && (
            <Link
              href={secondaryHref}
              className="group px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/25 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <Tag01Icon size={18} strokeWidth={2} className="text-white" />
              <span>{secondaryText}</span>
              <ArrowRight01Icon
                size={16}
                strokeWidth={2}
                className="text-white/80 transition-transform group-hover:translate-x-1"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
