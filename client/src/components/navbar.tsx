import { Flex, Image, Text } from "@chakra-ui/react";
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
type NavbarItemProps = {
	text: string;
	route: string;
};
const NavbarItem: NextPage<NavbarItemProps> = (props: NavbarItemProps) => {
	return (
		<Link href={props.route}>
			<Text
				noOfLines={1}
				marginTop={"auto"}
				marginBottom={"auto"}
				variant="link"
				fontSize={{ base: "14px", md: "18px", lg: "22px" }}
				padding={3}
			>
				{props.text}
			</Text>
		</Link>
	);
};

const Navbar: NextPage = () => {
	return (
		<Flex
			maxW={"100%"}
			w="100vw"
			background={"blackish"}
			justifyContent="space-evenly"
			wrap="wrap"
			p={8}
		>
			<Link href="/">
				<Image
					width={"171px"}
					height={"47px"}
					src="/images/icon.png"
					alt="boujt logo"
				/>
			</Link>
			<Flex>
				<VideoTooltip src={Kroppen.src}>
					<NavbarItem text="Känslor och rättigheter" route="/kor" />
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
					<NavbarItem text="Kontakta oss" route={ROUTES.KONTAKTA_OSS} />
				</VideoTooltip>

				<VideoTooltip src={GomBesok.src}>
					<NavbarItem text="Göm ditt besök" route={ROUTES.GOM_BESOK} />
				</VideoTooltip>
			</Flex>
		</Flex>
	);
};

export default Navbar;
