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
    Spinner,
    Text,
    Textarea,
} from "@chakra-ui/react";
import React, {
    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";
import { box_shadow_dark } from "../../theme";

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const inputFile = useRef(null);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [file, setFile] = useState<Object | null>(null);
    const [preview, setPreview] = useState<string>("");

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        event.preventDefault();
        if (event.target.files) {
            setFile(event.target.files[0]);
            console.log(typeof file, file);
        } else {
            setFile(null);
        }
    };

    useEffect(() => {
        // create the preview
        if (!file) return;
        const objectUrl = URL.createObjectURL(file);
        setPreview(objectUrl);

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl);
    }, [file]);

    return (
        <Flex maxWidth={800} minWidth={250} flexDir={"column"}>
            {file && <a href={preview}>{preview}</a>}
            <FormControl maxWidth={"100%"}>
                <Input
                    my={"10px"}
                    backgroundColor={"white"}
                    borderRadius={"100px"}
                    border={"none"}
                    boxShadow={box_shadow_dark}
                    id="name"
                    type="text"
                    value={name}
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
                    value={email}
                    placeholder={"Din email"}
                    isRequired={true}
                    onChange={(t) => setEmail(t.target.value)}
                />
                <Textarea
                    my={"10px"}
                    borderRadius={"20px"}
                    backgroundColor={"white"}
                    boxShadow={box_shadow_dark}
                    border={"none"}
                    id="message"
                    value={message}
                    placeholder={"Meddelande"}
                    onChange={(t) => setMessage(t.target.value)}
                    size={"sm"}
                />
                <Input
                    onChange={onChangeFile}
                    ref={inputFile}
                    value={""}
                    display="none"
                    type={"file"}
                />
                {/* Only render buttons if we are not controlled ie onSubmit has been passeds */}

                <Flex alignItems={"center"} gap={5}>
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
                    <Button
                        onClick={() => inputFile.current?.click()}
                        variant="defualt"
                        borderRadius={20}
                        mt={4}
                        color="black"
                        backgroundColor={"white"}
                    >
                        Ladda upp bilaga
                    </Button>
                    <Text color="white">
                        {file !== null && (
                            <Text
                                onClick={() => {
                                    setFile(null);
                                }}
                                cursor={"pointer"}
                                _hover={{
                                    color: "red",
                                    textDecoration: "line-through",
                                }}
                                color={"white"}
                            >
                                {file.name}
                            </Text>
                        )}{" "}
                    </Text>
                </Flex>
            </FormControl>
        </Flex>
    );
};

export default ContactForm;
