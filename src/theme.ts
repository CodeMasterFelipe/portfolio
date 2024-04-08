import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#437492',
    },
    background: {
      default: '#323232',
    },
  },
  typography: {
    fontFamily: 'Exo, sans-serif',
    h1: {
      fontFamily: 'Azonix',
      fontWeight: 200,
      fontSize: '5rem',
      color: '#2b404e',
    },
    h2: {
      fontFamily: 'Azonix',
      fontSize: '2rem',
      fontWeight: 'lighter',
      color: '#2b404e',
    },
    h6: {
      fontWeight: 300,
    }
  }
})
