import React from "react";
import LinkWrapper from "next/link";
import { Link, Box, Flex, Button, IconButton } from "@chakra-ui/core";

interface HeaderProps {
  userIsAuth: boolean;
  handleLogout: () => void;
}

const Header = ({ userIsAuth, handleLogout }: HeaderProps) => {
  return (
    <Box
      px={[10, 10, 10, 200]}
      top={0}
      position="sticky"
      background="white"
      opacity={0.9}
      zIndex={10}
      w="100%"
      as="header"
      mb={5}
      boxShadow="0 0 25px #EDF2F7"
    >
      <Flex alignItems="center" h="60px">
        <LinkWrapper href="/">
          <Link>Articles</Link>
        </LinkWrapper>
        <Box ml="auto">
          {userIsAuth ? (
            <>
              <LinkWrapper href="/draft">
                <IconButton
                  data-testid="link-to-draft"
                  aria-label="link to draft"
                  icon="edit"
                  mr={5}
                  variant="ghost"
                  as="a"
                  cursor="pointer"
                  title="draft"
                />
              </LinkWrapper>
              <Button
                data-testid="logout"
                variant="ghost"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <LinkWrapper href="/auth/sign-in">
                <Link mr={10} textDecor="none" data-testid="sign-in-link">
                  Sign In
                </Link>
              </LinkWrapper>
              <LinkWrapper href="/auth/sign-up">
                <Button
                  variantColor="dark"
                  size="sm"
                  data-testid="sign-up-link"
                >
                  Sign Up
                </Button>
              </LinkWrapper>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
