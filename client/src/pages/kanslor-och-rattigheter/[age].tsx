import {
    AspectRatioProps,
    Box,
    Center,
    Container,
    Flex,
    Heading,
    useBreakpointValue,
    useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useRef } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaStar, FaTv } from "react-icons/fa";
import fist from "../../../public/images/fist.png";
import hammer from "../../../public/images/hammer.png";
import hands from "../../../public/images/hands.png";
import hugging from "../../../public/images/hugging.png";
import kidOnSwing from "../../../public/images/kid-on-swing.png";
import polis from "../../../public/images/polis.png";
import syssnare from "../../../public/images/syssnare.png";
import { useData } from "../../../utils/fetchData";
import { MovieData, SyssnareTipsarData } from "../../../utils/types";
import usePreventBodyScroll from "../../../utils/usePreventBodyScroll";
import BoujtTemplate from "../../components/BoujtTemplate";
import ImageCard from "../../components/ImageCard";
import ResponsiveVideoPlayer from "../../components/ResponsiveVideoPlayer";
import Starfield from "../../components/Starfield";
import StarfieldButton from "../../components/StarfieldButton";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

// Function for the horizontal scrolling menu
function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollNext();
    } else if (ev.deltaY > 0) {
        apiObj.scrollPrev();
    }
}

const background: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -100,
};

type SyssnareVideo = {
    name: string;
    videoUrl: string;
};

const syssnareVideoList = [
    {
        name: "Ebru",
        videoUrl: "",
    },
    {
        name: "Jamila",
        videoUrl: "",
    },
];

