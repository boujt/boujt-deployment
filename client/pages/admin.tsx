import React from "react";
import Strapi from "strapi-sdk-js";
import { useStrapi } from "../auth/auth";
import LoginForm from "../components/LoginForm";
export default function Admin() {
  const { strapi, user, logout, loading } = useStrapi();
  console.log(user);
  return (
    <div>
      {!user && <LoginForm />}
      {user && (
        <>
          <button onClick={logout}>logout</button>
          <p>INLOGGAD SOM ADMIN</p>
        </>
      )}
    </div>
  );
}
