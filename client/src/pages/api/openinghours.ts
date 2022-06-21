// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";
import { profile } from "console";
import type { NextApiRequest, NextApiResponse } from "next";
import { BlogPost, OpeningHours } from "../../../utils/types";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Get a cookie

    if (req.method !== "GET") {
        res.status(400).json({ message: "Bad request" });
        return;
    }

    const { data } = await axios.get(
        `${process.env.STRAPI_API_BASE_URL}/api/chatten?populate=*`,
        {
            headers: {
                Authorization: `Bearer ${process.env.STRAPI_SERVICE_ACCOUNT_JWT}`,
            },
        }
    );

    const openingHours: OpeningHours = {
        open_time: data.data.attributes.open_time,
        close_time: data.data.attributes.close_time,
    };

    res.status(200).json({
        open_time: openingHours.open_time,
        close_time: openingHours.close_time,
    });
}
