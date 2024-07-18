import { Typography, Box } from '@mui/material';

export default function RepositoryTopics(props) {
  const { topics } = props;
  return (
    <Box>
      <Typography
        fontFamily="RalewayMedium"
        sx={{ display: topics.length === 0 ? 'none' : 'block' }}
      >
        {topics.length === 0
          ? 'Tech not specified'
          : `Tech Stack : ${topics.map((topic) => ` ${topic}`)}`}
      </Typography>
    </Box>
  );
}
