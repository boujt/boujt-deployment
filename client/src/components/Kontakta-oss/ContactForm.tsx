import {
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <Flex maxWidth={800} minWidth={300}>
      <FormControl maxWidth={"100%"}>
        <FormLabel htmlFor="first-name">Namn</FormLabel>
        <Input
          id="name"
          type="text"
          value={email}
          onChange={(t) => setName(t.target.value)}
        />
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={name}
          onChange={(t) => setEmail(t.target.value)}
        />
        <FormLabel htmlFor="text">Meddelande</FormLabel>
        <Textarea
          id="message"
          value={message}
          onChange={(t) => setMessage(t.target.value)}
        />
        <Flex gap={5}>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
          >
            Skicka
          </Button>
          <Button mt={4} color="teal">
            Ladda upp bilaga
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};

export default ContactForm;
