"use client";

import Link from "next/link";
import { MapPin, Phone, Envelope, ArrowUp } from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale);
  const basePrefix = locale === "tr" ? "/tr" : "";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-100 text-[#0e263f] border-t border-slate-200 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand & Doctor Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href={basePrefix || "/"} className="flex flex-col">
              <span className="logo-signature text-[#0e263f]">
                Dr. Mehmet Erdoğan
              </span>
              <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#415e79] font-extrabold -mt-1 pl-0.5">
                HAIR TRANSPLANT DOCTOR
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#415e79] leading-relaxed pr-4 font-medium">
              {dict.footer.disclaimer}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs pt-2">
              <span className="px-3 py-1 rounded-full bg-white border border-[#415e79]/30 text-[#0e263f] font-bold">
                Smile Hair Clinic Co-Founder
              </span>
              <span className="px-3 py-1 rounded-full bg-white border border-[#415e79]/30 text-[#0e263f] font-bold">
                SAÇREHDER President
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-[#0e263f] text-base">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 font-semibold">
              <li>
                <Link href={`${basePrefix}/about-me`} className="hover:text-[#415e79] transition-colors">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`${basePrefix}/press-and-awards`} className="hover:text-[#415e79] transition-colors">
                  {locale === "tr" ? "Basın & Ödüller" : "Press & Awards"}
                </Link>
              </li>
              <li>
                <Link href={`${basePrefix}/media`} className="hover:text-[#415e79] transition-colors">
                  {locale === "tr" ? "Medya & Belgeseller" : "Media & Documentaries"}
                </Link>
              </li>
              <li>
                <Link href={`${basePrefix}/hair-transplant-turkey`} className="hover:text-[#415e79] transition-colors">
                  Hair Transplant Turkey 🇹🇷
                </Link>
              </li>
              <li>
                <Link href={`${basePrefix}/techniques`} className="hover:text-[#415e79] transition-colors">
                  {dict.nav.techniques}
                </Link>
              </li>
              <li>
                <Link href={`${basePrefix}/graft-calculator`} className="hover:text-[#415e79] transition-colors">
                  {dict.nav.graftCalculator}
                </Link>
              </li>
              <li>
                <Link href={`${basePrefix}/before-after`} className="hover:text-[#415e79] transition-colors">
                  {dict.nav.results}
                </Link>
              </li>
              <li>
                <Link href={`${basePrefix}/cost`} className="hover:text-[#415e79] transition-colors">
                  {dict.nav.cost || "Cost & Packages"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Clinic & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-heading font-extrabold text-[#0e263f] text-base">
              {dict.footer.contactTitle}
            </h4>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
              <li className="flex items-start gap-2.5">
                <MapPin weight="bold" className="w-4 h-4 text-[#0e263f] shrink-0 mt-0.5" />
                <span>{dict.footer.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone weight="bold" className="w-4 h-4 text-[#0e263f] shrink-0" />
                <a href="tel:+905321234567" className="hover:text-[#415e79] transition-colors font-bold">
                  {dict.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Envelope weight="bold" className="w-4 h-4 text-[#0e263f] shrink-0" />
                <a href="mailto:info@drmehmeterdogan.com" className="hover:text-[#415e79] transition-colors font-bold">
                  {dict.footer.email}
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-200">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#415e79] block mb-2">
                {locale === "tr" ? "Doğrulanmış Hekim Profilleri" : "Verified Medical Profiles"}
              </span>
              <div className="flex flex-wrap gap-2 text-[11px] font-bold text-[#0e263f]">
                <a href="https://www.qunomedical.com/en/dr-mehmet-erdogan-md" target="_blank" rel="noopener noreferrer" className="hover:text-[#415e79] underline">Qunomedical</a>
                <span>•</span>
                <a href="https://us-uk.bookimed.com/doctor/mehmet-erdogan/" target="_blank" rel="noopener noreferrer" className="hover:text-[#415e79] underline">Bookimed</a>
                <span>•</span>
                <a href="https://www.realself.com/dr/mehmet-erdogan-istanbul-turkey" target="_blank" rel="noopener noreferrer" className="hover:text-[#415e79] underline">RealSelf</a>
                <span>•</span>
                <a href="https://mediglobus.com/doctors/dr-mehmet-erdogan/" target="_blank" rel="noopener noreferrer" className="hover:text-[#415e79] underline">MediGlobus</a>
                <span>•</span>
                <a href="https://www.vaidam.com/doctors/dr-mehmet-erdogan" target="_blank" rel="noopener noreferrer" className="hover:text-[#415e79] underline">Vaidam</a>
                <span>•</span>
                <a href="https://www.belorens.com/doctor/mehmet-erdogan/" target="_blank" rel="noopener noreferrer" className="hover:text-[#415e79] underline">Belorens</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-semibold">
          <p>{dict.footer.copyright}</p>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white hover:bg-slate-200 border border-slate-300 text-[#0e263f] transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp weight="bold" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
