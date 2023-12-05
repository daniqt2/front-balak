import { Avatar, Card } from 'flowbite-react';

import { ChipGroup } from '../sets/ChipGroup';
import { EColor } from '../../constants/color.constants';
import { IRoute } from '../../models/route.interface';
import React from 'react';

interface IPropsBkCard {
  route: IRoute;
}

export const RouteCard: React.FC<IPropsBkCard> = ({ route }) => {
  const chipData = [
    { label: 'road', color: EColor.primary },
    { label: '200km', color: EColor.warning },
  ];
  return (
    <Card
      className="cursor-pointer max-w-xl hover:bg-slate-100"
      imgAlt="route-map"
      imgSrc={route.image}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Ruta dominguera
      </h5>
      <div className="flex">
        <Avatar rounded size="xs"></Avatar>
        <p className="text-secondary ml-3">{route.ownerUser}</p>
      </div>
      <ChipGroup chips={chipData} />
      <p className="text-secondary">{route.description}</p>
    </Card>
  );
};
