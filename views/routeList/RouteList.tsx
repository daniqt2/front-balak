'use client';

import React from 'react';
import { RouteCard } from '../../components/cards/RouteCard';
import { mockRoute } from '../../mock/route.mock';

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
      <div className="grid gap-4 cutom-grid mb-60 md:mb-0">
        {d.map((r) => (
          <RouteCard route={r} key={`card-${r.id}`} />
        ))}
      </div>
      <div className=" h-64"></div>
    </div>
  );
};
