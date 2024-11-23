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
import karateImagePath from "../images/clipart-karate.png";

import { SessionList } from ".";

export const Facilitating = () => {
  return (
    <>
      <div id="description">
        <h2>Becoming a facilitator</h2>
        Singapore has a growing community of <b>320+ facilitators</b>. Most of
        them volunteer on their personal time, and a few of them are
        Professional Climate Fresk facilitators. The Climate Fresk organisation
        offers a nice progression path based on color belts:
        <Paper sx={{ width: "100%", overflow: "hidden", marginTop: "16px" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell>White Belt</TableCell>
                  <TableCell>Yellow belt</TableCell>
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
                  <TableCell>
                    15 sessions, has completed a Green Belt exam and a few more
                    steps
                  </TableCell>
                  <TableCell>
                    20 sessions, has completed a Blue Belt exam and a few more
                    steps
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
        <p>
          Climate Fresk facilitation training sessions are open to the general
          public and are run by Climate Fresk volunteers. Once you have
          completed this training, you will be able to facilitate workshops for
          your friends, family, neighbours and, in fact, anyone you want. You
          will join the facilitator community and will be able to take part in a
          number of different events organised by the NGO. Facilitation training
          sessions may happen online or in-person.
        </p>
        <h2>Certifying sessions for facilitators</h2>
        <SessionList type="instructor" />
        <h2>
          Facilitator Practice Sessions
        </h2>
        <img src={karateImagePath} style={{ maxWidth: '50%', maxHeight: '100px' }}/>
        <p>
        The facilitator practice sessions, lasting 2 to 3 hours, provide a supportive and dynamic environment for white and yellow belt Climate Fresk facilitators who may be grappling with a lack of confidence in organizing and leading their initial workshops or wish to enhance their facilitation skills. 

These sessions foster a collaborative atmosphere where participants can freely exchange experiences and insights, both among themselves and with a seasoned facilitator. The flexibility in the session structure allows for tailored responses to specific needs and queries, ensuring that each participant can address their unique challenges. 

Furthermore, these rehearsals incorporate valuable role-playing exercises, enabling participants to hone their facilitation techniques by practicing with a card game set. Through this multifaceted approach, facilitators can build confidence, refine their skills, and collectively contribute to a more effective and engaging Climate Fresk workshop experience.
        </p>
      </div>
    </>
  );
};
