import { Flex, Heading } from "@chakra-ui/react";
import { NextPage } from "next";
import BlogPreview from "../components/Blog/BlogPreview";
import BoujtTemplate from "../components/BoujtTemplate";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
import { chakra_gradient } from "../theme";

const Blog: NextPage = () => {
    return (
        <Flex flexDir={'column'}>
            <Navbar/>
            {/* TOP SECTION */}
            <Flex justifyContent={'center'} flexDir={'column'}>
                <Heading bgGradient={chakra_gradient} bgClip={'text'}>
                    Bloggen
                </Heading>
                <Flex>
                    
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
            </Flex>
            <Footer/>
        </Flex>
    );
}

export default Blog;