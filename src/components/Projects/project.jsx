import { useEffect, useState } from 'react';

import { Card, CardContent } from '@mui/material';
import Repository from './Repository/Repository';

export default function Project(props) {
  const { id, path, smallScreen } = props;
  const BASE_URL = 'https://api.github.com/repos/0xdk';
  // new token
  const token = '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';
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
  }, [path]);
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
