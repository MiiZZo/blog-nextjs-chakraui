import React from "react";
import {
  Button,
  FormControl,
  Stack,
  Textarea,
  FormLabel,
  Input,
  Flex
} from "@chakra-ui/core";
import { InputWithMaxLength } from "@ui";
import { useForm } from "react-hook-form";

type formInputs = {
  title: string;
  description: string;
  body: string;
};

interface DraftProps {
  handleSubmit: (values: formInputs) => void;
  handleToggleShowPreview: () => void;
  handleChangeDraftData: (e: React.ChangeEvent<HTMLInputElement>) => void;
  draftData: formInputs;
}

const Draft = ({
  handleSubmit,
  handleToggleShowPreview,
  handleChangeDraftData,
  draftData
}: DraftProps) => {
  const { register, errors, ...form } = useForm<formInputs>();

  return (
    <Stack
      spacing={8}
      as="form"
      onSubmit={form.handleSubmit(handleSubmit)}
      maxW={800}
    >
      <FormControl isInvalid={!!errors.title}>
        <FormLabel>Title</FormLabel>
        <InputWithMaxLength
          data-testid="title-input"
          maxLength={100}
          input="input"
          ref={register({
            required: true
          })}
          name="title"
          placeholder="Title"
          onChange={handleChangeDraftData}
          value={draftData.title}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.description}>
        <FormLabel>Description</FormLabel>
        <InputWithMaxLength
          data-testid="description-input"
          maxLength={100}
          input="input"
          ref={register({
            required: true
          })}
          name="description"
          placeholder="Description"
          onChange={handleChangeDraftData}
          value={draftData.description}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.body}>
        <FormLabel>Body (markdown)</FormLabel>
        <Textarea
          data-testid="body-input"
          h={500}
          name="body"
          ref={register({
            required: true
          })}
          value={draftData.body}
          onChange={handleChangeDraftData}
          placeholder="Body (markdown)"
          focusBorderColor="black"
        />
      </FormControl>
      <FormControl>
        <Button type="submit" variantColor="dark" w="100%">
          Publish article
        </Button>
      </FormControl>
      <Button onClick={handleToggleShowPreview} data-testid="show">
        Show preview
      </Button>
    </Stack>
  );
};

export default Draft;
