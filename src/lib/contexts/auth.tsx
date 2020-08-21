import { createContext, useContext } from "react";

export const AuthContext = createContext({
  auth: false
});

export const useAuthContext = () => useContext(AuthContext);
