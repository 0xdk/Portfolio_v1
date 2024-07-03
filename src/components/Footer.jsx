import { Box, Container, Link } from '@mui/material';
// import CopyrightIcon from '@mui/icons-material/Copyright';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import Learning from './Learning';

function handleClick(event) {
  event.preventDefault();
  const targetElement = document.getElementById('projects-section');
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

export default function Footer(props) {
  const { isSmallScreen } = props;
  return (
    <Box sx={{ background: 'rgb(34,45,28)', padding: '30px 30px' }}>
      <Container>
        {/* learning paragraph */}
        <Learning isSmallScreen={isSmallScreen} />
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={isSmallScreen ? 5 : 20}
          sx={{
            fontSize: '1.5rem',
          }}
        >
          {/* <Link href="#">
            <CopyrightIcon color="secondary" />
          </Link> */}
          <Link href="#projects-section" onClick={handleClick}>
            <LinkedInIcon color="secondary" />
          </Link>
          <Link href="#">
            <InstagramIcon color="secondary" />
          </Link>
          <Link href="#">
            <GitHubIcon color="secondary" />
          </Link>
          {/* <CopyrightIcon color="secondary" sx={{ textAlign: 'center' }} /> */}
        </Box>{' '}
      </Container>
    </Box>
  );
}
