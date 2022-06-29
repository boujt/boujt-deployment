import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    Tooltip,
    useClipboard,
    useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import Navbar from "./navbar";
import Footer from "./Footer";
import PanicButton from "./PanicButton";
import {
    FaComment,
    FaEnvelope,
    FaHeart,
    FaQuestion,
    FaVideo,
} from "react-icons/fa";
import { box_shadow_dark } from "../theme";
import { useRouter } from "next/router";
import { redirect } from "next/dist/server/api-utils";
import { ROUTES } from "../../utils/constants";

interface CustomContainerProps {
    children: JSX.Element[] | JSX.Element;
    gap?: number;
    maxW?: string;
}

const FloatingChatButton: React.FC = () => {
    const router = useRouter();
    const [open, setOpen] = useState<boolean>(false);
    const { hasCopied, onCopy } = useClipboard("fraga@boujt.se");
    const toast = useToast();

    const redirect = (path: string) => {
        router.push(path);
        setOpen(false);
    };
    return (
        <>
            <Button
                onClick={() => setOpen(true)}
                position={"fixed"}
                bottom={0}
                right={0}
                leftIcon={<FaHeart />}
                variant="default"
                borderRadius={4}
                zIndex={999}
                marginRight={5}
                marginBottom={5}
                size="lg"
                boxShadow={box_shadow_dark}
                px={10}
            >
                <Text>FÅ STÖD</Text>
            </Button>
            <Modal size={"3xl"} isOpen={open} onClose={() => setOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <Flex gap={3} alignItems={"center"}>
                            <FaHeart /> Få stöd
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Vi erbjuder flera olika sätt för dig att kontakta
                            oss och få stöd. Välj vilket som passar dig bäst!
                        </Text>
                        <Flex marginTop={5} gap={4}>
                            <Flex
                                flexDirection={"column"}
                                padding="2rem 1rem"
                                borderRadius={8}
                                boxShadow="0px 0px 40px -25px"
                                backgroundColor={"yellow"}
                                gap={5}
                                width={300}
                                cursor="pointer"
                                _hover={{ boxShadow: "0px 0px 40px -10px" }}
                                onClick={() => redirect(ROUTES.CHATTEN)}
                            >
                                <Text
                                    textAlign={"center"}
                                    fontSize={20}
                                    fontWeight={800}
                                >
                                    Text- eller videochatt
                                </Text>
                                <Flex
                                    alignItems={"center"}
                                    justifyContent="center"
                                    gap={1}
                                >
                                    <FaComment fontSize={35} />
                                    <Text fontSize={35}>/</Text>
                                    <FaVideo fontSize={35} />
                                </Flex>
                            </Flex>
                            <Flex
                                flexDirection={"column"}
                                padding="2rem 1rem"
                                borderRadius={8}
                                boxShadow="0px 0px 40px -25px"
                                backgroundColor={"turquoise"}
                                gap={5}
                                width={300}
                                cursor="pointer"
                                _hover={{ boxShadow: "0px 0px 40px -10px" }}
                                onClick={() => redirect(ROUTES.FRAGELADA)}
                            >
                                <Text
                                    textAlign={"center"}
                                    fontSize={20}
                                    fontWeight={800}
                                >
                                    Frågelådan
                                </Text>
                                <Flex
                                    alignItems={"center"}
                                    justifyContent="center"
                                    gap={1}
                                >
                                    <FaQuestion fontSize={35} />
                                </Flex>
                            </Flex>
                            <Tooltip label={"Kopiera mailadress"}>
                                <Flex
                                    flexDirection={"column"}
                                    padding="2rem 1rem"
                                    borderRadius={8}
                                    boxShadow="0px 0px 40px -25px"
                                    backgroundColor={"red"}
                                    gap={5}
                                    width={300}
                                    cursor="pointer"
                                    _hover={{ boxShadow: "0px 0px 40px -10px" }}
                                    onClick={() => {
                                        onCopy();
                                        toast({
                                            title: "Mailadress kopierad!",
                                            variant: "solid",
                                            status: "info",
                                        });
                                    }}
                                >
                                    <Text
                                        textAlign={"center"}
                                        fontSize={20}
                                        fontWeight={800}
                                    >
                                        Maila oss en fråga
                                    </Text>

                                    <Flex
                                        alignItems={"center"}
                                        justifyContent="center"
                                        gap={1}
                                    >
                                        <FaEnvelope fontSize={35} />
                                        <Text>fraga@boujt.se</Text>
                                    </Flex>
                                </Flex>
                            </Tooltip>
                        </Flex>
                    </ModalBody>

                    <ModalFooter justifyContent={"center"}>
                        <Button mr={3} onClick={() => setOpen(false)}>
                            Stäng
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default FloatingChatButton;
