import { Button, Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaBan, FaWifi } from "react-icons/fa";
import { DAILY_MEETING_BASE_URL } from "../../../utils/constants";
import { ChatRoom } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import { ChatRoomController } from "./ChatRoomController";
import { LiveChat } from "../LiveChat";
import { ProfileMenu } from "../ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";
import { SYSSNARE_STATUS } from "../../../utils/constants";

export const AdminPanel: React.FC = () => {
  const { strapi, user } = useStrapi();

  const [status, setStatus] = useState<string>(SYSSNARE_STATUS.ONLINE); // LÄGG TILL ACTIVE I DATABAS
  const [activeRoom, setActiveRoom] = useState<ChatRoom | null>(null);
  const [openChat, setOpenChat] = useState<boolean>(false);

  const goActive = () => {
    //TODO Ändra i databasen
    setStatus(SYSSNARE_STATUS.AVAILABLE);
  };
  const goInactive = () => {
    //TODO: Ändra i databasen
    setStatus(SYSSNARE_STATUS.ONLINE);
  };

  useEffect(() => {
    if (activeRoom) {
      setStatus(SYSSNARE_STATUS.IN_CALL);
    } else if (status === SYSSNARE_STATUS.IN_CALL) {
      setStatus(SYSSNARE_STATUS.AVAILABLE);
    }
  }, [activeRoom]);

  return (
    <div>
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        paddingRight={100}
        paddingLeft={100}
        paddingTop={10}
      >
        <Flex>
          <Button
            as="a"
            target="_blank"
            href="https://shark-app-md2sm.ondigitalocean.app/admin/auth/login"
            variant={"adminPrimary"}
          >
            Till Content Manager
          </Button>
        </Flex>
        <Flex maxWidth={200} flexDirection={"column"}>
          <ProfileMenu name={user?.username || "Syssnare"} />
          <SyssnareStatus status={status} />
        </Flex>
      </Flex>
      <Flex
        width={"100%"}
        justifyContent="center"
        alignItems={"center"}
        paddingTop="50"
      >
        {!openChat && (
          <ChatRoomController
            syssnareStatus={status}
            activeRoom={activeRoom}
            onChatEnter={() => setOpenChat(true)}
            setActiveRoom={(room: ChatRoom) => setActiveRoom(room)}
          />
        )}
        {openChat && activeRoom && !activeRoom.is_video && (
          <LiveChat
            onLeave={() => setOpenChat(false)}
            roomID={DAILY_MEETING_BASE_URL + activeRoom.room_url}
            displayName={"Syssnare - " + user?.username}
          />
        )}
      </Flex>
      <Flex marginTop={20} height={300} justifyContent="center">
        {status === SYSSNARE_STATUS.AVAILABLE ? (
          <Button onClick={() => goInactive()} leftIcon={<FaBan />} color="red">
            Gå offline
          </Button>
        ) : (
          <Button
            onClick={() => goActive()}
            leftIcon={<FaWifi />}
            color="green"
          >
            Gå online
          </Button>
        )}
      </Flex>
    </div>
  );
};
