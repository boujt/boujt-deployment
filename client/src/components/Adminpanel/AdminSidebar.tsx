import React, { ReactNode, useEffect, useState } from "react";
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Divider,
} from "@chakra-ui/react";
import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiCalendar,
    FiArrowUpRight,
    FiLogOut,
    FiExternalLink,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";
import {
    FaArrowAltCircleUp,
    FaComment,
    FaEnvelopeOpenText,
    FaForumbee,
} from "react-icons/fa";
import { ProfileMenu } from "./ProfileMenu";
import { useStrapi } from "../../auth/auth";
import ListOfSyssnare from "./ListOfSyssnare";
import { doGetAllSyssnare } from "../../../utils/service";
import { Syssnare } from "../../../utils/types";
import { ADMIN_ROUTES } from "../../../utils/constants";
import { ProfileSettings } from "./ProfileSettings";

interface LinkItemProps {
    name: string;
    icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
    { name: "LiveChatt", icon: FiHome },
    { name: "Kalender", icon: FiTrendingUp },
    { name: "Forum", icon: FiCompass },
    { name: "Content Manager", icon: FiStar },
    { name: "Logga ut", icon: FiSettings },
];

export default function AdminSidebar({
    children,
    setPage,
    currentPage,
}: {
    children: ReactNode;
    setPage: Function;
    currentPage: string;
}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={"#f2f7fc"}>
            <SidebarContent
                setPage={setPage}
                currentPage={currentPage}
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent
                        currentPage={currentPage}
                        setPage={setPage}
                        onClose={onClose}
                    />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
    setPage: Function;
    currentPage: string;
}

const SidebarContent = ({
    onClose,
    setPage,
    currentPage,
    ...rest
}: SidebarProps) => {
    const { strapi, user, setSyssnareStatus, logout } = useStrapi();

    const [syssnare, setSyssnare] = useState<Syssnare[]>([]);
    const [openSettings, setOpenSettings] = useState<boolean>(false);

    useEffect(() => {
        doGetAllSyssnare()
            .then((res) => {
                setSyssnare(res.data);
            })
            .catch((er) => {
                setSyssnare([]);
            });
    }, [user]);

    return (
        <Box
            overflowY={"scroll"}
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            {openSettings && (
                <ProfileSettings onClose={() => setOpenSettings(false)} />
            )}
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text fontSize="2xl" fontWeight="bold">
                    Adminpanel
                </Text>
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>

            <ProfileMenu name={user?.name || user?.usernamee} />
            <Divider />
            <Box py={3}>
                <NavItem
                    backgroundColor={
                        currentPage === ADMIN_ROUTES.CHATT ? "#90e4f5" : "unset"
                    }
                    color={
                        currentPage === ADMIN_ROUTES.CHATT ? "white" : "unset"
                    }
                    onClick={() => setPage(ADMIN_ROUTES.CHATT)}
                    icon={FaComment}
                >
                    LiveChatt
                </NavItem>
                <NavItem
                    backgroundColor={
                        currentPage === ADMIN_ROUTES.CALENDAR
                            ? "#90e4f5"
                            : "unset"
                    }
                    color={
                        currentPage === ADMIN_ROUTES.CALENDAR
                            ? "white"
                            : "unset"
                    }
                    onClick={() => setPage(ADMIN_ROUTES.CALENDAR)}
                    icon={FiCalendar}
                >
                    Events
                </NavItem>
                <NavItem
                    backgroundColor={
                        currentPage === ADMIN_ROUTES.FORUM ? "#90e4f5" : "unset"
                    }
                    color={
                        currentPage === ADMIN_ROUTES.FORUM ? "white" : "unset"
                    }
                    onClick={() => setPage(ADMIN_ROUTES.FORUM)}
                    icon={FaEnvelopeOpenText}
                >
                    Forum
                </NavItem>
            </Box>

            <Divider />
            <Box py={3}>
                <NavItem
                    color="turquoise"
                    icon={FiExternalLink}
                    as="a"
                    target="_blank"
                    href="https://shark-app-md2sm.ondigitalocean.app/admin/auth/login"
                >
                    Content Manager
                </NavItem>
                <NavItem
                    _hover={{ backgroundColor: "red", color: "white" }}
                    color="red"
                    icon={FiLogOut}
                    onClick={() => logout()}
                >
                    Logga ut
                </NavItem>
                <NavItem
                    _hover={{ backgroundColor: "gray", color: "white" }}
                    color="black"
                    icon={FiSettings}
                    onClick={() => setOpenSettings(true)}
                >
                    Inställningar
                </NavItem>
            </Box>
            <Divider />
            <ListOfSyssnare syssnare={syssnare} />
        </Box>
    );
};

interface NavItemProps extends FlexProps {
    icon: IconType;
    children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Link
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "cyan.400",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

interface MobileProps extends FlexProps {
    onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue("white", "gray.900")}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue("gray.200", "gray.700")}
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text fontSize="2xl" ml="8" fontWeight="bold">
                Adminpanel
            </Text>
        </Flex>
    );
};
