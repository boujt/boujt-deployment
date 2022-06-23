import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { chakra_gradient } from "../theme";
import ResponsiveVideoPlayer from "./ResponsiveVideoPlayer";
import Starfield from "./Starfield";

const background: CSSProperties = {
	position: "absolute",
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	borderRadius: 8,
	zIndex: -100,
};

const QuizResults: React.FC = () => {
	return (
		<Flex pt={"100px"} gap={"20px"}>
			{/* LEFT */}
			<Flex flexDir={"column"} gap={"10px"} flex={1}>
				<Heading bgGradient={chakra_gradient} bgClip={"text"}>
					Poäng
				</Heading>
				<Text fontSize={"xl"} fontWeight={"bold"}>
					Du fick x av y poäng
				</Text>
				<Text>
					Tack för att du gjorde testet och bra jobbat! Glöm inte att
					vi syssnar, peppar och stöttar. Välkommen att chatta, mejla
					eller ställa en fråga i frågelådan! Kramar från BOUJT!
				</Text>
				<ResponsiveVideoPlayer url="https://www.youtube.com/watch?v=lpcpsCY4Mco" />
			</Flex>
			{/* RIGHT */}
			<Flex
				flex={1}
				position={"relative"}
				flexDir={"column"}
				alignItems={"center"}
				gap={"10px"}
				py={"30px"}
			>
				<Box sx={background}>
					<Starfield
						boxProps={{
							borderRadius: "20px",
							overflow: "hidden",
						}}
						sx={{ borderRadius: "20px" }}
					/>
				</Box>
			</Flex>
		</Flex>
	);
};

export default QuizResults;
