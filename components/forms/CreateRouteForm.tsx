import { Datepicker, FloatingLabel } from 'flowbite-react';

import { TextField } from '@mui/material';

export const CreateRouteForm: React.FC<{}> = () => {
  return (
    <div>
      <TextField
        required
        id="standard-required"
        label="Nombre de la ruta"
        defaultValue="Hello World"
        variant="standard"
        className="w-full md:w-1/2 text-white my-4"
      />
      <FloatingLabel variant="filled" label="Small Filled" sizing="sm" />
      <TextField
        id="outlined-multiline-static"
        label="Descripción"
        multiline
        rows={4}
        defaultValue="Default Value"
        className=" block my-4 w-full md:w-1/2"
      />
      <Datepicker
        onSelectedDateChanged={(e) => console.log(e)}
        weekStart={2} // Monday
      />
    </div>
  );
};
