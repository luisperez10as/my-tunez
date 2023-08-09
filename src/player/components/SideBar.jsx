import React from "react";
import {
  Box,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { SideBarItem } from "./SideBarItem";

import { TurnedInNot } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { closePopup, openPopup } from "../../store/form";
import AddFormPopup from "./popups/AddFormPopUp";

export const SideBar = ({ drawerWidth = 240 }) => {
  const { artists } = useSelector((state) => state.artist);
  
  const isPopupOpen = useSelector((state) => state.form.isPopupOpen);

  const dispatch = useDispatch();

  const handleOpenPopup = () => {
    dispatch(openPopup());
  };


  const handleClosePopup = () => {
    dispatch(closePopup());
  };

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, zIndex: 1 }}
    >
      <Drawer
        variant="persistent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            MY TUNEZ
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            //   onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List>
          {artists.map((note) => (
            <SideBarItem key={note.id} {...note} />
          ))}
        </List>
        <ListItem disablePadding>
          <ListItemButton
          // onClick={onClickItem}
          >
            <ListItemAvatar>
              {/* <Avatar alt="Remy Sharp" src="https://picsum.photos/200" /> */}
            </ListItemAvatar>
            <Grid container>
              <ListItemText onClick={handleOpenPopup} primary="Añadir +" />
              <AddFormPopup open={isPopupOpen} handleClose={handleClosePopup} />
            </Grid>
          </ListItemButton>
        </ListItem>
      </Drawer>
    </Box>
  );
};
