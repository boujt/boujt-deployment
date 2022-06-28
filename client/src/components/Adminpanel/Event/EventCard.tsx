import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { INTEGER_TO_MONTH } from "../../../../utils/constants";
import { Event } from "../../../../utils/types";
import { box_shadow_dark } from "../../../theme";

type Props = {
	event: Event;
};

export default function EventCard({ event }: Props) {
	const month_integer = parseInt(event.when.substring(5, 7));
	const month_literal: string = INTEGER_TO_MONTH.get(month_integer) || "NaN";
	const date = event.when.substring(event.when.lastIndexOf("-") + 1);

	return (
		<Flex
			boxShadow={box_shadow_dark}
			padding={"20px"}
			gap={"20px"}
			width={"80%"}
			borderRadius={"20px"}
		>
			{/* Left most date text */}
			<Flex
				flexDir={"column"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Heading color={"turquoise"}>{date}</Heading>
				<Text fontWeight={"bold"}>{month_literal}</Text>
			</Flex>
			{/* Text part */}
			<Flex flexDir={"column"} justifyContent={"center"}>
				<Text fontWeight={"bold"}>{event.title}</Text>
				<Text>{event.text}</Text>
			</Flex>
		</Flex>
	);
}
