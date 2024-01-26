// CustomizedDialogs.js

import React from "react";
import Button from "@mui/material/Button";
import { styled, useTheme } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    fontFamily: "Varela Round, sans-serif",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiTypography-root": {
    fontFamily: "Varela Round, sans-serif", // Apply font directly to Typography
  },
  "& .MuiButton-text": {
    fontFamily: "Varela Round, sans-serif", // Apply font directly to Typography
  },
  "& .MuiPaper-root": {
    borderRadius: "20px",
  },
}));

export default function ServicesModal({ dialogText, dialogTitle }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const listItems = dialogText.split("<br></br>");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <React.Fragment>
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
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
        <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          theme={theme} // Pass the theme to the styled component
          sx={{
            backdropFilter: "blur(3px)",
          }}
        >
          <DialogTitle
            sx={{ m: 0, p: 2, backgroundColor: "green", color: "white" }}
            id="customized-dialog-title"
          >
            {dialogTitle}
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              <ul>
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Am înțeles
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </React.Fragment>
    </>
  );
}
