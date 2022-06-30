import {
    Avatar,
    Box,
    Button,
    Divider,
    Flex,
    Spinner,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import {
    FaCalendar,
    FaComment,
    FaDownload,
    FaPaperclip,
    FaTrash,
    FaUser,
} from "react-icons/fa";
import { ForumComment, ForumPost } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
import { FileIcon, defaultStyles } from "react-file-icon";
interface ForumPostProps {
    post: ForumPost;
    onPostComment: Function;
}

const ForumPostView: React.FC<ForumPostProps> = ({ post, onPostComment }) => {
    const styledIcons = Object.keys(defaultStyles);
    const [comment, setComment] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const { user, strapi } = useStrapi();
    const toast = useToast();

    const deleteComment = (commentID: number) => {
        const confirmAction = confirm("Vill du ta bort kommentaren?");
        if (confirmAction) {
            strapi
                ?.delete("comments", commentID)
                .then((res) => {
                    toast({
                        title: "Kommentar borttagen",
                        description: "Din kommentar har tagits bort",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                })
                .catch()
                .finally(() => {
                    onPostComment();
                });
        }
    };

    const submitComment = () => {
        if (comment.trim() === "") return;

        strapi
            ?.create("comments", {
                text: comment,
                syssnare: user?.id,
                forum: post.id,
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
                            <Avatar
                                size={"sm"}
                                name={post.syssnare.name}
                                src={post.syssnare.img}
                            />
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
                <Divider marginTop={5}></Divider>
                {post.files && (
                    <Flex flexDirection="column" marginTop={4} gap={2}>
                        <Flex alignItems={"center"} gap={4}>
                            <Box
                                width={50}
                                as="a"
                                target="_blank"
                                href={post.files[0].attributes.url}
                            >
                                <FileIcon
                                    color="#14CFEF"
                                    fold
                                    {...defaultStyles[
                                        post.files[0].attributes.ext.substring(
                                            1
                                        )
                                    ]}
                                    extension={post.files[0].attributes.ext}
                                />
                            </Box>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href={post.files[0].attributes.url}
                                download={
                                    post.files[0].attributes.hash +
                                    post.files[0].attributes.ext
                                }
                            >
                                <FaDownload fontSize={20} />
                            </a>
                        </Flex>

                        <Text>{post.files[0].attributes.name}</Text>

                        <Divider></Divider>
                    </Flex>
                )}
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
                            variant="adminPrimary"
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
                                <Flex
                                    key={comment.id}
                                    border="1px solid #00CCEE"
                                    borderRadius={8}
                                    padding={4}
                                    px={5}
                                    alignItems="center"
                                    gap={4}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={comment.syssnare.img}
                                        name={comment.syssnare.name}
                                    />
                                    <Box width={"100%"}>
                                        <Flex justifyContent={"space-between"}>
                                            <Text fontWeight={800}>
                                                {comment.syssnare.name}
                                            </Text>
                                            <Flex gap={2} alignItems={"center"}>
                                                <FaCalendar color="#00CCEE" />
                                                <Text>
                                                    {post.created_at.slice(
                                                        0,
                                                        10
                                                    )}
                                                </Text>
                                                {user.id ===
                                                    comment.syssnare.id && (
                                                    <Flex
                                                        justifyContent={
                                                            "center"
                                                        }
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
                                </Flex>
                            );
                        })}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ForumPostView;
