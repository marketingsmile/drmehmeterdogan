"use client";

import { useState } from "react";
import { Question, CaretDown } from "@phosphor-icons/react";
import { getDictionary, Locale } from "@/lib/dictionary";

interface FaqSectionProps {
  locale: Locale;
}

export default function FaqSection({ locale }: FaqSectionProps) {
  const dict = getDictionary(locale);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e263f] tracking-tight mb-4">
            {dict.faq.title}
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium">
            {dict.faq.description}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {dict.faq.items.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-[#0e263f] bg-slate-50 shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0e263f] text-base sm:text-lg focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-[#0e263f] font-heading font-extrabold text-sm">
                      0{idx + 1}.
                    </span>
                    <span>{item.q}</span>
                  </span>
                  <CaretDown
                    weight="bold"
                    className={`w-5 h-5 text-[#0e263f] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200 font-medium">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
