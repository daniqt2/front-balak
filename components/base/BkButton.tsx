import * as React from 'react';

import Button, { ButtonTypeMap } from '@mui/material/Button';

interface IPropsBkButton extends ButtonTypeMap {
  text: string;
}

const BkButton: React.FC<IPropsBkButton> = ({ text }) => {
  return (
    <Button variant="contained" color="primary">
      {text}
    </Button>
  );
};

export default BkButton;
