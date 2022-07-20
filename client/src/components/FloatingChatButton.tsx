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
import GetSupportAlternatives from "./GetSupportAlternatives";

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
                        <GetSupportAlternatives
                            onClose={() => setOpen(false)}
                        />
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
