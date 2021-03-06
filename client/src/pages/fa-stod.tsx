import {
    AspectRatio,
    Box,
    Button,
    Flex,
    Heading,
    Icon,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { CSSProperties, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { useData } from "../../utils/fetchData";
import { ExternalLink, FaStodData } from "../../utils/types";
import BoujtTemplate from "../components/BoujtTemplate";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import Starfield from "../components/Starfield";
import Video from "../components/Video";
import GetSupportAlternatives from "../components/GetSupportAlternatives";

const background: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    zIndex: -100,
};

const WhiteTextContainer: React.FC<{ text: string }> = ({ text }) => {
    return (
        <Flex
            flexDirection={"column"}
            borderRadius={"20px"}
            backgroundColor={"white"}
            padding={"10px"}
        >
            <Box mr={"10px"} alignSelf={"center"}>
                <Icon color={"yellow"} as={FaStar}></Icon>
            </Box>
            <Text align={"center"} fontWeight={"bold"} color={"blackish"}>
                {text}
            </Text>
        </Flex>
    );
};

const ExternalLinkView: React.FC<{ externalLink: ExternalLink }> = ({
    externalLink,
}) => {
    return (
        <Flex
            boxShadow={"0 0 15px #d3d3d3"}
            borderRadius={"10px"}
            border={"none"}
            padding={"20px"}
        >
            {/* IMAGE */}
            {/* <AspectRatio
        minW={"75px"}
        width={"75px"}
        height={"100%"}
        ratio={1}
        mr={"20px"}
      >
        <Image src={externalLink.imageUrl} layout={"fill"} />
      </AspectRatio> */}
            {/* STYLED TEXT */}
            <Text>
                <a
                    href={externalLink.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontWeight: "bold" }}
                >
                    {externalLink.link}
                </a>
                -{" " + externalLink.text}
            </Text>
        </Flex>
    );
};

