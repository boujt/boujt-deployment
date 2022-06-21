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
import { FaBars, FaHamburger, FaStar } from "react-icons/fa";
import { useState } from "react";

type NavbarItemProps = {
    text: string;
    route: string;
};

const NavbarItem: NextPage<NavbarItemProps> = (props: NavbarItemProps) => {
    return (
        <Link href={props.route}>
            <Text
                cursor={"pointer"}
                noOfLines={1}
                marginTop={"auto"}
                marginBottom={"auto"}
                variant="link"
                fontSize={{ base: "14px", md: "18px", lg: "23px" }}
                padding={3}
            >
                {props.text}
            </Text>
        </Link>
    );
};

type NavbarItemMobileProps = {
    text: string;
    route: string;
};

const NavbarItemMobile: NextPage<NavbarItemMobileProps> = (
    props: NavbarItemMobileProps
) => {
    return (
        <Link href={props.route}>
            <Flex cursor={"pointer"} alignItems={"center"}>
                <FaStar color="yellow" />
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
    const [isLessThan900] = useMediaQuery("(max-width: 1070px)");
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
                        width={"171px"}
                        height={"47px"}
                        src="/images/icon.png"
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
                                        text="Känslor och rättigheter"
                                        route="/kanslor-och-rattigheter"
                                    />
                                </VideoTooltip>

                                <VideoTooltip src={Frageladan.src}>
                                    <NavbarItemMobile
                                        text="Frågelådan"
                                        route={ROUTES.FRAGELADA}
                                    />
                                </VideoTooltip>
                                <VideoTooltip src={Stod.src}>
                                    <NavbarItemMobile
                                        text="Få stöd"
                                        route={ROUTES.FA_STOD}
                                    />
                                </VideoTooltip>
                                <VideoTooltip src={OmOss.src}>
                                    <NavbarItemMobile
                                        text="Om oss"
                                        route={ROUTES.OM_OSS}
                                    />
                                </VideoTooltip>

                                <VideoTooltip src={Kontakt.src}>
                                    <NavbarItemMobile
                                        text="Kontakta oss"
                                        route={ROUTES.KONTAKTA_OSS}
                                    />
                                </VideoTooltip>

                                <VideoTooltip src={GomBesok.src}>
                                    <NavbarItemMobile
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
                    width={"171px"}
                    height={"47px"}
                    src="/images/icon.png"
                    alt="boujt logo"
                />
            </Link>

            <Flex>
                <VideoTooltip src={Kroppen.src}>
                    <NavbarItem
                        text="Känslor och rättigheter"
                        route="/kanslor-och-rattigheter"
                    />
                </VideoTooltip>

                <VideoTooltip src={Frageladan.src}>
                    <NavbarItem text="Frågelådan" route={ROUTES.FRAGELADA} />
                </VideoTooltip>
                <VideoTooltip src={Stod.src}>
                    <NavbarItem text="Få stöd" route={ROUTES.FA_STOD} />
                </VideoTooltip>
                <VideoTooltip src={OmOss.src}>
                    <NavbarItem text="Om oss" route={ROUTES.OM_OSS} />
                </VideoTooltip>

                <VideoTooltip src={Kontakt.src}>
                    <NavbarItem
                        text="Kontakta oss"
                        route={ROUTES.KONTAKTA_OSS}
                    />
                </VideoTooltip>

                <VideoTooltip src={GomBesok.src}>
                    <NavbarItem
                        text="Göm ditt besök"
                        route={ROUTES.GOM_BESOK}
                    />
                </VideoTooltip>
            </Flex>
        </Flex>
    );
};

export default Navbar;
