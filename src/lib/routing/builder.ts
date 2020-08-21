export const articleLink = "/articles/";

export const buildLinkToArticlePage = (id: number | string) => {
  return `${articleLink}${id}`;
};
