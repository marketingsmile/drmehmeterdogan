import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Mehmet Erdoğan | World-Renowned Hair Transplant Doctor in Istanbul",
  description: "Official web application of Dr. Mehmet Erdoğan, premier Hair Transplant Doctor in Istanbul, co-founder of Smile Hair Clinic & President of SAÇREHDER. Offering Sapphire FUE, DHI, Unshaven Hair Transplants.",
  keywords: ["Hair Transplant Doctor", "Dr Mehmet Erdogan", "Hair Transplant Doctor Istanbul", "Smile Hair Clinic", "Sapphire FUE", "DHI Hair Transplant", "Istanbul Hair Clinic", "SAÇREHDER"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-50 text-[#131b2e]">
        {children}
      </body>
    </html>
  );
}
