import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
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
import axios from "axios";
import React, {
    Dispatch,
    SetStateAction,
    useEffect,
    useRef,
    useState,
} from "react";
import { FaGem, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { ERRORS, FILESIZE_UPLOAD_LIMIT } from "../../../utils/constants";
import { getBase64 } from "../../../utils/helperFunctions";
import { EmailAttachment, EmailFormData } from "../../../utils/types";
import { box_shadow_dark } from "../../theme";

type FormError = {
    name?: string;
    email?: string;
    message?: string;
    file?: string;
};

const ContactForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const inputFile = useRef(null);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [file, setFile] = useState<Object | null>(null);
    const [submitted, hasSubmitted] = useState<boolean>(false);
    const [errors, setErrors] = useState<FormError>({});

    const validateEmail = () => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const fieldsAreValid = () => {
        const errs: FormError = {};

        if (name.trim() === "") {
            errs.name = ERRORS.CANNOT_BE_EMPTY;
        }
        if (email.trim() === "") {
            errs.email = ERRORS.CANNOT_BE_EMPTY;
        }
        if (!validateEmail()) {
            errs.email = ERRORS.INVALID;
        }
        if (message.trim() === "") {
            errs.message = ERRORS.CANNOT_BE_EMPTY;
        }

        setErrors(errs);

        return Object.keys(errs).length === 0;
    };

    const onEmailSubmit = async () => {
        //setIsSubmitting(true);

        setErrors({});

        if (!fieldsAreValid()) {
            return;
        }

        const emailData: EmailFormData = {
            name,
            email,
            message,
        };
        console.log(file);
        setIsSubmitting(true);
        setErrors({});

        if (file) {
            const b64 = await getBase64(file);
            const b64_plain = b64.split(";base64,")[1];

            const attachment: EmailAttachment = {
                base64: b64_plain,
                type: file.type,
                filename: file.name,
            };
            emailData.attachment = attachment;
            console.log(emailData.attachment);
        }

        axios
            .post("/api/ask-by-email", { emailData })
            .then((res) => {
                console.log(res);
                setIsSubmitting(false);
                hasSubmitted(true);
            })
            .catch((er) => {
                console.log(er);
                setIsSubmitting(false);
                setErrors((prev) => {
                    return { ...prev, file: ERRORS.BAD_REQUEST };
                });
            });
    };

    console.log(errors);

    const onChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        setErrors({});
        event.stopPropagation();
        event.preventDefault();
        if (event.target.files) {
            if (event.target.files[0].size >= FILESIZE_UPLOAD_LIMIT) {
                setErrors((prev) => {
                    return { ...prev, file: ERRORS.TOO_LARGE };
                });
                return;
            }

            setFile(event.target.files[0]);
            console.log(typeof file, file);
        } else {
            setFile(null);
        }
    };

    return (
        <Flex maxWidth={800} minWidth={250} flexDir={"column"}>
            {!submitted && (
                <FormControl isDisabled={isSubmitting} maxWidth={"100%"}>
                    <Input
                        isInvalid={errors.hasOwnProperty("name")}
                        errorBorderColor="red"
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
                        isInvalid={errors.hasOwnProperty("email")}
                        errorBorderColor="red"
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
                        isInvalid={errors.hasOwnProperty("message")}
                        errorBorderColor="red"
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
                    {errors.file && (
                        <Alert status="error">
                            <AlertIcon color="white" />
                            <AlertTitle color="white">
                                Filen du försökte ladda upp är för stor
                            </AlertTitle>
                        </Alert>
                    )}
                    {/* Only render buttons if we are not controlled ie onSubmit has been passeds */}

                    <Flex alignItems={"center"} gap={5}>
                        <Button
                            mt={4}
                            backgroundColor="yellow"
                            color="black"
                            variant={"default"}
                            isLoading={isSubmitting}
                            onClick={() => onEmailSubmit()}
                            leftIcon={<FaPaperPlane color="black" />}
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
                            isDisabled={isSubmitting}
                            leftIcon={<FaPaperclip color="black" />}
                        >
                            Ladda upp bilaga
                        </Button>
                    </Flex>
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
                </FormControl>
            )}
            {submitted && (
                <Flex
                    alignItems={"center"}
                    flexDirection={"column"}
                    justifyContent="center"
                    justifySelf={"center"}
                >
                    <Text
                        textAlign={"center"}
                        fontSize={20}
                        fontWeight={600}
                        color={"white"}
                    >
                        Tack för din fråga!{" "}
                    </Text>
                    <Text textAlign={"center"} color="white">
                        Vi kontaktar dig på <b> {email}</b> så snart vi kan!
                    </Text>
                </Flex>
            )}
        </Flex>
    );
};

export default ContactForm;
