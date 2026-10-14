import { StarIcon } from "hugeicons-react";
import { Locale } from "@/lib/dictionary";
import { REVIEW_BADGES } from "@/data/trust";

interface ReviewBadgesProps {
  locale: Locale;
}

export default function ReviewBadges({ locale }: ReviewBadgesProps) {
  const isTr = locale === "tr";

  const renderBadgeLogo = (platform: string) => {
    switch (platform) {
      case "Google":
        return (
          <div className="flex items-center gap-1.5">
            <img 
              src="/images/google-g-clean.png" 
              alt="Google" 
              className="h-3.5 w-3.5 object-contain"
            />
            <span className="font-heading font-extrabold text-[#0e263f] text-xs tracking-tight">Google</span>
            <span className="text-[7.5px] font-bold text-slate-400 uppercase tracking-tight hidden sm:inline">AVG RATING</span>
          </div>
        );
      case "Trustpilot":
        return (
          <div className="flex items-center">
            <img 
              src="/images/trustpilot-clean.png" 
              alt="Trustpilot" 
              className="h-3.5 w-auto object-contain"
            />
          </div>
        );
      case "ProvenExpert":
        return (
          <div className="flex items-center gap-1.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#c8b070] flex items-center justify-center shrink-0">
              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="font-heading font-extrabold text-[#0e263f] text-xs tracking-tight">Proven Expert</span>
          </div>
        );
      case "RealSelf":
        return (
          <div className="flex items-center">
            <span className="font-heading font-black text-[#0e263f] text-[13px] tracking-tight">
              realself<span className="text-[#ff6868] text-base leading-none">.</span>
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  const reviews = REVIEW_BADGES.map((b) => ({
    ...b,
    count: isTr ? b.countTr : b.countEn,
    renderLogo: () => renderBadgeLogo(b.platform),
  }));

  return (
    <div className="w-full my-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl">
        {reviews.map((badge, idx) => (
          <a
            key={idx}
            href={badge.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-2.5 rounded-2xl bg-white/90 hover:bg-white border border-[#415e79]/20 hover:border-[#0e263f] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            {/* Pill Container (Matching Reference UI) */}
            <div className="flex items-center rounded-xl overflow-hidden border border-slate-200 bg-white w-full shadow-xs">
              {/* Score Left Box */}
              <div
                className={`${badge.bgColor} text-white font-extrabold text-xs px-2.5 py-1.5 flex items-center justify-center shrink-0 min-w-[36px]`}
              >
                {badge.score}
              </div>

              {/* Logo & 5 Stars Right Box */}
              <div className="px-2.5 py-1.5 flex flex-col justify-center flex-1 min-w-0">
                {badge.renderLogo()}
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      size={11}
                      className={badge.starColor}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Total Reviews Count Subtitle */}
            <span className="text-xs font-extrabold text-[#0e263f] group-hover:text-[#415e79] transition-colors mt-2 text-center">
              {badge.count}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
