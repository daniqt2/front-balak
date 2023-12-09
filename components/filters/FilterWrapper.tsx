import React from 'react';
import { FilterCard } from './FilterCard';
import { FilterCardMobile } from './FilterCard.mobile';

export const FilterWrapper: React.FC<{}> = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <FilterCard />
      </div>
      <div className="lg:hidden">
        <FilterCardMobile />
      </div>
    </div>
  );
};
