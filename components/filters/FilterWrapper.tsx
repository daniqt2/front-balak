import { FilterCard } from './FilterCard';
import { FilterCardMobile } from './FilterCard.mobile';
import { LocationFilter } from './location/Location.routeList';
import React from 'react';

export const FilterWrapper: React.FC<{}> = () => {
  return (
    <div>
      <div className="p-4">
        <LocationFilter />
      </div>
      <div className="hidden lg:block">
        <FilterCard />
      </div>
      <div className="lg:hidden">
        <FilterCardMobile />
      </div>
    </div>
  );
};
