import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const CustomNavbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Store
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }} component={Link} to="/">
              Home
            </Button>

            <Button sx={{ color: "#fff" }} component={Link} to="/products/add">
              Add new Product
            </Button>
            <Button sx={{ color: "#fff" }} component={Link} to="/cart">
              Panier {cartItems.length > 0 && cartItems.length}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default CustomNavbar;
