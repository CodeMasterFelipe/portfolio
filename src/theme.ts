import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(200, 255, 255, 1)',
    },
    background: {
      default: '#242424',
    },
  },
  typography: {
    fontFamily: 'Exo, sans-serif',
    h1: {
      fontFamily: 'Azonix',
      fontWeight: 200,
      fontSize: '5rem',
      color: 'rgba(200, 255, 255, 1)',
    },
    h2: {
      fontFamily: 'Azonix',
      fontSize: '2rem',
      fontWeight: 'lighter',
      color: 'rgba(200, 255, 255, 1)',
    },
    h6: {
      fontWeight: 'bold',
      color: 'rgba(230, 230, 230, 1)',
    }
  }
})
