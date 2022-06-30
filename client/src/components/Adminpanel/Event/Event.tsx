import {
    Box,
    Button,
    Center,
    Flex,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { populateSyssnare } from "../../../../utils/helperFunctions";
import { Event } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
import CreateAndEditEvent from "./CreateEvent";

import EventModal from "./EventModal";
import UpdateEvent from "./UpdateEvent";
import ViewEvents from "./ViewEvents";

export const EventRoot: React.FC = () => {
    const [allEvents, setAllEvents] = useState<Event[]>([]);
    const [openCreateEvent, setOpenCreateEvent] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [selectedEditEvent, setSelectedEditEvent] = useState<Event | null>(
        null
    );
    const { strapi, user } = useStrapi();

    const getEvents = () => {
        strapi
            ?.find("events", {
                populate: "deep",
                sort: "when:asc",
            })
            .then((res) => {
                const temp_allEvents: Event[] = res.data.map((ev) => {
                    const event: Event = {
                        id: ev.id,
                        title: ev.attributes.title,
                        text: ev.attributes.text,
                        when: ev.attributes.when,
                        whole_day: ev.attributes.whole_day,
                        syssnare: populateSyssnare(ev),
                    };
                    if (ev.attributes.files) {
                        event.files = ev.attributes.files.data;
                    }
                    if (
                        !event.whole_day &&
                        ev.attributes.start &&
                        ev.attributes.end
                    ) {
                        event.end = ev.attributes.end;
                        event.start = ev.attributes.start;
                    }
                    console.log(event);
                    return event;
                });
                setAllEvents(temp_allEvents);
            })
            .catch((er) => {
                console.error(er);
            });
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <Flex
            flexDirection={"column"}
            justifyContent="center"
            alignItems={"center"}
            gap={5}
            minHeight="100%"
            minWidth={300}
            marginTop={20}
        >
            <Flex gap={40}>
                <Text fontSize={20} fontWeight={800}>
                    Event
                </Text>
                <Button
                    onClick={() => setOpenCreateEvent(true)}
                    variant="adminPrimary"
                    maxWidth={150}
                >
                    Skapa event
                </Button>
            </Flex>

            {openCreateEvent && (
                <CreateAndEditEvent
                    open={openCreateEvent}
                    onClose={() => setOpenCreateEvent(false)}
                    onSubmit={() => {
                        getEvents();
                    }}
                />
            )}
            {selectedEditEvent !== null && (
                <UpdateEvent
                    open={selectedEditEvent !== null}
                    onClose={() => {
                        getEvents();
                        setSelectedEditEvent(null);
                    }}
                    onSubmit={() => {}}
                    event={selectedEditEvent}
                />
            )}

            <ViewEvents
                fetchEvents={() => getEvents()}
                allEvents={allEvents}
                onSelectEditEvent={(event: Event) =>
                    setSelectedEditEvent(event)
                }
                onSelectEvent={(event: Event) => setSelectedEvent(event)}
            />
            {selectedEvent !== null && (
                <Modal
                    size={"2xl"}
                    isOpen={true}
                    onClose={() => {
                        getEvents();
                        setSelectedEvent(null);
                    }}
                >
                    <ModalOverlay />

                    <ModalContent width={"100%"}>
                        <ModalCloseButton />
                        <ModalBody borderRadius={8} backgroundColor={"white"}>
                            <EventModal event={selectedEvent} />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </Flex>
    );
};
