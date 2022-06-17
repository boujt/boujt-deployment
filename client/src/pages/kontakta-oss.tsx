import {
	Box,
	Button, Flex,
	Heading,
	Text
} from "@chakra-ui/react";
import { NextPage } from "next";
import { CSSProperties } from "react";
import { FaEnvelope, FaMapPin } from "react-icons/fa";
import BoujtTemplate from "../components/BoujtTemplate";
import ContactInfo from "../components/Kontakta-oss/AddressMap";
import ContactForm from "../components/Kontakta-oss/ContactForm";
import Starfield from "../components/Starfield";
import Video from "../components/Video";
import { chakra_gradient } from "../theme";
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

const KontaktaOss: NextPage = () => {
	return (
		<BoujtTemplate gap={100}>
			<Heading 
				textAlign={'center'}
				bgGradient={chakra_gradient}
				bgClip={'text'}
			>
				Kontakta oss
			</Heading>
			<Flex flexDir={'column'} alignItems={'center'} gap={'50px'}>
				<Heading>Letar du efter chatten?</Heading>
				<Button width={'150px'} variant={'default'}>
					<Text>Ta mig dit</Text>
				</Button>
			</Flex>
			{/* FIRST CARD WITH EMAIL FORM */}
			<Flex flexDir={'column'} gap={'25px'}>
				<Heading
					textAlign={'center'}
					bgGradient={chakra_gradient}
					bgClip={'text'}
				>
					Maila oss
				</Heading>
				<Flex 
					position={'relative'}
					gap={20}
					padding={'20px'}
				>
					<Box width={"50%"}>
						<ContactForm />
					</Box>
					<Flex width={"50%"} flexDirection="column" gap={4}>
						<Video
							width={"100%"}
							height={220}
							url={
								"http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
							}
						/>
					</Flex>
					<Box sx={background}>
						<Starfield boxProps={{borderRadius: '12px'}} sx={{ borderRadius: "12px" }} />
					</Box>
				</Flex>
			</Flex>

			<Flex
				position={"relative"}
				flexDir={"column"}
				maxW={"100%"}
				alignItems={"center"}
				padding={"6rem 4rem"}
			>
				<Box sx={content} display="flex" flexDirection={"row"}>
					<Flex
						justifyContent="center"
						width={"40%"}
						alignItems="center"
					>
						<Heading color="white">Sveriges Dövas Ungdomsförbund</Heading>
					</Flex>
					<Flex justifyContent="center" width={"20%"}>
						<div
							style={{
								width: "2px",
								height: "100%",
								backgroundColor: " white",
							}}
						></div>
					</Flex>
					<Flex
						width={"40%"}
						gap={10}
						justifyContent="center"
						flexDirection={"column"}
					>
						<Flex gap={10}>
							<Box>
								<FaMapPin size={"3rem"} color="white" />
							</Box>
							<Box>
								<Text color="white" fontWeight={800}>
									Adress
								</Text>
								<Text color="white">Rissneleden 138 174 57 Sundbyberg</Text>
							</Box>
						</Flex>
						<Flex gap={10}>
							<Box>
								<FaEnvelope size={"3rem"} color="white" />
							</Box>
							<Box>
								<Text color="white" fontWeight={800}>
									E-post
								</Text>
								<Text color="white">info@boujt.se</Text>
							</Box>
						</Flex>
					</Flex>
				</Box>
				<Box sx={background}>
					<Starfield boxProps={{borderRadius: '12px'}} sx={{ borderRadius: "12px" }} />
				</Box>
			</Flex>
			<ContactInfo />
		</BoujtTemplate>
	);
};

export default KontaktaOss;
