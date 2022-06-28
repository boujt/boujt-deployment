import {
    Box,
    Button,
    Flex,
    Heading,
    Text,
    Container,
    useMediaQuery,
} from "@chakra-ui/react";
import { CSSProperties } from "@emotion/serialize";
import type { NextPage } from "next";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import { FaComment } from "react-icons/fa";
import { ROUTES } from "../../utils/constants";
import { useData } from "../../utils/fetchData";
import { BlogPost } from "../../utils/types";
import BlogPreview from "../components/Blog/BlogPreview";
import BoujtTemplate from "../components/BoujtTemplate";
import CircleChart from "../components/CircleChart/CircleChart";
import FloatingChatButton from "../components/FloatingChatButton";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import PanicButton from "../components/PanicButton";
import Starfield from "../components/Starfield";

const content: CSSProperties = {
    width: "100%",
    height: "100%",
    zIndex: 100,
};

const background: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -100,
};

const Home: NextPage = () => {
    const [isLessThan900] = useMediaQuery("(max-width: 900px)");
    const router = useRouter();
    const posts = useData<BlogPost[]>(`posts`);

    const onExploreBlog = () => {
        router.push(ROUTES.BLOGGEN);
    };

    const getChatSection = () => {
        return (
            <Flex justifyContent={"center"}>
                <Flex width="50%" flexDir={"column"} minW={"360"}>
                    {/* CHAT WINDOW 1 */}
                    <Box paddingTop={"50px"}>
                        <Flex
                            marginRight={"auto"}
                            background={"turquoise"}
                            alignItems={"center"}
                            borderRadius={"20px 20px 20px 0"}
                            justifySelf="flex-start"
                            width="350px"
                            height="100px"
                            padding={"0 20px 0 20px"}
                            boxShadow={"5px 5px 15px -5px #000000"}
                        >
                            <Text color="white" fontSize={"22"}>
                                Måndagar, tisdagar och torsdagar😁
                            </Text>
                        </Flex>
                    </Box>
                    {/* CHAT WINDOW 2 */}
                    <Box paddingTop={"20px"}>
                        <Flex
                            justifySelf="flex-start"
                            marginRight={"auto"}
                            background={"turquoise"}
                            alignItems={"center"}
                            borderRadius={"20px 20px 20px 0"}
                            width="350px"
                            height="100px"
                            padding={"0 20px 0 20px"}
                            boxShadow={"5px 5px 15px -5px #000000"}
                        >
                            <Text color="white" fontSize={"22"}>
                                Mellan klockan 18:30 till 20:30👍
                            </Text>
                        </Flex>
                    </Box>
                    {/* CHAT WINDOW 3 */}
                    <Flex marginLeft={"auto"} paddingTop={"60px"}>
                        <Flex
                            justifySelf="flex-end"
                            background={"white"}
                            borderRadius={"20px 20px 0 20px"}
                            alignItems={"center"}
                            width="350px"
                            height="60px"
                            padding={"0 20px 0 20px"}
                            boxShadow={"5px 5px 15px -5px #000000"}
                        >
                            <Text color="black" fontSize={"22"}>
                                Toppen! Ses där!👋
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        );
    };

    const getBlogSection = () => {
        return (
            <Flex
                width="100vw"
                maxW={"100%"}
                minH={700}
                alignItems={"center"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
            >
                <Heading paddingTop={"50px"}>Det senaste från bloggen</Heading>
                {/* Blog posts */}
                <Flex justifyContent={"space-around"} gap={5} flexWrap={"wrap"}>
                    {posts.data &&
                        posts.data.slice(0, 3).map((post) => {
                            return <BlogPreview key={post.id} post={post} />;
                        })}
                </Flex>
                <Button
                    margin={"2rem 0"}
                    width="163px"
                    height="45px"
                    variant={"default"}
                    onClick={onExploreBlog}
                >
                    <Text>Utforska bloggen</Text>
                </Button>
            </Flex>
        );
    };

    const getWhatWeLikeSection = () => {
        return (
            <Flex
                flexDir={"column"}
                position={"relative"}
                width={"100vw"}
                minH={500}
                // bgImage={`url(${stars.src}), ${css_gradient}`}
                alignItems={"center"}
                justifyContent={"space-evenly"}
            >
                <Heading margin="2rem 0" color="white">
                    Vad gillar vi?
                </Heading>
                <Flex flexWrap={"wrap"} justifyContent="center">
                    {/* CIRCLES */}
                    <CircleChart
                        fill={"#00CCEE"}
                        text={"Vattenkring"}
                        percentage={80}
                    />
                    <CircleChart
                        fill={"#FE5957"}
                        text={"Barnrätt"}
                        percentage={100}
                    />
                    <CircleChart
                        fill={"#FAC20D"}
                        text={"Glass"}
                        percentage={90}
                    />
                    <CircleChart
                        fill={"#FDE30F"}
                        text={"Deaf power"}
                        percentage={100}
                    />
                </Flex>
                <Box sx={background}>
                    <Starfield />
                </Box>
            </Flex>
        );
    };

    return (
        <Box>
            <Head>
                <title>BOUJT</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <FloatingChatButton />
            <Box position={"relative"} height="100vh">
                <Navbar transparent />
                <PanicButton />
                {/* FIRST SECTION AT THE TOP */}
                <Container
                    // position={'relative'}
                    display={"flex"}
                    gap={4}
                    marginBottom={"4rem"}
                    marginTop={"4rem"}
                    maxW={"5xl"}
                    flexDirection={isLessThan900 ? "column" : "row"}
                >
                    {/* LEFT SECTION */}
                    <Flex flex={1} flexDir={"column"} maxW={"650px"}>
                        <Text
                            color={"white"}
                            fontWeight={"bold"}
                            fontSize={"36"}
                            marginTop={"auto"}
                            marginBottom={"auto"}
                        >
                            Chatta med{" "}
                            <span
                                style={{
                                    fontWeight: "bolder",
                                    color: "yellow",
                                }}
                            >
                                Boujt
                            </span>
                            !
                        </Text>
                        <Text color={"white"}>
                            I vår chatt kan du välja att prata om vad du vill!
                            Har du en fundering om kroppen? Har du bråkat med en
                            kompis? Säger din kille att du inte får träffa dina
                            vänner? Är du ledsen, glad eller ingenting alls?
                            <br />
                            <br />
                            Du är varmt välkommen att chatta med en syssnare! Du
                            kan själv välja mellan text- eller videosamtal.
                        </Text>
                        {/* BUTTONS */}
                        <Flex justifyContent={"flex-start"} paddingTop={"60px"}>
                            <Button
                                mx={"5px"}
                                width="163px"
                                height="45px"
                                variant={"default"}
                                onClick={() => router.push(ROUTES.CHATTEN)}
                                leftIcon={<FaComment />}
                            >
                                <Text>Till Chatten</Text>
                            </Button>
                            <Button
                                mx={"5px"}
                                width="163px"
                                height="45px"
                                variant={"information"}
                                onClick={() => router.push(ROUTES.OM_OSS)}
                            >
                                <Text>Om oss</Text>
                            </Button>
                        </Flex>
                    </Flex>
                    {/* RIGHT SECTION */}
                    <Flex
                        display={isLessThan900 ? "none" : "unset"}
                        flex={1}
                        paddingLeft={"35px"}
                        maxW={"650px"}
                        justifyContent={"center"}
                    >
                        {getChatSection()}
                    </Flex>
                </Container>
                <Box sx={background}>
                    <Starfield />
                </Box>
            </Box>
            {getBlogSection()}
            {getWhatWeLikeSection()}
            <Footer />
        </Box>
    );
};

export default Home;
