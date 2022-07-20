import {
    Alert,
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    Button,
    Divider,
    Flex,
    IconButton,
    Input,
    Spinner,
    Text,
    Textarea,
    useMediaQuery,
} from "@chakra-ui/react";
import { useDaily } from "@daily-co/daily-react-hooks";
import React, { useEffect, useRef, useState } from "react";
import { FaGrin, FaPaperclip, FaPaperPlane } from "react-icons/fa";
import { BounceLoader, PuffLoader } from "react-spinners";
import styles from "../style/livechat.module.scss";
import DailyIframe from "@daily-co/daily-js";
import {
    MESSAGE_PREFIX_REQUEST_ACCEPT,
    MESSAGE_PREFIX_REQUEST_CHANGE,
    MESSAGE_PREFIX_REQUEST_DENY,
    MESSAGE_REQUEST,
} from "../../utils/constants";
import dynamic from "next/dynamic";

const Picker = dynamic(() => import("emoji-picker-react"), { ssr: false });
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
                    color={"black"}
                    minW="100px"
                    maxW="350px"
                    my="1"
                    p="3"
                >
                    <Flex flexDirection={"column"}>
                        <Text fontSize={"xs"}>{displayName}</Text>
                        <Text whiteSpace={"pre-wrap"}>{message}</Text>
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
    const [focus, setFocus] = useState<boolean>(false);
    const [openEmoji, setOpenEmoji] = useState<boolean>(false);
    const bottomRef = useRef(null);

    const [isMobile] = useMediaQuery("(max-width: 400px)");
    useEffect(() => {
        var objDiv = document.getElementById("bottom-message");

        if (objDiv) {
            objDiv.scrollTop = objDiv.scrollHeight;
        }
    }, [chatHistory]);

    const onEmojiClick = (event, emojiObject) => {
        setInputValue((prev) => prev + emojiObject.emoji);
        setOpenEmoji(false);
    };

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
            maxWidth={900}
            width={"100%"}
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
                <Box
                    scrollBehavior={"smooth"}
                    overflowY={"scroll"}
                    id="bottom-message"
                >
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
                alignItems={"center"}
                justifyContent={"center"}
                flexDirection="row"
                padding="0 2rem"
            >
                <Flex
                    borderRadius={8}
                    width={"100%"}
                    border={focus ? "1px solid #00CCEE" : "1px solid #dcdcdc"}
                    flexDirection={isMobile ? "column" : "row"}
                    justifyContent="center"
                    boxShadow="0px 0px 18px -16px"
                    padding="0.5rem"
                >
                    <Flex width={"90%"}>
                        <Textarea
                            focusBorderColor="unset"
                            backgroundColor={"white"}
                            border="none"
                            rows={1}
                            onFocus={() => setFocus(true)}
                            onBlur={() => setFocus(false)}
                            width="100%"
                            resize="none"
                            size="sm"
                            value={inputValue}
                            placeholder="Skriv ditt meddelande här..."
                            onChange={(e) => setInputValue(e.target.value)}
                            disabled={aloneInChat}
                            onKeyDown={(e) => onEnterPress(e)}
                        />
                    </Flex>
                    <Flex
                        width={isMobile ? "unset" : "10%"}
                        justifyContent="flex-end"
                        flexDirection={isMobile ? "row" : "column"}
                    >
                        <IconButton
                            aria-label="Emojis"
                            padding={0}
                            backgroundColor={"white"}
                            borderRadius={4}
                            onClick={() => setOpenEmoji(true)}
                            disabled={aloneInChat}
                            icon={<FaGrin color="gray" />}
                        ></IconButton>
                        {openEmoji && (
                            <Flex
                                zIndex={"999"}
                                onBlur={(t) => {
                                    if (!t.relatedTarget) {
                                        setOpenEmoji(false);
                                    } else if (
                                        t.relatedTarget.className.includes(
                                            "chakra"
                                        )
                                    ) {
                                        setOpenEmoji(false);
                                    }
                                }}
                                position={"absolute"}
                            >
                                {" "}
                                <Picker onEmojiClick={onEmojiClick} />
                            </Flex>
                        )}

                        <IconButton
                            aria-label="Skicka meddelande"
                            padding={0}
                            backgroundColor={"white"}
                            borderRadius={4}
                            onClick={() => sendMessage()}
                            disabled={aloneInChat}
                            icon={<FaPaperPlane color="#00CCEE" />}
                        ></IconButton>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};
