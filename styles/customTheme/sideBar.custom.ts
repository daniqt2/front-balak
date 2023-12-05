import { CustomFlowbiteTheme } from 'flowbite-react';

export const sideBarTheme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      inner:
        'h-full overflow-y-auto overflow-x-hidden rounded bg-secondary py-4 px-3',
    },
    item: {
      base: 'flex items-center justify-center rounded-lg p-2 font-normal text-white hover:bg-primary',
      active: 'bg-primary',
      content: {
        base: 'px-3 flex-1 whitespace-nowrap text-bkOrange',
      },
    },
  },
};
