import {
	AspectRatio,
	AspectRatioProps,
	Box,
	BoxProps,
	Flex,
	Text,
	TextProps,
	useToast,
	useTooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { AImage } from "../../utils/types";
import { under_construction_config } from "../theme";

type Props = {
	image: AImage;
	text: string;
	boxProps?: BoxProps;
	textProps?: TextProps;
	imageContainerProps?: AspectRatioProps;
	onClick?: () => void;
};

const ImageCard: React.FC<Props> = ({
	image,
	text,
	boxProps,
	textProps,
	imageContainerProps,
	onClick,
}) => {
	const imageAspectRatio = image.width / image.height;

	const toast = useToast();

	const onLocalClick = () => {
		// @ts-ignore
		toast(under_construction_config);
	};

	return (
		<Flex
			{...boxProps}
			alignItems={"center"}
			flexDir={"column"}
			borderRadius={"20px"}
			width={"300px"}
			height={"300px"}
			justifyContent={"space-between"}
			cursor={"pointer"}
			onClick={onClick ? onClick : onLocalClick}
			sx={{
				_hover: {
					boxShadow: "0px 0px 20px #FDE30F",
				},
			}}
		>
			<Box width={"100%"}>
				<Text padding={"20px"} fontWeight={"semibold"} {...textProps}>
					{text}
				</Text>
			</Box>
			<AspectRatio
				ratio={imageAspectRatio}
				width={"70%"}
				height={"70%"}
				{...imageContainerProps}
			>
				<Image src={image.imageUrl} layout={"fill"} />
			</AspectRatio>
		</Flex>
	);
};

export default ImageCard;
