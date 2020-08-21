import { requestWithAuth } from "../request-with-auth";

const input = `${process.env.API_URL}/articles`;

export const createArticle = async <T, Result>(data: T, accessToken: string) =>
  await requestWithAuth<T, Result>(input, "POST", data, accessToken);
