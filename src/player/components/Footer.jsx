import { useState } from "react";

import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box, Container } from "@mui/material";
import * as C from "../../styles";

import PlayerMusic from "../../PlayerMusic";

export function Footer() {
  const [id, setId] = useState("");
  // const [isFull, setIsFull] = useState(true);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "100px",
        zIndex: "1200",
      }}
      component="footer"
    >
      <div>
        <PlayerMusic
        />
      </div>
    </Box>
  );
}
