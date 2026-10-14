import React from "react";
import Link from "next/link";
import { ArrowRight01Icon } from "hugeicons-react";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  // Construct Schema.org BreadcrumbList JSON-LD
  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.href.startsWith("http")
        ? item.href
        : `https://drmehmeterdogan.com${item.href}`,
    })),
  };

  return (
    <>
      {/* Schema.org BreadcrumbList JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />

      {/* Visible Navigation Trail */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center flex-wrap gap-1.5 text-xs text-[#415e79] font-semibold mb-3 ${className}`}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;

          return (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <ArrowRight01Icon
                  size={12}
                  strokeWidth={2}
                  className="text-slate-400 shrink-0 mx-0.5"
                />
              )}
              {isLast ? (
                <span
                  aria-current="page"
                  className="text-[#0e263f] font-bold truncate max-w-[240px] sm:max-w-none"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-[#0e263f] transition-colors hover:underline underline-offset-2"
                >
                  {item.name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
}
