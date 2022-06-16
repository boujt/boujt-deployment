import { Flex, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import avatar from '../../public/images/avatar-om-oss.png';

type Props = {
    name: string,
    role: string,
    email: string,
}

const WorkerCard: React.FC<Props> = (props) => {
    return (
        <Flex flexDir={'column'} alignItems={'center'}>
            <Box position={'relative'} width={avatar.width} height={avatar.width}>
                <Image src={avatar} layout={'fill'}/>
            </Box>
            <Text textAlign={'center'} fontWeight={'bold'} py={'10px'}>
                {props.name}
            </Text>
            <Text textAlign={'center'}>
                <b>{props.role}</b>
                <br/>
                <span style={{
                    color: '#00CCEE'
                }}>{props.email}</span>
            </Text>
        </Flex>
    )
}

export default WorkerCard;