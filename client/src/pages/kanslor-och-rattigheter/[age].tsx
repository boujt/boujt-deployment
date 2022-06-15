import { AspectRatio, Box, Flex, Heading, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Navbar from "../../components/navbar";
import kidOnSwing from '../../../public/images/kid-on-swing.png';
import hugging from '../../../public/images/hugging.png';
import polis from '../../../public/images/polis.png';
import syssnare from '../../../public/images/syssnare.png';
import hammer from '../../../public/images/hammer.png';
import Image from "next/image";
import Starfield from "../../components/Starfield";
import { CSSProperties, useEffect, useRef } from "react";
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

const SevenToFourteen: React.FC = () => {
    const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')

    // Used in the starfield buttons & quiz frame
    const val = useBreakpointValue({base: '360px', md: '460px'})

    const starfieldButtonsContainer = useRef<HTMLDivElement>(null);
    const quizButtonContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!starfieldButtonsContainer.current || !quizButtonContainer.current) return;

        // Match height of quizButtonContainer to starfieldButtonContainer
        quizButtonContainer.current.setAttribute('height', (starfieldButtonsContainer.current.clientHeight.toString() + "px"));
        console.log("DONE ADJUSTING!");
    }, [starfieldButtonsContainer, quizButtonContainer])

    return (
        <Box>
            <Flex 
                position={'relative'}
                width="100%"
                justifyContent={'center'} alignItems={'center'} 
                py={'50px'}
                minH={300}
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
            <Flex justifyContent={'center'} alignItems={'center'} pb={'50px'} flexWrap={'wrap'} gap={'10px'}>
                <Flex justifyContent={'center'} flexDir={'column'} gap={'10px'} flexWrap={'wrap'} >
                    <StarfieldButton width={Number.parseInt(val!.substring(0, val!.length-2))} text={'Stjärnquizet'} icon={FaStar} iconColor={'yellow'}/>
                    <StarfieldButton width={Number.parseInt(val!.substring(0, val!.length-2))} text={'Våra filmer'} icon={FaTv} iconColor={'white'}/>
                </Flex>
                <Flex 
                    width={val} height={300} 
                    backgroundColor={'red'} 
                    ref={quizButtonContainer}
                    borderRadius={'20px'}
                    flexDir={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={'50px'}
                >
                    <Heading color={'white'}>
                        Rättighetsquizet
                    </Heading>
                    <Flex>
                        <Image src={hammer} width={hammer.width*0.3} height={hammer.height*0.3}/>
                    </Flex>
                </Flex>
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