import { Box, Center, Circle, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { FaChrome, FaEdge, FaFirefox, FaFirefoxBrowser } from "react-icons/fa";
import { useEffect, useState } from "react";
import detectBrowser from "../utility/detect-browser";

const style: React.CSSProperties = {
    borderRadius: '20px',
    WebkitBorderRadius: '20px',
    overflow: 'hidden',
    position: 'relative'
}

const BrowserOptions = [
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
    // State for our selected browser
    const [browser, setBrowser] = useState('');

    useEffect(() => {
        if(browser) return;

        const result = detectBrowser();
        console.log(result);
        if (result.isChrome) {
            setBrowser('chrome');
        }
        else if(result.isEdge) {
            setBrowser('edge');
        }
        else if(result.isFirefox) {
            setBrowser('firefox');
        }
    }, []);

    const onBrowserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setBrowser(event.target.value);
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
                    {/* TODO VIDEO */}
                    <Center borderRadius={'15px'} py={'50px'} flexDir={'column'}>
                        <Box sx={style}>
                            <iframe 
                                id="player" width="640" height="390"
                                src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
                            />
                        </Box>
                    </Center>
                    <Center>
                        <Select 
                            width={'200px'}
                            placeholder={'Välj din webbläsare'} 
                            value={browser} onChange={onBrowserChange}
                            iconColor={'white'} iconSize={'32px'}
                            bg={'red'} borderColor={'red'}  
                            color={'white'}
                            borderRadius={'15px'}
                        >
                            {BrowserOptions.map(b => {
                                return <option value={b.value}>{b.label}</option>
                            })}
                        </Select>
                    </Center>
                </Box>
            </Flex>
            {/* BROWSER INSTRUCTIONS SECTION */}
            <Footer/>
        </Box>
    )
}

export default HideYourVisist;