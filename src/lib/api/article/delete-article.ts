import { requestWithAuth } from "../request-with-auth";

export const deleteArticle = async (id: string, token: string) => {
  return await requestWithAuth(
    `${process.env.API_URL}/articles/${id}`,
    "DELETE",
    null,
    token
  );
};
