import React from "react";
import ArticlePage from "@features/article/pages/article";
import { Article, User } from "@dto/index";
import { useState, memo, useEffect } from "react";
import { createComment } from "@lib/api/comment/create-comment";
import { useToast } from "@chakra-ui/core";
import Head from "next/head";
import { useUserContext } from "@lib/contexts/user";
import { deleteArticle } from "@lib/api/article/delete-article";
import { useRouter } from "next/router";
import { withAuthServerSideProps } from "@lib/hocs/withAuth";

export default ({
  data: {
    user,
    token: _token,
    serverSideResult: { article: articleData }
  }
}: {
  data: {
    serverSideResult: { article: Article };
    user: User;
    token: string | null;
  };
}) => {
  const router = useRouter();
  const { token, setToken } = useUserContext();
  const [article, setArticle] = useState(articleData);
  const [comment, setComment] = useState<string>(null);
  const [articleShouldDeleted, setArticleShouldDeleted] = useState(false);
  const toast = useToast();

  useEffect(() => {
    if (_token) {
      setToken(_token);
    }
  }, [_token]);

  useEffect(() => {
    const request = async () => {
      console.log(token);
      const result = await createComment(comment, article.id, token);

      if (!result) {
        toast({
          title: "Something went wrong :(",
          description: "try later",
          status: "error"
        });

        return;
      }

      const { newToken, result: updatedArticle } = result;

      if (newToken) {
        setToken(newToken);
      }

      setArticle(updatedArticle);
    };

    if (!!comment) {
      request();
    }
  }, [comment]);

  useEffect(() => {
    const request = async () => {
      const result = await deleteArticle(article.id, token);

      if (!result) {
        toast({
          title: "Something went wrong :(",
          description: "try later",
          status: "error"
        });

        return;
      }

      const { newToken, result: _result } = result;

      if (newToken) {
        setToken(newToken);
      }

      if (_result) {
        toast({
          title: "Article was successfully deleted",
          status: "success"
        });

        router.push("/");
      }
    };

    if (articleShouldDeleted) {
      request();
    }
  }, [articleShouldDeleted]);

  const handleSubmitComment = (comment: string) => setComment(comment);
  const handleDeleteArticle = () => setArticleShouldDeleted(true);

  const permissions = {
    canEdit: false,
    canDelete: false
  };

  if (user) {
    if (user.id === article.author.id) {
      permissions.canDelete = true;
      permissions.canEdit = true;
    }
  }

  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <ArticlePage
        userIsAuth={!!user}
        article={{ ...article, handleSubmitComment }}
        permissions={permissions}
        handleDeleteArticle={handleDeleteArticle}
      />
    </>
  );
};

const getServerSideProps = withAuthServerSideProps(
  async ({ query: { id } }) => {
    const response = await fetch(`${process.env.API_URL}/articles/${id}`);
    let article: Article = null;

    if (response.ok) {
      article = await response.json();
    }

    return {
      article
    };
  }
);

export { getServerSideProps };
