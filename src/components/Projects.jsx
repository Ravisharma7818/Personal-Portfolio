import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import Link from "@mui/material/Link";

const Projects = () => {
  return (
    <Container sx={{ marginTop: "8rem" }} className="Project_Page_Container">
      <Typography
        variant="h5"
        mt={5}
        sx={{
          fontFamily: "Poppins, sans-serif",
          color: "rgb(85, 85, 85)",
        }}
      >
        Projects
      </Typography>
      <br></br>
      <Grid container>
        <Grid xs={12} md={4} sm={4}>
          <Card sx={{ maxWidth: 350, boxShadow: 1 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={require("../img/ecomm.jpg")}
              title="ShopHere"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                ShopHere
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                target="_blank"
                href="https://github.com/Ravisharma7818/Ecommerce_Clone_MERN_Stack"
              >
                <Button size="small">Github</Button>
              </Link>

              <Link target="_blank" href="https://shophere.onrender.com/">
                <Button size="small">Live Demo</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={4} sm={4}>
          <Card sx={{ maxWidth: 350, boxShadow: 1 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={require("../img/meet.png")}
              title="LiveMeet"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                LiveMeet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                target="_blank"
                href="https://github.com/Ravisharma7818/LiveMeet"
              >
                <Button size="small">Github</Button>
              </Link>
              <Link target="_blank" href="https://livemeet.onrender.com/">
                <Button size="small">Live Demo</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
        <Grid xs={12} md={4} sm={4}>
          <Card sx={{ maxWidth: 350, boxShadow: 1 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={require("../img/jobs.jpg")}
              title="RaviJobs"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                RaviJobs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                target="_blank"
                href="https://github.com/Ravisharma7818/Ravi-Jobs-Portal--Using-MERN-Stack"
              >
                <Button size="small">Github</Button>
              </Link>
              <Link target="_blank" href="https://ravijobs.onrender.com/">
                <Button size="small">Live Demo</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Projects;
