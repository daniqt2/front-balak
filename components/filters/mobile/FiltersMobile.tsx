import { BSlider } from '../../form/Slider';
import { BikeTypes } from './BikeTypes';
import BkButton from '../../base/BkButton';
import React from 'react';

export interface IFiltersMobile {
  onApply: () => void;
}

export const FiltersMobile: React.FC<IFiltersMobile> = ({ onApply }) => {
  return (
    <div className="p-5 overflow-hidden">
      <div>
        <BikeTypes />
        <BSlider
          title="Distancia"
          unit="kms"
          maxValue={200}
          defaultValues={{ min: 1, max: 200 }}
        />
        <BSlider
          title="Velocidad media"
          unit="km/h"
          maxValue={50}
          defaultValues={{ min: 1, max: 50 }}
        />
        <BSlider
          title="Desnivel positivo"
          unit="m"
          maxValue={5000}
          defaultValues={{ min: 1, max: 5000 }}
        />
        <BkButton text="aplicar" onClick={onApply}></BkButton>
      </div>
    </div>
  );
};
