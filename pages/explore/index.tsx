import { DrawerLayout } from '../../layouts/Drawer.layout';
import React from 'react';
import { RouteList } from '../../views/RouteList';
import { FilterCard } from '../../components/filters/FilterCard';
import { FilterWrapper } from '../../components/filters/FilterWrapper';

export default function Dashboard() {
  return (
    <DrawerLayout>
      <FilterWrapper />
      <RouteList />
    </DrawerLayout>
  );
}
