import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import CopyrightIcon from "@mui/icons-material/Copyright";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000",
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);
var greenTextColor = "#008000";

export default function Footer() {
  return (
    <ThemeProvider theme={responsiveTheme}>
      <div style={{ marginTop: 100 }}>
        <img
          src="assets/images/transition2.png"
          className="transitionImage2"
          alt="transition"
        />
        <Box
          component="footer"
          sx={{
            backgroundColor: greenTextColor,
            position: "relative",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm md>
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    borderBottom: "2px solid #ffffff",
                  }}
                >
                  Despre noi
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontFamily: "Varela Round, sans-serif" }}
                >
                  <PeopleIcon />
                  &nbsp; Suntem o clinică de kinetoterapie dedicată să oferim
                  cele mai bune servicii din domeniu.
                </Typography>
              </Grid>
              <Grid item xs={12} sm md>
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    borderBottom: "2px solid #ffffff",
                  }}
                >
                  Date de contact
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontFamily: "Varela Round, sans-serif" }}
                >
                  <LocationOnIcon />
                  Brăila, județ Brăila<br></br>Cartier Progresul, str. Octav
                  Doicescu nr. 16, bl. D8, sc.1
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                  }}
                >
                  <span
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <EmailIcon />
                    <a
                      href="mailto:pusastef@kinetoterapietarachiu.ro"
                      style={{ paddingLeft: 5 }}
                    >
                      pusastef@kinetoterapietarachiu.ro
                    </a>
                  </span>
                </Typography>
                <Typography
                  variant="body2"
                  color="white"
                  sx={{ fontFamily: "Varela Round, sans-serif" }}
                >
                  <span
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PhoneIcon />
                    <a href="tel:(+40)767421676" style={{ paddingLeft: 5 }}>
                      (+40) 767 421 676
                    </a>
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12} sm md>
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    borderBottom: "2px solid #ffffff",
                  }}
                >
                  Social media
                </Typography>
                <Link href="https://www.facebook.com/" color="#ffffff">
                  <Facebook sx={{ color: "#ffffff" }} />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  color="#ffffff"
                  sx={{ pl: 1, pr: 1 }}
                >
                  <Instagram sx={{ color: "#ffffff" }} />
                </Link>
                <Link href="https://www.twitter.com/" color="#ffffff">
                  <Twitter sx={{ color: "#ffffff" }} />
                </Link>
              </Grid>
              <Grid
                item
                xs={12}
                sm
                md
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    borderBottom: "2px solid #ffffff",
                  }}
                >
                  Linkuri utile
                </Typography>
                <Link
                  href="#"
                  sx={{
                    color: "#ffffff", // Default color
                    "&:visited": {
                      color: "#ffffff", // Change this to the color you want for visited links
                    },
                  }}
                >
                  Politică cookies
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#ffffff", // Default color
                    "&:visited": {
                      color: "#ffffff", // Change this to the color you want for visited links
                    },
                  }}
                >
                  Politică confidențialitate
                </Link>
                <Link
                  href="#"
                  sx={{
                    color: "#ffffff", // Default color
                    "&:visited": {
                      color: "#ffffff", // Change this to the color you want for visited links
                    },
                  }}
                >
                  Termeni și condiții
                </Link>
                <Link
                  href="https://anpc.ro"
                  sx={{
                    color: "#ffffff", // Default color
                    "&:visited": {
                      color: "#ffffff", // Change this to the color you want for visited links
                    },
                  }}
                >
                  ANPC
                </Link>
                <a href="https://anpc.ro/ce-este-sal/">
                  <img
                    style={{
                      width: "200px",
                    }}
                    src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png"
                    alt="Solutionarea Alternativa a Litigiilor"
                  ></img>
                </a>
                <a href="https://ec.europa.eu/consumers/odr">
                  <img
                    style={{
                      width: "200px",
                    }}
                    src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
                    alt="Solutionarea Online a Litigiilor"
                  ></img>
                </a>
              </Grid>
            </Grid>
            <Box mt={5} sx={{ p: 2 }}>
              <Typography
                variant="body2"
                color="white"
                align="center"
                sx={{
                  fontFamily: "Varela Round, sans-serif",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {"Copyright"}&nbsp;
                <CopyrightIcon />
                &nbsp;
                <Link color="#fffff" href="https://kinetictherapy.ro/">
                  Kinetic Therapy
                </Link>{" "}
                &nbsp;
                {new Date().getFullYear()}{" "}
              </Typography>
            </Box>
          </Container>
        </Box>
      </div>
    </ThemeProvider>
  );
}
