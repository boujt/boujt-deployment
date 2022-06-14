import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import ContactForm from "../components/Kontakta-oss/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import ContactInfo from "../components/Kontakta-oss/ContactInfo";

const HideYourVisist: NextPage = () => {
  return (
    <Box>
      <Navbar />
      <Center flexDir={"column"} pb={"100px"}>
        <Heading
          bgGradient={"linear(to-b, #34569A, #1D3D63)"}
          bgClip="text"
          py={"125px"}
        >
          Kontakta oss
        </Heading>
        <Heading color={"blackish"}>Letar du efter chatten?</Heading>
        <Button
          width="163px"
          height="45px"
          variant={"default"}
          marginTop={"30px"}
        >
          <Text fontWeight={"light"}>Ta mig dit</Text>
        </Button>
      </Center>
      <Center flexDirection={"column"}>
        <Heading color={"blackish"}>Maila oss</Heading>
        <ContactForm />
      </Center>
      <Center>
        <ContactInfo />
      </Center>
      <Footer />
    </Box>
  );
};

export default HideYourVisist;
