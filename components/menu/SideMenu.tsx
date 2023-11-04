import { Grid, MenuItem, MenuList, Typography } from '@mui/material';

import React from 'react';
import { routerPages } from '../../constants/router/main.router.constants';
import { useRouter } from 'next/router';

export const SideMenu: React.FC<{}> = () => {
  const router = useRouter();
  return (
    <Grid
      item
      xs={0}
      md={2}
      flexGrow={1}
      bgcolor={'secondary.dark'}
      p={2}
      sx={{
        display: { xs: 'none', lg: 'block' },
      }}
    >
      <MenuList>
        {routerPages.map((it, idx) => (
          <MenuItem key={idx} onClick={() => router.push(it.link)}>
            <Typography>{it.label.toUpperCase()}</Typography>
          </MenuItem>
        ))}
      </MenuList>
    </Grid>
  );
};
