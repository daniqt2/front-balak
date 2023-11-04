import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

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
  // className=" w-3/4 md:w-96"
  return (
    <div className=" cursor-pointer hover:px-1 hover:bg-primay mx-auto">
      <Card
        sx={{
          ':hover': {
            boxShadow: 20, // theme.shadows[20]
          },
        }}
      >
        <CardHeader
          avatar={<Avatar aria-label="recipe">R</Avatar>}
          title={route.ownerUser}
          subheader={route.date}
        />
        <CardMedia
          component="img"
          height="194"
          image={route.image}
          alt="Paella dish"
        />
        <CardContent>
          <ChipGroup chips={chipData} />
          <Typography variant="body2" color="text.secondary">
            {route.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
