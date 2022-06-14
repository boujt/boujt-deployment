import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, AspectRatio, Box, Center, Flex, Heading, Icon, Select, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { IconType } from "react-icons";
import { FaChrome, FaEdge, FaFirefoxBrowser } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import Video from "../components/Video";

const style: React.CSSProperties = {
    borderRadius: '20px',
    WebkitBorderRadius: '20px',
    overflow: 'hidden',
}

type Browser = {
    value: string,
    label: string,
    icon: IconType,
    instructions: string[],
    description: string,
}

const BrowserOptions: Browser[] = [
    {
        value: "chrome",
        label: "Chrome",
        icon: FaChrome,
        instructions: [
            'Tryck på de tre prickarna högst upp i högra hörnet.',
            'Välj Historik',
            'Klicka på de rutor du vill radera och tryck sen på ”Radera” längre upp.'
        ],
        description: `Om du vill ta bort all historik så klicka på ”Rensa webbinformation”. Där
            kan du radera all historik eller historik från en viss tid tillbaka.`
    },
    {
        value: "firefox",
        label: "Firefox",
        icon: FaFirefoxBrowser,
        instructions: [
            'TODO',
        ],
        description: 'TODO'
    },
    {
        value: "edge",
        label: "Microfosft Edge",
        icon: FaEdge,
        instructions: [
            'TODO',
        ],
        description: 'TODO'
    },
]

const HideYourVisist: NextPage = () => {

    const getBrowserItem = (browser: Browser) => {
        return (
            <AccordionItem>
                <Heading>
                    <AccordionButton>
                        <Icon as={browser.icon}/>
                        <Box paddingLeft={'20px'} textAlign='left'>
                        {browser.label}
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                </Heading>
                <AccordionPanel alignItems={'center'} display={'flex'} flexDir={'row'} pb={4}>
                    <Flex flex={1} flexDir={'column'}>
                        {browser.instructions.map((instruction, idx) => {
                            return (
                                <Text fontSize={20}>
                                    {idx+1}. {instruction}
                                </Text>
                        )})}
                        <Text fontSize={20}>
                            {browser.instructions}
                        </Text>
                    </Flex>
                    <Video
                        style={{
                            flex: 1,
                            marginRight: '50px',
                            marginLeft: '50px'
                        }}
                        width={500}
                        height={300}
                        url={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
                    />
                </AccordionPanel>
            </AccordionItem>
        )
    }

    return (
        <Box>
            <Navbar/>
            {/* MAIN CONTENT */}
            <Flex pt={'100px'} alignItems={'center'} flexDir={'column'}>
                <Heading bgGradient={'linear(to-b, #34569A, #1D3D63)'} bgClip='text'>
                    Göm ditt besök
                </Heading>
                <Box 
                    width={'40%'} minW={'300px'} 
                    py={'50px'}
                >
                    <Heading size={'md'} pb={'30px'}>
                        VILL DU INTE ATT ANDRA SKA SE ATT DU BESÖKT OSS?
                    </Heading>
                    <Text fontWeight={'medium'} fontSize={20}>
                        När du besöker en hemsida sparas det information om det i datorns ”Historik”. 
                        Det innebär att om andra går in på samma dator kan de trycka på ”Historik” 
                        och se vilka sidor som besökts. Om du inte vill att andra ska se att du besökt 
                        vår hemsida kan du välja mellan två alternativ - att radera historiken om du 
                        redan besökt oss eller att surfa privat om du ska besöka oss. Så här gör du 
                        för att radera din historik:
                    </Text>
                    <Center borderRadius={'15px'} py={'50px'} flexDir={'column'}>
                        <Video
                            url={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
                            width={640}
                            height={390}
                        />
                    </Center>
                </Box>
            </Flex>
            {/* BROWSER INSTRUCTIONS SECTION */}
            <Center pb={'50px'}>
            <Box width="80%">
                <Accordion allowToggle>
                    {
                        BrowserOptions.map(br => {
                            return getBrowserItem(br);
                        })
                    }
                </Accordion>
            </Box>
            </Center>
            <Footer/>
        </Box>
    )
}

export default HideYourVisist;