import React, { useState } from 'react';

import { BDrawer } from '../drawers/BDrawer';
import BkButton from '../base/BkButton';
import { Button } from 'flowbite-react';
import { FiltersMobile } from './mobile/FiltersMobile';

export const FilterCardMobile: React.FC<{}> = () => {
  const [filtersOpen, setFiltersOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setFiltersOpen((prev) => !prev);
    console.log(filtersOpen);
  };

  return (
    <div className="p-2 m-2 text-right">
      <p>
        <BkButton onClick={toggleDrawer} text="Filtros"></BkButton>
      </p>
      <BDrawer isOpen={filtersOpen} toggleDrawer={toggleDrawer}>
        <div>
          <FiltersMobile onApply={toggleDrawer} />
        </div>
      </BDrawer>
    </div>
  );
};
