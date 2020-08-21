import { StrictMode } from "react";
import { ThemeProvider, CSSReset, Box } from "@chakra-ui/core";
import { AppProps } from "next/app";
import { theme } from "@ui";
import "highlight.js/styles/a11y-light.css";
import { UserContext } from "@lib/contexts/user";
import { useUser } from "@lib/hooks/user";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const contextValue = useUser();
  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Box h="100vh">
          <UserContext.Provider value={contextValue}>
            <Component {...pageProps} />
          </UserContext.Provider>
        </Box>
      </ThemeProvider>
    </StrictMode>
  );
};

export default MyApp;
