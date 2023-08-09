import { useEffect, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  DeleteOutline,
  SaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import { setActiveArtist } from "../../store/player";
import { CardTrack } from "../components";
import { AlbumList } from "../components/AlbumList";

export const ItemView = () => {
  const dispatch = useDispatch();
  const { active: artist } = useSelector((state) => state.artist);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {artist.name}
        </Typography>
      </Grid>
      <Grid container>
        {!!artist.id ? <AlbumList artistaId={artist.id}></AlbumList> : <></>}
      </Grid>
    </Grid>
  );
};
