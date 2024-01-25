import React, { Component } from "react";
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

export default class TeamCards extends Component {
  render() {
    return (
      <ThemeProvider theme={responsiveTheme}>
        <div className="teamCardsContainer">
          <div className="teamCard">
            <div className="teamCardImageContainer">
              <img
                src="assets/images/team/calina_nicolescu-veselu.png"
                alt="team member"
                className="teamCardImage"
              />
            </div>
            <div className="teamCardInfo">
              <span style={{ marginBottom: 5 }}>
                <b>Dr. Nicolescu-Veselu Călina</b>
              </span>
              <span>
                Medicină fizică și de reabilitare - Kinetoterapie, Medicină
                internă
              </span>
            </div>
          </div>
          <div className="teamCard">
            <div className="teamCardImageContainer">
              <img
                src="assets/images/team/radita-tarachiu.png"
                alt="team member"
                className="teamCardImage"
              />
            </div>
            <div className="teamCardInfo">
              <span style={{ marginBottom: 5 }}>
                <b>KT. Tarachiu Rădița</b>
              </span>
              <span>
                Medicină fizică și de reabilitare - Kinetoterapie, Terapii
                complementare
              </span>
            </div>
          </div>
          <div className="teamCard">
            <div className="teamCardImageContainer">
              <img
                src="assets/images/team/viorel-tarachiu.png"
                alt="team member"
                className="teamCardImage"
              />
            </div>
            <div className="teamCardInfo">
              <span style={{ marginBottom: 5 }}>
                <b>Manager Viorel Tarachiu</b>
              </span>
              <span>Sanatate publică și management</span>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
