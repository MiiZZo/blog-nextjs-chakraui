import { render } from "@testing-library/react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { theme } from "@ui";
import { mockRouter } from "./mock-router";
import { NextRouter } from "next/router";

export const myRender = (
  component: JSX.Element,
  router?: Partial<NextRouter>
) => {
  return render(
    <ThemeProvider theme={theme}>
      <CSSReset />
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {component}
      </RouterContext.Provider>
    </ThemeProvider>
  );
};
