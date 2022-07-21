import {
    Badge,
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Select,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { SyntheticEvent, useState } from "react";
import { FaEye } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useData } from "../../../utils/fetchData";
import { BlogPost } from "../../../utils/types";
import BlogPreview from "../../components/Blog/BlogPreview";
import BoujtTemplate from "../../components/BoujtTemplate";
import ResponsiveVideoPlayer from "../../components/ResponsiveVideoPlayer";
import { chakra_gradient, css_gradient } from "../../theme";

const Blog: NextPage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const [shouldBreak] = useMediaQuery("(min-width: 800px)");

    const cleanMarkDown = (text: string | undefined) => {
        if (text === undefined) return "";

        return post.data?.text.replaceAll(
            "/uploads/",
            "https://shark-app-md2sm.ondigitalocean.app/uploads/"
        );
    };

    const post = useData<BlogPost>(`posts/${pid}`);

    console.log(post);
    return (
        <BoujtTemplate strict={false}>
            <Head>
                <title>Bloggen | {post.data?.title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {!post.isLoading && (
                <>
                    <Flex
                        background={css_gradient}
                        justifyContent="center"
                        alignItems={"center"}
                        gap={!shouldBreak ? 10 : 20}
                        flexDirection={shouldBreak ? "row" : "column"}
                        padding={shouldBreak ? "10rem 0" : "2rem 0"}
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
                                <Text fontSize={17} padding="0 1rem">
                                    {post.data?.published_at.slice(0, 10)}
                                </Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Container
                        my="3rem"
                        gap={20}
                        maxW={"4xl"}
                        display="flex"
                        flexDirection={shouldBreak ? "row" : "column"}
                    >
                        <Flex
                            flexDirection={"column"}
                            width={!shouldBreak ? "100%" : "70%"}
                            gap={5}
                        >
                            <ReactMarkdown>
                                {cleanMarkDown(post.data?.text)}
                            </ReactMarkdown>
                            {post.data?.videos.map((video) => {
                                return (
                                    <ResponsiveVideoPlayer
                                        key={video.id}
                                        url={video.attributes.url}
                                    />
                                );
                            })}
                        </Flex>
                        <Flex
                            width={!shouldBreak ? "100%" : "30%"}
                            flexDir="column"
                            gap={5}
                            alignItems="center"
                        >
                            {post.data?.images.map((image) => {
                                return (
                                    <img
                                        style={{
                                            display: "block",
                                            width: "auto",
                                            height: "auto",
                                            maxWidth: shouldBreak
                                                ? "200px"
                                                : "400px",
                                            maxHeight: "100%",
                                        }}
                                        key={image.id}
                                        src={image.attributes.url}
                                    ></img>
                                );
                            })}
                        </Flex>
                    </Container>
                </>
            )}
        </BoujtTemplate>
    );
};

export default Blog;
