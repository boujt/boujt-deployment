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
import React, { useEffect, useRef, useState } from "react";
import { FaComment, FaPaperclip, FaPaperPlane, FaVideo } from "react-icons/fa";
import { BounceLoader, PuffLoader } from "react-spinners";
import { SYSSNARE_STATUS } from "../../utils/constants";
import { doCreateChatRequest } from "../../utils/service";
import { Syssnare } from "../../utils/types";
import styles from "../style/livechat.module.scss";
import { box_shadow_dark } from "../theme";
import { getColorFromStatus } from "./Adminpanel/SyssnareStatus";

interface SyssnareItemProps {
    syssnare: Syssnare;
    onCreateRequest: Function;
}

export const SyssnareItem: React.FC<SyssnareItemProps> = ({
    syssnare,
    onCreateRequest,
}) => {
    const colorFromStatus = () => {
        if (syssnare.status === SYSSNARE_STATUS.AVAILABLE) {
            return "#75E89D";
        }
        if (syssnare.status === SYSSNARE_STATUS.IN_CALL) {
            return "orange";
        }
    };
    if (
        syssnare.status === SYSSNARE_STATUS.OFFLINE ||
        syssnare.status === SYSSNARE_STATUS.ONLINE
    )
        return null;

    return (
        <Flex
            flexDirection={"column"}
            maxWidth={380}
            minWidth={250}
            padding="1rem 1rem"
            boxShadow={box_shadow_dark}
            borderRadius={8}
        >
            <Flex justifyContent={"space-between"}>
                <Flex flexDirection={"column"}>
                    <Text marginBottom={0} fontSize={25}>
                        {syssnare.name}
                    </Text>
                    <Text>Syssnare</Text>
                    <Text
                        fontWeight={600}
                        fontSize={20}
                        color={colorFromStatus()}
                    >
                        {syssnare.status === SYSSNARE_STATUS.AVAILABLE
                            ? "LEDIG"
                            : "I SAMTAL"}
                    </Text>
                </Flex>
                <Avatar size="lg" src={syssnare.img}></Avatar>
            </Flex>
            <Flex
                marginTop={5}
                justifyContent={"space-between"}
                flexDirection={"row"}
            >
                <Button
                    disabled={syssnare.status !== SYSSNARE_STATUS.AVAILABLE}
                    leftIcon={<FaComment />}
                    onClick={() => onCreateRequest(syssnare, false)}
                    backgroundColor="#75E89D"
                    color="white"
                >
                    Chatt
                </Button>
                <Button
                    backgroundColor="#76CEEA"
                    color="white"
                    disabled={syssnare.status !== SYSSNARE_STATUS.AVAILABLE}
                    leftIcon={<FaVideo />}
                    onClick={() => onCreateRequest(syssnare, true)}
                >
                    Video
                </Button>
            </Flex>
        </Flex>
    );
};
