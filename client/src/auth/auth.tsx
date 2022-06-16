import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  Provider,
} from "react";

import Strapi, { StrapiUser } from "strapi-sdk-js";
import { Userdata } from "../components/LoginForm";
import { ErrorStrapiUser } from "../../utils/types";
import { SYSSNARE_STATUS } from "../../utils/constants";
import { doSetStatusSyssnare } from "../../utils/service";

interface StrapiContext {
  strapi: Strapi | null;
  user: StrapiUser | null;
  loading: boolean;
  login: (data: Userdata) => boolean;
  logout: () => void;
  error: ErrorStrapiUser;
  setSyssnareStatus: Function;
}

const defaultSettings: StrapiContext = {
  strapi: null,
  user: null,
  loading: false,
  login: () => false,
  logout: () => console.error("Strapi not initiated"),
  setSyssnareStatus: () => console.error("Strapi not initiated"),
  error: {},
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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorStrapiUser>({});
  const strapi = new Strapi({
    url: "https://shark-app-md2sm.ondigitalocean.app/",
    prefix: "/api",
    store: {
      key: "strapi_jwt",
      useLocalStorage: false,
      cookieOptions: { path: "/" },
    },
    axiosOptions: {},
  });

  const [user, setUser] = useState<StrapiUser | null>(null);

  const setSyssnareStatus = (status) => {
    doSetStatusSyssnare(status, user.id).then((res) => {
      const updated_user = res.data;
      delete updated_user.role;
      setUser(updated_user);
    });
  };

  const login = async (data: Userdata) => {
    console.log(data);
    setLoading(true);
    setError({});

    strapi
      ?.login({ identifier: data.uid, password: data.pw })
      .then((res) => {
        setUser(strapi.user);
        setLoading(false);
      })
      .catch((er) => {
        console.error(er);
        setError((prev) => {
          return { ...prev, invalid_credentials: true };
        });
        setLoading(false);
      });
  };

  const logout = () => {
    strapi.logout();
    setUser(null);
  };

  useEffect(() => {
    setLoading(true);
    strapi
      .fetchUser()
      .then((res) => {
        setLoading(false);
        setUser(res);
      })
      .catch((er) => {
        setLoading(false);
      });
    console.log(strapi);
  }, []);

  return {
    strapi,
    loading,
    user,
    login,
    logout,
    setSyssnareStatus,
    error,
  };
}
