import { InputBase, OutlinedInput, TextField } from '@mui/material';

import React from 'react';

export const LocationFilter: React.FC<{}> = () => {
  return (
    <>
      <OutlinedInput placeholder="Ubicación" className="w-full" />
    </>
  );
};
