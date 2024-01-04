import { BaseCard } from '../../../components/cards/BaseCard';
import { CreateRouteForm } from '../../../components/forms/CreateRouteForm';
import { Grid } from '@mui/material';
import React from 'react';

export const CreateRouteBase: React.FC<{}> = () => {
  return (
    <BaseCard title="Crea una ruta nueva">
      <CreateRouteForm />
    </BaseCard>
  );
};
