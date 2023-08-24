const participantSessionList: Session[] = [
  {
    id: 9,
    date: "05 September 2023 (Monday evening)",
    sessionType: "Biodiversity Collage",
    host: "L'Oréal Offices - One Raffles Quay",
    url: "https://www.eventbrite.com/e/biodiversity-collage-loreal-singapore-tickets-658117395847?aff=oddtdtcreator",
  },
  {
    id: 11,
    date: "11 September 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Babilou Family - Alexandra Rd",
    url: "https://association.climatefresk.org/training_sessions/93b312d7-c2b6-4887-9dc8-25be02a09a89/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 12,
    date: "12 September 2023 (Monday evening)",
    sessionType: "Digital Collage",
    host: "Viseo - Cecil Street",
    url: "https://www.eventbrite.sg/e/the-digital-collage-workshop-singapore-tickets-396945513717?aff=oddtdtcreator",
  },
  {
    id: 13,
    date: "16 September 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Palo IT - Beach Road",
    url: "https://association.climatefresk.org/training_sessions/faf75f94-eda1-4638-bd29-1ed06219143c/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 14,
    date: "19 September 2023 (Tuesday evening)",
    sessionType: "2tonnes",
    host: "Chemistry Office - Bugis",
    url: "https://www.eventbrite.sg/e/2tonnes-workshop-chemistry-singapore-tickets-559180803837",
  },
  {
    id: 15,
    date: "19 September 2023 (Tuesday evening)",
    sessionType: "Climate Fresk",
    host: "	NVPC - Clarke Quay central",
    url: "https://association.climatefresk.org/training_sessions/4b3c5b80-db6c-4d2b-9c8b-e93155bec78a/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 155,
    date: "23 September 2023 (Saturday morning)",
    sessionType: "Biodiversity Collage",
    host: "National Design Center",
    url: "https://www.eventbrite.sg/e/biodiversity-collage-with-climate-designers-tickets-665801278547",
  },
  {
    id: 16,
    date: "25 September 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "	Online",
    url: "https://association.climatefresk.org/training_sessions/39abc77b-2379-4dc1-a9c7-6a08f015753c/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 20,
    date: "03 October 2023 (Tuesday evening)",
    sessionType: "Biodiversity Collage",
    host: "L'Oréal Offices - One Raffles Quay",
    url: "https://www.eventbrite.com/e/biodiversity-collage-loreal-singapore-tickets-658117395847?aff=oddtdtcreator",
  },
  {
    id: 21,
    date: "09 October 2023 (Monday evening)",
    sessionType: "Climate Fresk",
    host: "Babilou Family - Alexandra Rd",
    url: "https://association.climatefresk.org/training_sessions/7fca2fc7-8831-435b-ba56-d43b83c33fae/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 22,
    date: "17 October 2023 (Monday evening)",
    sessionType: "Digital Collage",
    host: "Viseo - Cecil Street",
    url: "https://www.eventbrite.sg/e/the-digital-collage-workshop-singapore-tickets-396945513717?aff=oddtdtcreator",
  },
  {
    id: 23,
    date: "17 October 2023 (Tuesday evening)",
    sessionType: "2tonnes",
    host: "Chemistry Office - Bugis",
    url: "https://www.eventbrite.sg/e/2tonnes-workshop-chemistry-singapore-tickets-559180803837",
  },
];

const instructorSessionList: Session[] = [
  {
    id: 8,
    date: "28 August 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "Online",
    url: "https://association.climatefresk.org/training_sessions/53daf159-36f3-4c2f-b759-518901219203/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 10,
    date: "11 September 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "Genius Central Telok Ayer",
    url: "https://association.climatefresk.org/training_sessions/93578aef-cfe6-478b-9e4b-e64de8c0344d/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 17,
    date: "25 September 2023 (Monday evening)",
    sessionType: "Climate Fresk Training",
    host: "	Online",
    url: "https://association.climatefresk.org/training_sessions/1f5b567c-def5-437d-8ef8-ef333c1cfa66/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
    id: 18,
    date: "27 September 2023 (Monday evening)",
    sessionType: "Digital Collage Training",
    host: "	Online",
    url: "https://www.billetweb.fr/online-training-english-digital-collage&multi=u84999&view=calendar&margin=no_margin&color=0A99D1&parent=1&session=7065244&calendar=1&from_multi=1",
  },
  {
    id: 19,
    date: "02 October 2023 (Monday evening)",
    sessionType: "Digital Collage Training",
    host: "Zenika Offices - BS Bendemeer Centre 3/F ",
    url: "https://www.billetweb.fr/training-english-digital-collage&multi=u84999&view=calendar&margin=no_margin&color=0A99D1&parent=1&session=7065217&calendar=1&from_multi=1",
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
