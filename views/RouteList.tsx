import { Grid } from '@mui/material';
import React from 'react';
import { RouteCard } from '../components/cards/RouteCard';
import { mockRoute } from '../mock/route.mock';

export const RouteList: React.FC<{}> = () => {
  const d = [
    mockRoute,
    mockRoute,
    mockRoute,
    mockRoute,
    mockRoute,
    mockRoute,
    mockRoute,
    mockRoute,
    mockRoute,
    mockRoute,
  ];
  return (
    <Grid container spacing={4} padding={0} overflow={'scroll'}>
      {d.map((r) => (
        <Grid key={`card-${r.id}`} item xs={12} md={4}>
          <RouteCard route={r} />
        </Grid>
      ))}
    </Grid>
  );
};
