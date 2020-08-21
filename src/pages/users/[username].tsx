import React from "react";
import Profile from "@features/user/profile/profile";
import { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { User, Article } from "@dto/index";
import Head from "next/head";
import { Error404 } from "@ui";
import { PublicUser } from "@dto/user";

export default ({ user }: { user: PublicUser }) => {
  if (!user) {
    return <Error404 />;
  }

  return (
    <>
      <Head>
        <title>{user.username} | Profile</title>
      </Head>
      <Profile user={user} />
    </>
  );
};

export const getServerSideProps = async ({
  params: { username }
}: GetServerSidePropsContext): Promise<
  GetServerSidePropsResult<{ user: PublicUser }>
> => {
  const response = await fetch(`${process.env.API_URL}/profiles/${username}`);
  let user = null;

  if (response.ok) {
    user = await response.json();
  }

  return {
    props: {
      user
    }
  };
};
