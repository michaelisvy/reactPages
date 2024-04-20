const participantSessionList: Session[] = [
   {
    id: 1,
    date: "24 April 2024 - Wednesday evening",
    sessionType: "Climate Marathon - all workshops available",
    host: "Singapore Sustainability Academy - City Square Mall",
    url: "https://www.eventbrite.sg/e/climate-marathon-to-celebrate-earth-week-tickets-877198322797?aff=oddtdtcreator",
  },
   {
    id: 2,
    date: "8 May 2024 - Wednesday evening",
    sessionType: "Biodiversity Collage",
    host: "Crane - OUE Downtown Gallery",
    url: "https://www.eventbrite.com/e/biodiversity-collage-crane-tickets-819928978647",
    },
  {
    id: 3,
    date: "28 May 2024 - Tuesday evening",
    sessionType: "Biodiversity Collage",
    host: "Singapore Sustainability Academy - City Square Mall",
    url: "https://www.eventbrite.sg/e/lets-celebrate-world-biodiversity-day-biodiversity-collage-tickets-886527215767",
  },
     {
    id: 4,
    date: "4 June 2024 - Tuesday evening",
    sessionType: "Biodiversity Collage",
    host: "Crane - OUE Downtown Gallery",
    url: "https://www.eventbrite.com/e/biodiversity-collage-crane-tickets-819928978647",
    },
];

const instructorSessionList: Session[] = [
  {
    id: 31,
    date: "11 March 2024 - Monday evening",
    sessionType: "Climate Fresk Training",
    host: "Genius Central - Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/d39272dc-ca22-4a41-a889-d76b6da4e6cc/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
   {
    id: 36,
    date: "15 April 2024 - Monday evening",
    sessionType: "Climate Fresk Training",
    host: "Genius Central - Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/2678b794-3297-43ab-b486-43e168495831/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
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
