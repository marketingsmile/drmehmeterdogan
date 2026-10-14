"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Phone, 
  Globe, 
  ShieldCheck, 
  List, 
  X, 
  CalendarBlank, 
  ArrowSquareOut, 
  CaretDown,
  User,
  Trophy,
  VideoCamera,
  Sparkle
} from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";

interface NavbarProps {
  locale: Locale;
}

export default function Navbar({ locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [techMegaOpen, setTechMegaOpen] = useState(false);
  const [hairMegaOpen, setHairMegaOpen] = useState(false);
  const pathname = usePathname();
  const dict = getDictionary(locale);

  const basePrefix = locale === "tr" ? "/tr" : "";
  const targetSwitchPath = locale === "tr" ? "/" : "/tr";
  const smileLink = locale === "tr" ? "https://www.smilehairclinic.com/" : "https://www.smilehairclinic.com/en/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const doctorSubmenu = [
    {
      name: locale === "tr" ? "Dr. Mehmet Erdoğan Hakkında" : "About Dr. Mehmet Erdoğan",
      desc: locale === "tr" ? "Biyografi, uzmanlık & cerrahi felsefe" : "Surgeon biography & True™ philosophy",
      href: `${basePrefix}/about-me`,
      icon: User,
      badge: "M.D."
    },
    {
      name: locale === "tr" ? "Basın & Ödüller" : "Press & Awards",
      desc: locale === "tr" ? "Uluslararası ödüller, tıp zirveleri & sertifikalar" : "International awards & medical summits",
      href: `${basePrefix}/press-and-awards`,
      icon: Trophy,
      badge: "Awards"
    },
    {
      name: locale === "tr" ? "Medya & Belgeseller" : "Media & Documentaries",
      desc: locale === "tr" ? "BBC belgeseli, TV röportajları & vaka videoları" : "BBC documentary & clinical video footage",
      href: `${basePrefix}/media`,
      icon: VideoCamera,
      badge: "BBC"
    }
  ];

  const techniquesList = [
    {
      name: locale === "tr" ? "Safir FUE Saç Ekimi" : "Sapphire FUE Hair Transplant",
      desc: locale === "tr" ? "Gerçek safir uçlar ile mikro kanal açma" : "Ultra-precise gemstone micro-incisions",
      href: `${basePrefix}/techniques/sapphire-fue`,
      image: "/images/Sapphire FUE.webp"
    },
    {
      name: locale === "tr" ? "DHI Saç Ekimi" : "DHI Hair Transplant (Choi Pen)",
      desc: locale === "tr" ? "Choi kalemi ile doğrudan kök yerleştirme" : "Direct implantation without prior channels",
      href: `${basePrefix}/techniques/dhi`,
      image: "/images/DHI Transplant.jpg"
    },
    {
      name: locale === "tr" ? "Tıraşsız Saç Ekimi" : "Unshaven Hair Transplant",
      desc: locale === "tr" ? "Saçınızı kestirmeden gizli ve konforlu ekim" : "Discreet restoration with zero hair shaving",
      href: `${basePrefix}/techniques/unshaven`,
      image: "/images/hair transplant doctor mehmet erdogan consultation with patient.jpg"
    },
    {
      name: locale === "tr" ? "Kadınlarda Saç Ekimi" : "Female Hair Transplant",
      desc: locale === "tr" ? "Kadın saç yapısına özel yoğunlaştırma" : "Specialized density restoration for women",
      href: `${basePrefix}/techniques/female-hair-transplant`,
      image: "/images/Mehmet Erdoğan kadınlarda saç ekimi.jpg"
    },
    {
      name: locale === "tr" ? "Sakal & Bıyık Ekimi" : "Beard & Facial Hair Transplant",
      desc: locale === "tr" ? "Doğal açılarla sakal ve bıyık rekonstrüksiyonu" : "Natural facial hair contour reconstruction",
      href: `${basePrefix}/techniques/beard-transplant`,
      image: "/images/dr-mehmet-erdogan-consultation.webp"
    }
  ];

  const hairHubList = [
    {
      name: locale === "tr" ? "Saç Ekimi Rehberi" : "Hair Transplant Overview",
      desc: locale === "tr" ? "İstanbul'da saç ekimi hakkında her şey" : "Comprehensive guide to hair restoration",
      href: `${basePrefix}/hair-transplant`,
      image: "/images/hair transplant doctor mehmet erdogan.jpg"
    },
    {
      name: locale === "tr" ? "Saç Ekimi Türkiye 🇹🇷" : "Hair Transplant Turkey 🇹🇷",
      desc: locale === "tr" ? "Medikal turizm & 5 yıldızlı VIP sağlık paketi" : "5-star VIP packages & airport transfers",
      href: `${basePrefix}/hair-transplant-turkey`,
      image: "/images/smile hair clinic lobby.jpg"
    },
    {
      name: locale === "tr" ? "Greft İhtiyacı Hesaplayıcı" : "Graft Need Estimator",
      desc: locale === "tr" ? "Norwood ölçeğine göre anında greft hesabı" : "Instant Norwood scale graft calculator",
      href: `${basePrefix}/graft-calculator`,
      image: "/images/hair transplant doctor mehmet erdogan new photo.jpg"
    },
    {
      name: locale === "tr" ? "Önce & Sonra Galeri" : "Before & After Results",
      desc: locale === "tr" ? "Dr. Mehmet Erdoğan hasta değişimleri" : "Verified patient transformations",
      href: `${basePrefix}/before-after`,
      image: "/images/3000-Grafts-ROSS-STEVEN-ROY.jpg"
    }
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-[#ededed] border-b border-[#415e79]/20 text-xs py-2 px-4 text-[#0e263f] relative z-50">
        <div className="max-w-[1480px] mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            {/* Clickable Smile Hair Clinic Link with Logo Image */}
            <a
              href={smileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#0e263f] hover:text-[#415e79] font-bold transition-colors group"
            >
              <img
                src="/images/smile hair clinic logo 2.jpg"
                alt="Smile Hair Clinic Logo"
                className="h-5 w-auto object-contain rounded transition-transform group-hover:scale-105"
              />
              <span className="whitespace-nowrap">{dict.nav.smileClinicBadge}</span>
              <ArrowSquareOut weight="bold" className="w-3.5 h-3.5 text-[#415e79] group-hover:translate-x-0.5 transition-all" />
            </a>

            <span className="hidden md:inline-block text-[#415e79]/40">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#415e79] font-semibold">
              <ShieldCheck weight="bold" className="w-4 h-4 text-[#415e79]" />
              SAÇREHDER President & FUE Europe Member
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a
              href="tel:+905321234567"
              className="flex items-center gap-1.5 font-bold text-[#0e263f] hover:text-[#415e79] transition-colors"
            >
              <Phone weight="bold" className="w-3.5 h-3.5 text-[#415e79]" />
              <span className="whitespace-nowrap">{dict.nav.emergencyCall}</span>
            </a>

            {/* Language Switcher */}
            <Link
              href={targetSwitchPath}
              className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white hover:bg-[#ededed] text-[#0e263f] border border-[#415e79]/30 text-xs font-bold transition-all shadow-sm"
            >
              <Globe weight="bold" className="w-3.5 h-3.5 text-[#415e79]" />
              <span>{locale === "en" ? "TR" : "EN"}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Light Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#ededed]"
            : "bg-white/90 backdrop-blur-sm py-4 border-b border-[#ededed]/60"
        }`}
      >
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Official Cursive Signature Logo */}
          <Link href={basePrefix || "/"} className="group flex flex-col justify-center shrink-0">
            <span className="logo-signature text-[#0e263f] transition-transform group-hover:scale-[1.02]">
              Dr. Mehmet Erdoğan
            </span>
            <span className="text-[9.5px] uppercase tracking-[0.22em] text-[#415e79] font-extrabold -mt-1 pl-0.5 group-hover:text-[#0e263f] transition-colors">
              HAIR TRANSPLANT DOCTOR
            </span>
          </Link>

          {/* Desktop Navigation Links with Visual Mega Menus */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[15px] xl:text-[16px] font-bold text-[#0e263f]">
            
            {/* Dr. Mehmet Erdoğan Dropdown Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 transition-colors py-1 cursor-pointer ${
                  pathname.includes("about-me") || pathname.includes("press-and-awards") || pathname.includes("media")
                    ? "text-[#0e263f] font-extrabold underline decoration-[#415e79] underline-offset-4"
                    : "hover:text-[#415e79]"
                }`}
              >
                <span>{dict.nav.about}</span>
                <CaretDown weight="bold" className={`w-4 h-4 text-[#415e79] transition-transform duration-200 ${aboutDropdownOpen ? "rotate-180 text-[#0e263f]" : ""}`} />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 w-[340px] p-3 bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  {doctorSubmenu.map((sub) => {
                    const IconComp = sub.icon;
                    const isActive = pathname === sub.href;
                    return (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={() => setAboutDropdownOpen(false)}
                        className={`flex items-start gap-3 p-3 rounded-xl transition-all group/sub ${
                          isActive ? "bg-[#ededed] text-[#0e263f] font-extrabold" : "hover:bg-[#ededed]/80 text-[#0e263f]"
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-[#0e263f] group-hover/sub:bg-[#0e263f] group-hover/sub:text-white transition-colors shrink-0">
                          <IconComp weight="bold" className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-heading font-extrabold text-sm text-[#0e263f] group-hover/sub:text-[#0e263f] transition-colors">
                              {sub.name}
                            </span>
                            <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-[#415e79] border border-slate-200">
                              {sub.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#415e79] font-medium line-clamp-1 mt-0.5">
                            {sub.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Hair Transplant Mega Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => setHairMegaOpen(true)}
              onMouseLeave={() => setHairMegaOpen(false)}
            >
              <Link
                href={`${basePrefix}/hair-transplant`}
                className="flex items-center gap-1 transition-colors hover:text-[#415e79] group whitespace-nowrap"
              >
                <span>{dict.nav.hairTransplantHub || "Hair Transplant"}</span>
                <CaretDown weight="bold" className={`w-4 h-4 text-[#415e79] transition-transform duration-200 ${hairMegaOpen ? "rotate-180 text-[#0e263f]" : ""}`} />
              </Link>

              {hairMegaOpen && (
                <div className="absolute top-full -left-16 w-[640px] p-5 bg-white rounded-3xl shadow-2xl border border-slate-200 z-50 grid grid-cols-2 gap-3.5 animate-in fade-in slide-in-from-top-2 duration-150">
                  {hairHubList.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setHairMegaOpen(false)}
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-[#ededed] transition-colors group/item"
                    >
                      <div className="w-16 h-14 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-200">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover/item:scale-105 transition-transform" />
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-[#0e263f] text-sm group-hover/item:text-[#415e79] transition-colors">
                          {item.name}
                        </h4>
                        <p className="text-[11px] text-[#415e79] font-semibold line-clamp-2 mt-0.5">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Techniques Image-Rich Mega Menu */}
            <div
              className="relative py-2"
              onMouseEnter={() => setTechMegaOpen(true)}
              onMouseLeave={() => setTechMegaOpen(false)}
            >
              <Link
                href={`${basePrefix}/techniques`}
                className="flex items-center gap-1 transition-colors hover:text-[#415e79] group whitespace-nowrap"
              >
                <span>{dict.nav.techniques}</span>
                <CaretDown weight="bold" className={`w-4 h-4 text-[#415e79] transition-transform duration-200 ${techMegaOpen ? "rotate-180 text-[#0e263f]" : ""}`} />
              </Link>

              {techMegaOpen && (
                <div className="absolute top-full -left-48 w-[820px] p-6 bg-white rounded-3xl shadow-2xl border border-slate-200 z-50 grid grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Techniques Grid (8 cols) */}
                  <div className="col-span-8 grid grid-cols-1 gap-2.5">
                    <span className="text-[11px] uppercase tracking-widest text-[#415e79] font-extrabold block mb-1">
                      {locale === "tr" ? "Cerrahi Saç Ekim Teknikleri" : "Surgical Methodologies"}
                    </span>
                    {techniquesList.map((t) => (
                      <Link
                        key={t.href}
                        href={t.href}
                        onClick={() => setTechMegaOpen(false)}
                        className="flex items-center gap-3.5 p-2.5 rounded-2xl hover:bg-[#ededed] transition-colors group/tech"
                      >
                        <div className="w-14 h-12 rounded-xl overflow-hidden bg-slate-200 shrink-0 border border-slate-200">
                          <img src={t.image} alt={t.name} className="w-full h-full object-cover group-hover/tech:scale-105 transition-transform" />
                        </div>
                        <div>
                          <h4 className="font-heading font-extrabold text-[#0e263f] text-sm group-hover/tech:text-[#415e79] transition-colors">
                            {t.name}
                          </h4>
                          <p className="text-[11px] text-[#415e79] font-semibold line-clamp-1">
                            {t.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Featured Doctor Tech Card (4 cols) */}
                  <div className="col-span-4 bg-[#ededed] p-4 rounded-2xl border border-[#415e79]/20 flex flex-col justify-between">
                    <div>
                      <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-slate-300">
                        <img src="/images/dr-mehmet-erdogan-consultation.webp" alt="Dr. Mehmet Erdoğan" className="w-full h-full object-cover" />
                      </div>
                      <h4 className="font-heading font-extrabold text-[#0e263f] text-sm mb-1">
                        True™ Surgical Philosophy
                      </h4>
                      <p className="text-[11px] text-[#415e79] font-semibold leading-relaxed">
                        {locale === "tr"
                          ? "Dr. Mehmet Erdoğan kişiye özel açı ve mikron dikiş tekniklerini denetler."
                          : "Every angle and donor area graft density is personally supervised by Dr. Erdoğan."}
                      </p>
                    </div>

                    <Link
                      href={`${basePrefix}/techniques`}
                      onClick={() => setTechMegaOpen(false)}
                      className="mt-3 px-3 py-2 rounded-xl bg-[#0e263f] text-white text-xs font-extrabold text-center hover:bg-[#173656] transition-colors block shadow-sm"
                    >
                      {locale === "tr" ? "Tüm Teknikleri İncele" : "Explore All Techniques"}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Graft Calculator Link */}
            <Link
              href={`${basePrefix}/graft-calculator`}
              className={`transition-colors py-1 relative group whitespace-nowrap text-[#0e263f] font-extrabold flex items-center gap-1.5 ${
                pathname === `${basePrefix}/graft-calculator` ? "text-[#415e79]" : "hover:text-[#415e79]"
              }`}
            >
              <span>{dict.nav.graftCalculator}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-[#0e263f] animate-pulse"></span>
            </Link>

            {/* Before & After Results */}
            <Link
              href={`${basePrefix}/before-after`}
              className={`transition-colors py-1 relative group whitespace-nowrap ${
                pathname === `${basePrefix}/before-after` ? "text-[#0e263f] font-extrabold underline decoration-[#415e79] underline-offset-4" : "hover:text-[#415e79]"
              }`}
            >
              <span>{dict.nav.results}</span>
            </Link>

            {/* Cost & Packages */}
            <Link
              href={`${basePrefix}/cost`}
              className={`transition-colors py-1 relative group whitespace-nowrap ${
                pathname === `${basePrefix}/cost` ? "text-[#0e263f] font-extrabold underline decoration-[#415e79] underline-offset-4" : "hover:text-[#415e79]"
              }`}
            >
              <span>{dict.nav.cost || "Cost & Packages"}</span>
            </Link>

          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href={`${basePrefix}/#consultation`}
              className="px-6 py-2.5 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-[15px] shadow-md hover:shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <CalendarBlank weight="bold" className="w-4 h-4 text-white" />
              <span className="whitespace-nowrap">{dict.nav.bookConsultation}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-100 text-[#0e263f] hover:text-[#415e79] border border-slate-200"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X weight="bold" className="w-6 h-6" /> : <List weight="bold" className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto border-b border-slate-200">
          <nav className="flex flex-col gap-3 text-base font-bold text-[#0e263f]">
            
            {/* Dr. Mehmet Erdogan Section with Sub-pages */}
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs uppercase tracking-wider text-[#415e79] font-extrabold block mb-2">
                Dr. Mehmet Erdoğan
              </span>
              <div className="space-y-2 pl-2">
                {doctorSubmenu.map((sub) => {
                  const IconComp = sub.icon;
                  return (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2.5 py-1.5 text-sm text-[#0e263f] hover:text-[#415e79]"
                    >
                      <IconComp weight="bold" className="w-4 h-4 text-[#0e263f]" />
                      <span>{sub.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Hair Transplant Hub & Turkey Page */}
            <div className="border-b border-slate-100 pb-3">
              <span className="text-xs uppercase tracking-wider text-[#415e79] font-extrabold block mb-2">
                {dict.nav.hairTransplantHub || "Hair Transplant"}
              </span>
              <div className="space-y-2 pl-2">
                {hairHubList.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-1 text-sm text-[#0e263f] hover:text-[#415e79]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Links */}
            <Link
              href={`${basePrefix}/techniques`}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-slate-100 pb-2.5 hover:text-[#415e79]"
            >
              {dict.nav.techniques}
            </Link>

            <Link
              href={`${basePrefix}/graft-calculator`}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-slate-100 pb-2.5 hover:text-[#415e79] flex items-center justify-between"
            >
              <span>{dict.nav.graftCalculator}</span>
              <span className="text-xs px-2 py-0.5 bg-[#0e263f]/10 text-[#0e263f] rounded-full font-extrabold">
                Interactive
              </span>
            </Link>

            <Link
              href={`${basePrefix}/before-after`}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-slate-100 pb-2.5 hover:text-[#415e79]"
            >
              {dict.nav.results}
            </Link>

            <Link
              href={`${basePrefix}/cost`}
              onClick={() => setMobileMenuOpen(false)}
              className="border-b border-slate-100 pb-2.5 hover:text-[#415e79]"
            >
              {dict.nav.cost || "Cost & Packages"}
            </Link>
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-slate-200 mt-6">
            <Link
              href={`${basePrefix}/#consultation`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 text-center rounded-xl bg-[#0e263f] hover:bg-[#173656] font-extrabold text-white shadow-md"
            >
              {dict.nav.bookConsultation}
            </Link>
            <a
              href="tel:+905321234567"
              className="w-full py-3 text-center rounded-xl bg-[#ededed] text-[#0e263f] border border-slate-300 text-sm font-bold flex items-center justify-center gap-2"
            >
              <Phone weight="bold" className="w-4 h-4 text-[#0e263f]" />
              <span>{dict.nav.emergencyCall}</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
