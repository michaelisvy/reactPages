const participantSessionList: Session[] = [
   {
    id: 1,
    date: "18 November 2023 - Saturday morning",
    sessionType: "COP28 - Climate Fresk for Adults & Kids",
    host: "Accueil Singapour",
    url: "https://association.climatefresk.org/training_sessions/1d806844-86f3-451e-9de3-6fcfe113b6e9/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 2,
    date: "18 November 2023 - Saturday morning",
    sessionType: "COP28 Climate Marathon - Climate Fresk for Adults & Kids, 2 Tonnes, Biodiversity Collage, Digital Collage",
    host: "Ismaili CIVIC",
    url: "https://www.eventbrite.sg/e/climate-marathon-to-celebrate-cop28-tickets-749866038507?aff=oddtdtcreator",
  },
  {
    id: 3,
    date: "18 November 2023 - Saturday afternoon",
    sessionType: "COP28 Climate Marathon - Climate Fresk for Adults & Kids, 2 Tonnes, Biodiversity Collage, Digital Collage",
    host: "Palo IT",
    url: "https://www.eventbrite.sg/e/climate-marathon-to-celebrate-cop28-tickets-749811274707?aff=oddtdtcreator",
  },
   {
    id: 4,
    date: "25 November 2023 - Saturday afternoon",
    sessionType: "COP28 Climate Marathon - Climate Fresk for Adults & Kids, 2 Tonnes, Biodiversity Collage, Digital Collage",
    host: "National Volunteering and Philanthropy Centre",
    url: "https://www.eventbrite.sg/e/climate-marathon-to-celebrate-cop28-tickets-750258010907?aff=oddtdtcreator",
  },
{
    id: 5,
    date: "28 November 2023 - Tuesday evening",
    sessionType: "COP28 Climate Fresk with Panel",
    host: "Singapore Sustainability Academy - CDL",
    url: "https://association.climatefresk.org/training_sessions/b0d06fbe-84fb-4a17-8f1b-12eb2a5a557b/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
{
    id: 6,
    date: "04 December 2023 - Monday evening",
    sessionType: "Climate Fresk",
    host: "Babilou Family - Alexandra Road",
    url: "https://association.climatefresk.org/training_sessions/bd3879fb-138f-48d9-a56e-aebb7dc7517f/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
{
    id: 7,
    date: "05 December 2023 - Tuesday evening",
    sessionType: "Biodiversity Collage",
    host: "L'Oréal offices - Raffles Quay",
    url: "https://www.eventbrite.com/e/biodiversity-collage-loreal-singapore-tickets-658117395847",
  },
{
    id: 8,
    date: "05 December & 08 December 2023",
    sessionType: "COP28 Climate Marathon - Climate Fresk & Biodiversity Collage",
    host: "NUS Campus",
    url: "https://www.eventbrite.sg/e/climate-awareness-workshops-to-celebrate-cop28-tickets-755279530407?aff=oddtdtcreator",
  },
{
    id: 9,
    date: "11 December 2023 - Monday evening",
    sessionType: "Digital Collage",
    host: "Viseo offices - Cecil St",
    url: "https://www.eventbrite.sg/e/the-digital-collage-workshop-singapore-tickets-396945513717?aff=oddtdtcreator",
  },
{
    id: 10,
    date: "18 December 2023 - Monday evening",
    sessionType: "Climate Fresk",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/e5035044-bc82-4c1f-a882-9743dbb90ec2/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  }
];



const instructorSessionList: Session[] = [
  {
    id: 31,
    date: "13 November 2023 - Monday evening",
    sessionType: "Climate Fresk Training",
    host: "Genius Central - Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/6b19a5af-2f34-4ebe-81b3-2413ec1613c8/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 32,
    date: "15 November 2023 - Wednesday evening",
    sessionType: "Digital Collage Training",
    host: "Online",
    url: "https://www.billetweb.fr/training-asia-pacific-digital-collage",
  },
    {
    id: 33,
    date: "29 November 2023 - Wednesday evening",
    sessionType: "Digital Collage Training",
    host: "Zenika offices - Bendemeer",
    url: "https://www.billetweb.fr/training-asia-pacific-digital-collage",
  },
    {
    id: 34,
    date: "11 December 2023 - Monday evening",
    sessionType: "Climate Fresk Training",
    host: "Genius Central - Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/6b19a5af-2f34-4ebe-81b3-2413ec1613c8/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
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
