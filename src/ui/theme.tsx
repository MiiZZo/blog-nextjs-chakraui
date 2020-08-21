import React from "react";
import { theme } from "@chakra-ui/core";

const { colors } = theme;

export default {
  ...theme,
  colors: {
    ...colors,
    dark: {
      100: "#404040",
      500: "#0d0d0d"
    },
    light: {
      500: "#ffffff"
    }
  }
};
