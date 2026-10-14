import { getDictionary, Locale } from "@/lib/dictionary";
import { SectionHeader, FaqAccordion } from "@/components/shared";

interface FaqSectionProps {
  locale: Locale;
}

export default function FaqSection({ locale }: FaqSectionProps) {
  const dict = getDictionary(locale);

  return (
    <section id="faq" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title={dict.faq.title}
          subtitle={dict.faq.description}
          align="center"
        />

        {/* Server-Rendered Accessible FAQ Accordion */}
        <FaqAccordion items={dict.faq.items} defaultOpenIndex={0} />
      </div>
    </section>
  );
}
