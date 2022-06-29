import { Box, Button, Center, Modal } from "@chakra-ui/react";
import { useState } from "react";
import CreateEvent from "./CreateEvent";
import ViewEvents from "./ViewEvents";

export const Event: React.FC = () => {
    const [openCreateEvent, setOpenCreateEvent] = useState(false);

    return (
        <Center minHeight="100%" minWidth={300} marginTop={20}>
            <CreateEvent
                open={openCreateEvent}
                onClose={() => setOpenCreateEvent(false)}
                onSubmit={() => {}}
            />
            <Button
                onClick={() => setOpenCreateEvent(true)}
                variant="adminPrimary"
            >
                Skapa event
            </Button>
            <ViewEvents />
        </Center>
    );
};
