const sessionList: Session[] = [
  {
    id: 1,
    date: "24 July 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/aaa9392c-5617-4f08-b11b-588a16930482/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 2,
    date: "24 July 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/aaa9392c-5617-4f08-b11b-588a16930482/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 3,
    date: "25 July 2023 (Tuesday evening)",
    sessionType: "Digital Collage Training",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/bf7bb6c1-3ef5-426d-99ca-c95bcc807d75/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 4,
    date: "21 August 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "Genius Central Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/bf7bb6c1-3ef5-426d-99ca-c95bcc807d75/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 5,
    date: "19 August 2023 (Saturday)",
    sessionType: "Climate Fresk",
    host: "	Palo IT",
    url: "https://association.climatefresk.org/session_invitations/89e74481-fa04-44ee-a8ee-9cd8c52ee02e",
  },
  {
    id: 6,
    date: "28 August 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "	Online",
    url: "https://association.climatefresk.org/training_sessions/48214008-7ee0-4b30-9223-32e7474a890c/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 7,
    date: "28 August 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "	Online",
    url: "https://association.climatefresk.org/training_sessions/53daf159-36f3-4c2f-b759-518901219203/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 8,
    date: "05 September 2023 (Monday evening)",
    sessionType: "Biodiversity Collage",
    host: "L'Oréal Offices - One Raffles Quay",
    url: "https://www.eventbrite.com/e/biodiversity-collage-loreal-singapore-tickets-658117395847?aff=oddtdtcreator",
  },
  {
    id: 9,
    date: "11 September 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "Genius Central Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/93578aef-cfe6-478b-9e4b-e64de8c0344d/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 10,
    date: "11 September 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Babilou Family - Alexandra Rd",
    url: "https://association.climatefresk.org/training_sessions/93b312d7-c2b6-4887-9dc8-25be02a09a89/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 11,
    date: "19 September 2023 (Tuesday evening)",
    sessionType: "Climate Fresk",
    host: "	NVPC - Clarke Quay central",
    url: "https://association.climatefresk.org/training_sessions/4b3c5b80-db6c-4d2b-9c8b-e93155bec78a/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 12,
    date: "25 September 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "	Online",
    url: "https://association.climatefresk.org/training_sessions/39abc77b-2379-4dc1-a9c7-6a08f015753c/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 13,
    date: "25 September 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "	Online",
    url: "https://association.climatefresk.org/training_sessions/1f5b567c-def5-437d-8ef8-ef333c1cfa66/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 14,
    date: "05 October 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Babilou Family - Alexandra Rd",
    url: "https://association.climatefresk.org/training_sessions/7fca2fc7-8831-435b-ba56-d43b83c33fae/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 15,
    date: "03 October 2023 (Monday evening)",
    sessionType: "Biodiversity Collage",
    host: "L'Oréal Offices - One Raffles Quay",
    url: "https://www.eventbrite.com/e/biodiversity-collage-loreal-singapore-tickets-658117395847?aff=oddtdtcreator",
  },
 
];

export function getSessionList() {
  return sessionList;
}

export function getSession(sessionId: number) {
  return sessionList.find((item) => item.id === sessionId);;
}

export interface Session {
    id: number;
    date: string;
    sessionType: string;
    host: string;
    url: string;
  }
