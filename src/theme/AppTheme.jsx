import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { purpleTheme } from './purpleTheme';
import { dartTheme } from './dartTheme';



const AppTheme  = ({ children }) => {
  return (
    <ThemeProvider theme={dartTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export {AppTheme} ;
