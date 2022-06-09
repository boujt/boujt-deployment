import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

interface SyssnareStatusProps {
  status: string;
}

export const SyssnareStatus: React.FC<SyssnareStatusProps> = ({ status }) => {
  const color =
    status === "active"
      ? "green.300"
      : status === "incall"
      ? "orange.300"
      : "red.300";
  return (
    <Flex
      paddingTop={2}
      paddingBottom={2}
      marginTop={4}
      justifyContent={"center"}
      alignItems="center"
      backgroundColor="green.300"
      borderRadius={4}
    >
      <Text color="white">Tillgänglig</Text>
    </Flex>
  );
};
