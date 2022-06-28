import { Box, Modal } from "@chakra-ui/react";
import { useState } from "react";
import CreateEvent from "./CreateEvent";
import ViewEvents from "./ViewEvents";

export const Event: React.FC = () => {
    const [edit, setEdit] = useState(true);

    return (
        <Box>
            <CreateEvent
                open={edit}
                onClose={() => setEdit(false)}
                onSubmit={() => {}}
            />
            <ViewEvents />
        </Box>
    );
};
