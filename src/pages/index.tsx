import React, { useState } from "react";
import { CommonPage, Footer, Pagination } from "@ui";
import { ArticleProps } from "@features/article/templates/article.types";
import { Box, Link, Text } from "@chakra-ui/core";
import LinkWrapper from "next/link";
import { buildLinkToArticlePage } from "@lib/routing/builder";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { formatDate } from "@lib/date/formatting";
import { withAuthServerSideProps } from "@lib/hocs/withAuth";
import { PublicUser, Article } from "@dto/index";

interface Props {
  data: {
    user: PublicUser;
    serverSideResult: {
      articles: Article[];
      pageCount: number;
      pageNumber: number;
    };
  };
}

const Home = React.memo(
  ({
    data: {
      user,
      serverSideResult: { articles, pageCount, pageNumber }
    }
  }: Props) => {
    const { pathname, ...router } = useRouter();
    const [current, setCurrent] = useState(pageNumber);

    const handleChangeCurrent = (current: number) => {
      setCurrent(current);
      router.push(pathname, { query: { page: current } });
    };

    return (
      <>
        <Head>
          <title>Articles</title>
        </Head>
        <CommonPage footer={<Footer />} userIsAuth={!!user}>
          {articles.map(({ title, id, description, created }) => (
            <Box mb={10} key={id}>
              <LinkWrapper href={buildLinkToArticlePage(id)}>
                <Link fontSize="3xl" _hover={{ color: "gray.500" }}>
                  {title}
                </Link>
              </LinkWrapper>
              <Text color="gray.500">{description}</Text>
              <Text color="gray.500">{`${formatDate(created)}`}</Text>
            </Box>
          ))}
          <Box mt="auto">
            <Pagination
              current={current}
              total={pageCount}
              onChange={handleChangeCurrent}
            />
          </Box>
        </CommonPage>
      </>
    );
  }
);

export default Home;

export const getServerSideProps = withAuthServerSideProps(
  async ({ query: { page }, req }: GetServerSidePropsContext) => {
    const response = await fetch(
      `${process.env.API_URL}/articles/get-all?page=${page || 1}`
    );

    const resp = await fetch(`${process.env.API_URL}/auth/update-tokens`, {
      method: "POST",
      headers: {
        cookie: req.headers.cookie
      }
    });

    console.log(resp.headers.get("refresh_token"));

    if (response.ok) {
      return await response.json();
    }

    return null;
  }
);
