import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { NextPage } from "next";
import { Syssnare } from "../../utils/types";
import { SyssnareItem } from "./SyssnareItem";

interface AvailableSyssnareProps {
  syssnare: Syssnare[];
  onMakeRequest: Function;
}

const AvailableSyssnare: React.FC<AvailableSyssnareProps> = ({
  syssnare,
  onMakeRequest,
}) => {
  return (
    <Flex>
      {syssnare.map((sys) => {
        return (
          <SyssnareItem
            key={sys.id}
            syssnare={sys}
            onCreateRequest={(syssnare: Syssnare, isVideo: boolean) =>
              onMakeRequest(syssnare, isVideo)
            }
          />
        );
      })}
    </Flex>
  );
};

export default AvailableSyssnare;
