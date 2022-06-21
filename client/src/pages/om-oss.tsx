import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useData } from "../../utils/fetchData";
import { AboutUsData, Faq, Worker } from "../../utils/types";
import BoujtTemplate from "../components/BoujtTemplate";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import Starfield from "../components/Starfield";
import Video from "../components/Video";
import WorkerCard from "../components/WorkerCard";
import { box_shadow_light, chakra_gradient } from "../theme";

const background: CSSProperties = {
	position: "absolute",
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	borderRadius: 8,
	zIndex: -100,
};

const QuestionAndAnswer: React.FC<{ qna: Faq; idx: number }> = ({
	qna,
	idx,
}) => {
	return (
		<Box>
			<Text fontWeight={"bold"}>
				{idx + 1}. {qna.question}
			</Text>
			<Text>{qna.answer}</Text>
		</Box>
	);
};

const OmOss: NextPage = () => {
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

	const videoCardContainer = useRef<HTMLDivElement>(null);
	const workersContainer = useRef<HTMLDivElement>(null);

	const { data, error } = useData<AboutUsData>("om-oss");

	useEffect(() => {
		if (!videoCardContainer.current || !workersContainer.current) return;
		// Match width for workers and video card
		workersContainer.current.setAttribute(
			"width",
			videoCardContainer.current.clientWidth.toString() + "px"
		);
	}, [videoCardContainer, workersContainer]);

	const [shouldBreak] = useMediaQuery("(min-width: 820px)");

	return (
		<BoujtTemplate gap={100}>
			<Heading
				textAlign={"center"}
				bgGradient={chakra_gradient}
				bgClip={"text"}
			>
				Om oss
			</Heading>
			{/* Card with video and text */}
			<Flex
				color={"white"}
				position={"relative"}
				flexDirection={shouldBreak ? "row" : "column"}
				padding={"40px"}
				gap={"20px"}
				wrap={"wrap"}
				maxW={"880px"}
				ref={videoCardContainer}
			>
				<Flex flexDir={"column"} flex={3}>
					<Heading color="white" noOfLines={1} fontSize={"2xl"}>
						Vilka är vi och vad gör vi?
					</Heading>
					<Text>
						Välkommen till BOUJT - Barn- och Ungdomsjour på
						Teckenspråk! Här får du hjälp och stöd på svenskt
						teckenspråk efter skoltid. Vi erbjuder bland annat
						stödsamtal med döva och hörselskadade syssnare samt
						information om kroppen, tankar och känslor. Vi har även
						en frågelåda där du kan ställa frågor.
						<br />
						<br />
						Du behöver aldrig oroa dig för att andra ska få veta att
						du kontaktat oss. Vi berättar inte för någon. Hos oss
						kan du vara helt anonym. I videochatten kan du välja
						vilken volontär du vill prata med, och du kan textchatta
						istället om du inte vill att volontären ska se dig. Du
						kan prata om vad du vill! Är du glad eller ledsen? Vill
						du berätta om något kul som hänt eller något som känns
						tungt och jobbigt? Har du kanske en fundering? Det
						spelar ingen roll. Läs mer om anonymitet här!
					</Text>
				</Flex>
				<Flex flex={2} flexDir={"column"} minWidth="40%">
					<ResponsiveVideoPlayer url="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com" />
					<Heading
						color={"yellow"}
						textAlign={"center"}
						my={"auto"}
						fontSize={"2xl"}
					>
						Vi tror på dig och tar det du säger på allvar.
					</Heading>
				</Flex>
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
			<Box>
				<Heading pb={"30px"} color="blackish" textAlign={"center"}>
					Vi som jobbar här
				</Heading>
				<Flex
					boxShadow={box_shadow_light}
					borderRadius={"20px"}
					border={"none"}
					justifyContent={"space-evenly"}
					alignItems={"center"}
					py={"40px"}
					ref={workersContainer}
					width={"100%"}
					wrap={"wrap"}
				>
					{data &&
						data.workers.map((worker, idx) => (
							<WorkerCard
								key={idx}
								name={worker.name}
								role={worker.role}
								email={worker.email}
							/>
						))}
				</Flex>
			</Box>
			{/* Card with video and text */}
			<Flex
				color={"white"}
				position={"relative"}
				flexDirection={shouldBreak ? "row" : "column"}
				padding={"40px"}
				gap={"30px"}
				maxW={"880px"}
				ref={videoCardContainer}
			>
				<Flex flexDir={"column"} justifyContent={"center"} gap={"40px"}>
					<Heading color="white" fontSize={"2xl"}>
						Vad betyder egentligen syssna?
					</Heading>
					<Text>
						Det är ett ord och tecken som betyder att man lyssnar
						fast med synen. Därför tecknas det som “lyssna” men med
						handen ovanför ögonen istället. Det är därför våra
						volontärer kallas för “syssnare”.
					</Text>
				</Flex>
				<Flex flex={2} minWidth="40%" flexDir="column">
					<Text
						color={"white"}
						textAlign={"center"}
						my={"auto"}
						fontSize={"2xl"}
					>
						Se tecknet här!
					</Text>
					<ResponsiveVideoPlayer url="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com" />
				</Flex>
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
			{/* VANLIGA FRÅGOR SECTION */}
			<Box>
				<Heading pb={"30px"} color="blackish" textAlign={"center"}>
					Vanliga frågor
				</Heading>
				<Flex
					gap={50}
					boxShadow={box_shadow_light}
					borderRadius={"20px"}
					border={"none"}
					px={50}
					py={25}
					flexDir={isSmallerThan600 ? "column" : "row"}
					// wrap={'wrap'}
				>
					{/* Split question into two columns */}
					<Flex flexDir={"column"}>
						{data &&
							data.faq.map((faq, idx) => {
								return (
									<>
										<QuestionAndAnswer
											qna={faq}
											idx={idx}
											key={idx}
										/>
									</>
								);
							})}
					</Flex>
				</Flex>
			</Box>
		</BoujtTemplate>
	);
};

export default OmOss;
