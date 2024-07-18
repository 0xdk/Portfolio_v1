import { Box, Typography, Container } from '@mui/material';
import Contact from './Contact';

export default function AboutMe({ isSmallScreen }) {
  return (
    <Box id="aboutMe">
      <Container
        sx={{
          width: isSmallScreen ? '90%' : '40%',
          marginY: isSmallScreen ? 2 : 5,
        }}
      >
        <Typography textAlign="center" variant="h2">
          About ME
        </Typography>
        <Typography sx={{ mt: '7px', width: '100%', marginBottom: 4 }}>
          {/* I&apos;m <Typography color="primary">தினேஷ்</Typography> */}
          I&apos;m a self-taught developer who enjoys designing and building
          complex back-end systems and minimalist front-ends. I also love
          creating fun projects while watching movies and series. Recently, I
          started reading books and have completed seven so far. I enjoy
          backpacking from time to time. I&apos;m into mechanical keyboards and
          own three of them, Additionally, I&apos;ve started learning German,
          so, Guten Tag!
        </Typography>
        <Typography>
          I&apos;m more of a &quot;less talk, more work&quot; kind of person.
          let&apos;s work together👇
        </Typography>
        {/* Contact me component */}
        <Contact isSmallScreen={isSmallScreen} />
      </Container>
    </Box>
  );
}
