import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const dartTheme = createTheme({
  palette: {
    primary: {
      main: blue[700],
    },
    secondary: {
      main: "#543884",
    },
    error: {
      main: red.A400,
    },
    MuiIconButton: {
      color: blue[700],
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: blue[700], 
        },
      },
    },
   
  },
});
