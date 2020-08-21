import { GetServerSidePropsContext } from "next";

export function withAuthServerSideProps(getServerSidePropsFunc?: Function) {
  return async (ctx: GetServerSidePropsContext) => {
    let user = null;
    let accessToken = null;

    const tokensResponse = await fetch(
      `${process.env.API_URL}/auth/update-tokens`,
      {
        method: "POST",
        headers: {
          cookie: ctx.req.headers.cookie
        }
      }
    );

    if (tokensResponse.ok) {
      accessToken = await tokensResponse.json();

      const response = await fetch(`${process.env.API_URL}/users/me`, {
        headers: {
          cookie: ctx.req.headers.cookie,
          Authorization: `Bearer ${accessToken}`
        }
      });

      user = await response.json();
    }

    if (getServerSidePropsFunc) {
      const result = {
        props: {
          data: {
            serverSideResult: await getServerSidePropsFunc(ctx, user),
            user: user,
            token: accessToken
          }
        }
      };

      return result;
    }

    return {
      props: {
        data: {
          user,
          serverSideResult: null
        }
      }
    };
  };
}
