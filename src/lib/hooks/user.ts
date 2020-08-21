import { useState } from "react";
import { User } from "@dto/index";

export const useUser = () => {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>("");

  return {
    user,
    token,
    setUser,
    setToken
  };
};
