import React from "react";
import { GetServerSidePropsResult } from "next";
import { PublicUser } from "@dto/user";
import { getUsers } from "@lib/api/user/get-users";
import Users from "@features/admin/pages/users";

export default function ({ users }: { users: PublicUser[] }) {
  return <Users users={users} />;
}

export const getServerSideProps = async (): Promise<
  GetServerSidePropsResult<{ users: PublicUser[] }>
> => {
  const users = await getUsers();

  return {
    props: {
      users
    }
  };
};
