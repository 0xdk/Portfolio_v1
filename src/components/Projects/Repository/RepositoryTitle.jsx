import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function RepositoryTitle(props) {
  const { title, url, topics } = props;

  return (
    <Box className="repository-title-container" sx={{ mb: 1, gap: 4 }}>
      <Box className="repository-title-links">
        <Link href={url} target="_blank">
          {title}
        </Link>
      </Box>
      <Box>
        {/* update the topic and description in github  */}
        <Typography sx={{ display: topics.length === 0 ? 'none' : 'block' }}>
          {topics.length === 0
            ? 'not tech'
            : `Tech Stack : ${topics.map((topic) => `${topic}`)}`}
        </Typography>
      </Box>
    </Box>
  );
}
