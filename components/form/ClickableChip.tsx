import { useEffect, useState } from 'react';

import { Chip } from '@mui/material';

interface IClickableChip {
  handleClickChip: () => void;
  text: string;
  defaultValue?: boolean;
}

export const ClickableChip: React.FC<IClickableChip> = ({
  text,
  defaultValue = false,
  handleClickChip,
}) => {
  let [isActive, setIsActive] = useState<boolean>(defaultValue);
  console.log('chipClass', isActive);

  const handleClick = () => {
    handleClickChip();
    setIsActive((prev) => !prev);
  };
  return (
    <Chip
      label={text.toUpperCase()}
      onClick={handleClick}
      color="warning"
      variant={isActive ? 'filled' : 'outlined'}
    />
  );
};
