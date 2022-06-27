import React, {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { useData } from "../../utils/fetchData";
import { QuizData } from "../../utils/types";

// Type for data which our context sends down the DOM tree
type QuizContextType = {
	quizData: QuizData | undefined;
	currentQuestionIdx: number;
	setCurrentQuestionIdx: Dispatch<SetStateAction<number>>;
	answersMap: Map<string, string>;
	setAnswersMap: Dispatch<SetStateAction<Map<string, string>>>;
	doneWithQuiz: boolean;
	setDoneWithQuiz: Dispatch<SetStateAction<boolean>>;
	resetQuizForUser: () => void;
};

const QuizContext = createContext<QuizContextType>({
	quizData: { questions: [] },
	currentQuestionIdx: -1,
	setCurrentQuestionIdx: () => {},
	answersMap: new Map<string, string>(),
	setAnswersMap: () => {},
	doneWithQuiz: false,
	setDoneWithQuiz: () => {},
	resetQuizForUser: () => {},
});

const QuizProvider: React.FC<PropsWithChildren> = (props) => {
	const { data, error } = useData<QuizData>("quiz");
	const [currentQuestionIdx, setCurrentQuestionIdx] = useState(-1);
	// question.prompt -> user answer
	const [answersMap, setAnswersMap] = useState(new Map<string, string>());
	const [doneWithQuiz, setDoneWithQuiz] = useState(false);

	useEffect(() => {
		if (!error) return;

		// We have an error!
		console.log("QUIZ CONTEXT ERROR: ", error);
	}, [error]);

	const resetQuizForUser = () => {
		setAnswersMap(new Map<string, string>());
		setCurrentQuestionIdx(-1);
		setDoneWithQuiz(false);
	};

	return (
		<QuizContext.Provider
			value={{
				quizData: data,
				currentQuestionIdx,
				setCurrentQuestionIdx,
				answersMap,
				setAnswersMap,
				doneWithQuiz,
				setDoneWithQuiz,
				resetQuizForUser,
			}}
		>
			{props.children}
		</QuizContext.Provider>
	);
};

export { QuizProvider, QuizContext };
