import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { FaCalendar, FaListUl } from "react-icons/fa";
import { useData } from "../../../../utils/fetchData";
import { Event, EventData } from "../../../../utils/types";
import EventCard from "./EventCard";

const ViewEvents: React.FC = () => {
	// Grab all the events
	const { data, error } = useData<EventData>("events");
	const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
	const fontSize = useBreakpointValue({ base: "20", md: "30", sm: "25" });
	const [doCalendarView, setDoCalendarView] = useState(false);
	const [date, setDate] = useState(new Date());

	useEffect(() => {
		if (!data) return;

		// data.events.sort

		// Filter to only take events from certain date or not?
		if (!doCalendarView) {
			setFilteredEvents(data.events);
		} else {
			// Filter and only grab the events from currently selected date
			setFilteredEvents(
				data.events.filter((event) => {
					return (
						new Date(event.when).toLocaleDateString() ==
						date.toLocaleDateString()
					);
				})
			);
		}
	}, [data, doCalendarView, date]);

	const enabledColor = "#00CCEE";
	const disabledColor = "gray";

	const calendarViewColor = doCalendarView ? enabledColor : disabledColor;
	const allEventsColor = !doCalendarView ? enabledColor : disabledColor;

	return (
		<Flex flexDir={"column"} alignItems={"center"} gap={"20px"}>
			{/* Top selector menu */}
			<Flex
				justifyContent={"center"}
				alignItems={"center"}
				cursor={"pointer"}
				onClick={() => setDoCalendarView(!doCalendarView)}
			>
				{/* Calendar view */}
				<FaCalendar
					color={calendarViewColor}
					style={{ marginRight: "10px" }}
				/>
				<Text fontSize={fontSize} color={calendarViewColor}>
					Kalendervy
				</Text>
				<Text fontSize={fontSize} color={"turquoise"} px={"20px"}>
					|
				</Text>
				{/* All events */}
				<FaListUl
					color={allEventsColor}
					style={{ marginRight: "10px" }}
				/>
				<Text fontSize={fontSize} color={allEventsColor}>
					Alla event
				</Text>
			</Flex>
			<Calendar locale="sv-SE" onChange={setDate} value={date} />
			<Flex
				width={"80%"}
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
