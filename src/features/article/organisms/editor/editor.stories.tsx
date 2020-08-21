import React, { useState } from "react";
import { action } from "@storybook/addon-actions";
import { Box } from "@chakra-ui/core";
import Editor from "./editor";

export const editor = () => {
  const [preview, setPreview] = useState("");

  return (
    <Box maxW="800px" p={5}>
      <Editor
        handleSubmit={action("handle submit")}
        draftData={{ body: "", description: "", title: "" }}
      />
    </Box>
  );
};

export default {
  title: "Features|Article/molecules"
};
