import React, { useState, forwardRef, Ref } from "react";
import {
  InputGroup,
  CircularProgress,
  InputProps,
  InputRightElement,
  Text,
  Input,
  Textarea
} from "@chakra-ui/core";

interface InputWithMaxLengthProps extends InputProps<HTMLInputElement> {
  maxLength: number;
  input?: "input" | "textarea";
}

const InputWithMaxLength = forwardRef(
  (
    {
      maxLength,
      input = "input",
      value = "",
      onChange,
      ...props
    }: InputWithMaxLengthProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputValue, setInputValue] = useState(value.toString());

    const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.currentTarget.value);
      onChange(e);
    };

    return (
      <InputGroup size="md">
        {input === "input" ? (
          <Input
            data-testid="input"
            pr="5rem"
            value={inputValue}
            ref={ref}
            focusBorderColor={
              inputValue.length === maxLength ? "gray.300" : "dark.500"
            }
            onChange={handleChangeValue}
            {...props}
          />
        ) : (
          <Textarea
            data-testid="textarea"
            pr="5rem"
            value={inputValue}
            focusBorderColor={
              inputValue.length === maxLength ? "gray.300" : "dark.500"
            }
            onChange={handleChangeValue}
            {...props}
          />
        )}
        <InputRightElement width="4.5rem" mr="1px">
          {maxLength < inputValue.length ? (
            <Text
              color={maxLength > inputValue.length ? "gray.500" : "red.500"}
              data-testid="text-indicator"
            >
              {maxLength - inputValue.length}
            </Text>
          ) : (
            <CircularProgress
              data-testid="circular-indicator"
              value={inputValue.length}
              max={maxLength}
              size="20px"
              color={inputValue.length > maxLength - 20 ? "orange" : undefined}
            />
          )}
        </InputRightElement>
      </InputGroup>
    );
  }
);

export default InputWithMaxLength;
