import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import { CSSProperties, useEffect, useRef } from "react";
import BoujtTemplate from "../components/BoujtTemplate";
import Starfield from "../components/Starfield";
import Video from "../components/Video";
import WorkerCard from "../components/WorkerCard";
import { chakra_gradient } from "../theme";

const background: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    zIndex: -100,
};

// TODO: Move this to it's own module? Will probably only be used here though...
type QnA = {
    question: string,
    answer: string
}

// Will be replaced with data from backend later
const mockQuestionData: QnA[] = [
    {
        question: 'Vilken ålder ritkar ni er till?',
        answer: '7-21'
    },
    {
        question: 'När startades BOUJT?',
        answer: 'Projektet startade sommaren 2017, men idén om en teckenspråkig barn- och ungdomsjour har funnits längre än så.'
    },
    {
        question: 'Vilket är ert tecken?',
        answer: 'Vårt tecken är tecknet för ”stjärna”. I projektets början hade vi en tävling där barn och ungdomar fick hjälpa oss att komma på ett tecken för BOUJT. En ungdom föreslog ”stjärna” med motiveringen: ”BOUJT kan vara som en ledstjärna för barn och ungdomar, och tecknet påminner oss om att alla barn och ungdomar har en egen stjärna att sikta mot, men att vägen dit ser olika ut”.'
    },
    {
        question: 'Vem kan söka stöd hos er?',
        answer: 'Du som är döv/hörselskadad och mellan 7-21 år gammal.'
    },
    {
        question: 'Vilka typer av stöd erbjuder ni?',
        answer: 'Här kan du läsa mer om vad vi erbjuder!'
    },
    {
        question: 'Hur kommer jag i kontakt med er i frågor som gäller annat än att få stöd?',
        answer: 'Mejla info@boujt.se!'
    },
    {
        question: 'Har ni tystnadsplikt?',
        answer: 'Ja! Här kan du läsa mer!'
    },
    {
        question: ' Kan jag vara anonym?',
        answer: 'Ja, det kan du. Läs mer här!'
    },
    {
        question: 'Kan jag som är äldre än 21 år söka stöd hos er?',
        answer: 'Tyvärr riktar vi oss endast till döva och hörselskadade barn och ungdomar i åldrarna 7-21. Det finns dock andra jourer och platser där andra barn och vuxna kan få stöd. Det finns ibland möjlighet att chatta. Du finner en fullständig lista här:http://unizon.se/hitta-jour'
    },
    {
        question: 'Hur kan jag göra om jag vill att BOUJT ska besöka min skola, arbetsplats eller förening?',
        answer: 'Kul, tycker vi! Ta kontakt med de ansvariga, t.ex. din rektor, och be hen att mejla oss på info@boujt.se.'
    }
];

// TODO: Move this to it's own module? Will probably only be used here though...
const QuestionAndAnswer: React.FC<{qna: QnA, idx: number}> = ({qna, idx}) => {
    return (
        <Box>
            <Text fontWeight={'bold'}>
                {idx+1}. {qna.question}
            </Text>
            <Text>
                {qna.answer}
            </Text>
        </Box>
    )
}

