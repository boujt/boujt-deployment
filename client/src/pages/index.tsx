import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { CSSProperties } from "@emotion/serialize";
import type { NextPage } from "next";
import Image from "next/image";
import Navbar from "../components/navbar";
import { gradient } from "../theme";
import starLeft from '../../public/images/star_left.png';
import starRight from '../../public/images/star_right.png';

const content: CSSProperties = {
  width: '100%',
  height: '100%',
}

const Home: NextPage = () => {

	const getChatSection = () => {
		return (
			<Flex justifyContent={'center'}>
				<Flex width="50%" flexDir={'column'}>
					{/* CHAT WINDOW 1 */}
					<Flex marginRight={'auto'}>
						<Box background={'turquoise'} borderRadius={'100px 100px 100px 0'} width="350px" height="100px">
							<Text color='white' fontSize={'22'}>
								Måndagar, tisdagar och torsdagar
							</Text>
						</Box>
					</Flex>
					{/* CHAT WINDOW 2 */}
					<Flex marginLeft={'auto'}>
						<Box background={'turquoise'} borderRadius={'100px 100px 0 100px'} width="350px" height="60px">
							<Text color='white' fontSize={'22'}>
								Mellan klokca 18:30 till 20:30 	
							</Text>
						</Box>
					</Flex>
					{/* BOTTOM BUTTON */}
					<Flex marginLeft={'auto'} marginRight={'auto'}>
						<Button width="163px" height="45px" variant={'default'}>
							<Text>Ta mig dit</Text>
						</Button>
					</Flex>
				</Flex>
			</Flex>
		)
	}

	return (
	<Flex flexDir={"column"}>
		<Navbar />
		<Flex flexDir={"column"} height={620} bgGradient={gradient} alignItems={'center'} padding={'100px 150px 0 150px'}>
			<Box sx={content}>
				{/* HEADING */}
				<Flex width={'100%'} justifyContent={'space-evenly'}>
					<Image src={starLeft}/>
					<Text color={'white'} fontWeight={'bold'} fontSize={'36'} marginTop={'auto'} marginBottom={'auto'}>
						Chatta med Boujt!
					</Text>
					<Image src={starRight}/>
				</Flex>
				{/* CHAT SECTION */}
				{getChatSection()}
			</Box>
		</Flex>
	</Flex>
	);
};

export default Home;
