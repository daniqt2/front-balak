import { DrawerLayout } from '../layouts/Drawer.layout';
import { RouteList } from '../views/RouteList';

export default function Home() {
  return (
    <DrawerLayout>
      <RouteList />
    </DrawerLayout>
  );
}
