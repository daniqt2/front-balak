import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Paper,
} from '@mui/material';
import React, { useState } from 'react';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { ERoutes } from '../../constants/router/main.router.constants';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import MapIcon from '@mui/icons-material/Map';
import { useRouter } from 'next/router';

export const BottomNavigationBk: React.FC<{}> = () => {
  const [value, setValue] = useState();

  const router = useRouter();

  const elem = [
    { icon: <CalendarMonthIcon />, link: ERoutes.EXPLORE },
    { icon: <MapIcon />, link: ERoutes.MY_ROUTES },
    { icon: <EditLocationAltIcon />, link: ERoutes.CREATE },
  ];
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#B4C451',
      }}
      elevation={3}
    >
      <Box color={'primary'} bgcolor={'primary'}>
        <BottomNavigation
          sx={{
            bgcolor: '#353535',
            '& .MuiButtonBase-root': {
              color: '#8e8e8e',
            },
            '& .Mui-selected': {
              '& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label': {
                color: '#b5c451',
              },
            },
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {elem.map((opt, idx) => (
            <BottomNavigationAction
              onClick={() => router.push(opt.link)}
              key={`$opt-${idx}`}
              label={opt.link.toUpperCase()}
              icon={<CalendarMonthIcon />}
            />
          ))}
        </BottomNavigation>
      </Box>
    </Paper>
  );
};
