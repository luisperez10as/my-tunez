import { useMemo } from "react";
import { useDispatch } from "react-redux";
import {
  Avatar,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";
import { setActiveArtist } from "../../store/artist";

export const SideBarItem = ({
  id,
  name = "",
  genders = [],
  members = [],
  website,
  image,
}) => {
  const dispatch = useDispatch();

  const onClickItem = () => {
    dispatch(setActiveArtist({ id, name, genders, members, website, image }));
  };

  const newName = useMemo(() => {
    return name.length > 17 ? name.substring(0, 17) + "..." : name;
  }, [name]);
  return (
    <ListItem disablePadding>
    <ListItemButton onClick={onClickItem}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={image} />
      </ListItemAvatar>
      <Grid container direction="column">
        <Grid item>
          <ListItemText primary={newName} />
        </Grid>
        <Grid item>
          <Typography color="text.secondary">{website}</Typography>
        </Grid>
      </Grid>
    </ListItemButton>
  </ListItem>
  );
};
