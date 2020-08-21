import React from "react";
import Comment from "./comment";
import { Box } from "@chakra-ui/core";

const commentBody =
  "Thank you for your videos. They're really helpful. Had to rewatch a couple since some of these can be confusing since this is quite new to me. I'm fairly a new front end developer and have been developing in Drupal with Atomic Design in mind.  So the languages I have been using are Twig,  jQuery (sadly), and SASS. I've recently found a new theme called Emulsify which utilizes Atomic Design, Storybook, and React. My goal is to shift to React/Storybook even though the struggle has been real in understanding the process. Thanks again!";

export const comment = () => (
  <Box p={5}>
    <Comment body={commentBody} />
  </Box>
);

export default {
  component: Comment,
  title: "Features/Article/Molecules"
};
