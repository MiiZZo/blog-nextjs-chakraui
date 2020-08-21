import { Error404 } from "@ui";
import Head from "next/head";

export default ({ data: user }) => (
  <>
    <Head>
      <title>404 | Page not found</title>
      <meta name="robots" content="noindex" />
    </Head>
    <Error404 userIsAuth={!!user} />
  </>
);

