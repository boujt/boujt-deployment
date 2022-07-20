import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { CSSProperties, useEffect, useState } from "react";
import { FaEnvelope, FaMapPin } from "react-icons/fa";
import { useData } from "../../utils/fetchData";
import { ContactUsData, EmailData, EmailFormData } from "../../utils/types";
import BoujtTemplate from "../components/BoujtTemplate";
import AddressMap from "../components/Kontakta-oss/AddressMap";
import ContactForm from "../components/Kontakta-oss/ContactForm";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import Starfield from "../components/Starfield";
import Video from "../components/Video";
import { chakra_gradient } from "../theme";

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
    // Static data
    const { data } = useData<ContactUsData>("kontakta-oss");

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [shouldBreak] = useMediaQuery("(max-width: 750px)");

    return (
        <BoujtTemplate gap={100}>
            <Head>
                <title>Kontakta oss</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Heading
                textAlign={"center"}
                bgGradient={chakra_gradient}
                bgClip={"text"}
            >
                Kontakta oss
            </Heading>
            <Flex flexDir={"column"} alignItems={"center"} gap={"50px"}>
                <Heading>Letar du efter chatten?</Heading>
                <Button width={"150px"} variant={"default"}>
                    <Text>Ta mig dit</Text>
                </Button>
            </Flex>
            {/* FIRST CARD WITH EMAIL FORM */}
            <Flex flexDir={"column"} gap={"25px"}>
                <Heading
                    textAlign={"left"}
                    bgGradient={chakra_gradient}
                    bgClip={"text"}
                >
                    Maila oss
                </Heading>

                <Flex
                    position={"relative"}
                    gap={"20px"}
                    flexDirection={shouldBreak ? "column" : "row"}
                    padding={"20px"}
                >
                    <Flex flex={1} flexDirection="column" gap={4}>
                        <ResponsiveVideoPlayer url="https://youtu.be/DDjEmdmHUjQ" />
                    </Flex>
                    <Flex flex={1} flexDirection="column">
                        <ContactForm />
                    </Flex>

                    <Box sx={background}>
                        <Starfield
                            boxProps={{ borderRadius: "12px" }}
                            sx={{ borderRadius: "12px" }}
                        />
                    </Box>
                </Flex>
            </Flex>

            <Flex
                position={"relative"}
                flexDir={"column"}
                maxW={"100%"}
                alignItems={"center"}
                padding={"6rem 4rem"}
                justifyContent={shouldBreak ? "center" : "unset"}
            >
                <Box
                    sx={content}
                    display="flex"
                    flexDirection={shouldBreak ? "column" : "row"}
                >
                    <Flex
                        justifyContent="center"
                        width={shouldBreak ? "100%" : "40%"}
                        alignItems="center"
                        marginBottom={shouldBreak ? "2rem" : 0}
                    >
                        <Heading
                            textAlign={shouldBreak ? "center" : "unset"}
                            color="white"
                        >
                            Sveriges Dövas Ungdomsförbund
                        </Heading>
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
                                <Text color="white">{data?.adress}</Text>
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
                                <Text color="white">{data?.email}</Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
                <Box sx={background}>
                    <Starfield
                        boxProps={{ borderRadius: "12px" }}
                        sx={{ borderRadius: "12px" }}
                    />
                </Box>
            </Flex>
            <Box>
                {data && (
                    <AddressMap
                        latitude={data.latitude}
                        longitude={data.longitude}
                    />
                )}
            </Box>
        </BoujtTemplate>
    );
};

export default KontaktaOss;
