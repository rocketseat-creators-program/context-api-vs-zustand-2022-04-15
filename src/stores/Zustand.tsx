import create from "zustand";
import { persist } from "zustand/middleware";

type User = {
  fullName: string;
  score: number;
  email: string;
  otherProp: string;
};

type Store = {
  user: User;
  updateUser: (data: Partial<User>) => void;
};

export const useStore = create<Store>(
  persist(
    (set, get) => ({
      user: {
        fullName: "",
        score: 0,
        email: "",
        otherProp: "2",
      },
      updateUser: (user: Partial<User>) => {
        set((state) => ({
          user: {
            ...state.user,
            ...user,
          },
        }));
      },
    }),
    {
      name: "awesome-storage",
    }
  )
);
