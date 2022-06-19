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
import React, { Dispatch, SetStateAction, useState } from "react";

type Props = {
  // Will be passed if the ContactForm is not controlled
  onSubmit?: (name: string, email: string, message: string) => void

  // Will be passed if we are not in controll, we don't handle the state
  nameState?: [string, Dispatch<SetStateAction<string>>],
  emailState?: [string, Dispatch<SetStateAction<string>>],
  messageState?: [string, Dispatch<SetStateAction<string>>],
}

const ContactForm: React.FC<Props> = ({
  onSubmit, nameState, emailState, messageState
}) => {
  const [name, setName] = nameState != null ? nameState : useState<string>("");
  const [email, setEmail] = emailState != null ? emailState : useState<string>("");
  const [message, setMessage] = messageState != null ? messageState : useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if(!onSubmit && !nameState) {
    console.error("ContactForm is used incorrectly!");
  }

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
          size={'sm'}
        />
        {/* Only render buttons if we are not controlled ie onSubmit has been passeds */}
        {!!onSubmit && (
          <Flex gap={5}>
            <Button
              mt={4}
              backgroundColor="yellow"
              color="black"
              variant={"default"}
              isLoading={isSubmitting}
              type="submit"
              onClick={() => {
            
              }}
            >
              Skicka
            </Button>
            <Button variant="defualt" mt={4} color="black">
              Ladda upp bilaga
            </Button>
          </Flex>
        )}
      </FormControl>
    </Flex>
  );
};

export default ContactForm;
