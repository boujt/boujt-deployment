import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { Event, EventData } from "../../../utils/types";

// Get all events
export default async (req: NextApiRequest, res: NextApiResponse<EventData>) => {
    // Get external links
    const {data} = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/events`

    );

    // Convert
    const processed = (data.data as Array<any>).map(obj => obj.attributes) as Array<Event>;

    res.status(200).json({
        events: processed
    });
}