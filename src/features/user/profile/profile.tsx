import React, { useState } from "react";
import LinkWrapper from "next/link";
import { ArticleProps } from "@features/article/templates/article.types";
import {
  Box,
  Text,
  Link,
  Heading,
  Divider,
  List,
  ListItem,
  Flex,
  PseudoBox,
  Button
} from "@chakra-ui/core";
import { CommonPage, Footer } from "@ui";
import {
  GithubFilled,
  TwitterCircleFilled,
  FacebookFilled,
  HomeFilled
} from "@ant-design/icons";
import { buildLinkToArticlePage } from "@lib/routing/builder";
import { formatDate } from "@lib/date/formatting";
import { PublicUser } from "@dto/index";

interface ProfileProps {
  user: PublicUser;
}

const linksMap = {
  github: GithubFilled,
  twitter: TwitterCircleFilled,
  facebook: FacebookFilled
};

const Profile = ({ user: { bio, username, articles } }: ProfileProps) => {
  const [showUserArticles, setShowUserArticles] = useState(false);
  const handleShowUserArticles = () => setShowUserArticles(!showUserArticles);

  return (
    <CommonPage footer={<Footer />}>
      <Box>
        <Flex
          alignItems={[undefined, undefined, "flex-end", "flex-end"]}
          flexDirection={["column", "column", "row", "row"]}
        >
          <Heading>{username}</Heading>
          <Heading ml={[0, 0, 50, 50]} fontSize="xl">
            <Button variant="unstyled" onClick={handleShowUserArticles}>
              Publications {articles.length}
            </Button>
          </Heading>
        </Flex>
        <Divider mt={2} />
      </Box>
      {!showUserArticles ? (
        <>
          <Heading fontSize="mb" mb={2}>
            Bio
          </Heading>
          <Text mb={2}>{bio || `${username} chose to be secretive`}</Text>
        </>
      ) : (
        articles.map(({ title, id, description, created }) => (
          <Box mb={10} key={id}>
            <LinkWrapper href={buildLinkToArticlePage(id)}>
              <Link fontSize="3xl" _hover={{ color: "gray.500" }}>
                {title}
              </Link>
            </LinkWrapper>
            <Text color="gray.500">{description}</Text>
            <Text color="gray.500">{`${formatDate(created)}`}</Text>
          </Box>
        ))
      )}
    </CommonPage>
  );
};

export default Profile;
