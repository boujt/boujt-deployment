import { Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useStrapi } from "../auth/auth";
import { ChatRequest } from "./ChatRequest";
import { ProfileMenu } from "./ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";

interface ListChatRequestsProps {}

export const ListChatRequests: React.FC<ListChatRequestsProps> = ({}) => {
  const { strapi, user } = useStrapi();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchRequests = () => {
    strapi
      ?.find("request-chats", {
        populate: {
          syssnare: {
            fields: ["id"],
          },
        },
      })
      .then((res) => {
        console.log("REQUIEST", res.data);
        setRequests(
          res.data.filter((a) => a.attributes.syssnare.data.id === user.id)
        );
      })
      .catch((er) => {
        console.log(er);
      });
  };

  useEffect(() => {
    fetchRequests();
    const myInterval = setInterval(function () {
      fetchRequests();
    }, 2000);
    return () => clearInterval(myInterval);
  }, []);

  if (requests.length === 0) {
    return (
      <Flex
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Text>Väntar på förfrågningar</Text>
        <Spinner speed="1s" />
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
            is_video={!req.attributes.is_video}
            token={req.attributes.token}
            time={miliSeconds}
          />
        );
      })}
    </Flex>
  );
};
