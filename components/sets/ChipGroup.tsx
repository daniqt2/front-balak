import { ChipRoute, IChipRoute } from '../base/ChipRoute';

import React from 'react';

export interface IChipGroupData {}

interface IPropsChipGroup {
  chips: IChipRoute[];
}

export const ChipGroup: React.FC<IPropsChipGroup> = ({ chips }) => {
  return (
    <div className="flex my-2">
      {chips?.map((chip, idx) => (
        <div key={`chip-${idx}`} className="mr-2">
          <ChipRoute label={chip.label} color={chip.color} />
        </div>
      ))}
    </div>
  );
};
