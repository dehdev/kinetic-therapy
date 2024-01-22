import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import "../fonts/wv.ttf";

const pages = [
  "Despre noi",
  "Servicii",
  "Cursuri",
  "Evenimente",
  "Contact",
];

var greenTextColor = "#008000";
var selectedPageColor = "#D80027";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
        <Box className="contactNav">
          <Box>
            <Typography sx={{ fontFamily: "Varela Round, sans-serif" }}>
              <CalendarMonthIcon sx={{ paddingRight: "5px" }} />
              Program: luni - vineri 8:00 - 20:00
            </Typography>
          </Box>
          <Box id="rightSection">
            <Typography sx={{ fontFamily: "Varela Round, sans-serif" }}>
              <EmailIcon sx={{ paddingRight: "5px" }} />
              pusastef@kinetoterapietarachiu.ro
            </Typography>
            <Typography sx={{ fontFamily: "Varela Round, sans-serif" }}>
              <PhoneIcon sx={{ paddingRight: "5px" }} />
              (+40) 123 345 678
            </Typography>
          </Box>
        </Box>
        <AppBar
          position="static"
          sx={{ background: "white", color: greenTextColor }}
        >
          <Toolbar disableGutters>
            <Typography
              variant="h3"
              component="div"
              sx={{
                flexGrow: 1,
                fontFamily: "Logo",
                ml: 2,
                mr: 2,
              }}
            >
              KINETIC THERAPY <span style={{ color: "black" }}>junior</span>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "flex-end",
                mr: 2,
              }}
            >
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
                mr: 2,
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: greenTextColor,
                    display: "block",
                    fontFamily: "Varela Round, sans-serif",
                    textAlign: "center",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              ></Menu>
            </Box>
          </Toolbar>
        </AppBar>
    </>
  );
}
export default Navbar;
