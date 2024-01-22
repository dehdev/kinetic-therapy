import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

var greenTextColor = "#008000";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000",
    },
  },
});
const responsiveTheme = responsiveFontSizes(theme);

export class Home extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={responsiveTheme}>
          <Navbar />
          <div className="imageContainer">
            <img
              src="assets/images/front-desk.jpg"
              alt="front desk"
              className="showcaseImage"
            />
            <img
              src="assets/images/transition.png"
              className="transitionImage"
              alt="transition"
            />
            <div className="imageContainerContent">
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: "Varela Round, sans-serif",
                  color: "white",
                  width: "80%",
                }}
              >
                Descoperă arta masajului alături de clinica noastră de
                kinetoterapie.
                <br></br>
                <br></br>
                Cursuri autorizate și servicii de recuperare medicală
                profesionale pentru o carieră de succes în domeniul terapiilor
                corporale.{" "}
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                mt={{ md: "75px", xs: "30px" }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    color: "white",
                    width: "150px", // Adjust the width as needed
                    height: "60px", // Adjust the height as needed
                    fontSize: "16px", // Adjust the font size as needed
                    borderRadius: "20px",
                  }}
                >
                  Servicii
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    color: "white",
                    width: "150px", // Adjust the width as needed
                    height: "60px", // Adjust the height as needed
                    fontSize: "16px", // Adjust the font size as needed
                    borderRadius: "20px",
                  }}
                >
                  Cursuri
                </Button>
              </Stack>
            </div>
          </div>
          <div className="contentContainer">
            <div className="aboutUs">test</div>
          </div>
        </ThemeProvider>
      </>
    );
  }
}

export default Home;
