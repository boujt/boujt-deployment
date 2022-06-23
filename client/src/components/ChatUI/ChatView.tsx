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
    Heading,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Text,
    Textarea,
} from "@chakra-ui/react";
import DailyIframe from "@daily-co/daily-js";
import { useDaily } from "@daily-co/daily-react-hooks";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import {
    FaArrowRight,
    FaComment,
    FaPaperclip,
    FaPaperPlane,
    FaPersonBooth,
    FaPhoneSlash,
    FaVideo,
} from "react-icons/fa";
import { BounceLoader, PuffLoader } from "react-spinners";
import {
    ERRORS,
    LOADING_STATE,
    MESSAGE_PREFIX_REQUEST_ACCEPT,
    MESSAGE_PREFIX_REQUEST_CHANGE,
    MESSAGE_PREFIX_REQUEST_DENY,
    MESSAGE_REQUEST,
} from "../../../utils/constants";
import { ChatRoom } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import { SYSSNARE_STATUS } from "../../utils/constants";
import { doCreateChatRequest } from "../../utils/service";
import { Syssnare } from "../../utils/types";
import { LiveChat } from "../LiveChat";
import styles from "../style/livechat.module.scss";
import { getColorFromStatus } from "./Adminpanel/SyssnareStatus";

interface ChatViewProps {
    room: ChatRoom;
    displayName: string;
}

