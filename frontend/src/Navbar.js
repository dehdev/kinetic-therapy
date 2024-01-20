import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import logo from "./logo.png";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import React, { Component } from "react";

var greenText = "#008000";
var selectedColor = "#D80027";

const horizontalButtons = [
  <Button
    key="acasa"
    size="large"
    sx={{
      backgroundColor: "#E5E4E2",
      color: greenText,
      fontFamily: "Varela Round, sans-serif",
    }}
  >
    Acasa
  </Button>,
  <Button
    key="servicii"
    size="large"
    sx={{ color: greenText, fontFamily: "Varela Round, sans-serif" }}
  >
    Servicii
  </Button>,
  <Button
    key="cursuri"
    size="large"
    sx={{ color: greenText, fontFamily: "Varela Round, sans-serif" }}
  >
    Cursuri
  </Button>,
  <Button
    key="evenimente"
    size="large"
    sx={{ color: greenText, fontFamily: "Varela Round, sans-serif" }}
  >
    Evenimente
  </Button>,
  <Button
    key="despre noi"
    size="large"
    sx={{ color: greenText, fontFamily: "Varela Round, sans-serif" }}
  >
    Despre noi
  </Button>,
  <Button
    key="contact"
    size="large"
    sx={{ color: greenText, fontFamily: "Varela Round, sans-serif" }}
  >
    Contact
  </Button>,
];

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="contactNav">
          <div>
            <p>
              {" "}
              <CalendarMonthIcon sx={{ paddingRight: "5px" }} />
              Program: luni - vineri 8:00 - 20:00
            </p>
          </div>
          <div id="rightSection">
            <p>
              {" "}
              <EmailIcon sx={{ paddingRight: "5px" }} />
              pusastef@kinetoterapietarachiu.ro
            </p>
            <p>
              {" "}
              <PhoneIcon sx={{ paddingRight: "5px" }} />
              <u>(+40) 123 345 678</u>
            </p>
          </div>
        </nav>
        <nav className="menuNav">
          <img src={logo} alt="logo"></img>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup
              orientation="horizontal"
              variant="text"
              aria-label="vertical contained button group"
              sx={{
                ".MuiButtonGroup-grouped:not(:last-of-type)": {
                  borderColor: "lightgray",
                },
              }}
            >
              {horizontalButtons}
            </ButtonGroup>
          </Box>
        </nav>
      </div>
    );
  }
}

export default Navbar;
