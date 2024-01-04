import React, { PropsWithChildren } from 'react';

import { Drawer } from '@mui/material';

export type TAnchor = 'top' | 'left' | 'bottom' | 'right';

interface IPropsBDrawer {
  isOpen: boolean;
  toggleDrawer: () => void;
  anchor?: TAnchor;
}

export const BDrawer: React.FC<PropsWithChildren<IPropsBDrawer>> = ({
  isOpen,
  anchor = 'top',
  toggleDrawer,
  children,
}) => {
  return (
    <Drawer anchor={anchor} open={isOpen} onClose={toggleDrawer}>
      {children}
    </Drawer>
  );
};
