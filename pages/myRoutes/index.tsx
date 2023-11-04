import { DrawerLayout } from '../../layouts/Drawer.layout';
import React from 'react';
import { SummaryRouteList } from '../../views/SummaryRouteList';

export default function Dashboard() {
  return (
    <DrawerLayout>
      <SummaryRouteList />
    </DrawerLayout>
  );
}
