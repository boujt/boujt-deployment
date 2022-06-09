import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useStrapi } from "../auth/auth";
import { ListChatRequests } from "./ListChatRequests";
import { ProfileMenu } from "./ProfileMenu";
import { SyssnareStatus } from "./SyssnareStatus";

export const AdminPanel: React.FC = () => {
  const { strapi, user } = useStrapi();
  console.log(user);
  const [status, setStatus] = useState<string>("inactive"); // LÄGG TILL ACTIVE I DATABAS
  return (
    <div>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-end"}
        paddingRight={10}
        paddingTop={10}
      >
        <Flex maxWidth={200} flexDirection={"column"}>
          <ProfileMenu name={user?.username || "Syssnare"} />
          <SyssnareStatus status={status} />
        </Flex>
      </Flex>
      <Flex
        width={"100%"}
        justifyContent="center"
        alignItems={"center"}
        paddingTop="50"
      >
        <ListChatRequests />
      </Flex>
    </div>
  );
};
