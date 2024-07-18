import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, MenuList, ListItem, Container } from '@mui/material';
import { Box } from '@mui/system';
import './Header.css';

export default function Header() {
  return (
    <Router>
      <Container>
        <Box sx={{ flexGrow: 1, marginY: 4 }} className="navbar">
          <Link
            variant="h5"
            color="primary"
            component={RouterLink}
            to="/"
            underline="none"
            className="navbar-link"
          >
            0XDK
          </Link>
          <MenuList className="menu-list">
            <ListItem>
              <Link href="mailto:dineshrk394@gmail.com" underline="hover">
                Contact
              </Link>
            </ListItem>
          </MenuList>
        </Box>
      </Container>
    </Router>
  );
}
