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
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {d.map((r) => (
          <RouteCard route={r} key={`card-${r.id}`} />
        ))}
      </div>
    </div>
  );
};
