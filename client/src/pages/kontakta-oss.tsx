import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import ContactForm from "../components/Kontakta-oss/ContactForm";
import Footer from "../components/Footer";
import EmailForm from "../components/Form/EmailForm";
import Navbar from "../components/navbar";
import ContactInfo from "../components/Kontakta-oss/ContactInfo";
import CustomContainer from "../components/CustomContainer";
import BoujtTemplate from "../components/CustomContainer";

const HideYourVisist: NextPage = () => {
  return (
    <BoujtTemplate>
      <Heading>Kontakta oss</Heading>
      <Heading>Kontakta oss</Heading>
      <Heading>Kontakta oss</Heading>
    </BoujtTemplate>
  );
};

export default HideYourVisist;
