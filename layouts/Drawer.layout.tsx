import React, { PropsWithChildren } from 'react';

import { BottomNavigationBk } from '../components/menu/BottomMenu';
import { Header } from '../components/base/Header';
import { SideMenu } from '../components/menu/SideMenu';

export const DrawerLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-full">
      <Header />
      <div className="flex flex-row h-full">
        <div className="basis-20 hidden md:block">
          <SideMenu />
        </div>
        <div className="w-full overflow-scroll bg-bkLight">{children}</div>
      </div>

      <div className=" md:hidden">
        <BottomNavigationBk />
      </div>
    </div>
  );
};
