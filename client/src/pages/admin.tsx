import { Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Strapi from "strapi-sdk-js";
import { ADMIN_ROUTES } from "../../utils/constants";
import { useStrapi } from "../auth/auth";
import { AdminPanel } from "../components/Adminpanel/AdminPanel";
import AdminSidebar from "../components/Adminpanel/AdminSidebar";
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
            {!user && <LoginForm />}
            {user && (
                <AdminSidebar
                    currentPage={selectedPage}
                    setPage={setSelectedPage}
                >
                    {selectedPage === ADMIN_ROUTES.CHATT && <AdminPanel />}

                    {selectedPage === ADMIN_ROUTES.FORUM && <Forum />}
                    {selectedPage === ADMIN_ROUTES.CALENDAR && (
                        <Text>Calendar</Text>
                    )}
                </AdminSidebar>
            )}
        </div>
    );
}
