import {
	Box,
	Button,
	Flex,
	Heading,
	Text
} from "@chakra-ui/react";
import { CSSProperties } from "@emotion/serialize";
import type { NextPage } from "next";
import BlogPreview from "../components/Blog/BlogPreview";
import CircleChart from "../components/CircleChart/CircleChart";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Starfield from "../components/Starfield";

const content: CSSProperties = {
	width: "100%",
	height: "100%",
	zIndex: 100,
};

const background: CSSProperties = {
	position: 'absolute',
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	zIndex: -100
}

const Home: NextPage = () => {
	const getChatSection = () => {
		return (
			<Flex>
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
								Mellan klockan 18:30 till 20:30
							</Text>
						</Flex>
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
				minH={700}
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
					<Text>Utforska bloggen</Text>
				</Button>
			</Flex>
		);
	};

	const getWhatWeLikeSection = () => {
		return (
			<Flex
				flexDir={"column"}
				maxW={"100%"}
				position={'relative'}
				width={"100vw"}
				minH={500}
				// bgImage={`url(${stars.src}), ${css_gradient}`}
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
				<Box sx={background}>
					<Starfield/>
				</Box>
			</Flex>
		);
	};

	return (
		<Box>
			<Box position={'relative'}>
				<Navbar transparent />
				{/* FIRST SECTION AT THE TOP */}
				<Flex
					// position={'relative'}
					flexDir={"row"}
					justifyContent={'center'}
					minHeight={620}
					maxW={"100%"}
					width={"100vw"}
					alignItems={"center"}
					padding={"0 150px 0 150px"}
				>
					{/* LEFT SECTION */}
					<Flex 
						flex={1}
						flexDir={'column'}
						maxW={'650px'}
					>
						<Text
							color={"white"}
							fontWeight={"bold"}
							fontSize={"36"}
							marginTop={"auto"}
							marginBottom={"auto"}
						>
							Chatta med <span style={{fontWeight: 'bolder', color: 'yellow'}}>Boujt</span>!
						</Text>
						<Text
							color={'white'}
						>
							I vår chatt kan du välja att prata om vad du vill! Har du
							en fundering om kroppen? Har du bråkat med en 
							kompis? Säger din kille att du inte får träffa dina 
							vänner? Är du ledsen, glad eller ingenting alls? 
							<br/><br/>
							Du är varmt välkommen att chatta med en syssnare! Du 
							kan själv välja mellan text- eller videosamtal.
						</Text>
						{/* BUTTONS */}
						<Flex justifyContent={'center'} paddingTop={"60px"}>
							<Button mx={'5px'} width="163px" height="45px" variant={"default"}>
								<Text>Ta mig dit</Text>
							</Button>
							<Button mx={'5px'} width="163px" height="45px" variant={"information"}>
								<Text>Om oss</Text>
							</Button>
						</Flex>
					</Flex>
					{/* RIGHT SECTION */}
					<Flex flex={1} paddingLeft={'35px'} maxW={'650px'} justifyContent={'center'}>
						{getChatSection()}
					</Flex>
				</Flex>
				<Box sx={background}>
					<Starfield/>
				</Box>
			</Box>
			{getBlogSection()}
			{getWhatWeLikeSection()}
			<Footer />
		</Box>
	);
};

export default Home;
