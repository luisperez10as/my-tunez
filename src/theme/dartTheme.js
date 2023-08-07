import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const dartTheme = createTheme({
  palette: {
    primary: {
      main: grey[100]
    },
    secondary: {
      main: '#543884'
    },
    error: {
      main: red.A400
    }
  }
});