const MainContent: React.FC = () => {
    const { data, error, isLoading } =
        useData<SyssnareTipsarData[]>("syssnare-tipsar");

    useEffect(() => {
        console.log("ERROR: ", error);
    }, [error]);

    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

    // Used in the starfield buttons & quiz frame
    const val = useBreakpointValue({ base: "360px", md: "460px" });
    const starfieldButtonWidth = Number.parseInt(
        val!.substring(0, val!.length - 2)
    );

    // Used to match container heights
    const starfieldButtonsContainer = useRef<HTMLDivElement>(null);
    const quizButtonContainer = useRef<HTMLDivElement>(null);

    // Some conditional renders dependent on the age bracket ('7' or '15')
    const router = useRouter();
    const age = router.query.age as string;

    const { enableScroll, disableScroll } = usePreventBodyScroll();

    /*
     **PREPARE SOME COMPONENT DATA**
     */
    const orangeCardText =
        age == "7"
            ? "Vill du veta vad du kan göra om du är kär?"
            : "Lär dig mer om våld och utsatthet";
    const orangeCardImage =
        age == "7"
            ? {
                  imageUrl: hugging.src,
                  width: hugging.width,
                  height: hugging.height,
              }
            : {
                  imageUrl: fist.src,
                  width: fist.width,
                  height: fist.height,
              };
    const orangeImageContainerProps: AspectRatioProps =
        age == "15"
            ? {
                  alignSelf: "flex-start",
              }
            : {};

    const blueCardText = "Till chatten";
    const blueCardImage = {
        imageUrl: syssnare.src,
        width: syssnare.width,
        height: syssnare.height,
    };
    const blueImageContainerProps: AspectRatioProps = {
        alignSelf: "flex-end",
    };
    const onBlueCardClick = () => {
        router.push("/chatten");
    };

    const redCardText = "Gabriella på polisen";
    const redCardImage = {
        imageUrl: polis.src,
        width: polis.width,
        height: polis.height,
    };
    const redImageContainerProps: AspectRatioProps = {
        alignSelf: "center",
    };

    const getHeadingImage = () => {
        if (age == "15") {
            return (
                <Flex alignSelf={"flex-start"} maxW={"200"}>
                    <Image src={hands} />
                </Flex>
            );
        }

        // case age 7-14 here
        return (
            <Flex maxW={"300px"}>
                <Image src={kidOnSwing} />
            </Flex>
        );
    };

    const onVaraFilmerClick = () => {
        router.push(`/filmer/${age}`);
    };

    useEffect(() => {
        if (!starfieldButtonsContainer.current || !quizButtonContainer.current)
            return;

        // Match height of quizButtonContainer to starfieldButtonContainer
        quizButtonContainer.current.setAttribute(
            "height",
            starfieldButtonsContainer.current.clientHeight.toString() + "px"
        );
        console.log("DONE ADJUSTING!");
    }, [starfieldButtonsContainer, quizButtonContainer]);

    // Navigate to the quiz page
    const onQuiz = () => {
        router.push("/quiz");
    };

    return (
        <Box>
            <Flex
                position={"relative"}
                width="100%"
                justifyContent={"center"}
                alignItems={"center"}
                minH={300}
            >
                {!isSmallerThan600 && getHeadingImage()}
                <Heading color={"white"}>För dig mellan 7-21 år</Heading>
                <Box sx={background}>
                    <Starfield />
                </Box>
            </Flex>
            {/* CARDS */}
            <Flex
                py={"50px"}
                gap={"10px"}
                justifyContent={"center"}
                flexWrap={"wrap"}
            >
                <ImageCard
                    image={orangeCardImage}
                    text={orangeCardText}
                    boxProps={{
                        backgroundColor: "orange",
                    }}
                    imageContainerProps={orangeImageContainerProps}
                />
                <ImageCard
                    image={blueCardImage}
                    text={blueCardText}
                    onClick={onBlueCardClick}
                    boxProps={{
                        backgroundColor: "turquoise",
                    }}
                    imageContainerProps={blueImageContainerProps}
                />
                <ImageCard
                    image={redCardImage}
                    text={redCardText}
                    boxProps={{
                        backgroundColor: "red",
                    }}
                    textProps={{
                        color: "white",
                    }}
                    imageContainerProps={redImageContainerProps}
                />
            </Flex>
            {/* STARFIELD BUTTONS & QUIZ BUTTON */}
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                pb={"50px"}
                flexWrap={"wrap"}
                gap={"10px"}
            >
                <Flex
                    justifyContent={"center"}
                    flexDir={"column"}
                    gap={"10px"}
                    flexWrap={"wrap"}
                >
                    <StarfieldButton
                        onClicked={onQuiz}
                        width={starfieldButtonWidth}
                        text={"Stjärnquizet"}
                        icon={FaStar}
                        iconColor={"yellow"}
                    />
                    <StarfieldButton
                        width={starfieldButtonWidth}
                        text={"Våra filmer"}
                        icon={FaTv}
                        iconColor={"white"}
                        onClicked={onVaraFilmerClick}
                    />
                </Flex>
                {/* RÄTTIGHETSQUIZ KNAPP */}
                <Flex
                    width={val}
                    height={300}
                    backgroundColor={"red"}
                    ref={quizButtonContainer}
                    borderRadius={"20px"}
                    flexDir={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={"50px"}
                >
                    <Heading color={"white"}>Rättighetsquizet</Heading>
                    <Flex>
                        <Image
                            src={hammer}
                            width={hammer.width * 0.3}
                            height={hammer.height * 0.3}
                        />
                    </Flex>
                </Flex>
            </Flex>
            <Center flexDir={"column"} gap={"25px"} py={"50px"}>
                <Heading>Våra syssnare tipsar!</Heading>
            </Center>
            {/* Syssnare tipsar data or error */}
            {error && <Heading>Kunde inte ladda videos just nu!</Heading>}
            {data && (
                <Box onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
                    <ScrollMenu onWheel={onWheel}>
                        {/* Video slide thingy, should be scrollable */}
                        {data.map((syssnare_tips, idx) => (
                            <Box
                                key={idx}
                                mx={"25px"}
                                minW={"350px"}
                                height={"250px"}
                                display={"inline-block"}
                            >
                                <ResponsiveVideoPlayer
                                    url={syssnare_tips.video_link}
                                />
                            </Box>
                        ))}
                    </ScrollMenu>
                </Box>
            )}
        </Box>
    );
};

const KanslorOchRattigheter: NextPage = () => {
    return (
        <BoujtTemplate strict={false}>
            <Head>
                <title>Känslor och rättigheter</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <MainContent />
        </BoujtTemplate>
    );
};

export default KanslorOchRattigheter;
