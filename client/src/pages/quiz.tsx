import { Box, Button, Flex, Heading, Text, useToast } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useContext, useEffect } from "react";
import BoujtTemplate from "../components/BoujtTemplate";
import QuizResults from "../components/QuizResults";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import ShowRelevantQuestion from "../components/ShowRelevantQuestion";
import { QuizContext } from "../context/QuizContext";
import { chakra_gradient } from "../theme";

const Quiz: NextPage = () => {
	const {
		currentQuestionIdx,
		setCurrentQuestionIdx,
		quizData,
		doneWithQuiz,
	} = useContext(QuizContext);

	const toast = useToast();

	const onStartQuiz = () => {
		// Do we have data?
		if (!quizData) {
			toast({
				title: "Quizet kunde inte laddas! Försök igen senare",
				status: "info",
				duration: 3000,
				position: "top",
			});
			return;
		}
		setCurrentQuestionIdx(0);
	};

	return (
		<BoujtTemplate gap={50}>
			<Head>
				<title>Quiz</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			{/* Have we started the quiz? */}
			{currentQuestionIdx == -1 ? (
				<>
					<Flex
						flexDir={"column"}
						alignItems={"center"}
						gap={"25px"}
						flex={1}
					>
						<Heading bgGradient={chakra_gradient} bgClip={"text"}>
							Stjärnquizet
						</Heading>
						<Text
							fontSize={"xl"}
							fontWeight={"bold"}
							textAlign={"justify"}
						>
							Vill du testa hur mycket du vet om BOUJT? Genomför
							vårt roliga stjärnquiz tillsammans med syssnaren
							Madeleine!
						</Text>
						<Button
							width={"150px"}
							variant={"default"}
							onClick={onStartQuiz}
						>
							Starta quizet!
						</Button>
					</Flex>
					<Box>
						<ResponsiveVideoPlayer
							url={"https://youtu.be/Z3plzp0fuQM"}
						/>
					</Box>
				</>
			) : (
				<>{doneWithQuiz ? <QuizResults /> : <ShowRelevantQuestion />}</>
			)}
			<Flex flex={1} />
		</BoujtTemplate>
	);
};

export default Quiz;
