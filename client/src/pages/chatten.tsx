import {
    Alert,
    AlertIcon,
    Box,
    Button,
    Flex,
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaComment, FaVideo } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import { ERRORS, SYSSNARE_STATUS } from "../../utils/constants";
import { useData } from "../../utils/fetchData";
import { generateToken } from "../../utils/helperFunctions";
import {
    doCancelChatRequest,
    doCreateChatRequest,
    doGetAllSyssnare,
    doGetChatRoomFromToken,
    doGetRequestByToken,
} from "../../utils/service";
import { FetchDataResponse, OpeningHours, Syssnare } from "../../utils/types";
import AvailableSyssnare from "../components/AvailableSyssnare";
import BoujtTemplate from "../components/BoujtTemplate";
import { LiveChat } from "../components/LiveChat";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import { SyssnareItem } from "../components/SyssnareItem";
import { WaitForRequest } from "../components/WaitForRequest";
import { box_shadow_dark } from "../theme";

const DAYS_OPEN: number[] = [1, 2, 4]; // Mondat, tuesday, thursday

const ALERT_TITLE = "(1) Det är din tur!";

export default function Chat() {
    const [sentRequest, setSentRequest] = useState<boolean>(false);
    const [requestData, setRequestData] = useState<{
        token: string | null;
        syssnare: Syssnare | null;
    }>({ token: null, syssnare: null });

    const openingHours = useData<OpeningHours>("openinghours");
    const [title, setTitle] = useState<string>("");

    const [shouldBreak] = useMediaQuery("(max-width: 850px)");

    const [syssnare, setSyssnare] = useState<Syssnare[]>([]);
    const [error, setError] = useState<string>("");

    const myInterval2 = () =>
        setInterval(function () {
            setTitle((prev) =>
                prev === ALERT_TITLE ? "Chatten" : ALERT_TITLE
            );
        }, 1000);

    const alertFirstQueueTitle = () => {
        if (title === "") {
            setTitle(ALERT_TITLE);
            myInterval2();
        }
    };

    useEffect(() => {
        doGetAllSyssnare()
            .then((res) => {
                setSyssnare(res.data);
            })
            .catch((er) => console.log(er));
        const myInterval1 = setInterval(async function () {
            doGetAllSyssnare()
                .then((res) => {
                    setSyssnare(res.data);
                })
                .catch((er) => console.error(er));
        }, 5000);
        return () => clearInterval(myInterval1);
    }, []);

    const createChatRequest = (syssnare: Syssnare, isVideo: boolean) => {
        setSentRequest(true);
        setError("");

        doCreateChatRequest(syssnare.id, isVideo).then((res) => {
            if (res.error) {
                setError(res.error);
            } else {
                setRequestData({ token: res.token, syssnare: syssnare });
                localStorage.setItem(
                    "request_data",
                    JSON.stringify({ token: res.token, syssnare: syssnare })
                );
            }
        });
    };

    const cancelRequest = (token: string) => {
        clearInterval(myInterval2());
        doCancelChatRequest(token)
            .then((res) => {
                setRequestData({ token: null, syssnare: null });
                setSentRequest(false);
            })
            .catch((er) => {
                setRequestData({ token: null, syssnare: null });
                setSentRequest(false);
            });
    };

    const getNextOpenDay = () => {
        if (!openingHours.data) return;

        const dic_days = [
            "Söndag",
            "Måndag",
            "Tisdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "Lördag",
        ];

        const today = new Date();
        let nextOpenDay = today.getDay();
        while (true) {
            if (DAYS_OPEN.includes(nextOpenDay)) {
                break;
            }
            if (nextOpenDay >= 6) {
                nextOpenDay = 0;
            } else {
                nextOpenDay++;
            }
        }
        if (
            nextOpenDay === today.getDay() &&
            today.getHours() <=
                parseInt(openingHours.data?.open_time.slice(0, 2))
        ) {
            return "Idag";
        } else {
            return dic_days[nextOpenDay];
        }
    };

    const chatIsOpen = () => {
        const availableSys = syssnare.filter((sys) =>
            [SYSSNARE_STATUS.AVAILABLE, SYSSNARE_STATUS.IN_CALL].includes(
                sys.status
            )
        );
        if (availableSys.length > 0) {
            return true;
        }
        if (!openingHours.data) return false;

        const dateNow = new Date();
        if (!DAYS_OPEN.includes(dateNow.getDay())) return false;

        const currentHour = dateNow.getHours();
        const currentMin = dateNow.getMinutes();

        const endHour = parseInt(openingHours.data?.close_time.slice(0, 2));
        const startHour = parseInt(openingHours.data?.open_time.slice(0, 2));
        const endMin = parseInt(openingHours.data?.close_time.slice(3, 5));
        const startMin = parseInt(openingHours.data?.open_time.slice(3, 5));

        if (currentHour > startHour && currentHour < endHour) return true;

        if (currentHour === startHour && currentMin >= startMin) return true;

        if (currentHour === endHour && currentMin < endMin) return true;

        return false;
    };

    return (
        <BoujtTemplate gap={50}>
            <Head>
                <title>{title === "" ? "Chatten" : title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Heading>Chatten</Heading>
            <Flex gap={6} flexDirection={shouldBreak ? "column" : "row"}>
                <Flex
                    gap={5}
                    width={shouldBreak ? "100%" : "70%"}
                    flexDirection={"column"}
                >
                    <Text>
                        Här kan du skicka en förfrågan till en ledig syssnare.
                        Antingen via text eller video. När syssnaren har
                        accepterat din förfrågan skickas du till ett chatrum
                    </Text>
                    <Box maxWidth={shouldBreak ? "100%" : "60%"}>
                        <ResponsiveVideoPlayer url="https://youtu.be/fQ2jLE4fXAY" />
                    </Box>
                </Flex>
                <Flex
                    border="1px solid gray"
                    padding="1rem"
                    borderRadius={8}
                    flexDirection={"column"}
                    width={shouldBreak ? "100%" : "30%"}
                    boxShadow={box_shadow_dark}
                    justifyContent={"center"}
                    alignItems={shouldBreak ? "center" : "unset"}
                    height="auto"
                >
                    <Text fontWeight={800} fontSize={20}>
                        Öppettider
                    </Text>
                    <Text>
                        Måndag: {openingHours.data?.open_time.slice(0, 5)} -{" "}
                        {openingHours.data?.close_time.slice(0, 5)}
                    </Text>
                    <Text>
                        Tisdag: {openingHours.data?.open_time.slice(0, 5)} -{" "}
                        {openingHours.data?.close_time.slice(0, 5)}
                    </Text>
                    <Text>
                        Torsdag: {openingHours.data?.open_time.slice(0, 5)} -{" "}
                        {openingHours.data?.close_time.slice(0, 5)}
                    </Text>
                </Flex>
            </Flex>

            {chatIsOpen() ? (
                <>
                    <Text fontSize={30} fontWeight={400}>
                        Lediga syssnare
                    </Text>

                    <AvailableSyssnare
                        syssnare={syssnare}
                        onMakeRequest={(syssnare: Syssnare, isVideo: boolean) =>
                            createChatRequest(syssnare, isVideo)
                        }
                    />
                </>
            ) : (
                <Alert
                    borderRadius={8}
                    py="2rem"
                    status="info"
                    flexDirection={"column"}
                    gap={3}
                >
                    <AlertIcon />
                    <Flex width={"100%"} justifyContent={"center"} flex={1}>
                        <Text fontSize={27} textAlign={"center"}>
                            Chatten är tyvärr stängd och öppnar igen{" "}
                            <Text fontSize={35} fontWeight={600}>
                                {getNextOpenDay()} kl{" "}
                                {openingHours.data?.open_time.slice(0, 5)}
                            </Text>
                        </Text>
                    </Flex>
                </Alert>
            )}

            <Modal
                closeOnOverlayClick={false}
                isOpen={sentRequest}
                onClose={() => cancelRequest(requestData.token)}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Chatt-förfrågan</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody justifyContent={"center"}>
                        {requestData.token && (
                            <WaitForRequest
                                alertFirstQueue={() => alertFirstQueueTitle()}
                                currentStatus={
                                    syssnare.filter(
                                        (sys) =>
                                            sys.id === requestData.syssnare.id
                                    )[0].status
                                }
                                syssnare={requestData.syssnare}
                                token={requestData.token}
                            />
                        )}
                        {requestData.token === null && error === "" && (
                            <Flex
                                flexDirection={"column"}
                                justifyContent="center"
                                alignItems={"center"}
                            >
                                <Text>Skickar förfrågan</Text>
                                <Spinner />
                            </Flex>
                        )}

                        {error !== "" && (
                            <Flex
                                flexDirection={"column"}
                                justifyContent="center"
                                alignItems={"center"}
                            >
                                <Text>Något gick tyvärr fel!</Text>
                                <Text>
                                    Var god ladda om sidan och försök igen.
                                </Text>
                            </Flex>
                        )}
                    </ModalBody>

                    <ModalFooter justifyContent={"center"}>
                        <Button
                            marginRight={"0"}
                            marginLeft={"0"}
                            backgroundColor="red"
                            color="white"
                            mr={3}
                            onClick={() => cancelRequest(requestData.token)}
                        >
                            Avbryt
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </BoujtTemplate>
    );
}
