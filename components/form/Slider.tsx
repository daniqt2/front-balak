import React, { useState } from 'react';

import { Slider } from '@mui/material';

export interface ISliderMaxMin {
  min: number;
  max: number;
}

interface IBSlider {
  title: string;
  unit?: string;
  maxValue?: number;
  defaultValues: ISliderMaxMin;
}

export const BSlider: React.FC<IBSlider> = ({
  title,
  unit,
  maxValue,
  defaultValues,
}) => {
  const [value, setValue] = useState<number[]>([
    defaultValues.min,
    defaultValues.max,
  ]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <>
      <p>
        <span className=" font-bold">{`${title} `}</span>
        <span
          className=" font-light text-sm
        "
        >{`${value[0]}-${value[1]}${unit}`}</span>
      </p>
      <Slider
        max={maxValue}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={() => value.toString()}
      />
    </>
  );
};
