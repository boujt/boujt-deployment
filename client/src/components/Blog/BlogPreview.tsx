import Image from 'next/image';
import {
	Box,
	Center,
	Heading,
	Text,
	Stack,
	Avatar,
	useColorModeValue,
} from '@chakra-ui/react';
import blogPreview from '../../../public/images/blog-preview.png';

const BlogPreview: React.FC = () => {
	return (
		<Center py={6}>
			<Box
				maxW={'445px'}
				w={'full'}
				bg={'white'}
				boxShadow={'2xl'}
				rounded={'md'}
				p={6}
				overflow={'hidden'}>
				<Box
					h={'210px'}
					bg={'gray.100'}
					mt={-6}
					mx={-6}
					mb={6}
					pos={'relative'}>
					<Image
						src={blogPreview}
						layout={'fill'}
					/>
				</Box>
				<Stack>
					<Text
						color={'gray'}
						fontWeight={'thin'}
						fontSize={'sm'}
						letterSpacing={1.1}>
						Nyheter
					</Text>
					<Heading
						fontSize={'2xl'}
						fontFamily={'body'}>
						Bjout firar 5-årsjubileum!
					</Heading>
				</Stack>
			</Box>
		</Center>
	);
}

export default BlogPreview;