import { Typography } from '@mui/material';
import { yellow, red, green, pink } from '@mui/material/colors';

export default function RepositoryLang(props) {
  const { languages } = props;
  function getLanguageColor(name) {
    if (name === 'JavaScript') {
      return yellow[900];
    } else if (name === 'CSS') {
      return green[900];
    } else if (name === 'EJS') {
      return pink[500];
    } else return red[500];
  }

  function displayLanguage() {
    const langName = Object.keys(languages);

    const langList = langName.map((name) => {
      return (
        <Typography
          variant="repositoryLanguage"
          key={name}
          sx={{ textTransform: 'uppercase' }}
          color={getLanguageColor(name)}
        >
          {name}
        </Typography>
      );
    });
    return langList;
  }
  return <>{displayLanguage()}</>;
}
