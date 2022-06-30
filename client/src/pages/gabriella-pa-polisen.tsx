import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Center,
    Flex,
    Heading,
    Icon,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { IconType } from "react-icons";
import {
    FaChrome,
    FaEdge,
    FaFirefoxBrowser,
    FaLightbulb,
    FaSafari,
} from "react-icons/fa";
import BoujtTemplate from "../components/BoujtTemplate";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import Video from "../components/Video";
import GabriellaIMG from "../../public/images/gabriella-pa-polisen.png";
//CHROME FIREFOX EDGE SAFARI

const GabriellaPaPolisen: NextPage = () => {
    const [shouldBreak] = useMediaQuery("(min-width: 750px)");
    return (
        <BoujtTemplate>
            <Head>
                <title>Gabriella På Polisen</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {/* MAIN CONTENT */}
            <img
                style={{ borderRadius: "12px" }}
                src={GabriellaIMG.src}
                alt="Polisen gabriella håller en skylt"
            />
            <Flex my={20} gap={10} flexDirection={"column"} alignItems="center">
                <Heading>Lär dig hur du gör en polisanmälan!</Heading>
                <Box width={"80%"}>
                    <ResponsiveVideoPlayer url="https://youtu.be/QJtWwlUGZJk" />
                </Box>
            </Flex>
            <Flex wrap={"wrap"} justifyContent="center" gap={5}>
                <Box width={400}>
                    <Text marginBottom={5} fontSize={18} fontWeight={"bold"}>
                        Varför är det viktigt att anmäla?
                    </Text>
                    <ResponsiveVideoPlayer
                        url={"https://youtu.be/SOOKV3NvLQk"}
                    />
                </Box>
                <Box width={400}>
                    <Text marginBottom={5} fontSize={18} fontWeight={"bold"}>
                        Är det viktigt att anmäla så fort som möjligt?
                    </Text>
                    <ResponsiveVideoPlayer
                        url={"https://youtu.be/R1W_6FPHBZg"}
                    />
                </Box>
                <Box width={400}>
                    <Text marginBottom={5} fontSize={18} fontWeight={"bold"}>
                        Hur fungerar det att göra en anmälan?
                    </Text>
                    <ResponsiveVideoPlayer
                        url={"https://youtu.be/PeqtaK_EfdQ"}
                    />
                </Box>
                <Box width={400}>
                    <Text marginBottom={5} fontSize={18} fontWeight={"bold"}>
                        Vad händer sen med min anmälan?
                    </Text>
                    <ResponsiveVideoPlayer
                        url={"https://youtu.be/6Ta1N3_eyfM"}
                    />
                </Box>
            </Flex>
            <Flex
                backgroundColor={"turquoise"}
                padding="2rem"
                gap={10}
                borderRadius={12}
                marginTop={10}
                justifyContent="center"
                alignItems={"center"}
                flexDirection={!shouldBreak ? "column" : "row"}
            >
                <Flex
                    width={"10%"}
                    justifyContent="center"
                    alignItems={"center"}
                >
                    <FaLightbulb size={"3rem"} color="white" />
                </Flex>
                <Flex>
                    <Text fontSize={20} color="white">
                        Länk till Polisens hemsida:{" "}
                        <a
                            href="www.polisen.se"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            www.polisen.se
                        </a>{" "}
                        <br />
                        Länk till polisanmälan via internet:
                        <a
                            href=" https://polisen.se/utsatt-for-brott/polisanmalan/ "
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            {" "}
                            https://polisen.se/utsatt-for-brott/polisanmalan/{" "}
                        </a>{" "}
                        <br />
                        Länk till Polisens information på svenskt teckenspråk:
                        <a
                            href="https://polisen.se/om-polisen/om-webbplatsen/andra-sprak/teckenspraksfilmer/"
                            target={"_blank"}
                            rel="noreferrer"
                        >
                            {" "}
                            https://polisen.se/om-polisen/om-webbplatsen/andra-sprak/teckenspraksfilmer/{" "}
                        </a>
                    </Text>
                </Flex>
            </Flex>
        </BoujtTemplate>
    );
};

export default GabriellaPaPolisen;
