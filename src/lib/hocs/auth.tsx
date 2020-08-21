import React, { useEffect } from "react";
import cookie from "cookie";
import { getMe } from "@lib/api/user/get-me";

const withAuth = (WrappedComponent) => {
  const FuncComponent = ({ children, ...props }) => {
    console.log(props);

    return <WrappedComponent {...props}>{children}</WrappedComponent>;
  };

  FuncComponent.getInitialProps = async (ctx) => {
    const props =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));
    console.log(1);
    if (ctx && ctx.req) {
      const refreshToken = cookie.parse(ctx.req?.headers?.cookie)[
        "refresh_token"
      ];
      if (refreshToken) {
        console.log(refreshToken);
      }
    }
    return { ...props, user: null, number: 5 };
  };

  return FuncComponent;
};

export default withAuth;
