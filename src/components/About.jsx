import { Avatar, Card, Container, Grid } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

const About = () => {
  return (
    <Container>
      <Typography
        variant="h5"
        mt={7}
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "rgb(85, 85, 85)",
        }}
      >
        About Me
      </Typography>
      <br></br>

      <Grid container align="center">
        <Grid xs={12} md={6} sm={6}>
          <Card sx={{ maxWidth: 560, boxShadow: 3, height: 300 }}>
            <video autoPlay loop muted height={"300px"}>
              <source
                src={require("../img/intro.mp4")}
                alt="intro"
                type="video/mp4"
              />
            </video>
          </Card>
        </Grid>

        <Grid xs={12} md={6} sm={6}>
          <List
            sx={{
              width: "100%",
              maxWidth: 560,
              bgcolor: "white",
              position: "relative",
              overflow: "auto",
              maxHeight: 300,
              "& ul": { padding: 0 },
            }}
            subheader={<li />}
          >
            {["Language"].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  <ListSubheader>{`${sectionId}`}</ListSubheader>
                  {["c", "Javascript"].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`${item}`} />
                      <Avatar src={require("../img/check.gif")} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
            {["FrontEnd"].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  <ListSubheader>{`${sectionId}`}</ListSubheader>
                  {[
                    "Html",
                    "Css",
                    "Javascript",
                    "ReactJs",
                    "Material UI",
                    "Talwind Css",
                    "Bootstrap",
                    "Formik",
                    "EmailJs",
                    "Redux",
                    "React-Redux",
                    "Redux-Toolkit",
                    "Redux-Thunk",
                    "Ant D",
                  ].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`${item}`} />
                      <Avatar src={require("../img/check.gif")} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
            {["Backend"].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  <ListSubheader>{`${sectionId}`}</ListSubheader>
                  {[
                    "Node",
                    "Mongo ",
                    "Express",
                    "NodeMailer",
                    "Cloudinary",
                    "Stripe",
                  ].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`  ${item}`} />
                      <Avatar src={require("../img/check.gif")} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}

            {["Deployment"].map((sectionId) => (
              <li key={`section-${sectionId}`}>
                <ul>
                  <ListSubheader>{`${sectionId}`}</ListSubheader>
                  {["Git", "Github ", "Heroku", "Render", "Aws"].map((item) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                      <ListItemText primary={`  ${item}`} />
                      <Avatar src={require("../img/check.gif")} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
