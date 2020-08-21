import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/core";
import { Header } from "@ui";

interface CommonPageProps {
  userIsAuth: boolean;
  footer: JSX.Element;
}

const CommonPage: React.FC<CommonPageProps> = ({
  children,
  footer,
  userIsAuth
}) => {
  const [userLogsOut, setUserLogsOut] = useState(false);
  const handleLogout = () => setUserLogsOut(true);

  useEffect(() => {
    if (userIsAuth) {
      if (userLogsOut) {
        const request = async () => {
          //await logout();
          location.reload();
        };

        request();
      }
    }
  }, [userLogsOut]);

  return (
    <Flex minH="100%" flexDirection={"column"}>
      <Header userIsAuth={userIsAuth} handleLogout={handleLogout} />
      <Box flexGrow={1} px={[10, 10, 10, 200]}>
        {children}
      </Box>
      {footer}
    </Flex>
  );
};

export default CommonPage;
