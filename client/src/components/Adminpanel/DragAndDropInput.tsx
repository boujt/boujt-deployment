import {
    Avatar,
    AvatarBadge,
    Box,
    Button,
    Flex,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
    FaArrowCircleRight,
    FaArrowRight,
    FaChevronDown,
    FaDoorOpen,
    FaFolder,
    FaPaperclip,
    FaScrewdriver,
} from "react-icons/fa";
import { SYSSNARE_STATUS } from "../../../utils/constants";
import { doGetAllSyssnare } from "../../../utils/service";
import { Syssnare } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import ListOfSyssnare from "./ListOfSyssnare";
import { SyssnareStatus } from "./SyssnareStatus";

interface DragAndDropInputProps {
    onChange: Function;
}

export const DragAndDropInput: React.FC<DragAndDropInputProps> = ({
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { strapi, user, logout } = useStrapi();
    const [file, setFiles] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files?.length > 0) {
            setFiles(event.target.files[0]);
            console.log(event.target.files[0]);
            onChange(event.target.files[0]);
        } else {
            onChange(null);
        }
    };

    return (
        <>
            {file === null && (
                <Flex
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems={"center"}
                    border="3px dashed lightgray"
                    padding={"2rem"}
                    borderRadius={8}
                    cursor="pointer"
                    _hover={{ borderColor: "#00CCEE" }}
                >
                    <Box position={"relative"}>
                        <Flex
                            flexDirection={"column"}
                            justifyContent="center"
                            alignItems={"center"}
                        >
                            <FaPaperclip fontSize={25} />
                            <Text fontWeight={800} textAlign={"center"}>
                                {"Dra & släpp din fil här"}
                            </Text>
                            <Text>eller klicka för att ladda upp</Text>
                        </Flex>
                        <Input
                            zIndex={888}
                            cursor="pointer"
                            type="file"
                            height="100%"
                            width="100%"
                            position="absolute"
                            top="0"
                            left="0"
                            opacity="0"
                            aria-hidden="true"
                            accept="image/*"
                            // onDragEnter={startAnimation}
                            // onDragLeave={stopAnimation}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>
                            ) => handleFileChange(event)}
                        />
                    </Box>
                </Flex>
            )}
            {file !== null && (
                <Flex gap={2} alignItems={"center"}>
                    <Text>{file.name}</Text>
                    <Button
                        variant={"ghost"}
                        color="red"
                        onClick={() => {
                            setFiles(null);
                            onChange(null);
                        }}
                    >
                        Ta bort
                    </Button>
                </Flex>
            )}
        </>
    );
};
