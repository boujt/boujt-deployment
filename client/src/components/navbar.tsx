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
      <Image
        width={"171px"}
        height={"47px"}
        src="/images/icon.png"
        alt="boujt logo"
      />
      <Flex>
        <VideoTooltip src={Kroppen.src}>
          <NavbarItem text="Känslor och rättigheter" route="/kor" />
        </VideoTooltip>

        <VideoTooltip src={Frageladan.src}>
          <NavbarItem text="Frågelådan" route="/question-box" />
        </VideoTooltip>
        <VideoTooltip src={Stod.src}>
          <NavbarItem text="Få stöd" route="/get-support" />
        </VideoTooltip>
        <VideoTooltip src={OmOss.src}>
          <NavbarItem text="Om oss" route="/about" />
        </VideoTooltip>

        <VideoTooltip src={Kontakt.src}>
          <NavbarItem text="Kontakta oss" route="/contact" />
        </VideoTooltip>

        <VideoTooltip src={GomBesok.src}>
          <NavbarItem text="Göm ditt besök" route="/gom-ditt-besok" />
        </VideoTooltip>
      </Flex>
    </Flex>
  );
};

export default Navbar;
