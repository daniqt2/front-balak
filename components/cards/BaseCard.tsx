import { PropsWithChildren } from 'react';

interface IBaseCard {
  title: string;
}

export const BaseCard: React.FC<PropsWithChildren<IBaseCard>> = ({
  title,
  children,
}) => {
  return (
    <div className=" bg-white text-black p-4 rounded-lg">
      <p className=" font-bold text-2xl">{title}</p>
      {children}
    </div>
  );
};
