import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Avatar
            alt="Ravi Sharma"
            src={require("../img/logo.gif")}
            component="a"
            href="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          />{" "}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://github.com/Ravisharma7818/Ecommerce_Clone_MERN_Stack"
                target="_blank"
                rel="noreferrer"
              >
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  Github
                </Button>
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/ravi-sharma-847837198/"
                target="_blank"
                rel="noreferrer"
              >
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  LinnkedIn
                </Button>
              </a>

              <a
                style={{ textDecoration: "none" }}
                href="https://drive.google.com/file/d/1n5RSCjwc0uIT2d5Alp5By4BU0m1Ot7ch/view?usp=drivesdk"
                target="_blank"
                rel="noreferrer"
              >
                <Button sx={{ my: 2, color: "black", display: "block" }}>
                  Resume
                </Button>
              </a>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Avatar
            alt="Ravi Sharma"
            src={require("../img/logo.gif")}
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },

              textDecoration: "none",
            }}
          />{" "}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <a
              style={{ textDecoration: "none" }}
              href="https://github.com/Ravisharma7818/Ecommerce_Clone_MERN_Stack"
              target="_blank"
              rel="noreferrer"
            >
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Github
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/ravi-sharma-847837198/"
              target="_blank"
              rel="noreferrer"
            >
              <Button sx={{ my: 2, color: "black", display: "block" }} x>
                LinnkedIn
              </Button>
            </a>
            <a
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1n5RSCjwc0uIT2d5Alp5By4BU0m1Ot7ch/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                Resume
              </Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
