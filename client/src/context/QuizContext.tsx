import React, {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useEffect,
	useState,
} from "react";
import { useData } from "../../utils/fetchData";
import { Question, QuizData } from "../../utils/types";

type QuizMeta = {
	title: string;
	description: string;
	introduction_video_url?: string;
	solution_video_url?: string;
};

// Type for data which our context sends down the DOM tree
type QuizContextType = {
	quizMeta: QuizMeta;
	questions: Question[];
	setupQuiz: (type: "justice" | "star") => void;
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
	questions: [],
	quizMeta: { description: "", title: "" },
	setupQuiz: (type: "justice" | "star") => {},
	quizData: { questions: [], justice_questions: [] },
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

	const [quizMeta, setQuizMeta] = useState<QuizMeta>({
		title: "",
		description: "",
	});

	useEffect(() => {
		if (!error) return;

		// We have an error!
		console.log("QUIZ CONTEXT ERROR: ", error);
	}, [error]);

	const [questions, setQuestions] = useState<Question[]>([]);

	const resetQuizForUser = () => {
		setAnswersMap(new Map<string, string>());
		setCurrentQuestionIdx(-1);
		setDoneWithQuiz(false);
	};

	const setupQuiz = (type: "justice" | "star") => {
		if (type == "star") {
			setQuestions(data!.questions);
			setQuizMeta({
				title: "Stjärnquizet",
				description:
					"Vill du testa hur mycket du vet om BOUJT? Genomför vårt roliga stjärnquiz tillsammans med syssnaren Madeleine!",
				introduction_video_url: "https://youtu.be/Z3plzp0fuQM",
				solution_video_url: "https://youtu.be/Ow4Dt2XRWEc",
			});
		} else {
			// justice
			setQuestions(data!.justice_questions);
			setQuizMeta({
				title: "Rättighetsquizet",
				description:
					"Testa vårat rättighetsquiz och ta reda på hur mycket du kan om dina rättigheter!",
				solution_video_url: "https://youtu.be/wJ64kp65m0c",
			});
		}
	};

	return (
		<QuizContext.Provider
			value={{
				quizMeta,
				questions,
				setupQuiz,
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
