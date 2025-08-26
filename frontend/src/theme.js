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
      main: '#6B3FA0',
      light: '#8A5BC3',
      dark: '#4A2A73',
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
