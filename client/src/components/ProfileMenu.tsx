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
import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowCircleRight,
  FaArrowRight,
  FaChevronDown,
  FaDoorOpen,
} from "react-icons/fa";
import { useStrapi } from "../auth/auth";

interface ProfileMenuProps {
  name: string;
}

export const ProfileMenu: React.FC<ProfileMenuProps> = ({ name }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { logout } = useStrapi();
  return (
    <Flex>
      {/*TODO: Lägg till Avatar*/}
      <Avatar>
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>
      <Flex marginLeft={2} flexDirection={"column"}>
        <Text fontSize={20} fontWeight={600}>
          {name}
        </Text>
        <Text>Syssnare</Text>
      </Flex>
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              backgroundColor={"transparent"}
              leftIcon={<FaChevronDown />}
              isActive={isOpen}
              as={Button}
            ></MenuButton>
            <MenuList>
              <MenuItem icon={<FaDoorOpen />} onClick={() => logout()}>
                Logga ut
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};
