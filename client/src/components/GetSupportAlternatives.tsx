import React from "react";

import PropTypes from "prop-types";
import { Flex, Text, Tooltip, useClipboard, useToast } from "@chakra-ui/react";
import { redirect } from "next/dist/server/api-utils";
import { FaComment, FaEnvelope, FaQuestion, FaVideo } from "react-icons/fa";
import { Router, useRouter } from "next/router";
import { ROUTES } from "../../utils/constants";

interface SupportProps {
    onClose?: Function;
}

const GetSupportAlternatives: React.FC<SupportProps> = ({ onClose }) => {
    const toast = useToast();
    const { hasCopied, onCopy } = useClipboard("fraga@boujt.se");
    const router = useRouter();

    const closeModal = () => {
        if (onClose) {
            onClose();
        }
    };
    return (
        <>
            <Text>
                Vi erbjuder flera olika sätt för dig att kontakta oss och få
                stöd. Välj vilket som passar dig bäst!
                <br />
                Du kan välja att kontakta oss via video eller textchat,
                frågelådan eller skicka ett mail till oss på{" "}
                <a href="mailto:fraga@boujt.se">fraga@boujt.se</a>
            </Text>
            <Flex marginTop={5} gap={4}>
                <Flex
                    flexDirection={"column"}
                    padding="2rem 1rem"
                    borderRadius={8}
                    boxShadow="0px 0px 40px -25px"
                    backgroundColor={"yellow"}
                    gap={5}
                    width={300}
                    cursor="pointer"
                    _hover={{ boxShadow: "0px 0px 40px -10px" }}
                    onClick={() => router.push(ROUTES.CHATTEN)}
                >
                    <Text textAlign={"center"} fontSize={20} fontWeight={800}>
                        Text- eller videochatt
                    </Text>
                    <Flex alignItems={"center"} justifyContent="center" gap={1}>
                        <FaComment fontSize={35} />
                        <Text fontSize={35}>/</Text>
                        <FaVideo fontSize={35} />
                    </Flex>
                </Flex>
                <Flex
                    flexDirection={"column"}
                    padding="2rem 1rem"
                    borderRadius={8}
                    boxShadow="0px 0px 40px -25px"
                    backgroundColor={"turquoise"}
                    gap={5}
                    width={300}
                    cursor="pointer"
                    _hover={{ boxShadow: "0px 0px 40px -10px" }}
                    onClick={() => router.push(ROUTES.FRAGELADA)}
                >
                    <Text textAlign={"center"} fontSize={20} fontWeight={800}>
                        Frågelådan
                    </Text>
                    <Flex alignItems={"center"} justifyContent="center" gap={1}>
                        <FaQuestion fontSize={35} />
                    </Flex>
                </Flex>
                <Tooltip label={"Kopiera mailadress"}>
                    <Flex
                        flexDirection={"column"}
                        padding="2rem 1rem"
                        borderRadius={8}
                        boxShadow="0px 0px 40px -25px"
                        backgroundColor={"red"}
                        gap={5}
                        width={300}
                        cursor="pointer"
                        _hover={{ boxShadow: "0px 0px 40px -10px" }}
                        onClick={() => {
                            onCopy();
                            toast({
                                title: "Mailadress kopierad!",
                                variant: "solid",
                                status: "info",
                            });
                        }}
                    >
                        <Text
                            textAlign={"center"}
                            fontSize={20}
                            fontWeight={800}
                        >
                            Maila oss en fråga
                        </Text>

                        <Flex
                            alignItems={"center"}
                            justifyContent="center"
                            gap={1}
                        >
                            <FaEnvelope fontSize={35} />
                            <Text>fraga@boujt.se</Text>
                        </Flex>
                    </Flex>
                </Tooltip>
            </Flex>
        </>
    );
};

export default GetSupportAlternatives;
