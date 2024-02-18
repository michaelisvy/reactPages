import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import "../styles/ClimateFresk.css";
import { useState, useEffect } from "react";
import cf1ImagePath from "../images/cf/cf1.jpeg";
import cf2ImagePath from "../images/cf/cf2.jpeg";
import cf3ImagePath from "../images/cf/cf3.jpeg";
import cf4ImagePath from "../images/cf/cf4.jpeg";

export const ClimateFresk = () => {
  const [stopAutoplay, setStopAutoplay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStopAutoplay(true);
    }, 20000); // Stop autoplay after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const images = [
    {
      imageUrl: cf1ImagePath,
      caption: "Image 1",
    },
    {
      imageUrl: cf2ImagePath,
      caption: "Image 2",
    },
    {
      imageUrl: cf3ImagePath,
      caption: "Image 3",
    },
    {
      imageUrl: cf4ImagePath,
      caption: "Image 4",
    },
    // Add more image objects as needed
  ];

  return (
    <>
      <Carousel autoPlay={!stopAutoplay} className="carousel">
        {images.map((image, index) => (
          <Paper key={index}>
            <img
              src={image.imageUrl}
              alt={image.caption}
              className="carousel-image"
            />
          </Paper>
        ))}
      </Carousel>
      <div id="description">
        {" "}
        <h2>The Climate Fresk</h2>
        <a href="http://climatefresk.org/">The Climate Fresk</a> is a fun, collaborative and interactive workshop based on the IPCC reports to raise awareness about Climate Change and help participants identify pathways to drive impact in their daily life.
We have already trained over 7,000 participants in Singapore and more than 1,500,000 worldwide!


The workshop is holistic, in a way it addresses Head, Heart & Hands. 
It encompasses knowledge and levers of action to share a positive, solution oriented vision of sustainability;
     - Head/Reasoning; Participants are playing with cards, each one of them being focused on one aspect of Climate Change and try to connect the cards together to understand the big picture
     - Heart/Speak out; Participants are encouraged to show creativity, team spirit and speaking about their emotions to prepare the final step of the workshop
     - Hands/Discuss about solutions; Participants are talking about solutions to explore how to address Climate Change
Our team of facilitators guides the participants through the workshop and makes sure the knowledge and interactions are smooth and fruitful.

        <h2>2 Tonnes workshop</h2>
        <a href="https://en.2tonnes.org/">2 Tonnes</a> is a <b>𝗳𝘂𝗻 𝗲𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝘄𝗼𝗿𝗸𝘀𝗵𝗼𝗽</b>, which will make you understand the relative impacts of various individual and collective climate actions.
Leveraging on 𝗰𝗼𝗹𝗹𝗮𝗯𝗼𝗿𝗮𝘁𝗶𝗼𝗻 and 𝗰𝗼𝗹𝗹𝗲𝗰𝘁𝗶𝘃𝗲 𝗶𝗻𝘁𝗲𝗹𝗹𝗶𝗴𝗲𝗻𝗰𝗲, this serious game will allow you and your team to design a credible scenario, to try to make your own carbon footprint and society compliant with the 𝗹𝗲𝘀𝘀 𝘁𝗵𝗮𝗻 𝟮°𝗖 𝗼𝗯𝗷𝗲𝗰𝘁𝗶𝘃𝗲 𝗼𝗳 𝗣𝗮𝗿𝗶𝘀 𝗔𝗴𝗿𝗲𝗲𝗺𝗲𝗻𝘁 𝗯𝘆 𝟮𝟬𝟱𝟬.
After having calculated your individual carbon footprint, you will start the workshop by choosing both 𝗶𝗻𝗱𝗶𝘃𝗶𝗱𝘂𝗮𝗹 𝗮𝗻𝗱 𝗰𝗼𝗹𝗹𝗲𝗰𝘁𝗶𝘃𝗲 𝗮𝗰𝘁𝗶𝗼𝗻𝘀  to take in the next 30 years. Thanks to the live simulation, you will see round after round the impacts of your choices and the progression of your transition scenario towards the 2050 goal.
Thus, the workshop gives  an overview of the relative impacts of various individual and collective actions, and an understanding of the sectors and activities impacted. 2tonnes will give you all the keys to 𝗺𝗮𝗸𝗲 𝘆𝗼𝘂𝗿 𝗼𝘄𝗻 𝗱𝗲𝗰𝗶𝘀𝗶𝗼𝗻𝘀 𝗮𝗻𝗱 𝗱𝗲𝘀𝗶𝗴𝗻 𝘆𝗼𝘂𝗿 𝗽𝗲𝗿𝘀𝗼𝗻𝗮𝗹 𝗷𝗼𝘂𝗿𝗻𝗲𝘆 𝘁𝗼𝘄𝗮𝗿𝗱 𝘀𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆.

        <h2>The Biodiversity Collage</h2>
        <a href="https://www.fresquedelabiodiversite.org/en.html">
          The Biodiversity Collage
        </a>{" "}
        allows to understand the challenges around biodiversity, through a fun, collaborative, visual and accessible workshop, 
        based on the IPBES report. It helps participants understand the systemic aspects of biodiversity: what it is, what it enables and what degrades it.
The 3 hour workshop is divided into 4 parts:
<ul>
  <li>Recreating ecosystems to discover the impacts of human disturbance within it.</li>
  <li>Finding the links between the cards to understand biodiversity.</li>
  <li>Decorating and finding a title for the Collage.</li>
  <li>Reflecting on learnings and developing collectively an action plan to stop biodiversity loss.</li>
</ul>
        <h2>The Digital Collage</h2>
        <a href="https://digitalcollage.org/">The Digital Collage</a> is a fun, collaborative and interactive workshop to raise 
        awareness about the impact of digital technologies on the environment and to lay down the key solutions to build a more sustainable digital sector. 
The workshop is composed of 4 moments:
<ol>
  <li>Comprehension: The teams of participants identify and draw links between the cards of the game.</li>
  <li>Creativity: Participants illustrate their interpretation, learn key messages, then choose a title to embrace the content and create a team spirit.</li>
  <li>Debrief / Review: Each team presents their Collage and the facilitator provides feedback and a recap of the key messages.</li>
  <li>Action: The participants discover the action cards, and discuss amongst themselves the ones that are most relevant to retain.</li>
</ol>
The workshop encourages participants to discuss on the topic for fruitful debate. This workshop is a real team-building tool, 
allowing participants to come together and discover how to achieve sustainability in the digital sector.

<h2>The Adaptation workshop</h2>
The Adaptation to Climate Change Collage is based on the IPCC Working Group 2 findings on risks and impacts of Climate Change.  
This workshop gives a methodology aiming at making the right choices regarding the integration of Climate Risks to the operations within 
the framework of a case study.  Thus, the workshop equips you to take future-proof decisions and reduce climate change-induced risks in order 
to get ready for the unavoidable impacts to come.
The Adaptation to Climate Change Collage relies on collective intelligence: participants work together to identify adaptation options, 
assess them and make decisions combining impact and compromise.
      </div>
    </>
  );
};
