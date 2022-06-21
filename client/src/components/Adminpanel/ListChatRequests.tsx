import { Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { LOADING_STATE } from "../../../utils/constants";
import { doGetActiveRooms } from "../../../utils/service";
import { ChatRoom } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import { ChatRequest } from "./ChatRequest";

interface ListChatRequestsProps {
  setActiveRoom: Function;
}

export const ListChatRequests: React.FC<ListChatRequestsProps> = ({
  setActiveRoom,
}) => {
  const { strapi, user } = useStrapi();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState<string>(LOADING_STATE.FETCHING);
  const fetchRequests = () => {
    return strapi?.find("request-chats", {
      populate: {
        syssnare: {
          fields: ["id"],
        },
      },
    });
  };

  useEffect(() => {
    fetchData();

    const myInterval = setInterval(async function () {
      fetchData();
    }, 2000);
    return () => clearInterval(myInterval);
  }, []);

  const fetchData = () => {
    if (!strapi) return;
    Promise.all([doGetActiveRooms(strapi, user.id), fetchRequests()]).then(
      (values) => {
        if (values[0]) {
          const aR: ChatRoom = {
            syssnare: user.id,
            room_url: values[0].attributes.room_url,
            token: values[0].attributes.token,
            is_video: values[0].is_video,
          };
          setActiveRoom(aR);
        } else {
          setActiveRoom(null);
        }
        if (values[1]) {
          setRequests(
            values[1].data.filter(
              (a) => a.attributes.syssnare.data.id === user.id
            )
          );
          setLoading(LOADING_STATE.NONE);
        } else {
          setRequests([]);
        }
      }
    );
  };

  if (loading === LOADING_STATE.FETCHING) {
    return <Spinner />;
  }
  if (loading === LOADING_STATE.NONE && requests.length !== 0) {
    return (
      <Flex flexDirection={"column"}>
        {requests.map((req) => {
          const miliSeconds = Date.now() - new Date(req.attributes.createdAt);
          return (
            <ChatRequest
              key={req.attributes.token}
              is_video={req.attributes.is_video}
              token={req.attributes.token}
              time={miliSeconds}
              request_id={req.id}
              onCreateRoom={(cr: ChatRoom) => setActiveRoom(cr)}
            />
          );
        })}
      </Flex>
    );
  }

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
};
