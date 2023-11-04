import { DrawerLayout } from '../../layouts/Drawer.layout';
import React from 'react';
import { RouteList } from '../../views/RouteList';

export default function Dashboard() {
  return (
    <DrawerLayout>
      <RouteList />
    </DrawerLayout>
  );
}
