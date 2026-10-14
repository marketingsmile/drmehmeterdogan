"use client";

import React, { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
  defaultOpenIndex?: number | null;
}

export default function FaqAccordion({
  items,
  className = "",
  defaultOpenIndex = 0,
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const answerId = `faq-answer-${idx}`;
        const buttonId = `faq-button-${idx}`;

        return (
          <div
            key={idx}
            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-[#0e263f] bg-slate-50 shadow-sm"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                onClick={() => toggleFaq(idx)}
                aria-expanded={isOpen}
                aria-controls={answerId}
                className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[#0e263f] text-base sm:text-lg focus:outline-none cursor-pointer"
              >
                <span className="flex items-center gap-3">
                  <span className="text-[#0e263f] font-heading font-extrabold text-sm shrink-0">
                    {idx < 9 ? `0${idx + 1}.` : `${idx + 1}.`}
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
            </h3>

            {/* Always present in server-rendered DOM for SEO & LLM crawlers */}
            <div
              id={answerId}
              role="region"
              aria-labelledby={buttonId}
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 sm:px-6 pb-6 pt-2 text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-200 font-medium">
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
