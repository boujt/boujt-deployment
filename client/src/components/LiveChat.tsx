import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
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
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";

interface MessageProps {
  message: string;
  displayName: string;
  senderIsMe: boolean;
  isInfo: boolean;
}

const ChatMessage: React.FC<MessageProps> = ({
  message,
  displayName,
  senderIsMe,
  isInfo,
}) => {
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  if (isInfo) {
    return (
      <Flex w="100%" justify={"center"}>
        <Flex
          borderRadius={"4"}
          color={"black"}
          minW="100px"
          maxW="350px"
          my="1"
          p="3"
        >
          <Flex flexDirection={"column"}>
            <Text>{message}</Text>
          </Flex>
        </Flex>
        <AlwaysScrollToBottom />
      </Flex>
    );
  }
  return (
    <Flex w="100%" justify={senderIsMe ? "flex-end" : "unset"}>
      <Flex
        borderRadius={"4"}
        bg={senderIsMe ? "#00CCEE" : "#e3f4ff"}
        color={senderIsMe ? "white" : "black"}
        minW="100px"
        maxW="350px"
        my="1"
        p="3"
      >
        <Flex flexDirection={"column"}>
          <Text fontSize={"xs"}>{displayName}</Text>
          <Text>{message}</Text>
        </Flex>
      </Flex>
      <AlwaysScrollToBottom />
    </Flex>
  );
};
interface LiveChatProps {
  roomID: string;
  displayName: string;
}

export const LiveChat: React.FC<LiveChatProps> = ({ roomID, displayName }) => {
  const [aloneInChat, setAloneInChat] = useState<boolean>(true);
  const callObject = useDaily();
  const [chatHistory, setChatHistory] = useState<any[]>([]);
  const [hasJoined, setHasJoined] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [roomIsValid, setRoomIsValid] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!callObject) {
      return;
    }

    function handleAppMessage(event) {
      const participants = callObject.participants();
      const name = participants[event.fromId].user_name
        ? participants[event.fromId].user_name
        : "Anonym";
      if (!event.data.message) return;
      setChatHistory([
        ...chatHistory,
        {
          sender: name,
          message: event.data.message,
          isInfo: false,
        },
      ]);
      // Make other icons light up
    }

    callObject.on("app-message", handleAppMessage);
    callObject.on("participant-joined", handleParticipantJoined);
    callObject.on("participant-left", handleParticipantLeft);

    return function cleanup() {
      callObject.off("app-message", handleAppMessage);
      callObject.off("participant-joined", handleParticipantJoined);
      callObject.on("participant-left", handleParticipantLeft);
    };
  }, [callObject, chatHistory]);

  const handleParticipantLeft = (event) => {
    console.log(event);
    setChatHistory([
      ...chatHistory,
      {
        sender: event.participant.user_name,
        message: event.participant.user_name + " har lämnat chattten",
        isInfo: true,
      },
    ]);
  };

  const handleParticipantJoined = (event) => {
    console.log(event);
    if (Object.keys(callObject?.participants()).length > 1) {
      setAloneInChat(false);
    } else {
      setAloneInChat(true);
    }
    setChatHistory([
      ...chatHistory,
      {
        sender: event.participant.user_name,
        message: event.participant.user_name + " har anslutit till chatten",
        isInfo: true,
      },
    ]);
  };

  const sendMessage = () => {
    if (!callObject || inputValue.trim() === "") return;

    callObject.sendAppMessage({ message: inputValue }, "*");
    setChatHistory([
      ...chatHistory,
      {
        sender: displayName,
        message: inputValue,
        isInfo: false,
      },
    ]);
    setInputValue("");
  };

  const joinRoom = () => {
    setLoading(true);
    setError("");
    callObject
      ?.join({ url: roomID, userName: displayName })
      .then((res) => {
        setHasJoined(true);
        setLoading(false);
      })
      .catch((err) => {
        setError("Detta rummet är tyvärr inte längre aktivt");
        setHasJoined(false);
        setLoading(false);
        console.log(err);
      });
  };

  useEffect(() => {
    joinRoom();
  }, []);
  return (
    <Flex height={500} minHeight={500} maxW={500} flexDirection={"column"}>
      <Flex
        padding={"1rem 0"}
        backgroundColor={"#f5f5f5"}
        justifyContent="center"
      >
        <Text>Live-chatt</Text>
      </Flex>

      <Flex
        height={500}
        minHeight={500}
        overflowY={"scroll"}
        flexDirection={"column"}
        justifyContent="flex-end"
        paddingBottom={30}
        paddingLeft={5}
        paddingRight={5}
      >
        {error.trim() !== "" && (
          <>
            <Alert status="error">
              <AlertIcon />

              <AlertDescription>
                Detta rum är tyvärr inte längre aktivt!
              </AlertDescription>
            </Alert>
            <Button>Gå tillbaka</Button>
          </>
        )}
        {!error && aloneInChat && (
          <Flex
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
            height="100%"
          >
            <Spinner
              thickness="4px"
              speed="2s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
            <Text marginTop={5} fontStyle={"italic"}>
              Inväntar alla deltagare
            </Text>
          </Flex>
        )}
        {chatHistory.map((item, id) => {
          return (
            <ChatMessage
              key={id}
              message={item.message}
              displayName={item.sender}
              senderIsMe={item.sender === displayName}
              isInfo={item.isInfo}
            />
          );
        })}
      </Flex>
      <Flex
        backgroundColor={"#f5f5f5"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Textarea
          rows={1}
          size="sm"
          value={inputValue}
          placeholder="Skriv ditt meddelande här..."
          onChange={(e) => setInputValue(e.target.value)}
          disabled={aloneInChat}
        />
        <Button
          bg={"transparent"}
          borderRadius={"0"}
          onClick={() => sendMessage()}
          leftIcon={<FaPaperPlane color="#00CCEE" />}
          disabled={aloneInChat}
        >
          Skicka
        </Button>
      </Flex>
    </Flex>
  );
};
