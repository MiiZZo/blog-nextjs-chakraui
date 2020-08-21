import React from "react";
import PasswordInput from "./password-input";
import { Box } from "@chakra-ui/core";

export const passwordInput = () => (
  <Box w="300px" m={10}>
    <PasswordInput placeholder="Enter password" />
  </Box>
);

export default {
  title: "UI|Atoms",
  component: PasswordInput
};
