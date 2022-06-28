import { Button, Center, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaBan, FaWifi } from "react-icons/fa";
import { DAILY_MEETING_BASE_URL } from "../../../utils/constants";
import { ChatRoom, Syssnare } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import { ChatRoomController } from "./ChatRoomController";
import { LiveChat } from "../LiveChat";
import { ProfileMenu } from "./ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";
import { SYSSNARE_STATUS } from "../../../utils/constants";
import { doGetAllSyssnare } from "../../../utils/service";
import ListOfSyssnare from "./ListOfSyssnare";
import AdminSidebar from "./AdminSidebar";

export const AdminPanel: React.FC = () => {
    const { strapi, user, setSyssnareStatus } = useStrapi();
    console.log(user);
    const [activeRoom, setActiveRoom] = useState<ChatRoom | null>(null);
    const [openChat, setOpenChat] = useState<boolean>(false);

    const goActive = () => {
        setSyssnareStatus(SYSSNARE_STATUS.AVAILABLE);
    };
    const goInactive = () => {
        setSyssnareStatus(SYSSNARE_STATUS.ONLINE);
    };

    return (
        <Center height={"100%"}>
            <Flex
                flexDirection={"row"}
                justifyContent={"space-between"}
                paddingRight={100}
                paddingLeft={100}
                paddingTop={10}
            >
                <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    flexDirection={"column"}
                    width="100%"
                >
                    <Flex
                        width={"100%"}
                        justifyContent="center"
                        alignItems={"center"}
                        paddingTop="50"
                    >
                        {!openChat && (
                            <ChatRoomController
                                activeRoom={activeRoom}
                                onChatEnter={() => setOpenChat(true)}
                                setActiveRoom={(room: ChatRoom) =>
                                    setActiveRoom(room)
                                }
                            />
                        )}
                    </Flex>
                    {!activeRoom && (
                        <Flex
                            marginTop={20}
                            height={300}
                            justifyContent="center"
                        >
                            {user.status === SYSSNARE_STATUS.AVAILABLE ? (
                                <Button
                                    onClick={() => goInactive()}
                                    leftIcon={<FaBan />}
                                    backgroundColor="red"
                                    color="white"
                                >
                                    Gå offline
                                </Button>
                            ) : (
                                <Button
                                    onClick={() => goActive()}
                                    leftIcon={<FaWifi />}
                                    colorScheme="green"
                                    variant={"solid"}
                                >
                                    Gå online
                                </Button>
                            )}
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Center>
    );
};
