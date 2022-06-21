import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { CSSProperties } from "react";
import Navbar from "../../components/navbar";
import Starfield from "../../components/Starfield";

const background: CSSProperties = {
  position: "absolute",
  left: 0,
  top: 0,
  width: "100%",
  height: "100%",
  zIndex: -100,
};

const KanslorOchRattigheterPortal: NextPage = () => {
  const router = useRouter();

  const navigate = (age: string) => {
    // window.location.href = (`kanslor-och-rattigheter/${age}`)
    router.push("/kanslor-och-rattigheter/" + age);
  };

  return (
    <Flex
      width={"100vw"}
      height={"100vh"}
      flexDir={"column"}
      position={"relative"}
    >
      <Navbar />
      {/* MAIN */}
      <Flex flexDir={"column"} justifyContent={"center"} height={"60%"}>
        <Center paddingTop={"100px"} flexDir={"column"}>
          <Heading size={["2xl", "3xl"]} color={"white"} textAlign={"center"}>
            Om kroppen, känslor och rättigheter
          </Heading>
          <Text
            color={"white"}
            fontWeight={"semibold"}
            paddingTop={"150px"}
            fontSize={["1xl", "2xl", "3xl"]}
            textAlign={"center"}
          >
            Den här delen av sidan är åldersfördelad, hur gammal är du?
          </Text>
        </Center>
        <Flex justify={"center"} paddingTop={"50px"}>
          <Button
            variant={"default"}
            mx={"5px"}
            width="163px"
            height="45px"
            onClick={() => navigate("7")}
          >
            <Text>7-14 år</Text>
          </Button>
          <Button
            variant={"information"}
            mx={"5px"}
            width="163px"
            height="45px"
            onClick={() => navigate("15")}
          >
            <Text>15-21 år</Text>
          </Button>
        </Flex>
      </Flex>
      <Box sx={background}>
        <Starfield />
      </Box>
    </Flex>
  );
};

export default KanslorOchRattigheterPortal;
