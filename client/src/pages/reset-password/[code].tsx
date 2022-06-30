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
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useStrapi } from "../../auth/auth";
import { useAnimationFrame } from "framer-motion";
import { box_shadow_light } from "../../theme";
import { useRouter } from "next/router";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export type Userdata = {
    pwConfirm: string;
    pw: string;
};

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [passwords, setPasswords] = useState<Userdata>({
        pw: "",
        pwConfirm: "",
    });
    const { strapi, user, login, logout, loading, error } = useStrapi();
    const toast = useToast();
    const [submitting, setSubmitting] = useState<string>("no");

    const handleShowClick = () => setShowPassword(!showPassword);
    const router = useRouter();

    const updatePassword = (e) => {
        e.preventDefault();
        setSubmitting("yes");
        if (passwords.pw !== passwords.pwConfirm) {
            toast({
                title: "Lösenorden matchar inte!",
                colorScheme: "orange",
                status: "info",
            });
        }
        axios
            .post(
                "https://boujt-app-6a3vb.ondigitalocean.app/api/auth/reset-password",
                {
                    code: code,
                    password: passwords.pw,
                    passwordConfirmation: passwords.pwConfirm,
                }
            )
            .then((response) => {
                // Handle success.
                console.log("Your user's password has been changed.");
                console.log(response);
                setSubmitting("done");
            })
            .catch((error) => {
                // Handle error.
                toast({
                    title: "Något gick fel!",
                    description: "Den är länken är förmodligen utgången.",
                });
                setSubmitting("no");
                console.log("An error occurred:", error.response);
            });
    };

    const { code } = router.query;

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            {submitting !== "done" && (
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Heading marginBottom={5} color="turquoise">
                        Sätt nytt lösenord
                    </Heading>
                    <Box minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={(e) => updatePassword(e)}>
                            <Stack
                                spacing={4}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow={box_shadow_light}
                            >
                                <FormControl>
                                    <InputGroup marginBottom={4}>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                        >
                                            <CFaLock color="gray.300" />
                                        </InputLeftElement>
                                        <Input
                                            onChange={(e) =>
                                                setPasswords((prev) => {
                                                    return {
                                                        ...prev,
                                                        pw: e.target.value,
                                                    };
                                                })
                                            }
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Lösenord"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button
                                                h="1.75rem"
                                                size="sm"
                                                onClick={handleShowClick}
                                            >
                                                {showPassword ? "Göm" : "Visa"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                    <InputGroup>
                                        <InputLeftElement
                                            pointerEvents="none"
                                            color="gray.300"
                                        >
                                            <CFaLock color="gray.300" />
                                        </InputLeftElement>
                                        <Input
                                            onChange={(e) =>
                                                setPasswords((prev) => {
                                                    return {
                                                        ...prev,
                                                        pwConfirm:
                                                            e.target.value,
                                                    };
                                                })
                                            }
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Bekräfta lösenord"
                                        />
                                        <InputRightElement width="4.5rem">
                                            <Button
                                                h="1.75rem"
                                                size="sm"
                                                onClick={handleShowClick}
                                            >
                                                {showPassword ? "Göm" : "Visa"}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    borderRadius={0}
                                    type="submit"
                                    variant={"adminPrimary"}
                                    width="full"
                                >
                                    {submitting === "yes" ? (
                                        <Spinner />
                                    ) : (
                                        "Byt lösenord"
                                    )}
                                </Button>
                                {Object.keys(error).length !== 0 && (
                                    <Alert status="error">
                                        <AlertIcon />
                                        Fel användarnamn eller lösenord
                                    </Alert>
                                )}
                            </Stack>
                        </form>
                    </Box>
                </Stack>
            )}

            {submitting === "done" && (
                <Flex
                    gap={4}
                    flexDir={"column"}
                    justifyContent="center"
                    alignItems={"center"}
                >
                    <Text fontSize={30} fontWeight={800}>
                        Snyggt!
                    </Text>
                    <Text>
                        Ditt lösenord har återställts och du kan nu logga in!
                    </Text>
                    <Button
                        onClick={() => router.push("/admin")}
                        variant={"adminPrimary"}
                    >
                        Logga in
                    </Button>
                </Flex>
            )}
        </Flex>
    );
};

export default ResetPassword;
