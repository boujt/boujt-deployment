import { Flex, Box, Text, Image, Avatar } from "@chakra-ui/react";
import { useEffect } from "react";
import avatar from "../../public/images/avatar-om-oss.png";

type Props = {
    name: string;
    role: string;
    email: string;
    image: string;
};

const WorkerCard: React.FC<Props> = (props) => {
    return (
        <Flex flexDir={"column"} alignItems={"center"}>
            <Avatar src={props.image} size={"2xl"} />
            <Text textAlign={"center"} fontWeight={"bold"} py={"10px"}>
                {props.name}
            </Text>
            <Text textAlign={"center"}>
                <b>{props.role}</b>
                <br />
                <span
                    style={{
                        color: "#34569B",
                    }}
                >
                    {props.email}
                </span>
            </Text>
        </Flex>
    );
};

export default WorkerCard;
