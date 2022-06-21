import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FaEye } from "react-icons/fa";
import blogPreview from "../../../public/images/blog-preview.png";
import { BlogPost } from "../../../utils/types";
import { box_shadow_light } from "../../theme";

interface Props {
    post: BlogPost;
}

const BlogPreview: React.FC<Props> = ({ post }) => {
    const router = useRouter();
    return (
        <Center
            onClick={() => router.push(`/bloggen/${post.id}`)}
            cursor={"pointer"}
            px={"10px"}
        >
            <Box
                maxW={"300px"}
                minWidth={"300px"}
                w={"full"}
                bg={"white"}
                boxShadow={box_shadow_light}
                rounded={"md"}
                p={6}
                overflow={"hidden"}
            >
                <Box
                    display={"flex"}
                    justifyContent="center"
                    h={"210px"}
                    bg={"gray.100"}
                    py={6}
                    px={6}
                    mb={6}
                    pos={"relative"}
                >
                    <img
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                        src={
                            post?.cover_image ||
                            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Temp_plate.svg/1280px-Temp_plate.svg.png"
                        }
                    />
                </Box>
                <Stack>
                    <Text
                        color={"gray"}
                        fontWeight={"thin"}
                        fontSize={"sm"}
                        letterSpacing={1.1}
                    >
                        Nyheter
                    </Text>
                    <Flex marginTop={"0.5rem"} alignItems={"center"} gap={2}>
                        <FaEye /> <Text>{0}</Text>
                    </Flex>
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                        {post.title}
                    </Heading>
                </Stack>
            </Box>
        </Center>
    );
};

export default BlogPreview;
