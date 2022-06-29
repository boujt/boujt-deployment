import {
    Flex,
    Spinner,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import { LOADING_STATE } from "../../../utils/constants";
import { doGetActiveRooms } from "../../../utils/service";
import { ChatRoom } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import { ChatRequest } from "./ChatRequest";

interface ListChatRequestsProps {
    setActiveRoom: Function;
    disabled: boolean;
}

export const ListChatRequests: React.FC<ListChatRequestsProps> = ({
    setActiveRoom,
    disabled,
}) => {
    const { strapi, user } = useStrapi();
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState<string>(LOADING_STATE.FETCHING);
    const fetchRequests = () => {
        return strapi?.find("request-chats", {
            populate: {
                syssnare: {
                    fields: ["id"],
                },
            },
        });
    };

    useEffect(() => {
        fetchData();

        const myInterval = setInterval(async function () {
            fetchData();
        }, 5000);
        return () => clearInterval(myInterval);
    }, []);

    const fetchData = () => {
        if (!strapi) return;
        Promise.all([doGetActiveRooms(strapi, user.id), fetchRequests()]).then(
            (values) => {
                console.log(values);
                if (values[0]) {
                    const aR: ChatRoom = {
                        syssnare: user.id,
                        room_url: values[0].attributes.room_url,
                        token: values[0].attributes.token,
                        is_video: values[0].is_video,
                    };
                    setActiveRoom(aR);
                } else {
                    setActiveRoom(null);
                }
                if (values[1]) {
                    console.log(values[1]);
                    setRequests(
                        values[1].data.filter(
                            (a) => a.attributes.syssnare.data.id === user.id
                        )
                    );
                    setLoading(LOADING_STATE.NONE);
                } else {
                    setRequests([]);
                }
            }
        );
    };

    if (loading === LOADING_STATE.FETCHING) {
        return <Spinner />;
    }
    if (loading === LOADING_STATE.NONE) {
        return (
            <Flex
                flexDirection={"column"}
                borderRadius={8}
                boxShadow="0px 0px 120px -45px #0000006e"
                height={"100%"}
            >
                <TableContainer height={"100%"}>
                    <Table variant="striped" colorScheme="linkedin">
                        <Thead>
                            <Tr>
                                <Th textAlign={"center"}>Köplats</Th>
                                <Th textAlign={"center"}>Text / Video</Th>
                                <Th textAlign={"center"}>Väntetid</Th>
                                <Th textAlign={"center"}>Acceptera / Neka</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {requests.map((req, idx) => {
                                const miliSeconds =
                                    Date.now() -
                                    new Date(req.attributes.createdAt);
                                return (
                                    <ChatRequest
                                        queue={idx + 1}
                                        disabled={disabled}
                                        key={req.attributes.token}
                                        is_video={req.attributes.is_video}
                                        token={req.attributes.token}
                                        time={miliSeconds}
                                        request_id={req.id}
                                        onCreateRoom={(cr: ChatRoom) =>
                                            setActiveRoom(cr)
                                        }
                                    />
                                );
                            })}
                        </Tbody>
                    </Table>
                </TableContainer>
                <Flex
                    justifyContent={"center"}
                    alignItems="center"
                    flexDirection="column"
                    paddingBottom={0}
                    height="70%"
                >
                    <PuffLoader
                        color="#00CCEE"
                        size={"2rem"}
                        speedMultiplier={0.6}
                    />
                    <Text fontSize={"0.75rem"}>
                        Letar efter nya förfrågningar
                    </Text>
                </Flex>
            </Flex>
        );
    }
};
