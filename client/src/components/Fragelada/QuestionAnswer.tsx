import {
	Badge,
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Icon,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Fragelada } from "../../../utils/types";
import { css_gradient } from "../../theme";
interface QuestionAnswerProps {
	fragelada: Fragelada;
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ fragelada }) => {
	const [showAnswer, setShowAnswer] = useState<boolean>(false);

	return (
		<Flex
			borderRadius={12}
			padding="1.5rem"
			background={css_gradient}
			flexDirection={"column"}
			justifyContent="center"
			alignItems={"center"}
			gap={5}
		>
			<Flex gap={"2px"} width={"100%"} justifyContent={"space-between"}>
				{fragelada.categories.map((cat, idx) => {
					return (
						<Badge
							color="white"
							variant={"outline"}
							sx={{ boxShadow: "none" }}
							key={cat}
						>
							<Text fontStyle={"italic"}>
								#{cat}
								{idx < fragelada.categories.length - 1 && ","}
							</Text>
						</Badge>
					);
				})}
				<Text color="white" fontStyle={"italic"}>
					{fragelada.published_at.slice(0, 10)}
				</Text>
			</Flex>
			<Flex>
				<Text fontSize={20} color="white">
					{fragelada.question}
				</Text>
			</Flex>
			{showAnswer && (
				<Flex
					flexDirection={"column"}
					borderRadius={8}
					width="100%"
					padding="1rem"
					backgroundColor={"white"}
					gap={4}
				>
					<ReactMarkdown>{fragelada.answer}</ReactMarkdown>
				</Flex>
			)}
			<Button
				width={"50%"}
				mt={4}
				backgroundColor="yellow"
				color="black"
				variant={"default"}
				onClick={() => setShowAnswer((prev) => !prev)}
			>
				{showAnswer ? "Dölj svar" : "Visa svar"}
			</Button>
		</Flex>
	);
};

export default QuestionAnswer;
