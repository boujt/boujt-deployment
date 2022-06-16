import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { CSSProperties } from "react";
import { FaStar } from "react-icons/fa";
import BoujtTemplate from "../components/BoujtTemplate"
import Starfield from "../components/Starfield";
import Video from "../components/Video";

const background: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    zIndex: -100,
};

const WhiteTextContainer: React.FC<{text: string}> = ({text}) => {
    return (
        <Flex borderRadius={'20px'} backgroundColor={'white'} padding={'10px'}>
            <Box mr={'10px'} alignSelf={'center'}>
                <Icon color={'yellow'} as={FaStar}></Icon>
            </Box>
            <Text fontWeight={'bold'} color={'blackish'}>
                {text}
            </Text>
        </Flex>
    )
}

const ExternalLink: React.FC = () => {
    return (
        <Flex
            boxShadow={'0 0 15px #d3d3d3'} 
            borderRadius={'20px'} border={'none'} 
        >
            {/* IMAGE */}
            {/* TEXT */}
        </Flex>
    )
}

const FaStod: NextPage = () => {
    return (
        <BoujtTemplate gap={50}>
            <Heading 
                fontSize={'4xl'}
                bgGradient={'linear(to-b, #34569A, #1D3D63)'} 
                textAlign={'center'} bgClip={'text'}
            >
                Få stöd
            </Heading>
            <Heading 
                textAlign={'center'} 
                color={'blackish'}
                fontSize={'3xl'}
            >
                Här på Boujt finns det flera sätt du kan få stöd av oss!
            </Heading>
            {/* Card with video and text */}
            <Flex 
                color={'white'}
                position={'relative'}
                flexDir={'row'}
                padding={'40px'}     
                gap={'20px'}       
                wrap={'wrap'}
                maxW={'880px'}
            >   
                <Flex flexDir={'column'} flex={3} gap={'20px'}>
                    <Heading color='white' noOfLines={1} fontSize={'2xl'}>
                        Chatt
                    </Heading>
                    <Text>
                        Vill du prata med någon? Handlar det kanske om något som känns jobbigt eller snarare kul? Det spelar ingen roll vad du vill prata om – du är alltid välkommen in till vår chatt. Vi erbjuder stödsamtal med utbildade syssnare. Du bestämmer själv om du vill kommunicera på svenskt teckenspråk eller skriven svenska.
                    </Text>
                    <Button marginTop={'auto'} alignSelf={'flex-start'} width="163px" height="45px" variant={"default"}>
					    <Text>Till chatten!</Text>
				    </Button>
                </Flex>
                <Flex flex={2} flexDir={'column'} gap={'20px'}>
                    <Video
                        style={{
                            alignSelf: 'center'
                        }}
                        width={400}
                        height={250} 
                        url={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
                    />
                    <Button justifySelf={'flex-end'} alignSelf={'flex-end'} width="163px" height="45px" variant={"information"}>
					    <Text>{"Nästa >"}</Text>
				    </Button>
                </Flex>
                {/* BACKGROUND */}
                <Box sx={background}>
                    <Starfield 
                        boxProps={{
                            borderRadius: '20px',
                            overflow: 'hidden'
                        }} 
                        sx={{borderRadius: '20px'}}
                    />
                </Box>
            </Flex>
            {/* SECOND SECTION / ANONYM */}
            <Heading 
                textAlign={'center'} 
                color={'blackish'}
                fontSize={'3xl'}
            >
                Hos oss är du anonym
            </Heading>
            {/* Card with video and text */}
            <Flex 
                color={'white'}
                position={'relative'}
                flexDir={'row'}
                padding={'40px'}     
                gap={'20px'}       
                wrap={'wrap'}
                maxW={'880px'}
            >   
                {/* LEFT SIDE */}
                <Flex flexDir={'column'} flex={3} gap={'20px'}>
                    <Text>
                        Du behöver aldrig oroa dig för att någon annan ska veta att du kontaktat oss. Vi har tystnadsplikt. Du är anonym så länge du inte talar om vad du heter eller eventuellt visar ditt ansikte i chatten. Vi kontaktar ingen så länge vi inte är riktigt oroliga för att du eller någon kan riskera att råka illa ut. Vi kontaktar aldrig din skola eller dina föräldrar.
                    </Text>
                    <Heading color='yellow' fontSize={'2xl'}>
                        I listan nedan förtydligar vi det mer:
                    </Heading>
                    <WhiteTextContainer
                        text={`
                            Både anställda och syssnare har tystnadsplikt. Det betyder att vi inte får berätta för någon annan att du kontaktat oss. Dina föräldrar/vårdnadshavare eller din skola, till exempel, kan aldrig be oss att berätta om du har kontaktat oss eller vad du har sagt.
                        `}
                    />
                     <WhiteTextContainer
                        text={`Vi tar aldrig beslut om dig utan ditt samtycke.`}
                    />
                    <WhiteTextContainer
                        text={`När du söker stöd hos oss kan du välja om du vill vara anonym eller inte.`}
                    />
                </Flex>
                {/* RIGHT SIDE */}
                <Flex flex={2} flexDir={'column'} gap={'20px'}>
                    <Video
                        style={{
                            alignSelf: 'center'
                        }}
                        width={400}
                        height={250} 
                        url={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
                    />
                    <WhiteTextContainer
                        text='Kom ihåg att om du talar om vad du heter eller visar ditt ansikte i videochatten är du inte längre anonym. Här gäller samma regel som innan – vi berättar inte för någon att du kontaktat oss. Det finns endast ett undantag – om du berättar något som gör att vi blir riktigt oroliga för att du eller någon annan befinner sig i fara. Då kan det hända att vi kontaktar någon som kan hjälpa dig eller hen. Vi gör aldrig detta utan att prata med dig först, och detta gäller alltså endast om du själv valt att inte vara anonym.'
                    />
                </Flex>
                {/* BACKGROUND */}
                <Box sx={background}>
                    <Starfield 
                        boxProps={{
                            borderRadius: '20px',
                            overflow: 'hidden'
                        }} 
                        sx={{borderRadius: '20px'}}
                    />
                </Box>
            </Flex>
            {/* EXTERNAL LINKS */}
            <Heading 
                textAlign={'center'} 
                color={'blackish'}
                fontSize={'3xl'}
            >
                Externa länkar
            </Heading>
            <Heading 
                fontSize={'2xl'} 
                textAlign={'center'} 
                color={'blackish'}
            >
                Nedan följer länkar för andra platser där du kan få stöd
            </Heading>
        </BoujtTemplate>
    )
}

export default FaStod;