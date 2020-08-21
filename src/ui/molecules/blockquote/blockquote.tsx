import React from "react";
import styled from "@emotion/styled";
import { Text, Divider } from "@chakra-ui/core";
import { theme } from "@ui";

const StyledText = styled(Text)`
  p {
    margin: 0 10px;
  }
`;

const Blockquote: React.FC<{}> = ({ children }) => {
  return (
    <StyledText
      as="blockquote"
      p={2}
      mb={5}
      background={theme.colors.gray[100]}
    >
      <Divider />
      {children}
      <Divider />
    </StyledText>
  );
};

export default Blockquote;
