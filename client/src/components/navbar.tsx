import { Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

type NavbarItemProps = {
    text: string,
    route: string
}
const NavbarItem: NextPage<NavbarItemProps> = (props: NavbarItemProps) => {
    return (
        <Link href={props.route}>
            <Text 
                marginTop={'auto'} 
                marginBottom={'auto'} 
                variant='link' 
                fontSize={{base: '14px', md: '18px', lg: '22px'}}
                padding={3}
            >
                {props.text}
            </Text>
        </Link>
    )
}

const Navbar: NextPage = () => {
    return (
        <Flex 
            maxW={'100%'}
            w="100vw" 
            background={'blackish'}
            justifyContent="space-evenly"
            wrap="wrap"
            p={8}
        >
            <Image
                src="/images/icon.png"
                width={"150%"}
                height={47}
                alt="boujt logo"
            />
            <Flex>
                <NavbarItem text="Känslor och rättigheter" route="/kor"/>
                <NavbarItem text="Frågelådan" route="/question-box"/>
                <NavbarItem text="Få stöd" route="/get-support"/>
                <NavbarItem text="Om oss" route="/about"/>
                <NavbarItem text="Kontakta oss" route="/contact"/>
                <NavbarItem text="Göm ditt besök" route="/hide-your-visit"/>
            </Flex>
        </Flex>
    )
}

export default Navbar;