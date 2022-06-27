import { Box, Button, Flex, Spinner, Td, Text, Tr } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaComment, FaVideo } from "react-icons/fa";
import { LOADING_STATE, SYSSNARE_STATUS } from "../../../utils/constants";
import {
    CreateChatroomRequest,
    doCreateChatRoom,
} from "../../../utils/service";
import { useStrapi } from "../../auth/auth";
import { ProfileMenu } from "./ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";

interface ChatRequestProps {
    is_video: boolean;
    time: number;
    token: string;
    request_id: string;
    onCreateRoom: Function;
    disabled: boolean;
    queue: number;
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s";
}

export const ChatRequest: React.FC<ChatRequestProps> = ({
    time,
    is_video,
    token,
    request_id,
    onCreateRoom,
    disabled,
    queue,
}) => {
    const { strapi, user, setSyssnareStatus } = useStrapi();
    const [loading, setLoading] = useState<string>(LOADING_STATE.NONE);

    const handleAccept = async () => {
        setLoading(LOADING_STATE.ACCEPTING);
        const data: CreateChatroomRequest = {
            is_video,
            token,
            syssnare: user.id,
        };

        onCreateRoom(await doCreateChatRoom(data));
        setSyssnareStatus(SYSSNARE_STATUS.IN_CALL);
    };

    const handleDecline = () => {
        setLoading(LOADING_STATE.DELETING);
        strapi
            ?.delete("request-chats", request_id)
            .then((res) => {})
            .catch((er) => {
                console.log(er);
                setLoading("");
            });
    };

    return (
        <Tr>
            <Td textAlign={"center"}>{queue}</Td>
            <Td textAlign={"center"}>
                {" "}
                {is_video ? (
                    <Flex justifyContent={"center"} gap={2}>
                        <FaVideo color="black" size={"20"} />
                        <Text>Video</Text>
                    </Flex>
                ) : (
                    <Flex justifyContent={"center"} gap={2}>
                        <FaComment color="black" size={"20"} />
                        <Text>Text</Text>
                    </Flex>
                )}
            </Td>
            <Td textAlign={"center"}>{millisToMinutesAndSeconds(time)}</Td>
            <Td>
                <Flex gap={2}>
                    <Button
                        onClick={() => handleAccept()}
                        colorScheme={"linkedin"}
                        disabled={loading !== LOADING_STATE.NONE}
                    >
                        {" "}
                        {loading === LOADING_STATE.ACCEPTING ? (
                            <Spinner />
                        ) : (
                            "Godkänn"
                        )}
                    </Button>
                    <Button
                        color={"red"}
                        variant="ghost"
                        disabled={loading !== LOADING_STATE.NONE}
                        onClick={() => handleDecline()}
                    >
                        {loading === LOADING_STATE.DELETING ? (
                            <Spinner />
                        ) : (
                            "Neka"
                        )}
                    </Button>
                </Flex>
            </Td>
        </Tr>
    );

    return (
        <Flex
            justifyContent={"space-between"}
            flexDirection="row"
            border="1px solid gray"
            paddingTop={5}
            paddingBottom={5}
            paddingRight="6"
            borderRadius={7}
        >
            <Flex justifyContent="center" alignItems="center" width={"30%"}>
                {is_video ? (
                    <FaVideo color="black" size={"30"} />
                ) : (
                    <FaComment color="black" size={"30"} />
                )}
            </Flex>
            <Flex width={250} flexDirection={"column"}>
                <Flex justifyContent={"space-between"} marginBottom="4">
                    <Text fontSize={"20"}>
                        {is_video ? "Videochatt" : "Textchatt"}
                    </Text>
                    <Text>{millisToMinutesAndSeconds(time)}</Text>
                </Flex>
                <Flex justifyContent={"space-between"}>
                    <Button
                        onClick={() => handleAccept()}
                        colorScheme={"blue"}
                        variant={"solid"}
                        disabled={loading !== LOADING_STATE.NONE || disabled}
                    >
                        {loading === LOADING_STATE.ACCEPTING ? (
                            <Spinner />
                        ) : (
                            "Godkänn"
                        )}
                    </Button>
                    <Button
                        disabled={loading !== LOADING_STATE.NONE || disabled}
                        onClick={() => handleDecline()}
                    >
                        {loading === LOADING_STATE.DELETING ? (
                            <Spinner />
                        ) : (
                            "Neka"
                        )}
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};
