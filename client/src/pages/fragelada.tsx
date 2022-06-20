import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { NextPage } from "next";
import ContactForm from "../components/Kontakta-oss/ContactForm";
import Footer from "../components/Footer";
import EmailForm from "../components/Form/EmailForm";
import Navbar from "../components/navbar";
import ContactInfo from "../components/Kontakta-oss/AddressMap";
import CustomContainer from "../components/BoujtTemplate";
import BoujtTemplate from "../components/BoujtTemplate";
import Video from "../components/Video";
import Starfield from "../components/Starfield";
import { CSSProperties, useEffect, useState } from "react";
import { FaEnvelope, FaMapPin, FaMarker } from "react-icons/fa";
import QuestionAnswer from "../components/Fragelada/QuestionAnswer";
import { Fragelada } from "../../utils/types";
import axios from "axios";
import { doSubmitQuestionToFragelada } from "../../utils/service";
const background: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  borderRadius: 8,
  zIndex: -100,
};
const content: CSSProperties = {
  width: "100%",
  borderRadius: 8,
  zIndex: 100,
};

const Fragelada: NextPage = () => {
  const [message, setMessage] = useState<string>("");
  const [submitState, setSubmitState] = useState<string>("none");
  const [questionsAndAnswers, setQuestionsAndAnswers] = useState<Fragelada[]>(
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [searchString, setSearchString] = useState<string>("");

  console.log(searchString);
  useEffect(() => {
    axios
      .get("/api/fragelada")
      .then((res) => {
        setQuestionsAndAnswers(res.data.data);
      })
      .catch((er) => {
        console.error(er);
      });
  }, []);

  const getCategories = () => {
    const categories = new Set();
    questionsAndAnswers.forEach((qa) => {
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
      })
      .catch((er) => {
        setSubmitState("error");
      });
  };
  return (
    <BoujtTemplate gap={100}>
      <Heading>Frågelåda</Heading>
      <Flex gap={40}>
        <Box width={"50%"} display={"flex"} flexDirection="column" gap={4}>
          <Text>
            Här kan du maila oss om du har en fråga. Bla bla . Maila gärna oss
            när du har en fråga
          </Text>
          <Video
            width={"100%"}
            height={200}
            url={"https://www.youtube.com/embed/pT1o_Wwnc2U"}
          />
        </Box>
        <Box width={"50%"}>
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
              <Text>Tack för din fråga! Vi svarar så fort vi kan!</Text>
            </Flex>
          )}
        </Box>
      </Flex>

      <Flex flexDirection={"column"}>
        <Heading>Tidigare frågor och svar</Heading>
        <Flex flexDirection={"column"} marginTop="1rem" padding="1rem 0">
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
          />
        </Flex>

        <Grid templateColumns="repeat(auto-fill, minmax(300px,1fr))" gap={5}>
          {questionsAndAnswers.map((qa) => {
            if (
              selectedCategory === "" ||
              (qa.categories.includes(selectedCategory) &&
                qa.answer.includes(searchString)) ||
              qa.question.includes(searchString)
            ) {
              return (
                <GridItem key={qa.id}>
                  <QuestionAnswer fragelada={qa} />
                </GridItem>
              );
            } else {
              return null;
            }
          })}
        </Grid>
      </Flex>
    </BoujtTemplate>
  );
};

export default Fragelada;
