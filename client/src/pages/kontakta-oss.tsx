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
import ContactInfo from "../components/Kontakta-oss/AddressMap";
import CustomContainer from "../components/BoujtTemplate";
import BoujtTemplate from "../components/BoujtTemplate";
import Video from "../components/Video";
import Starfield from "../components/Starfield";
import { CSSProperties } from "react";
import { FaEnvelope, FaMapPin, FaMarker } from "react-icons/fa";
const background: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  borderRadius: 8,
  zIndex: -100,
};
const content: CSSProperties = {
  width: "100%",
  borderRadius: 8,
  zIndex: 100,
};

const KontaktaOss: NextPage = () => {
  return (
    <BoujtTemplate gap={100}>
      <Heading>Kontakta oss</Heading>
      <Flex gap={20}>
        <Box width={"60%"} display={"flex"} flexDirection="column" gap={4}>
          <Text>
            Vill du få stöd via mejl? Det går också bra! Du kan skicka in ett
            textmejl eller en film på svenskt teckenspråk. Du bestämmer själv
            hur vi ska svara - i text eller på teckenspråk. Du får mejla oss om
            vad du vill. Det kan vara ett problem, en fråga eller något helt
            annat.
          </Text>
          <Video
            width={"100%"}
            height={200}
            url={
              "http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
            }
          />
        </Box>
        <Box width={"40%"}>
          <Text fontWeight={700} fontSize={25}>
            Maila oss
          </Text>
          <ContactForm />
        </Box>
      </Flex>

      <Flex
        position={"relative"}
        flexDir={"column"}
        maxW={"100%"}
        // bgGradient={gradient}
        alignItems={"center"}
        padding={"6rem 4rem"}
        // bgImage={`url(${stars.src}), ${css_gradient}`}
      >
        <Box sx={content} display="flex" flexDirection={"row"}>
          <Flex
            justifyContent="center"
            alignText="center"
            width={"40%"}
            alignItems="center"
          >
            <Heading color="white">Sveriges Dövas Ungdomsförbund</Heading>
          </Flex>
          <Flex justifyContent="center" width={"20%"}>
            <div
              style={{
                width: "2px",
                height: "100%",
                backgroundColor: " white",
              }}
            ></div>
          </Flex>
          <Flex
            width={"40%"}
            gap={10}
            justifyContent="center"
            flexDirection={"column"}
          >
            <Flex gap={10}>
              <Box>
                <FaMapPin size={"3rem"} color="white" />
              </Box>
              <Box>
                <Text color="white" fontWeight={800}>
                  Adress
                </Text>
                <Text color="white">Rissneleden 138 174 57 Sundbyberg</Text>
              </Box>
            </Flex>
            <Flex gap={10}>
              <Box>
                <FaEnvelope size={"3rem"} color="white" />
              </Box>
              <Box>
                <Text color="white" fontWeight={800}>
                  E-post
                </Text>
                <Text color="white">info@boujt.se</Text>
              </Box>
            </Flex>
          </Flex>
        </Box>
        <Box sx={background}>
          <Starfield sx={{ borderRadius: "12px" }} />
        </Box>
      </Flex>
      <ContactInfo />
    </BoujtTemplate>
  );
};

export default KontaktaOss;