export const ChatView: React.FC<ChatViewProps> = ({ room, displayName }) => {
    const [da, setDa] = useState(null);
    const [showVideo, setShowVideo] = useState<boolean>(room.is_video);
    const [loading, setLoading] = useState<string>(LOADING_STATE.FETCHING);
    const [hasJoined, setHasJoined] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const videoRef = useRef(null);
    const [sentRequestToChange, setSentRequestToChange] = useState<string>("");
    const [chatHistory, setChatHistory] = useState<any[]>([]);
    const [aloneInChat, setAloneInChat] = useState<boolean>(true);
    const { user } = useStrapi();
    const router = useRouter();

    useEffect(() => {
        if (da) {
            da.on("app-message", handleAppMessage);
            da.on("participant-joined", handleParticipantJoined);
            da.on("participant-left", handleParticipantLeft);
        }

        return () => {
            if (da) {
                da.off("app-message", handleAppMessage);
                da.off("participant-joined", handleParticipantJoined);
                da.off("participant-left", handleParticipantLeft);
            }
        };
    }, [da]);

    const handleAppMessage = (event) => {
        console.log("app");
        const participants = da.participants();
        const name = participants[event.fromId].user_name
            ? participants[event.fromId].user_name
            : "Anonym";
        if (!event.data.message) return;

        if (event.data.message === MESSAGE_PREFIX_REQUEST_CHANGE) {
            setSentRequestToChange(MESSAGE_REQUEST.RECIEVED);
            return;
        }
        if (event.data.message === MESSAGE_PREFIX_REQUEST_DENY) {
            setSentRequestToChange(MESSAGE_REQUEST.DENIED);
            return;
        }
        if (event.data.message === MESSAGE_PREFIX_REQUEST_ACCEPT) {
            setSentRequestToChange(MESSAGE_REQUEST.ACCPETED);
            toggleTypeOfChat();

            return;
        }
        setChatHistory((prev) => [
            ...prev,
            {
                sender: name,
                message: event.data.message,
                isInfo: false,
            },
        ]);
        // Make other icons light up
    };

    const handleParticipantLeft = (event) => {
        setChatHistory((prev) => [
            ...prev,
            {
                sender: event.participant.user_name,
                message: event.participant.user_name + " har lämnat chattten",
                isInfo: true,
            },
        ]);
    };

    const handleParticipantJoined = (event) => {
        if (Object.keys(da?.participants()).length > 1) {
            setAloneInChat(false);
        } else {
            setAloneInChat(true);
        }
        setChatHistory((prev) => [
            ...prev,
            {
                sender: event.participant.user_name,
                message:
                    event.participant.user_name + " har anslutit till chatten",
                isInfo: true,
            },
        ]);
    };

    useEffect(() => {
        if (!videoRef) return;

        if (!da) {
            setDa(
                DailyIframe.wrap(videoRef.current, {
                    iframeStyle: {
                        width: "100%",
                        height: "100%",
                    },
                    showLeaveButton: false,
                    showFullscreenButton: true,
                    audioSource: false,
                })
            );
        }
        if (!hasJoined) {
            da?.join({
                url: room.room_url,
                userName: displayName,
                audioSource: false,
            })
                .then((res) => {
                    setHasJoined(true);
                })
                .catch((er) => {
                    setHasJoined(false);
                    setError(ERRORS.NOT_FOUND);
                });
        }
    }, [da, videoRef]);

    const sendRequestToChange = () => {
        da.sendAppMessage({ message: MESSAGE_PREFIX_REQUEST_CHANGE }, "*");
        setSentRequestToChange(MESSAGE_REQUEST.SENT);
    };

    const denyRequestChange = () => {
        da.sendAppMessage({ message: MESSAGE_PREFIX_REQUEST_DENY }, "*");
        setSentRequestToChange("");
    };
    const acceptRequstChange = () => {
        da.sendAppMessage({ message: MESSAGE_PREFIX_REQUEST_ACCEPT }, "*");
        setSentRequestToChange("");
        toggleTypeOfChat();
    };

    const toggleTypeOfChat = () => {
        da.updateParticipant("local", { setVideo: false });
        setShowVideo((prev) => !prev);
    };

    if (error) {
        return (
            <>
                <Heading>Rummet finns inte längre</Heading>
            </>
        );
    }

    const getIcon = () => {
        if (sentRequestToChange === MESSAGE_REQUEST.SENT) {
            return <Spinner />;
        }
        if (room.is_video) return <FaComment />;

        return <FaVideo />;
    };

    console.log(sentRequestToChange);

    return (
        <Flex
            justifyContent={"center"}
            alignItems="center"
            width={"100%"}
            height="600px"
            className="iframeclassen"
            flexDirection={"column"}
        >
            <Flex
                wrap={"wrap"}
                justifyContent="center"
                marginBottom={50}
                gap={5}
            >
                <Button
                    disabled={sentRequestToChange === MESSAGE_REQUEST.SENT}
                    backgroundColor="yellow"
                    onClick={sendRequestToChange}
                    leftIcon={getIcon()}
                >
                    {sentRequestToChange !== MESSAGE_REQUEST.SENT &&
                        (showVideo
                            ? "Byt till textchatt"
                            : "Byt till videomöte")}

                    {sentRequestToChange === MESSAGE_REQUEST.SENT && (
                        <>Skickat förfrågan</>
                    )}
                </Button>
                <Button
                    onClick={() =>
                        user !== null ? window.close() : router.push("/")
                    }
                    color="white"
                    backgroundColor={"red"}
                    leftIcon={<FaPhoneSlash />}
                >
                    Lämna möte
                </Button>
            </Flex>

            <Modal
                onClose={() => denyRequestChange()}
                isOpen={sentRequestToChange === MESSAGE_REQUEST.RECIEVED}
            >
                <ModalOverlay />
                <ModalContent alignSelf={"center"}>
                    <ModalHeader>
                        Vill du byta till{" "}
                        {showVideo ? "textchatt" : "videosamtal"}?
                        <Flex marginTop={5} gap={4}>
                            {!showVideo && (
                                <>
                                    <FaComment color="#75E89D" />
                                    <FaArrowRight /> <FaVideo color="#2d76bf" />
                                </>
                            )}
                            {showVideo && (
                                <>
                                    <FaVideo color="#2d76bf" />
                                    <FaArrowRight />{" "}
                                    <FaComment color="#75E89D" />
                                </>
                            )}
                        </Flex>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Personen du pratar föreslog att byta till{" "}
                        {showVideo ? "textchatt" : "videosamtal"}. Om du också
                        vill detta, klicka på `&quot;`Byt till{" "}
                        {showVideo ? "textchatt" : "videosamtal"}`&quot;`,
                        annars `&quot;`Stanna på här`&quot;`
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            variant={"ghost"}
                            color="red"
                            mr={3}
                            onClick={denyRequestChange}
                            leftIcon={showVideo ? <FaVideo /> : <FaComment />}
                        >
                            Stanna här
                        </Button>
                        <Button
                            onClick={acceptRequstChange}
                            colorScheme="blue"
                            leftIcon={!showVideo ? <FaVideo /> : <FaComment />}
                        >
                            Byt till {showVideo ? "textchatt" : "videosamtal"}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Modal isOpen={sentRequestToChange === MESSAGE_REQUEST.DENIED}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Förfrågan nekades</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Personen du pratar med tackade nej till
                        {showVideo ? "textchatt" : "videosamtal"}
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            onClick={() => setSentRequestToChange("")}
                            colorScheme="blue"
                        >
                            Okej!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {!showVideo && (
                <LiveChat
                    setSentRequestToChange={setSentRequestToChange}
                    sentRequestToChange={sentRequestToChange}
                    displayName={displayName}
                    dailyIframe={da}
                    toggleTypeOfChat={toggleTypeOfChat}
                    chatHistory={chatHistory}
                    setChatHistory={setChatHistory}
                    aloneInChat={aloneInChat}
                />
            )}
            <iframe
                id="boujt-iframe"
                allow="microphone; camera; autoplay; display-capture"
                style={{
                    width: "100%",
                    height: "100%",
                    display: showVideo ? "unset" : "none",
                }}
                ref={videoRef}
            ></iframe>
        </Flex>
    );
};
