import { Box } from '@mui/system';
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from '@mui/material';
import profilePicture from '../images/profile-picture-3.png';

import './Hero.css';

export default function Hero(props) {
  const { isSmallScreen } = props;

  const resumeLink = '../../assets/Dinesh_resume.pdf';
  return (
    <Container
      id="hero-section"
      component="section"
      sx={{
        marginY: 6,
        display: 'inline-block',
      }}
    >
      <Card
        id="profile-card"
        sx={{
          // fontSize: isSmallScreen ? '1rem' : '2rem',
          flexWrap: isSmallScreen ? 'wrap' : 'none',
          padding: 2,
        }}
      >
        <CardContent id="profile-card-detail" sx={{ gap: 4 }}>
          <Typography>
            Hi!, I am
            <Typography
              // variant={isSmallScreen ? 'h1' : 'jobTitle'}
              variant="jobTitle"
              color="primary"
              sx={{ mx: 1 }}
            >
              Dinesh Kumar
            </Typography>
            I am base in city called Chennai India
          </Typography>
          <Box className="intro-paragraph" paragraph="true">
            <Typography sx={{ fontSize: '1rem', my: 2 }}>
              As a
              <Typography variant="jobTitle" color="primary" sx={{ mx: 1 }}>
                Full-Stack Developer
              </Typography>
              I love tackling the complexities of backend systems and crafting
              engaging front-ends. My keen eye for detail and passion for
              problem-solving drive me to bring innovative ideas to life through
              code.
            </Typography>
            <Button
              variant="outlined"
              href={resumeLink}
              target="_blank"
              sx={{ margin: 1 }}
            >
              View Resume
            </Button>
            <Button variant="outlined" target="_blank" sx={{ margin: 1 }}>
              About Me
            </Button>
          </Box>
        </CardContent>

        <CardMedia
          component="img"
          id="profile-picture"
          image={profilePicture}
          sx={{
            width: 'auto',
            height: isSmallScreen ? 200 : 300,
          }}
        />
      </Card>
    </Container>
  );
}
