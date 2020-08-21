import React, { useState } from "react";
import {
  Box,
  Textarea,
  Button,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalHeader
} from "@chakra-ui/core";
import { InputWithMaxLength } from "@ui";
import { CreateCommentProps } from "./create-comment.types";

const CreateComment = ({
  handleSubmitComment,
  handleDiscardComment
}: CreateCommentProps) => {
  const [value, setValue] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleSubmit = () => {
    handleSubmitComment(value);
    handleDiscardComment();
  };

  const handleOpenModal = () => {
    if (value.length > 0) {
      onOpen();
    } else {
      handleDiscard();
    }
  };

  const handleDiscard = () => {
    handleDiscardComment();
  };

  return (
    <>
      <Box maxW="500px">
        <InputWithMaxLength
          placeholder="Write a comment..."
          name="comment"
          value={value}
          onChange={handleChangeValue}
          input="textarea"
          maxLength={500}
        />
        <Button
          onClick={handleSubmit}
          mt={5}
          isDisabled={value.length > 500}
          size="sm"
          variantColor="dark"
          data-testid="submit"
        >
          Submit comment
        </Button>
        <Button
          mt={5}
          ml={5}
          size="sm"
          onClick={handleOpenModal}
          data-testid="close"
        >
          Close
        </Button>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>confirm action</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Your comment will be discarded. Are you sure?</ModalBody>
          <ModalFooter>
            <Button
              variantColor="dark"
              mr={3}
              onClick={handleDiscard}
              data-testid="discard"
            >
              Discard
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateComment;
