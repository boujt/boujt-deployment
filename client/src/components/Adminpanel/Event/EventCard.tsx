import {
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
    FaCalendarAlt,
    FaClock,
    FaEdit,
    FaEllipsisV,
    FaTrash,
} from "react-icons/fa";
import { INTEGER_TO_MONTH } from "../../../../utils/constants";
import { Event } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";

import { box_shadow_dark } from "../../../theme";

type Props = {
    event: Event;
    onClick: Function;
    onEdit: Function;
    fetchEvents: Function;
};

export default function EventCard({
    event,
    onClick,
    onEdit,
    fetchEvents,
}: Props) {
    const month_integer = parseInt(event.when.substring(5, 7));
    const month_literal: string = INTEGER_TO_MONTH.get(month_integer) || "NaN";
    const date = event.when.substring(event.when.lastIndexOf("-") + 1);

    const { user, strapi } = useStrapi();

    const deleteEvent = async () => {
        strapi
            ?.delete("events", event.id)
            .then((res) => {
                fetchEvents();
            })
            .catch((er) => {
                console.log(er);
            });
    };

    return (
        <Flex
            cursor="pointer"
            bg="white"
            boxShadow={box_shadow_dark}
            padding={"20px"}
            gap={"20px"}
            width={"100%"}
            borderRadius={"20px"}
        >
            {/* Left most date text */}
            <Flex width={"100%"} onClick={() => onClick()}>
                <Flex
                    flexDir={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width="15%"
                >
                    <Heading color={"turquoise"}>{date}</Heading>
                    <Text fontWeight={"bold"}>{month_literal}</Text>
                </Flex>
                {/* Text part */}
                <Flex width="50%" flexDir={"column"} justifyContent={"center"}>
                    <Text fontWeight={"bold"}>{event.title}</Text>
                    <Text>{event.text}</Text>
                </Flex>
                <Flex
                    flexDirection={"column"}
                    width="35%"
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
                    </Flex>
                </Flex>
            </Flex>

            {event.syssnare.id === user?.id && (
                <Menu>
                    <MenuButton as={Button}>
                        <FaEllipsisV />
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => deleteEvent()}
                            icon={<FaTrash color="red" />}
                        >
                            Ta bort
                        </MenuItem>
                        <MenuItem onClick={() => onEdit()} icon={<FaEdit />}>
                            Redigera
                        </MenuItem>
                        {/* <MenuItem onClick={() => onSelectEdit(event)} icon={<FaEdit />}>Redigera</MenuItem> */}
                    </MenuList>
                </Menu>
            )}
        </Flex>
    );
}
