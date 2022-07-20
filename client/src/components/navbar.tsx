import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Image,
    Text,
    useMediaQuery,
} from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";
import Frageladan from "../../public/tecken-video/frageladan.gif";
import Kroppen from "../../public/tecken-video/kroppen.gif";
import Stod from "../../public/tecken-video/stod.gif";
import Kontakt from "../../public/tecken-video/kontakta_oss.gif";
import GomBesok from "../../public/tecken-video/gom_ditt_besok.gif";
import OmOss from "../../public/tecken-video/om_oss.gif";
import { VideoTooltip } from "./VideoTooltip";
import { ROUTES } from "../../utils/constants";
import {
    FaAddressCard,
    FaBalanceScale,
    FaBars,
    FaEnvelope,
    FaEyeSlash,
    FaHamburger,
    FaHeart,
    FaQuestionCircle,
    FaStar,
} from "react-icons/fa";
import { useState } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type NavbarItemProps = {
    text: string;
    route: string;
    icon: ReactJSXElement;
};

const NavbarItem: NextPage<NavbarItemProps> = (props: NavbarItemProps) => {
    return (
        <Link href={props.route}>
            <Flex
                flexDirection={"column"}
                alignItems="center"
                justifyContent={"center"}
                cursor="pointer"
            >
                {props.icon}
                <Text
                    cursor={"pointer"}
                    noOfLines={1}
                    marginTop={"auto"}
                    marginBottom={"auto"}
                    color="white"
                    fontSize={{ base: "14px", md: "16px", lg: "17px" }}
                    padding={3}
                    fontWeight={600}
                    overflow={"visible"}
                >
                    {props.text}
                </Text>
            </Flex>
        </Link>
    );
};

type NavbarItemMobileProps = {
    text: string;
    route: string;
    icon: ReactJSXElement;
};

const NavbarItemMobile: NextPage<NavbarItemMobileProps> = (
    props: NavbarItemMobileProps
) => {
    return (
        <Link href={props.route}>
            <Flex cursor={"pointer"} alignItems={"center"}>
                {props.icon}
                <Text
                    marginTop={"auto"}
                    marginBottom={"auto"}
                    variant="link"
                    fontSize={"25px"}
                    padding={3}
                >
                    {props.text}
                </Text>
            </Flex>
        </Link>
    );
};

type Props = {
    transparent?: boolean;
};

const Navbar: NextPage<Props> = ({ transparent }) => {
    const [isLessThan900] = useMediaQuery("(max-width: 1245px)");
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    if (isLessThan900) {
        return (
            <Flex
                maxW={"100%"}
                w="100vw"
                background={transparent ? "transparent" : "blackish"}
                justifyContent="space-between"
                wrap="wrap"
                p={8}
                zIndex={100}
            >
                <Link href="/">
                    <Image
                        cursor={"pointer"}
                        width={"auto"}
                        height={"auto"}
                        maxHeight="60px"
                        src="/images/boujt_icon.png"
                        alt="boujt logo"
                    />
                </Link>
                <FaBars
                    cursor={"pointer"}
                    onClick={() => setOpenMenu(true)}
                    color="white"
                    size="2rem"
                />
                <Drawer
                    isOpen={openMenu}
                    placement="right"
                    size="sm"
                    onClose={() => setOpenMenu(false)}
                >
                    <DrawerOverlay />
                    <DrawerContent backgroundColor={"blackish"}>
                        <DrawerCloseButton size="lg" color="white" />
                        <DrawerHeader>
                            <Text color="white">Meny</Text>
                        </DrawerHeader>

                        <DrawerBody>
                            <Flex flexDirection={"column"} fontSize={20}>
                                <VideoTooltip src={Kroppen.src}>
                                    <NavbarItemMobile
                                        icon={
                                            <FaBalanceScale
                                                size={"2rem"}
                                                color="yellow"
                                            />
                                        }
                                        text="Känslor och rättigheter"
                                        route="/kanslor-och-rattigheter"
                                    />
                                </VideoTooltip>

                                <VideoTooltip src={Stod.src}>
                                    <NavbarItemMobile
                                        icon={
                                            <FaHeart
                                                size={"2rem"}
                                                color="yellow"
                                            />
                                        }
                                        text="Få stöd"
                                        route={ROUTES.FA_STOD}
                                    />
                                </VideoTooltip>
                                <VideoTooltip src={OmOss.src}>
                                    <NavbarItemMobile
                                        icon={
                                            <FaAddressCard
                                                size={"2rem"}
                                                color="yellow"
                                            />
                                        }
                                        text="Om oss"
                                        route={ROUTES.OM_OSS}
                                    />
                                </VideoTooltip>

                                <VideoTooltip src={Kontakt.src}>
                                    <NavbarItemMobile
                                        icon={
                                            <FaEnvelope
                                                size={"2rem"}
                                                color="yellow"
                                            />
                                        }
                                        text="Kontakta oss"
                                        route={ROUTES.KONTAKTA_OSS}
                                    />
                                </VideoTooltip>

                                <VideoTooltip src={GomBesok.src}>
                                    <NavbarItemMobile
                                        icon={
                                            <FaEyeSlash
                                                size={"2rem"}
                                                color="yellow"
                                            />
                                        }
                                        text="Göm ditt besök"
                                        route={ROUTES.GOM_BESOK}
                                    />
                                </VideoTooltip>
                            </Flex>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        );
    }

    return (
        <Flex
            maxW={"100%"}
            w="100vw"
            background={transparent ? "transparent" : "blackish"}
            justifyContent="space-evenly"
            wrap="wrap"
            p={8}
            zIndex={100}
        >
            <Link href="/">
                <Image
                    cursor={"pointer"}
                    width={"auto"}
                    height={"auto"}
                    maxHeight="100px"
                    src="/images/boujt_icon.png"
                    alt="boujt logo"
                />
            </Link>

            <Flex
                alignItems={"center"}
                justifyContent="center"
                width={"70%"}
                gap={3}
            >
                <VideoTooltip src={Kroppen.src}>
                    <NavbarItem
                        icon={<FaBalanceScale size={"2rem"} color="yellow" />}
                        text="Känslor och rättigheter"
                        route="/kanslor-och-rattigheter"
                    />
                </VideoTooltip>

                <VideoTooltip src={Stod.src}>
                    <NavbarItem
                        icon={<FaHeart size={"2rem"} color="yellow" />}
                        text="Få stöd"
                        route={ROUTES.FA_STOD}
                    />
                </VideoTooltip>
                <VideoTooltip src={OmOss.src}>
                    <NavbarItem
                        icon={<FaAddressCard size={"2rem"} color="yellow" />}
                        text="Om oss"
                        route={ROUTES.OM_OSS}
                    />
                </VideoTooltip>

                <VideoTooltip src={Kontakt.src}>
                    <NavbarItem
                        icon={<FaEnvelope size={"2rem"} color="yellow" />}
                        text="Kontakta oss"
                        route={ROUTES.KONTAKTA_OSS}
                    />
                </VideoTooltip>

                <VideoTooltip src={GomBesok.src}>
                    <NavbarItem
                        icon={<FaEyeSlash size={"2rem"} color="yellow" />}
                        text="Göm ditt besök"
                        route={ROUTES.GOM_BESOK}
                    />
                </VideoTooltip>
            </Flex>
        </Flex>
    );
};

export default Navbar;
