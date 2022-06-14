import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";

const HideYourVisist: NextPage = () => {
    return (
        <Box>
            <Navbar/>
            <Center flexDir={'column'} pb={'100px'}>
                <Heading 
                    bgGradient={'linear(to-b, #34569A, #1D3D63)'} 
                    bgClip='text' py={'125px'}
                >
                    Kontakta oss
                </Heading>
                <Heading color={'blackish'}>
                    Letar du efter chatten?
                </Heading>
                <Button width="163px" height="45px" variant={'default'} marginTop={'30px'}>
                    <Text fontWeight={'light'}>Ta mig dit</Text>
                </Button>
            </Center>
            <Center>
                <Heading color={'blackish'}>
                    Maila oss
                </Heading>
                
            </Center>
            <Footer/>
        </Box>
    )
}

export default HideYourVisist;