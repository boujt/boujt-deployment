import { Flex, Image, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import Link from "next/link";

type NavbarItemProps = {
    text: string,
    route: string
}
const NavbarItem: NextPage<NavbarItemProps> = (props: NavbarItemProps) => {
    return (
        <Link href={props.route}>
            <Text  
                noOfLines={1}
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
                width={'171px'}
                height={'47px'}
                src="/images/icon.png"
                alt="boujt logo"
            />
            <Flex>
                <NavbarItem text="Känslor och rättigheter" route="/kor"/>
                <NavbarItem text="Frågelådan" route="/question-box"/>
                <NavbarItem text="Få stöd" route="/get-support"/>
                <NavbarItem text="Om oss" route="/about"/>
                <NavbarItem text="Kontakta oss" route="/contact"/>
                <NavbarItem text="Göm ditt besök" route="/gom-ditt-besok"/>
            </Flex>
        </Flex>
    )
}

export default Navbar;