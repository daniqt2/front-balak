import * as React from 'react';

import { Card } from 'flowbite-react';
import { ChipGroup } from '../sets/ChipGroup';
import { EColor } from '../../constants/color.constants';
import { IRoute } from '../../models/route.interface';

interface IPropsRouteSummary {
  route: IRoute;
}

export const RouteSummary: React.FC<IPropsRouteSummary> = ({ route }) => {
  const chipData = [
    { label: 'road', color: EColor.primary },
    { label: '200km', color: EColor.warning },
  ];

  return (
    <Card className="max-w-sm" imgSrc={route.image} horizontal>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h2>
      <div>
        <p>{route.name}</p>
        <p>{route.date}</p>
        <ChipGroup chips={chipData} />
      </div>
    </Card>
    // <div className=" cursor-pointer hover:px-2">
    //   <Card className="w-full max-w-md" sx={{ display: 'flex' }}>
    //     <CardMedia
    //       component="img"
    //       sx={{ width: 151 }}
    //       image={route.image}
    //       alt="Live from space album cover"
    //     />
    // <Box flexDirection={'column'} px={4} py={2}>
    //   <Typography variant="body1">{route.name}</Typography>
    //   <Typography variant="body2" color="secondary.light">
    //     {route.date}
    //   </Typography>
    //   <ChipGroup chips={chipData} />
    // </Box>
    //   </Card>
    // </div>
  );
};
