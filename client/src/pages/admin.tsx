import { Flex, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import Strapi from "strapi-sdk-js";
import { useStrapi } from "../auth/auth";
import { AdminPanel } from "../components/AdminPanel";
import LoginForm from "../components/LoginForm";
export default function Admin() {
  const { strapi, user, logout, loading } = useStrapi();

  if (loading) {
    return (
      <Flex flexDirection={"column"}>
        <Text>Laddar</Text>
        <Spinner />
      </Flex>
    );
  }
  return (
    <div>
      {!user && <LoginForm />}
      {user && (
        <>
          <AdminPanel />
        </>
      )}
    </div>
  );
}
