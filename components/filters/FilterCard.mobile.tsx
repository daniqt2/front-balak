import { Button, Datepicker, Modal, ModalBody } from 'flowbite-react';
import React from 'react';

export const FilterCardMobile: React.FC<{}> = () => {
  return (
    <div className="p-2 m-2 text-right">
      <p>
        <Button size="xs" className="">
          Add Filters
        </Button>
      </p>
      <Modal>
        <ModalBody>
          <Datepicker />
        </ModalBody>
      </Modal>
    </div>
  );
};
