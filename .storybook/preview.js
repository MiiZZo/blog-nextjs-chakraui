import { addDecorator } from "@storybook/react";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import { theme } from "../src/ui";
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs/blocks";
import "highlight.js/styles/a11y-light.css";

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {storyFn()}
  </ThemeProvider>
));
