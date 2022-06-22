import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import Navbar from "./navbar";
import Footer from "./Footer";
import PanicButton from "./PanicButton";
import FloatingChatButton from "./FloatingChatButton";

interface CustomContainerProps {
    children: JSX.Element[] | JSX.Element;
    gap?: number;
    maxW?: string;
    marginY: string;
}

const CustomContainer: React.FC<CustomContainerProps> = ({
    children,
    gap = 0,
    maxW = "4xl",
    marginY,
}) => {
    return (
        <Container
            display={"flex"}
            gap={gap}
            marginBottom={marginY}
            marginTop={marginY}
            maxW={maxW}
            flexDirection="column"
        >
            {children}
        </Container>
    );
};

interface BoujtTemplateProps {
    children: any;
    gap?: number;
    maxW?: string;
    marginY?: string;
    strict?: boolean;
    transparentHeader?: boolean;
}

const BoujtTemplate: React.FC<BoujtTemplateProps> = ({
    children,
    gap = 0,
    maxW = "4xl",
    marginY = "4rem",
    strict = true,
    transparentHeader = false,
}) => {
    return (
        <>
            <Navbar transparent={transparentHeader} />
            <PanicButton />
            <FloatingChatButton />
            {strict && (
                <CustomContainer marginY={marginY} maxW={maxW} gap={gap}>
                    {children}
                </CustomContainer>
            )}
            {!strict && children}

            <Footer />
        </>
    );
};

export default BoujtTemplate;
