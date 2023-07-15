import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../styles/ClimateFresk.css";
import { useState, useEffect } from "react";
import cf1ImagePath from "../images/cf/cf1.jpeg";
import cf2ImagePath from "../images/cf/cf2.jpeg";
import cf3ImagePath from "../images/cf/cf3.jpeg";
import cf4ImagePath from "../images/cf/cf4.jpeg";

export const Facilitating = () => {
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
        <h2>Becoming a facilitator</h2>
        Singapore has a growing community of <b>200+ facilitators</b>. Most of
        them volunteer on their personal time, and a few of them are
        Professional Climate Fresk facilitators. The Climate Fresk organisation
        offers a nice progression path based on color belts:
        
        <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "16px" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>White Belt</TableCell>
                  <TableCell>Yello belt</TableCell>
                  <TableCell>Orange Belt</TableCell>
                  <TableCell>Green Belt</TableCell>
                  <TableCell>Blue Belt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Has attended the facilitator training</TableCell>
                  <TableCell>Has facilitated at least one session</TableCell>
                  <TableCell>Has facilitated at least 10 sessions</TableCell>
                  <TableCell>15 sessions, has completed a Green Belt exam and a few more steps</TableCell>
                  <TableCell>20 sessions, has completed a Blue Belt exam and a few more steps</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <p>
        Climate Fresk facilitation training sessions are open to the general public and are run by Climate Fresk volunteers. 
        Once you have completed this training, you will be able to facilitate workshops for your friends, family, neighbours and, 
        in fact, anyone you want. 
        You will join the facilitator community and will be able to take part in a number of different events organised by the NGO.
        Facilitation training sessions may happen online or in-person.
        </p>
        <a href="https://climatefresk.org/world/become-facilitator/" target="_blank">Dates for facilitator sessions are available here</a>
      </div>
    </>
  );
};
