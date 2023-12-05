import { CustomFlowbiteTheme, Sidebar } from 'flowbite-react';
import { Grid, MenuItem, MenuList, Typography } from '@mui/material';

import React from 'react';
import { routerPages } from '../../constants/router/main.router.constants';
import { sideBarTheme } from '../../styles/customTheme/sideBar.custom';
import { useRouter } from 'next/router';

export const SideMenu: React.FC<{}> = () => {
  const router = useRouter();
  console;
  return (
    <Sidebar
      aria-label="Default sidebar example"
      className=" bg-secondary"
      theme={sideBarTheme.sidebar}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {routerPages.map((it, idx) => (
            <Sidebar.Item
              active={router.pathname.includes(it.link)}
              onClick={() => router.push(it.link)}
              key={idx}
              href="#"
              className="active"
            >
              {it.label.toUpperCase()}
            </Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};
