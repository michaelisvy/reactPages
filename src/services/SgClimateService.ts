const participantSessionList: Session[] = [
  {
    id: 19,
    date: "09 October 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Babilou Family - Alexandra Rd",
    url: "https://association.climatefresk.org/training_sessions/7fca2fc7-8831-435b-ba56-d43b83c33fae/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 20,
    date: "14 October 2023 (Saturday afternoon)",
    sessionType: "Climate Fresk",
    host: "Palo IT Offices - Beach Rd",
    url: "https://association.climatefresk.org/training_sessions/7fca2fc7-8831-435b-ba56-d43b83c33fae/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 21,
    date: "17 October 2023 (Tuesday evening)",
    sessionType: "Digital Collage",
    host: "Viseo - Cecil Street",
    url: "https://www.eventbrite.sg/e/the-digital-collage-workshop-singapore-tickets-396945513717?aff=oddtdtcreator",
  },
  {
    id: 22,
    date: "17 October 2023 (Tuesday evening)",
    sessionType: "2tonnes",
    host: "Chemistry Office - Bugis",
    url: "https://www.eventbrite.sg/e/2tonnes-workshop-chemistry-singapore-tickets-559180803837",
  },
   {
    id: 23,
    date: "24 October 2023 (Tuesday evening)",
    sessionType: "Digital Collage",
    host: "Online",
    url: "https://www.billetweb.fr/asia-pacific-digital-collage",
  },
  {
    id: 24,
    date: "30 October 2023 (Tuesday evening)",
    sessionType: "Climate Fresk",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/98551a7e-52eb-4627-a790-875a41d0ef2d/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 25,
    date: "06 November 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Babilou Family - Alexandra Rd",
    url: "https://association.climatefresk.org/training_sessions/a4ba3683-bf51-463e-81f1-62062a4b0be1/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 26,
    date: "07 November 2023 (Tuesday evening)",
    sessionType: "Biodiversity Collage",
    host: "L'Oréal Offices - One Raffles Quay",
    url: "https://www.eventbrite.com/e/biodiversity-collage-loreal-singapore-tickets-658117395847?aff=oddtdtcreator",
  },
];

const instructorSessionList: Session[] = [
  {
    id: 27,
    date: "27 September 2023 (Wednesday evening)",
    sessionType: "Digital Collage Training",
    host: "	Online",
    url: "https://www.billetweb.fr/online-training-english-digital-collage&multi=u84999&view=calendar&margin=no_margin&color=0A99D1&parent=1&session=7065244&calendar=1&from_multi=1",
  },
  {
    id: 28,
    date: "02 October 2023 (Monday evening)",
    sessionType: "Digital Collage Training",
    host: "Zenika Offices - BS Bendemeer Centre 3/F ",
    url: "https://www.billetweb.fr/training-english-digital-collage&multi=u84999&view=calendar&margin=no_margin&color=0A99D1&parent=1&session=7065217&calendar=1&from_multi=1",
  },
  {
    id: 29,
    date: "06 November 2023 (Monday evening)",
    sessionType: "Digital Collage Training",
    host: "Zenika Offices - BS Bendemeer Centre 3/F",
    url: "https://www.billetweb.fr/training-asia-pacific-digital-collage",
  },
   {
    id: 30,
    date: "16 October 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "Genius Central - Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/aa0111ba-f588-4493-a497-b6ac7c7d403b/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 31,
    date: "23 October 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/4eb699df-26b1-4cf9-abf4-a6ed96a1e22e/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 32,
    date: "13 November 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "Genius Central - Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/6b19a5af-2f34-4ebe-81b3-2413ec1613c8/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 33,
    date: "15 November 2023 (Monday evening)",
    sessionType: "Digital Collage Training",
    host: "Online",
    url: "https://www.billetweb.fr/training-asia-pacific-digital-collage",
  },
]

export function getParticipantSessionList() {
  return participantSessionList;
}

export function getInstructorSessionList() {
  return instructorSessionList;
}

export function getParticipantSession(sessionId: number) {
  return participantSessionList.find((item) => item.id === sessionId);
}

export function getSessionList(type: string) {
  const str2: string = "participant";
  console.log(type);
  console.log(str2);
  console.log(str2.toString() == "participant");
  if (type.toString() === "participant") {
    return getParticipantSessionList();
  } else if (type.toString() === "instructor") {
    return getInstructorSessionList();
  } else {
    throw new Error("unknown type");
  }
}

export interface Session {
  id: number;
  date: string;
  sessionType: string;
  host: string;
  url: string;
}
