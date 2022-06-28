import { Flex, Spinner, Text } from "@chakra-ui/react";
import Head from "next/head";
import React, { useState } from "react";
import Strapi from "strapi-sdk-js";
import { ADMIN_ROUTES } from "../../utils/constants";
import { useStrapi } from "../auth/auth";
import { AdminPanel } from "../components/Adminpanel/AdminPanel";
import AdminSidebar from "../components/Adminpanel/AdminSidebar";
import { Event } from "../components/Adminpanel/Event/Event";
import { Forum } from "../components/Adminpanel/Forum/Forum";
import LoginForm from "../components/LoginForm";
export default function Admin() {
    const { strapi, user, logout, loading } = useStrapi();
    const [selectedPage, setSelectedPage] = useState<string>(
        ADMIN_ROUTES.CHATT
    );

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
            <Head>
                <title>Adminpanelen</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            {!user && <LoginForm />}
            {user && (
                <AdminSidebar
                    currentPage={selectedPage}
                    setPage={setSelectedPage}
                >
                    {selectedPage === ADMIN_ROUTES.CHATT && <AdminPanel />}

                    {selectedPage === ADMIN_ROUTES.FORUM && <Forum />}
                    {selectedPage === ADMIN_ROUTES.CALENDAR && <Event />}
                </AdminSidebar>
            )}
        </div>
    );
}
