import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { IconType } from "react-icons";
import Starfield from "./Starfield";

const background: CSSProperties = {
	position: 'absolute',
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	zIndex: -100
}

type Props = {
    text: string,
    icon: IconType,
    iconColor: string,
    width: number
}

// Clickable button with starfield background
const StarfieldButton: React.FC<Props> = ({width, text, icon, iconColor}) => {
    return (
        <Flex 
            width={width} 
            minHeight={width*0.3}
            position={'relative'} 
            justifyContent={'center'}
            borderRadius={'20px'}
        >
            <Flex
                width={'85%'}
                justifyContent={'space-between'}
                alignItems={'center'} 
            >
                <Heading color={'white'}>
                    {text}
                </Heading>
                <Icon 
                    w={12}
                    h={12}
                    color={iconColor}
                    as={icon}
                />
            </Flex>
            <Box sx={background} borderRadius={'20px'}>
                <Starfield 
                    starCount={20}
                    boxProps={{borderRadius: '20px'}} 
                    sx={{borderRadius: '20px'}}
                />
            </Box>
        </Flex>
    )
}

export default StarfieldButton;