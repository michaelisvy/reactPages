const participantSessionList: Session[] = [
  {
   id: 1,
   date: "11 February 2025 - Tuesday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "Online",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 2,
   date: "11 February 2025 - Tuesday evening",
   sessionType: "Circular Economy Collage",
   host: "Central Singapore",
   url: "https://www.eventbrite.sg/e/circular-economy-collage-singapore-tickets-1052323336427?aff=oddtdtcreator",
   },
  {
   id: 3,
   date: "16 February 2025 - Sunday morning",
   sessionType: "Climate Fresk",
   host: "Invictus @ Dempsey",
   url: "https://association.climatefresk.org/training_sessions/995ae417-ade1-4f4d-94e5-20a4f1282dc7/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
   },
  {
   id: 4,
   date: "03 March 2025 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "The Hive Carpenter - L2",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 5,
   date: "04 March 2025 - Tuesday evening",
   sessionType: "Circular Economy Collage - Sustainability in my Community programme",
   host: "Singapore Sustainability Academy - City Square Mall",
   url: "https://www.eventbrite.com/e/sustainability-workshop-circular-economy-combating-waste-tickets-1135370978159?aff=oddtdtcreator",
   },
  {
   id: 6,
   date: "11 March 2025 - Tuesday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "Online",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 7,
   date: "05 March 2025 - Wednesday evening",
   sessionType: "Biodiversity Collage",
   host: "Chemistry Offices - Jalan Pinang",
   url: "https://www.eventbrite.com/e/biodiversity-collage-jalan-pinang-tickets-819928978647?aff=oddtdtcreator",
   },
  {
   id: 8,
   date: "23 March 2025 - Sunday morning",
   sessionType: "Climate Fresk",
   host: "Invictus @ Dempsey",
   url: "https://association.climatefresk.org/training_sessions/995ae417-ade1-4f4d-94e5-20a4f1282dc7/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
   },
  {
   id: 9,
   date: "13 May 2025 - Tuesday evening",
   sessionType: "Biodiversity Collage",
   host: "Chemistry Offices - Jalan Pinang",
   url: "https://www.eventbrite.com/e/biodiversity-collage-jalan-pinang-tickets-819928978647?aff=oddtdtcreator",
   },
  {
   id: 10,
   date: "22 May 2025 - Thursday evening",
   sessionType: "Biodiversity Collage - Sustainability in my Community programme",
   host: "Singapore Sustainability Academy - City Square Mall",
   url: "https://www.eventbrite.com/e/sustainability-workshop-biodiversity-conservation-quality-of-life-tickets-1135389323029?aff=oddtdtcreator",
   },
];

const instructorSessionList: Session[] = [
  { 
   id: 31,
   date: "05 February 2025 - Wednesday evening",
   sessionType: "Climate Fresk Facilitation Training",
   host: "The Hive Carpenter - L2",
   url: "https://association.climatefresk.org/training_sessions/cae177f0-7c4f-4ab9-be8d-d8d4e9560af7/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
   },
  { 
   id: 32,
   date: "18 February 2025 - Tuesday evening",
   sessionType: "Climate Fresk Facilitation Training",
   host: "The Hive Carpenter - L2",
   url: "https://association.climatefresk.org/training_sessions/ce84ce91-324f-41f2-b86a-e842bf96c346/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
   },
  { 
   id: 33,
   date: "19 February 2025 - Wednesday evening",
   sessionType: "Climate Fresk Facilitation Training",
   host: "Palo IT - Beach Road",
   url: "https://association.climatefresk.org/training_sessions/3d9b592d-fbc7-4554-a599-5a92f59d357d/show_public?language=en&tenant_token=36bd2274d3982262c0021755",
   },
  {  
   id: 34,
   date: "13 March 2025 - Thursday evening",
   sessionType: "Biodiversity Collage Training",
   host: "The Hive Carpenter - L2",
   url: "https://www.eventbrite.sg/e/biodiversity-collage-training-to-become-facilitator-tickets-1110924377719?aff=oddtdtcreator",
   },
  {  
   id: 35,
   date: "17 April 2025 - Thursday evening",
   sessionType: "Biodiversity Collage Training",
   host: "Online",
   url: "https://www.billetweb.fr/biodiversity-collage-training-online",
   },
 {  
   id: 36,
   date: "07 May 2025 - Wednesday evening",
   sessionType: "Biodiversity Collage Training",
   host: "The Hive Carpenter - L2",
   url: "https://www.eventbrite.sg/e/biodiversity-collage-training-to-become-facilitator-tickets-1110924377719?aff=oddtdtcreator",
   },
  {  
   id: 37,
   date: "17 June 2025 - Tuesday evening",
   sessionType: "Biodiversity Collage Training",
   host: "Online",
   url: "https://www.billetweb.fr/biodiversity-collage-training-online",
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
