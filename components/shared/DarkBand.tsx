import React from "react";
import Link from "next/link";
import { CheckCircle, Play, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";

export interface DarkBandProps {
  eyebrow?: string;
  icon?: React.ReactNode;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  bullets: string[];
  buttonText?: string;
  buttonHref?: string;
  isExternalLink?: boolean;
  rightContent?: React.ReactNode;
  className?: string;
}

export default function DarkBand({
  eyebrow,
  icon,
  title,
  description,
  bullets,
  buttonText,
  buttonHref,
  isExternalLink = false,
  rightContent,
  className = "",
}: DarkBandProps) {
  return (
    <section
      className={`py-16 bg-navy-gradient text-white relative overflow-hidden border-b border-white/10 ${className}`}
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#415e79]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-[#415e79]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`grid grid-cols-1 ${
            rightContent ? "lg:grid-cols-12 gap-10 items-center" : "max-w-4xl mx-auto text-center"
          }`}
        >
          {/* Main Content Column */}
          <div className={`${rightContent ? "lg:col-span-6" : "w-full"} space-y-6`}>
            {/* Outlined Eyebrow Pill */}
            {eyebrow && (
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-extrabold tracking-wider uppercase text-white shadow-sm ${
                  !rightContent ? "mx-auto" : ""
                }`}
              >
                {icon && <span className="shrink-0">{icon}</span>}
                <span>{eyebrow}</span>
              </div>
            )}

            {/* Title */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>

            {/* Narrative Description */}
            <p className="text-base sm:text-lg text-[#ededed]/90 font-medium leading-relaxed">
              {description}
            </p>

            {/* 2-Column Checklist */}
            {bullets && bullets.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left">
                {bullets.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white"
                  >
                    <CheckCircle weight="fill" className="w-4.5 h-4.5 text-white shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* White Pill Action Button */}
            {buttonText && buttonHref && (
              <div className={`pt-4 ${!rightContent ? "flex justify-center" : ""}`}>
                {isExternalLink ? (
                  <a
                    href={buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-[#0e263f] font-extrabold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                  >
                    <Play weight="fill" className="w-4 h-4 text-[#0e263f]" />
                    <span>{buttonText}</span>
                    <ArrowSquareOut
                      weight="bold"
                      className="w-4 h-4 text-[#0e263f] group-hover:translate-x-0.5 transition-transform"
                    />
                  </a>
                ) : (
                  <Link
                    href={buttonHref}
                    className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-[#0e263f] font-extrabold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
                  >
                    <span>{buttonText}</span>
                    <ArrowSquareOut
                      weight="bold"
                      className="w-4 h-4 text-[#0e263f] group-hover:translate-x-0.5 transition-transform"
                    />
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Right Column Content (e.g. Video player, image, or interactive card) */}
          {rightContent && (
            <div className="lg:col-span-6">
              {rightContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
