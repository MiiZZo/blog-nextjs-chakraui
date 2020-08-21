import React from "react";
import InputWithMaxLength from "./input-with-max-length";
import { Input, Textarea, Box, Heading } from "@chakra-ui/core";
import { withKnobs } from "@storybook/addon-knobs";

export const inputWithMaxLength = () => (
  <Box p={5} maxW="500px">
    <Heading fontSize="xl">Input with max length</Heading>
    <InputWithMaxLength
      // mb={5}
      maxLength={50}
      Input={Input}
      inputProps={{
        placeholder: "Placeholder"
      }}
    />
    <Heading fontSize="xl">Textarea with max length</Heading>
    <InputWithMaxLength
      inputProps={{
        placeholder: "My placeholder..."
      }}
      maxLength={50}
      Input={Textarea}
    />
  </Box>
);

export default {
  title: "UI|templates",
  component: InputWithMaxLength,
  decorators: [withKnobs]
};
