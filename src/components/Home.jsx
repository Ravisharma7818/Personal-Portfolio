import React from "react";
import Navbar from "./Navbar";
import { Button, Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <>
      <Navbar />

      <br></br>
      <Container sx={{ height: "70vh" }}>
        <Box>
          <Grid container className="home-text-container">
            <Grid xs={12} md={6} align="center">
              <Avatar
                alt="Ravi Sharma"
                src={require("../img/profile.png")}
                sx={{
                  width: 270,
                  height: 270,
                  borderTop: "4px solid red",
                  borderLeft: "4px solid yellow ",
                }}
              />
            </Grid>
            <Grid xs={12} md={6} align="center" className="home-main-text">
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  color: "rgb(85, 85, 85)",
                }}
                mt={2}
              >
                Hello, I'm{" "}
              </Typography>
              <Typography
                id="name_text"
                variant="h3"
                sx={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "2rem",
                }}
              >
                Ravi Sharma{" "}
              </Typography>
              <a
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file/d/1n5RSCjwc0uIT2d5Alp5By4BU0m1Ot7ch/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
              >
                <Button>Resume</Button>
              </a>
              <Stack
                direction="row"
                // sx={{ backgroundColor: "yellow" }}
                className="home-seocial-icon-container"
              ></Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
