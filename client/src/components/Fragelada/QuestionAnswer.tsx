import {
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
import { css_gradient } from "../../theme";
interface QuestionAnswerProps {
  question: string;
  answer: string;
}

const QuestionAnswer: React.FC<QuestionAnswerProps> = ({
  answer,
  question,
}) => {
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
      <Flex>
        <Text fontSize={20} color="white">
          {question}
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
          <ReactMarkdown>{answer}</ReactMarkdown>
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
