// import { useState } from 'react';
import './App.css';

import { ThemeProvider } from '@mui/material/styles';
// react component
import Header from './components/Header';
import Hero from './components/Hero';
import FavTools from './components/FavTools/FavTools';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

// MUI component
import theme from './Theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
// import { Component } from '@mui/material';

// const sectionConfigs = {
//   Component: 'section',
//   sx: { marginY: 12, display: 'inline-block' },
// };

const App = () => {
  // const isIpadScreenLess = useMediaQuery(defaultTheme.breakpoints.down('md'));
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallScreen = useMediaQuery('(max-width:750px)');
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero isSmallScreen={isSmallScreen} />
      <FavTools isSmallScreen={isSmallScreen} />
      <Projects />
      <AboutMe isSmallScreen={isSmallScreen} />
      <Footer isSmallScreen={isSmallScreen} />
    </ThemeProvider>
  );
};

export default App;
