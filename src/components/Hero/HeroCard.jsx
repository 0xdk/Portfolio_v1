const resumeLink =
  'https://drive.google.com/file/d/1BTeEGWy-9KFPZ35Z0NxjsThdJ0mKWeSg/view';

import { CardContent, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';

// For smooth Scrolling effect
function handleClick(event) {
  event.preventDefault();
  const targetElement = document.getElementById('aboutMe');
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

export default function HeroCard() {
  return (
    <CardContent id="profile-card-detail" sx={{ gap: 4 }}>
      <Typography>
        Hi! I&apos;m
        <Typography variant="jobTitle" color="primary" sx={{ mx: 1 }}>
          Dinesh Kumar
        </Typography>
        from Chennai.
      </Typography>
      <Box paragraph="true">
        <Typography sx={{ fontSize: '1rem', my: 1 }}>
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
          Resume
        </Button>
        <Button
          variant="outlined"
          href="#aboutMe"
          onClick={handleClick}
          sx={{ margin: 1 }}
        >
          About Me
        </Button>
      </Box>
    </CardContent>
  );
}
