import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Footer from "../components/Footer";
import EmailForm from "../components/Form/EmailForm";
import Navbar from "../components/navbar";
import Video from "../components/Video";

const HideYourVisist: NextPage = () => {
    return (
        <Flex flexDir={'column'} alignItems={'center'}>
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
            <Center flexDir={'column'} width={'50%'} minW={'400px'}>
                <Heading color={'blackish'}>
                    Maila oss
                </Heading>
                <Video
                    style={{marginTop: '20px', marginBottom: '20px'}}
                    url={'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com'}
                    width={500}
                    height={300}
                />
                <EmailForm/>
            </Center>
            <Footer/>
        </Flex>
    )
}

export default HideYourVisist;