const OmOss: NextPage = () => {
    const [isSmallerThan600] = useMediaQuery('(max-width: 600px)')

    const videoCardContainer = useRef<HTMLDivElement>(null);
    const workersContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if(!videoCardContainer.current || !workersContainer.current) return;
        // Match width for workers and video card
        workersContainer.current.setAttribute('width', videoCardContainer.current.clientWidth.toString() + 'px');
    }, [videoCardContainer, workersContainer]);
    
    const offset = mockQuestionData.length/2;
    const questionFirstHalf = mockQuestionData.slice(0, Math.floor(offset));
    const questionsSecondHalf = mockQuestionData.slice(Math.ceil(offset), mockQuestionData.length);

    return (
        <BoujtTemplate gap={100}>
            <Heading 
                textAlign={'center'} 
                bgGradient={chakra_gradient} bgClip={'text'}
            >
                Om oss
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
                ref={videoCardContainer}
            >
                <Flex flexDir={'column'} flex={3}>
                    <Heading color='white' noOfLines={1} fontSize={'2xl'}>
                        Vilka är vi och vad gör vi?
                    </Heading>
                    <Text>
                        Välkommen till BOUJT - Barn- och Ungdomsjour på Teckenspråk! Här får du hjälp och stöd på svenskt teckenspråk efter skoltid. Vi erbjuder bland annat stödsamtal med döva och hörselskadade syssnare samt information om kroppen, tankar och känslor. Vi har även en frågelåda där du kan ställa frågor. 
                        <br/><br/>
                        Du behöver aldrig oroa dig för att andra ska få veta att du kontaktat oss. Vi berättar inte för någon. Hos oss kan du vara helt anonym. I videochatten kan du välja vilken volontär du vill prata med, och du kan textchatta istället om du inte vill att volontären ska se dig. Du kan prata om vad du vill! Är du glad eller ledsen? Vill du berätta om något kul som hänt eller något som känns tungt och jobbigt? Har du kanske en fundering? Det spelar ingen roll. Läs mer om anonymitet här!
                    </Text>
                </Flex>
                <Flex flex={2} flexDir={'column'}>
                    <Video
                        style={{
                            alignSelf: 'center'
                        }}
                        width={400}
                        height={250} 
                        url={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
                    />
                    <Heading color={'yellow'} textAlign={'center'} my={'auto'} fontSize={'2xl'}>
                        Vi tror på dig och tar det du säger på allvar.
                    </Heading>
                </Flex>
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
            <Box>
                <Heading pb={'30px'} color='blackish' textAlign={'center'}>
                    Vi som jobbar här
                </Heading>
                <Flex 
                    boxShadow={'0 0 15px #d3d3d3'} 
                    borderRadius={'20px'} border={'none'} 
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    py={'40px'}
                    ref={workersContainer}
                    width={'100%'}
                    wrap={'wrap'}
                >
                    <WorkerCard
                        name={'Jiin Najar'}
                        role={'Volontärsamordnare'}
                        email={'jiin@boujt.se'}
                    />
                    <WorkerCard
                        name={'Olivia Renner Balkstam'}
                        role={'Kommunikatör'}
                        email={'olivia@boujt.se'}
                    />
                    <WorkerCard
                        name={'Jonna Sjögren'}
                        role={'Vikarierande volontärsamordnare'}
                        email={'jonna@boujt.se'}
                    />
                </Flex>
            </Box> 
            {/* Card with video and text */}
            <Flex 
                color={'white'}
                position={'relative'}
                flexDir={'row'}
                padding={'40px'}     
                gap={'30px'}       
                wrap={'wrap'}
                maxW={'880px'}
                ref={videoCardContainer}
            >
                <Flex 
                    flexDir={'column'} 
                    flex={3} flexGrow={1} 
                    justifyContent={'center'}
                    gap={'40px'}
                >
                    <Heading color='white' fontSize={'2xl'}>
                        Vad betyder egentligen syssna?
                    </Heading>
                    <Text>
                        Det är ett ord och tecken som betyder att man lyssnar fast med synen. Därför tecknas det som “lyssna” men med handen ovanför ögonen istället. Det är därför våra volontärer kallas för “syssnare”.
                    </Text>
                </Flex>
                <Flex flex={2} flexDir={'column'}>
                    <Text color={'white'} textAlign={'center'} my={'auto'} fontSize={'2xl'}>
                        Se tecknet här!
                    </Text>
                    <Video
                        style={{
                            alignSelf: 'center'
                        }}
                        width={400}
                        height={250} 
                        url={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
                    />
                </Flex>
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
            {/* VANLIGA FRÅGOR SECTION */}
            <Box >
                <Heading pb={'30px'} color='blackish' textAlign={'center'}>
                    Vanliga frågor
                </Heading>
                <Flex 
                    gap={50}
                    boxShadow={'0 0 15px #d3d3d3'} 
                    borderRadius={'20px'} border={'none'} 
                    px={50}
                    py={25}
                    flexDir={isSmallerThan600 ? 'column' : 'row'}
                    // wrap={'wrap'}
                >
                    {/* Split question into two columns */}
                    <Flex flexDir={'column'}>
                        {questionFirstHalf.map((qna, idx) => {
                            return <QuestionAndAnswer qna={qna} idx={idx}/>
                        })}
                    </Flex>
                    <Flex flexDir={'column'}>
                        {questionsSecondHalf.map((qna, idx) => {
                                return <QuestionAndAnswer qna={qna} idx={idx+Math.floor(offset)}/>
                        })}
                    </Flex>
                </Flex>
            </Box>
        </BoujtTemplate>
    )
}

export default OmOss;