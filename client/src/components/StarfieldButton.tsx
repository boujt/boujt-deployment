import { Box, Flex, Heading, Icon, useToast } from "@chakra-ui/react";
import { CSSProperties, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { under_construction_config } from "../theme";
import Starfield from "./Starfield";

const background: CSSProperties = {
	position: "absolute",
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	zIndex: -100,
};

type Props = {
	text: string;
	icon: IconType;
	iconColor: string;
	width: number;
	onClicked?: () => void;
};

// Clickable button with starfield background
const StarfieldButton: React.FC<Props> = ({
	width,
	text,
	icon,
	iconColor,
	onClicked,
}) => {
	const [mouseOver, setMouseOver] = useState(false);

	const toast = useToast();

	const onLocalClick = () => {
		// @ts-ignore
		toast(under_construction_config);
	};

	return (
		<Flex
			width={width}
			minHeight={width * 0.3}
			position={"relative"}
			justifyContent={"center"}
			borderRadius={"20px"}
			boxShadow={mouseOver ? "0px 0px 20px #FDE30F" : "none"}
			onClick={onClicked ? onClicked : onLocalClick}
			cursor={"pointer"}
			onMouseOver={() => setMouseOver(true)}
			onMouseLeave={() => setMouseOver(false)}
		>
			<Flex
				width={"85%"}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<Heading color={"white"}>{text}</Heading>
				<Icon w={12} h={12} color={iconColor} as={icon} />
			</Flex>
			<Box sx={background} borderRadius={"20px"}>
				<Starfield
					starCount={20}
					boxProps={{ borderRadius: "20px" }}
					sx={{ borderRadius: "20px" }}
				/>
			</Box>
		</Flex>
	);
};

export default StarfieldButton;
