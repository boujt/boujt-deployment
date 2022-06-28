import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	Flex,
	Input,
	Textarea,
	Button,
	Spinner,
} from "@chakra-ui/react";

type Props = {
	open: boolean;
	onClose: () => void;
	onSubmit: () => void;
};

const CreateEvent: React.FC<Props> = ({ open, onClose, onSubmit }) => {
	if (!open) return null;

	return (
		<Modal size={"2xl"} isOpen={true} onClose={() => onClose()}>
			<ModalOverlay />

			<ModalContent width={"100%"}>
				<ModalCloseButton />
				<ModalBody borderRadius={8} backgroundColor={"white"} py={5}>
					<Flex flexDirection={"column"} gap={5}></Flex>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default CreateEvent;
