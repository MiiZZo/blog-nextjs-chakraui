import React from "react";
import { Box } from "@chakra-ui/core";
import { withKnobs, text } from "@storybook/addon-knobs";
import ArticleC from "./article";
import { action } from "@storybook/addon-actions";
import { body, comments } from "./article.knobs";

export const Article = () => {
  return (
    <Box p={10}>
      <ArticleC
        created={""}
        id={1}
        handleSubmitComment={action("handle submit comment")}
        title={text("title", "Title")}
        description={text("description", "Description")}
        body={body}
        comments={comments}
      />
    </Box>
  );
};

export default {
  title: "Features|Article/templates",
  component: ArticleC,
  decorators: [withKnobs]
};
