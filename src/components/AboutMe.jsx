import { Box, Typography, Container } from '@mui/material';

export default function AboutMe(props) {
  const { isSmallScreen } = props;
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
          complex back-end systems and minimalist front-ends.I also love to
          create random fun projects while watching movies and series.
        </Typography>
        <Typography>
          I&apos;m more of a &quot;less talk, more work&quot; kind of person.
        </Typography>
      </Container>
    </Box>
  );
}
