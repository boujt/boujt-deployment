import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import Navbar from "./navbar";
import Footer from "./Footer";
import PanicButton from "./PanicButton";
import { FaComment } from "react-icons/fa";
import { box_shadow_dark } from "../theme";
import { useRouter } from "next/router";

interface CustomContainerProps {
    children: JSX.Element[] | JSX.Element;
    gap?: number;
    maxW?: string;
}

const FloatingChatButton: React.FC = () => {
    const router = useRouter();
    return (
        <Button
            onClick={() => router.push("/chatten")}
            position={"fixed"}
            bottom={0}
            right={0}
            leftIcon={<FaComment color="white" />}
            backgroundColor="yellow"
            zIndex={999}
            marginRight={5}
            marginBottom={5}
            size="lg"
            boxShadow={box_shadow_dark}
        >
            <Text color="white">TILL CHATTEN</Text>
        </Button>
    );
};

export default FloatingChatButton;
