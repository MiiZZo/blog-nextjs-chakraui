import React from "react";
import { cleanup } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import Profile from "./profile";

afterEach(cleanup);

describe("profile component", () => {
  const articles = [null, null, null];
  const user = {
    username: "username",
    bio: "my bio",
    homepage: "home.com",
    facebook: "facebook",
    twitter: "twitter",
    github: "github",
    registrationDate: "2020-08-06 23:55:06"
  };

  it("should match a shapshot", () => {
    const { asFragment } = myRender(
      <Profile user={user} articles={articles} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
