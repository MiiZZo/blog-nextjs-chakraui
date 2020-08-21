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

export type SignUpInputs = {
  email: string;
  password: string;
  repeatPassword: string;
};

const SignUpForm = ({ onSubmit }: AuthFormProps<SignUpInputs>) => {
  const { handleSubmit, errors, register, formState, watch } = useForm<
    SignUpInputs
  >();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <FormControl isInvalid={!!errors.email}>
          <Input
            placeholder="E-mail"
            name="email"
            ref={register({
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address"
              }
            })}
          />
          <FormErrorMessage>
            {errors?.email?.message ||
              (errors.email && <>This field is required</>)}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <PasswordInput
            placeholder="Password"
            name="password"
            ref={register({
              required: true,
              pattern: {
                value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                message: "invalid password, hover question mark"
              }
            })}
          />
          <FormErrorMessage>
            {errors?.password?.message ||
              (errors.password && <>This field is required</>)}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.repeatPassword}>
          <PasswordInput
            placeholder="Repeat password"
            name="repeatPassword"
            ref={register({
              required: true,
              validate: (repeatPassword: string) =>
                repeatPassword === watch().password ||
                "The passwords do not match"
            })}
          />
          <FormErrorMessage>
            {errors?.repeatPassword?.message ||
              (errors.repeatPassword && <>This field is required</>)}
          </FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          mt={5}
          variant="solid"
          variantColor="dark"
          isLoading={formState.isSubmitting}
        >
          Sign up
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
