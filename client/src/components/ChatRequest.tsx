import { Button, Flex, Spinner, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaComment, FaVideo } from "react-icons/fa";
import { CreateChatRequest, doCreateChatRoom } from "../../utils/service";
import { useStrapi } from "../auth/auth";
import { ProfileMenu } from "./ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";

interface ChatRequestProps {
  is_video: boolean;
  time: number;
  token: string;
  request_id: string;
  onCreateRoom: Function;
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
}) => {
  const { strapi, user } = useStrapi();
  const [loading, setLoading] = useState<string>("");

  const handleAccept = async () => {
    setLoading("accepting");
    const data: CreateChatRequest = {
      strapi,
      is_video,
      token,
      syssnare: user.id,
    };

    onCreateRoom(await doCreateChatRoom(data));
    setLoading("");
  };

  const handleDecline = () => {
    setLoading("deleteing");
    strapi
      ?.delete("request-chats", request_id)
      .then((res) => {
        setLoading("");
      })
      .catch((er) => {
        console.log(er);
        setLoading("");
      });
  };

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
          <Text fontSize={"20"}>{is_video ? "Videochatt" : "Textchatt"}</Text>
          <Text>{millisToMinutesAndSeconds(time)}</Text>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Button
            onClick={() => handleAccept()}
            colorScheme={"blue"}
            variant={"solid"}
          >
            {loading === "accepting" ? <Spinner /> : "Godkänn"}
          </Button>
          <Button onClick={() => handleDecline()}>
            {loading === "deleteing" ? <Spinner /> : "Neka"}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
