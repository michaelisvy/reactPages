const participantSessionList: Session[] = [
  {
   id: 1,
   date: "03 December 2024 - Tuesday evening",
   sessionType: "Digital Collage",
   host: "Viseo offices - Cecil Street",
   url: "https://www.billetweb.fr/asia-pacific-digital-collage",
   },
  {
   id: 2,
   date: "04 December 2024 - Wednesday evening",
   sessionType: "2 Tonnes",
   host: "Chemistry offices - Jalan Pinang",
   url: "https://www.eventbrite.sg/e/2tonnes-workshop-chemistry-singapore-tickets-936348151527",
   },
  {
   id: 3,
   date: "04 December 2024 - Wednesday evening",
   sessionType: "Circular Economy Collage",
   host: "CEVA Logistics offices - Havelock Road",
   url: "https://www.eventbrite.sg/e/circular-economy-collage-singapore-tickets-1052323426697?aff=erelexpmlt",
   },
  {
   id: 4,
   date: "05 December 2024 - Thursday evening",
   sessionType: "Mobility Collage",
   host: "The Hive - Carpenter Street",
   url: "https://www.eventbrite.com/e/mobility-collage-public-workshop-singapore-tickets-991488407517",
   },
  {
   id: 5,
   date: "09 December 2024 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "The Hive - Carpenter Street",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-tickets-862589377047?aff=oddtdtcreator",
   },
   {
   id: 6,
   date: "17 December 2024 - Tuesday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "Online",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
];

const instructorSessionList: Session[] = [
  {  
   id: 34,
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
