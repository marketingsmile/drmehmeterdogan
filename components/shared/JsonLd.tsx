import React from "react";

export interface FaqSchemaItem {
  q: string;
  a: string;
}

export interface VideoSchemaItem {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate?: string;
  duration?: string;
}

export interface JsonLdProps {
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  breadcrumbs?: { name: string; href: string }[];
  faqs?: FaqSchemaItem[];
  videos?: VideoSchemaItem[];
  procedureName?: string;
  procedureBodyLocation?: string;
  lastReviewedDate?: string;
}

export default function JsonLd({
  pageUrl = "https://drmehmeterdogan.com",
  pageTitle = "Dr. Mehmet Erdoğan | Hair Transplant Doctor Istanbul",
  pageDescription = "Official practice of Dr. Mehmet Erdoğan, Co-Founder of Smile Hair Clinic & President of SAÇREHDER.",
  breadcrumbs,
  faqs,
  videos,
  procedureName,
  procedureBodyLocation = "Scalp / Hairline",
  lastReviewedDate = "2026-10-14",
}: JsonLdProps) {
  const schemas: any[] = [];

  // 1. Physician / Medical Doctor Schema (Dr. Mehmet Erdoğan)
  const physicianSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://drmehmeterdogan.com/#physician",
    "name": "Dr. Mehmet Erdoğan",
    "jobTitle": "Hair Transplant Doctor & Co-Founder of Smile Hair Clinic",
    "image": "https://drmehmeterdogan.com/images/dr-mehmet-erdogan.webp",
    "url": "https://drmehmeterdogan.com",
    "telephone": "+90-532-123-4567",
    "email": "info@drmehmeterdogan.com",
    "medicalSpecialty": [
      "https://schema.org/PlasticSurgery",
      "https://schema.org/Dermatology"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tatlısu Mah. Arif Ay Sok. No:3/1",
      "addressLocality": "Ümraniye",
      "addressRegion": "İstanbul",
      "postalCode": "34774",
      "addressCountry": "TR"
    },
    "sameAs": [
      "https://www.qunomedical.com/en/dr-mehmet-erdogan-md",
      "https://us-uk.bookimed.com/doctor/mehmet-erdogan/",
      "https://www.realself.com/dr/mehmet-erdogan-istanbul-turkey",
      "https://mediglobus.com/doctors/dr-mehmet-erdogan/",
      "https://www.vaidam.com/doctors/dr-mehmet-erdogan",
      "https://www.belorens.com/doctor/mehmet-erdogan/",
      "https://www.provenexpert.com/tr-tr/smile-hair-transplant-clinic-istanbul/",
      "https://www.trustpilot.com/review/www.smilehairclinic.com",
      "https://www.youtube.com/@SmileHairClinic"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Yeditepe University Faculty of Medicine"
    },
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Hair Restoration Physicians Association (SAÇREHDER)"
      },
      {
        "@type": "Organization",
        "name": "FUE Europe"
      },
      {
        "@type": "Organization",
        "name": "World FUE Institute"
      }
    ]
  };
  schemas.push(physicianSchema);

  // 2. MedicalWebPage Schema
  const medicalWebPageSchema: any = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "url": pageUrl,
    "name": pageTitle,
    "description": pageDescription,
    "lastReviewed": lastReviewedDate,
    "reviewedBy": {
      "@type": "Physician",
      "@id": "https://drmehmeterdogan.com/#physician",
      "name": "Dr. Mehmet Erdoğan"
    }
  };
  schemas.push(medicalWebPageSchema);

  // 3. BreadcrumbList Schema (if provided)
  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.href.startsWith("http")
          ? item.href
          : `https://drmehmeterdogan.com${item.href}`
      }))
    };
    schemas.push(breadcrumbSchema);
  }

  // 4. FAQPage Schema (if faqs provided)
  if (faqs && faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };
    schemas.push(faqSchema);
  }

  // 5. MedicalProcedure Schema (if procedure provided)
  if (procedureName) {
    const procedureSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": procedureName,
      "bodyLocation": procedureBodyLocation,
      "procedureType": "https://schema.org/SurgicalProcedure",
      "performer": {
        "@type": "Physician",
        "@id": "https://drmehmeterdogan.com/#physician",
        "name": "Dr. Mehmet Erdoğan"
      }
    };
    schemas.push(procedureSchema);
  }

  // 6. VideoObject Schemas (if videos provided)
  if (videos && videos.length > 0) {
    videos.forEach((video) => {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": video.name.replace(/:/g, " -"),
        "description": video.description,
        "thumbnailUrl": [video.thumbnailUrl],
        "uploadDate": video.uploadDate || "2024-01-15T08:00:00+03:00",
        "embedUrl": `https://www.youtube-nocookie.com/embed/${video.id}`,
        "contentUrl": `https://www.youtube.com/watch?v=${video.id}`,
        "duration": video.duration || "PT8M30S"
      });
    });
  }

  return (
    <>
      {schemas.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
