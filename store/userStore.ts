import { create } from 'zustand';

interface IStateUser {
  name: string;
  email: string;
}

const useUserStore = create<IStateUser>()((set) => ({
  name: '',
  email: '',
  setUserData: (userData: IStateUser) => set(() => ({ ...userData })),
}));
