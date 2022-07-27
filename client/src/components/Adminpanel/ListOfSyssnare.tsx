import { useRef, useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Link,
    Avatar,
    FormControl,
    FormHelperText,
    InputRightElement,
    Spinner,
    Alert,
    AlertIcon,
    List,
    ListItem,
    ListIcon,
    Text,
    Badge,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionIcon,
    AccordionPanel,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaCheck } from "react-icons/fa";

import { Syssnare } from "../../../utils/types";
import { getColorFromStatus, getTextFromStatus } from "./SyssnareStatus";
import { SYSSNARE_STATUS } from "../../../utils/constants";
import { userInfo } from "os";
import { useStrapi } from "../../auth/auth";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export type ListOfSyssnareProps = {
    syssnare: Syssnare[];
};

const ListOfSyssnare: React.FC<ListOfSyssnareProps> = ({ syssnare }) => {
    const { user } = useStrapi();
    return (
        <Flex flexDirection={"column"} px={4}>
            <Text marginBottom={5} fontWeight={900}>
                Alla syssnare
            </Text>
            <List spacing={3}>
                {syssnare.map((sys) => {
                    if (
                        sys.status === SYSSNARE_STATUS.OFFLINE ||
                        sys.id === user.id
                    )
                        return null;
                    return (
                        <>
                            <ListItem
                                key={sys.id}
                                display={"flex"}
                                flexDirection="row"
                                alignItems={"center"}
                                gap={2}
                            >
                                <Box>
                                    <Avatar
                                        size={"sm"}
                                        src={sys.img}
                                        name={sys.name}
                                    />
                                </Box>
                                <Box>
                                    <Text fontWeight={700}>{sys.name}</Text>
                                    <Badge
                                        color={getColorFromStatus(sys.status)}
                                    >
                                        {getTextFromStatus(sys.status)}
                                    </Badge>
                                </Box>
                            </ListItem>
                            <Divider />
                        </>
                    );
                })}

                <Accordion defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <Text>
                                    Offline (
                                    {
                                        syssnare.filter(
                                            (sys) =>
                                                sys.status ===
                                                SYSSNARE_STATUS.OFFLINE
                                        ).length
                                    }
                                    )
                                </Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                            {syssnare.map((sys) => {
                                if (sys.status !== SYSSNARE_STATUS.OFFLINE)
                                    return null;
                                return (
                                    <>
                                        <ListItem
                                            display={"flex"}
                                            flexDirection="row"
                                            alignItems={"center"}
                                            gap={2}
                                            key={sys.id}
                                        >
                                            <Box>
                                                <Avatar
                                                    size={"sm"}
                                                    src={sys.img}
                                                    name={sys.name}
                                                />
                                            </Box>
                                            <Box>
                                                <Text
                                                    color="gray"
                                                    fontWeight={700}
                                                >
                                                    {sys.name}
                                                </Text>
                                                <Badge
                                                    color={getColorFromStatus(
                                                        sys.status
                                                    )}
                                                >
                                                    {getTextFromStatus(
                                                        sys.status
                                                    )}
                                                </Badge>
                                            </Box>
                                        </ListItem>
                                        <Divider />
                                    </>
                                );
                            })}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </List>
        </Flex>
    );
};

export default ListOfSyssnare;
