import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { SYSSNARE_STATUS } from "../../utils/constants";

interface SyssnareStatusProps {
  status: string;
}

export const SyssnareStatus: React.FC<SyssnareStatusProps> = ({ status }) => {
  const getColorFromStatus = () => {
    if (status === SYSSNARE_STATUS.ONLINE) {
      return "red";
    }
    if (status === SYSSNARE_STATUS.IN_CALL) {
      return "orange";
    }
    if (status === SYSSNARE_STATUS.AVAILABLE) {
      return "green";
    }
  };
  const getTextFromStatus = () => {
    if (status === SYSSNARE_STATUS.ONLINE) {
      return "Tar ej emot samtal";
    }
    if (status === SYSSNARE_STATUS.IN_CALL) {
      return "I samtal";
    }
    if (status === SYSSNARE_STATUS.AVAILABLE) {
      return "Redo för samtal";
    }
  };

  return (
    <Flex
      paddingTop={2}
      paddingBottom={2}
      marginTop={4}
      justifyContent={"center"}
      alignItems="center"
      backgroundColor={getColorFromStatus()}
      borderRadius={4}
    >
      <Text color="white">{getTextFromStatus()}</Text>
    </Flex>
  );
};
