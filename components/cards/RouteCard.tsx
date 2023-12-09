import { ChipGroup } from '../sets/ChipGroup';
import { EColor } from '../../constants/color.constants';
import { IRoute } from '../../models/route.interface';
import React from 'react';
import { Avatar, Card } from 'flowbite-react';

interface IPropsBkCard {
  route: IRoute;
}

export const RouteCard: React.FC<IPropsBkCard> = ({ route }) => {
  const chipData = [
    { label: 'road', color: EColor.primary },
    { label: '200km', color: EColor.warning },
  ];
  return (
    <Card imgSrc={route.image}>
      <p className=" font-light text-xl">Ruta dominguera</p>
      <div className="flex">
        <Avatar rounded size="xs"></Avatar>
        <p className="text-secondary ml-3 text-sm self-center">
          {route.ownerUser}
        </p>
      </div>
      <p className="text-grayLight text-sm font-light line-clamp-2">
        {route.description}
      </p>
      <ChipGroup chips={chipData} />
    </Card>
  );
};
