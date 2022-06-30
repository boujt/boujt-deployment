import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import React from "react";
import {
    FaCalendar,
    FaCalendarAlt,
    FaClock,
    FaEdit,
    FaEllipsisV,
    FaTrash,
    FaUser,
} from "react-icons/fa";
import { INTEGER_TO_MONTH } from "../../../../utils/constants";
import { Event } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";

import { box_shadow_dark } from "../../../theme";
import FilePreview from "../FilePreview";

type Props = {
    event: Event;
};

export default function EventModal({ event }: Props) {
    const month_integer = parseInt(event.when.substring(5, 7));
    const month_literal: string = INTEGER_TO_MONTH.get(month_integer) || "NaN";
    const date = event.when.substring(event.when.lastIndexOf("-") + 1);
    const { user } = useStrapi();
    console.log(event);
    return (
        <Flex backgroundColor={"white"} padding={6} overflowY="scroll">
            <Flex
                flexDirection={"column"}
                justifyContent="space-between"
                width="100%"
            >
                <Flex alignItems={"center"} gap={10}>
                    <Box
                        display="inline-block"
                        padding={"1rem 2rem"}
                        boxShadow="0px 0px 10px -5px"
                        borderRadius={16}
                    >
                        <Heading
                            fontSize={60}
                            color={"turquoise"}
                            marginBottom="0"
                        >
                            {date}
                        </Heading>
                        <Text
                            marginTop={-2}
                            fontSize={30}
                            fontWeight={"bolder"}
                        >
                            {month_literal.toLocaleUpperCase()}
                        </Text>
                    </Box>
                    <Box>
                        <Text fontSize={30} fontWeight={800}>
                            {event.title}
                        </Text>
                        <Flex
                            flexDirection={"column"}
                            width="100%"
                            justifyContent={"center"}
                        >
                            <Flex alignItems={"center"} gap={2}>
                                <FaCalendarAlt />
                                <Text>{event.when}</Text>
                            </Flex>
                            <Flex alignItems={"center"} gap={2}>
                                <FaClock />
                                <Text>
                                    {event.whole_day
                                        ? "Hela dagen"
                                        : `${event.start?.slice(
                                              0,
                                              5
                                          )} - ${event.end?.slice(0, 5)}`}
                                </Text>
                                <Avatar
                                    size={"sm"}
                                    name={event.syssnare.name}
                                    src={event.syssnare.img}
                                />
                                <Text>{event.syssnare.name}</Text>
                            </Flex>
                        </Flex>
                    </Box>
                </Flex>
                {event.files && <FilePreview file={event.files[0]} />}

                <Text my={10}>{event.text}</Text>
                <Flex flexDirection={"column"}></Flex>
            </Flex>
        </Flex>
    );
}
