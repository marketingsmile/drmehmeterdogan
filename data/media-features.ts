export const mediaFeatures = [
  {
    id: "bbc",
    outlet: "BBC",
    country: "United Kingdom",
    countryCode: "GB",
    year: 2021,
    videoId: "49hX6q5mpV4",
    duration: "PT13M3S",
    durationLabel: "13:03",
    uploadDate: "2021-02-05",
    title: "BBC Featured Documentary on Smile Hair Clinic",
    text: "The BBC chose Smile Hair Clinic, co-founded by Dr. Mehmet Erdoğan, for its documentary on hair transplantation and medical tourism in Istanbul. The film follows UK patient Paul Readman from his first worries about a receding hairline to his consultation and planning with Dr. Mehmet Erdoğan and Dr. Gökay Bilgin, the procedure itself, and his progress at one, four and nine months.",
    highlights: ["BBC Selected Medical Tourism Feature", "Consultation with Dr. Mehmet Erdoğan", "Paul Readman's Nine-Month Progress", "Independent Broadcaster Footage"],
    sourceUrl: "https://www.youtube.com/watch?v=JKdorI9o2rg",
    sourceLabel: "View the original on the BBC channel"
  },
  {
    id: "abc-news-nightline",
    outlet: "ABC News Nightline",
    country: "United States",
    countryCode: "US",
    year: 2024,
    videoId: "rwM4BDBPLsM",
    duration: "PT7M49S",
    durationLabel: "7:49",
    uploadDate: "2024-03-02",
    title: "ABC News Nightline Documentary on Hair Transplants in Turkey",
    text: "ABC News' Nightline followed American patient Brian Courter from the first signs of his hair loss to his consultation and surgery at Smile Hair Clinic in Istanbul, the clinic co-founded by Dr. Mehmet Erdoğan. The programme returns to Brian a year later to show his result and looks at why so many patients now travel to Türkiye for hair restoration.",
    highlights: ["ABC News Nightline Feature", "US Patient Journey", "One-Year Result Follow-Up", "Independent Broadcaster Footage"],
    sourceUrl: "https://abcnews.go.com/Nightline/video/men-heading-turkey-cure-baldness-safe-107439511",
    sourceLabel: "View the original on ABC News"
  },
  {
    id: "abc-australia",
    outlet: "ABC Australia",
    country: "Australia",
    countryCode: "AU",
    year: 2024,
    videoId: "2OytG3sEOVo",
    duration: "PT6M41S",
    durationLabel: "6:41",
    uploadDate: "2024-05-16",
    title: "ABC Australia Inside Look at Hair Transplants in Turkey",
    text: "The Australian Broadcasting Corporation documented patient Payman, whose family has a long history of hair loss, as he travelled to Istanbul for surgery at Smile Hair Clinic. The film also captures procedures led by Dr. Mehmet Erdoğan and explains why choosing an experienced surgical team matters.",
    highlights: ["Australian Broadcasting Corporation", "Australian Patient Journey", "Inside the Operating Room", "Independent Broadcaster Footage"]
  },
  {
    id: "nrk-norway",
    outlet: "NRK",
    country: "Norway",
    countryCode: "NO",
    year: 2019,
    videoId: "XH9OP__TU8M",
    duration: "PT4M40S",
    durationLabel: "4:40",
    uploadDate: "2019-01-28",
    title: "NRK TV Norway Feature on Smile Hair Clinic",
    text: "Norway's national broadcaster NRK filmed Norwegian patient Benjamin during his hair transplant at Smile Hair Clinic in Istanbul, giving Scandinavian viewers an unfiltered look at the procedure day inside the clinic.",
    highlights: ["Norway's National Broadcaster", "Norwegian Patient Journey", "Procedure Day Footage", "Independent Broadcaster Footage"]
  }
] as const;

export type MediaFeature = (typeof mediaFeatures)[number];
