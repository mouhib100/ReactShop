import React from "react";

//render the data under the navbar
import { Outlet } from "react-router-dom";
import CustomNavbar from "./CustomNavbar";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <div>
      <CustomNavbar />
      <Box component="main" sx={{ p: 3, mt: 8 }}>
        <Outlet />
      </Box>
    </div>
  );
};

export default MainLayout;
