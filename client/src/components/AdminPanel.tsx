import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useStrapi } from "../auth/auth";
import { ProfileMenu } from "./ProfileMenu";

export const AdminPanel: React.FC = () => {
  const { strapi, user } = useStrapi();
  console.log(user);
  return (
    <>
      <Flex>
        <ProfileMenu name={user?.first_name} />
      </Flex>
    </>
  );
};
