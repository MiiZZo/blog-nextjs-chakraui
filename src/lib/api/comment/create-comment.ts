import { requestWithAuth } from "../request-with-auth";
import { Article } from "@dto/index";

export const createComment = async (
  body: string,
  articleId: string,
  token: string
) => {
  return await requestWithAuth<{ body: string }, Article>(
    `${process.env.API_URL}/articles/${articleId}/comments`,
    "POST",
    { body },
    token
  );
};
