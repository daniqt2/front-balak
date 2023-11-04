import { Grid } from '@mui/material';
import React from 'react';
import { RouteCard } from '../components/cards/RouteCard';
import { RouteSummary } from '../components/cards/RouteSummary';
import { mockRoute } from '../mock/route.mock';

export const SummaryRouteList: React.FC<{}> = () => {
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
          <RouteSummary route={r} />
        </Grid>
      ))}
    </Grid>
  );
};
