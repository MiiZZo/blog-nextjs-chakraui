import React from "react";
import { useUserContext } from "@lib/contexts/user";
import { ProtectedPage } from "src/ui/pages/protected/protected";

function Home({ number }) {
  return <div>{number}</div>;
}

export default ProtectedPage(Home, "admin");

export const getServerSideProps = async () => {
  return {
    props: {
      number: 5
    }
  };
};
