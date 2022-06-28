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
    Text,
    Checkbox,
    FormHelperText,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ERRORS } from "../../../../utils/constants";
import { useData } from "../../../../utils/fetchData";
import { Event } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
type Props = {
    open: boolean;
    onClose: () => void;
    onSubmit: () => void;
};

type FormData = {
    start_time: string;
    end_time: string;
    whole_day: boolean;
    title: string;
    description: string;
};
type FormDataError = {
    start_time?: string;
    end_time?: string;
    whole_day?: boolean;
    title?: string;
    description?: string;
};

const CreateEvent: React.FC<Props> = ({ open, onClose, onSubmit }) => {
    if (!open) return null;

    const { strapi, user } = useStrapi();
    const [date, setDate] = useState(new Date());
    const [error, setError] = useState<FormDataError>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [eventsTheSameDay, setEventsTheSameDay] = useState<Event[]>([]);

    const [formData, setFormData] = useState<FormData>({
        start_time: "",
        end_time: "",
        title: "",
        description: "",
        whole_day: false,
    });

    useEffect(() => {
        axios.get("http://localhost:1337/api/events").then((res) => {
            const temp: Event[] = [];
            const allEvents = res.data.data;
            allEvents.map((ev) => {
                if (
                    new Date(ev.attributes.when).toLocaleDateString() ===
                    date.toLocaleDateString()
                ) {
                    const newEvent: Event = {
                        title: ev.attributes.title,
                        text: ev.attributes.text,
                        when: ev.attributes.when,
                        whole_day: ev.attributes.whole_day,
                    };
                    if (!newEvent.whole_day) {
                        newEvent.start = ev.attributes.start;
                        newEvent.end = ev.attributes.end;
                    }
                    temp.push(newEvent);
                }
            });
            setEventsTheSameDay(temp);
        });
    }, [date]);

    console.log(eventsTheSameDay);

    const validateTime = (val: string) => {
        if (!val.includes(":")) return false;

        const split = val.split(":");

        if (split.length !== 2) return false;

        const [start, end] = split;

        try {
            if (
                start.length === 2 &&
                end.length === 2 &&
                parseInt(start) < 24 &&
                parseInt(start) >= 0 &&
                parseInt(end) >= 0 &&
                parseInt(end) < 60
            ) {
                return true;
            }
        } catch (error) {
            return false;
        }
        return false;
    };

    const submitEvent = () => {
        setError({});
        const errors: FormDataError = {};
        setIsSubmitting(true);
        if (formData.title.trim() === "") {
            errors.title = ERRORS.INVALID;
        }
        if (formData.description.trim() === "") {
            errors.description = ERRORS.INVALID;
        }
        if (!formData.whole_day && !validateTime(formData.start_time)) {
            errors.start_time = ERRORS.INVALID;
        }
        if (!formData.whole_day && !validateTime(formData.end_time)) {
            errors.end_time = ERRORS.INVALID;
        }

        if (Object.keys(errors).length !== 0) {
            setError(errors);
            setIsSubmitting(false);
            return;
        }

        //TODO: SWAP TO REAL API ROUTE WITH AUTH
        const data = {
            title: formData.title,
            text: formData.description,
            whole_day: formData.whole_day,
            when: date,
        };
        const seconds = ":00.000";
        if (!formData.whole_day) {
            data.start = formData.start_time + seconds;
            data.end = formData.end_time + seconds;
        }
        axios
            .post("http://localhost:1337/api/events", {
                data: data,
            })
            .then((res) => {
                onClose();
            })
            .catch((er) => {
                console.error(er);
                setIsSubmitting(false);
            });
    };

    const changeEndTime = (val: string) => {
        setFormData((prev) => {
            return { ...prev, end_time: val };
        });
    };
    const changeStartTime = (val: string) => {
        setFormData((prev) => {
            return { ...prev, start_time: val };
        });
    };

    return (
        <Modal size={"3xl"} isOpen={true} onClose={() => onClose()}>
            <ModalOverlay />

            <ModalContent width={"100%"}>
                <ModalCloseButton />
                <ModalBody borderRadius={8} backgroundColor={"white"} py={5}>
                    <Flex flexDirection={"column"} gap={5}>
                        <Text fontSize={25} fontWeight={800}>
                            Skapa nytt event
                        </Text>

                        <Flex gap={4}>
                            <Flex
                                width={"50%"}
                                gap={5}
                                flexDirection={"column"}
                            >
                                <Input
                                    borderColor={
                                        error.title ? "red" : "gray.200"
                                    }
                                    value={formData.title}
                                    placeholder="Titel"
                                    onChange={(t) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                title: t.target.value,
                                            };
                                        })
                                    }
                                />
                                {error.title && (
                                    <Text color="red">
                                        Fältet får inte vara tomt
                                    </Text>
                                )}

                                <Textarea
                                    borderColor={
                                        error.description ? "red" : "gray.200"
                                    }
                                    value={formData.description}
                                    placeholder="Beskrivning"
                                    rows={4}
                                    onChange={(t) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                description: t.target.value,
                                            };
                                        })
                                    }
                                />
                                {error.description && (
                                    <Text color="red">
                                        Fältet får inte vara tomt
                                    </Text>
                                )}
                                <Box>
                                    <FormLabel fontSize={15} color="gray.600">
                                        Skriv i formatet hh:mm
                                    </FormLabel>
                                    <Flex gap={5} alignItems="center">
                                        <Input
                                            borderColor={
                                                error.start_time
                                                    ? "red"
                                                    : "gray.200"
                                            }
                                            disabled={formData.whole_day}
                                            value={formData.start_time}
                                            textAlign={"center"}
                                            placeholder="16:00"
                                            onChange={(t) =>
                                                changeStartTime(t.target.value)
                                            }
                                        />
                                        <Text>till</Text>
                                        <Input
                                            placeholder="20:00"
                                            borderColor={
                                                error.end_time
                                                    ? "red"
                                                    : "gray.200"
                                            }
                                            disabled={formData.whole_day}
                                            textAlign={"center"}
                                            value={formData.end_time}
                                            onChange={(t) =>
                                                changeEndTime(t.target.value)
                                            }
                                        />
                                    </Flex>
                                </Box>
                                {(error.end_time || error.start_time) && (
                                    <Text color="red">
                                        Kontrollera formatet på tiden. Den måste
                                        vara hh:mm
                                    </Text>
                                )}

                                <Checkbox
                                    checked={formData.whole_day}
                                    onChange={(t) =>
                                        setFormData((prev) => {
                                            return {
                                                ...prev,
                                                whole_day: t.target.checked,
                                            };
                                        })
                                    }
                                >
                                    Heldag
                                </Checkbox>
                            </Flex>
                            <Flex
                                width={"50%"}
                                gap={5}
                                flexDirection={"column"}
                            >
                                <Calendar
                                    locale="sv-SE"
                                    onChange={setDate}
                                    value={date}
                                />
                            </Flex>
                        </Flex>
                        <Flex justifyContent={"center"}>
                            {eventsTheSameDay.length === 0 && (
                                <Text textAlign={"center"}>
                                    Hittade inga andra event under denna dag
                                </Text>
                            )}
                            {eventsTheSameDay.length !== 0 && (
                                <Box width={"100%"}>
                                    <Text textAlign={"center"}>
                                        Det finns {eventsTheSameDay.length}{" "}
                                        event under denna dag
                                    </Text>
                                    {eventsTheSameDay.map((ev) => {
                                        return <Text>ett event här</Text>;
                                    })}
                                </Box>
                            )}
                        </Flex>
                        <Button
                            disabled={isSubmitting}
                            onClick={submitEvent}
                            variant={"adminPrimary"}
                        >
                            {isSubmitting ? <Spinner /> : "Skapa event"}
                        </Button>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default CreateEvent;
