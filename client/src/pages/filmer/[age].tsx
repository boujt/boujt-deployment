import { Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { VaraFilmerItem } from "../../../utils/types";
import BoujtTemplate from "../../components/BoujtTemplate";
import VideoCard from "../../components/VideoCard";
import { chakra_gradient } from "../../theme";

const sevenToFourteenVideos: VaraFilmerItem[] = [
    {
        title: 'Sexuella trakasserier',
        description: `
            Sexuella trakasserier kan se ut på flera olika sätt. Alla kan bli drabbade av sexuella trakasserier oavsett kön, ålder och bakgrund. Sexuella trakasserier kan till exempel betyda att någon rör dig, tittar, tecknar eller skriver något på ett sätt känns obehagligt. 
        `,
        mainText: "mer text",
        videoUrl: 'https://www.youtube.com/embed/pT1o_Wwnc2U'
    },
    {
        title: 'Inget teckenspråk hemma?',
        description: `
            Många barn och ungdomar lever i hem där kommunikationen med familjen inte fungerar bra, eftersom att det inte talas teckenspråk. Det kan kännas riktigt tungt och svårt. Du är inte ensam!  
        `,
        mainText: "mer text",
        videoUrl: 'https://www.youtube.com/embed/pT1o_Wwnc2U'
    },
    {
        title: 'Inget teckenspråk hemma?',
        description: `
            Många barn och ungdomar lever i hem där kommunikationen med familjen inte fungerar bra, eftersom att det inte talas teckenspråk. Det kan kännas riktigt tungt och svårt. Du är inte ensam!  
        `,
        mainText: "mer text",
        videoUrl: 'https://www.youtube.com/embed/pT1o_Wwnc2U'
    },
    {
        title: 'Inget teckenspråk hemma?',
        description: `
            Många barn och ungdomar lever i hem där kommunikationen med familjen inte fungerar bra, eftersom att det inte talas teckenspråk. Det kan kännas riktigt tungt och svårt. Du är inte ensam!  
        `,
        mainText: "mer text",
        videoUrl: 'https://www.youtube.com/embed/pT1o_Wwnc2U'
    }
]

const fifteenToTwentyOneVideos: VaraFilmerItem[] = [
    {
        title: 'Jag är 15',
        description: `
            Sexuella trakasserier kan se ut på flera olika sätt. Alla kan bli drabbade av sexuella trakasserier oavsett kön, ålder och bakgrund. Sexuella trakasserier kan till exempel betyda att någon rör dig, tittar, tecknar eller skriver något på ett sätt känns obehagligt. 
        `,
        mainText: "mer text",
        videoUrl: 'https://www.youtube.com/embed/pT1o_Wwnc2U'
    },
    {
        title: 'Min ålder > 14',
        description: `
            Många barn och ungdomar lever i hem där kommunikationen med familjen inte fungerar bra, eftersom att det inte talas teckenspråk. Det kan kännas riktigt tungt och svårt. Du är inte ensam!  
        `,
        mainText: "mer text",
        videoUrl: 'https://www.youtube.com/embed/pT1o_Wwnc2U'
    }
]

const Filmer: NextPage = () => {

    const router = useRouter();
    const age = router.query.age as string;

    /*
        Prepare data
    */
    const videos = age == '7' ? sevenToFourteenVideos : fifteenToTwentyOneVideos;
    const headingText = age == '7' ? 
        'Våra filmer för dig som är 7-14' : 
        'Våra filmer för di som är 15-21'

    return (
        <BoujtTemplate gap={50}>
            <Heading
                textAlign={'center'}
                bgGradient={chakra_gradient}
                bgClip={'text'}
            >
                {headingText}
            </Heading>
            {/* Render the video cards */}
            <>
                {videos.map((video, idx) => {
                    return <VideoCard 
                        video={video}
                        backgroundColor= {idx % 2 == 0 ?  "red" :  "orange" }
                        key={idx} 
                    />
                })}
            </>

        </BoujtTemplate>
    )
}

export default Filmer;