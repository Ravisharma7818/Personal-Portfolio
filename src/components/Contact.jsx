import React, { useRef } from "react";
import { Card, Container, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import GoogleMapReact from "google-map-react";
import emailjs from "emailjs-com";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Contact = () => {
  const form = useRef();

  const defaultProps = {
    center: {
      lat: 28.54937,
      lng: 77.35836,
    },
    zoom: 12,
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container
      sx={{
        marginTop: "8rem",
        marginBottom: "12rem",
      }}
      className="Contact_Page_Container"
    >
      <Box sx={{ height: "60vh" }}>
        <Typography
          variant="h5"
          mt={7}
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "rgb(85, 85, 85)",
          }}
        >
          Contact Me
        </Typography>
        <br></br>

        <Grid container align="center">
          <Grid xs={12} md={6} sm={6}>
            <Card sx={{ maxWidth: 560, boxShadow: 3, height: 300 }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <Card lat={28.54937} lng={77.35836} text="My Marker" />
              </GoogleMapReact>
            </Card>
          </Grid>

          <Grid xs={12} md={6} sm={6}>
            <Card
              sx={{
                maxWidth: 500,
                boxShadow: 1,
                height: 300,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  "& .MuiTextField-root": { width: "25ch" },
                }}
              >
                <form ref={form} onSubmit={sendEmail}>
                  <TextField
                    required
                    margin="dense"
                    id="outlined-basic margin-dense"
                    label="Name"
                    variant="standard"
                    type="text"
                    name="from_name"
                  />
                  <TextField
                    required
                    margin="dense"
                    id="outlined-basic margin-dense"
                    label="Email"
                    variant="standard"
                    type="email"
                    name="from_email"
                  />
                  <TextField
                    required
                    margin="dense"
                    id="outlined-basic margin-dense"
                    label="Message"
                    variant="standard"
                    name="message"
                    minlength="12"
                  />
                  <br></br>
                  <br></br>
                  <br></br>

                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </form>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
