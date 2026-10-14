import { Star } from "@phosphor-icons/react";
import { Locale } from "@/lib/dictionary";

interface ReviewBadgesProps {
  locale: Locale;
}

export default function ReviewBadges({ locale }: ReviewBadgesProps) {
  const isTr = locale === "tr";
  const commentText = isTr ? "Yorum" : "Reviews";

  const reviews = [
    {
      platform: "Google",
      score: "4.9",
      bgColor: "bg-[#ea4335]",
      count: `5,000+ ${commentText}`,
      url: "https://www.google.com/maps/place//data=!4m3!3m2!1s0x14cac8b2a33a8b65:0xbc589f8816b1c1fa!12e1?source=g.page.m._&laa=merchant-review-solicitation",
      renderLogo: () => (
        <div className="flex flex-col items-start leading-tight">
          <span className="font-extrabold text-[#0e263f] text-xs tracking-tight">Google</span>
          <span className="text-[8px] uppercase tracking-wider text-[#415e79] font-bold -mt-0.5">AVERAGE RATING</span>
        </div>
      ),
      starColor: "text-amber-400"
    },
    {
      platform: "Trustpilot",
      score: "4.9",
      bgColor: "bg-[#00b67a]",
      count: `3,000+ ${commentText}`,
      url: "https://www.trustpilot.com/review/www.smilehairclinic.com",
      renderLogo: () => (
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-[#0e263f] text-xs tracking-tight">Trustpilot</span>
        </div>
      ),
      starColor: "text-[#00b67a]"
    },
    {
      platform: "ProvenExpert",
      score: "4.9",
      bgColor: "bg-[#c8b070]",
      count: `1,800+ ${commentText}`,
      url: "https://www.provenexpert.com/tr-tr/smile-hair-transplant-clinic-istanbul/",
      renderLogo: () => (
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-[#0e263f] text-xs tracking-tight">Proven Expert</span>
        </div>
      ),
      starColor: "text-amber-400"
    },
    {
      platform: "RealSelf",
      score: "5.0",
      bgColor: "bg-[#ff7474]",
      count: `250+ ${commentText}`,
      url: "https://www.realself.com/dr/mehmet-erdogan-istanbul-turkey",
      renderLogo: () => (
        <div className="flex items-center gap-1">
          <span className="font-extrabold text-[#0e263f] text-xs tracking-tight">realself.</span>
        </div>
      ),
      starColor: "text-amber-400"
    }
  ];

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
              <div className="px-2 py-1 flex flex-col justify-center flex-1 min-w-0">
                {badge.renderLogo()}
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-2.5 h-2.5 fill-current ${badge.starColor}`}
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
