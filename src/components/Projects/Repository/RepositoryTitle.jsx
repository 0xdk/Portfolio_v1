import { Link } from '@mui/material';
import { Box } from '@mui/system';

export default function RepositoryTitle(props) {
  const { title, url } = props;

  return (
    <Box className="repository-title-container" sx={{ mb: 1, gap: 4 }}>
      <Box className="repository-title-links">
        <Link href={url} target="_blank">
          {title}
        </Link>
      </Box>
    </Box>
  );
}
