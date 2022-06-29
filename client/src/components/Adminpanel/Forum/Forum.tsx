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
import { UpdateForumPost } from "./UpdateForumPost";

interface ForumProps {}

export const Forum: React.FC<ForumProps> = ({}) => {
    const { strapi, user } = useStrapi();
    const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
    const [selectedEditPost, setSelectedEditPost] = useState<ForumPost | null>(
        null
    );
    const [openCreatePost, setOpenCreatePost] = useState<boolean>(false);
    const [allPosts, setAllPosts] = useState<ForumPost[]>([]);

    const getAllPosts = () => {
        strapi
            ?.find("forums", {
                sort: "createdAt:desc",

                populate: "deep",
            })
            .then((res) => {
                const posts = res.data;
                console.log(posts);
                setAllPosts(
                    posts.map((post) => {
                        const p: ForumPost = {
                            id: post.id,
                            title: post.attributes.title,
                            text: post.attributes.text,
                            created_at: post.attributes.createdAt,
                            syssnare: {
                                id: post.attributes.syssnare.data.id,
                                name: post.attributes.syssnare.data.attributes
                                    .name,
                                status: post.attributes.syssnare.data.attributes
                                    .status,
                                favorite_animal:
                                    post.attributes.syssnare.data.attributes
                                        .favorite_animal,
                                favorite_icecream:
                                    post.attributes.syssnare.data.attributes
                                        .favorite_icecream,
                                img: post.attributes.syssnare.data.attributes
                                    .profile_img,
                                people_in_queue:
                                    post.attributes.syssnare.data.attributes
                                        .people_in_queue,
                            },
                            comments: post.attributes.comments.data.map(
                                (comment) => {
                                    return {
                                        id: comment.id,
                                        text: comment.attributes.text,
                                        created_at:
                                            comment.attributes.createdAt,
                                        syssnare: {
                                            id: comment.attributes.syssnare.data
                                                .id,
                                            name: comment.attributes.syssnare
                                                .data.attributes.name,
                                            status: comment.attributes.syssnare
                                                .data.attributes.status,
                                            favorite_animal:
                                                comment.attributes.syssnare.data
                                                    .attributes.favorite_animal,
                                            favorite_icecream:
                                                comment.attributes.syssnare.data
                                                    .attributes
                                                    .favorite_icecream,
                                            img: comment.attributes.syssnare
                                                .data.attributes.profile_img,
                                            // people_in_queue:
                                            //     comment.attributes.syssnare.data
                                            //         .attributes.people_in_queue,
                                        },
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
        setSelectedEditPost(null);
    };

    const onSelectPost = (post: ForumPost) => {
        setSelectedPost(post);
    };
    const onSelectEditPost = (post: ForumPost) => {
        setSelectedEditPost(post);
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
            {selectedEditPost && (
                <UpdateForumPost
                    onClose={() => setSelectedEditPost(null)}
                    open={selectedEditPost !== null}
                    onSubmit={() => {
                        getAllPosts();
                        setSelectedEditPost(null);
                    }}
                    post={selectedEditPost}
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
                            onDelete={() => getAllPosts()}
                            key={post.id}
                            onSelectEdit={(p: ForumPost) => onSelectEditPost(p)}
                            onSelect={(p: ForumPost) => onSelectPost(p)}
                            post={post}
                        />
                    );
                })}
            </Flex>
        </Center>
    );
};
