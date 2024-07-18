// Mui components
import {
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Grid,
} from '@mui/material';
import { Box } from '@mui/system';
// Mui icons
import HomeIcon from '@mui/icons-material/Home';
import GitHub from '@mui/icons-material/GitHub';
// Components
import RepositoryTitle from './RepositoryTitle';
import RepositoryTopics from './RepositoryTopics';
import getImageUrl from './imageUrls';

export default function Repository(props) {
  const { name, description, html_url, homepage, topics } = props.data;
  const { smallScreen } = props;
  const githubUrl = html_url;
  const homepageUrl = homepage;
  const imgUrl = getImageUrl(name);

  return (
    <CardContent className="repo-container">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item xs={12} sm={4}>
          {/* Repository Title */}
          <Box
            sx={{
              gap: 2,
              flexWrap: 'wrap',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* repo title component */}
            <RepositoryTitle title={name} url={githubUrl} />
          </Box>
          {/* Repository Description */}
          <Typography sx={{ my: 3, paddingX: 2 }}>
            {description === null
              ? "I'm working on the description"
              : description}
          </Typography>
          {/* Repository Language */}
          <Box
            className="repo-lang-container"
            sx={{
              mb: 5,
              gap: 2,
              flexWrap: 'wrap',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {/* Repository topics */}
            <RepositoryTopics topics={topics} />
          </Box>
          <CardActions
            className="repo-button-container"
            sx={{
              paddingX: '0',
              placeSelf: 'center',
              width: '100%',
              justifyContent: 'space-evenly',
              alignItems: 'space-evenly',
            }}
          >
            {/* Update live URLs of projects in github */}
            <Button
              href={homepageUrl}
              target="_blank"
              variant="contained"
              startIcon={<HomeIcon />}
            >
              Homepage
            </Button>
            <Button
              href={githubUrl}
              target="_blank"
              variant="contained"
              startIcon={<GitHub />}
            >
              GitHub
            </Button>
          </CardActions>
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardMedia
            component="img"
            image={imgUrl}
            height={smallScreen ? 200 : 400}
            sx={{ padding: 0 }}
          />
        </Grid>
      </Grid>
    </CardContent>
  );
}
