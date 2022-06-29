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
    const [proceed, setProceed] = useState<boolean>(true);

    // This used to be a landing page for the user to fill in their name

    return <ChatView room={room} displayName={name} />;
};
