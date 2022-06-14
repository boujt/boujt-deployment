import { Container, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Map, Marker, Overlay } from "pigeon-maps";
import Navbar from "./navbar";
import Footer from "./Footer";

interface CustomContainerProps {
  children: JSX.Element[];
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children }) => {
  return (
    <Container marginBottom={"4rem"} marginTop={"4rem"} maxW={"4xl"}>
      {children}
    </Container>
  );
};

interface BoujtTemplateProps {
  children: JSX.Element[];
}

const BoujtTemplate: React.FC<BoujtTemplateProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <CustomContainer>{children}</CustomContainer>
      <Footer />
    </>
  );
};

export default BoujtTemplate;
