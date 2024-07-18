import { useState } from 'react';
import { Container, Link, Typography, Grid, Box } from '@mui/material';
import ToolList from './Tools';
import { tools, allTools } from './techStackData';

import './TechStack.css';

export default function TechStack({ isSmallScreen }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <Container sx={{ mt: isSmallScreen ? 5 : 10 }}>
      <Typography variant="h5" sx={{ mb: 2, marginX: 7 }}>
        Tools & Technologies
      </Typography>
      <Box
        sx={{
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* big ass if statement */}
        {!showMore ? (
          // if showMore FALSE this part will run
          <Box sx={{ mt: 1 }}>
            <Grid container spacing={2} sx={{ ml: 2 }}>
              {tools.map((tool, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  {/* Top tools list */}
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
          // if not this part will run
          <Box sx={{ mt: 1 }}>
            <Grid container spacing={2} sx={{ ml: 2 }}>
              {allTools.map((tool, index) => (
                <Grid item xs={6} sm={4} md={3} key={index}>
                  {/* All tools list */}
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
