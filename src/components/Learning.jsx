import { Box, Typography, Container } from '@mui/material';

export default function Learning(props) {
  const { isSmallScreen } = props;
  console.log(isSmallScreen);
  return (
    <Container
      sx={{
        marginY: isSmallScreen ? 2 : 10,
        color: 'rgb(207, 207, 196);',
        width: isSmallScreen ? '100%' : '50%',
      }}
    >
      <Box>
        <Typography variant="h5" textAlign="center" sx={{ marginBottom: 4 }}>
          ACTIVE LEARNING
        </Typography>
        <Typography sx={{ marginBottom: 3 }}>
          Continuous learning and personal growth are non-negotiable for me.
          Having the necessary time and resources to enhance my knowledge is
          essential.
        </Typography>
        <Typography sx={{ mt: '7px', width: '100%', marginBottom: 4 }}>
          Currently, I am focusing on TypeScript, DevOps and of course AI/ML,
          and I would be grateful for any guidance or advice in these areas.
        </Typography>
      </Box>
    </Container>
  );
}
