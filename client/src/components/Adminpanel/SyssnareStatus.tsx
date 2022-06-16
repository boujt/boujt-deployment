import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { SYSSNARE_STATUS } from "../../../utils/constants";
import { useStrapi } from "../../auth/auth";

interface SyssnareStatusProps {}

export const getColorFromStatus = (status: string) => {
  if (status === SYSSNARE_STATUS.ONLINE) {
    return "red";
  }
  if (status === SYSSNARE_STATUS.IN_CALL) {
    return "orange";
  }
  if (status === SYSSNARE_STATUS.AVAILABLE) {
    return "green";
  }
  if (status === SYSSNARE_STATUS.OFFLINE) {
    return "gray";
  }
};

export const getTextFromStatus = (status) => {
  if (status === SYSSNARE_STATUS.ONLINE) {
    return "Tar ej emot samtal";
  }
  if (status === SYSSNARE_STATUS.IN_CALL) {
    return "I samtal";
  }
  if (status === SYSSNARE_STATUS.AVAILABLE) {
    return "Redo för samtal";
  }
  if (status === SYSSNARE_STATUS.OFFLINE) {
    return "Offline";
  }
};

export const SyssnareStatus: React.FC<SyssnareStatusProps> = ({}) => {
  const { user } = useStrapi();

  return (
    <Flex
      paddingTop={2}
      paddingBottom={2}
      marginTop={4}
      justifyContent={"center"}
      alignItems="center"
      backgroundColor={getColorFromStatus(user.status)}
      borderRadius={4}
      marginBottom={10}
    >
      <Text color="white">{getTextFromStatus(user.status)}</Text>
    </Flex>
  );
};
