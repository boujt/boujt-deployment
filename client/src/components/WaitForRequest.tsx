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
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { FaComment, FaPaperclip, FaPaperPlane, FaVideo } from "react-icons/fa";
import { BounceLoader, PuffLoader } from "react-spinners";
import { SYSSNARE_STATUS } from "../../utils/constants";
import {
  doCreateChatRequest,
  doGetChatRoomFromToken,
} from "../../utils/service";
import { Syssnare } from "../../utils/types";
import styles from "../style/livechat.module.scss";
import { getColorFromStatus } from "./Adminpanel/SyssnareStatus";

interface WaitForRequestProps {
  syssnare: Syssnare;
  token: string;
}

export const WaitForRequest: React.FC<WaitForRequestProps> = ({
  syssnare,
  token,
}) => {
  const [url, setURL] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const myInterval = setInterval(async function () {
      if (url !== "") {
        clearInterval(myInterval);
      }
      doGetChatRoomFromToken(token)
        .then((res) => {
          if (res.data.room) {
            console.log(res.data.room.attributes);
            setURL(res.data.room.attributes.room_url);
          }
        })
        .catch((er) => {
          console.log("No accepted yet");
        });
    }, 2000);
    return () => clearInterval(myInterval);
  }, []);

  if (url.trim() !== "") {
    return (
      <Flex
        gap={5}
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Text>{syssnare.name} har accepterat din förfrågan!</Text>
        <Button
          onClick={() => router.push(`/chatt/${token}`)}
          variant={"default"}
          backgroundColor="yellow"
        >
          Gå till chattrummet
        </Button>
      </Flex>
    );
  }

  return (
    <Flex
      justifyContent={"center"}
      alignItems="center"
      flexDirection={"column"}
    >
      <Text marginBottom={10} fontSize={20}>
        Inväntar svar från {syssnare?.name}
      </Text>
      <PuffLoader color="#00CCEE" speedMultiplier={0.6} />
    </Flex>
  );
};
