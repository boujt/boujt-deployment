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
import { ChatRoom } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";

import { ChatView } from "./ChatView";

interface ChatViewAdminProps {
  room: ChatRoom;
}

export const ChatViewAdmin: React.FC<ChatViewAdminProps> = ({ room }) => {
  const { strapi, user } = useStrapi();
  return <ChatView room={room} displayName={user ? user.name : "Syssnare"} />;
};
