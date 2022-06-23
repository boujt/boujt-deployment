import {
    Badge,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Select,
    Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import { FaEye } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useData } from "../../../utils/fetchData";
import { BlogPost } from "../../../utils/types";
import BlogPreview from "../../components/Blog/BlogPreview";
import BoujtTemplate from "../../components/BoujtTemplate";
import { chakra_gradient, css_gradient } from "../../theme";

const Blog: NextPage = () => {
    const router = useRouter();
    const { pid } = router.query;

    const cleanMarkDown = (text: string | undefined) => {
        if (text === undefined) return "";

        return post.data?.text.replaceAll(
            "/uploads/",
            "https://shark-app-md2sm.ondigitalocean.app/uploads/"
        );
    };

    const post = useData<BlogPost>(`posts/${pid}`);
    return (
        <BoujtTemplate strict={false}>
            {!post.isLoading && (
                <>
                    <Flex
                        background={css_gradient}
                        justifyContent="center"
                        alignItems={"center"}
                        gap={100}
                        height="50vh"
                    >
                        <Flex flex={0}>
                            <img
                                style={{
                                    maxWidth: "400px",
                                    maxHeight: "200px",
                                    aspectRatio: "auto",
                                }}
                                src={
                                    post.data?.cover_image ||
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Temp_plate.svg/1280px-Temp_plate.svg.png"
                                }
                            />
                        </Flex>
                        <Box gap={4}>
                            <Heading color="white">{post.data?.title}</Heading>
                            <Text fontSize={25} color="white">
                                Nyheter
                            </Text>
                            <Box
                                display={"inline-block"}
                                fontSize={15}
                                backgroundColor="turquoise"
                                borderRadius={4}
                                marginTop="1rem"
                            >
                                <Text
                                    color="white"
                                    fontSize={17}
                                    padding="0 1rem"
                                >
                                    {post.data?.published_at.slice(0, 10)}
                                </Text>
                            </Box>
                            <Flex
                                marginTop={"0.5rem"}
                                alignItems={"center"}
                                gap={2}
                            >
                                <FaEye color="white" />{" "}
                                <Text color="white">{post.data?.views}</Text>
                            </Flex>
                        </Box>
                    </Flex>
                    <Container
                        my="3rem"
                        gap={20}
                        maxW={"4xl"}
                        display="flex"
                        flexDirection="row"
                    >
                        <Flex flexDirection={"column"}>
                            <ReactMarkdown>
                                {cleanMarkDown(post.data?.text)}
                            </ReactMarkdown>
                        </Flex>
                        <Flex>
                            <Heading>INSERT VIDEOS HERE</Heading>
                        </Flex>
                    </Container>
                </>
            )}
        </BoujtTemplate>
    );
};

export default Blog;
