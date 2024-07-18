import { Container, List, ListItem, Typography } from '@mui/material';

import './projects.css';

// list of projects names
import ProjectData from './ProjectData';
// project component
import Project from './project';

export default function Projects({ isSmallScreen }) {
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
            sx={{ p: 0, width: isSmallScreen ? '100%' : '40%' }}
          >
            {/* Project Component */}
            <Project
              id={index}
              key={index}
              path={path}
              smallScreen={isSmallScreen}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
