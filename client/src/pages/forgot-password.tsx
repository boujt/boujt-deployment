import { useRef, useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Spinner,
    Alert,
    AlertIcon,
    Text,
    useToast,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { useStrapi } from "../auth/auth";
import { useAnimationFrame } from "framer-motion";
import { box_shadow_light } from "../theme";
import { useRouter } from "next/router";
import axios from "axios";
import { LOADING_STATE } from "../../utils/constants";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export type Userdata = {
    uid: string;
    pw: string;
};

const ForgotPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState<string>("");
    const { strapi } = useStrapi();
    const [loading, setLoading] = useState<string>(LOADING_STATE.NONE);
    const router = useRouter();

    const toast = useToast();

    const handleReset = (e: any) => {
        e.preventDefault();
        setLoading(LOADING_STATE.FETCHING);

        axios
            .post(
                "https://boujt-app-6a3vb.ondigitalocean.app/api/auth/forgot-password",
                {
                    email: "jakobkarlstrand@gmail.com", // user's email
                }
            )
            .then((response) => {
                toast({
                    title: "Snyggt!",
                    description: "Ett email har skickats till din mail.",
                    status: "success",
                });
                setLoading(LOADING_STATE.ACCEPTING);
            })
            .catch((error) => {
                console.log("An error occurred:", error.response);
                toast({
                    title: "Något gick fel!",
                    description: "Du har angivit en felaktig mailadress.",
                });
                setLoading(LOADING_STATE.NONE);
            });
    };

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            {loading !== LOADING_STATE.ACCEPTING && (
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading marginBottom={5} color="turquoise">
                        Återställ lösenord
                    </Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={(e) => handleReset(e)}>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow={box_shadow_light}
                            >
                                <FormControl>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents="none">
                                            <FaEnvelope color="gray.300" />
                                        </InputLeftElement>

                                        <Input
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            type="email"
                                            placeholder="Email"
                                        />
                                    </InputGroup>
                                </FormControl>

                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant={"adminPrimary"}
                                    width="full"
                                >
                                    {loading === LOADING_STATE.FETCHING ? (
                                        <Spinner />
                                    ) : (
                                        "Återställ lösenord"
                                    )}
                                </Button>
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            )}
            {loading === LOADING_STATE.ACCEPTING && (
                <Box maxWidth={500}>
                    <Text textAlign={"center"} fontSize={30} fontWeight={800}>
                        Sådär!
                    </Text>
                    <Text textAlign={"center"}>
                        Ett email med återställningslänk har skickats till{" "}
                        <b>{email}</b>
                    </Text>
                </Box>
            )}
        </Flex>
    );
};

export default ForgotPassword;
