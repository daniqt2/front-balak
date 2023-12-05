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
    <div>
      {d.map((r) => (
        <RouteSummary route={r} key={r.id} />
      ))}
    </div>
  );
};
