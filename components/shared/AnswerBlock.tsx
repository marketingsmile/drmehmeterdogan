import React from "react";

export interface AnswerBlockProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * AnswerBlock provides a styled, semantic callout for the first paragraph
 * directly beneath an H2 question/heading, engineered for direct AI Overview / LLM citation.
 */
export default function AnswerBlock({ children, className = "" }: AnswerBlockProps) {
  return (
    <div
      className={`my-4 pl-4 sm:pl-5 py-2 border-l-4 border-l-[#0e263f] bg-slate-50/80 rounded-r-xl ${className}`}
    >
      <p className="text-[#0e263f] text-base sm:text-[17px] font-semibold leading-relaxed">
        {children}
      </p>
    </div>
  );
}
