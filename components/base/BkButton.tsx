import * as React from 'react';

import Button from '@mui/material/Button';

interface IPropsBkButton {
  text: string;
  onClick: () => void;
}

const BkButton: React.FC<IPropsBkButton> = ({ text, onClick }) => {
  return (
    <Button variant="contained" color="primary" onClick={onClick}>
      {text}
    </Button>
  );
};

export default BkButton;
