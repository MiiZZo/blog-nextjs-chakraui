import React from "react";
import { Text, Stack, Box, Button, Link } from "@chakra-ui/core";
import { CommonPage, Footer } from "@ui";
import { PublicUser } from "@dto/user";
import LinkWrapper from "next/link";

interface Props {
  users: PublicUser[];
}

const Users = React.memo(({ users }: Props) => {
  return (
    <CommonPage footer={<Footer />}>
      <Stack spacing={5}>
        {users.map(({ username, id, articles }) => (
          <Box
            boxShadow="0 0 5px gray"
            key={id}
            p={5}
            borderRadius={3}
            maxW={800}
          >
            <Text>
              Username: <Text as="b">{username}</Text>
            </Text>
            <Text>
              Articles count: <Text as="b">{articles.length}</Text>
            </Text>
            <LinkWrapper href={`/users/${username}`}>
              <Link>Profile</Link>
            </LinkWrapper>
            <Button variantColor="red" mt={5}>
              Delete user
            </Button>
          </Box>
        ))}
      </Stack>
    </CommonPage>
  );
});

export default Users;
