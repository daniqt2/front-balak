import { EColor, TColors } from '../../constants/color.constants';

import { Chip } from '@mui/material';
import React from 'react';

export interface IChipRoute {
  label: string;
  color?: EColor;
  outline?: boolean;
}

export const ChipRoute: React.FC<IChipRoute> = ({ label, color, outline }) => {
  console.log(color);
  return (
    // <Badge className='bg-primar'>{label}</Badge>
    <Chip
      label={label}
      variant={outline ? 'outlined' : 'filled'}
      color={(color as TColors) ?? 'primary'}
      className="px-5 text-xs"
      size="small"
    />
  );
};
