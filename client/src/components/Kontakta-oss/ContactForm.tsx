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
import { box_shadow_dark } from "../../theme";

type Props = {
    // Will be passed if the ContactForm is not controlled
    onSubmit?: (name: string, email: string, message: string) => void;

    // Will be passed if we are not in controll, we don't handle the state
    nameState?: [string, Dispatch<SetStateAction<string>>];
    emailState?: [string, Dispatch<SetStateAction<string>>];
    messageState?: [string, Dispatch<SetStateAction<string>>];
};

const ContactForm: React.FC<Props> = ({
    onSubmit,
    nameState,
    emailState,
    messageState,
}) => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    if (!onSubmit && !nameState) {
        console.error("ContactForm is used incorrectly!");
    }

    return (
        <Flex maxWidth={800} minWidth={250} flexDir={"column"}>
            <FormControl maxWidth={"100%"}>
                <Input
                    my={"10px"}
                    backgroundColor={"white"}
                    borderRadius={"100px"}
                    border={"none"}
                    boxShadow={box_shadow_dark}
                    id="name"
                    type="text"
                    value={nameState?.[0]}
                    placeholder={"Ditt namn"}
                    onChange={(t) => setName(t.target.value)}
                />
                <Input
                    my={"10px"}
                    backgroundColor={"white"}
                    borderRadius={"100px"}
                    boxShadow={box_shadow_dark}
                    border={"none"}
                    id="email"
                    type="email"
                    value={emailState?.[0]}
                    placeholder={"Din email"}
                    isRequired={true}
                    onChange={(t) => emailState?.[1](t.target.value)}
                />
                <Textarea
                    my={"10px"}
                    borderRadius={"20px"}
                    backgroundColor={"white"}
                    boxShadow={box_shadow_dark}
                    border={"none"}
                    id="message"
                    value={messageState?.[0]}
                    placeholder={"Meddelande"}
                    onChange={(t) => messageState?.[1](t.target.value)}
                    size={"sm"}
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
                            onClick={() => {}}
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
