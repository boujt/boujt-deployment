import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Avatar,
    Badge,
    Box,
    Button,
    Divider,
    Flex,
    Input,
    Spinner,
    Text,
    Textarea,
} from "@chakra-ui/react";
import { useDaily } from "@daily-co/daily-react-hooks";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
    FaComment,
    FaPaperclip,
    FaPaperPlane,
    FaUserFriends,
    FaVideo,
} from "react-icons/fa";
import { BounceLoader, PuffLoader } from "react-spinners";
import { MAX_PEOPLE_IN_QUEUE, SYSSNARE_STATUS } from "../../utils/constants";
import {
    doCreateChatRequest,
    doGetChatRoomFromToken,
} from "../../utils/service";
import { Syssnare } from "../../utils/types";
import styles from "../style/livechat.module.scss";
import { getColorFromStatus } from "./Adminpanel/SyssnareStatus";

interface WaitForRequestProps {
    syssnare: Syssnare;
    currentStatus: string;
    token: string;
    alertFirstQueue?: Function;
}

export const WaitForRequest: React.FC<WaitForRequestProps> = ({
    syssnare,
    token,
    currentStatus,
    alertFirstQueue,
}) => {
    const [url, setURL] = useState<string>("");
    const router = useRouter();
    const [requestDenied, setRequestDenied] = useState<boolean>(false);
    const [queue, setQueue] = useState<number | null>(null);

    console.log(currentStatus);

    useEffect(() => {
        const myInterval = setInterval(async function () {
            if (url !== "") {
                clearInterval(myInterval);
            }
            axios
                .get(`/api/chat-request/${token}`)
                .then((res) => {
                    setQueue(res.data.data.queue);
                })
                .catch((er) => {
                    if (url === "") {
                        setRequestDenied(true);
                        clearInterval(myInterval);
                    }
                });
            doGetChatRoomFromToken(token)
                .then((res) => {
                    if (res.data.room) {
                        console.log(res.data.room.attributes);
                        setURL(res.data.room.attributes.room_url);
                        if (alertFirstQueue) {
                            alertFirstQueue();
                        }

                        clearInterval(myInterval);
                    }
                })
                .catch((er) => {
                    console.log("No accepted yet");
                });
        }, 2000);
        return () => clearInterval(myInterval);
    }, []);

    if (requestDenied) {
        return (
            <Flex
                gap={5}
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
            >
                <Text>
                    {syssnare.name} har tyvärr har tyvärr nekat din förfrågan.
                    Detta beror troligtvis på att {syssnare.name} var tvungen
                    att gå, eller så har chatten stängt.
                </Text>
                <Text>
                    Om chatten fortfarande är öppen, försök gärna med en annan
                    syssnare!
                </Text>
            </Flex>
        );
    }

    if (url.trim() !== "") {
        return (
            <Flex
                gap={5}
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
            >
                <Text>{syssnare.name} har accepterat din förfrågan!</Text>
                <Button
                    onClick={() => router.push(`/chatt/${token}`)}
                    variant={"default"}
                    backgroundColor="yellow"
                >
                    Gå till chattrummet
                </Button>
            </Flex>
        );
    }

    return (
        <Flex
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
        >
            <Text marginBottom={10} fontSize={20}>
                Inväntar svar från {syssnare?.name}
            </Text>
            <Text>
                Du har köplats
                <Flex
                    paddingTop={"1rem"}
                    alignItems="center"
                    justifyContent={"center"}
                    gap={2}
                >
                    <FaUserFriends size="2rem" />
                    <Text fontSize="2rem">{queue}</Text>
                </Flex>
            </Text>
            <PuffLoader color="#00CCEE" speedMultiplier={0.6} />
        </Flex>
    );
};
