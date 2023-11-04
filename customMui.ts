import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      light: '#d2e285',
      main: '#b5c451',
      dark: '#939742',
      contrastText: '#353535',
    },
    secondary: {
      light: '#8e8e8e',
      main: '#353535',
      dark: '#151515',
      contrastText: '#f8f8f8',
    },
    warning: {
      light: '#f2bc52',
      main: '#eca64b',
      dark: '#e2823e',
      contrastText: '#353535',
    },
    error: {
      light: '#c37474',
      main: '#c95956',
      dark: '#a2332f',
      contrastText: '#f8eaed',
    },
  },
});
