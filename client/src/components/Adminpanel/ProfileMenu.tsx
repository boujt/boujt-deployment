import {
    Avatar,
    AvatarBadge,
    Button,
    Flex,
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
    FaScrewdriver,
} from "react-icons/fa";
import { SYSSNARE_STATUS } from "../../../utils/constants";
import { doGetAllSyssnare } from "../../../utils/service";
import { Syssnare } from "../../../utils/types";
import { useStrapi } from "../../auth/auth";
import ListOfSyssnare from "./ListOfSyssnare";
import { SyssnareStatus } from "./SyssnareStatus";

interface ProfileMenuProps {
    name: string;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ name }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { strapi, user, logout } = useStrapi();

    return (
        <Flex flexDirection={"column"} minWidth={180} px={4}>
            {/*TODO: Lägg till Avatar*/}
            <Flex>
                <Avatar
                    name={user?.name}
                    src={user?.profile_image ? user.profile_image.url : ""}
                >
                    <AvatarBadge boxSize="1.25em" bg="green.500" />
                </Avatar>
                <Flex marginLeft={2} flexDirection={"column"}>
                    <Text fontSize={20} fontWeight={600}>
                        {name}
                    </Text>

                    <Text>Syssnare</Text>
                </Flex>
            </Flex>
            <SyssnareStatus />
        </Flex>
    );
};
