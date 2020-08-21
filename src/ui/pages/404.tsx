import React from "react";
import { Button, Heading, Flex, Box } from "@chakra-ui/core";
import Link from "next/link";
import { useRouter } from "next/router";
import CommonPage from "../templates/common-page/common-page";
import Footer from "../molecules/footer/footer";

const Page404 = ({ userIsAuth }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <CommonPage footer={<Footer />} userIsAuth={userIsAuth}>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="60vh"
        flexDirection="column"
      >
        <Heading>404 | Page not found</Heading>
        <Box mt={5}>
          <Link href="/">
            <a>
              <Button variantColor="dark">Home</Button>
            </a>
          </Link>
          <Button ml={5} onClick={handleGoBack} data-testid="back">
            Back
          </Button>
        </Box>
      </Flex>
    </CommonPage>
  );
};

export default Page404;
