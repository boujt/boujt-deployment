import {
	Box,
	Button,
	Flex,
	Heading,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { CSSProperties, useContext } from "react";
import { CgRedo } from "react-icons/cg";
import { FaCheck } from "react-icons/fa";
import { Question } from "../../utils/types";
import { QuizContext } from "../context/QuizContext";
import { box_shadow_dark, chakra_gradient } from "../theme";
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
	const { quizData, answersMap, resetQuizForUser } = useContext(QuizContext);
	const [breakFlex] = useMediaQuery("(max-width: 900px)");
	const router = useRouter();

	const isAnswerCorrect = (question: Question): boolean => {
		let isCorrect = false;
		const correctAnswers = question.options.filter((opt) => opt.is_correct);
		correctAnswers.forEach((correctAnswer) => {
			// Get the user answer for this prompt
			if (answersMap.get(question.prompt) == correctAnswer.prompt) {
				isCorrect = true;
			}
		});
		return isCorrect;
	};

	let numberOfCorrectAnswers = 0;
	quizData!.questions.forEach((question) => {
		numberOfCorrectAnswers += isAnswerCorrect(question) ? 1 : 0;
	});

	const onBack = () => {
		router.push("/");
	};

	const onTryAgain = () => {
		// Reset the quiz then re-route to /quiz?
		resetQuizForUser();
	};

	const getMainContent = () => {
		return (
			<Flex
				pt={"100px"}
				gap={"20px"}
				flexDir={breakFlex ? "column" : "row"}
			>
				{/* LEFT */}
				<Flex flexDir={"column"} gap={"10px"} flex={1}>
					<Heading bgGradient={chakra_gradient} bgClip={"text"}>
						Poäng
					</Heading>
					<Text fontSize={"xl"} fontWeight={"bold"}>
						Du fick {numberOfCorrectAnswers} av{" "}
						{quizData!.questions.length} poäng
					</Text>
					<Text>
						Tack för att du gjorde testet och bra jobbat! Glöm inte
						att vi syssnar, peppar och stöttar. Välkommen att
						chatta, mejla eller ställa en fråga i frågelådan! Kramar
						från BOUJT!
					</Text>
					{/* TODO: CORRECT VIDEO */}
					<ResponsiveVideoPlayer url="https://www.youtube.com/watch?v=lpcpsCY4Mco" />
				</Flex>
				{/* RIGHT */}
				<Flex
					flex={1}
					position={"relative"}
					flexDir={"column"}
					alignItems={"flex-start"}
					gap={"10px"}
					py={"30px"}
					px={"30px"}
				>
					<Heading alignSelf={"center"} color={"white"} mb={"10px"}>
						Dina svar
					</Heading>
					{/* Map over each question and show answer */}
					{quizData?.questions.map((question, idx) => {
						return (
							<Flex justifyContent={"center"} key={idx}>
								<Flex alignSelf={"center"}>
									{isAnswerCorrect(question) ? (
										<FaCheck
											size={"32px"}
											color={"lightgreen"}
										/>
									) : (
										<CgRedo size={"32px"} color={"red"} />
									)}
								</Flex>
								<Flex flexDir={"column"} pl={"20px"}>
									<Text
										fontSize={"xl"}
										color={"yellow"}
										fontWeight={"bold"}
									>
										{question.prompt}
									</Text>
									<Text fontSize={"xl"} color={"white"}>
										{answersMap.get(question.prompt)!}
									</Text>
								</Flex>
							</Flex>
						);
					})}
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

	const getBottomButtons = () => {
		return (
			<Flex width={"100%"} pt={"25px"}>
				<Button
					onClick={onBack}
					width={"150px"}
					boxShadow={box_shadow_dark}
					variant={"information"}
				>
					Tillbaka
				</Button>
				<Flex flex={1} />
				<Button
					onClick={onTryAgain}
					width={"150px"}
					variant={"default"}
				>
					Prova igen!
				</Button>
			</Flex>
		);
	};

	return (
		<Flex flexDir={"column"}>
			{getMainContent()}
			{getBottomButtons()}
		</Flex>
	);
};

export default QuizResults;
