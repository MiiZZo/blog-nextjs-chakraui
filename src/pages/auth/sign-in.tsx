import React, { useEffect } from "react";
import { CommonPage, Footer, Error404 } from "@ui";
import SignInForm, {
  SignInInputs
} from "@features/auth/molecules/sign-in-form";
import Head from "next/head";
import { Flex, Box, Heading, useToast } from "@chakra-ui/core";
import { AuthFormProps } from "@features/auth/molecules/auth-form.types";
import { login } from "@lib/api/auth/login";
import { useUserContext } from "@lib/contexts/user";
import { useRouter } from "next/router";
import { ProtectedPage } from "src/ui/pages/protected/protected";
import { withAuthServerSideProps } from "@lib/hocs/withAuth";

const SignIn = ({ onSubmit }: AuthFormProps<SignInInputs>) => {
  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <CommonPage footer={<Footer />} userIsAuth={false}>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box width={["300px", "500px"]} paddingX={5}>
            <Heading textAlign="center" mb={5}>
              Sign In
            </Heading>
            <SignInForm onSubmit={onSubmit} />
          </Box>
        </Flex>
      </CommonPage>
    </>
  );
};

const WithSubmit = ({ data: { user } }) => {
  const toast = useToast();
  const router = useRouter();
  const { setToken } = useUserContext();
  console.log(user);

  const onSubmit: AuthFormProps<SignInInputs>["onSubmit"] = async (data) => {
    const result = await login(data);

    if (result) {
      setToken(result.access_token);
      router.push("/");
      toast({
        title: "successful sign in",
        status: "success"
      });
    } else {
      toast({
        title: "Unsuccessful sign in",
        description: "Unvalid data",
        status: "error"
      });
    }
  };

  if (!!user) {
    return <Error404 userIsAuth={true} />;
  }

  return <SignIn onSubmit={onSubmit} />;
};

export default WithSubmit;
export const getServerSideProps = withAuthServerSideProps();
