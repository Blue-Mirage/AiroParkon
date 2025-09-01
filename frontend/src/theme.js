import { createTheme } from '@mui/material/styles';

// Light theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#94C05F',
      light: '#A8CE7A',
      dark: '#7BA64B',
    },
    background: {
      default: '#ffffff',
    },
    logo: {
      filter: 'none', // normal logo
    },
  },
  shape: {
    borderRadius: 4,
  },
});

// Dark theme
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E33935',
      light: '#E91d18',
      dark: '#D7241f',
    },
    background: {
      default: '#121212',
    },
    logo: {
      filter: 'brightness(0) invert(1)', // white logo
    },
  },
  shape: {
    borderRadius: 4,
  },
});
