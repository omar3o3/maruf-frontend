import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Link as RouterLink, NavLink } from "react-router-dom";
import Link from "@mui/material/Link";

import { styled } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

import marufLogo from "../images/maruf_logo.png";

const drawerWidth = 240;
const navItems = ["Home", "About", "Calendar", "Contact"];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const ColorAppBar = styled(AppBar)(({ theme }) => ({
    backgroundColor: "white",
    color: "black",
    button: {
      color: "black",
      "&:hover": {
        backgroundColor: "light gray",
        color: "#E4B45A",
      },
    },
    a: {
      color: "black",
      "&:hover": {
        backgroundColor: "light gray",
        color: "#E4B45A",
      },
    },
  }));

  const CustomListItemText = styled(ListItemText)(({ theme }) => ({
    // color: "black",
    a: {
      color: "black",
      "&:hover": {
        backgroundColor: "light gray",
        color: "#E4B45A",
      },
    },
  }));

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Maruf
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            {/* <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton> */}
            <CustomListItemText sx={{ textAlign: "center" }}>
              {item === "Home" ? (
                <a
                  key={item}
                  sx={{ color: "#fff" }}
                  href={`/`}
                  style={{ textDecoration: "none" }}
                >
                  {item}
                </a>
              ) : (
                <a
                  key={item}
                  sx={{ color: "#fff" }}
                  href={`/${item}`}
                  style={{ textDecoration: "none" }}
                >
                  {item}
                </a>
              )}
            </CustomListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className="mainNavBar">
      <CssBaseline />
      <ColorAppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {/* Maruf */}
            <img
            src={marufLogo}
            alt="maruf logo"
            style={{
            //   width: "8%",
            // height: "10%"
              maxWidth: "12%",
              // marginTop: ".5%",
              // position: "relative",
            }}
            // sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))} */}
            {/* {navItems.map((page) => (
              <MenuItem key={page}>
                <RouterLink
                  // key={page}
                  // component={RouterLink}
                  to={`/${page}`}
                  underline="none"
                  color="black"
                >
                  {page}
                </RouterLink>
              </MenuItem>
            ))} */}
            {navItems.map((item) =>
              item === "Home" ? (
                <a
                  key={item}
                  sx={{ color: "#fff" }}
                  href={`/`}
                  style={{ textDecoration: "none", marginRight: "2rem" }}
                >
                  {item}
                </a>
              ) : (
                <a
                  key={item}
                  sx={{ color: "#fff" }}
                  href={`/${item}`}
                  style={{ textDecoration: "none", marginRight: "2rem" }}
                >
                  {item}
                </a>
              )
            )}
          </Box>
        </Toolbar>
      </ColorAppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default NavBar;
