import { Button, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { MovieData } from "../../utils/types";
import ResponsiveVideoPlayer from "./ResponsiveVideoPlayer";
import Video from "./Video";

type Props = {
	video: MovieData;
	backgroundColor: string;
};

const MyCustomMarkDown: React.FC<{ children: string }> = ({ children }) => {
	return (
		<ReactMarkdown
			components={{
				p: ({ node, ...props }) => <Text {...props} color={"white"} />,
			}}
		>
			{children}
		</ReactMarkdown>
	);
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
				<Flex
					flexDir={"column"}
					justifyContent={"flex-start"}
					gap={"25px"}
					flex={1}
				>
					{!showMore && (
						<>
							<MyCustomMarkDown>
								{video.text.substring(0, 200) + "..."}
							</MyCustomMarkDown>
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
					{showMore && (
						<MyCustomMarkDown>{video.text}</MyCustomMarkDown>
					)}
				</Flex>
				<Flex flexDir={"column"} flex={1} gap={"25px"}>
					<Flex
						flexDir={"column"}
						justifyContent={"center"}
						flex={1}
						maxH={"220px"}
					>
						<ResponsiveVideoPlayer url={video.video_link} />
					</Flex>
					<Flex
						flexDir={"column"}
						justifyContent={"center"}
						flex={1}
						maxH={"220px"}
					>
						<ResponsiveVideoPlayer
							url={video.video_link_sign_language}
						/>
					</Flex>
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
