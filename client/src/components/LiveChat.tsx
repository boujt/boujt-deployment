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
import { BounceLoader, PuffLoader } from "react-spinners";
import styles from "../style/livechat.module.scss";
import DailyIframe from "@daily-co/daily-js";
import {
  MESSAGE_PREFIX_REQUEST_ACCEPT,
  MESSAGE_PREFIX_REQUEST_CHANGE,
  MESSAGE_PREFIX_REQUEST_DENY,
  MESSAGE_REQUEST,
} from "../../utils/constants";
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
      </Flex>
    );
  }
  return (
    <>
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
      </Flex>
      {/* <AlwaysScrollToBottom /> */}
    </>
  );
};
interface LiveChatProps {
  dailyIframe: any;
  displayName: string;
  setSentRequestToChange: Function;
  sentRequestToChange: string;
  toggleTypeOfChat: Function;
  chatHistory: any[];
  setChatHistory: Function;
  aloneInChat: boolean;
}

export const LiveChat: React.FC<LiveChatProps> = ({
  dailyIframe,
  displayName,
  setSentRequestToChange,
  sentRequestToChange,
  toggleTypeOfChat,
  chatHistory,
  setChatHistory,
  aloneInChat,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const [error, setError] = useState<string>("");

  const sendMessage = () => {
    if (!dailyIframe || inputValue.trim() === "") return;

    dailyIframe.sendAppMessage({ message: inputValue }, "*");
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

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      sendMessage();
    }
  };
  return (
    <Flex
      minHeight={500}
      minWidth={300}
      width={"40vw"}
      justifyContent="stretch"
      alignItems={"stretch"}
      maxW={800}
      flexDirection={"column"}
      boxShadow="0px 0px 20px -13px"
    >
      <Flex
        padding="1rem 2rem"
        backgroundColor={"#f5f5f5"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <BounceLoader
          size={20}
          color={aloneInChat ? "transparent" : "#68D391"}
        />
        <Text>Live-chatt</Text>
        {/* <Button
          onClick={() => onLeave()}
          backgroundColor={"red"}
          color={"white"}
        >
          Lämna chatt
        </Button> */}
      </Flex>

      <Flex
        height={300}
        flexDirection={"column"}
        justifyContent="flex-end"
        paddingBottom={30}
        paddingLeft={5}
        paddingRight={5}
      >
        {/* {error.trim() !== "" && (
          <>
            <Alert status="error">
              <AlertIcon />

              <AlertDescription>
                Detta rum är tyvärr inte längre aktivt!
              </AlertDescription>
            </Alert>
            <Button onClick={() => onLeave()}>Gå tillbaka</Button>
          </>
        )} */}
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
        <Box overflowY={"scroll"}>
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
        </Box>
      </Flex>
      <Flex
        backgroundColor={"#f5f5f5"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Textarea
          focusBorderColor="unset"
          backgroundColor={"white"}
          rows={4}
          resize="none"
          size="sm"
          value={inputValue}
          placeholder="Skriv ditt meddelande här..."
          onChange={(e) => setInputValue(e.target.value)}
          disabled={aloneInChat}
          onKeyDown={(e) => onEnterPress(e)}
        />
        <Button
          bg={"#f5f5f5"}
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