const FaStod: NextPage = () => {
    const [shouldBreak] = useMediaQuery("(max-width: 750px)");

    const { data, error } = useData<FaStodData>("fa-stod");

    const router = useRouter();

    const onChatClick = () => {
        router.push("/chatten");
    };

    return (
        <BoujtTemplate gap={50}>
            <Head>
                <title>F?? st??d</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Heading
                fontSize={"4xl"}
                bgGradient={"linear(to-b, #34569A, #1D3D63)"}
                textAlign={"center"}
                bgClip={"text"}
            >
                F?? st??d
            </Heading>
            <Heading textAlign={"center"} color={"blackish"} fontSize={"3xl"}>
                H??r p?? Boujt finns det flera s??tt du kan f?? st??d av oss!
            </Heading>
            {/* Card with video and text */}
            <GetSupportAlternatives />
            <Flex
                color={"white"}
                position={"relative"}
                padding={shouldBreak ? "20px" : "40px"}
                gap={"20px"}
                maxW={"880px"}
                flexDirection={shouldBreak ? "column" : "row"}
            >
                <Flex flexDir={"column"} flex={3} gap={"20px"}>
                    <Heading color="white" noOfLines={1} fontSize={"2xl"}>
                        Chatt
                    </Heading>
                    <Text>
                        Vill du prata med n??gon? Handlar det kanske om n??got som
                        k??nns jobbigt eller snarare kul? Det spelar ingen roll
                        vad du vill prata om ??? du ??r alltid v??lkommen in till
                        v??r chatt. Vi erbjuder st??dsamtal med utbildade
                        syssnare. Du best??mmer sj??lv om du vill kommunicera p??
                        svenskt teckenspr??k eller skriven svenska.
                    </Text>
                    <Button
                        marginTop={"auto"}
                        alignSelf={"flex-start"}
                        width="163px"
                        height="45px"
                        variant={"default"}
                        onClick={onChatClick}
                    >
                        <Text>Till chatten!</Text>
                    </Button>
                </Flex>
                <Flex minWidth={"50%"} flex={2} flexDir={"column"} gap={"20px"}>
                    <ResponsiveVideoPlayer url="https://youtu.be/fQ2jLE4fXAY" />

                    {/* <Button
						justifySelf={"flex-end"}
						alignSelf={"flex-end"}
						width="163px"
						height="45px"
						variant={"information"}
					>
						<Text>{"N??sta >"}</Text>
					</Button> */}
                </Flex>
                {/* BACKGROUND */}
                <Box sx={background}>
                    <Starfield
                        boxProps={{
                            borderRadius: "20px",
                            overflow: "hidden",
                        }}
                        sx={{ borderRadius: "20px" }}
                    />
                </Box>
            </Flex>
            {/* SECOND SECTION / ANONYM */}
            <Heading textAlign={"center"} color={"blackish"} fontSize={"3xl"}>
                Hos oss ??r du anonym
            </Heading>
            {/* Card with video and text */}
            <Flex
                color={"white"}
                position={"relative"}
                flexDir={"column"}
                padding={"40px"}
                gap={"20px"}
                maxW={"880px"}
                mb={"50px"}
            >
                {/* LEFT SIDE */}
                <Flex gap={3} flexDirection={shouldBreak ? "column" : "row"}>
                    <Flex flexDir={"column"} gap={"20px"}>
                        <Text>
                            Du beh??ver aldrig oroa dig f??r att n??gon annan ska
                            veta att du kontaktat oss. Vi har tystnadsplikt. Du
                            ??r anonym s?? l??nge du inte talar om vad du heter
                            eller eventuellt visar ditt ansikte i chatten. Vi
                            kontaktar ingen s?? l??nge vi inte ??r riktigt oroliga
                            f??r att du eller n??gon kan riskera att r??ka illa ut.
                            Vi kontaktar aldrig din skola eller dina f??r??ldrar.
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={"center"}
                        minWidth="50%"
                        flex={2}
                        flexDir={"column"}
                        gap={"20px"}
                    >
                        <ResponsiveVideoPlayer url="https://youtu.be/CCdoHcjAtYE" />
                    </Flex>
                </Flex>
                {/* RIGHT SIDE */}

                <Flex flexDirection={"column"}>
                    <Heading color="yellow" fontSize={"2xl"}>
                        I listan nedan f??rtydligar vi det mer:
                    </Heading>
                    <Flex marginTop={4} gap={5} flexDirection={"column"}>
                        <WhiteTextContainer
                            text={`
                            B??de anst??llda och syssnare har tystnadsplikt. Det betyder att vi inte f??r ber??tta f??r n??gon annan att du kontaktat oss. Dina f??r??ldrar/v??rdnadshavare eller din skola, till exempel, kan aldrig be oss att ber??tta om du har kontaktat oss eller vad du har sagt.
                        `}
                        />
                        <WhiteTextContainer
                            text={`Vi tar aldrig beslut om dig utan ditt samtycke.`}
                        />
                        <WhiteTextContainer
                            text={`N??r du s??ker st??d hos oss kan du v??lja om du vill vara anonym eller inte.`}
                        />
                        <WhiteTextContainer text="Kom ih??g att om du talar om vad du heter eller visar ditt ansikte i videochatten ??r du inte l??ngre anonym. H??r g??ller samma regel som innan - vi ber??ttar inte f??r n??gon att du kontaktat oss. Det finns endast ett undantag - om du ber??ttar n??got som g??r att vi blir riktigt oroliga f??r att du eller n??gon annan befinner sig i fara. D?? kan det h??nda att vi kontaktar n??gon som kan hj??lpa dig eller hen. Vi g??r aldrig detta utan att prata med dig f??rst, och detta g??ller allts?? endast om du sj??lv valt att inte vara anonym." />
                    </Flex>
                </Flex>
                {/* BACKGROUND */}
                <Box sx={background}>
                    <Starfield
                        boxProps={{
                            borderRadius: "20px",
                            overflow: "hidden",
                        }}
                        sx={{ borderRadius: "20px" }}
                    />
                </Box>
            </Flex>
            <Flex flexDir={"column"} gap="50px">
                {/* EXTERNAL LINKS */}
                <Heading
                    textAlign={"center"}
                    color={"blackish"}
                    fontSize={"3xl"}
                >
                    Externa l??nkar
                </Heading>
                <Heading
                    fontSize={"2xl"}
                    textAlign={"center"}
                    color={"blackish"}
                >
                    Nedan f??ljer l??nkar f??r andra platser d??r du kan f?? st??d
                </Heading>
                <Flex flexDir={"column"} gap={"15px"}>
                    {/* MAP EACH EXTERNAL LINK TO EXTERNAL LINK VIEW */}
                    {data &&
                        data.externalLinks.map((el, idx) => {
                            return (
                                <ExternalLinkView key={idx} externalLink={el} />
                            );
                        })}
                </Flex>
            </Flex>
        </BoujtTemplate>
    );
};

export default FaStod;
