import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useData } from "../../utils/fetchData";
import { doGetAllSyssnare } from "../../utils/service";
import { AboutUsData, Faq, UserInfo, Worker } from "../../utils/types";
import BoujtTemplate from "../components/BoujtTemplate";
import ResponsiveVideoPlayer from "../components/ResponsiveVideoPlayer";
import Starfield from "../components/Starfield";
import SyssnareDisplayCard from "../components/SyssnareDisplayCard";
import Video from "../components/Video";
import WorkerCard from "../components/WorkerCard";
import { box_shadow_light, chakra_gradient } from "../theme";

const background: CSSProperties = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    borderRadius: 8,
    zIndex: -100,
};

const QuestionAndAnswer: React.FC<{ qna: Faq; idx: number }> = ({
    qna,
    idx,
}) => {
    return (
        <Box>
            <Text fontWeight={"bold"}>
                {idx + 1}. {qna.question}
            </Text>
            <Text>{qna.answer}</Text>
        </Box>
    );
};

const OmOss: NextPage = () => {
    const [syssnare, setSyssnare] = useState<UserInfo[]>([]);

    useEffect(() => {
        doGetAllSyssnare()
            .then((res) => {
                setSyssnare(res.data);
            })
            .catch((er) => {
                console.log(er);
            });
    }, []);

    const [shouldBreak] = useMediaQuery("(min-width: 820px)");

    return (
        <BoujtTemplate gap={100}>
            <Heading>Bli syssnare</Heading>

            <Text>
                Är du bra på att syssna och vill engagera dig i barn och
                ungdomar? Är du döv eller hörselskadad och över 21 år gammal?
                Bli syssnare hos oss! <br />
                <br />
                Som syssnare bidrar du till att BOUJT kan fortsätta vara en jour
                för döva och hörselskadade barn och ungdomar att vända sig till.
                Det är ett ideellt och webbaserat uppdrag, som på köpet också är
                givande och roligt. Du behöver endast en dator med webbkamera
                och Wi-Fi, samt möjlighet att delta i en bemötandeutbildning som
                vi ordnar. <br /> <br />
                Våra syssnares uppgift är att ta emot samtal och mail från de
                barn och ungdomar som kontaktar oss, och det som krävs är
                lyhördhet. Syssnaren får utbildning, regelbunden feedback och
                stöd i arbetet med barnen och ungdomarna.
            </Text>

            <Text>
                Detta vinner du som syssnare:
                <ul style={{ marginLeft: "40px" }}>
                    <li>
                        Möjlighet att stötta döva och hörselskadade barn och
                        ungdomar
                    </li>
                    <li>Du kan ha med på ditt CV att du är/varit syssnare</li>
                    <li>Livserfarenhet som berikar dig</li>
                    <li>Utbildning, feedback och stöd</li>
                    <li>Härliga syssnarkollegor</li>
                </ul>
            </Text>

            <Text>
                På BOUJT är alla syssnare själva döva eller hörselskadade. Inom
                många andra instanser finns endast hörande, både teckenspråkiga
                som icke teckenspråkiga, att vända sig till. Vi vill att de
                stödsökande ska kunna komma i kontakt med oss på deras egna
                villkor. <br />
                <br />
                Det är en fördel – men inget krav – om du har frågor du brinner
                för eller egna erfarenheter att bidra med, såsom av
                ätstörningar, hedersförtryck och så vidare. <br />
                <br />
                Som syssnare är du aldrig ensam i ditt uppdrag. Ni är flera
                syssnare som samverkar och samarbetar, och på kansliet i
                Sundbyberg står BOUJT-teamet till din tjänst. <br />
                <br />
            </Text>

            <Text>
                Är du intresserad av att bli syssnare? Sänd oss ett mail där du:
                <ul style={{ marginLeft: "40px" }}>
                    <li>Beskriver dig själv</li>
                    <li>Berättar varför du vill bli syssnare</li>
                    <li>
                        Beskriver vilka frågor du brinner för (t.ex.
                        genusfrågor, mänskliga rättigheter m.m.) och vad du kan
                        bidra med i jourverksamheten (t.ex. egen erfarenhet av
                        hedersförtryck, ätstörning o.s.v.)
                    </li>
                </ul>
            </Text>

            <Text>
                Skicka din ansökan eller eventuella frågor till{" "}
                <a style={{ color: "blue" }} href="mailto:jiin@boujt.se">
                    jiin@boujt.se
                </a>{" "}
                . <br /> Varmt välkommen med din ansökan!
            </Text>
        </BoujtTemplate>
    );
};

export default OmOss;
