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
  const [syssnare, setSyssnare] = useState<Syssnare[]>([]);

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
    <Flex flexDirection={"column"}>
      {/*TODO: Lägg till Avatar*/}
      <Flex>
        <Avatar src={user.profile_image}>
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
                <MenuItem
                  icon={<FaFolder color="turquoise" />}
                  as="a"
                  target="_blank"
                  href="https://shark-app-md2sm.ondigitalocean.app/admin/auth/login"
                >
                  <Text color="turquoise">Content manager</Text>
                </MenuItem>
                <MenuItem
                  icon={<FaDoorOpen color="red" />}
                  onClick={() => logout()}
                >
                  <Text color="red">Logga ut</Text>
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Flex>
      <SyssnareStatus />
      <ListOfSyssnare syssnare={syssnare} />
    </Flex>
  );
};
