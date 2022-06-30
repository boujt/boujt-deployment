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
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useStrapi } from "../auth/auth";
import { useAnimationFrame } from "framer-motion";
import { box_shadow_light } from "../theme";
import { useRouter } from "next/router";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export type Userdata = {
    uid: string;
    pw: string;
};

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [userData, setUserData] = useState<Userdata>({ uid: "", pw: "" });
    const { strapi, user, login, logout, loading, error } = useStrapi();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const router = useRouter();
    const handleShowClick = () => setShowPassword(!showPassword);

    const handleLogin = (e: any) => {
        e.preventDefault();

        login({ uid: userData.uid, pw: userData.pw });
    };

    console.log(user);
    const updateUsername = (e: any) => {
        setUserData((prev: Userdata) => {
            return { uid: e.target.value, pw: prev.pw };
        });
    };

    const updatePassword = (e: any) => {
        setUserData((prev: Userdata) => {
            return { uid: prev.uid, pw: e.target.value };
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
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Heading marginBottom={5} color="turquoise">
                    Logga in som Syssnare
                </Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form onSubmit={(e) => handleLogin(e)}>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow={box_shadow_light}
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none">
                                        <CFaUserAlt color="gray.300" />
                                    </InputLeftElement>

                                    <Input
                                        onChange={(e) => updateUsername(e)}
                                        type="text"
                                        placeholder="Email eller användarnamn"
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                    >
                                        <CFaLock color="gray.300" />
                                    </InputLeftElement>
                                    <Input
                                        onChange={(e) => updatePassword(e)}
                                        type={
                                            showPassword ? "text" : "password"
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
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant={"adminPrimary"}
                                width="full"
                            >
                                {loading ? <Spinner /> : "Login"}
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
            <Text
                onClick={() => router.push("/forgot-password")}
                cursor={"pointer"}
                color="turquoise"
                as="a"
            >
                Glömt ditt lösenord?
            </Text>
            <Box my={5}>
                Kontakta administratören om du behöver tillgång till ett konto
            </Box>
        </Flex>
    );
};

export default LoginForm;
