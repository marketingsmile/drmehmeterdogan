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
  Shield 
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

const techniquesDataTr: Record<string, TechniqueDetail> = {
  "sapphire-fue": {
    slug: "sapphire-fue",
    name: "Safir FUE Saç Ekimi",
    subtitle: "Gerçek Safir Elmas Uçlarla Mikro Kanal Açımı",
    desc: "Safir FUE, saç kökü naklinde gelinen en üst düzey cerrahi tekniktir. Geleneksel metal slitler yerine V şeklindeki medikal safir elmas uçlar kullanan Dr. Mehmet Erdoğan, doku travmasını en aza indirerek maksimum greft tutunma oranı sağlar.",
    image: "/images/Sapphire FUE.webp",
    graftsPerHour: "1.200 - 1.500 Greft/saat",
    recoveryTime: "7 - 10 Gün",
    bestFor: "Geniş kellik alanları (Norwood 2 - 6)",
    features: [
      "0.6mm - 0.8mm V şeklinde gerçek safir elmas uçlar",
      "Dolaşımı bozmadan %30 daha sık greft yerleşimi",
      "İz bırakmayan, hızlı kafa derisi iyileşme süreci",
      "Bizzat Dr. Mehmet Erdoğan cerrahi gözetiminde",
    ],
    fullContent: [
      "Safir FUE, modern saç restorasyon cerrahisinde çığır açan bir yeniliktir. Dikdörtgen kesikler oluşturan klasik çelik bıçakların aksine, son derece keskin safir uçlar doğal saç folikülü genişliğiyle birebir uyumlu mikro kanallar açar.",
      "Bu mikro hassasiyet, ekilen köklerin yerinden oynamasını engeller, kabuklanmayı azaltır ve Dr. Mehmet Erdoğan'ın yüz kemik yapısına tam uyumlu yoğun bir ön çizgi tasarlamasına olanak tanır.",
      "Smile Hair Clinic'te her Safir FUE operasyonu True™ felsefesiyle gerçekleştirilerek donör alanın gelecekteki yıllar için korunması hedeflenir."
    ]
  },
  "dhi": {
    slug: "dhi",
    name: "Direct Hair Implantation (DHI)",
    subtitle: "Özel Choi İmplater Kalemi ile Tek Adımda Ekim",
    desc: "Doğrudan Saç Ekimi (DHI), özel Choi kalemleri sayesinde kanal açma ve kök yerleştirme işlemlerini aynı anda gerçekleştirir. Dr. Mehmet Erdoğan'a derinlik, yön ve açı üzerinde 360 derece tam kontrol sağlar.",
    image: "/images/DHI Transplant.jpg",
    graftsPerHour: "800 - 1.100 Greft/saat",
    recoveryTime: "5 - 7 Gün",
    bestFor: "Ön saç çizgisi sıklaştırma ve mevcut saç aralarına ekim",
    features: [
      "Kanal açma ve greft yerleşiminin eşzamanlı yapılması",
      "Tıraşsız ekimler ve ön çizgi sıklaştırma için ideal",
      "Köklerin vücut dışında bekleme süresinin minimuma inmesi",
      "Mevcut zayıf saç köklerine sıfır zarar",
    ],
    fullContent: [
      "DHI tekniği, alıcı alanı tamamen tıraş etmeden mevcut saçların arasına girerek yoğunluk kazandırmada altın standart cerrahi konfor sunar.",
      "Özel ince uçlu Choi iğneleri kullanılarak alınan greftler tek tek hazneye yerleştirilir ve 40-45 derecelik doğal çıkış açılarıyla doğrudan deriye nakledilir.",
      "Bu yöntem greft temasını en aza indirir, kanamayı azaltır ve işlemden sonraki birkaç gün içinde hızlı kabuk dökümünü mümkün kılar."
    ]
  },
  "unshaven": {
    slug: "unshaven",
    name: "Tıraşsız VIP Saç Ekimi",
    subtitle: "Sosyal Hayattan Kopmadan Sıfır Kazıtma Konforu",
    desc: "İş insanları, yöneticiler ve saçını tamamen kestirmek istemeyen hastalar için özel olarak geliştirilmiştir. Dr. Mehmet Erdoğan, görünmeyen donör pencerelerden mikro alım yapar.",
    image: "/images/hair transplant doctor mehmet erdogan consultation with patient.jpg",
    graftsPerHour: "800 - 1.000 Greft/saat",
    recoveryTime: "5 Gün (Fark Edilmez)",
    bestFor: "İş temposundan kopamayan ve saçını kestirmek istemeyenler",
    features: [
      "Ön ve tepe alıcı bölgesinde sıfır tıraş",
      "Donör alandaki mikro pencerelerin mevcut uzun saçla kapanması",
      "48-72 saat içinde normal sosyal yaşama dönüş",
      "Uzun saçlar arasında operasyon yapabilen üstün cerrahi tecrübe",
    ],
    fullContent: [
      "Tıraşsız saç ekimi, cerrahın uzun saç tellerinin arasından kökleri tek tek ayıklayıp aynı titizlikle nakletmesini gerektiren en hassas operasyonlardan biridir.",
      "Dr. Mehmet Erdoğan'ın cerrahi protokolü sayesinde operasyon geçirdiğiniz dışarıdan kesinlikle anlaşılmaz.",
      "Özellikle Norwood 2 ve 3 şakak gerilemelerinde mevcut saç modelinizi bozmadan harika sonuçlar elde edilir."
    ]
  },
  "female-hair-transplant": {
    slug: "female-hair-transplant",
    name: "Kadınlarda Saç Ekimi",
    subtitle: "Ludwig Tipi Seyrelmeler & Alın Daraltma İçin Özel Çözümler",
    desc: "Kadın tipi saç dökülmesi hormonal ve biyolojik olarak erkeklerden farklıdır. Dr. Mehmet Erdoğan, kadın saç çizgisi estetiğine ve tepe bölgesi seyrelmelerine özel tıraşsız operasyonlar yürütür.",
    image: "/images/Mehmet Erdoğan kadınlarda saç ekimi.jpg",
    graftsPerHour: "600 - 800 Greft/saat",
    recoveryTime: "7 - 10 Gün",
    bestFor: "Genetik saç seyrelmesi, yüksek alın veya çekilme yaşayan kadınlar",
    features: [
      "Tamamen tıraşsız alıcı alan yaklaşımı",
      "Sert hatlardan uzak, yumuşak ve kavisli kadın ön çizgisi",
      "Ameliyat öncesi kapsamlı hormon ve kan testleri",
      "Eksozom ve PRP tedavisi ile folikül canlılığı desteği",
    ],
    fullContent: [
      "Kadınlarda saç dökülmesi genellikle orta hat ayrımından başlayarak yaygın (difüz) şekilde seyrekleşir.",
      "Dr. Mehmet Erdoğan, mevcut saç tellerini koruyarak aralara mikro DHI ve safir uçlarla yoğunlaştırma uygular.",
      "Doğal döner yönleri ve yumuşak şakak geçişleri gözetilerek kadınsı saç estetiği mükemmel biçimde yeniden yapılandırılır."
    ]
  },
  "beard-transplant": {
    slug: "beard-transplant",
    name: "Sakal & Bıyık Ekimi",
    subtitle: "Doğal Yüz Kılları ve Çene Hattı Tasarımı",
    desc: "Seyrek, yamalı veya yara izi bulunan yüz bölgelerine donör alandan alınan sağlıklı kökler nakledilir. Dr. Mehmet Erdoğan, maskülen ve doğal bir sakal hattı tasarlar.",
    image: "/images/dr-mehmet-erdogan-consultation.webp",
    graftsPerHour: "700 - 1.000 Greft/saat",
    recoveryTime: "5 - 7 Gün",
    bestFor: "Köselik, yama sakal veya yüzünde yara izi olan erkekler",
    features: [
      "Doğal yanak görünümü için sadece tekli greftlerin seçimi",
      "Yüz derisine tam paralel, yatay mikro açılarla ekim",
      "Yüz ve çene kemik yapısına özel sakal çizgisi planı",
      "Ömür boyu uzayan, tıraş edilebilen ve şekil alan sakallar",
    ],
    fullContent: [
      "Sakal ekimi, yüz kıllarının kafa derisinden çok daha dar (10-15 derece) açılarla çıkması nedeniyle özel bir el becerisi ve açı hassasiyeti gerektirir.",
      "Dr. Erdoğan yanak bölgesinde asla ikili veya üçlü greft kullanmaz; tamamen tekli köklerle son derece pürüzsüz ve doğal bir dağılım oluşturur.",
      "Ekim sonrasında sakallar ömür boyu kalıcı olarak uzar ve istenildiği gibi tıraş edilip taranabilir."
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(techniquesDataTr).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  const tech = techniquesDataTr[slug];
  if (!tech) return { title: "Teknik Bulunamadı" };

  return {
    title: `${tech.name} | Dr. Mehmet Erdoğan - Saç Ekim Doktoru`,
    description: tech.desc,
    keywords: [tech.name, "Dr Mehmet Erdogan", "Saç Ekim Doktoru", "İstanbul Saç Ekimi", "Smile Hair Clinic"],
  };
}

export default function TrTechniqueDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const tech = techniquesDataTr[slug];

  if (!tech) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale="tr" />

      {/* Hero Header */}
      <section className="bg-white py-16 border-b border-[#415e79]/20 relative overflow-hidden">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-widest text-[#415e79] font-extrabold block mb-2">
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
                  href="/tr/graft-calculator"
                  className="px-8 py-4 rounded-xl bg-[#0e263f] hover:bg-[#173656] text-white font-extrabold text-base shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                >
                  <Sparkle weight="bold" className="w-5 h-5 text-white" />
                  <span>{tech.name} Greft İhtiyacınızı Hesaplayın</span>
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
                  Dr. Mehmet Erdoğan Cerrahi Denetiminde
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
              <span className="text-xs text-[#415e79] font-bold block">Ekim Hızı</span>
              <span className="font-extrabold text-[#0e263f] text-lg">{tech.graftsPerHour}</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#415e79]/20 shadow-sm text-center">
              <Clock weight="bold" className="w-6 h-6 text-[#415e79] mx-auto mb-2" />
              <span className="text-xs text-[#415e79] font-bold block">İyileşme Süresi</span>
              <span className="font-extrabold text-[#0e263f] text-lg">{tech.recoveryTime}</span>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#415e79]/20 shadow-sm text-center">
              <Shield weight="bold" className="w-6 h-6 text-[#0e263f] mx-auto mb-2" />
              <span className="text-xs text-[#415e79] font-bold block">En Uygun Profil</span>
              <span className="font-extrabold text-[#0e263f] text-lg">{tech.bestFor}</span>
            </div>
          </div>

          {/* Key Advantages */}
          <div className="bg-white rounded-3xl p-8 border border-[#415e79]/20 shadow-lg mb-12">
            <h3 className="font-heading text-2xl font-extrabold text-[#0e263f] mb-6">
              {tech.name} Önemli Cerrahi Avantajları
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

      <ConsultationSection locale="tr" />
      <Footer locale="tr" />
    </main>
  );
}
