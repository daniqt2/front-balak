import { DrawerLayout } from '../layouts/Drawer.layout';
import { RouteList } from '../views/routeList/RouteList';

export default function Home() {
  return (
    <DrawerLayout>
      <RouteList />
    </DrawerLayout>
  );
}
