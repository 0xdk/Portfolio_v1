import { Box, Container, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';

import Learning from './Learning';

export default function Footer({ isSmallScreen }) {
  return (
    <Box sx={{ background: 'rgb(34,45,28)', paddingX: '30px 30px' }}>
      <Container>
        {/* learning paragraph */}
        <Learning isSmallScreen={isSmallScreen} />
        <Box
          display="flex"
          justifyContent="center"
          gap={isSmallScreen ? 5 : 20}
          sx={{
            fontSize: '1.5rem',
          }}
        >
          <Link href="https://www.linkedin.com/in/dinesh-kumar-958a4a1ba/">
            <LinkedInIcon color="secondary" />
          </Link>
          <Link href="https://www.instagram.com/0xd.k/">
            <InstagramIcon color="secondary" />
          </Link>
          <Link href="https://github.com/0xdk">
            <GitHubIcon color="secondary" />
          </Link>
          <Link href="https://x.com/0xd_k">
            <XIcon color="secondary" />
          </Link>
        </Box>{' '}
      </Container>
    </Box>
  );
}
