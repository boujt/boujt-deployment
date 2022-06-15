import { Box, Flex, Heading, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";
import kidOnSwing from '../../../public/images/kid-on-swing.png';
import hugging from '../../../public/images/hugging.png';
import polis from '../../../public/images/polis.png';
import syssnare from '../../../public/images/syssnare.png';
import Image from "next/image";
import Starfield from "../../components/Starfield";
import { CSSProperties } from "react";
import ImageCard from "../../components/ImageCard";
import StarfieldButton from "../../components/StarfieldButton";
import { FaStar, FaTv } from "react-icons/fa";

const background: CSSProperties = {
	position: 'absolute',
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	zIndex: -100
}

// 2 options either show 7-14 och 15-21 view, depends on the url param age
const SevenToFourteen: React.FC = () => {
    const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')

    const val = useBreakpointValue({base: '300px', md: '400px'})

    return (
        <Box>
            <Flex 
                position={'relative'}
                width="100%"
                justifyContent={'center'} alignItems={'center'} 
                py={'50px'}
            >
                {!isSmallerThan600 && <Image src={kidOnSwing}/>}
                <Heading color={'white'}>
                    För dig mellan 7-21 år
                </Heading>
                <Box sx={background}>
                    <Starfield/>
                </Box>
            </Flex>
            <Flex 
                py={'50px'} gap={'10px'} 
                justifyContent={'center'}
                flexWrap={'wrap'}
            >
                <ImageCard 
                    image={{
                        imageUrl: hugging.src, width: hugging.width, height: hugging.height
                    }}
                    text={'Vill du veta vad du kan göra om du är kär?'}
                    boxProps={{
                        backgroundColor: 'orange'
                    }}
                />
                <ImageCard 
                    image={{
                        imageUrl: syssnare.src, width: syssnare.width, height: syssnare.height
                    }}
                    text={'Till chatten'}
                    boxProps={{
                        backgroundColor: 'turquoise'
                    }}
                />
                <ImageCard 
                    image={{
                        imageUrl: polis.src, width: polis.width, height: polis.height
                    }}
                    text={'Gabriella på polisen'}
                    boxProps={{
                        backgroundColor: 'red'
                    }}
                />
            </Flex>
            <Flex justifyContent={'center'} gap={'10px'} flexWrap={'wrap'}>
                <StarfieldButton width={Number.parseInt(val!.substring(0, val!.length-2))} text={'Stjärnquizet'} icon={FaStar} iconColor={'yellow'}/>
                <StarfieldButton width={Number.parseInt(val!.substring(0, val!.length-2))} text={'Våra filmer'} icon={FaTv} iconColor={'white'}/>
            </Flex>
        </Box>
    )
}

const FifteenToTwentyOne: React.FC = () => {
    return (
        <Box>

        </Box>
    )
}

const KanslorOchRattigheter: NextPage = () => {
    const router = useRouter();
    const age = router.query.age as string;
    
    return (
        <Box>
            <Navbar/>
            { age == '7' && <SevenToFourteen/> }
            { age == '15' && <FifteenToTwentyOne/> }
            <Footer/>
        </Box>
    )   
}

export default KanslorOchRattigheter;