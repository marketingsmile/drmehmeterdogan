import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Sparkle, 
  CheckCircle, 
  Clock, 
  Lightning, 
  Shield, 
  Cpu, 
  CaretRight,
  FirstAid
} from "@phosphor-icons/react/dist/ssr";

interface TechniqueDetail {
  slug: string;
  name: string;
  subtitle: string;
  desc: string;
  image: string;
  graftsPerHour: string;
  recoveryTime: string;
  bestFor: string;
  features: string[];
  fullContent: string[];
}

const techniquesData: Record<string, TechniqueDetail> = {
  "sapphire-fue": {
    slug: "sapphire-fue",
    name: "Sapphire FUE Hair Transplant",
    subtitle: "Precision Micro-Channel Incisions with Real Sapphire Gemstones",
    desc: "Sapphire FUE is the pinnacle of follicular unit extraction. By utilizing medical-grade V-shaped sapphire gemstone blades instead of traditional steel, Dr. Mehmet Erdoğan creates ultra-refined, high-density micro-channels that minimize tissue trauma and maximize graft survival.",
    image: "/images/Sapphire FUE.webp",
    graftsPerHour: "1,200 - 1,500 Grafts/hr",
    recoveryTime: "7 - 10 Days",
    bestFor: "Extensive balding (Norwood 2 to 6)",
    features: [
      "V-shaped sapphire gemstone blades (0.6mm - 0.8mm)",
      "30% denser graft placement without vascular compromise",
      "Accelerated scalp healing with zero visible scarring",
      "Supervised directly by Dr. Mehmet Erdoğan",
    ],
    fullContent: [
      "Sapphire FUE represents a revolutionary advancement in modern hair restoration surgery. Unlike traditional steel blades that create rectangular slits, ultra-sharp sapphire gemstone tips open fine micro-incisions that match the natural follicular width exactly.",
      "This micro-precision prevents follicle movement post-implantation, accelerates platelet adherence, and allows Dr. Mehmet Erdoğan to design extremely dense, natural hairlines tailored to facial bone architecture.",
      "At Smile Hair Clinic, every Sapphire FUE operation adheres to the True™ philosophy, ensuring maximum donor area conservation for future decades."
    ]
  },
  "dhi": {
    slug: "dhi",
    name: "Direct Hair Implantation (DHI)",
    subtitle: "Single-Step Choi Implanter Pen Precision",
    desc: "Direct Hair Implantation (DHI) utilizes specialized Choi Implanter Pens to extract and implant hair follicles simultaneously, giving Dr. Mehmet Erdoğan complete 360-degree control over depth, angle, and direction.",
    image: "/images/DHI Transplant.jpg",
    graftsPerHour: "800 - 1,100 Grafts/hr",
    recoveryTime: "5 - 7 Days",
    bestFor: "Hairline lowering & density enhancement between existing hair",
    features: [
      "Simultaneous channel opening and graft placement",
      "Ideal for unshaven and high-density hairline lowering",
      "Minimal out-of-body follicle exposure time",
      "Maximum protection of native thinning hairs",
    ],
    fullContent: [
      "Direct Hair Implantation (DHI) is renowned for providing surgical precision when working between existing native hairs without requiring full shaving of the recipient area.",
      "Using specialized hollow-needle Choi implanters, Dr. Erdoğan loads individual grafts and deposits them directly into the dermal layer at precise 40-45 degree natural angles.",
      "This technique minimizes graft handling, reduces bleeding, and ensures rapid crust shedding within days after the procedure."
    ]
  },
  "unshaven": {
    slug: "unshaven",
    name: "Unshaven Hair Transplant",
    subtitle: "Zero Shaving Required for Utmost Discretion",
    desc: "Designed specifically for busy executives, media personalities, and patients who cannot take extended downtime or shave their heads. Dr. Mehmet Erdoğan performs micro-extractions from hidden donor windows.",
    image: "/images/hair transplant doctor mehmet erdogan consultation with patient.jpg",
    graftsPerHour: "800 - 1,000 Grafts/hr",
    recoveryTime: "5 Days (Invisible)",
    bestFor: "Executives & High-Profile Individuals",
    features: [
      "Zero recipient or frontal shaving required",
      "Concealed linear micro-punch extraction",
      "Immediate return to business activities within 48h",
      "Utmost privacy and confidentiality",
    ],
    fullContent: [
      "Unshaven VIP hair restoration is tailored for patients who require utmost confidentiality and cannot afford visible signs of surgery.",
      "Dr. Erdoğan utilizes specialized micro-punches that harvest individual follicular units without cutting long surrounding donor hairs.",
      "The grafts are then implanted between your native long strands, rendering the recipient area completely invisible immediately post-surgery."
    ]
  },
  "female-hair-transplant": {
    slug: "female-hair-transplant",
    name: "Female Hair Transplant",
    subtitle: "Specialized Density Enhancement for Female Pattern Thinning & Hairline Advancement",
    desc: "Female hair loss requires a specialized diagnostic and hormonal approach. Dr. Mehmet Erdoğan designs gentle, non-shaven hair restoration procedures tailored to female hairline aesthetics and diffuse thinning patterns.",
    image: "/images/Mehmet Erdoğan kadınlarda saç ekimi.jpg",
    graftsPerHour: "600 - 800 Grafts/hr",
    recoveryTime: "7 - 10 Days",
    bestFor: "Women suffering from genetic thinning, high hairlines, or traction alopecia",
    features: [
      "Completely unshaven recipient area protocols",
      "Soft, rounded hairline transitions without harsh angles",
      "Comprehensive pre-op hormonal & blood panel screening",
      "Exosome and PRP therapy integration for follicle vitality",
    ],
    fullContent: [
      "Unlike male pattern baldness which follows the Norwood scale, female hair loss typically manifests as diffuse thinning across the central parting (Ludwig Classification).",
      "Dr. Mehmet Erdoğan employs micro-DHI and sapphire implantation to boost follicular density between existing hair follicles without damaging native hair roots.",
      "Every female procedure is planned with meticulous attention to natural cowlick whorls, soft temporal borders, and luxurious density."
    ]
  },
  "beard-transplant": {
    slug: "beard-transplant",
    name: "Beard & Facial Hair Transplant",
    subtitle: "Aesthetic Facial Hair & Moustache Reconstruction",
    desc: "Reconstruct sparse, patchy, or scarred facial hair with permanent natural follicles extracted from the donor scalp. Dr. Mehmet Erdoğan designs sharp jawlines, full beards, and natural moustache contours.",
    image: "/images/dr-mehmet-erdogan-consultation.webp",
    graftsPerHour: "700 - 1,000 Grafts/hr",
    recoveryTime: "5 - 7 Days",
    bestFor: "Men with patchy beards, scars, or genetic absence of facial hair",
    features: [
      "Single-hair follicle selection for ultra-natural cheek aesthetics",
      "Exact acute-angle implantation flat to facial skin",
      "Custom contour design matching individual jawline structure",
      "Permanent growth that can be shaved and styled normally",
    ],
    fullContent: [
      "Beard transplantation requires exceptional aesthetic skill because facial hair grows at much flatter angles (10-15 degrees) compared to scalp hair (40-45 degrees).",
      "Dr. Erdoğan exclusively selects single-hair follicular units from the donor zone to prevent unnatural multi-hair clusters on the cheeks or chin.",
      "The result is a thick, well-defined beard and moustache that grows permanently and can be trimmed, shaved, and styled effortlessly."
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(techniquesData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const tech = techniquesData[slug];
  if (!tech) return { title: "Technique Not Found" };

  return {
    title: `${tech.name} | Dr. Mehmet Erdoğan - Hair Transplant Doctor`,
    description: tech.desc,
    keywords: [tech.name, "Dr Mehmet Erdogan", "Hair Transplant Doctor", "Istanbul Hair Transplant", "Smile Hair Clinic"],
  };
}

export default function TechniqueDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const tech = techniquesData[slug];

  if (!tech) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale="en" />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-[#415e79]/20 relative overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-3">
                {tech.subtitle}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e263f] leading-tight mb-6">
                {tech.name}
              </h1>
              <p className="text-base sm:text-lg text-[#415e79] font-semibold leading-relaxed mb-8">
                {tech.desc}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/graft-calculator"
                  className="px-8 py-4 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Sparkle weight="bold" className="w-5 h-5 text-white" />
                  <span>Calculate Graft Need for {tech.name}</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border-4 border-white bg-slate-200">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e263f]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md text-xs text-[#0e263f] font-bold shadow-md">
                  Supervised by Dr. Mehmet Erdoğan
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Technique Specs & Advantages */}
      <section className="py-16 bg-[#ededed]">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-[#415e79]/20 shadow-sm text-center">
              <Lightning weight="bold" className="w-6 h-6 text-[#0e263f] mx-auto mb-2" />
              <span className="text-xs text-[#415e79] font-bold block">Implantation Speed</span>
              <span className="font-extrabold text-[#0e263f] text-lg">{tech.graftsPerHour}</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#415e79]/20 shadow-sm text-center">
              <Clock weight="bold" className="w-6 h-6 text-[#415e79] mx-auto mb-2" />
              <span className="text-xs text-[#415e79] font-bold block">Healing Period</span>
              <span className="font-extrabold text-[#0e263f] text-lg">{tech.recoveryTime}</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#415e79]/20 shadow-sm text-center">
              <Shield weight="bold" className="w-6 h-6 text-[#0e263f] mx-auto mb-2" />
              <span className="text-xs text-[#415e79] font-bold block">Best Candidate</span>
              <span className="font-extrabold text-[#0e263f] text-lg">{tech.bestFor}</span>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="bg-white rounded-3xl p-8 border border-[#415e79]/20 shadow-lg mb-12">
            <h3 className="font-heading text-2xl font-extrabold text-[#0e263f] mb-6">
              Key Surgical Advantages of {tech.name}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tech.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-[#ededed] border border-[#415e79]/15">
                  <CheckCircle weight="fill" className="w-5 h-5 text-[#0e263f] shrink-0" />
                  <span className="text-sm font-bold text-[#0e263f]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full Content */}
          <div className="bg-white rounded-3xl p-8 border border-[#415e79]/20 shadow-lg space-y-4 text-base text-[#415e79] leading-relaxed font-medium">
            {tech.fullContent.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

        </div>
      </section>

      <ConsultationSection locale="en" />
      <Footer locale="en" />
    </main>
  );
}
