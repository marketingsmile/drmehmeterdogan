// Single source of truth for all contact channels, links, and clinic address

export interface ContactInfo {
  phoneDisplay: string;
  phoneRaw: string;
  telHref: string;
  whatsappHref: string;
  email: string;
  mailHref: string;
  clinicName: string;
  clinicAddress: string;
  clinicAddressShort: string;
  consultationDesk: string;
  workingHoursEn: string;
  workingHoursTr: string;
}

export const CONTACT_INFO: ContactInfo = {
  phoneDisplay: "+90 (532) 123 45 67",
  phoneRaw: "+905321234567",
  telHref: "tel:+905321234567",
  whatsappHref: "https://wa.me/905321234567",
  email: "info@drmehmeterdogan.com",
  mailHref: "mailto:info@drmehmeterdogan.com",
  clinicName: "Smile Hair Clinic",
  clinicAddress: "Tatlısu Mah. Arif Ay Sok. No:3/1, 34774 Ümraniye / İstanbul, Turkey",
  clinicAddressShort: "Tatlısu Mah. Arif Ay Sok. No:3/1, Ümraniye / İstanbul",
  consultationDesk: "Dr. Mehmet Erdoğan Medical Practice",
  workingHoursEn: "Mon - Sat: 08:30 - 18:30 (GMT+3)",
  workingHoursTr: "Pzt - Cmt: 08:30 - 18:30 (GMT+3)",
};
