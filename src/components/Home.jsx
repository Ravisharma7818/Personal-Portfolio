import React from "react";
import Navbar from "./Navbar";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <>
      <Navbar />

      <br></br>
      <Container sx={{ height: "60vh" }}>
        <Box>
          <Grid container className="home-text-container">
            <Grid xs={12} md={6} align="center">
              <Avatar
                alt="Ravi Sharma"
                src={require("../img/profile.png")}
                sx={{ width: 270, height: 270 }}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              align="center"
              // sx={{ backgroundColor: "green" }}
              className="home-main-text"
            >
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

              <Stack
                direction="row"
                // sx={{ backgroundColor: "yellow" }}
                className="home-seocial-icon-container"
              >
                {/* <Avatar
                  alt="Github"
                  variant="rounded"
                  src={require("../img/git.png")}
                />
                <Avatar
                  variant="rounded"
                  alt="Github"
                  src={require("../img/link.png")}
                /> */}
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
