import { AspectRatioProps, Box, Center, Flex, Heading, useBreakpointValue, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { CSSProperties, useEffect, useRef } from "react";
import { FaStar, FaTv } from "react-icons/fa";
import hammer from '../../../public/images/hammer.png';
import hugging from '../../../public/images/hugging.png';
import kidOnSwing from '../../../public/images/kid-on-swing.png';
import hands from '../../../public/images/hands.png';
import polis from '../../../public/images/polis.png';
import fist from '../../../public/images/fist.png';
import syssnare from '../../../public/images/syssnare.png';
import Footer from "../../components/Footer";
import ImageCard from "../../components/ImageCard";
import Navbar from "../../components/navbar";
import Starfield from "../../components/Starfield";
import StarfieldButton from "../../components/StarfieldButton";

const background: CSSProperties = {
	position: 'absolute',
	left: 0,
	top: 0,
	width: "100%",
	height: "100%",
	zIndex: -100
}

type SyssnareVideo = {
    name: string,
    videoUrl: string
}

const syssnareVideoList = [
    {
        name: 'Ebru',
        videoUrl: ''
    }, 
    {
        name: 'Jamila',
        videoUrl: ''
    }        
]


const MainContent: React.FC = () => {
    const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')

    // Used in the starfield buttons & quiz frame
    const val = useBreakpointValue({base: '360px', md: '460px'})
    const starfieldButtonWidth = Number.parseInt(val!.substring(0, val!.length-2));

    // Used to match container heights 
    const starfieldButtonsContainer = useRef<HTMLDivElement>(null);
    const quizButtonContainer = useRef<HTMLDivElement>(null);

    // Some conditional renders dependent on the age bracket ('7' or '15')
    const router = useRouter();
    const age = router.query.age as string;

    /* 
        **PREPARE SOME COMPONENT DATA** 
    */

    const orangeCardText = age == '7' ? 
        'Vill du veta vad du kan göra om du är kär?' : 
        'Lär dig mer om våld och utsatthet'
    const orangeCardImage = age == '7' ? {
        imageUrl: hugging.src, width: hugging.width, height: hugging.height
    } : {
        imageUrl: fist.src, width: fist.width, height: fist.height
    }
    const orangeImageContainerProps: AspectRatioProps = age == '15' ? {
        alignSelf: 'flex-start'
    } : {};
    
    const blueCardText = 'Till chatten';
    const blueCardImage = {
        imageUrl: syssnare.src, width: syssnare.width, height: syssnare.height
    }
    const blueImageContainerProps: AspectRatioProps = {
        alignSelf: 'flex-end'
    };

    const redCardText = 'Gabriella på polisen';
    const redCardImage = {
        imageUrl: polis.src, width: polis.width, height: polis.height
    }
    const redImageContainerProps: AspectRatioProps = {
        alignSelf: 'center'
    }

    const getHeadingImage = () => {
        if(age == '15') {
            return (
                <Flex alignSelf={'flex-start'} maxW={'200'}>
                    <Image src={hands}/>
                </Flex>
            )
        }

        // 7
        return (
            <Flex maxW={'300px'}>
                <Image src={kidOnSwing}/>
            </Flex>
        )
    }

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
                minH={300}
            >
                {!isSmallerThan600 && 
                    getHeadingImage()
                }
                <Heading color={'white'}>
                    För dig mellan 7-21 år
                </Heading>
                <Box sx={background}>
                    <Starfield/>
                </Box>
            </Flex>
            {/* CARDS */}
            <Flex 
                py={'50px'} gap={'10px'} 
                justifyContent={'center'}
                flexWrap={'wrap'}
            >
                <ImageCard 
                    image={orangeCardImage}
                    text={orangeCardText}
                    boxProps={{
                        backgroundColor: 'orange'
                    }}
                    imageContainerProps={orangeImageContainerProps}
                />
                <ImageCard 
                    image={blueCardImage}
                    text={blueCardText}
                    boxProps={{
                        backgroundColor: 'turquoise'
                    }}
                    imageContainerProps={blueImageContainerProps}
                />
                <ImageCard 
                    image={redCardImage}
                    text={redCardText}
                    boxProps={{
                        backgroundColor: 'red'
                    }}
                    textProps={{
                        color: 'white'
                    }}
                    imageContainerProps={redImageContainerProps}
                />
            </Flex>
            {/* STARFIELD BUTTONS & QUIZ BUTTON */}
            <Flex justifyContent={'center'} alignItems={'center'} pb={'50px'} flexWrap={'wrap'} gap={'10px'}>
                <Flex justifyContent={'center'} flexDir={'column'} gap={'10px'} flexWrap={'wrap'} >
                    <StarfieldButton width={starfieldButtonWidth} text={'Stjärnquizet'} icon={FaStar} iconColor={'yellow'}/>
                    <StarfieldButton width={starfieldButtonWidth} text={'Våra filmer'} icon={FaTv} iconColor={'white'}/>
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
            <Center>
                <Heading>
                    Våra syssnare tipsar!
                </Heading>

            </Center>
        </Box>
    )
}

const KanslorOchRattigheter: NextPage = () => {    
    return (
        <Box>
            <Navbar/>
            <MainContent/>
            <Footer/>
        </Box>
    )   
}

export default KanslorOchRattigheter;