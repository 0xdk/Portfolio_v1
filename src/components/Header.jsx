import { Link as RouterLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, MenuList, ListItem, Container } from '@mui/material';
import { Box } from '@mui/system';
import './Header.css';
export default function Header() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginY: 4 }} className="navbar">
        <Router>
          <Link
            variant="h5"
            color="primary"
            component={RouterLink}
            to="/"
            underline="none"
            className="navbar-link"
          >
            0XDK
            {/* <Typography sx={{ fontSize: '1.5rem !important' }}>0XDK</Typography> */}
          </Link>
        </Router>
        <MenuList className="menu-list">
          <ListItem>
            <Link underline="hover" href="#" color="primary">
              Contact
              {/* <Typography>Something</Typography> */}
            </Link>
          </ListItem>
        </MenuList>
      </Box>
    </Container>
  );
}
