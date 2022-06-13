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
      return "green";
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
      maxWidth={300}
      padding="1rem 1rem"
      boxShadow="0px 0px 17px -7px rgba(0,0,0,0.75)"
      borderRadius={8}
    >
      <Flex justifyContent={"space-between"}>
        <Flex flexDirection={"column"}>
          <Text fontSize={30}>{syssnare.name}</Text>
          <Badge fontSize={20} color={colorFromStatus()}>
            {syssnare.status === SYSSNARE_STATUS.AVAILABLE
              ? "LEDIG"
              : "I SAMTAL"}
          </Badge>
        </Flex>
        <Avatar size="xl" src={syssnare.img}></Avatar>
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
        >
          Chatt
        </Button>
        <Button
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
