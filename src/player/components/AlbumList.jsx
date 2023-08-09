import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
  Typography,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingAlbum } from "../../store/album";
import { useEffect } from "react";
import { CardTrack } from "./CardTrack";

export const AlbumList = ({ artistaId }) => {
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.album);

  useEffect(() => {
    if (artistaId) {
      dispatch(startLoadingAlbum(artistaId));
    }
  }, [artistaId, dispatch]);

  if (!artistaId) {
    return <p>No Albums.</p>; // You can return any fallback content here
  }
  return (
    <Box width="100%" textAlign="left">
      <Typography variant="h5" component="h2">
        {"album.title"}
      </Typography>
      <Typography color="textSecondary" gutterBottom>
        Artist: {"album.artist"}
      </Typography>
      <Grid container>
        <ListItemButton>
          <ListItemText
            // onClick={handleOpenPopup}
            primary="Añadir album +"
          />
        </ListItemButton>
      </Grid>
      {albums.map((album) => (
        <Grid container key={album.id}>
          <Typography fontSize={25} fontWeight="light">
            {album.title}
          </Typography>
          <CardTrack albumId={album.id} />
        </Grid>
      ))}
    </Box>
  );
};
