import React from "react";
import { cleanup } from "@testing-library/react";
import { myRender } from "@lib/testing/render";
import { Markdown } from "./md";

afterEach(cleanup);

describe("md component", () => {
  it("should match a shapshot", () => {
    const { asFragment } = myRender(
      <Markdown>
        {`
          # My blockquote
  
          \`\`\`jsx
            import React from "react";
  
            const Component = () => <div></div>
          \`\`\`
        `}
      </Markdown>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
