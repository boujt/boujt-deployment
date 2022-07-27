import {
    Box,
    Button,
    Flex,
    FormControl,
    Grid,
    GridItem,
    Heading,
    Input,
    Select,
    Text,
    Textarea,
    useMediaQuery,
    useToast,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { CSSProperties, useState } from "react";
import { useData } from "../../utils/fetchData";
import { doSubmitQuestionToFragelada } from "../../utils/service";
import { Fragelada } from "../../utils/types";
import BoujtTemplate from "../components/BoujtTemplate";
import QuestionAnswer from "../components/Fragelada/QuestionAnswer";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";

const Fragelada: NextPage = () => {
    const [message, setMessage] = useState<string>("");
    const [submitState, setSubmitState] = useState<string>("none");

    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [searchString, setSearchString] = useState<string>("");

    const [shouldBreak] = useMediaQuery("(min-width: 700px)");
    const questionsAndAnswers = useData<Fragelada[]>("fragelada");

    console.log(questionsAndAnswers.data?.length);

    const toast = useToast();

    const getCategories = () => {
        if (!questionsAndAnswers.data) return [];
        const categories = new Set<string>();
        questionsAndAnswers.data.forEach((qa) => {
            qa.categories.forEach((c) => {
                categories.add(c);
            });
        });
        return Array.from(categories);
    };

    const submitQuestion = () => {
        if (message.trim() === "") {
            setSubmitState("error");
            return;
        }
        setSubmitState("submitting");
        doSubmitQuestionToFragelada(message)
            .then((res) => {
                setSubmitState("done");
                // Send toast to user, then clear input
                toast({
                    title: "Din fråga är skickad",
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                });
                setMessage("");
            })
            .catch((er) => {
                setSubmitState("error");
            });
    };

    const filterQuestions = (ar: Fragelada[]) => {
        let new_arr = ar;
        if (searchString !== "") {
            new_arr = new_arr.filter(
                (qa) =>
                    qa.answer.toLowerCase().includes(searchString) ||
                    qa.question.toLowerCase().includes(searchString)
            );
        }
        if (selectedCategory !== "") {
            new_arr = new_arr.filter((qa) =>
                qa.categories.includes(selectedCategory)
            );
        }
        return new_arr;
    };

    const getFilteredQuestions = (data: Fragelada[]) => {
        const filt = filterQuestions(data);

        if (filt.length <= 0) {
            return (
                <Text align="center">
                    Vi kan tyvärr inte hitta några frågor som matchar{" "}
                    <Text fontStyle={"italic"}>`{searchString}`</Text>
                </Text>
            );
        }

        const halfIdx = Math.floor(filt.length / 2);
        const first = filt.slice(0, halfIdx + 1).map((qa) => {
            return (
                <Box key={qa.id}>
                    <QuestionAnswer fragelada={qa} />
                </Box>
            );
        });
        const second = filt.slice(halfIdx, filt.length - 1).map((qa) => {
            return (
                <Box key={qa.id}>
                    <QuestionAnswer fragelada={qa} />
                </Box>
            );
        });

        return (
            <Flex
                gap={2}
                justifyContent={"space-around"}
                flexDirection={shouldBreak ? "row" : "column"}
            >
                <Flex gap={2} flexDirection={"column"} minWidth="300px">
                    {first}
                </Flex>
                <Flex minWidth="300px" gap={2} flexDirection={"column"}>
                    {second}
                </Flex>
            </Flex>
        );
    };

    return (
        <BoujtTemplate gap={100}>
            <Head>
                <title>Frågelådan</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Heading>Frågelåda</Heading>
            <Flex gap={20} flexDirection={shouldBreak ? "row" : "column"}>
                <Box
                    width={shouldBreak ? "50%" : "100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                >
                    <Text>
                        Har du en fråga men vill vara anonym? <br />
                        Du kan du använda frågelådan! Skriv in din fråga i
                        formuläret, så svarar vi på den så fort vi kan! Håll
                        utkik efter vårt svar nedanför. Du kan också maila oss
                        på{" "}
                        <a
                            style={{ color: "blue" }}
                            href="mailto:fraga@boujt.se"
                        >
                            fraga@boujt.se
                        </a>{" "}
                        men glöm inte att du då inte längre är anonym!
                    </Text>
                    <Flex flex={2} flexDir={"column"} gap={"20px"}>
                        <ResponsiveVideoPlayer url="https://youtu.be/f5E3kJ0C1hY" />
                    </Flex>
                </Box>
                <Box width={shouldBreak ? "50%" : "100%"}>
                    {submitState !== "done" && (
                        <Text fontWeight={700} fontSize={25}>
                            Ställ din fråga!
                        </Text>
                    )}
                    {submitState !== "done" && (
                        <FormControl maxWidth={"100%"}>
                            <Textarea
                                placeholder="Meddelande"
                                id="message"
                                value={message}
                                onChange={(t) => setMessage(t.target.value)}
                                rows={7}
                            />
                            <Flex flexDirection={"column"} gap={5}>
                                <Button
                                    mt={4}
                                    backgroundColor="yellow"
                                    color="black"
                                    variant={"default"}
                                    isLoading={submitState === "submitting"}
                                    type="submit"
                                    padding="1rem 2rem"
                                    onClick={submitQuestion}
                                >
                                    Skicka
                                </Button>
                            </Flex>
                        </FormControl>
                    )}
                    {submitState === "done" && (
                        <Flex
                            flexDirection={"column"}
                            height="100%"
                            justifyContent={"center"}
                            alignItems="center"
                            align="center"
                        >
                            <Text fontSize={20} fontWeight={800}>
                                Tack för din fråga!
                            </Text>
                            <Text>
                                Tack för din fråga! Vi svarar så fort vi kan!
                            </Text>
                        </Flex>
                    )}
                </Box>
            </Flex>

            <Flex flexDirection={"column"}>
                <Heading>Tidigare frågor och svar</Heading>
                <Flex
                    flexDirection={"column"}
                    marginTop="1rem"
                    padding="1rem 0"
                >
                    <Text>Välj kategori</Text>
                    <Select
                        onChange={(t) => setSelectedCategory(t.target.value)}
                        width={280}
                        placeholder="Alla"
                    >
                        {getCategories().map((cat) => {
                            return (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            );
                        })}
                    </Select>
                    <Text>Filtrera med sökord</Text>
                    <Input
                        placeholder="Ex. 'ensam'"
                        value={searchString}
                        onChange={(e) => setSearchString(e.target.value)}
                        width={280}
                    />
                </Flex>

                {questionsAndAnswers.data &&
                    getFilteredQuestions(questionsAndAnswers.data)}
            </Flex>
        </BoujtTemplate>
    );
};

export default Fragelada;
