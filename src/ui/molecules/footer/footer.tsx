import React from "react";
import NLink from "next/link";
import { Box, List, ListItem, Link } from "@chakra-ui/core";
import { theme } from "@ui";

const Footer = () => {
  return (
    <Box
      mt={20}
      flexShrink={0}
      as="footer"
      background={theme.colors.gray[200]}
      px={[10, 10, 10, 200]}
      py={5}
      w="100%"
      h={100}
    >
      <List styleType="none">
        <ListItem>
          <NLink href="/">
            <Link>Articles</Link>
          </NLink>
        </ListItem>
        <ListItem>
          <NLink href="/about">
            <Link>About</Link>
          </NLink>
        </ListItem>
        <ListItem>
          <NLink href="/help">
            <Link>Help</Link>
          </NLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default Footer;
