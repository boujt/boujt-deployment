import { Box, Modal } from "@chakra-ui/react";
import { useState } from "react";
import CreateEvent from "./CreateEvent";
import ViewEvents from "./ViewEvents";

const Event: React.FC = () => {
	const [edit, setEdit] = useState(false);

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
