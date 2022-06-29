import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useBreakpointValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { FaCalendar, FaListUl } from "react-icons/fa";
import { useData } from "../../../../utils/fetchData";
import { populateSyssnare } from "../../../../utils/helperFunctions";
import { Event, EventData } from "../../../../utils/types";
import { useStrapi } from "../../../auth/auth";
import EventCard from "./EventCard";

const ViewEvents: React.FC<{
    onSelectEvent: Function;
    allEvents: Event[];
    fetchEvents: Function;

    onSelectEditEvent: Function;
}> = ({ onSelectEvent, onSelectEditEvent, allEvents, fetchEvents }) => {
    // Grab all the events
    // const { data, error } = useData<EventData>("events");

    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const fontSize = useBreakpointValue({ base: "20", md: "30", sm: "25" });
    const [doCalendarView, setDoCalendarView] = useState(false);
    const [date, setDate] = useState(new Date());
    const { strapi, user } = useStrapi();

    useEffect(() => {
        // if (!data) return;

        // data.events.sort

        // Filter to only take events from certain date or not?
        if (!doCalendarView) {
            setFilteredEvents(allEvents);
        } else {
            console.log(allEvents);
            // Filter and only grab the events from currently selected date
            setFilteredEvents(
                allEvents.filter((event) => {
                    return (
                        new Date(event.when).toLocaleDateString() ==
                        date.toLocaleDateString()
                    );
                })
            );
        }
    }, [allEvents, doCalendarView, date]);

    const enabledColor = "#00CCEE";
    const disabledColor = "gray";

    const calendarViewColor = doCalendarView ? enabledColor : disabledColor;
    const allEventsColor = !doCalendarView ? enabledColor : disabledColor;

    return (
        <Flex
            flexDir={"column"}
            alignItems={"center"}
            width="100%"
            gap={"20px"}
        >
            {/* Top selector menu */}
            <Flex
                justifyContent={"center"}
                alignItems={"center"}
                cursor={"pointer"}
                onClick={() => setDoCalendarView(!doCalendarView)}
                gap={8}
            >
                <Flex
                    gap={4}
                    alignItems={"center"}
                    padding={2}
                    borderBottom={
                        !doCalendarView ? `2px solid ${enabledColor}` : "unset"
                    }
                >
                    <FaListUl color={allEventsColor} />
                    <Text color={allEventsColor}>Alla event</Text>
                </Flex>
                <Flex
                    padding={2}
                    gap={4}
                    alignItems={"center"}
                    borderBottom={
                        doCalendarView ? `2px solid ${enabledColor}` : "unset"
                    }
                >
                    <FaCalendar color={calendarViewColor} />
                    <Text color={calendarViewColor}>Kalendervy</Text>
                </Flex>
            </Flex>
            {doCalendarView && (
                <Calendar locale="sv-SE" onChange={setDate} value={date} />
            )}
            <Flex
                width={"60%"}
                maxWidth={500}
                flexDir={"column"}
                gap={"30px"}
                alignItems={"center"}
            >
                {filteredEvents.length != 0 && (
                    <Accordion width={"100%"} allowToggle>
                        <AccordionItem>
                            <h2>
                                <AccordionButton>
                                    <Box flex="1" textAlign="center">
                                        Visa gamla event
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {filteredEvents
                                    .filter(
                                        (ev) => new Date(ev.when) < new Date()
                                    )
                                    .map((event, idx) => {
                                        return (
                                            <EventCard
                                                fetchEvents={fetchEvents}
                                                onClick={() => {
                                                    onSelectEvent(event);
                                                }}
                                                onEdit={() => {
                                                    onSelectEditEvent(event);
                                                }}
                                                key={idx}
                                                event={event}
                                            />
                                        );
                                    })}
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                )}
                {filteredEvents.length != 0 &&
                    filteredEvents
                        .filter((ev) => new Date(ev.when) >= new Date())
                        .map((event, idx) => {
                            return (
                                <EventCard
                                    fetchEvents={fetchEvents}
                                    onClick={() => {
                                        onSelectEvent(event);
                                    }}
                                    onEdit={() => {
                                        onSelectEditEvent(event);
                                    }}
                                    key={idx}
                                    event={event}
                                />
                            );
                        })}
            </Flex>
        </Flex>
    );
};

export default ViewEvents;
