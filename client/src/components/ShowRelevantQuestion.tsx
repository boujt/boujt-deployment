import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { CSSProperties, useContext, useEffect, useState } from "react";
import { Option } from "../../utils/types";
import { QuizContext } from "../context/QuizContext";
import { box_shadow_dark, box_shadow_light, chakra_gradient } from "../theme";
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

const selected_shadow = "0 0 25px #d3d3d3";

const ShowRelevantQuestion: React.FC = () => {
	const {
		currentQuestionIdx,
		quizData,
		setAnswersMap,
		answersMap,
		setCurrentQuestionIdx,
		setDoneWithQuiz,
	} = useContext(QuizContext);

	const [pickIdx, setPickIdx] = useState(-1);

	const currentQuestion = quizData!.questions[currentQuestionIdx];

	const onAnswer = () => {
		// Save the option to the user answers
		const pickedOption = currentQuestion!.options[pickIdx].prompt;
		const copyMap = new Map(answersMap);
		copyMap.set(currentQuestion!.prompt, pickedOption);
		setAnswersMap(copyMap);

		// Advance question
		setCurrentQuestionIdx(currentQuestionIdx + 1);
		setPickIdx(-1);
	};

	useEffect(() => {
		// Are we on the last question?
		if (currentQuestionIdx == quizData?.questions.length) {
			setDoneWithQuiz(true);
		}
	}, [currentQuestionIdx]);

	return (
		<Flex pt={"100px"} gap={"20px"}>
			{/* LEFT */}
			<Flex flexDir={"column"} gap={"10px"} flex={1}>
				<Heading bgGradient={chakra_gradient} bgClip={"text"}>
					Fråga {`${currentQuestionIdx + 1}`}
				</Heading>
				<Text fontSize={"xl"} fontWeight={"bold"}>
					{currentQuestion?.prompt}
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
				{currentQuestion?.options.map((opt, idx) => {
					return (
						<Button
							onClick={() => setPickIdx(idx)}
							key={idx}
							variant="default"
							bgColor={pickIdx == idx ? "white" : "orange"}
							boxShadow={
								pickIdx == idx ? selected_shadow : "none"
							}
							width="90%"
						>
							{opt.prompt}
						</Button>
					);
				})}
				<Button
					onClick={onAnswer}
					my={"auto"}
					width={"30%"}
					variant={"information"}
				>
					Nästa {">"}
				</Button>
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

export default ShowRelevantQuestion;
