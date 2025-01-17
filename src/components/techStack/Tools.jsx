import { Box, Typography } from '@mui/material';

const Tools = ({ src, alt, name, isSmallScreen }) => (
  <Box
    className="tool-item"
    sx={{ display: 'flex', alignItems: 'center', margin: '0 10px' }}
  >
    <img src={src} alt={alt} className="tool-icon" />
    <Typography fontSize={isSmallScreen ? '0.9rem' : '1rem'}>{name}</Typography>
  </Box>
);

export default Tools;
