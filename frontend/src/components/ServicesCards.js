import React, { Component } from "react";
import ServicesModal from "./modals/SerivcesModal";

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
              <ServicesModal
                dialogText="Echipa Kinetic Therapy vă așteaptă la cabinetul nostru din Brăila, în cartierul Progresul, str. Octav Doicescu, bl. D8, parter, cu cele mai noi terapii din domeniul Recuperării Medicale. Personalul nostru calificat aplică aceste terapii în funcție de recomandarea medicală a pacientului, precum și de indicațiile și contraindicațiile fiecărei terapii în parte: kinetoterapie, reeducare posturală globală, Yumeiho, Terapie Schroth, bandajare neuromusculară, drenaj limfatic manual, masaj terapeutic, reflexoterapie, terapie Vojta, terapie Reiki, etc."
                dialogTitle="Îngrijire medicală la domiciliu"
              />
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
              <ServicesModal
                dialogText="Echipa Kinetic Therapy vă așteaptă la cabinetul nostru din Brăila, în cartierul Progresul, str. Octav Doicescu, bl. D8, parter, cu cele mai noi terapii din domeniul Recuperării Medicale. Personalul nostru calificat aplică aceste terapii în funcție de recomandarea medicală a pacientului, precum și de indicațiile și contraindicațiile fiecărei terapii în parte: kinetoterapie, reeducare posturală globală, Yumeiho, Terapie Schroth, bandajare neuromusculară, drenaj limfatic manual, masaj terapeutic, reflexoterapie, terapie Vojta, terapie Reiki, etc."
                dialogTitle="Medicină alternativă și naturistă"
              />
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
              <ServicesModal
                dialogText="Echipa Kinetic Therapy vă așteaptă la cabinetul nostru din Brăila, în cartierul Progresul, str. Octav Doicescu, bl. D8, parter, cu cele mai noi terapii din domeniul Recuperării Medicale. Personalul nostru calificat aplică aceste terapii în funcție de recomandarea medicală a pacientului, precum și de indicațiile și contraindicațiile fiecărei terapii în parte: kinetoterapie, reeducare posturală globală, Yumeiho, Terapie Schroth, bandajare neuromusculară, drenaj limfatic manual, masaj terapeutic, reflexoterapie, terapie Vojta, terapie Reiki, etc."
                dialogTitle="Neurologie pediatrică"
              />
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
              <ServicesModal
                dialogText="Echipa Kinetic Therapy vă așteaptă la cabinetul nostru din Brăila, în cartierul Progresul, str. Octav Doicescu, bl. D8, parter, cu cele mai noi terapii din domeniul Recuperării Medicale. Personalul nostru calificat aplică aceste terapii în funcție de recomandarea medicală a pacientului, precum și de indicațiile și contraindicațiile fiecărei terapii în parte: kinetoterapie, reeducare posturală globală, Yumeiho, Terapie Schroth, bandajare neuromusculară, drenaj limfatic manual, masaj terapeutic, reflexoterapie, terapie Vojta, terapie Reiki, etc."
                dialogTitle="Pediatrie"
              />
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
              <ServicesModal
                dialogText="Echipa Kinetic Therapy vă așteaptă la cabinetul nostru din Brăila, în cartierul Progresul, str. Octav Doicescu, bl. D8, parter, cu cele mai noi terapii din domeniul Recuperării Medicale. Personalul nostru calificat aplică aceste terapii în funcție de recomandarea medicală a pacientului, precum și de indicațiile și contraindicațiile fiecărei terapii în parte: kinetoterapie, reeducare posturală globală, Yumeiho, Terapie Schroth, bandajare neuromusculară, drenaj limfatic manual, masaj terapeutic, reflexoterapie, terapie Vojta, terapie Reiki, etc."
                dialogTitle="Recuperare medicală"
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
