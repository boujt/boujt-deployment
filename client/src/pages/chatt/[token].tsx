import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    AspectRatio,
    Box,
    Center,
    Flex,
    Heading,
    Icon,
    Select,
    Text,
} from "@chakra-ui/react";
import DailyIframe from "@daily-co/daily-js";
import { useDaily } from "@daily-co/daily-react-hooks";
import axios from "axios";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaChrome, FaEdge, FaFirefoxBrowser } from "react-icons/fa";
import { ERRORS } from "../../../utils/constants";
import { ChatRoom } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import BoujtTemplate from "../../components/BoujtTemplate";
import { ChatViewAdmin } from "../../components/ChatUI/ChatViewAdmin";
import { ChatViewUser } from "../../components/ChatUI/ChatViewUser";

const Chatt: NextPage = () => {
    const router = useRouter();
    const { token } = router.query;

    const [activeRoom, setActiveRoom] = useState<ChatRoom | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    const { strapi, user } = useStrapi();

    const daily = useDaily();
    console.log(daily);

    useEffect(() => {
        if (!token) return;
        setError("");
        axios
            .get(`/api/chatroom/${token}`)
            .then((res) => {
                const room: ChatRoom = {
                    room_url: res.data.room.attributes.room_url,
                    is_video: res.data.room.attributes.is_video,
                    token: res.data.room.attributes.token,
                    syssnare: res.data.room.attributes.syssnare.data,
                };
                setActiveRoom(room);
                setLoading(false);
            })
            .catch((er) => {
                console.log(er);
                setLoading(false);
                setError(ERRORS.NOT_FOUND);
            });
    }, [token]);

    console.log(activeRoom);
    if (loading) {
        return <Heading>Laddar</Heading>;
    }

    if (!daily) return <p>hej</p>;

    if (error === ERRORS.NOT_FOUND) {
        return <Heading>Kunde inte hitta rummet</Heading>;
    }

    return (
        <>
            {user && activeRoom && (
                <BoujtTemplate>
                    <Head>
                        <title>Chatt-rummet</title>
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <ChatViewAdmin room={activeRoom} />
                </BoujtTemplate>
            )}
            {!user && activeRoom && (
                <BoujtTemplate>
                    <Head>
                        <title>Chatt-rummet</title>
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <ChatViewUser room={activeRoom} />
                </BoujtTemplate>
            )}
        </>
    );
};

export default Chatt;
