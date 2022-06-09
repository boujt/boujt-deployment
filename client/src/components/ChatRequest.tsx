import { Button, Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaVideo } from "react-icons/fa";
import { useStrapi } from "../auth/auth";
import { ProfileMenu } from "./ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";

interface ChatRequestProps {
  is_video: boolean;
  time: number;
  token: string;
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + "m " + (seconds < 10 ? "0" : "") + seconds + "s";
}

export const ChatRequest: React.FC<ChatRequestProps> = ({
  time,
  is_video,
  token,
}) => {
  const { strapi, user } = useStrapi();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);

  if (is_video) {
    return (
      <Flex
        justifyContent={"space-between"}
        flexDirection="row"
        border="1px solid gray"
        paddingTop={5}
        paddingBottom={5}
        paddingRight="6"
        borderRadius={7}
      >
        <Flex justifyContent="center" alignItems="center" width={"30%"}>
          <FaVideo color="black" size={"30"} />
        </Flex>
        <Flex width={250} flexDirection={"column"}>
          <Flex justifyContent={"space-between"} marginBottom="4">
            <Text fontSize={"20"}>Videosamtal</Text>
            <Text>{millisToMinutesAndSeconds(time)}</Text>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Button colorScheme={"blue"} variant={"solid"}>
              Godkänn
            </Button>
            <Button>Neka</Button>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  return <Flex></Flex>;
};
