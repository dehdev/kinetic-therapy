import React, { Component } from "react";
import Button from "@mui/material/Button";

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

export default class ServicesCards extends Component {
  render() {
    return (
      <ThemeProvider theme={responsiveTheme}>
        <div className="servicesCardsContainer">
          <div className="serviceCard">
            <div className="serviceCardImageContainer">
              <img
                src="assets/images/house.png"
                alt="house"
                className="cardImage"
              />
            </div>
            <p style={{ fontSize: "28px" }}>Îngrijire medicală la domiciliu</p>
            <div className="serviceCardButton">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Varela Round, sans-serif",
                  color: "white",
                  width: "200px", // Adjust the width as needed
                  height: "40px", // Adjust the height as needed
                  fontSize: "16px", // Adjust the font size as needed
                  borderRadius: "20px",
                }}
              >
                Află mai multe
              </Button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="serviceCardImageContainer">
              <img
                src="assets/images/mortar.png"
                alt="mortar"
                className="cardImage"
              />
            </div>
            <p style={{ fontSize: "28px" }}>
              Medicină alternativă și naturistă
            </p>
            <div className="serviceCardButton">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Varela Round, sans-serif",
                  color: "white",
                  width: "200px", // Adjust the width as needed
                  height: "40px", // Adjust the height as needed
                  fontSize: "16px", // Adjust the font size as needed
                  borderRadius: "20px",
                }}
              >
                Află mai multe
              </Button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="serviceCardImageContainer">
              <img
                src="assets/images/human.png"
                alt="human"
                className="cardImage"
              />
            </div>
            <p style={{ fontSize: "28px" }}>Neurologie pediatrică</p>
            <div className="serviceCardButton">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Varela Round, sans-serif",
                  color: "white",
                  width: "200px", // Adjust the width as needed
                  height: "40px", // Adjust the height as needed
                  fontSize: "16px", // Adjust the font size as needed
                  borderRadius: "20px",
                }}
              >
                Află mai multe
              </Button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="serviceCardImageContainer">
              <img
                src="assets/images/pediatric.png"
                alt="pediatric"
                className="cardImage"
              />
            </div>
            <p style={{ fontSize: "28px" }}>Pediatrie</p>
            <div className="serviceCardButton">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Varela Round, sans-serif",
                  color: "white",
                  width: "200px", // Adjust the width as needed
                  height: "40px", // Adjust the height as needed
                  fontSize: "16px", // Adjust the font size as needed
                  borderRadius: "20px",
                }}
              >
                Află mai multe
              </Button>
            </div>
          </div>
          <div className="serviceCard">
            <div className="serviceCardImageContainer">
              <img
                src="assets/images/recovery.png"
                alt="recovery"
                className="cardImage"
              />
            </div>
            <p style={{ fontSize: "28px" }}>
              Recuperare medicală, kinetoterapie, fizioterapie, reabilitare
            </p>
            <div className="serviceCardButton">
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontFamily: "Varela Round, sans-serif",
                  color: "white",
                  width: "200px", // Adjust the width as needed
                  height: "40px", // Adjust the height as needed
                  fontSize: "16px", // Adjust the font size as needed
                  borderRadius: "20px",
                }}
              >
                Află mai multe
              </Button>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
