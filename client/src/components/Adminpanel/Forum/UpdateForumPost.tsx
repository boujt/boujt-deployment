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
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaComment, FaPlus, FaUser } from "react-icons/fa";
import { getFileFromUrl, uploadFile } from "../../../../utils/helperFunctions";

import { ChatRoom, ForumPost, Syssnare } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
import { ChatRequest } from "../ChatRequest";
import { DragAndDropInput } from "../DragAndDropInput";
import ForumPostView from "./ForumPostView";
import ForumPreview from "./ForumPreview";

interface UpdateForumPostProps {
    open: boolean;
    onClose: Function;
    onSubmit?: Function;
    post: ForumPost;
}

type formData = {
    title: string;
    text: string;
    file?: File;
};

export const UpdateForumPost: React.FC<UpdateForumPostProps> = ({
    open,
    onClose,
    onSubmit,
    post,
}) => {
    const defaultSettings: formData = {
        title: post.title,
        text: post.text,
    };

    const { strapi, user } = useStrapi();
    const [formData, setFormData] = useState<formData>(defaultSettings);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const toast = useToast();
    const [fileChanged, setFileChanged] = useState<boolean>(false);

    const getFile = async () => {
        if (post.files) {
            const f = await getFileFromUrl(
                post.files[0].attributes.url,
                post.files[0].attributes.name,
                post.files[0].attributes.mime
            );
            setFormData((prev) => {
                return { ...prev, file: f };
            });
        }
    };

    useEffect(() => {
        getFile();
    }, []);

    const handleSubmit = async () => {
        if (
            formData.title.trim() === "" ||
            formData.text.trim() === "" ||
            user?.id !== post.syssnare.id
        )
            return;

        setIsSubmitting(true);
        const data = {
            title: formData.title,
            text: formData.text,
        };

        if (fileChanged && formData.file) {
            const fileID = await uploadFile(formData.file, strapi?.getToken());

            if (fileID !== -1) {
                data.files = fileID;
            }
        }

        strapi
            ?.update("forums", post.id, {
                ...data,
            })
            .then((res) => {
                toast({
                    title: "Inlägget är uppdaterat!",
                    description: "Ditt inlägg har uppdaterats",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
            })
            .catch((er) => {
                console.error(er);
            })
            .finally(() => {
                setIsSubmitting(false);
                if (onSubmit) onSubmit();
            });
    };

    if (!open) return null;

    return (
        <Modal size={"2xl"} isOpen={true} onClose={() => onClose()}>
            <ModalOverlay />

            <ModalContent width={"100%"}>
                <ModalCloseButton />
                <ModalBody borderRadius={8} backgroundColor={"white"} py={5}>
                    <Flex flexDirection={"column"} gap={5}>
                        <Text fontSize={20} fontWeight={800}>
                            Uppdatera inlägg
                        </Text>
                        <Input
                            value={formData.title}
                            placeholder="Titel"
                            onChange={(e) =>
                                setFormData((prev) => {
                                    return { ...prev, title: e.target.value };
                                })
                            }
                        />
                        <Textarea
                            value={formData.text}
                            onChange={(e) =>
                                setFormData((prev) => {
                                    return { ...prev, text: e.target.value };
                                })
                            }
                            rows={5}
                            placeholder="Skriv ditt inlägg här"
                        />
                        <DragAndDropInput
                            onChange={(file: File) => {
                                setFileChanged(true);
                                setFormData((prev) => {
                                    return { ...prev, file: file };
                                });
                            }}
                            file={formData.file ?? null}
                        />
                        <Button
                            variant={"adminPrimary"}
                            onClick={() => handleSubmit()}
                            disabled={isSubmitting}
                        >
                            {!isSubmitting ? "Spara" : <Spinner />}
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
