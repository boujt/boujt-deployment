import {
    Box,
    Button,
    Center,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Spinner,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Textarea,
    Tfoot,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaComment, FaPlus, FaUser } from "react-icons/fa";
import { PuffLoader } from "react-spinners";
import { LOADING_STATE } from "../../../../utils/constants";
import { doGetActiveRooms } from "../../../../utils/service";
import { ChatRoom, ForumPost, Syssnare } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
import { ChatRequest } from "../ChatRequest";
import { CreateForumPost } from "./CreateForumPost";
import ForumPostView from "./ForumPostView";
import ForumPreview from "./ForumPreview";

interface ForumProps {}

export const Forum: React.FC<ForumProps> = ({}) => {
    const { strapi, user } = useStrapi();
    const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
    const [openCreatePost, setOpenCreatePost] = useState<boolean>(false);
    const [allPosts, setAllPosts] = useState<ForumPost[]>([]);

    const example_syssnare: Syssnare = {
        id: 2,
        name: "Jakob",
        status: "online",
        favorite_animal: "figatt",
        favorite_icecream: "choklad",
        img: "aowkdoawd.png",
        people_in_queue: 2,
    };

    const getAllPosts = () => {
        axios
            .get("http://localhost:1337/api/forums?populate=*")
            .then((res) => {
                const posts = res.data.data;
                setAllPosts(
                    posts.map((post) => {
                        const p: ForumPost = {
                            id: post.id,
                            title: post.attributes.title,
                            text: post.attributes.text,
                            created_at: post.attributes.createdAt,
                            syssnare: example_syssnare,
                            comments: post.attributes.comments.data.map(
                                (comment) => {
                                    return {
                                        id: comment.id,
                                        text: comment.attributes.text,
                                        created_at:
                                            comment.attributes.createdAt,
                                        syssnare: example_syssnare,
                                    };
                                }
                            ),
                        };
                        if (selectedPost !== null && selectedPost.id === p.id) {
                            setSelectedPost(p);
                        }
                        return p;
                    })
                );
            })
            .catch((er) => {
                console.error(er);
            });
    };

    useEffect(() => {
        getAllPosts();
    }, [openCreatePost]);

    const onClosePost = () => {
        setSelectedPost(null);
    };

    const onSelectPost = (post: ForumPost) => {
        setSelectedPost(post);
    };

    return (
        <Center alignItems={"center"} minHeight="100vh" marginTop={20}>
            {openCreatePost && (
                <CreateForumPost
                    onClose={() => setOpenCreatePost(false)}
                    open={openCreatePost}
                    onSubmit={() => setOpenCreatePost(false)}
                />
            )}
            {selectedPost !== null && (
                <Modal size={"2xl"} isOpen={true} onClose={onClosePost}>
                    <ModalOverlay />

                    <ModalContent width={"100%"}>
                        <ModalCloseButton />
                        <ModalBody borderRadius={8} backgroundColor={"white"}>
                            <ForumPostView
                                onPostComment={() => getAllPosts()}
                                post={selectedPost}
                            />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
            <Flex flexDirection={"column"} gap={5} minWidth={"300px"}>
                <Flex justifyContent={"space-between"}>
                    <Text fontSize={20} fontWeight={800}>
                        Forum
                    </Text>
                    <Button
                        onClick={() => setOpenCreatePost(true)}
                        variant="adminPrimary"
                        leftIcon={<FaPlus color="white" />}
                    >
                        Skapa inlägg
                    </Button>
                </Flex>

                {allPosts.length === 0 && (
                    <Flex justifyContent={"center"}>
                        <Text textAlign={"center"}>Inga inlägg ännu</Text>
                    </Flex>
                )}

                {allPosts.map((post) => {
                    return (
                        <ForumPreview
                            onSelect={(p: ForumPost) => onSelectPost(p)}
                            post={post}
                        />
                    );
                })}
            </Flex>
        </Center>
    );
};
