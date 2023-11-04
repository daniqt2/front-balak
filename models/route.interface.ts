export interface IRoute {
  id: string;
  ownerId: string;
  ownerUser: string;
  name: string;
  date: string;
  type: TRouteType;
  description: string;

  image?: string;
}

export type TRouteType = 'road' | 'mtb' | 'gravel';
