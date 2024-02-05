const participantSessionList: Session[] = [
   {
    id: 1,
    date: "05 February 2024 - Monday evening",
    sessionType: "Climate Fresk",
    host: "Babilou Offices - Alexandra Road",
    url: "https://association.climatefresk.org/training_sessions/ff4f72b2-029c-4adc-bab6-cf23bffc5a33/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
   id: 2,
    date: "06 February 2024 - Tuesday evening",
    sessionType: "Biodiversity Collage",
    host: "Crane - OUE Downtown",
    url: "https://www.eventbrite.com/e/biodiversity-collage-crane-tickets-816188310207?aff=oddtdtcreator",
  },
{
    id: 6,
    date: "10 February 2024 - Saturday afternoon",
    sessionType: "Climate Fresk",
    host: "NVPC Offices - Clarke Quay Central",
    url: "https://association.climatefresk.org/training_sessions/1e919f43-6c74-4d34-b276-71fe903e7932/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 7,
    date: "20 February 2024 - Tuesday evening",
    sessionType: "Digital Collage",
    host: "Online",
    url: "https://www.billetweb.fr/asia-pacific-digital-collage",
  },
   {
    id: 8,
    date: "27 February 2024 - Tuesday evening",
    sessionType: "Digital Collage",
    host: "Viseo offices - Cecil Street",
    url: "https://www.billetweb.fr/asia-pacific-digital-collage",
  },
 {
    id: 9,
    date: "04 March 2024 - Monday evening",
    sessionType: "Climate Fresk",
    host: "Babilou Offices - Alexandra Road",
    url: "https://association.climatefresk.org/training_sessions/bed654fe-16b8-42d2-b5ed-83ce08cbf517/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 10,
    date: "20 February 2024 - Tuesday evening",
    sessionType: "Digital Collage",
    host: "Online",
    url: "https://www.billetweb.fr/asia-pacific-digital-collage",
  },
   {
    id: 11,
    date: "20 February 2024 - Tuesday evening",
    sessionType: "2tonnes",
    host: "Chemistry - Bugis",
    url: "https://www.eventbrite.sg/e/2tonnes-world-in-singapore-chemistry-office-singapore-english-tickets-782042960547",
  },
   {
    id: 12,
    date: "14 March 2024 - Wednesday evening",
    sessionType: "Biodiversity Collage",
    host: "Online",
    url: "TBD",
  },
   {
    id: 13,
    date: "16 March 2024 - Saturday afternoon",
    sessionType: "Climate Fresk",
    host: "Palo IT - Beach Road",
    url: "https://association.climatefresk.org/training_sessions/874130a4-6183-44db-8152-90ff14231cdf/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 14,
    date: "16 March 2024 - Saturday afternoon",
    sessionType: "2tonnes",
    host: "Palo IT - Beach Road",
    url: "https://www.eventbrite.sg/e/2tonnes-world-in-singapore-palo-it-office-singapore-english-tickets-782041857247",
    },
   {
    id: 15,
    date: "19 March 2024 - Tuesday evening",
    sessionType: "2tonnes",
    host: "Chemistry - Bugis",
    url: "https://www.eventbrite.sg/e/2tonnes-world-in-singapore-chemistry-office-singapore-english-tickets-782042960547",
  },
   {
    id: 16,
    date: "01 April 2024 - Monday evening",
    sessionType: "Climate Fresk",
    host: "Babilou Family - Alexandra Road",
    url: "https://association.climatefresk.org/training_sessions/1d2225ea-07d3-4c03-bf3a-53ca3154c79d/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
];



const instructorSessionList: Session[] = [
  {
     id: 31,
    date: "06 February 2024 - Wednesday evening",
    sessionType: "Digital Collage Training",
    host: "Zenika offices - BS Center",
    url: "https://www.billetweb.fr/training-asia-pacific-digital-collage",
  },
   {
    id: 32,
    date: "12 February 2024 - Monday evening",
    sessionType: "Climate Fresk Training",
    host: "Genius Central - Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/7c3b8c10-aec9-4ee7-8d5f-3ee24a7d3954/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {id: 33,
    date: "21 February 2024 - Wednesday evening",
    sessionType: "Digital Collage Training",
    host: "Online",
    url: "https://www.billetweb.fr/training-asia-pacific-digital-collage",
  },
   {
    id: 34,
    date: "26 February 2024 - Monday evening",
    sessionType: "Climate Fresk Training",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/21454b18-64ad-4698-b9ac-ff3508e4d720/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 35,
    date: "27 February 2024 - Tuesday evening",
    sessionType: "2tonnes Training",
    host: "WeWork - Robinson Road",
    url: "https://www.eventbrite.sg/e/2tonnes-world-version-training-in-singapore-in-english-tickets-799715860667",
  },
   {
    id: 36,
    date: "11 March 2024 - Monday evening",
    sessionType: "Climate Fresk Training",
    host: "Genius Central - Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/d39272dc-ca22-4a41-a889-d76b6da4e6cc/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 37,
    date: "25 March 2024 - Monday evening",
    sessionType: "Climate Fresk Training",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/1f81fe62-dede-48fd-bd3c-7fb106f8bfb8/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
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
