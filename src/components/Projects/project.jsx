import { useEffect, useState } from 'react';

import { Card, CardContent } from '@mui/material';
import Repository from './Repository/Repository';

export default function Project(props) {
  const { id, path, smallScreen } = props;
  const BASE_URL = 'https://api.github.com/repos/0xdk';
  // new token Expires on Wed, Oct 2 2024.
  const token = import.meta.env.VITE_GITHUB_REPOSITORY_TOKEN;
  const [githubData, setGithubData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(BASE_URL + path, {
      headers: { Authorization: `token ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setGithubData(data);
        setIsLoading(false);
      });
  }, [path, token]);
  return (
    <Card key={id} id={'project-card' + id} sx={{ padding: 0 }}>
      <CardContent>
        <>
          {!isLoading ? (
            <Repository data={githubData} smallScreen={smallScreen} id={id} />
          ) : (
            'Loading...'
          )}
        </>
      </CardContent>
    </Card>
  );
}
