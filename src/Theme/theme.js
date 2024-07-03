import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Self-hosted fonts
import SourceSans3Light from './fonts/SourceSans3-Light.woff';
import SourceSans3Light2 from './fonts/SourceSans3-Light.woff2';
import SourceSans3Regular from './fonts/SourceSans3-Regular.woff';
import SourceSans3Regular2 from './fonts/SourceSans3-Regular.woff2';

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
      main: '#FFAABE',
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
    fontFamily: 'SourceSans3-Regular, sans-serif',
    h1: {
      fontFamily: 'SourceSans3-Light',
      fontSize: '3rem',
      letterSpacing: 1,
    },
    h2: {
      fontFamily: 'SourceSans3-Light',
      letterSpacing: 1,
      fontSize: '3rem',
    },
    h5: {
      fontFamily: 'SourceSans3-Light',
      letterSpacing: 1,
      fontSize: '1.5rem',
    },

    // nameTitle: {
    //   fontFamily: 'SourceSans3-Regular',
    //   letterSpacing: 1,
    //   fontSize: '2rem',
    // },
    jobTitle: {
      fontFamily: 'SourceSans3-Regular',
      fontSize: '2rem',
    },
    repositoryLanguage: {
      fontFamily: 'SourceSans3-Regular',
      textTransform: 'uppercase',
    },
    repositoryDate: {
      fontFamily: 'SourceSans3-Regular',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'SourceSans3-Light';
          src: local('SourceSans3-Light'), url(${SourceSans3Light}) format('woff'),
            url(${SourceSans3Light2}) format('woff2');
        }

        @font-face {
          font-family: 'SourceSans3-Regular';
          src: local('SourceSans3-Regular'), url(${SourceSans3Regular}) format('woff'),
            url(${SourceSans3Regular2}) format('woff2');
        }

        body {
          font-family: 'SourceSans3-Regular, sans-serif';
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontFamily: 'SourceSans3-Regular',
          letterSpacing: 0.65,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#627E4F',
          fontFamily: 'SourceSans3-Regular',
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
