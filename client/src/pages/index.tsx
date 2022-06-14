import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { CSSProperties } from "@emotion/serialize";
import type { NextPage } from "next";
import Image from "next/image";
import { css_gradient } from "../theme";
import starLeft from "../../public/images/star_left.png";
import starRight from "../../public/images/star_right.png";
import stars from "../../public/images/stars.png";
import BlogPreview from "../components/Blog/BlogPreview";
import CircleChart from "../components/CircleChart/CircleChart";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const content: CSSProperties = {
  width: "100%",
  height: "100%",
};

const Home: NextPage = () => {
  const getChatSection = () => {
    return (
      <Flex justifyContent={"center"}>
        <Flex width="50%" flexDir={"column"} minW={"360"}>
          {/* CHAT WINDOW 1 */}
          <Box paddingTop={"50px"}>
            <Flex
              marginRight={"auto"}
              background={"turquoise"}
              alignItems={"center"}
              borderRadius={"30px 30px 30px 0"}
              width="350px"
              height="100px"
              padding={"0 20px 0 20px"}
              boxShadow={"5px 5px 15px -5px #000000"}
            >
              <Text color="white" fontSize={"22"}>
                Måndagar, tisdagar och torsdagar
              </Text>
            </Flex>
          </Box>
          {/* CHAT WINDOW 2 */}
          <Flex marginLeft={"auto"} paddingTop={"60px"}>
            <Flex
              background={"turquoise"}
              borderRadius={"30px 30px 0 30px"}
              alignItems={"center"}
              width="350px"
              height="60px"
              padding={"0 20px 0 20px"}
              boxShadow={"5px 5px 15px -5px #000000"}
            >
              <Text color="white" fontSize={"22"}>
                Mellan klokca 18:30 till 20:30
              </Text>
            </Flex>
          </Flex>
          {/* BOTTOM BUTTON */}
          <Flex marginLeft={"auto"} marginRight={"auto"} paddingTop={"60px"}>
            <Button width="163px" height="45px" variant={"default"}>
              <Text fontWeight={"light"}>Ta mig dit</Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    );
  };

  const getBlogSection = () => {
    return (
      <Flex
        width="100vw"
        maxW={"100%"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"space-evenly"}
      >
        <Heading paddingTop={"50px"}>Det senaste från bloggen</Heading>
        {/* Blog posts */}
        <Flex justifyContent={"space-around"} flexWrap={"wrap"}>
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
        </Flex>
        <Button width="163px" height="45px" variant={"default"}>
          <Text fontWeight={"light"}>Utforska bloggen</Text>
        </Button>
      </Flex>
    );
  };

  const getWhatWeLikeSection = () => {
    return (
      <Flex
        flexDir={"column"}
        maxW={"100%"}
        width={"100vw"}
        bgImage={`url(${stars.src}), ${css_gradient}`}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Heading color="white">Vad gillar vi?</Heading>
        <Flex>
          {/* CIRCLES */}
          <CircleChart fill={"#00CCEE"} text={"Vattenkring"} percentage={80} />
          <CircleChart fill={"#FE5957"} text={"Barnrätt"} percentage={100} />
          <CircleChart fill={"#FAC20D"} text={"Glass"} percentage={90} />
          <CircleChart fill={"#FDE30F"} text={"Deaf power"} percentage={100} />
        </Flex>
      </Flex>
    );
  };

  return (
    <Box>
      <Navbar />
      {/* FIRST SECTION AT THE TOP */}
      <Flex
        flexDir={"column"}
        height={620}
        maxW={"100%"}
        width={"100vw"}
        // bgGradient={gradient}
        alignItems={"center"}
        padding={"100px 150px 0 150px"}
        bgImage={`url(${stars.src}), ${css_gradient}`}
      >
        <Box sx={content}>
          {/* HEADING */}
          <Flex width={"100%"} justifyContent={"space-evenly"}>
            <Image src={starLeft} />
            <Text
              color={"white"}
              fontWeight={"bold"}
              fontSize={"36"}
              marginTop={"auto"}
              marginBottom={"auto"}
            >
              Chatta med Boujt!
            </Text>
            <Image src={starRight} />
          </Flex>
          {getChatSection()}
        </Box>
      </Flex>
      {getBlogSection()}
      {getWhatWeLikeSection()}
      <Footer />
    </Box>
  );
};

export default Home;
