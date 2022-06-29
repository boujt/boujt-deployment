import React, {
    useState,
    useEffect,
    useContext,
    createContext,
    Provider,
    ReactNode,
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
    logout: () => console.log("first"),
    setSyssnareStatus: () => console.error("Strapi not initiated"),
    error: {},
};

const authContext = createContext<StrapiContext>(defaultSettings);

interface Props {
    children?: ReactNode;
}

export function AuthProvider({ children }: Props) {
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
        url: "https://boujt-app-6a3vb.ondigitalocean.app/",
        prefix: "/api",
        store: {
            key: "strapi_jwt",
            useLocalStorage: false,
            cookieOptions: { path: "/" },
        },
        axiosOptions: {},
    });

    const [user, setUser] = useState<StrapiUser | null>(null);

    const setSyssnareStatus = (status: typeof SYSSNARE_STATUS) => {
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
                doSetStatusSyssnare(SYSSNARE_STATUS.ONLINE, strapi.user.id)
                    .then((res) => {
                        const updated_user = res.data;
                        delete updated_user.role;
                        setUser(updated_user);
                        setLoading(false);
                    })
                    .catch((er) => {
                        console.log(er);
                    });
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
        doSetStatusSyssnare(SYSSNARE_STATUS.OFFLINE, user.id)
            .then((res) => {
                strapi.logout();
                setUser(null);
            })
            .catch((er) => {
                console.log(er);
            });
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
