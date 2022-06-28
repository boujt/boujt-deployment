import { Box, Button, Flex, Spinner, Text, Textarea } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { FaCalendar, FaComment, FaTrash, FaUser } from "react-icons/fa";
import { ForumComment, ForumPost } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";

interface ForumPostProps {
    post: ForumPost;
    onPostComment: Function;
}

const ForumPostView: React.FC<ForumPostProps> = ({ post, onPostComment }) => {
    const [comment, setComment] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const { user } = useStrapi();

    const deleteComment = (commentID: number) => {
        const confirmAction = confirm("Vill du ta bort kommentaren?");
        if (confirmAction) {
            axios
                .delete(`http://localhost:1337/api/comments/${commentID}`)
                .then()
                .catch()
                .finally(() => {
                    onPostComment();
                });
        }
    };

    const submitComment = () => {
        if (comment.trim() === "") return;

        axios
            .post("http://localhost:1337/api/comments", {
                data: {
                    text: comment,
                    syssnare: 1, //TODO: REPLACE WITH DYNAMIC ID
                    forum: post.id,
                },
            })
            .then((res) => {})
            .catch((er) => {
                console.error(er);
            })
            .finally(() => {
                setIsSubmitting(false);
                setComment("");
                onPostComment();
            });
    };
    return (
        <Flex backgroundColor={"white"} padding={6} overflowY="scroll">
            <Flex flexDirection={"column"} width="100%">
                <Box>
                    <Text fontSize={30} fontWeight={800}>
                        {post.title}
                    </Text>
                    <Flex gap={5} marginTop={2}>
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
                </Box>
                <Text my={10}>{post.text}</Text>
                <Flex flexDirection={"column"}>
                    <Flex
                        alignItems={"flex-end"}
                        gap={2}
                        flexDirection="column"
                    >
                        <Textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Skriv en kommentar"
                        />
                        <Button
                            onClick={() => submitComment()}
                            color="white"
                            backgroundColor={"#00CCEE"}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? <Spinner /> : "Kommentera"}
                        </Button>
                    </Flex>
                    <Flex marginTop={5} flexDirection={"column"} gap={4}>
                        {post.comments.length === 0 && (
                            <Text textAlign={"center"}>
                                Inga kommenterar på detta inlägg ännu
                            </Text>
                        )}
                        {post.comments.length !== 0 && (
                            <Text marginBottom={2}>
                                Kommentarer ({post.comments.length})
                            </Text>
                        )}

                        {post.comments.map((comment) => {
                            return (
                                <Box
                                    border="1px solid #00CCEE"
                                    borderRadius={8}
                                    padding={4}
                                    px={10}
                                >
                                    <Flex justifyContent={"space-between"}>
                                        <Text fontWeight={800}>
                                            {comment.syssnare.name}
                                        </Text>
                                        <Flex gap={2} alignItems={"center"}>
                                            <FaCalendar color="#00CCEE" />
                                            <Text>
                                                {post.created_at.slice(0, 10)}
                                            </Text>
                                            {user.id ===
                                                comment.syssnare.id && (
                                                <Flex
                                                    justifyContent={"center"}
                                                    alignItems={"center"}
                                                >
                                                    <FaTrash
                                                        onClick={() =>
                                                            deleteComment(
                                                                comment.id
                                                            )
                                                        }
                                                        cursor={"pointer"}
                                                        color="red"
                                                    />
                                                </Flex>
                                            )}
                                        </Flex>
                                    </Flex>

                                    <Text>{comment.text}</Text>
                                </Box>
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ForumPostView;
