import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Self-hosted fonts
import RalewayRegular from './fonts/RalewayRegular.woff';
import RalewayRegular2 from './fonts/RalewayRegular.woff2';
import RalewayMedium from './fonts/RalewayMedium.woff';
import RalewayMedium2 from './fonts/RalewayMedium.woff2';

// Default CSS
import '../App.css';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#627E4F',
      // main: '#FD510C',
    },
    secondary: {
      main: '#627E4F',
    },
    info: {
      main: '#DBE2E9',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#129277',
    },
  },
  typography: {
    fontFamily: 'RalewayRegular',
    h1: {
      fontFamily: 'RalewayRegular',
      fontSize: '3rem',
      letterSpacing: 1,
    },
    h2: {
      fontFamily: 'RalewayRegular',
      letterSpacing: 1,
      fontSize: '2rem',
    },
    h5: {
      fontFamily: 'RalewayRegular',
      letterSpacing: 1,
      fontSize: '1.5rem',
    },
    jobTitle: {
      fontFamily: 'RalewayMedium',
      fontSize: '2rem',
    },
    repositoryLanguage: {
      fontFamily: 'RalewayRegular',
      textTransform: 'uppercase',
    },
    repositoryDate: {
      fontFamily: 'RalewayRegular',
      fontSize: '1.5rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'RalewayMedium';
          src: local('RalewayMedium'), url(${RalewayMedium}) format('woff'),
            url(${RalewayMedium2}) format('woff2');
        }

        @font-face {
          font-family: 'RalewayRegular';
          src: local('RalewayRegular'), url(${RalewayRegular}) format('woff'),
            url(${RalewayRegular2}) format('woff2');
        }

        body {
          font-family: 'RalewayRegular';
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontFamily: 'RalewayRegular',
          letterSpacing: 0.65,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#627E4F',
          fontFamily: 'RalewayRegular',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0px', // Removing the default padding
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
