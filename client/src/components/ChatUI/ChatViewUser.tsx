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
  FormHelperText,
  Heading,
  Input,
  Spinner,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useDaily } from "@daily-co/daily-react-hooks";
import React, { useEffect, useRef, useState } from "react";
import { FaComment, FaPaperclip, FaPaperPlane, FaVideo } from "react-icons/fa";
import { BounceLoader, PuffLoader } from "react-spinners";
import { ChatRoom } from "../../../utils/types";

import { ChatView } from "./ChatView";

interface ChatViewUserProps {
  room: ChatRoom;
}

export const ChatViewUser: React.FC<ChatViewUserProps> = ({ room }) => {
  const [name, setName] = useState<string>("Anonym");
  const [proceed, setProceed] = useState<boolean>(false);
  const url =
    "https://shark-app-md2sm.ondigitalocean.app" +
    room.syssnare.attributes.profile_image.data.attributes.url;

  if (!proceed) {
    return (
      <Flex
        justifyContent={"center"}
        alignItems="center"
        flexDirection={"column"}
      >
        <Heading marginBottom={"1rem"}>
          {" "}
          Möte med {room.syssnare.attributes.name}
        </Heading>
        <Avatar size={"xl"} marginBottom={"3rem"} src={url}></Avatar>
        <Flex
          gap={2}
          flexDirection={"column"}
          minWidth="300px"
          maxWidth="500px"
        >
          <Text fontSize={20}>Namn</Text>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="Anonym"
          ></Input>

          <Button
            marginTop={"1rem"}
            variant={"default"}
            backgroundColor="yellow"
            onClick={() => setProceed(true)}
            leftIcon={room.is_video ? <FaVideo /> : <FaComment />}
          >
            {room.is_video ? "Anslut till videomötet" : "Anslut till chatten"}
          </Button>
        </Flex>
      </Flex>
    );
  }
  return <ChatView room={room} displayName={name} />;
};
