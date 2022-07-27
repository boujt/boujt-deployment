import {
    Avatar,
    Box,
    Button,
    Center,
    Flex,
    Icon,
    Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLock,
    FaLockOpen,
    FaSnapchatSquare,
} from "react-icons/fa";
import { UserInfo } from "../../utils/types";
import { useStrapi } from "../auth/auth";

/* 
Let's define the social icons svg at the top
If this ends up getting re-used in other parts of the site extract to it's own components
*/
interface SyssnareCardProps {
    syssnare: UserInfo;
}

const SyssnareDisplayCard: React.FC<SyssnareCardProps> = ({ syssnare }) => {
    console.log(syssnare);
    return (
        <Flex maxWidth={"200px"} flexDirection="column">
            <Avatar
                border={"7px solid #34569A"}
                size={"2xl"}
                name={syssnare.name}
                src={syssnare.img}
            />
            <Box
                marginTop={"-4"}
                zIndex={99}
                backgroundColor={"#34569A"}
                py={2}
                px={3}
            >
                <Text fontWeight={"bold"} color="white" textAlign={"center"}>
                    {syssnare.name}
                </Text>
            </Box>
            <Flex flexDirection={"column"}>
                <Box>
                    <Text fontWeight={"900"}>Favoritglass</Text>
                    <Text>{syssnare.favorite_icecream}</Text>
                </Box>
                <Box>
                    <Text fontWeight={"900"}>Favoritdjur</Text>
                    <Text>{syssnare.favorite_animal}</Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default SyssnareDisplayCard;
