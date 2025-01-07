const participantSessionList: Session[] = [
  {
   id: 1,
   date: "13 January 2025 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "The Hive Carpenter - L2",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 2,
   date: "14 January 2025 - Tuesday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "Online",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 3,
   date: "14 January 2025 - Tuesday evening",
   sessionType: "Conscious Evolution Collage",
   host: "EcoChapter quarters",
   url: "https://docs.google.com/forms/d/1ObBnxtEt8Wc432u0LDaxaJn36dbPb10MKkTzT-es2s8/edit",
   },
  {
   id: 4,
   date: "15 January 2025 - Wednesday evening",
   sessionType: "Circular Economy Collage",
   host: "CEVA Logistics Office - Havelock Road",
   url: "https://www.eventbrite.sg/e/circular-economy-collage-singapore-tickets-1052323336427?aff=oddtdtcreator",
   },
  {
   id: 5,
   date: "16 January 2025 - Thursday evening",
   sessionType: "Circular Economy Collage",
   host: "EcoChapter quarters",
   url: "https://docs.google.com/forms/d/1ObBnxtEt8Wc432u0LDaxaJn36dbPb10MKkTzT-es2s8/edit",
   },
  {
   id: 6,
   date: "21 January 2025 - Tuesday evening",
   sessionType: "Biodiversity Collage & Animal Welfare",
   host: "Palo IT Offices - Beach Road",
   url: "https://lu.ma/1j1zramj",
   },
  {
   id: 7,
   date: "22 January 2025 - Wednesday evening",
   sessionType: "SYNC - Climate Fresk & Panel on Public Health",
   host: "Singapore Sustainability Academy",
   url: "https://www.eventbrite.com/e/sync-workshop-climate-fresk-and-public-health-tickets-1098546294539?aff=oddtdtcreator",
   },
  {
   id: 8,
   date: "22 January 2025 - Wednesday evening",
   sessionType: "Planetary Boundaries Collage",
   host: "EcoChapter quarters",
   url: "https://docs.google.com/forms/d/163bfH-TnK6IVDbUnwrk_eXL5TYQULf9QkICoPcdOONA/edit",
   },
  {
   id: 9,
   date: "23 January 2025 - Thursday evening",
   sessionType: "Climate Fresk",
   host: "EcoChapter quarters",
   url: "https://docs.google.com/forms/d/131IRUN--pIX1FSUlJ9iBA5Q_I8-ZqLLn6CJ3AIsouso/edit",
   },
  {
   id: 10,
   date: "03 February 2025 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "The Hive Carpenter - L2",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 11,
   date: "11 February 2025 - Tuesday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "Online",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 12,
   date: "03 March 2025 - Monday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "The Hive Carpenter - L2",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 13,
   date: "11 March 2025 - Tuesday evening",
   sessionType: "Climate Change Adaptation Workshop",
   host: "Online",
   url: "https://www.eventbrite.sg/e/adacc-adaptation-to-climate-change-workshops-online-tickets-862593790247",
   },
  {
   id: 14,
   date: "05 March 2025 - Wednesday evening",
   sessionType: "Biodiversity Collage",
   host: "Chemistry Offices - Jalan Pinang",
   url: "https://www.eventbrite.com/e/biodiversity-collage-jalan-pinang-tickets-819928978647?aff=oddtdtcreator",
   },
  {
   id: 15,
   date: "13 May 2025 - Tuesday evening",
   sessionType: "Biodiversity Collage",
   host: "Chemistry Offices - Jalan Pinang",
   url: "https://www.eventbrite.com/e/biodiversity-collage-jalan-pinang-tickets-819928978647?aff=oddtdtcreator",
   },
];

const instructorSessionList: Session[] = [
  {  
   id: 32,
   date: "09 January 2024 - Thursday evening",
   sessionType: "Biodiversity Collage Training",
   host: "Online",
   url: "https://www.billetweb.fr/biodiversity-collage-training-online",
   },
  {  
   id: 33,
   date: "13 March 2025 - Thursday evening",
   sessionType: "Biodiversity Collage Training",
   host: "The Hive Carpenter - L2",
   url: "https://www.eventbrite.sg/e/biodiversity-collage-training-to-become-facilitator-tickets-1110924377719?aff=oddtdtcreator",
  },
  {  
   id: 34,
   date: "17 April 2025 - Thursday evening",
   sessionType: "Biodiversity Collage Training",
   host: "Online",
   url: "https://www.billetweb.fr/biodiversity-collage-training-online",
  },
{  
   id: 35,
   date: "07 May 2025 - Wednesday evening",
   sessionType: "Biodiversity Collage Training",
   host: "The Hive Carpenter - L2",
   url: "https://www.eventbrite.sg/e/biodiversity-collage-training-to-become-facilitator-tickets-1110924377719?aff=oddtdtcreator",
  },
  {  
   id: 36,
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
