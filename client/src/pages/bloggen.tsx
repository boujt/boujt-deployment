import { Button, Flex, Heading, Select, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import React, { SyntheticEvent, useState } from "react";
import BlogPreview from "../components/Blog/BlogPreview";
import BoujtTemplate from "../components/BoujtTemplate";
import { chakra_gradient } from "../theme";

const Blog: NextPage = () => {
    const [blogFilter, setBlogFilter] = useState<string>("");
    
    // Later fetched from strapi backend
    const FILTER_OPTIONS = [
        'option1',
        'option2',
        'option 3 trying to hide from entrop'
    ]

    const onBlogFilterChange = (event: SyntheticEvent) => {
        // @ts-ignore
        setBlogFilter(event.target.value);
    }

    return (
        <BoujtTemplate maxW={'6xl'} gap={25}>
            {/* <Navbar/> */}
            {/* TOP SECTION */}
            <Flex justifyContent={'center'} flexDir={'column'} pt={'0px'} gap={25}>
                <Heading bgGradient={chakra_gradient} bgClip={'text'} textAlign={'center'}>
                    Bloggen
                </Heading>
                <Flex flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'} gap={25}>
                    <Text fontWeight={'bold'} fontSize={'xl'}>
                        Filtrera kategorier
                    </Text>
                    <Select 
                        value={blogFilter} onChange={onBlogFilterChange}
                        placeholder="Filtrera" 
                        width={'fit-content'} 
                        borderRadius={'100px'}
                    >
                        {FILTER_OPTIONS.map(opt => 
                            <option value={opt}>{opt}</option>    
                        )}
                    </Select>
                </Flex>
            </Flex>

            {/* LIST BLOG POSTS */}
            <Flex 
                justifyContent={'center'} 
                gap={'20px'} 
                flexWrap={'wrap'}
            >
                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
                <Flex flexBasis={'100%'}/>
                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
                <Flex flexBasis={'100%'}/>
                <BlogPreview />
                <BlogPreview />
                <BlogPreview />
                <Flex flexBasis={'100%'}/>
                <BlogPreview />

                <Flex flexBasis={'100%'}/>
                <Button variant={'default'}>
                    Ladda mer
                </Button>
            </Flex>
        </BoujtTemplate>
    );
}

export default Blog;