import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Input,
  Stack,
  FormControl,
  FormErrorMessage
} from "@chakra-ui/core";
import { PasswordInput } from "@ui";
import { AuthFormProps } from "./auth-form.types";

export type SignInInputs = {
  email: string;
  password: string;
};

const SignInForm = ({ onSubmit }: AuthFormProps<SignInInputs>) => {
  const { handleSubmit, errors, register, formState } = useForm<SignInInputs>();

  return (
    <form onSubmit={handleSubmit<SignInInputs>(onSubmit)}>
      <Stack spacing={3}>
        <FormControl isInvalid={!!errors.email}>
          <Input
            placeholder="E-mail"
            name="email"
            ref={register({
              required: true
            })}
          />
          <FormErrorMessage>
            {errors.email && <>This field is required</>}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <PasswordInput
            placeholder="Password"
            name="password"
            ref={register({
              required: true
            })}
          />
          <FormErrorMessage>
            {errors.password && <>This field is required</>}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          mt={5}
          variant="solid"
          variantColor="dark"
          isLoading={formState.isSubmitting}
        >
          Sign in
        </Button>
      </Stack>
    </form>
  );
};

export default SignInForm;
