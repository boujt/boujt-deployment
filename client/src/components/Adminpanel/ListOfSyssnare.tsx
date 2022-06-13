import { useRef, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Spinner,
  Alert,
  AlertIcon,
  List,
  ListItem,
  ListIcon,
  Text,
  Badge,
  Divider,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaCheck } from "react-icons/fa";

import { Syssnare } from "../../../utils/types";
import { getColorFromStatus, getTextFromStatus } from "./SyssnareStatus";
import { SYSSNARE_STATUS } from "../../../utils/constants";
import { userInfo } from "os";
import { useStrapi } from "../../auth/auth";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

export type ListOfSyssnareProps = {
  syssnare: Syssnare[];
};

const ListOfSyssnare: React.FC<ListOfSyssnareProps> = ({ syssnare }) => {
  const { user } = useStrapi();
  return (
    <>
      <Text marginBottom={5} fontWeight={900}>
        Alla syssnare
      </Text>
      <List spacing={3}>
        {syssnare.map((sys) => {
          if (sys.status === SYSSNARE_STATUS.OFFLINE || sys.id === user.id)
            return null;
          return (
            <>
              <ListItem key={sys.id}>
                <Text fontWeight={700}>{sys.name}</Text>
                <Badge color={getColorFromStatus(sys.status)}>
                  {getTextFromStatus(sys.status)}
                </Badge>
                <Text></Text>
              </ListItem>
              <Divider />
            </>
          );
        })}

        {syssnare.map((sys) => {
          if (sys.status !== SYSSNARE_STATUS.OFFLINE) return null;
          return (
            <>
              <ListItem key={sys.id}>
                <Text color="gray" fontWeight={700}>
                  {sys.name}
                </Text>
                <Badge color={getColorFromStatus(sys.status)}>
                  {getTextFromStatus(sys.status)}
                </Badge>
                <Text></Text>
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </>
  );
};

export default ListOfSyssnare;
