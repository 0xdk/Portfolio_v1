import './App.css';

// React component
import Header from './components/Header';
import Hero from './components/Hero/Hero';
import TechStack from './components/techStack/TechStacks';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

// MUI component
import theme from './Theme/theme';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero isSmallScreen={isSmallScreen} />
      <TechStack isSmallScreen={isSmallScreen} />
      <Projects isSmallScreen={isSmallScreen} />
      <AboutMe isSmallScreen={isSmallScreen} />
      <Footer isSmallScreen={isSmallScreen} />
    </ThemeProvider>
  );
};

export default App;
