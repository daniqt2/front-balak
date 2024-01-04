import { DrawerLayout } from '../../layouts/Drawer.layout';
import { FilterCard } from '../../components/filters/FilterCard';
import { FilterWrapper } from '../../components/filters/FilterWrapper';
import React from 'react';
import { RouteList } from '../../views/routeList/RouteList';

export default function Dashboard() {
  return (
    <DrawerLayout>
      <FilterWrapper />
      <RouteList />
    </DrawerLayout>
  );
}
