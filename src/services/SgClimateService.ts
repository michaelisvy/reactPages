const participantSessionList: Session[] = [
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
    id: 29,
    date: "06 November 2023 (Monday evening)",
    sessionType: "Digital Collage Training",
    host: "Zenika Offices - BS Bendemeer Centre 3/F",
    url: "https://www.billetweb.fr/training-asia-pacific-digital-collage",
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
