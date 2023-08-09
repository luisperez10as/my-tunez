import { Grid, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar, SideBar, Footer } from "../components";
import React, { ReactNode } from "react";

const drawerWidth = 280;

const PlayerLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box
        sx={{ display: "flex", flexGrow: 1 }}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <NavBar drawerWidth={drawerWidth} />

        <SideBar 
        sx={{ display: "flex", flexGrow: 1 }}
        
        drawerWidth={drawerWidth} />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />

          {children}
        </Box>
      </Box>
      <Box 
       sx={{ display: "flex", flexGrow: 2, zIndex:1 }}
      >
      <Footer
      ></Footer>
      </Box>
    </Box>
  );
};

export { PlayerLayout };
