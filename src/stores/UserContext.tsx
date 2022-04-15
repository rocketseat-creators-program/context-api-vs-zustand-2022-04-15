import { createContext, useState } from "react";

type User = {
  fullName: string;
  score: number;
  email: string;
  otherProp: string;
};

interface IContext {
  user: User;
  updateUser: (user: Partial<User>) => void;
}

export const Context = createContext<IContext | null>(null);

export const Provider = ({ children }: any) => {
  const [user, setUser] = useState<User>({
    fullName: "",
    score: 0,
    email: "",
    otherProp: "",
  });

  const updateUser = (user: Partial<User>) => {
    setUser((prev) => {
      return {
        ...prev,
        ...user,
      };
    });
  };

  return (
    <Context.Provider value={{ user, updateUser }}>{children}</Context.Provider>
  );
};
