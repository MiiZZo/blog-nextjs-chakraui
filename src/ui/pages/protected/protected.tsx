import React from "react";
import { Role } from "@dto/role";
import { Error404 } from "@ui";

export const ProtectedPage = (Component: React.FC<any>, role: Role | null) => {
  return ({ user, ...props }) => {
    if (!user) {
      return <Error404 />;
    }

    if (!!role && user.role !== role) {
      return <Error404 />;
    }

    return <Component user={user} {...props} />;
  };
};
