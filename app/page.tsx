import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BbcDocumentarySection from "@/components/BbcDocumentarySection";
import DoctorProfile from "@/components/DoctorProfile";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GraftCalculator from "@/components/GraftCalculator";
import PatientJourney from "@/components/PatientJourney";
import VideoMediaSection from "@/components/VideoMediaSection";
import PackagesGrid from "@/components/PackagesGrid";
import FaqSection from "@/components/FaqSection";
import ConsultationSection from "@/components/ConsultationSection";
import Footer from "@/components/Footer";

export default function EnglishHomePage() {
  const locale = "en";

  return (
    <main className="min-h-screen bg-[#ededed] text-[#0e263f] flex flex-col">
      <Navbar locale={locale} />
      <Hero locale={locale} />
      <BbcDocumentarySection locale={locale} />
      <DoctorProfile locale={locale} />
      <BeforeAfterSlider locale={locale} />
      <GraftCalculator locale={locale} />
      <PatientJourney locale={locale} />
      <VideoMediaSection locale={locale} />
      <PackagesGrid locale={locale} />
      <FaqSection locale={locale} />
      <ConsultationSection locale={locale} />
      <Footer locale={locale} />
    </main>
  );
}
