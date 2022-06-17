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
    <Flex maxWidth={800} minWidth={300} flexDir={'column'}>
      <FormControl maxWidth={"100%"}>
        <Input
          my={'10px'}
          backgroundColor={'white'}
          borderRadius={'100px'}
          border={'none'}
          boxShadow={'0px 0px 10px 0px #0000001A'}
          id="name"
          type="text"
          value={name}
          placeholder={'Ditt namn'}
          onChange={(t) => setName(t.target.value)}
        />
        <Input
          my={'10px'}
          backgroundColor={'white'}
          borderRadius={'100px'}
          boxShadow={'0px 0px 10px 0px #0000001A'}
          border={'none'}
          id="email"
          type="email"
          value={email}
          placeholder={'Din email'}
          isRequired={true}
          onChange={(t) => setEmail(t.target.value)}
        />
        <Textarea
          my={'10px'}
          borderRadius={'20px'}
          backgroundColor={'white'}
          boxShadow={'0px 0px 10px 0px #0000001A'}
          border={'none'}
          id="message"
          value={message}
          placeholder={'Meddelande'}
          onChange={(t) => setMessage(t.target.value)}
        />
        <Flex gap={5}>
          <Button
            mt={4}
            backgroundColor="yellow"
            color="black"
            variant={"default"}
            isLoading={isSubmitting}
            type="submit"
          >
            Skicka
          </Button>
          <Button variant="defualt" mt={4} color="black">
            Ladda upp bilaga
          </Button>
        </Flex>
      </FormControl>
    </Flex>
  );
};

export default ContactForm;
