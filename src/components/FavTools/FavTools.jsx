import { useState } from 'react';
import { Container, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import ToolList from './ToolList';
import { tools, allTools } from './toolsData';

import './FavTools.css';

export default function FavTools(props) {
  const { isSmallScreen } = props;
  const [showMore, setShowMore] = useState(false);
  return (
    <Container sx={{ mt: isSmallScreen ? 5 : 10 }}>
      <Typography variant="h2" sx={{ mb: 4, textAlign: 'center' }}>
        Tech Stack
      </Typography>
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {!showMore ? (
          <Box sx={{ mt: 1 }}>
            <Grid container spacing={2} sx={{ ml: 2 }}>
              {tools.map((tool, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <ToolList {...tool} />
                </Grid>
              ))}
              {!showMore && (
                <Link
                  component="button"
                  onClick={() => setShowMore(true)}
                  sx={{ ml: 4, mt: 1.5, fontSize: '0.9rem' }}
                >
                  See More...
                </Link>
              )}
            </Grid>
          </Box>
        ) : (
          <Box sx={{ mt: 1 }}>
            <Grid container spacing={2} sx={{ ml: 2 }}>
              {allTools.map((tool, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  <ToolList {...tool} isSmallScreen={isSmallScreen} />
                </Grid>
              ))}
              {showMore && (
                <Link
                  component="button"
                  onClick={() => setShowMore(false)}
                  sx={{ ml: 2, mt: 1.5, fontSize: '0.9rem' }}
                >
                  Show Less...
                </Link>
              )}
            </Grid>
          </Box>
        )}
      </Box>
    </Container>
  );
}
