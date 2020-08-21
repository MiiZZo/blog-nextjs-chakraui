import React from "react";
import CreateComment from "./create-comment";
import { action } from "@storybook/addon-actions";
import { Box } from "@chakra-ui/core";

export const createComment = () => (
  <Box p={5}>
    <CreateComment
      handleDiscardComment={action("handle discard comment")}
      handleSubmitComment={action("handle submit comment")}
    />
  </Box>
);

export default {
  title: "Features|Article/Molecules",
  component: CreateComment
};
