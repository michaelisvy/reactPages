const participantSessionList: Session[] = [
  {
   id: 14,
   date: "04 November 2024 - Monday evening",
   sessionType: "Climate Fresk",
   host: "Babilou offices - Alexandra Road",
   url: "https://association.climatefresk.org/training_sessions/4e17d74b-36a7-4adc-a850-6baac5cabb88/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
   id: 15,
   date: "04 November 2024 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "The Hive - Carpenter Street",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-tickets-862589377047?aff=oddtdtcreator",
   },
   {
   id: 16,
   date: "06 November 2024 - Wednesday evening",
   sessionType: "2 Tonnes",
   host: "Chemistry offices - Jalan Pinang",
   url: "https://www.eventbrite.sg/e/2tonnes-workshop-chemistry-singapore-tickets-936348151527",
   },
   {
   id: 17,
   date: "06 November 2024 - Wednesday evening",
   sessionType: "Biodiversity Collage",
   host: "Amoy Street - Finergreen office",
   url: "https://www.eventbrite.sg/e/biodiversity-collage-crane-tickets-819928978647?aff=oddtdtcreator",
   },
  {
   id: 18,
   date: "07 November 2024 - Thursday evening",
   sessionType: "Mobility Collage",
   host: "The Hive - Carpenter Street",
   url: "https://www.eventbrite.com/e/mobility-collage-public-workshop-singapore-tickets-991488407517",
   },
   {
   id: 19,
   date: "11 November 2024 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "Online",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 20,
   date: "05 November 2024 - Tuesday evening",
   sessionType: "Digital Collage",
   host: "Viseo offices - Cecil Street",
   url: "https://www.billetweb.fr/asia-pacific-digital-collage",
  },
  {
   id: 21,
   date: "03 December 2024 - Tuesday evening",
   sessionType: "Digital Collage",
   host: "Viseo offices - Cecil Street",
   url: "https://www.billetweb.fr/asia-pacific-digital-collage",
   },
  {
   id: 22,
   date: "04 December 2024 - Wednesday evening",
   sessionType: "2 Tonnes",
   host: "Chemistry offices - Jalan Pinang",
   url: "https://www.eventbrite.sg/e/2tonnes-workshop-chemistry-singapore-tickets-936348151527",
   },
  {
   id: 23,
   date: "05 December 2024 - Thursday evening",
   sessionType: "Mobility Collage",
   host: "The Hive - Carpenter Street",
   url: "https://www.eventbrite.com/e/mobility-collage-public-workshop-singapore-tickets-991488407517",
   },
  {
   id: 24,
   date: "09 December 2024 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "The Hive - Carpenter Street",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-tickets-862589377047?aff=oddtdtcreator",
   },
   {
   id: 25,
   date: "16 December 2024 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "Online",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
];

const instructorSessionList: Session[] = [
  {  
   id: 34,
   date: "9 November 2024 - 2PM",
   sessionType: "2tonnes Facilitation Training",
   host: "Dan's place - Faber Crest",
   url: "https://www.eventbrite.fr/e/2tonnes-world-version-training-in-singapore-in-english-tickets-1054668524949",
  },
  {
   id: 35,
   date: "11 November 2024 - Monday evening",
   sessionType: "Climate Fresk Training",
   host: "Genius Central - Telok Ayer",
   url: "https://association.climatefresk.org/training_sessions/f4405351-2ed8-4fe4-8cd8-1dd675a28bd2/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  },
  {
   id: 36,
   date: "09 December 2024 - Monday evening",
   sessionType: "Climate Fresk Training",
   host: "Genius Central - Telok Ayer",
   url: "https://association.climatefresk.org/training_sessions/5dbee7ca-af1e-4c82-8bb6-a6495b226503/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
  }
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
