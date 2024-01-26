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
                dialogText="Conștientizăm că unele condiții de sănătate necesită confortul și familiaritatea propriei case. De aceea, clinica noastra extinde serviciile sale de kinetoterapie și la domiciliul pacienților din Brăila și împrejurimi. Echipa noastră de specialiști vine la tine acasă pentru a asigura tratamente personalizate și eficiente, respectând cu strictețe protocoalele medicale și de siguranță."
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
                dialogText="Masaj<br></br>
                Reeducare Posturală Globală<br></br>
                Reflexoterapie - masaj reflexogen<br></br>
                Terapia coxalelor - Yumeiho<br></br>
                Terapia Reiki<br></br>
                Terapia Schroth<br></br>
                Terapia Vojta<br></br>
                Terapii corporale"
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
                dialogText="La clinica noastra ne dedicăm să oferim îngrijire specializată în domeniul neurologiei pediatrice. Echipa noastră de profesioniști este specializată în tratamentul și reabilitarea afecțiunilor neurologice la copii, utilizând tehnici de kinetoterapie moderne și personalizate. Înțelegem complexitatea nevoilor fiecărui mic pacient și ne angajăm să oferim un mediu cald și suportiv pentru dezvoltarea lor optimă."
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
                dialogText="Fiecare copil merită cele mai bune șanse pentru o dezvoltare sănătoasă și armonioasă. În cadrul secției noastre de pediatrie, ne concentrăm pe prevenirea, diagnosticarea și tratarea afecțiunilor la copii, de la nou-născuți până la adolescenți. Abordarea noastră holistică include evaluări amănunțite, planuri de tratament personalizate și suport continuu pentru sănătatea și bunăstarea copiilor dumneavoastră."
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
                dialogText="Kinetoterapia, o ramură a medicinei fizice, se concentrează pe utilizarea mișcării ca formă de terapie. Bazată pe principiile kinetologiei medicale, aceasta studiază mecanismele articulare și neuromusculare care permit realizarea mișcărilor normale. Termenul 'kinetoterapie' derivă din limba greacă, 'kinesis' însemnând 'mișcare'.
                Această terapie prin mișcare include exerciții specifice și tehnici adaptate la nevoile individuale ale fiecărei persoane, având ca scop recuperarea medicală și îmbunătățirea funcționalității în diverse afecțiuni. Kinetoterapia se folosește în tratamentul unei game largi de probleme de sănătate, inclusiv accidente, fracturi, entorse, luxații, boli degenerative (cum ar fi gonartroza și coxartroza), afecțiuni ale coloanei vertebrale (precum herniile de disc), și probleme neurologice.<br></br>
                Kinetoprofilaxia, o componentă a kinetoterapiei, se împarte în trei categorii: primară, secundară și terțiară. Kinetoprofilaxia primară se concentrează pe prevenirea bolilor prin exerciții și activități fizice, secundara previne complicațiile bolilor existente, iar cea terțiară ajută la prevenirea sechelelor și dizabilităților cauzate de boli.<br></br>
                Programele de kinetoterapie sunt personalizate în funcție de caracteristicile pacientului, incluzând vârsta, afecțiunile preexistente, tipul de activitate și stadiul bolii. Fiecare pacient beneficiază de supraveghere individualizată din partea unui kinetoterapeut. Obiectivele principale ale kinetoterapiei includ relaxarea, corectarea posturii, creșterea mobilității articulare, forței și rezistenței musculare, îmbunătățirea coordonării, controlului și echilibrului, corectarea problemelor respiratorii și reeducarea sensibilității.<br></br>
                Eficiența kinetoterapiei se observă în promovarea unei stări de sănătate optime, atât prin recuperare medicală, cât și prin prevenția unor afecțiuni. Procesul de kinetoterapie include evaluarea inițială a pacientului, elaborarea unui program specific, efectuarea regulată a ședințelor, îndrumarea pacientului pentru exerciții individuale și reevaluări periodice pentru ajustarea tratamentului.<br></br>
                Printre serviciile oferite în cadrul kinetoterapiei se numără bilanțul articular și muscular, terapii manuale (chiropractică), diverse forme de electroterapie, gimnastică de întreținere și recuperare, kinetoterapie cu aparatură specială (covor rulant, bicicletă ergometrică), terapie la domiciliu, laserterapie, masaje (drenaj limfatic, reflexoterapie, segmentar, terapeutic), presoterapie și ultrasunete. Aceste servicii ajută în recuperarea după diverse intervenții chirurgicale, în afecțiuni reumatologice, ortopedice, neurologice, ginecologice și ORL."
                dialogTitle="Recuperare medicală"
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}
