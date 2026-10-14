import React from "react";
import Image from "next/image";

export interface SplitFeatureProps {
  imageSrc: string;
  imageAlt: string;
  overlayBadgeTitle?: string;
  overlayBadgeSubtitle?: string;
  overlayIcon?: React.ReactNode;
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  reversed?: boolean;
  className?: string;
}

export default function SplitFeature({
  imageSrc,
  imageAlt,
  overlayBadgeTitle,
  overlayBadgeSubtitle,
  overlayIcon,
  eyebrow,
  title,
  subtitle,
  description,
  children,
  reversed = false,
  className = "",
}: SplitFeatureProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center ${className}`}>
      {/* Image Column */}
      <div
        className={`lg:col-span-5 relative ${
          reversed ? "lg:order-last" : ""
        }`}
      >
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#415e79]/30 via-slate-200 to-slate-100 shadow-xl">
          <div className="bg-white rounded-[23px] overflow-hidden p-3 backdrop-blur-xl">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 border border-slate-200">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e263f]/85 via-transparent to-transparent" />

              {/* Optional Floating Overlay Badge */}
              {(overlayBadgeTitle || overlayBadgeSubtitle) && (
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg">
                  <div className="flex items-center gap-3">
                    {overlayIcon && (
                      <div className="p-2.5 rounded-xl bg-[#0e263f] text-white shadow-sm shrink-0">
                        {overlayIcon}
                      </div>
                    )}
                    <div>
                      {overlayBadgeTitle && (
                        <h4 className="font-heading font-bold text-[#0e263f] text-sm sm:text-base">
                          {overlayBadgeTitle}
                        </h4>
                      )}
                      {overlayBadgeSubtitle && (
                        <p className="text-xs text-[#415e79] font-bold">
                          {overlayBadgeSubtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Text Column */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        {eyebrow && (
          <span className="text-xs font-bold uppercase tracking-widest text-[#415e79] mb-2 block">
            {eyebrow}
          </span>
        )}

        <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0e263f] tracking-tight leading-tight mb-2">
          {title}
        </h3>

        {subtitle && (
          <p className="text-[#415e79] text-sm sm:text-base font-bold mb-5">
            {subtitle}
          </p>
        )}

        {description && (
          <div className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-medium space-y-3">
            {typeof description === "string" ? <p>{description}</p> : description}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
