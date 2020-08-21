import React from "react";
import CommonPage from "src/ui/templates/common-page/common-page";
import { Footer } from "@ui";
import SignUpForm, {
  SignUpInputs
} from "@features/auth/molecules/sign-up-form";
import { Flex, Box, Heading } from "@chakra-ui/core";
import Head from "next/head";
import { AuthFormProps } from "@features/auth/molecules/auth-form.types";
import { ProtectedPage } from "src/ui/pages/protected/protected";

const SignUp = ({ onSubmit }: AuthFormProps<SignUpInputs>) => {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <CommonPage footer={<Footer />}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box width={["300px", "500px"]} paddingX={5}>
            <Heading textAlign="center" mb={5}>
              Sign Up
            </Heading>
            <SignUpForm onSubmit={onSubmit} />
          </Box>
        </Flex>
      </CommonPage>
    </>
  );
};

export default ProtectedPage(SignUp, null);
