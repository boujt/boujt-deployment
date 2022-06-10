import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaChartArea, FaComment, FaVideo } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import {
  DAILY_MEETING_BASE_URL,
  LOADING_STATE,
  SYSSNARE_STATUS,
} from "../../utils/constants";
import {
  doDeleteChatRoom,
  doGetActiveRooms,
  DeleteChatRequest,
} from "../../utils/service";
import { ChatRoom } from "../../utils/types";
import { useStrapi } from "../auth/auth";
import { ChatRequest } from "./ChatRequest";
import { ProfileMenu } from "./ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";

interface ChatRoomControllerProps {
  activeRoom: ChatRoom;
  setActiveRoom: Function;
  onChatEnter: Function;
  syssnareStatus: string;
}

export const ChatRoomController: React.FC<ChatRoomControllerProps> = ({
  activeRoom,
  setActiveRoom,
  onChatEnter,
  syssnareStatus,
}) => {
  const { strapi, user } = useStrapi();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState<string>(LOADING_STATE.FETCHING);

  const handleCancelMeeting = async () => {
    setLoading(LOADING_STATE.DELETING);
    setRequests([]);
    const data: DeleteChatRequest = {
      strapi,
      token: activeRoom?.token,
    };
    await doDeleteChatRoom(data);
    setLoading(LOADING_STATE.FETCHING);
  };

  const fetchRequests = () => {
    return strapi?.find("request-chats", {
      populate: {
        syssnare: {
          fields: ["id"],
        },
      },
    });
  };

  const fetchData = async () => {
    Promise.all([doGetActiveRooms(strapi, user.id), fetchRequests()]).then(
      (values) => {
        if (values[0]) {
          const aR: ChatRoom = {
            syssnare: user.id,
            room_url: values[0].attributes.room_url,
            token: values[0].attributes.session_id,
            is_video: values[1].data.filter(
              (a) => a.attributes.token === values[0].attributes.session_id
            )[0].attributes.is_video,
          };
          setActiveRoom(aR);
        } else {
          setActiveRoom(null);
        }

        setRequests(
          values[1].data.filter(
            (a) => a.attributes.syssnare.data.id === user.id
          )
        );
        setLoading(LOADING_STATE.NONE);
      }
    );

    setLoading(LOADING_STATE.NONE);
  };

  useEffect(() => {
    fetchData();

    const myInterval = setInterval(async function () {
      fetchData();
    }, 2000);
    return () => clearInterval(myInterval);
  }, []);

  if (loading === LOADING_STATE.FETCHING) {
    return (
      <Flex>
        <Spinner />
        <Text>Kontrollerar aktiva möten</Text>
      </Flex>
    );
  }
  if (syssnareStatus === SYSSNARE_STATUS.ONLINE) {
    return (
      <Flex
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Text align="center" fontWeight={"bold"} marginBottom={5} fontSize={25}>
          Du är förnuvarande otillgänglig för samtal.
        </Text>
        <Text align={"center"} maxWidth={400} marginBottom={10} fontSize={15}>
          Klicka på knappen nedan för att göra dig synlig och mottagbar för
          förfrågningar{" "}
        </Text>
      </Flex>
    );
  }
  if (
    loading === LOADING_STATE.NONE &&
    requests.length === 0 &&
    syssnareStatus === SYSSNARE_STATUS.AVAILABLE
  ) {
    return (
      <Flex
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Text marginBottom={10} fontSize={30}>
          Letar efter förfrågningar
        </Text>
        <PuffLoader color="#00CCEE" speedMultiplier={0.6} />
      </Flex>
    );
  }

  if (activeRoom) {
    return (
      <Flex
        flexDirection={"column"}
        justifyContent="center"
        alignItems={"center"}
      >
        <Text fontSize={30} marginBottom={10}>
          Du har ett aktivt rum
        </Text>

        <Flex gap={5}>
          {activeRoom.is_video ? (
            <Button
              variant={"adminPrimary"}
              leftIcon={<FaVideo />}
              as="a"
              target="_blank"
              href={DAILY_MEETING_BASE_URL + activeRoom.room_url}
            >
              {loading === LOADING_STATE.ACCEPTING ? (
                <Spinner />
              ) : (
                "Anslut till videomötet"
              )}
            </Button>
          ) : (
            <Button
              variant={"adminPrimary"}
              leftIcon={<FaComment />}
              onClick={() => onChatEnter()}
            >
              {}
              {loading === LOADING_STATE.ACCEPTING ? (
                <Spinner />
              ) : (
                "Anslut till chatten"
              )}
            </Button>
          )}

          <Button onClick={() => handleCancelMeeting()} color="red">
            {}
            {loading === LOADING_STATE.DELETING ? <Spinner /> : "Avsluta möte"}
          </Button>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex>
      {requests.map((req) => {
        const miliSeconds = Date.now() - new Date(req.attributes.createdAt);
        return (
          <ChatRequest
            key={req.attributes.token}
            is_video={req.attributes.is_video}
            token={req.attributes.token}
            time={miliSeconds}
            request_id={req.id}
            onCreateRoom={(e) => console.log("nej")}
          />
        );
      })}
    </Flex>
  );
};
