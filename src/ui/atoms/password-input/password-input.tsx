import React, { useState, RefObject } from "react";
import {
  Input,
  InputProps,
  InputRightElement,
  InputGroup,
  Icon,
  Button
} from "@chakra-ui/core";

export default React.forwardRef(
  (props: InputProps<HTMLInputElement>, ref: RefObject<HTMLInputElement>) => {
    const [show, setShow] = useState(false);

    const handleToggleShow = () => {
      setShow(!show);
    };

    return (
      <InputGroup size="md">
        <Input
          data-testid="input"
          ref={ref}
          {...props}
          pr="4.5rem"
          type={show ? "text" : "password"}
        />
        <InputRightElement width="4.5rem">
          <Button
            onClick={handleToggleShow}
            h="1.75rem"
            size="sm"
            data-testid="button"
          >
            <Icon name={show ? "view-off" : "view"} />
          </Button>
        </InputRightElement>
      </InputGroup>
    );
  }
);
