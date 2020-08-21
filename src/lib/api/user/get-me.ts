import { requestWithAuth } from "../request-with-auth";
import { User } from "@dto/index";

export const getMe = async (token: string) => {
  return await requestWithAuth<null, User>(
    `${process.env.API_URL}/users/me`,
    "GET",
    null,
    token
  );
};
