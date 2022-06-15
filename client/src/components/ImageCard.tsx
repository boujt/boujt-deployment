import { AspectRatio, Box, BoxProps, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { AImage } from "../../utils/types";

type Props = {
    image: AImage,
    text: string,
    boxProps?: BoxProps
}

const ImageCard: React.FC<Props> = ({image, text, boxProps}) => {
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
            <Text padding={'20px'} fontWeight={'semibold'}>{text}</Text>
            <AspectRatio ratio={imageAspectRatio} width={'70%'} height={'70%'}>
                <Image src={image.imageUrl} layout={'fill'} />
            </AspectRatio>
        </Flex>
    )
}

export default ImageCard;