import { Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Navbar from "../components/navbar";
import { gradient } from "../theme";

const Home: NextPage = () => {
  return (
    <Flex flexDir={"column"}>
      <Navbar />
      <Flex flexDir={"column"} height={620} bgGradient={gradient}></Flex>
    </Flex>
  );
};

export default Home;
