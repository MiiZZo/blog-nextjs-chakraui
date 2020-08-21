import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { ArticleProps } from "../templates/article.types";
import { CommonPage, Footer, Error404 } from "@ui";
import {
  IconButton,
  Text,
  Box,
  Flex,
  Button,
  Stack,
  Tooltip
} from "@chakra-ui/core";
import { formatDate } from "@lib/date/formatting";
import Article from "@features/article/templates/article";

interface Props {
  userIsAuth: boolean;
  article: ArticleProps;
  handleDeleteArticle: () => void;
  permissions: {
    canEdit: boolean;
    canDelete: boolean;
  };
}

const ArticlePage = ({
  article,
  permissions,
  handleDeleteArticle,
  userIsAuth
}: Props) => {
  const router = useRouter();

  if (!article) {
    return (
      <>
        <Error404 userIsAuth={userIsAuth} />
      </>
    );
  }

  const handleGoToBack = () => {
    router.back();
  };

  const actions = (
    <Flex>
      {permissions.canEdit && (
        <Tooltip label="Edit article" aria-label="edit article">
          <IconButton icon="edit" aria-label="edit article" mr={5}>
            Edit article
          </IconButton>
        </Tooltip>
      )}
      {permissions.canDelete && (
        <Button variantColor="red" onClick={handleDeleteArticle}>
          Delete article
        </Button>
      )}
    </Flex>
  );

  return (
    <CommonPage footer={<Footer />} userIsAuth={userIsAuth}>
      <Flex maxW={[0, 0, 800]} alignItems="center">
        <Box>
          <IconButton
            data-testid="back"
            icon="arrow-back"
            fontSize="3xl"
            onClick={handleGoToBack}
            aria-label="go to back page"
            variant="ghost"
          />
          <Text color="gray.500" mb={10}>
            {formatDate(article.created)}
          </Text>
        </Box>
        <Box ml={10}>{actions}</Box>
      </Flex>
      <Article {...article} />
    </CommonPage>
  );
};

export default ArticlePage;
