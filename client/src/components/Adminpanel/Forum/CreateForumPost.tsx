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
import {
    FaCalendar,
    FaComment,
    FaGem,
    FaPaperclip,
    FaPlus,
    FaUser,
} from "react-icons/fa";

import { ChatRoom, ForumPost, Syssnare } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
import { ChatRequest } from "../ChatRequest";
import { DragAndDropInput } from "../DragAndDropInput";
import ForumPostView from "./ForumPostView";
import ForumPreview from "./ForumPreview";

interface CreateForumPostProps {
    open: boolean;
    onClose: Function;
    onSubmit?: Function;
}

export const CreateForumPost: React.FC<CreateForumPostProps> = ({
    open,
    onClose,
    onSubmit,
}) => {
    const { strapi, user } = useStrapi();

    type formDataType = {
        title: string;
        text: string;
        file?: File;
    };
    const [formData, setFormData] = useState<formDataType>({
        title: "",
        text: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const toast = useToast();

    const uploadFile = async () => {
        console.log(formData);
        if (!formData.file) {
            return;
        }
        const fileData = new FormData();
        fileData.append("files", formData.file);

        axios
            .post(
                "https://boujt-app-6a3vb.ondigitalocean.app/api/upload",
                fileData
            )
            .then((res) => {
                return res.data[0].id;
            })
            .catch((er) => {
                return null;
            });
    };

    const handleSubmit = async () => {
        if (
            formData.title.trim() === "" ||
            formData.text.trim() === "" ||
            !user
        )
            return;
        setIsSubmitting(true);
        const payload = {
            title: formData.title,
            text: formData.text,
            syssnare: user.id,
        };
        if (formData.file) {
            const fileID = await uploadFile();
            if (fileID) {
                payload.files = fileID;
            }
        }

        strapi
            ?.create("forums", {
                ...payload,
            })
            .then((res) => {
                toast({
                    title: "Inlägg skapat!",
                    description: "Ditt inlägg har publicerats",
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
                            Skapa nytt inlägg
                        </Text>

                        <Input
                            multiple
                            value={formData.title}
                            placeholder="Titel"
                            onChange={(e) =>
                                setFormData((prev) => {
                                    return {
                                        ...prev,
                                        title: e.target.value,
                                    };
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
                                setFormData((prev) => {
                                    return { ...prev, file: file };
                                });
                            }}
                        />
                        <Button
                            variant={"adminPrimary"}
                            onClick={() => handleSubmit()}
                            disabled={isSubmitting}
                        >
                            {!isSubmitting ? "Publicera" : <Spinner />}
                        </Button>
                        <Button onClick={() => uploadFile()}>
                            Upload file test
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
