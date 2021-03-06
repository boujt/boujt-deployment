import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useData } from "../../utils/fetchData";
import { doGetAllSyssnare } from "../../utils/service";
import { AboutUsData, Faq, UserInfo, Worker } from "../../utils/types";
import BoujtTemplate from "../components/BoujtTemplate";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import Starfield from "../components/Starfield";
import SyssnareDisplayCard from "../components/SyssnareDisplayCard";
import Video from "../components/Video";
import WorkerCard from "../components/WorkerCard";
import { box_shadow_light, chakra_gradient } from "../theme";

const background: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    zIndex: -100,
};

const QuestionAndAnswer: React.FC<{ qna: Faq; idx: number }> = ({
    qna,
    idx,
}) => {
    return (
        <Box>
            <Text fontWeight={"bold"}>
                {idx + 1}. {qna.question}
            </Text>
            <Text>{qna.answer}</Text>
        </Box>
    );
};

const OmOss: NextPage = () => {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

    const videoCardContainer = useRef<HTMLDivElement>(null);
    const workersContainer = useRef<HTMLDivElement>(null);

    const { data, error } = useData<AboutUsData>("om-oss");

    const [syssnare, setSyssnare] = useState<UserInfo[]>([]);

    useEffect(() => {
        if (!videoCardContainer.current || !workersContainer.current) return;
        // Match width for workers and video card
        workersContainer.current.setAttribute(
            "width",
            videoCardContainer.current.clientWidth.toString() + "px"
        );
    }, [videoCardContainer, workersContainer]);

    useEffect(() => {
        doGetAllSyssnare()
            .then((res) => {
                setSyssnare(res.data);
            })
            .catch((er) => {
                console.log(er);
            });
    }, []);

    const [shouldBreak] = useMediaQuery("(min-width: 820px)");

    return (
        <BoujtTemplate gap={100}>
            <Head>
                <title>Om oss</title>
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
                Om oss
            </Heading>
            {/* Card with video and text */}
            <Flex
                color={"white"}
                position={"relative"}
                flexDirection={shouldBreak ? "row" : "column"}
                padding={"40px"}
                gap={"20px"}
                wrap={"wrap"}
                maxW={"880px"}
                ref={videoCardContainer}
            >
                <Flex flexDir={"column"} flex={3}>
                    <Heading color="white" noOfLines={1} fontSize={"2xl"}>
                        Vilka ??r vi och vad g??r vi?
                    </Heading>
                    <Text>
                        V??lkommen till BOUJT - Barn- och Ungdomsjour p??
                        Teckenspr??k! H??r f??r du hj??lp och st??d p?? svenskt
                        teckenspr??k efter skoltid. Vi erbjuder bland annat
                        st??dsamtal med d??va och h??rselskadade syssnare samt
                        information om kroppen, tankar och k??nslor. Vi har ??ven
                        en fr??gel??da d??r du kan st??lla fr??gor.
                        <br />
                        <br />
                        Du beh??ver aldrig oroa dig f??r att andra ska f?? veta att
                        du kontaktat oss. Vi ber??ttar inte f??r n??gon. Hos oss
                        kan du vara helt anonym. I videochatten kan du v??lja
                        vilken volont??r du vill prata med, och du kan textchatta
                        ist??llet om du inte vill att volont??ren ska se dig. Du
                        kan prata om vad du vill! ??r du glad eller ledsen? Vill
                        du ber??tta om n??got kul som h??nt eller n??got som k??nns
                        tungt och jobbigt? Har du kanske en fundering? Det
                        spelar ingen roll. L??s mer om anonymitet h??r!
                    </Text>
                </Flex>
                <Flex flex={2} flexDir={"column"} minWidth="40%">
                    <ResponsiveVideoPlayer url="https://youtu.be/mq0BwbRdMW4" />
                    <Heading
                        color={"yellow"}
                        textAlign={"center"}
                        my={"auto"}
                        fontSize={"2xl"}
                    >
                        Vi tror p?? dig och tar det du s??ger p?? allvar.
                    </Heading>
                </Flex>
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
            <Box>
                <Heading pb={"30px"} color="blackish" textAlign={"center"}>
                    Vi som jobbar h??r
                </Heading>
                <Flex
                    boxShadow={box_shadow_light}
                    borderRadius={"20px"}
                    border={"none"}
                    justifyContent={"space-evenly"}
                    alignItems={"center"}
                    py={"40px"}
                    ref={workersContainer}
                    width={"100%"}
                    wrap={"wrap"}
                >
                    {data &&
                        data.workers.map((worker, idx) => (
                            <WorkerCard
                                key={idx}
                                name={worker.name}
                                role={worker.role}
                                email={worker.email}
                                image={worker.image}
                            />
                        ))}
                </Flex>
            </Box>

            <Box>
                <Heading pb={"30px"} color="blackish" textAlign={"center"}>
                    V??ra syssnare
                </Heading>
                <Flex flexWrap={"wrap"} gap={10} justifyContent="center">
                    {syssnare.map((sys, id) => {
                        return <SyssnareDisplayCard key={id} syssnare={sys} />;
                    })}
                </Flex>
            </Box>
            {/* Card with video and text */}
            <Flex
                color={"white"}
                position={"relative"}
                flexDirection={shouldBreak ? "row" : "column"}
                padding={"40px"}
                gap={"30px"}
                maxW={"880px"}
                ref={videoCardContainer}
            >
                <Flex flexDir={"column"} justifyContent={"center"} gap={"40px"}>
                    <Heading color="white" fontSize={"2xl"}>
                        Vad betyder egentligen syssna?
                    </Heading>
                    <Text>
                        Det ??r ett ord och tecken som betyder att man lyssnar
                        fast med synen. D??rf??r tecknas det som ???lyssna??? men med
                        handen ovanf??r ??gonen ist??llet. Det ??r d??rf??r v??ra
                        volont??rer kallas f??r ???syssnare???.
                    </Text>
                    <Text>
                        Se tecknet h??r:{" "}
                        <a
                            style={{ color: "yellow" }}
                            target="_blank"
                            rel="noreferrer"
                            href="https://teckensprakslexikon.su.se/ord/17867"
                        >
                            https://teckensprakslexikon.su.se/ord/17867
                        </a>{" "}
                    </Text>
                </Flex>
                <Flex flex={2} minWidth="40%" flexDir="column">
                    <ResponsiveVideoPlayer url="https://youtu.be/c4IK5wmRWaU" />
                </Flex>
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
            {/* VANLIGA FR??GOR SECTION */}
            <Box>
                <Heading pb={"30px"} color="blackish" textAlign={"center"}>
                    Vanliga fr??gor
                </Heading>
                <Flex
                    gap={50}
                    boxShadow={box_shadow_light}
                    borderRadius={"20px"}
                    border={"none"}
                    px={50}
                    py={25}
                    flexDir={isSmallerThan600 ? "column" : "row"}
                    // wrap={'wrap'}
                >
                    {/* Split question into two columns */}
                    <Flex flexDir={"column"}>
                        {data &&
                            data.faq.map((faq, idx) => {
                                return (
                                    <>
                                        <QuestionAndAnswer
                                            qna={faq}
                                            idx={idx}
                                            key={idx}
                                        />
                                    </>
                                );
                            })}
                    </Flex>
                </Flex>
            </Box>
        </BoujtTemplate>
    );
};

export default OmOss;
