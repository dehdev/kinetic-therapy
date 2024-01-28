import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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

export default class ContactForm extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={responsiveTheme}>
          <div className="contactFormContainer">
            <div className="contactFormInfo">
              <div className="contactFormInfoHeader">
                <Typography
                  variant="h3"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    margin: 0,
                  }}
                >
                  Date de contact
                </Typography>
              </div>
              <div className="contactFormInfoBody">
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    textAlign: "left",
                  }}
                >
                  <LocationOnIcon
                    sx={{
                      marginRight: 1,
                      color: "white",
                      paddingRight: 1,
                    }}
                  />
                  Brăila, județ Brăila, Cartier Progresul, str. Octav Doicescu
                  nr. 16, bl. D8, sc.1
                </Typography>
                <div className="contact-form-separator"></div>
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PhoneIcon
                    sx={{
                      marginRight: 1,
                      color: "white",
                      paddingRight: 1,
                    }}
                  />
                  <a href="tel:(+40)767421676">(+40) 767 421 676</a>
                </Typography>
                <div className="contact-form-separator"></div>
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <EmailIcon
                    sx={{
                      marginRight: 1,
                      color: "white",
                      paddingRight: 1,
                    }}
                  />
                  <a
                    style={{
                      padding: 0,
                      wordBreak: "break-all",
                      display: "inline-block",
                    }}
                    href="mailto:pusastef@kinetoterapietarachiu.ro"
                  >
                    pusastef@kinetoterapietarachiu.ro
                  </a>
                </Typography>
                <div className="contact-form-separator"></div>
                <Typography
                  variant="h6"
                  color="white"
                  gutterBottom
                  sx={{
                    fontFamily: "Varela Round, sans-serif",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeIcon
                    sx={{
                      marginRight: 1,
                      paddingRight: 1,
                      color: "white",
                    }}
                  />
                  Luni - Vineri 8:00 - 20:00
                </Typography>
              </div>
            </div>
            <div className="contactForm"></div>
          </div>
        </ThemeProvider>
      </>
    );
  }
}
