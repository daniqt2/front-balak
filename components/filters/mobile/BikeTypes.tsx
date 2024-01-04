import { ClickableChip } from '../../form/ClickableChip';
import { useState } from 'react';

export enum EBikeTypes {
  'ROAD' = 'road',
  'MTB' = 'MTB',
  'GRAVEL' = 'gravel',
}

const BASE = {
  [EBikeTypes.ROAD]: false,
  [EBikeTypes.MTB]: false,
  [EBikeTypes.GRAVEL]: false,
};

const typesList = [EBikeTypes.ROAD, EBikeTypes.MTB, EBikeTypes.GRAVEL];

export const BikeTypes: React.FC<{}> = () => {
  const [activeBikes, setActiveBikes] = useState(BASE);

  console.log(typesList);

  const handleClick = (bike: EBikeTypes) => {
    console.log('im hereee', bike);
    setActiveBikes((prev) => {
      console.log(prev);
      prev[bike] = !prev[bike];
      return prev;
    });
  };
  return (
    <div className="flex pb-4">
      {typesList.map((bike, idx) => {
        console.log('???', activeBikes[bike]);
        return (
          <div className="pr-3">
            <ClickableChip
              text={bike}
              handleClickChip={() => handleClick(bike)}
              key={idx}
            />
          </div>
        );
      })}
    </div>
  );
};
