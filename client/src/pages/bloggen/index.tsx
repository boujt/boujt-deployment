import {
    Button,
    Flex,
    Grid,
    GridItem,
    Heading,
    Select,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Head from "next/head";
import React, { SyntheticEvent, useState } from "react";
import { useData } from "../../../utils/fetchData";
import { BlogPost } from "../../../utils/types";
import BlogPreview from "../../components/Blog/BlogPreview";
import BoujtTemplate from "../../components/BoujtTemplate";
import { chakra_gradient } from "../../theme";

const Blog: NextPage = () => {
    const [blogFilter, setBlogFilter] = useState<string>("");

    const posts = useData<BlogPost[]>(`posts`);

    // Later fetched from strapi backend
    const FILTER_OPTIONS = [
        "option1",
        "option2",
        "option 3 trying to hide from entrop",
    ];

    const onBlogFilterChange = (event: SyntheticEvent) => {
        // @ts-ignore
        setBlogFilter(event.target.value);
    };

    return (
        <BoujtTemplate maxW={"6xl"} gap={25}>
            <Head>
                <title>Bloggen</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {/* <Navbar/> */}
            {/* TOP SECTION */}
            <Flex
                justifyContent={"center"}
                flexDir={"column"}
                pt={"0px"}
                gap={25}
            >
                <Heading
                    bgGradient={chakra_gradient}
                    bgClip={"text"}
                    textAlign={"center"}
                >
                    Bloggen
                </Heading>
                {/* <Flex
                    flexWrap={"wrap"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={25}
                >
                    <Text fontWeight={"bold"} fontSize={"xl"}>
                        Filtrera kategorier
                    </Text>
                    <Select
                        value={blogFilter}
                        onChange={onBlogFilterChange}
                        placeholder="Filtrera"
                        width={"fit-content"}
                        borderRadius={"100px"}
                    >
                        {FILTER_OPTIONS.map((opt, i) => (
                            <option key={i} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </Select>
                </Flex> */}
            </Flex>

            {/* LIST BLOG POSTS */}
            <SimpleGrid columns={[1, null, 2, 3]} gap={10} flexWrap={"wrap"}>
                {posts.data &&
                    posts.data.map((post, idx) => {
                        console.log(post);
                        return <BlogPreview key={idx} post={post} />;
                    })}
            </SimpleGrid>
        </BoujtTemplate>
    );
};

export default Blog;
