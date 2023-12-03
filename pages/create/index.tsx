import { CreateRouteBase } from '../../views/create/createRouteForm/CreateRouteBase.view';
import { DrawerLayout } from '../../layouts/Drawer.layout';
import React from 'react';

export default function Dashboard() {
  return (
    <DrawerLayout>
      <div className="w-full h-full p-2 md:p-24">
        <CreateRouteBase />
      </div>
    </DrawerLayout>
  );
}
