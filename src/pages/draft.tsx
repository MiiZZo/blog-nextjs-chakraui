import React, { useEffect, useState } from "react";
import { CommonPage, Footer } from "@ui";
import Editor from "@features/article/organisms/editor/editor";
import { useRouter } from "next/router";
import Head from "next/head";
import { createArticle } from "@lib/api/article/create-article";
import { useToast } from "@chakra-ui/core";
import { useUserContext } from "@lib/contexts/user";
import { ArticleProps } from "@features/article/templates/article.types";
import { CreateArticle } from "@dto/create-article";
import { ProtectedPage } from "src/ui/pages/protected/protected";
import { withAuthServerSideProps } from "@lib/hocs/withAuth";

export const Draft = ({
  handleSubmit,
  userIsAuth
}: {
  userIsAuth: boolean;
  handleSubmit: (data: any) => void;
}) => {
  return (
    <>
      <Head>
        <title>Draft</title>
      </Head>
      <CommonPage footer={<Footer />} userIsAuth={userIsAuth}>
        <Editor
          handleSubmit={handleSubmit}
          draftData={{ title: "", body: "", description: "" }}
        />
      </CommonPage>
    </>
  );
};

export const DraftWithHandleSubmit = ({ user, token: _token }) => {
  const router = useRouter();
  const toast = useToast();
  const { token, setToken } = useUserContext();
  const [articleData, setArticleData] = useState<CreateArticle>(null);
  console.log(token);
  useEffect(() => {
    if (_token) {
      setToken(_token);
    }
  }, []);

  useEffect(() => {
    const request = async () => {
      const data = await createArticle<typeof articleData, ArticleProps>(
        articleData,
        token
      );

      if (data) {
        if (data.newToken) {
          setToken(data.newToken);
        }

        if (data.result) {
          router.push(`/articles/${data.result.id}`);
          return;
        }
      }

      toast({
        title: "Something went wrong :(",
        description: "Try later",
        status: "error"
      });
    };

    if (articleData) {
      request();
    }
  }, [articleData]);

  const handleSubmit = (articleData: CreateArticle) =>
    setArticleData(articleData);

  return <Draft handleSubmit={handleSubmit} userIsAuth={!!user} />;
};

export default ProtectedPage(DraftWithHandleSubmit, null);
export const getServerSideProps = withAuthServerSideProps();
