import React, { useState } from "react";
import { Box, Heading, Text, Stack, Button } from "@chakra-ui/core";
import Comment from "../molecules/comment/comment";
import CreateComment from "../molecules/create-comment/create-comment";
import { Markdown } from "@ui";
import { ArticleProps } from "./article.types";

const Article = ({
  title,
  body,
  comments,
  description,
  handleSubmitComment
}: ArticleProps) => {
  const [showCommentCreator, setShowCommentCreator] = useState(false);
  let commentsView: JSX.Element[] = null;

  if (comments.length > 0) {
    commentsView = comments.map(({ body }, i) => {
      return <Comment body={body} key={i} />;
    });
  }

  const handleDiscardComment = () => {
    setShowCommentCreator(!showCommentCreator);
  };

  const handleToggleShowCommentCreator = () => {
    setShowCommentCreator(!showCommentCreator);
  };

  return (
    <>
      <Box maxW="800px">
        <Heading>{title}</Heading>
        <Text color="gray.500" fontSize="2xs" mb={5}>
          {description}
        </Text>
        <Stack spacing={5}>
          <Markdown>{body}</Markdown>
          <Box mt={10}>
            {showCommentCreator ? (
              <Box mb={5}>
                <CreateComment
                  handleSubmitComment={handleSubmitComment}
                  handleDiscardComment={handleDiscardComment}
                />
              </Box>
            ) : (
              <Button
                ml="auto"
                size="sm"
                mb={5}
                variantColor="dark"
                data-testid="show"
                onClick={handleToggleShowCommentCreator}
              >
                Write a comment
              </Button>
            )}
            <Heading fontSize="xl" mb={5}>
              Comments - {comments.length}
            </Heading>
            <Stack spacing={5} shouldWrapChildren>
              {commentsView}
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Article;
