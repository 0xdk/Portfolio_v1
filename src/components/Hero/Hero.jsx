import { Container, Card, CardMedia } from '@mui/material';
import profilePicture from '../../images/profile-picture.png';
import HeroCard from './HeroCard';

import './Hero.css';

export default function Hero({ isSmallScreen }) {
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
          flexWrap: isSmallScreen ? 'wrap' : 'none',
          padding: 2,
        }}
      >
        {/* Hero card content */}
        <HeroCard />
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
