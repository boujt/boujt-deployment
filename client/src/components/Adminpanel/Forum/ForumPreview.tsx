import { Box, Flex, Text } from "@chakra-ui/react";
import { FaCalendar, FaComment, FaUser } from "react-icons/fa";
import { ForumPost } from "../../../../utils/types";

interface ForumPreviewProps {
    post: ForumPost;
    onSelect: Function;
}

const ForumPreview: React.FC<ForumPreviewProps> = ({ post, onSelect }) => {
    return (
        <Flex
            cursor={"pointer"}
            backgroundColor={"white"}
            borderRadius={8}
            boxShadow="0px 4px 100px -30px #00000040"
            padding={6}
            onClick={() => onSelect(post)}
        >
            <Flex flexDirection={"column"}>
                <Box>
                    <Text fontWeight={800}>{post.title}</Text>
                    <Text maxWidth={"70%"}>
                        {post.text.slice(0, 70)}{" "}
                        {post.text.length > 70 && "..."}
                    </Text>
                </Box>
                <Flex gap={5} marginTop={5}>
                    <Flex gap={2} alignItems="center">
                        <FaUser color="#00CCEE" />
                        <Text>{post.syssnare.name}</Text>
                    </Flex>
                    <Flex gap={2} alignItems="center">
                        <FaCalendar color="#00CCEE" />
                        <Text>{post.created_at.slice(0, 10)}</Text>
                    </Flex>
                    <Flex gap={2} alignItems="center">
                        <FaComment color="#00CCEE" />
                        <Text>{post.comments.length} kommentarer</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ForumPreview;
