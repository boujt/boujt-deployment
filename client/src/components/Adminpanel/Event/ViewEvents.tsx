import {
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
import { Event, EventData } from "../../../../utils/types";
import EventCard from "./EventCard";

const ViewEvents: React.FC = () => {
    // Grab all the events
    // const { data, error } = useData<EventData>("events");
    const [allEvents, setAllEvents] = useState<Event[]>([]);
    const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
    const fontSize = useBreakpointValue({ base: "20", md: "30", sm: "25" });
    const [doCalendarView, setDoCalendarView] = useState(false);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/events")
            .then((res) => {
                const temp_allEvents: Event[] = res.data.data.map((ev) => {
                    const event: Event = {
                        title: ev.attributes.title,
                        text: ev.attributes.text,
                        when: ev.attributes.when,
                        whole_day: ev.attributes.whole_day,
                    };
                    if (
                        !event.whole_day &&
                        ev.attributes.start &&
                        ev.attributes.end
                    ) {
                        event.end = ev.attributes.end;
                        event.start = ev.attributes.start;
                    }
                    return event;
                });
                setAllEvents(temp_allEvents);
            })
            .catch((er) => {
                console.error(er);
            });
    }, []);

    useEffect(() => {
        // if (!data) return;

        // data.events.sort

        // Filter to only take events from certain date or not?
        if (!doCalendarView) {
            setFilteredEvents(allEvents);
        } else {
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

    console.log(allEvents);

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
                {filteredEvents.length != 0 &&
                    filteredEvents.map((event, idx) => {
                        return <EventCard key={idx} event={event} />;
                    })}
            </Flex>
        </Flex>
    );
};

export default ViewEvents;
