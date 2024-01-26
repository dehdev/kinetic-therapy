import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ScrollButton from "../components/ScrollButton";
import ServicesCards from "../components/ServicesCards";
import PhotoGallery from "../components/PhotoGallery";
import ContactForm from "../components/ContactForm";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import TeamCards from "../components/TeamCards";

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
          <Header />
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
                variant="h5"
                component="div"
                sx={{
                  flexGrow: 1,
                  fontFamily: "Varela Round, sans-serif",
                  color: "white",
                  width: "80%",
                }}
              >
                Descoperă arta masajului alături de clinica noastră de
                <span style={{ borderBottom: "3px solid #008000" }}>
                  {" "}
                  kinetoterapie.
                </span>
                <br></br>
                <br></br>
                Cursuri{" "}
                <span style={{ borderBottom: "3px solid #008000" }}>
                  autorizate
                </span>{" "}
                și servicii de recuperare medicală profesionale pentru o carieră
                de succes în domeniul terapiilor corporale.{" "}
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
                    width: {md:"150px", xs:"120px"}, // Adjust the width as needed
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
                    width: {md:"150px", xs:"120px"}, // Adjust the width as needed
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
            <Typography
              variant="h2"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Varela Round, sans-serif",
                color: "black",
              }}
            >
              Despre noi{" "}
            </Typography>
            <div className="aboutUsContainer">
              <div className="aboutUs">
                <img
                  src="assets/images/massage.png"
                  alt="massage"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                  }}
                />
                <Typography
                  variant="body1"
                  component="p"
                  sx={{
                    flexGrow: 1,
                    fontFamily: "Varela Round, sans-serif",
                    color: "black",
                    textAlign: "justify",
                  }}
                >
                  <span className="tab"></span>Echipa{" "}
                  <span style={{ borderBottom: "2px solid #008000" }}>
                    Kinetic Therapy
                  </span>{" "}
                  vă așteaptă la cabinetul nostru din{" "}
                  <span style={{ borderBottom: "2px solid #008000" }}>
                    Brăila
                  </span>
                  , în cartierul Progresul, str. Octav Doicescu, bl. D8, parter,
                  cu cele mai noi terapii din domeniul Recuperării Medicale.
                  Personalul nostru calificat aplică aceste terapii în funcție
                  de recomandarea medicală a pacientului, precum și de
                  indicațiile și contraindicațiile fiecărei terapii în parte:
                  kinetoterapie, reeducare posturală globală, Yumeiho, Terapie
                  Schroth, bandajare neuromusculară, drenaj limfatic manual,
                  masaj terapeutic, reflexoterapie, terapie Vojta, terapie
                  Reiki, etc.
                  <br></br>
                  <span className="tab"></span>Ne străduim să ținem în
                  permanență cont de nevoile pacienților noștri și să le oferim
                  cele mai noi terapii existente pe piața medicală. Unele dintre
                  acestea sunt unice pe piața brăileană, cum ar fi terapia
                  Vojta, terapia Schroth și Reeducarea posturală globală RPG.
                  Organizăm frecvent cursuri prin programele de educație
                  medicală continuă la care personalul nostru participă, tocmai
                  pentru a putea oferi pacienților noștri servicii medicale de
                  cea mai înaltă calitate. <br></br>
                  <span className="tab"></span>Ne preocupăm și de achiziționarea
                  aparaturii medicale performante pentru orașul nostru, precum
                  terapia TECAR prin achiziționarea unui aparat{" "}
                  <span style={{ borderBottom: "2px solid #008000" }}>
                    TECAR WINBACK
                  </span>
                  , elongații vertebrale prin achiziționarea unei mese de
                  elongație BTL, și pentru partea de fizioterapie, o combine BTL
                  care dispune de terapie Laser, Magnetoterapie, Ultrasunet și
                  electroterapie.<br></br>
                  <span className="tab"></span>Încercăm să oferim o gamă cât mai
                  largă de terapii, astfel încât să rezolvăm problemele
                  pacienților noștri cât mai eficient! Vă așteptăm cu drag!{" "}
                </Typography>
              </div>
            </div>
            <Typography
              variant="h2"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Varela Round, sans-serif",
                color: "black",
                mt: 10,
              }}
            >
              Servicii{" "}
            </Typography>
            <ServicesCards />
            <Typography
              variant="h2"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Varela Round, sans-serif",
                color: "black",
                mt: 10,
              }}
            >
              Echipa{" "}
            </Typography>
            <TeamCards />
            <Typography
              variant="h2"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Varela Round, sans-serif",
                color: "black",
                mt: 10,
              }}
            >
              Discută cu noi!{" "}
            </Typography>
            <ContactForm/>
            <Typography
              variant="h2"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Varela Round, sans-serif",
                color: "black",
                mt: 10,
              }}
            >
              Album foto{" "}
            </Typography>
            <PhotoGallery />
          </div>
          <Footer />
          <ScrollButton />
        </ThemeProvider>
      </>
    );
  }
}

export default Home;
