"use client";

import React, { useState } from "react";
import { CaretDown, ListBullets } from "@phosphor-icons/react";

export interface TocItem {
  id: string;
  label: string;
}

export interface TableOfContentsProps {
  items: TocItem[];
  title?: string;
  className?: string;
}

export default function TableOfContents({
  items,
  title = "Table of Contents",
  className = "",
}: TableOfContentsProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!items || items.length === 0) return null;

  return (
    <nav
      aria-label="Table of Contents"
      className={`rounded-2xl bg-white border border-slate-200/90 shadow-sm p-4 sm:p-5 ${className}`}
    >
      {/* Mobile Toggle Button */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between font-heading font-extrabold text-sm text-[#0e263f] focus:outline-none cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <ListBullets weight="bold" className="w-4 h-4 text-[#415e79]" />
            <span>{title}</span>
          </span>
          <CaretDown
            weight="bold"
            className={`w-4 h-4 text-[#415e79] transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileOpen && (
          <ol className="mt-3 pt-3 border-t border-slate-100 space-y-2 text-xs font-semibold text-slate-700">
            {items.map((item, idx) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className="block py-1 hover:text-[#0e263f] hover:underline transition-colors"
                >
                  <span className="text-[#415e79] mr-1.5 font-bold">{idx + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* Desktop Sticky View */}
      <div className="hidden lg:block">
        <div className="flex items-center gap-2 font-heading font-extrabold text-sm text-[#0e263f] mb-3 pb-2.5 border-b border-slate-100">
          <ListBullets weight="bold" className="w-4 h-4 text-[#415e79]" />
          <span>{title}</span>
        </div>

        <ol className="space-y-2 text-xs font-medium text-slate-700">
          {items.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="block py-1 text-slate-600 hover:text-[#0e263f] hover:font-bold transition-all border-l-2 border-transparent hover:border-[#0e263f] pl-2 -ml-2"
              >
                <span className="text-[#415e79] font-bold mr-1">{idx + 1}.</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
