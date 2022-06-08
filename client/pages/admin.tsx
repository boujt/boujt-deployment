import React from "react";
import Strapi from "strapi-sdk-js";
import { useAuth, useStrapi } from "../auth/auth";
export default function Admin() {
  const { strapi } = useStrapi();
  console.log(strapi);

  return (
    <div>
      <button
        onClick={() =>
          strapi.login({
            identifier: "jakka150@email.com",
            password: "Jakka150!",
          })
        }
      >
        Login
      </button>
      <button onClick={() => strapi.logout()}>Log out</button>
    </div>
  );
}
