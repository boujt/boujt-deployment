import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { IconType } from "react-icons";
import { FaChrome, FaEdge, FaFirefoxBrowser } from "react-icons/fa";
import BoujtTemplate from "../components/BoujtTemplate";
import Video from "../components/Video";

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
            'Klicka på menyknappen uppe till höger',
            'Välj historik',
            `Klicka på "Rensa ut tidigare historik"`
        ],
        description: ''
    },
    {
        value: "edge",
        label: "Microfosft Edge",
        icon: FaEdge,
        instructions: [
            'Klicka på menyknappen uppe till höger',
            'Välj historia och klicka på menyknappen uppe till höger',
            'Och välja valet med soptunnan'
        ],
        description: ''
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
        <BoujtTemplate>
            {/* MAIN CONTENT */}
            <Flex pt={'100px'} alignItems={'center'} flexDir={'column'}>
                <Heading bgGradient={'linear(to-b, #34569A, #1D3D63)'} bgClip='text'>
                    Göm ditt besök
                </Heading>
                <Box 
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
            <Box width={'100%'}>
                <Accordion allowToggle>
                    {
                        BrowserOptions.map(br => {
                            return getBrowserItem(br);
                        })
                    }
                </Accordion>
            </Box>
            </Center>
        </BoujtTemplate>
    )
}

export default HideYourVisist;