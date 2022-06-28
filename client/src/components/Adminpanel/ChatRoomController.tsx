import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaChartArea, FaComment, FaVideo } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import {
    DAILY_MEETING_BASE_URL,
    LOADING_STATE,
    SYSSNARE_STATUS,
} from "../../../utils/constants";
import {
    doDeleteChatRoom,
    doGetActiveRooms,
    DeleteChatRequest,
} from "../../../utils/service";
import { ChatRoom } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import { ChatRequest } from "./ChatRequest";
import { ProfileMenu } from "./ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";
import { ListChatRequests } from "./ListChatRequests";
import Link from "next/link";

interface ChatRoomControllerProps {
    activeRoom: ChatRoom;
    setActiveRoom: Function;
    onChatEnter: Function;
}

export const ChatRoomController: React.FC<ChatRoomControllerProps> = ({
    activeRoom,
    setActiveRoom,
    onChatEnter,
}) => {
    const { strapi, user, setSyssnareStatus } = useStrapi();

    const [loading, setLoading] = useState<string>(LOADING_STATE.NONE);

    const handleCancelMeeting = () => {
        setLoading(LOADING_STATE.DELETING);

        doDeleteChatRoom({ token: activeRoom?.token, strapi: strapi })
            .then((res) => {
                setLoading(LOADING_STATE.NONE);
                setActiveRoom(null);
                setSyssnareStatus(SYSSNARE_STATUS.AVAILABLE);
            })
            .catch((er) => {
                console.log(er);
            });
    };

    if (user.status === SYSSNARE_STATUS.ONLINE) {
        return (
            <Flex
                justifyContent={"center"}
                alignItems="center"
                flexDirection={"column"}
            >
                <Text
                    align="center"
                    fontWeight={"bold"}
                    marginBottom={5}
                    fontSize={25}
                >
                    Du är förnuvarande otillgänglig för samtal.
                </Text>
                <Text
                    align={"center"}
                    maxWidth={400}
                    marginBottom={10}
                    fontSize={15}
                >
                    Klicka på knappen nedan för att göra dig synlig och
                    mottagbar för förfrågningar
                </Text>
            </Flex>
        );
    }

    return (
        <Flex>
            {!activeRoom && (
                <Box>
                    <Text marginBottom={4} fontSize={20}>
                        Förfrågningar
                    </Text>
                    <ListChatRequests
                        disabled={false}
                        setActiveRoom={(e: ChatRoom) => setActiveRoom(e)}
                    />
                </Box>
            )}

            {activeRoom && (
                <Flex
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems={"center"}
                >
                    <Text fontSize={30} marginBottom={10}>
                        Du har ett aktivt rum
                    </Text>

                    <Flex gap={5}>
                        <Link href={`/chatt/${activeRoom.token}`}>
                            <a target="_blank" rel="noopener noreferrer">
                                <Button
                                    variant={"adminPrimary"}
                                    leftIcon={
                                        activeRoom.is_video ? (
                                            <FaVideo />
                                        ) : (
                                            <FaComment />
                                        )
                                    }
                                >
                                    {loading === LOADING_STATE.ACCEPTING ? (
                                        <Spinner />
                                    ) : (
                                        "Anslut till mötet"
                                    )}
                                </Button>
                            </a>
                        </Link>

                        <Button
                            disabled={loading === LOADING_STATE.DELETING}
                            onClick={() => handleCancelMeeting()}
                            color="red"
                        >
                            {}
                            {loading === LOADING_STATE.DELETING ? (
                                <Spinner />
                            ) : (
                                "Avsluta möte"
                            )}
                        </Button>
                    </Flex>
                </Flex>
            )}
        </Flex>
    );
};
