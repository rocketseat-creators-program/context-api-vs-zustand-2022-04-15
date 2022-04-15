import React, { useContext } from "react";
import { Context } from "./UserContext";

export const useUserContext = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContext");
  }

  return context;
};
