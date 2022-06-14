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
      <Flex gap={40}>
        <Box width={"50%"} display={"flex"} flexDirection="column" gap={4}>
          <Video
            width={"100%"}
            height={200}
            url={
              "http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
            }
          />

          <Text>
            Här kan du maila oss om du har en fråga. Bla bla . Maila gärna oss
            när du har en fråga
          </Text>
        </Box>
        <Box width={"50%"}>
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
          <Flex justifyContent="center" width={"33%"}>
            <Heading color="white">Sveriges Dövas Ungdomsförbund</Heading>
          </Flex>
          <Flex justifyContent="center" width={"33%"}>
            <div
              style={{
                width: "2px",
                height: "100%",
                backgroundColor: " white",
              }}
            ></div>
          </Flex>
          <Flex width={"33%"} justifyContent="center" flexDirection={"column"}>
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
