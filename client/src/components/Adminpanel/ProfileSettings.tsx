import React, { ReactNode, useEffect, useState } from "react";
import {
    FlexProps,
    Divider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Flex,
    Avatar,
    Text,
    AvatarBadge,
    Input,
    FormLabel,
    Spinner,
    Fade,
    Slide,
    Collapse,
} from "@chakra-ui/react";
import { FiEdit, FiLock, FiSettings } from "react-icons/fi";
import { useStrapi } from "../../auth/auth";
import { doUpdateUserInfo, uploadFile } from "../../../utils/helperFunctions";
import axios from "axios";
import { UserInfo } from "../../../utils/types";
import { FaPen } from "react-icons/fa";

interface ProfileSettingsProps extends FlexProps {
    onClose: () => void;
}

type formDataType = {
    name: string;
    profile_image: string;
    favorite_icecream: string;
    favorite_animal: string;
};

export const ProfileSettings = ({ onClose }: ProfileSettingsProps) => {
    const { user, strapi, updateUser } = useStrapi();
    const [newImage, setNewImage] = useState<File | null>(null);
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [openPassword, setOpenPassword] = useState<boolean>(false);
    const [passwords, setPasswords] = useState<[first: string, second: string]>(
        ["", ""]
    );
    const [submittingPasswords, setSubmittingPasswords] =
        useState<boolean>(false);

    const submitChanges = async () => {
        setSubmitting(true);
        if (formData.name.trim() === "") return;

        const data: UserInfo = {
            name: formData.name,
            favorite_animal: formData.favorite_animal,
            favorite_icecream: formData.favorite_icecream,
        };
        if (newImage) {
            const fileID = await uploadFile(newImage, strapi?.getToken());

            if (fileID !== -1) {
                data.profile_image = fileID;
            }
        }

        doUpdateUserInfo(data, strapi?.getToken(), user.id)
            .then((res) => {
                console.log(res);
                updateUser();
                setSubmitting(false);
                onClose();
            })
            .catch((er) => {
                console.log(er);
                setSubmitting(false);
            });
    };

    console.log("USER", user);

    const getImage = () => {
        if (newImage) {
            //Gör något
            console.log(newImage);
            return URL.createObjectURL(newImage);
        } else {
            return user.profile_image ? user.profile_image.url : "";
        }
    };

    const defaultData: formDataType = {
        name: user.name,
        profile_image: user.profile_image,
        favorite_animal: user.favorite_animal,
        favorite_icecream: user.favorite_icecream,
    };

    const [formData, setFormData] = useState<formDataType>(defaultData);

    return (
        <Modal size={"2xl"} isOpen={true} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Flex alignItems={"center"} gap={4}>
                        <FiSettings /> Inställningar
                    </Flex>
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Flex justifyContent={"space-around"}>
                        <Flex
                            flexDirection={"column"}
                            gap={4}
                            justifyContent={"center"}
                            alignItems="center"
                        >
                            <Avatar
                                size={"2xl"}
                                name={user?.name}
                                src={getImage()}
                            >
                                <AvatarBadge
                                    cursor={"pointer"}
                                    width="3rem"
                                    height={"3rem"}
                                    bg={"turquoise"}
                                    borderColor={"transparent"}
                                    color={"white"}
                                >
                                    <Input
                                        opacity={0}
                                        cursor="pointer"
                                        position="absolute"
                                        type="file"
                                        accept="image/*"
                                        onChange={(event) => {
                                            if (event.target.files) {
                                                setNewImage(
                                                    event.target.files[0]
                                                );
                                            }
                                        }}
                                    />
                                    {<FaPen size={20} />}
                                </AvatarBadge>
                            </Avatar>

                            <Text fontSize={25} fontWeight="bold">
                                {user.username}
                            </Text>
                            <Text marginTop={-3} fontSize={15}>
                                {user.email}
                            </Text>
                        </Flex>

                        <Flex flexDirection={"column"}>
                            <Text fontSize={20} fontWeight={800}>
                                Profilinformation
                            </Text>
                            <Divider marginBottom={3} />
                            <FormLabel>Visningsnamn</FormLabel>
                            <Input
                                onChange={(ev) => {
                                    setFormData((prev) => {
                                        return {
                                            ...prev,
                                            name: ev.target.value,
                                        };
                                    });
                                }}
                                value={formData.name}
                                type="text"
                            />
                            <FormLabel>Favoritdjur</FormLabel>
                            <Input
                                onChange={(ev) => {
                                    setFormData((prev) => {
                                        return {
                                            ...prev,
                                            favorite_animal: ev.target.value,
                                        };
                                    });
                                }}
                                value={formData.favorite_animal}
                                type="text"
                            />
                            <FormLabel>Favoritglass</FormLabel>
                            <Input
                                onChange={(ev) => {
                                    setFormData((prev) => {
                                        return {
                                            ...prev,
                                            favorite_icecream: ev.target.value,
                                        };
                                    });
                                }}
                                value={formData.favorite_icecream}
                                type="text"
                            />
                        </Flex>
                    </Flex>
                </ModalBody>

                <ModalFooter>
                    <Button color="red" mr={3} onClick={onClose}>
                        Stäng
                    </Button>
                    <Button
                        onClick={() => submitChanges()}
                        disabled={submitting}
                        variant="adminPrimary"
                    >
                        {submitting ? <Spinner /> : "Spara"}
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
