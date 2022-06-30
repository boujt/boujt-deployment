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
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { ERRORS } from "../../../../utils/constants";
import { useData } from "../../../../utils/fetchData";
import {
    addDays,
    populateSyssnare,
    uploadFile,
} from "../../../../utils/helperFunctions";
import { Event } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
import { DragAndDropInput } from "../DragAndDropInput";
import EventCard from "./EventCard";
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
    file?: File;
};
type FormDataError = {
    time?: string;
    whole_day?: boolean;
    title?: string;
    description?: string;
};

const CreateEvent: React.FC<Props> = ({ open, onClose, onSubmit }) => {
    const { strapi, user } = useStrapi();
    const [date, setDate] = useState(new Date());
    const [error, setError] = useState<FormDataError>({});
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [eventsTheSameDay, setEventsTheSameDay] = useState<Event[]>([]);
    const toast = useToast();

    console.log(date);

    const [formData, setFormData] = useState<FormData>({
        start_time: "",
        end_time: "",
        title: "",
        description: "",
        whole_day: false,
    });

    useEffect(() => {
        strapi
            ?.find("events", {
                populate: "deep",
            })
            .then((res) => {
                const temp: Event[] = [];
                const allEvents = res.data;
                allEvents.map((ev: any) => {
                    if (
                        new Date(ev.attributes.when).toLocaleDateString() ===
                        date.toLocaleDateString()
                    ) {
                        const newEvent: Event = {
                            id: ev.id,
                            title: ev.attributes.title,
                            text: ev.attributes.text,
                            when: ev.attributes.when,
                            whole_day: ev.attributes.whole_day,
                            syssnare: populateSyssnare(ev),
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

    const validateTime = (val: string) => {
        if (!val.includes(":")) return [false, 0, 0];

        const split = val.split(":");

        if (split.length !== 2) return [false, 0, 0];

        const [hours, minutes] = split;

        try {
            const hours_int = parseInt(hours);
            const minutes_int = parseInt(minutes);
            if (
                hours.length === 2 &&
                minutes.length === 2 &&
                hours_int < 24 &&
                hours_int >= 0 &&
                minutes_int >= 0 &&
                minutes_int < 60
            ) {
                return [true, hours_int, minutes_int];
            }
        } catch (error) {
            return [false, 0, 0];
        }
        return [false, 0, 0];
    };

    const submitEvent = async () => {
        setError({});
        const errors: FormDataError = {};
        setIsSubmitting(true);
        if (formData.title.trim() === "") {
            errors.title = ERRORS.INVALID;
        }
        if (formData.description.trim() === "") {
            errors.description = ERRORS.INVALID;
        }
        if (
            !formData.whole_day &&
            (!validateTime(formData.start_time)[0] ||
                !validateTime(formData.end_time)[0])
        ) {
            errors.time = ERRORS.WRONG_FORMAT;
        }

        if (!formData.whole_day && !("time" in errors)) {
            const [a, startHour, startMinutes] = validateTime(
                formData.start_time
            );
            const [b, endHour, endMinutes] = validateTime(formData.end_time);

            if (
                startHour > endHour ||
                (startHour === endHour && startMinutes >= endMinutes)
            ) {
                errors.time = ERRORS.INVALID;
            }
        }

        if (Object.keys(errors).length !== 0) {
            setError(errors);
            setIsSubmitting(false);
            return;
        }

        const data: any = {
            title: formData.title,
            text: formData.description,
            whole_day: formData.whole_day,
            when: addDays(date, 1),
            syssnare: user?.id,
        };

        if (formData.file) {
            const fileID = await uploadFile(formData.file, strapi?.getToken());

            if (fileID !== -1) {
                data.files = fileID;
            }
        }
        const seconds = ":00.000";
        if (!formData.whole_day) {
            data.start = formData.start_time + seconds;
            data.end = formData.end_time + seconds;
        }

        strapi
            ?.create("events", {
                ...data,
            })
            .then((res) => {
                toast({
                    title: "Event skapat!",
                    description: "Ditt event är skapat och publicerat",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                });
                onSubmit();
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

    if (!open) return null;

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

                        <Flex gap={10}>
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
                                                error.time ? "red" : "gray.200"
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
                                                error.time ? "red" : "gray.200"
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
                                {error.time === ERRORS.INVALID && (
                                    <Text color="red">
                                        Sluttiden kan inte vara före starttiden
                                    </Text>
                                )}
                                {error.time === ERRORS.WRONG_FORMAT && (
                                    <Text color="red">
                                        Kontrollera att formatet är skrivet
                                        enligt hh:mm
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
                        <DragAndDropInput
                            file={formData.file ?? null}
                            onChange={(file: File) => {
                                setFormData((prev) => {
                                    return { ...prev, file: file };
                                });
                            }}
                        />
                        <Flex justifyContent={"center"}>
                            {eventsTheSameDay.length === 0 && (
                                <Text textAlign={"center"}>
                                    Hittade inga andra event under denna dag
                                </Text>
                            )}
                            {eventsTheSameDay.length !== 0 && (
                                <Box width={"100%"}>
                                    <Text
                                        color="red"
                                        textAlign={"center"}
                                        marginBottom={5}
                                    >
                                        Det finns {eventsTheSameDay.length}{" "}
                                        event under denna dag
                                    </Text>
                                    {eventsTheSameDay.map((ev) => {
                                        return (
                                            <EventCard
                                                key={ev.id}
                                                event={ev}
                                                onClick={() => {}}
                                                onEdit={() => {}}
                                                fetchEvents={() => {}}
                                            />
                                        );
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
