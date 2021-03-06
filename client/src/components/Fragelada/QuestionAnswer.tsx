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
            <Flex
                gap={"2px"}
                width={"100%"}
                flexWrap="wrap"
                justifyContent={"flex-start"}
            >
                {fragelada.categories.map((cat, idx) => {
                    return (
                        <Badge
                            color="white"
                            variant={"solid"}
                            sx={{ boxShadow: "none" }}
                            backgroundColor="#0088D1"
                            key={cat}
                        >
                            <Text>#{cat}</Text>
                        </Badge>
                    );
                })}
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
                {showAnswer ? "D??lj svar" : "Visa svar"}
            </Button>
        </Flex>
    );
};

export default QuestionAnswer;
