import {
  ImageListItem,
  ImageList,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTrack, startLoadingTrack } from "../../store/track";
import { Box } from "@mui/system";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";

export const CardTrack = ({ albumId }) => {
  const dispatch = useDispatch();
  const { tracks } = useSelector((state) => state.track);

  useEffect(() => {
    if (albumId) {
      dispatch(startLoadingTrack(albumId));
    }
  }, [albumId, dispatch]);

  if (!albumId) {
    return <p>No Tracks.s</p>; // You can return any fallback content here
  }

  // const [playingTrackId, setPlayingTrackId] = useState(null);

  const handleCardMouseEnter = (trackId) => {
    console.log(trackId);
    // setPlayingTrackId(trackId);
  };

  const handleCardMouseLeave = () => {
    console.log("handleCardMouseLeave");

    // setPlayingTrackId(null);
  };

  const handlePlayButtonClick = (event, trackId, track) => {
    event.stopPropagation(); 
    dispatch(setActiveTrack(trackId));
  };

  return (
    <Grid width="100%">
         <ListItemButton>
          <ListItemText
            // onClick={handleOpenPopup}
            primary="Añadir cancion +"
          />
        </ListItemButton>
      <List>
        {tracks.map((track) => (
          <ListItem key={track.id}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <CardMedia
                component="img"
                sx={{ width: 100, minWidth: 100 }}
                image={track.image}
                alt="Placeholder"
                onMouseEnter={() => handleCardMouseEnter(track.id)}
                onMouseLeave={handleCardMouseLeave}
                className="track-image  hovered"
              />
              {/* {playingTrackId === track.id ? "Pausa" : "Play"} */}
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 15,
                  width: "100px",
                  height: "122px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={(event) => handlePlayButtonClick(event, track.id, track)}
              >
                <PlayCircleOutlineIcon sx={{ fontSize: 40, color: "white" }} />
                {/* <audio  src={track.link} /> */}

                <PauseCircleOutlineIcon sx={{ fontSize: 40, color: "white" }} />
              </Box>
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {track.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {track.gender} : {track.date}
                  </Typography>
                  <Typography variant="body2">
                    Detalle de la cancion.
                  </Typography>
                </CardContent>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  p: 2,
                }}
              >
                <Typography color="text.secondary">{track.date}</Typography>
              </Box>
            </Card>
          </ListItem>
        ))}
      </List>
    </Grid>
  );
};
