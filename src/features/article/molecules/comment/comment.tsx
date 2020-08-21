import React from "react";
import { Stack, Avatar, Text } from "@chakra-ui/core";
import { CommentProps } from "./comments.types";

const Comment = ({ body }: CommentProps) => {
  return (
    <Stack isInline spacing={2}>
      <Avatar size="sm" />
      <Stack spacing={1}>
        <Text fontSize="sm">Nickname</Text>
        <Text fontSize="sm" maxW="800px" data-testid="body">
          {body}
        </Text>
      </Stack>
    </Stack>
  );
};

export default Comment;
