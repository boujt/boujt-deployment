import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  Provider,
} from "react";

import Strapi from "strapi-sdk-js";

interface StrapiContext {
  strapi: Object;
}

const defaultSettings: StrapiContext = {
  strapi: {},
};

const authContext = createContext<StrapiContext>(defaultSettings);

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useStrapi = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [strapi, setStrapi] = useState(
    new Strapi({
      url: "https://shark-app-md2sm.ondigitalocean.app/",
      prefix: "/api",
      store: {
        key: "strapi_jwt",
        useLocalStorage: false,
        cookieOptions: { path: "/" },
      },
      axiosOptions: {},
    })
  );

  return {
    strapi,
  };
}
