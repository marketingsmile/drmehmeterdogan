import React from "react";
import { Television } from "@phosphor-icons/react/dist/ssr";
import { mediaFeatures } from "@/data/media-features";
import MediaFeaturesPlayer from "@/components/MediaFeaturesPlayer";

interface MediaFeaturesSectionProps {
  locale?: string;
}

export default function MediaFeaturesSection({ locale = "en" }: MediaFeaturesSectionProps) {
  const isTr = locale === "tr";

  // Build VideoObject JSON-LD structured data directly from mediaFeatures
  const videoObjectSchemas = mediaFeatures.map((item) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: item.title,
    description: item.text,
    thumbnailUrl: [`https://i.ytimg.com/vi/${item.videoId}/maxresdefault.jpg`],
    uploadDate: item.uploadDate,
    duration: item.duration,
    embedUrl: `https://www.youtube-nocookie.com/embed/${item.videoId}`,
    contentUrl: `https://www.youtube.com/watch?v=${item.videoId}`,
  }));

  return (
    <section 
      id="media-features" 
      aria-labelledby="media-features-heading"
      className="py-20 bg-navy-gradient text-white relative overflow-hidden border-y border-white/10"
    >
      {/* JSON-LD VideoObject Structured Data */}
      {videoObjectSchemas.map((schema, sIdx) => (
        <script
          key={sIdx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#415e79]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#415e79]/20 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Header & Featured-on Bar */}
        <div className="max-w-4xl mx-auto text-center space-y-5">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-extrabold tracking-wider uppercase text-white shadow-sm">
            <Television weight="bold" className="w-4 h-4 text-white" />
            <span>{isTr ? "RESMİ ULUSLARARASI MEDYA VE BELGESELLER" : "OFFICIAL INTERNATIONAL MEDIA & DOCUMENTARIES"}</span>
          </div>

          {/* Heading */}
          <h2 
            id="media-features-heading" 
            className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {isTr ? (
              <>
                Uluslararası Belgesellerde <span className="underline decoration-[#415e79] underline-offset-8">Dr. Mehmet Erdoğan</span>
              </>
            ) : (
              <>
                Featured in International Documentaries and <span className="underline decoration-[#415e79] underline-offset-8">Global Television</span>
              </>
            )}
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            {isTr
              ? "Uluslararası televizyon kanallarının Dr. Mehmet Erdoğan ve Smile Hair Clinic hakkında hazırladığı tarafsız klinik belgeselleri inceleyin."
              : "Explore unbiased clinical coverage, operating room recordings, and patient journey documentaries broadcast by national and international television networks."}
          </p>

          {/* "Featured on" row: generated directly from mediaFeatures.map(f => f.outlet) */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-300">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-bold mr-1">
              Featured on
            </span>
            {mediaFeatures.map((item, idx) => (
              <React.Fragment key={item.id}>
                <span className="text-white font-bold">{item.outlet}</span>
                {idx < mediaFeatures.length - 1 && <span className="text-slate-500 font-normal">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Player with Server-Rendered Panels */}
        <MediaFeaturesPlayer features={mediaFeatures} />
      </div>
    </section>
  );
}
