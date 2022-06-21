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
import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";
import { FaStar } from "react-icons/fa";
import BoujtTemplate from "../components/BoujtTemplate";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import Starfield from "../components/Starfield";
import Video from "../components/Video";

const background: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    zIndex: -100,
};

type ExternalLink = {
    imageUrl: string | StaticImageData;
    link: string;
    text: string;
};

const externalLinksMockData: ExternalLink[] = [
    {
        imageUrl: "https://www.unizonjourer.se/Assets/unizon-logga.png",
        link: "www.sduf.se",
        text: "Sveriges Dövas Ungdomsförbund erbjuder bland annat utbildningar, läger och möjligheter för dig som är ung att påverka i samhället. SDUF har nio anslutna ungdomsklubbar runtom i landet.",
    },
    {
        imageUrl: "https://www.unizonjourer.se/Assets/unizon-logga.png",
        link: "www.arvsfonden.se",
        text: "Arvsfonden delar ut stöd till mer än 400 projekt över hela landet.",
    },
    {
        imageUrl: "https://www.unizonjourer.se/Assets/unizon-logga.png",
        link: "www.unizon.se",
        text: "BRIS erbjuder stöd till barn och unga via webb och mobil.",
    },
];

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
            borderRadius={"20px"}
            border={"none"}
            padding={"10px"}
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
                <span style={{ color: "turquoise" }}>
                    {externalLink.link + " "}
                </span>
                -{" " + externalLink.text}
            </Text>
        </Flex>
    );
};

const FaStod: NextPage = () => {
    const [shouldBreak] = useMediaQuery("(max-width: 750px)");
    return (
        <BoujtTemplate gap={50}>
            <Heading
                fontSize={"4xl"}
                bgGradient={"linear(to-b, #34569A, #1D3D63)"}
                textAlign={"center"}
                bgClip={"text"}
            >
                Få stöd
            </Heading>
            <Heading textAlign={"center"} color={"blackish"} fontSize={"3xl"}>
                Här på Boujt finns det flera sätt du kan få stöd av oss!
            </Heading>
            {/* Card with video and text */}
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
                        Vill du prata med någon? Handlar det kanske om något som
                        känns jobbigt eller snarare kul? Det spelar ingen roll
                        vad du vill prata om – du är alltid välkommen in till
                        vår chatt. Vi erbjuder stödsamtal med utbildade
                        syssnare. Du bestämmer själv om du vill kommunicera på
                        svenskt teckenspråk eller skriven svenska.
                    </Text>
                    <Button
                        marginTop={"auto"}
                        alignSelf={"flex-start"}
                        width="163px"
                        height="45px"
                        variant={"default"}
                    >
                        <Text>Till chatten!</Text>
                    </Button>
                </Flex>
                <Flex minWidth={"50%"} flex={2} flexDir={"column"} gap={"20px"}>
                    <ResponsiveVideoPlayer url="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com" />

                    <Button
                        justifySelf={"flex-end"}
                        alignSelf={"flex-end"}
                        width="163px"
                        height="45px"
                        variant={"information"}
                    >
                        <Text>{"Nästa >"}</Text>
                    </Button>
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
                Hos oss är du anonym
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
                            Du behöver aldrig oroa dig för att någon annan ska
                            veta att du kontaktat oss. Vi har tystnadsplikt. Du
                            är anonym så länge du inte talar om vad du heter
                            eller eventuellt visar ditt ansikte i chatten. Vi
                            kontaktar ingen så länge vi inte är riktigt oroliga
                            för att du eller någon kan riskera att råka illa ut.
                            Vi kontaktar aldrig din skola eller dina föräldrar.
                        </Text>
                    </Flex>
                    <Flex
                        justifyContent={"center"}
                        minWidth="50%"
                        flex={2}
                        flexDir={"column"}
                        gap={"20px"}
                    >
                        <ResponsiveVideoPlayer url="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com" />
                    </Flex>
                </Flex>
                {/* RIGHT SIDE */}

                <Flex flexDirection={"column"}>
                    <Heading color="yellow" fontSize={"2xl"}>
                        I listan nedan förtydligar vi det mer:
                    </Heading>
                    <Flex marginTop={4} gap={5} flexDirection={"column"}>
                        <WhiteTextContainer
                            text={`
                            Både anställda och syssnare har tystnadsplikt. Det betyder att vi inte får berätta för någon annan att du kontaktat oss. Dina föräldrar/vårdnadshavare eller din skola, till exempel, kan aldrig be oss att berätta om du har kontaktat oss eller vad du har sagt.
                        `}
                        />
                        <WhiteTextContainer
                            text={`Vi tar aldrig beslut om dig utan ditt samtycke.`}
                        />
                        <WhiteTextContainer
                            text={`När du söker stöd hos oss kan du välja om du vill vara anonym eller inte.`}
                        />
                        <WhiteTextContainer text="Kom ihåg att om du talar om vad du heter eller visar ditt ansikte i videochatten är du inte längre anonym. Här gäller samma regel som innan - vi berättar inte för någon att du kontaktat oss. Det finns endast ett undantag - om du berättar något som gör att vi blir riktigt oroliga för att du eller någon annan befinner sig i fara. Då kan det hända att vi kontaktar någon som kan hjälpa dig eller hen. Vi gör aldrig detta utan att prata med dig först, och detta gäller alltså endast om du själv valt att inte vara anonym." />
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
                    Externa länkar
                </Heading>
                <Heading
                    fontSize={"2xl"}
                    textAlign={"center"}
                    color={"blackish"}
                >
                    Nedan följer länkar för andra platser där du kan få stöd
                </Heading>
                <Flex flexDir={"column"} gap={"15px"}>
                    {/* MAP EACH EXTERNAL LINK TO EXTERNAL LINK VIEW */}
                    {externalLinksMockData.map((el, idx) => {
                        return <ExternalLinkView key={idx} externalLink={el} />;
                    })}
                </Flex>
            </Flex>
        </BoujtTemplate>
    );
};

export default FaStod;
