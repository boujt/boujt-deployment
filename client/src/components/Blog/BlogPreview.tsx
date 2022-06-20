import {
	Box,
	Center,
	Heading, Stack, Text
} from '@chakra-ui/react';
import Image from 'next/image';
import blogPreview from '../../../public/images/blog-preview.png';
import { box_shadow_light } from '../../theme';

const BlogPreview: React.FC = () => {
	return (
		<Center 
			px={'10px'}
		>
			<Box
				maxW={'400px'}
				w={'full'}
				bg={'white'}
				boxShadow={box_shadow_light}
				rounded={'md'}
				p={6}
				overflow={'hidden'}
			>
				<Box
					h={'210px'}
					bg={'gray.100'}
					py={6}
					px={6}
					mb={6}
					pos={'relative'}
				>
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
						letterSpacing={1.1}
					>
						Nyheter
					</Text>
					<Heading
						fontSize={'2xl'}
						fontFamily={'body'}
					>
						Bjout firar 5-årsjubileum!
					</Heading>
				</Stack>
			</Box>
		</Center>
	);
}

export default BlogPreview;