import { Datepicker } from 'flowbite-react';
import React from 'react';

export const FilterCard: React.FC<{}> = () => {
  return (
    <div className="shadow-lg m-4 p-4">
      <Datepicker />
    </div>
  );
};
