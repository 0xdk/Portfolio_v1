import {
  Container,
  List,
  ListItem,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import './projects.css';

// import ProjectData from './ProjectData';
const ProjectData = [
  '/Gold-Price-tracker',
  '/Campground-Project',
  '/tour-planning-landing-page',
];
import Project from './project';

export default function Projects() {
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      id="projects-section"
      component="section"
      sx={{ marginY: 12, display: 'inline-block' }}
    >
      <Typography variant="h2" sx={{ mb: 8, textAlign: 'center' }}>
        Projects
      </Typography>
      <List
        className="projects-list-container"
        sx={{ gap: 8, p: 0, flexWrap: 'wrap', placeContent: 'center' }}
      >
        {ProjectData.map((path, index) => (
          <ListItem
            key={index}
            sx={{ p: 0, width: smallScreen ? '100%' : '40%' }}
          >
            <Project
              id={index}
              key={index}
              path={path}
              smallScreen={smallScreen}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
