import { createContext, useContext } from "react";
import { User } from "@dto/index";

interface UserContextValue {
  token: string;
  user: User;
  setToken: (token: string) => void;
  setUser: (user: User) => void;
}

export const userContextDefaultValue: UserContextValue = {
  token: "",
  user: null,
  setToken: (token: string) => {},
  setUser: (user: User) => {}
};

export const useUserContext = () => useContext(UserContext);
export const UserContext = createContext<UserContextValue>(
  userContextDefaultValue
);
