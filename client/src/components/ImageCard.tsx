import { AspectRatio, AspectRatioProps, Box, BoxProps, Flex, Text, TextProps } from "@chakra-ui/react";
import Image from "next/image";
import { AImage } from "../../utils/types";

type Props = {
    image: AImage,
    text: string,
    boxProps?: BoxProps,
    textProps?: TextProps,
    imageContainerProps?: AspectRatioProps,
}

const ImageCard: React.FC<Props> = ({image, text, boxProps, textProps, imageContainerProps}) => {
    const imageAspectRatio = image.width / image.height;
    return (
        <Flex 
            {...boxProps} 
            alignItems={'center'} flexDir={'column'} 
            borderRadius={'20px'}
            width={'300px'}
            height={'300px'}
            justifyContent={'space-between'}
        >
            <Box width={'100%'}>
                <Text 
                    padding={'20px'} 
                    fontWeight={'semibold'}
                    {...textProps}
                >
                    {text}
                </Text>
            </Box>
            <AspectRatio 
                ratio={imageAspectRatio} 
                width={'70%'} height={'70%'}
                {...imageContainerProps}
            >
                <Image src={image.imageUrl} layout={'fill'} />
            </AspectRatio>
        </Flex>
    )
}

export default ImageCard;