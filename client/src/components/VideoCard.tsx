import { Button, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { MovieData } from "../../utils/types";
import Video from "./Video";

type Props = {
	video: MovieData;
	backgroundColor: string;
};

const VideoCard: React.FC<Props> = ({ video, backgroundColor }) => {
	const doBreak = useMediaQuery("(max-width: 750px)");
	const [showMore, setShowMore] = useState(false);

	return (
		<Flex
			flexDir={"column"}
			position={"relative"}
			backgroundColor={"red"}
			borderRadius={"20px"}
			padding={"25px"}
			gap={"25px"}
			flexWrap={"wrap"}
			bgColor={backgroundColor}
		>
			<Heading color={"white"} textAlign={"center"}>
				{video.title}
			</Heading>
			{/* MAIN CONTENT */}
			<Flex gap={"25px"} flexDir={doBreak[0] ? "column" : "row"}>
				{/* LEFT SIDE */}
				<Flex flexDir={"column"} justifyContent={"center"} gap={"25px"}>
					{!showMore && (
						<>
							<ReactMarkdown>
								{video.text.substring(0, 200) + "..."}
							</ReactMarkdown>
							<Button
								onClick={() => setShowMore(true)}
								width={"40%"}
								variant={"information"}
								alignSelf={"center"}
							>
								Visa mer
							</Button>
						</>
					)}
					{showMore && <ReactMarkdown>{video.text}</ReactMarkdown>}
				</Flex>
				<Flex justifyContent={"center"}>
					<Video height={200} width={400} url={video.video_link} />
				</Flex>
			</Flex>
			{showMore && (
				<Button
					onClick={() => setShowMore(false)}
					width={"20%"}
					variant={"information"}
					alignSelf={"center"}
				>
					Visa mindre
				</Button>
			)}
		</Flex>
	);
};

export default VideoCard;
